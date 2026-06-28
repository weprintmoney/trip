# Eiman + Charlcye World Tour 2026

Trip itinerary site: https://weprintmoney.github.io/trip/

## Posting a video clip

1. Record on your Meta glasses, sync to your phone via the View app.
2. Upload the clip to YouTube and set visibility to **Unlisted**.
3. Copy the video ID — it's the part after `v=` in the URL:
   ```
   https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                    ^^^^^^^^^^^^ this part
   ```
4. Open `script.js` on GitHub (github.com/weprintmoney/trip/blob/main/script.js).
5. Click the pencil icon to edit.
6. Find the `CLIPS` array near the top and add a line:
   ```js
   { youtubeId: "dQw4w9WgXcQ", title: "Walking the levadas", city: "Madeira", flag: "🇵🇹", date: "Jul 12" },
   ```
7. Commit directly to main. The site updates in ~1 minute.

The **From the Road** section appears automatically once at least one clip is in the array.

## Updating the Da Nang countdown

The 9G 2962 (Phu Quoc → Da Nang) departure time is currently set to midnight as a placeholder. Once you know the actual time, update the `iso` field for the Da Nang stop in `script.js`:

```js
iso: "2026-07-27T00:00:00+07:00",  // ← replace with actual departure time
```

Format: `"YYYY-MM-DDTHH:MM:SS+07:00"` (Vietnam is UTC+7).
