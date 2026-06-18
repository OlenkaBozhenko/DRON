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

## Content Rules

**Single source of truth: `.md` files.**
All project content — research findings, personas, user stories, decisions, annotations — lives in `.md` files.
HTML files are a read-only display layer generated from `.md` content. Never write or update information directly in HTML.

When content changes:
1. Update the `.md` file first.
2. Reflect the change in HTML only after the `.md` is updated.

**All file contents must be written in English.**
