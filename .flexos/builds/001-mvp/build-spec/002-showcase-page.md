---
id: build-spec-002-showcase-page
title: "Build Spec — Showcase Page"
description: "Implementation details for the technical showcase landing page"
type: build
subtype: spec
status: draft
sequence: 2
tags: [build-spec, showcase, landing, prototype]
relatesTo: [specs/006-pages_showcase.md, design/design-system.md, prototype/sitemap.md]
createdAt: ""
updatedAt: ""
---

<flex_block type="instructions">
This build spec details how to implement the showcase page. The page spec (specs/006-pages_showcase.md) defines WHAT it should look like. This file defines HOW to build it — which files to read, what data to pull, and implementation specifics.
</flex_block>

# Build Spec — Showcase Page

## Context

The showcase page is the first thing generated in any new FlexOS project. It turns the abstract design system into something visual and real. Before building any app pages, we build this — it validates that tokens work, mock data is correct, and the prototype infrastructure is sound.

## Input Files

The build agent reads these files to generate the showcase:

| File | What to extract |
|------|----------------|
| `design/design-system.md` | All token flex_blocks (colors, typography, spacing) + component guidelines |
| `prototype/shared/mock-data.js` | Project info, features, team, stats, navigation |
| `prototype/shared/mock-data.json` | Same data in JSON for programmatic access |
| `prototype/shared/tokens.css` | Verify tokens match design-system.md |
| `prototype/sitemap.md` | Page list for the sitemap section |
| `builds/001-mvp/config.md` | Tech stack for the stack section |
| `docs/core/001-vision.md` | Vision content if populated |
| `content/team.md` | Team data if populated |

## Output Files

| File | What to generate |
|------|-----------------|
| `prototype/pages/index.html` | The complete showcase page |
| `prototype/shared/mock-data.js` | Update if new sections need data |
| `prototype/shared/mock-data.json` | Keep in sync with .js |

## Implementation Notes

### Section: Design System Showcase

This is the most complex section. For each token category:

**Colors** — Loop through every `--color-*` token. Render a swatch (colored div) with the hex value below it. Group into: Primary palette, Semantic (success/warning/error), Surfaces, Text colors.

**Typography** — Render each `--font-size-*` as actual text at that size. Show the rem value and computed px. Demonstrate each `--font-weight-*` side by side.

**Spacing** — Render `--space-*` as horizontal bars of that width. Label with the rem value. Show `--radius-*` as boxes with that border radius. Show `--shadow-*` as elevated cards.

### Section: Responsive Grid

The features grid and token showcase should use CSS Grid with:
```
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
```
This naturally responds without media queries for most sections.

### Section: Navigation

Sticky top nav with section links. Highlight current section on scroll using IntersectionObserver. Keep it simple — no JS framework needed.

## Quality Gates

- All tokens visually verified (compare rendered page against design-system.md)
- Page weight under 50KB (HTML + inline styles, no external deps)
- First paint under 100ms (it's static HTML)
- No horizontal scroll at 320px viewport
- Touch targets 44px+ on all interactive elements
