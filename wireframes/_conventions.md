# DRON — Wireframe conventions

**Status:** Draft · step 7 · July 2026.
**Scope:** the rules **every** wireframe page obeys. Screens themselves are listed in [`_screens.md`](_screens.md); entities/navigation in [`../sitemap.md`](../sitemap.md). This file is the contract — a screen is "done" only when it passes the [per-page checklist](#12-per-page-checklist).

Wireframes prove **structure, hierarchy, and zones** — not looks. If a decision is about colour, final type, shadow, icon, or polish, it is **out of scope here** (§3).

---

## 1. Golden rules (the short version)

1. **Grayscale only.** Hierarchy comes from gray value, border, weight, and size — never colour (§4).
2. **Semantic HTML**, not a pile of `<div>`s (§7).
3. **Real text**, never lorem ipsum (§9).
4. **One page per state.** Success/normal = the base file; `-empty` / `-error` / `-loading` are separate files with the **same structure, different content** (§10, §11).
5. **8px grid.** Every spacing value is a multiple of 8 (4 allowed as the half-step). Radii are multiples of 2 (§6).
6. **Mobile frame 375 × 812.** Every page is built inside it (§6).
7. **No brand, no images, no icons, no shadows, no colour, no final font** — deferred (§3, §8).

---

## 2. What a wireframe is here

A wireframe answers: *what blocks are on this screen, in what order, at what weight, and what does the person do next.* It is monochrome, flat, and unbranded on purpose — so reviews argue about **layout and content**, not aesthetics. Every screen in `_screens.md` relies on these rules; nothing overrides them without updating this file first (`.md` is the source of truth).

---

## 3. Fidelity — in scope vs deferred

| In scope now (wireframe) | Deferred (later steps) |
|---|---|
| Layout, zones, block order | **Colour** (palette, semantic colour) |
| Hierarchy (size / weight / gray value) | **Final type scale** (refined sizes / weights — the SF *family* is set, §5) |
| Semantic structure & landmarks | **Shadows / elevation** |
| Real content & microcopy | **Icons** (use labels / placeholders instead) |
| All four states per screen | **Imagery / photography / maps** (use placeholders) |
| Grid, spacing, tap targets | **Motion / transitions** |
| Button variants + interaction states | **Finished / production UI** |

> **Font note (confirmed July 2026).** Typography is **San Francisco**, set via the Apple system stack — real SF on Apple platforms (the design target, `CLAUDE.md` mobile = Apple HIG); on non-Apple it falls back to the system UI font, since SF is Apple-proprietary and not web-embeddable. SF is the definitive wireframe typeface, **not** a placeholder. Only the *type scale* stays light-touch (the intentionally low-contrast sizes in §5); refined sizing/weights come with the visual design.

---

## 4. Grayscale palette

**Reused from the current HTML** (`ia.html` `:root` tokens). Wireframes adopt the **neutral / light** set as surfaces + ink — these are the true grays already in the project. One ramp, mapped to its role and its source token.

### 4.1 — Adopted wireframe ramp

| Token | Role in the wireframe | HEX | Source (current HTML) |
|---|---|---|---|
| `--wf-surface` | Card / zone / sheet background | `#FFFFFF` | `--bg-2` (light) |
| `--wf-bg` | Page background (behind cards) | `#F4F4F4` | `--bg` (light) |
| `--wf-recessed` | Recessed zone, input field fill, section band | `#EEEEEE` | `--bg-3` (light) |
| `--wf-fill` | Filled block, placeholder box, skeleton base | `#E2E2E2` | `--bg-4` (light) |
| `--wf-skeleton` | Skeleton bar / disabled fill | `#D8D8D8` | `--text` (dark theme, reused as gray) |
| `--wf-muted` | Muted text, icon-placeholder label, captions | `#909090` | `--text-3` (light) / `--text-2`↔ |
| `--wf-text-2` | Secondary text | `#5A5A5A` | `--text-2` (light) |
| `--wf-text` | Primary body ink | `#252525` | `--text` (light) |
| `--wf-ink` | Max-contrast headings, primary button fill | `#111111` | `--white` (light, inverted) |
| `--wf-ink-max` | Pure ink (rare: on-fill max contrast) | `#000000` | `--accent` (light) |

### 4.2 — Borders (from the same tokens)

| Token | Role | Value | Solid-hex fallback |
|---|---|---|---|
| `--wf-border` | Hairline / default border, divider | `rgba(0,0,0,0.09)` | `#E8E8E8` |
| `--wf-border-2` | Strong border, focused field, selected | `rgba(0,0,0,0.15)` | `#D9D9D9` |

### 4.3 — Provenance (do not use directly, kept for traceability)

The current HTML also ships a **dark** theme. Wireframes do **not** use it, but the values are recorded so the grays stay in one family: `--bg #080808`, `--bg-2 #0F0F0F`, `--bg-3 #161616`, `--bg-4 #1C1C1C`, `--text #D8D8D8`, `--text-2 #909090`, `--text-3 #555555`, `--white #F0F0F0`, `--accent #FFFFFF`.

**Rule:** a wireframe may only use HEX values from §4.1 / §4.2. No new grays, no colour, no gradients.

---

## 5. Typography

- **Family (confirmed — San Francisco):** `font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif;`. One family, no pairing. Real SF on Apple; system-font fallback elsewhere (SF is not web-embeddable).
- **Weights:** two only — `400` (regular) and `600` (semibold) for emphasis/headings. No light/black, no italics for meaning.
- **Sizes (hierarchy only, not a final scale):** `13 / 15 / 17 / 22 px`. Body = 15; captions/muted = 13; screen title = 22.
- **Line-height:** `1.4` body, `1.2` headings. **Alignment:** left (never justified; centre only for a single empty-state block).
- No letter-spacing tricks, no all-caps except a section eyebrow (11–13px, muted).

---

## 6. Layout & grid

- **Viewport:** `375 × 812` (iPhone reference). Build each page inside a fixed `375px`-wide frame; content scrolls vertically inside it.
- **Base unit: 8px.** Every margin/padding/gap is a **multiple of 8**; **4** is the only allowed half-step. Spacing scale: `4 · 8 · 16 · 24 · 32 · 40 · 48`.
- **Screen padding:** `16px` left/right gutter (content width `343px`).
- **Border radius:** multiples of **2** only — `2 · 4 · 6 · 8`. Cards `8`, inputs/buttons `6`, chips/tags `4`, hairline chips `2`.
- **Tap targets:** min **44 × 44px** (Apple HIG). Operator action controls larger where noted in `_screens.md` (gloves/sunlight, `RJ-O2`).
- **Fixed chrome (structural zones, heights are multiples of 8):**
  - **Status/header zone** — top, `56px` (or `44` where minimal).
  - **Bottom navigation** — `56px`, holds the global tabs from `sitemap.md §7.4` (Client: Order · Activity · Help · Account / Operator: Jobs · Earnings · Ratings · Account). Only on screens that carry global nav.
  - **Safe areas** — reserve `≈44px` top, `≈34px` bottom; do not place tap targets inside them.

---

## 7. Semantic HTML

Use landmarks and real elements. A wireframe that is all `<div>` fails review.

| Zone | Element |
|---|---|
| Top bar / screen title / back | `<header>` |
| Global tab bar / in-screen tabs | `<nav>` |
| The screen's content | `<main>` |
| A distinct zone / grouping | `<section>` |
| A self-contained card (order card, operator card, job card) | `<article>` |
| Any input group | `<form>`, `<label>`, `<input>`, `<select>`, `<textarea>` |
| Any action | `<button>` (or `<a>` for navigation) |
| Lists (catalogue, history, offers) | `<ul>/<li>` |
| Status / live text (ETA, "loading…") | `<output>` or `<p role="status">` |

**Reference skeleton** (structure only — not a screen):

```html
<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body>
  <div class="wf-frame">            <!-- 375 × 812 mobile frame -->
    <header class="wf-header">…</header>
    <main class="wf-main">
      <section>…</section>
      <article>…</article>
      <form>…</form>
    </main>
    <nav class="wf-tabbar">…</nav>   <!-- only if the screen has global nav -->
  </div>
</body>
</html>
```

A shared `_wireframe.css` should hold the tokens (§4), grid (§6), typography (§5), and button/zone classes so every page pulls from one place.

---

## 8. Zones & placeholders (no images, no icons, no brand)

- **Media / image / map** → a bordered `--wf-recessed` box with a centred uppercase **text label** of what it is: `MAP`, `OPERATOR PHOTO`, `RESULT PHOTO`, `INSPECTION IMAGE`. Never an actual image. Keep the real aspect ratio (e.g. live map ≈ `343 × 200`).
- **Icon** → a `24 × 24` (or `20`) bordered square, or just a text label (`‹ Back`, `Menu`, `Filter`). No icon fonts, no SVG glyphs.
- **Brand / logo** → none. Where a wordmark would sit, use plain text `DRON` at body weight or a `LOGO` placeholder box. No styling, no lockup.
- **Avatar** → a bordered circle (`radius: 999` allowed only for avatars) with initials as text.
- **Charts / earnings graph** → a labelled `--wf-fill` block, e.g. `EARNINGS CHART`.

---

## 9. Content

- **Real, specific text — no lorem ipsum, no "Text here".** Prices, names, statuses, ETAs, error messages must read like the real thing (e.g. "Operator arrives in 6 min", "Package · 2.3 km · ₴180", "Card ending 4921").
- Reuse the **state microcopy already written in `flows.md`** as the real content of each state page (e.g. tracking `-error` = *"Tracking lost"* + recovery; setup `-error` = *"Address outside service zone"*). This keeps wireframe copy traceable to a flow node.
- **Language:** all wireframe copy is **English** (repo rule: all files in English — CLAUDE.md; confirmed July 2026). Production UI is Ukrainian (primary) + English; localisation to Ukrainian is a later product step, not authored into the wireframes.

---

## 10. States — one page per state

Every screen's real states come from its row in `_screens.md`. Rules:

- **Base file = the normal / populated state.** For the five milestone "it worked" screens (Order confirmed, Delivery confirmation, Rate, Wallet, Withdraw) the base **is** the success screen. There is no separate `-success` file.
- Each additional real state (`✓` in `_screens.md`) is its **own page**: `-empty`, `-error`, `-loading`.
- **Same DOM structure across states** — only the content of the affected zone changes. Do not restructure the page per state.
  - **`-loading`** → the real layout with `--wf-skeleton` bars in place of not-yet-loaded content (skeleton, not a spinner-only screen). Keep header/nav solid.
  - **`-empty`** → a real empty-state block: one line explaining the situation + the primary recovery action (e.g. catalogue `-empty` = *"Not in your region yet"* + *"Notify me when DRON launches here"*).
  - **`-error`** → a real error message + the recovery path from the flow (retry / change method / support), never a dead-end unless the flow marks one.
- A state that is `—` in `_screens.md` gets **no page**. Do not invent states.

---

## 11. Buttons

Two axes, both mandatory. Differences are shown in **grayscale only** (fill, border, weight).

**Variants**

| Variant | Fill | Border | Text | Use |
|---|---|---|---|---|
| **Primary** | `--wf-ink` (#111111) | none | `--wf-surface` (#FFFFFF) | the one main action per screen (Pay, Accept, Withdraw) |
| **Secondary** | `--wf-surface` | `1px --wf-border-2` | `--wf-text` | alternate action (Change method, Decline) |
| **Tertiary / ghost** | transparent | none | `--wf-text-2` | low-emphasis (Skip, Cancel, text links) |
| **Destructive** | `--wf-surface` | `1px --wf-border-2` | `--wf-text` + label carries the meaning (e.g. "Cancel order") | rare, wireframe shows it by label, not red |

**Interaction states (each variant must render all):**

| State | Wireframe treatment |
|---|---|
| Default | as above |
| Hover | one gray step darker fill / border |
| Active / pressed | two gray steps darker, no motion |
| Focus | `2px --wf-border-2` outline offset `2px` (accessibility, keep) |
| Disabled | `--wf-fill` background, `--wf-muted` text, no border |

Buttons: height `≥ 44px`, radius `6`, horizontal padding `16`, label at `15px/600`.

---

## 12. File naming & the screen → file map

**Rules**
- Path: `wireframes/<name>.html` for the base, `wireframes/<name>-<state>.html` per state.
- `<name>`: **lowercase latin, kebab-case**, no spaces, no Cyrillic (e.g. `order-setup.html`, `order-setup-empty.html`, `order-setup-error.html`).
- `<state>` ∈ { `empty`, `error`, `loading` }. Success/normal has no suffix (it is the base).
- Shared assets: `_wireframe.css` (tokens + components), this file, `_screens.md`. Leading `_` = not a screen.

**Map** — every base file and the exact state pages to create (derived from the `_screens.md` state matrix; `base = success` marked where the base screen is a milestone):

### Shared / entry
| Screen (`_screens.md`) | Base file | State pages |
|---|---|---|
| Sign in with Diia / BankID | `signin.html` | `signin-error.html`, `signin-loading.html` |
| Choose your role — Client or Operator | `role-select.html` | — |
| Client onboarding | `onboarding-client.html` | `onboarding-client-empty.html` |
| Operator onboarding | `onboarding-operator.html` | — |
| Switch role (global) *(step 8)* | `switch-role.html` | — |

### Client (MJ-1)
| Screen | Base file | State pages |
|---|---|---|
| Home / start an order **+ Service catalogue** (merged per `sitemap.md §7.3`) | `listings.html` | `listings-empty.html` (no results / loosen filters), `listings-error.html` (load failure), `listings-loading.html` |
| Order setup / details | `order-setup.html` | `order-setup-empty.html`, `order-setup-error.html` |
| Order review & price | `order-review.html` | `order-review-loading.html` |
| Payment | `payment.html` | `payment-error.html`, `payment-loading.html` |
| Order confirmed / operator revealed *(base = success)* | `order-confirmed.html` | `order-confirmed-empty.html`, `order-confirmed-error.html`, `order-confirmed-loading.html` |
| Live tracking & ETA | `tracking.html` | `tracking-empty.html`, `tracking-error.html`, `tracking-loading.html` |
| Delivery confirmation *(base = success)* | `delivery.html` | `delivery-error.html`, `delivery-loading.html` |
| Rate the order *(base = success)* | `rate.html` | — |

### Operator (MJ-2 + RJ-O3)
| Screen | Base file | State pages |
|---|---|---|
| Operator home + status toggle | `operator-listings.html` | `operator-listings-empty.html` (idle / no offers) |
| Incoming job offer / accept-decline | `job-offer.html` | `job-offer-empty.html` |
| Job brief / detail | `job-brief.html` | `job-brief-error.html` |
| Job checklist (in progress) | `job-checklist.html` | `job-checklist-error.html` |
| Result upload / close job | `result-upload.html` | `result-upload-error.html`, `result-upload-loading.html` |
| Wallet / earnings *(base = success)* | `wallet.html` | `wallet-empty.html` |
| Withdraw to card / bank account *(base = success)* | `withdraw.html` | `withdraw-error.html`, `withdraw-loading.html` |

### Step 8 — remaining sitemap screens (states traced in [`_screens.md`](_screens.md) "STEP 8")
| Screen | Base file | State pages |
|---|---|---|
| Welcome / first-use explainer (`EJ-1`) | `welcome.html` | `welcome-empty.html` |
| Time-slot pick — calendar-first (`C-2`) | `time-slot.html` | `time-slot-empty.html` |
| Inspection report *(base = success)* (`RJ-C4`, `C-2`) | `inspection-report.html` | `inspection-report-error.html`, `inspection-report-loading.html` |
| Order history (`RJ-C5`) | `order-history.html` | `order-history-empty.html`, `order-history-loading.html` |
| Share / refer (`SJ-1`) | `share.html` | `share-empty.html` |
| Support / dispute (`EJ-2` entry) | `support.html` | — |
| Report an issue (`EJ-2`) | `report-issue.html` | `report-issue-empty.html`, `report-issue-loading.html` |
| Resolution outcome (`EJ-2`) | `resolution.html` | — |
| Contact human support (`EJ-2`) | `contact-support.html` | `contact-support-error.html` |
| Operator landing / fee terms (`OE-12`) | `operator-fee-terms.html` | — |
| Sign up / identity (`MJ-2`) | `operator-signup.html` | `operator-signup-error.html`, `operator-signup-loading.html` |
| Verification / document upload (`MJ-2` gate) | `operator-verification.html` | `operator-verification-error.html`, `operator-verification-loading.html` |
| Profile setup (`RJ-C1` · `EJ-3`) | `operator-profile-setup.html` | — |
| Dispute / client issue — operator (`EJ-2`, `OE-13`) | `operator-dispute.html` | `operator-dispute-error.html` |
| Ratings dashboard (`EJ-3`) | `ratings.html` | `ratings-empty.html` |

*Service catalogue stays merged into `listings.html` (`sitemap.md §7.3`) — no separate file, by design.*

---

## 12b. Per-page checklist

A page is done when **all** hold:

- [ ] Built inside the `375 × 812` frame.
- [ ] Grayscale only — every value from §4.1 / §4.2; no colour, no shadow, no gradient.
- [ ] Semantic landmarks used (`header` / `nav` / `main` / `section` / `article` / `form` / `button`); not div-soup.
- [ ] San Francisco stack; weights limited to 400/600; sizes from the §5 set.
- [ ] All spacing a multiple of 8 (or 4); all radii a multiple of 2.
- [ ] Real text; no lorem; state copy traceable to a `flows.md` node.
- [ ] No images/icons/brand — placeholders per §8.
- [ ] Correct file name (kebab latin) and it matches the §12 map.
- [ ] Every button shows its variant + all interaction states (§11).
- [ ] Same DOM structure as its sibling state pages; only affected-zone content differs.
- [ ] The state exists in the screen's `_screens.md` row (no invented states).

## 13. Shared shell (`_wf-shell.js`)

Every page links one shared shell script (`<script src="_wf-shell.js"></script>`). It injects, identically on
every page (grayscale, §4):

- a **left screen-map tree** (section → screen → its real states, built 1:1 from `_screens.md` and the §12 map);
- a **top toolbar** with the mobile / tablet / desktop viewport switcher and a **"Hide annotations"**
  toggle (hides the `.meta` doc panel + `.zlabel` zone labels on every page; choice persists via `localStorage`);
- a **"Back to DRON"** button at the top of the tree — links to `../research.html`, the project's main/landing
  page. This is the single exit from the wireframe prototype back to the project hub;
- a **language switcher** (`EN` / `UA`) injected into the top-right of each screen's `header.topbar` (opposite
  the logo). **English is primary/default; Ukrainian is secondary.** The choice persists via `localStorage`.
  The switcher proves the control's presence and placement only — page copy stays English per §9.

The shell is prototype chrome, **not** page content — it is the one exception to "HTML is display-only" and lives
in JS by design. Edit the shell in `_wf-shell.js` alone; do not hand-add nav, the switcher, or the back button to
individual pages. New pages are registered in the shell's `TREE` (§12 map), never wired manually.
