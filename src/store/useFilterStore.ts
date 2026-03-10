import { create } from "zustand";
import type { CoupOutcome, CoupEvent } from "../types/coup";

export interface FilterState {
  searchQuery: string;
  selectedOutcomes: CoupOutcome[];
  selectedRegions: string[];
  selectedDecades: number[];
  dateRange: [number, number];
  selectedTags: string[];
  selectedEvent: CoupEvent | null;
  selectedCountry: string | null;

  setSearchQuery: (q: string) => void;
  toggleOutcome: (o: CoupOutcome) => void;
  toggleRegion: (r: string) => void;
  toggleDecade: (decade: number) => void;
  setDateRange: (range: [number, number]) => void;
  toggleTag: (t: string) => void;
  reset: () => void;
  setSelectedEvent: (event: CoupEvent | null) => void;
  setSelectedCountry: (country: string | null) => void;
}

const INITIAL_DATE_RANGE: [number, number] = [1950, 2030];

function dateRangeFromDecades(decades: number[]): [number, number] {
  if (decades.length === 0) return INITIAL_DATE_RANGE;
  const min = Math.min(...decades);
  const max = Math.max(...decades);
  return [min, max + 9];
}

export const useFilterStore = create<FilterState>((set) => ({
  searchQuery: "",
  selectedOutcomes: [],
  selectedRegions: [],
  selectedDecades: [],
  dateRange: INITIAL_DATE_RANGE,
  selectedTags: [],
  selectedEvent: null,
  selectedCountry: null,

  setSearchQuery: (q) => set({ searchQuery: q }),
  toggleOutcome: (o) =>
    set((s) => ({
      selectedOutcomes: s.selectedOutcomes.includes(o)
        ? s.selectedOutcomes.filter((x) => x !== o)
        : [...s.selectedOutcomes, o],
    })),
  toggleRegion: (r) =>
    set((s) => ({
      selectedRegions: s.selectedRegions.includes(r)
        ? s.selectedRegions.filter((x) => x !== r)
        : [...s.selectedRegions, r],
    })),
  toggleDecade: (d) =>
    set((s) => {
      const next = s.selectedDecades.includes(d)
        ? s.selectedDecades.filter((x) => x !== d)
        : [...s.selectedDecades, d].sort((a, b) => a - b);
      return {
        selectedDecades: next,
        dateRange: dateRangeFromDecades(next),
      };
    }),
  setDateRange: (range) => set({ dateRange: range }),
  toggleTag: (t) =>
    set((s) => ({
      selectedTags: s.selectedTags.includes(t)
        ? s.selectedTags.filter((x) => x !== t)
        : [...s.selectedTags, t],
    })),
  reset: () =>
    set({
      searchQuery: "",
      selectedOutcomes: [],
      selectedRegions: [],
      selectedDecades: [],
      dateRange: INITIAL_DATE_RANGE,
      selectedTags: [],
      selectedEvent: null,
      selectedCountry: null,
    }),
  setSelectedEvent: (event) => set({ selectedEvent: event }),
  setSelectedCountry: (country) => set({ selectedCountry: country }),
}))
