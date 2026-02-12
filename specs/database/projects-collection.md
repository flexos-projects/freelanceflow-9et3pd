---
id: db-001-projects-collection
title: Projects Data Collection
description: Defines the schema and structure for storing project-related information within FreelanceFlow.
type: spec
subtype: database
status: draft
sequence: 1
tags: [database, schema, project]
relatesTo: [feat-001-project-management]
createdAt: 2023-10-27T10:15:00Z
updatedAt: 2023-10-27T10:15:00Z
---

# Projects Data Collection Specification

This specification defines the schema and structure for the `Projects` data collection, which is central to the FreelanceFlow application. This collection will store all pertinent information about each project a freelancer undertakes, serving as the foundational data for project tracking, reporting, and invoicing. The design prioritizes data integrity, efficient querying, and flexibility to accommodate various project types and details. This collection directly supports the Project Management feature.

## Collection Purpose

To persistently store comprehensive details for every project managed by a freelancer, including its status, associated client, financial terms, and timeline.

## Schema Definition (Conceptual)

| Field Name   | Type       | Description                                        | Required | Constraints/Notes                                |
| :----------- | :--------- | :------------------------------------------------- | :------- | :----------------------------------------------- |
| `_id`        | `ObjectId` | Unique identifier for the project.                 | Yes      | Auto-generated.                                  |
| `userId`     | `ObjectId` | ID of the user (freelancer) who owns this project. | Yes      | Links to `Users` collection.                     |
| `clientId`   | `ObjectId` | ID of the client associated with this project.     | Yes      | Links to `Clients` collection.                   |
| `name`       | `String`   | The name of the project.                           | Yes      | Max 255 characters.                              |
| `description`| `String`   | Detailed description of the project.               | No       | Markdown supported.                              |
| `status`     | `String`   | Current status of the project.                     | Yes      | Enum: `Draft`, `Active`, `On Hold`, `Completed`, `Archived`, `Cancelled`. |
| `startDate`  | `Date`     | The date the project officially started.           | No       |                                                  |
| `dueDate`    | `Date`     | The target completion date for the project.        | No       | Must be after `startDate` if both present.       |
| `budget`     | `Number`   | Total agreed budget for the project.               | No       | Only applicable for fixed-price projects.        |
| `hourlyRate` | `Number`   | Agreed hourly rate for the project.                | No       | Only applicable for hourly projects.             |
| `currency`   | `String`   | Currency code for budget/rate (e.g., USD, EUR).    | No       | ISO 4217 format.                                 |
| `tasks`      | `Array`    | Array of task IDs associated with this project.    | No       | Links to `Tasks` collection.                     |
| `invoices`   | `Array`    | Array of invoice IDs generated for this project.   | No       | Links to `Invoices` collection.                  |
| `createdAt`  | `Date`     | Timestamp when the project record was created.     | Yes      | Auto-generated.                                  |
| `updatedAt`  | `Date`     | Timestamp when the project record was last updated.| Yes      | Auto-generated on update.                        |

## Acceptance Criteria

*   AC-DB-P-01: The `Projects` collection must successfully store all defined fields with their respective data types.
*   AC-DB-P-02: All `Required` fields must enforce non-null constraints upon insertion.
*   AC-DB-P-03: `userId` and `clientId` fields must correctly reference valid entries in their respective collections (via foreign key or application-level validation).
*   AC-DB-P-04: The `status` field must only accept values from the predefined enum list.
*   AC-DB-P-05: `createdAt` and `updatedAt` timestamps are automatically managed and accurately reflect creation and last modification times.
*   AC-DB-P-06: Querying projects by `userId`, `clientId`, and `status` must be performant.

## Edge Cases & Considerations

*   **Missing Optional Fields:** The database should gracefully handle projects where optional fields like `description`, `budget`, or `hourlyRate` are not provided.
*   **Invalid References:** What happens if a `clientId` references a non-existent client? Application logic should prevent this, but the database should ideally support cascading deletes or nullification if a client is removed.
*   **Status Transitions:** While the database stores the status, the application layer will be responsible for valid status transitions (e.g., cannot go from `Completed` back to `Active` without explicit re-opening).
*   **Large Number of Tasks/Invoices:** Consider potential performance implications if a project has an exceptionally large number of embedded tasks or invoice IDs. A separate collection for tasks/invoices with a `projectId` reference might be more scalable.
*   **Currency Consistency:** Ensure that `budget` and `hourlyRate` are always paired with a `currency` code for clarity and to prevent mix-ups.
*   **Schema Evolution:** Plan for future schema changes (e.g., adding new fields) with minimal downtime or data migration complexity.