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
| 3 | Inspection | Fields (first, by priority), roofs, facades, hard-to-reach structures |

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

**Scope (built):** **134 HTML pages** — 131 screen-and-state pages plus 3 option partials; **53 screens**
once states and the `-aerial` / `-inspection` per-service variants are collapsed (re-counted off the
filesystem 2026-09-14 with *Results on the map*, `listings-map` + its two service files, `concept.md` rev 250;
before that 2026-09-01 with the two `notifications` alert logs, `concept.md` rev 211. **The 120 / 117 / 50 this line carried had already
drifted before that pass** — the directory held 126 pages when it was read, so the page figures are
re-counted off the filesystem rather than incremented, and every one of the 128 is registered in the
shell's `TREE` with no orphan either way, verified) — covering **every** screen in `sitemap.md` `§6.0/§6.1/§6.2` plus each
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

### The design system is one package (2026-10-14)

**`design-system/` is the package, and [`design-system/index.css`](design-system/index.css) is its one
entry point.** It imports `tokens.css` and then `components/index.css`, in that order, which is the
cascade every page resolved before the move. Every consumer links that single file: all wireframes,
`ui/shell.html`, `ui/kit.html` and `design-system.html`. Nothing outside `design-system/` links a
token or component file directly.

```
design-system/
  index.css            the entry point
  tokens.css           every value (moved from the repo root with git mv)
  components/          one file per component (moved from the repo root with git mv)
  patterns/            one .md per pattern: a composition that stands on 3+ screens (2026-10-17)
  docs/                the component and pattern pages, generated by docs/build.py
  examples/            part of the package, empty for now
```

**[`design-system.html`](design-system.html) is the design system's page**, linked from the sidebar of
`research.html` and the other hub pages. It holds no copy of anything: on load it follows the
`@import` tree from `index.css`, reads the token sections and comments from `tokens.css`, resolves
every value in the selected theme and measures ink contrast live. A change in `design-system/` shows
there on the next load. A new file reaches the page by being imported from `index.css`.

The move was measured as a refactor: every page computes identically before and after, light and
dark, at 1280 and at 380. Asset `url()`s in the package went one level deeper (`../../assets/`).

**Component docs — `design-system/docs/` (2026-10-14).** One page per component (61) plus
`index.html` (the showcase) and `why.html` (where the visual language came from — the first page for
a new developer). Each component page has five parts: anatomy (the live component with numbered
pins measured onto its parts), variants and sizes, states (rest, hover, pressed, focus and disabled,
light beside dark, forced from the components' own CSS by a generated `docs/states.css`; a
component that takes no focus carries a note instead), when to use, and rule / anti-rule. **The source is
`docs/src/<slug>.md`; the HTML is generated** by `python design-system/docs/build.py` and is never
edited by hand. Every specimen is live markup under `design-system/index.css` — the same link the
product uses — and the build refuses a `dr-*` class no component declares, so the showcase cannot
show a component the system does not have. `src/_PAGES.md` is the fixed page list, including which
inventory rows are deliberately not pages (grayscale-only, or retired like the segmented control).
When a component changes, edit its `src/*.md` specimen alongside `ui/kit.html` and the screens, then
rebuild.

**Patterns — `design-system/patterns/` (2026-10-17).** A pattern is a fixed composition of components
that already stands on three or more screens; it has no CSS and no class of its own. Eight were found by
reading every wireframe: Pushed screen, Tab root (and its floating-action variant), Whole-screen message,
Outcome with its record, Waiting outcome, Labelled detail rows, Labelled card list, Balance first. Each is
one `patterns/<slug>.md` whose specimen is copied from a named screen; `docs/patterns.html` draws them all,
with `docs/src/patterns.md` saying when to take a pattern and when to build from components. **The build
holds the three-screen rule:** every screen a pattern names must exist and still carry the classes in its
`requires`, and the names must reach three screens once state and service files are folded into their
screen. Do not add a pattern that cannot name three screens.

### Tokens — where a value lives and where a change goes (revised 2026-10-10)

**A value now lives in [`design-system/tokens.css`](design-system/tokens.css), and it is edited at the tier that owns it.**
Two tiers and one rule each:

- **PRIMITIVE** — a raw value that knows no job (`--cream-200`, `--len-16`). Edit here only to
  change the value itself, everywhere it is spent at once. A new primitive is a new value in the
  palette and is the designer's call, not a side effect of a component needing one.
- **SEMANTIC** — a role pointing at a primitive (`--bg-surface`, `--text-muted`, `--color-action`).
  Edit here to change what a *job* looks like. **Colour reaches a component only through this
  tier** — a component that reads a primitive, or paints a ground with an ink role, is a defect,
  and the `[data-theme="dark"]` block exists to make that kind of defect visible.
- **Type is semantic (designer's rule, 2026-10-14).** Every font property in a component — family,
  size, weight, leading, tracking — reads a role: `--font-ui` / `--font-mono` and
  `--type-{step}-{size|weight|line|track}` for the ten steps plus `lead`, `base`, `para`, `act`,
  `lang` and `--type-weight-regular|medium`. The roles are kit.css's own `--t-*` names, restored per
  selector from the archive; the raw stacks are the primitives `--family-sf` / `--family-mono`. A
  component that writes `font-size: var(--len-15)` is now a defect, and so is a literal case,
  figure style or line box: `--type-micro-case`, `--type-numeric`, `--type-glyph-line`,
  `--type-tab-line`, `--type-hidden-*` carry those. The one exception is the keyword `inherit`
  (`.dr-fchip`): a custom property set to `inherit` inherits the parent's *variable*, not its
  line-height, so it cannot be tokenised without changing the result. No step is below HIG's 11pt
  since micro-sm went 10.5 → 11 (2026-10-14). `design-system.html` draws every step live.
- **Other geometry gets no semantic tier on purpose.** A component reads `--len-*` / `--pct-*` / `--num-*`
  directly, because space, radius and size share their numbers and a second name for one number is
  the drift `tokens.css` closes.

- **Shadow follows geometry, not colour.** A shadow holds an `rgba` and so looks like colour, but
  here it is *depth*: there are four declared rungs, two are spent, and a component picks the one
  its elevation calls for the way it picks a `--len-*`. There is **no semantic shadow tier and
  that is the rule** — the seven components reading `--shadow-sm` / `--shadow-raised` directly are
  correct. Written down 2026-10-10 because the audit had to infer it from an absence.

- **A percentage is a length and comes from `--pct-*`.** Two exceptions, both deliberate: a
  **keyframe stop** (`0%`, `55%`) is a selector naming a moment, and a **`color-mix()` ratio** is a
  proportion — neither is a length and neither takes a token. 70 literal percentages were
  converted on 2026-10-10 and 24 of 24 page snapshots stayed identical.

**A change of MARKUP goes to two places and both are required:** the specimen in
[`ui/kit.html`](ui/kit.html), and every screen in `wireframes/` where the component actually
stands. A component that changes shape in the showcase and not on the screens is a showcase that
lies; a component that changes on one screen and not in the showcase is a component nobody can
find. `design-system/_critique.md` §10 is what that costs when it is skipped.

**`design-system/components/*.css` is where a RULE goes** — one file per component, no second home for a class,
and no hex, no px and no font name written into it. If a value is needed that no token carries,
the token comes first.

**`ui/kit.css` is the archive.** No page links it. It holds the reasoning for every value, and it
is the reference every "did this change the rendering" check is measured against.

**Direction 02 «Studio»** is the chosen tuning of the Fauna Robotics language: warm `#F7F5F2` page,
`#ECE9E4` grey cards, SF Pro, flat outline icons on a 24-grid at 1.7px, rounded-rect buttons.

| Rule | What it means in practice |
|---|---|
| **One accent, fill only** | Signal Green `#9BCF4A` is a fill or a tint, **never text and never an icon stroke** — raw green is 1.52:1 on a card. Anything sitting on green is charcoal: 9.46:1 on the fill, 14.75:1 on the tint. **One scoped departure, 2026-09-25, the designer's call:** in the dark build the mark on `wallet`'s balance plate IS green — the rule exists because green as a stroke fails `WCAG 1.4.11` at 1.52:1 on a light card, and on the dark tint the same green measures **5.82:1**, so the failure it prevents cannot happen there. Light keeps charcoal. `tokens.css` `--on-glyph-plate` carries both. |
| **One green control per screen, ≤ ~5% of the frame** | Measured on the build, not asserted: solid green covers **4.43% / 5.09% / 4.71%** of `order-history` / `tracking` / `delivery`, and the primary CTA is **81–100%** of it. Exactly one green *control* — status marks may also be solid green, being under 6% of the screen's green; the `--green-wash` tint is not counted, at 1.085:1 against the page. Green is never spent inside card UI. |
| **Every pair is measured** | A new colour/background pair is not used until its ratio is computed and written down. §07 of `concept.html` is the standing contrast table. Zero text-contrast failures across the four painted surfaces. |
| **Surfaces are flat** | No card, no media well and no photograph casts a shadow — separation is warm tone plus the 16px radius (`#ECE9E4` on `#F7F5F2` is a real 1.11:1 step). **Two rungs are spent, and only on things that genuinely float** (re-counted 2026-08-16 by reading every `box-shadow` in `ui/kit.css`, `concept.md` rev 153): `--sh-sm` under the green primary — block primary, circular primary, pressed language toggle — and `--sh-raised` under `.dr-sheet` and `.dr-toast`. The flat rule is about cards sitting *in* the page, which is why a drawer and a toast do not break it. `--sh-card` and `--sh-onphoto` are still declared rungs applied to nothing — `--sh-onphoto` is held for the first chip that actually floats over a photograph, and is spent nowhere. |
| **A closed ramp of six radii** | `10` input · `12` button · `13` media · `16` card · `22` panel · `999` pill. A shape that is none of these is a shape nobody chose. |
| **Ten type steps, all in use** | The scale describes the product rather than preceding it: `22` display · `20` number · `17` title · `15` heading · `14` body · `13` body-sm · `12.5` meta · `12` caption · `11` micro · `11` micro-sm (10.5 until 2026-10-14, raised to HIG's 11pt floor; every step is a `--type-*` token). |
| **Imagery is real, never decoration** | Drone renders (`assets/drones/`), people (`assets/people/`), scenes and the live map (`assets/scenes/`, `assets/map/`). A transparent cutout sits *in* a well and is contained; a photograph *is* the surface and covers it. In the product a cutout has no well at all — it sits straight on the card. Pages serve a `thumbs/` copy at ~2× the CSS box; the master stays in the repo. |
| **Icons are one system** | Flat outline, 24-grid, `stroke-width:1.7` declared **once**, `currentColor`, no fill. The rendered line follows the box — 0.85 at 12px, 2.27 at 32px — the way SF Symbols scales weight; no glyph compensates its stroke. Active / done is a green shape *behind* a charcoal glyph. |
| **States are built, not dimmed** | Disabled is its own solid colour, never a blanket opacity. Since rev 294 (the designer's call) that colour is the faded look painted solid: `--bg-disabled-action` pale green #D2E6AF for the primary, `--bg-disabled` #EAE7E2 for the rest, label #9F9D9C (2.01 / 2.18:1, exempt under `WCAG 1.4.3`). |

**Applied to product surfaces:** **30 screens across 76 files** carry the Studio layer — the whole
client side, from [`listings`](wireframes/listings.html) through
[`order-history`](wireframes/order-history.html), [`tracking`](wireframes/tracking.html),
[`delivery`](wireframes/delivery.html) and their states. The remaining **19 screens** — every
operator screen plus client entry — are still grayscale. **The per-page `<style>` block is gone:**
every page links one shared stylesheet, so a component cannot drift between two screens by being
pasted twice. **Since 2026-09-24 that stylesheet is the token + component layer and not `ui/kit.css`;
since 2026-10-14 pages reach it through [`design-system/index.css`](design-system/index.css)** — all 127 pages were moved onto the token + component layer
(`tokens.css` + 31 component files). `ui/kit.css` is kept, unlinked, as the archive of why every
value is what it is. The move was a refactor and is measured as one: every page computes
identically under both stylesheets — every box and 151 properties per element, at 1280 and at 380,
with drawers, keyboards and pressed states open. Four gaps were found that way and all four were
closed in `components/`, never in a frame. **No screen carries CSS of its own any more**
(2026-10-10 audit): the three option partials `_checkbox-options`, `_field-options` and
`_navbar-options` keep a `<style>` block, and they are specimens rather than screens. The claim
this line used to make — *three pages, only one alive* — was measured false. Eleven pages held a
block; `account` and `operator-account` were genuinely dead (0 computed differences when disabled)
and were deleted; `switch-role`'s two live rules moved to `components/avatar.css`; and the four
`listings*` pages plus `operator-listings` were not leftovers at all — **they did not link
`_wireframe.css` and carried ~11.7KB of it inline instead**, which is why one rule in each, the
universal reset, still bit. They link the shared file now. The set is audited against `concept.md` and the findings are closed in the change log,
most recently **rev 153** — the sweep that read the built frames back into `concept.md`,
`DESIGN.md` and the UI kit, and found a whole component (`delivery-aerial`'s photo pile) that had
been built into a page without ever reaching a document.

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

**Back buttons (Apple HIG, mobile client):** **the back control carries no words — it is the chevron icon alone** (designer's rule 2026-08-16, `microcopy.md` **D9**, superseding D1/D8: one bar, one name, and the only name in the nav bar is the title of the screen you are on). It still takes `aria-label="Back to {destination}"`, since an icon-only control with no accessible name fails `WCAG 4.1.2`; invisible, that name neither competes with the title nor engages `WCAG 2.5.3`. So `Back to…` is right as an accessible name and forbidden as visible copy. Tab-root screens have no back.

---

## Content Rules

**Single source of truth: `.md` files.**
All project content — research findings, personas, user stories, decisions, annotations — lives in `.md` files.
HTML files are a read-only display layer generated from `.md` content. Never write or update information directly in HTML.

When content changes:
1. Update the `.md` file first.
2. Reflect the change in HTML only after the `.md` is updated.

**All file contents must be written in English.**
