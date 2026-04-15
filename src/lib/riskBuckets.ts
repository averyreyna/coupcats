import { predictionColors } from "../design-system/tokens";
import type { CoupPrediction } from "../types/coup";

const DEFAULT_THRESHOLDS: [number, number, number] = [0.05, 0.15, 0.3];
const EPSILON = 1e-9;

export type RiskBucket = "veryLow" | "moderate" | "elevated" | "high";

export interface RiskBucketMetadata {
  key: RiskBucket;
  label: string;
  color: string;
}

export interface RiskThresholds {
  moderateMin: number;
  elevatedMin: number;
  highMin: number;
}

export interface RiskBucketBound {
  key: RiskBucket;
  label: string;
  color: string;
  min: number | null;
  maxExclusive: number | null;
}

const RISK_BUCKET_META: Record<RiskBucket, RiskBucketMetadata> = {
  veryLow: { key: "veryLow", label: "Very Low", color: predictionColors.veryLow },
  moderate: { key: "moderate", label: "Moderate", color: predictionColors.moderate },
  elevated: { key: "elevated", label: "Elevated", color: predictionColors.elevated },
  high: { key: "high", label: "High", color: predictionColors.high },
};

const BUCKET_ORDER: RiskBucket[] = ["veryLow", "moderate", "elevated", "high"];

function isValidProbability(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value) && value >= 0;
}

function quantile(sortedValues: number[], p: number): number {
  const idx = (sortedValues.length - 1) * p;
  const low = Math.floor(idx);
  const high = Math.ceil(idx);
  if (low === high) return sortedValues[low];
  const weight = idx - low;
  return sortedValues[low] * (1 - weight) + sortedValues[high] * weight;
}

function makeStrictlyIncreasing(values: [number, number, number]): [number, number, number] {
  const result: [number, number, number] = [values[0], values[1], values[2]];
  for (let i = 1; i < result.length; i += 1) {
    if (result[i] <= result[i - 1]) {
      result[i] = result[i - 1] + EPSILON;
    }
  }
  return result;
}

export function getValidPredictionProbabilities(predictions: CoupPrediction[]): number[] {
  return predictions
    .map((p) => p.prediction_prob)
    .filter(isValidProbability)
    .sort((a, b) => a - b);
}

export function computeRiskThresholds(predictions: CoupPrediction[]): RiskThresholds {
  const values = getValidPredictionProbabilities(predictions);
  if (values.length < 4) {
    return {
      moderateMin: DEFAULT_THRESHOLDS[0],
      elevatedMin: DEFAULT_THRESHOLDS[1],
      highMin: DEFAULT_THRESHOLDS[2],
    };
  }

  const candidate: [number, number, number] = [
    quantile(values, 0.5),
    quantile(values, 0.8),
    quantile(values, 0.95),
  ];
  const [moderateMin, elevatedMin, highMin] = makeStrictlyIncreasing(candidate);

  return { moderateMin, elevatedMin, highMin };
}

export function classifyRisk(
  probability: number | null | undefined,
  thresholds: RiskThresholds,
): RiskBucketMetadata | null {
  if (!isValidProbability(probability)) return null;
  if (probability < thresholds.moderateMin) return RISK_BUCKET_META.veryLow;
  if (probability < thresholds.elevatedMin) return RISK_BUCKET_META.moderate;
  if (probability < thresholds.highMin) return RISK_BUCKET_META.elevated;
  return RISK_BUCKET_META.high;
}

export function getRiskBucketBounds(thresholds: RiskThresholds): RiskBucketBound[] {
  return [
    {
      ...RISK_BUCKET_META.veryLow,
      min: null,
      maxExclusive: thresholds.moderateMin,
    },
    {
      ...RISK_BUCKET_META.moderate,
      min: thresholds.moderateMin,
      maxExclusive: thresholds.elevatedMin,
    },
    {
      ...RISK_BUCKET_META.elevated,
      min: thresholds.elevatedMin,
      maxExclusive: thresholds.highMin,
    },
    {
      ...RISK_BUCKET_META.high,
      min: thresholds.highMin,
      maxExclusive: null,
    },
  ];
}

export function getRiskBucketMetadataByKey(key: RiskBucket): RiskBucketMetadata {
  return RISK_BUCKET_META[key];
}

export function getRiskBuckets(): RiskBucketMetadata[] {
  return BUCKET_ORDER.map((key) => RISK_BUCKET_META[key]);
}
