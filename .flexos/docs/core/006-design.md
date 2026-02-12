---
id: "006-design"
title: "Design System"
type: doc
subtype: core
status: draft
sequence: 6
tags: [design, brand, colors, typography, components]
---

# Design System

> The visual identity and component language of the product. Everything a designer or developer needs to build consistent UI.

## Brand Voice

How does this product speak? Describe the tone, personality, and communication style:

- **Tone:** (professional, casual, playful, authoritative?)
- **Voice:** (first person, second person, third person?)
- **Personality traits:** (3-4 adjectives that describe the brand)
- **Do:** (examples of on-brand copy)
- **Don't:** (examples of off-brand copy)

## Color System

### Primary Palette

- **Primary:** #000000 (main brand color, used for CTAs and key elements)
- **Accent:** #000000 (complementary color for highlights and secondary actions)

### Neutral Palette

- **Dark:** #000000 (text, headings)
- **Medium:** #000000 (secondary text, borders)
- **Light:** #000000 (backgrounds, cards)
- **White:** #ffffff (page background)

### Semantic Colors

- **Success:** #22c55e
- **Warning:** #f59e0b
- **Error:** #ef4444
- **Info:** #3b82f6

### Color Usage

- Primary is used for: CTAs, links, active states, primary navigation
- Accent is used for: secondary buttons, highlights, badges
- Never use more than 3 colors on a single component

## Typography

### Font Stack

- **Headings:** (font family, weights used)
- **Body:** (font family, weights used)
- **Mono:** (font family, for code/data)

### Scale

| Level | Size | Weight | Line Height | Use |
|-------|------|--------|-------------|-----|
| H1 | 2.5rem | 700 | 1.2 | Page titles |
| H2 | 2rem | 600 | 1.3 | Section headers |
| H3 | 1.5rem | 600 | 1.4 | Card titles |
| Body | 1rem | 400 | 1.6 | Paragraphs |
| Small | 0.875rem | 400 | 1.5 | Captions, labels |

## Component Patterns

### Buttons

- Primary: filled with primary color, white text
- Secondary: outlined with primary color
- Ghost: text only, no background
- Sizes: sm (32px), md (40px), lg (48px)
- All buttons have minimum 44px touch target on mobile

### Cards

- Background: white (light mode) / dark neutral (dark mode)
- Border radius: 12px
- Padding: 16px (mobile), 24px (desktop)
- Shadow: subtle on hover

### Forms

- Labels above inputs
- Inline validation messages below fields
- Input height: 44px minimum (mobile touch target)
- Focus state: primary color ring

## Layout Patterns

- **Desktop:** Sidebar (240px) + main content area
- **Tablet:** Collapsible sidebar + full-width content
- **Mobile:** Bottom navigation (56px) + full-width content
- **Max content width:** 1200px, centered

## Spacing System

Base unit: 4px. Use multiples: 4, 8, 12, 16, 24, 32, 48, 64, 96.

## Accessibility

- Minimum contrast ratio: 4.5:1 (AA) for body text, 3:1 for large text
- Focus indicators on all interactive elements
- Touch targets minimum 44x44px
- Screen reader support for all dynamic content
- Reduced motion support via `prefers-reduced-motion`
