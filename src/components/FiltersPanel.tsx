import { Search } from "lucide-react";
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
  const searchQuery = useFilterStore((s) => s.searchQuery);
  const setSearchQuery = useFilterStore((s) => s.setSearchQuery);

  const selectedOutcomes = useFilterStore((s) => s.selectedOutcomes);
  const toggleOutcome = useFilterStore((s) => s.toggleOutcome);

  const selectedDecades = useFilterStore((s) => s.selectedDecades);
  const toggleDecade = useFilterStore((s) => s.toggleDecade);

  const selectedRegions = useFilterStore((s) => s.selectedRegions);
  const toggleRegion = useFilterStore((s) => s.toggleRegion);

  const selectedTags = useFilterStore((s) => s.selectedTags);
  const toggleTag = useFilterStore((s) => s.toggleTag);

  return (
    <div className="flex h-full w-full flex-col bg-[#0f1117] text-white">
      <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold">Filters</h2>
          <p className="text-xs text-gray-400">Advanced filtering options</p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-md px-3 py-1.5 text-sm text-gray-300 transition hover:bg-gray-800 hover:text-white"
        >
          Close
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="flex flex-col gap-6">
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

          <div className="mt-2 border-t border-gray-800 pt-4">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Timeline Controls
            </h3>

            <div className="flex flex-col gap-3">
              <div className="rounded-lg border border-gray-800 bg-[#151925] p-3 text-sm text-gray-400">
                Year range slider (coming soon)
              </div>

              <button
                type="button"
                className="rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-300 transition hover:bg-gray-700"
                disabled
              >
                Reset Filters (coming soon)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
