---
id: "002-features"
title: "Feature Inventory"
type: doc
subtype: core
status: draft
sequence: 2
tags: [features, mvp, scope]
---

# Feature Inventory

> The complete list of what this product can do, organized by priority. This is the single source of truth for product scope.

## Priority Framework

Features are classified into three tiers:

- **P0 (Must Have):** The product doesn't work without these. Ship in MVP.
- **P1 (Should Have):** Important for a good experience. Ship in v1.1.
- **P2 (Nice to Have):** Delightful but not essential. Ship when capacity allows.

## P0 Features (MVP)

List every feature that must exist for the product to be viable. For each:

- **Name:** Short, descriptive name
- **Description:** What it does in 2-3 sentences
- **User Stories:** "As a [user], I want to [action] so that [benefit]"
- **Acceptance Criteria:** How do we know it's done?
- **Dependencies:** Other features this requires
- **Pages:** Which pages surface this feature

## P1 Features

Features that make the product good, not just functional. Same format as P0.

## P2 Features

Features that delight. Same format as P0.

## Feature-to-Page Matrix

A grid showing which features appear on which pages. This reveals gaps — pages with no features, features with no pages.

| Feature | Landing | Dashboard | Settings | Profile |
|---------|---------|-----------|----------|---------|
| (list features vs pages) | | | | |

## MVP Scope

Summarize the exact scope of the first release. What's in, what's out, and why. Include estimated complexity (S/M/L) for each P0 feature.

## Feature Dependencies

Which features depend on others? Draw the dependency graph as a list:

- Feature A requires Feature B (because...)
- Feature C requires Feature A and Feature D
