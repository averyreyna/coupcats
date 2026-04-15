import type { CoupOutcome } from "../types/coup";
import { outcomeColors } from "../design-system/tokens";
import { OUTCOME_LABELS } from "./colors";
import { badgeRecipe, dotRecipe } from "../design-system/recipes/badge";

export interface OutcomeStyle {
  color: string;
  label: string;
  badgeClass: string;
  dotClass: string;
}

export const OUTCOME_STYLES: Record<CoupOutcome, OutcomeStyle> = {
  successful: {
    color: outcomeColors.successful,
    label: OUTCOME_LABELS.successful,
    badgeClass: badgeRecipe({ outcome: "successful" }),
    dotClass: dotRecipe({ outcome: "successful" }),
  },
  failed: {
    color: outcomeColors.failed,
    label: OUTCOME_LABELS.failed,
    badgeClass: badgeRecipe({ outcome: "failed" }),
    dotClass: dotRecipe({ outcome: "failed" }),
  },
  attempted: {
    color: outcomeColors.attempted,
    label: OUTCOME_LABELS.attempted,
    badgeClass: badgeRecipe({ outcome: "attempted" }),
    dotClass: dotRecipe({ outcome: "attempted" }),
  },
  plot: {
    color: outcomeColors.plot,
    label: OUTCOME_LABELS.plot,
    badgeClass: badgeRecipe({ outcome: "plot" }),
    dotClass: dotRecipe({ outcome: "plot" }),
  },
  alleged: {
    color: outcomeColors.alleged,
    label: OUTCOME_LABELS.alleged,
    badgeClass: badgeRecipe({ outcome: "alleged" }),
    dotClass: dotRecipe({ outcome: "alleged" }),
  },
};
