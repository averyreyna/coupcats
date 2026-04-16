## Updating Forecast Data

Forecast Risk uses a baseline dataset (`yhat`) from:

```
src/data/current_yhat.json
```

To update:

1. Replace this file with the latest dataset
2. Restart the backend

Current Risk is loaded separately and is not affected by this file.

## Updating Narratives

1. Save the tracker CSV in `src/data/` as `narratives.csv`
2. Run:

   ```bash
   cd coupcats
   node src/data/syncNarratives.mjs
   ```

3. Add narrative content in `src/data/narratives.json`

Existing content is preserved automatically.
