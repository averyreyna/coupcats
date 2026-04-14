import type { CoupEvent, CoupFeatureCollection, CoupPrediction, PredictionFeatureCollection } from "../types/coup";
import coupsDataRaw from "../data/coups.geojson?raw";
import predictionsRaw from "../data/yhat_data_2026_month4.json";
import { getCoordsForCcode } from "./CountryCoordinates";

// parsed once at module load; same reference returned
const coupsFeatureCollection: CoupFeatureCollection = JSON.parse(
  coupsDataRaw,
) as CoupFeatureCollection;

export function getCoupsFeatureCollection(
  events: CoupEvent[],
): CoupFeatureCollection {
  const eventIds = new Set(events.map((event) => event.id));

  return {
    ...coupsFeatureCollection,
    features: (coupsFeatureCollection.features ?? []).filter((feature) =>
      eventIds.has(feature.properties.id),
    ),
  };
}

export function getAllCoupEvents(): CoupEvent[] {
  return (coupsFeatureCollection.features ?? []).map(
    (feature) => feature.properties,
  );
}

// Build a GeoJSON FeatureCollection from the local predictions JSON
function toPredictionFeatureCollection(
  predictions: CoupPrediction[]
): PredictionFeatureCollection {
  const features = predictions
    .map((p) => {
      const coords = getCoordsForCcode(p.ccode);
      if (!coords) return null;

      return {
        type: "Feature" as const,
        id: `${p.ccode}-${p.year}-${p.month}`,
        geometry: {
          type: "Point" as const,
          coordinates: [coords.longitude, coords.latitude],
        },
        properties: {
          ...p,
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
      };
    })
    .filter((f): f is NonNullable<typeof f> => f !== null);

  return { type: "FeatureCollection", features };
}

// Built once at module load — no async needed with a local file
const predictionFeatureCollection: PredictionFeatureCollection =
  toPredictionFeatureCollection(predictionsRaw as CoupPrediction[]);

export function getPredictionFeatureCollection(): PredictionFeatureCollection {
  return predictionFeatureCollection;
}

export function getAllPredictions(): CoupPrediction[] {
  return predictionFeatureCollection.features.map((f) => f.properties);
}