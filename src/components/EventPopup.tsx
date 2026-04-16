import { css } from "styled-system/css";
import { Link } from "react-router-dom";
import { narratives } from "../data/narratives";
import type { CoupEvent } from "../types/coup";
import { OUTCOME_STYLES } from "../lib/outcomeStyles";
import { formatDate } from "../lib/date";

export interface EventPopupProps {
  event: CoupEvent;
  onNavigateToNarrative?: () => void;
}

const cardStyle = css({
  minWidth: "240px",
  maxWidth: "min(320px, calc(100vw - 2rem))",
  borderRadius: "lg",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--colors-border-default)",
  backgroundColor: "var(--colors-bg-panel)",
  boxShadow: "var(--shadows-xl)",
  paddingTop: "4",
  paddingRight: "4",
  paddingBottom: "3",
  paddingLeft: "3",
  fontFamily: "var(--fonts-sans)",
});

const idStyle = css({
  fontSize: "xs",
  color: "var(--colors-text-subtle)",
  fontFamily: "var(--fonts-mono)",
});

const countryStyle = css({
  marginTop: "0.5",
  fontSize: "sm",
  fontWeight: "bold",
  color: "var(--colors-text-primary)",
});

const tagRowStyle = css({
  marginTop: "1.5",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "1.5",
});

const geoTagStyle = css({
  borderRadius: "full",
  backgroundColor: "var(--colors-bg-muted)",
  paddingInline: "2",
  paddingBlock: "0.5",
  fontSize: "xs",
  color: "var(--colors-text-muted)",
});

const descStyle = css({
  marginTop: "1.5",
  fontSize: "xs",
  color: "var(--colors-text-muted)",
  lineHeight: "relaxed",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: "2",
});

const footerRowStyle = css({
  marginTop: "2",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2",
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
  fontSize: "xs",
  color: "var(--colors-text-subtle)",
});

const dateRowStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "1",
  fontSize: "xs",
  color: "var(--colors-text-subtle)",
});

export default function EventPopup({
  event,
  onNavigateToNarrative,
}: EventPopupProps) {
  const style = OUTCOME_STYLES[event.outcome];
  const narrative = narratives[event.id];
  const hasNarrative = narrative?.content?.length > 0;

  return (
    <div className={`popup-enter ${cardStyle}`}>
      <div className={idStyle}>{event.id}</div>
      <h3 className={countryStyle}>{event.country}</h3>

      <div className={tagRowStyle}>
        <span className={style.badgeClass}>
          <span className={style.dotClass} />
          {style.label}
        </span>
        <span className={geoTagStyle}>Geolocated</span>
      </div>

      {event.description && (
        <p className={descStyle} style={{ WebkitBoxOrient: "vertical" }}>
          {event.description}
        </p>
      )}

      <div className={footerRowStyle}>
        {hasNarrative ? (
          <Link
            to={`/narrative/${event.id}`}
            onClick={() => onNavigateToNarrative?.()}
            className={narrativeLinkStyle}
          >
            Read Full Narrative
          </Link>
        ) : (
          <span className={narrativeMissingStyle}>Narrative coming soon</span>
        )}

        <div className={dateRowStyle}>
          <CalendarIcon
            className={css({ height: "3.5", width: "3.5", flexShrink: "0" })}
          />
          {formatDate(event.date)}
        </div>
      </div>
    </div>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}
