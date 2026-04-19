import type { CoupPrediction } from "../types/coup";
import { COW_TO_ADMIN_ALIASES } from "./coupData";

export function buildYhatPredictionProbMap(
  predictions: CoupPrediction[],
): Map<string, number | null> {
  const map = new Map<string, number | null>();

  for (const p of predictions) {
    const original = p.country.toLowerCase().trim();
    const key = COW_TO_ADMIN_ALIASES[original] ?? original;
    // CHANGED: was p.yhat ?? p.prediction_prob ?? null — prediction_prob removed from CoupPrediction
    const value = p.yhat ?? null;

    map.set(key, value);
    map.set(original, value);
  }

  return map;
}
