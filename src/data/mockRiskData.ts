/**
 * Mock coup risk data for placeholder visualization.
 *
 * This file is intentionally easy to swap with real backend data later.
 */

import { allCountriesList } from "./allCountries";

export interface CountryRisk {
  countryCode: string;
  countryName: string;
  riskScore: number;
}

export interface RiskIndicator {
  label: string;
  score: number;
}

export interface CountryRiskDetails extends CountryRisk {
  months: number;
  riskInMonths: number;
  indicators: RiskIndicator[];
}

export const mockRiskDetailsData: CountryRiskDetails[] = [
  {
    countryCode: "NER",
    countryName: "Niger",
    riskScore: 0.78,
    months: 6,
    riskInMonths: 0.81,
    indicators: [
      { label: "Trade", score: 0.42 },
      { label: "Change_GDP_per_cap", score: 0.61 },
      { label: "Democracy_level", score: 0.74 },
      { label: "Women_political_participation", score: 0.48 },
    ],
  },
  {
    countryCode: "BFA",
    countryName: "Burkina Faso",
    riskScore: 0.72,
    months: 6,
    riskInMonths: 0.76,
    indicators: [
      { label: "Trade", score: 0.45 },
      { label: "Change_GDP_per_cap", score: 0.58 },
      { label: "Democracy_level", score: 0.68 },
      { label: "Women_political_participation", score: 0.44 },
    ],
  },
  {
    countryCode: "GAB",
    countryName: "Gabon",
    riskScore: 0.48,
    months: 6,
    riskInMonths: 0.52,
    indicators: [
      { label: "Trade", score: 0.57 },
      { label: "Change_GDP_per_cap", score: 0.49 },
      { label: "Democracy_level", score: 0.51 },
      { label: "Women_political_participation", score: 0.46 },
    ],
  },
  {
    countryCode: "GIN",
    countryName: "Guinea",
    riskScore: 0.65,
    months: 6,
    riskInMonths: 0.69,
    indicators: [
      { label: "Trade", score: 0.46 },
      { label: "Change_GDP_per_cap", score: 0.56 },
      { label: "Democracy_level", score: 0.63 },
      { label: "Women_political_participation", score: 0.47 },
    ],
  },
  {
    countryCode: "TCD",
    countryName: "Chad",
    riskScore: 0.68,
    months: 6,
    riskInMonths: 0.71,
    indicators: [
      { label: "Trade", score: 0.41 },
      { label: "Change_GDP_per_cap", score: 0.62 },
      { label: "Democracy_level", score: 0.71 },
      { label: "Women_political_participation", score: 0.39 },
    ],
  },
  {
    countryCode: "NGA",
    countryName: "Nigeria",
    riskScore: 0.52,
    months: 6,
    riskInMonths: 0.56,
    indicators: [
      { label: "Trade", score: 0.54 },
      { label: "Change_GDP_per_cap", score: 0.51 },
      { label: "Democracy_level", score: 0.55 },
      { label: "Women_political_participation", score: 0.43 },
    ],
  },
  {
    countryCode: "EGY",
    countryName: "Egypt",
    riskScore: 0.55,
    months: 6,
    riskInMonths: 0.58,
    indicators: [
      { label: "Trade", score: 0.59 },
      { label: "Change_GDP_per_cap", score: 0.52 },
      { label: "Democracy_level", score: 0.60 },
      { label: "Women_political_participation", score: 0.50 },
    ],
  },
  {
    countryCode: "BOL",
    countryName: "Bolivia",
    riskScore: 0.42,
    months: 6,
    riskInMonths: 0.46,
    indicators: [
      { label: "Trade", score: 0.63 },
      { label: "Change_GDP_per_cap", score: 0.47 },
      { label: "Democracy_level", score: 0.44 },
      { label: "Women_political_participation", score: 0.55 },
    ],
  },
  {
    countryCode: "MDG",
    countryName: "Madagascar",
    riskScore: 0.60,
    months: 6,
    riskInMonths: 0.64,
    indicators: [
      { label: "Trade", score: 0.51 },
      { label: "Change_GDP_per_cap", score: 0.58 },
      { label: "Democracy_level", score: 0.62 },
      { label: "Women_political_participation", score: 0.41 },
    ],
  },
  {
    countryCode: "SDN",
    countryName: "Sudan",
    riskScore: 0.74,
    months: 6,
    riskInMonths: 0.78,
    indicators: [
      { label: "Trade", score: 0.37 },
      { label: "Change_GDP_per_cap", score: 0.64 },
      { label: "Democracy_level", score: 0.77 },
      { label: "Women_political_participation", score: 0.34 },
    ],
  },
];

// Generate consistent pseudo-random risk score from country code
function generateRiskScore(countryCode: string): number {
  // Use country code characters to generate a consistent "random" value
  const hash = countryCode
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return (Math.sin(hash) + 1) / 2; // Maps to 0-1 range
}

// Create full country risk data for all 195 countries
const allCountriesRiskData: CountryRisk[] = allCountriesList.map((country) => ({
  countryCode: country.code,
  countryName: country.name,
  riskScore: generateRiskScore(country.code),
}));

export const mockRiskData: CountryRisk[] = allCountriesRiskData;

const riskDetailsByCode = new Map(
  mockRiskDetailsData.map((item) => [item.countryCode, item])
);

export function getRiskDataMap(): Map<string, CountryRisk> {
  return new Map(mockRiskData.map((item) => [item.countryCode, item]));
}

export function getRiskScore(countryCode: string): number {
  return riskDetailsByCode.get(countryCode)?.riskScore ?? 0;
}

export function getCountryName(countryCode: string): string | null {
  return riskDetailsByCode.get(countryCode)?.countryName ?? null;
}

export function hasRiskData(countryCode: string): boolean {
  return riskDetailsByCode.has(countryCode);
}

export function getRiskDetails(countryCode: string): CountryRiskDetails | null {
  return riskDetailsByCode.get(countryCode) ?? null;
}

export function getFallbackRiskDetails(
  countryCode: string,
  countryName = "Unknown Country"
): CountryRiskDetails {
  return {
    countryCode,
    countryName,
    riskScore: 0.35,
    months: 6,
    riskInMonths: 0.4,
    indicators: [
      { label: "Trade", score: 0.45 },
      { label: "Change_GDP_per_cap", score: 0.45 },
      { label: "Democracy_level", score: 0.45 },
      { label: "Women_political_participation", score: 0.45 },
    ],
  };
}

export function getRiskLeaderboard(): CountryRisk[] {
  return mockRiskData.slice().sort((a, b) => b.riskScore - a.riskScore);
}
