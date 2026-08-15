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
7. **No icons, no shadows, no colour, no final font** — deferred (§3, §8). **Three carve-outs, each decided by the designer.** Two are still grayscale: **real imagery** where a frame needs a picture to be judged, and the **DRON logo** in the reserved brand slot (§8). The third is not — the **language switch** carries the kit's colours on every screen, painted or not (2026-08-02): green for the chosen language, warm grey for the other. It is one control injected into all 84 files, and it should not change colour depending on whether the screen behind it has been painted yet. Values and measurements live in `ui/kit.css` `.dr-lang`; `ui/inventory.md` carries the row.

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

**The back control is navigation, so it is `<a href>` — never a bare `<button>` (2026-08-15).**
This is the row above applied to the one control that kept escaping it. `_wf-shell.js` wires every
`.back` / `.dr-back` to `history.back()`, which is the `HIG · Navigation bars` behaviour — the back
control returns to wherever the user actually came from, and a screen with several ways in (
`contact-support` has six) cannot express that with a fixed link. But the shell calls
`preventDefault()` **only when `history.length > 1`**, so on a page opened first in a tab a
`<button>` with no `href` does nothing at all: a nav bar with a dead exit, against §1's no-dead-ends
rule. An `<a href>` gets both — history when there is history, the link as the floor.

- The `href` names the screen's **canonical previous screen** (the one the label already says), not
  every entry point. It is the fallback, not the route.
- The label stays the **title of the screen you return to** (`voice.md`, `HIG · Navigation bars`).
- **The swap also put those 14 back onto San Francisco — it is not visually neutral, and the
  difference is the point.** Measured in the browser at the 375 preset, same class, same text:
  the `<button>` rendered **Arial · line-height `normal` · 41.67 × 17.6**, the `<a>` renders
  **`-apple-system` · 21px · 45.63 × 21**. Cause: a `<button>` does not inherit `font-family` or
  `line-height` from its ancestors — the UA sheet sets `font: 400 13.333px Arial` — and `.dr-back`
  overrides only `font-size` and `font-weight`. So the product bar had been carrying **two
  typefaces**: 14 back controls in Arial, the 10 anchor ones in SF, against §5's one-family rule.
  The label grows 3.96px, the box 3.4px, and nothing else moves — `.dr-back` carries
  `text-decoration:none` and sets no `display`, `padding` or `height`, and `.dr-topbar` targets no
  element name. All 24 now render identically.

Applied 2026-08-15 to the 14 pages still holding a `<button>`: `contact-support(-error)`,
`order-review(-loading)` → `order-setup`, `order-setup(-empty/-error)` → `listings`,
`payment(-error)` → `order-review`, `rate` → `delivery`, `report-issue(-empty/-loading)` and
`resolution` → `support`. All 24 back controls now match.

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

## 8. Zones & placeholders (no icons; imagery and brand by exception)

- **Media / image / map** → a bordered `--wf-recessed` box with a centred uppercase **text label** of what it is: `MAP`, `OPERATOR PHOTO`, `RESULT PHOTO`, `INSPECTION IMAGE`. Keep the real aspect ratio (e.g. live map ≈ `343 × 200`). **Exception (2026-08-02):** where the designer has supplied the real asset, the label is replaced by the picture itself — the well then drops its border and padding and the image fills it (`.media-ph:has(img)` in `_wireframe.css`). Fifteen slots across nine pages carry a real picture; every other well is still a label. `visuals/gaps.md` is the register of which is which.
  - **Full-bleed slider (`.is-bleed`, 2026-08-02).** On an onboarding slider the picture is not a well at all — it is the **background of the whole frame**. The slider is lifted out of `main`'s flow and pinned to the 375 × 812, so the artwork runs to all four edges and passes behind the bars. **The bars themselves are untouched** — status bar, top bar and action bar keep their ground, their hairline and their place; the picture simply sits behind them. Nothing that was on the screen moves. The picture stays a child of its slide, so a swipe still changes it.
    - **The layer is capped at 35% of the frame height, bottom-anchored.** That number is measured, not chosen. The copy is centred, and the longest slide (three of `welcome`, four lines) ends 480px down; 35% starts the artwork at 528px, which leaves a band for the pager between them. Uncapped, the operator cutout — a 595 × 702 portrait in a portrait frame — filled the screen and put a dark cap under the title at **1.00:1**. Capped, all three slides share one composition and the copy measures **13.94:1** (title) and **6.27:1** (lead).
    - **Open finding, not fixed: the pager rides on the artwork.** It stays where it always sat, at the foot of `main`. Measured over the three pictures its active dot reads **1.00 / 4.69 / 17.17:1**, and on the operator's jacket the mark saying which slide you are on vanishes — `WCAG 1.4.11` asks 3:1 of a state indicator. Moving it was tried and reverted the same day: it is a component the designer did not ask to change, and the call is hers. The inactive dot is a separate and older failure — `--wf-fill` `#E2E2E2` on `--wf-bg` `#F4F4F4` is **1.18:1** on every page with a pager, picture or none.
    - `object-fit` is **`contain`, never `cover`** — these are transparent cutouts, and covering a 375-wide portrait throws away most of a landscape's width.
    - **Trim the dead alpha before serving, and serve at twice the drawn size.** `contain` fits the **canvas**, not the ink, so every transparent pixel around the subject is size given away. `operator-at-work.png` carried 27px of empty canvas on its left and 17px on top — **23% of the file** — and drew 254 × 182 in a 373 × 203 band while a trimmed copy draws **283 × 203**. It was also served at 240px into a 373px box, a **1.55× upscale**, which is what made that slide read soft next to `welcome`. Rule: crop to the alpha bounding box, work out what `contain` will actually draw, and serve **2×** that — not a round number picked in advance. Audited across all six bleed slides on 2026-08-02; `welcome` was already correct, the three onboarding assets were not.
    - **All three sliders carry it** — `welcome`, `onboarding-client`, `onboarding-operator` — so the first-run sequence reads as one thing. Copy measures **13.94:1** (title) and **6.27:1** (lead) on all nine slides.
    - **A slide still waiting on its picture keeps its labelled well**, stretched across the same band (`.slide-ph:has(img)` is what drops the frame, not `.is-bleed` itself). Three of the nine are in that state — `onboarding-client:REPORT`, `onboarding-operator:STEPS · PAID` — and they close themselves the day the file lands, with no edit to the page. This replaces the earlier rule that a slider had to wait until every slide had its asset: a dashed well in the right place reads as *pending*, and it was holding two finished screens hostage to one missing file.
- **Icon** → a `24 × 24` (or `20`) bordered square, or just a text label (`‹ Back`, `Menu`, `Filter`). No icon fonts, no SVG glyphs.
- **Brand / logo** → the **DRON mark**, in the reserved brand slot only. The mark is `assets/brand/dron-logo.svg` — a single-path quadcopter silhouette from Figma (`YlGWlsWWjKSCxhONMzGG2F`, node `56:52`), trimmed to its ink (`viewBox 0 85 257 86`, aspect **2.99 : 1**). It is drawn as a CSS mask filled with `currentColor`, so it stays grayscale like everything else and never introduces a second colour. Rendered **60 × 20** — a growth from the 44 × 24 dashed placeholder it replaces, because 3:1 artwork inside 44px would stand only 14.7px tall. `#252525` on `#FFFFFF` measures **15.33 : 1**. Elsewhere a wordmark is still plain text `DRON` at body weight. No lockup, no tagline, no second mark.
  - **The slot follows the back control, not the title (widened 2026-08-02).** A top bar holds the mark **when it has no `‹ Back`** — 40 of the 84 pages. Two shapes: on the 16 entry and listing screens the mark stands alone (`welcome`, `signin`, `role-select`, `onboarding-*`, `listings*`, `operator-listings*`); on the 24 **tab-root** screens it leads the bar and the screen's own title follows it 8px later (`account`, `operator-account`, `delivery*`, `job-offer*`, `order-confirmed*`, `order-history*`, `payment-loading`, `ratings*`, `support`, `tracking*`, `wallet*`).
  - **The 44 pages that carry a `‹ Back` do not get it.** `HIG · Navigation bars` gives that bar to the back control and the title; a mark wedged between them makes the leading edge argue with itself. This is the earlier rule narrowed, not dropped — it was "no logo where there is a title", it is now "no logo where there is a back".
  - **Measured before it was written.** At the 375px mobile preset the 24 tab-root bars all clear with room: the tightest is `Order confirmed` (title **127px**), leaving **148px** free after the 60px mark and its 8px gap. Zero of 24 overflow. On a tab root the title's `padding-left:16px` is dropped when the mark arrives — that inset stood in for the optical lead-in a back control would give, and the mark now gives it; the title then sits 8px after the mark, the same gap `.who` keeps from `.avatar` on the `operator-listings` bar.
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
  - **`-loading`** → the real layout with `--wf-skeleton` bars in place of not-yet-loaded content (skeleton, never a spinner *instead of* the layout). Keep header/nav solid.
    - **One exception — a system action with no layout to rehearse.** Where the wait is not *content is
      arriving* but *the system is working* (authorising a payment, verifying an identity), a skeleton is
      a claim about a screen that never renders. There the screen carries an **activity indicator** beside
      the text that names the wait — `.dr-mark--milestone` + `.dr-spin`, the control `HIG · Progress
      indicators` prescribes when the wait is short and progress is unknowable — and skeleton bars stay
      only where they still rehearse something. Built on `payment-loading` 2026-08-15 (`concept.md` rev 65).
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

Buttons: **`min-height: 44px`** — never a fixed `height` — radius `6`, horizontal padding `16`, label at `15px/600`.

> **Why `min-height`.** `main` is a scrolling flex column, so a `.btn` placed directly in it is a flex
> item. With a fixed `height` it shrinks the moment the page overflows, and the 44px HIG target
> collapses to the line box — measured at **22.6px** on `delivery.html` (2026-08-01) and **36.4px** on
> `listings-loading.html`. `min-height` is a floor `flex-shrink` cannot cross, and it also lets a
> wrapped label grow the button instead of overflowing it. `.btn-sm` has to restate its own
> `min-height: 32px`, or the base 44 wins. Any page-level `<style>` that re-declares `.btn` must copy
> the `min-height` form; seven pages carried a stale fixed-height copy that shadowed the shared rule.

---

## 12. File naming & the screen → file map

**Rules**
- Path: `wireframes/<name>.html` for the base, `wireframes/<name>-<state>.html` per state.
- `<name>`: **lowercase latin, kebab-case**, no spaces, no Cyrillic (e.g. `order-setup.html`, `order-setup-empty.html`, `order-setup-error.html`).
- `<state>` ∈ { `empty`, `error`, `loading` }. Success/normal has no suffix (it is the base). A screen may
  also have **named interaction sub-views** beyond the four data states (e.g. `listings-filters` = filter panel
  open, `listings-filtered` = filters applied); these use a descriptive suffix and are documented in the map row.
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
| Account / profile | `account.html` | `account-edit.html` (edit settings — personal details, drone-document / insurance upload, save) |

### Client (MJ-1)
| Screen | Base file | State pages |
|---|---|---|
| Home / start an order **+ Service catalogue** (merged per `sitemap.md §7.3`) | `listings.html` | `listings-filters.html` (filter panel open — Price / Time / Location), `listings-filtered.html` (filters applied — the All chip + removable chips), `listings-empty.html` (no results / loosen filters), `listings-error.html` (load failure), `listings-loading.html` |
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
| Operator account / profile (`§7.4` operator · role switch) | `operator-account.html` | — |

*Service catalogue stays merged into `listings.html` (`sitemap.md §7.3`) — no separate file, by design.*

*Operator vs client Account: the operator global nav's **Account** tab opens `operator-account.html` (operator bottom nav + payout/service-area/drone details), never the client `account.html`. Both share the `account-edit.html` edit sub-view (drone documents / insurance).*

---

## 12b. Per-page checklist

A page is done when **all** hold:

- [ ] Built inside the `375 × 812` frame.
- [ ] Grayscale only — every value from §4.1 / §4.2; no colour, no shadow, no gradient.
- [ ] Semantic landmarks used (`header` / `nav` / `main` / `section` / `article` / `form` / `button`); not div-soup.
- [ ] San Francisco stack; weights limited to 400/600; sizes from the §5 set.
- [ ] All spacing a multiple of 8 (or 4); all radii a multiple of 2.
- [ ] Real text; no lorem; state copy traceable to a `flows.md` node.
- [ ] No icons; imagery and brand only where §8 allows them — everything else a placeholder per §8.
- [ ] If the top bar has no `‹ Back`, it opens with the DRON mark (`.brand`, 60 × 20) — alone on an entry screen, ahead of the title on a tab root. If it has a `‹ Back`, it has no logo.
- [ ] Correct file name (kebab latin) and it matches the §12 map.
- [ ] Every button shows its variant + all interaction states (§11).
- [ ] Same DOM structure as its sibling state pages; only affected-zone content differs.
- [ ] The state exists in the screen's `_screens.md` row (no invented states).

## 13. Shared shell (`_wf-shell.js`)

Every page links one shared shell script (`<script src="_wf-shell.js"></script>`). It injects, identically on
every page (grayscale, §4):

- a **left screen-map tree** (section → screen → its real states, built 1:1 from `_screens.md` and the §12 map).
  On desktop it is **pinned open** beside the frame; on narrow / mobile widths (`≤ 899px`) it **collapses into
  the header burger** and slides in over a scrim (tap the scrim, the burger again, or `Esc` to close);
- a **fixed top header** carrying, left → right: **three icon buttons** — **Back to DRON**, an **annotations
  toggle**, and **Tone of voice** — then the current screen name, the mobile / tablet / desktop viewport
  switcher (hidden on mobile — you are already at mobile), and the **burger / screen-map** button on the right.
  The header icons are grayscale line glyphs (tool chrome only, not part of the §8 no-icons deliverable rule);
- the **Back to DRON** icon button (filled black, top-left) links to `../research.html`, the project's
  main/landing page — the single exit from the wireframe prototype back to the project hub;
- the **annotations** icon button hides the `.meta` doc panel + `.zlabel` zone labels on every page and flips to
  the filled state; choice persists via `localStorage` (`wf-hide-anno`, default = shown);
- the **Tone of voice** icon button is a **placeholder** for the forthcoming voice page (`voice.md` → a rendered
  page); kept inert for now so the prototype never dead-ends on a 404;
- a **language switcher** (`EN` / `UA`) injected into the top-right of each screen's `header.topbar` (opposite
  the logo). **English is primary/default; Ukrainian is secondary.** The choice persists via `localStorage`.
  The switcher proves the control's presence and placement only — page copy stays English per §9.

The shell is prototype chrome, **not** page content — it is the one exception to "HTML is display-only" and lives
in JS by design. Edit the shell in `_wf-shell.js` alone; do not hand-add nav, the switcher, or the back button to
individual pages. New pages are registered in the shell's `TREE` (§12 map), never wired manually.
