---
id: "004-flows_example"
title: "Example Flow Spec"
type: spec
subtype: flow
status: draft
sequence: 4
tags: [flow]
relatesTo: [docs/core/005-flows.md]
createdAt: ""
updatedAt: ""
---

# Flow: {Flow Name}

> **Spec type: flow** — One per user/system flow. Step-by-step process with error handling.

## File Schema

```
Naming:    004-flows_{flow-slug}.md
Subtype:   flow
Relates:   docs/core/005-flows.md
Purpose:   Step-by-step flow definition — enough to implement the complete process
```

## Overview

What does this flow accomplish? When does it start? When is it "done"?

## Trigger

What initiates this flow?

- **Actor:** User / System / Scheduled / Webhook
- **Action:** (what starts it — click, API call, timer, event)
- **Preconditions:** (what must be true before this flow can start)

## Happy Path

The ideal path through the flow, step by step:

| Step | Actor | Action | System Response | Next |
|------|-------|--------|----------------|------|
| 1 | User | (does something) | (system responds) | → 2 |
| 2 | System | (processes) | (result) | → 3 |
| 3 | User | (confirms) | (completes) | Done |

## Error Paths

### Error: {Error Name}

- **Occurs at:** Step X
- **Condition:** (what goes wrong)
- **Recovery:** (how to get back on track)
- **User sees:** (error message or UI change)

### Error: {Error Name}

- **Occurs at:** Step Y
- **Condition:** (what goes wrong)
- **Recovery:** (how to get back on track)
- **User sees:** (error message or UI change)

## Pages Involved

List every page this flow touches, in order:

1. `/page-a` — (what happens here)
2. `/page-b` — (what happens here)

## Data Changes

What data is created, updated, or deleted during this flow?

| Step | Collection | Operation | Fields |
|------|-----------|-----------|--------|
| 1 | (name) | create/update/delete | (which fields) |

## Validation Rules

- Step 1: (what's validated, what error messages)
- Step 2: (what's validated, what error messages)

## Notifications

Does this flow trigger any notifications (email, push, in-app)?

| When | Who | Channel | Content |
|------|-----|---------|---------|
| (after step X) | (user/admin) | (email/push/in-app) | (summary) |

## Performance

- **Expected duration:** (how long should the flow take)
- **Timeout:** (when do we give up)
- **Retry policy:** (on failure, what's retried)
