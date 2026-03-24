import type { CoupEvent, CoupOutcome } from "../types/coup";
import type { FilterState } from "../store/useFilterStore";
import type { FilterSpecification } from "maplibre-gl";

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

// Build a MapLibre filter expression for map layer filtering
export function buildMapFilterExpression(
  state: Pick<
    FilterState,
    | "selectedOutcomes"
    | "selectedRegions"
    | "dateRange"
    | "selectedTags"
    | "searchQuery"
  >,
  allEvents: CoupEvent[]
): FilterSpecification | undefined {
  const conditions: (FilterSpecification | any[])[] = [];

  // Outcomes filter
  if (state.selectedOutcomes.length > 0) {
    const outcomeFilter: any = [
      "in",
      ["get", "outcome"],
      ["literal", state.selectedOutcomes],
    ];
    conditions.push(outcomeFilter);
  }

  // Regions filter
  if (state.selectedRegions.length > 0) {
    const regionFilter: any = [
      "in",
      ["get", "region"],
      ["literal", state.selectedRegions],
    ];
    conditions.push(regionFilter);
  }

  // Date range filter
  const [minYear, maxYear] = state.dateRange;
  const dateFilter: any = [
    "all",
    [">=", ["get", "year"], minYear],
    ["<=", ["get", "year"], maxYear],
  ];
  conditions.push(dateFilter);

  // Tags filter (match if event has any selected tag)
  if (state.selectedTags.length > 0) {
    // For each selected tag, check if it exists in the tags array
    // Since MapLibre doesn't have great array support, we'll use a workaround
    // by checking against the actual events that match tags
    const eventsWithTags = new Set(
      allEvents
        .filter((e) => {
          const eventTags = e.tags ?? [];
          return state.selectedTags.some((t) => eventTags.includes(t));
        })
        .map((e) => e.id)
    );

    // Build an "in" filter for the matching IDs
    if (eventsWithTags.size > 0) {
      const tagsFilter: any = [
        "in",
        ["get", "id"],
        ["literal", Array.from(eventsWithTags)],
      ];
      conditions.push(tagsFilter);
    }
  }

  // Search filter - similar approach using event IDs
  if (state.searchQuery.trim()) {
    const searchMatches = new Set(
      allEvents
        .filter((e) => matchesSearch(e, state.searchQuery))
        .map((e) => e.id)
    );
    if (searchMatches.size > 0) {
      const searchFilter: any = [
        "in",
        ["get", "id"],
        ["literal", Array.from(searchMatches)],
      ];
      conditions.push(searchFilter);
    } else {
      // No matches, return impossible condition
      return ["==", ["literal", true], false] as any;
    }
  }

  // Combine all conditions with "all" (AND logic)
  if (conditions.length === 0) {
    return undefined; // No filters applied, show all
  } else if (conditions.length === 1) {
    return conditions[0] as FilterSpecification;
  } else {
    return ["all", ...conditions] as any;
  }
}
