export interface PredictionEntry {
  country: string;
  ccode: number;
  year: number;
  month: number;
  yhat: number | null;
}
