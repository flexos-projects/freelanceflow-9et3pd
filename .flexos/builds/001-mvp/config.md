---
id: build-001-config
title: "MVP Build Configuration"
description: "Tech stack, scope, output paths, and deployment targets for the MVP build"
type: build
subtype: config
status: draft
sequence: 1
tags: [build, config, mvp]
relatesTo: [docs/core/007-technical.md]
createdAt: ""
updatedAt: ""
---

# MVP Build Configuration

This is the configuration for the first production build. It defines what gets built, with what technology, and where it deploys.

<flex_block type="config">
{
  "build": {
    "name": "001-mvp",
    "version": "0.1.0",
    "status": "planning",
    "scope": "P0 features only — minimum viable product"
  },
  "stack": {
    "framework": "Nuxt 4",
    "language": "TypeScript",
    "styling": "UnoCSS / Tailwind",
    "database": "Firestore",
    "auth": "Firebase Auth",
    "hosting": "Vercel",
    "storage": "Firebase Storage",
    "analytics": "Vercel Analytics",
    "_note": "These are FlexOS defaults. Override based on project requirements in docs/core/007-technical.md"
  },
  "output": {
    "repo": "github:{owner}/{repo}",
    "branch": "main",
    "buildDir": "builds/001-mvp/",
    "deployUrl": "https://{project}.vercel.app"
  },
  "constraints": {
    "maxBuildTasks": 20,
    "targetDuration": "2 weeks",
    "codeStandards": "TypeScript strict, Vue 3 Composition API, server routes for API",
    "testing": "Manual QA + type checking",
    "accessibility": "WCAG AA minimum"
  }
}
</flex_block>

## Scope

This build covers all P0 features defined in `specs/001-vision_project-overview.md`. P1 and P2 features are deferred to future builds.

### In Scope

- All P0 features from the feature inventory
- Authentication (signup, login, logout)
- Core app pages (dashboard + 1-2 key pages)
- Mobile-responsive layout
- Basic error handling

### Out of Scope

- P1/P2 features
- Admin panel
- Email notifications
- Payment integration
- Performance optimisation
- Automated testing

## Dependencies

- GitHub repository must exist
- Firebase project must be configured
- Vercel project must be linked
- Domain (optional — can use Vercel subdomain for MVP)
