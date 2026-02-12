---
id: "001-vision_project-overview"
title: "Project Overview"
type: spec
subtype: vision
status: draft
sequence: 1
tags: [vision, overview]
relatesTo: [docs/core/001-vision.md]
createdAt: ""
updatedAt: ""
---

# Project Overview

> **Spec type: vision** — High-level project definition. One per project. Links everything together.

## File Schema

```
Naming:    001-vision_{slug}.md
Subtype:   vision
Relates:   docs/core/001-vision.md
Purpose:   Executable summary of the project — enough for someone to understand what to build
```

## Summary

A 2-3 paragraph description of the product. What it is, who it's for, and why it exists. This should read like the back of a book — compelling and clear.

## Core Value Proposition

One sentence. The reason someone would pay for or use this product.

## Target Audience

| Segment | Description | Needs | Current Alternative |
|---------|-------------|-------|-------------------|
| Primary | (who) | (what they need) | (what they use now) |
| Secondary | (who) | (what they need) | (what they use now) |

## Key Features (MVP)

| # | Feature | Priority | Complexity | Status |
|---|---------|----------|------------|--------|
| 1 | (name) | P0 | M | Not started |
| 2 | (name) | P0 | L | Not started |

## Success Criteria

- [ ] (measurable outcome 1)
- [ ] (measurable outcome 2)
- [ ] (measurable outcome 3)

## Open Questions

- (anything unresolved that affects the project direction)

---

## File Tree Context

```
specs/
├── 001-vision_project-overview.md    ← YOU ARE HERE (1 per project)
├── 002-features_{feature-slug}.md    ← 1 per feature
├── 003-pages_{page-slug}.md          ← 1 per page
├── 004-flows_{flow-slug}.md          ← 1 per flow
├── 005-database_{collection}.md      ← 1 per collection
├── 006-design_{topic}.md             ← 1 per design topic
└── 007-technical_{topic}.md          ← 1 per technical topic
```

Specs are numbered by category (001=vision, 002=features, etc.) with a slug suffix. Multiple specs per category are fine (002-features_auth.md, 002-features_dashboard.md).
