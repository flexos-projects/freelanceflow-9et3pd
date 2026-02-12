---
id: build-001-queue
title: "MVP Build Queue"
description: "Ordered task list with status tracking and dependencies"
type: build
subtype: queue
status: draft
sequence: 4
tags: [build, queue, mvp]
relatesTo: [builds/001-mvp/plan.md, builds/001-mvp/config.md]
createdAt: ""
updatedAt: ""
---

# MVP Build Queue

Ordered task list for the MVP build. Tasks are executed top-to-bottom. Each task has a detailed spec in `builds/001-mvp/tasks/`.

<flex_block type="config">
{
  "queue": [
    {
      "id": "task-001",
      "name": "Project Setup",
      "phase": "phase-1",
      "status": "pending",
      "priority": "P0",
      "complexity": "S",
      "spec": "builds/001-mvp/tasks/001-project-setup.md",
      "dependsOn": [],
      "deliverables": ["nuxt.config.ts", "package.json", "tsconfig.json", "app/app.vue"]
    },
    {
      "id": "task-002",
      "name": "Firebase Setup",
      "phase": "phase-1",
      "status": "pending",
      "priority": "P0",
      "complexity": "S",
      "spec": "builds/001-mvp/tasks/002-firebase-setup.md",
      "dependsOn": ["task-001"],
      "deliverables": ["server/utils/firebase.ts", "firebase.json", ".env.example"]
    },
    {
      "id": "task-003",
      "name": "Authentication Pages",
      "phase": "phase-1",
      "status": "pending",
      "priority": "P0",
      "complexity": "M",
      "spec": "builds/001-mvp/tasks/003-auth-pages.md",
      "dependsOn": ["task-002"],
      "deliverables": ["app/pages/login.vue", "app/pages/signup.vue", "server/middleware/auth.ts"]
    }
  ],
  "statusLegend": {
    "pending": "Not started",
    "in-progress": "Currently being built",
    "review": "Built, awaiting QA",
    "complete": "Done and deployed",
    "blocked": "Waiting on dependency",
    "skipped": "Deferred to future build"
  }
}
</flex_block>

## Status Tracking

| # | Task | Phase | Status | Complexity | Depends On |
|---|------|-------|--------|------------|------------|
| 001 | Project Setup | 1 | pending | S | — |
| 002 | Firebase Setup | 1 | pending | S | 001 |
| 003 | Auth Pages | 1 | pending | M | 002 |

Tasks are added here as the build progresses. The AI agent and build system update status as tasks complete.

## Complexity Scale

- **S (Small):** < 2 hours, single file or config change
- **M (Medium):** 2-8 hours, multiple files, one feature
- **L (Large):** 1-2 days, cross-cutting, multiple components
- **XL (Extra Large):** 2+ days, consider splitting into smaller tasks
