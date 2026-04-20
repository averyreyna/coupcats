import { X } from "lucide-react";
import { css } from "styled-system/css";
import type { CoupEvent } from "../types/coup";
import type { MapRef } from "react-map-gl/maplibre";
import { OUTCOME_STYLES } from "../lib/outcomeStyles";
import { formatDate } from "../lib/date";
import { useFilterStore } from "../store/useFilterStore";

function countryCodeToFlag(code: string): string {
  if (!code || code.length !== 2) return "🏳️";
  const base = 0x1f1e6;
  const c1 = base + code.toUpperCase().charCodeAt(0)! - 65;
  const c2 = base + code.toUpperCase().charCodeAt(1)! - 65;
  return String.fromCodePoint(c1, c2);
}

export interface CountryPanelProps {
  country: string;
  events: CoupEvent[];
  onClose: () => void;
  mapRef: React.RefObject<MapRef | null>;
}

const panelStyle = css({
  display: "flex",
  width: "full",
  minWidth: "0",
  flexShrink: "0",
  flexDirection: "column",
  borderLeftWidth: "1px",
  borderLeftStyle: "solid",
  borderLeftColor: "var(--colors-border-default)",
  backgroundColor: "var(--colors-bg-panel)",
  md: { width: "320px", minWidth: "320px", flexBasis: "320px" },
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

const closeButtonStyle = css({
  display: "flex",
  minHeight: "44px",
  minWidth: "44px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "sm",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--colors-border-strong)",
  backgroundColor: "var(--colors-bg-muted)",
  padding: "1",
  color: "var(--colors-text-muted)",
  cursor: "pointer",
  _hover: { backgroundColor: "var(--colors-bg-hover)" },
  md: { minHeight: "auto", minWidth: "auto" },
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
  border: "none",
  cursor: "pointer",
  _hover: { backgroundColor: "var(--colors-bg-hover)" },
});

export default function CountryPanel({
  country,
  events,
  onClose,
  mapRef,
}: CountryPanelProps) {
  const setSelectedEvent = useFilterStore((s) => s.setSelectedEvent);

  const handleSelect = (event: CoupEvent) => {
    const map = mapRef.current?.getMap();
    if (map) {
      map.flyTo({ center: [event.longitude, event.latitude], zoom: 5, duration: 800 });
    }
    setSelectedEvent(event);
  };

  return (
    <div className={panelStyle}>
      {/* Header */}
      <div className={headerStyle}>
        <span className={css({ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "sm", fontWeight: "medium", color: "var(--colors-text-secondary)" })}>
          {country}
        </span>
        <button type="button" onClick={onClose} className={closeButtonStyle}>
          <X className={css({ height: "4", width: "4" })} />
        </button>
      </div>

      {/* Content */}
      <div className="panel-scroll" style={{ flex: 1, overflowY: "auto" }}>
        {events.length === 0 ? (
          <div className={css({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2", paddingInline: "4", paddingBlock: "12", textAlign: "center", fontSize: "sm", color: "var(--colors-text-subtle)" })}>
            <p>No coup events found for this country.</p>
          </div>
        ) : (
          <ul className={css({ listStyle: "none", margin: "0", padding: "0", "& > li + li": { borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "var(--colors-border-default)" } })}>
            {events.map((event) => {
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
