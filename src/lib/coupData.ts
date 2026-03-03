import type { CoupEvent, CoupFeatureCollection } from "../types/coup";
import coupsDataRaw from "../data/coups.geojson?raw";

// parsed once at module load; same reference returned
const coupsFeatureCollection: CoupFeatureCollection = JSON.parse(
  coupsDataRaw
) as CoupFeatureCollection;

export function getCoupsFeatureCollection(): CoupFeatureCollection {
  return coupsFeatureCollection;
}

export function getAllCoupEvents(): CoupEvent[] {
  return (coupsFeatureCollection.features ?? []).map(
    (feature) => feature.properties
  );
}

