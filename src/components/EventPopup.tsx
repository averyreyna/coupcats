import type { CoupEvent } from "../types/coup";
import { OUTCOME_STYLES } from "../lib/outcomeStyles";
import { formatDate } from "../lib/date";

export interface EventPopupProps {
  event: CoupEvent;
}

export default function EventPopup({ event }: EventPopupProps) {
  const style = OUTCOME_STYLES[event.outcome];

  return (
    <div
      className="popup-enter min-w-[240px] max-w-[min(320px,calc(100vw-2rem))] rounded-lg border border-gray-700/50 bg-[#1a1d26] shadow-xl pt-7 pr-7 pb-3 pl-3"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="font-mono text-xs text-gray-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        {event.id}
      </div>
      <h3 className="mt-1 text-sm font-bold text-white">{event.title}</h3>
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
      <div className="mt-1.5 flex items-center justify-end gap-1 text-xs text-gray-500">
        <CalendarIcon className="h-3.5 w-3.5 shrink-0" />
        {formatDate(event.date)}
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
