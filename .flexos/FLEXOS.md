# {Project Name}

> This is your FlexOS project folder. Everything about your product lives here — from high-level vision to detailed specs to interactive prototypes.

## What's Inside

| Folder | What It Contains | Key Files |
|--------|-----------------|-----------|
| `docs/core/` | 8 core docs defining your product | 000-import through 007-technical |
| `docs/guides/` | Cross-cutting guides, integrations, how-tos | Custom docs as needed |
| `specs/` | Detailed specs for features, pages, flows, collections | Numbered by type: 001-vision, 002-features, etc. |
| `database/` | Technical schema registry — entity definitions, relationships, mock data config | `manifest.md` |
| `design/` | Design system manifest — tokens, colors, typography, component guidelines | `design-system.md` |
| `prototype/` | Interactive HTML prototypes with shared CSS + mock data | `pages/index.html`, `shared/tokens.css`, `shared/components.css` |
| `builds/001-mvp/` | Build config, agent instructions, plan, queue, specs, tasks | `config.md`, `queue.md`, `tasks/` |
| `notes/` | Session-based notes — append-only logs, changelogs, reference files | `001-project-kickoff/note.md` |
| `content/` | Real-world content — team profiles, briefings, project info | `manifest.md`, `team.md`, `briefing.md` |
| `assets/` | Asset registry — logos, icons, fonts, OG images | `manifest.md` |
| `imports/` | Raw imported/scraped content before triage | Landing zone for external data |

## Key Files

- **`docs/core/000-import.md`** — How this project was created (origin story)
- **`docs/core/001-vision.md`** — Vision, mission, personas, success metrics
- **`database/manifest.md`** — Entity schemas, relationships, mock data config
- **`design/design-system.md`** — Color tokens (light + dark), typography, spacing, component guidelines
- **`prototype/pages/index.html`** — Technical showcase page (design system demo + project overview)
- **`prototype/shared/tokens.css`** — CSS custom properties (light + dark mode)
- **`prototype/shared/components.css`** — Reusable component classes
- **`prototype/sitemap.md`** — Page manifest + Vercel deployment config
- **`builds/001-mvp/config.md`** — Tech stack and build constraints
- **`content/manifest.md`** — Index of all project content

## How FlexOS Works

1. **Define** — Core docs + specs describe what you're building
2. **Design** — Design system tokens define the visual language, prototypes make it real
3. **Build** — Build plans break specs into executable tasks
4. **Iterate** — Notes capture sessions, changelogs track decisions

## File Format

Every `.md` file follows the FlexDoc format:
- **YAML frontmatter** — id, title, type, subtype, status, tags, relatesTo
- **flex_blocks** — Structured JSON/data embedded in `<flex_block type="...">` tags
- **Markdown** — Human-readable documentation and context

Block types: `schema`, `flow`, `tokens`, `config`, `instructions` (AI/human context, hidden from tab bar)

## Theme

This project supports **light and dark mode**. The design system defines tokens for both modes. The prototype toggle (moon/sun icon in nav) switches themes with `localStorage` persistence. OS preference is respected as fallback.

## Deployment

Prototypes deploy to **{project-slug}.flexos.site** via GitHub Actions (`.github/workflows/deploy-preview.yml`). Push to main auto-deploys. Manual deploy via `workflow_dispatch`.

## Status

This project was just created. Core documents and prototypes will be personalized with your project name and color choice.
