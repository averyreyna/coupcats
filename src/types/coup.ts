export type CoupOutcome =
  | "successful"
  | "failed"
  | "attempted"
  | "plot"
  | "alleged";

export interface CoupEvent {
  id: string;
  country: string;
  countryCode: string;
  region: string;
  latitude: number;
  longitude: number;
  date: string;
  year: number;
  outcome: CoupOutcome;
  title: string;
  description?: string;
  leaders?: string[];
  tags?: string[];
}

export type CoupFeatureCollection = GeoJSON.FeatureCollection<
  GeoJSON.Point,
  CoupEvent
>;
