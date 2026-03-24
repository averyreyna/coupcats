import { X } from "lucide-react";
import type { CoupEvent } from "../types/coup";

export interface CountryPanelProps {
  country: string;
  events: CoupEvent[];
  onClose: () => void;
}

export default function CountryPanel({
  country,
  events,
  onClose,
}: CountryPanelProps) {
  return (
    <div className="flex w-full shrink-0 flex-col border-l border-gray-800 bg-[#0f1117] md:w-[320px]">
      {/* Header */}
      <div className="flex min-h-[44px] items-center justify-between border-b border-gray-800 px-3 py-2.5 md:px-4 md:py-3">
        <span className="truncate text-sm font-medium text-gray-300">
          {country}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-gray-700 bg-gray-800/80 p-1 text-gray-400 hover:bg-gray-700/80 md:min-h-0 md:min-w-0"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Content */}
      <div className="min-h-0 flex-1 overflow-y-auto px-3 py-3 md:px-4">
        <div className="text-sm text-gray-300">
          <p className="mb-2">
            <span className="font-medium text-gray-200">{events.length}</span>{" "}
            coup{events.length !== 1 ? "s" : ""} in this country
          </p>
          <p className="text-xs text-gray-500">
            Country details coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
