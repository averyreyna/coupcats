/**
How to Add or Update Narratives

Follow these steps when new narratives are completed:

1. Update the tracker
* Download the latest Excel sheet
* Export it as a `.csv`
* Save as narratives.csv in src/data

2. Sync narrative entries
Run the sync script: node src/data/syncNarratives.mjs
This will:
* Add new completed events to `narratives.json`
* Preserve existing narratives and content

3. Add narrative content
Open: src/data/narratives.json
Find the event by ID and fill in:
```json
"content": ["Paragraph 1", "Paragraph 2"],
"references": ["Source 1", "Source 2"]
```

4. Verify in the app
* Click the event on the map
* Ensure “Read Full Narrative” appears
* Confirm the narrative page renders correctly

### Notes
* Do NOT overwrite existing content
* If a narrative is not ready, leave `content` empty
* Narrative visibility depends on `content.length > 0`

*/

import fs from "fs";
import path from "path";

const DATA_DIR = path.resolve("src/data");

const CSV_PATH = path.join(DATA_DIR, "narratives.csv");
const EVENTS_PATH = path.join(DATA_DIR, "coups.geojson");
const NARRATIVES_PATH = path.join(DATA_DIR, "narratives.json");

const COMPLETE_STATUSES = new Set(["complete", "completed"]);

function normalizeText(value) {
  if (value == null) return "";
  return String(value).trim();
}

function normalizeStatus(value) {
  return normalizeText(value).toLowerCase();
}

function normalizeCountry(value) {
  const text = normalizeText(value);
  const lower = text.toLowerCase();

  const aliases = {
    "sao tome and principe": "Sao Tome and Principe",
    "são tomé and príncipe": "Sao Tome and Principe",
    "ivory coast": "Ivory Coast",
  };

  return aliases[lower] || text;
}

function safeInt(value) {
  const text = normalizeText(value);
  if (!text) return null;
  const num = Number(text);
  return Number.isFinite(num) ? Math.trunc(num) : null;
}

function looksComplete(status) {
  return COMPLETE_STATUSES.has(normalizeStatus(status));
}

function makeTitle(country, year) {
  return `${country} ${year} Coup Attempt`;
}

function parseCSV(content) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const next = content[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i++;
      row.push(field);
      field = "";

      if (row.some((cell) => normalizeText(cell) !== "")) {
        rows.push(row);
      }
      row = [];
    } else {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    if (row.some((cell) => normalizeText(cell) !== "")) {
      rows.push(row);
    }
  }

  if (rows.length === 0) return [];

  const headers = rows[0].map((h) => normalizeText(h));
  return rows.slice(1).map((values) => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index] ?? "";
    });
    return obj;
  });
}

function loadCSVRows(csvPath) {
  const raw = fs.readFileSync(csvPath, "utf8");
  const parsed = parseCSV(raw);

  return parsed
    .map((row) => ({
      country: normalizeCountry(row.country),
      year: safeInt(row.year),
      month: safeInt(row.month),
      day: safeInt(row.day),
      contributor: normalizeText(row.Contributor),
      status: normalizeText(row.Status),
      linkToNarrative: normalizeText(row["Link to Narrative"]),
    }))
    .filter(
      (row) =>
        row.country && row.year != null && row.month != null && row.day != null,
    );
}

function loadEvents(eventsPath) {
  const raw = fs.readFileSync(eventsPath, "utf8");
  const geojson = JSON.parse(raw);
  return geojson.features || [];
}

function buildEventLookup(features) {
  const lookup = new Map();

  for (const feature of features) {
    const props = feature.properties || {};
    const country = normalizeCountry(props.country);
    const year = safeInt(props.year);

    let month = null;
    let day = null;

    const dateStr = normalizeText(props.date);
    const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (match) {
      month = Number(match[2]);
      day = Number(match[3]);
    }

    if (!country || year == null || month == null || day == null) continue;

    const key = `${country}__${year}__${month}__${day}`;
    lookup.set(key, props);
  }

  return lookup;
}

function loadExistingNarratives(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  const raw = fs.readFileSync(filePath, "utf8").trim();
  if (!raw) {
    return [];
  }

  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    throw new Error("narratives.json must contain a JSON array.");
  }

  return parsed;
}

function makeStub(row, event) {
  return {
    id: event.id,
    title: makeTitle(row.country, row.year),
    country: row.country,
    year: row.year,
    month: row.month,
    day: row.day,
    status: "Complete",
    contributor: row.contributor || undefined,
    sourceLinkLabel: row.linkToNarrative || undefined,
    content: [],
    references: [],
  };
}

function mergeNarratives(existingNarratives, generatedNarratives) {
  const existingById = new Map(
    existingNarratives.map((entry) => [entry.id, entry]),
  );
  const merged = [];

  for (const generated of generatedNarratives) {
    const existing = existingById.get(generated.id);

    if (existing) {
      merged.push({
        ...generated,
        ...existing,
        id: generated.id,
        country: generated.country,
        year: generated.year,
        month: generated.month,
        day: generated.day,
        status: generated.status,
        title: existing.title || generated.title,
        contributor: existing.contributor || generated.contributor,
        sourceLinkLabel: existing.sourceLinkLabel || generated.sourceLinkLabel,
        content: Array.isArray(existing.content) ? existing.content : [],
        references: Array.isArray(existing.references)
          ? existing.references
          : [],
      });
    } else {
      merged.push(generated);
    }
  }

  return merged.sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    if (a.month !== b.month) return b.month - a.month;
    if (a.day !== b.day) return b.day - a.day;
    return a.country.localeCompare(b.country);
  });
}

function main() {
  const sheetRows = loadCSVRows(CSV_PATH);
  const eventFeatures = loadEvents(EVENTS_PATH);
  const eventLookup = buildEventLookup(eventFeatures);
  const existingNarratives = loadExistingNarratives(NARRATIVES_PATH);

  const completedRows = sheetRows.filter((row) => looksComplete(row.status));

  const generatedNarratives = [];
  const unmatched = [];

  for (const row of completedRows) {
    const key = `${row.country}__${row.year}__${row.month}__${row.day}`;
    const event = eventLookup.get(key);

    if (!event) {
      unmatched.push({
        country: row.country,
        year: row.year,
        month: row.month,
        day: row.day,
        contributor: row.contributor,
        linkToNarrative: row.linkToNarrative,
        reason: "No matching event found in dataset",
      });
      continue;
    }

    generatedNarratives.push(makeStub(row, event));
  }

  const mergedNarratives = mergeNarratives(
    existingNarratives,
    generatedNarratives,
  );

  fs.writeFileSync(
    NARRATIVES_PATH,
    JSON.stringify(mergedNarratives, null, 2),
    "utf8",
  );

  const existingIds = new Set(existingNarratives.map((n) => n.id));
  const added = generatedNarratives.filter((n) => !existingIds.has(n.id));
  const preserved = generatedNarratives.filter((n) => existingIds.has(n.id));

  console.log("\nADDED NEW STUBS");
  for (const item of added) {
    console.log(
      `- ${item.id} | ${item.country} ${item.year}-${String(item.month).padStart(2, "0")}-${String(item.day).padStart(2, "0")}`,
    );
  }

  console.log("\nPRESERVED EXISTING ENTRIES");
  for (const item of preserved) {
    console.log(`- ${item.id}`);
  }

  console.log("\nUNMATCHED COMPLETED ROWS");
  for (const item of unmatched) {
    console.log(
      `- ${item.country} ${item.year}-${String(item.month).padStart(2, "0")}-${String(item.day).padStart(2, "0")} | ${item.reason}`,
    );
  }

  console.log(
    `\nUpdated ${NARRATIVES_PATH} with ${mergedNarratives.length} total entries.`,
  );
}

main();
