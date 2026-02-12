---
id: build-001-agent
title: "Build Agent Instructions"
description: "AI agent execution instructions, context loading, and code standards for the MVP build"
type: build
subtype: agent
status: draft
sequence: 2
tags: [build, agent, ai]
relatesTo: [builds/001-mvp/config.md]
createdAt: ""
updatedAt: ""
---

# Build Agent Instructions

Instructions for the AI agent executing this build. The agent reads specs, follows the queue, and produces production code.

## Context Loading

Before starting any task, the agent must read:

1. `builds/001-mvp/config.md` — tech stack and constraints
2. `docs/core/007-technical.md` — architecture decisions
3. `docs/core/006-design.md` — design system and tokens
4. The specific spec file for the current task

## Code Standards

### File Structure

```
project-root/
├── app/
│   ├── pages/           # Nuxt file-based routing
│   ├── components/      # Vue components
│   ├── composables/     # Vue composables (useX pattern)
│   ├── layouts/         # Page layouts
│   └── assets/          # Static assets
├── server/
│   ├── api/             # Server routes
│   └── utils/           # Server utilities
├── public/              # Public static files
└── nuxt.config.ts       # Nuxt configuration
```

### Conventions

- **Components:** `<script setup lang="ts">`, PascalCase filenames
- **Composables:** `useX` naming, return reactive state + functions
- **API routes:** `defineEventHandler`, Zod input validation
- **Styling:** Utility-first (UnoCSS/Tailwind), design tokens from `design/patterns/`
- **State:** Composables for local state, Pinia only if cross-component state needed
- **Types:** Explicit TypeScript interfaces, no `any`

### Quality Gates

Before marking a task complete:

- [ ] TypeScript compiles without errors
- [ ] Page renders correctly on mobile (375px) and desktop (1280px)
- [ ] Authentication gates work (protected routes redirect)
- [ ] Loading and error states are handled
- [ ] Touch targets are minimum 44px

## Execution Flow

1. Read the current task from the queue
2. Load the referenced spec(s)
3. Implement the feature/page/component
4. Verify against acceptance criteria in the spec
5. Mark task as complete in queue
6. Log progress in `builds/001-mvp/log.md`
7. Move to next task
