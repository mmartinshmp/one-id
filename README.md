# HMP Global ONE ID — review site

Static files. No build step.

## Deploy to GitHub Pages
1. Put the contents of this folder at the root of the repo (or in `/docs`).
2. Settings → Pages → Source: Deploy from a branch → pick the branch and `/ (root)` (or `/docs`).
3. Keep `.nojekyll` in place: the `_ds` folder starts with an underscore and Jekyll would otherwise drop it.

## Pages
- `index.html` → redirects to the prototype
- `ONE ID.dc.html` — click-through prototype (Prev/Next + brand toggle at the top)
- `ONE ID Frames.dc.html` — every screen and state at 1440 and 390
- `ONE ID Components.dc.html` — tokens and component specs
- `ONE ID Flowchart.dc.html` — one-page user flow

## Test values
Codes: 00000000 = expired, 11111111 = invalid, anything else = valid.
NPI starting 9 = not found. Registration ID starting 9 = no match, starting 8 = expired.
Email containing "new" has no ONE ID yet; containing "event" or "mercyhealth" matches a recent registration.
