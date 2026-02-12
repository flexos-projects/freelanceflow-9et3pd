---
id: "003-pages_example"
title: "Example Page Spec"
type: spec
subtype: page
status: draft
sequence: 3
tags: [page]
relatesTo: [docs/core/003-pages.md]
createdAt: ""
updatedAt: ""
---

# Page: {Page Name}

> **Spec type: page** — One per page/route. Defines layout, content, interactions, and data.

## File Schema

```
Naming:    003-pages_{page-slug}.md
Subtype:   page
Relates:   docs/core/003-pages.md
Purpose:   Complete page specification — enough to build the page and its prototype
```

## Route

- **Path:** `/example`
- **Auth required:** Yes / No
- **Dynamic segments:** (e.g., `/projects/[id]`)
- **Query params:** (e.g., `?tab=settings`)

## Purpose

What is this page for? What does the user accomplish here? 2-3 sentences.

## Layout

### Desktop (>1024px)

Describe the layout structure — sidebar + main, full-width, multi-column, etc. Include approximate dimensions.

### Mobile (<768px)

How does the layout adapt? What collapses, stacks, or hides?

## Sections

### Header Section

- Content: (what's displayed)
- Actions: (buttons, links available)
- Data: (what data feeds this section)

### Main Content Section

- Content: (primary content area)
- Actions: (what can users do)
- Data: (collections, APIs)

### Sidebar / Secondary Section

- Content: (supporting information)
- Actions: (filters, navigation)

## Page States

| State | When | What's Shown |
|-------|------|-------------|
| Loading | Data fetching | Skeleton placeholders |
| Empty | No data exists | Empty state with CTA |
| Default | Normal use | Full content |
| Error | API failure | Error message + retry |

## Data Requirements

| Data | Source | Refresh |
|------|--------|---------|
| (what data) | (collection/API) | (real-time / on-load / polling) |

## Interactions

- **Click:** (what's clickable and what happens)
- **Search/Filter:** (any search or filter functionality)
- **Sort:** (any sortable columns/lists)
- **Pagination:** (how large lists are handled)
- **Forms:** (any inline editing or forms)

## Features on This Page

List every feature that surfaces on this page (cross-reference with feature specs):

- Feature: {name} → see `002-features_{slug}.md`

## SEO / Meta

- **Title:** (page title for browser tab)
- **Description:** (meta description)
- **OG Image:** (social sharing image)
