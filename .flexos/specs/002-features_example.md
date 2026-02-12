---
id: "002-features_example"
title: "Example Feature Spec"
type: spec
subtype: feature
status: draft
sequence: 2
tags: [feature]
relatesTo: [docs/core/002-features.md]
createdAt: ""
updatedAt: ""
---

# Feature: {Feature Name}

> **Spec type: feature** — One per feature. Details what it does, how it works, and how to test it.

## File Schema

```
Naming:    002-features_{feature-slug}.md
Subtype:   feature
Relates:   docs/core/002-features.md
Purpose:   Complete specification for a single feature — enough for a developer to build it
```

## Overview

What does this feature do? 2-3 sentences. Include the user benefit, not just the technical description.

## User Stories

- As a **{user type}**, I want to **{action}** so that **{benefit}**
- As a **{user type}**, I want to **{action}** so that **{benefit}**

## Requirements

### Functional

1. The system must (specific behavior)
2. When the user (action), the system should (response)
3. (continue...)

### Non-Functional

- **Performance:** (response time, throughput)
- **Accessibility:** (keyboard nav, screen reader, contrast)
- **Mobile:** (touch targets, responsive behavior)

## UI/UX

- **Page:** Which page(s) does this feature appear on?
- **Component:** What UI component implements it?
- **States:** Default, loading, empty, error, success
- **Interactions:** Click, hover, drag, swipe behaviors

## Data Model

Which collections/fields does this feature read/write?

| Collection | Fields Used | Access |
|-----------|-------------|--------|
| (name) | (fields) | read/write |

## API Endpoints

| Method | Path | Purpose |
|--------|------|---------|
| (method) | (path) | (what it does) |

## Edge Cases

- What happens when (unusual scenario)?
- What if the user (unexpected action)?
- How does this behave with (empty data / lots of data / bad data)?

## Acceptance Criteria

- [ ] (testable criterion 1)
- [ ] (testable criterion 2)
- [ ] (testable criterion 3)

## Dependencies

- Requires: (other features, APIs, or infrastructure this depends on)
- Blocks: (other features that can't be built until this exists)
