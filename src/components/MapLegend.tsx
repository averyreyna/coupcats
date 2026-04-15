import { OUTCOME_COLORS, OUTCOME_LABELS, PREDICTION_COLOR_STOPS, PREDICTION_NULL_COLOR } from "../lib/colors";
import type { CoupOutcome } from "../types/coup";
import { useFilterStore } from "../store/useFilterStore";

const OUTCOMES: CoupOutcome[] = [
  "successful",
  "failed",
];

export default function MapLegend() {
  const viewMode = useFilterStore((s) => s.viewMode);

  if (viewMode === "risk") {
    return (
      <div className="absolute bottom-20 right-[max(1rem,env(safe-area-inset-right))] z-10 rounded-lg border border-gray-700/50 bg-[#1a1d26]/95 px-3 py-2 shadow-lg backdrop-blur-sm md:bottom-4 md:right-4">
        <div className="mb-1.5 text-xs font-medium text-gray-400">Coup Risk</div>
        <div className="flex flex-col gap-1">
          {PREDICTION_COLOR_STOPS.map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2 text-xs text-gray-300">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded border border-gray-600"
                style={{ backgroundColor: color }}
              />
              {label}
            </div>
          ))}
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded border border-gray-600"
              style={{ backgroundColor: PREDICTION_NULL_COLOR }}
            />
            No data
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute bottom-20 right-[max(1rem,env(safe-area-inset-right))] z-10 rounded-lg border border-gray-700/50 bg-[#1a1d26]/95 px-3 py-2 shadow-lg backdrop-blur-sm md:bottom-4 md:right-4">
      <div className="mb-1.5 text-xs font-medium text-gray-400">Outcome</div>
      <div className="flex flex-col gap-1">
        {OUTCOMES.map((outcome) => (
          <div
            key={outcome}
            className="flex items-center gap-2 text-xs text-gray-300"
          >
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full border border-gray-600"
              style={{ backgroundColor: OUTCOME_COLORS[outcome] }}
            />
            {OUTCOME_LABELS[outcome]}
          </div>
        ))}
      </div>
    </div>
  );
}
