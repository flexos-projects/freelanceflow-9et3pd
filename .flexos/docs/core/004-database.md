---
id: freelanceflow-database
title: 'Database Schema & Rules'
description: 'Detailed information on the Firestore collections, data schemas, relationships, and security rules.'
type: doc
subtype: core
status: draft
sequence: 4
tags:
  - database
  - firestore
  - schema
createdAt: '2023-10-27T10:00:00Z'
updatedAt: '2023-10-27T10:00:00Z'
---

# Database Schema & Rules

This document specifies the data architecture for FreelanceFlow, which will be implemented using Google Cloud Firestore. The structure is designed for efficient querying and strong security.

## Database Choice: Firestore

Firestore is chosen for its:
*   **Scalability:** It scales automatically to meet demand.
*   **Real-time Capabilities:** Enables dynamic updates on the dashboard and other UI elements.
*   **Powerful Security Model:** Allows for granular, user-based access control directly in the database rules.
*   **Serverless Nature:** Fits perfectly with our serverless architecture using Firebase Functions, as outlined in the [Technical Document](./007-technical.md).

## Collections

We will use a relatively flat data structure to facilitate queries and security rules.

1.  **`users`**
    *   **Description:** Stores information for each registered freelancer. The document ID will be the user's `uid` from Firebase Authentication.
    *   **Schema:**
        ```json
        {
          "email": "string",
          "displayName": "string",
          "photoURL": "string",
          "createdAt": "timestamp",
          "stripeAccountId": "string | null"
        }
        ```

2.  **`clients`**
    *   **Description:** A top-level collection containing all clients for all users, secured by rules.
    *   **Schema:**
        ```json
        {
          "userId": "string", // Foreign key to users collection
          "name": "string",
          "email": "string",
          "address": "string",
          "createdAt": "timestamp"
        }
        ```

3.  **`projects`**
    *   **Description:** A top-level collection for all projects.
    *   **Schema:**
        ```json
        {
          "userId": "string",
          "clientId": "string", // Foreign key to clients collection
          "clientName": "string", // Denormalized for display
          "name": "string",
          "status": "'active' | 'completed' | 'archived'",
          "rateType": "'hourly' | 'fixed'",
          "hourlyRate": "number | null",
          "fixedPrice": "number | null",
          "createdAt": "timestamp"
        }
        ```

4.  **`timeEntries`**
    *   **Description:** A top-level collection for all time entries, allowing for easy querying across all projects.
    *   **Schema:**
        ```json
        {
          "userId": "string",
          "projectId": "string",
          "clientId": "string",
          "date": "timestamp",
          "duration": "number", // in minutes
          "description": "string",
          "isBilled": "boolean",
          "invoiceId": "string | null", // Set when entry is added to an invoice
          "createdAt": "timestamp"
        }
        ```

5.  **`invoices`**
    *   **Description:** A top-level collection for all invoices.
    *   **Schema:**
        ```json
        {
          "userId": "string",
          "clientId": "string",
          "projectId": "string",
          "clientName": "string", // Denormalized
          "projectName": "string", // Denormalized
          "invoiceNumber": "string",
          "status": "'draft' | 'sent' | 'paid' | 'overdue'",
          "issueDate": "timestamp",
          "dueDate": "timestamp",
          "lineItems": "array<object>", // [{ description, quantity, rate, amount }]
          "subtotal": "number",
          "total": "number",
          "createdAt": "timestamp"
        }
        ```

## Relationships & Denormalization

*   **Relationships:** We use `userId`, `clientId`, and `projectId` as foreign keys to link documents.
*   **Denormalization:** To avoid complex queries and improve read performance, we denormalize some data. For example, `invoices` and `projects` store `clientName`. When a client's name is updated, a cloud function will trigger to update it across all related documents.

## Indexes

To support our application's queries, we will need to configure the following composite indexes in Firestore:

*   `projects(userId, status)`: For filtering projects by their status on the main projects page.
*   `invoices(userId, status)`: For filtering invoices on the invoices page.
*   `timeEntries(userId, projectId, isBilled)`: To efficiently fetch unbilled time entries when creating an invoice for a specific project.

## Security Rules

Our security model is based on user ownership. Users can only access documents that contain their `userId`.

```firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Users can read and update their own user document
    match /users/{userId} {
      allow read, update: if request.auth.uid == userId;
    }

    // Users can CRUD documents they own
    match /{collection}/{docId} where collection in ['clients', 'projects', 'timeEntries', 'invoices'] {
      allow read, delete, update: if resource.data.userId == request.auth.uid;
      allow create: if request.resource.data.userId == request.auth.uid;
    }
  }
}
```
This ensures that data is strictly isolated between users at the database level, providing a strong security foundation.