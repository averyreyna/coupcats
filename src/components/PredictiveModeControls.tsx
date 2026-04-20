import { css } from "styled-system/css";
import type {
  PredictiveMode,
  PredictiveSliderKey,
  PredictiveSliderPercents,
} from "../types/coup";

type Props = {
  predictiveEnabled: boolean;
  setPredictiveEnabled: (enabled: boolean) => void;
  mode: PredictiveMode;
  setMode: (mode: PredictiveMode) => void;
  sliderPercents: PredictiveSliderPercents;
  onSliderChange: (key: PredictiveSliderKey, value: number) => void;
  futureMonths: number;
  setFutureMonths: (months: number) => void;
  onReset: () => void;
};

const sliderLabels: Record<PredictiveSliderKey, string> = {
  trade_glob:     "Trade",
  ch_gdppc:       "GDP Change",
  polyarchy:      "Democracy",
  wom_polpart:    "Women Participation",
  milreg_prop:    "Military Regime",
  milper_spliced: "Military Influence",
};

const sliderOrder: PredictiveSliderKey[] = [
  "trade_glob",
  "ch_gdppc",
  "polyarchy",
  "wom_polpart",
  "milreg_prop",
  "milper_spliced",
];

export default function PredictiveModeControls({
  predictiveEnabled,
  setPredictiveEnabled,
  mode,
  setMode,
  sliderPercents,
  onSliderChange,
  futureMonths,
  setFutureMonths,
  onReset,
}: Props) {
  return (
    <div
      className={css({
        mt: "4",
        pt: "4",
        borderTop: "1px solid",
        borderColor: "border.default",
        display: "grid",
        gap: "3",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3",
        })}
      >
        <div>
          <div className={css({ fontWeight: "semibold", fontSize: "sm" })}>
            Predictive Mode
          </div>
          <div className={css({ fontSize: "xs", color: "text.muted", marginTop: "0.5" })}>
            Apply scenario changes to this country
          </div>
        </div>
        <button
          type="button"
          onClick={() => setPredictiveEnabled(!predictiveEnabled)}
          className={css({
            position: "relative",
            width: "56px",
            height: "32px",
            borderRadius: "full",
            border: "1px solid",
            borderColor: predictiveEnabled ? "green.500" : "border.default",
            bg: predictiveEnabled ? "green.500" : "bg.subtle",
            cursor: "pointer",
            transition: "all 0.2s ease",
          })}
        >
          <span
            className={css({
              position: "absolute",
              top: "3px",
              left: predictiveEnabled ? "27px" : "3px",
              width: "24px",
              height: "24px",
              borderRadius: "full",
              bg: "white",
              boxShadow: "sm",
              transition: "all 0.2s ease",
            })}
          />
        </button>
      </div>

      {predictiveEnabled && (
        <>
          <div className={css({ display: "flex", gap: "2" })}>
            {[
              { value: "scenario", label: "Scenario" },
              { value: "futureMonths", label: "Future Months" },
            ].map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setMode(item.value as PredictiveMode)}
                className={css({
                  flex: 1,
                  py: "2",
                  px: "3",
                  borderRadius: "md",
                  border: "1px solid",
                  borderColor:
                    mode === item.value ? "accent.default" : "border.default",
                  bg: mode === item.value ? "accent.muted" : "bg.subtle",
                  color: "text.primary",
                  fontWeight: "medium",
                  cursor: "pointer",
                })}
              >
                {item.label}
              </button>
            ))}
          </div>

          {mode === "scenario" && (
            <div className={css({ display: "grid", gap: "3" })}>
              {sliderOrder.map((key) => {
                const value = sliderPercents[key];
                const pct = value / 2; // 0–200 range maps to 0–100% fill

                return (
                  <div key={key} className={css({ display: "grid", gap: "1" })}>
                    <div
                      className={css({
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "sm",
                      })}
                    >
                      <span className={css({ color: "text.secondary" })}>{sliderLabels[key]}</span>
                      <span className={css({ fontWeight: "medium", color: "text.primary" })}>
                        {value}%
                      </span>
                    </div>
                    <input
                      className="timeline-slider"
                      type="range"
                      min={0}
                      max={200}
                      step={1}
                      value={value}
                      onChange={(e) => onSliderChange(key, Number(e.target.value))}
                      style={{
                        background: `linear-gradient(to right, #FF6A00 0%, #FF6A00 ${pct}%, #e5e7eb ${pct}%, #e5e7eb 100%)`,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {mode === "futureMonths" && (
            <div className={css({ display: "grid", gap: "2" })}>
              <div className={css({ fontWeight: "medium" })}>
                Months Ahead: {futureMonths}
              </div>
              <input
                className="timeline-slider"
                type="range"
                min={1}
                max={12}
                step={1}
                value={futureMonths}
                onChange={(e) => setFutureMonths(Number(e.target.value))}
                style={{
                  background: (() => {
                    const pct = ((futureMonths - 1) / 11) * 100;
                    return `linear-gradient(to right, #FF6A00 0%, #FF6A00 ${pct}%, #e5e7eb ${pct}%, #e5e7eb 100%)`;
                  })(),
                }}
              />
              <div className={css({ fontSize: "sm", color: "text.secondary" })}>
                Uses the selected month horizon for cumulative coup risk.
              </div>
            </div>
          )}

          <div
            className={css({
              display: "flex",
              justifyContent: "flex-end",
              mt: "2",
              pt: "2",
              borderTop: "1px solid",
              borderColor: "border.default",
            })}
          >
            <button
              type="button"
              onClick={onReset}
              className={css({
                py: "1.5",
                px: "3",
                borderRadius: "md",
                border: "1px solid",
                borderColor: "border.strong",
                bg: "bg.muted",
                color: "text.secondary",
                fontSize: "sm",
                fontWeight: "medium",
                cursor: "pointer",
                _hover: { bg: "bg.hover" },
              })}
            >
              Reset
            </button>
          </div>
        </>
      )}
    </div>
  );
}