/**
 * Caracal design system — JS-accessible token values.
 * Used for MapLibre paint expressions and dynamic inline styles.
 * Keep in sync with panda.config.ts token definitions.
 */

export const caracal = {
  orange: "#FF6A00",
  forest: "#00651D",
  sky:    "#007FBF",
  rose:   "#D44866",
  teal:   "#009C76",
  navy:   "#004B81",
} as const;

export const neutral = {
  0:   "#FFFFFF",
  50:  "#F8F9FA",
  100: "#F1F3F5",
  200: "#E9ECEF",
  300: "#DEE2E6",
  400: "#CED4DA",
  500: "#ADB5BD",
  600: "#6C757D",
  700: "#495057",
  800: "#343A40",
  900: "#212529",
} as const;

export const outcomeColors = {
  successful: caracal.teal,   // #009C76
  failed:     caracal.rose,   // #D44866
  attempted:  caracal.orange, // #FF6A00
  plot:       neutral[600],   // #6C757D
  alleged:    neutral[600],   // #6C757D
} as const;

export const predictionColors = {
  veryLow:  "#22c55e",
  moderate: "#eab308",
  elevated: "#f97316",
  high:     "#ef4444",
  null:     neutral[500],
} as const;

export const predictionColorStops = [
  { stop: 0.00, color: predictionColors.veryLow,  label: "< 5% (Very Low)"   },
  { stop: 0.05, color: predictionColors.moderate, label: "5–15% (Moderate)"  },
  { stop: 0.15, color: predictionColors.elevated, label: "15–30% (Elevated)" },
  { stop: 0.30, color: predictionColors.high,     label: "> 30% (High)"      },
] as const;
