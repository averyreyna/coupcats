import { riskScoreToColor, NO_DATA_COLOR } from "../lib/riskColors";

export default function RiskMapLegend() {
  const gradientCSS = `linear-gradient(to right, ${riskScoreToColor(0)}, ${riskScoreToColor(0.25)}, ${riskScoreToColor(0.5)}, ${riskScoreToColor(0.75)}, ${riskScoreToColor(1.0)})`;

  return (
    <div className="absolute bottom-4 right-4 z-20 rounded-lg border border-gray-700 bg-[#0f1117]/95 p-4 backdrop-blur-sm max-w-xs">
      <div className="text-xs font-semibold text-gray-300 mb-3">CURRENT COUP RISK</div>

      {/* Risk gradient bar */}
      <div
        className="w-full h-5 rounded border border-gray-600 mb-1"
        style={{ background: gradientCSS }}
      />
      <div className="flex justify-between text-xs text-gray-400 mb-3">
        <span>Low Risk</span>
        <span>High Risk</span>
      </div>

      {/* No data swatch */}
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <div
          className="w-4 h-4 rounded border border-gray-600 shrink-0"
          style={{ background: NO_DATA_COLOR }}
        />
        <span>No Data</span>
      </div>

      <div className="text-xs text-gray-500 italic mt-2">
        Click a country to see risk details.
      </div>
    </div>
  );
}
