import { css } from "styled-system/css";
import { OUTCOME_COLORS, OUTCOME_LABELS, PREDICTION_COLOR_STOPS, PREDICTION_NULL_COLOR } from "../lib/colors";
import type { CoupOutcome } from "../types/coup";
import { useFilterStore } from "../store/useFilterStore";

const OUTCOMES: CoupOutcome[] = ["successful", "failed"];

const legendStyle = css({
  position: "absolute",
  bottom: "20",
  right: "max(1rem, env(safe-area-inset-right))",
  zIndex: "10",
  borderRadius: "lg",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--colors-border-default)",
  backgroundColor: "var(--colors-bg-panel)",
  paddingInline: "3",
  paddingBlock: "2",
  boxShadow: "var(--shadows-lg)",
  backdropFilter: "blur(4px)",
  md: {
    bottom: "4",
    right: "4",
  },
});

const labelStyle = css({
  marginBottom: "1.5",
  fontSize: "xs",
  fontWeight: "medium",
  color: "var(--colors-text-muted)",
});

const rowStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "2",
  fontSize: "xs",
  color: "var(--colors-text-secondary)",
});

const swatchStyle = css({
  height: "2.5",
  width: "2.5",
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
