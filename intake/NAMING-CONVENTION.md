# Servant Zero Music — Naming Convention & Folder Structure

## Intake Drop Zones (for raw files)
```
intake/
  songs/       ← Drop raw MP3 and WAV files here
  lyrics/      ← Drop raw lyric text files here
  images/      ← Drop raw thumbnail images here (16:9 YouTube ratio)
```

## Organized Catalog (per-song folders)
```
intake/catalog/
  {slug}/
    data.json        ← Song metadata (1 per folder)
    song.mp3         ← MP3 audio file (1 per folder)
    song.wav         ← WAV audio file (1 per folder)
    thumbnail.jpg    ← YouTube thumbnail image, 16:9 ratio (1 per folder)
```

## Slug Format
- All lowercase
- Spaces replaced with hyphens
- Special characters removed (apostrophes, colons, commas, periods)
- Examples:
  - "I Forgive You Pastor" → `i-forgive-you-pastor`
  - "It's My Fault" → `its-my-fault`
  - "Acts 2:38 - No Other Name" → `acts-238-no-other-name`
  - "Runnin'" → `runnin`
  - "They're All Evil" → `theyre-all-evil`
  - "6-7 The Truth" → `6-7-the-truth`

## File Naming Rules
- **Audio**: Always `song.mp3` and `song.wav` (one of each per folder)
- **Thumbnail**: Always `thumbnail.jpg` (or `.png`/`.webp` — we'll standardize later)
- **Data**: Always `data.json`
- No duplicate files in a folder — one of each type only

## data.json Structure
```json
{
  "title": "Display Title",
  "displayTitle": "Display Title (if different from title)",
  "slug": "kebab-case-slug",
  "duration": "3:25",
  "videoReleaseDate": "2025-12-26",
  "videoStatus": "published|scheduled",
  "youtubeVideoId": "abc123",
  "spotifyUrl": "",
  "appleMusicUrl": "",
  "amazonMusicUrl": "",
  "tidalUrl": "",
  "youtubeMusicUrl": "",
  "story": "The inspiration behind this song...",
  "lyrics": "Full lyrics text here...",
  "tags": ["church hurt", "healing"],
  "assets": {
    "mp3": false,
    "wav": false,
    "thumbnail": false,
    "lyricsFile": false
  },
  "pricing": {
    "mp3": 0.99,
    "wav": 1.29
  },
  "fileSizes": {
    "mp3": null,
    "wav": null
  }
}
```

## Pricing
- MP3: $0.99
- WAV: $1.29
- Website player always streams MP3 (lower bandwidth)
- Display file sizes for both so buyers can see the quality difference

## Image Format
- YouTube aspect ratio (16:9), NOT square
- Will be used as thumbnail on song cards and song pages

## Verification & Publishing Rules

### `verified` = true when ANY of:
- YouTube video ID is set (video exists on the channel)
- Spotify URL is set (song is on streaming platforms)
- Any other streaming platform evidence exists

### `publishToSite` = true ONLY when:
- `verified` is true **AND** a song file (MP3 or WAV) exists in the folder
- **NO song file = NO page on the website. Period.**
- If there's a video but no audio file, the song is verified but NOT published

### Auto-verification triggers:
- YouTube video ID populated → auto-verify
- Spotify/Apple Music URL populated → auto-verify
- Song file present + verified → auto-publish

## File Matching (Incoming Raw Files)
- When scanning dropped files, use fuzzy matching against the 98 known slugs
- **High confidence (>90%)**: Auto-rename and move to the correct song folder
- **Low confidence (<90%)**: Ask the user before renaming/moving
- Never overwrite existing files without asking
- File names from downloads may not match our naming convention — that's expected

## Workflow
1. Drop raw files into `songs/`, `lyrics/`, `images/`
2. Run matching script to identify which song each file belongs to
3. High-confidence matches get auto-moved; low-confidence matches get flagged
4. Move matched files into the correct `catalog/{slug}/` folder
5. Rename to `song.mp3`, `song.wav`, `thumbnail.jpg`
6. Update `data.json` assets flags + file sizes
7. Update `songs-master.json` checklist
8. Songs with `publishToSite: true` get pages generated on the website
