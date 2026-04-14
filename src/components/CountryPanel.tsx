import { useState } from "react";
import { X } from "lucide-react";
import type { CoupEvent } from "../types/coup";
import { OUTCOME_STYLES } from "../lib/outcomeStyles";
import { formatDate } from "../lib/date";

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
  const [selectedCoup, setSelectedCoup] = useState<CoupEvent | null>(null);

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
        {selectedCoup ? (
          // Description view
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setSelectedCoup(null)}
              className="text-xs text-gray-400 hover:text-gray-300 text-left"
            >
              ← Back to coups
            </button>
            <div>
              <h4 className="text-sm font-medium text-white mb-1">
                {selectedCoup.title}
              </h4>
              <div className="text-xs text-gray-500 mb-3">
                {formatDate(selectedCoup.date)}
              </div>
              {selectedCoup.outcome && (
                <div className="mb-3">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${
                      OUTCOME_STYLES[selectedCoup.outcome].badgeClass
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        OUTCOME_STYLES[selectedCoup.outcome].dotClass
                      }`}
                    />
                    {OUTCOME_STYLES[selectedCoup.outcome].label}
                  </span>
                </div>
              )}
              <p className="text-xs text-gray-300 leading-relaxed whitespace-pre-wrap">
                {selectedCoup.description || "Description coming soon..."}
              </p>
            </div>
          </div>
        ) : (
          // Coups list view
          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-500 mb-1">
              <span className="font-medium text-gray-300">{events.length}</span> coup
              {events.length !== 1 ? "s" : ""} in this country
            </p>
            <div className="space-y-2">
              {events.map((event) => {
                const style = OUTCOME_STYLES[event.outcome];
                return (
                  <button
                    key={event.id}
                    type="button"
                    onClick={() => setSelectedCoup(event)}
                    className="w-full text-left rounded border border-gray-700 bg-gray-800/40 p-2.5 transition-colors hover:bg-gray-800/60 text-xs"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="font-medium text-white truncate flex-1">
                        {event.title || event.id}
                      </span>
                      <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-xs whitespace-nowrap ${style.badgeClass}`}>
                        {style.label}
                      </span>
                    </div>
                    <div className="text-gray-500">
                      {formatDate(event.date)}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
