---
id: content-manifest
title: "Content Manifest"
description: "Index of all project content — team profiles, copy, brand assets, and published material"
type: content
subtype: manifest
status: draft
sequence: 1
tags: [content, manifest]
relatesTo: [docs/core/006-design.md, docs/core/001-vision.md]
createdAt: ""
updatedAt: ""
---

<flex_block type="instructions">
This file is the content registry for the project. It tells the build agent and AI what content exists, where it lives, and how to use it. When generating pages or prototypes, check this manifest first to find real copy, team info, and brand material instead of generating placeholder text.

Content can live in three places:
1. Here in .flexos/content/ as markdown files with flex_blocks
2. In Firestore collections (referenced by collection name)
3. In external sources (CMS, Google Docs, etc — referenced by URL)

When editing this file, add new entries to the "content" array in the config block below. Every piece of reusable content should be registered here.
</flex_block>

# Content Manifest

This is the index of all content files in the project. Content is the real-world information that makes the product feel alive — who's behind it, what the company is about, the actual words users read. Without content, specs and prototypes are just empty shells.

Content is different from specs and docs:

- **Specs** define _what to build_ (features, pages, flows, schemas)
- **Docs** define _how it all fits together_ (vision, architecture, design system)
- **Content** is _the actual stuff_ — the team bios that go on the about page, the company background that shapes the brand voice, the project details that appear in the footer

When AI generates pages or prototypes, it should check this manifest first and use real content instead of inventing placeholder text.

## Content Files

<flex_block type="config">
{
  "content": [
    {
      "id": "team",
      "subtype": "collection",
      "title": "Team",
      "file": "content/team.md",
      "description": "Team member profiles — names, roles, bios, avatars, social links",
      "usedBy": ["landing page about section", "footer", "settings/team page"]
    },
    {
      "id": "briefing",
      "subtype": "info",
      "title": "Client Briefing",
      "file": "content/briefing.md",
      "description": "Background context about the project, company, and founder's vision",
      "usedBy": ["AI generation context", "docs", "copy"]
    }
  ]
}
</flex_block>

## Content Subtypes

| Subtype | What It Is | Example |
|---------|-----------|---------|
| **collection** | Structured JSON records in a flex_block. Iterable — the build agent loops over them to render lists, grids, cards. | Team members, testimonials, product listings, FAQ entries |
| **info** | Free-form markdown prose. Human-written context that the AI reads for background when generating docs, copy, or prototypes. | Client briefing, company history, brand notes, market research |

## Adding Content

Create a new `.md` file in `content/`, give it frontmatter with `type: content` and the appropriate `subtype`, then add an entry to the config block above so the build agent knows it exists.
