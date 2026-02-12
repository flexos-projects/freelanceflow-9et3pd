---
id: "003-pages"
title: "Pages & Navigation"
type: doc
subtype: core
status: draft
sequence: 3
tags: [pages, navigation, sitemap, ux]
---

# Pages & Navigation

> Every screen in the product, how users move between them, and what each page does. This is the blueprint for the user experience.

## Site Map

The complete URL structure of the application. Include public and authenticated routes.

```
/                       Landing page (public)
/login                  Authentication (public)
/signup                 Registration (public)
/dashboard              Main app view (auth required)
/settings               User settings (auth required)
/[resource]/[id]        Detail views (auth required)
```

## Page Inventory

For each page, document:

### Landing Page (`/`)

- **Purpose:** First impression, conversion
- **Auth required:** No
- **Key sections:** Hero, features, social proof, CTA
- **Data sources:** Static content, testimonials
- **Actions available:** Sign up, learn more, view demo
- **Mobile behavior:** Stacked layout, sticky CTA

### Dashboard (`/dashboard`)

- **Purpose:** Main workspace after login
- **Auth required:** Yes
- **Key sections:** (describe the primary view)
- **Data sources:** (which collections/APIs feed this page)
- **Actions available:** (what can users do here)
- **Mobile behavior:** (how does it adapt)

(Continue for each page...)

## User Journeys

### First-Time User Journey

Walk through what a brand new user experiences from landing page to first "aha moment." Every click, every page transition, every loading state.

1. User lands on `/` → sees hero + CTA
2. Clicks "Get Started" → navigates to `/signup`
3. (continue step by step...)

### Core Action Journey

The primary thing users come back to do. The happy path through the main feature.

### Settings/Admin Journey

How users configure their account, manage settings, handle billing.

## Navigation Patterns

- **Desktop:** (sidebar, top nav, breadcrumbs?)
- **Mobile:** (bottom tabs, hamburger, swipe?)
- **Transitions:** (page transitions, loading states)
- **Deep linking:** (which pages support direct URLs)

## Authentication Gates

Which pages are public vs authenticated? What happens when an unauthenticated user hits a protected route?
