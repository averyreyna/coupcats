import { useRef, useState, useCallback, useEffect, useMemo } from "react";
import { Map, Source, Layer, Popup, type MapRef } from "@vis.gl/react-maplibre";
import type {
  CircleLayerSpecification,
  FilterSpecification,
  MapLayerMouseEvent,
  MapMouseEvent,
} from "maplibre-gl";
import type { CoupEvent } from "./types/coup";
import EventPopup from "./components/EventPopup";
import MapLegend from "./components/MapLegend";
import Layout from "./components/Layout";
import { useFilterStore } from "./store/useFilterStore";
import { getFilteredIds } from "./lib/filterHelpers";
import coupsDataRaw from "./data/coups.geojson?raw";

const coupsData = JSON.parse(coupsDataRaw) as GeoJSON.FeatureCollection;

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
    "#f59e0b",
    "failed",
    "#ef4444",
    "attempted",
    "#f97316",
    "plot",
    "#64748b",
    "alleged",
    "#64748b",
    "#64748b",
  ],
  "circle-stroke-width": 2,
  "circle-stroke-color": "#020617",
  "circle-opacity": 1,
};

export default function App() {
  const mapRef = useRef<MapRef>(null);
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const allEvents = useMemo(
    () =>
      (coupsData.features || []).map(
        (f) => (f as GeoJSON.Feature<GeoJSON.Point, CoupEvent>).properties
      ) as CoupEvent[],
    []
  );

  const searchQuery = useFilterStore((s) => s.searchQuery);
  const selectedOutcomes = useFilterStore((s) => s.selectedOutcomes);
  const selectedRegions = useFilterStore((s) => s.selectedRegions);
  const dateRange = useFilterStore((s) => s.dateRange);
  const selectedTags = useFilterStore((s) => s.selectedTags);
  const selectedEvent = useFilterStore((s) => s.selectedEvent);
  const setSelectedEvent = useFilterStore((s) => s.setSelectedEvent);

  const selectedDecades = useFilterStore((s) => s.selectedDecades);
  const hasFilter =
    searchQuery.trim() !== "" ||
    selectedOutcomes.length > 0 ||
    selectedRegions.length > 0 ||
    selectedTags.length > 0 ||
    selectedDecades.length > 0 ||
    dateRange[0] !== 1950 ||
    dateRange[1] !== 2030;

  const filteredIds = useMemo(
    () =>
      getFilteredIds(allEvents, {
        searchQuery,
        selectedOutcomes,
        selectedRegions,
        dateRange,
        selectedTags,
      }),
    [
      allEvents,
      searchQuery,
      selectedOutcomes,
      selectedRegions,
      dateRange,
      selectedTags,
    ]
  );

  const circleLayerStyle: CircleLayerSpecification = {
    id: "coup-circles",
    type: "circle",
    source: "coups",
    paint: circleLayerPaint,
  };

  const onMouseEnter = useCallback(
    (e: { features?: Array<{ id?: string | number }> }) => {
      const map = mapRef.current?.getMap();
      if (!map || !e.features?.length) return;
      const feature = e.features[0];
      if (feature.id != null) {
        if (hoveredId != null && hoveredId !== feature.id) {
          map.setFeatureState(
            { source: "coups", id: hoveredId },
            { hover: false }
          );
        }
        setHoveredId(feature.id);
        map.getCanvas().style.cursor = "pointer";
        map.setFeatureState(
          { source: "coups", id: feature.id },
          { hover: true }
        );
      }
    },
    [hoveredId]
  );

  const onMouseLeave = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;
    if (hoveredId != null) {
      map.setFeatureState(
        { source: "coups", id: hoveredId },
        { hover: false }
      );
      setHoveredId(null);
    }
    map.getCanvas().style.cursor = "";
  }, [hoveredId]);

  const onClick = useCallback(
    (e: MapLayerMouseEvent) => {
      if (e.features?.length && e.features[0].properties) {
        setSelectedEvent(e.features[0].properties as CoupEvent);
      } else {
        setSelectedEvent(null);
      }
    },
    [setSelectedEvent]
  );

  useEffect(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;
    const onMapClick = (e: MapMouseEvent) => {
      const features = map.queryRenderedFeatures([e.point.x, e.point.y], {
        layers: ["coup-circles"],
      });
      if (features.length === 0) setSelectedEvent(null);
    };
    map.on("click", onMapClick);
    return () => {
      map.off("click", onMapClick);
    };
  }, [setSelectedEvent]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedEvent(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setSelectedEvent]);

  return (
    <Layout mapRef={mapRef} events={allEvents}>
      <div className="relative h-full w-full">
        {!mapLoaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0f1117]">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500/30 border-t-amber-500" />
          </div>
        )}
        <Map
          ref={mapRef}
          initialViewState={{
            longitude: 20,
            latitude: 15,
            zoom: 2,
          }}
          mapStyle={MAP_STYLE}
          interactiveLayerIds={["coup-circles"]}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          onLoad={() => setMapLoaded(true)}
        >
          <Source
            id="coups"
            type="geojson"
            data={coupsData}
            promoteId="id"
          >
            <Layer {...circleLayerStyle} />
          </Source>
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
        <MapLegend />
      </div>
    </Layout>
  );
}
