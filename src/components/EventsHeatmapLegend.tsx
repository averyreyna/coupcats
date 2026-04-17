import { css } from "styled-system/css";
import { EVENT_NO_DATA_COLOR } from "../lib/riskColors";

const GRADIENT_STOPS = ["#22c55e", "#eab308", "#f97316", "#ef4444"];

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

export default function EventsHeatmapLegend({ maxCount }: EventsHeatmapLegendProps) {
  const gradientCSS = `linear-gradient(to right, ${GRADIENT_STOPS.join(", ")})`;

  return (
    <div className={legendStyle}>
      <div className={labelStyle}>Coup Event Frequency</div>
      <div className={css({ display: "flex", flexDirection: "column", gap: "1.5" })}>
        <div
          className={css({
            width: "full",
            height: "3",
            borderRadius: "sm",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "var(--colors-border-strong)",
          })}
          style={{ background: gradientCSS }}
        />
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
            fontSize: "xs",
            color: "var(--colors-text-secondary)",
          })}
        >
          <span>Fewer</span>
          <span>More</span>
        </div>
        {maxCount > 0 && (
          <div className={css({ fontSize: "xs", color: "var(--colors-text-muted)", fontStyle: "italic" })}>
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
