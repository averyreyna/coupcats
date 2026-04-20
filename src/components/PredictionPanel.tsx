import { X } from "lucide-react";
import { css } from "styled-system/css";
import { predictionColors } from "../design-system/tokens";
import { classifyRisk, type RiskThresholds } from "../lib/riskBuckets";
import type { CoupPrediction } from "../types/coup";
import PredictiveModeControls from "./PredictiveModeControls";
import type {
  PredictiveMode,
  PredictiveSliderKey,
  PredictiveSliderPercents,
} from "../types/coup";

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
  allPredictions: CoupPrediction[];
  displayName?: string;
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

// ─── Scoring ────────────────────────────────────────────────────────────────
// Each entry: [key on CoupPrediction, true = higher is better / false = higher is worse]
type ScoredKey = [keyof CoupPrediction, boolean];

const GOVERNANCE_KEYS: ScoredKey[] = [
  ["polyarchy",      true ],
  ["milreg",         false],
  ["milit",          false],
  ["Leader_age",     false],
  ["Leader_duration",false],
];

const ECONOMY_KEYS: ScoredKey[] = [
  ["gdppc",    true ],
  ["ch_gdppc", true ],
  ["ltrade",   true ],
];

const SOCIETY_KEYS: ScoredKey[] = [
  ["wom_polpart",   true ],
  ["wom_civlib",    true ],
  ["women_polemp",  true ],
  ["protests",      false],
  ["cw",            false],
];

const MILITARY_KEYS: ScoredKey[] = [
  ["milex_spliced",  false],
  ["milper_spliced", false],
  ["solqual",        true ],
  ["mobil_conc",     false],
];

const CONTEXT_KEYS: ScoredKey[] = [
  ["neighboring_coup", false],
  ["cold",             false],
  ["visit",            false],
];

/**
 * Computes a 0–10 score for a single field using the same min-max normalization
 * the previous team used:  score = (value + |min|) / (max + |min|) * 10
 * If higherIsBetter is false the score is inverted (10 - score).
 */
function computeFieldScore(
  value: number | null | undefined,
  allValues: number[],
  higherIsBetter: boolean,
): number | null {
  if (value == null || !Number.isFinite(value)) return null;
  if (allValues.length === 0) return null;

  const max = Math.max(...allValues);
  const minAbs = Math.abs(Math.min(...allValues));
  const denom = max + minAbs;
  if (denom === 0) return null;

  const raw = ((value + minAbs) / denom) * 10;
  return higherIsBetter ? raw : 10 - raw;
}

/**
 * Averages the non-null field scores for a section into a 0–10 section score.
 */
function computeSectionScore(
  prediction: CoupPrediction,
  allPredictions: CoupPrediction[],
  keys: ScoredKey[],
): number | null {
  const scores: number[] = [];

  for (const [key, higherIsBetter] of keys) {
    const allValues = allPredictions
      .map((p) => p[key])
      .filter((v): v is number => typeof v === "number" && Number.isFinite(v));

    const score = computeFieldScore(
      prediction[key] as number | null,
      allValues,
      higherIsBetter,
    );

    if (score != null) scores.push(score);
  }

  if (scores.length === 0) return null;
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatBar({ value, invert = false }: { value: number; invert?: boolean }) {
  const pct = Math.min(Math.max(value, 0), 1) * 100;

  const effective = invert ? 1 - value : value;
  const fillColor =
    effective > 0.66
      ? predictionColors.high
      : effective > 0.33
        ? predictionColors.moderate
        : predictionColors.veryLow;

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
        className={css({ height: "1.5", borderRadius: "full", transition: "all" })}
        style={{ width: `${pct}%`, backgroundColor: fillColor }}
      />
    </div>
  );
}

function SectionScore({ score }: { score: number | null }) {
  if (score == null) return null;

  const rounded = Math.round(score * 10) / 10;
  const color =
    score >= 7 ? "#22c55e" :
    score >= 5 ? "#eab308" :
    score >= 3 ? "#f97316" : "#ef4444";

  return (
    <span
      className={css({ fontSize: "xs", fontWeight: "semibold", marginLeft: "2" })}
      style={{ color }}
    >
      {rounded.toFixed(1)}/10
    </span>
  );
}

function Section({
  title,
  score,
  children,
}: {
  title: string;
  score: number | null;
  children: React.ReactNode;
}) {
  return (
    <details className={css({ marginBottom: "5" })} open>
      <summary
        className={css({
          fontSize: "xs",
          fontWeight: "semibold",
          textTransform: "uppercase",
          letterSpacing: "widest",
          color: "var(--colors-accent-text)",
          marginBottom: "3",
          cursor: "pointer",
          userSelect: "none",
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          _hover: { opacity: "0.8" },
        })}
      >
        <span>
          {title}
          <SectionScore score={score} />
        </span>
        <span className={css({ fontSize: "xs", color: "var(--colors-text-muted)" })}>▾</span>
      </summary>
      <div className={css({ display: "flex", flexDirection: "column", gap: "3", paddingTop: "2" })}>
        {children}
      </div>
    </details>
  );
}

function StatRow({
  label,
  value,
  display,
  bar,
  invert,
  tooltip,
}: {
  label: string;
  value: number;
  display: string;
  bar?: boolean;
  invert?: boolean;
  tooltip?: string;
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
        {tooltip ? (
          <span
            title={tooltip}
            className={css({
              fontSize: "sm",
              color: "var(--colors-text-muted)",
              cursor: "help",
            })}
          >
            {label}
          </span>
        ) : (
          <span className={css({ fontSize: "sm", color: "var(--colors-text-muted)" })}>
            {label}
          </span>
        )}
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

// ─── Main component ──────────────────────────────────────────────────────────

export default function PredictionPanel({
  prediction,
  allPredictions,
  displayName,
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

  const rawProb = prediction.rendered_prediction_prob ?? prediction.yhat;
  const prob = rawProb != null && rawProb < 0 ? 0 : rawProb;
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

  // Section scores
  const govScore      = computeSectionScore(prediction, allPredictions, GOVERNANCE_KEYS);
  const ecoScore      = computeSectionScore(prediction, allPredictions, ECONOMY_KEYS);
  const socScore      = computeSectionScore(prediction, allPredictions, SOCIETY_KEYS);
  const milScore      = computeSectionScore(prediction, allPredictions, MILITARY_KEYS);
  const ctxScore      = computeSectionScore(prediction, allPredictions, CONTEXT_KEYS);

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
        md: { width: "360px", minWidth: "360px" },
      })}
    >
      {/* Header */}
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
          <h2 className={css({ fontWeight: "bold", color: "var(--colors-text-primary)", fontSize: "xl" })}>
            {displayName ?? prediction.country}
          </h2>
          <p className={css({ fontSize: "xs", color: "var(--colors-text-muted)", marginTop: "0.5" })}>
            {prediction.year}
          </p>
        </div>
        <button
          onClick={onClose}
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "8",
            height: "8",
            borderRadius: "sm",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "var(--colors-border-strong)",
            backgroundColor: "var(--colors-bg-muted)",
            color: "var(--colors-text-muted)",
            cursor: "pointer",
            flexShrink: "0",
            _hover: { backgroundColor: "var(--colors-bg-hover)" },
          })}
        >
          <X className={css({ width: "4", height: "4" })} />
        </button>
      </div>

      {/* Risk banner */}
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
        <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1" })}>
          <span className={css({ fontSize: "sm", color: "var(--colors-text-muted)" })}>
            Coup Probability
          </span>
          <span className={css({ fontWeight: "bold", fontSize: "md" })} style={{ color: riskHex }}>
            {hasValidProb ? `${(prob! * 100).toFixed(2)}%` : "N/A"}
          </span>
        </div>

        <div className={css({ width: "full", backgroundColor: "var(--colors-bg-active)", borderRadius: "full", height: "2" })}>
          <div
            className={css({ height: "2", borderRadius: "full", transition: "all" })}
            style={{
              width: hasValidProb && prob != null
                ? `${Math.min(prob / Math.max(riskThresholds.highMin, 1e-9), 1) * 100}%`
                : "0%",
              backgroundColor: probBarColor,
            }}
          />
        </div>

        <p className={css({ fontSize: "xs", marginTop: "1", fontWeight: "medium" })} style={{ color: riskHex }}>
          {riskLabel} Risk
        </p>

        <div className={css({ display: "grid", gap: "1", marginTop: "3", fontSize: "sm" })}>
          <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "center" })}>
            <span className={css({ color: "var(--colors-text-muted)" })}>Risk within {displayMonths} months</span>
            <span className={css({ fontWeight: "medium", color: "var(--colors-text-primary)" })}>
              {monthsProb != null && isFinite(monthsProb)
                ? `${(monthsProb * 100).toFixed(2)}%`
                : "N/A"}
            </span>
          </div>
        </div>
      </div>

      {/* Scrollable stats */}
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

          <Section title="Governance" score={govScore}>
            <StatRow label="Regime Type" value={0} display={regimeType}
              tooltip="Classification of how the country is governed — from liberal democracy to closed autocracy" />
            <StatRow label="Democracy Level" value={safeNum(prediction.polyarchy)} display={safeFmt(prediction.polyarchy)} bar
              tooltip="V-Dem electoral democracy index, standardized. Higher values indicate more democratic institutions" />
            <StatRow label="Military Regime" value={safeNum(prediction.milreg)} display={safeNum(prediction.milreg) === 1 ? "Yes" : "No"}
              tooltip="Whether the country is currently governed by a military regime" />
            <StatRow label="Military in Politics" value={safeNum(prediction.milit)} display={safeNum(prediction.milit) === 1 ? "Yes" : "No"}
              tooltip="Whether the military has a formal or dominant role in the political system" />
              {/*
              <StatRow label="Leader Age" value={safeNum(prediction.Leader_age) / 100}
                display={prediction.Leader_age != null ? `${prediction.Leader_age} years` : "N/A"}
                tooltip="Age of the current head of state or government" />
              <StatRow label="Leader Duration" value={safeNum(prediction.Leader_duration) / 30}
                display={prediction.Leader_duration != null ? `${prediction.Leader_duration} months` : "N/A"}
                tooltip="How long the current leader has been in power. Longer tenures can correlate with instability" />
              */}
          </Section>

          <Section title="Economy" score={ecoScore}>
            <StatRow label="GDP per Capita (log)" value={0} display={safeFmt(prediction.gdppc, 4)}
              tooltip="Log of GDP per capita, standardized. Proxy for overall economic development and living standards" />
            <StatRow label="Change in GDP per Capita"
              value={(safeNum(prediction.ch_gdppc) + 0.2) / 0.4}
              display={prediction.ch_gdppc != null ? `${(safeNum(prediction.ch_gdppc) * 100).toFixed(2)}%` : "N/A"} bar
              tooltip="Year-over-year change in GDP per capita. Economic contraction is associated with elevated coup risk" />
            <StatRow label="Trade (log)"
              value={Math.min(safeNum(prediction.ltrade) / 20, 1)}
              display={prediction.ltrade != null ? `${safeNum(prediction.ltrade).toFixed(2)}` : "N/A"} bar
              tooltip="Log of total trade volume (imports + exports). Higher trade integration tends to reduce instability" />
          </Section>

          <Section title="Society" score={socScore}>
            <StatRow label="Women's Political Participation"
              value={Math.min(Math.max((safeNum(prediction.wom_polpart) + 2) / 4, 0), 1)}
              display={safeFmt(prediction.wom_polpart)} bar
              tooltip="V-Dem index of women's participation in formal political processes, standardized" />
            <StatRow label="Women's Civil Liberties" value={safeNum(prediction.wom_civlib)} display={safeFmt(prediction.wom_civlib)} bar
              tooltip="Index of civil liberties enjoyed by women (0–1). Low values indicate restricted freedoms" />
            <StatRow label="Women's Political Employment" value={safeNum(prediction.women_polemp)} display={safeFmt(prediction.women_polemp)} bar
              tooltip="Share of women in political and senior official employment roles" />
            <StatRow label="Protests" value={Math.min(safeNum(prediction.protests) / 5, 1)} display={safeFmt(prediction.protests)} bar invert
              tooltip="Standardized log count of protest events. Higher unrest correlates with increased coup risk" />
            <StatRow label="Civil War" value={safeNum(prediction.cw)} display={safeNum(prediction.cw) === 1 ? "Yes" : "No"}
              tooltip="Whether the country is currently experiencing an active civil war" />
          </Section>

          <Section title="Military" score={milScore}>
            <StatRow label="Military Expenditure"
              value={Math.min(safeNum(prediction.milex_spliced) / 30, 1)}
              display={prediction.milex_spliced != null ? `${safeNum(prediction.milex_spliced).toFixed(2)}%` : "N/A"} bar invert
              tooltip="Military spending as a share of GDP. Very high values may indicate over-militarization" />
            <StatRow label="Military Personnel (log)"
              value={Math.min(safeNum(prediction.milper_spliced) / 10, 1)}
              display={safeFmt(prediction.milper_spliced, 4)} bar
              tooltip="Log of active military personnel, spliced across sources for consistency" />
            <StatRow label="Soldier Quality"
              value={Math.min(safeNum(prediction.solqual) / 5, 1)}
              display={safeFmt(prediction.solqual, 4)} bar
              tooltip="Index of military professionalism, training, and equipment quality" />
            <StatRow label="Mobilization Concentration"
              value={safeNum(prediction.mobil_conc)} display={safeFmt(prediction.mobil_conc)} bar
              tooltip="Degree to which political mobilization is concentrated in a single movement or faction" />
          </Section>

          <Section title="Context" score={ctxScore}>
            <StatRow label="Neighboring Coup"
              value={safeNum(prediction.neighboring_coup)}
              display={prediction.neighboring_coup != null ? (safeNum(prediction.neighboring_coup) === 1 ? "Yes" : "No") : "N/A"}
              tooltip="Whether a neighboring country recently experienced a coup — regional contagion is a known risk factor" />
            <StatRow label="Cold War Period" value={safeNum(prediction.cold)} display={safeNum(prediction.cold) === 1 ? "Yes" : "No"}
              tooltip="Whether the observation falls within the Cold War era (pre-1991), when superpower rivalry drove more coups" />
            <StatRow label="Foreign Visit" value={safeNum(prediction.visit)} display={safeNum(prediction.visit) === 1 ? "Yes" : "No"}
              tooltip="Whether the head of state was abroad at the time — leaders are historically more vulnerable to coups while traveling" />
          </Section>

        </div>
      </div>
    </div>
  );
}