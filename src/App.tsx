import { useRef, useState, useCallback, useMemo, useEffect } from "react";
import { Map, Source, Layer, Popup, type MapRef } from "@vis.gl/react-maplibre";
import type { CircleLayerSpecification, MapLayerMouseEvent } from "maplibre-gl";
import type { CoupEvent } from "./types/coup";
import EventPopup from "./components/EventPopup";
import MapLegend from "./components/MapLegend";
import Layout from "./components/Layout";
import { useFilterStore } from "./store/useFilterStore";
import { OUTCOME_COLORS } from "./lib/colors";
import { getCoupsFeatureCollection, getAllCoupEvents } from "./lib/coupData";
import { buildMapFilterExpression } from "./lib/filterHelpers";
import { useMapHover } from "./hooks/useMapHover";
import { useEscapeToClearSelection } from "./hooks/useEscapeToClearSelection";
import { useClearSelectionOnMapClick } from "./hooks/useClearSelectionOnMapClick";

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

// maplibre expressions: radius by feature-state hover, color by outcome property
const circleLayerPaint: CircleLayerSpecification["paint"] = {
  "circle-radius": [
    "case",
    ["boolean", ["feature-state", "hover"], false],
    14,
    10,
  ],
  "circle-color": [
    "match",
    ["get", "outcome"],
    "successful",
    OUTCOME_COLORS.successful,
    "failed",
    OUTCOME_COLORS.failed,
    "attempted",
    OUTCOME_COLORS.attempted,
    "plot",
    OUTCOME_COLORS.plot,
    "alleged",
    OUTCOME_COLORS.alleged,
    OUTCOME_COLORS.alleged,
  ],
  "circle-stroke-width": 2,
  "circle-stroke-color": "#020617",
  "circle-opacity": 1,
};

export default function App() {
  const mapRef = useRef<MapRef>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [countriesGeoJSON, setCountriesGeoJSON] = useState<any>(null);

  const allEvents = useMemo(() => getAllCoupEvents(), []);
  const yearRange = useFilterStore((s) => s.yearRange);
  const viewMode = useFilterStore((s) => s.viewMode);
  const filteredEvents = useMemo(() => {
    return allEvents.filter((event) => {
      return event.year >= yearRange[0] && event.year <= yearRange[1];
    });
  }, [allEvents, yearRange]);

  // Load countries GeoJSON on mount
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson"
    )
      .then((res) => res.json())
      .then((data) => setCountriesGeoJSON(data))
      .catch((err) => console.error("Failed to load countries GeoJSON:", err));
  }, []);

  const selectedEvent = useFilterStore((s) => s.selectedEvent);
  const setSelectedEvent = useFilterStore((s) => s.setSelectedEvent);
  const setSelectedCountry = useFilterStore((s) => s.setSelectedCountry);
  const searchQuery = useFilterStore((s) => s.searchQuery);
  const selectedOutcomes = useFilterStore((s) => s.selectedOutcomes);
  const selectedRegions = useFilterStore((s) => s.selectedRegions);
  const dateRange = useFilterStore((s) => s.dateRange);
  const selectedTags = useFilterStore((s) => s.selectedTags);

  // Build filter expression based on current filter state
  const filterExpression = useMemo(
    () =>
      buildMapFilterExpression(
        {
          searchQuery,
          selectedOutcomes,
          selectedRegions,
          dateRange,
          selectedTags,
        },
        allEvents,
      ),
    [
      searchQuery,
      selectedOutcomes,
      selectedRegions,
      dateRange,
      selectedTags,
      allEvents,
    ],
  );

  const circleLayerStyle: CircleLayerSpecification = {
    id: "coup-circles",
    type: "circle",
    source: "coups",
    paint: circleLayerPaint,
    filter: filterExpression,
  };

  const { onMouseEnter, onMouseLeave } = useMapHover({
    mapRef,
    sourceId: "coups",
  });

  const onClick = useCallback(
    (e: MapLayerMouseEvent) => {
      // Prioritize coup circles over countries
      const coupFeature = e.features?.find(f => f.layer?.id === "coup-circles");
      if (coupFeature) {
        const event = coupFeature.properties as CoupEvent;
        setSelectedEvent(event);
        setSelectedCountry(event.country);
        return;
      }

      // Check if clicking on a country
      const countryFeature = e.features?.find(f => f.layer?.id === "countries-fill");
      if (countryFeature) {
        const countryName = countryFeature.properties?.ADMIN || countryFeature.properties?.name;
        if (countryName) {
          setSelectedCountry(countryName);
          setSelectedEvent(null);
          return;
        }
      }

      // Check if clicking on a country (fallback manual calculation)
      if (countriesGeoJSON && countriesGeoJSON.features) {
        let nearestCountry: string | null = null;
        let minDistance = Infinity;

        for (const feature of countriesGeoJSON.features) {
          const countryName = feature.properties?.ADMIN || feature.properties?.name;
          if (!countryName) continue;

          const geometry = feature.geometry;
          if (!geometry) continue;

          let coords: any[] = [];

          // Handle both Polygon and MultiPolygon
          if (geometry.type === "Polygon" && geometry.coordinates[0]) {
            coords = geometry.coordinates[0];
          } else if (geometry.type === "MultiPolygon") {
            // For MultiPolygon, use the first polygon's exterior ring
            if (geometry.coordinates[0]?.[0]) {
              coords = geometry.coordinates[0][0];
            }
          }

          if (coords.length > 0) {
            // Calculate centroid
            const centroidLng =
              coords.reduce((sum: number, c: any) => sum + c[0], 0) /
              coords.length;
            const centroidLat =
              coords.reduce((sum: number, c: any) => sum + c[1], 0) /
              coords.length;

            const dx = centroidLng - e.lngLat.lng;
            const dy = centroidLat - e.lngLat.lat;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < minDistance) {
              minDistance = distance;
              nearestCountry = countryName;
            }
          }
        }

        // Select if within a reasonable distance (15 degrees should be sufficient)
        if (nearestCountry && minDistance < 15) {
          setSelectedCountry(nearestCountry);
          setSelectedEvent(null);
          return;
        }
      }

      // No country or coup clicked
      setSelectedEvent(null);
      setSelectedCountry(null);
    },
    [setSelectedEvent, setSelectedCountry, countriesGeoJSON]
  );

  useClearSelectionOnMapClick({
    mapRef,
    layerIds: ["coup-circles"],
    setSelectedEvent,
  });

  useEscapeToClearSelection(setSelectedEvent);

  return (
    <Layout mapRef={mapRef} allEvents={allEvents}>
      <div className="relative h-full w-full">
        {viewMode === "events" ? (
          <>
            {!mapLoaded && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0f1117]">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500/30 border-t-amber-500" />
              </div>
            )}
            <Map
              ref={mapRef}
              initialViewState={{
                longitude: 20,
                latitude: 15,
                zoom: 2,
              }}
              mapStyle={MAP_STYLE}
              interactiveLayerIds={["coup-circles", "countries-fill"]}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={onClick}
              onLoad={() => setMapLoaded(true)}
            >
              <Source
                id="coups"
                type="geojson"
                data={getCoupsFeatureCollection(filteredEvents)}
                promoteId="id"
              >
                <Layer {...circleLayerStyle} />
              </Source>
              {countriesGeoJSON && (
                <Source id="countries" type="geojson" data={countriesGeoJSON}>
                  <Layer
                    id="countries-fill"
                    type="fill"
                    paint={{
                      "fill-color": "rgba(0,0,0,0)",
                      "fill-opacity": 0,
                    }}
                  />
                </Source>
              )}
              {selectedEvent && (
                <Popup
                  longitude={selectedEvent.longitude}
                  latitude={selectedEvent.latitude}
                  onClose={() => setSelectedEvent(null)}
                  closeButton
                  closeOnClick={false}
                >
                  <EventPopup event={selectedEvent} />
                </Popup>
              )}
            </Map>
            <MapLegend />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#0f1117]">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Coup Risk View</h2>
              <p className="text-gray-400">Risk analysis visualization coming soon</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
