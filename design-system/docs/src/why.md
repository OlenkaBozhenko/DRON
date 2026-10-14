---
title: Why it looks like this · DRON Design System
description: Where DRON's visual language came from, what was chosen and rejected, and the rules that follow from it. The first page for a new developer.
---

# Why the system looks like this

You will meet a warm off-white page, grey cards without a shadow, one light green that is never text, and type that is all one family. None of it is a taste picked from a moodboard. Each part answers one question from the research: **would you hand a job to a stranger with a flying machine?**

This page explains where each rule came from, so that when one gets in your way you know what it protects before you change it.

## The problem the visuals solve

DRON sells a service, not a drone. Clients are 18–50, have never flown a drone and never will, and they arrive with the Bolt and Glovo model in their heads. If the experience leaves that model in the first 60 seconds, they leave. Research puts **trust** first, and the anxiety comes in two parts: the machine itself (noise, privacy, safety) comes before the stranger operating it.

So the interface has two jobs:

- **Be calm.** A loud screen reads as a marketing app; a quiet one reads as an institution you can hand control to.
- **Show proof, not adjectives.** Verified badge, insurance, rating and a real photo of the operator are visible on the list card, before any tap (job RJ-C1). Between payment and arrival there is a name, a face and a live map, never an empty "order received" (job RJ-C2).

Sources: research/target-audience.md · research/jtbd.md · CLAUDE.md § Design Focus

## Where the language came from

### The designer's taste came first

Every later choice had to agree with three references from the designer's own board, and with three anti-references.

- **Fauna Robotics** — the closest match to DRON's job of trusting a machine. Light ground, charcoal text, a muted accent, real photographs of the robot at work, a flat monochrome icon per capability. **This is the language DRON is a tuning of.**
- **CoffeeTech** — the strong like: real product photography instead of illustration, one warm accent used sparingly, a lot of whitespace. Taken: the restraint. Not taken: its dark default and its orange.
- **Boiler Lab** — taken only for one move: hard numbers as credibility (*20M+ users*), which became voice principle P2.

The anti-references are just as binding: **no cream-and-terracotta** (the AI cliché), **no gradients standing in for photographs**, and **no screens without icons**.

### Four styles and three screens, each giving one move

The concept was built from live references (the Refero library) by one rule: **copy no source whole**. One style is the base, and every other source gives one named move, never a vibe.

- **Monarch** (base) — warm and classic and trustworthy at once: a warm canvas, charcoal ink, one confident accent kept for functional components.
- **N26** — the discipline of a single brand colour.
- **Perplexity** — the accent used only for active states.
- **Operate** — the precise half of the brief, done in structure: hairlines instead of shadows. Its green family is where Signal Green comes from.
- **Airbnb** — the verified badge sits on the avatar, and the stat trio (jobs, rating, insured) sits beside the name.
- **PayPal** — the order's progress as one rounded card with a four-node line, where only the completed nodes take colour.
- **Klarna** — segmented status tabs, the parcel-app model C-1 already knows.

The brand brief adds three more for maturity and air: the FlowTune dashboard (density), DJI Express (drone-native visual language) and Solva Air (the confidence of an air brand).

Sources: concept.md § 0 Designer's Taste · § 1 Styles · § 2 Screens · § 3 Composition · CLAUDE.md § Brand & Visual Direction

### Three directions, one chosen

Three tunings of the Fauna language were drawn on the same green: **Daylight** (pure white, the airiest), **Studio** (a warm page with grey cards, more structure) and **Nocturne** (graphite, where the green glows). **Studio was chosen.** It is the register of a company you can call, not a consumer toy. Daylight and Nocturne are kept on record as directions to return to. Nocturne's mood survives as the dark theme, which follows the device setting (`HIG`).

Sources: concept.md § 5 Directions

## The rules, and what each one protects

### One accent, and it is a fill

```html
<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center"><button class="dr-btn dr-btn--primary" type="button">Pay 1,450 UAH</button><button class="dr-btn dr-btn--secondary" type="button">Change time</button></div>
```

Signal Green `#9BCF4A` is a light hue. As text on a card it measures **1.52:1**, far below the 4.5:1 that `WCAG 1.4.3` asks for, and as a stroke it fails `1.4.11`. So green is only ever a **fill or a tint, with charcoal on it**: 9.46:1 on the fill, 14.75:1 on the tint. A screen carries **one green control**, and solid green covers about 5% of the frame (measured at 4.43%, 5.09% and 4.71% on three screens). Everything else that can be tapped is warm grey. What this protects is the calm: the eye finds the one thing the screen asks of you.

### Surfaces are flat

No card, well or photograph casts a shadow. A card is separated from the page by tone and by its 16px corner: `#ECE9E4` on `#F7F5F2` is a real 1.11:1 step. This is the designer's preference, and it is measurable. Only two shadow rungs are spent, both on things that genuinely float: the green primary, and the sheet and the toast over the page.

### Six radii, ten type steps, one icon line

Shapes come from a closed ramp: 10 input, 12 button, 13 media, 16 card, 22 panel, 999 pill. A shape outside it is a shape nobody chose. Type is one family, SF Pro through the system stack, in ten steps from 22 down to 11. None is below `HIG`'s 11pt floor. Every font value a component writes is a semantic `--type-*` token. Icons are flat outlines on a 24-grid at a 1.7 stroke in `currentColor`. A state is a green shape **behind** a charcoal glyph, never a green line.

### Imagery is real

The operator's photograph, the delivery photo and the live map are the proof the research asks for, so they are never decoration. A drone render is a transparent cutout set straight on the card. A photograph is the surface and covers it. Not one gradient stands in for a picture. Alt text names the outcome (*Your parcel on its way*), not the equipment.

### States are built, not dimmed

A disabled button gets its own colour pair at 4.77:1. Blanket opacity would silently drop charcoal-on-green to 2.35:1, a ratio nobody measured.

Sources: concept.md § 0.2 Icons · § 5 Studio · § 6 Imagery · DESIGN.md § Named rules · § Do's and Don'ts

## What was deliberately not copied

- Monarch's orange, and its white-on-accent button, which fails AA.
- Monarch's pill buttons: Fauna is a rounded-rectangle language, so a button is 12px.
- Airbnb's pink and its whole profile layout. Only the badge position and the stat trio were taken.
- N26's teal and 4px cards. Only the single-accent discipline was taken.
- CoffeeTech's dark default and its soft card shadow.

## How the system stays honest

- **One package, one link.** Every screen links `design-system/index.css`. The pages in this showcase link the same file, so a component here cannot look different from one on a screen.
- **Two tiers of tokens.** A primitive is a raw value. A semantic token is a role, and colour and type reach a component only through roles. The dark theme redefines roles and no primitive, which is how a component reading the wrong tier shows up.
- **Every pair is measured.** A colour pair is not used until its ratio is computed and written down. Every rule above was checked against `HIG` and `WCAG` before it was built.
- **The reasons are kept.** `concept.md` records every revision, including the ones that were tried and reverted, so a rejected idea is not proposed again as a new one.

Next: the [components](index.html), each drawn live, or the [tokens](../../design-system.html) as the browser resolves them.
