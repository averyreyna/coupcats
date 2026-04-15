import type { CoupOutcome } from "../types/coup";

export const OUTCOME_COLORS: Record<CoupOutcome, string> = {
  successful: "#f59e0b",
  failed: "#ef4444",
  attempted: "#f97316",
  plot: "#64748b",
  alleged: "#64748b",
};

export const OUTCOME_LABELS: Record<CoupOutcome, string> = {
  successful: "Successful",
  failed: "Failed",
  attempted: "Attempted",
  plot: "Plot",
  alleged: "Alleged",
};

export const PREDICTION_COLOR_STOPS = [
  { stop: 0.00, color: "#22c55e", label: "< 5% (Very Low)"   },
  { stop: 0.05, color: "#eab308", label: "5–15% (Moderate)"  },
  { stop: 0.15, color: "#f97316", label: "15–30% (Elevated)" },
  { stop: 0.30, color: "#ef4444", label: "> 30% (High)"      },
] as const;

export const PREDICTION_NULL_COLOR = "#374151";
