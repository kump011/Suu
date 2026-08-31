# Suu's Love Story Birthday Site ❤️

## How to personalize it (do this first!)
Open **script.js** and edit the `CONFIG` object at the very top. That's the only place you need to touch for content:
- `metSince` — the date you met (powers the "Our Story" live tracker)
- `birthdayMonth` / `birthdayDay` — currently September 2; the countdown auto-rolls to next year once it passes
- `gallery` (4 cards only), `timeline`, `wishes`, `reasons` — your own captions/text
- `loveQuotes` — short romantic lines for the Love Quotes section
- `littleThings` — short lines for "Little Things I Love About You"
- `quiz` — your 10 "how well do you know us" questions
- `letter` — your secret love letter text (the envelope one)
- `unspokenLetter` — the paragraphs for "Things I Never Knew How To Say". Wrap a phrase in `**double asterisks**` to have it softly highlighted.
- `heartStillSays` — the 4 quote cards for "The Things My Heart Still Says"
- `foreverQuote` — the closing line on the "Forever Begins" section (`#forever-begins`)
- `finaleMessage` / `finaleSecret` — the message and hidden-heart reveal text on the "FOREVER BEGINS ❤️" finale shown right after she taps YES on the proposal
- `tracks` — fallback paths to your music files (used if the `songs/manifest.json` fetch fails, e.g. opening the file locally)

## Adding real photos
Right now the 7 dedicated photo spots are wired up but empty, so the site works instantly with zero setup while you gather the real files. Drop these exact filenames into `assets/images/` and each spot picks them up automatically — no code changes needed:
- `su.1.webp` — Favorite Person portrait ("My Dearest Suu")
- `su.2.jpg` — Our Journey timeline "Best Memories" card
- `su.3.jpg` — My Entire World full-bleed portrait
- `su.4.jpg` — Love Quotes section portrait (large premium card, not a circle)
- `su.5.jpg` — A Gift I'll Treasure Forever frame
- `su.6.jpg` — the dedicated special photo space in the Relationship Timeline section (First Meet)
- `su.7.webp` — the single large hero image on the "Forever Begins" section (`#forever-begins`, near the bottom of the site)
- `forever-bg.webp` — the full-screen cinematic background photo for the redesigned "FOREVER BEGINS ❤️" finale that appears right after she taps YES on the proposal (inside `#celebration`). Until this file exists, a dark romantic gradient is shown instead.

Until each file is added, that spot shows a small "add your own photo here" note (or, for `forever-bg.webp`, a gradient background) instead of a broken image — just drop the file in and refresh.

For the Gallery grid, use `style="background-image:url('assets/images/yourphoto.jpg'); background-size:cover;"` in `initGallery()`.

## Adding music
Drop your MP3 files into `songs/`, then list them in `songs/manifest.json`. Each entry can be a plain filename, or an object with a custom display title:
```json
[
  { "file": "1.mp3", "title": "Nange Allav" },
  { "file": "2.mp3", "title": "Manasella" }
]
```
The player fetches that file and builds the whole playlist from it automatically. If you ever open `index.html` directly as a local file instead of through a server (so the fetch can't run), it quietly falls back to the `tracks` array in `CONFIG`. Browsers block autoplay with sound until the user interacts — clicking the big heart on the landing page counts as that interaction, so music starts right after.

## Gallery photos
Drop images named `gallery1.jpg`, `gallery2.png`, `gallery3.webp`, etc. into `assets/images/` and the gallery grid finds and loads them automatically (checks `.jpg`/`.jpeg`/`.png`/`.webp` for each number). The first 4 slots use the captions already set in `CONFIG.gallery`; anything from `gallery5` onward that's found gets its own new card added automatically.

## Love Quotes section
A large premium `su.4.jpg` portrait card (rounded-rectangle glass frame, not a circle) plus a grid of short romantic quotes. Edit `CONFIG.loveQuotes` to change the wording.

## Relationship Timeline section
Shows three real milestone dates (May 22, 2025 — The Day I Proposed; July 6, 2025 — Our First Call; January 25, 2026 — Our First Meet), with the last one styled to stand out. The first two cards have a small hidden "✦" you can tap for a private line. Right below the timeline is the dedicated `su.6.jpg` special photo space, which has its own hidden "✦" revealing a two-line cinematic message. Edit dates/text/hidden messages directly in the `#milestones` section of `index.html`.

## Things I Never Knew How To Say
A private-letter-style page (`#unspoken-words`) with a soft paper/glass background and generous line spacing. Content comes from `CONFIG.unspokenLetter` — each array entry is its own paragraph, fading in as you scroll.

## The Things My Heart Still Says
Four glassmorphism quote cards (`#heart-still-says`), content from `CONFIG.heartStillSays`.

## Birthday Countdown
A dedicated section (`#countdown-section`) with a live days/hours/minutes/seconds countdown to `CONFIG.birthdayMonth`/`CONFIG.birthdayDay`, recalculated every second and correctly rolling to next year once the date passes.

## Forever Begins
The final page (`#forever-begins`) — one large `su.7.webp` hero photo with a hidden "✦" reveal, followed by the closing quote from `CONFIG.foreverQuote`.

## Running it
Just open `index.html` in a browser — no build step, no server needed (though a local server is needed for the music manifest and gallery auto-detection to fetch correctly; opening the raw file still works via the built-in fallbacks). To share it, upload the whole folder to any static host (Netlify, GitHub Pages, Vercel) or zip it and send it directly.

## Files
- `index.html` — structure/content
- `style.css` — the luxury glassmorphism design system (aurora/royal blue/violet/emerald palette) + all animations
- `script.js` — all interactivity: particles, quiz, love story logic, music player
- `assets/images/` — 7 dedicated photo spots as `su.1`–`su.7`, plus optional numbered `gallery1`, `gallery2`... images for the Gallery grid
- `songs/` — your two MP3s plus `manifest.json`
