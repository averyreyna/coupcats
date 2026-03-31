import { useRef, useState, useCallback, useMemo, useEffect } from "react";
import { Map, Source, Layer, Popup, type MapRef } from "@vis.gl/react-maplibre";
import type {
  CircleLayerSpecification,
  MapLayerMouseEvent,
} from "maplibre-gl";
import {
  type CoupEvent,
  type CoupPrediction,
  type PredictionFeatureCollection,
} from "./types/coup";
import PredictionPanel from "./components/PredictionPanel";
import EventPopup from "./components/EventPopup";
import MapLegend from "./components/MapLegend";
import Layout from "./components/Layout";
import TopRiskPanel from "./components/TopRiskPanel";
import { useFilterStore } from "./store/useFilterStore";
import { OUTCOME_COLORS } from "./lib/colors";
import {
  getCoupsFeatureCollection,
  getAllCoupEvents,
  getPredictionFeatureCollection,
} from "./lib/coupData";
import { buildMapFilterExpression } from "./lib/filterHelpers";
import { useMapHover } from "./hooks/useMapHover";
import { useEscapeToClearSelection } from "./hooks/useEscapeToClearSelection";
import { useClearSelectionOnMapClick } from "./hooks/useClearSelectionOnMapClick";

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

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
  "circle-stroke-color": "#020617",
  "circle-opacity": 1,
};

const predictionLayerStyle: CircleLayerSpecification = {
  id: "prediction-circles",
  type: "circle",
  source: "predictions",
  paint: {
    "circle-radius": [
      "case",
      ["boolean", ["feature-state", "hover"], false],
      14,
      10,
    ],
    "circle-color": [
      "interpolate",
      ["linear"],
      ["get", "prediction_prob"],
      0,
      "#22c55e",
      0.05,
      "#eab308",
      0.15,
      "#f97316",
      0.3,
      "#ef4444",
    ],
    "circle-stroke-width": 2,
    "circle-stroke-color": "#020617",
    "circle-opacity": 0.85,
  },
};

export default function App() {
  const mapRef = useRef<MapRef>(null);

  const [mapLoaded, setMapLoaded] = useState(false);
  const [countriesGeoJSON, setCountriesGeoJSON] = useState<any>(null);
  const [showTopRiskPanel, setShowTopRiskPanel] = useState(false);

  const [predictionCollection, setPredictionCollection] =
    useState<PredictionFeatureCollection | null>(null);
  const [allPredictions, setAllPredictions] = useState<CoupPrediction[]>([]);
  const [predictionError, setPredictionError] = useState<string | null>(null);
  const [selectedPrediction, setSelectedPrediction] =
    useState<CoupPrediction | null>(null);

  const allEvents = useMemo(() => getAllCoupEvents(), []);

  const yearRange = useFilterStore((s) => s.yearRange);
  const viewMode = useFilterStore((s) => s.viewMode);
  const selectedEvent = useFilterStore((s) => s.selectedEvent);
  const setSelectedEvent = useFilterStore((s) => s.setSelectedEvent);
  const setSelectedCountry = useFilterStore((s) => s.setSelectedCountry);
  const searchQuery = useFilterStore((s) => s.searchQuery);
  const selectedOutcomes = useFilterStore((s) => s.selectedOutcomes);
  const selectedRegions = useFilterStore((s) => s.selectedRegions);
  const dateRange = useFilterStore((s) => s.dateRange);
  const selectedTags = useFilterStore((s) => s.selectedTags);

  const filteredEvents = useMemo(() => {
    return allEvents.filter((event) => {
      return event.year >= yearRange[0] && event.year <= yearRange[1];
    });
  }, [allEvents, yearRange]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson"
    )
      .then((res) => res.json())
      .then((data) => setCountriesGeoJSON(data))
      .catch((err) => console.error("Failed to load countries GeoJSON:", err));
  }, []);

  useEffect(() => {
    getPredictionFeatureCollection()
      .then((fc) => {
        setPredictionCollection(fc);
        setAllPredictions((fc.features ?? []).map((f) => f.properties));
      })
      .catch((err) => setPredictionError(err.message));
  }, []);

  useEffect(() => {
    if (viewMode === "events") {
      setShowTopRiskPanel(false);
      setSelectedPrediction(null);
    } else {
      setSelectedEvent(null);
    }
  }, [viewMode, setSelectedEvent]);

  const uniqueLatestPredictions = useMemo(() => {
    const byCountry = new globalThis.Map<string, CoupPrediction>();

    for (const p of allPredictions) {
      const existing = byCountry.get(p.country);

      if (
        !existing ||
        p.year > existing.year ||
        (p.year === existing.year && p.month > existing.month)
      ) {
        byCountry.set(p.country, p);
      }
    }

    return Array.from(byCountry.values());
  }, [allPredictions]);

  const topCountries = useMemo(() => {
    return [...uniqueLatestPredictions]
      .sort((a, b) => b.prediction_prob - a.prediction_prob)
      .slice(0, 20);
  }, [uniqueLatestPredictions]);

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
        allEvents
      ),
    [
      searchQuery,
      selectedOutcomes,
      selectedRegions,
      dateRange,
      selectedTags,
      allEvents,
    ]
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

  const onPredictionClick = useCallback(
    (e: MapLayerMouseEvent) => {
    const predictionFeature = e.features?.find(
      (f) => f.layer?.id === "prediction-circles"
    );

    if (predictionFeature?.properties) {
      setSelectedPrediction(predictionFeature.properties as CoupPrediction);
    } else {
      setSelectedPrediction(null);
    }
  }, 
  []
);

  const onClick = useCallback(
    (e: MapLayerMouseEvent) => {
      const coupFeature = e.features?.find((f) => f.layer?.id === "coup-circles");
      if (coupFeature) {
        const event = coupFeature.properties as CoupEvent;
        setSelectedEvent(event);
        setSelectedCountry(event.country);
        return;
      }

      const countryFeature = e.features?.find(
        (f) => f.layer?.id === "countries-fill"
      );
      if (countryFeature) {
        const countryName =
          countryFeature.properties?.ADMIN || countryFeature.properties?.name;
        if (countryName) {
          setSelectedCountry(countryName);
          setSelectedEvent(null);
          return;
        }
      }

      if (countriesGeoJSON && countriesGeoJSON.features) {
        let nearestCountry: string | null = null;
        let minDistance = Infinity;

        for (const feature of countriesGeoJSON.features) {
          const countryName = feature.properties?.ADMIN || feature.properties?.name;
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
              coords.reduce((sum: number, c: any) => sum + c[0], 0) / coords.length;
            const centroidLat =
              coords.reduce((sum: number, c: any) => sum + c[1], 0) / coords.length;

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
          setSelectedCountry(nearestCountry);
          setSelectedEvent(null);
          return;
        }
      }

      setSelectedEvent(null);
      setSelectedCountry(null);
    },
    [setSelectedEvent, setSelectedCountry, countriesGeoJSON]
  );

  useClearSelectionOnMapClick({
    mapRef,
    layerIds: ["coup-circles"],
    setSelectedEvent,
  });

  useEscapeToClearSelection(setSelectedEvent);

  return (
    <Layout mapRef={mapRef} allEvents={allEvents}>
      <div className="relative h-full w-full">
        {!mapLoaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0f1117]">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500/30 border-t-amber-500" />
          </div>
        )}

        <Map
          ref={mapRef}
          initialViewState={{ longitude: 20, latitude: 15, zoom: 2 }}
          mapStyle={MAP_STYLE}
          interactiveLayerIds={
            viewMode === "events"
              ? ["coup-circles", "countries-fill"]
              : ["prediction-circles"]
          }
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={(e) => {
            if (viewMode === "events") {
              onClick(e);
            } else {
              onPredictionClick(e);
            }
          }}
          onLoad={() => setMapLoaded(true)}
        >
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

          {viewMode === "events" && countriesGeoJSON && (
            <Source id="countries" type="geojson" data={countriesGeoJSON}>
              <Layer
                id="countries-fill"
                type="fill"
                paint={{ "fill-color": "rgba(0,0,0,0)", "fill-opacity": 0 }}
              />
            </Source>
          )}

          {viewMode !== "events" && predictionCollection && (
            <Source
              id="predictions"
              type="geojson"
              data={predictionCollection}
              promoteId="id"
            >
              <Layer {...predictionLayerStyle} />
            </Source>
          )}

          {viewMode === "events" && selectedEvent && (
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

        {viewMode !== "events" && (
          <>
            <button
              onClick={() => setShowTopRiskPanel((prev) => !prev)}
              className="absolute left-4 top-20 z-20 rounded-lg border border-gray-700 bg-[#131a2a] px-4 py-2 text-sm font-medium text-white shadow-lg hover:border-amber-500"
            >
              {showTopRiskPanel ? "Hide Top Risk" : "Show Top Risk"}
            </button>

            {showTopRiskPanel && (
              <TopRiskPanel
                countries={topCountries}
                onSelect={(c) => setSelectedPrediction(c)}
                selectedCountry={selectedPrediction?.country ?? null}
              />
            )}

            <PredictionPanel
              prediction={selectedPrediction}
              onClose={() => setSelectedPrediction(null)}
            />
          </>
        )}

        {viewMode === "events" && <MapLegend />}

        {predictionError && viewMode !== "events" && (
          <div className="absolute bottom-4 left-4 z-20 rounded-lg border border-red-800 bg-red-950/80 px-4 py-2 text-sm text-red-200">
            Failed to load prediction data: {predictionError}
          </div>
        )}
      </div>
    </Layout>
  );
}