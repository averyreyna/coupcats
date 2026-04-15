import { useRef, useState, useCallback, useMemo, useEffect } from "react";
import { css } from "styled-system/css";
import { Map, Source, Layer, Popup, type MapRef } from "@vis.gl/react-maplibre";
import type {
  CircleLayerSpecification,
  FillLayerSpecification,
  MapLayerMouseEvent,
} from "maplibre-gl";
import { type CoupEvent, type CoupPrediction } from "./types/coup";
import PredictionPanel from "./components/PredictionPanel"
import EventPopup from "./components/EventPopup";
import MapLegend from "./components/MapLegend";
import Layout from "./components/Layout";
import { useFilterStore } from "./store/useFilterStore";
import { OUTCOME_COLORS, PREDICTION_NULL_COLOR } from "./lib/colors";
import { getCoupsFeatureCollection, getAllCoupEvents, getPredictionFeatureCollection, buildPredictionProbMap, COW_TO_ADMIN_ALIASES } from "./lib/coupData";
import { buildMapFilterExpression } from "./lib/filterHelpers";
import { useMapHover } from "./hooks/useMapHover";
import { useEscapeToClearSelection } from "./hooks/useEscapeToClearSelection";
import { useClearSelectionOnMapClick } from "./hooks/useClearSelectionOnMapClick";

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

// maplibre expressions: radius by feature-state hover, color by outcome property
const circleLayerPaint: CircleLayerSpecification["paint"] = {
  "circle-radius": [
    "case",
    ["boolean", ["feature-state", "hover"], false],
    14,
    10,
  ],
  "circle-color": [
    "match",
    ["get", "outcome"],
    "successful",
    OUTCOME_COLORS.successful,
    "failed",
    OUTCOME_COLORS.failed,
    "attempted",
    OUTCOME_COLORS.attempted,
    "plot",
    OUTCOME_COLORS.plot,
    "alleged",
    OUTCOME_COLORS.alleged,
    OUTCOME_COLORS.alleged,
  ],
  "circle-stroke-width": 2,
  "circle-stroke-color": "#FFFFFF",
  "circle-opacity": 1,
};


const countryHeatmapLayerStyle: Omit<FillLayerSpecification, "source"> = {
  id: "country-risk-fill",
  type: "fill",
  paint: {
    "fill-color": [
      "case",
      ["==", ["get", "prediction_prob"], null as unknown as string],
      PREDICTION_NULL_COLOR,
      [
        "interpolate",
        ["linear"],
        ["get", "prediction_prob"],
        0,    "#22c55e",
        0.05, "#eab308",
        0.15, "#f97316",
        0.30, "#ef4444",
      ],
    ],
    "fill-opacity": 0.65,
  },
};

export default function App() {
  const mapRef = useRef<MapRef>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [countriesGeoJSON, setCountriesGeoJSON] = useState<any>(null);

  const allEvents = useMemo(() => getAllCoupEvents(), []);
  const yearRange = useFilterStore((s) => s.yearRange);
  const viewMode = useFilterStore((s) => s.viewMode);

  const filteredEvents = useMemo(() => {
    return allEvents.filter((event) => {
      return event.year >= yearRange[0] && event.year <= yearRange[1];
    });
  }, [allEvents, yearRange]);

  // Load countries GeoJSON on mount
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson"
    )
      .then((res) => res.json())
      .then((data) => setCountriesGeoJSON(data))
      .catch((err) => console.error("Failed to load countries GeoJSON:", err));
  }, []);

  const [allPredictions, setAllPredictions] = useState<CoupPrediction[]>([]);
  const [selectedPrediction, setSelectedPrediction] = useState<CoupPrediction | null>(null);

  useEffect(() => {
    getPredictionFeatureCollection()
      .then((fc) => {
        setAllPredictions((fc.features ?? []).map((f) => f.properties));
      })
      .catch((err) => console.error("Failed to load predictions:", err));
  }, []);

  // Enrich countries GeoJSON with prediction_prob for the heatmap fill layer
  const enrichedCountriesGeoJSON = useMemo(() => {
    if (!countriesGeoJSON || allPredictions.length === 0) return null;
    const probMap = buildPredictionProbMap(allPredictions);
    return {
      ...countriesGeoJSON,
      features: countriesGeoJSON.features.map((f: any) => {
        const admin = (f.properties?.ADMIN ?? "").toLowerCase().trim();
        const name  = (f.properties?.name  ?? "").toLowerCase().trim();
        const prob  = probMap.get(admin) ?? probMap.get(name) ?? null;
        return { ...f, properties: { ...f.properties, prediction_prob: prob } };
      }),
    };
  }, [countriesGeoJSON, allPredictions]);

  const selectedEvent = useFilterStore((s) => s.selectedEvent);
  const setSelectedEvent = useFilterStore((s) => s.setSelectedEvent);
  const setSelectedCountry = useFilterStore((s) => s.setSelectedCountry);
  const searchQuery = useFilterStore((s) => s.searchQuery);
  const selectedOutcomes = useFilterStore((s) => s.selectedOutcomes);
  const selectedRegions = useFilterStore((s) => s.selectedRegions);
  const dateRange = useFilterStore((s) => s.dateRange);
  const selectedTags = useFilterStore((s) => s.selectedTags);

  // Clear cross-mode selections when switching views
  useEffect(() => {
    if (viewMode !== "events") setSelectedEvent(null);
    else setSelectedPrediction(null);
  }, [viewMode]); // eslint-disable-line react-hooks/exhaustive-deps

  // Build filter expression based on current filter state
  const filterExpression = useMemo(
    () =>
      buildMapFilterExpression(
        {
          searchQuery,
          selectedOutcomes,
          selectedRegions,
          dateRange,
          selectedTags,
        },
        allEvents,
      ),
    [
      searchQuery,
      selectedOutcomes,
      selectedRegions,
      dateRange,
      selectedTags,
      allEvents,
    ],
  );

  const circleLayerStyle: CircleLayerSpecification = {
    id: "coup-circles",
    type: "circle",
    source: "coups",
    paint: circleLayerPaint,
    filter: filterExpression,
  };

  const { onMouseEnter, onMouseLeave } = useMapHover({
    mapRef,
    sourceId: "coups",
  });

  const onClick = useCallback(
    (e: MapLayerMouseEvent) => {
      // Prioritize coup circles over countries
      const coupFeature = e.features?.find(f => f.layer?.id === "coup-circles");
      if (coupFeature) {
        const event = coupFeature.properties as CoupEvent;
        setSelectedEvent(event);
        setSelectedCountry(event.country);
        return;
      }

      // Check if clicking on a country
      const countryFeature = e.features?.find(f => f.layer?.id === "countries-fill");
      if (countryFeature) {
        const countryName = countryFeature.properties?.ADMIN || countryFeature.properties?.name;
        if (countryName) {
          setSelectedCountry(countryName);
          setSelectedEvent(null);
          return;
        }
      }

      // Check if clicking on a country (fallback manual calculation)
      if (countriesGeoJSON && countriesGeoJSON.features) {
        let nearestCountry: string | null = null;
        let minDistance = Infinity;

        for (const feature of countriesGeoJSON.features) {
          const countryName = feature.properties?.ADMIN || feature.properties?.name;
          if (!countryName) continue;

          const geometry = feature.geometry;
          if (!geometry) continue;

          let coords: any[] = [];

          // Handle both Polygon and MultiPolygon
          if (geometry.type === "Polygon" && geometry.coordinates[0]) {
            coords = geometry.coordinates[0];
          } else if (geometry.type === "MultiPolygon") {
            // For MultiPolygon, use the first polygon's exterior ring
            if (geometry.coordinates[0]?.[0]) {
              coords = geometry.coordinates[0][0];
            }
          }

          if (coords.length > 0) {
            // Calculate centroid
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

        // Select if within a reasonable distance (15 degrees should be sufficient)
        if (nearestCountry && minDistance < 15) {
          setSelectedCountry(nearestCountry);
          setSelectedEvent(null);
          return;
        }
      }

      // No country or coup clicked
      setSelectedEvent(null);
      setSelectedCountry(null);
    },
    [setSelectedEvent, setSelectedCountry, countriesGeoJSON]
  );

  useClearSelectionOnMapClick({
    mapRef,
    layerIds: viewMode === "events" ? ["coup-circles"] : [],
    setSelectedEvent,
  });

  useEscapeToClearSelection(setSelectedEvent);

return (
  <Layout mapRef={mapRef} allEvents={allEvents}>
    <div className={css({ position: "relative", height: "full", width: "full" })}>
      {!mapLoaded && (
        <div className={css({ position: "absolute", inset: "0", zIndex: "20", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--colors-bg-app)" })}>
          <div className={css({ height: "8", width: "8", borderRadius: "full", borderWidth: "2px", borderStyle: "solid", borderColor: "var(--colors-border-default)", borderTopColor: "var(--colors-accent-default)" })} style={{ animation: "spin 1s linear infinite" }} />
        </div>
      )}

      <Map
        ref={mapRef}
        initialViewState={{ longitude: 20, latitude: 15, zoom: 2 }}
        mapStyle={MAP_STYLE}
        interactiveLayerIds={
          viewMode === "events"
            ? ["coup-circles", "countries-fill"]
            : ["country-risk-fill"]
        }
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={(e) => {
          const features = e.features ?? [];
          if (features.some(f => f.layer?.id === "coup-circles")) {
            onClick(e);
          } else if (features.some(f => f.layer?.id === "country-risk-fill")) {
            const f = features.find(f => f.layer?.id === "country-risk-fill")!;
            const admin = (f.properties?.ADMIN ?? f.properties?.name ?? "").toLowerCase().trim();
            const match = allPredictions.find((p) => {
              const key = COW_TO_ADMIN_ALIASES[p.country.toLowerCase().trim()] ?? p.country.toLowerCase().trim();
              return key === admin;
            });
            setSelectedPrediction(match ?? null);
          } else {
            setSelectedEvent(null);
            setSelectedPrediction(null);
          }
        }}
        onLoad={() => setMapLoaded(true)}
      >
        {/* Historical events layer — events mode only */}
        {viewMode === "events" && (
          <Source
            id="coups"
            type="geojson"
            data={getCoupsFeatureCollection(filteredEvents)}
            promoteId="id"
          >
            <Layer {...circleLayerStyle} />
          </Source>
        )}

        {/* Countries fill layer — events mode only */}
        {viewMode === "events" && countriesGeoJSON && (
          <Source id="countries" type="geojson" data={countriesGeoJSON}>
            <Layer
              id="countries-fill"
              type="fill"
              paint={{ "fill-color": "rgba(0,0,0,0)", "fill-opacity": 0 }}
            />
          </Source>
        )}

        {/* Country risk heatmap — risk mode only */}
        {viewMode === "risk" && enrichedCountriesGeoJSON && (
          <Source id="country-risk" type="geojson" data={enrichedCountriesGeoJSON}>
            <Layer {...countryHeatmapLayerStyle} />
          </Source>
        )}

        {/* Historical event popup */}
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
        onClose={() => setSelectedPrediction(null)}
      />
      <MapLegend />
    </div>
  </Layout>
)};
