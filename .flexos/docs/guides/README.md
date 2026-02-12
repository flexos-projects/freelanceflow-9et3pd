---
id: guides-readme
title: "Guides"
description: "Cross-cutting guides and custom documentation that don't fit in core docs"
type: meta
subtype: readme
status: active
tags: [docs, guides, custom]
relatesTo: [docs/core/]
createdAt: ""
updatedAt: ""
---

# Guides

This folder holds custom documentation that cuts across the core docs. Core docs are the 8 canonical files (000-007) that define the project from every angle. Guides are everything else — deeper dives, how-tos, integration docs, and domain-specific knowledge.

## What Goes Here

- **Integration guides** — How to connect to third-party services (Stripe, Auth0, etc.)
- **Domain knowledge** — Industry-specific context the AI needs (regulations, terminology, workflows)
- **How-to docs** — Step-by-step instructions for common tasks in this project
- **Architecture deep-dives** — Detailed explanations of complex subsystems
- **API documentation** — Endpoint specs, auth flows, rate limits

## How It's Different From Core Docs

| Core Docs | Guides |
|-----------|--------|
| Exactly 8 files, fixed structure | Any number of files, flexible |
| Define _what_ the project is | Explain _how_ things work in detail |
| Read by every pipeline step | Read on-demand when relevant |
| Numbered 000-007 | Named descriptively |

## File Naming

Use descriptive kebab-case names:
- `stripe-integration.md`
- `auth-flow.md`
- `content-moderation-rules.md`
- `deployment-checklist.md`
