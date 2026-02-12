---
id: spec-flow-personalize
title: "Personalize Project"
description: "Pipeline step that customizes the blank template with the user's project name, primary color, and derived palette"
type: spec
subtype: flow
status: draft
sequence: 7
tags: [flow, pipeline, personalize, color, setup]
relatesTo: [design/design-system.md, prototype/shared/tokens.css, prototype/shared/mock-data.js]
createdAt: ""
updatedAt: ""
---

<flex_block type="instructions">
This spec describes the personalization pipeline step — the first thing that runs after cloning the blank template into a new GitHub repo. It takes the user's chosen project name and primary color, then updates every file in the template that references them.

This is NOT an AI task. It's a deterministic find-and-replace + color math task. No LLM needed. Fast, reliable, predictable.
</flex_block>

# Personalize Project

## Overview

Every project starts from the blank template. After cloning, the pipeline runs this personalization step to make it theirs — their name, their color, their identity. This happens before any AI generation.

## Input

```json
{
  "projectName": "GhostReps",
  "projectSlug": "ghostreps",
  "tagline": "AI-powered fitness coaching",
  "primaryColor": "#8b5cf6"
}
```

The `primaryColor` is a hex value chosen by the user during project creation (color picker in the UI).

## Color Palette Generation

From one primary hex, derive the full palette:

### Light Mode
| Token | Derivation |
|-------|-----------|
| `--color-primary` | User's chosen color (as-is) |
| `--color-primary-dark` | Darken 12% (shift lightness down in HSL) |
| `--color-primary-light` | Lighten 20% + reduce saturation 10% |
| `--color-accent` | Rotate hue +160° (complementary-ish), same saturation |

### Dark Mode
| Token | Derivation |
|-------|-----------|
| `--color-primary` | Lighten 15% from base (better contrast on dark bg) |
| `--color-primary-dark` | User's chosen color (as-is, used as the "deeper" shade) |
| `--color-primary-light` | Lighten 30% + reduce saturation 15% |
| `--color-accent` | Same hue rotation as light, but lightened 15% |

Semantic colors (success, warning, error) and surface/text colors stay as template defaults — they work with any primary.

## Files to Update

### 1. `design/design-system.md`
- Replace light mode primary tokens in the colors flex_block
- Replace dark mode primary tokens in the dark colors flex_block
- Update accent color in both blocks

### 2. `prototype/shared/tokens.css`
- Replace `--color-primary`, `--color-primary-dark`, `--color-primary-light`, `--color-accent` in the `:root, [data-theme="light"]` block
- Replace same tokens in the `[data-theme="dark"]` block
- Replace same in the `@media (prefers-color-scheme: dark)` block

### 3. `prototype/shared/mock-data.js`
- Replace `project.name` with `projectName`
- Replace `project.tagline` with `tagline` (if provided)
- Keep `project.description` as placeholder (AI fills this later)

### 4. `prototype/shared/mock-data.json`
- Same updates as mock-data.js

### 5. `FLEXOS.md`
- No changes needed (it's generic)

### 6. Repo Metadata
- Rename GitHub repo to `{projectSlug}-{suffix}` via PATCH API
- Update repo description to `tagline`

## Implementation

This should be a Trigger.dev task: `project/personalize`

```
Input: { repoOwner, repoName, projectName, projectSlug, tagline, primaryColor }
Steps:
  1. Parse primaryColor as HSL
  2. Derive full palette (light + dark)
  3. Fetch current file contents via GitHub API (GET /repos/.../contents/...)
  4. Find-and-replace tokens in each file
  5. Commit all changes in a single commit ("chore: personalize project — {projectName}")
  6. Return { palette, filesUpdated }
```

### Color Math (HSL)

```
hex → { h, s, l }

primary       = { h, s, l }
primaryDark   = { h, s, l - 12 }
primaryLight  = { h, s - 10, l + 20 }
accent        = { (h + 160) % 360, s, l }

darkPrimary      = { h, s, l + 15 }
darkPrimaryDark  = { h, s, l }  // original
darkPrimaryLight = { h, s - 15, l + 30 }
darkAccent       = { (h + 160) % 360, s, l + 15 }
```

Clamp all values: s ∈ [0, 100], l ∈ [0, 100].

## When This Runs

In all 4 project creation pipelines, after the repo is created and template is committed:

```
[create repo] → [commit blank template] → [PERSONALIZE] → [AI generation steps] → [commit AI output]
```

For blank projects, personalization IS the final step (no AI generation follows unless user triggers it).

## UI

The project creation form needs:
- **Project name** (text input, required)
- **Primary color** (color picker, default #8b5cf6)
- **Tagline** (text input, optional)

The color picker should show a live preview of the derived palette — primary, dark, light, accent — so the user knows what they're getting before committing.
