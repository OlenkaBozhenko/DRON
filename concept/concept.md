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
- **Flat, single-weight line (outline) icons**, monochrome. Grid **24×24**, live area 20×20, **stroke 1.7px**, round caps & joins, ~2px corner radius, **no fill**. *(Was 1.75 in the first draft; §5 chose 1.7 and every shipped surface uses it — one number, not two.)*
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
/* and no dark-green ink token either: a darkened accent is still the accent used as */
/* text, which §3 forbids. Anything sitting on a green fill or a green tint is        */
/* --text charcoal — 9.46:1 on the accent, 14.75:1 on the tint. Verified 2026-08-01.  */
--ok-bg:         #e9f3d7   /* pale green tint for success pills (charcoal text on top) */
/* --- semantic states (added 2026-08-01; the product needs states the seed had no colour for) --- */
/* Same construction as --ok-bg in every case: a pale tint carrying CHARCOAL text.        */
/* The saturated hue is never the mark and never the text — it fails on the card ground:  */
/* warn #e4a11b = 1.84:1, and even danger #c4462a only reaches 4.07:1.                    */
--warn-bg:       #f6e7c4   /* running late, ETA slipping — charcoal on top = 14.21:1      */
--danger-bg:     #f2d8cf   /* signal lost, upload failed — charcoal on top = 12.85:1      */
--info-bg:       #dde2e6   /* neutral notice — charcoal on top = 13.34:1                  */
/* Tone check (voice.md P5): the error tint is the coolest and least saturated of the     */
/* three, the warning tint the warmest — an error can never read as celebration, and a    */
/* warning can never disappear into the page.                                             */
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

## 5. Directions — the chosen language (`concept/directions.html`)

> **DECISION — direction 02 «Studio» is chosen** (2026-07-23). It is built out in detail in the artifact's *"02 Studio, built out"* (`concept/concept-artifact.html` §06) and promoted to the **design-language testbed `concept/concept.html`**. Daylight (01) and Nocturne (03) stay recorded below as alternatives we can return to.

Three tunings of the **Fauna Robotics** language on the one primary, salad-green `#9bcf4a` (fill-only, charcoal on top). Same DNA in each: flat / soft-border cards, real-photo-ready tiles, flat monochrome Phosphor icons, generous whitespace, one accent used sparingly, rounded-rect buttons (Fauna, not pills). All Apple HIG (44px targets, system UI type, light + dark aware) and WCAG AA.

| # | Direction | Status | Register | Ground | Display type |
|---|-----------|--------|----------|--------|--------------|
| 01 | **Daylight** | alternative | Pure Fauna read; maximum air | `#FFFFFF` white | Hanken Grotesk |
| 02 | **Studio** | ✅ **CHOSEN** | Company / careers register; more structure & density; warm-grey cards on a light page | warm `#F7F5F2` page, `#ECE9E4` cards | **SF Pro Display** |
| 03 | **Nocturne** | alternative | The language after dark (CoffeeTech / A-5); green glows | `#14161A` graphite | Geist |

**Daylight (01) — kept for later.** Pure white ground, Hanken Grotesk, the airiest read. Return to it if the product wants a lighter, more consumer feel.
**Nocturne (03) — kept for later.** Deep graphite ground, Geist, the green genuinely glows. Return to it for a dark-first / low-light register.

### 02 Studio — expanded (the chosen tuning, built out)

Studio is developed into a full design-language showcase (the `.studio-lab` block in `directions.html`, and embedded in the artifact's §06), driven from the designer's Figma reference board (`node 833-49948`). The primary stays **salad-green `#9bcf4a`** (an electric-lime tuning was tried and reverted). The **page / theme background keeps its light tone**; only the **card surfaces are grey** (grey cards on a light page, per the designer).

- **Type** — **SF Pro Display** for headings, **SF Pro Text** for body / UI (Apple HIG). Replaces Schibsted Grotesk; on non-Apple systems it falls back to the system stack.
- **Palette — the warm family (authoritative).** This section carried two palettes for a week and the build followed the table above it, not the list; corrected 2026-08-01, cool values moved to the note below.
  Page `#F7F5F2` · Card `#ECE9E4` · Media `#E4E1DA` (drone / map / imagery wells) · Secondary button `#D6D2C9` · Ink `#1A1A1A` · Slate `#5A5751` · Hairline `#D9D5CE` · Signal Green `#9BCF4A` (primary / live) · Green tint `#E7F0D2` (the §4 `--ok-bg` idea, tuned to this ground) · Graphite `#1F2124` (dark surface).
  Verified AA on the card ground: ink **14.37:1**, slate **5.95:1**, charcoal-on-green **9.46:1**, charcoal-on-tint **14.75:1**. Slate on media **5.51:1**, on the secondary button **4.77:1**. **Green is fill-only, never text and never an icon stroke** — see §0.2 and the §4 seed.
  *Cool alternative, not built:* Mist `#F6F7F9` · Surface `#F3F4F6` · Media `#DBDEE3` · Slate `#565A62` · Hairline `#D8DBE1` · Grey `#E4E7EC`. Kept only as a record of the tuning that was considered.
- **Icons** — **outline / line only** (24-grid, ~1.7px stroke, `currentColor`, `fill:none`); no filled icons. Icons inherit their container colour so they read correctly in light and dark.
- **Buttons & actions** — **primary is green** (solid fill, charcoal on top, no gradient) for interface CTAs; **secondary is grey**. Radius is the **rounded rect `--r-btn` 12px**, not the §4 seed's `9999px` pill — the seed predates this direction and Fauna is not a pill language; §5 wins. Height is a **`min-height`**, never a fixed height: a button placed directly in a scrolling flex column is a flex item, and a fixed height gets shrunk below the 44pt target. On the cards the action buttons are **grey secondary** (green is reserved for the primary CTA and status, not spent inside card UI). Full state set (hover / active / focus-visible / disabled).
- **Elevation — card surfaces are flat.** Set by the designer over rev 28–30 and now the rule for the whole language, testbed included. A card is separated by **warm tone + the 16px radius**, not by a shadow: `#ECE9E4` on `#F7F5F2` is a **1.11:1** step, small but a real edge once the radius cuts the corner, and rows carry their own `#D9D5CE` hairline (**1.21:1** on the card). Nothing measurable is lost — a card-to-page boundary is a decorative surface edge, not text (1.4.3) and not a control or state indicator (1.4.11), so no minimum applies to it. **Exactly two shadows are spent in the built product:** `--sh-sm` under the **green primary**, and `--sh-raised` under **media** (the live map). That makes depth a single deliberate cue instead of a default finish — on `tracking` the map is the only raised surface on the screen. The card step `--sh-card` is **recorded but no longer spent**: the token stays declared as part of the ramp, and is applied to nothing.
- **Card inset** — `16px` is the base (this spec page, and the operator / details / message cards). `order-history` list cards carry **`20px`**, set 2026-08-01 so their four groups could hold a real spacing rhythm (4/8 within a group, 20 between groups and as the inset, 28 between cards). **Two documented insets, not drift** — but they are still two, and unifying them is deferred: the operator card's 20px would cost its trust-chip row 8px of a 4px margin and drop `Insured` to a second line. Revisit when that row's content is settled.
- **Card variants** — live order + route timeline (Accepted → En route → On-site → Done) with ETA; operator / fleet-unit card with a **real drone render** hero (certified + rating + grey call / navigate); parcel card with a weight / dimensions / insured stat trio; delivery-status row with a chevron. Cards laid out 2-up so the header never wraps.
- **Map & route** — a **real map-with-route image** (green route, nodes, destination pin, drone in flight) with an "Arriving in" ETA chip and a live-tracking footer.
- **Imagery** — **light** surface shows the vector line-drone (charcoal on grey); **dark** surface shows a **real drone render** (green package glows over graphite). Real renders are supplied by the designer and embedded as **base64 data-URIs** (CSP blocks external image URLs); vector line-art remains the fallback.
- **Backgrounds & textures** — Mist, Surface, Green wash (flat tint), Graphite, Dot grid, Line grid, Hatch, Contour. Subtle surface treatments only; no colour gradients.

Verified in-browser (desktop + mobile): no horizontal overflow, outline icons only, solid-fill buttons only, AA contrast held. **Applied fully in the artifact (§06); `directions.html` studio-lab has the colour / grey-card treatment but not yet the outline-icon / real-image / rounded-palette parity.**

---

## 6. Imagery — the drone render library (`assets/drones/`)

The language now owns a real photographic layer. Until now imagery was a placeholder problem (§5: "real renders are supplied by the designer"); this section fixes the supply and the rules.

Two sets, from two Figma nodes, in **two different registers** — and the difference matters more than the file count:

| Set | Node | Register | What it shows |
|---|---|---|---|
| **§6.1 The fleet** | `19:59139` «Drons images» | **studio / catalogue** — a unit on a payload, no context | 12 drones, each on a lime cargo box |
| **§6.2 In flight & people** | `38:122` «images 2» | **editorial / in use** — the job happening | 4 drones flying, an operator, a client, 3 scenes |

`assets/` is organised by subject, not by source: **`assets/drones/`** · **`assets/people/`** · **`assets/scenes/`**. Everything is transparent PNG (lossless — transparency rules out JPEG). Source sheets are kept beside the cuts as `_source-*.png` so any crop can be redone without going back to Figma.

**Why these renders fit the language.** In the fleet set, every unit is charcoal, graphite or white with a **lime cargo box that reads as Signal Green `#9BCF4A`** — the concept's single accent. That is §2's *"green is fill-only"* rule arriving as a physical object instead of as UI paint: **the green is the payload.** It also serves P1 (*name the outcome, not the drone*) visually — what the eye lands on is the box being carried, not the machine carrying it. In the scene set the same discipline holds on the **uniform**: grey shell, lime as a seam detail and the controller screen. One accent, wherever it appears.

### 6.1 The fleet — 12 studio renders

**Source.** Node **`19:59139` «Drons images»** — one transparent `3072 × 2048` PNG sheet holding a **4 × 3 grid of 12 drone renders**.

**Extraction.** The sheet was sliced on its **alpha channel** (row / column runs of fully transparent pixels), not on guessed coordinates — so every cut lands in the gap, never on a rotor. Each drone is then trimmed to its own alpha bounding box, centred on a **square transparent canvas with 6 % padding**, and written at **1024 × 1024 PNG**. Result: 12 files that all sit at the same optical scale and can be dropped into any square or any well without re-cropping.

`assets/drones/` · 1024 × 1024 · transparent PNG · ~0.3 MB each (3.9 MB total)

| File | Body | Optics | Payload | View | Intended first use |
|---|---|---|---|---|---|
| `drone-01.png` | Graphite, arms folded low | single forward lens, amber blade tip | lime cargo box | ¾ side, facing left | **Package delivery** — service card / hero |
| `drone-02.png` | Silver-grey with black camera pod | twin-lens gimbal pod | lime cargo box | ¾ side, facing right | **Aerial photo / video** — service card · order-history card well |
| `drone-03.png` | White, slim, tall landing legs | single gimbal lens | lime cargo box | ¾ side, facing right | Lightest read — order confirmed, light surfaces |
| `drone-04.png` | Black with amber arms | twin sensor lenses | lime cargo box | ¾ front | **Inspection** — service card |
| `drone-05.png` | White | twin lenses (green + blue) | lime cargo box | ¾ side, facing right | Operator / fleet-unit card hero (light) |
| `drone-06.png` | White | twin lenses | lime cargo box | ¾ side, angled | Activity-list thumbnails — *superseded on `order-history`*, which uses `drone-08` / `drone-02` / `drone-11`: the designer picked 08 for delivery, and 11 is what keeps the inspection card from reading as a third delivery |
| `drone-07.png` | Black, wide sensor pod | twin lenses | lime hex cargo box | front-on | Live tracking / operator revealed — front-on reads as *approaching* |
| `drone-08.png` | Graphite with vent panel | single lens | lime cargo box | side profile | Dark surfaces (Nocturne register) · **package delivery** on the order-history card well (designer’s pick, node `23:59144`) |
| `drone-09.png` | White with dark landing frame | twin lenses | lime cargo box | side profile | Order review / price screen |
| `drone-10.png` | Black with amber pinstripe | twin blue lenses | lime cargo box | ¾ front | Empty states — nothing ordered yet |
| `drone-11.png` | Black with amber shell | twin lenses | **dark composite case** | ¾ front | **Inspection** — the only non-lime payload; use where the box must *not* read as a delivery · order-history card well |
| `drone-12.png` | Black with amber sweep, compact | single lens | lime cargo box | ¾ side | Icon-scale and small thumbnails — simplest silhouette |

`_source-sheet.png` — the untouched 3072 × 2048 sheet, kept for provenance and for re-slicing if the crops ever need to change.

Filenames are **numbers, not descriptions**, on purpose: the descriptor in the table is a judgement that may be revised, while every reference in code must stay stable.

### 6.2 In flight & people — the scene library

**Source.** Node **`38:122` «images 2»** — four generated images: a **3-drone flight sheet** and three **scenes with people**.

**Extraction.** Each subject is isolated by its own **connected alpha component** — labelled at half resolution, dilated by 4 px so anti-aliased edges survive, then trimmed — **not** by bounding box. That is not fussiness: in `receive` the client's fingertips and the base of the hanging cargo box share a 20-pixel band, so a bounding-box crop would have left a slice of lime box floating above her hands. Component masks make a cutout structurally incapable of carrying a fragment of the subject standing next to it. The spray drone's motion-blurred plume survives the same way — it is part of that component, so it is not clipped.

**What this set adds that the fleet renders cannot: people.** The research puts the two highest-value client jobs on a human, not a machine — **RJ-C1** (confirm the operator is real and qualified) and **RJ-C2** (close the void between payment and arrival). `people/operator.png` is therefore the most load-bearing image in the product: it is the face on the operator card, where trust is actually claimed. `people/client-receiving.png` is MJ-1's outcome in a single frame.

| File | Subject | Native | Intended use |
|---|---|---|---|
| `people/operator.png` | Operator, ¾ from behind, controller in hand, grey-and-lime uniform | 595 × 702 | **Operator card hero (RJ-C1)** — beside the verified badge and the insurance line |
| `people/client-receiving.png` | Client reaching up, hands open, looking at the drone | 726 × 619 | Delivered / rate-the-job screens — the outcome of MJ-1 |
| `scenes/handover.png` | Operator **+** client **+** drone lowering the box | 1324 × 941 | Hero / onboarding — the whole DRON promise in one frame |
| `scenes/receive.png` | Client **+** drone lowering the box on a tether | 1107 × 1077 | **Confirmation / tracking screen (RJ-C2)** — the wait made concrete |
| `scenes/operator-at-work.png` | Operator **+** drone overhead | 1400 × 961 | Operator-side onboarding, SRM empty states |
| `drones/drone-flight-delivery.png` | In flight, cargo box on a tether | 869 × 477 | **Package delivery** service card · live tracking |
| `drones/drone-flight-camera.png` | In flight, large gimbal camera | 392 × 291 | **Aerial photo / video** service card |
| `drones/drone-flight-clean.png` | In flight, no payload, amber blade tips | 409 × 174 | **Inspection** service card · neutral use |
| `drones/drone-flight-spray.png` | In flight, spray canister, plume visible | 489 × 300 | Post-MVP — agricultural spraying |

`drones/_source-flight-sheet.png` (1389 × 303) — the untouched 3-drone strip, kept for provenance.

### 6.2b The delivery photo

| File | Subject | Native | Intended use |
|---|---|---|---|
| `scenes/delivered-at-door.jpg` | A parcel left on the steps of a house — door, planting, entry plaque | 1100 × 880 | **Proof of delivery** — the media on `delivery.html` (RJ-C4) |

Source: designer's Figma, node **`47:4`**. It replaces `people/client-receiving.png` on that screen.
The reason is the job, not the picture: RJ-C4 asks for *evidence that the parcel arrived*, and
`client-receiving` shows the **moment of handover** — a person reaching up — which is the story, not the
proof. A delivery photo has to be the thing the operator actually photographed.

**This is the first full-bleed photograph in the set, and it takes the opposite treatment to §6.1.**
A transparent cutout sits *in* a well and is `contain`-ed; a photograph **is** the surface — no padding,
`object-fit: cover`, edge to edge inside `--r-media`, the way `map/live-map.jpg` is `center/cover`.
Do not inset it on the `--media` ground: a photo floated inside a well reads as a sticker.

### 6.2a The live map

| File | Subject | Native | Intended use |
|---|---|---|---|
| `map/live-map.jpg` | City grid, lime route, drone in flight with the cargo box, destination pin | 1100 × 552 (1.99) | **Live tracking** — the map surface on `tracking.*`, in concept's `.mapc` / `.mapv` treatment |

The same image concept.html carries inline as `--map-img`, extracted to a file so the four tracking states reference one asset instead of inlining ~78 KB of base64 each. Use it at its native **1.99** aspect, `center/cover`, card radius, `--sh-raised` — never stretched, and never as a decorative texture behind text.

The scene fleet looks **deliberately different** from §6.1: dark grey bodies, amber blade tips, no cargo box unless one is being carried. These units are *working*; the §6.1 units are *catalogued*. Keep the two registers apart (see rules).

### 6.3 Rules of use

- **Transparent PNG, never a rectangle.** The drone sits *in* a surface — media well `#E4E1DA`, radius `--r-media` 13px — it is never a bordered photo tile. No white box, no frame.
- **Do not recolour, tint or gradient-map.** The lime already *is* the accent; a second green would break the one-accent budget (~1 green element per screen). Anti-reference §0: no gradients over photography.
- **No added drop shadow.** Each render carries its own lighting and contact shadow; a CSS shadow under a transparent PNG shows the canvas, not the drone.
- **One drone per well.** A grid of drones is a specification (this page), never product UI — in the product a screen shows the *one* unit doing the *one* job.
- **Both registers.** Verified against the light well `#E4E1DA` and graphite `#1F2124`: the white bodies hold on graphite and the graphite bodies hold on the light well, because every unit carries the lime box as its own separation. `drone-08.png` is the dark-surface default, `drone-03.png` / `drone-05.png` the light-surface defaults.
- **Scale.** For the fleet, 1024 × 1024 is the master — downscale, never upscale. Below ~96 px the rotors stop resolving; use `drone-12.png` (simplest silhouette) or a line icon instead.
- **Never upscale a §6.2 cutout.** They are native, and some are small — `drone-flight-clean.png` is 409 × 174. Past native size they soften visibly. Where a card needs a large image, reach for a fleet render (1024²) or a scene, not an enlarged cutout.
- **One register per screen.** §6.1 is studio-on-a-payload; §6.2 is in-flight-and-in-use. Both on one screen reads as two different products. Pick the register per surface: catalogue and pickers get the fleet, live and outcome screens get the scenes.
- **People are not decoration.** `people/operator.png` exists to answer RJ-C1 — it belongs where trust is being claimed, next to the verified badge and the insurance line. Never as background texture, never cropped so the face and the controller are both lost.
- **Alt text names the outcome, not the equipment** (voice P1 / P4): *"Your parcel on its way"*, not *"quadcopter with lime cargo box"*. Descriptive alt is correct **only on spec pages** like `concept.html`, where the asset itself is the subject.
- **Base64 only for artifacts.** `concept-artifact.html` publishes under a CSP that blocks external image URLs, so any drone used *there* must be inlined. `concept.html` and every repo page reference `assets/drones/*.png` directly — 12 × 0.3 MB inlined would be indefensible.

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
- **2026-07-23 (rev 9)** — Studio retuned per the designer: primary → the **reference electric lime `#C4F000`** (charcoal on top, 13:1), **soft-grey surfaces** (cards / maps / drone imagery are grey, not white; new AA-verified grey ramp). Every icon converted to **outline / line** (no fills); colour-palette swatches got **large rounding**; card **secondary buttons → graphite & hairline** (lime reserved for the primary action + status); a **drone (quadcopter) illustration** added to the operator card and the light / dark imagery tiles; Order·live card alignment fixed (2-up grid). Applied fully in the artifact (`concept/concept-artifact.html`, redeployed to the same URL); `concept/directions.html` has the lime + grey, with the outline-icon / drone / rounded-palette parity still to follow. Real photographic drone imagery would need a base64-embedded image (CSP blocks external URLs); ComfyUI Cloud can't be driven headlessly from here.
- **2026-07-23 (rev 10)** — Designer review of the Studio retune: **reverted the accent from electric lime back to salad-green `#9bcf4a`**; corrected the surfaces so the **page / theme background stays light** and only the **card backgrounds are grey** (grey cards on a light page — the original intent). Buttons: **primary green in the interface, card action buttons grey secondary** (green reserved for the primary CTA + status). Designer supplied **real drone renders + a map-with-route image**, now **embedded as base64 data-URIs** (CSP-safe) on the operator-card hero, the dark imagery tile, and the Map & route card; the light imagery tile keeps the vector line-drone. Outline icons and the large-rounded palette were retained. All applied in the artifact (redeployed to the same URL); `directions.html` parity still pending.
- **2026-07-23 (rev 11)** — Designer polish on Studio: **warmed the grey ramp and widened its contrast** — light interface `#F7F5F2`, distinctly darker warm-grey cards `#ECE9E4`, and a third warm grey `#D6D2C9` for card secondary buttons (interface / card / button read as separate warm tones). Removed the stray **frame around the Order·live timeline labels** (they had inherited the global `.lbl` bordered-tag style; nodes unchanged, per the designer). Swapped the order card's camera glyph for a **drone (quadcopter) icon**. AA re-checked; no overflow.
- **2026-07-23 (rev 12)** — More designer polish: **removed the borders** from cards and circular buttons (separation now by shadow + warm tone; borders kept only where genuinely needed, e.g. stat-trio dividers). **Rebuilt the operator card** — *Certified* + *drone-model* badges overlaid on the drone photo, rating under the name, call / navigate opposite the name, "Reach the operator" removed. **Lifted the Map & route vignette** from black to a warm grey (route / pins / drone preserved; done by re-processing the supplied image). **Decline** button is now a true outline (no fill).
- **2026-07-23 (rev 13)** — **Direction 02 «Studio» selected** and fixed in §5 (Daylight / Nocturne kept as recorded alternatives). Built the design-language testbed **`concept/concept.html`**: the language shown *live first* (tab-bar, card variants, map, buttons — as on `directions.html`), then the specification — **palette** (primary / accent / neutral + semantic, each swatch attributed), **typography** (SF Pro Display + Text, 8-step size scale), **form** (radii / elevation / 8-px spacing), **Phosphor line icons** by coverage plan (tab-bar / metadata / badge / buttons / states), **3 live components** (primary + secondary action buttons, card), and a **WCAG AA contrast table**. Every decision labelled with the attribute it serves. Self-contained (SF stack, inline SVG, base64 drone + map).
- **2026-07-30 (rev 14)** — Added **§6 Imagery — the drone render library** and a matching **§08 Imagery** section to `concept/concept.html`. The designer's Figma sheet (`YlGWlsWWjKSCxhONMzGG2F`, node `19:59139` «Drons images») was pulled through the Figma MCP as one transparent 3072 × 2048 PNG and **sliced on its alpha channel** into **12 individual renders** — trimmed, centred on a square transparent canvas, 1024 × 1024, written to **`assets/drones/`** with the source sheet kept beside them for provenance. (Figma held only 11 hand-made crops for the 12 drones, so slicing the sheet was the only way to get the complete set at a uniform scale.) Documented: full inventory with body / optics / payload / view and an intended first use per unit, plus 8 rules of use. The reading that makes them fit the language: every unit carries a **lime cargo box that reads as Signal Green `#9BCF4A`** — the single accent arriving as a physical object rather than UI paint, which is also P1 (*name the outcome, not the drone*) made visual. The new page section shows all 12 in media wells, the same unit proved on light `#E4E1DA` **and** graphite `#1F2124`, the source sheet, and the rules; images are referenced by path (not base64) — inlining 3.9 MB would be indefensible, and the CSP constraint applies only to the published artifact.
- **2026-07-30 (rev 15)** — Second imagery set added from Figma node **`38:122` «images 2»** (same file), covering what the fleet renders could not: **people**. Four source images — a 3-drone flight sheet and three scenes — were cut into **10 assets** by **connected alpha component** (labelled at half resolution, dilated 4 px so anti-aliased edges survive, then trimmed) rather than by bounding box; in `receive` the client's fingertips and the base of the hanging cargo box share a 20-pixel band, so a box crop would have left a slice of lime box floating above her hands. `assets/` reorganised by subject into **`drones/` · `people/` · `scenes/`**: `people/operator.png` (the operator card hero — the image that answers **RJ-C1**), `people/client-receiving.png`, `scenes/handover.png` / `receive.png` / `operator-at-work.png`, and four in-flight drones mapped to the MVP services (`-delivery` / `-camera` / `-clean`) plus post-MVP spraying (`-spray`). §6 restructured into **§6.1 the fleet** (studio / catalogue register) and **§6.2 in flight & people** (editorial / in-use register), because the two sets are visually different fleets and mixing them on one screen reads as two products — a new rule says so, alongside *never upscale a cutout* (some are 409 × 174 native) and *people are not decoration*. Verified in headless Chrome on both `#E4E1DA` and `#1F2124`: all 10 cut clean, no bleed between adjacent subjects, the spray plume intact.
- **2026-08-01 (rev 16)** — First product surface to carry the imagery: `wireframes/order-history.html` swaps the line-icon card wells for **§6.2 in-flight cutouts**, one per service — `drone-flight-delivery` (package delivery), `drone-flight-camera` (aerial photo / video), `drone-flight-clean` (roof inspection). Chosen over the §6.1 fleet renders because every fleet unit carries the same lime cargo box, so a list mixing three services would have read as three deliveries; in the §6.2 set the **payload is the service**. Register-consistent per the rules (an outcome screen gets the scenes, and the screen uses that register only), and every well is a downscale (869 / 392 / 409 → 64px), so the no-upscale rule holds. The **~96px floor is a §6.1 rule** — it is written for the fleet, whose 1024² canvas carries 6 % padding and a small subject; the cutouts are tight crops and were verified legible at 64px, which is the widest well the card header can pay for (well 64 + gap 12 leaves 218px, and the worst date+pill pair is 205).
- **2026-08-01 (rev 17)** — Supersedes rev 16 on the imagery choice, and adds a spacing scale. The designer picked **`drone-08`** (Figma node `23:59144`, already in the repo as the 1024² transparent cut) for the package-delivery card, which is a §6.1 fleet render — so the whole surface moves back to the fleet register to keep **one register per screen**: `drone-08` (package delivery), `drone-02` (its camera pod is the photo/video unit), `drone-11` (the only fleet unit with a dark composite case, which is exactly §6.1's stated reason for it — otherwise the inspection card reads as a third delivery). The well is **landscape, 76 × 58**: each render is a 1024² canvas around a ~1.37 subject, so a square well spends a fifth of its height on nothing. That draws the drone at 68px — under the §6.1 ~96px floor, and knowingly: 68px is the widest the card header can pay for once the live card's `date + "In progress" pill` pair (189px) is protected, and the rotors were checked legible at that size before committing. **Spacing** on the same cards was monotone — 16 inset, 14 between every group, 12 between cards, so groups carried equal weight and the gap *between* cards was smaller than the gaps *inside* one. Replaced with a three-step scale on a 4-unit base: **4 / 8** within a group, **20** between groups and as the card inset, **28** between cards; a narrow tier under 390px steps it down to 16 / 18 / 22 with a 56px well, because the phone frame is fluid and renders at 321px on a 360px device.
- **2026-08-01 (rev 18)** — Tried and reverted, same day, at the designer's call: dropping the `.stat3` inset strip from the From▸To row on delivered `order-history` cards. The reasoning was that a finished order's route is a record rather than a fact still in motion, and that losing the tile would put the header, route and fee on one left edge. The designer read the panel as the better card. **The rule therefore stands unchanged: the `.stat3` inset is a card default, not a live-state surface** — the route is a different kind of fact from the header and the fee, and the tile is what says so at a glance. Recorded so the same idea is not re-proposed as new.
- **2026-08-01 (rev 19)** — Designer note on `order-history`: the labelled status pills (`In progress` / `Delivered`) become a **status indicator riding on the drone well** — the mark sits on the unit doing the job, the way a presence badge sits on an avatar. A 20px disc pinned to the well's top-right corner: for a live order a lime dot inside a `--green-wash` disc, with one `--green` ring leaving it and fading on a 1.8s cycle; for a finished one a `--ink` check on `--btn2`. The two differ by **shape and behaviour, never by colour alone** (WCAG 1.4.1), each keeps its old wording as its accessible name, and the ping is well under the 3-flashes-per-second ceiling (WCAG 2.3.1) and off entirely under `prefers-reduced-motion` — it is the only motion on the screen. Contrast is carried by the mark, not the disc (WCAG 1.4.11): raw `--green` is 1.52:1 on the card, so the dot wears a `--green-ink` ring at 6.37:1 to draw its own boundary; the check is 11.54:1 on its disc; both discs take a 2px `--media` ring so they stay legible wherever they land on the render. **Consequence for §6.3:** with the mark off the text rows the header pays nothing for status, and the well finally reaches **96 × 72 — the drone renders at 88px**, at the ~96px floor this document has been asking for since rev 14 and which every earlier revision of this card sat under. Narrow tier (<390px) steps to 68 × 52.
- **2026-08-01 (rev 20)** — Two designer corrections to rev 19 on `order-history`. **(a)** The `--green-ink` ring around the live dot read as black and is gone; the live mark is now a **solid 20px lime disc** — the brand accent and nothing else. Stated plainly, because rev 19 claimed otherwise: lime is 1.69:1 on the well, so this mark **does not clear WCAG 1.4.11 on its own**. It is a solid disc rather than a 10px dot so that size does the work the ring used to, and the state stays unambiguous because it is never carried by the mark alone — the live card is the only one with a progress rail, an ETA chip and the green CTA, and the indicator's accessible name says "In progress" outright. The finished mark is unchanged at 11.54:1. **(b)** Card focus ring is **keyboard-only**: `:focus-within` fired on pointer clicks too, so every tap flashed a green outline round the card. Both that rule and the one inherited from `_wireframe.css` are switched off, and the ring re-hung on `:has(> .card-link:focus-visible)` — verified with a real click (no outline) and a real Tab (outline present). Scoping to the card's own link also stops the card double-ringing when one of its circular actions takes focus. Focus indication itself is **not** removed — WCAG 2.4.7 still holds for keyboard users.
- **2026-08-01 (rev 21)** — The Studio layer moves off `order-history` and onto its second product surface: **`tracking.html` and its three states** (`-empty` running late, `-error` tracking lost, `-loading` acquiring GPS). Pure transfer — every value already existed in `concept.html` or the painted `order-history.html`; no new decisions. What landed: the token remap and frame; the system/tab glyphs; `block-label` zone annotations; `.btn.primary` / `.btn.secondary`; the card surface (`--card`, `--r-card`, `--sh-card`); the **live map** (new §6.2a asset, concept `.mapc` / `.mapv` at native 1.99, cover, raised shadow) replacing the `LIVE MAP` placeholder, whose wording survives as the accessible name; **`people/operator.png`** in the operator card, which is the use §6.2 assigns it (RJ-C1 — "the face on the operator card, where trust is actually claimed"); the **verification badge** as concept's `.pill.live` + shield-check glyph, with `.pill.mut` + plain shield for Insured, both keeping their wording; and the progress nodes at the order card's exact values (22px, 2px track, `--green` walked, `--line` pending, same check glyph) — vertical here only because this screen's structure is a vertical list. **Two new pairs, both first product use of §07's semantic tokens, and both wash + ink rather than the raw hue** (raw `--warn` is 1.84:1 on the card and could not carry a mark): late notice `#7A5200` on `#F6E7C4` → **5.65:1**, and on the card **5.72:1**; tracking lost `#9A3115` on `#F2D8CF` → **5.49:1**, and on the card **6.14:1**. The `<style>` block is byte-identical across all four states, so every repeat of a component carries the same values. Side-by-side against `order-history`, every shared computed value matches exactly: tokens, frame, status/top/tab bars, zone label, card surface and shadow, both button variants, node geometry and fill, media-well ground and radius.
- **2026-08-01 (rev 22)** — Designer note on the tracking operator card: the trust chips must sit on **one row**. `Verified by DRON` (143) + `Insured` (85) need 234px and the info column gave only 224, so `Insured` dropped to a second line. Fixed with concept values rather than new ones — the avatar goes to the **44px** `.well` size the concept's own operator block uses (the wireframe's 56 was never a concept number), the card gap to 12 (`.card-top`), and the chip gap to 6 (`.pill`'s own spacing). Column becomes 238 against 234, one row with 4px to spare, verified on all three states that carry the card. `flex-wrap` stays as the fallback below 390px, where no value fits the pair side by side.
- **2026-08-01 (rev 23)** — Designer note on the tracking operator card: the avatar aligns to the **top edge of the content**, not to its centre. `align-items` on the card goes to `flex-start`, which is concept `.card-top`'s own default — `concept.html`'s operator card overrides it to `center`, but that block is two lines tall; here it is three (name · rating · chips), and centring left the avatar floating against the rating line. Avatar top, info top and name box top now all sit at the card's 16px inset. No optical nudge: the name's glyph box starts 1.5px lower than its line box because of half-leading, and correcting for that would misalign the boxes themselves.
- **2026-08-01 (rev 24)** — Designer note on `order-history-loading`: the skeleton had drifted four revisions behind the card it stands in for. It drew a full-width media band across the top, three loose text lines and a 44px button slab, while the real card had become a **96 × 72 drone well beside a name-over-date stack · an inset From ▸ To strip · a fee row with two 44px circular actions** — so every block landed in the wrong place and the whole list jumped when content arrived. Rebuilt block for block on the real anatomy and on rev 17's spacing scale (20 inset / 20 between groups / 28 between cards, 16 / 18 / 22 under 390px), which puts the skeleton card at 263px against the delivered card's 263.6px: **the swap no longer reflows**. Two rules come out of it, for every `-loading` page. **(a) Chrome stays solid, content pulses** — the card surface, the drone well and the route inset are surfaces the loaded card also draws, so they are painted at full strength and only the render stand-in, the status mark, the text bars, the arrow and the action discs animate; a skeleton that greys out its own furniture is drawing a different screen. **(b) A skeleton must not promise a state it has not loaded** — all three cards take the *delivered* anatomy, the common denominator of the list, and the live order's extras (progress rail, ETA chip, green CTA) are deliberately not rehearsed, because Activity often loads with no live order at all. For the same reason the third card drops to a single stop: the real list mixes From ▸ To orders with single-Location ones. Widths vary per card so the three do not read as one stamped block.
- **2026-08-01 (rev 25)** — Third product surface: **`delivery.html` and its two states** (`-error` no proof uploaded, `-loading` waiting on the upload). Pure transfer again — every value already existed in `concept.html`, `order-history.html` or `tracking.html`, and the screen introduces **no new colour pair**: the token remap and frame, the system/tab bars with Phosphor-line icons, the mono block-label, the `.card` surface for the details rows, the `--btn2` secondary and the single green primary. Three placeholders became the marks they always stood for. **(a)** The "DONE" mark is concept §09's **Success** glyph, and §09 draws that glyph in `--green-ink` — so the mark is green-ink on `--green-wash` (6.54:1), which also keeps the screen at **one solid-green element**, the CTA (A-1, green sparingly). The waiting variant is the neutral well with the **Time** glyph: nothing has arrived yet, so nothing is green. **(b)** The "DELIVERY PHOTO" well is now the render §6.2 assigns to exactly this screen — `people/client-receiving.png`, "Delivered / rate-the-job screens — the outcome of MJ-1" — in the concept media well, contained, never upscaled (726px native into a 180px well). **(c)** "NO PHOTO" is the `--danger` wash + ink mark (5.49:1), the pairing `tracking-error` already uses, with a photo-missing glyph on the same 24-grid at the same 1.7 stroke. The loading well follows rev 24's rule — chrome solid, content pulses — so it keeps the loaded well's `--media` ground and pulses a stand-in sized to the render it waits for (183 × 156), and the swap does not move the page. One defect surfaced and was fixed with a concept value, not a new one: a `.btn` is a flex item in the scrolling column, and the base wireframe's fixed `height:44px` was being **shrunk to 23px** on the success screen — under the 44pt HIG target. concept's own `.btn` is `min-height:44px`, which restores it. The same fix is worth carrying to the other painted screens if their buttons ever land in an overflowing column.
- **2026-08-01 (rev 26)** — Designer note on `tracking-error`: **"Contact operator" is the green primary**, not the grey secondary. It is the same control the base `tracking.html` already carries as its primary in the action bar, so the two states were showing one control at two different weights — against the repeat rule the tracking paint was built on. Applied to `tracking-empty` as well, which had drifted the same way; `tracking-loading` has no operator card, so it is unaffected. The screen now holds two green buttons, and that is right here: the alert card's recovery (`Try again` / `Keep waiting`) is scoped to the card it sits inside, the operator button is the standing action of the screen, and they sit ~400px apart — measured, they never share a viewport. Nothing else changes: same `--green` fill, `--on-green` label (9.46:1), `--sh-sm`, `--r-btn`, and the green-ink focus ring.
- **2026-08-01 (rev 26)** — Designer note on `delivery.html`: the proof-of-delivery media becomes **`scenes/delivered-at-door.jpg`** (new §6.2b, Figma node `47:4`) in place of `people/client-receiving.png`. RJ-C4 asks for evidence that the parcel arrived; `client-receiving` shows the moment of handover, which is the story rather than the proof. Brings the **first full-bleed photograph** into the set and with it the treatment split now written into §6.2b: a transparent cutout is `contain`-ed inside a well, a photograph *is* the surface — padding to 0, `object-fit: cover`, edge to edge inside `--r-media`. 1100px native into a ~341px box, a downscale. `client-receiving.png` keeps its §6.2 entry and its rate-the-job use; only this screen changed. The `<style>` block stays byte-identical across all three delivery states (sha `05da80536c6a5753`).
- **2026-08-01 (rev 27)** — Audit of `concept.html`, `order-history`, `tracking` and `delivery` against this document, and the fixes. **Closed by changing the build:** (a) **`--green-ink #3F5B18` is deleted** — it was a colour with no pair anywhere in §0–§5, and §4 says in as many words that green is never a text colour. Everything that sat on a green fill or a green tint is now `--text` charcoal, which is also a contrast gain: 6.54:1 → **14.75:1** on the tint. The focus ring goes with it, `--ink` at 15.99:1 on the page. (b) **No green icon strokes** — `.nd.now`, `.ohl-arrow`, the active tab, the verified pill and the rating star were drawing their glyph in green against §0.2's *"the stroke is never green"*; all charcoal now. (c) **One icon stroke weight** — order-history ran 1.7 / 2 / 2.4 on one screen and tracking ran 1.7 / 2; everything is 1.7, and §0.2's stale 1.75 is corrected to match §5. (d) **Green is not spent inside card UI** (§5) — the From▸To direction chip drops its green tint. (e) The tracking milestones become the canonical §5 set — `Accepted · En route · On-site · Done` — instead of an ad-hoc four, so the same rail reads the same on both screens. (f) Each screen's title is an `<h1>`, not a `<span>`. (g) The drone wells draw at 88px and were loading the 1024² masters: they now load 256px thumbs, **1.1 MB → 123 KB** on that screen. (h) The shell's EN/UA toggle goes to a 44×44 target. **Closed by correcting this document:** §5 carried two palettes and the build followed the table, not the list — the warm family is now stated as authoritative and the cool one recorded as an unbuilt alternative; §4's `9999px` pill radius is superseded by §5's rounded rect; the semantic state tints (`--warn-bg` / `--danger-bg` / `--info-bg`) are written into the §4 seed with their charcoal-on-tint ratios and a voice.md P5 tone note, instead of living only in `concept.html`'s `:root`. **Closed as false:** the radii that looked like drift are all sourced — `.well` 12, `.dwell` 13, `.mapc` 16, `.stat3` 12 — so the avatar, the drone well, the map and the route strip are each correct; and the detector's `single-font` is a false positive, since it only sees the locally declared `--mono` while the SF stack arrives from `_wireframe.css`, and one system family is the HIG requirement. **Left open, by the designer's instruction not to move elements on cards they have worked through:** G-1 (verified as a badge overlapping the avatar rather than a text chip), G-3 (tracking's rail is still vertical and outside a card), icon-only card actions, and the 16/20 inset split.
- **2026-08-01 (rev 28)** — Designer note on `delivery`: the **details card loses its shadow**. `.kv` was the full concept `.card` recipe — `--card` fill, `--r-card`, `--sh-card` — and is now the same surface flat. It still reads as a card: `#ECE9E4` on the `#F7F5F2` page is a **1.11:1** step, small but a real edge once the 16px radius cuts the corner, and the rows keep their own `#D9D5CE` hairlines (**1.21:1** on the card). Nothing measurable is lost — a card-to-page boundary is a decorative surface edge, not text (1.4.3) and not a control or state indicator (1.4.11), so no minimum applies to it, and every text pair on the card is untouched: key `--slate` **5.95:1**, value `--ink` **14.37:1**. Applied to **tracking's ETA card in the same pass**: it is the same component drawn from the same two lines of CSS (concept `.card` surface + hairline rows), and letting delivery go flat while tracking stayed raised would put one component at two values — the thing rev 25 was built to avoid. `delivery-error` / `delivery-loading` carry the rule but not the element (their states show the message block and the skeleton instead); the declaration still moves with them, because the three delivery `<style>` blocks are byte-identical by contract, as are the four tracking ones — re-verified after this edit (delivery 10 352 chars ×3, tracking 11 848 ×4). The other shadowed surfaces are left alone: `.msg-block`, the operator card and the map keep `--sh-card` / `--sh-raised`, so the screen still has a depth order — this card simply stops competing with the photograph above it.
- **2026-08-01 (rev 29)** — Two more designer notes in the same breath — `tracking`'s `main`: *"remove the shadows from the cards"*, and `delivery-error`'s alert: *"remove the shadow from the card"* — so rev 28's single card becomes the rule for the whole painted set: **card surfaces are flat**. `--sh-card` is gone from `.op-card`, `.msg-block` (tracking, delivery and the order-history empty block), `article.card` and the loading `.sk-card`. Order-history's **hover lift** goes with it: `article.card:hover` was raising to `--sh-raised`, and a card that casts no shadow at rest cannot grow one under the pointer — hover is desktop-only besides, and what marks the card as reachable is the controls inside it and the keyboard focus ring. Geometry is untouched, because a shadow is not layout: the skeleton card still measures **263.0px against the delivered card's 263.6px**, so rev 24's no-reflow claim holds. **What still casts a shadow, and why:** the live map — `--sh-raised`, concept `.mapc`'s own value; it is media, not a card, and it is now the *only* raised surface on the tracking screen, which turns depth from decoration into a single deliberate cue — and the green primary, `--sh-sm`, concept `.btn.primary`'s own value. The 2px `--media` rings on the status indicators and the 4px green ring on the active milestone are cutouts and state rings, not shadows, and are untouched. Verified by computed style across all ten painted pages: no `box-shadow` survives on any card surface, and both shared blocks stay byte-identical (delivery 10 392 chars ×3, tracking 11 928 ×4).
- **2026-08-01 (rev 30)** — Rev 29 flattened the ten painted product pages but left the **testbed contradicting them**: `concept/concept.html` — the file that *defines* the card — still drew `.card`, the live-component wrapper `.comp .cc` and the drone-in-context `.dctx figure` with `--sh-card`, its Elevation block still showed a `card` swatch, and its §04 and card notes still read *"separation by soft shadow"* / *"soft shadow (no border)"*. One card at two values, with the source of truth holding the wrong one. All four surfaces are now flat, and the prose says what the build does. The card demo also loses its inline `style="box-shadow:none; background:var(--card)"` — a local override that had been patching the class from the outside, and is redundant now that the class itself is right. **Elevation is re-stated as a two-step ramp of what is actually spent:** `sm · primary` and `raised · media`, with a third swatch showing the flat card so the 1.11:1 tone step is visible next to them rather than merely asserted. `--sh-card` stays declared — in the testbed and in the ten painted pages — as a recorded rung of the ramp, commented as applied to nothing; deleting the declaration would have rewritten the shared `<style>` blocks and invalidated rev 29's byte-identity counts for a dead line. Re-verified after this pass: `var(--sh-card)` appears **0** times across the whole repo, the four card families still carry no `box-shadow`, and the two survivors are unchanged — `--sh-sm` on `.btn.primary`, `--sh-raised` on `.mapc`. §5 gains a standing **Elevation** bullet so the rule has a home in the spec instead of living only in the change log.
- **2026-08-01 (rev 30)** — Designer note on `delivery-loading`: **remove the inner square** from `.sk-block`. It was right when it was written and stale by the time it was seen. rev 25 sized the stand-in at 183 × 156 — the footprint of the proof render while it was a transparent cutout `contain`-ed in a padded well — and rev 26 replaced that treatment with a full-bleed photograph: padding 0, `object-fit: cover`, edge to edge inside `--r-media`. Once the photo covers the whole surface, the well is no longer chrome that survives the load; it is the thing being replaced. So rev 24's rule — *chrome stays solid, only the content pulses* — now points the other way on this screen: the well **is** the content, and the square inside it was rehearsing a layout the screen had stopped using. The `::after` is deleted and the pulse moves onto `.sk-block` itself, same 1.4s `skPulse`, same `prefers-reduced-motion` fallback (verified: `animation-name: none` under reduce). Measured against the loaded state: the skeleton is **341 × 180** and the photo it waits for is **341 × 180** — the swap is exact, not approximate. The general lesson, worth applying before the next `-loading` page is reviewed: **a skeleton is a claim about the loaded screen, so it expires when the loaded screen changes treatment** — every future change to a media treatment has to be walked into its skeleton in the same commit. `<style>` blocks re-verified byte-identical across the three delivery states (10 449 chars).
