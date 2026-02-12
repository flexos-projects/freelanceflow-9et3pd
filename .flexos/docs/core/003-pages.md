---
id: freelanceflow-pages
title: 'Pages & User Journeys'
description: 'A complete site map, page inventory, and key user journeys for the FreelanceFlow application.'
type: doc
subtype: core
status: draft
sequence: 3
tags:
  - ux
  - pages
  - sitemap
createdAt: '2023-10-27T10:00:00Z'
updatedAt: '2023-10-27T10:00:00Z'
---

# Pages & User Journeys

This document outlines the structure of the FreelanceFlow application, including a full site map and descriptions of each page's purpose. It also details key user journeys to illustrate how users will interact with the system.

## Site Map

The application is divided into public-facing pages, the core authenticated app, and the client portal.

*   `/` - Marketing Homepage
*   `/login` - User Login Page
*   `/signup` - User Signup Page
*   `/forgot-password` - Password Reset Page

**Authenticated App (`/app/*`)**
*   `/app/dashboard` - The main landing page after login.
*   `/app/clients` - List of all clients.
*   `/app/clients/new` - Form to create a new client.
*   `/app/clients/:clientId` - Detail view for a single client.
*   `/app/projects` - List of all projects.
*   `/app/projects/:projectId` - Detail view for a single project.
*   `/app/time` - View and manage all time entries.
*   `/app/invoices` - List of all invoices.
*   `/app/invoices/new` - Page to start the invoice creation process.
*   `/app/invoices/:invoiceId` - Detail view for a single invoice.
*   `/app/settings` - User profile and application settings.

**Client Portal (`/portal/*`)**
*   `/portal/:shareableLink` - Main dashboard for a client, showing project overviews.
*   `/portal/:shareableLink/invoices/:invoiceId` - View for a specific invoice.

## Page Inventory

*   **Dashboard (`/app/dashboard`):** This is the user's mission control. It provides an at-a-glance overview of their business health. It will feature key metrics like revenue and overdue payments, a list of active projects for quick access, and a feed of recent activity.

*   **Clients Page (`/app/clients`):** A simple table view of all clients. Columns will include Client Name, Email, and a summary metric like 'Total Billed'. This page will have a primary CTA to 'Add New Client'.

*   **Project Detail Page (`/app/projects/:projectId`):** The central hub for a single project. It will use a tabbed interface:
    *   **Overview:** Displays project budget vs. actuals (hours or fixed price), a burn-down chart, and key details.
    *   **Time Entries:** A list of all time entries logged for this project. The primary CTA here is 'Add Time Entry'.
    *   **Invoices:** A list of all invoices generated for this project. The primary CTA is 'Generate Invoice from Unbilled Hours'.

*   **Invoices Page (`/app/invoices`):** A table view of all invoices, filterable by status (Draft, Sent, Paid, Overdue). Each row shows the client, amount, issue date, due date, and status. This is crucial for cash flow management.

## Key User Journeys

1.  **Journey: From Signup to First Invoice**
    *   **Actor:** Alex the Designer, a new user.
    *   **Goal:** Create and send their first invoice for a new project.
    *   **Steps:**
        1.  Alex signs up for FreelanceFlow.
        2.  Lands on the Dashboard, which is empty. A 'Getting Started' guide prompts him to 'Create a Client'.
        3.  He is taken to `/app/clients/new`, fills in the client's details, and saves.
        4.  He is redirected to the new client's detail page, which prompts him to 'Create a Project'.
        5.  He creates a new project, 'Logo Design', with an hourly rate.
        6.  On the Project Detail page, he navigates to the 'Time Entries' tab and logs 10 hours of work.
        7.  He then clicks 'Generate Invoice'. The system automatically pulls in the 10 unbilled hours.
        8.  He is taken to the draft invoice page (`/app/invoices/:invoiceId`), reviews the details, and clicks 'Send Invoice'.
        9.  The system marks the invoice as 'Sent' and provides a confirmation toast message.

2.  **Journey: Client Views an Invoice in the Portal**
    *   **Actor:** Alex's client.
    *   **Goal:** View and pay an invoice they received via email.
    *   **Steps:**
        1.  The client receives an email from FreelanceFlow on behalf of Alex.
        2.  The email contains a summary and a button: 'View Invoice'.
        3.  The client clicks the button, which opens a unique URL (`/portal/.../invoices/...`) in their browser.
        4.  The page displays the professional invoice. For P1, it will also include a 'Pay with Card' button powered by Stripe.
        5.  The client can also download a PDF version for their records.