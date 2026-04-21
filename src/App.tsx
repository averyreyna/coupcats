import { useRef, useState, useCallback, useMemo, useEffect } from "react";
import { css } from "styled-system/css";
import { Map, Source, Layer, Popup, type MapRef } from "@vis.gl/react-maplibre";
import type {
  FillLayerSpecification,
  MapLayerMouseEvent,
} from "maplibre-gl";
import PredictionPanel from "./components/PredictionPanel";
import EventPopup from "./components/EventPopup";
import MapLegend from "./components/MapLegend";
import EventsHeatmapLegend from "./components/EventsHeatmapLegend";
import Layout from "./components/Layout";
import { useFilterStore } from "./store/useFilterStore";
import { PREDICTION_NULL_COLOR } from "./lib/colors";
import {
  getAllCoupEvents,
  buildPredictionProbMap,
  COW_TO_ADMIN_ALIASES,
} from "./lib/coupData";
import { buildYhatPredictionProbMap } from "./lib/yhatPredictions";
import { computeRiskThresholds, getRiskBucketBounds } from "./lib/riskBuckets";
import { getDataLookupName, getCoHighlightNames } from "./lib/countryNameMapping";
import { buildEventCountChoropleth, getMaxEventCount } from "./lib/riskColors";
import { filterEvents } from "./lib/filterHelpers";
import { useMapHover } from "./hooks/useMapHover";
import { useEscapeToClearSelection } from "./hooks/useEscapeToClearSelection";
import { useClearSelectionOnMapClick } from "./hooks/useClearSelectionOnMapClick";
import currentYhatData from "./data/current_yhat.json";
import {
  DEFAULT_PREDICTIVE_SLIDERS,
  type CoupEvent,
  type CoupPrediction,
  type PredictiveMode,
  type PredictiveSliderKey,
  type PredictiveSliderPercents,
} from "./types/coup";

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";


function buildCountryHeatmapLayerStyle(
  moderateMin: number,
  elevatedMin: number,
  highMin: number,
): Omit<FillLayerSpecification, "source"> {
  const safeModerate = Math.max(moderateMin, 0);
  const safeElevated = Math.max(elevatedMin, safeModerate + 0.000001);
  const safeHigh = Math.max(highMin, safeElevated + 0.000001);

  return {
    id: "country-risk-fill",
    type: "fill",
    paint: {
      "fill-color": [
        "case",
        ["==", ["get", "yhat"], null as unknown as string],
        PREDICTION_NULL_COLOR,
        [
          // interpolate produces a smooth continuous gradient.
          // yhat = 0 is valid very low risk and maps to green, not gray.
          "interpolate",
          ["linear"],
          ["get", "yhat"],
          0,            "#22c55e",
          safeModerate, "#86efac",
          safeElevated, "#eab308",
          safeHigh,     "#ef4444",
        ],
      ],
      "fill-opacity": 0.75,
    },
  };
}

function num(value: unknown, fallback = 0): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function normalizeCountryKey(value: string | null | undefined): string {
  if (!value) return "";
  const baseKey = value.toLowerCase().trim();
  return COW_TO_ADMIN_ALIASES[baseKey] ?? baseKey;
}

function getPredictionValue(
  row: Partial<CoupPrediction> & { yhat?: unknown },
): number | null {
  const prob =
    typeof row.yhat === "number" && Number.isFinite(row.yhat)
      ? row.yhat
      : null;
  if (prob != null) return prob;

  const yhat =
    typeof row.yhat === "number" && Number.isFinite(row.yhat)
      ? row.yhat
      : null;
  if (yhat != null) return yhat;

  return null;
}

function computeScenarioProbability(
  original: CoupPrediction,
  sliderPercents: PredictiveSliderPercents,
): number {
  const trade_glob     = num(original.trade_glob)     * (num(sliderPercents.trade_glob,     100) / 100);
  const ch_gdppc       = num(original.ch_gdppc)       * (num(sliderPercents.ch_gdppc,       100) / 100);
  const polyarchy      = num(original.polyarchy)      * (num(sliderPercents.polyarchy,      100) / 100);
  const wom_polpart    = num(original.wom_polpart)    * (num(sliderPercents.wom_polpart,    100) / 100);
  const milreg_prop    = num(original.milreg_prop)    * (num(sliderPercents.milreg_prop,    100) / 100);
  const milper_spliced = num(original.milper_spliced) * (num(sliderPercents.milper_spliced, 100) / 100);

  // Non-slider terms stay at their original values
  const cold           = num(original.cold);
  const pce            = num(original.pce);
  const pce2           = num(original.pce2);
  const pce3           = num(original.pce3);
  const signal         = num(original.signal);
  const mobilization   = num(original.mobilization);
  const numleaders_10y = num(original.numleaders_10yr);
  const mutiny6        = num(original.mutiny6);

  const intercept = 1.387e-2;  // your new intercept

  const x =
    intercept +
    -2.022e-3 * trade_glob +
    -3.455e-1 * ch_gdppc +
    -1.771e-3 * polyarchy +
    -2.210e-3 * wom_polpart +
     1.921e-3 * milreg_prop +
    -1.289e-3 * milper_spliced +
     1.641e-3 * cold +
    -6.118e-5 * pce +
     1.288e-7 * pce2 +
    -8.026e-11* pce3 +
    -2.464e-3 * signal +
     7.844e-4 * mobilization +
     2.459e-4 * numleaders_10y +
     9.384e-3 * mutiny6;
     
  return x;
}

function computeAtLeastOneCoupWithinMonths(
  monthlyProbability: number,
  months: number,
): number {
  const p = Math.max(0, Math.min(1, monthlyProbability));
  return 1 - Math.pow(1 - p, months);
}

type DisplayedPrediction = CoupPrediction & {
  yhat?: number | null;
  monthsAhead?: number;
  rendered_prediction_prob: number | null;
  rendered_months_prob: number;
};

export default function App() {
  const mapRef = useRef<MapRef>(null);
  const prevSelectedGeoNames = useRef<string[]>([]);
  const hoveredCountryId = useRef<string | number | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [countriesGeoJSON, setCountriesGeoJSON] = useState<any>(null);
  const [selectedRiskCountry, setSelectedRiskCountry] = useState<string | null>(null);
  const [monthsAhead, setMonthsAhead] = useState<1 | 2 | 3>(1);

  const allEvents = useMemo(() => getAllCoupEvents(), []);
  const yearRange = useFilterStore((s) => s.yearRange);
  const viewMode = useFilterStore((s) => s.viewMode);
  const searchQuery = useFilterStore((s) => s.searchQuery);
  const selectedOutcomes = useFilterStore((s) => s.selectedOutcomes);
  const selectedRegions = useFilterStore((s) => s.selectedRegions);
  const selectedTags = useFilterStore((s) => s.selectedTags);

  const selectedEvent = useFilterStore((s) => s.selectedEvent);
  const setSelectedEvent = useFilterStore((s) => s.setSelectedEvent);
  //const selectedCountry = useFilterStore((s) => s.selectedCountry);
  const setSelectedCountry = useFilterStore((s) => s.setSelectedCountry);
  const selectedGeoNames = useFilterStore((s) => s.selectedGeoNames);
  const setSelectedGeoNames = useFilterStore((s) => s.setSelectedGeoNames);

  const filteredEvents = useMemo(() => {
    return filterEvents(allEvents, {
      searchQuery,
      selectedOutcomes,
      selectedRegions,
      selectedTags,
      dateRange: yearRange,
    });
  }, [allEvents, yearRange, searchQuery, selectedOutcomes, selectedRegions, selectedTags]);

  const [predictiveEnabled, setPredictiveEnabled] = useState(false);
  const [predictiveMode, setPredictiveMode] =
    useState<PredictiveMode>("scenario");
  const [futureMonths, setFutureMonths] = useState(3);
  const [predictiveSliderPercents, setPredictiveSliderPercents] = useState(
    DEFAULT_PREDICTIVE_SLIDERS,
  );

  const handlePredictiveSliderChange = useCallback(
    (key: PredictiveSliderKey, value: number) => {
      setPredictiveSliderPercents((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    [],
  );

  const resetPredictiveMode = useCallback(() => {
    setPredictiveEnabled(false);
    setPredictiveMode("scenario");
    setFutureMonths(3);
    setPredictiveSliderPercents(DEFAULT_PREDICTIVE_SLIDERS);
  }, []);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson",
    )
      .then((res) => res.json())
      .then((data) => setCountriesGeoJSON(data))
      .catch((err) => console.error("Failed to load countries GeoJSON:", err));
  }, []);

  const [riskPredictions, setRiskPredictions] = useState<CoupPrediction[]>([]);
  const [forecastPredictions, setForecastPredictions] = useState<CoupPrediction[]>([]);

  // CHANGED: was fetching from GitHub (recent_data.json) which uses old field names and has no yhat.
  // Now reads current_yhat.json directly, which is the new-format data with yhat.
  useEffect(() => {
    const rows = (currentYhatData as unknown as CoupPrediction[]).filter(
      (item) => typeof item.yhat === "number" && isFinite(item.yhat),
    );
    setRiskPredictions(rows);
  }, []);

  useEffect(() => {
    const rows = (currentYhatData as unknown as Array<CoupPrediction & { yhat?: number }>).map(
      (item) => {
        const p = Number(item.yhat);
        const baseYhat = Number.isFinite(p) ? p : 0;
        const cumulative = 1 - Math.pow(1 - baseYhat, monthsAhead);

        return {
          ...item,
          monthsAhead,
          yhat: cumulative,
          // REMOVED: prediction_prob: cumulative — CoupPrediction no longer has this field; yhat is the canonical value
        };
      },
    );

    setForecastPredictions(rows);
  }, [monthsAhead]);

  const selectedRiskCountryKey = useMemo(
    () => normalizeCountryKey(getDataLookupName(selectedRiskCountry ?? "")),
    [selectedRiskCountry],
  );

  const displayedRiskPredictionData = useMemo<DisplayedPrediction[]>(() => {
    if (riskPredictions.length === 0) return [];

    return riskPredictions.map((row) => {
      const baseMonthly = row.yhat ?? 0;
      const rowKey = normalizeCountryKey(row.country);
      const isSelectedCountry =
        selectedRiskCountryKey.length > 0 && rowKey === selectedRiskCountryKey;

      if (!predictiveEnabled) {
        return {
          ...row,
          rendered_prediction_prob: row.yhat ?? null,
          rendered_months_prob: computeAtLeastOneCoupWithinMonths(
            baseMonthly,
            futureMonths,
          ),
        };
      }

      if (predictiveMode === "scenario" && isSelectedCountry) {
        try {
          const scenarioProbability = computeScenarioProbability(
            row as unknown as CoupPrediction,
            predictiveSliderPercents,
          );

          return {
            ...row,
            // REMOVED: prediction_prob: scenarioProbability — not a field on CoupPrediction; rendered_prediction_prob carries the display value
            rendered_prediction_prob: scenarioProbability,
            rendered_months_prob: computeAtLeastOneCoupWithinMonths(
              scenarioProbability,
              futureMonths,
            ),
          };
        } catch (error) {
          console.error("Scenario prediction failed:", row.country, error);
        }
      }

      return {
        ...row,
        rendered_prediction_prob: row.yhat ?? null,
        rendered_months_prob: computeAtLeastOneCoupWithinMonths(
          baseMonthly,
          futureMonths,
        ),
      };
    });
  }, [
    riskPredictions,
    predictiveEnabled,
    predictiveMode,
    predictiveSliderPercents,
    futureMonths,
    selectedRiskCountryKey,
  ]);

  const displayedForecastPredictionData = useMemo<DisplayedPrediction[]>(() => {
    return forecastPredictions.map((row) => {
      const forecastProb = getPredictionValue(row) ?? 0;

      return {
        ...row,
        // REMOVED: prediction_prob: forecastProb — not a field on CoupPrediction; yhat and rendered_prediction_prob carry this value
        rendered_prediction_prob: forecastProb,
        rendered_months_prob: forecastProb,
      };
    });
  }, [forecastPredictions]);

  const selectedPrediction = useMemo<DisplayedPrediction | null>(() => {
    if (!selectedRiskCountryKey) return null;

    const source =
      viewMode === "forecast"
        ? displayedForecastPredictionData
        : displayedRiskPredictionData;

    const match = source.find(
      (row) => normalizeCountryKey(row.country) === selectedRiskCountryKey,
    );

    return match ?? null;
  }, [
    selectedRiskCountryKey,
    viewMode,
    displayedForecastPredictionData,
    displayedRiskPredictionData,
  ]);

  const riskCountriesGeoJSON = useMemo(() => {
    if (!countriesGeoJSON || displayedRiskPredictionData.length === 0) return null;

    // CHANGED: was mapping rows to add prediction_prob — buildPredictionProbMap now reads yhat directly, so no remapping needed
    const probMap = buildPredictionProbMap(displayedRiskPredictionData);

    return {
      ...countriesGeoJSON,
      features: countriesGeoJSON.features.map((f: any) => {
        const admin = (f.properties?.ADMIN ?? "").toLowerCase().trim();
        const name = (f.properties?.name ?? "").toLowerCase().trim();
        const prob = probMap.get(admin) ?? probMap.get(name) ?? null;

        return {
          ...f,
          properties: {
            ...f.properties,
            // CHANGED: was prediction_prob — renamed to yhat to match the map layer expression
            yhat: prob,
          },
        };
      }),
    };
  }, [countriesGeoJSON, displayedRiskPredictionData]);

  const forecastCountriesGeoJSON = useMemo(() => {
    if (!countriesGeoJSON || forecastPredictions.length === 0) return null;

    const probMap = buildYhatPredictionProbMap(forecastPredictions);

    return {
      ...countriesGeoJSON,
      features: countriesGeoJSON.features.map((f: any) => {
        const admin = (f.properties?.ADMIN ?? "").toLowerCase().trim();
        const name = (f.properties?.name ?? "").toLowerCase().trim();

        let prob = probMap.get(admin) ?? probMap.get(name) ?? null;

        if (prob == null) {
          const matchedPrediction = forecastPredictions.find((p) => {
            const key =
              COW_TO_ADMIN_ALIASES[p.country.toLowerCase().trim()] ??
              p.country.toLowerCase().trim();

            return key === admin || key === name;
          });

          prob = getPredictionValue(matchedPrediction ?? {}) ?? null;
        }

        return {
          ...f,
          properties: {
            ...f.properties,
            // CHANGED: was prediction_prob — renamed to yhat to match the map layer expression
            yhat: prob,
          },
        };
      }),
    };
  }, [countriesGeoJSON, forecastPredictions]);

  const activeThresholdRows = useMemo(() => {
    const source =
      viewMode === "forecast"
        ? displayedForecastPredictionData
        : displayedRiskPredictionData;

    // REMOVED: was spreading prediction_prob: row.rendered_prediction_prob — riskBuckets now reads yhat, which is already on ...row
    return source.map((row) => ({ ...row }));
  }, [viewMode, displayedForecastPredictionData, displayedRiskPredictionData]);

  const riskThresholds = useMemo(
    () => computeRiskThresholds(activeThresholdRows),
    [activeThresholdRows],
  );

  const riskBucketBounds = useMemo(
    () => getRiskBucketBounds(riskThresholds),
    [riskThresholds],
  );

  const countryHeatmapLayerStyle = useMemo(
    () =>
      buildCountryHeatmapLayerStyle(
        riskThresholds.moderateMin,
        riskThresholds.elevatedMin,
        riskThresholds.highMin,
      ),
    [riskThresholds],
  );

  // Sync selected country outlines to map feature state
  useEffect(() => {
    const map = mapRef.current?.getMap();
    if (!map || !mapLoaded) return;
    for (const name of prevSelectedGeoNames.current)
      map.setFeatureState({ source: "countries", id: name }, { selected: false });
    for (const name of selectedGeoNames)
      map.setFeatureState({ source: "countries", id: name }, { selected: true });
    prevSelectedGeoNames.current = selectedGeoNames;
  }, [selectedGeoNames, mapLoaded]);

  const eventChoroplethFillColor = useMemo(() => {
    if (viewMode !== "events") return null;
    return buildEventCountChoropleth(filteredEvents);
  }, [viewMode, filteredEvents]);

  const eventMaxCount = useMemo(() => {
    if (viewMode !== "events") return 0;
    return getMaxEventCount(filteredEvents);
  }, [viewMode, filteredEvents]);

  useEffect(() => {
    if (viewMode === "events") {
      setSelectedRiskCountry(null);
    } else {
      setSelectedEvent(null);
      setSelectedCountry(null);
    }
    setSelectedGeoNames([]);
  }, [viewMode, setSelectedEvent, setSelectedCountry, setSelectedGeoNames]);

  const { onMouseEnter, onMouseLeave } = useMapHover({
    mapRef,
    sourceId: "coups",
  });

  // Track hovered country via onMouseMove so hover outline updates between adjacent polygons
  const onMouseMove = useCallback(
    (e: MapLayerMouseEvent) => {
      const map = mapRef.current?.getMap();
      if (!map) return;

      const countryFeature = e.features?.find((f) => f.layer?.id === "countries-fill");
      const newId = countryFeature?.id ?? null;

      if (newId === hoveredCountryId.current) return;

      if (hoveredCountryId.current != null)
        map.setFeatureState({ source: "countries", id: hoveredCountryId.current }, { hover: false });

      if (newId != null) {
        map.setFeatureState({ source: "countries", id: newId }, { hover: true });
        map.getCanvas().style.cursor = "pointer";
      }

      hoveredCountryId.current = newId;
    },
    [mapRef],
  );

  const onMapMouseLeave = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (map && hoveredCountryId.current != null) {
      map.setFeatureState({ source: "countries", id: hoveredCountryId.current }, { hover: false });
      hoveredCountryId.current = null;
    }
    onMouseLeave();
  }, [mapRef, onMouseLeave]);

  const onClick = useCallback(
    (e: MapLayerMouseEvent) => {
      const coupFeature = e.features?.find((f) => f.layer?.id === "coup-circles");
      if (coupFeature) {
        const event = coupFeature.properties as CoupEvent;
        setSelectedEvent(event);
        setSelectedCountry(event.country);
        setSelectedRiskCountry(null);
        return;
      }

      const countryFeature = e.features?.find((f) => f.layer?.id === "countries-fill");
      if (countryFeature) {
        const countryName =
          countryFeature.properties?.ADMIN || countryFeature.properties?.name;
        if (countryName) {
          setSelectedCountry(countryName);
          setSelectedEvent(null);
          setSelectedRiskCountry(null);
          setSelectedGeoNames([countryName, ...getCoHighlightNames(countryName)]);
          return;
        }
      }

      if (countriesGeoJSON && countriesGeoJSON.features) {
        let nearestCountry: string | null = null;
        let minDistance = Infinity;

        for (const feature of countriesGeoJSON.features) {
          const countryName =
            feature.properties?.ADMIN || feature.properties?.name;
          if (!countryName) continue;

          const geometry = feature.geometry;
          if (!geometry) continue;

          let coords: any[] = [];

          if (geometry.type === "Polygon" && geometry.coordinates[0]) {
            coords = geometry.coordinates[0];
          } else if (geometry.type === "MultiPolygon") {
            if (geometry.coordinates[0]?.[0]) {
              coords = geometry.coordinates[0][0];
            }
          }

          if (coords.length > 0) {
            const centroidLng =
              coords.reduce((sum: number, c: any) => sum + c[0], 0) /
              coords.length;
            const centroidLat =
              coords.reduce((sum: number, c: any) => sum + c[1], 0) /
              coords.length;

            const dx = centroidLng - e.lngLat.lng;
            const dy = centroidLat - e.lngLat.lat;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < minDistance) {
              minDistance = distance;
              nearestCountry = countryName;
            }
          }
        }

        if (nearestCountry && minDistance < 15) {
          if (viewMode === "events") {
            setSelectedCountry(nearestCountry);
            setSelectedRiskCountry(null);
          } else {
            setSelectedRiskCountry(nearestCountry);
            setSelectedCountry(null);
          }
          setSelectedGeoNames([nearestCountry, ...getCoHighlightNames(nearestCountry)]);
          setSelectedEvent(null);
          return;
        }
      }

      setSelectedEvent(null);
      setSelectedCountry(null);
      setSelectedRiskCountry(null);
      setSelectedGeoNames([]);
    },
    [setSelectedEvent, setSelectedCountry, setSelectedGeoNames, countriesGeoJSON, viewMode],
  );

  useClearSelectionOnMapClick({
    mapRef,
    layerIds: [],
    setSelectedEvent,
  });

  useEscapeToClearSelection(setSelectedEvent);

  return (
    <Layout mapRef={mapRef} allEvents={allEvents}>
      <div className={css({ position: "relative", height: "full", width: "full" })}>
        {!mapLoaded && (
          <div
            className={css({
              position: "absolute",
              inset: "0",
              zIndex: "20",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--colors-bg-app)",
            })}
          >
            <div
              className={css({
                height: "8",
                width: "8",
                borderRadius: "full",
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "var(--colors-border-default)",
                borderTopColor: "var(--colors-accent-default)",
              })}
              style={{ animation: "spin 1s linear infinite" }}
            />
          </div>
        )}

        {viewMode === "forecast" && (
          <div
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 10,
              background: "white",
              padding: "8px",
              borderRadius: "6px",
            }}
          >
            <label style={{ marginRight: "8px" }}>Forecast:</label>
            <select
              value={monthsAhead}
              onChange={(e) =>
                setMonthsAhead(Number(e.target.value) as 1 | 2 | 3)
              }
            >
              <option value={1}>1 month ahead</option>
              <option value={2}>2 months ahead</option>
              <option value={3}>3 months ahead</option>
            </select>
          </div>
        )}

        <Map
          ref={mapRef}
          initialViewState={{ longitude: 20, latitude: 15, zoom: 2 }}
          mapStyle={MAP_STYLE}
          interactiveLayerIds={
            viewMode === "events"
              ? ["countries-fill"]
              : ["country-risk-fill", "countries-fill"]
          }
          onMouseEnter={onMouseEnter}
          onMouseMove={onMouseMove}
          onMouseLeave={onMapMouseLeave}
          onClick={(e) => {
            const features = e.features ?? [];

            if (
              features.some((f) => f.layer?.id === "coup-circles") ||
              (viewMode === "events" && features.some((f) => f.layer?.id === "countries-fill"))
            ) {
              onClick(e);
            } else if (features.some((f) => f.layer?.id === "country-risk-fill")) {
              const f = features.find((item) => item.layer?.id === "country-risk-fill");
              const adminName = f?.properties?.ADMIN ?? null;
              const geoName = f?.properties?.name ?? null;
              const countryName = adminName ?? geoName;
              const geoNames = [...new Set([adminName, geoName].filter(Boolean) as string[])];

              setSelectedEvent(null);
              setSelectedCountry(null);
              setSelectedRiskCountry(countryName);
              setSelectedGeoNames(countryName ? [...geoNames, ...getCoHighlightNames(countryName)] : []);
            } else {
              setSelectedEvent(null);
              setSelectedCountry(null);
              setSelectedRiskCountry(null);
              setSelectedGeoNames([]);
            }
          }}
          onLoad={() => setMapLoaded(true)}
        >
          {countriesGeoJSON && (
            <Source id="countries" type="geojson" data={countriesGeoJSON} promoteId="name">
              <Layer
                id="countries-fill"
                type="fill"
                beforeId="waterway_label"
                paint={{
                  "fill-color": (viewMode === "events" && eventChoroplethFillColor
                    ? eventChoroplethFillColor
                    : "rgba(0,0,0,0)") as any,
                  "fill-opacity": viewMode === "events" && eventChoroplethFillColor ? 0.65 : 0,
                }}
              />
              <Layer
                id="countries-outline"
                type="line"
                beforeId="waterway_label"
                paint={{ "line-color": "#ffffff", "line-width": 0.5 }}
              />
              <Layer
                id="countries-hover-outline"
                type="line"
                paint={{
                  "line-color": "#ffffff",
                  "line-width": [
                    "case",
                    ["boolean", ["feature-state", "hover"], false],
                    2.5,
                    0,
                  ] as any,
                }}
              />
              <Layer
                id="countries-selected-outline"
                type="line"
                paint={{
                  "line-color": "#000000",
                  "line-width": [
                    "case",
                    ["boolean", ["feature-state", "selected"], false],
                    3,
                    0,
                  ] as any,
                }}
              />
            </Source>
          )}

          {viewMode === "risk" && riskCountriesGeoJSON && (
            <Source id="country-risk" type="geojson" data={riskCountriesGeoJSON}>
              <Layer {...countryHeatmapLayerStyle} beforeId="waterway_label" />
            </Source>
          )}

          {viewMode === "forecast" && forecastCountriesGeoJSON && (
            <Source
              id="country-risk"
              type="geojson"
              data={forecastCountriesGeoJSON}
            >
              <Layer {...countryHeatmapLayerStyle} beforeId="waterway_label" />
            </Source>
          )}

          {selectedEvent && (
            <Popup
              longitude={selectedEvent.longitude}
              latitude={selectedEvent.latitude}
              onClose={() => setSelectedEvent(null)}
              closeButton
              closeOnClick={false}
            >
              <EventPopup event={selectedEvent} />
            </Popup>
          )}
        </Map>

        <PredictionPanel
          prediction={selectedPrediction}
          allPredictions={riskPredictions}
          riskThresholds={riskThresholds}
          onClose={() => { setSelectedRiskCountry(null); setSelectedGeoNames([]); }}
          predictiveEnabled={predictiveEnabled}
          setPredictiveEnabled={setPredictiveEnabled}
          mode={predictiveMode}
          setMode={setPredictiveMode}
          sliderPercents={predictiveSliderPercents}
          onSliderChange={handlePredictiveSliderChange}
          futureMonths={futureMonths}
          setFutureMonths={setFutureMonths}
          onReset={resetPredictiveMode}
          showPredictiveControls={viewMode === "risk"}
          monthsLabel={viewMode === "forecast" ? monthsAhead : futureMonths}
        />

        {viewMode === "events"
          ? <EventsHeatmapLegend maxCount={eventMaxCount} />
          : <MapLegend riskBucketBounds={riskBucketBounds} />}
      </div>
    </Layout>
  );
}