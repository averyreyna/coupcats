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
  // Identity
  country: string;
  ccode: number;
  year: number;
  month: number;
 
  // Model output (was prediction_prob)
  yhat: number | null;
 
  // Governance
  closed_autocracy: number;
  electoral_autocracy: number;
  electoral_democracy: number;
  liberal_democracy: number;
  polyarchy: number | null;       // was Democracy_level
  milreg: number;                  // was Military_regime
  milit: number;                   // was Military_influence
  Leader_age: number | null;
  Leader_duration: number | null;
 
  // Economy
  gdppc: number | null;            // was GDP_per_cap
  ch_gdppc: number | null;         // was Change_GDP_per_cap
  ltrade: number | null;           // was Trade (no Inflation equivalent in new data)
 
  // Society
  wom_polpart: number | null;      // was Women_political_participation
  wom_civlib: number | null;
  women_polemp: number | null;
  protests: number | null;         // was Protests
  cw: number;                      // was Civil_wars
 
  // Military
  milex_spliced: number | null;    // was milex
  milper_spliced: number | null;   // was milper
  solqual: number | null;
  mobil_conc: number | null;
 
  // Context
  neighboring_coup: number | null;
  cold: number;                    // was Cold_war
  visit: number;
 
  // Region flags (needed to derive region label in header)
  e_asia_pacific: number;
  euro_cent_asia: number;
  LA_carrib: number;
  MENA: number;
  N_america: number;
  S_asia: number;
  Sub_africa: number;

  //Additional variables for regression model prediction
  pce: number;
  pce2: number;
  pce3: number;
  signal: number;
  trade_glob: number;
  mobilization: number;
  numleaders_10yr: number;
  milreg_prop: number;
  mutiny6: number;
}

//Creating the type in which the json is exported as
export type PredictionFeatureCollection = GeoJSON.FeatureCollection<
  GeoJSON.Point,
  CoupPrediction
>;

export type PredictiveSliderKey =
  | "trade_glob"
  | "ch_gdppc"
  | "polyarchy"
  | "wom_polpart"
  | "protests"
  | "milreg_prop"
  | "milit";

export type PredictiveMode = "baseline" | "scenario" | "futureMonths";

export type PredictiveSliderPercents = Record<PredictiveSliderKey, number>;

export const DEFAULT_PREDICTIVE_SLIDERS: PredictiveSliderPercents = {
  trade_glob: 100,
  ch_gdppc: 100,
  polyarchy: 100,
  wom_polpart: 100,
  protests: 100,
  milreg_prop: 100,
  milit: 100,
};