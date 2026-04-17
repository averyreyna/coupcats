import { css } from "styled-system/css";
import { predictionColors } from "../design-system/tokens";
import { EVENT_NO_DATA_COLOR } from "../lib/riskColors";

const GRADIENT_STOPS = [
  predictionColors.veryLow,
  predictionColors.moderate,
  predictionColors.elevated,
  predictionColors.high,
];

interface EventsHeatmapLegendProps {
  maxCount: number;
}

const legendStyle = css({
  position: "absolute",
  bottom: "20",
  left: "max(1rem, env(safe-area-inset-left))",
  zIndex: "10",
  borderRadius: "lg",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--colors-border-default)",
  backgroundColor:
    "color-mix(in srgb, var(--colors-bg-panel) 92%, var(--colors-bg-muted))",
  paddingInline: "3.5",
  paddingBlock: "2.5",
  boxShadow: "0 8px 22px color-mix(in srgb, #000 12%, transparent)",
  backdropFilter: "blur(8px)",
  md: { bottom: "4", left: "4" },
});

const labelStyle = css({
  marginBottom: "2",
  fontSize: "xs",
  fontWeight: "semibold",
  color: "var(--colors-text-muted)",
});

const rowStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "2.5",
  fontSize: "xs",
  color: "var(--colors-text-secondary)",
  lineHeight: "1.35",
});

const swatchStyle = css({
  height: "3",
  width: "3",
  flexShrink: "0",
  borderRadius: "sm",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--colors-border-strong)",
});

const BUCKET_LABELS = ["Very Low", "Moderate", "Elevated", "High"];

export default function EventsHeatmapLegend({ maxCount }: EventsHeatmapLegendProps) {
  return (
    <div className={legendStyle}>
      <div className={labelStyle}>Historical Coup Activity</div>
      <div className={css({ display: "flex", flexDirection: "column", gap: "1" })}>
        {GRADIENT_STOPS.map((color, i) => (
          <div key={color} className={rowStyle}>
            <span className={swatchStyle} style={{ backgroundColor: color }} />
            {BUCKET_LABELS[i]}
          </div>
        ))}
        {maxCount > 0 && (
          <div className={css({ fontSize: "xs", color: "var(--colors-text-muted)", fontStyle: "italic", marginTop: "1" })}>
            Highest: {maxCount} events
          </div>
        )}
        <div className={rowStyle}>
          <span className={swatchStyle} style={{ backgroundColor: EVENT_NO_DATA_COLOR }} />
          No events
        </div>
      </div>
    </div>
  );
}
