---
id: freelanceflow-flows
title: 'User & System Flows'
description: 'Diagrams and descriptions of key user flows, system processes, and error handling strategies.'
type: doc
subtype: core
status: draft
sequence: 5
tags:
  - flows
  - ux
  - system-design
createdAt: '2023-10-27T10:00:00Z'
updatedAt: '2023-10-27T10:00:00Z'
---

# User & System Flows

This document details the critical process flows within the FreelanceFlow application. Understanding these flows is essential for both development and user experience design.

## User Flows

User flows describe the path a user takes to complete a specific task.

### 1. Onboarding and First Project Setup

This flow is designed to guide a new user to the 'aha!' moment as quickly as possible by helping them set up their first billable project.

*   **Trigger:** User successfully completes the signup form.
*   **Path:**
    1.  **Redirect to Dashboard:** The user lands on `/app/dashboard`.
    2.  **Welcome Modal:** A modal appears with a welcome message and a single, clear call-to-action: "Let's add your first client".
    3.  **Create Client:** Clicking the CTA opens a 'New Client' form (modal or separate page). The user fills in the client's name and email.
    4.  **Create Project:** Upon saving the client, a success message appears, immediately followed by a prompt: "Great! Now create a project for [Client Name]".
    5.  **Project Form:** The 'New Project' form is displayed, with the client pre-selected. The user enters the project name, rate type, and rate.
    6.  **Project Page:** After saving the project, the user is redirected to the Project Detail page (`/app/projects/:projectId`).
    7.  **Log First Time Entry:** A tooltip or guide points to the 'Add Time Entry' button, encouraging them to log their first block of work.
*   **Goal:** The user has successfully created the Client -> Project -> Time Entry hierarchy, which is the foundation of the app. They are now set up to generate their first invoice.

### 2. Invoice Generation and Sending

This flow covers the core value proposition: getting paid.

*   **Trigger:** User clicks "Generate Invoice" on a Project Detail page.
*   **Path:**
    1.  **Fetch Unbilled Time:** The system queries the `timeEntries` collection for documents matching the `projectId` where `isBilled` is `false` (see [Database schema](./004-database.md)).
    2.  **Select Entries:** A modal appears, listing all unbilled time entries with checkboxes. The user selects which entries to include on this invoice.
    3.  **Draft Creation:** Upon confirmation, a new document is created in the `invoices` collection with `status: 'draft'`. All selected `timeEntries` are updated with the new `invoiceId` and `isBilled: true`.
    4.  **Redirect to Invoice Editor:** The user is taken to the Invoice Detail page (`/app/invoices/:invoiceId`).
    5.  **Review and Send:** The user can review line items, add taxes or discounts, and then click "Send Invoice".
    6.  **Confirmation & Action:** The system updates the invoice `status` to `'sent'`. A background job (Firebase Function) is triggered to generate a PDF and email it to the client.

## System Flows

System flows are automated processes that occur without direct user interaction.

### 1. Daily Overdue Invoice Check

*   **Trigger:** A scheduled cloud function (cron job) runs once every 24 hours (e.g., at midnight UTC).
*   **Process:**
    1.  The function queries the `invoices` collection for all documents where `status == 'sent'` AND `dueDate` is before the current time.
    2.  It iterates through the results.
    3.  For each overdue invoice, it updates the document's `status` field to `'overdue'`. 
    4.  (P1 Enhancement) The function can also be configured to send a polite reminder email to the client.
*   **Result:** The freelancer sees an accurate, up-to-date status on their Invoices dashboard without manual intervention.

### 2. Stripe Payment Webhook Processing

*   **Trigger:** A customer successfully pays an invoice via the Stripe payment link.
*   **Process:**
    1.  Stripe sends a webhook event (e.g., `charge.succeeded` or `invoice.payment_succeeded`) to a dedicated HTTPS endpoint in our Firebase Functions.
    2.  The function verifies the webhook signature to ensure it's a legitimate request from Stripe.
    3.  It extracts the `invoiceId` from the webhook payload's metadata.
    4.  It updates the corresponding document in the `invoices` collection, setting the `status` to `'paid'`. 
*   **Result:** The payment is automatically recorded in FreelanceFlow, providing real-time financial updates.

## Error Handling

*   **Client-Side:** Forms will provide real-time validation (e.g., "Email address is not valid"). A global error handler will catch failed API requests and display a non-intrusive toast notification (e.g., "Failed to save project. Please try again.").
*   **Server-Side:** All API endpoints (Firebase Functions) will validate input data and user authentication. In case of an error (e.g., database write fails), it will return a proper HTTP status code (e.g., 400 for bad request, 500 for server error) and a clear error message in the JSON response.