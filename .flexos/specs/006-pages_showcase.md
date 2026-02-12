---
id: spec-pages-showcase
title: "Showcase Page"
description: "Technical developer landing page that demonstrates the project's design system, vision, and structure"
type: spec
subtype: page
status: draft
sequence: 6
tags: [pages, showcase, landing, design-system, developer]
relatesTo: [design/design-system.md, docs/core/001-vision.md, docs/core/002-features.md, prototype/sitemap.md]
createdAt: ""
updatedAt: ""
---

<flex_block type="instructions">
This is the most important page in the prototype. It's not a marketing landing page — it's a technical showcase that proves the design system works and gives developers (and AI agents) a visual reference for every token, component pattern, and content block in the project.

Think of it as Storybook meets a portfolio page. When someone opens this, they should immediately understand: what this project is, what it looks like, how the design system works, and what's been built so far.

This page is generated as the FIRST build task — before any real app pages. It uses real data from mock-data.js/json and tokens from tokens.css.
</flex_block>

# Showcase Page

## Purpose

The showcase page is a single-page technical landing that serves three audiences:

1. **The founder** — "This is what my project looks like. The vision is real."
2. **The AI build agent** — "These are the design tokens in action. Use them exactly like this."
3. **Developers** — "Here's the design system, component patterns, and project structure at a glance."

## Page Structure

The page is divided into distinct sections, each demonstrating a different aspect of the project:

### 1. Hero
- Project name (large, bold, from mock data)
- Tagline (subtitle, from mock data)
- Version badge
- Two CTAs: "View Specs" (scrolls to structure) and "View Tokens" (scrolls to design system)

### 2. Vision
- 2-3 sentence project description from mock data
- Key stats row (from mock data stats)
- Should feel confident and clear, not salesy

### 3. Features
- Grid of feature cards (from mock data features)
- Each card: icon, title, description
- Responsive: 1 col mobile → 2 col tablet → 3 col desktop
- Cards use `--color-surface`, `--color-border`, `--radius-lg`, `--shadow-md` on hover

### 4. Design System Showcase
This is the heart of the page. It demonstrates every design token visually:

**Colors**
- Row of color swatches showing every `--color-*` token
- Each swatch shows the hex value and token name
- Primary palette, semantic colors, surface/text colors grouped

**Typography**
- Type scale from `--font-size-xs` through `--font-size-4xl`
- Each size shown as actual rendered text with the token name
- Font weights shown side by side

**Spacing**
- Visual spacing blocks from `--space-1` through `--space-24`
- Border radius examples applied to boxes
- Shadow examples

### 5. Sitemap / Structure
- Visual tree or card grid showing every page in the sitemap
- Each card shows: page title, description, status (built/planned)
- Links to actual prototype pages when they exist

### 6. Tech Stack
- Simple grid showing the project's technology choices
- From `builds/001-mvp/config.md` stack config
- Framework, database, hosting, auth, etc.

### 7. Team
- Team member cards from mock data
- Avatar, name, role, bio
- Minimal and clean

### 8. Footer
- "Built with FlexOS" credit
- Project version
- Links to prototype pages

## Design Guidelines

- **No external dependencies** — vanilla HTML/CSS/JS only, everything via tokens.css
- **Mobile-first** — looks great on phone, better on desktop
- **Dark/light aware** — should work with both (use semantic token names)
- **Smooth** — subtle transitions on hover states, scroll-linked nav highlighting
- **Dense but not cluttered** — this page has a lot of content, use whitespace from spacing tokens
- **Monospace accents** — token names and code use `--font-mono`
- **Interactive** — color swatches could copy hex on click, sections have anchor links

## Acceptance Criteria

- [ ] All design tokens from design-system.md are visually demonstrated
- [ ] All mock data is populated (not hardcoded text)
- [ ] Responsive at 320px, 640px, 1024px, 1440px
- [ ] Every color, font size, spacing, radius, and shadow token appears
- [ ] Sections have anchor IDs for deep linking
- [ ] Page loads with zero external requests (fully self-contained)
- [ ] Minimum touch targets on all interactive elements
