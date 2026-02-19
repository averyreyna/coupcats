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
