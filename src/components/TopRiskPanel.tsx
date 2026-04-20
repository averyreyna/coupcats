import { useMemo, useState } from "react";
import type { CoupPrediction } from "../types/coup";

interface Props {
  countries: CoupPrediction[];
  onSelect: (c: CoupPrediction) => void;
  selectedCountry?: string | null;
}

function getRiskLabel(prob: number): string {
  if (prob < 0.05) return "Very Low";
  if (prob < 0.15) return "Moderate";
  if (prob < 0.3) return "Elevated";
  return "High";
}

function getRiskColor(prob: number): string {
  if (prob < 0.05) return "text-green-400";
  if (prob < 0.15) return "text-yellow-400";
  if (prob < 0.3) return "text-orange-400";
  return "text-red-400";
}

export default function TopRiskPanel({
  countries,
  onSelect,
  selectedCountry = null,
}: Props) {
  const [limit, setLimit] = useState(10);

  const visibleCountries = useMemo(() => {
    return countries.slice(0, limit);
  }, [countries, limit]);

  return (
    <div className="absolute left-4 top-36 z-10 w-80 rounded-xl border border-gray-800 bg-[#0f1117] p-4 shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-white text-lg font-bold">Top Risk Countries</h3>

        <select
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          className="rounded-md border border-gray-700 bg-[#131a2a] px-2 py-1 text-sm text-white"
        >
          <option value={5}>Top 5</option>
          <option value={10}>Top 10</option>
          <option value={20}>Top 20</option>
        </select>
      </div>

      <div className="max-h-96 space-y-2 overflow-y-auto pr-1">
        {visibleCountries.map((c, i) => {
          const isSelected = selectedCountry === c.country;
          // CHANGED: was c.prediction_prob ?? c.yhat — prediction_prob removed from CoupPrediction, yhat is now the only source
          const prob = c.yhat ?? 0;

          return (
            <button
              key={`${c.country}-${c.year}-${c.month}-${i}`}
              onClick={() => onSelect(c)}
              className={`w-full rounded-lg border px-3 py-3 text-left transition ${
                isSelected
                  ? "border-amber-500 bg-[#1a2236]"
                  : "border-gray-800 bg-[#10172a] hover:border-gray-600 hover:bg-[#151d31]"
              }`}
            >
              <div className="mb-1 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-500">
                    #{i + 1}
                  </span>
                  <span className="font-medium text-white">{c.country}</span>
                </div>

                <span className={`font-semibold ${getRiskColor(prob)}`}>
                  {(prob * 100).toFixed(2)}%
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className={`${getRiskColor(prob)}`}>
                  {getRiskLabel(prob)}
                </span>

                <span className="text-gray-500">
                  {c.year} · Month {c.month}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}