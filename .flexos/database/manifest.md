---
id: database-manifest
title: "Database Manifest"
description: "Technical schema registry — entity definitions, relationships, and mock data configuration"
type: database
subtype: manifest
status: draft
sequence: 1
tags: [database, manifest, schema, relationships]
relatesTo: [docs/core/004-database.md, prototype/sitemap.md, content/manifest.md]
createdAt: ""
updatedAt: ""
---

<flex_block type="instructions">
This is the technical database manifest — the single source of truth for how data is structured in this project. It contains entity schemas, their relationships, and mock data configuration.

Individual entity details live in specs (specs/005-database_*.md). This manifest aggregates them into a unified view and adds cross-entity relationships and mock data generation config.

The core doc (docs/core/004-database.md) provides the high-level narrative overview. This manifest provides the structured, actionable reference.
</flex_block>

# Database Manifest

Central registry for all data entities, their schemas, relationships, and mock data generation. This file bridges the gap between individual database specs and the generated mock data used by prototypes.

## Entities

<flex_block type="schema">
{
  "collection": "example",
  "description": "Template entity — replace with your actual collections",
  "fields": [
    { "name": "id", "type": "string", "required": true, "description": "Document ID" },
    { "name": "createdAt", "type": "timestamp", "required": true, "description": "Creation time" },
    { "name": "updatedAt", "type": "timestamp", "required": true, "description": "Last modification" },
    { "name": "createdBy", "type": "string", "required": true, "description": "User ID of creator" }
  ],
  "indexes": [],
  "securityRules": "owner-only"
}
</flex_block>

## Relationships

Entity relationships are defined here so the AI can generate realistic mock data with valid foreign keys and referential integrity.

## Mock Data Configuration

<flex_block type="config">
{
  "mockData": {
    "output": "prototype/shared/mock-data.json",
    "outputJs": "prototype/shared/mock-data.js",
    "seedFromContent": true,
    "contentSources": ["content/team.md", "content/briefing.md"],
    "recordCounts": {
      "example": 5
    }
  }
}
</flex_block>

## How This Works

### Schema → Mock Data → Prototypes

1. **Entity specs** (`specs/005-database_*.md`) define individual collections
2. **This manifest** aggregates schemas + adds relationships + mock data config
3. **Generate Mock Data** task reads this manifest + content sources → produces `mock-data.json`
4. **Prototypes** consume mock data via `mock-data.js` for realistic rendering

### Adding Entities

1. Create a spec: `specs/005-database_{collection-name}.md`
2. Add a `schema` flex_block to this manifest with the entity's fields
3. Add relationship entries if it relates to other entities
4. Update `recordCounts` in the mock data config
5. Run "Generate Mock Data" to refresh prototype data
