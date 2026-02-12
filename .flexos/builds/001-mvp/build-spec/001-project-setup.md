---
id: build-spec-001
title: "Project Setup Build Spec"
description: "Gap analysis and implementation details for the project scaffold task"
type: build
subtype: spec
status: draft
sequence: 1
tags: [build, spec, setup]
relatesTo: [builds/001-mvp/queue.md, docs/core/007-technical.md]
createdAt: ""
updatedAt: ""
---

# Build Spec: Project Setup

Detailed implementation spec for task-001 in the build queue. This is the translation layer between the project specs and actual code.

## Objective

Create a production-ready Nuxt 4 project scaffold with TypeScript, linting, and base configuration. The project should compile, deploy to Vercel, and serve a blank page.

## Gap Analysis

What exists vs what needs to be built:

| Requirement | Current State | Action |
|-------------|--------------|--------|
| Nuxt 4 project | Nothing | Create from scratch |
| TypeScript config | Nothing | Configure strict mode |
| Package manager | Nothing | pnpm with lockfile |
| Linting | Nothing | ESLint + Nuxt preset |
| Base layout | Nothing | Responsive shell |
| Deployment | Nothing | Vercel config |

## Component Mapping

Which specs drive which components:

| Spec | Component | Notes |
|------|-----------|-------|
| `docs/core/007-technical.md` | nuxt.config.ts | Framework config |
| `docs/core/006-design.md` | app/assets/main.css | Base styles |
| `design/patterns/001-colors.md` | CSS custom properties | Design tokens |

## Steps

1. `npx nuxi@latest init {project-name}` with TypeScript
2. Configure `nuxt.config.ts` (modules, CSS, runtime config)
3. Add base dependencies (Firebase SDK, UnoCSS)
4. Create app layout with responsive shell
5. Add `.env.example` with required environment variables
6. Verify: `pnpm dev` runs, `pnpm build` succeeds
7. Deploy to Vercel, confirm accessible

## Acceptance Criteria

- [ ] `pnpm dev` starts without errors
- [ ] `pnpm build` produces deployable output
- [ ] TypeScript strict mode enabled, no type errors
- [ ] Base layout renders on mobile and desktop
- [ ] Deployed to Vercel and accessible via URL
