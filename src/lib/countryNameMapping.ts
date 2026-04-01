/**
 * Maps COW (Correlates of War) country names to GeoJSON `name` property values.
 * The countries GeoJSON from datasets/geo-countries uses `name` as the country
 * identifier, which sometimes differs from the COW naming convention used in
 * our prediction data.
 */

const COW_TO_GEOJSON: Record<string, string> = {
  "Antigua & Barbuda": "Antigua and Barbuda",
  "Bahamas": "The Bahamas",
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
};

/**
 * Convert a COW country name to the corresponding GeoJSON `name` property value.
 * Returns the original name if no mapping exists (most names match directly).
 */
export function cowNameToGeoJsonAdmin(cowName: string): string {
  return COW_TO_GEOJSON[cowName] ?? cowName;
}
