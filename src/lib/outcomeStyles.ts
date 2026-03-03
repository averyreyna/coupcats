import type { CoupOutcome } from "../types/coup";
import { OUTCOME_COLORS, OUTCOME_LABELS } from "./colors";

export interface OutcomeStyle {
  color: string;
  label: string;
  badgeClass: string;
  dotClass: string;
}

export const OUTCOME_STYLES: Record<CoupOutcome, OutcomeStyle> = {
  successful: {
    color: OUTCOME_COLORS.successful,
    label: OUTCOME_LABELS.successful,
    badgeClass: "bg-emerald-500/20 text-emerald-300",
    dotClass: "bg-emerald-400",
  },
  failed: {
    color: OUTCOME_COLORS.failed,
    label: OUTCOME_LABELS.failed,
    badgeClass: "bg-red-500/20 text-red-300",
    dotClass: "bg-red-400",
  },
  attempted: {
    color: OUTCOME_COLORS.attempted,
    label: OUTCOME_LABELS.attempted,
    badgeClass: "bg-amber-500/20 text-amber-300",
    dotClass: "bg-amber-400",
  },
  plot: {
    color: OUTCOME_COLORS.plot,
    label: OUTCOME_LABELS.plot,
    badgeClass: "bg-slate-500/20 text-slate-300",
    dotClass: "bg-slate-400",
  },
  alleged: {
    color: OUTCOME_COLORS.alleged,
    label: OUTCOME_LABELS.alleged,
    badgeClass: "bg-slate-500/20 text-slate-300",
    dotClass: "bg-slate-400",
  },
};

