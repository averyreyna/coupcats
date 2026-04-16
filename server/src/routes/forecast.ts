import { Router, Request, Response } from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();

const riskData: any[] = JSON.parse(
  readFileSync(
    join(__dirname, "../../../src/data/yhat_data_2026_month4.json"),
    "utf-8",
  ),
);

function buildForecastRows(year: number, month: number) {
  const baselineYear = 2026;
  const baselineMonth = 4;

  const monthOffset = (year - baselineYear) * 12 + (month - baselineMonth);

  return riskData.map((item) => {
    const baseYhat = Number(item.yhat ?? 0);

    const adjustedYhat = Math.max(0, baseYhat * (1 + monthOffset * 0.03));

    return {
      ...item,
      year,
      month,
      yhat: adjustedYhat,
    };
  });
}

router.get("/forecast", (req: Request, res: Response) => {
  const year = Number(req.query.year);
  const month = Number(req.query.month);

  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    month < 1 ||
    month > 12
  ) {
    return res.status(400).json({ error: "Invalid year or month" });
  }

  const forecastRows = buildForecastRows(year, month);
  res.json(forecastRows);
});

export default router;
