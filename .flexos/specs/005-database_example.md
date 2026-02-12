---
id: "005-database_example"
title: "Example Collection Spec"
type: spec
subtype: database
status: draft
sequence: 5
tags: [database, collection]
relatesTo: [docs/core/004-database.md]
createdAt: ""
updatedAt: ""
---

# Collection: {collection_name}

> **Spec type: database** — One per collection/table. Full schema, queries, and security rules.

## File Schema

```
Naming:    005-database_{collection-name}.md
Subtype:   database
Relates:   docs/core/004-database.md
Purpose:   Complete collection specification — enough to create the schema, indexes, and security rules
```

## Purpose

What does this collection store? Why does it exist? Which features depend on it?

## Schema

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `id` | string | yes | auto | Document ID |
| `createdAt` | timestamp | yes | server | Creation time |
| `updatedAt` | timestamp | yes | server | Last modification |
| `createdBy` | string | yes | — | User ID of creator |
| (add fields...) | | | | |

## Field Details

### `{field_name}`

- **Type:** string | number | boolean | timestamp | array | map | reference
- **Validation:** (min/max length, regex, enum values, range)
- **Indexed:** Yes / No
- **Searchable:** Yes / No
- **Example value:** (realistic example)

(Repeat for complex fields that need more explanation than the table provides)

## Relationships

| Related Collection | Relationship | Field | Cascade |
|-------------------|--------------|-------|---------|
| `users` | belongs to | `createdBy` | No (orphan on user delete) |
| (other) | has many / belongs to / many-to-many | (field) | (behavior) |

## Queries

| Name | Purpose | Filters | Sort | Limit | Index Needed |
|------|---------|---------|------|-------|--------------|
| List user's items | Dashboard | `createdBy == userId` | `createdAt desc` | 50 | Yes |
| (add queries...) | | | | | |

## Security Rules

```
// Pseudocode — translate to Firestore rules
allow read: if authenticated AND (doc.createdBy == request.auth.uid OR doc.public == true)
allow create: if authenticated AND request.resource.data.createdBy == request.auth.uid
allow update: if authenticated AND doc.createdBy == request.auth.uid
allow delete: if authenticated AND doc.createdBy == request.auth.uid
```

## Sample Documents

```json
{
  "id": "abc123",
  "createdAt": "2026-01-15T10:30:00Z",
  "updatedAt": "2026-01-15T10:30:00Z",
  "createdBy": "user_456"
}
```

## Migration Notes

If migrating from another system, document the field mapping:

| Old Field | New Field | Transform |
|-----------|-----------|-----------|
| (old name) | (new name) | (any conversion needed) |
