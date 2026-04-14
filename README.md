## How to Add or Update Narratives

Follow these steps when new narratives are completed:

### 1. Update the tracker

- Download the latest Excel sheet
- Export it as a `.csv`
- Replace the existing CSV file used by the project

### 2. Sync narrative entries

Run the sync script:

```bash
node src/data/syncNarratives.mjs
```

This will:

- Add new completed events to `narratives.json`
- Preserve existing narratives and content

### 3. Add narrative content

Open:

`src/data/narratives.json`

Find the event by ID and fill in:

```json
"content": ["Paragraph 1", "Paragraph 2"],
"references": ["Source 1", "Source 2"]
```

### 4. Verify in the app

- Click the event on the map
- Ensure “Read Full Narrative” appears
- Confirm the narrative page renders correctly

### Notes

- Do NOT overwrite existing content
- If a narrative is not ready, leave `content` empty
- Narrative visibility depends on `content.length > 0`
