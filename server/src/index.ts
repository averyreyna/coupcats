import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT ?? 3001;
const R_API_URL = process.env.R_API_URL ?? "http://localhost:8000";

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

app.listen(PORT, () => {
  console.log(`Thin backend listening on http://localhost:${PORT} (R_API_URL=${R_API_URL})`);
});
