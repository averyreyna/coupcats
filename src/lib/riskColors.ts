/**
 * Risk color scale utilities
 * Adapted from the old CoupCats repo, but simplified for the new design
 * 
 * Color scale: Dark slate (low risk) → Amber (medium) → Red (high risk)
 * Following the dark theme of the new app
 */

/**
 * Map a risk score (0-1) to a hex color
 * 0 (no risk) = dark slate (#1e293b) — blends with quiet land
 * 0.5 (medium risk) = amber (#f59e0b) — warm accent
 * 1.0 (high risk) = red (#dc2626) — danger signal
 */
export function riskScoreToColor(score: number): string {
  const clamped = Math.max(0, Math.min(1, score));

  // Three-stop gradient: slate → amber → red
  if (clamped <= 0.5) {
    const t = clamped / 0.5;

    const lowR = 0x1e, lowG = 0x29, lowB = 0x3b;   // #1e293b slate-800
    const midR = 0xf5, midG = 0x9e, midB = 0x0b;   // #f59e0b amber-500

    const r = Math.round(lowR + (midR - lowR) * t);
    const g = Math.round(lowG + (midG - lowG) * t);
    const b = Math.round(lowB + (midB - lowB) * t);

    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  } else {
    const t = (clamped - 0.5) / 0.5;

    const midR = 0xf5, midG = 0x9e, midB = 0x0b;   // #f59e0b amber-500
    const hiR = 0xdc, hiG = 0x26, hiB = 0x26;       // #dc2626 red-600

    const r = Math.round(midR + (hiR - midR) * t);
    const g = Math.round(midG + (hiG - midG) * t);
    const b = Math.round(midB + (hiB - midB) * t);

    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  }
}

/**
 * Color for countries with no risk data
 */
export const NO_DATA_COLOR = "#0f172a"; // Slate-900, darker than land — reads as "unavailable"

/**
 * Risk level labels for human-readable descriptions
 */
export function getRiskLabel(score: number): string {
  if (score === 0) return "No data";
  if (score < 0.25) return "Low";
  if (score < 0.5) return "Low-Medium";
  if (score < 0.75) return "Medium-High";
  return "High";
}

/**
 * Percentage representation for tooltips
 */
export function formatRiskPercent(score: number): string {
  return `${(score * 100).toFixed(1)}%`;
}

/**
 * Build a MapLibre match expression that colors countries by coup risk.
 * Returns: ["match", ["get", "name"], "Country1", "#color1", ..., NO_DATA_COLOR]
 */
import type { CoupPrediction } from "../types/coup";
import { cowNameToGeoJsonAdmin } from "./countryNameMapping";

export function buildChoroplethFillColor(
  predictions: CoupPrediction[],
): any[] {
  // Keep most recent prediction per country (highest year, then month)
  // Skip entries without a valid prediction_prob
  const latest = new Map<string, CoupPrediction>();
  for (const p of predictions) {
    const prob = p.yhat ?? p.prediction_prob;
    if (prob == null || isNaN(prob)) continue;
    const geoName = cowNameToGeoJsonAdmin(p.country);
    const existing = latest.get(geoName);
    if (
      !existing ||
      p.year > existing.year ||
      (p.year === existing.year && p.month > existing.month)
    ) {
      latest.set(geoName, p);
    }
  }

  // Greenland has no COW entry — color it the same as Denmark
  const dkPred = latest.get("Denmark");
  if (dkPred && !latest.has("Greenland")) {
    latest.set("Greenland", dkPred);
  }

  // Find max probability to normalize the color scale.
  // Raw values are tiny (0–0.06), so without normalization everything looks gray.
  const maxProb = Math.max(
    ...[...latest.values()].map((p) => p.yhat ?? p.prediction_prob ?? 0),
    0.001,
  );

  // Build the match expression entries: [countryName, color, countryName, color, ...]
  const entries: string[] = [];
  for (const [geoName, pred] of latest) {
    const rawProb = pred.yhat ?? pred.prediction_prob ?? 0;
    const normalized = Math.min(rawProb / maxProb, 1);
    entries.push(geoName, riskScoreToColor(normalized));
  }

  return ["match", ["get", "name"], ...entries, NO_DATA_COLOR];
}

import type { CoupEvent } from "../types/coup";

function eventScoreToColor(score: number): string {
  const clamped = Math.max(0, Math.min(1, score));

  const stops: [number, number, number][] = [
    [0x22, 0xc5, 0x5e], // #22c55e green-500
    [0xea, 0xb3, 0x08], // #eab308 yellow-500
    [0xf9, 0x73, 0x16], // #f97316 orange-500
    [0xef, 0x44, 0x44], // #ef4444 red-500
  ];

  const seg = clamped * (stops.length - 1);
  const lo = Math.min(Math.floor(seg), stops.length - 2);
  const t = seg - lo;
  const [r1, g1, b1] = stops[lo];
  const [r2, g2, b2] = stops[lo + 1];

  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

export const EVENT_NO_DATA_COLOR = "#e5e7eb"; // gray-200 — neutral on the light map

export function buildEventCountChoropleth(events: CoupEvent[]): any[] {
  const counts = new Map<string, number>();
  for (const e of events) {
    const geoName = cowNameToGeoJsonAdmin(e.country);
    counts.set(geoName, (counts.get(geoName) ?? 0) + 1);
  }
  const maxCount = Math.max(...counts.values(), 1);
  const entries: string[] = [];
  for (const [geoName, count] of counts) {
    entries.push(geoName, eventScoreToColor(count / maxCount));
  }
  return ["match", ["get", "name"], ...entries, EVENT_NO_DATA_COLOR];
}

export function getMaxEventCount(events: CoupEvent[]): number {
  const counts = new Map<string, number>();
  for (const e of events) {
    const geoName = cowNameToGeoJsonAdmin(e.country);
    counts.set(geoName, (counts.get(geoName) ?? 0) + 1);
  }
  return counts.size === 0 ? 0 : Math.max(...counts.values());
}
