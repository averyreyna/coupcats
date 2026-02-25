# Thin backend

Node server that proxies ML requests to the R (plumber) API. The frontend calls this server to avoid CORS and to centralize config.

## Run

1. From this directory: `npm install`
2. Set `R_API_URL` to your plumber base URL (default: `http://localhost:8000`)
3. Start the R API (see `r-api/README.md`), then run:

   ```bash
   npm run dev
   ```

   The server listens on port 3001 by default. Use `PORT` to override.

Frontend should set `VITE_API_URL=http://localhost:3001` so it targets this backend.
