# Thin backend

Node server that proxies ML requests to an upstream API. The frontend calls this server to avoid CORS and to centralize config.

## Run

1. From this directory: `npm install`
2. Set `R_API_URL` to your upstream API base URL (default: `http://localhost:8000`)
3. Start your upstream API so `/health` and `/predict` are available, then run:

   ```bash
   npm run dev
   ```

   The server listens on port 3001 by default. Use `PORT` to override.

Frontend should set `VITE_API_URL=http://localhost:3001` so it targets this backend.
