export type PredictiveSliderKey =
  | "Trade"
  | "Change_GDP_per_cap"
  | "Democracy_level"
  | "Women_political_participation"
  | "Protests"
  | "Military_regime"
  | "Military_influence";

export type PredictiveMode = "baseline" | "scenario" | "futureMonths";

export type PredictiveSliderPercents = Record<PredictiveSliderKey, number>;

export type PredictiveCountryData = {
  country: string;
  ccode: number;
  year?: number;
  month?: number;
  // REMOVED: prediction_prob — CoupPrediction renamed this to yhat; computeScenarioProbability never read this field anyway
  Trade?: number;
  Change_GDP_per_cap?: number;
  Democracy_level?: number;
  Women_political_participation?: number;
  Protests?: number;
  Military_regime?: number;
  Military_influence?: number;

  Cold_war?: number;
  e_asia_pacific?: number;
  LA_carrib?: number;
  MENA?: number;
  N_america?: number;
  S_asia?: number;
  Sub_africa?: number;
  pce?: number;
  pce2?: number;
  pce3?: number;
  Democracy_squared?: number;
  GDP_per_cap?: number;
  Civil_wars?: number;
};

export const DEFAULT_PREDICTIVE_SLIDERS: PredictiveSliderPercents = {
  Trade: 100,
  Change_GDP_per_cap: 100,
  Democracy_level: 100,
  Women_political_participation: 100,
  Protests: 100,
  Military_regime: 0,
  Military_influence: 100,
};