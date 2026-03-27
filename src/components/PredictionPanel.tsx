import type { CoupPrediction } from "../types/coup";

// Both functions will make sure that all values being returned are safe and not returned as null or NaN
// This fixes the problem of the entire website crashing when you click on dots
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
  onClose: () => void;
}

// Horizontal bar to represent 0-1 values
function StatBar({ value, invert = false }: { value: number; invert?: boolean }) {
  const pct = Math.min(Math.max(value, 0), 1) * 100;
  const color = invert
    ? value > 0.66 ? "bg-red-500" : value > 0.33 ? "bg-yellow-500" : "bg-green-500"
    : value > 0.66 ? "bg-green-500" : value > 0.33 ? "bg-yellow-500" : "bg-red-500";

  return (
    <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
      <div className={`${color} h-1.5 rounded-full transition-all`} style={{ width: `${pct}%` }} />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3">
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
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
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm">{label}</span>
        <span className="text-white text-sm font-medium">{display}</span>
      </div>
      {bar && <StatBar value={value} invert={invert} />}
    </div>
  );
}

export default function PredictionPanel({ prediction, onClose }: Props) {
  if (!prediction) return null;

  const prob = prediction.prediction_prob;
  const riskLabel =
    prob < 0.05 ? "Very Low" :
    prob < 0.15 ? "Moderate" :
    prob < 0.30 ? "Elevated" : "High";
  const riskColor =
    prob < 0.05 ? "text-green-400" :
    prob < 0.15 ? "text-yellow-400" :
    prob < 0.30 ? "text-orange-400" : "text-red-400";

  const regimeType =
    prediction.liberal_democracy     ? "Liberal Democracy" :
    prediction.electoral_democracy   ? "Electoral Democracy" :
    prediction.electoral_autocracy   ? "Electoral Autocracy" :
    prediction.closed_autocracy      ? "Closed Autocracy" : "Unknown";

//The returned stats line is massive and can easily be changes when we remove more prediction stats to narrow it down to the most important 
// ones for the project
  return (
    <div className="absolute right-0 top-0 h-full w-80 bg-[#0f1117] border-l border-gray-800 z-10 flex flex-col shadow-2xl">

      {/* Header */}
      <div className="flex items-start justify-between p-4 border-b border-gray-800">
        <div>
          <h2 className="font-bold text-white text-xl">{prediction.country}</h2>
          <p className="text-gray-400 text-xs mt-0.5">
            {prediction.year} · Month {prediction.month}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white text-lg mt-0.5"
        >
          ✕
        </button>
      </div>

      {/* Coup risk banner */}
      <div className="px-4 py-3 border-b border-gray-800 bg-[#13151f]">
        <div className="flex justify-between items-center mb-1">
          <span className="text-gray-400 text-sm">Coup Probability</span>
          <span className={`font-bold text-lg ${riskColor}`}>
            {(prob * 100).toFixed(4)}%
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all ${
              prob < 0.05 ? "bg-green-500" :
              prob < 0.15 ? "bg-yellow-500" :
              prob < 0.30 ? "bg-orange-500" : "bg-red-500"
            }`}
            style={{ width: `${Math.min(prob / 0.3, 1) * 100}%` }}
          />
        </div>
        <p className={`text-xs mt-1 font-medium ${riskColor}`}>
          {riskLabel} Risk
        </p>
      </div>

      {/* Scrollable stats */}
      <div className="flex-1 overflow-y-auto p-4">

        <Section title="Governance">
            <StatRow
                label="Regime Type"
                value={0}
                display={regimeType}
            />
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
                display={prediction.Leader_age != null ? `${prediction.Leader_age} years` : "N/A"}
            />
            <StatRow
                label="Leader Duration"
                value={safeNum(prediction.Leader_duration) / 30}
                display={prediction.Leader_duration != null ? `${prediction.Leader_duration} years` : "N/A"}
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
                display={prediction.Change_GDP_per_cap != null ? `${(safeNum(prediction.Change_GDP_per_cap) * 100).toFixed(2)}%` : "N/A"}
                bar
            />
            <StatRow
                label="Inflation"
                value={Math.min(safeNum(prediction.Inflation) / 20, 1)}
                display={prediction.Inflation != null ? `${safeNum(prediction.Inflation).toFixed(2)}%` : "N/A"}
                bar
                invert
            />
            <StatRow
                label="Trade (% of GDP)"
                value={Math.min(safeNum(prediction.Trade) / 100, 1)}
                display={prediction.Trade != null ? `${safeNum(prediction.Trade).toFixed(2)}%` : "N/A"}
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
                display={prediction.milex != null ? `${safeNum(prediction.milex).toFixed(2)}%` : "N/A"}
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
  );
}