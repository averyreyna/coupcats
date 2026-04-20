import type { CoupOutcome } from "../types/coup";
import { outcomeColors, predictionColorStops, neutral } from "../design-system/tokens";

export const OUTCOME_COLORS: Record<CoupOutcome, string> = outcomeColors;

export const OUTCOME_LABELS: Record<CoupOutcome, string> = {
  successful: "Successful",
  failed:     "Failed",
  attempted:  "Attempted",
  plot:       "Plot",
  alleged:    "Alleged",
};

export const PREDICTION_COLOR_STOPS = predictionColorStops;

export const PREDICTION_NULL_COLOR = neutral[500];
export const PREDICTION_ZERO_RISK_COLOR = neutral[300];
