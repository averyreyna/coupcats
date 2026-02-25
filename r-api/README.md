# R API (Plumber)

R service that loads a trained model and exposes HTTP endpoints for predictions.

## Setup

1. Install [R](https://www.r-project.org/) and the plumber package:

   ```r
   install.packages("plumber")
   ```

2. Train the model (from this directory):

   ```bash
   Rscript train.R
   ```

   This should produce `model.rds` (or adjust paths in `plumber.R`).

3. Run the API:

   ```bash
   Rscript -e 'plumber::pr_run(plumber::pr("plumber.R"), port = 8000)'
   ```

   The API will listen on `http://localhost:8000` with `GET /health` and `POST /predict`.

## Optional: Docker

You can containerize the R API with a Dockerfile that installs R, required packages, and runs the plumber process. The thin backend (`server/`) then points `R_API_URL` at the container.
