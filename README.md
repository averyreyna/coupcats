# CoupCats

**CoupCats** is an interactive web platform that predicts coup d'état risk for every country in the world using a logistic regression model. It is designed for policymakers and foreign policy researchers to visualize and understand political instability risk across ~195 countries from a centralized, data-driven source.

🌐 **Live site:** [coupcats.fly.dev](https://coupcats.fly.dev)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [File & Folder Reference](#file--folder-reference)
- [How the Pieces Connect](#how-the-pieces-connect)
- [Getting Started](#getting-started)
- [Updating Data](#updating-data)
- [Deployment](#deployment)
- [Known Issues & Open Items](#known-issues--open-items)

---

## Project Overview

The frontend is a React + TypeScript single-page application built with Vite. It renders an interactive map (via MapLibre GL) where users can click on any country to open a **Risk Panel** — a pop-up window that fetches that country's risk score and contributing variables from the backend API.

The backend lives in the `server/` directory and serves the risk prediction data to the frontend. It was intentionally kept simple and well-documented so that the next team can extend it with minimal friction.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | PandaCSS |
| Map rendering | MapLibre GL / react-map-gl |
| State management | Zustand |
| Icons | Lucide React |
| Routing | React Router DOM |
| Backend | Node.js (see `server/`) |
| Containerization | Docker |
| Hosting | Fly.io |

---

## Project Structure

```
coupcats/
├── public/               # Static assets served directly (images, icons, etc.)
├── server/               # Backend API — serves risk data to the frontend
├── src/                  # All frontend source code
│   ├── components/       # Reusable UI components (including the Risk Panel)
│   ├── data/             # Static data files (forecast data, narratives)
│   │   ├── current_yhat.json     # Baseline forecast risk dataset (logistic regression output)
│   │   ├── narratives.json       # Country narrative content
│   │   ├── narratives.csv        # Source CSV for narratives sync
│   │   └── syncNarratives.mjs    # Script to sync narratives CSV → JSON
│   ├── pages/            # Top-level page components (routes)
│   └── ...               # Other source files (hooks, utils, types, etc.)
├── test/                 # Test files
├── index.html            # HTML entry point for Vite
├── package.json          # Dependencies and npm scripts
├── vite.config.ts        # Vite bundler configuration
├── panda.config.ts       # PandaCSS styling configuration
├── tsconfig.json         # TypeScript configuration (project root)
├── tsconfig.app.json     # TypeScript configuration (app source)
├── tsconfig.node.json    # TypeScript configuration (Node/tooling)
├── postcss.config.js     # PostCSS configuration (used by PandaCSS)
├── Dockerfile            # Two-stage Docker build for deployment
├── fly.toml              # Fly.io deployment configuration
├── .env.example          # Environment variable template — copy to .env
└── .dockerignore         # Files excluded from Docker builds
```

---

## File & Folder Reference

### `src/data/current_yhat.json`
The core forecast dataset. This is the output of the logistic regression model run by the data science team. It contains predicted coup risk probabilities (`yhat`) for each country. **This is the file to replace when the model is updated.** See [Updating Data](#updating-data).

### `src/data/narratives.json` + `narratives.csv`
Country-level narrative text shown in the Risk Panel. The CSV is the working source of truth maintained by the research team. Run `syncNarratives.mjs` to push updates from the CSV into the JSON. Existing narrative content is preserved automatically during sync.

#### How to run
```bash
   node src/data/syncnarratives.json   
```

### `server/`
The backend API. It exposes endpoints that the frontend calls to retrieve:
- A country's current risk score
- The variables (features) that feed into that score

The API is intentionally minimal and documented for easy handoff. If you are extending the backend, start here.

### `src/components/` — Risk Panel
The Risk Panel is the pop-up window that appears when a user clicks a country on the map. It calls the backend API, retrieves that country's risk statistics and contributing variables, and displays them. This is one of the primary user-facing features of the site.

### `Dockerfile`
Two-stage build:
1. **Stage 1 (`node:20-alpine`)** — installs dependencies and runs `npm run build` to produce the `/app/dist` static bundle.
2. **Stage 2 (`pierrezemb/gostatic`)** — serves the built static files on port 8080 with HTTPS promotion and SPA fallback (`index.html`) enabled.

### `fly.toml`
Fly.io deployment config. Controls the app name, region, port, and health checks. You shouldn't need to touch this unless you're changing hosting infrastructure.

### `.env.example`
Template for required environment variables. Copy this to `.env` before running the app locally:
```bash
cp .env.example .env
```
Fill in any required values (API URLs, keys, etc.) before starting the dev server.

---

## How the Pieces Connect

```
User clicks country on map
        ↓
  Risk Panel opens (src/components/)
        ↓
  Calls backend API (server/)
        ↓
  Backend reads/returns risk data
        ↓
  Risk Panel displays score + variables
        ↑
  Forecast data sourced from:
  src/data/current_yhat.json  (model output)
  src/data/narratives.json    (research narratives)
```

The map itself is rendered by MapLibre GL and controlled via react-map-gl. Country selection triggers Zustand state updates, which the Risk Panel component subscribes to.

---

## Getting Started

**Prerequisites:** Node.js 20+, npm

```bash
# 1. Clone the repo
git clone https://github.com/averyreyna/coupcats.git
cd coupcats

# 2. Set up environment variables
cp .env.example .env
# Edit .env with the appropriate values

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The dev script runs PandaCSS codegen and cssgen before launching Vite, so the first startup may take a moment.

To run with Docker locally:
```bash
docker build -t coupcats .
docker run -p 8080:8080 coupcats
```

---

## Updating Data

### Updating Forecast Risk Data
The forecast model output lives at `src/data/current_yhat.json`. To update it:
1. Replace the file with the latest `yhat` dataset from the data science team.
2. Restart the backend server.

> ⚠️ Current Risk data is loaded separately and is **not** affected by this file.

### Updating Country Narratives
1. Save the updated tracker CSV into `src/data/` as `narratives.csv`.
2. From the project root, run:
   ```bash
   node src/data/syncNarratives.mjs
   ```
3. Add or edit narrative content in `src/data/narratives.json` as needed. Existing entries are preserved automatically.

---

## Deployment

The app is hosted on [Fly.io](https://fly.io) and deployed via Docker.

```bash
# Deploy to Fly.io (requires flyctl installed and authenticated)
fly deploy
```

The `fly.toml` handles routing, port binding (8080), and health checks. The Docker build is fully self-contained — no separate build step needed before deploying.

---

## Known Issues & Open Items

Check the [GitHub Issues tab](https://github.com/averyreyna/coupcats/issues) for the current list of open bugs and feature requests left by the previous team. There are a few that are open that have either been touched on a little bit, or not at all. Such as, the one that says to touch up on the risk panel, can probably be just kept in mind as you are editing the panel and optimizing it to be visually more appealing.

---

*Built by the CoupCats team. Handed off for continued development.*
