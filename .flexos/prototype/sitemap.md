---
id: prototype-sitemap
title: "Sitemap"
description: "Page hierarchy and routing structure for the prototype"
type: prototype
subtype: config
status: draft
sequence: 1
tags: [prototype, sitemap, pages, navigation]
relatesTo: [docs/core/003-pages.md, design/design-system.md]
createdAt: ""
updatedAt: ""
---

<flex_block type="instructions">
This file defines the prototype's page structure. The AI reads this to know what pages exist, their hierarchy, and what each page should contain. When generating new prototype pages, add them here first then create the HTML file.

Each page entry maps to an HTML file in prototype/pages/. The shared/ folder contains CSS and mock data used by all pages.
</flex_block>

# Sitemap

The prototype is a set of standalone HTML pages that demonstrate the product's UI and flow. Each page is self-contained — it loads shared CSS and mock data, then renders a realistic preview of what the real app will look like.

## Pages

<flex_block type="config">
{
  "pages": [
    {
      "id": "index",
      "title": "Home",
      "file": "pages/index.html",
      "description": "Landing page — hero, features overview, CTA",
      "nav": true,
      "icon": "home"
    }
  ],
  "shared": {
    "tokens": "shared/tokens.css",
    "components": "shared/components.css",
    "mockData": "shared/mock-data.js",
    "mockDataJson": "shared/mock-data.json"
  },
  "deployment": {
    "platform": "vercel",
    "rootDirectory": ".flexos/prototype",
    "outputDirectory": ".",
    "buildCommand": null,
    "framework": null,
    "cleanUrls": true,
    "trailingSlash": false,
    "domain": "{project-slug}.flexos.site",
    "workflow": ".github/workflows/deploy-preview.yml"
  }
}
</flex_block>

## Adding Pages

1. Add an entry to the pages array above
2. Create the HTML file in `prototype/pages/`
3. Link `../../shared/tokens.css` and `../../shared/components.css` in the `<head>`
4. Import mock data with `<script src="../../shared/mock-data.js"></script>`
5. Use design tokens as CSS custom properties throughout

## Navigation

Pages with `"nav": true` appear in the prototype's navigation. The nav order follows the array order above.

## Deployment

Prototypes are deployed to Vercel as static sites. The deployment config above tells the pipeline:

- **rootDirectory** — Vercel serves from `prototype/` so relative paths work
- **No build step** — these are plain HTML/CSS/JS, no framework needed
- **cleanUrls** — `pages/index.html` becomes `/pages/` or just `/`

The deploy pipeline reads this config to set up the Vercel project correctly.

### Custom Domain

Each project gets a subdomain: `{project-slug}.flexos.site`. This is set via the Vercel API after the first deploy. The GitHub Actions workflow at `.github/workflows/deploy-preview.yml` handles deployment — it's triggered automatically on push to main (when prototype files change) or manually via `workflow_dispatch` from the Trigger.dev pipeline.
