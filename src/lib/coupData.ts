import type { CoupEvent, CoupFeatureCollection, CoupPrediction, PredictionFeatureCollection} from "../types/coup";
import coupsDataRaw from "../data/coups.geojson?raw";
import { getCoordsForCcode } from "./CountryCoordinates";

// parsed once at module load; same reference returned
const coupsFeatureCollection: CoupFeatureCollection = JSON.parse(
  coupsDataRaw
) as CoupFeatureCollection;

export function getCoupsFeatureCollection(): CoupFeatureCollection {
  return coupsFeatureCollection;
}

export function getAllCoupEvents(): CoupEvent[] {
  return (coupsFeatureCollection.features ?? []).map(
    (feature) => feature.properties
  );
}

// Newly added data from the github pull

const GITHUB_URL = "https://raw.githubusercontent.com/thynec/CoupCats/refs/heads/main/recent_data.json";

let cachedPredictions: PredictionFeatureCollection | null = null;

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
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
      };
    })
    .filter((f): f is NonNullable<typeof f> => f !== null);

  return {type: "FeatureCollection", features};
}

export async function getPredictionFeatureCollection(): Promise<PredictionFeatureCollection> {
  if(cachedPredictions) return cachedPredictions;

  const response = await fetch(GITHUB_URL);
  if(!response.ok) throw new Error('Failed to fetch predictions: ${response.status}');

  const predictions: CoupPrediction[] = await response.json();
  cachedPredictions = toPredictionFeatureCollection(predictions);
  return cachedPredictions;
}

export async function getAllPredictions(): Promise<CoupPrediction[]> {
  const fc = await getPredictionFeatureCollection();
  return (fc.features ?? []).map((f) => f.properties);
}