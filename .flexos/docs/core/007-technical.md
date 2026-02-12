---
id: "007-technical"
title: "Technical Architecture"
type: doc
subtype: core
status: draft
sequence: 7
tags: [technical, architecture, stack, deployment]
---

# Technical Architecture

> How the product is built, deployed, and maintained. The engineer's reference document.

## Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | Nuxt 4 | Full-stack Vue, SSR, file-based routing |
| Database | Firestore | Real-time, serverless, scales automatically |
| Auth | Firebase Auth | Email/password, social login, session management |
| Hosting | Vercel | Edge deployment, preview deploys, serverless functions |
| Storage | Vercel Blob | File uploads, images, assets |
| Styling | UnoCSS / Tailwind | Utility-first, design token integration |

## Architecture Overview

Describe the high-level architecture — client/server split, data flow, caching strategy.

### Client

- Nuxt 4 SPA with SSR for public pages
- Vue 3 Composition API throughout
- State management via composables (not Pinia unless complex)
- File-based routing with middleware for auth gates

### Server

- Nuxt server routes (server/api/)
- Firebase Admin SDK for privileged operations
- Server-side rendering for SEO-critical pages
- Edge functions for API routes

### Data Flow

```
Client → Nuxt Server Routes → Firestore
         ↕                     ↕
      Firebase Auth         Cloud Functions (if needed)
```

## API Routes

List every API endpoint the product needs:

| Method | Path | Purpose | Auth |
|--------|------|---------|------|
| POST | /api/auth/login | Authenticate user | No |
| GET | /api/[resource] | List resources | Yes |
| POST | /api/[resource] | Create resource | Yes |
| (continue...) | | | |

## Authentication

- **Method:** Firebase Auth (email/password + Google OAuth)
- **Session:** HTTP-only cookie with Firebase session token
- **Middleware:** `auth.ts` middleware checks session on protected routes
- **Token refresh:** Automatic via Firebase SDK

## Environment Variables

| Variable | Purpose | Required |
|----------|---------|----------|
| `FIREBASE_PROJECT_ID` | Firebase project | Yes |
| `FIREBASE_CLIENT_EMAIL` | Service account | Yes |
| `FIREBASE_PRIVATE_KEY` | Service account | Yes |
| (continue...) | | |

## Deployment

- **Production:** Vercel, auto-deploy from `main` branch
- **Preview:** Vercel preview deploys on every PR
- **Database:** Firestore production instance
- **CI/CD:** GitHub Actions for linting, type-checking, tests

## Performance Targets

- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Lighthouse Score:** > 90 (performance, accessibility)
- **API Response Time:** < 200ms (p95)

## Security Considerations

- All API routes validate input (Zod schemas)
- Firestore security rules enforce per-document access
- CORS configured for production domain only
- Rate limiting on auth endpoints
- No secrets in client bundle
