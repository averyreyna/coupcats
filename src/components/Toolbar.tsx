import { Search } from "lucide-react";
import { css } from "styled-system/css";
import FilterDropdown from "./FilterDropdown";
import FilterCheckboxItem from "./FilterCheckboxItem";
import { useFilterStore } from "../store/useFilterStore";
import type { CoupOutcome } from "../types/coup";

const OUTCOMES: { value: CoupOutcome; label: string }[] = [
  { value: "successful", label: "Successful" },
  { value: "failed", label: "Failed" },
];

const DECADES = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

export interface ToolbarProps {
  regions: string[];
  tags: string[];
}

const toolbarStyle = css({
  position: "absolute",
  left: "0",
  right: "0",
  top: "0",
  zIndex: "10",
  display: "flex",
  flexDirection: "column",
  gap: "2",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: "var(--colors-border-default)",
  backgroundColor: "color-mix(in srgb, var(--colors-bg-app) 85%, transparent)",
  backdropFilter: "blur(8px)",
  paddingInline: "3",
  paddingBlock: "3",
  paddingTop: "max(0.75rem, env(safe-area-inset-top))",
  md: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "4",
    paddingInline: "4",
  },
});

const searchWrapperStyle = css({
  display: "flex",
  minWidth: "0",
  flex: "1",
  alignItems: "center",
});

const searchInnerStyle = css({
  position: "relative",
  display: "flex",
  width: "full",
  maxWidth: "md",
  alignItems: "center",
});

const searchInputStyle = css({
  minHeight: "44px",
  width: "full",
  borderRadius: "lg",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--colors-border-strong)",
  backgroundColor: "var(--colors-bg-panel)",
  paddingBlock: "2.5",
  paddingLeft: "9",
  paddingRight: "3",
  fontSize: "sm",
  color: "var(--colors-text-primary)",
  _placeholder: { color: "var(--colors-text-subtle)" },
  _focus: {
    outline: "none",
    borderColor: "var(--colors-accent-default)",
    boxShadow: "0 0 0 3px color-mix(in srgb, #FF6A00 15%, transparent)",
  },
});

const filtersRowStyle = css({
  display: "flex",
  minWidth: "0",
  flexShrink: "0",
  alignItems: "center",
  gap: "2",
  overflowX: "auto",
  paddingBottom: "1",
  md: { overflow: "visible", paddingBottom: "0" },
});

const toggleGroupStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "1",
  borderRadius: "lg",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--colors-border-strong)",
  backgroundColor: "var(--colors-bg-muted)",
  padding: "1",
});

function viewModeButtonStyle(active: boolean) {
  return css({
    paddingInline: "3",
    paddingBlock: "1.5",
    borderRadius: "sm",
    fontSize: "sm",
    fontWeight: "medium",
    cursor: "pointer",
    ...(active
      ? {
          backgroundColor: "var(--colors-accent-muted)",
          color: "var(--colors-accent-text)",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "color-mix(in srgb, #FF6A00 30%, transparent)",
        }
      : {
          color: "var(--colors-text-muted)",
          _hover: { color: "var(--colors-text-secondary)" },
        }),
  });
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
  const viewMode = useFilterStore((s) => s.viewMode);
  const setViewMode = useFilterStore((s) => s.setViewMode);

  return (
    <div className={toolbarStyle}>
      <div className={searchWrapperStyle}>
        <div className={searchInnerStyle}>
          <Search className={css({ position: "absolute", left: "3", height: "4", width: "4", color: "var(--colors-text-subtle)" })} />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for anything..."
            className={searchInputStyle}
          />
        </div>
      </div>

      <div className={filtersRowStyle}>
        {/* View Mode Toggle */}
        <div className={toggleGroupStyle}>
          <button onClick={() => setViewMode("events")} className={viewModeButtonStyle(viewMode === "events")}>
            Events
          </button>
          <button onClick={() => setViewMode("risk")} className={viewModeButtonStyle(viewMode === "risk")}>
            Coup Risk
          </button>
        </div>

        {/* Filters — events mode only */}
        {viewMode === "events" && (
          <>
            <FilterDropdown label="Status">
              <div className={css({ display: "flex", flexDirection: "column", gap: "0.5", paddingInline: "2" })}>
                {OUTCOMES.map(({ value, label }) => (
                  <FilterCheckboxItem key={value} label={label} checked={selectedOutcomes.includes(value)} onChange={() => toggleOutcome(value)} />
                ))}
              </div>
            </FilterDropdown>
            <FilterDropdown label="Date">
              <div className={css({ display: "flex", maxHeight: "48", flexDirection: "column", gap: "0.5", overflowY: "auto", paddingInline: "2", paddingBlock: "1" })}>
                {DECADES.map((decade) => (
                  <FilterCheckboxItem key={decade} label={`${decade}s`} checked={selectedDecades.includes(decade)} onChange={() => toggleDecade(decade)} />
                ))}
              </div>
            </FilterDropdown>
            <FilterDropdown label="Region">
              <div className={css({ display: "flex", maxHeight: "48", flexDirection: "column", gap: "0.5", overflowY: "auto", paddingInline: "2", paddingBlock: "1" })}>
                {regions.length === 0 ? (
                  <span className={css({ paddingInline: "2", paddingBlock: "2", fontSize: "sm", color: "var(--colors-text-subtle)" })}>No regions in data</span>
                ) : (
                  regions.map((region) => (
                    <FilterCheckboxItem key={region} label={region} checked={selectedRegions.includes(region)} onChange={() => toggleRegion(region)} />
                  ))
                )}
              </div>
            </FilterDropdown>
            <FilterDropdown label="Tags">
              <div className={css({ display: "flex", maxHeight: "48", flexDirection: "column", gap: "0.5", overflowY: "auto", paddingInline: "2", paddingBlock: "1" })}>
                {tags.length === 0 ? (
                  <span className={css({ paddingInline: "2", paddingBlock: "2", fontSize: "sm", color: "var(--colors-text-subtle)" })}>No tags in data</span>
                ) : (
                  tags.map((tag) => (
                    <FilterCheckboxItem key={tag} label={tag} checked={selectedTags.includes(tag)} onChange={() => toggleTag(tag)} />
                  ))
                )}
              </div>
            </FilterDropdown>
          </>
        )}
      </div>
    </div>
  );
}
