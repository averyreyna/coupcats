import { ChevronRight } from "lucide-react";
import { getRiskLeaderboard } from "../data/mockRiskData";

export interface RiskLeaderboardPanelProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function RiskLeaderboardPanel({
  isOpen,
  onToggle,
}: RiskLeaderboardPanelProps) {
  const leaderboard = getRiskLeaderboard();

  return (
    <>
      {/* Collapsed tab */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="absolute right-3 top-16 z-20 rounded-lg border border-gray-800 bg-[#0f1117]/95 p-2 text-gray-300 hover:bg-gray-900 hover:text-white md:right-4 md:top-20"
          aria-label="Open risk leaderboard"
          title="Open Coup Risk Rankings"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {/* Open panel */}
      {isOpen && (
        <aside className="absolute right-3 top-16 z-30 w-80 max-w-[calc(100%-1.5rem)] rounded-xl border border-gray-800 bg-[#0f1117]/95 shadow-2xl backdrop-blur-sm md:right-4 md:top-20 flex flex-col max-h-96">
          {/* Header */}
          <div className="border-b border-gray-800 px-4 py-3 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Overall Coup Likelihood
                </h3>
              </div>
              <button
                onClick={onToggle}
                className="rounded-md p-1 text-gray-400 hover:bg-gray-800 hover:text-white"
                aria-label="Collapse risk leaderboard"
                title="Collapse panel"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Leaderboard list */}
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-px">
              {leaderboard.map((entry, index) => (
                <div
                  key={entry.countryCode}
                  className="border-b border-gray-800/50 px-3 py-2 hover:bg-gray-900/30"
                >
                  <div className="flex items-center gap-2 justify-between">
                    {/* Rank and country */}
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-semibold text-amber-300">
                        {index + 1}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-medium text-white">
                          {entry.countryName}
                        </p>
                      </div>
                    </div>

                    {/* Risk score */}
                    <div className="flex-shrink-0 text-right">
                      <p className="text-xs font-semibold text-amber-300">
                        {Math.round(entry.riskScore * 100)}%
                      </p>
                    </div>
                  </div>

                  {/* Risk bar */}
                  <div className="mt-1.5 h-1 w-full rounded-full bg-gray-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-500/80 to-red-500/80"
                      style={{
                        width: `${Math.max(0, Math.min(100, entry.riskScore * 100))}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
