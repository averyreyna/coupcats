import express from "express";
import cors from "cors";

const GITHUB_JSON_URL =
  process.env.GITHUB_JSON_URL ??
  "https://raw.githubusercontent.com/thynec/CoupCats/main/recent_data.json";

const app = express();
const PORT = process.env.PORT ?? 3001;
const R_API_URL = process.env.R_API_URL ?? "http://localhost:8000";

async function fetchRiskData() {
  const r = await fetch(GITHUB_JSON_URL);
  if (!r.ok) {
    throw new Error("Failed to fetch risk data");
  }
  return r.json();
}

app.use(cors());
app.use(express.json());

app.get("/api/health", async (_req, res) => {
  try {
    const r = await fetch(`${R_API_URL}/health`);
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(502).json({ status: "error", message: "R API unreachable" });
  }
});

app.post("/api/predict", async (req, res) => {
  try {
    const r = await fetch(`${R_API_URL}/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });
    const data = await r.json();
    res.status(r.ok ? 200 : 502).json(data);
  } catch (err) {
    res.status(502).json({ error: "R API unreachable" });
  }
});

app.get("/api/risk/all", async (_req, res) => {
  try {
    const data = await fetchRiskData();
    //normalize data
    const formatted = data.map((item: any) => ({
      country: item.country,
      risk: item.prediction_prob,
    }));
    res.json(formatted);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch risk data",
    });
  }
});

app.get("/api/countries", async (_req, res) => {
  try {
    const data = await fetchRiskData();
    const countries = data.map((item: any) => item.country);

    res.json(countries);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch counntries",
    });
  }
});

// /api/countries/:country
app.get("/api/countries/:country", async (req, res) => {
  try {
    const data = await fetchRiskData();
    const countryData = data.find(
      (item: any) =>
        item.country.toLowerCase() === req.params.country.toLowerCase()
    );
    if (!countryData) {
      return res.status(404).json({ error: "Country not found" });
    }
    res.json({
      country: countryData.country,
      risk: countryData.prediction_prob,
      raw: countryData,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch country",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Thin backend listening on http://localhost:${PORT} (R_API_URL=${R_API_URL})`);
});
