---
id: freelanceflow-design
title: 'Design System & Branding'
description: 'Guidelines for brand voice, color, typography, components, and accessibility.'
type: doc
subtype: core
status: draft
sequence: 6
tags:
  - design
  - ui
  - branding
  - accessibility
createdAt: '2023-10-27T10:00:00Z'
updatedAt: '2023-10-27T10:00:00Z'
---

# Design System & Branding

This document establishes the design foundation for FreelanceFlow, ensuring a consistent, accessible, and professional user experience. It is the single source of truth for all visual and interactive elements.

## Brand Voice and Tone

*   **Voice:** Empowering, clear, and reliable.
*   **Tone:** Our tone should be professional but approachable. We are a helpful partner, not a cold corporation. We use straightforward, action-oriented language. For example, instead of "The invoice has been successfully promulgated," we say "Invoice sent!". We avoid jargon and aim for clarity above all else.

## Color System

Our color palette is built around our primary brand color, with a functional set of neutral and status colors. The specific shades are based on the Tailwind CSS color palette for easy implementation.

*   **Primary:** `emerald-500` (#10b981). Used for primary buttons, active navigation links, and key calls-to-action.
*   **Neutral:**
    *   `slate-900` (#0f172a): For main headings and dark backgrounds.
    *   `slate-600` (#475569): For body text and subheadings.
    *   `slate-400` (#94a3b8): For secondary text, labels, and placeholders.
    *   `slate-200` (#e2e8f0): For borders and dividers.
    *   `slate-50` (#f8fafc): For page backgrounds.
    *   `white` (#ffffff): For card backgrounds and elements on dark backgrounds.

*   **Status Colors:**
    *   **Success:** `green-500` (#22c55e). For 'Paid' status, success notifications.
    *   **Warning:** `amber-400` (#fbbf24). For 'Draft' or 'Pending' statuses.
    *   **Error:** `red-500` (#ef4444). For 'Overdue' status, error messages, and destructive actions.
    *   **Info:** `blue-500` (#3b82f6). For informational banners and 'Sent' status.

## Typography

We will use a single font family to maintain simplicity and a modern feel.

*   **Font Family:** Inter (via Google Fonts).
*   **Headings (`h1`, `h2`, `h3`):** Inter SemiBold, using a clear typographic scale (e.g., 30px, 24px, 20px).
*   **Body Text:** Inter Regular, with a base size of 16px. Line height will be set to 1.5 for optimal readability.

## Core Components

This is a preliminary list of the base components that will form our UI library. They will be built in React and styled with Tailwind CSS.

*   **Button:**
    *   Variants: `primary` (solid emerald), `secondary` (slate outline), `ghost` (transparent text), `destructive` (solid red).
    *   States: `default`, `hover`, `focus`, `disabled`.

*   **Input Field:**
    *   Includes a `label`, `input` element, and optional `helper text` or `error message`.
    *   States: `default`, `focus`, `error`, `disabled`.

*   **Card:**
    *   The primary container for content sections, like dashboard widgets. It will have a white background, a subtle border (`slate-200`), and a soft box-shadow.

*   **Badge:**
    *   A small, pill-shaped element used to display status (e.g., 'Paid', 'Active'). It will use the status colors defined above.

*   **Modal:**
    *   A dialog that overlays the page content. Used for forms like 'New Client' or 'Add Time Entry' to maintain context.

*   **Table:**
    *   Used for displaying lists of data like invoices or clients. It will support sorting on headers.

## Accessibility (A11y)

Accessibility is a requirement, not an afterthought. We will adhere to WCAG 2.1 AA guidelines.

*   **Color Contrast:** All text and UI elements will meet the minimum contrast ratio of 4.5:1 (or 3:1 for large text).
*   **Keyboard Navigation:** All interactive elements must be reachable and operable using the Tab key. Focus states will be clearly visible (e.g., a distinct ring around the element).
*   **Semantic HTML:** We will use appropriate HTML tags (`<nav>`, `<main>`, `<button>`) to provide structure for screen readers.
*   **Forms:** All `input` elements will have an associated `<label>`. Error messages will be programmatically linked to their inputs using `aria-describedby`.
*   **Alternative Text:** All meaningful images will have descriptive `alt` tags.