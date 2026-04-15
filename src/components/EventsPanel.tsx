import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { css } from "styled-system/css";
import { useFilterStore } from "../store/useFilterStore";
import { filterEvents } from "../lib/filterHelpers";
import type { CoupEvent } from "../types/coup";
import type { MapRef } from "react-map-gl/maplibre";
import { OUTCOME_STYLES } from "../lib/outcomeStyles";
import { formatDate } from "../lib/date";

function countryCodeToFlag(code: string): string {
  if (!code || code.length !== 2) return "🏳️";
  const base = 0x1f1e6;
  const c1 = base + code.toUpperCase().charCodeAt(0)! - 65;
  const c2 = base + code.toUpperCase().charCodeAt(1)! - 65;
  return String.fromCodePoint(c1, c2);
}

export type EventsSort = "date-desc" | "date-asc" | "country-asc";

export interface EventsPanelProps {
  allEvents: CoupEvent[];
  mapRef: React.RefObject<MapRef | null>;
}

const panelStyle = css({
  display: "flex",
  width: "full",
  flexShrink: "0",
  flexDirection: "column",
  borderRightWidth: "1px",
  borderRightStyle: "solid",
  borderRightColor: "var(--colors-border-default)",
  backgroundColor: "var(--colors-bg-panel)",
  md: { width: "320px" },
});

const headerStyle = css({
  display: "flex",
  minHeight: "44px",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: "var(--colors-border-default)",
  paddingInline: "3",
  paddingBlock: "2.5",
  md: { paddingInline: "4", paddingBlock: "3" },
});

const sortButtonStyle = css({
  display: "flex",
  minHeight: "44px",
  minWidth: "44px",
  alignItems: "center",
  justifyContent: "center",
  gap: "1",
  borderRadius: "sm",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--colors-border-strong)",
  backgroundColor: "var(--colors-bg-muted)",
  paddingInline: "2",
  paddingBlock: "1.5",
  fontSize: "xs",
  color: "var(--colors-text-secondary)",
  cursor: "pointer",
  _hover: { backgroundColor: "var(--colors-bg-hover)" },
  md: { minHeight: "auto", minWidth: "auto", justifyContent: "flex-start" },
});

const sortMenuStyle = css({
  position: "absolute",
  right: "0",
  top: "100%",
  zIndex: "50",
  marginTop: "1",
  minWidth: "140px",
  borderRadius: "sm",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--colors-border-default)",
  backgroundColor: "var(--colors-bg-panel)",
  paddingBlock: "1",
  boxShadow: "var(--shadows-xl)",
});

const sortOptionStyle = css({
  width: "full",
  paddingInline: "3",
  paddingBlock: "1.5",
  textAlign: "left",
  fontSize: "sm",
  color: "var(--colors-text-secondary)",
  cursor: "pointer",
  _hover: { backgroundColor: "var(--colors-bg-hover)" },
});

const eventRowStyle = css({
  display: "flex",
  minHeight: "52px",
  width: "full",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1",
  paddingInline: "4",
  paddingBlock: "3.5",
  textAlign: "left",
  cursor: "pointer",
  _hover: { backgroundColor: "var(--colors-bg-hover)" },
});

export default function EventsPanel({ allEvents, mapRef }: EventsPanelProps) {
  const [sort, setSort] = useState<EventsSort>("date-desc");
  const [sortOpen, setSortOpen] = useState(false);

  const searchQuery = useFilterStore((s) => s.searchQuery);
  const selectedOutcomes = useFilterStore((s) => s.selectedOutcomes);
  const selectedRegions = useFilterStore((s) => s.selectedRegions);
  const dateRange = useFilterStore((s) => s.dateRange);
  const selectedTags = useFilterStore((s) => s.selectedTags);
  const setSelectedEvent = useFilterStore((s) => s.setSelectedEvent);

  const filteredEvents = useMemo(
    () => filterEvents(allEvents, { searchQuery, selectedOutcomes, selectedRegions, dateRange, selectedTags }),
    [allEvents, searchQuery, selectedOutcomes, selectedRegions, dateRange, selectedTags]
  );

  const sortedEvents = useMemo(() => {
    const list = [...filteredEvents];
    if (sort === "date-desc")
      list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    else if (sort === "date-asc")
      list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    else if (sort === "country-asc")
      list.sort((a, b) => a.country.localeCompare(b.country));
    return list;
  }, [filteredEvents, sort]);

  const handleSelect = (event: CoupEvent) => {
    const map = mapRef.current?.getMap();
    if (map) {
      map.flyTo({ center: [event.longitude, event.latitude], zoom: 5, duration: 800 });
    }
    setSelectedEvent(event);
  };

  const sortLabel = sort === "date-desc" ? "Newest first" : sort === "date-asc" ? "Oldest first" : "Country A–Z";

  return (
    <div className={panelStyle}>
      {/* Mobile drag handle */}
      <div className={css({ display: "flex", flexShrink: "0", justifyContent: "center", paddingTop: "2", md: { display: "none" } })} aria-hidden>
        <div className={css({ height: "1", width: "10", borderRadius: "full", backgroundColor: "var(--colors-bg-active)" })} />
      </div>

      <div className={headerStyle}>
        <span className={css({ fontSize: "sm", fontWeight: "medium", color: "var(--colors-text-secondary)" })}>
          {sortedEvents.length} event{sortedEvents.length !== 1 ? "s" : ""}
        </span>
        <div className={css({ position: "relative" })}>
          <button type="button" onClick={() => setSortOpen((o) => !o)} className={sortButtonStyle}>
            {sortLabel}
            <ChevronDown className={css({ height: "3.5", width: "3.5" })} />
          </button>
          {sortOpen && (
            <>
              <div className={css({ position: "fixed", inset: "0", zIndex: "40" })} aria-hidden onClick={() => setSortOpen(false)} />
              <div className={sortMenuStyle}>
                {(
                  [["date-desc", "Newest first"], ["date-asc", "Oldest first"], ["country-asc", "Country A–Z"]] as const
                ).map(([value, label]) => (
                  <button key={value} type="button" onClick={() => { setSort(value); setSortOpen(false); }} className={sortOptionStyle}>
                    {label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="panel-scroll" style={{ flex: 1, overflowY: "auto" }}>
        {sortedEvents.length === 0 ? (
          <div className={css({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2", paddingInline: "4", paddingBlock: "12", textAlign: "center", fontSize: "sm", color: "var(--colors-text-subtle)" })}>
            <p>No events match the current filters.</p>
            <p className={css({ fontSize: "xs" })}>Try adjusting search or filters.</p>
          </div>
        ) : (
          <ul className={css({ "& > li + li": { borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "var(--colors-border-default)" } })}>
            {sortedEvents.map((event) => {
              const style = OUTCOME_STYLES[event.outcome];
              return (
                <li key={event.id}>
                  <button type="button" onClick={() => handleSelect(event)} className={eventRowStyle}>
                    <div className={css({ display: "flex", alignItems: "center", gap: "2" })}>
                      <span className={css({ fontSize: "lg", lineHeight: "none" })}>
                        {countryCodeToFlag(event.countryCode)}
                      </span>
                      <span className={css({ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "sm", fontWeight: "medium", color: "var(--colors-text-primary)" })}>
                        {event.country}
                      </span>
                    </div>
                    <div className={css({ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2" })}>
                      <span className={style.badgeClass}>{style.label}</span>
                      <span className={css({ fontSize: "xs", color: "var(--colors-text-subtle)" })}>
                        {formatDate(event.date)}
                      </span>
                    </div>
                    {event.description && (
                      <p className={css({ overflow: "hidden", display: "-webkit-box", WebkitLineClamp: "1", fontSize: "xs", color: "var(--colors-text-muted)" })} style={{ WebkitBoxOrient: "vertical" }}>
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
