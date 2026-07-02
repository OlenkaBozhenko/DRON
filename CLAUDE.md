# DRON — Project Brief

## Overview

**Product:** DRON — a drone-as-a-service platform connecting clients with professional drone operators.
**Tagline:** People order a service, a certified operator handles everything with their drone.
**Core insight:** Users have never operated a drone and never will — they want a trusted professional to do it for them.

---

## Business Model

Company-owned fleet with in-house operators. Not a marketplace — DRON employs and manages operators directly, ensuring consistent quality and accountability.

---

## Geography

Ukraine and European countries.

---

## Audience

- **Age:** 18–50
- **Profile:** People who need fast delivery or drone-specific services, have no drone experience, and want zero involvement in the operation
- **Primary emotional driver:** **Trust** — they are handing control of a situation to a stranger with a flying machine
- **Trust signals:** operator verification, insurance coverage, transparent pricing, live tracking

---

## MVP Services

| # | Service | Description |
|---|---|---|
| 1 | Aerial photo/video | Events, real estate listings, personal occasions |
| 2 | Package delivery | Parcels, documents, small goods |
| 3 | Inspection | Roofs, facades, hard-to-reach structures |

---

## Post-MVP Services

- Agricultural spraying / aerial imaging
- Advertising (banner towing, projection)
- Wall art / street art application
- Search and rescue support

---

## User Types

### 1. Client (end user)
- Orders services, tracks execution, receives results
- **Mobile:** follows Apple Human Interface Guidelines; typeface — SF (San Francisco)
- **Desktop:** WCAG 2.1 AA compliant

### 2. Operator
- Manages incoming orders, updates job status, logs results
- **SRM (Service Resource Management dashboard)** — included in MVP
- WCAG 2.1 AA compliant

---

## Core User Flow (Client)

```
Choose service → Enter details → See price → Pay → Track → Receive result
```

---

## Platform

- **Primary:** Mobile web (mobile-first)
- **Secondary:** Desktop (responsive)
- No native app in MVP

---

## Registration

- Diia (Ukrainian national digital ID)
- Bank ID

---

## Payment

- Online only
- Card (Visa / Mastercard)
- Apple Pay, Google Pay

---

## Interface Languages

Ukrainian (primary), English

---

## Brand & Visual Direction

**Tone:** Futuristic, technological, precise — not cold. Confident and trustworthy.

**References:**
- [FlowTune SaaS Dashboard](https://www.behance.net/gallery/224486039/FlowTune-SaaS-UX-UI-Design-Dashboard) — layout density, UI maturity
- [DJI EXPRESS UAV](https://www.behance.net/gallery/128298353/DJI-EXPRESS-UAV-DESIGN) — drone-native visual language
- [Solva Air Brand Identity](https://www.behance.net/gallery/249168149/Solva-Air-Airline-Brand-Identity-Pitch-Deck) — air/motion brand confidence
- [Designer's own Figma](https://www.figma.com/design/UGs4fj1HJxR26uT7f4f37g/MY-PROJECTS?node-id=795-49963) — personal visual reference

---

## Design Standards

| Surface | Standard |
|---|---|
| Mobile (client) | Apple Human Interface Guidelines |
| Desktop (client) | WCAG 2.1 AA |
| Operator SRM | WCAG 2.1 AA |

---

## Working Process

1. Research → `research/`
2. Wireframes → `wireframes/`
3. Concept → `concept/`
4. Tokens → `tokens/`
5. Components → `components/`
6. Design system → `design-system/`
7. Handoff → `handoff/`

---

## Design Focus — Research Conclusions

**Primary persona — C-1:** Urban Ukraine, first-time drone user, Bolt/Glovo mental model. If the experience diverges from that model in the first 60 seconds, they leave. Trust anxiety is twofold: the drone itself (noise, privacy, safety) precedes anxiety about the operator.

**Main job (MJ-1):** Hand the job to a certified professional without managing anything — get the outcome without thinking about the drone or the operator.

**Top-3 jobs for MVP core:**
1. **RJ-C1** — Confirm the operator is real and qualified: verified badge + insurance visible on the list card, no tap required. Highest single drop-off in the CJM.
2. **RJ-C2** — Close the void between payment and arrival: operator name + photo + live map on the confirmation screen. No generic "order received" state.
3. **RJ-O3** — Operator gets paid automatically after job close: auto-release to wallet within 30 min of client confirmation. Fastest churn trigger if absent.

Sources: `research/target-audience.md`, `research/jtbd.md`

---

## Information Architecture

**Sources of truth:** `sitemap.md` (entities, screens, navigation, traceability), `flows.md` (Mermaid user flows). Rendered at `ia.html`.

**Top-level sitemap (per persona, grouped by human logic, not site sections):**
- **Client:** Getting in → Ordering the job → The wait → The outcome → Coming back → When it goes wrong
- **Operator:** Getting in (verify) → Ready to work → Taking a job → Doing the job → Getting paid & standing

**Main flow — Client (MJ-1):** Choose service → Order setup + price → Pay → Operator revealed + live tracking → Result → Rate.
**Main flow — Operator (MJ-2 + RJ-O3):** Accept job → Checklist → Upload result → Client confirms → Paid to balance → Withdraw (card instant / bank 1-3 days).

**Global navigation (3 job-clusters + account utility):**
- **Client:** Order · Activity · Help · Account
- **Operator:** Jobs · Earnings · Ratings · Account

**Depth to main job (primary personas):** Client C-1 = 3 taps (2 via "Book again"); Operator O-1 = 1 tap to accept, payment auto-released (depth-0).

Sources: `sitemap.md`, `flows.md`, `ia.html`

---

## Wireframes

**Location:** `wireframes/`. A **grayscale, clickable wireframe prototype** — the step-2 deliverable of the
working process. It proves **structure, hierarchy, zones and flow**, never looks.

**Scope (built):** **80 HTML pages** covering **every** screen in `sitemap.md` `§6.0/§6.1/§6.2` plus each
screen's real states (`empty` / `error` / `loading` / success) from the `_screens.md` matrix — both main happy
paths (Client MJ-1, Operator MJ-2 + RJ-O3) and every recovery, onboarding and EJ-2 resolution branch. Screens
are wired into a walkable prototype along `flows.md`; a shared shell (`_wf-shell.js`) injects a left screen-map
tree and a mobile/tablet/desktop viewport switcher on every page.

**Sources of truth (read before touching any page):**
- `wireframes/_conventions.md` — the contract: grayscale palette, San Francisco type, 8px grid, semantic HTML,
  button/state rules, and the screen→file map (§12). A page is "done" only when it passes its checklist.
- `wireframes/_screens.md` — which screens exist and which of the four states is real per screen (the matrix).
- `wireframes/_critique.md` — the audit & fix log.

**Rules (do not violate):**
- **Grayscale only** — no colour, shadow, icon, imagery, brand, or final type scale (all deferred). Media/icons
  are uppercase text-label placeholders in bordered boxes (e.g. `MAP`, `OPERATOR PHOTO`, `LICENCE`).
- **San Francisco** system-font stack; **English** copy; real domain text, never lorem.
- **One page per state.** Base file = normal/success; `-empty` / `-error` / `-loading` are separate files with the
  same structure. A state exists **only** where a `flows.md` node produces it — do not invent screens or states.
- **No dead-ends** — every empty/error screen has a visible exit (recovery / retry / support).
- Files are named lowercase-latin kebab-case; new pages link `_wireframe.css` + `_wf-shell.js` and are registered
  in the shell's nav tree.
- `.md` is the source of truth here too: update `_screens.md` / `_conventions.md` **before** adding HTML.

---

## Content Rules

**Single source of truth: `.md` files.**
All project content — research findings, personas, user stories, decisions, annotations — lives in `.md` files.
HTML files are a read-only display layer generated from `.md` content. Never write or update information directly in HTML.

When content changes:
1. Update the `.md` file first.
2. Reflect the change in HTML only after the `.md` is updated.

**All file contents must be written in English.**
