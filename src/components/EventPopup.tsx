import type { CoupEvent } from "../types/coup";
import { OUTCOME_STYLES } from "../lib/outcomeStyles";
import { formatDate } from "../lib/date";
import { narratives } from "../data/narratives";
import { Link } from "react-router-dom";

export interface EventPopupProps {
  event: CoupEvent;
  onNavigateToNarrative?: () => void;
}

export default function EventPopup({
  event,
  onNavigateToNarrative,
}: EventPopupProps) {
  const style = OUTCOME_STYLES[event.outcome];

  const narrativeId = event.id;
  const narrative = narratives[event.id];
  const hasNarrative = narrative?.content?.length > 0;

  return (
    <div
      className="popup-enter min-w-[240px] max-w-[min(320px,calc(100vw-2rem))] rounded-lg border border-gray-700/50 bg-[#1a1d26] shadow-xl pt-7 pr-7 pb-3 pl-3"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div
        className="font-mono text-xs text-gray-500"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {event.id}
      </div>
      <h3 className="mt-1 text-sm font-bold text-white">{event.country}</h3>
      <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${style.badgeClass}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${style.dotClass}`} />
          {style.label}
        </span>
        <span className="rounded-full bg-gray-700/50 px-2 py-0.5 text-xs text-gray-400">
          Geolocated
        </span>
      </div>
      {event.description && (
        <p className="mt-1.5 text-xs text-gray-400 line-clamp-2 leading-relaxed">
          {event.description}
        </p>
      )}
      <div className="mt-2 flex items-center justify-between gap-2">
        {hasNarrative ? (
          <Link
            to={`/narrative/${narrativeId}`}
            onClick={() => onNavigateToNarrative?.()}
            className="inline-flex items-center rounded-md bg-amber-500 px-3 py-1.5 text-xs font-medium text-black transition hover:bg-amber-400"
          >
            Read Full Narrative
          </Link>
        ) : (
          <span className="text-xs text-gray-500">Narrative coming soon</span>
        )}
        <div className="mt-1.5 flex items-center justify-end gap-1 text-xs text-gray-500">
          <CalendarIcon className="h-3.5 w-3.5 shrink-0" />
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
