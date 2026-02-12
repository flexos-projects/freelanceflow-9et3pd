---
id: build-task-001
title: "Project Setup"
description: "Create Nuxt 4 project scaffold with TypeScript and base configuration"
type: build
subtype: task
status: pending
sequence: 1
tags: [build, task, setup, phase-1]
relatesTo: [builds/001-mvp/build-spec/001-project-setup.md, builds/001-mvp/queue.md]
createdAt: ""
updatedAt: ""
---

# Task: Project Setup

## Objective

Create a deployable Nuxt 4 project with TypeScript, base layout, and Vercel deployment. This is the foundation everything else builds on.

## Prerequisites

- GitHub repository exists
- Vercel account connected
- Node.js 20+ available

## Steps

1. **Initialise Nuxt 4 project** with TypeScript template
2. **Install base dependencies:**
   - `firebase` + `firebase-admin` (client + server SDKs)
   - `unocss` or `@nuxtjs/tailwindcss` (styling)
   - `zod` (validation)
3. **Configure `nuxt.config.ts`:**
   - Enable TypeScript strict mode
   - Configure CSS modules
   - Set runtime config for Firebase keys
   - Add `.env.example` with all required variables
4. **Create base layout** (`app/layouts/default.vue`):
   - Responsive shell: sidebar on desktop, bottom nav on mobile
   - Slot for page content
   - Navigation component with route links
5. **Create index page** (`app/pages/index.vue`):
   - Simple welcome/dashboard placeholder
   - Confirms routing works
6. **Deploy to Vercel:**
   - Push to main branch
   - Verify build succeeds
   - Confirm accessible at URL

## Acceptance Criteria

- [ ] `pnpm dev` starts without errors on port 3000
- [ ] `pnpm build` completes with zero TypeScript errors
- [ ] Index page renders with base layout on mobile (375px) and desktop (1280px)
- [ ] Environment variables documented in `.env.example`
- [ ] Deployed and accessible on Vercel

## Estimated Complexity

**S (Small)** — ~2 hours. Scaffold + config, no business logic.
