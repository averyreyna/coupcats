import type { CoupEvent, CoupFeatureCollection, CoupPrediction, PredictionFeatureCollection } from "../types/coup";

// Known mismatches between COW country names (in predictions) and GeoJSON ADMIN names
export const COW_TO_ADMIN_ALIASES: Record<string, string> = {
  "ivory coast":    "côte d'ivoire",
  "swaziland":      "eswatini",
  "czech republic": "czechia",
  "macedonia":      "north macedonia",
  "congo":          "republic of the congo",
};

// Returns a Map<normalized-admin-name, prediction_prob | null> for enriching country polygons
export function buildPredictionProbMap(
  predictions: CoupPrediction[]
): Map<string, number | null> {
  const map = new Map<string, number | null>();
  for (const p of predictions) {
    const cowName = p.country.toLowerCase().trim();
    const key = COW_TO_ADMIN_ALIASES[cowName] ?? cowName;
    map.set(key, p.prediction_prob ?? null);
  }
  return map;
}
import coupsDataRaw from "../data/coups.geojson?raw";
import { getCoordsForCcode } from "./CountryCoordinates";

// parsed once at module load; same reference returned
const coupsFeatureCollection: CoupFeatureCollection = JSON.parse(
  coupsDataRaw,
) as CoupFeatureCollection;

export function getCoupsFeatureCollection(
  events: CoupEvent[],
): CoupFeatureCollection {
  const eventIds = new Set(events.map((event) => event.id));

  return {
    ...coupsFeatureCollection,
    features: (coupsFeatureCollection.features ?? []).filter((feature) =>
      eventIds.has(feature.properties.id),
    ),
  };
}

export function getAllCoupEvents(): CoupEvent[] {
  return (coupsFeatureCollection.features ?? []).map(
    (feature) => feature.properties,
  );
}

// Newly added data from the github pull

const GITHUB_URL = "https://raw.githubusercontent.com/thynec/CoupCats/refs/heads/main/recent_data.json";

let cachedPredictions: PredictionFeatureCollection | null = null;

//This creates the json file into a Geojson to match the formatting needed for the map, given we seem to need
// a point dedicated on the map to add features onto the map this way
function toPredictionFeatureCollection(
  predictions: CoupPrediction[]
): PredictionFeatureCollection{
  const features = predictions
    .map((p) => {
      const coords = getCoordsForCcode(p.ccode);
      if (!coords) return null;

      return {
        type: "Feature" as const,
        id: '${p.ccode}-${p.year}-${p.month}',
        geometry: {
          type: "Point" as const,
          coordinates: [coords.longitude, coords.latitude],
        },
        properties: {
          ...p,
          // Sanitize NaN from the source JSON (Python serializes float NaN as literal NaN,
          // which some parsers pass through; guard it here before it hits the map layer)
          prediction_prob: typeof p.prediction_prob === "number" && isFinite(p.prediction_prob)
            ? p.prediction_prob
            : null,
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
      };
    })
    .filter((f): f is NonNullable<typeof f> => f !== null);

  return {type: "FeatureCollection", features};
}

//Receives the prediction data from the github, GITHUB_URL is defined above
export async function getPredictionFeatureCollection(): Promise<PredictionFeatureCollection> {
  if(cachedPredictions) return cachedPredictions;

  const response = await fetch(GITHUB_URL);
  if(!response.ok) throw new Error('Failed to fetch predictions: ${response.status}');

  const predictions: CoupPrediction[] = await response.json();
  cachedPredictions = toPredictionFeatureCollection(predictions);
  return cachedPredictions;
}

//Gets all of the prediction stats, we can edit this to only receive the desired stats to better optimize this feature
export async function getAllPredictions(): Promise<CoupPrediction[]> {
  const fc = await getPredictionFeatureCollection();
  return (fc.features ?? []).map((f) => f.properties);
}
