import { useRef, useState, useCallback, useMemo } from "react";
import { Map, Source, Layer, Popup, type MapRef } from "@vis.gl/react-maplibre";
import type {
  CircleLayerSpecification,
  MapLayerMouseEvent,
} from "maplibre-gl";
import type { CoupEvent } from "./types/coup";
import EventPopup from "./components/EventPopup";
import MapLegend from "./components/MapLegend";
import Layout from "./components/Layout";
import { useFilterStore } from "./store/useFilterStore";
import { OUTCOME_COLORS } from "./lib/colors";
import { getCoupsFeatureCollection, getAllCoupEvents } from "./lib/coupData";
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

  const allEvents = useMemo(() => getAllCoupEvents(), []);

  const selectedEvent = useFilterStore((s) => s.selectedEvent);
  const setSelectedEvent = useFilterStore((s) => s.setSelectedEvent);

  const circleLayerStyle: CircleLayerSpecification = {
    id: "coup-circles",
    type: "circle",
    source: "coups",
    paint: circleLayerPaint,
  };

  const { onMouseEnter, onMouseLeave } = useMapHover({
    mapRef,
    sourceId: "coups",
  });

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
            data={getCoupsFeatureCollection()}
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
