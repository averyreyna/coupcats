import { css } from "styled-system/css";
import { OUTCOME_COLORS, OUTCOME_LABELS, PREDICTION_COLOR_STOPS, PREDICTION_NULL_COLOR } from "../lib/colors";
import type { CoupOutcome } from "../types/coup";
import { useFilterStore } from "../store/useFilterStore";

const OUTCOMES: CoupOutcome[] = ["successful", "failed"];

const legendStyle = css({
  position: "absolute",
  bottom: "20",
  left: "max(1rem, env(safe-area-inset-left))",
  zIndex: "10",
  borderRadius: "lg",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--colors-border-default)",
  backgroundColor: "color-mix(in srgb, var(--colors-bg-panel) 92%, var(--colors-bg-muted))",
  paddingInline: "3.5",
  paddingBlock: "2.5",
  boxShadow: "0 8px 22px color-mix(in srgb, #000 12%, transparent)",
  backdropFilter: "blur(8px)",
  md: {
    bottom: "4",
    left: "4",
  },
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

export default function MapLegend() {
  const viewMode = useFilterStore((s) => s.viewMode);

  if (viewMode === "risk") {
    return (
      <div className={legendStyle}>
        <div className={labelStyle}>Coup Risk</div>
        <div className={css({ display: "flex", flexDirection: "column", gap: "1" })}>
          {PREDICTION_COLOR_STOPS.map(({ color, label }) => (
            <div key={label} className={rowStyle}>
              <span className={swatchStyle} style={{ backgroundColor: color }} />
              {label}
            </div>
          ))}
          <div className={rowStyle}>
            <span className={swatchStyle} style={{ backgroundColor: PREDICTION_NULL_COLOR }} />
            No data
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={legendStyle}>
      <div className={labelStyle}>Outcome</div>
      <div className={css({ display: "flex", flexDirection: "column", gap: "1" })}>
        {OUTCOMES.map((outcome) => (
          <div key={outcome} className={rowStyle}>
            <span
              className={css({
                height: "2.5",
                width: "2.5",
                flexShrink: "0",
                borderRadius: "full",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "var(--colors-border-strong)",
              })}
              style={{ backgroundColor: OUTCOME_COLORS[outcome] }}
            />
            {OUTCOME_LABELS[outcome]}
          </div>
        ))}
      </div>
    </div>
  );
}
