---
id: design-system
title: "Design System"
description: "Design tokens, visual identity, and guidelines for generating the project's CSS design system"
type: design
subtype: manifest
status: draft
sequence: 1
tags: [design, tokens, colors, typography, system]
relatesTo: [docs/core/006-design.md, assets/manifest.md]
createdAt: ""
updatedAt: ""
---

<flex_block type="instructions">
This file defines the project's visual identity and design tokens. It serves two purposes:

1. For the AI: When generating prototypes, components, or CSS, read this file to understand the project's visual language — colors, typography, spacing, component patterns. Generate a tokens.css and components.css in prototype/shared/ based on what's defined here.

2. For the builder: When implementing the real application, use the CSS custom properties defined here as the single source of truth for all visual decisions.

The tokens flex_block below contains the actual CSS custom property values. The markdown sections explain the design rationale — why these colors, what the vibe is, how components should feel. The AI should read both.
</flex_block>

# Design System

## Design Vision

This section captures the overall aesthetic direction. The AI uses this to make consistent creative decisions when generating prototypes and UI.

- **Style:** (Modern, Minimal, Bold, Playful, Corporate, etc.)
- **Vibe:** (2-3 words describing how the product should feel)
- **Inspiration:** (Reference apps, websites, or brands)
- **Dark mode:** Both (light default, dark via toggle and OS preference)

## Color Tokens — Light Mode

<flex_block type="tokens">
{
  "type": "colors",
  "mode": "light",
  "tokens": {
    "--color-primary": "#8b5cf6",
    "--color-primary-dark": "#7c3aed",
    "--color-primary-light": "#a78bfa",
    "--color-accent": "#06b6d4",
    "--color-success": "#22c55e",
    "--color-warning": "#f59e0b",
    "--color-error": "#ef4444",
    "--color-bg": "#ffffff",
    "--color-surface": "#f8fafc",
    "--color-elevated": "#ffffff",
    "--color-border": "#e2e8f0",
    "--color-text-primary": "#0f172a",
    "--color-text-secondary": "#64748b",
    "--color-text-tertiary": "#94a3b8"
  }
}
</flex_block>

## Color Tokens — Dark Mode

<flex_block type="tokens">
{
  "type": "colors",
  "mode": "dark",
  "tokens": {
    "--color-primary": "#a78bfa",
    "--color-primary-dark": "#8b5cf6",
    "--color-primary-light": "#c4b5fd",
    "--color-accent": "#22d3ee",
    "--color-success": "#4ade80",
    "--color-warning": "#fbbf24",
    "--color-error": "#f87171",
    "--color-bg": "#0f172a",
    "--color-surface": "#1e293b",
    "--color-elevated": "#334155",
    "--color-border": "#334155",
    "--color-text-primary": "#f1f5f9",
    "--color-text-secondary": "#94a3b8",
    "--color-text-tertiary": "#64748b"
  }
}
</flex_block>

### Theme Switching

The prototype supports both light and dark modes via a `data-theme` attribute on `<html>`. Setting `data-theme="dark"` activates dark tokens. If no attribute is set, the OS preference (`prefers-color-scheme: dark`) is used as a fallback. A toggle button in the nav lets users switch manually — the preference is saved to `localStorage`.

### Color Usage

- **Primary** — CTAs, links, active states, key interactive elements
- **Accent** — Secondary highlights, badges, supplementary actions
- **Semantic** (success/warning/error) — Feedback states, alerts, validation
- **Surface/Elevated** — Card backgrounds, modals, layered UI
- **Text tiers** — Primary for headings and body, secondary for labels, tertiary for hints

## Typography Tokens

<flex_block type="tokens">
{
  "type": "typography",
  "tokens": {
    "--font-heading": "Inter, system-ui, -apple-system, sans-serif",
    "--font-body": "Inter, system-ui, -apple-system, sans-serif",
    "--font-mono": "JetBrains Mono, ui-monospace, monospace",
    "--font-size-xs": "0.75rem",
    "--font-size-sm": "0.875rem",
    "--font-size-base": "1rem",
    "--font-size-lg": "1.125rem",
    "--font-size-xl": "1.25rem",
    "--font-size-2xl": "1.5rem",
    "--font-size-3xl": "2rem",
    "--font-size-4xl": "2.5rem",
    "--font-weight-normal": "400",
    "--font-weight-medium": "500",
    "--font-weight-semibold": "600",
    "--font-weight-bold": "700",
    "--line-height-tight": "1.25",
    "--line-height-normal": "1.5",
    "--line-height-relaxed": "1.75"
  }
}
</flex_block>

## Spacing & Layout Tokens

<flex_block type="tokens">
{
  "type": "spacing",
  "tokens": {
    "--space-1": "0.25rem",
    "--space-2": "0.5rem",
    "--space-3": "0.75rem",
    "--space-4": "1rem",
    "--space-6": "1.5rem",
    "--space-8": "2rem",
    "--space-12": "3rem",
    "--space-16": "4rem",
    "--space-24": "6rem",
    "--radius-sm": "0.375rem",
    "--radius-md": "0.5rem",
    "--radius-lg": "0.75rem",
    "--radius-xl": "1rem",
    "--radius-full": "9999px",
    "--shadow-sm": "0 1px 2px rgba(0,0,0,0.05) (light) / rgba(0,0,0,0.3) (dark)",
    "--shadow-md": "0 4px 6px rgba(0,0,0,0.07) (light) / rgba(0,0,0,0.4) (dark)",
    "--shadow-lg": "0 10px 15px rgba(0,0,0,0.1) (light) / rgba(0,0,0,0.5) (dark)",
    "--content-max-width": "1200px",
    "--sidebar-width": "240px",
    "--bottom-nav-height": "56px",
    "--touch-target-min": "44px"
  }
}
</flex_block>

## Component Guidelines

These are not CSS — they're instructions for the AI when generating prototype components.

### Buttons
- Primary: filled with `--color-primary`, white text, `--radius-md`
- Secondary: outlined with `--color-primary`
- Ghost: text only, no background or border
- All buttons: minimum `--touch-target-min` height on mobile

### Cards
- Background: `--color-surface`, border: `--color-border`
- Border radius: `--radius-lg`
- Padding: `--space-4` mobile, `--space-6` desktop
- Hover: subtle `--shadow-md`

### Navigation
- Desktop: sidebar at `--sidebar-width`, fixed left
- Mobile: bottom nav at `--bottom-nav-height`, fixed bottom
- Active state: `--color-primary` indicator

### Forms
- Labels above inputs, `--font-size-sm`, `--color-text-secondary`
- Input height: `--touch-target-min`
- Focus ring: `--color-primary` with 2px offset
- Error messages: `--color-error`, `--font-size-sm`, below field

## Generating CSS

When the AI generates `prototype/shared/tokens.css`, it should output:
- Shared tokens (typography, spacing, radius, layout) in `:root`
- Light color tokens in `:root, [data-theme="light"]`
- Dark color tokens in `[data-theme="dark"]`
- An OS preference fallback in `@media (prefers-color-scheme: dark) { :root:not([data-theme]) { ... } }`

When it generates `components.css`, it should implement the component guidelines using semantic token names — never raw hex values. Components automatically adapt to light/dark because they reference tokens, not colors directly.
