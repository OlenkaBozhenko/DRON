# Concept — Visual Language of Trust & Technology

> The real visual language for the trust-and-technology benchmark **already named in `research/research.md`** —
> grounded in live references pulled from the **Refero** design library (MCP: `api.refero.design`).
> No new competitor discovery was done here; this only turns the existing benchmark into a concrete,
> buildable visual direction.
> **Live artifact (DRON):** https://claude.ai/code/artifact/83d92966-72f3-40d4-983f-bb7b03622452
> — self-contained, both themes, live component demos; rebuilt from `concept-artifact.html` and redeployed to the same URL on every change.

**Method.** Two semantic searches against Refero, then full-data extraction of the best hits:
- **Styles** — query: *"warm yet classic, calm and trustworthy, mobile, technological and precise."*
- **Screens** — query: *"verification badge, listing card, order status, order list like taxi apps, reviews, filters"*, platform **mobile (iOS)**.

**Rule followed:** copy no source whole. One style is the **base**; each other source contributes **one named, specific move**
(a card radius, a badge position, an amount of colour) — never a general vibe.

---

## 0. Designer's Taste («Смак дизайнера»)

*The designer's stated taste comes first — every attribute below must agree with it. Likes are drawn from the
designer's own [Notion inspiration board (DRON)](https://app.notion.com/p/DRON-fe8fb552a0084d1796eeb4c92744f02c);
coffee-tech.com is flagged as a strong like. Read on 2026-07-17.*

### Likes (named products, and the exact move to take)

**1. CoffeeTech — [coffee-tech.com](https://www.coffee-tech.com/)** — *the strong like.*
Dark charcoal ground, white text, a single warm accent used sparingly (logo + CTA only), generous whitespace,
**real product photography** (roasters, controlled lighting/depth-of-field) with **no illustration and no gradients**;
minimal-border cards with soft shadow; SVG icons. Mood: *"technical precision meets understated elegance."*
- **Take:** real product photography over decoration · **one** accent used sparingly · minimal-border card + soft shadow · technical-but-warm restraint with lots of whitespace.
- **Don't take:** its **dark-by-default** ground and its **orange** accent — DRON is light-default + green (see tension **A-5**).

**2. Fauna Robotics — [faunarobotics.com](https://faunarobotics.com/)** — *closest to DRON's "trust a machine" job.*
Light ground, charcoal text, a muted (non-aggressive) accent; **real product photography + demo video** of the robot in
action; soft-bordered cards with subtle shadow in a grid; **flat monochromatic icons on every capability heading**;
trust signals via client logos; *"capable, safe, fun — professional yet approachable."*
- **Take:** light ground + charcoal + muted accent = calm/approachable (matches DRON's light theme) · real photo/video of the machine working · **a flat icon per feature** · trust signals shown openly · soft-border card grid.

**3. Boiler Lab — [boilerlab.ai](https://boilerlab.ai/)** — *first item on the board.*
Bold sans headline (*"AI startups at rocket speed"*), **hard-number stat blocks** (*"20M+ users"*), product cards with real screenshots.
- **Take (only):** the bold, quotable headline and **hard numbers as credibility** (aligns with `voice.md` P2 and Competitor Language L-5 — numbers, not adjectives).
- **Don't take:** its dark ground / bright-neon accent / any gradient — those hit the anti-references below.

### Anti-references (what I definitely do not want)

- **Warm cream background paired with terracotta** — the AI-cliché combo. *(Note: DRON's canvas is a warm oat/cream `#efecea`; we stay clear of this only because the accent is green, not terracotta — see tension **A-5**.)*
- **Gradients standing in for photography** — decorative gradient blobs / 3D abstract art instead of real content imagery. Real photos only (this is exactly what CoffeeTech and Fauna do).
- **Screens without icons** — no icon-less text walls; every service, action, and status carries a clear icon.

---

## 0.1 Attributes («Атрибути»)

*3–5 pairs of visual opposites for DRON. Each pair = **[a data line]** + **[a borrowed technique from this concept]**;
a pair without both is fiction. None may contradict §0 (Designer's Taste). Where data and taste pull apart, it is
flagged as a **⚠ tension** for the designer to resolve. (Personas are read from `research/target-audience.md` — there is
no `personas.md`.)*

**A-1 · Calm, not anxious.**
- ← **Data:** `jtbd.md` EJ-1 — feel that handing control is *"safe, not reckless… someone accountable, not just available"*; `target-audience.md` C-1 — Bolt/Glovo model, *"if the experience diverges in the first 60 seconds, they leave,"* plus drone anxiety (noise / privacy / safety); `voice.md` P5 — calm, *"never performs cheerfulness."*
- **Technique:** graft **G-5** (N26 single-accent × Perplexity accent-only-for-active-states) — ~one green element per screen, ~95% oat + charcoal + hairline; Monarch's soft elevation.
- **Taste:** agrees with CoffeeTech / Fauna restraint + whitespace. ✓

**A-2 · Trust proof up front, not buried.**
- ← **Data:** `jtbd.md` RJ-C1 — *"see proof of who will come — credentials, insurance, job history — without digging for it"* (the highest single drop-off in the CJM); `target-audience.md` C-1 trust trigger — *"operator photo + rating visible on the list card without tapping"*; `voice.md` P2 — *show the proof, not the adjective.*
- **Technique:** graft **G-1** (Airbnb) — verified badge **on the avatar** — + **G-2** stat trio (Jobs · Rating · Insured) beside the name, before any tap; reinforced by Fauna's openly-shown trust logos.
- **Taste:** agrees (Fauna surfaces credentials/logos). ✓

**A-3 · Real photograph, not gradient decoration.**
- ← **Data:** §0 anti-reference — *gradients instead of photos = no*; `jtbd.md` RJ-C4 — proof of work is *"a photo, a report, a confirmation"*; `voice.md` P1 — name the real outcome.
- **Technique:** CoffeeTech + Fauna — real photography/video, never illustration or gradient; DRON anchors screens with the operator's **real photo** (G-1) and the **real delivery photo / inspection report** as the outcome — no decorative 3D blobs.
- **Taste:** this pair *is* the anti-reference. ✓ (strongest alignment)

**A-4 · Iconed & scannable, not an icon-less text wall.**
- ← **Data:** §0 anti-reference — *screens without icons = no*; `target-audience.md` C-1 — the icon-driven Bolt/Glovo mental model; `jtbd.md` RJ-O2 field context — gloves + sunlight → large targets, high contrast.
- **Technique:** Fauna — a flat monochromatic icon per capability; CoffeeTech SVG iconography. DRON: a flat icon per service (delivery / photo / inspection) and per status step (the G-3 timeline nodes already carry check-icons).
- **✓ Decided (2026-07-17): build the icon set now** — see **§0.2 Icon set** below. (Was: no icon set defined; wireframes used text placeholders.)

**A-5 · Warm but grounded — not cream-and-terracotta, not cold.**
- ← **Data:** `CLAUDE.md` brand tone — *"technological, precise — not cold. Confident and trustworthy"*; concept base = Monarch warm oat `#efecea`; §0 anti-reference — *warm cream + terracotta = no.*
- **Technique:** Monarch warm-oat canvas + one green accent (fill-only); CoffeeTech's warmth-via-real-photos-plus-one-accent; grounded by Operate's hairline structure + charcoal + tabular numbers.
- **✓ Decided (2026-07-17): ship both light and dark themes** — neither is forced. The app follows the **device appearance** (Apple HIG: respect the system light/dark setting), with a manual toggle; the light theme is the Monarch/Fauna register, the dark theme is the CoffeeTech register. The warm-oat canvas stays (we're clear of the cream+terracotta anti-reference because the accent is green). Both themes are first-class and kept in sync in `tokens/`.

---

## 0.2 Icon set (resolves A-4)

*Decision: build a real icon system now. The style is taken from the taste board — Fauna's "**a flat monochromatic
icon per capability**" (§0). Full spec goes to `components/` / `tokens/`; this is the direction and the inventory.*

### Style
- **Flat, single-weight line (outline) icons**, monochrome. Grid **24×24**, live area 20×20, **stroke 1.75px**, round caps & joins, ~2px corner radius, **no fill**.
- Icons render in **`currentColor`** — Deep Charcoal `#22201d` (light) / `#ece7de` (dark) — so they inherit text colour and pass WCAG AA automatically.
- **Colour rule (same as the palette): the stroke is never green** — a thin green line fails contrast (1.56:1). "Active / selected / done" is shown by a **filled green shape behind the icon** (nav pill, status node, verified badge) with the icon staying charcoal on top — never by recolouring the stroke. This is the exact fill-only rule from §3.
- **Icon + label** for anything actionable — never icon-only for a critical action (`voice.md` P4 / Apple HIG). Sizes 16 / 20 / 24 / 28.

### Two implementations, one look
- **Mobile client (Apple HIG):** use **SF Symbols** — native, HIG-consistent, and matched to the SF typeface (`CLAUDE.md`). Map each concept below to its SF Symbol; SF's own weights align with the 1.75px feel.
- **Desktop + Operator SRM + web:** a **matching custom line set** on the same 24-grid / 1.75 stroke (SF Symbols isn't available off-Apple). WCAG AA.

### Inventory — mapped to the real IA (`sitemap.md` / `jtbd.md`)
| Group | Concept | Glyph | SF Symbol (mobile) |
|---|---|---|---|
| **Services** | Package delivery | parcel / box | `shippingbox` |
| | Aerial photo/video | camera | `camera` |
| | Inspection | viewfinder + lens | `viewfinder` / `magnifyingglass` |
| **Status (G-3)** | Accepted | check-circle | `checkmark.circle` |
| | En route | navigation arrow | `location.north.line` / `paperplane` |
| | On-site | map pin | `mappin.and.ellipse` |
| | Delivered | box + check | `shippingbox.circle` |
| **Trust (G-1/G-2)** | Verified | shield-check *(shown as the filled-green badge)* | `checkmark.seal.fill` |
| | Insured | shield | `shield` |
| | Licence | document | `doc.text` |
| | Rating | star | `star` |
| **Client nav** | Order | grid | `square.grid.2x2` |
| | Activity | list | `list.bullet` |
| | Help | question-circle | `questionmark.circle` |
| | Account | person | `person` |
| **Operator nav** | Jobs | briefcase | `briefcase` |
| | Earnings | wallet | `wallet.pass` |
| | Ratings | star | `star` |
| **Actions** | Add | plus | `plus` |
| | View details | chevron-right | `chevron.right` |
| | Book again | repeat | `arrow.clockwise` |
| | Contact support | chat | `bubble.left` |
| | Withdraw | arrow into card | `arrow.down.to.line` |

**Anti-reference honoured (§0):** no screen ships without icons. A sample of the drawn set is rendered in the DRON artifact.

---

## 1. Sources — Styles (visual direction)

Four styles taken with full token data. Verified live (HTTP 200) on 2026-07-17.

| # | Source | Refero style | Live URL | Role here |
|---|---|---|---|---|
| S-1 | **Monarch** (monarchmoney.com) | `d1af3fe4-bbf9-4bd3-82c5-aa29e83a0512` | [refero.design/styles/d1af…](https://refero.design/styles/d1af3fe4-bbf9-4bd3-82c5-aa29e83a0512) · [monarchmoney.com](https://www.monarchmoney.com) | **BASE** |
| S-2 | **N26** — "The online bank" (n26.com) | `59911817-9d14-445a-9f1b-617418001061` | [refero.design/styles/5991…](https://refero.design/styles/59911817-9d14-445a-9f1b-617418001061) · [n26.com](https://n26.com) | Borrowed move |
| S-3 | **Perplexity AI** (perplexity.ai) | `5c7acdfb-996b-4c6f-b361-264a3f580f7d` | [refero.design/styles/5c7a…](https://refero.design/styles/5c7acdfb-996b-4c6f-b361-264a3f580f7d) · [perplexity.ai](https://www.perplexity.ai) | Borrowed move |
| S-4 | **Operate** (operate.so) | `a0f473eb-0310-4df5-b5f6-5bc124ad5954` | [refero.design/styles/a0f4…](https://refero.design/styles/a0f473eb-0310-4df5-b5f6-5bc124ad5954) · [operate.so](https://operate.so) | Borrowed move (optional) |

### S-1 — Monarch · the BASE
*Why base:* it is the only reference that is **warm and classic and trustworthy at once** — the exact three-word brief.
Warm oat canvas + a single confident accent + a **serif headline that signals "established institution, not a gig app."**
That serif is what separates DRON from every spectacle-led drone competitor in `research.md` (Wing "Delivery, elevated", Zipline "Look up").

- **Palette (real tokens):** canvas `#efecea` (Canvas Oat) · surface `#ffffff` · text `#22201d` (Deep Charcoal) · secondary `#777573` · hairline `#dcd9d6`. **Accent is NOT Monarch's orange** — see the accent decision below.
- **Accent — one green, not Flame (design decision).** We keep Monarch's *structure and restraint* but replace the hue with a single fresh **salad-green `#9bcf4a`** ("Signal Green") used **for everything**. Not arbitrary — green is **promoted from Operate's own green family (S-4: Primary Green `#85c093`, Deep Moss `#007010`)**, already one of our four sources; it reads calmer/more natural on the warm oat canvas and avoids the spectacle heat of orange. Restraint rule unchanged (Monarch: *"reserve the accent for functional components"* = voice P2).
- **Type:** serif headline (Copernicus, weight 350 — *quiet* authority, not shouting) + clean sans body (ABC Oracle ≈ Inter). For DRON this maps to **SF for the client mobile app** (per CLAUDE.md / Apple HIG); the *idea* we take is the serif-vs-sans **tone**, realised in SF's display vs text optical sizes.
- **Shape tokens:** cards `12px` · inputs `8px` · **buttons fully pill (9999px)** · card padding `24px` · element gap `16px` · section gap `64px`.

> **⚠ Accessibility rule (one green, fill-only).**
> DRON owes WCAG 2.1 AA on desktop and the operator SRM (CLAUDE.md → Design Standards). `#9bcf4a` is a **light** hue, so it
> **cannot be a text colour** on the cream canvas (`#9bcf4a` on `#efecea` = 1.56:1, fails; on white = 1.84:1, fails).
> The rule that makes "one green for everything" work:
> - **Green is always a FILL / tint / highlight, with charcoal text on top.** `#22201d` on `#9bcf4a` = **8.83:1 (AA pass)**;
>   **never white on green** (1.84:1, fails). This covers the button, verified badge, active status node, status pills, and
>   the hero word (rendered as a green **highlight**, not green text).
> - **All type stays charcoal** — `#22201d` on `#efecea` = 13.8:1, on white = 16.3:1. Section headers keep a green identity
>   via a green underline / marker (a fill), not green letters.
> *(For the record: Monarch's own orange button — white on `#ff692d` = 2.87:1 — also fails AA; the fill-only rule is how we
> keep a single light-green accent everywhere without any illegible text.)*

### S-2 — N26 · borrowed move
Institutional fintech clarity: **one** brand colour (Deep Teal `#088177`) on a stark white ledger, tiny `4px` card radius, dense but orderly financial rows. This is the "trust = compliance-grade clarity" pole opposite Monarch's warmth.

### S-3 — Perplexity · borrowed move
"Digital parchment, subtle authority." Warm cream `#faf8f5`, a single muted teal accent `#016a71` used *only* for active states, **pill tags at 9999px**, compact 12px card padding. Proves the same warm-neutral-plus-one-accent formula in a **tool/tech** register rather than a finance one.

### S-4 — Operate · borrowed move (optional)
"Digital ledger, subtle grid." Thin **inset hairline borders** (`inset 0 0 0 0.5px`) instead of drop shadows, faint grid, monospaced data labels (cinetype). This is the "precise / technological" half of the brief expressed structurally, not chromatically.

---

## 2. Sources — Screens (concrete UI, mobile / iOS)

Three screens taken with full metadata and **visually verified from the screenshot** (not just the text description).

| # | Screen | App | Refero screen | UI captured |
|---|---|---|---|---|
| SC-1 | Host profile with verification | **Airbnb** | `c331f886-2653-481c-b74a-b4daa4454ab1` | [refero.design/screens/c331…](https://refero.design/screens/c331f886-2653-481c-b74a-b4daa4454ab1) | Verified badge **on the avatar**; Review / Rating / Hosting stat trio; "Identity verified" row |
| SC-2 | Package status timeline | **PayPal** (DHL parcel) | `33637751-edc5-48c0-a83a-bcf0db183e6e` | [refero.design/screens/3363…](https://refero.design/screens/33637751-edc5-48c0-a83a-bcf0db183e6e) | 4-node horizontal progress line inside one rounded card; only the checks carry colour |
| SC-3 | Deliveries list ("On its way / Delivered") | **Klarna** | `4fe060b7-7863-4e72-a318-c737a3384a79` | [refero.design/screens/4fe0…](https://refero.design/screens/4fe060b7-7863-4e72-a318-c737a3384a79) | Segmented status tabs (taxi-app pattern) + one live delivery card + green success toast |

*Also surfaced and usable later:* Acorns driver-job list (`d6e1d175-…`, search + distance filter + stacked rounded job cards) as a **filters + listing-card** reference.

---

## 3. The composition — one base, specific grafts

**Base = Monarch (S-1).** Warm oat canvas, charcoal text, a single **salad-green** accent (Signal Green `#9bcf4a`, Operate's hue family — fill/highlight only), pill buttons, serif-toned headline (SF display),
`12px` cards / `24px` padding / `64px` section rhythm. Everything below is grafted **onto** this base.

| Graft | Taken from | The exact move (not a vibe) | Persona anxiety it removes |
|---|---|---|---|
| **G-1 · Badge on the avatar** | Airbnb SC-1 | Put "Verified by DRON" as a small circular badge **overlapping the operator's avatar** (bottom-right), *not* as a separate text chip. It reads before any tap. Keep Monarch's rule: the badge is one of the very few saturated marks on the card. | C-1 emotional job *"a qualified professional is handling it — not a random person from the internet."* Trust trigger: *"operator photo + rating visible on list card without tapping."* (`target-audience.md` C-1) |
| **G-2 · Stat trio under the name** | Airbnb SC-1 | Three vertically-stacked micro-stats beside the avatar — for DRON: **Jobs done · Rating · Insured**. Numbers, no adjectives. | C-1 exit trigger *"operator card with no photo or '0 reviews'."* Matches `research.md` L-5 (numbers do the trust work) and voice P2. |
| **G-3 · One-card status timeline** | PayPal SC-2 | The post-payment screen is a **single rounded card holding a 4-node horizontal line** (Accepted → En route → On-site → Delivered). Only the completed nodes take the accent; the rail stays hairline `#dcd9d6`. | C-1's highest-anxiety moment: *"After payment, no visibility into who is coming or when"* → the RJ-C2 "close the void" job (CLAUDE.md). |
| **G-4 · Segmented status tabs** | Klarna SC-3 | Orders list uses **"Active / Done" segmented pills at the top** (the taxi/parcel-app mental model C-1 already has from Bolt & Nova Poshta) with one order card per row. | C-1's Bolt/Glovo mental model — *"if the experience diverges from that model in the first 60 seconds, they leave."* |
| **G-5 · How much colour** | N26 (S-2) + Perplexity (S-3) | Quantified budget: **≈ one green element per screen** — the primary CTA, or the active status node, or the verified badge, but not all three loud at once. Canvas + charcoal + hairlines do ~95% of the work; green ≤ ~5% of pixels. This is N26's "single brand colour" discipline read through Perplexity's "accent only for active states." | Trust trigger: calm, no *"'plus fees' or line-item surprise."* A loud screen reads as a marketing app; a quiet one reads as an institution you can hand control to. |
| **G-6 · Hairline over shadow (optional)** | Operate (S-4) | For the **operator SRM** (data-dense, WCAG AA), separate rows with **inset hairlines** instead of Monarch's soft card shadows — precise, ledger-like, lighter to render. | Operator persona wants professional-grade tooling; keeps the "technological/precise" half of the brief without adding chrome. |

### What we deliberately did **not** copy
- Not Monarch's orange, and not its failing white-on-accent button — one salad-green `#9bcf4a`, used as a **fill/highlight** with charcoal on top (8.83:1), never as text (§1 S-1 + AA rule).
- Not Airbnb's pink brand hue or full profile layout — only the **badge placement** and **stat trio**.
- Not N26's teal or 4px sterile cards — only its **single-accent discipline**.
- Not Perplexity's sidebar/search-tool shell — only its **accent-for-active-state** rule and pill tags.

---

## 4. Resulting token seed (for `tokens/`)

Warm base from Monarch, salad-green accent (Operate hue family), AA-safe. First-draft only — to be refined in the tokens step.

```
--canvas:        #efecea   /* Monarch Canvas Oat — page background            */
--surface:       #ffffff   /* cards, sheets                                   */
--text:          #22201d   /* Deep Charcoal — 13.8:1 on canvas, AA pass       */
--text-muted:    #777573   /* secondary; use on #ffffff (4.6:1), not canvas   */
--hairline:      #dcd9d6   /* dividers, inset borders (Operate move)          */
--accent:        #9bcf4a   /* Signal Green — the ONE accent, FILL/tint/highlight only */
--on-accent:     #22201d   /* charcoal ON green = 8.83:1, AA pass (NEVER white)*/
/* no accent text token: green is never a text colour (1.56:1 on canvas, fails) */
--ok-bg:         #e9f3d7   /* pale green tint for success pills (charcoal text on top) */
--radius-card:   12px
--radius-input:  8px
--radius-button: 9999px    /* pill (Monarch + Perplexity)                     */
--pad-card:      24px
--gap-element:   16px
--gap-section:   64px
/* colour budget: ~1 green element per screen (N26 + Perplexity discipline)   */
/* dark theme: same green — --accent #9bcf4a · --on-accent #1a1712 · --ok-bg #273018 */
```

---

## 5. Three directions — the chosen language, tuned (`concept/directions.html`)

Three tunings of the **Fauna Robotics** language on the one primary, salad-green `#9bcf4a` (fill-only, charcoal on top). Same DNA in each: flat / soft-border cards, real-photo-ready tiles, flat monochrome Phosphor icons, generous whitespace, one accent used sparingly, rounded-rect buttons (Fauna, not pills). All Apple HIG (44px targets, system UI type, light + dark aware) and WCAG AA.

| # | Direction | Register | Ground | Display type |
|---|-----------|----------|--------|--------------|
| 01 | **Daylight** | Pure Fauna read; maximum air | `#FFFFFF` white | Hanken Grotesk |
| 02 | **Studio** | Company / careers register; more structure & density | `#F6F7F9` mist | **SF Pro Display** |
| 03 | **Nocturne** | The language after dark (CoffeeTech / A-5); green glows | `#14161A` graphite | Geist |

### 02 Studio — expanded (the chosen tuning, built out)

Studio is developed into a full design-language showcase (the `.studio-lab` block in `directions.html`), driven from the designer's Figma reference board (`node 833-49948`). The reference's electric lime `#C4F000` is **not** adopted; the locked primary `#9bcf4a` stays.

- **Type** — **SF Pro Display** for headings, **SF Pro Text** for body / UI (Apple HIG). Replaces Schibsted Grotesk; on non-Apple systems it falls back to the system stack.
- **Palette** — Mist `#F6F7F9` page · Porcelain `#FFFFFF` card · Ink `#1A1A1A` · Slate `#5F636B` · Hairline `#E4E6E9` · Signal Green `#9BCF4A` (primary / live) · Graphite `#1F2124` (dark secondary / dark surface) · Soft `#EFF1F3` (icon wells).
- **Buttons & actions** (Figma-inspired) — **solid green** primary (charcoal on top, 8.8:1), **no gradient**; **graphite** secondary (`#1F2124`, white text); white / hairline ghost; and **circular icon actions** (green call / green navigate / graphite message / soft chevron) for map & courier rows. Full state set (hover / active / focus-visible / disabled).
- **Card variants** — live order + route timeline (Accepted → En route → On-site → Done) with ETA; operator / fleet-unit card (certified + rating + call / navigate); parcel card with a weight / dimensions / insured stat trio; delivery-status row with a chevron.
- **Map & route** — line-grid map with a green traveled path + dashed remaining, a drone marker mid-route, a destination pin, an "Arriving in" ETA chip, and a live-tracking footer with call / message.
- **Imagery** — the same frame on **light** (charcoal on porcelain) and **dark** (green glows over graphite) surfaces; real photography per A-3, not gradient decoration.
- **Backgrounds & textures** — Mist, Porcelain, Green wash (12% tint), Graphite, Green glow (radial, dark hero), Dot grid, Line grid, Hatch, Contour. Subtle surface treatments only; the green is never a button gradient.

Verified in-browser (desktop + mobile): no horizontal overflow, solid-fill buttons only, AA contrast held.

---

## Change log
- **2026-07-17** — Created. Refero MCP styles (Monarch/N26/Perplexity/Operate) + screens (Airbnb/PayPal/Klarna) extracted with full data; base = Monarch; grafts G-1…G-6 defined; WCAG AA correction on Monarch's primary button documented. No new competitor research (per brief). Published as the DRON artifact (URL above).
- **2026-07-17 (rev 2)** — Accent changed from Monarch's orange to a **salad-green**, per designer preference. Hue promoted from Operate's green family (S-4), so it stays sourced, not arbitrary.
- **2026-07-17 (rev 3)** — Collapsed to a **single green — `#9bcf4a` — for everything** (designer request). Dropped the second darker green; the one green is now used only as a **fill / tint / highlight with charcoal text on top** (hero word became a green highlight; section headers use a green underline), so all type stays charcoal and WCAG AA holds. Same hex in light and dark. Artifact redeployed to the same URL.
- **2026-07-17 (rev 4)** — Added **§0 Designer's Taste** (likes: CoffeeTech, Fauna Robotics, Boiler Lab, from the Notion board; anti-references: cream+terracotta, gradients-for-photos, icon-less screens) and **§0.1 Attributes** (5 grounded opposite-pairs A-1…A-5). Two open tensions flagged for the designer: **A-4** (no icon set defined yet) and **A-5** (warm-cream proximity + light-vs-dark default, since CoffeeTech is dark by default).
- **2026-07-17 (rev 5)** — Designer resolved both: **A-4 → build the icon set** (added **§0.2 Icon set** — flat monochromatic line icons, 24-grid / 1.75px, `currentColor`, green only as a fill behind the icon; SF Symbols on mobile + matching custom set on web; full inventory mapped to the IA). **A-5 → keep both light and dark themes**, following the device appearance (Apple HIG). Sample icons drawn in the artifact.
- **2026-07-17 (rev 6)** — Under `/impeccable` (product register). Built **`concept/directions.html`** — three *contrasting* language directions (not shades of one green), each with palette+hex, a font pair, live "Incoming offers" cards, buttons, badge, and Phosphor icons in its own weight: **01 Certified** (light · oxblood `#8B2635` · Archivo · linear icons), **02 Instrument** (dark graphite · periwinkle `#93A4FF` · Geist + JetBrains Mono · bold-duotone icons), **03 Field** (light · magenta `#D6176B` · Big Shoulders + Hanken · bold icons). All AA-verified, HIG-compliant (44px targets, system UI type, light/dark-aware), and reflex-dodging (no blue/cyan/green/orange, no warm SaaS cream — per PRODUCT.md anti-refs incl. "no Bolt/Glovo colour"). Awaiting the designer's pick; the product `DESIGN.md` is generated next from the chosen direction. (No root `DESIGN.md` existed, so nothing was renamed to `DESIGN-artifacts.md`.)
- **2026-07-17 (rev 7)** — Designer rejected the three contrasting directions and chose the **Fauna Robotics** language (faunarobotics.com/company) with **salad-green `#9bcf4a` as the primary** (as in the artifact). Rebuilt **`concept/directions.html`** as three *tunings of that one language*: **01 Daylight** (pure white · Hanken Grotesk), **02 Studio** (soft mist canvas · Schibsted Grotesk), **03 Nocturne** (dark · Geist). All share the Fauna DNA — flat/soft-border cards, real-photo-ready tiles, flat monochrome Phosphor icons, generous whitespace, one accent used sparingly — with green as the single primary, **fill-only, charcoal on top (9.46:1)**, rounded-rect buttons (Fauna, not pills). HIG (44px, system UI type, light+dark) and WCAG AA verified. Awaiting the pick of one tuning.
- **2026-07-23 (rev 8)** — Under `/impeccable` (product register). Added **§5 Three directions** and **expanded direction 02 Studio** into a full design language in `concept/directions.html`, from the designer's Figma reference board (`node 833-49948`): font → **SF Pro Display / SF Pro Text**; **Figma-inspired buttons** (solid green primary + graphite secondary + circular icon actions, **no salad-green gradient**, per the designer); several **card variants**; a **map & route** card; **imagery on light & dark**; and **backgrounds & textures**. Kept the locked primary `#9bcf4a` (not the reference's `#C4F000`). Battle-tested in a real browser (desktop + mobile) — AA held, no horizontal overflow. Artifact §06 Studio card synced (font label + change log).
