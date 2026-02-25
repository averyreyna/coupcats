const API_BASE = import.meta.env.VITE_API_URL ?? "";

export interface PredictRequest {
  [key: string]: unknown;
}

export interface PredictResponse {
  predictions?: number[];
  message?: string;
  [key: string]: unknown;
}

export async function predict(payload: PredictRequest): Promise<PredictResponse> {
  const res = await fetch(`${API_BASE}/api/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`predict failed: ${res.status}`);
  return res.json() as Promise<PredictResponse>;
}
