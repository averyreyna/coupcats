import { Search } from "lucide-react";
import FilterDropdown from "./FilterDropdown";
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

export interface ToolbarProps {
  regions: string[];
  tags: string[];
}

export default function Toolbar({ regions, tags }: ToolbarProps) {
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
    <div className="absolute left-0 right-0 top-0 z-10 flex flex-col gap-2 border-b border-gray-800/50 bg-[#0f1117]/80 px-3 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-sm md:flex-row md:items-center md:justify-between md:gap-4 md:px-4">
      <div className="flex min-w-0 flex-1 items-center">
        <div className="relative flex w-full max-w-md items-center">
          <Search className="absolute left-3 h-4 w-4 text-gray-500" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for anything..."
            className="min-h-[44px] w-full rounded-lg border border-gray-700 bg-gray-800/90 py-2.5 pl-9 pr-3 text-sm text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
          />
        </div>
      </div>
      <div className="flex min-w-0 shrink-0 items-center gap-2 overflow-x-auto pb-1 md:overflow-visible md:pb-0">
        <FilterDropdown label="Status">
          <div className="flex flex-col gap-0.5 px-2">
            {OUTCOMES.map(({ value, label }) => (
              <label
                key={value}
                className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 hover:bg-gray-800"
              >
                <input
                  type="checkbox"
                  checked={selectedOutcomes.includes(value)}
                  onChange={() => toggleOutcome(value)}
                  className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500/50"
                />
                <span className="text-sm text-gray-200">{label}</span>
              </label>
            ))}
          </div>
        </FilterDropdown>
        <FilterDropdown label="Date">
          <div className="flex max-h-48 flex-col gap-0.5 overflow-y-auto px-2 py-1">
            {DECADES.map((decade) => (
              <label
                key={decade}
                className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 hover:bg-gray-800"
              >
                <input
                  type="checkbox"
                  checked={selectedDecades.includes(decade)}
                  onChange={() => toggleDecade(decade)}
                  className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500/50"
                />
                <span className="text-sm text-gray-200">{decade}s</span>
              </label>
            ))}
          </div>
        </FilterDropdown>
        <FilterDropdown label="Region">
          <div className="flex max-h-48 flex-col gap-0.5 overflow-y-auto px-2 py-1">
            {regions.length === 0 ? (
              <span className="px-2 py-2 text-sm text-gray-500">
                No regions in data
              </span>
            ) : (
              regions.map((region) => (
                <label
                  key={region}
                  className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 hover:bg-gray-800"
                >
                  <input
                    type="checkbox"
                    checked={selectedRegions.includes(region)}
                    onChange={() => toggleRegion(region)}
                    className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500/50"
                  />
                  <span className="text-sm text-gray-200">{region}</span>
                </label>
              ))
            )}
          </div>
        </FilterDropdown>
        <FilterDropdown label="Tags">
          <div className="flex max-h-48 flex-col gap-0.5 overflow-y-auto px-2 py-1">
            {tags.length === 0 ? (
              <span className="px-2 py-2 text-sm text-gray-500">
                No tags in data
              </span>
            ) : (
              tags.map((tag) => (
                <label
                  key={tag}
                  className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 hover:bg-gray-800"
                >
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => toggleTag(tag)}
                    className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500/50"
                  />
                  <span className="text-sm text-gray-200">{tag}</span>
                </label>
              ))
            )}
          </div>
        </FilterDropdown>
      </div>
    </div>
  );
}
