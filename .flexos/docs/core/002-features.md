---
id: freelanceflow-features
title: 'Feature Inventory & MVP Scope'
description: 'A prioritized list of all features for FreelanceFlow, defining the scope for MVP and future releases.'
type: doc
subtype: core
status: draft
sequence: 2
tags:
  - features
  - mvp
  - roadmap
createdAt: '2023-10-27T10:00:00Z'
updatedAt: '2023-10-27T10:00:00Z'
---

# Feature Inventory & MVP Scope

This document details the features planned for FreelanceFlow, prioritized into P0 (MVP), P1 (Fast Follow), and P2 (Future). This prioritization is guided by our [Vision & Strategy](./001-vision.md) to deliver core value first.

## P0: Minimum Viable Product (MVP)

The MVP is focused on enabling a freelancer to complete the entire billing cycle for a single client project. This is the essential workflow.

*   **User Authentication:**
    *   Sign up and Login with Email/Password.
    *   Sign up and Login with Google (OAuth).
    *   Password reset functionality.

*   **Dashboard:**
    *   A single, non-customizable dashboard view.
    *   Widget: Key metric card for 'Revenue - Last 30 Days'.
    *   Widget: List of 'Active Projects' with links to project pages.
    *   Widget: List of 'Recent Invoices' with status (Sent, Paid, Overdue).

*   **Client Management (CRUD):**
    *   Create, Read, Update, and Delete clients.
    *   Client entity includes: Name, Email, Phone, Address.

*   **Project Management (CRUD):**
    *   Create, Read, Update, and Delete projects.
    *   Projects must be associated with a Client.
    *   Project entity includes: Name, Status (Active, Completed), Rate Type (Hourly, Fixed), Hourly Rate or Fixed Price.

*   **Time Tracking (CRUD):**
    *   Create, Read, Update, and Delete time entries.
    *   Time entries must be associated with a Project.
    *   Entry entity includes: Date, Duration (e.g., in hours/minutes), and a brief Description.

*   **Invoice Management:**
    *   Generate an invoice for a specific project from its unbilled time entries.
    -   Manually add/edit/remove line items on an invoice.
    *   Assign an invoice number, issue date, and due date.
    *   Update invoice status manually: Draft, Sent, Paid.
    *   Download a clean, professional PDF of the invoice.

## P1: Fast Follow

These features will be prioritized immediately after the MVP launch to enhance the core experience and introduce our key differentiator, the Client Portal.

*   **Client Portal (V1 - Read-Only):**
    *   Generate a unique, shareable link per client.
    *   Clients can view their associated projects and their statuses.
    *   Clients can view and download all their invoices.
    *   This feature is critical for our strategy, as noted in the [Vision Document](./001-vision.md).

*   **Payment Integration (Stripe):**
    *   Freelancers can connect their Stripe account.
    *   Invoices sent from FreelanceFlow will include a 'Pay Now' button.
    *   Payment status will automatically update the invoice status in the app via webhooks.

*   **Advanced Dashboard Widgets:**
    *   Add widgets for 'Time Logged This Week' and 'Project Budget vs. Actuals'.

*   **Basic Reporting:**
    *   Export time entries for a given date range as a CSV file.

## P2: Future Enhancements

These are features we plan to build in the medium to long term, based on user feedback and growth.

*   **Client Portal (V2 - Interactive):**
    *   Clients can comment on deliverables.
    *   Clients can formally approve/reject items.

*   **Proposals & Estimates:**
    *   Create and send professional estimates to potential clients.
    *   Ability to convert an accepted estimate into a project.

*   **Recurring Invoices:**
    *   Set up automated invoicing schedules for retainer clients (e.g., monthly on the 1st).

*   **Expense Tracking:**
    *   Log project-related expenses and attach receipts.
    *   Option to add billable expenses to invoices.

*   **Integrations (Accounting):**
    *   Connect to QuickBooks, Xero, or Wave to sync invoices and payments.

*   **Team Functionality:**
    *   Allow freelancers to add team members to track time on projects.