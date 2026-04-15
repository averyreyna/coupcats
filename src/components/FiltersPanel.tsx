import { css } from "styled-system/css";
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

const sectionHeadingStyle = css({
  marginBottom: "2",
  fontSize: "xs",
  fontWeight: "semibold",
  textTransform: "uppercase",
  letterSpacing: "wide",
  color: "var(--colors-text-muted)",
});

const presetButtonStyle = css({
  borderRadius: "full",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--colors-border-strong)",
  backgroundColor: "var(--colors-bg-muted)",
  paddingInline: "3",
  paddingBlock: "1",
  fontSize: "xs",
  color: "var(--colors-text-secondary)",
  cursor: "pointer",
  transition: "background-color",
  _hover: { backgroundColor: "var(--colors-bg-hover)" },
});

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
  const rightPercent = ((yearRange[1] - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100;

  return (
    <div className={css({ display: "flex", height: "full", width: "full", flexDirection: "column", backgroundColor: "var(--colors-bg-panel)", color: "var(--colors-text-primary)" })}>
      {/* Header */}
      <div className={css({ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "var(--colors-border-default)", paddingInline: "4", paddingBlock: "3" })}>
        <div>
          <h2 className={css({ fontSize: "sm", fontWeight: "semibold", color: "var(--colors-text-primary)" })}>Filters</h2>
          <p className={css({ fontSize: "xs", color: "var(--colors-text-muted)" })}>Advanced filtering options</p>
        </div>
        <div className={css({ display: "flex", alignItems: "center", gap: "2" })}>
          <button
            type="button"
            onClick={reset}
            className={css({
              borderRadius: "md",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "var(--colors-border-strong)",
              backgroundColor: "var(--colors-bg-muted)",
              paddingInline: "3",
              paddingBlock: "1.5",
              fontSize: "xs",
              color: "var(--colors-text-secondary)",
              cursor: "pointer",
              _hover: { backgroundColor: "var(--colors-bg-hover)" },
            })}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={onClose}
            className={css({
              borderRadius: "md",
              paddingInline: "3",
              paddingBlock: "1.5",
              fontSize: "sm",
              color: "var(--colors-text-secondary)",
              cursor: "pointer",
              _hover: { backgroundColor: "var(--colors-bg-hover)", color: "var(--colors-text-primary)" },
            })}
          >
            Close
          </button>
        </div>
      </div>

      {/* Content */}
      <div className={css({ flex: "1", overflowY: "auto", paddingInline: "4", paddingBlock: "4" })}>
        <div className={css({ display: "flex", flexDirection: "column", gap: "6" })}>
          {/* Timeline */}
          <div>
            <div className={css({ marginBottom: "3", display: "flex", alignItems: "center", justifyContent: "space-between" })}>
              <h3 className={sectionHeadingStyle}>Timeline</h3>
              <div className={css({
                borderRadius: "full",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "var(--colors-accent-muted)",
                backgroundColor: "var(--colors-accent-muted)",
                paddingInline: "3",
                paddingBlock: "1",
                fontSize: "xs",
                fontWeight: "medium",
                color: "var(--colors-accent-text)",
              })}>
                {yearRange[0]} — {yearRange[1]}
              </div>
            </div>

            <div className={css({
              borderRadius: "2xl",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "var(--colors-border-default)",
              backgroundColor: "var(--colors-bg-subtle)",
              padding: "4",
              boxShadow: "var(--shadows-sm)",
            })}>
              <div className={css({ marginBottom: "4", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "xs", color: "var(--colors-text-subtle)" })}>
                <span>{MIN_YEAR}</span>
                <span>{MAX_YEAR}</span>
              </div>

              <div className={css({ position: "relative", height: "10" })}>
                <div className={css({ position: "absolute", top: "50%", left: "0", right: "0", height: "2", transform: "translateY(-50%)", borderRadius: "full", backgroundColor: "var(--colors-bg-active)" })} />

                <div
                  className={css({ position: "absolute", top: "50%", height: "2", transform: "translateY(-50%)", borderRadius: "full", backgroundColor: "var(--colors-accent-default)" })}
                  style={{ left: `${leftPercent}%`, width: `${rightPercent - leftPercent}%` }}
                />

                <input
                  type="range"
                  min={MIN_YEAR}
                  max={MAX_YEAR}
                  value={yearRange[0]}
                  onChange={(e) => {
                    const nextMin = Number(e.target.value);
                    if (nextMin <= yearRange[1]) setYearRange([nextMin, yearRange[1]]);
                  }}
                  className="timeline-slider"
                  style={{ position: "absolute", inset: 0, width: "100%" }}
                />

                <input
                  type="range"
                  min={MIN_YEAR}
                  max={MAX_YEAR}
                  value={yearRange[1]}
                  onChange={(e) => {
                    const nextMax = Number(e.target.value);
                    if (nextMax >= yearRange[0]) setYearRange([yearRange[0], nextMax]);
                  }}
                  className="timeline-slider"
                  style={{ position: "absolute", inset: 0, width: "100%" }}
                />
              </div>

              <div className={css({ marginTop: "4", display: "flex", flexWrap: "wrap", gap: "2" })}>
                <button type="button" onClick={() => setYearRange([1950, 2026])} className={presetButtonStyle}>All</button>
                <button type="button" onClick={() => setYearRange([1950, 1990])} className={presetButtonStyle}>Cold War</button>
                <button type="button" onClick={() => setYearRange([1991, 2026])} className={presetButtonStyle}>Post-1990</button>
              </div>
            </div>
          </div>

          {/* Status */}
          <div>
            <h3 className={sectionHeadingStyle}>Status</h3>
            <div className={css({ display: "flex", flexDirection: "column", gap: "1" })}>
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
            <h3 className={sectionHeadingStyle}>Date</h3>
            <div className={css({ display: "flex", flexDirection: "column", gap: "1" })}>
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
            <h3 className={sectionHeadingStyle}>Region</h3>
            <div className={css({ display: "flex", flexDirection: "column", gap: "1" })}>
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
          {tags.length > 0 && (
            <div>
              <h3 className={sectionHeadingStyle}>Tags</h3>
              <div className={css({ display: "flex", flexDirection: "column", gap: "1" })}>
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
          )}
        </div>
      </div>
    </div>
  );
}
