/*
  Author: Daniel Krutsick
  Purpose: The prediction panel that shows up on the right when you click on a country.
*/
import { css } from "styled-system/css";
import { predictionColors } from "../design-system/tokens";
import { classifyRisk, type RiskThresholds } from "../lib/riskBuckets";
import type { CoupPrediction } from "../types/coup";

function safeNum(value: unknown): number {
  const n = Number(value);
  return isNaN(n) ? 0 : n;
}

function safeFmt(value: unknown, decimals = 3): string {
  const n = Number(value);
  return isNaN(n) ? "N/A" : n.toFixed(decimals);
}

interface Props {
  prediction: CoupPrediction | null;
  riskThresholds: RiskThresholds;
  onClose: () => void;
}

function StatBar({ value, invert = false }: { value: number; invert?: boolean }) {
  const pct = Math.min(Math.max(value, 0), 1) * 100;
  const fillColor = invert
    ? value > 0.66 ? predictionColors.high : value > 0.33 ? predictionColors.moderate : predictionColors.veryLow
    : value > 0.66 ? predictionColors.veryLow : value > 0.33 ? predictionColors.moderate : predictionColors.high;

  return (
    <div className={css({ width: "full", backgroundColor: "var(--colors-bg-active)", borderRadius: "full", height: "1.5", marginTop: "1" })}>
      <div
        className={css({ height: "1.5", borderRadius: "full", transition: "all" })}
        style={{ width: `${pct}%`, backgroundColor: fillColor }}
      />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={css({ marginBottom: "5" })}>
      <h3 className={css({ fontSize: "xs", fontWeight: "semibold", textTransform: "uppercase", letterSpacing: "widest", color: "var(--colors-accent-text)", marginBottom: "3" })}>
        {title}
      </h3>
      <div className={css({ display: "flex", flexDirection: "column", gap: "3" })}>{children}</div>
    </div>
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
  if(tooltip){
    return (
      <div>
        <div className="flex justify-between items-center">
          <span
            title={tooltip}
            style={{textDecorationColor: "#054FF0"}}
            className="underline decoration-dotted underline-offset-2 cursor-help text-gray-400 text-sm"
          >
            {label}
          </span>
          <span className="text-white text-sm font-medium">{display}</span>
        </div>
        {bar && <StatBar value={value} invert={invert} />}
      </div>
    );
  }else{
    return(
        <div>
          <div className="flex justify-between items-center">
              <span 
                className="text-gray-400 test-sm"
              >
                {label}
              </span>
            <span className="text-white text-sm font-medium">{display}</span>
          </div>
          {bar && <StatBar value={value} invert={invert} />}
        </div>
      )
    }
  }

export default function PredictionPanel({ prediction, riskThresholds, onClose }: Props) {
  if (!prediction) return null;

  const prob = prediction.yhat;
  const hasValidProb = prob != null && isFinite(prob);
  const riskMeta = classifyRisk(prob, riskThresholds);

  const riskLabel = riskMeta?.label ?? "Unknown";

  const riskHex = riskMeta?.color ?? predictionColors.null;

  const probBarColor = riskMeta?.color ?? predictionColors.null;

  const regimeType =
    prediction.liberal_democracy     ? "Liberal Democracy" :
    prediction.electoral_democracy   ? "Electoral Democracy" :
    prediction.electoral_autocracy   ? "Electoral Autocracy" :
    prediction.closed_autocracy      ? "Closed Autocracy" : "Unknown";

  return (
    <div className={css({
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
        width: "320px",
        minWidth: "320px",
      },
    })}>
      {/* Header */}
      <div className={css({ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "4", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "var(--colors-border-default)" })}>
        <div>
          <h2 className={css({ fontWeight: "bold", color: "var(--colors-text-primary)", fontSize: "xl" })}>{prediction.country}</h2>
          <p className={css({ fontSize: "xs", color: "var(--colors-text-muted)", marginTop: "0.5" })}>
            {prediction.year} · Month {prediction.month}
          </p>
        </div>
        <button
          onClick={onClose}
          className={css({ fontSize: "lg", marginTop: "0.5", cursor: "pointer", color: "var(--colors-text-muted)", _hover: { color: "var(--colors-text-primary)" } })}
        >
          ✕
        </button>
      </div>

      {/* Coup risk banner */}
      <div className={css({ paddingInline: "4", paddingBlock: "3", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "var(--colors-border-default)", backgroundColor: "var(--colors-bg-subtle)" })}>
        <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1" })}>
          <span className={css({ fontSize: "sm", color: "var(--colors-text-muted)" })}>Coup Probability</span>
          <span className={css({ fontWeight: "bold", fontSize: "lg" })} style={{ color: riskHex }}>
            {hasValidProb ? `${(prob! * 100).toFixed(4)}%` : "N/A"}
          </span>
        </div>
        <div className={css({ width: "full", backgroundColor: "var(--colors-bg-active)", borderRadius: "full", height: "2" })}>
          <div
            className={css({ height: "2", borderRadius: "full", transition: "all" })}
            style={{
              width:
                hasValidProb && prob != null
                  ? `${Math.min(prob / Math.max(riskThresholds.highMin, 1e-9), 1) * 100}%`
                  : "0%",
              backgroundColor: probBarColor,
            }}
          />
        </div>
        <p className={css({ fontSize: "xs", marginTop: "1", fontWeight: "medium" })} style={{ color: riskHex }}>
          {riskLabel} Risk
        </p>
      </div>

      {/* Scrollable stats */}
      <div className={css({ flex: "1", overflowY: "auto", padding: "4" })}>
        <Section title="Governance">
                    <StatRow 
            label="Regime Type" 
            value={0} 
            display={regimeType}
            tooltip="How the country is ruled (e.g. democracy)" />
          <StatRow 
            label="Democracy Level" 
            value={safeNum(prediction.polyarchy)} 
            display={safeFmt(prediction.polyarchy)} bar
            tooltip="How close the country's regime is to a democracy" />
          <StatRow 
            label="Military Regime" 
            value={safeNum(prediction.milreg)} 
            display={safeNum(prediction.milreg) === 1 ? "Yes" : "No"}
            tooltip="Something about military and its power over people" />
          <StatRow 
            label="Military Influence" 
            value={safeNum(prediction.milit)} 
            display={safeNum(prediction.milit) === 1 ? `${(safeNum(prediction.milit) * 100).toFixed(2)}%` : "N/A"} bar
            tooltip="Influence of military (need better desc)" />
          <StatRow 
            label="Leader Age" 
            value={safeNum(prediction.Leader_age) / 100}
            display={prediction.Leader_age != null ? `${prediction.Leader_age} years` : "N/A"} />
          <StatRow 
            label="Leader Duration" 
            value={safeNum(prediction.Leader_duration) / 30}
            display={prediction.Leader_duration != null ? `${prediction.Leader_duration} months` : "N/A"}
            tooltip="Leader duration can be entire groups of people" />
        </Section>

        <Section title="Economy">
          <StatRow 
            label="GDP per Capita (log)" 
            value={0} 
            display={safeFmt(prediction.gdppc, 4)}
            tooltip="What the hell does this mean?" />
          <StatRow 
            label="Change in GDP per Capita" 
            value={(safeNum(prediction.ch_gdppc) + 0.2) / 0.4}
            display={prediction.ch_gdppc != null ? `${(safeNum(prediction.ch_gdppc) * 100).toFixed(2)}%` : "N/A"} bar
            tooltip="Still don't know what this means" />
          <StatRow 
            label="Trade (% of GDP)" 
            value={Math.min(safeNum(prediction.ltrade) / 100, 1)}
            display={prediction.ltrade != null ? `${safeNum(prediction.ltrade).toFixed(2)}%` : "N/A"} bar
            tooltip="How does this affect things?" />
        </Section>

        <Section title="Society">
          <StatRow 
            label="Women's Political Participation" 
            value={safeNum(prediction.wom_polpart)}
            display={safeFmt(prediction.wom_polpart)} bar
            tooltip="Women" />
          <StatRow 
            label="Women's Civil Liberties" 
            value={safeNum(prediction.wom_civlib)}
            display={safeFmt(prediction.wom_civlib)} bar
            tooltip="Are they allowed to live in this country?" />
          <StatRow 
            label="Women's Political Employment" 
            value={safeNum(prediction.women_polemp)}
            display={safeFmt(prediction.women_polemp)} bar
            tooltip="Are they allowed to speak their piece?" />
          <StatRow 
            label="Protests" 
            value={Math.min(safeNum(prediction.protests) / 5, 1)}
            display={safeFmt(prediction.protests)} bar invert
            tooltip="How many? How effective?" />
          <StatRow 
            label="Civil Wars" 
            value={safeNum(prediction.cw)}
            display={safeNum(prediction.cw) === 1 ? "Yes" : "No"} />
        </Section>

        <Section title="Military">
          <StatRow
            label="Military Expenditure" 
            value={Math.min(safeNum(prediction.milex_spliced) / 30, 1)}
            display={prediction.milex_spliced != null ? `${safeNum(prediction.milex_spliced).toFixed(2)}%` : "N/A"} bar invert
            tooltip="Don't know what this means" />
          <StatRow 
            label="Military Personnel" 
            value={Math.min(safeNum(prediction.milper_spliced) / 10, 1)}
            display={safeFmt(prediction.milper_spliced, 4)} bar
            tooltip="What kind? Who? Why?" />
          <StatRow 
            label="Soldier Quality" 
            value={Math.min(safeNum(prediction.solqual) / 5, 1)}
            display={safeFmt(prediction.solqual, 4)} bar
            tooltip="Strong? Loyal? What is it based on?" />
          <StatRow 
            label="Mobilization Concentration" 
            value={safeNum(prediction.mobil_conc)}
            display={safeFmt(prediction.mobil_conc)} bar
            tooltip="Concentration where?" />
        </Section>

        <Section title="Context">
          <StatRow
            label="Neighboring Coup"
            value={safeNum(prediction.neighboring_coup)}
            display={safeNum(prediction.neighboring_coup) === 1 ? "Yes" : "No"} />
          <StatRow
            label="Cold War Period" 
            value={safeNum(prediction.cold)}
            display={safeNum(prediction.cold) === 1 ? "Yes" : "No"} />
        </Section>
      </div>
    </div>
  );
}
