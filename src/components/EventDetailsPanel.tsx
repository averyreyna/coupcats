import { X } from "lucide-react";
import { css } from "styled-system/css";
import { Link } from "react-router-dom";
import type { CoupEvent } from "../types/coup";
import { OUTCOME_STYLES } from "../lib/outcomeStyles";
import { formatDate } from "../lib/date";
import { narratives } from "../data/narratives";

function countryCodeToFlag(code: string): string {
  if (!code || code.length !== 2) return "🏳️";
  const base = 0x1f1e6;
  const c1 = base + code.toUpperCase().charCodeAt(0)! - 65;
  const c2 = base + code.toUpperCase().charCodeAt(1)! - 65;
  return String.fromCodePoint(c1, c2);
}

export interface EventDetailsPanelProps {
  event: CoupEvent;
  onClose: () => void;
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

const contentStyle = css({
  minHeight: "0",
  flex: "1",
  overflowY: "auto",
  paddingInline: "3",
  paddingBlock: "3",
  md: { paddingInline: "4" },
});

const eventHeaderStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "2",
  marginBottom: "3",
});

const dateStyle = css({
  fontSize: "sm",
  color: "var(--colors-text-subtle)",
  marginBottom: "2",
});

const descriptionStyle = css({
  fontSize: "sm",
  color: "var(--colors-text-primary)",
  marginBottom: "4",
  lineHeight: "relaxed",
});

const narrativeHeaderStyle = css({
  fontSize: "sm",
  fontWeight: "medium",
  color: "var(--colors-text-primary)",
  marginBottom: "2",
});

const narrativeContentStyle = css({
  fontSize: "sm",
  color: "var(--colors-text-secondary)",
  lineHeight: "relaxed",
  marginBottom: "4",
});

const narrativeLinkStyle = css({
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "md",
  backgroundColor: "#f59e0b",
  paddingInline: "3",
  paddingBlock: "1.5",
  fontSize: "xs",
  fontWeight: "medium",
  color: "black",
  textDecoration: "none",
});

const narrativeMissingStyle = css({
  fontSize: "sm",
  color: "var(--colors-text-subtle)",
});

export default function EventDetailsPanel({
  event,
  onClose,
}: EventDetailsPanelProps) {
  const style = OUTCOME_STYLES[event.outcome];
  const narrative = narratives[event.id];
  const hasNarrative = narrative?.content?.length > 0;

  return (
    <div className={panelStyle}>
      {/* Header */}
      <div className={headerStyle}>
        <span className={css({ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "sm", fontWeight: "medium", color: "var(--colors-text-secondary)" })}>
          Event Details
        </span>
        <button type="button" onClick={onClose} className={closeButtonStyle}>
          <X className={css({ height: "4", width: "4" })} />
        </button>
      </div>

      {/* Content */}
      <div className={contentStyle}>
        <div className={eventHeaderStyle}>
          <span className={css({ fontSize: "lg", lineHeight: "none" })}>
            {countryCodeToFlag(event.countryCode)}
          </span>
          <span className={css({ fontSize: "sm", fontWeight: "medium", color: "var(--colors-text-primary)" })}>
            {event.country}
          </span>
        </div>

        <span className={style.badgeClass}>
          <span className={style.dotClass} />
          {style.label}
        </span>

        <div className={dateStyle}>
          {formatDate(event.date)}
        </div>

        {event.description && (
          <p className={descriptionStyle}>
            {event.description}
          </p>
        )}

        <div className={narrativeHeaderStyle}>
          Narrative
        </div>

        {hasNarrative ? (
          <div>
            <div className={narrativeContentStyle}>
              <p>
                {narrative.content[0].length > 180
                  ? `${narrative.content[0].slice(0, 180).trimEnd()}…`
                  : narrative.content[0]}
              </p>
            </div>
            <Link
              to={`/narrative/${event.id}`}
              className={narrativeLinkStyle}
            >
              Read Full Narrative
            </Link>
          </div>
        ) : (
          <div className={narrativeMissingStyle}>
            Narrative coming soon...
          </div>
        )}
      </div>
    </div>
  );
}