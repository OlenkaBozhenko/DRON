# DRON

Drone-as-a-service platform — clients order drone services, certified operators handle everything.

**MVP services:** aerial photo/video · package delivery · building inspection
**Audience:** 18–50, Ukraine + Europe, mobile-first, trust-driven
**Brief:** see [`CLAUDE.md`](CLAUDE.md)
**Visual preview:** [research.html](https://OlenkaBozhenko.github.io/DRON/research.html)

---

Design repository — research, wireframes, tokens, components, and handoff materials.

**[→ Live research report](https://OlenkaBozhenko.github.io/DRON/research.html)**

---

## Structure

| Folder | What lives here | Status |
|---|---|---|
| [`research/`](research/) | Research notes, competitive analysis, user insights | 🔄 In progress |
| [`research/screens/`](research/screens/) | Reference screenshots and visual inspiration | 🔄 In progress |
| [`wireframes/`](wireframes/) | Grayscale clickable wireframe prototype — every sitemap screen + its real states | ✅ Clickable prototype |
| [`concept/`](concept/) | Visual concepts and moodboards | ⬜ Not started |
| [`tokens/`](tokens/) | Design tokens (color, type, spacing, etc.) | ⬜ Not started |
| [`components/`](components/) | Component specs and documentation | ⬜ Not started |
| [`design-system/`](design-system/) | Design system guidelines and structure | ⬜ Not started |
| [`handoff/`](handoff/) | Dev-ready specs, redlines, exported assets | ⬜ Not started |

**Status legend:** ✅ Done · 🔄 In progress · ⬜ Not started

---

## Research

- [`research/research.md`](research/research.md) — competitive analysis, benchmark study, post-persona findings
- [research.html — live report](https://OlenkaBozhenko.github.io/DRON/research.html)

---

## People

| File | What lives here |
|---|---|
| [`research/target-audience.md`](research/target-audience.md) | 4 personas: C-1 (primary client), C-2 (planning client), O-1 (primary operator), O-2 (new operator). Each has context, jobs, pains, trust triggers. Includes post-research updates June 2026 and 10 honest knowledge gaps. |
| [`research/jtbd.md`](research/jtbd.md) | JTBD hierarchy: 2 main jobs, 8 related jobs, 3 emotional, 1 social, 3 hypotheses. Matrix with importance scores by persona and competitive coverage. Conclusions: 3 core MVP jobs, 2 features to cut, 1 critical missing gap (EJ-2 dispute flow). |

**[→ Live personas & JTBD](https://OlenkaBozhenko.github.io/DRON/target-audience.html)**

---

## Information Architecture

| File | What lives here |
|---|---|
| [`sitemap.md`](sitemap.md) | Product entities (Client & Operator), the screen tree with the job each screen serves, the navigation model (global / contextual / deep + depth to main job), and the traceability matrix (jobs × screens) with orphan verdicts. |
| [`flows.md`](flows.md) | 11 Mermaid user flows, one per job, for both personas. Each flow shows decisions, states (empty / error / loading) and both ends — success and dead-ends. |

**[→ Live IA: sitemap & flows](https://OlenkaBozhenko.github.io/DRON/ia.html)**

---

## Wireframes

A **grayscale, clickable wireframe prototype** in [`wireframes/`](wireframes/) — mobile-first (375 × 812),
San Francisco system font, English copy, no colour / shadow / icon / imagery (deferred). It proves
**structure, hierarchy, zones and flow**, not looks. **80 HTML pages** cover **every** screen in
[`sitemap.md`](sitemap.md) `§6.0/§6.1/§6.2` plus each screen's real states (`empty` / `error` / `loading`)
from the [`_screens.md`](wireframes/_screens.md) matrix — the two main happy paths (Client MJ-1, Operator
MJ-2 + RJ-O3) and every recovery / onboarding / EJ-2 resolution branch. Screens are wired into a walkable
prototype along [`flows.md`](flows.md): a shared shell injects a left **screen-map tree** and a
mobile/tablet/desktop **viewport switcher** on every page.

| File | What lives here |
|---|---|
| [`wireframes/_conventions.md`](wireframes/_conventions.md) | The contract every page obeys — grayscale palette, SF type, 8px grid, semantic HTML, button/state rules, and the screen→file map (§12). |
| [`wireframes/_screens.md`](wireframes/_screens.md) | Which screens exist and which of the four states (empty/error/loading/success) is real per screen — the state matrix. |
| [`wireframes/_critique.md`](wireframes/_critique.md) | Audit & fix log — what was checked (shadows, placeholders, missing states, dead-ends, off-map) and what was fixed. |
| `wireframes/_wireframe.css` · `_wf-shell.js` | Shared stylesheet + shared shell (nav tree + viewport switcher). |

**Rules:** `.md` files are the source of truth; the HTML is a display layer. All copy is English; states only
exist where a `flows.md` node produces them; every empty/error screen has a visible exit (no dead-ends).

---

## Concept

The **visual language**, chosen and built out. The single source of truth is
[`concept/concept.md`](concept/concept.md); the live testbed is
[`concept/concept.html`](concept/concept.html), where every token, component and image is shown at
production size with its contrast measured on the page.

**Direction 02 «Studio»** is the chosen tuning of the Fauna Robotics language: warm `#F7F5F2` page,
`#ECE9E4` grey cards, SF Pro, flat outline icons on a 24-grid at 1.7px, rounded-rect buttons.

| Rule | What it means in practice |
|---|---|
| **One accent, fill only** | Signal Green `#9BCF4A` is a fill or a tint, **never text and never an icon stroke** — raw green is 1.52:1 on a card. Anything sitting on green is charcoal: 9.46:1 on the fill, 14.75:1 on the tint. |
| **~One green element per screen** | The primary CTA, *or* the active status node, *or* the verified badge — not all three loud at once. Green stays ≤ ~5% of pixels and is never spent inside card UI. |
| **Every pair is measured** | A new colour/background pair is not used until its ratio is computed and written down. §07 of `concept.html` is the standing contrast table. Zero text-contrast failures across the four painted surfaces. |
| **Surfaces are flat** | No card and no media well casts a shadow — separation is warm tone plus the 16px radius (`#ECE9E4` on `#F7F5F2` is a real 1.11:1 step). Exactly two shadows are spent: `--sh-sm` under the green primary, and `--sh-onphoto` under a chip floating over a photograph, where it is legibility rather than decoration. |
| **A closed ramp of six radii** | `10` input · `12` button · `13` media · `16` card · `22` panel · `999` pill. A shape that is none of these is a shape nobody chose. |
| **Ten type steps, all in use** | The scale describes the product rather than preceding it: `22` display · `20` number · `17` title · `15` heading · `14` body · `13` body-sm · `12.5` meta · `12` caption · `11` micro · `10.5` micro-sm. |
| **Imagery is real, never decoration** | Drone renders (`assets/drones/`), people (`assets/people/`), scenes and the live map (`assets/scenes/`, `assets/map/`). A transparent cutout sits *in* a well and is contained; a photograph *is* the surface and covers it. In the product a cutout has no well at all — it sits straight on the card. Pages serve a `thumbs/` copy at ~2× the CSS box; the master stays in the repo. |
| **Icons are one system** | Flat outline, 24-grid, `stroke-width:1.7` declared **once**, `currentColor`, no fill. The rendered line follows the box — 0.85 at 12px, 2.27 at 32px — the way SF Symbols scales weight; no glyph compensates its stroke. Active / done is a green shape *behind* a charcoal glyph. |
| **States are built, not dimmed** | Disabled is `--disabled-bg` / `--disabled-ink` — the secondary button's own pair at 4.77:1 — never a blanket opacity, which silently drops charcoal-on-green to 2.35:1. |

**Applied to product surfaces:** [`order-history`](wireframes/order-history.html),
[`tracking`](wireframes/tracking.html) and [`delivery`](wireframes/delivery.html) (with their states)
carry the Studio layer. Each family shares one byte-identical `<style>` block, so every repeat of a
component holds the same values. The whole set is audited against `concept.md` and the findings
are closed in the change log, most recently rev 39.

**Change log:** `concept.md` records every revision, including the ones that were tried and reverted —
so a rejected idea is not re-proposed later as a new one.

---

## Voice

How the product speaks. The single source of truth is [`voice.md`](voice.md), rendered as a page at
[`tone-of-voice.html`](tone-of-voice.html) (linked in every sidebar; a **Tone of voice** button on the
wireframe toolbar opens it in a right-hand drawer). Every product string is written against `voice.md` and
inventoried in [`microcopy.md`](microcopy.md).

**Stance:** trust beats wit — calm, specific, accountable. Facts not adjectives, outcomes not equipment.

| File | What lives here |
|---|---|
| [`voice.md`](voice.md) | The rules: 5 principles, the vocabulary (one word per concept), the "Don't use" list, per-element microcopy rules, and GEO/SEO. |
| [`microcopy.md`](microcopy.md) | Every UI string across all screens (master table), the rewrite logs, and the audit — the inventory each string is checked against. |
| [`tone-of-voice.html`](tone-of-voice.html) | `voice.md` rendered as a readable page (in every sidebar + the wireframe drawer). |

**Five principles:** name the outcome not the drone · show the proof not the adjective · price as a fact before
the tap · the user's words not the equipment · in trouble, plain and accountable not cheery.
**One word per concept:** operator (not "pilot"), order (client) / job (operator), issue / dispute,
delivery photo / inspection report, Withdraw, Sign in, Contact support, Try again, Add…, View details.

---

## Working process

1. Research → `research/`
2. Wireframes → `wireframes/`
3. Concept → `concept/`
4. Token decisions → `tokens/`
5. Components → `components/`
6. Design system → `design-system/`
7. Handoff → `handoff/`
