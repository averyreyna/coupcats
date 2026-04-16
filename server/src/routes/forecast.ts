// Forecast(n months) = 1 - (1 - p)^n

import { Router, Request, Response } from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();

const riskData: any[] = JSON.parse(
  readFileSync(join(__dirname, "../../../src/data/current_yhat.json"), "utf-8"),
);

function buildForecastRows(monthsAhead: number) {
  return riskData.map((item) => {
    const p = Number(item.yhat);
    const baseYhat = isFinite(p) ? p : 0;

    const adjustedYhat = 1 - Math.pow(1 - baseYhat, monthsAhead);

    return {
      ...item,
      monthsAhead,
      yhat: adjustedYhat,
    };
  });
}

router.get("/forecast", (req: Request, res: Response) => {
  const monthsAhead = Number(req.query.monthsAhead);

  if (!Number.isInteger(monthsAhead) || monthsAhead < 1 || monthsAhead > 12) {
    return res.status(400).json({ error: "Invalid monthsAhead" });
  }

  const forecastRows = buildForecastRows(monthsAhead);
  res.json(forecastRows);
});

export default router;
