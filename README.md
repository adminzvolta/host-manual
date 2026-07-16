# Zvolta Host Manual

Source code for the Zvolta Host Manual: charger specifications, site-readiness guidance, Wi-Fi commissioning, app/Partner Portal guidance, and support content.

## Run locally

Requirements: Node.js 22.13 or later.

```bash
npm ci
npm run dev
```

## Main project files

- `app/page.tsx` — page content and sections
- `app/globals.css` — styling and responsive layout
- `public/` — Zvolta logo, charger images, and Wi-Fi setup screenshots

## Integrating into zvolta.com

Move or adapt the page and its `public/` assets into the main Zvolta website repository, then expose it at a route such as `/host-manual`.

This repository is a standalone Vinext/React implementation reference for the Zvolta developer.
