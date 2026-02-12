---
id: "004-database"
title: "Database & Data Model"
type: doc
subtype: core
status: draft
sequence: 4
tags: [database, schema, collections, data]
---

# Database & Data Model

> Every piece of data the product stores, how it's structured, and how it relates. This is the foundation for the backend.

## Database Choice

Which database and why. Default: Firestore (NoSQL, real-time, serverless). Document any reasons to deviate.

## Collection Inventory

List every collection/table in the system with a one-line description:

| Collection | Description | Primary Key |
|-----------|-------------|-------------|
| `users` | User accounts and profiles | auto-generated |
| (add collections...) | | |

## Schema Definitions

For each collection, define the full schema:

### `users`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | yes | Auto-generated document ID |
| `email` | string | yes | User's email address |
| `displayName` | string | yes | Display name |
| `createdAt` | timestamp | yes | Account creation time |
| `updatedAt` | timestamp | yes | Last modification time |

(Continue for each collection...)

## Relationships

How do collections reference each other? Document every foreign key relationship:

- `posts.userId` → references `users.id` (one-to-many: one user has many posts)
- (continue for all relationships...)

## Access Patterns

What queries does the application need? This determines indexes and security rules:

| Query | Collection | Filters | Sort | Used By |
|-------|-----------|---------|------|---------|
| Get user's posts | `posts` | `userId == x` | `createdAt desc` | Dashboard |
| (add queries...) | | | | |

## Security Rules

Who can read/write what? Define per-collection:

- **users:** Owner can read/write own doc. Others can read displayName only.
- (continue for each collection...)

## Indexes

Based on access patterns, which composite indexes are needed?

## Data Migration

If this project was imported, document any data migration needs. What data exists in the old system? How does it map to the new schema?
