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

//This is a setup of what the json file being pulled from the github looks like, all of these fields are required to get the file fetched
// properly.
export interface CoupPrediction{
  country: string;
  ccode: number;
  year: number;
  month: number;
  coup_attempt?: number;
  coup_successful?: number;
  coup_failed?: number;
  pce?: number;
  pce2?: number;
  pce3?: number;
  Leader_duration?: number;
  Leader_age?: number;
  closed_autocracy?: number;
  electoral_autocracy?: number;
  electoral_democracy?: number;
  liberal_democracy?: number;
  Democracy_level?: number;
  Democracy_squared?: number;
  Military_influence?: number;
  Military_regime?: number;
  region?: number;
  Women_political_participation?: number;
  women_polemp?: number;
  wom_civlib?: number;
  GDP_per_cap?: number;
  Change_GDP_per_cap?: number;
  Inflation?: number;
  Civil_wars?: number;
  Protests?: number;
  mobil_conc?: number;
  milex?: number;
  milper?: number;
  solqual?: number;
  Cold_war?: number;
  visit?: number;
  e_asia_pacific?: number;
  euro_cent_asia?: number;
  LA_carrib?: number;
  MENA?: number;
  N_america?: number;
  S_asia?: number;
  Sub_africa?: number;
  Trade?: number;
  neighboring_coup?: number | null;
  prediction_prob?: number | null;
  yhat?: number | null;
  polyarchy?: number | null;
  milreg?: number | null;
  milit?: number | null;
  gdppc?: number | null;
  ch_gdppc?: number | null;
  ltrade?: number | null;
  wom_polpart?: number | null;
  protests?: number | null;
  cw?: number | null;
  milex_spliced?: number | null;
  milper_spliced?: number | null;
  cold?: number | null;
}

//Creating the type in which the json is exported as
export type PredictionFeatureCollection = GeoJSON.FeatureCollection<
  GeoJSON.Point,
  CoupPrediction
>;