import { useCallback, useState } from "react";
import type { MapRef } from "@vis.gl/react-maplibre";
import type { MapLayerMouseEvent } from "maplibre-gl";

interface UseMapHoverParams {
  mapRef: React.RefObject<MapRef | null>;
  sourceId: string;
}

interface UseMapHoverResult {
  onMouseEnter: (event: MapLayerMouseEvent) => void;
  onMouseLeave: () => void;
}

export function useMapHover({
  mapRef,
  sourceId,
}: UseMapHoverParams): UseMapHoverResult {
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);

  const onMouseEnter = useCallback(
    (event: MapLayerMouseEvent) => {
      const map = mapRef.current?.getMap();
      if (!map || !event.features?.length) return;

      const feature = event.features[0];

      if (feature.id == null) return;

      // clear previous feature's hover state so only one is highlighted
      if (hoveredId != null && hoveredId !== feature.id) {
        map.setFeatureState(
          { source: sourceId, id: hoveredId },
          { hover: false }
        );
      }

      setHoveredId(feature.id);
      map.getCanvas().style.cursor = "pointer";
      map.setFeatureState(
        { source: sourceId, id: feature.id },
        { hover: true }
      );
    },
    [hoveredId, mapRef, sourceId]
  );

  const onMouseLeave = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;

    if (hoveredId != null) {
      map.setFeatureState(
        { source: sourceId, id: hoveredId },
        { hover: false }
      );
      setHoveredId(null);
    }

    map.getCanvas().style.cursor = "";
  }, [hoveredId, mapRef, sourceId]);

  return { onMouseEnter, onMouseLeave };
}

