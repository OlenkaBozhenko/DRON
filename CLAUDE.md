# DRON — Project Brief

## Overview

**Product:** DRON — a drone-as-a-service platform connecting clients with professional drone operators.
**Tagline:** People order a service, a certified operator handles everything with their drone.
**Core insight:** Users have never operated a drone and never will — they want a trusted professional to do it for them.

**Main page:** When the user refers to "the main page" / "home page" / "Головна", they mean **`research.html`** (repo root). It is the project's landing/hub page. The wireframe shell's "Back to DRON" button links here (`../research.html`).

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

English (primary), Ukrainian (secondary)

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

### The conformance check (standing rule, set by the designer 2026-08-01)

**Every design decision is checked against HIG and WCAG before it is written down or built** —
a colour pair, a type size, a touch target, a state indicator, a focus ring, a motion loop, a
control's height. Not only new work: an existing value being documented gets the same check.

**Every question put to the designer opens with the standards, before the options — not only when
something fails.** If she is being asked to decide, she gets what HIG and WCAG say about it first,
so the choice is made against the rule rather than against an opinion. And when a decision does not
conform, it is neither silently fixed nor silently kept: it is reported the same way. Where both
options conform, say so plainly — that is an answer, not a gap. The report carries, in this order:

1. **What is built** — the element, the exact value, the measured result (ratio, px, pt).
2. **What the guideline prescribes** — the named criterion (`HIG · Tab bars`, `WCAG 1.4.3`,
   `WCAG 1.4.11`, `WCAG 2.4.11`, `HIG · 44pt target`), and what it says in one line.
3. **Whether it passes, and by how much** — a number, never "looks fine".
4. **The options**, each with its consequence — including keeping it as built.

Where the two standards pull apart, or where a project rule (`concept.md` §0 Designer's Taste,
the fill-only accent) makes the literal guideline impossible, say so plainly and give the reading
that satisfies both — the way the selected tab carries the accent as a **fill behind charcoal**
instead of as a tinted label, because `#9BCF4A` as text is 1.69:1 and HIG's tint pattern would
fail AA.

**A conforming departure is recorded, not corrected.** Outline-only icons on the selected tab
depart from the iOS filled-symbol convention by a deliberate `concept.md` §5 rule; that is
documented as a decision with its reason, not filed as a defect.

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

## Concept

The **visual language**, chosen and built out. The single source of truth is
[`concept/concept.md`](concept/concept.md); the live testbed is
[`concept/concept.html`](concept/concept.html), where every token, component and image is shown at
production size with its contrast measured on the page.

**[`DESIGN.md`](DESIGN.md) at the repo root is the token-level spec**, extracted from the ten
painted product pages and verified by computed style in a browser — palette with every measured
ratio, the ten type steps, the six radii, the spacing scale, the component set, imagery, and the
do's and don'ts. It is generated *from* the wireframes, so it follows them: the designer edits the
frames by hand, and where a document disagrees with a frame, the document is corrected. `concept.md`
carries the reasoning and the history; `DESIGN.md` carries the values. A machine-readable copy for
tooling sits at `.impeccable/design.json`.

**Direction 02 «Studio»** is the chosen tuning of the Fauna Robotics language: warm `#F7F5F2` page,
`#ECE9E4` grey cards, SF Pro, flat outline icons on a 24-grid at 1.7px, rounded-rect buttons.

| Rule | What it means in practice |
|---|---|
| **One accent, fill only** | Signal Green `#9BCF4A` is a fill or a tint, **never text and never an icon stroke** — raw green is 1.52:1 on a card. Anything sitting on green is charcoal: 9.46:1 on the fill, 14.75:1 on the tint. |
| **One green control per screen, ≤ ~5% of the frame** | Measured on the build, not asserted: solid green covers **4.43% / 5.09% / 4.71%** of `order-history` / `tracking` / `delivery`, and the primary CTA is **81–100%** of it. Exactly one green *control* — status marks may also be solid green, being under 6% of the screen's green; the `--green-wash` tint is not counted, at 1.085:1 against the page. Green is never spent inside card UI. |
| **Every pair is measured** | A new colour/background pair is not used until its ratio is computed and written down. §07 of `concept.html` is the standing contrast table. Zero text-contrast failures across the four painted surfaces. |
| **Surfaces are flat** | No card and no media well casts a shadow — separation is warm tone plus the 16px radius (`#ECE9E4` on `#F7F5F2` is a real 1.11:1 step). **Exactly one shadow is spent on a product surface:** `--sh-sm` under the green primary. `--sh-card`, `--sh-raised` and `--sh-onphoto` are declared rungs applied to nothing — `--sh-onphoto` is a `concept.html` token held for the first chip that actually floats over a photograph, and appears on none of the ten painted pages. |
| **A closed ramp of six radii** | `10` input · `12` button · `13` media · `16` card · `22` panel · `999` pill. A shape that is none of these is a shape nobody chose. |
| **Ten type steps, all in use** | The scale describes the product rather than preceding it: `22` display · `20` number · `17` title · `15` heading · `14` body · `13` body-sm · `12.5` meta · `12` caption · `11` micro · `10.5` micro-sm. |
| **Imagery is real, never decoration** | Drone renders (`assets/drones/`), people (`assets/people/`), scenes and the live map (`assets/scenes/`, `assets/map/`). A transparent cutout sits *in* a well and is contained; a photograph *is* the surface and covers it. In the product a cutout has no well at all — it sits straight on the card. Pages serve a `thumbs/` copy at ~2× the CSS box; the master stays in the repo. |
| **Icons are one system** | Flat outline, 24-grid, `stroke-width:1.7` declared **once**, `currentColor`, no fill. The rendered line follows the box — 0.85 at 12px, 2.27 at 32px — the way SF Symbols scales weight; no glyph compensates its stroke. Active / done is a green shape *behind* a charcoal glyph. |
| **States are built, not dimmed** | Disabled is `--disabled-bg` / `--disabled-ink` — the secondary button's own pair at 4.77:1 — never a blanket opacity, which silently drops charcoal-on-green to 2.35:1. |

**Applied to product surfaces:** [`order-history`](wireframes/order-history.html),
[`tracking`](wireframes/tracking.html) and [`delivery`](wireframes/delivery.html) (with their states)
carry the Studio layer. Each family shares one byte-identical `<style>` block, so every repeat of a
component holds the same values. The whole set is audited against `concept.md` and the findings
are closed in the change log, most recently rev 42 — the pass that wrote `DESIGN.md` and corrected
`concept.md` to match the frames.

**Change log:** `concept.md` records every revision, including the ones that were tried and reverted —
so a rejected idea is not re-proposed later as a new one.

---

## Voice (Голос)

**How the product speaks. Single source of truth: `voice.md`.** Rendered at `tone-of-voice.html` (linked in every page's sidebar; a "Tone of voice" button on the wireframe toolbar opens it in a right-hand drawer). Every product string is written and checked against `voice.md`, and inventoried in `microcopy.md` (master table + rewrite logs + audit).

**Stance:** trust beats wit. Calm, specific, accountable — facts not adjectives, outcomes not equipment; in trouble, state what happened and what it costs the user. Not advertising.

**Five principles:** (P1) name the outcome, not the drone; (P2) show the proof, not the adjective; (P3) state the price as a fact, before the tap; (P4) speak the user's words, not the equipment; (P5) in trouble, be plain and accountable, not cheery.

**Vocabulary — one word per concept:** operator (never "pilot"); client-side work = **order**, operator-side = **job** (never crossed); complaint = **issue** (operator's held case = **dispute**); deliverable = **delivery photo** / **inspection report** (not "result"/"proof"); money out = **Withdraw/withdrawal**, earnings landing = **paid**; entry = **Sign in** (not "Sign up"); receiver = **client** (not "recipient"). Reach a human = **Contact support**; recover from an error = **Try again**; attach = **Add…**; open an order = **View details**. Address the user as **"you"** (UK: «ти»), consistently.

**Never:** clichés ("Oops", "Welcome!", "You're all set"), motivational / journey tone, exclamation marks, emoji in system copy, the word "successfully".

**State tone:** empty → why it's empty + one way out; error → what happened + what to do (no apology, no joke); loading → name what is loading; success → the fact + next step (no celebration).

**Back buttons (Apple HIG, mobile client):** the nav-bar back shows the title of the screen you return to (`‹ Order review`), never "Back to…"; tab-root screens have no back.

---

## Content Rules

**Single source of truth: `.md` files.**
All project content — research findings, personas, user stories, decisions, annotations — lives in `.md` files.
HTML files are a read-only display layer generated from `.md` content. Never write or update information directly in HTML.

When content changes:
1. Update the `.md` file first.
2. Reflect the change in HTML only after the `.md` is updated.

**All file contents must be written in English.**
