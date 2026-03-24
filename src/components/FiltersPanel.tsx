import FilterCheckboxItem from "./FilterCheckboxItem";
import { useFilterStore } from "../store/useFilterStore";
import type { CoupOutcome } from "../types/coup";

const OUTCOMES: { value: CoupOutcome; label: string }[] = [
  { value: "successful", label: "Successful" },
  { value: "failed", label: "Failed" },
  { value: "attempted", label: "Attempted" },
  { value: "plot", label: "Plot" },
  { value: "alleged", label: "Alleged" },
];

const DECADES = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

interface FiltersPanelProps {
  onClose: () => void;
  regions: string[];
  tags: string[];
}

export default function FiltersPanel({
  onClose,
  regions,
  tags,
}: FiltersPanelProps) {
  const selectedOutcomes = useFilterStore((s) => s.selectedOutcomes);
  const toggleOutcome = useFilterStore((s) => s.toggleOutcome);

  const selectedDecades = useFilterStore((s) => s.selectedDecades);
  const toggleDecade = useFilterStore((s) => s.toggleDecade);

  const selectedRegions = useFilterStore((s) => s.selectedRegions);
  const toggleRegion = useFilterStore((s) => s.toggleRegion);

  const selectedTags = useFilterStore((s) => s.selectedTags);
  const toggleTag = useFilterStore((s) => s.toggleTag);

  const yearRange = useFilterStore((s) => s.yearRange);
  const setYearRange = useFilterStore((s) => s.setYearRange);

  const reset = useFilterStore((s) => s.reset);

  const MIN_YEAR = 1950;
  const MAX_YEAR = 2026;

  const leftPercent = ((yearRange[0] - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100;
  const rightPercent =
    ((yearRange[1] - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100;

  return (
    <div className="flex h-full w-full flex-col bg-[#0f1117] text-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold">Filters</h2>
          <p className="text-xs text-gray-400">Advanced filtering options</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={reset}
            className="rounded-md border border-gray-700 bg-gray-800 px-3 py-1.5 text-xs text-gray-300 transition hover:bg-gray-700"
          >
            Reset
          </button>

          <button
            type="button"
            onClick={onClose}
            className="rounded-md px-3 py-1.5 text-sm text-gray-300 transition hover:bg-gray-800 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="flex flex-col gap-6">
          {/* Timeline */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                Timeline
              </h3>
              <div className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                {yearRange[0]} — {yearRange[1]}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#151925] p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between text-xs text-gray-500">
                <span>{MIN_YEAR}</span>
                <span>{MAX_YEAR}</span>
              </div>

              <div className="relative h-10">
                <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 rounded-full bg-gray-700" />

                <div
                  className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-amber-500"
                  style={{
                    left: `${leftPercent}%`,
                    width: `${rightPercent - leftPercent}%`,
                  }}
                />

                <input
                  type="range"
                  min={MIN_YEAR}
                  max={MAX_YEAR}
                  value={yearRange[0]}
                  onChange={(e) => {
                    const nextMin = Number(e.target.value);
                    if (nextMin <= yearRange[1]) {
                      setYearRange([nextMin, yearRange[1]]);
                    }
                  }}
                  className="timeline-slider absolute inset-0 w-full"
                />

                <input
                  type="range"
                  min={MIN_YEAR}
                  max={MAX_YEAR}
                  value={yearRange[1]}
                  onChange={(e) => {
                    const nextMax = Number(e.target.value);
                    if (nextMax >= yearRange[0]) {
                      setYearRange([yearRange[0], nextMax]);
                    }
                  }}
                  className="timeline-slider absolute inset-0 w-full"
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setYearRange([1950, 2026])}
                  className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-300 transition hover:bg-gray-700"
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setYearRange([1950, 1990])}
                  className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-300 transition hover:bg-gray-700"
                >
                  Cold War
                </button>
                <button
                  type="button"
                  onClick={() => setYearRange([1991, 2026])}
                  className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-300 transition hover:bg-gray-700"
                >
                  Post-1990
                </button>
              </div>
            </div>
          </div>

          {/* Status */}
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase text-gray-400">
              Status
            </h3>

            <div className="flex flex-col gap-1">
              {OUTCOMES.map(({ value, label }) => (
                <FilterCheckboxItem
                  key={value}
                  label={label}
                  checked={selectedOutcomes.includes(value)}
                  onChange={() => toggleOutcome(value)}
                />
              ))}
            </div>
          </div>

          {/* Date */}
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase text-gray-400">
              Date
            </h3>

            <div className="flex flex-col gap-1">
              {DECADES.map((decade) => (
                <FilterCheckboxItem
                  key={decade}
                  label={`${decade}s`}
                  checked={selectedDecades.includes(decade)}
                  onChange={() => toggleDecade(decade)}
                />
              ))}
            </div>
          </div>

          {/* Region */}
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase text-gray-400">
              Region
            </h3>

            <div className="flex flex-col gap-1">
              {regions.map((region) => (
                <FilterCheckboxItem
                  key={region}
                  label={region}
                  checked={selectedRegions.includes(region)}
                  onChange={() => toggleRegion(region)}
                />
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase text-gray-400">
              Tags
            </h3>

            <div className="flex flex-col gap-1">
              {tags.map((tag) => (
                <FilterCheckboxItem
                  key={tag}
                  label={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={() => toggleTag(tag)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
