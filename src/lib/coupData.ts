import type { CoupEvent, CoupFeatureCollection, CoupPrediction, PredictionFeatureCollection} from "../types/coup";
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
