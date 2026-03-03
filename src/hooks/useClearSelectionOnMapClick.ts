import { useEffect } from "react";
import type { MapRef } from "@vis.gl/react-maplibre";
import type { MapMouseEvent } from "maplibre-gl";
import type { CoupEvent } from "../types/coup";

interface UseClearSelectionOnMapClickParams {
  mapRef: React.RefObject<MapRef | null>;
  layerIds: string[];
  setSelectedEvent: (event: CoupEvent | null) => void;
}

// clear selected event when user clicks empty map (no feature under cursor)
export function useClearSelectionOnMapClick({
  mapRef,
  layerIds,
  setSelectedEvent,
}: UseClearSelectionOnMapClickParams): void {
  useEffect(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;

    const onMapClick = (event: MapMouseEvent) => {
      const features = map.queryRenderedFeatures(
        [event.point.x, event.point.y],
        {
          layers: layerIds,
        }
      );

      if (features.length === 0) {
        setSelectedEvent(null);
      }
    };

    map.on("click", onMapClick);

    return () => {
      map.off("click", onMapClick);
    };
  }, [layerIds, mapRef, setSelectedEvent]);
}

