import rawNarratives from "./narratives.json";

export interface NarrativeEntry {
  id: string;
  title: string;
  country: string;
  year: number;
  month: number;
  day: number;
  status: string;
  contributor?: string;
  sourceLinkLabel?: string;
  content: string[];
  references: string[];
}

const narrativeList = rawNarratives as NarrativeEntry[];

export const narratives: Record<string, NarrativeEntry> = Object.fromEntries(
  narrativeList.map((entry) => [entry.id, entry]),
);
