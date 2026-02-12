---
id: "005-flows"
title: "Flows & Business Logic"
type: doc
subtype: core
status: draft
sequence: 5
tags: [flows, logic, processes, states]
---

# Flows & Business Logic

> Every process in the product — what triggers it, what steps it follows, what can go wrong, and how it recovers. This is the behavioral specification.

## Flow Inventory

| Flow | Type | Trigger | Complexity |
|------|------|---------|------------|
| User Signup | user | Clicks "Sign Up" | Medium |
| (add flows...) | | | |

## User Flows

### Signup / Onboarding

**Trigger:** User clicks "Get Started" on landing page

**Steps:**
1. User enters email + password → system validates format
2. System creates account → sends verification email
3. User lands on onboarding wizard → collects preferences
4. System creates default resources → redirects to dashboard

**Error states:**
- Email already exists → show "Already have an account? Log in"
- Weak password → show requirements inline
- Network failure → retry with exponential backoff

**Success state:** User lands on dashboard with first resource created

### Core Action Flow

**Trigger:** (what starts the main thing users do)

**Steps:**
1. (step by step through the happy path)

**Error states:**
- (what can go wrong at each step)

**Success state:** (what does "done" look like)

(Continue for each flow...)

## System Flows

Processes that happen in the background without user interaction:

### Scheduled Jobs

- (any cron jobs, scheduled tasks, cleanup processes)

### Webhooks

- (any external services that push data in)

### Background Processing

- (any long-running tasks triggered by user actions)

## State Machines

If any entity has complex state transitions, document them:

### Order Status

```
draft → submitted → processing → completed
                  → cancelled
         → rejected
```

## Business Rules

Validation rules, permissions, calculations that aren't obvious from the schema:

- (e.g., "Users can only have 3 active projects on the free plan")
- (e.g., "Prices are calculated as base + quantity * unit_price - discount")

## Error Handling Strategy

How does the product handle errors consistently?

- **User input errors:** Inline validation, field-level messages
- **Network errors:** Toast notification, retry button
- **Server errors:** Error page with support link
- **Partial failures:** (how to handle when some things succeed and others fail)
