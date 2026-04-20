/**
 * Maps COW (Correlates of War) country names to GeoJSON `name` property values.
 * The countries GeoJSON from datasets/geo-countries uses `name` as the country
 * identifier, which sometimes differs from the COW naming convention used in
 * our prediction data.
 */

const COW_TO_GEOJSON: Record<string, string> = {
  "Antigua & Barbuda": "Antigua and Barbuda",
  "Bahamas": "The Bahamas",
  "Cape Verde": "Cabo Verde",
  "Congo": "Republic of the Congo",
  "Czech Republic": "Czechia",
  "East Timor": "East Timor",
  "Macedonia": "North Macedonia",
  "Sao Tome and Principe": "São Tomé and Principe",
  "St. Kitts and Nevis": "Saint Kitts and Nevis",
  "St. Lucia": "Saint Lucia",
  "St. Vincent and the Grenadines": "Saint Vincent and the Grenadines",
  "Swaziland": "eSwatini",
  "Tanzania": "United Republic of Tanzania",
  "United States": "United States of America",
  "Yugoslavia": "Republic of Serbia",
};

/**
 * Convert a COW country name to the corresponding GeoJSON `name` property value.
 * Returns the original name if no mapping exists (most names match directly).
 */
export function cowNameToGeoJsonAdmin(cowName: string): string {
  return COW_TO_GEOJSON[cowName] ?? cowName;
}

/**
 * Maps a clicked GeoJSON country name to the COW data name whose data should be shown.
 * Used when a territory (Greenland) or renamed country (Serbia, Cabo Verde) is clicked.
 */
const GEOJSON_TO_COW_DATA: Record<string, string> = {
  "Greenland":                          "Denmark",
  "Republic of Serbia":                 "Yugoslavia",
  "Cabo Verde":                         "Cape Verde",
  "United States of America":           "United States",
  "United Republic of Tanzania":        "Tanzania",
  "Antigua and Barbuda":                "Antigua & Barbuda",
  "The Bahamas":                        "Bahamas",
  "São Tomé and Principe":              "Sao Tome and Principe",
  "Saint Kitts and Nevis":              "St. Kitts and Nevis",
  "Saint Lucia":                        "St. Lucia",
  "Saint Vincent and the Grenadines":   "St. Vincent and the Grenadines",
  "eSwatini":                           "Swaziland"
};

export function getDataLookupName(geoName: string): string {
  return GEOJSON_TO_COW_DATA[geoName] ?? geoName;
}

/**
 * Returns additional GeoJSON country names that should be co-highlighted
 * when the given country is selected (e.g. Greenland ↔ Denmark).
 */
const CO_HIGHLIGHT_PAIRS: Record<string, string[]> = {
  "Greenland": ["Denmark"],
  "Denmark":   ["Greenland"],
};

export function getCoHighlightNames(geoName: string): string[] {
  return CO_HIGHLIGHT_PAIRS[geoName] ?? [];
}
