import { css } from "styled-system/css";
import { predictionColors } from "../design-system/tokens";
import { classifyRisk, type RiskThresholds } from "../lib/riskBuckets";
import type { CoupPrediction } from "../types/coup";
import PredictiveModeControls from "./PredictiveModeControls";
import type {
  PredictiveMode,
  PredictiveSliderKey,
  PredictiveSliderPercents,
} from "../types/predictive";

function safeNum(value: unknown): number {
  const n = Number(value);
  return isNaN(n) ? 0 : n;
}

function safeFmt(value: unknown, decimals = 3): string {
  const n = Number(value);
  return isNaN(n) ? "N/A" : n.toFixed(decimals);
}

type DisplayedPrediction = CoupPrediction & {
  rendered_prediction_prob?: number | null;
  rendered_months_prob?: number;
};

interface Props {
  prediction: DisplayedPrediction | null;
  riskThresholds: RiskThresholds;
  onClose: () => void;
  predictiveEnabled: boolean;
  setPredictiveEnabled: (enabled: boolean) => void;
  mode: PredictiveMode;
  setMode: (mode: PredictiveMode) => void;
  sliderPercents: PredictiveSliderPercents;
  onSliderChange: (key: PredictiveSliderKey, value: number) => void;
  futureMonths: number;
  setFutureMonths: (months: number) => void;
  onReset: () => void;
  showPredictiveControls?: boolean;
  monthsLabel?: number;
}

function StatBar({ value, invert = false }: { value: number; invert?: boolean }) {
  const pct = Math.min(Math.max(value, 0), 1) * 100;
  const fillColor = invert
    ? value > 0.66
      ? predictionColors.high
      : value > 0.33
        ? predictionColors.moderate
        : predictionColors.veryLow
    : value > 0.66
      ? predictionColors.veryLow
      : value > 0.33
        ? predictionColors.moderate
        : predictionColors.high;

  return (
    <div
      className={css({
        width: "full",
        backgroundColor: "var(--colors-bg-active)",
        borderRadius: "full",
        height: "1.5",
        marginTop: "1",
      })}
    >
      <div
        className={css({
          height: "1.5",
          borderRadius: "full",
          transition: "all",
        })}
        style={{ width: `${pct}%`, backgroundColor: fillColor }}
      />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={css({ marginBottom: "5" })}>
      <h3
        className={css({
          fontSize: "xs",
          fontWeight: "semibold",
          textTransform: "uppercase",
          letterSpacing: "widest",
          color: "var(--colors-accent-text)",
          marginBottom: "3",
        })}
      >
        {title}
      </h3>
      <div className={css({ display: "flex", flexDirection: "column", gap: "3" })}>
        {children}
      </div>
    </div>
  );
}

function StatRow({
  label,
  value,
  display,
  bar,
  invert,
}: {
  label: string;
  value: number;
  display: string;
  bar?: boolean;
  invert?: boolean;
}) {
  return (
    <div>
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "3",
        })}
      >
        <span className={css({ fontSize: "sm", color: "var(--colors-text-muted)" })}>
          {label}
        </span>
        <span
          className={css({
            fontSize: "sm",
            fontWeight: "medium",
            color: "var(--colors-text-primary)",
            textAlign: "right",
          })}
        >
          {display}
        </span>
      </div>
      {bar && <StatBar value={value} invert={invert} />}
    </div>
  );
}

export default function PredictionPanel({
  prediction,
  riskThresholds,
  onClose,
  predictiveEnabled,
  setPredictiveEnabled,
  mode,
  setMode,
  sliderPercents,
  onSliderChange,
  futureMonths,
  setFutureMonths,
  onReset,
  showPredictiveControls = true,
  monthsLabel,
}: Props) {
  if (!prediction) return null;

  const prob = prediction.rendered_prediction_prob ?? prediction.prediction_prob;
  const monthsProb = prediction.rendered_months_prob;
  const hasValidProb = prob != null && isFinite(prob);

  const riskMeta = classifyRisk(prob, riskThresholds);
  const riskLabel = riskMeta?.label ?? "Unknown";
  const riskHex = riskMeta?.color ?? predictionColors.null;
  const probBarColor = riskMeta?.color ?? predictionColors.null;

  const regimeType = prediction.liberal_democracy
    ? "Liberal Democracy"
    : prediction.electoral_democracy
      ? "Electoral Democracy"
      : prediction.electoral_autocracy
        ? "Electoral Autocracy"
        : prediction.closed_autocracy
          ? "Closed Autocracy"
          : "Unknown";

  const displayMonths = monthsLabel ?? futureMonths;

  return (
    <div
      className={css({
        position: "absolute",
        right: "0",
        top: "0",
        height: "full",
        width: "full",
        maxWidth: "100vw",
        backgroundColor: "var(--colors-bg-panel)",
        borderLeftWidth: "1px",
        borderLeftStyle: "solid",
        borderLeftColor: "var(--colors-border-default)",
        zIndex: "10",
        display: "flex",
        flexDirection: "column",
        boxShadow: "var(--shadows-xl)",
        md: {
          width: "360px",
          minWidth: "360px",
        },
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "4",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "var(--colors-border-default)",
        })}
      >
        <div>
          <h2
            className={css({
              fontWeight: "bold",
              color: "var(--colors-text-primary)",
              fontSize: "xl",
            })}
          >
            {prediction.country}
          </h2>
          <p
            className={css({
              fontSize: "xs",
              color: "var(--colors-text-muted)",
              marginTop: "0.5",
            })}
          >
            {prediction.year} · Month {prediction.month}
          </p>
        </div>
        <button
          onClick={onClose}
          className={css({
            fontSize: "lg",
            marginTop: "0.5",
            cursor: "pointer",
            color: "var(--colors-text-muted)",
            _hover: { color: "var(--colors-text-primary)" },
          })}
        >
          ✕
        </button>
      </div>

      <div
        className={css({
          paddingInline: "4",
          paddingBlock: "3",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "var(--colors-border-default)",
          backgroundColor: "var(--colors-bg-subtle)",
        })}
      >
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1",
          })}
        >
          <span className={css({ fontSize: "sm", color: "var(--colors-text-muted)" })}>
            Coup Probability
          </span>
          <span
            className={css({ fontWeight: "bold", fontSize: "lg" })}
            style={{ color: riskHex }}
          >
            {hasValidProb ? `${(prob! * 100).toFixed(4)}%` : "N/A"}
          </span>
        </div>

        <div
          className={css({
            width: "full",
            backgroundColor: "var(--colors-bg-active)",
            borderRadius: "full",
            height: "2",
          })}
        >
          <div
            className={css({
              height: "2",
              borderRadius: "full",
              transition: "all",
            })}
            style={{
              width:
                hasValidProb && prob != null
                  ? `${Math.min(prob / Math.max(riskThresholds.highMin, 1e-9), 1) * 100}%`
                  : "0%",
              backgroundColor: probBarColor,
            }}
          />
        </div>

        <p
          className={css({ fontSize: "xs", marginTop: "1", fontWeight: "medium" })}
          style={{ color: riskHex }}
        >
          {riskLabel} Risk
        </p>

        <div
          className={css({
            display: "grid",
            gap: "1",
            marginTop: "3",
            fontSize: "sm",
          })}
        >
          <div
            className={css({
              display: "flex",
              justifyContent: "space-between",
              color: "var(--colors-text-muted)",
            })}
          >
            <span>Risk within {displayMonths} months</span>
            <span>
              {monthsProb != null && isFinite(monthsProb)
                ? `${(monthsProb * 100).toFixed(2)}%`
                : "N/A"}
            </span>
          </div>
        </div>
      </div>

      <div className={css({ flex: "1", overflowY: "auto", padding: "4" })}>
        {showPredictiveControls && (
          <PredictiveModeControls
            predictiveEnabled={predictiveEnabled}
            setPredictiveEnabled={setPredictiveEnabled}
            mode={mode}
            setMode={setMode}
            sliderPercents={sliderPercents}
            onSliderChange={onSliderChange}
            futureMonths={futureMonths}
            setFutureMonths={setFutureMonths}
            onReset={onReset}
          />
        )}

        <div className={css({ marginTop: showPredictiveControls ? "5" : "0" })}>
          <Section title="Governance">
            <StatRow label="Regime Type" value={0} display={regimeType} />
            <StatRow
              label="Democracy Level"
              value={safeNum(prediction.Democracy_level)}
              display={safeFmt(prediction.Democracy_level)}
              bar
            />
            <StatRow
              label="Military Regime"
              value={safeNum(prediction.Military_regime)}
              display={safeNum(prediction.Military_regime) === 1 ? "Yes" : "No"}
            />
            <StatRow
              label="Military Influence"
              value={safeNum(prediction.Military_influence)}
              display={safeNum(prediction.Military_influence) === 1 ? "Yes" : "No"}
            />
            <StatRow
              label="Leader Age"
              value={safeNum(prediction.Leader_age) / 100}
              display={
                prediction.Leader_age != null ? `${prediction.Leader_age} years` : "N/A"
              }
            />
            <StatRow
              label="Leader Duration"
              value={safeNum(prediction.Leader_duration) / 30}
              display={
                prediction.Leader_duration != null
                  ? `${prediction.Leader_duration} years`
                  : "N/A"
              }
            />
          </Section>

          <Section title="Economy">
            <StatRow
              label="GDP per Capita (log)"
              value={0}
              display={safeFmt(prediction.GDP_per_cap, 4)}
            />
            <StatRow
              label="Change in GDP per Capita"
              value={(safeNum(prediction.Change_GDP_per_cap) + 0.2) / 0.4}
              display={
                prediction.Change_GDP_per_cap != null
                  ? `${(safeNum(prediction.Change_GDP_per_cap) * 100).toFixed(2)}%`
                  : "N/A"
              }
              bar
            />
            <StatRow
              label="Inflation"
              value={Math.min(safeNum(prediction.Inflation) / 20, 1)}
              display={
                prediction.Inflation != null
                  ? `${safeNum(prediction.Inflation).toFixed(2)}%`
                  : "N/A"
              }
              bar
              invert
            />
            <StatRow
              label="Trade (% of GDP)"
              value={Math.min(safeNum(prediction.Trade) / 100, 1)}
              display={
                prediction.Trade != null
                  ? `${safeNum(prediction.Trade).toFixed(2)}%`
                  : "N/A"
              }
              bar
            />
          </Section>

          <Section title="Society">
            <StatRow
              label="Women's Political Participation"
              value={safeNum(prediction.Women_political_participation)}
              display={safeFmt(prediction.Women_political_participation)}
              bar
            />
            <StatRow
              label="Women's Civil Liberties"
              value={safeNum(prediction.wom_civlib)}
              display={safeFmt(prediction.wom_civlib)}
              bar
            />
            <StatRow
              label="Women's Political Employment"
              value={safeNum(prediction.women_polemp)}
              display={safeFmt(prediction.women_polemp)}
              bar
            />
            <StatRow
              label="Protests"
              value={Math.min(safeNum(prediction.Protests) / 5, 1)}
              display={safeFmt(prediction.Protests)}
              bar
              invert
            />
            <StatRow
              label="Civil Wars"
              value={safeNum(prediction.Civil_wars)}
              display={safeNum(prediction.Civil_wars) === 1 ? "Yes" : "No"}
            />
          </Section>

          <Section title="Military">
            <StatRow
              label="Military Expenditure"
              value={Math.min(safeNum(prediction.milex) / 30, 1)}
              display={
                prediction.milex != null ? `${safeNum(prediction.milex).toFixed(2)}%` : "N/A"
              }
              bar
              invert
            />
            <StatRow
              label="Military Personnel"
              value={Math.min(safeNum(prediction.milper) / 10, 1)}
              display={safeFmt(prediction.milper, 4)}
              bar
            />
            <StatRow
              label="Soldier Quality"
              value={Math.min(safeNum(prediction.solqual) / 5, 1)}
              display={safeFmt(prediction.solqual, 4)}
              bar
            />
            <StatRow
              label="Mobilization Concentration"
              value={safeNum(prediction.mobil_conc)}
              display={safeFmt(prediction.mobil_conc)}
              bar
            />
          </Section>

          <Section title="Context">
            <StatRow
              label="Neighboring Coup"
              value={safeNum(prediction.neighboring_coup)}
              display={safeNum(prediction.neighboring_coup) === 1 ? "Yes" : "No"}
            />
            <StatRow
              label="Cold War Period"
              value={safeNum(prediction.Cold_war)}
              display={safeNum(prediction.Cold_war) === 1 ? "Yes" : "No"}
            />
            <StatRow
              label="Foreign Visit"
              value={safeNum(prediction.visit)}
              display={safeNum(prediction.visit) === 1 ? "Yes" : "No"}
            />
          </Section>
        </div>
      </div>
    </div>
  );
}