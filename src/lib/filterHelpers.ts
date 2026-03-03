import type { CoupEvent, CoupOutcome } from "../types/coup";
import type { FilterState } from "../store/useFilterStore";

function matchesSearch(event: CoupEvent, query: string): boolean {
  if (!query.trim()) return true;
  const q = query.trim().toLowerCase();
  const title = (event.title ?? "").toLowerCase();
  const country = (event.country ?? "").toLowerCase();
  const desc = (event.description ?? "").toLowerCase();
  const tags = (event.tags ?? []).join(" ").toLowerCase();
  return (
    title.includes(q) ||
    country.includes(q) ||
    desc.includes(q) ||
    tags.includes(q)
  );
}

function matchesOutcomes(event: CoupEvent, selected: CoupOutcome[]): boolean {
  if (selected.length === 0) return true;
  return selected.includes(event.outcome);
}

function matchesRegions(event: CoupEvent, selected: string[]): boolean {
  if (selected.length === 0) return true;
  return selected.includes(event.region);
}

function matchesDateRange(
  event: CoupEvent,
  [minYear, maxYear]: [number, number]
): boolean {
  return event.year >= minYear && event.year <= maxYear;
}

function matchesTags(event: CoupEvent, selected: string[]): boolean {
  if (selected.length === 0) return true;
  const eventTags = event.tags ?? [];
  return selected.some((t) => eventTags.includes(t));
}

// empty selections mean filter off; tags match if event has any selected tag
export function filterEvents(
  events: CoupEvent[],
  state: Pick<
    FilterState,
    | "searchQuery"
    | "selectedOutcomes"
    | "selectedRegions"
    | "dateRange"
    | "selectedTags"
  >
): CoupEvent[] {
  return events.filter(
    (e) =>
      matchesSearch(e, state.searchQuery) &&
      matchesOutcomes(e, state.selectedOutcomes) &&
      matchesRegions(e, state.selectedRegions) &&
      matchesDateRange(e, state.dateRange) &&
      matchesTags(e, state.selectedTags)
  );
}

export function getFilteredIds(
  events: CoupEvent[],
  state: Pick<
    FilterState,
    | "searchQuery"
    | "selectedOutcomes"
    | "selectedRegions"
    | "dateRange"
    | "selectedTags"
  >
): string[] {
  return filterEvents(events, state).map((e) => e.id);
}
