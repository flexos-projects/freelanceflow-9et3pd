---
id: imports-readme
title: "Imports"
description: "Landing zone for raw imported and scraped content before it's processed into specs and docs"
type: meta
subtype: readme
status: active
tags: [imports, scrape, excavation]
relatesTo: [docs/core/000-import.md]
createdAt: ""
updatedAt: ""
---

# Imports

This folder is the landing zone for raw content that comes from outside the project — GitHub repos, websites, documents, or any other external source.

## How It Works

When you import a project (from GitHub) or scrape a website, the pipeline dumps raw extracted content here first. Think of it as an inbox. Nothing in this folder is "done" — it's all waiting to be triaged, cleaned up, and moved into the right place in `.flexos/`.

## What Lands Here

- **GitHub excavation** — README content, package.json analysis, route structures, component inventories, tech stack detection
- **Website scrapes** — Page content, navigation structure, asset URLs, copy, metadata
- **Document imports** — Raw text from Google Docs, Notion, PDFs, or other sources

## What Happens Next

The triage step of the import/scrape pipeline reads files from here and distributes them:

- Extracted features → `specs/` as feature specs
- Page structures → `specs/` as page specs
- Database schemas → `specs/` as database specs
- Vision/overview content → `docs/core/`
- Design tokens/colors → `design/`
- Brand assets → `assets/`
- Team/company info → `content/`

Once content has been triaged, the original import files stay here as a record of what was imported. They're never deleted — they serve as provenance.

## File Naming

Import files follow the pattern: `{source}-{timestamp}.md`

Examples:
- `github-20260208.md` — GitHub repo excavation results
- `website-20260208.md` — Website scrape results
- `document-20260208.md` — Document import results
