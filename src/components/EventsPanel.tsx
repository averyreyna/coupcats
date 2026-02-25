import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useFilterStore } from "../store/useFilterStore";
import { filterEvents } from "../lib/filterHelpers";
import type { CoupEvent, CoupOutcome } from "../types/coup";
import type { MapRef } from "react-map-gl/maplibre";

const OUTCOME_STYLES: Record<
  CoupOutcome,
  { bg: string; label: string }
> = {
  successful: { bg: "bg-emerald-500/20 text-emerald-300", label: "Successful" },
  failed: { bg: "bg-red-500/20 text-red-300", label: "Failed" },
  attempted: { bg: "bg-amber-500/20 text-amber-300", label: "Attempted" },
  plot: { bg: "bg-slate-500/20 text-slate-300", label: "Plot" },
  alleged: { bg: "bg-slate-500/20 text-slate-300", label: "Alleged" },
};

function countryCodeToFlag(code: string): string {
  if (!code || code.length !== 2) return "🏳️";
  const base = 0x1f1e6;
  const c1 = base + code.toUpperCase().charCodeAt(0)! - 65;
  const c2 = base + code.toUpperCase().charCodeAt(1)! - 65;
  return String.fromCodePoint(c1, c2);
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export type EventsSort = "date-desc" | "date-asc" | "country-asc";

export interface EventsPanelProps {
  events: CoupEvent[];
  mapRef: React.RefObject<MapRef | null>;
}

export default function EventsPanel({ events, mapRef }: EventsPanelProps) {
  const [sort, setSort] = useState<EventsSort>("date-desc");
  const [sortOpen, setSortOpen] = useState(false);

  const searchQuery = useFilterStore((s) => s.searchQuery);
  const selectedOutcomes = useFilterStore((s) => s.selectedOutcomes);
  const selectedRegions = useFilterStore((s) => s.selectedRegions);
  const dateRange = useFilterStore((s) => s.dateRange);
  const selectedTags = useFilterStore((s) => s.selectedTags);
  const setSelectedEvent = useFilterStore((s) => s.setSelectedEvent);

  const filtered = useMemo(
    () =>
      filterEvents(events, {
        searchQuery,
        selectedOutcomes,
        selectedRegions,
        dateRange,
        selectedTags,
      }),
    [
      events,
      searchQuery,
      selectedOutcomes,
      selectedRegions,
      dateRange,
      selectedTags,
    ]
  );

  const sorted = useMemo(() => {
    const list = [...filtered];
    if (sort === "date-desc")
      list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    else if (sort === "date-asc")
      list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    else if (sort === "country-asc")
      list.sort((a, b) => a.country.localeCompare(b.country));
    return list;
  }, [filtered, sort]);

  const handleSelect = (event: CoupEvent) => {
    const map = mapRef.current?.getMap();
    if (map) {
      map.flyTo({
        center: [event.longitude, event.latitude],
        zoom: 5,
        duration: 800,
      });
    }
    setSelectedEvent(event);
  };

  const sortLabel =
    sort === "date-desc"
      ? "Newest first"
      : sort === "date-asc"
        ? "Oldest first"
        : "Country A–Z";

  return (
    <div className="flex w-full shrink-0 flex-col border-r border-gray-800 bg-[#0f1117] md:w-[320px]">
      {/* Drag handle: mobile only */}
      <div className="flex flex-shrink-0 justify-center pt-2 md:hidden" aria-hidden>
        <div className="h-1 w-10 rounded-full bg-gray-600" />
      </div>
      <div className="flex min-h-[44px] items-center justify-between border-b border-gray-800 px-3 py-2.5 md:px-4 md:py-3">
        <span className="text-sm font-medium text-gray-300">
          {sorted.length} event{sorted.length !== 1 ? "s" : ""}
        </span>
        <div className="relative">
          <button
            type="button"
            onClick={() => setSortOpen((o) => !o)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-1 rounded border border-gray-700 bg-gray-800/80 px-2 py-1.5 text-xs text-gray-300 hover:bg-gray-700/80 md:min-h-0 md:min-w-0 md:justify-start"
          >
            {sortLabel}
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
          {sortOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                aria-hidden
                onClick={() => setSortOpen(false)}
              />
              <div className="absolute right-0 top-full z-50 mt-1 min-w-[140px] rounded border border-gray-700 bg-[#1a1d26] py-1 shadow-xl">
                {(
                  [
                    ["date-desc", "Newest first"],
                    ["date-asc", "Oldest first"],
                    ["country-asc", "Country A–Z"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setSort(value);
                      setSortOpen(false);
                    }}
                    className="w-full px-3 py-1.5 text-left text-sm text-gray-200 hover:bg-gray-800"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="panel-scroll flex-1 overflow-y-auto">
        {sorted.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 px-4 py-12 text-center text-sm text-gray-500">
            <p>No events match the current filters.</p>
            <p className="text-xs">Try adjusting search or filters.</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-800">
            {sorted.map((event) => {
              const style = OUTCOME_STYLES[event.outcome];
              return (
                <li key={event.id}>
                  <button
                    type="button"
                    onClick={() => handleSelect(event)}
                    className="flex min-h-[52px] w-full flex-col justify-center gap-1 px-4 py-3.5 text-left transition-colors hover:bg-gray-800/60"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg leading-none">
                        {countryCodeToFlag(event.countryCode)}
                      </span>
                      <span className="truncate text-sm font-medium text-white">
                        {event.title}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs ${style.bg}`}
                      >
                        {style.label}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatDate(event.date)}
                      </span>
                    </div>
                    {event.description && (
                      <p className="line-clamp-1 text-xs text-gray-400">
                        {event.description}
                      </p>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
