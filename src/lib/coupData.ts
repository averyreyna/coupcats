import type { CoupEvent, CoupFeatureCollection, CoupPrediction, PredictionFeatureCollection } from "../types/coup";
import coupsDataRaw from "../data/coups.geojson?raw";
import predictionsRaw from "../data/current_yhat.json";
import { getCoordsForCcode } from "./CountryCoordinates";
import { cowNameToGeoJsonAdmin } from "./countryNameMapping";

// Known mismatches between COW country names (in predictions) and GeoJSON ADMIN names
export const COW_TO_ADMIN_ALIASES: Record<string, string> = {
  "ivory coast":    "côte d'ivoire",
  "swaziland":      "eswatini",
  "czech republic": "czechia",
  "macedonia":      "north macedonia",
  "congo":          "republic of the congo",
};

// Returns a Map<normalized-admin-name, yhat | null> for enriching country polygons
export function buildPredictionProbMap(
  predictions: CoupPrediction[]
): Map<string, number | null> {
  const map = new Map<string, number | null>();
  for (const p of predictions) {
    const key = cowNameToGeoJsonAdmin(p.country).toLowerCase().trim();
    map.set(key, p.yhat ?? null);
  }
  // Greenland has no COW entry — color it the same as Denmark
  if (!map.has("greenland") && map.has("denmark")) {
    map.set("greenland", map.get("denmark")!);
  }
  return map;
}

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

// Build a GeoJSON FeatureCollection from the local predictions JSON
function toPredictionFeatureCollection(
  predictions: CoupPrediction[]
): PredictionFeatureCollection {
  const features = predictions
    .map((p) => {
      const coords = getCoordsForCcode(p.ccode);
      if (!coords) return null;

      return {
        type: "Feature" as const,
        id: `${p.ccode}-${p.year}-${p.month}`,
        geometry: {
          type: "Point" as const,
          coordinates: [coords.longitude, coords.latitude],
        },
        properties: {
          ...p,
          yhat: p.yhat !== null && isFinite(p.yhat) ? (p.yhat) : null,
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
      };
    })
    .filter((f): f is NonNullable<typeof f> => f !== null);

  return { type: "FeatureCollection", features};
}

// Built once at module load — no async needed with a local file
const predictionFeatureCollection: PredictionFeatureCollection =
  toPredictionFeatureCollection(predictionsRaw as unknown as CoupPrediction[]);

export function getPredictionFeatureCollection(): PredictionFeatureCollection {
  return predictionFeatureCollection;
}

export function getAllPredictions(): CoupPrediction[] {
  return predictionFeatureCollection.features.map((f) => f.properties);
}