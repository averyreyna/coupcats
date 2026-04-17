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

// Update: This is the new and improved data set, they are all labeled by how they will be displayed onto the website
//      Please use this for reference to know what each variable does what.
export interface CoupPrediction {
  // Identity
  country: string;
  ccode: number;
  year: number;
  month: number;
  // Model output (was prediction_prob)
  yhat: number;

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

  // Region flags (needed to derive region label in header)
  e_asia_pacific: number;
  euro_cent_asia: number;
  LA_carrib: number;
  MENA: number;
  N_america: number;
  S_asia: number;
  Sub_africa: number;
}

//Creating the type in which the json is exported as
export type PredictionFeatureCollection = GeoJSON.FeatureCollection<
  GeoJSON.Point,
  CoupPrediction
>;