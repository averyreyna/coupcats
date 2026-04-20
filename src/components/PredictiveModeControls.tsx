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
  trade_glob: "Trade",
  ch_gdppc: "GDP Change",
  polyarchy: "Democracy",
  wom_polpart: "Women Participation",
  protests: "Protests",
  milreg_prop: "Military Regime",
  milit: "Military Influence",
};

const sliderOrder: PredictiveSliderKey[] = [
  "trade_glob",
  "ch_gdppc",
  "polyarchy",
  "wom_polpart",
  "protests",
  "milreg_prop",
  "milit",
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
          <div className={css({ fontWeight: "semibold", fontSize: "md" })}>
            Predictive Mode
          </div>
          <div className={css({ fontSize: "sm", color: "text.secondary" })}>
            Apply scenario changes to the selected country
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
                const isMilitaryRegime = key === "milreg_prop";
                const value = sliderPercents[key];

                return (
                  <div key={key} className={css({ display: "grid", gap: "1" })}>
                    <div
                      className={css({
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "sm",
                      })}
                    >
                      <span>{sliderLabels[key]}</span>
                      <span>
                        {isMilitaryRegime ? (value === 0 ? "Off" : "On") : `${value}%`}
                      </span>
                    </div>

                    <input
                      className="timeline-slider"
                      type="range"
                      min={0}
                      max={isMilitaryRegime ? 1 : 200}
                      step={1}
                      value={value}
                      onChange={(e) => onSliderChange(key, Number(e.target.value))}
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
            })}
          >
            <button
              type="button"
              onClick={onReset}
              className={css({
                py: "2",
                px: "3",
                borderRadius: "md",
                border: "1px solid",
                borderColor: "border.default",
                bg: "bg.subtle",
                cursor: "pointer",
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