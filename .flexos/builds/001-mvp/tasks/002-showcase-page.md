---
id: build-task-002-showcase-page
title: "Build Task — Generate Showcase Page"
description: "Generate the technical showcase landing page as the first prototype deliverable"
type: build
subtype: task
status: pending
sequence: 2
tags: [task, showcase, prototype, first-build]
relatesTo: [builds/001-mvp/build-spec/002-showcase-page.md, specs/006-pages_showcase.md]
createdAt: ""
updatedAt: ""
---

# Build Task — Generate Showcase Page

## Objective

Generate `prototype/pages/index.html` — a technical developer landing page that showcases the project's design system, vision, features, sitemap, tech stack, and team. This is the FIRST build output for every new FlexOS project.

## Prerequisites

- [ ] `prototype/shared/tokens.css` exists with all design tokens
- [ ] `prototype/shared/mock-data.js` exists with project data
- [ ] `design/design-system.md` has token values defined
- [ ] `prototype/sitemap.md` has at least the index page entry

## Steps

1. **Read inputs** — Load design-system.md tokens, mock-data.js/json, sitemap.md, config.md
2. **Generate HTML** — Build the showcase page per the page spec (specs/006-pages_showcase.md)
3. **Populate from data** — Use mock-data.js for all dynamic content, never hardcode text
4. **Token showcase section** — Render every color, font, spacing, radius, and shadow token visually
5. **Validate responsive** — Ensure layout works at 320px, 640px, 1024px, 1440px
6. **Write output** — Save to `prototype/pages/index.html`
7. **Update sitemap** — Ensure sitemap.md index entry is correct

## Acceptance Criteria

- [ ] Page renders with no errors in browser console
- [ ] All 14 color tokens shown as swatches with hex values
- [ ] Type scale demonstrated at every size
- [ ] Spacing tokens shown as visual bars
- [ ] Features populated from mock data (not hardcoded)
- [ ] Sticky nav with section anchors
- [ ] Mobile-first responsive layout
- [ ] No external dependencies (fonts, CDNs, frameworks)
- [ ] Total page size under 50KB

## Priority

**P0** — This is the first deliverable. Nothing else builds until this works.
