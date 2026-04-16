import type {
  CoupPrediction,
  PredictionFeatureCollection,
} from "../types/coup";
import yhatData from "../data/yhat_data_2026_month4.json";
import { getCoordsForCcode } from "./CountryCoordinates";
import { COW_TO_ADMIN_ALIASES } from "./coupData";

export function buildYhatPredictionProbMap(
  predictions: CoupPrediction[],
): Map<string, number | null> {
  const map = new Map<string, number | null>();

  for (const p of predictions) {
    const original = p.country.toLowerCase().trim();
    const key = COW_TO_ADMIN_ALIASES[original] ?? original;
    const value = p.yhat ?? p.prediction_prob ?? null;

    map.set(key, value);
    map.set(original, value);
  }

  return map;
}

export function getYhatPredictionFeatureCollection(): PredictionFeatureCollection {
  const predictions = yhatData as CoupPrediction[];

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
          prediction_prob: p.yhat ?? p.prediction_prob ?? null,
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
      };
    })
    .filter((f): f is NonNullable<typeof f> => f !== null);

  return {
    type: "FeatureCollection",
    features,
  };
}
