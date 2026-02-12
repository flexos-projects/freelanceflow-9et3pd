---
id: notes-readme
title: "Notes"
description: "Session-based scratchpad for research, ideas, decisions, and brainstorming"
type: meta
subtype: readme
status: active
tags: [notes, scratchpad, sessions, research]
relatesTo: []
createdAt: ""
updatedAt: ""
---

# Notes

This is the project scratchpad — a place for capturing work sessions, research, decisions, and brainstorming that doesn't belong in specs, docs, or content yet.

## Session Structure

Notes are organized as **sessions** — numbered folders that group related work together. Each session is a self-contained context that the AI can pick up and continue from.

```
notes/
├── README.md                  # This file
├── 001-project-kickoff/       # Session folder
│   ├── note.md                # Append-only log (never edit, only add entries)
│   ├── changelog.md           # Structured record of what changed and why
│   └── files/                 # Reference files, screenshots, data dumps
├── 002-auth-research/
│   ├── note.md
│   ├── changelog.md
│   └── files/
│       └── auth-comparison.png
```

### note.md
The main session log. Entries are numbered `[001]`, `[002]`, etc. and appended — never edited. This preserves the full history of decisions and thinking. Contains a config flex_block linking to the changelog and files.

### changelog.md
A structured record of what changed during this session. Each entry captures the decision, rationale, affected files, and status. More formal than the note — this is what you read to understand the outcomes without the journey.

### files/
A place to drop reference material for this session — screenshots, data exports, API responses, competitor screenshots, anything the AI or user needs during this work.

## What Goes Here

- **Research** — Competitor analysis, market research, technology comparisons
- **Brainstorming** — Feature ideas, naming options, UX explorations
- **Decisions** — Why we chose X over Y, trade-off analysis, rejected approaches
- **AI scratch work** — Intermediate reasoning, draft content before it's polished
- **Meeting notes** — Conversations with stakeholders, user interviews, feedback

## How It's Different From Other Folders

| Folder | Purpose |
|--------|---------|
| `docs/` | Finalized reference documentation — vision, architecture, design |
| `specs/` | Structured specifications that drive the build |
| `content/` | Real-world content used in the product (team, copy, data) |
| **`notes/`** | **Rough thinking organized as sessions** |

Notes are disposable. They exist to capture ideas before they're lost. When a note matures into something real, move it to the right folder — a feature idea becomes a spec, research becomes a doc, copy becomes content. The session stays as a record of how we got there.

## Creating a New Session

1. Create a folder: `notes/{NNN}-{descriptive-slug}/`
2. Add `note.md` with frontmatter and a config flex_block
3. Add `changelog.md` for structured decision tracking
4. Create `files/` for any reference material
5. Start logging entries in `note.md`
