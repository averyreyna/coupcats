import { useRef, useState, useCallback, useMemo, useEffect } from "react";
import { Map, Source, Layer, Popup, type MapRef } from "@vis.gl/react-maplibre";
import type {
  CircleLayerSpecification,
  MapLayerMouseEvent,
} from "maplibre-gl";
import { type CoupEvent, type CoupPrediction } from "./types/coup";
import PredictionPanel from "./components/PredictionPanel"
import EventPopup from "./components/EventPopup";
import MapLegend from "./components/MapLegend";
import RiskMapLegend from "./components/RiskMapLegend";
import Layout from "./components/Layout";
import { useFilterStore } from "./store/useFilterStore";
import { OUTCOME_COLORS } from "./lib/colors";
import { buildChoroplethFillColor } from "./lib/riskColors";
import { cowNameToGeoJsonAdmin } from "./lib/countryNameMapping";
import { getCoupsFeatureCollection, getAllCoupEvents, getPredictionFeatureCollection } from "./lib/coupData";
import { buildMapFilterExpression } from "./lib/filterHelpers";
import { useMapHover } from "./hooks/useMapHover";
import { useEscapeToClearSelection } from "./hooks/useEscapeToClearSelection";
import { useClearSelectionOnMapClick } from "./hooks/useClearSelectionOnMapClick";

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

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
  "circle-stroke-color": "#020617",
  "circle-opacity": 1,
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

  // Predictions are now bundled locally — no async fetch needed
  const allPredictions = useMemo<CoupPrediction[]>(
    () => getPredictionFeatureCollection().features.map((f) => f.properties),
    [],
  );
  const [selectedPrediction, setSelectedPrediction] = useState<CoupPrediction | null>(null);

  // Build choropleth fill-color expression for risk mode
  const choroplethFillColor = useMemo(() => {
    if (viewMode !== "risk" || allPredictions.length === 0) return null;
    return buildChoroplethFillColor(allPredictions);
  }, [viewMode, allPredictions]);

  const selectedEvent = useFilterStore((s) => s.selectedEvent);
  const setSelectedEvent = useFilterStore((s) => s.setSelectedEvent);
  const setSelectedCountry = useFilterStore((s) => s.setSelectedCountry);
  const searchQuery = useFilterStore((s) => s.searchQuery);
  const selectedOutcomes = useFilterStore((s) => s.selectedOutcomes);
  const selectedRegions = useFilterStore((s) => s.selectedRegions);
  const dateRange = useFilterStore((s) => s.dateRange);
  const selectedTags = useFilterStore((s) => s.selectedTags);

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

  // Track hovered country separately via onMouseMove (not onMouseEnter)
  // because mouseenter is layer-level — it doesn't fire between adjacent polygons.
  const hoveredCountryId = useRef<string | number | null>(null);

  const onMouseMove = useCallback((e: MapLayerMouseEvent) => {
    const map = mapRef.current?.getMap();
    if (!map) return;

    const countryFeature = e.features?.find((f) => f.layer?.id === "countries-fill");
    const newId = countryFeature?.id ?? null;

    if (newId === hoveredCountryId.current) return;

    // Clear old hover
    if (hoveredCountryId.current != null) {
      map.setFeatureState(
        { source: "countries", id: hoveredCountryId.current },
        { hover: false },
      );
    }

    // Set new hover
    if (newId != null) {
      map.setFeatureState(
        { source: "countries", id: newId },
        { hover: true },
      );
      map.getCanvas().style.cursor = "pointer";
    }

    hoveredCountryId.current = newId;
  }, [mapRef]);

  const onMapMouseLeave = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (map && hoveredCountryId.current != null) {
      map.setFeatureState(
        { source: "countries", id: hoveredCountryId.current },
        { hover: false },
      );
      hoveredCountryId.current = null;
    }
    onMouseLeave();
  }, [mapRef, onMouseLeave]);

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
    layerIds: ["coup-circles"],
    setSelectedEvent,
  });

  useEscapeToClearSelection(setSelectedEvent);

  // Clear selections when switching view modes
  useEffect(() => {
    if (viewMode === "risk") {
      setSelectedEvent(null);
    } else {
      setSelectedPrediction(null);
    }
  }, [viewMode, setSelectedEvent, setSelectedPrediction]);

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
            : ["countries-fill"]
        }
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMapMouseLeave}
        onClick={(e) => {
          const feature = e.features?.[0];
          if (!feature) {
            setSelectedEvent(null);
            setSelectedPrediction(null);
            return;
          }
          if (feature.layer.id === "coup-circles") onClick(e);
          else if (feature.layer.id === "countries-fill" && viewMode === "risk") {
            const geoName = feature.properties?.name;
            if (geoName) {
              const pred = allPredictions.find(
                (p) => p.country === geoName || cowNameToGeoJsonAdmin(p.country) === geoName
              );
              if (pred) setSelectedPrediction(pred);
            }
          }
        }}
        onLoad={() => setMapLoaded(true)}
      >
        {/* Countries layer — always present, choropleth fill in risk mode */}
        {countriesGeoJSON && (
          <Source id="countries" type="geojson" data={countriesGeoJSON} promoteId="name">
            <Layer
              id="countries-fill"
              type="fill"
              paint={{
                "fill-color":
                  viewMode === "risk" && choroplethFillColor
                    ? (choroplethFillColor as any)
                    : "rgba(0,0,0,0)",
                "fill-opacity": viewMode === "risk" ? 0.85 : 0,
              }}
            />
            <Layer
              id="countries-outline"
              type="line"
              paint={{
                "line-color": "#334155",
                "line-width": 0.5,
              }}
            />
            <Layer
              id="countries-hover-outline"
              type="line"
              paint={{
                "line-color": "#e2e8f0",
                "line-width": [
                  "case",
                  ["boolean", ["feature-state", "hover"], false],
                  2,
                  0,
                ] as any,
              }}
            />
          </Source>
        )}

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

        {/* Historical event popup */}
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

      <PredictionPanel
        prediction={selectedPrediction}
        onClose={() => setSelectedPrediction(null)}
      />
      {viewMode === "events" ? <MapLegend /> : <RiskMapLegend />}
    </div>
  </Layout>
)};