---
name: DRON
description: Drone-as-a-service, client mobile web — the Studio layer as built on the ten painted product surfaces
colors:
  page: "#F7F5F2"
  card: "#ECE9E4"
  media: "#E4E1DA"
  btn2: "#D6D2C9"
  inset: "#F2F0EC"
  ink: "#1A1A1A"
  slate: "#5A5751"
  line: "#D9D5CE"
  green: "#9BCF4A"
  on-green: "#1A1A1A"
  green-soft: "#B7DA7C"
  green-wash: "#E7F0D2"
  warn: "#E4A11B"
  warn-ink: "#7A5200"
  warn-wash: "#F6E7C4"
  danger: "#C4462A"
  danger-ink: "#9A3115"
  danger-wash: "#F2D8CF"
  trust-ink: "#2A5C7D"
  trust-wash: "#D8E6F2"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: "30.8px"
    letterSpacing: "-0.02em"
  number:
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "20px"
    letterSpacing: "-0.02em"
    fontFeature: "tabular-nums"
  title:
    fontSize: "17px"
    fontWeight: 600
    lineHeight: "23.8px"
    letterSpacing: "-0.01em"
  heading:
    fontSize: "15px"
    fontWeight: 600
    lineHeight: "18px"
  body:
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "18.2px"
  body-sm:
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "18.2px"
  meta:
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: "15px"
  caption:
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "16.8px"
  micro:
    fontFamily: "ui-monospace, 'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "15.4px"
    letterSpacing: "0.09em"
  micro-sm:
    fontSize: "10.5px"
    fontWeight: 400
    lineHeight: "14.7px"
rounded:
  detail: "4px"
  input: "10px"
  btn: "12px"
  media: "13px"
  card: "16px"
  panel: "22px"
  pill: "999px"
spacing:
  within: "4px"
  within-lg: "8px"
  snug: "12px"
  screen: "16px"
  group: "20px"
  list: "28px"          # .dr-list — the list is the screen
  list-snug: "12px"     # .dr-list--snug — the list is one zone among several
  cta-clearance: "32px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-green}"
    rounded: "{rounded.btn}"
    padding: "0 16px"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.btn2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.btn}"
    padding: "0 16px"
    height: "44px"
  button-icon:
    backgroundColor: "{colors.btn2}"
    textColor: "{colors.ink}"
    rounded: "999px"
    size: "44px"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "24px 20px"
  card-compact:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "20px 16px"
  row-panel:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.card}"
    padding: "8px 16px"
  row-panel-input:
    backgroundColor: "transparent"
    rounded: "0"
    padding: "8px 0"
  inset-strip:
    backgroundColor: "{colors.inset}"
    rounded: "{rounded.btn}"
    padding: "16px"
  chip-live:
    backgroundColor: "{colors.green-wash}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "5px 10px"
  chip-muted:
    backgroundColor: "{colors.media}"
    textColor: "{colors.slate}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "5px 10px"
  tab:
    textColor: "{colors.slate}"
    rounded: "{rounded.card}"
    height: "50px"
  tab-selected:
    backgroundColor: "{colors.green-wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    height: "50px"
  status-live:
    backgroundColor: "{colors.green}"
    rounded: "999px"
    size: "20px"
  status-done:
    backgroundColor: "{colors.btn2}"
    textColor: "{colors.ink}"
    rounded: "999px"
    size: "20px"
  node-done:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-green}"
    rounded: "999px"
    size: "22px"
  node-pending:
    backgroundColor: "{colors.card}"
    textColor: "{colors.slate}"
    rounded: "999px"
    size: "22px"
  mark-success:
    backgroundColor: "{colors.green-wash}"
    textColor: "{colors.ink}"
    rounded: "999px"
    size: "64px"
  mark-neutral:
    backgroundColor: "{colors.media}"
    textColor: "{colors.slate}"
    rounded: "{rounded.media}"
    size: "52px"
  mark-warn:
    backgroundColor: "{colors.warn-wash}"
    textColor: "{colors.warn-ink}"
    rounded: "{rounded.media}"
    size: "52px"
  mark-danger:
    backgroundColor: "{colors.danger-wash}"
    textColor: "{colors.danger-ink}"
    rounded: "{rounded.media}"
    size: "52px"
---

# Design System: DRON

## Overview

Extracted from the painted product surfaces and verified by computed style in a browser. Written
2026-08-01 against ten pages carrying ten per-page `<style>` blocks; **re-counted 2026-08-16
(rev 153), when that description had stopped being true of the build.**

| | Measured 2026-08-18 |
|---|---|
| Files in `wireframes/` | **117** — 114 screen-and-state pages plus 3 option partials (`_field-options`, `_checkbox-options`, `_navbar-options`) |
| Screens | **49**, collapsing `-empty` / `-error` / `-loading` states and the `-aerial` / `-inspection` per-service variants into the screen they are a state or a variant *of* |
| Painted | **117 of 117 files · all 49 screens** |
| Still grayscale | **none** |

**The whole prototype is painted as of 2026-08-18** (`concept.md` rev 157). The layer that began on
2026-08-01 across ten pages, each carrying its own pasted copy of the stylesheet, now covers both
personas end to end: 38 remaining grayscale files were painted in one pass by five parallel agents
— JOBS 13 · EARNINGS 6 · RATINGS 2 · ACCOUNT 9 · ENTRY 8 — and the whole of it cost the kit **four
components and two modifiers**. The ACCOUNT pack, nine screens including the entire signup and
verification flow, added **nothing**: every component it needed already existed. That is the number
to read if you want to know whether this is a design system or a folder of screens.

**There is no per-page `<style>` block any more, and that is the single largest structural change
since this document was written.** The ten families that each carried their own byte-identical copy
now link one shared `ui/kit.css`, so a component cannot drift between two screens by being pasted
twice. Three exceptions are recorded rather than tidied away:

- `switch-role` carries **live** one-page CSS — `.success-mark:has(img)`, the confirm mark wearing
  the client's own photograph. One screen, so by the kit's own inclusion rule it is a one-off and
  stays out of `ui/kit.css`.
- `account` and the ten `listings` files still carry the **grayscale base sheet inlined** from
  before they were painted. It is dead weight, not a conflict: the block precedes the `kit.css`
  link, so the kit wins every product surface — measured on `listings`, frame radius **22px**,
  page **#F7F5F2**, card **#ECE9E4** at **16px**, exactly as on `tracking`. What it still paints is
  the canvas *around* the frame (`body` `#EEEEEE`), which is not product.
- `account`'s block also styles `.op-card` / `.op-edit`, which appear nowhere in that page's markup.
  Dead CSS, named here so it is not rediscovered as a mystery.

The layer applies to the phone frame only (`.wf-frame`, 375 × 812, `--r-panel` 22px, 1px `--line`
border). The wireframe annotation sidebar keeps its own chrome and is not part of the system.

**Key characteristics:**

- **Four painted surfaces, one warm ramp.** Page `#F7F5F2` → card `#ECE9E4` → media `#E4E1DA` →
  secondary button `#D6D2C9`. Every step is warm; there is no white and no black in the palette
  (`#FFFFFF` and `#000000` appear nowhere on a product surface).
- **Two inks.** `#1A1A1A` and `#5A5751`. Every rendered string on a light surface is one of the two.
  The one dark surface (`.dr-call`, the night pair) is the documented exception and carries its own.
- **One accent, fill only.** `#9BCF4A` is a fill or a tint. It is never a text colour and never an
  icon stroke — measured, it is 1.69:1 on the page and 1.52:1 on the card.
- **Measured green budget:** solid green covers **4.43% / 5.09% / 4.71%** of the frame on
  `order-history` / `tracking` / `delivery`, and **4.93%** on `delivery-aerial` (15,022px² of
  304,500, of which the `Rate this order` primary is the great majority). The primary CTA is
  81–100% of the green on every page measured.
- **Flat, and now with two shadow rungs spent instead of one.** No card, no media well and no
  photograph casts a shadow anywhere in the kit — that rule is intact, and every `box-shadow` in
  `ui/kit.css` was enumerated on 2026-08-16 to prove it. What has changed since 2026-08-01 is that
  a second rung found its home: `--sh-sm` under the green primary (3 sites — block primary,
  circular primary, pressed language toggle) and **`--sh-raised` under the two surfaces that
  genuinely float**, `.dr-sheet` and `.dr-toast`. Both were recorded in the kit when spent, on the
  reading rev 43 set: a floating surface belongs in a modal, drawer or popover, and the flat rule
  is about cards sitting *in* the page. `--sh-card` and `--sh-onphoto` are still applied to nothing.
- **One icon system.** **654 SVGs** across the 76 painted files. **636** are on `viewBox="0 0 24 24"`
  and **631** declare `stroke-width="1.7"`, all `fill="none"`, all `currentColor`. The **18** that
  are not are the third-party payment and identity marks — Apple Pay, Google Pay, Diia — which come
  on their own boxes (`0 0 40 20`, `0 0 46 23`, `0 0 814 1000`, `2 2 43.12 44`) and are filled
  artwork, not members of this set. They are quoted, not drawn, and are not exempted glyphs.
- **One font stack**, declared once in `_wireframe.css`. No page declares a second UI family.
- **Ten type sizes**, all in use: 22 · 20 · 17 · 15 · 14 · 13 · 12.5 · 12 · 11 · 10.5.
- **Six radii plus circles.** `10` · `12` · `13` · `16` · `22` · `999`, and `50%`. Two values sit
  off the ramp on purpose and are recorded as quotations rather than rungs: the home indicator's
  `2` and the onscreen keyboard's key at `5`, both quoted from iOS (see the keyboard's own section).
- **`--warn`, `--danger` and `--r-input` are live now.** This document said they were "declared and
  applied to nothing"; that was true of the ten pages and is no longer true of the kit. `--warn`
  paints `.dr-star[aria-pressed="true"]` and `--warn-wash`/`--warn-ink` the warning mark (5.65:1);
  `--danger` paints `.dr-btn--danger-solid` (4.53:1 against `--page`); `--r-input` is spent 5 times.
- **Zero text-contrast failures.** Lowest measured text pair is 4.77:1 (AA needs 4.5:1).

## Colors

Declared as custom properties on `.wf-frame`. `--warn`, `--danger` and `--r-input` are declared
and applied to nothing — they are recorded rungs, not live values (`var(--warn)` and
`var(--danger)` each appear 0 times across the ten pages).

### Primary

- **`--green` Signal Green** (`#9BCF4A`) — the single accent. Fill only: the primary button, the
  walked progress node, the live status disc. Charcoal sits on it at **9.46:1**. As a foreground
  it is 1.69:1 on the page and 1.52:1 on the card, so it is never text and never a stroke —
  and, since 2026-08-15 (rev 86), with **no exception at all**: the mode picker's
  current-row checkmark wore green from rev 50 and is now `--ink` at **14.37:1**, so the
  rule stands unqualified and that row has left the below-3:1 table.
- **`--on-green`** (`#1A1A1A`) — the only colour permitted on a green fill. Never white: white on
  `#9BCF4A` is 1.84:1.
- **`--green-soft`** (`#B7DA7C`) — the accent **two** steps lighter, added 2026-08-24 on the
  designer's word (*«зроби бекграйнд трохи світлішим зеленим»*, then *«ще трохи світліший»*).
  **Derived, not picked:** `--green` **70%** + `--page` **30%** in sRGB, so the hue is the accent's
  own and the 30% that lifts it is the ground the card sits on. **The token was retuned, not
  replaced** — it stood at `#A9D563` (85/15) for one revision; the name, the spend and the
  construction never moved, only the mix. Charcoal on it is **11.05:1**, better again than the
  10.26:1 it replaces and the 9.46:1 before that; against the page it is **1.45:1** and against the
  card **1.30:1**, so it is a **fill and not a tint** — it counts against the green budget exactly
  as `--green` does, and stands **1.33:1** clear of `--green-wash`. **`--slate` crosses the line
  here at 4.57:1** — it now clears `WCAG 1.4.3`'s 4.5 at 13px, by **1.6%** — **and is still not
  used**: a margin of a hundredth is not a margin, and `--on-green` is the palette's rule on any
  green ground regardless. **It is 1.17:1 against `--green` itself**, which is the one thing it may
  never do: two greens this close cannot sit side by side and read as two surfaces, so it is a
  *replacement* fill on one card and never a second tone beside the first. **One spend, and since
  2026-09-03 (rev 214) none:** `.dr-balance--banner` on `ratings` was its only site, and that banner
  went back to solid `--green` on the designer's word (*«make background colour as on this page
  bunner [wallet] keeping the existing puttern image with stars»*), so **a fifth green now sits in
  the palette with no product surface.** It stays **declared** — the mix is arithmetic between two
  members nobody should re-derive, and one word brings it back — but the spend is stated as **zero**
  rather than left claimed, the way `--sh-card` and `--sh-onphoto` are. `wallet`'s
  `.dr-balance--card` keeps `--green` and always did.
- **`--green-wash`** (`#E7F0D2`) — the one green tint. Carries the selected **bottom** tab, the
  verified badge, the delivered / waiting milestone marks, and from rev 269 the count badge on an
  in-page tab (the in-page tab's own selected state went to solid `--green` that revision). Charcoal on it is **14.75:1**. Against the
  page it is only **1.085:1**, so the tint is a hue signal, not a luminance one — anything relying
  on it also carries an ink change or a glyph.

### Neutral — the four painted surfaces

- **`--page`** (`#F7F5F2`) — the screen ground, and the ground of every system bar. Status bar,
  nav bar, tab bar and action bar all take it, so the chrome melts into the page and only the
  `--line` hairline separates them.
- **`--card`** (`#ECE9E4`) — every card surface: order cards, the operator card, the details /
  ETA panel, the message block. On the page it is a **1.11:1** step.
- **`--media`** (`#E4E1DA`) — media wells, muted chips, the direction chip, the skeleton ground of
  a well. On the page it is a **1.20:1** step.
- **`--btn2`** (`#D6D2C9`) — the secondary button, circular icon actions, skeleton bars, the
  settled status disc, and since **2026-08-27 (rev 203)** the switch's **off track**, where it
  replaced a transparent track and a 1.7px `--ink` ring. The knob on it is **11.54:1**.
- **`--inset`** (`#F2F0EC`) — derived, not declared: `color-mix(in srgb, var(--page) 55%, var(--card))`.
  The From ▸ To strip inside a card. It sits **1.06:1 above the card** and 1.05:1 under the page —
  a plane inside the card rather than a second card on it, which is what marks the route as a
  different kind of fact from the rows around it.
- **`--line`** (`#D9D5CE`) — every hairline: bar borders, `.kv` row rules, the pending progress
  track, the zone-label rule. On the card it is **1.21:1**.

### Neutral — ink

- **`--ink`** (`#1A1A1A`) — titles, values, card names, button labels, every icon glyph, and the
  focus ring.
- **`--slate`** (`#5A5751`) — labels, dates, keys, body copy, unselected tabs, pending milestones.

### Semantic

Each family is a **wash carrying its own ink**, and the raw hue is drawn only where TEXT ON IT does
the identifying — `--warn` on the card is 1.84:1 and `--danger` reaches only 4.07:1, so neither hue
can carry a mark on its own.

- **`--warn`** (`#E4A11B`) — the yellow is the RATING's, and since **2026-08-27 (rev 204)** it is
  drawn in **one** place again: the filled star (`.dr-star[aria-pressed="true"]`, `.dr-stars`,
  2026-08-03). Its second spend — the operator's rating pill on his photograph, added
  **2026-08-24 (rev 190)**, `--ink` on it at **7.80:1** (`WCAG 1.4.3` ✓, 1.73× the 4.5 an 11px
  line needs) — was deleted on the designer's *«delete rating badge»*. The declaration survives
  in `.dr-profile__rating` and is spent on no page. The fill was 2.05:1 on the page and was never
  the identifier; the number was. `--danger`
  is still declared and drawn nowhere.
- **`--warn-wash` / `--warn-ink`** (`#F6E7C4` / `#7A5200`) — ETA slipping. `tracking-empty`.
- **`--danger-wash` / `--danger-ink`** (`#F2D8CF` / `#9A3115`) — signal lost, upload missing.
  `tracking-error`, `delivery-error`.
- **`--trust-wash` / `--trust-ink`** (`#D8E6F2` / `#2A5C7D`) — **RETIRED 2026-08-18 (rev 157) and
  now spent nowhere.** The designer, on the operator card: *«оператор сірий лайсенс і insurance
  зелені»*, and then, asked whether the client screens should follow: everywhere the same. So
  `.dr-chip--trust` became `.dr-chip--claim` on **14 files** — the operator card plus every client
  screen that says *Insured* — and the product's rule reads in one line: **green means DRON
  confirmed this document, grey means a plain supporting fact.** The green pair is **14.75:1**
  against this one's 5.65:1, and `--green-wash` is a tint (1.03:1 on the card) the green budget does
  not count. The two tokens stay declared and unspent, like `--sh-card` and `--sh-onphoto`. What
  follows is the reasoning they were cut on, kept because a rejected idea must not be re-proposed as
  a new one — a credential the platform has
  **confirmed**, as against one merely stated. Added 2026-08-15 (rev 58) on the designer's call
  for a blue Insured badge with a confirming checkmark. **The system's first cool colour**, and
  the third semantic wash beside `warn` and `danger` — not a second accent: Signal Green is
  still the one accent and still fill-only. The ink lands on the family's own rung, **5.65:1**
  on its wash, the same figure `--warn-ink` stands at. No solid `--trust` is declared, because
  nothing draws one. Home: `.dr-chip--trust` on `order-confirmed` and `order-confirmed-empty`.
- **`--green-ink`** (`#4F6B22`) — the green that may stand alone, added 2026-08-12 (rev 48):
  signal green taken down to the text-safe rung, for the rare place green must be a word.
  Home (rev 49): the `Clear all` text button on `listings-filtered` — until rev 51 replaced
  that control with the leading `All` chip, so the rung now stands declared with no spend.
  The mode-disclosure checkmark wore it for a day and returned to `--green` by the
  designer's call (rev 50).

### Measured contrast

Every pair carried on a product surface, verified in the browser.

| Foreground | Ground | Ratio | Where |
|---|---|---|---|
| `--ink` | `--page` | 15.99:1 | nav-bar title, focus ring |
| `--ink` | `--inset` | 15.29:1 | route place names |
| `--ink` | `--green-wash` | 14.75:1 | selected bottom tab, verified badge, milestone marks, the count badge on an in-page tab (rev 269) |
| `--ink` | `--card` | 14.37:1 | card titles, values |
| `--ink` | `--media` | 13.33:1 | glyphs in a well |
| `--slate` | `--media` | 5.51:1 | the idle in-page tab's label (rev 269) |
| `--ink` | `--btn2` | 11.54:1 | secondary button, settled status check, the switch's off knob-in-track (rev 203) |
| `--ink` | `--green` | 9.46:1 | primary button label, walked node glyph, the profile pencil badge on both heads (rev 189/190), the chosen in-page tab (rev 269) |
| `--danger-ink` | `--page` | 6.83:1 | destructive text action — **on the bench since rev 146**: its one user, `account-photo` · *Remove photo*, became the grey `Delete` in the action bar |
| `--slate` | `--page` | 6.62:1 | lead copy, unselected tabs |
| `--slate` | `--inset` | 6.33:1 | From / To labels |
| `--danger-ink` | `--card` | 6.14:1 | field error text; the destructive action if it ever stands on a card |
| `--slate` | `--card` | 5.95:1 | keys, dates, ratings, body |
| `--ink` | `--warn` | 7.80:1 | the operator's rating pill on his photograph (rev 190) — **deleted rev 204**; the pair stays declared on `.dr-profile__rating` and is spent on no page |
| `--warn-ink` | `--card` | 5.72:1 | — |
| `--warn-ink` | `--warn-wash` | 5.65:1 | late-notice mark |
| `--trust-ink` | `--trust-wash` | 5.65:1 | ~~Insured badge~~ — **retired rev 157, spent nowhere** |
| `--trust-ink` | `--card` | 5.93:1 | — |
| `--green-ink` | `--page` | 5.58:1 | text button — spent again from rev 146 on `account-photo` · *Save*, the modal's commit in the navigation bar (rev 51 had taken its one earlier spend) |
| `--slate` | `--media` | 5.51:1 | muted chips, upload glyph |
| `--danger-ink` | `--danger-wash` | 5.49:1 | tracking-lost, photo-missing marks |
| `--green-ink` | `--card` | 5.01:1 | text button, card ground (declared) |
| `--slate` | `--btn2` | 4.77:1 | disabled label |

**Non-text, below 3:1, each accepted for a stated reason:**

| Pair | Ratio | Why it stands |
|---|---|---|
| `--green` live status disc on `--card` | 1.52:1 | Never the sole carrier: the same card is the only one with a progress rail, an ETA chip and the green CTA, and the disc's accessible name says "In progress". |
| `--line` hairline on `--card` | 1.21:1 | A decorative surface edge — not text (1.4.3), not a control or state indicator (1.4.11). |
| `--media` on `--page` | 1.20:1 | Same. |
| `--card` on `--page` | 1.11:1 | Same. |
| `--green-wash` on `--page` | 1.085:1 | Same; the selected state also moves the ink `--slate` → `--ink`. |
| `--green` chosen in-page tab on `--media` | 1.41:1 | The chip row's mark since rev 269, up from the wash's 1.085:1 and still under 3:1. The label moves `--slate` 5.51:1 → `--on-green` 9.46:1 with it. `--ink` selected on `--media` idle would be **13.33:1** and was refused in favour of the accent. |
| `--danger-ink` at `opacity .55` on `--danger-wash` | 2.43:1 | The lost-signal glyph, where the fade *is* the semantic. It sits in an `aria-hidden` well and the meaning is carried by the visible title. **Switch to `.70` (3.20:1) if the glyph is ever made load-bearing.** |
| `--green` walked rail node on `--page` | 1.69:1 | The progress rail's done step, entered 2026-08-15 (rev 65) when the rail landed on `tracking`. Colour is not the carrier and does not need to clear 3:1: the walked node is a **filled disc with a checkmark**, the current one a **ring with a halo**, the pending ones **empty circles**, the current label steps `--slate` 6.62:1 → `--ink` 15.99:1, and `aria-current="step"` speaks it. Same reading the live disc and the pager dot above already hold. |
| `--card` pending rail node on `--page` | 1.11:1 | Same rail, same reading — the unwalked step is identified by holding *no* mark, not by its fill. |
| `--line` rail track on `--page` | 1.34:1 | The 2px connector behind the nodes. A decorative join, not a state indicator; the walked span is redrawn in `--green` over it and the milestone shapes carry the state. |

### Named rules

**The Fill-Only Rule.** Green is a fill, a tint, or a ring. It is never a text colour, never an
icon stroke, and never a border on its own. Anything sitting on green or on the green tint is
`--ink`.

**The Two-Ink Rule.** A string is `--ink` or `--slate`. There is no third text colour on a product
surface, and no colour-coded text of any kind.

**The Wash-Carries-Ink Rule.** A semantic state is a pale wash with its own darkened ink on top.
The saturated hue is declared for reference and drawn nowhere.

**The No-White-No-Black Rule.** The palette has no `#FFFFFF` and no `#000000`. Even the shadows
are warm — every one is `rgba(20, 18, 15, …)`.

## Typography

**UI font:** one stack, declared once in `_wireframe.css` and never overridden —
`-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif`.
There is no separate display family. On Apple hardware `-apple-system` applies SF's own optical
sizing, so the Display/Text split happens automatically by size rather than by a second
declaration; off Apple there is no split.

**Mono font:** `ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace` — the only
declared `font-family` on any painted page (22 occurrences), used for zone labels, route labels
and loading hints.

### Hierarchy

Ten sizes, every one in use on a shipped surface.

| Token | Size | Weight | Line | Tracking | Where |
|---|---|---|---|---|---|
| `display` | 22 | 700 | 30.8 (1.4) | −0.02em | outcome screen title — *Delivered* |
| `number` | 20 | 700 | 20 (1.0) | −0.02em | money — `₴180`, tabular |
| `title` | 17 | 600 | 23.8 (1.4) | −0.01em | nav-bar title, alert title; **choice-card title at 400** since 2026-09-14 (rev 247); **service-card title at 400 / 20.4 (1.2) / no track** since 2026-09-14 (rev 248) — see *One size, several roles* below |
| `heading` | 15 | 600 | 18 (1.2) | — | card title (every `.dr-listing` except the service card, since rev 248), operator name |
| `body` | 14 | 400 | 18.2 (1.3) | — | place names |
| `body-sm` | 13 | 400 | 18.2 (1.4) | — | keys |
| `meta` | 12.5 | 400 | 15 (1.2) | — | dates |
| `caption` | 12 | 600 | 16.8 (1.4) | — | chips, badges |
| `micro` | 11 | 600 | 15.4 (1.4) | .09em | mono zone labels; `.dr-chip--sm`, the chip that rides beside a name (no tracking) |
| `micro-sm` | 10.5 | 400 | 14.7 (1.4) | — | milestone labels under a rail |

**Leading is 1.4 by inheritance; a step overrides it only where the box demands it.** The frame
inherits `font-size:15px / line-height:1.4` from `_wireframe.css`, and that is what a step renders
at unless it declares otherwise. Measured departures, and their reason:

| Size | Leading | Element |
|---|---|---|
| 20 | 1.0 | the price — a figure has no descender line to protect |
| 17 | 1.2 | service-card title (rev 248) — a one-line box, kept at the leading the designer was shown |
| 15 | 1.2 | card title, operator name — a one-line box |
| 15 | 1.55 | `.lead` — a paragraph |
| 14 | 1.3 | place name in the route strip |
| 13 | 1.5 | `.msg-body` — a paragraph |
| 12.5 | 1.2 | card date · 1.4 on the operator rating |

**One size, several roles.** 15px is `heading` at 600/1.2, the button label at 600/1.4, the `.kv`
value at 600/1.4 tabular, and `.lead` at 400/1.55. **14px joined it on 2026-09-03** with the route
strip's place name at 400/1.3 — and for two revisions with the choice card's title at
600/1.4/−0.01em as well, until **rev 221 returned that title to 17**. **17px has two roles since rev
268:** the `title` step at **600 / 1.4 / −0.01em** on the nav bar, the message title, the map's offer
name (rev 266) and — **since rev 268** — the choice card's title, which rev 247 had stepped to 400
and which now takes `--t-title-weight` again; and **the service card's title at 400 / 1.2 / no
track** (rev 248), `.dr-listing--service` on the five `listings` cards and the two `ui/kit.html`
specimens — iOS **Body**, 17pt Regular. **That service card is now the only 17/400 in the product**,
and rev 247's 17/400 pairing is closed rather than carried; whether the service card follows the
choice card up to 600 is the question rev 266 left open and is hers. 11px is mono-600 for zone and route labels,
SF-600 for tab labels, and SF-400 for the fee caption **until 2026-08-02, when the designer removed
that caption** — 11px now carries the mono zone and route labels and the tab label, and the fee
figure stands alone.

### Named rules

**The Ten-Sizes Rule.** On a product surface the ten sizes above are the whole scale. A size that
is none of them is a size nobody chose.

**The Tabular Rule.** Any figure a user compares or verifies — money, time, ETA, rating — carries
`font-variant-numeric: tabular-nums`.

**The Mono-Is-Structure Rule.** The mono face labels structure, never content: zone annotations,
`FROM` / `TO` / `LOCATION`, loading hints. No product string is set in mono.

## Layout

**Frame.** 375 × 812, `--r-panel` 22px, 1px `--line` border, `overflow:hidden`, vertical flex.
Fluid below 375 (`max-width:100%`), so on a 360px device it renders at 321px.

**Vertical stack.** Status bar 44 → nav bar → scrolling `main` → tab bar (60 + 30 home indicator)
or action bar. Nine of the ten pages carry the four-tab bar; `tracking.html` carries a two-button
action bar instead.

**Content column.** `main` takes `padding:16px` and `gap:12px`. The inset and the zone gap were the
same 16 until 2026-08-16 and are two different numbers now — the frame's edge is not the same
promise as the distance between two cards. Usable width 341px at a 375 frame (375 − 2 border − 32
padding). Inside a 20px-inset card, 286.2px.

One consequence for every height recorded in this document before 2026-08-16: a screen with **N**
zones is **4 × (N − 1)** shorter than it reads there, and a snug list of **M** cards a further
**4 × (M − 1)**. Widths, insets and card interiors are untouched. Heights quoted inside a change
narrative are left as they were measured on the day — they price that pass, not this one.

**Spacing scale — base 4, not 8.**

| Step | Use |
|---|---|
| 4 | within a group — title to date |
| 8 | between sibling icon actions; **within a zone** — `.dr-stack`, and between cards **where the list is one zone among several** (`.dr-list--snug`) |
| 12 | **between zones** — `main`'s gap; card-top gap, message-block gap; the progress rail's own margin |
| 16 | screen padding; compact card inset; inset-strip padding |
| 20 | between groups inside a list card, and that card's own inset |
| 28 | between cards **where the list is the screen** — greater than any interval inside one |
| 32 | bottom inset of a card whose last element is a primary button |

**Two list rungs, chosen by what surrounds the list.** `.dr-list` is 28 and `.dr-list--snug` is 8,
and the choice is not taste — it is proximity read one level up. `main` separates whole zones by
**12**, so a list left at 28 puts *siblings further apart than strangers*: the two service cards on
`listings-filtered` sat 28 apart while the applied-filter row and the list itself sat 16 apart, and
the list stopped reading as one thing. Where the list **is** the screen — nothing above or below it
to compete — 28 is right, and it still clears the 20 inside a card. Where the list is **one zone
among several**, the snug rung is right: above the 4px rhythm inside a card, under the gap between
zones, so the group clusters and the zones still separate. 28 in that position is the defect; the
snug rung in the first position would leave the list undifferentiated from its own card interiors.

**The rung is a ratio, not a number, and it moved once.** Snug was **12 under a 16 zone gap**. On
2026-08-16 the designer closed the zone gap to 12 — *«зроби менші відступи між картками»*, read on
`contact-support` with annotations off, where the screen is two cards and one gap. That put the
snug list level with the zone gap at 12:12, spacing grouping nothing, so it followed `.dr-stack`
down to **8**: siblings 8, strangers 12, **1.5:1** — a stronger step than the 1.33:1 it replaced.
Measured at 8 on `listings` ×3, `support`, `chat` and `inspection-report` ×2; measured at 12
between zones on every screen that stacks them **bar the two that pay the zone rhythm instead** —
`rate` since 2026-08-12 and `support` since **rev 225**, both spending `--sp-24` **24** through
`.dr-main--zones`. On those two the step against the snug list reads **3:1** rather than 1.5:1, and
neither `--sp-24` nor `--sp-within-lg` steps at the narrow tier, so the ratio holds at both widths.

`.kv` rows take `13px 0`; the action bar takes `12px 16px 24px`; the tab bar `6px 8px 4px`. The
message block is `22px 18px` on `tracking` and `delivery`, and `16px 16px 32px` on
`order-history-empty`, whose last element is a CTA.

**Two card insets, both documented.** 20px on `order-history` list cards, 16px on the operator,
details and message cards. Unifying them is deferred: the operator card's trust-chip row cannot
pay the extra 4px.

**Responsive.** One breakpoint, `max-width: 389px`, tuned for `order-history` — the family with a
fixed-width media box to protect — but declared on `:root`, so it reaches every page that uses the
stepped tokens. Card inset 20 → 16, group gap 20 → 18, list gap 28 → 22 (`--sp-list` only:
neither `--sp-within-lg` nor `--sp-snug` steps, so a `.dr-list--snug` list holds 8 and the zone gap
holds 12 at both tiers),
card-top gap 16 → 12, drone box 96 × 72 → 68 × 52, route padding 16 → 14. The skeleton page steps
identically, so the loading and loaded lists stay the same height at both tiers.

**The onscreen keyboard is system chrome, and it quotes two numbers the product does not own.**
Classes: `.dr-kb` · `.dr-kb__bar` · `.dr-kb__done` · `.dr-kb__plane` · `.dr-kb__quick` ·
`.dr-kb__rows` · `.dr-kb__row` (`--mid`) · `.dr-kb__key` (`--mod`, `--space`, `--return`, `--blank`),
built by `ui/kit.js` — no page carries markup for it, because the system draws a keyboard *over* an
app rather than inside it. **19 of the 32 pages linking `kit.js` carry a field**, across 14 screens.
`--h-kb` **291** is what iOS measures in portrait on a 375 × 812 frame (216 keys + 45 QuickType +
30 home-indicator inset); HIG publishes no height and asks an app to read the keyboard's frame.
The accessory bar above it is **44**, the HIG target floor, so the pair stands at **335** and the
content area shrinks to the **375.4** left above it. `--r-key` **5** is **off the closed radius
ramp** (10 · 12 · 13 · 16 · 22 · 999) and is recorded as a departure, not a defect: the keyboard
depicts Apple's geometry the way the status bar and the home-indicator's 2px bar already do. On
the ramp's 10 a 45px key reads as a pill; on the 2/4/8 floor's 4 it reads square. The plane is
`aria-hidden` with no tab stop — the system keyboard is not in an app's accessibility tree either.
**The number pad takes a press (rev 255)**, because a click on a drawn digit wrote nothing and
`account-edit`'s card mark never had a number to read: its ten digits and delete are
`.dr-kb__key--press` (`pointer-events: auto`), written at the caret with an `input` event; the letter
plane, the blank cell and QuickType stay pictures. The pad key's **118.5 × 45** clears `2.5.8`, and the
computer keyboard stays the keyboard path (`2.1.1`).
**A press that is not on a field keeps the field's focus (rev 257)**, because a press on a label, a
row's edge, a key gap or a drawer's title sent focus to `<body>`, the keys went, and a lifted drawer
fell **335** under the pointer. Two rules: a `.dr-field` row is its one text field's target — the
input is **18.4** tall and fails `HIG · 44pt` by **25.6**, the row's **44** clears it — and with the
keys up a press inside the keyboard or the field's own drawer, its buttons included, keeps the focus.
The keys go on `Done`, Escape or a button that closes the drawer; on a screen a press on blank
content still puts them away. Colour is the product's own: plane
`--btn2`, keys `--page`, modifiers `--card`, labels `--ink`. No new colour token.

**It is a product-wide behaviour, not a screen's (rev 151).** Every text-entry field on every mobile
screen raises it — `<textarea>` and `<input>` of type `text · email · tel · search · url · number ·
password`; a radio, a checkbox or a `<select>` raises no keyboard and is untouched. **31 pages link
`ui/kit.js`, 18 for a field, 37 fields between them.** What leaves the layout and the tab order while
the keys are up is whichever bottom bar the screen has: `.dr-actionbar` on a form screen, `.dr-tabbar`
on a tab root — four tab links behind 335 of drawn keyboard are the same `WCAG 2.4.11` failure two
buttons were. The exception is a field **inside** the bar: `chat`'s composer rides above the keys by
the full **335**, and its content area does not pay that height twice. And the keys are **mobile only** —
291 is an iPhone's number, so the shell's 768 × 1024 and 1280 × 800 presets raise nothing.

**Two planes, and the field picks (rev 152).** `HIG · Onscreen keyboards` asks the keyboard to
match the field, and the markup already says which: `inputmode="numeric | decimal | tel"` or
`type="number | tel"` draws the **number pad** — three columns, and a bottom row of an empty cell,
`0` and a face-less delete, as iOS draws it — and everything else draws QWERTY. **Ten fields take
it:** `cc-num`, `cc-exp` and `cc-csc` on each of the three `payment` pages, and `account-edit`'s
`type="tel"` phone — the one the sweep found outside payment. The plane is the same **291** in both: a keyboard's frame is what an app reads, and the frame
does not change with the layout inside it, so nothing measured downstream moves. Pad keys measure
**118.3 × 45** against the letter row's **31.3 × 45**. One simplification, recorded: iOS's telephone
pad carries letters under the digits and a `+*#` key; ours draws the plain pad for both.

**Touch targets.** 44px minimum, met by `min-height` rather than `height` — a button is a flex
item in a scrolling column, and a fixed height gets shrunk below the target. Circular icon actions
are 44 × 44; tab targets measure 86.3 × 50.

**No-reflow contract.** A skeleton measures its loaded counterpart: the `order-history` skeleton
card is 263.0px against the delivered card's 263.6px; the `delivery` photo skeleton is 341 × 180
against a photo of 341 × 180. **The strongest form is not a matching number but the same class**
(2026-08-24): `result-upload-loading`'s waiting tray is `.dr-upload` + `.dr-sk-tray`, the loaded
frame's own component plus a modifier adding only the `--media` ground that `.dr-upload` paints
for `[role="button"]` alone. Nothing about the box is restated, so it cannot drift — measured,
both frames draw the tray at **326 × 140**, `#E4E1DA`, 13px radius, no shadow, the `Result photo`
section at **192**, `.dr-main` at **629**, and *Replace photo* at **+148** from the section top.

### Named rules

**The Between-Beats-Within Rule.** Proximity groups in the right direction without a border or a
shadow — but the rule holds **per level**, not as one number. Where the list *is* the screen, the
gap between two cards (28) is larger than any gap inside one (≤20). Where the list is one zone
among several, the level above it takes over: `main` separates zones by 12, so the cards must close
to 8 or they read as further apart than the zones themselves. 8 is still above the 4px rhythm
inside a card, and the card's interior stays bounded by its drawn edge — `--card` on `--page` at
1.11:1 plus the 16px radius — not by whitespace it has to win.

**The corollary, learned on 2026-08-16:** a level cannot move alone. When the zone gap closed 16 →
12, three numbers one level down had to be re-read against it — `.dr-stack` (12 → 8),
`.dr-list--snug` (12 → 8), and the progress rail's margin (8 → 12, because what that modifier
promises is a **24px clearance**, not a margin, and a margin against a smaller gap silently pays
20). Two more were re-read and deliberately left: `.dr-list` at 28, whose condition is that nothing
stands above or below it, and the card interiors, which are bounded by a drawn edge rather than by
whitespace. A spacing token states a ratio; write the ratio down beside it or the next change to
the level above will quietly spend it.

**The Skeleton-Measures-The-Load Rule.** A loading block is the size of the thing it waits for. A
skeleton is a claim about the loaded screen, so it expires when that screen changes treatment.
**Where the loaded block is a component, build the skeleton from that component** rather than
re-declaring its box — then the claim cannot expire, because there is only one box. And the words
follow the box: `result-upload-loading`'s status sentence sits **inside** the tray, in the slot
*Add photo* holds on the base frame, so the loading zone and the loaded zone are the same height
to the pixel instead of the loading one running 28 taller.

## Elevation & Depth

**Surfaces are flat.** No card and no media surface casts a shadow on any of the ten pages —
verified by computed style, `box-shadow` is `none` on every card, panel, well, map and photo.

Depth is carried by **warm tone plus radius**, and it is measurable: card on page **1.11:1**, media
well on page **1.20:1**, hairline on card **1.21:1**. A photographic surface needs even less — the
image is its own edge.

### Shadow vocabulary

- **`--sh-sm`** (`0 1px 2px rgba(20,18,15,.05)`) — **the only shadow spent in the system.** It sits
  under the green primary, the one control the screen is steering toward.
- **`--sh-card`** (`0 1px 3px rgba(20,18,15,.06), 0 12px 30px -24px rgba(20,18,15,.30)`) — declared
  on all ten pages, applied to nothing. `var(--sh-card)` appears 0 times.
- **`--sh-raised`** (`0 2px 6px rgba(20,18,15,.08), 0 18px 44px -26px rgba(20,18,15,.34)`) —
  declared, applied to nothing.

**Rings are not shadows.** Three `box-shadow` declarations carry geometry rather than depth: the
2px `--card` cutout ring around a status disc, the 4px `color-mix(green 20%)` halo on the current
milestone node, and the ping keyframe on a live disc.

### Named rules

**The One-Shadow Rule.** Exactly one shadow is spent, and it is under the primary button. A card
that casts no shadow at rest cannot grow one on hover.

**The Tone-Step Rule.** Separation between two surfaces is a warm tone step plus a radius, and the
step is measured before it is used. A surface boundary is a decorative edge — not text (1.4.3),
not a control or state indicator (1.4.11) — so no contrast minimum applies to it.

## Shapes

**A closed ramp of six**, plus circles:

| Token | Value | Applied to |
|---|---|---|
| `detail` | 4px | internal details only — skeleton bars. Not a token; the 2/4/8 floor below the ramp |
| `--r-input` | 10px | declared, applied to nothing on these ten pages |
| `--r-btn` | 12px | buttons; the From ▸ To inset strip |
| `--r-media` | 13px | media wells, state marks, the delivery photo, the balance glyph plate |
| `--r-card` | 16px | cards, panels, the map, the tab pill |
| `--r-panel` | 22px | the phone frame |
| `--r-pill` | 999px | chips, badges, skeleton bars |
| — | 50% | status discs 20, progress nodes 22, icon actions 44, milestone marks 64 |

**Borders.** Cards carry none. `border:0` is explicit on `.card`, `.op-card`, `.kv`, `.msg-block`,
`.msg-ph`, `.media-ph` and `.map-ph` — every one overrides a bordered base rule. Hairlines survive
only where they separate rows within a surface: `.kv-row`, the bar borders, the zone-label rule.

**Below the ramp, the 2 / 4 / 8 scale is permissible** for an internal detail that is not a surface
of its own — a skeleton bar, a rule cap. The six are closed for anything the eye reads as an
object: a surface, a control, a well, a chip. `order-history-loading` draws its skeleton bar at
`4px` and `tracking-loading` draws the same bar at `--r-pill`; both are inside the rule.

**One deliberate zero.** `.op-avatar` takes `border-radius:0` — it is a full-bleed panel, and the
card's own `overflow:hidden` cuts its two outer corners to `--r-card`.

### Named rules

**The Closed-Ramp Rule.** Six radii and a circle for anything the eye reads as an object — a
surface, a control, a well, a chip. Below that, an internal detail may take any radius on the
2 / 4 / 8 scale. Two of those three are cut as rungs and both are spent: **`--r-detail` 4** on the
skeleton bars, and **`--r-detail-lg` 8** on the checkbox, added 2026-08-15 (rev 92) when the designer
chose to soften it. The six-radius ramp above them does not move.

**The Cut-By-The-Parent Rule.** A full-bleed child is square and the parent's `overflow:hidden`
gives it the corner. It never restates the parent's radius.

## Components

### Buttons

- **Shape:** rounded rect, `--r-btn` 12px. Not a pill — this language is Fauna, not Monarch.
  **One rung departs, on the designer's word (2026-08-21, rev 181):** `.dr-btn--outline` takes
  `--r-pill`, cut to the badges it stands under on `operator-account`. The ramp is not widened —
  999 is a rung it already owns — and the other four fills keep 12, so the sentence above still
  describes every **filled** button in the system. **The rung is now DECLARED AND SPENT NOWHERE
  (2026-08-24, rev 195).** Its two users left in the same week: `operator-account`'s Edit profile
  for the floating accessory at rev 187, and the client `account`'s at rev 195 on her word
  (*«make edit profile as floating button… as on the operator's profile wireframes»*). It is kept,
  not cut — the way `.dr-chip--sm` and `.dr-profile__role` are kept — because it is a rung she
  asked for by name and the reversal above is its reason for existing. **The §Buttons reversal is
  therefore scoped to a variant nothing draws today**, which is stated here rather than quietly
  left reading as if a live button carried it.
- **Height:** `min-height:44px`, never a fixed height. Padding `0 16px` on every variant.
- **Type:** 15/600, gap 8 to a leading glyph.
- **Primary:** `--green` fill, `--on-green` label (9.46:1), `--sh-sm`. Hover
  `filter: brightness(1.03)`; active `translateY(1px) scale(.99)`.
- **Secondary:** `--btn2` fill, `--ink` label (11.54:1), no shadow. Hover → `--media`.
- **Outline:** no fill, `--ink` label — **15.99:1** on the page — over a **1px `--slate` edge** at
  **6.62:1**, `--r-pill`. Added 2026-08-21 (rev 181) on the designer's word for `operator-account`'s
  *Edit profile*, which had been `--secondary`: *«кнопку зроби контурну без бекграунда скругленими
  краями як бейджі»*. **The edge colour is `WCAG 1.4.11`, not taste** — with the fill gone the border
  is the only visual information identifying the control, so 3:1 against `--page` is the floor;
  `--line` (the hairline every separator takes) is **1.34:1** and fails it 2.2×, `--slate` is
  **6.62:1** and clears it 2.2×, the same answer the unchecked checkbox already records. **No fill in
  any state:** hover and press darken edge and label to `--ink` (**15.99:1**) with the kit's 1px dip —
  the tertiary's grammar, not the secondary's, because a rest state with no ground must not grow one
  under the cursor. Geometry is unchanged by the swap — **144.69 × 44** measured after, against the
  144.7 × 44 the fill drew, since `.dr-btn` already reserves `border: var(--hair) solid transparent`
  and only the colour moved. Spent on that one button; the 67 pages carrying `--secondary` are
  untouched.
- **Text:** transparent, `--green-ink` label — **5.58:1** on the page, **5.01:1** on the card;
  hover and press darken to `--ink` with the kit's 1px dip, the tertiary's own grammar. Added
  2026-08-12 (rev 49) for `listings-filtered`'s Clear all; rev 51 replaced that control with
  the leading `All` chip, and the variant then sat unspent until **rev 146 gave it `account-photo`'s
  *Save*** — the right-hand commit in a modal's navigation bar, which is where `HIG · Modality` puts
  the prominent action and the only place the system has for a green that is not a fill. The slate
  tertiary stays the skip/cancel voice and takes that screen's *Cancel*, so the two bar words differ
  in ink as well as in position.
- **Danger:** transparent, `--danger-ink` label — **6.83:1** on the page, **6.14:1** on the card;
  hover and press darken to `--ink` with the same 1px dip, so the three text rungs differ in ink and
  in nothing else. Added 2026-08-16 (rev 128) for `account-photo`'s *Remove photo*, and it is
  `--danger-ink`'s **first spend as a control** — the family had been declared since rev 25 and drawn
  only as `.dr-field__err` text and the `.dr-mark--danger` alert. `HIG · Action sheets` asks a
  destructive choice to read as destructive; `WCAG 1.4.1` is untouched because the verb is in the
  label, not in the colour. `--danger` (`#C4462A`, 4.07:1) is a **fill** rung and was spent once, on
  `call`'s hang-up disc. **The text rung is back on the bench from rev 146:** its one user moved to
  the action bar as *Delete*, and a bar takes filled buttons only (rev 112), so the destructive choice
  there is `--secondary` grey at **11.54:1** — the same answer rev 131 gave `Delete order`. The verb
  carries the warning in both places, which is why the colour could leave without `WCAG 1.4.1`
  noticing. The rung stays declared for the first destructive action that stands **inside** `main`.
- **Pay:** `#000` fill, mark-as-label, no shadow — the one rung whose colour the product does not
  choose. `HIG · Apple Pay Marks and Buttons` and Google Pay's brand guidelines each permit exactly
  three fills on a button that *initiates* their payment — **black**, **white**, **white with
  outline** — and forbid the rest; a host may set the height and the radius and nothing else. Added
  2026-08-16 (rev 134) on the designer's word, closing the breach rev 129 had recorded. `#000` is
  written **on the variant, not in the palette** — the rev 108 rule for brand values — so DRON gains
  no black surface. Measured: the marks' white **21:1**, Google's four-colour G **5.89** / **6.87** /
  **12.30** / **5.35:1**, all four clear of 3:1 where three of them are not on `--card`; the button's
  edge against `--page` **19.30:1** (`WCAG 1.4.11` floor 3:1); the focus ring stays `--ink` on
  `--page` at **15.99:1**. Height **44** clears `HIG · 44pt`, Apple's 30pt floor and Google Pay's
  40dp floor. Hover lifts to `--ink` rather than `filter: brightness`, which multiplies black by
  nothing; press takes the kit's usual 1px dip, and on a touch-first product that is the state that
  reads. Spent on `order-review`'s pay drawer and nowhere else.
- **Block:** `width:100%`. The default in an action bar and at the foot of a card.
- **One action per row in the action bar** (designer, 2026-08-16, rev 120). Every button in a
  `.dr-actionbar` is `--block`, one per line, `gap:8` — **341px** at the 375 frame. The bar never
  splits two buttons across a row; `.dr-actionbar__row` (`ui/kit.css:481–482`) survives in the kit
  and is applied to **nothing**. Measured across `wireframes/`: 27 of 27 multi-button bars stack, no
  label wraps. The split row was what wrapped them — *Зберегти зміни* took two lines in a 154.5px
  half at the 375 frame, and *Save changes* took two in a 127px half at 320pt. The tab bar is a
  different component and stays horizontal (`HIG · Tab bars`).
- **In the action bar, every button is filled** (designer, 2026-08-16, rev 112). Two or three actions
  in a `.dr-actionbar` are `--primary` + `--secondary`, and a second `--secondary` for a third — never
  `--tertiary`. **One action is `--primary`**: the only button on the bottom edge is the main action by
  definition, even when it is only a way out. A borderless text action on the bottom edge reads as a caption under the button, not as
  a second control; the fill is what says *tappable* on a 44px target. `--tertiary` and `--text` stay
  outside the action bar: the top-bar action (`listings-filters` · *Clear all*, `--tertiary` at 6.62:1)
  and links inside a card.
- **Disabled:** `--btn2` fill with a `--slate` label — **4.77:1**, the secondary button's own pair.
  It is built, not dimmed: blanket opacity would take charcoal-on-green to 2.35:1. No
  `--disabled-*` token is declared on these ten pages; the pair arrives through the token remap,
  where `_wireframe.css`'s `.btn:disabled` reads `--wf-fill` and `--wf-muted` and the frame points
  those at `--btn2` and `--slate`.
- **Focus:** `2.5px solid var(--ink)`, `outline-offset:2px`.

### Toast

Added 2026-08-15 (rev 89). A transient confirmation, raised by any control carrying `data-toast`.
**The product's first inverted surface and its first floating one**, both stated rather than slipped
in: `--page` on `--ink` is **15.99:1**, the palette's strongest pair and the nav bar's own two values
the other way round, so no colour is cut for it. Pill radius, 12/20 padding, body type at medium.
It floats, so it spends **`--sh-raised`** — a rung declared since the concept and applied to nothing
until now; the flat-surface rule governs cards sitting *in* the page, and a toast does not sit in the
page. `role="status"` announces it without taking focus (`WCAG 4.1.3`). It clears whatever bottom
chrome the screen has — the shell measures the action bar or tab bar rather than assuming, because a
toast that covers the button that raised it is worse than no toast. Dismisses itself after 4s and on
click; nothing depends on reading it in time (`WCAG 2.2.1`), since it states the action just taken.

**Over a sheet — `.dr-toast--over-sheet`** (2026-08-16, rev 96). A sheet owns the bottom edge, so a
toast measured up from the frame's floor lands *under* it; and a sheet is `aria-modal="true"`, so a
toast appended beside it is hidden from assistive technology entirely. Where the raising control sits
inside a `[role="dialog"]`, the shell therefore parents the toast **inside that dialog** and the
modifier floats it clear of the sheet's **top** edge — `bottom: calc(100% + var(--sp-snug))`, with
`left/right: 0` because the sheet already carries the screen gutter. Measured on `share`: toast
**125.55 × 43.60**, exactly **12px** above the sheet, no overlap with the `Copy link` button that
raised it, and its text present and **not ignored** in the accessibility tree inside the dialog named
*Share DRON*. Off a sheet nothing changes — `order-setup-empty` **325.40 × 63.20** and `listings-empty`
**325.40 × 63.20** both sit **20px** above their action bar / tab bar, as before.

### Form rows — two panels, not one

iOS ships two form styles and the product now uses both, keyed by what the panel holds.
**A read-only group keeps its card** (`--card`, `--r-card` 16, `8px 16px`) — HIG's *grouped inset
list*: `tracking`'s ETA/Status, `account`'s preferences, `order-review`'s breakdown, 13 pages.
**An input group is a plain list** — no card, no radius, the hairline separator kept and un-indented,
the field giving up its own 16 so typed text stands at the screen's own margin. Set 2026-08-16
(rev 98) on the designer's word; scoped by `:has(> .dr-field)`, 7 pages. **The input itself has never
had a border** — what read as one was the panel.

Measured: typed `--ink` **14.37:1 → 15.99:1** moving off the card onto the page; label and separator
stand at the frame's own 16; placeholder stays `--slate` at **5.95:1**, the designer's call when shown
that `WCAG 1.4.3` floors a placeholder at 4.5:1 and the lightest passing warm grey is 4.52:1.

**And an input group can take the card back, per group, by name.** `.dr-rows--card` (2026-08-16,
rev 124, on the designer's word at `account-edit`: *«зроби бекграунд для групи імя телефон та
адреса щоб вже тоді все в картках було»*) opts one group out of rev 98's strip. It is **not** a
border on a field — the input still computes `border: 0px none` — it is the other of the two HIG
form styles, spent on the one screen that **configures** rather than composes, where iOS itself
draws a stack of grouped inset cards. **One user in the product**: `account-edit`'s Personal group;
the six pages that compose (`order-setup`, `order-setup-error`, `contact-support`, `rate`,
`report-issue`, and the `_field-options` spec) are untouched and still render the plain list.
Measured at the 375 frame, annotations off, the class toggled live: the group's box does not move
or resize — **326.2 × 148 at the same x, y** — `background` transparent → `--card`
`rgb(236,233,228)`, `border-radius` 0 → **16**, the field takes its own 16 back so the label goes
**288.8 → 304.8** (32 from the frame, level with the Preferences card above it), the separator
indents **0 → 16** the way an iOS grouped list does, all three rows hold **44** (`HIG · 44pt` ✓,
`WCAG 2.5.8` ✓), and `.dr-main` scrolls **642** in a **578** window before and after. Contrast moves
with the ground and both pairs clear AA: label `--slate` **6.62:1 → 5.95:1**, typed `--ink`
**15.99:1 → 14.37:1** (`WCAG 1.4.3` wants 4.5:1 at 15/400 — the weaker clears by **1.45**). The
hairline goes **1.34:1 → 1.21:1** on its new ground; both are under 3:1 and permitted, because a
list separator is decoration and the grouping stays programmatic (`WCAG 1.3.1` ✓) — and the card
edge now says the group boundary the hairline used to carry alone.

**And the separator inside that card now stands on the card's inset at BOTH ends** — 2026-09-03
(rev 227), the designer on `account-edit` pointing at the line under *Full name*: *«вона має мати
однаковий відступ від краю картки, такий відступ від правого краю картки як і від лівого»*.
`.dr-field + .dr-field::before` was `left: 16 / right: 0` — the line began where the row's text
begins and ran out to the card's bleed edge, drawing **325** on the **341** card at the 375 frame.
It is now `16 / 16`, **309** on the same card, spanning the row's content box exactly.
**It is a departure from `HIG · Lists and tables`, recorded rather than filed as a fix:** HIG insets
a separator on the *leading* edge to align with the row's content and runs it full-bleed to the
*trailing* edge, which is what was built. Nothing in WCAG moves — the hairline is **1.21:1** on
`--card` either way, permitted only because a list separator is decoration and never the carrier of
structure (`1.4.11` reaches what conveys meaning), and the grouping stays programmatic in the DOM
(`1.3.1` ✓). No row changes height, no text moves, and green is untouched at **0px²**.
**Nine cards move** — `account-edit` (Personal, Notifications), `account` and `operator-account`
(Mode), `listings-filters` (location, and `.dr-cal__time`'s own copy of the line below it),
`payment` / `-aerial` / `-inspection`, `withdraw`. **The seven plain-list pages do not:** their
override now writes `left: 0; right: 0` instead of inheriting the base's trailing edge, so they
render byte-identical. **`.dr-picks` is deliberately not swept** — its separator's leading indent is
`--pick-indent` **52** from the card edge, an alignment to the label past the radio rather than the
card's own inset, so equalising it would mean a different decision, not this one.

**The label column is the card's own, floored at `--sz-rowkey` 96** (rev 233, 2026-09-10, on the
designer's word) — **it was a fixed 140 for the whole product** from rev 114 until then. The column
is sized once per group, by the widest key **in that group**, and never below the floor: the group is
a grid, `minmax(var(--sz-rowkey), max-content) 1fr`, and each row is a `subgrid` of it, so one axis
per card is a property of the layout rather than of a number holding across 55 pages. What it fixed
is not alignment — rev 114 had that — but the **air** a shared column spends on a card with short
labels: `order-confirmed-aerial`'s `When` (35.25) sat 114.75px from its own value, and the value paid
for it, taking two lines for a 187.06 string in a 159 cell. Measured on the build, **27 of 197 rows
stood on two lines and 6 do now**; 188 of 189 values moved left, by **13.80 to 60.00**; **61 cards
now stand on 12 columns**, 39 of them on the floor. Every row still holds **44** (`HIG · 44pt` ✓,
`WCAG 2.5.8` ✓), every chevron is still flush with its row's trailing edge, and no page gained a
pixel of scroll — `order-details-inspection` lost the 11 it had. `.dr-field--area`, `.dr-field--toggle`,
the stacked badge row and the skeleton row stay flex and stay out of the subgrid, so they neither
take the axis nor size it — which is why *Operator on the way* (**143.84**, the widest label in the
product) no longer widens a column it does not stand in.

**One row takes no separator, and it is keyed to the control.** `.dr-field:has(> .dr-upload)::before`
is `content:none` — set 2026-08-16 (rev 109) on the designer's word, matching the **one** field in the
product whose control is an upload zone (`report-issue`'s Evidence; account-edit's two are
`.dr-upload--card` and stand outside any field). The line it drops measured 1px `--line` on `--page` =
**1.34:1**, under `WCAG 1.4.11`'s 3:1 and living there only because a list separator is decoration and
not the carrier of structure. What separates the rows instead is drawn: the description's well ends at
**473.19** and the upload's well starts at **485.19** — two `--media` shapes at **1.20:1** on the page,
`--r-input` 10 above and `--r-media` 13 below, **12px** apart. `WCAG 1.3.1` is untouched (the grouping
is DOM), and `HIG · Lists and tables` is departed from with its reason recorded: neither row is a plain
list row. The picker row above keeps its separator, being a bare row with no shape of its own.

**The Evidence zone lost its row label with it** — `Evidence` retires, the field goes **171 → 140px**,
and `flex-basis:100%` is declared on `.dr-field > .dr-upload` so the zone is not sized by its hint once
the label stops forcing the wrap (rev 57's lesson). Target unchanged at **341 × 140** (`HIG · 44pt` ✓,
`WCAG 2.5.8` ✓). The accessible name is unmoved — `aria-label="Add a photo or note"` — and `WCAG 3.3.2`
is carried by the instruction the zone already showed, *"A photo makes your claim stronger."*, plus the
32px tray glyph at **5.51:1**. **The consequence, recorded not corrected:** this zone carries no verb
line of its own, so the well and the glyph are the whole of what identifies it to the eye.

### The picker row — a form row whose value is chosen, not typed

**The rule is a count.** ≤ **6** options → the list rises as a **drawer** from the bottom edge;
≥ **7** → the tap **pushes a new screen** in from the right, with a back to the row. Set 2026-08-16
(rev 102) on the designer's word; `HIG · Action sheets` and `HIG · Lists and tables` draw the same
line. Payment is 4 and language is 2, so the ≥ 7 half is a written rule with no page yet.

**Nine rows on nine screens, and the ninth was a segmented control until 2026-09-10** —
`operator-listings` and `operator-listings-empty` took the row for the operator's availability at
rev 235, on the designer's word (*«make like select»*), which is the first time this component was
spent to **replace** another control rather than to collect a value a form needed.

**The row** is `.dr-field--action`: a real `<button>`, `aria-haspopup="dialog"` + `aria-expanded`,
carrying `chevron.forward` — one mark for both halves, because both say the same true thing, that
the list arrives from elsewhere. It replaced a `<span role="button">` that opened nothing and a
text-glyph **▾** that was not in the icon system.

**The trailing chevron is pinned by a track of its own since rev 233 (2026-09-10)** — it was pinned
by the shrink order before that: label `flex 0 0 var(--sz-rowkey)`, value `flex 1` with `min-width:0`
and the ellipsis, chevron `flex:none`, row **`flex-wrap: nowrap`**, where the `nowrap` was
load-bearing (measured, a 66-character value took the wrap instead of the ellipsis and the row went
**44 → 78** with the chevron **325px** in from the edge). `.dr-field--action` is the one row in the
kit whose markup carries **three** children with no wrapper around the trailing two, so a two-track
card put the chevron on a second grid line under the label — measured on `listings-filters`, x **305**
beneath a value at 395, row **44 → 47**. The card that holds a chevron declares a third `auto` track,
and only that card: `:has(> .dr-field > .dr-field__chev)`, so the 26 groups without one do not pay a
gap for an empty column. Measured after: every action row **44**, chevron flush with the row's
trailing edge — gap **16** where the group keeps its card, **0** in a plain list — on a 14-character
value and a 56-character one alike; no horizontal overflow.

**The value reads from its left edge, not from the chevron** — rev 114, 2026-08-16. It was `label
flex 0 0 auto` + `value flex 0 1 auto` with `margin-left:auto`, which put the value's *left* edge
wherever its string ended: on `account-edit`'s card *Visa •••• 4921* stood at **192.84** and
*English* at **244.86** beside a typed value at **168**. The label now takes the same `--sz-rowkey`
**140** column as every other row, so the picker value starts at **150** like the typed one and the
read-only one, and the slack sits after the value instead of before it. **The cost, recorded:**
`report-issue`'s *Poor quality — not as expected* measures **231.95** against a **165** track and
now takes the ellipsis; it fit its old track by 7px. **Rev 233 gives 44 of it back and not the rest** —
the card's own column is the floor 96 there, so the track is **209** against 231.95 and the string is
still clipped, by **22.95**. Hugging its one key (72.44) would have fit it exactly; the floor is the
designer's call and this is its price, recorded rather than corrected.

**The drawer** is `.dr-sheet` — `--page` ground, `--r-panel` **22** on the top corners only,
`--sh-raised`, measured **373 wide** with its bottom flush to the frame — plus `.dr-sheet--picker`,
which is only the rise: `translateY(100%) → 0` over **`--dur-sheet` .32s** `--ease-out`, the scrim
fading with it, both `animation: none` under reduced motion. `--dur-sheet` is the one new token:
`--dur-base` .15s is the button's own tick and snaps on a surface that crosses 400px. Scrim
`--scrim` (warm ink at 40%), measured **373 × 810** — it covers the nav bar and the action bar, not
just the scroll area.

**Options** are `.dr-picker__item` in a `--card` list at `--r-card` **16**, **1.11:1** on the
sheet — the same block as `.dr-disclosure__item` plus a `<button>` reset — **44 × 341**, `--ink`
**14.37:1**, hover `--media`, ring **2.5px `--ink`** drawn inside. Row value `--ink` **15.99:1**;
label and chevron `--slate` **6.62:1**. Every option holds the current-item checkmark and only one
shows it (`visibility`, never absence, so no row moves): `--ink` **14.37:1**, with
`aria-current="true"` beside it.

**Payment options carry a brand mark, and it is the one place the palette opens.** `.dr-paymark` is a
fixed **40 × 20** box on the leading edge of the option, mark anchored left, with `.dr-picker__label`
taking the slack so the checkmark stays on the trailing edge — measured on the build, every mark box
at **x = 16** and **every label at x = 64**, the row still **44px**. It is deliberately **not** a
`.dr-ic`: the icon system governs the glyphs this project draws, and Visa Brand Center, Mastercard
Brand Center, `HIG · Apple Pay Marks and Buttons` and Google Pay's kit each require their supplied
artwork in full colour or an approved one-colour variant. The designer's call 2026-08-16 (rev 108)
is **full brand colour**, a recorded departure from the one-accent rule: `#1434CB` · `#EB001B`
`#F79E1B` `#FF5F00` · `#000` · `#4285F4` `#EA4335` `#FBBC05` `#34A853` `#5F6368`, written **inline on
the artwork, never as tokens**, and no other surface may pull them. Green is not spent here at all.
Measured on `--card` anyway: Apple **17.34:1**, Visa **7.28:1**, `#5F6368` **5.00:1**, `#EB001B`
**3.81:1**, `#EA4335` **3.24:1**, `#4285F4` **2.94:1**, `#FF5F00` / `#34A853` **2.52:1**, `#F79E1B`
**1.76:1**, `#FBBC05` **1.41:1** — four under 3:1, all passing because `WCAG 1.4.3` and `1.4.11`
exempt logotypes and because the brand **name** sits beside every mark in `--ink` **14.37:1** with the
artwork `aria-hidden` (`1.1.1`, `1.4.1`). The three wordmarks are set in `--font-ui` and are an
**approximation** — `.dr-paymark text` is the only rule in the kit that sets type inside an SVG, and
real artwork replaces all four at handoff.

**The box has a second rung, for the case where the mark *is* the label.** `.dr-paymark--pay`
(rev 134) is the same artwork at **46 × 23** — the row's 40 × 20 scaled by exactly **15/13** — so the
word lands on the button label's own step, **15/600**, which is what every `.dr-btn` in the product
sets its label at. Nothing inside the lockup is redrawn: both marks were built symmetric in the
40 × 20 box and stay symmetric in this one. It is spent on the pay drawer's two express buttons and
nowhere else, and it is *more* of an approximation than the row's, not less — Apple and Google size
their lockups from the button's height, not from a host's type scale, and their supplied buttons
replace both outright at handoff.

**A third rung puts the marks inside a field** (rev 249, `account-edit`'s Add card drawer — the
designer's *«в полі вводу справа логотипи»*). `.dr-paymark--fit` is the same artwork with its viewBox
cropped to the ink and `width: auto`, so the box follows the mark at the same **20** height: Visa
**31 × 20**, Mastercard **21 × 20**, held **6** apart in `.dr-field__marks` at the card-number row's
trailing edge. The fixed 40 × 20 box exists to line four labels up on one edge; a field has no label
beside each mark, and the 29px it would leave empty come straight off the typed number. Only the two
cards the product accepts. **Here the marks carry information and no name stands beside them**, so the
group is `aria-hidden` and the input is `aria-describedby` a `.sr-only` *Visa or Mastercard* (`WCAG
1.1.1`). Beside both marks a 16-digit number measured **157.34** against **139**, so the first two digits
scrolled out of the field; **so once the number says which card it is, only that mark stays** — the
designer's pick, rev 252. Each mark carries `data-brand`, `ui/kit.js` reads the first digits (**4** Visa;
**51–55**, **2221–2720** Mastercard) and hides the other, and the number gets **166** (Visa) or **176**
(Mastercard) — measured, all 16 digits in view. Empty, or a prefix that is neither, keeps both.

**A drawer can open a drawer, and the second takes the first one's place** (rev 249). `Add card` in
the Payment method picker opens the Add card drawer: the picker goes down, the scrim and the inert
screen stay, and closing returns focus to the row on the screen that began it. **The Add card drawer
is the first drawer that takes typing**, which gave `ui/kit.js` three duties: focus lands on the field
marked `autofocus`; the Tab trap counts fields (card number → expiry → CVV → Cancel → Add card —
the drawn order since rev 260 turned the stack); and a focused field **lifts the drawer above the whole keyboard** — keyboard top **476**,
drawer bottom **476** on the 375 frame, overlap **0** (`WCAG 2.4.11`). Each drawer holds one green
control, **341 × 44 = 4.93%** of the frame.

**The modal contract is kept, not claimed.** Everything behind the drawer takes `inert`, so a tap or
a Tab cannot reach the form under it; focus lands on the current option with its ring; Tab cycles
inside the drawer only; and it closes three ways — **Esc**, the **scrim**, and a **`Cancel`** button
(`HIG · Action sheets` asks for the cancel by name) — each returning focus to the row that opened
it. A drawer takes Cancel, not the `×` a full modal sheet screen takes.

**Where it is spent, project-wide (rev 111).** Every dropdown-shaped control in the product now
follows this rule — **six controls, seven pages**: payment (4) and language (2) on `account-edit`,
**Parcel size** (3) on `order-setup` and `order-setup-error`, **Issue type** (3) on `report-issue`,
**Mode** (2) on `account`, and `operator-account`'s Mode. **No list in the product reaches seven**,
so every one of them is a drawer; the ≥ 7 half is spent only on the filter's place pick
(`listings-filter-region` · `-city` · `-district`), where the rows are `<a href>` and no script is
involved at all. `operator-account` is the one exception and it is deliberate — the page is
grayscale, and `_conventions.md` §3 defers colour, icons and shadow on an unpainted wireframe.

**The behaviour lives in `ui/kit.js`**, the kit's only script, linked by the five pages that carry a
drawer and by nothing else. The kit is CSS with that one named exception: a surface that opens,
traps focus, `inert`s the screen behind it and returns focus cannot be a stylesheet, and written
five times it is five chances to drift. **An option is a `<button>` when it is a value and an `<a>`
when it is a route** — the mode picker's options leave the screen, so they navigate and nothing is
written back into the row. The row's new value is read from **`.dr-picker__label`**, never from the
option's `textContent`: an option may carry artwork, and a wordmark drawn with SVG `<text>` lands in
`textContent` — the naive read makes the row say *"VISAVisa •••• 4921"*.

### The pay drawer (`.dr-paylist`)

Added 2026-08-16 (rev 129) on the designer's word — *«по кліку на pay має відкриватись дровер а не
сторінка»* — against her reference, Figma `YlGWlsWWjKSCxhONMzGG2F` node `95:10`: a black Apple Pay
button over a *Pay with card* text action. **An action bar may now open a drawer**, and the count
rule decides it the same way it decides a picker's: three ways to pay is ≤ 6, so the list rises.

- **The opener widened by exactly one shape.** `ui/kit.js` answered to
  `.dr-field--action[aria-controls]` and now also to `.dr-btn[aria-controls]`. **Not** to the bare
  `[aria-haspopup="dialog"][aria-controls]`: `listings-filters`' date opener is a `.sr-only` radio
  carrying both attributes with its own page script, and two handlers on one control is a fight.
  `.dr-btn[aria-controls]` matched **0** elements before this pass. Focus falls back to the sheet's
  first control where there is no `.dr-picker__item` to land on (`WCAG 2.4.3`).
- **Two rules and one variant.** `.dr-paylist` is a column at **8** — the action bar's own rhythm —
  against the sheet's **12** out to `Cancel`. The card option is a plain
  `.dr-btn--primary.dr-btn--block`; the two express options wear `.dr-btn--pay` (below), because the
  brands do not let a host choose their button's fill.
- **The sheet's content is the price card, and since rev 139 it is the whole sheet — the title is gone.**
  `HIG · Action sheets` requires the named cancel and the grabber, **not** a title, so a drawer may go
  without one; this is the only one that does. The designer's word on the built sheet (*«delete it»*),
  and the redundancy was rev 138's own doing: the card states `Total ₴180` at 20/700, the largest figure
  on the surface, so the 17/600 `Pay ₴180` above it said the same number twice, three lines apart. **The
  accessible name stayed:** `aria-labelledby` had nothing left to point at and an unnamed `role="dialog"`
  fails `WCAG 4.1.2`, so the section carries **`aria-label="Pay ₴180"`** and still announces as *Pay ₴180,
  dialog* before its four figures. `2.5.3 Label in Name` no longer applies — no visible label is left to
  disagree with the name. The six option-list drawers (`Mode`, `Parcel size`, `Issue type`, `Language`,
  `Payment method`, `Pick a date & time`) keep their titles, because a list of options says nothing on
  its own; the boundary is written into `wireframes/_conventions.md`.
- **What that content is, and how the slot got it** (rev 136 → rev 138).
  `HIG · Action sheets` allows a title **and** content beneath it. rev 136 spent the slot on a
  *message* — `.dr-note`, 12/400 `--slate` centred, **6.62:1** on `--page`, **+30px**; rev 138
  replaced that one sentence with the screen's own `.dr-rows--money`, four rows, on the designer's
  word (*«зроби самері гарним у 4 стрічки»*). Keys `--slate` on `--card` **5.95:1**, figures `--ink`
  **14.37:1**, `Total` on the money step 20/700 tabular; card **341 × 214**, rows **48/48/48/54**,
  `--r-card` 16 on the sheet's `--page` ground — the 1.11:1 step `.dr-picker__list` already stands on
  inside a drawer. **No class, token or rule is added:** it is the component from the screen behind,
  which the drawer covers whole (card y **462.78–676.78**, sheet edge **328**). The id
  `sheet-pay-desc` moves onto the rows container, so `aria-describedby` still announces the sheet
  with its figures (`WCAG 4.1.2`); the card takes **no** `aria-label` — one would win the description
  computation and replace those figures with the words *Price breakdown*. It adds **196px** (214 + the
  sheet's 12 gap, less the 18 the line took and its own gap).
- **Measured open, 375 frame.** Sheet **373 × 483.0** at `--r-panel` 22 with `--sh-raised` — 292.8
  before rev 136's message line, 322.8 before rev 138's card, **518.8** before rev 139 took the title
  off; **59.48%** of the frame. rev 138's card cost 196 (214 + the sheet's 12 gap, less the message
  line's 18 and its own); rev 139 gave back 35.8 (the 23.8 title and its gap). At 63.89% the drawer
  was past the ~50% an iOS medium detent sits at, and that was recorded as a cost rather than left to
  be noticed — the title coming off is what settled it. The lighter shape measured at rev 138 and not
  taken: four `.dr-price` lines on the sheet's ground, the last on `.dr-price--total`, **435.2** with
  the title still in place. Grabber to card **12**. Three
  options **341 × 44** at `--r-btn` 12; `Cancel` **341 × 44** on `--btn2` **11.54:1**. `Pay with
  card` carries the frame's one `--sh-sm` and DRON's own glyph and words at `--on-green` **9.46:1**;
  the two express buttons are flat `#000` with their marks at **21:1** (white) and **5.35–12.30:1**
  (Google's four-colour G).
- **The modal contract, verified rather than claimed.** A real pointer open shows **no** focus ring
  and a keyboard open does; five tabs cycle the sheet's four stops and never escape; three ways
  close it — Esc, scrim, `Cancel` — each clearing `aria-expanded` and returning focus to the CTA;
  `.dr-main`, `.dr-topbar` and `.dr-actionbar` are all `inert` while it is up.
- **It forks a flow node, it does not delete one.** *Pay with card* pushes **Payment**, keeping that
  screen and its error / loading states on the main path; Apple Pay and Google Pay skip it — the
  method is already chosen — and land on **`payment-loading`**, which is where an express charge is.

**The two departures rev 129 recorded were both closed at rev 134, on the designer's word** —
*«apple pay & google pay чорним кольором»*. They are left written here because a rejected shape that
is not on the record gets re-proposed as a new idea later.

1. **`HIG · Apple Pay Marks and Buttons`** and **Google Pay's brand guidelines** require a button
   that *initiates* their payment to be one of three supplied styles — **black**, **white**,
   **white with outline** — and forbid a custom fill. rev 129 built all three options `--green`.
   Contrast was never what failed: `#000` on `--green` measured **11.42:1**. The brand licence
   failed, and a real integration would have been rejected at review. **Closed:** the two express
   options are `#000`, the fill her own reference already showed.
2. **`concept.md`'s one-green rule** (exactly one green control, ≤ ~5% of the frame) was exceeded
   **3×**: three block buttons were **45,012px² = 14.78%** of the 375 × 812 frame, **19.71%**
   counting the CTA dimmed behind the scrim, and none of them was the primary. **Closed by the same
   change:** `Pay with card` is now the drawer's only green control at **15,004px² = 4.93%** —
   inside the 4.43–5.09 band the painted set holds — **9.85%** counting the CTA behind the scrim.
   Shadows inside the sheet fell from **three** `--sh-sm` to **one**, under that button.

### Text areas, and the focus rule they changed

A multiline area carries its own ground again as of 2026-08-16 (rev 100): **`--media` at
`--r-input` 10, 12px inset**, typed `--ink` **13.33:1**, placeholder `--slate` **5.51:1**. This
restores what rev 56 removed, and the reason it is not a reversal is that rev 56's objection was a
painted box nested *inside a card* — rev 98 took the card away, so the well now sits straight on the
page with nothing behind it. Four screens: `rate`, `contact-support`, `order-setup`, `report-issue`.
`rate`'s composition is unmoved at **382 / 406**, since `box-sizing:border-box` spends the padding inward.

**How tall an area is, and where that height actually comes from.** The kit declares two floors —
the row's `--sz-area-min` **80px** and the input's **56px** (`80 − 24`) — and until 2026-08-16
neither had ever governed anything: a `<textarea>` defaults to **`rows="2"`**, whose intrinsic
**69px** (2 × 22.5 line box + 2 × 12 inset) already stood above both, which is why every area in the
product measured **69 / 93** and not 56 / 80. The floors are left as declared and the fact is
recorded rather than re-cut. Where a screen needs a different height the modifier carries it, and
both modifiers are written in tokens so the count survives a change of type scale:
**`.dr-field--half`** is `rate`'s half-screen review (**382 / 406**), and **`.dr-field--area6`**
(rev 105, carried to the rest of the compose set in rev 107) is six typed lines —
`6 × --t-heading-size × --t-para-line + 2 × --sp-snug` = **159px**, verified on each page by typing
six lines with no scroll and seven with. It is spent on **three of the four painted areas** —
`contact-support`'s message, `order-setup`'s notes, `report-issue`'s description — and the input
measures **159 × 341.4** on all three. **The row is not the same number, because the label is not:**
**183** where the label is `sr-only` (`contact-support`, `order-setup`), **214** where it is drawn
(`report-issue`, +21 label line +10 gap). No screen scrolls to pay for it — measured slack between
the last block and `main`'s bottom inset is **165.3 / 210.6 / 87.8px** on the 375 × 812 frame. Only
`rate` sits outside, on `--half`, which is taller still.

**A text field shows no focus ring.** `WCAG 2.4.7`'s Understanding names the text cursor in a text
field as a visible focus indicator, so on a field with a caret the caret carries the criterion and
the outline is redundant. `caret-color` is therefore **declared** rather than inherited — `--ink`,
**13.33:1** on the area's ground. **This does not generalise:** the rule is keyed to
`.dr-field__input`, and every control without a caret keeps its 2.5px ring, having nothing else.

### Selection controls (checkbox &amp; radio)

24 × 24, `box-sizing:border-box`, inside a 44pt row that is the whole tap target.
**Edge: `--box-edge` 1.7px solid `--ink`** — set 2026-08-15 (rev 93) on the designer's word that the
outline had to be thicker. It is not a new number: **1.7 is the stroke every glyph in the product is
drawn at**, so the box now carries the same line as the check inside it, where before it carried a
1px hairline and was the one shape on screen with a thinner line than its own glyph. Measured:
**15.99:1** on the page, **14.37:1** on the card. Corner `--r-detail-lg` 8 on the checkbox (rev 92),
`--r-pill` on the radio. Checked is a `--green` fill behind an `--on-green` glyph, **9.46:1**.
`--hair` stays 1px — it is every separator and the frame, and none of those moved.

**Recorded, not corrected:** the checked state paints a green edge on its green fill, **1.52:1**,
carried by the charcoal glyph inside at 9.46:1. Rev 70 settled the price band the other way — a green
fill inside a charcoal ring — so whether the edge should stay charcoal when checked is open.
**Rev 196 answered it for the switch below and left the box alone**: the switch keeps its charcoal
ring when it fills, so it clears 1.4.11 in both states without leaning on the knob. Two components
now differ on the same question, and the box's half is still open.

### Switch (`.dr-switch`)

**36 × 22**, inside a 44pt row that is the whole tap target. Added 2026-08-24 (rev 196) for
`account-edit`'s Notifications card, on the designer's *«make a toggle»* — the kit had no switch
before it — and **cut from 52 × 32 on 2026-08-27 (rev 202)** on her *«make this toggles smaller»*.
**`--sz-switch` 36 is the only size the component declares**, which is the reason this size and not
another: the height is `--sz-node` **22**, a rung the ramp already had, so it is still borrowed and
not invented. Three sizes were put to her with the standards first — 40 × 24 on `--sz-box`, 46 × 28
on a new rung, 36 × 22 on `--sz-node` — and she took the smallest that still landed on a rung.
**The knob is not declared** — the height less its two `--sp-2` paddings, computing to **18**
since the ring came off on 2026-08-27 (rev 203); it was **14.6** while two `--box-edge` borders
were subtracted as well — and **the travel is `--sz-switch − --sz-node` = 14**, what a square
knob filling the height leaves over, unmoved by the growth because 36 − 4 − 18 is the same 14.
Radii `--r-pill` on the track, `--r-circle` on the knob; nothing outside the closed ramp.

**iOS ships the switch at 51 × 31 and `HIG` gives it no other size, so 36 × 22 is a departure from
the platform control — recorded with its reason, not filed as a defect.** What binds in `HIG` here
is the **44pt target**, and the target has never been the track: the whole `.dr-field` row is the
`<label>`. Nothing else moved with the cut — the ring, the fill, the knob pair and the position
cue are all independent of the track's size (the ring itself came off hours later, rev 203 below), and every one is re-measured below on the built frame.
**One coupling is bought and is written into the token:** `--sz-node` is the progress node's rung,
a *shape's* number read as a *control's* height. If that node ever moves, the switch is to be
re-decided rather than dragged along.

**On:** `--green` track, `--on-green` knob, **9.46:1**. **Off:** `--btn2` track, `--ink` knob,
**11.54:1**. **There is no ring** — it came off on **2026-08-27 (rev 203)** on the designer's
*«remove stroke on the toggle»*, and the off track took `--btn2` in the same move, because off had
been **transparent**: deleting the 1.7px `--box-edge` alone deletes the track with it and leaves a
knob adrift on the card. **`HIG` gives the switch no ring at all**, so this moves *toward* iOS's
construction — a filled track, no stroke, a knob that fills its height — where the 36 × 22 size
moves away from it. **What carries `WCAG 1.4.11` moves from the edge to the knob:** the ring's
14.37:1 becomes **11.54:1** on the knob off (**3.85×** the 3:1 floor, down from **4.79×**) and
**9.46:1** on the knob on (**3.15×**, unchanged). **The track is not the identifier and is not
measured as one** — **1.25:1** (`--btn2`) and **1.52:1** (`--green`) against the card, the same
reading already shipped on `.dr-upload`'s 1.08:1 well and `.dr-avatar-edit__badge`'s 1.25:1 disc.
Four readings were put to her with the standards first — the fill, the bare knob with no track at
all, a `--slate` ring at **5.95:1** on the card and **3.92:1** on the green which would have kept
the *edge* carrying the criterion, and keeping it as built. Measured on the built frame, all five
rows of `account-edit`: track **36 × 22**, `border` **none**, knob **18 × 18**, knob left edge
**2 → 16** (a 14px travel), off-track `rgb(214,210,201)`, on-track `rgb(155,207,74)`, knob
`rgb(26,26,26)` throughout, row **44**. State is **knob position as well as fill**, so `WCAG 1.4.1`
never rests on colour — which it could not here in any case: the two tracks are **1.22:1** against
each other, separating by hue, and the 14px travel is what actually carries the state.

Built as a real `<input type="checkbox" role="switch">` inside the `<label>` that is the row: the
state announces "on"/"off" rather than "checked" (`4.1.2`) and the visible line is the accessible
name (`1.3.1`). The target is the **row**, measured **326.2 × 44** on the 375 frame — `HIG · 44pt`
carried at **7.41×** the 44 × 44 area and `WCAG 2.5.8` at **24.9×** its 24 × 24 floor, not by the
36 × 22 track. (The row was recorded as 44 × 341 before rev 202; re-measured on the built frame it
is 326.2 wide, and the row's width never depended on the switch.) Motion is `--dur-fast` on `transform` with a
`prefers-reduced-motion` opt-out. **Green budget:** a switch counts as a status mark, like the
checked box and the walked node — not as the screen's one green control.

### Circular icon action

44 × 44, `50%`, `--btn2` fill, `--ink` glyph at 20px, hover → `--media`, `z-index:2` so it clears
a full-card link overlay. Carries `aria-label` — the icon is the only content.

### Circular icon action, on a photograph (`.dr-btn--onphoto`)

The same 44 × 44 action, unchanged in every value — `--btn2` disc, `--ink` glyph, **11.54:1** — and
the modifier is **position only**. Added 2026-08-16 for the play mark on a video cover.

- **No outline.** rev 12 took the border off every circular button and the designer held that line
  here too, on the built frame: *«забери stroke з цієї кнопки у мене така кнопка без обводок»*. A 2px
  `--ink` ring was built first and removed on her word.
- **What carries `WCAG 1.4.11` is the glyph, not the disc.** A photograph has no single luminance:
  under the disc on `aerial-rafting-boulders.jpg` the frame runs **L 0.0022 → 0.9486**, so no flat
  disc colour holds 3:1 everywhere — `--btn2` and `--page` each meet a pixel they match, **1.00:1** at
  worst. The disc's edge against that frame measures **6.46:1 mean**, 13.12:1 at best, with **74%** of
  the circumference at or above 3:1. The identifier is the mark inside — the reading this document
  already records twice: `.dr-avatar-edit__badge`'s disc is **1.25:1** on its card and `.dr-upload`'s
  well is **1.08:1**, and in both the glyph is what says *control*.
- **The ring that was removed, priced.** It would have put an 11.54:1 edge *inside* the control and
  floored the silhouette at **3.40:1** for any pixel value (crossover **L 0.1549**). Kept here so the
  trade is legible; not to be re-proposed.
- **No shadow either.** `--sh-onphoto` stays declared and unspent — a shadow gives no ratio. The one
  product shadow is still `--sh-sm` under the green primary.
- **Centring:** `left/top 50%` with `translate(-50%,-50%)`, repeated on `:active` so the press dip
  composes with the centring instead of replacing it.

### Avatar edit (`.dr-avatar-edit`)

The pencil badge on a profile photo, added 2026-08-16 (rev 128) on the designer's word. **The link
wraps the picture and the badge together**, so the target is the whole avatar — **56 × 56**, 127% of
`HIG · 44pt` and 2.3× `WCAG 2.5.8` — and not the 20pt disc, which alone would be half the floor. The
badge is `aria-hidden`; the link carries the name.

- **Badge:** `--sz-avatar-badge` 20 × 20 at `right/bottom: −2px` — `.dr-count-badge`'s own offset,
  which puts the disc's centre **28.28** from a 28px radius, i.e. on the circle's edge at 45°. That
  derivation is a **56px** avatar's; see the next bullet for the 120px profile heads.
- **Badge on a profile head — 24 × 24 (2026-08-24, rev 195).** `.dr-profile .dr-avatar-edit__badge`
  takes `--sz-photo-mark`, the rung the operator's pencil already stood at from being paired with his
  rating pill: *«edit photo on the avatar bigger a bit, as on the operator's profile wireframes»*.
  **No new number** — second site for an existing token. 24 is `WCAG 2.5.8 Target Size (Minimum)`'s
  floor, so the pencil clears the criterion **on its own box**, where until now it leaned entirely on
  the 120px photograph wrapping it (which still clears `HIG · 44pt` at **273%** and 2.5.8 at **5×** —
  nothing was failing; the disc gains a second, independent reading). The **glyph stays 12** for
  parity with his, leaving **4** of air inside the 20 the ring encloses against the 2 it had, so the
  badge reads lighter rather than heavier and the rendered stroke is unchanged at **0.85**.
  **Placement is untouched and the heads still differ there, correctly:** his sits on the circle's
  bottom centre line beside the pill (`:has(.dr-profile__rating)`), hers keeps the corner — she has
  no pill to pair with. `--sz-avatar-badge` 20 remains the component default for a 56px avatar.
- **Badge on the CLIENT's head — 32 × 32 (2026-08-24, rev 197).** *«зроби більшу іконку кнопку»*, hours
  after the bullet above. The size leaves `.dr-profile` for
  `.dr-profile__photo:not(:has(.dr-profile__rating))` and takes a token of its own, **`--sz-head-mark`
  32px**. **The rung it left is a shared height, not a size:** `--sz-photo-mark` 24 is *what the
  operator's two marks measure together* (rev 192), so raising it would have moved his rating pill.
  **Nothing was failing at 24 and nothing fails at 32** — the target is still the 120px photograph
  (`HIG · 44pt` **273%**, `WCAG 2.5.8` **5×**), the disc's own box goes **1.00× → 1.33×** of 2.5.8's
  floor (**1.78×** the area), and `--on-green` on `--green` stays **9.46:1** against `WCAG 1.4.11`'s
  3:1. **32 is proportion:** `--sz-avatar-badge` 20 holds **35.7%** of the 56px circle it was sized
  for, 24 held **20.0%** of the 120 head, 32 reads **26.7%**. **The glyph follows to `--ic-16`** —
  16-in-32 is the same **50%** 12-in-24 was, air inside the 2px ring goes **4 → 6**, rendered stroke
  **1.7 × 16/24 = 1.13** (up from 0.85, inside the 0.85→2.27 range; no glyph compensates its own).
  **The corner offset is not touched and growing the disc improves it:** `right/bottom: −2px` was
  derived on a 56px avatar (centre **28.28** from r=28, on the edge at 45°) and does not hold on a
  120px head — the centre stood **70.71** from r=60 at 24 (**10.71 outside** the picture) and stands
  at **65.05** (**5.05 outside**) at 32; exactly on the edge would be **39.15**. Documented, not
  re-derived. **`operator-account` keeps 24/12 by selector**, not by order — both heads are 0,3,0 and
  neither depends on which rule is written last; what they still share is the material, the `--green`
  fill and the `--page` ring. `order-details-aerial` sits outside `.dr-profile` and keeps 20.
  **Green budget re-counted:** drawn fill **π × 14² = 616px²**, so `account` reads **6,285 + 616 =
  6,901px² = 2.27%** of the frame (from 2.17%) against §0's ~5%, the primary control **91.1%** of it.
- **And 32 lasted an hour — the disc is 44 × 44 (2026-08-24, rev 198).** *«зроби більшу іконку
  кнопку»* again, answered this time by putting 32, 40 and 44 to the designer with all three
  measured; **she chose 44**. `--sz-head-mark` becomes **`var(--sz-action)`**, so no number is
  invented — it is the kit's circular icon action rung, already spent on `.dr-btn--icon`. **It is
  the proportion the component always argued for:** `--sz-avatar-badge`'s own note says 20 "holds
  36% of the 56px circle, inside the iOS badge range", and 36% of 120 is **43.2**. 24 read 20.0%,
  32 read 26.7%, **44 reads 36.7%** — the first of the three inside the range the badge was
  designed to. **Nothing was failing at any of them:** the target is still the 120px photograph
  (`HIG · 44pt` 273%, `WCAG 2.5.8` 5×); on its own box the disc goes **1.33× → 1.83×** of 2.5.8's
  floor (**3.36×** the area) and is now a `HIG · 44pt` box in its own right. `--on-green` on
  `--green` **9.46:1** throughout (`WCAG 1.4.11` 3:1). **Glyph `--ic-22`** — the same **50%** of
  its disc that 16-in-32 and 12-in-24 were; air inside the 2px ring **6 → 9**, rendered stroke
  **1.7 × 22/24 = 1.56**. **The corner-offset drift closes:** the disc's centre stood 70.71 from
  r=60 at 24 (10.71 *outside* the picture) and 65.05 at 32 (5.05 out); at 44 it measures **56.57 —
  3.43 INSIDE**, since exactly-on-the-edge is 39.15 and the disc has now passed it. The offset was
  never touched; it corrected itself by growing, which is what the rev 197 note predicted.
  **Green re-counted, and one number crosses a line:** the disc draws **π × 22² = 1,521px²**, so
  `account` reads **6,285 + 1,521 = 7,806px² = 2.56%** of the frame against §0's ~5% — comfortable
  — but the primary control is now **80.5%** of the screen's green, **just under** the 81–100% band
  `CLAUDE.md` records for a CTA (it was 91.1% at 32). Reported, not corrected: the screen already
  carries two green controls by her instruction, and this is that departure being measured, not a
  new one.
- **The operator's pair follows to 44, because it is defined by equal height (rev 198).**
  `--sz-photo-mark` is no longer a number — it is written **`var(--sz-head-mark)`**, so the pill's
  height reads as the *consequence* it is and the two can never drift by one being edited. Measured
  on his head: pill **56 × 44**, disc **44 × 44**, gap **3** (`--sp-3`), heights equal, both centres
  on the circle's bottom edge at **288.8**. Each mark hangs **22** below the circle, so the margin
  that pays it back is now derived — `calc(--sz-photo-mark / 2)` — landing on **22**, which is
  `--sp-22`, a rung the scale already owns. Screen green **3.24%**. **Two costs are stated rather
  than hidden.** An **11px rating line now stands in a 44-tall capsule** — the designer chose 44
  with that consequence written into the option she picked, and decoupling the pill is one token
  away. And `--mark-shift` is still **0** by her earlier call, so the wider pair now sits **23.5**
  right of the photograph's centre where it sat 13.5 at 24.
- **And the pair is unmade the same day — pill back to 24, disc stays 44 (rev 199).** *«why you
  change raiting badge back it back as it was I didn't ask to do it just the edit button»*. The
  rating badge was never named in any instruction; it moved because `--sz-photo-mark` had been
  written `var(--sz-head-mark)`, so raising the disc **carried the pill through a token**. That is
  the decoupling rev 198 said was one token away, spent. `--sz-photo-mark` is a **number again,
  24px**, and it now means **the rating pill's height and nothing else**; his disc reads
  `--sz-head-mark` **44** directly. **Measured:** pill **56 × 24** (`min-height` 24 over a **23.4**
  natural box), disc **44 × 44**, glyph 22, gap **3.00**, both still `bottom:0; translateY(50%)` on
  the circle's bottom edge. **The two marks now share the centre line and the gap, not the height** —
  which reverses rev 192's *«висота має бути однакова»* for this pair, on her word, and is recorded
  rather than corrected. **The margin follows the deeper mark, not the pill:** each hangs half its own
  height — pill **12**, disc **22** — so `margin-bottom` is `calc(--sz-head-mark / 2)` = **22**
  (`--sp-22`). Derived from the pill it would be 12, and the disc's bottom **10px** would run into the
  name. **Nothing fails either way and the 44-capsule cost is gone:** `--ink` on `--warn` **7.80:1** at
  11/600 against `WCAG 1.4.3`'s 4.5 (**1.73×**, colours never moved), `WCAG 1.4.4` held by `min-height`
  over the natural box, and the pill is a `<span>` — **`HIG · 44pt` and `WCAG 2.5.8` are stated and not
  engaged**, which is why its height was never a compliance number. Screen green unmoved at
  **7,542px² = 2.48%** (the pill is `--warn`). `--mark-shift` is still **0**, so the **23.5** offset
  stands — that is the disc's width, not its height.
- **And the pair ends 2026-08-27 (rev 204) — the other half of it was deleted.** *«delete rating
  badge»*. `.dr-profile__rating` leaves `operator-account`, the only page that ever carried it, and
  the `<span class="dr-profile__photo">` wrapper leaves with it: it was the positioning context
  **two** marks needed to share one edge, never a wrapper for the photograph. With one mark left the
  head collapses to the client's single `<a class="dr-profile__photo dr-avatar-edit">`. **Not one
  line of CSS was written**, because the scoping already knew both heads — every pair rule is
  `:has(.dr-profile__rating)` and stops matching, every corner rule is
  `:not(:has(.dr-profile__rating))` and starts. The disc keeps `--sz-head-mark` **44** and
  `--ic-22` and returns to `right/bottom: −2px`; the photo's `margin-bottom` falls **22 → 0**, which
  is the client's rule and the reason the wrapper had to go — `.dr-profile__photo.dr-avatar-edit`
  zeroes that margin only on an element carrying **both** classes, so a span left around the anchor
  would have kept the base `--sp-13` and opened a **13px** gap in a column that spends 8.
  **Measured on both heads, and they are identical box for box:** photo **120 × 120**,
  `margin-bottom` **0**, disc **44 × 44** hanging **2** below and **2** right of the circle, glyph
  **22 × 22** (`stroke-width` declared 1.7, rendered **1.56** on that box), photo-to-name **8** —
  the first time the two heads have measured the same since rev 192 built the pair. **No criterion
  is engaged by the removal:** the pill labelled no control (`4.1.2`), described no group (`1.3.1`),
  instructed no input (`3.3.2`) and was never a target, the 120px photograph carrying `HIG · 44pt`
  and `WCAG 2.5.8`. **`--warn` drops to one spend, the filled star**, and screen green does not move
  — what left was yellow.
- **Pair:** `--btn2` ground, `--ink` glyph — **11.54:1**, the circular icon action's own pair, so the
  two edit affordances on one card are one material. The disc is **1.25:1** on the card and is *not*
  the identifier: the glyph is, the way `.dr-upload`'s 1.08:1 well defers to its 32px mark.
- **Pair on BOTH profile heads — green (2026-08-24, rev 189 client, rev 190 operator).**
  `.dr-profile .dr-avatar-edit__badge` swaps the ground to `--green` under an `--on-green` pencil:
  **9.46:1**, against `WCAG 1.4.11`'s 3:1 — **3.15×** — and the accent is a **fill**, never a green
  stroke (§0). The disc as ground goes **1.39 → 1.69:1** on the page and is still not the
  identifier. The drawn fill is the 16 inside the 2px ring, **π × 8² = 201px²**, **0.066%** of the
  375 × 812 frame against §0's ~5%. Hover is `brightness(--bright-hover)`, not `--media`, at
  **0,3,0** so file order is not what decides it. The rule **merges into** the `border-color:
  var(--page)` line that already covered both heads — one declaration block, not two — and
  `.dr-avatar-edit__badge`'s own `--btn2` ground is thereby **spent on no page**, kept declared as the
  component's default the way `.dr-chip--sm` and `.dr-profile__role` are.
- **It is `account`'s one green control and `operator-account`'s second — a recorded G-5 departure
  (rev 190).** `account` carried **0%** solid green, so hers is the screen's one. His screen already
  has the green `.dr-fab` (rev 187), and G-5 reads *exactly one solid-green control per screen — the
  primary CTA, and nothing else clickable*. **G-5's own operative clause is the pixel one and it
  improves:** the rating pill left green the same day, so his frame goes **7,438 → 6,486px²**,
  **2.44% → 2.13%** of 304,500, and the green **concentrates on the CTA — 84.5% → 96.9%**, deeper
  inside the 81–100% band a primary CTA holds. The 201px² disc is the other 3.1%, smaller than
  either status mark G-5 already admits beside the one control (live disc 400px², walked node
  484px²), a column apart from the FAB and separately named (`Change profile photo` /
  `Edit profile`, `WCAG 2.4.6`). Taken on the designer's instruction and recorded, not corrected.
  **The ranking question is answered (rev 195).** It was reported at rev 189 that the green photo
  pencil outranked an outline `Edit profile` below it; the action is now the green floating capsule,
  so the two edit affordances are one material again and the larger of them is the screen's stated
  action.
- **Ring:** `--w-badge-ring` 2px in `--card`, a **border and not a shadow** — it cuts the badge out of
  the photograph, whose pixels cannot be measured, and the flat-surface rule holds with `--sh-sm`
  under the green primary still the only shadow in the product.
- **Glyph:** 12px, rendered stroke **0.85** — the scale's own value at that box; no compensation.
- **Layout:** `align-self:flex-start` is load-bearing. `.dr-op` stretches its children and the wrapper
  measured 56 × 73.3 without it, which hung the badge below the circle instead of on its edge.
- **Sibling naming:** where an avatar badge and a row pencil stand on one card their accessible names
  must differ by more than a word — *Change profile photo* against *Edit profile* (`WCAG 2.4.6`).

### Profile photo, large (`.dr-avatar-lg`)

**120 × 120**, `--r-pill`, `--media` ground (1.08:1 on the card), `object-fit:cover`, centred with
`margin:0 auto`. **120 and not `--sz-avatar` 117:** that token is the operator panel's *width*, read
off a 595 × 702 asset ratio, and a circle should not inherit a rectangle's arithmetic. The `<img>`
takes real `alt` here, where the picture *is* the content, against the empty `alt` it carries beside
a written name. **Open, measured, not fixed:** the served thumb is 128 × 128 against a 120px box, so
a 2× frame upscales it 1.875× — §Imagery asks for ~2× the CSS box, i.e. 240 × 240 cut from the
847 × 886 master.

**Second user, 2026-08-21:** `operator-account`'s profile head. The `<img>` there takes **empty
`alt`**, not real alt — the same rule read the other way, because the name is written directly under
the circle. The thumb problem travels with it and is worse on that page: `person-operator-ivan.png`
serves **128 × 128** into the same 120 box, so a 2× frame upscales **1.875×**; the master is
634 × 634 and a 240 × 240 cut would close it. Recorded, not fixed — `assets/` is the designer's.

### Profile head (`.dr-profile`)

The operator looking at himself, added 2026-08-21 (rev 171) on the designer's word and against a
frame of her own: *«аватарка по центру, на аватарці бейдж з рейтингом, під низом ім'я, під ним
словами оператор, під низом кнопка редагувати, бекграунду немає»*. **It is a component of its own
and not a modifier of `.dr-op`**, because every value disagrees: `.dr-op` is a row since it is a card
in somebody else's list, and this is a column since there is one person on the screen and he is its
subject. `.dr-op` is untouched on the eleven client screens that carry it.

- **No card.** `background:none`, no padding, no radius — the head stands on `--page`. Every pair
  improves rather than costing: name `--ink` **14.37 → 15.99:1**, role `--slate` **5.95 → 6.62:1**,
  and the secondary button's own fill **1.25 → 1.39:1** against its ground. `WCAG 1.4.3` wants 4.5
  for both texts and both clear it with the whole of the gain to spare.
- **Photo:** `.dr-avatar-lg` at **120 × 120** — `--sz-avatar-xl`, the rung `account-photo` already
  spends. The model draws its circle at ~25% of the frame; 120 is **32%** of 375, larger on purpose,
  because 96 is not a size this system owns and a seventh avatar rung would widen a closed ramp.
- **Rating badge (`.dr-profile__rating`):** `--r-pill`, centred on the circle's bottom edge by
  `translate(-50%, 50%)` — the same rule `.dr-avatar-edit__badge` states, the disc's centre on the
  edge. `--w-badge-ring` 2px in **`--page`** (not `--card`, there is no card) cuts it out of the
  photograph; it is a **border, not a shadow**, so the flat rule holds.
- **The two marks are one pair (2026-08-24, rev 192).** They had been **52.9 × 25.4** and
  **20 × 20** on two centre lines **15.54** apart; the designer asked for one height and a 2–4px
  gap. Both are **24 high** now — the 8-grid step between 25.4 and 20, and `WCAG 2.5.8`'s target
  floor, which the pencil had been meeting only through the 120px photograph it sits inside and now
  meets on its own box at **1.00×**. They share one centre line (**0** offset) and a **3.00** gap,
  exact because the disc is placed from the pill's edge — `calc(50% + --sz-rating-w/2 + --sp-3)` —
  which is why the pill's width is **declared at 56** rather than left at the 52.92 its string
  happened to measure (36 of content box against a 32.92 glyph run, 3.08 of slack). The disc takes
  24 as `height`; the pill takes it as `min-height` over a 23.4 natural box, so enlarged text grows
  it instead of clipping (`WCAG 1.4.4`). Scoped `:has(.dr-profile__rating)` — the operator's head
  and only his; the client's pencil keeps its corner and its 20.
- **The badge is YELLOW (2026-08-24, rev 190), and it went yellow so the pencil beside it could be
  green:** *«зроби кнопку редагувати фото зеленою біля бейджу з рейтингом а бейдж з рейтингом жовтого
  кольору»*. It was solid `--green` from rev 171 to that day, as a status **mark** rather than a
  control — the case G-5 admits beside its one-control clause. **`--ink` on `--warn` `#E4A11B` is
  7.80:1**; 11px is normal text under `WCAG 1.4.3`, so the threshold cleared is **4.5:1**, at
  **1.73×**, not the 3:1 large-text one. **The yellow is the palette's own and the rating's own** —
  `--warn` is the colour a filled star has worn since 2026-08-03 (`.dr-star[aria-pressed="true"]`),
  so no token is added and none is cut. **No `--on-warn` is declared:** `--on-green` exists to state
  a rule (*the only colour allowed on green*), yellow needs no such rule, and a fourth alias for
  `#1A1A1A` would be read against `--warn-ink` `#7A5200`, which belongs to the wash. `--ink`,
  plainly — the star included, so the accent stays a fill and never an ink.
- **The pill's ground reads 2.05:1 on the page** (up from green's 1.69:1) and is **not** the
  identifier; the number is, at 7.80:1 — this kit's standing `WCAG 1.4.11` reading. Against the green
  pencil **15.93** away it is **1.21:1**: the two marks separate by **hue, not luminance**, and
  nothing rests on telling them apart — each is cut out by its own 2px `--page` ring, they never
  touch, and neither states its meaning in its colour (`WCAG 1.4.1`).
- **Name:** `.dr-display` 22/700, `--ink`, **15.99:1**.
- **The pencil joins the pill on that bottom edge (2026-08-21):** *«додай для оператора біля бейджу з
  рейтингом редагувати фото»*. It is the client's own `.dr-avatar-edit` — same class, same 20px disc,
  the ring `--page` — pointing at `operator-account-photo`. **Its ground took the green the pill gave
  up on 2026-08-24 (rev 190):** `--on-green` glyph on `--green` at **9.46:1**, where it read `--ink`
  on `--btn2` at 11.54:1 from rev 171 to that day.
  **No new CSS was written for it.** Measured on the 375 frame: pill **52.13 × 24.6** centred with its
  centre line exactly on the circle's bottom edge (y 236.8 = circle bottom), disc **20 × 20** at the
  box's corner, **15.93 apart**, overlapping 14.3 of vertical band so the two read as one pair.
- **The link wraps the picture, not the disc** — **120 × 120**, `HIG · 44pt target` at **273%**,
  `WCAG 2.5.8` at **5×**; the 20px disc alone would have to be padded out to a target it does not
  look like. **And the rating stays outside that link**, deliberately: the `<a>` carries
  `aria-label="Change profile photo"`, which replaces its content for the accessible name, so a
  rating nested inside would stop being announced. Sibling, not child — the pill keeps its own
  `Rating 4.9 ★` (`WCAG 1.3.1`, `4.1.2`) and the anchor keeps a name that says what it does.
- **Role line: CUT from both heads, 2026-08-21** — *«видали це з обох варіантів client and
  operator»*. It read `Operator · 214 jobs` here and `Client` on `account`, 15/400 `--slate` at
  6.62:1, an 18px box over an 8px gap: **26 of height off each column**. Nothing is orphaned — the
  **Mode** row states `Operator` / `Client` as its own value on both screens, and `· 214 jobs` was
  put to the designer before the line went (cut, kept alone, or moved to the Account panel; she cut
  it) and still rides Ivan's `.dr-op` card on `tracking` and `order-confirmed`, where the **client**
  reads it. No criterion is engaged: the span labelled nothing (`1.3.1`), named no control (`4.1.2`)
  and instructed no input (`3.3.2`). `.dr-profile__role` **stays declared and is spent on no page**,
  the terms `.dr-chip--sm` was kept on.
- **Rhythm:** 8 between siblings, **12** before the credential row and before the action — the group
  boundary reads larger than the space inside it (`HIG · Layout`). The photo carries `--sp-13` of
  margin to pay back the badge's 12.7 of overhang, so badge-to-name measures **8.3**.
- **Action — not in the column any more (2026-08-24, rev 187):** *«make edit profile button as a
  green float button»*. **Edit profile** leaves the head for the tab bar's bottom accessory and
  becomes `.dr-btn--primary .dr-fab`, **152.29 × 44**, `--on-green` on `--green` at **9.46:1** — see
  *The floating action* below, where the whole measurement lives. What it was, for the record: the
  outline pill of rev 181 (`--ink` **15.99:1** over a 1px `--slate` edge at **6.62:1**, `--r-pill`,
  **144.69 × 44**), itself a `--secondary` at 11.54:1 on `--btn2` until that revision. **The
  credentials close the column now**, and the accessible name is still the visible label
  (`WCAG 4.1.2`). **`.dr-btn--outline` kept a live user for three days and no longer does** — the
  client's `account` followed onto the accessory at **rev 195** on the designer's word, so the rung
  is declared and spent nowhere (see §Buttons). **The two heads are the same component again**, which
  answers the question rev 187 left open rather than leaving it standing.
- **Credentials:** the two `.dr-chip--claim` pills, `--ink` on `--green-wash` at **14.75:1**,
  centred and unchanged in meaning. The pair measures **244.1** in **343** of frame — one line.

**Second user, 2026-08-21 (rev 182) — the client's `account`.** The designer on the built page:
*«зміни картку так як для оператора лише врахуй що для клієнта в картці інші дані»*. The head is
copied whole and **not one value is new**; what changes is the data in it, and `.dr-op` stays on the
ten client screens that meet an operator.

- **The badge slot carries what the persona has there.** The operator's is `.dr-profile__rating`; a
  client is not rated, so the slot takes the **pencil** `.dr-avatar-edit` already put on this photo
  (2026-08-16) and `account-photo` stays reachable. The `<a>` still wraps picture and badge, but the
  picture is 120 and not 56 — `HIG · 44pt target` at **273%**, `WCAG 2.5.8` at **5×**. `WCAG 1.4.11`
  is carried by the **glyph**; the disc is not the identifier. Both figures moved on 2026-08-24 when
  the ground went green on both heads: glyph **11.54 → 9.46:1**, disc **1.39 → 1.69:1** on the page
  — see the Avatar edit bullets above.
- **Two `.dr-op` values are undone, scoped at 0,2,0,** because `.dr-avatar-edit` is written 54 lines
  below `.dr-profile__photo` at equal specificity and wins every tie:
  `.dr-profile__photo.dr-avatar-edit{ align-self:center; margin-bottom:0 }`. `align-self:flex-start`
  is load-bearing inside `.dr-op` and in a centred column pushes the photo **110.7px off centre**;
  `--sp-13` pays back the *rating* pill's 12.7 of overhang, where the pencil hangs **2**. Measured
  after: photo dead centre (**0**), rhythm **8 / 8 / 12 / 12**, identical to the operator's.
- **The ring follows its ground:** `.dr-profile .dr-avatar-edit__badge{ border-color: var(--page) }`
  — since `--card` on `--page` is a 1.11:1 seam that means nothing. `operator-account` re-measured
  unchanged by both rules. **This block is now also where the green ground lives** (rev 190): the
  ring rule and the `--green` / `--on-green` pair are one declaration block covering both heads.
- **Role:** none. It read `Client` with no count beside it for one day and was **cut on 2026-08-21**
  with the operator's — see the role bullet above. The word is still on the screen as the **Mode**
  row's value, so it is stated once instead of twice.
- **Credential:** **one** `.dr-chip--claim`, `Verified with Diia`, **162.49 × 26.8** — the same
  shield-and-check the operator's two wear, because it means the same thing under the 2026-08-18
  rule: *green means DRON confirmed this document*. It was plain `--slate` text at the
  `.dr-op__rating` rung, and on this head that rung **is** the badge.
- **The phone leaves the head for the Account panel.** `+380 •• 4417` is contact data, not a
  credential, and a chip row mixing the two kinds stops saying one thing; `account-edit` already
  carries Phone as a field beside Full name and Saved address. The fact leaves the card, not the
  screen.
- **No solid green on this screen at all,** where the operator's head carries one. The rating badge
  was his only green mark; §0's one-control budget is spent at **0%** here. The claim chip and the
  selected tab are both `--green-wash`, 1.085:1 against the page — a tint the budget does not count.
- Action **144.29 × 44**, unchanged.

### Cards

- **Surface:** `--card`, `--r-card` 16px, no border, no shadow.
- **Inset:** since 2026-08-15 (rev 88) the vertical inset is one rung above the horizontal on every
  card ground — **24 / 20** on a list card, **20 / 16** on operator and message cards, **8 / 16** on a
  row panel, and **8 / 0** on `.dr-disclosure`, the remaining full-bleed list, whose rows keep their
  own 16. 32px still at the bottom where the last element is a primary button.
- **`.dr-picks` is the one card with a single inset on all four sides — `16`** (rev 91). The 16 moved
  off the row and onto the card, so the row carries **no horizontal** padding of its own — since
  2026-08-21 (rev 172) it carries **8 on the block axis**, which changes nothing on a single-line
  row (21 of text + 16 is 37, under the 44 `min-height`) and gives a **two-line** row the air it was
  missing. Since **rev 175** a two-line row takes **12** instead — `.dr-pick:has(.dr-pick__sub)`,
  `--sp-snug` — so its inset matches the **11.5** the 44 `min-height` hands a one-line row for free,
  and the row lands at **60**, the height `HIG · Lists` draws a subtitle cell at. The `:has()` scope
  is load-bearing: 12 written on `.dr-pick` itself would put a one-line row at 21 + 24 = **45**, past
  the `min-height`, and move every pick list in the build. On `withdraw`, the one list whose rows
  carry `.dr-pick__sub`, the row goes **44 → 52 → 60**, the distance between the two rows' text
  **8 → 16 → 24**, and the card **120 → 136 → 152**; measured after rev 175, every other pick in the
  repo still draws at exactly **44** (`job-checklist`(-error), `listings-filters`,
  `operator-profile-setup`, `order-setup`(-aerial/-inspection), `payment`(-aerial/-inspection)).
  Nothing shifts sideways:
  the label still begins 52px from the card's edge (`16 + --sz-box 24 + --sp-snug 12`), and
  `--pick-indent` is derived from the two remaining terms so the separator's leading edge follows.
  **The cost, recorded not corrected:** the separator now stops 16px short of the trailing edge,
  where `HIG · Lists and tables` runs it to that edge, and the row's hit area narrows 326 → 294px
  (× 44 tall — `WCAG 2.5.8` cleared ×12.25 and ×1.83). The designer was shown both readings on
  2026-08-15 and chose the literal one.
- **And on 2026-09-03 (rev 229) the leading edge goes too: the separator is `0 / 0` in the row,
  which is `16 / 16` from the card.** Asked which way the radio lists should follow rev 227's field
  card — leave them at `52 / 16`, mirror the indent at `52 / 52`, or drop it for the content box —
  the designer chose the content box, so both components that draw a line inside a card now draw the
  same line. `--pick-indent` **36** (`--sz-box 24 + --sp-snug 12`) stops being spent: the label still
  begins **52** from the card edge, and the token is **kept, declared and spent nowhere**, the way
  `--sh-card` and `--sh-onphoto` are kept. It is the second half of the same departure from
  `HIG · Lists and tables`, whose separator is inset to the row's content on the leading edge and
  full-bleed on the trailing one; rev 91 had already taken the trailing half away, and this takes the
  leading half. **Nothing else moves and nothing is re-measured:** the hairline is `--line` on
  `--card` **1.21:1** before and after — under `1.4.11`'s 3:1 and permitted there because a list
  separator is decoration, the grouping staying programmatic in the DOM (`1.3.1` ✓) — the row keeps
  its **44** `min-height` and its hit area (`HIG · 44pt` ✓, `WCAG 2.5.8` ✓), and a `::before` is not
  a target. **Derived from the box model, the insets being literal:** on a 341 card the row is 309
  and the line **273 → 309**; on the 309 zone card `listings-filters` draws, the row is 277 and the
  line **241 → 277**. Ten pages carry a pick list — `job-checklist`(-error), `listings-filters`,
  `operator-profile-setup`, `order-setup`(-aerial/-inspection), `payment`(-aerial/-inspection),
  `withdraw` — plus the `_checkbox-options` spec, which holds no override and follows the kit. The
  bench rule `.dr-picks li + li .dr-range::before` takes the same value, so it cannot come back off
  the bench carrying a geometry the product no longer draws.
- **Measured on `listings-filters`, before → after (all three cards identical):** card padding
  `8px 0` → `16px`; row padding `0 16px` → `0`; card-edge to the first radio 16 / 18 → 16 / 26
  (left / top — the 8px difference is the row's own slack, not the card's); card-edge to the row box
  8 → 16 top and bottom; separator 52 from the leading edge in both, 0 → 16 short of the trailing
  edge (**16 from both since rev 229**); the Price card's foot below the `₴0 / ₴1,000+` labels
  22 → 16.
- **Internal rhythm:** 20px between groups, 4/8 within a group.
- **The one card with no inset at all — `.dr-card--cover`** (2026-08-16, rev 140): padding `0`, gap
  `0`, `overflow:hidden`, its picture flush to three edges and clipped by the card's own 16 radius
  (the media's 13 switched off — two radii on one corner is a shape nobody chose). The padding moves
  onto the line below it, `12 / 16`: vertical against horizontal because that line already carries a
  44px control, so its height is set by the target and the 12 is air, not measure. It is not an
  exception to the inset rule but the imagery rule winning where the two meet — a photograph *is* the
  surface. One user: the video card on `order-details-aerial`.
- **`.dr-card__row` — the band that leads** (2026-08-21, rev 163): `display:flex;
  align-items:center; gap:12`, structure only. It exists because `.dr-card--row` turns the **card**
  into a row and `wallet`’s earnings card is a **column whose first child is one**;
  `.dr-listing__foot` records the same gap, but its name says *foot* and cannot serve a band that
  leads. Third member of the family, beside `__actions` and `__link`.
- **Whole-card link:** an absolutely-positioned `.card-link` covering the card, with inner controls
  lifted above it.
- **Focus, keyboard only:** the inherited `:focus-within` ring is switched off and re-hung on
  `:has(> .card-link:focus-visible)`, so a pointer click does not flash an outline and a focused
  inner button does not double-ring the card.
- **No hover lift.** Hover is desktop-only and the card is flat at rest.

### The balance card (`.dr-balance--card`)

Added 2026-08-21 (rev 163) on the built `wallet`, against the designer's own reference (Figma
`YlGWlsWWjKSCxhONMzGG2F` node `117:45`): *«зроби total зеленою карткою іконку візьми відповідну щоб
показати накопичені кошти далі сума та available to withdrow… лиш нічого не домальовуй від себе»*.

- **A modifier, not a second component.** `.dr-balance` already owns the figure-over-caption column
  and its 4px step; the modifier turns that column on its side and fills the shape. `ratings`'
  three-child version of the same block is untouched.
- **Measured:** **341 × 84**, padding **20 / 16**, `--r-card` **16**, ground `--green`, **no shadow** —
  it sits *in* the page like every other card. Glyph plate **44 × 44** (`--r-media` **13**, `--green-wash`),
  glyph **22** inside it (`--ic-22`, rendered stroke **1.56**), gap **12** to the body, **4** between
  figure and caption.
- **Every ink on it is `--on-green`, 9.46:1** — figure and caption both. The caption's colour is
  **stated in the kit rather than inherited**, and that is the one place a `.dr-note` may not keep
  its own ink: `--slate` measures **3.91:1** on `--green`, a real `WCAG 1.4.3` failure at 12px.
- **The glyph stands on a plate, and the plate is what makes the centring read** (2026-08-21,
  rev 177: *«зроби іконку на бекграунді щоб відбулось вирівнювання по центру іконки та тексту з
  права»*). The bare 32 glyph *was* centred against the 44 body — 6px of fill above and below,
  midpoints identical — but two blocks of different height do not **read** as centred, because the
  eye lines up edges. The plate is **44**, the body's own height (22 + 4 + 18), so the two columns
  share a top and a bottom edge: **188.8 → 232.8** both, midpoints **210.8 / 210.8**. Card height
  does not move. **It costs no new hex** — rev 163 refused the reference's badge because a plate
  would need "a fifth surface colour", true of the four surfaces and false of the tint:
  `--green-wash` is already spent on this fill as the banner's unearned star track, **1.56:1**.
  Charcoal on the wash is **14.75:1**, better than the **9.46:1** the glyph had on the fill; the
  plate's own **1.56:1** edge is under `WCAG 1.4.11`'s 3:1 and **does not engage it** — the span is
  `aria-hidden` and the figure and caption carry every fact. The **44** is `--sz-glyph-plate`,
  arithmetic on the body, **not** `--sz-action`'s 44: that one is a control's HIG target and this
  plate is not a control. The glyph is **half the plate** (22 in 44, `.dr-call__avatar`'s own ratio).
  It is a **coin stack**, not the Earnings tab's bank card — *accumulated funds* is accumulation,
  and the tab two rows below already spends the card.
- **The plate is a square, not a disc** (2026-08-21, rev 178: *«квадратний бекграунд для іконки
  роби»*). It takes **`--r-media` 13** — not a new shape, since `.dr-mark` is the kit's other square
  icon plate and has carried that corner since it was built, so the two are one shape at two sizes.
  The ramp of six radii stays closed (a bare **0** corner is not on it), and **13 nests inside the
  card's own `--r-card` 16**. The plate still measures **44 × 44**, so the centring above is
  untouched. Square corners give back the **145 px²** a 13 radius rounds away, so the plate now cuts
  **1,791 px²** out of the fill instead of **1,520**.
- **What it costs, recorded not corrected:** the card alone is **8.82%** of a 375 × 812 frame
  (**9.41%** before the plate was cut out of the fill; **8.91%** while it was a disc), and with the
  floating CTA the screen's solid green reaches **11.32%** — was **11.91%** — against the ~5% ceiling in
  *Named rules*. Both shapes are the designer's instruction of 2026-08-21, and **she was shown the
  four readings with the numbers and chose to keep it as built** — a conforming departure recorded,
  not a defect. The ~5% rule is unchanged: she declined rewriting it as well.

### The floating action (`.dr-fab`, `.dr-main--fab`)

Added 2026-08-21 (rev 163): *«додай floating button посередині біля ботом бару відповідно до HIG»*.
**Two users**, and both left a column for this place: `wallet`'s **Withdraw ₴3,240**, and — since
2026-08-24 (rev 187), *«make edit profile button as a green float button»* — `operator-account`'s
**Edit profile**. The second one added no class, no token and no page CSS.

- **Apple's shape, not Material's.** `HIG · Tab bars` asks a tab bar to carry navigation and not
  actions, so a circular button planted in or over the bar is the one reading that would fail.
  iOS 26 ships the tab bar's **bottom accessory** — the slot the Music mini-player rides in — a
  capsule floating clear above a bar that stays four tabs. That is this.
- **Measured:** `wallet` **173.1 × 44**, `operator-account` **152.29 × 44** (`--h-control`, so
  `HIG · 44pt` is met by construction, and `WCAG 2.5.8`'s 24 × 24 is cleared 1.8× on the short
  side), `--r-pill`, centred with `left:50%` + `translateX(-50%)` — **0px** off the frame's centre
  line and **0px** of overrun on both — `bottom: calc(--h-tabs + --h-home + --sp-snug)` = **11.2px**
  clear of the bar's top hairline. Label `--on-green` on `--green` **9.46:1** (`WCAG 1.4.3`); focus
  ring `--ink` at 2px (`WCAG 2.4.11`). `WCAG 1.4.11` is satisfied by the label, not the fill — green
  on the page is 1.69:1, and the criterion exempts a boundary not required to identify a control
  whose text already does. **A leading glyph inherits the label's charcoal** — the `operator-account`
  pencil is `currentColor` at 20px, so green is never the ink and never the stroke.
- **`--sh-raised`, and that is the flat rule holding rather than bending.** rev 43's exception is
  written for things that genuinely float — *"the flat rule is about cards sitting in the page,
  which is why a drawer and a toast do not break it"* — and a control hovering over a scrolling
  list is the third such thing. The rung is now spent on **three** sites: `.dr-sheet`, `.dr-toast`,
  `.dr-fab`. The green primary's own `--sh-sm` is the shadow of a button lying flat, which this is
  not.
- **`.dr-main--fab` is the floor it asks for:** `padding-bottom` **72** (44 + 12 + 16), so the last
  card scrolls fully clear instead of parking under the pill (`HIG · Layout`). Measured: `wallet`
  scrolls 735 in 619; `operator-account` scrolls **658 in 620**, where the last Account row is
  overlapped **13.4** at rest and stands **24.2 clear** at the bottom of the 37.6 of travel. The
  list does pass under the pill while scrolling, which is what a floating accessory does, and
  nothing is permanently unreachable.
- **The green budget it spends, per screen.** On `operator-account` the pill is **6,285px² = 2.06%**
  of the 375 × 812 frame and is the screen's **only green control** — the head had spent none of
  §0's ~5%, since the two `.dr-chip--claim` credentials and the selected tab are all `--green-wash`
  at 1.085:1, a tint the budget does not count. The rating badge on the photograph stays solid green
  as a **status mark**, **1,153px² = 0.38%**; screen green totals **2.44%** and the control is
  **84.5%** of it. On `wallet` the same component takes the screen to **11.32%** with the balance
  card — a departure she was shown with the numbers and chose to keep.
- **The `:active` re-declaration is load-bearing.** `.dr-btn--primary:active` sets a bare
  `transform`, which would drop the centring `-50%`; the modifier restates both, and being later in
  the sheet at equal specificity it wins. `.dr-fab` must stay below the button pack.

### Titled zone card (`.dr-zone`)

Added 2026-08-16 (rev 125) on the built `listings-filters`, and spread on the designer's next call
(rev 127) to **every card in the product that holds data the user enters, sorted into categories** —
`listings-filters` (Location · Date & time · Price), `account-edit` (Personal details · Payment &
language) and `payment` (Payment method). **Where it deliberately does not go:** an entry group that
is a plain list and not a card (`order-setup`, `report-issue`, `contact-support`, `rate` — rev 98's
call), a navigation group (`account`), an upload card that already carries its own title, and the
order and operator cards, which display rather than collect.

- **Surface:** `--card`, `--r-card` 16, a **16** inset on all four sides — `.dr .dr-range`'s card
  with the range taken out. **The selector needs both classes:** the base `.dr fieldset{ padding: 0 }`
  is 0-1-1 and out-specifies a bare component class, and a zone may *be* a fieldset.
- **Title** 17/600 `--ink` — **14.37:1**. **Subtitle** 13/400 `--slate` — **5.95:1**, `4` under the
  title. **20** from the subtitle to whatever the card holds. One declaration serves
  `.dr-zone__title` / `.dr-range__title` and their two subtitles, so a repeat cannot drift.
- **The card boundary moves; the list inside does not.** The list gives up the ground, the radius
  and its own inset to the card. `.dr-picks` needs nothing else — its rows were inset 16 by the list
  and are inset 16 by the card. `.dr-rows` bleeds **−16** either side, because its rows carry their
  own 16 and its separator runs from that inset to the matching inset on the other side (**16 / 16**
  since rev 227 — it ran to the card's trailing edge until then).
- **Measured on `listings-filters`, 375 × 812:** both new cards **341 × 273.99**; rows **341 × 44**
  with labels at **305** and separators **305 → 630**; options **309 × 44** with labels at **341**
  and separators **341 → 614** — every one of those numbers unchanged by the pass. On `account-edit`
  rows **326 × 44** with the separator **90 → 400**; on `payment` options **309 × 44** with labels at
  **126**. Same result on all three: the card arrives, the list does not move.
- **What it costs is height and nothing else:** **+66** per card for the two lines and the 20 gap,
  **+16** more wherever the list had `.dr-rows`' 8/0 inset instead of the card's 16. Annotations off:
  `listings-filters` **719 → 867** in a 577 window (the Price zone goes below the fold),
  `account-edit` **642 → 806** (all five rows stay above it), `payment` **629 → 629** (nothing
  scrolled before and nothing scrolls now). Green **0px²** on every page that carries it.
- **The name is the drawn line.** `aria-labelledby` → the title, `aria-describedby` → the subtitle,
  and no `aria-label` on the group. A `<legend>` is not the answer: rendered, it sits in the
  fieldset's block-start border region, outside the padding box, and takes the 16 inset with it.

### Row panel (`.kv` · `.dr-rows`)

`--card`, `--r-card`, padding `8px 16px` (**2 until rev 88** — this line said 2 and the frames said
8; the frame wins). Each row `13px 0` with a `--line` bottom hairline. Key `--slate` 13/400
**5.95:1**; value `--ink` 15/600 tabular **14.37:1**.

**Two columns reading from the left, on the CARD's axis** — the designer's call 2026-08-16 for the
alignment, taken from the editable card (`.dr-field`) in `account-edit`, and 2026-09-10 (rev 233) for
the column. The label column is sized per group by the widest key **in that group** and floored at
`--sz-rowkey` **96px**; the value takes the rest, gap `--sp-10`, not `--sp-snug`. On
`order-confirmed-aerial` — keys `When` 35.25 and `Status` 39.30 — that is a **96** column and a
**203** value, where the product-wide 140 left **159** and wrapped the date. **It was a fixed 140px
from rev 97 to rev 232**, sized on the widest key anywhere (*First time as Operator*, **133.34**), so
that every value on every screen started at **x = 166**; what that bought in cross-card alignment
nobody can see — two cards are never on screen side by side — it spent in air on every card whose
labels are short.

**The field row joined this column at rev 114** (2026-08-16), which is where the axis was copied from
in the first place: the reference card was still mixing a 1:1 split with two trailing picker values.
One rule serves read, typed and chosen alike — and since rev 233 what they share is the **mechanism**,
not the number: every row in a card stands on that card's column, which is what rev 114's complaint
(three axes inside one card) actually asked for.

Before: `justify-content: space-between` with `text-align: right`, so the value's **left** edge landed
wherever its string happened to end — measured across the 13 wireframes that carry it, **46 rows at
24 different x**, from 131.75 (`switch-role`) to 294.78 (`order-review`'s ₴90).

**One exception — `.dr-rows--money`.** A card whose values are *figures*, not facts, keeps the
trailing column: tabular numerals only line up on the last digit if the column is right-aligned, and
left they line up on the ₴ with ₴180 running 24px past ₴90. Key `flex: 1`, value `flex: none`. Spent
on `order-review`'s price breakdown, its loading state and — since rev 138 — the same four rows
inside that screen's pay drawer, nowhere else. `resolution`'s *Refund issued ₴180* is a sentence and
stays with the facts.

**`.dr-rows__row--stack` — the row whose value is a badge.** A `.dr-chip` is `nowrap` by construction
and measures **164.08**, wider than the 159 column, so on `inspection-report`'s *Signed* row it stood
**10.92** from the card's edge and ate **5.08** of the 16px inset every other line on that card keeps.
Truncating a badge is not an option and shrinking the label would break the axis for one row, so the
row does what HIG does when a value will not sit beside its label: label on its own line, value at the
card's full width — `.dr-field--area`'s shape. Measured after: key **16**, value **16 × 309**, chip
clear by **56.59**, row **73.8 → 81.0**. Spent on one row in the product.

**Skeleton rows keep `space-between`** (`.dr-rows__row:has(> .dr-sk-line)`). The bars are proportional
stand-ins — w40 / w50 / w30 of the row — not text on an axis; pinning them to the 140 column would
blow each bar out to fill its track. `order-review-loading` and `tracking-loading` render byte-identical.

**Conformance.** HIG ships **both** — a trailing value in a grouped list row (`HIG · Lists and
tables`), a leading value in a form row (`HIG · Text fields`) — so neither alignment is *the*
conforming one and this is a taste call, not a compliance fix. WCAG is untouched: `1.4.3` keeps its
pairs, `1.3.1` keeps its DOM order, `1.4.8` governs justified text and not trailing.

**What the axis cost, measured at rev 97:** the value column was 159, four strings were wider, and
rows on two lines went **3 → 5** — the two new ones `switch-role`'s *Any time from Account* (172.45)
and `tracking-empty`'s *~15 min (running late)* (168.97). No frame changed height (812 on all 13) and
no page scrolled sideways. **Both figures are history now and are kept as history:** the fixed column
went on being paid for by pages built after it, reaching **27 of 197 rows on two lines** by
2026-09-10, which is what rev 233 answered with a per-card column (**6**); and `switch-role`'s panel
was deleted at rev 234, so the 172.45 string is no longer in the product at all.

One component, **13 wireframes** plus `ui/kit.html` — the tracking ETA panel and the delivery details
panel are the same two rules.

### Inset strip (`.ohl-route`)

`--inset` `#F2F0EC`, `--r-btn` 12px, padding 16. From-stop left, To-stop right-aligned, a 26px
`--media` direction chip between them. The chip is neutral, not green: green is not spent inside
card UI. Present on every order card, including delivered ones.

### Chips and badges

`--r-pill`, padding `5px 10px`, 12/600, **14px** leading glyph, gap 6.

**One glyph size, settled 2026-08-02.** The build drew 13px in a badge (`.badge`) and 14px in the
ETA pill (`.ohl-eta`) — one component with two values, against the One-Component-One-Value rule.
The designer's call is **14 everywhere**.

- **Live / claim:** `--green-wash` + `--ink` at 14.75:1 — *Verified by DRON*, *Insured*,
  *CAA licence*. Green here means **DRON checked this document** (settled 2026-08-18); the blue
  `--trust-wash` rung it replaced is declared and spent nowhere.
- **Muted / fact:** `--media` + `--slate` at 5.51:1 — *Operator*, *Client*, *Human agent*,
  *Order #DR-4821*, the ETA chip.

**A second size, and only one — `.dr-chip--sm`, added 2026-08-21.** 11/600 with padding `3px 8px`,
drawn **65.7 × 21.4** against the base chip's **74.2 × 26.8**. It exists for one position: a chip
that sits **beside a name** rather than in a row under it, where the base size out-weighs the 15px
name it is standing next to. Colour is untouched, so the pair is still 5.51:1 — and 11px is a
normal-text size under `WCAG 1.4.3`, which is the 4.5:1 threshold the pair already clears. Used on
`operator-account`'s *Operator*. It is **not** an escape hatch for a row that will not fit; a row
that will not fit gets more width, not smaller type.

### Status indicator

A 20px disc pinned to the top-right of the drone box, with a 2px `--card` cutout ring.

- **Live:** solid `--green`, plus one ring leaving the disc and fading on a **1.8s** cycle
  (`cubic-bezier(.22,.61,.36,1)`, `box-shadow` 0 → 8px, green 90% → 0%).
- **Done:** `--btn2` with an `--ink` check at 11.54:1.

The two differ by **shape and behaviour, never by colour alone**. Each keeps its old wording as its
accessible name. The ping is far under the 3-flashes-per-second ceiling and off entirely under
`prefers-reduced-motion`.

### Progress

One node, two axes. 22px circle, 2px border, 12px glyph.

| State | Border | Fill | Glyph |
|---|---|---|---|
| pending | `--line` | `--card` | none |
| done | `--green` | `--green` | `--on-green` check |
| now | `--green` | `--card` | `--ink` dot + 4px `color-mix(green 20%)` halo |

- **Horizontal** on the live order card: a 4-column grid, each node centred over its own label; the
  track runs from 12.5% to 87.5% behind the circles, `--line` for the rail and `--green` for the
  walked span (`--fill:25%` at step 2 of 4).
- **Vertical** on tracking: a 2px connector at `left:10px`, `--green` where walked.

Milestones are the canonical four everywhere: **Accepted · En route · On-site · Done**.

### State marks (`.msg-ph`)

52 × 52, `--r-media` 13px, 26px glyph. `--media`/`--slate` neutral · `--warn-wash`/`--warn-ink` ·
`--danger-wash`/`--danger-ink`.

### Milestone mark (`.success-mark`)

64px circle, `--green-wash` + `--ink` (14.75:1), 32px glyph. Delivered draws a circle-check;
waiting draws a clock in the **same well** — the two states differ by glyph and screen title, not
by colour, and there is no paler green step to give waiting its own (every mix below
`--green-wash` lands at 1.03–1.05 against the page).

### Message block

`--card`, `--r-card`, padding `22px 18px`, gap 12, centred. Mark → title 17/600 → body 13/400
capped at 260px → actions, gap 10, full-width buttons. Carries `role="alert"` on an error and
`role="status"` on an empty state.

### Message bubble and thread (`.dr-bubble`, `.dr-thread`)

The conversation surface on `chat` — the client's thread with the operator running the job.
Deliberately **not** a variant of the message block above: that one is a centred state notice with a
mark, a title and actions, and shares with this one only the word *message*.

- **Bubble:** `--r-card` 16, padding **10 / 12**, body 14/1.5, capped at `--measure-msg` **260px**.
  Incoming `--card` with `--ink` at **14.37:1**; outgoing `--btn2` with `--ink` at **11.54:1**.
- **Timestamp:** a `<time>` on its own line inside the bubble, trailing — meta 12.5/400 `--slate`,
  **5.95:1** on `--card` and **4.77:1** on `--btn2`. Both clear `WCAG 1.4.3`'s 4.5:1.
- **What separates the two sides is the edge, not the colour.** `--card` and `--btn2` are **1.25:1**
  apart from each other — side by side they are one tone to any eye, and the warm ramp holds no
  larger step that is not `--ink`. *Who said it* is therefore carried by which edge the bubble is
  anchored to, which satisfies `WCAG 1.4.1` (never colour alone); each row also names its speaker in
  a visually hidden span, because nothing announces an alignment. The tone step's only job is to stop
  the thread reading as loose paragraphs on the page.
- **No green in a bubble.** The outgoing side is where a messaging UI normally spends its accent and
  this system cannot: green is never spent inside card UI, and a thread repeats — by the fourth
  message the ~5% budget would be gone. The screen spends its one green on the composer's Send.
- **`.dr-thread` is one declaration, `margin-top:auto`,** and it is the whole of what makes a message
  list a thread: it fills upward, so the newest message sits against the composer whatever the
  history is, and a short conversation's slack opens above it instead of below it.
- **Composer:** no new parts — `.dr-actionbar` holding `.dr-search-row` with `.dr-search` (field
  **289.4 × 44**, `--ink` on `--media` **13.33:1**, no focus ring: the caret carries `WCAG 2.4.7`)
  and the 44px Send disc.

### The night pair — the one dark surface (`.dr-call`)

The call screen, built to the designer's reference (Figma `YlGWlsWWjKSCxhONMzGG2F` node `99:26`).
**Not a second theme and not a dark mode:** WhatsApp, Telegram, Messenger, FaceTime and iOS's own
CallKit are all dark whatever the app's theme is, because a call is a full-screen takeover that has
to recede. `#F7F5F2` stays the product's ground on every other screen.

**One surface, two files since 2026-08-16** — `call` (the operator, from tracking) and `call-support`
(the agent, from `contact-support`). *One dark surface* is still literally true: not one page but one
**kind** of page, and a second instance of it does not widen the departure. No token, ratio, radius
or measurement below changes between them; what differs is the name, the two exits and the presence
of the top-right pair, each decided by **who is on the line** rather than by taste. The empty
44px column that keeps the name centred on the second file is `.dr-call__side--empty` — a width and
nothing else.

| Token | Value | Role | Measured |
|---|---|---|---|
| `--night` | `#1A1A1A` | the call ground | the same value as `--ink`, declared again under the name of the role it plays — the palette's own habit, `--on-green` being a third name for it |
| `--night-raised` | `#2E2E2E` | the control bar, the portrait disc | **the one new colour value.** `1.28:1` on `--night` — the tone step, between the light side's `--card`-on-page **1.11** and `--btn2`-on-card **1.25** |

- **Inks:** `--page` on `--night` **15.99:1** (the toast's own pair, inverted); `--btn2` on `--night`
  **11.54:1**, the dimmer light ink the duration takes; `--page` on `--night-raised` **12.48:1**.
- **`--slate` is barred on this surface** and the number is why: **2.42:1** on `--night`, a real
  `WCAG 1.4.3` failure. The secondary ink here is `--btn2` and never the one the light screens use.
- **No green at all.** `--green` is 1.69:1 on the light page and would be a different colour again
  on `--night`, so the accent does not come here — the count rule holding rather than bending.
- **Not copied from the reference**, each answered by a rule already held: the doodle wallpaper
  (§0's imagery rule is *real, never decoration*), the filled iOS glyphs (§5's outline system,
  declared once), the magenta portrait disc (outside the palette).
- **Geometry, read off the reference rather than chosen:** its five bar discs measure 35px in a
  295-wide frame — **44 at 375**, the kit's own `--sz-action` — on 46px centres, a **14px** gap
  (`--sp-14`). With four controls the pill is **234 × 60**, centred. Portrait disc **176**
  (`--sz-avatar-call`), the reference's 48.1% of frame width landed on the 8-grid at 46.9%.

### Destructive fill (`.dr-btn--danger-solid`)

`End call` on `call` and on `call-support`, and the **first spend of `--danger` as a surface** — the token was declared at
rev 25 and drawn nowhere since, with the reason written beside it: nothing had asked for a red
surface. A hang-up button is that thing, and `HIG · Buttons` asks a destructive action to look
destructive.

- **It is a 44px disc, so `WCAG 1.4.3` does not apply.** The control shipped for one build as a
  labelled block button and became an icon on the designer's reference — which *improves* the
  conformance story: with no visible text there is no text pair to defend. What remains is
  **`1.4.11` on the glyph**, `--page` on `--danger` at **4.53:1** against a 3:1 floor. The disc
  against the bar's `--night-raised` is **2.75:1**, under that floor, and the glyph is what
  identifies the control — the reading this document already records for `.dr-btn--onphoto`,
  `.dr-avatar-edit__badge` and `.dr-upload`.
- **The labelled reading, kept because it is still live** if the label ever returns: `--page` on
  `--danger` **4.53:1** clears 4.5 **by 0.03** and would be the thinnest text pair in the system;
  `--ink` on `--danger` is **3.53:1** and fails, and the palette bars `#FFFFFF`, so 4.53 is the
  ceiling for this fill. The alternative measured beside it was `--danger-ink` `#9A3115` as the
  fill, **6.83:1**, at the cost of spending an *ink* token as a surface.
- **Flat**, by the kit's existing reading: `--sh-sm` belongs to the green primary and `.dr-btn--pay`
  already settled that a filled button in another colour takes none. `call` therefore carries no
  shadow and no green at all, verified by computed style.

### Call control (`.dr-btn--night[aria-pressed]`)

Video, Speaker and Mute on `call` — the circular icon button inverted for the dark surface.
`--night` disc, `--page` glyph, **15.99:1**; **pressed** takes the light half of the same pair. The
disc against the bar is **1.28:1**, under `1.4.11`'s 3:1, and the glyph carries it — the kit's
standing reading. A toggle whose on-state is invisible is not a toggle, so `aria-pressed` rides with
the fill (`WCAG 1.4.1`, `4.1.2`), and no label flips to *Unmute* — one control, one name (`2.5.3`).
All three rest on the built frame; the reference draws its mic already muted, which is the pressed
half. *(`.dr-channel[aria-pressed]`, the labelled icon-over-caption control cut for the light build, is
now unspent — kept declared the way `--sh-onphoto` is, and recorded so it is not re-proposed.)*

### Circular action as a screen's primary (`.dr-btn--primary.dr-btn--icon`)

The two modifiers worn at once, no new value. A rule exists only for **order** — `--icon` is declared
below `--primary`, so its `--btn2` fill would otherwise win the tie. **44 × 44**, `--green` disc,
`--on-green` glyph **9.46:1**, `--sh-sm`. On `chat` it is the screen's one green control at
**1,936px² · 0.64%** of the frame and its one shadow. `WCAG 1.4.11` is carried by the glyph, not the
disc — `--green` on `--page` is 1.69:1 — the same reading `.dr-btn--onphoto` and
`.dr-avatar-edit__badge` stand on, and the one every green block button in the product stands on.
Icon-only, so the accessible name is on the element.

### Action sheet (`.dr-sheet--picker` as a set of routes)

The drawer's second job. Where a picker sheet sets a **value**, this one offers **ways out** — the
`Contact operator` drawer on the three `tracking` states: *Call operator* · *Chat with the operator* ·
*Contact support*. Same parts, no new class, token or rule: sheet, `.dr-picker__list`,
`.dr-picker__item`, a `.dr-note` line and the named `Cancel` that `HIG · Action sheets` requires.

- **Text rows, no icons.** An Apple action sheet lists its choices as words, and the picker row hides
  every `.dr-ic` that is not the current-item checkmark — an icon would cost a rule to un-hide
  something the guideline does not ask for.
- **No row carries `aria-current`.** Three actions, not one value with a pick. All three are
  `<a href>`, so `ui/kit.js` adds the modal contract and writes nothing back.
- **Measured at the 375 frame:** sheet **373.4 × 324.8**, **40.0%** — under the ~50% an iOS medium
  detent sits at. Rows **341.4 × 44**, list **341 × 132** on `--card` over the sheet's `--page`
  (1.11:1), note `--slate` **6.62:1**, `Cancel` on `--btn2` **11.54:1**.
- **The sheet holds zero green,** verified by computed style: the frame's green stays the CTA behind
  the scrim, **15,022px² · 4.93%**, exactly what it was before the drawer existed.

### The search home (`.dr-finder`) and the results on the map (`.dr-offer`)

**2026-09-14, rev 250.** The designer rebuilt Home as a search — *«це стартова пошукова сторінка»* — against
two Figma references used for structure only. Every value is an existing rung.

- **Service badges** — the `.dr-grouptab` chip as a **radio** (`.dr-grouptab--icon`), a 16px glyph before
  the word: *Delivery* (package), *Photo* (camera), *Inspection* (a viewfinder round a house). 32 visible,
  44 target. **From rev 269 chosen = `--on-green` on `--green` 9.46:1 and idle = `--slate` on `--media`
  5.51:1** — both fills, her picture of a category row. The mark is **1.41:1** (`--green` on `--media`) — the
  chip's recorded `WCAG 1.4.11` condition, improved from the wash's 1.085:1 and still short of 3:1; the label
  moving `--slate` → `--on-green` carries the state with it. Measured on the build: *Delivery* **99.7 × 32**,
  *Photo* **84.4 × 32**, *Inspection* **116 × 32**, all three on one line at the 375 frame.
- **Date · Time** (`.dr-when`) — one `--card` of two buttons split by a `--line` seam, each owning a drawer.
  Label 12/400 `--slate` **5.95:1**, value 15/600 `--ink` **14.37:1**; each half **170.5 × 58.8**. The
  button's name is its drawn text — *Date Today* (`WCAG 2.5.3`).
- **Where the drone goes** (`.dr-route`, rev 251) — a `--card` in the Date · Time card's own pair, label
  12/400 `--slate` **5.95:1** over a typed value 15/600 `--ink` **14.37:1** (placeholder `--slate` 400).
  **Delivery:** *From* (*Pickup address*) over *To* (*Drop-off address*), rows **341 × 58.8**, a route mark
  (hollow ring → hairline → filled dot, decorative) and a **44 × 44** swap `.dr-btn--icon` on the seam,
  *Swap pickup and drop-off*. **Photo, Inspection:** one row, *Where* (*Address*). The badge swaps the cards
  in place (`WCAG 3.2.2`: content, not context). **From rev 254 each row is a button** (`.dr-route__open`)
  that opens the address drawer — same picture: the value line is the grey placeholder at 400 while empty
  and `--ink` 600 once an address is taken; the name is the drawn text, *From Pickup address*
  (`WCAG 2.5.3`, `4.1.2`); the whole row is the target and the swap keeps its 44 above it; one ring, the row's.
- **One card for where and when** (`.dr-finder__card`, rev 259) — the designer: *«Зроби адресу дату та час на
  одній картці»*. The address rows and the Date · Time pair stop being two cards 12 apart and become one
  `--card`, `--r-card` 16: addresses on top, a `--line` hairline from the text column (**48**) to the trailing
  inset (**16**), then Date · Time. The two inner blocks give up their own ground, so no pair re-measures. Inside
  the card a Date · Time half takes **12** between glyph and text (it carries **10** on its own), so *From*, *To*,
  *Where* and *Date* start at one x — **48** into the card, measured. **Measured at the 375 frame:** card
  **341.4 × 176.4** for Delivery (rows **58.8** ×2 + Date · Time **58.8**), **341.4 × 117.6** for Photo and
  Inspection; each half **170.7 × 58.8**; swap **44 × 44** centred on the *From* / *To* seam at **219.6**. The
  form is **12** shorter — Filters moves **361.2 → 349.2** — because one gap left it.
- **Address drawer** (rev 254; rev 258; rev 260) — one `.dr-sheet` for From, To and Where, titled by the row
  (*Pickup address* · *Drop-off address* · *Address*): a `.dr-search` field **341 × 44** (`--ink` on `--media`
  **13.33:1**, placeholder *Search address* **5.51:1**) that takes focus, so the keyboard rises and the drawer
  rides on it; the picker list with a **20px leading glyph** (`--slate` **5.95:1**) and a 12.5/400 `--slate`
  sub-line — *Use my location* **44**, *Podil, 21 · Saved address* **58**, *Osokorky, 14 · Recent* **58**; then
  *Cancel* over *Done*, **341 × 44** each, the stack every Done/Cancel drawer carries — turned at rev 260 on the
  designer's word, a recorded departure from `HIG · Alerts`' default-on-top stack; *Done* now stands on the
  drawer's bottom edge, **68** above the keyboard accessory's *Done*. With the keyboard up: **412.8** tall,
  top **63.2**, bottom on the keyboard's **476**, overlap **0**. *Done* is **4.93%** of the frame, the only green
  above the scrim. **The buttons stood in a top bar for one revision** (rev 256, `.dr-sheet__bar`, `HIG · Sheets`'
  iOS placement); shown the options drawn, the designer put them back under the list — the bar stays declared
  and is spent nowhere. A tapped
  row is taken at once; *Done* takes what was typed; *Cancel*, the scrim and Escape change nothing.
  `.dr-sheet--steady` keeps the height it opened at while typing narrows the list, so nothing above the
  keyboard moves.
- **Filters over Find** (`.dr-finder__actions`, rev 251) — each the full width, **341 × 44**, 8 apart, Filters
  first. *Find* is the screen's **primary** green control: **4.93%** of the frame (341 × 44). **From rev 269
  it is no longer the only one** — the chosen service badge is a solid-green control too, **99.7 × 32 =
  3,191px², 1.05%** — so Home's solid green measures **6.08%** (Find 4.93 + the badge 1.05 + the bell's count
  0.11), over §0's ~5% ceiling and its one-green-control rule. Both are the designer's, recorded at rev 269. **From rev 264 *Filters* carries no count** and its name is *Filters* in every state.
- **Applied filters as chips** (`.dr-fchips` + `.dr-fchip` as a `<button>`, rev 264) — the designer on the built
  button: *"display applied filters in badges"*. One kit dismissible chip per applied value, **above *Filters***,
  12 from the card and 12 to *Filters*: each ticked drone type by name, then the band (*₴200 – ₴600*). A tap
  removes that filter; focus goes to the chip that takes its place, or to *Filters* when the row empties. No
  filter, no row (`.dr-fchips[hidden]`). **Measured at the 375 × 812 frame:** chip **28** tall — *Quadcopter*
  **112.5**, *FPV* **64.9**, *₴200 – ₴600* **119.6** wide, 8 apart; three fit one line, all five wrap to two
  (rows **36** apart) and move *Filters* **382.8 → 458.8** (one line: **422.8**). Label 12/600 `--ink` on
  `--green-wash` **14.75:1** (`WCAG 1.4.3` ✓); × `--on-green` on `--green` **9.46:1**. Target: **28** clears
  `WCAG 2.5.8`'s 24 by **4**; **16** under `HIG · 44pt` — the chip's departure recorded since rev 51, carried
  unchanged. Name *Remove filter: Quadcopter*, `listings-filtered`'s (`WCAG 4.1.2`, `2.5.3`, `3.2.4`); the ring is
  the kit's `--focus-w` `--ink` at `--focus-offset`. The button inherits `font-family` and `line-height`, so it
  draws the `<a>` chip exactly. **Green, by pixel:** **4.90%** at rest, **5.12%** with three chips, **5.26%** with
  five — each × pill ~**215 px²**, a status mark; over §0's ~5% by **0.12** / **0.26**, reported to the designer
  before she chose. *Find* stays ~**92–95%** of the screen's solid green.
- **Drawers** — *Pick a date* (the `.dr-cal` grid without its time row), *Pick a time* (*Now* / *At a set
  time* with `.dr-cal__clock`; *Now* disabled for any day but today), *Filters* (`.dr-sheet--tall`:
  Drone type + Price range, scrolling inside, *Clear all* · *Apply filters* side by side). **693.77** tall at
  the 375 × 812 frame. **Drone type replaced Location on 2026-09-15 (rev 261)** — `fieldset.dr-zone` with four
  `.dr-pick` checkbox rows (*Quadcopter · Hexacopter · FPV · Fixed-wing*), **341 × 274**, the height Location
  had, so the drawer re-measures **693.8** with **0** to scroll. The four names depart from `voice.md` P4 / P1
  on the designer's word.
- **Results on the map** — `.dr-mapview` fills the column under the nav bar and runs `--r-panel` under a
  **docked** `.dr-sheet--dock` (no scrim, no `aria-modal`). Map **373 × 375.2**, drawer **340.8** (rev 263; **383.2** / **332.8** at rev 253's 4 gap, **371.2** / **344.8** with rev 250's ringed rows).
- **A choice row** (`.dr-offer`) is a radio label: 56 × 44 well · name **17/600** (rev 266, the designer,
  shown 400 / 600 / 700 drawn — `--weight-medium`, the weight the price beside it carries; it departs from the
  17/400 title rev 247 / 248 gave the choice and service cards) · meta 13/400 `--slate` ·
  price 17/600 tabular — **341 × 60**, no border, **radius 12** (`--r-btn`, the radius of *Order* under the rows at
  the same 341 width), **8 apart** (`--sp-within-lg`, against the sheet's 12 out to the title and *Order*).
  **The unchosen rows are `--card` cards; the chosen row is solid `--green`** (rev 265, the designer: *«ту що
  обрала роби зелену»*, choosing it over `--green-wash` 1.026:1; rev 263 had made every row grey, 1.00:1; rev 253
  had put the chosen row on the wash; rev 250 ringed it 2px `--ink`, which no other surface in the kit carries).
  Text on a grey row: name / price `--ink` **14.37:1**, meta `--slate` **5.95:1**. On the green row everything is
  `--on-green` **9.46:1** — the meta included, since `--slate` on green is **3.91:1**, under `WCAG 1.4.3` at 13px.
  The state moves no box: rows **341 × 60**, meta one line **18.19**, drawer **340.8**. **Measured departures, her
  call:** the green fill is **1.52:1** against the grey rows, under `WCAG 1.4.11`'s 3:1 (the radio keeps it
  programmatic, `4.1.2` ✓); `HIG · Lists and tables` would mark it with a checkmark; and §0's one green control is
  now two — by pixel *Order* **4.77%**, the chosen row **5.94–6.01%**, the frame **10.71–10.78%** against ~5%.
  The `--ink` focus ring stands outside the green at `--focus-offset`, **15.99:1** on the drawer (`2.4.11` ✓).

### Media

- **Cutout (transparent PNG):** `object-fit: contain`, **no ground** — in the product the cutout
  sits straight on the card. The box is a measuring frame only.
- **The well box has three sizes, and the first two are square** (designer, 2026-09-03, revs 212,
  215 and 230). `--sz-well-w/h` **96 × 96** wherever a render sits in a **list** row —
  `.dr-card--row` on `order-history`, the job and tracking cards; `--sz-well-w/h-sm` **68 × 68** is
  the narrow tier's remap of that box; `--sz-well-w/h-xs` **56 × 44** inside `.dr-choice`, which is
  `role-select`'s two cards and nothing else. **The third rung is minted, and it is minted because nothing was left to land on:** rev 212
  got the first step down for free by taking `-sm` at every tier, and she asked for one step
  further. **No derivation is claimed** — 56 and 44 already exist in the file as `--sz-avatar-md`
  and `--sz-action`, and neither is the source; 56 is 7 steps of the 8-grid and 44 is not on it.
  The `≤ 389px` query still needs no remap: the box is already smaller than where it would send it.
  The inset is `--sp-within` **4** throughout, so the picture box is **88 × 88**, **60 × 60** and
  **48 × 36**.
  Measured on `role-select` at 375 × 812 **against the 4:3 box the ramp then had**, which is the
  shape rev 230 has since squared at the top two rungs: `cargo-box.png` (256 × 180) rendered
  **88 × 61.88 → 60 × 42.19 → 48 × 33.75** and `drone-flight-front.png` (256 × 73)
  **88 × 25.09 → 60 × 17.11 → 48 × 13.69** — **−45.5%** on the long edge and **−70.2%** of area
  across the two steps. Only the third figure in each row is still live: `role-select` is the one
  file on `-xs`, and `-xs` did not move. The text column takes it all back: body **201.4 → 229.4 → 241.4**,
  **+19.9%** of measure, with **no description changing line count on either step**.
  **The second step buys measure and nothing else** — at `-sm` the well had already stopped setting
  either card's height, so cards **114.4 / 96.2** and list **218.6** are the same before and after
  it; the row only tightens again when the text does, which is what rev 216 then did.
- **These heights are at a 17px title, and they were briefly something else:** rev 213 stepped the
  title 17 → 14 across all 16 instances, taking 4.2px of line box out of every card (114.4 / 96.2 /
  218.6 became 110.2 / 92 / 210.2), and **rev 221 put it back to 17**. Every figure here is read
  off the build after that round trip.
- **The picture stands 20 from the text, not 12** (designer, 2026-09-03, rev 228: *«збільш відступи
  від зображення до тексту»*). `.dr-choice`'s row gap goes `--sp-snug` **12** → `--sp-group` **20**.
  **What was wrong was an asymmetry, not a small number:** the card's 16 inset plus the well's own 4
  put the ink **20** from the card edge, while the 12 gap plus that same 4 put it **16** from the
  title — the cutout read stuck to the words. At 20 the pair reads **20 against 24** and the text is
  the further of the two. **Only `role-select` moves:** 2 of the 16 `.dr-choice` instances carry a
  `.dr-well`, the other 14 hold a single child and a flex gap with one child is nothing — measured
  after the change, `support` **55.80 × 3** and both alert logs **77.98 × 11**, unchanged. The card
  keeps its **76** (the 44 well plus 2 × 16 sets it, not the 23.8 title); the text column pays the 8,
  body **241 → 233**, and the longer title is 176.44 with **56.56** of slack. **At ≤ 389px the rung
  steps by itself** to `--sp-screen` **16** — ink 20, body 203, still one line, measured at a 380px
  viewport — where `--sp-snug` would not have stepped at all.
- **The well is square, because the render is** (designer, 2026-09-03, rev 230: *«зроби більше
  зображення»*, on the built `job-offer` card). `--sz-well-h` **72 → 96** and `--sz-well-h-sm`
  **52 → 68**. **Width was never the lever and that is the whole of the answer:** every drone in
  `assets/drones/thumbs/` is a **256 × 256 square PNG**, and `object-fit: contain` fits a square to
  the **shorter** side — at 96 × 72 the paint was **64 × 64** inside an 88 × 64 box, so **24 of the
  88 usable width painted nothing** and height was the cap. Widening could not have added a pixel.
  **Three were drawn and measured and she took the largest:** ink on `job-offer` (drone-01's alpha
  bbox is 233 × 164 of 256) **58.25 × 41.00 →** inset 4 → 0 **65.53 × 46.13** (+12.5%, free),
  96 × 88 **72.81 × 51.25** (+25%), 96 × 96 **80.09 × 56.38** — **+37.5%** on the edge, **+89.1%**
  of area. **No number is minted at either tier** — `-h` takes the 96 `-w` has always held and
  `-h-sm` takes 68 the same way, where rev 215 had to mint 56/44 because nothing was left to land
  on. **The ramp is no longer one shape and that is stated, not smoothed:** 96 × 96 and 68 × 68 are
  1:1, `-xs` stays **56 × 44** — squaring `.dr-choice`'s well would grow `role-select` **27%** in
  the direction she twice refused at revs 212 and 215.
- **What the square costs, measured on every page that carries the box** (375 × 812 frame; wide tier
  = a 1160 window, narrow = a 375 one). **Wide:** `job-offer` and `job-offer-inspection` card
  **120 → 144** with `main` overflow **0 → 0** — the screen swallows all 24; `operator-dispute-error`
  **132.8 → 144**, also no scroll; `order-history` **384.1 → 408.1** and **271.6 → 295.6** × 3, list
  scroll **695 → 791**; `order-history-loading` **271 → 295** × 3, **313 → 385**. `operator-dispute`
  does not move at all — **151 / 157.5** before and after, because the well was never that card's
  floor. **Narrow:** the step is nearly free — `job-offer` **114.8 → 116**,
  `operator-dispute-error` **132.8 → 132.8**, `order-history` **352.1 → 368.1** and
  **243.6 → 259.6**. **The no-reflow contract holds by construction and the proof is that the drift
  did not change:** `.dr-sk-well` reads the same two tokens, so loaded **295.6** against skeleton
  **295** is the same **0.6** it was at **271.6 / 271**. `role-select` **76 × 2** and `support`
  **55.8 × 3** are untouched, which is `-xs` staying put. **`.dr-well--photo` and `--map` set
  width/height `auto` and cannot move; `--shot` keeps the box but is applied in no page in the
  build** — comments only — **so no photograph re-crops.**
- **What she was quoted and what it actually cost, recorded because the two differ.** The 96 × 96
  option was put to her as the expensive one: *scroll +24, `Expires in 8s` under the fold*, read out
  of rev 221's note — «577 in a 577 window» — as zero slack. **That note says the opposite:** `main`'s
  **box** is 577 and its content fits. Measured after the change, `main.scrollHeight − clientHeight`
  is **0** before and **0** after, and the countdown's bottom stands **252** above `main`'s. She took
  the most expensive of the three and it turned out to be free.
- **The tier she was looking at is not the tier a phone gets.** The shell draws a 375 frame inside
  the browser window, so `@media (max-width: 389px)` fires on the **window**, not the frame — at
  1160 it never fired, and the drone she called small was already the **larger** of the two. On a
  real phone the ink goes **40.05 × 28.19 → 54.61 × 38.44**, **+36.4%**, the same move at the same
  proportion.
- **Photograph:** `object-fit: cover`, edge to edge inside `--r-media`, no padding — a photograph
  *is* the surface. Never inset on a `--media` ground; a floated photo reads as a sticker.
- **Map:** `--r-card`, `center/cover`, native 1.99 aspect, `--media` as the pre-load ground.
- **Video cover:** a photograph, by the rule above, running to the **three edges of its card**
  (`.dr-card--cover`) with the 44px action centred on it (`.dr-btn--onphoto`) and the file's line
  below — name, facts, and one circular action. Built **341 × 180** cover over a **68px** line,
  card **341 × 248**, on `order-details-aerial`, to the structure the designer drew (Figma `97:18`).
  **A cover is never inset:** a picture floating inside a padded card is the sticker the imagery rule
  forbids, so the card gives up its padding and clips with its own 16 radius while the media's 13 is
  switched off. **Two files in one zone are told apart by what they show** — the video's cover is a
  different frame from the photo card's, not the same one re-used (`concept.md` rev 140).

### The photo pile (`.dr-stack__shot`)

Several photographs from one order, shown the way a phone shows several photographs — **a loose
pile, not a grid.** Built to the designer's reference, Figma `YlGWlsWWjKSCxhONMzGG2F` node `103:43`
(Instagram Direct's several-photos message), the same way `99:26` gave the call screen its shape and
`95:10` the pay drawer. It stands on `delivery-aerial`, where the client's deliverable is a set
rather than a single file. **One screen carries it**, so by the kit's inclusion rule it is a
one-off, not a kit row — recorded here because it introduces six tokens and a rule about tilt.

**Measured on the build, 375 × 812, annotations off, overlay scrollbars:**

| | Value |
|---|---|
| Frame, unrotated | **206.7 × 137.8** — `--w-stack-shot` **62%** of the 333.4 content column, `--stack-aspect` **3 / 2** |
| Rotated bounding boxes | 213.6 × 148.4 · 214.7 × 150.2 · 211.4 × 144.9 |
| Tilt | `--tilt-1` **3deg** · `--tilt-2` **−3.5deg** · `--tilt-3` **2deg** — **alternating sense** |
| Overlap | **38.7px of 137.8 = 28.1%** (`--sp-stack-lap` −14% of the column's *width*, less the stack's own 8px gap) |
| Right-hand inset on the front frame | `--sp-stack-in` **6%** |
| Edge | `--w-shot-edge` **3px** solid `--page` — a cut-out border, **never a shadow** |
| Radius | `--r-media` **13** |
| Block | pile **341.4 × 352.1**; bleed inside the frame **16.8** left, **17.3** right; horizontal overflow **0** |

**The rules it follows, and the one place it departs.**

- **Alternating tilt is the whole trick.** One shared angle reads as a skewed grid; opposed angles
  read as a pile somebody set down. The sense alternates right · left · right, and the later frame
  sits on top, so the pile reads front-to-back downward.
- **The edge is a border, not a shadow.** Instagram's ground is black and its frames separate
  themselves; on `--page` `#F7F5F2` two overlapping photographs run into one another. This kit
  spends no shadow on a picture, so the pile takes the pattern `--w-badge-ring` already sets on a
  photograph — *a border, never a shadow* — one rung up at 3px, because an edge read at an angle
  thins optically.
- **No green anywhere near it.** The pile is photographs and page ground.
- **The photographs are not re-cropped.** The three masters are 1514 × 1009 · 1488 × 992 ·
  1516 × 1011 — all 1.500 — so `3 / 2` is the shoot's own ratio, not a crop imposed by the layout.
  Thumbs are 432 × 288, **2.09×** the CSS box, which is the set's ~2× rule.
- **`WCAG 1.1.1`:** every frame keeps its own descriptive `alt`, numbered *"n of 3"* the way
  `inspection-report`'s evidence frames are — a partly covered photograph still carries meaning.
  **`WCAG 2.3.3`:** the tilt is static, no transition and no animation, so reduced motion has
  nothing to switch off. No text is rotated; only the pictures are.
- **The departure, measured and left as built:** the reference covers **35%** and the kit's own
  comment claimed **34%**; the build shows **28.1%**. The missing 8px is `.dr-stack`'s own
  `gap: --sp-within-lg`, which the pile inherits by being built on that class and which pushes back
  against the negative margin. Corrected in the comment 2026-08-16 (rev 153) so the file states what
  it does; the look itself is the designer's to keep or close — `gap: 0` lands 33.9%, and
  `--sp-stack-lap: -16.4%` lands 35% with the gap kept.

### The balance block (`.dr-balance`) and `.dr-note--flush`

A figure and the line that names it. **`wallet`, `wallet-empty`, `withdraw`, `ratings`.**

Measured: block **341 × 42** — figure 20 + gap 4 (`--sp-within`) + caption 18; figure `--ink` on
`--page` **15.99:1**, caption `--slate` **6.62:1**. On `withdraw` the figure takes the **display
step, 22**, on the designer's call of 2026-08-18 — spent through `.dr-number` rather than by
swapping in `.dr-display`, because `.dr-display` is not tabular and money must line up digit under
digit, so the figure gets the display **size** and the number **role**.

**Why the block exists at all.** `_wireframe.css` draws this as `.amount` at **34px / 600 /
`#252525`** — a size outside the ten-step scale, which tops out at 22, and an ink in no palette
here. **The painted client page `payment.html` still leaks it, and that is an open defect, not a
sanctioned exception.**

**The two filled score cards (`.dr-balance--card`, `.dr-balance--banner`) — the SAME green again
since 2026-09-03 (rev 214), and both of them now carry a picture.** Two screens stand their headline
figure on a filled card. They were never the same shape. They were briefly not the same colour
either: rev 193 took `ratings` to `--warn` on the designer's word (*«колір бекграунду зроби
жовтим»*), and **rev 198 took it back to `--green` the same day** (*«chamge the background colour on
green»*). **The split in the declaration survives the reunion, and now has a second reason:** the
banner's fill carries `assets/marks/rating-pattern.png` on top of the token (a second artwork under the
same name since rev 207), and the balance card carried none — **until rev 208 gave it one of its own,
`wallet-pattern.png`, on her word; the paragraph below records that reversal.** So the split now
carried two reasons rather than one: the two cards hold different pictures **and**, from rev 201 to
rev 213, different greens — `--green` `#9BCF4A` on `wallet`, `--green-soft` `#B7DA7C` on `ratings`.
**Since rev 214 the greens are the same again and the split stands on the pictures alone**, which is
still a reason: two different artworks cannot be one declaration.
**What is still declared once for the pair is the BOX** — padding and radius; the fill and its ink
sit on each modifier, because these are values that must be able to differ rather than one value
written twice.

**The pattern (`.dr-balance--banner`, 2026-08-24, rev 198 — the artwork itself was REPLACED at rev 207, 2026-08-31; the figures for the picture now in the page are in the rev 207 paragraph below, the box and the crop are unchanged)** — *«display puttern on this card»*,
against Figma `YlGWlsWWjKSCxhONMzGG2F` node `121:4`. A transparent PNG of 3D stars, sparkles, arcs
and rising bars clustered in two opposite corners around an empty middle, laid over the green as
`center/cover no-repeat`. **The green under it is `--green-soft` `#A9D563`** — the banner returned to
`--green` on her word and moved one step lighter on the next instruction the same day. Master **1672 × 941** in `assets/marks/`, served at **682 × 384** from
`thumbs/` — **2.09×** the CSS box, the rule §0 gives every image. **It is the first decoration in
the product, and that is a reversal of §0's «imagery is real, never decoration» taken on her word
and recorded, not a gap** — rev 194 refused a background texture on exactly that rule four
revisions earlier. **Measured on the built frame with the text hidden and the background scanned
pixel by pixel: every glyph box — arc, figure and caption — stands on exactly ONE background
colour** — `rgb(155,207,74)` when this was measured, **`rgb(183,218,124)` since `--green-soft`
took the fill and was retuned the same evening**, and flat every time, **so the worst contrast under
any glyph is `--on-green` at 11.05:1** where `WCAG 1.4.3` asks 4.5 — cleared **2.46×**, up from the
2.28× of the first lightening, the 2.10× the solid `--green` gave and the 1.73× of the yellow. The artwork
paints **8.31%** of the card and none of it under type. The mark states nothing — no text, value or
status is in the picture — so `WCAG 1.1.1` and `1.4.1` are answered where they always were, by
**4.8** standing in charcoal, and `1.4.11` does not bind on a graphic carrying no meaning. **Two
compositional costs, measured and reported rather than trimmed:** the artwork is **1.78:1** and the
card is **2.69:1**, so `cover` crops **36%** of its height and **both hero stars are cut** — the
top-left one halved by the card's edge; and the artwork's own **charcoal star (11.2 × 11.2 at
x 276–287, y 87–98, 36px right of the caption's last glyph)** is the same ink as the arc's five and
reads as a stray sixth. Both are open for her call; neither engages a criterion. **`wallet`** takes
`--card`: the column turned on its side, a **32** glyph at the front, figure over caption beside it,
**341 × 84**. **`ratings`** takes `--banner`: a **centred** column — a five-star arc and the figure under it —
**341 × 98**, 20 + 32 + 4 + 22 + 20 (**326 × 98** as this screen actually renders, the frame's scrollbar
taking 15 of the width; 341 is the scrollbar-free measure every figure in this section uses).
**It carried a third child until 2026-09-03**: `126 ratings · last 90 days`, the line that named the
score, removed at rev 219 on the designer's word (*«remove this frace»*) and taking **19.5** of line box
plus the **4** step above it with it — **121.5 → 98**. What follows is the record of that line, kept so a
rewrite that happened stays visible: it was the one place in the
product where `.dr-note` kept its own centred default instead of taking `--flush`, **and the one place it
left the caption step**: on this fill only, the note takes `--t-bodysm-size` **13** where the class is 12
everywhere else — the designer's call of 2026-08-21 (*«забери спереду крапку зроби більшим шрифтом»*), which
also dropped the orphan `·` the string had carried since the grayscale frame. 13 is the **next rung up in
the closed scale** (12 caption → 12.5 meta → 13 body-sm), not a new value; 12.5 is half a pixel and 14 is
the body step the review sentences below already take. `--t-bodysm-weight` is 400, the weight `.dr-note`
already carries, so only the size moves, and the 19.5 line box is the whole **1.5** the card grew.
`HIG · Typography` puts 13 at **Footnote** and 12 at **Caption 1**, both inside the iOS ramp with 11 the
floor. At 200% text that line wrapped to two and the banner grew **121.5 → 180** with **0px** of horizontal
overrun — `WCAG 1.4.4` ✓. **Re-measured after rev 219, with the line gone: 98 → 120**, the 22px figure
doubling to 44 and nothing left to wrap, overrun still **0px**. Both rules are still declared and both now
spend nothing: `.dr-balance--banner .dr-note{font-size:--t-bodysm-size}` has no element, and `.dr-note`
is dead weight in the `--on-green` colour rule it shares with `.dr-number`. Both are
`--r-card` **16** and **flat**: no shadow, they sit in the page.

**And the banner's green goes up in light the same evening — twice (revs 200 and 201)** — *«зроби
бекграйнд трохи світлішим зеленим»*, then, on the built lighter card, *«ще трохи світліший»*. The
fill is **`--green-soft`**, a new palette member: `#A9D563` at `--green` **85%** + `--page` **15%**
for one revision, **`#B7DA7C` at 70/30** now. **One token, two values** — the name, the spend and the
construction never moved. The picture, the box, the crop and the composition are untouched throughout.
**The ink improves at each step:** `--on-green` goes **9.46:1 → 10.26:1 → 11.05:1**, `WCAG 1.4.3`
cleared **2.46×** for the 22px figure and the 13px line. **`--slate` crosses 4.5 at the second step**
(3.91 → 4.25 → **4.57:1**) and is still not used — a 1.6% margin is not a margin, and `--on-green` is
the rule on any green ground.
**What the two steps do to the picture is a curve, not a slope, and it is measured.**
`rating-pattern.png` bakes its own greens (`#AACE4A` … `#C8E75B`) and cannot follow a token. Composited
pixel by pixel over all three fills, the artwork's mean luminance contrast against its ground runs
**0.0861 → 0.0730 → 0.0827**: the first step closed the ground on the artwork's own greens and quieted
it 15%; the second passed them, so the pattern reads dark-on-light again and comes back **13% louder**,
landing **4% under** where the solid green had it. Its charcoal star is untouched throughout
(0.883 → 0.892 → 0.897). **The green budget does not move** — same **41,431.5px²**, **13.61%** of the
frame against §0's ~5%, and `--green-soft` at 1.45:1 on the page is counted as a fill, not excused as a
tint. `wallet` is untouched.

**And on 2026-08-31 the picture itself is replaced, and the declaration does not move (rev 207)** — *«change the puttern
image on the background on this»*. **No CSS and no markup changed.** The asset is named for its **role**, not its version,
so `.dr-balance--banner` still reads `background: var(--green-soft) url(../assets/marks/thumbs/rating-pattern.png)
center/cover no-repeat` and a new picture is a new file under the old name. Master **1672 × 941**, served **682 × 384**
— **2.00×** the 341 × 191.9 the cover crop actually renders; the old master is recoverable at
`git show 7a17e09:assets/marks/rating-pattern.png`. **Same composition, different voice, and that is the headline because it
runs against the two revisions above:** two opposite corners around an empty middle as before, but the top-left comet trail is
now a **saturated green ribbon** where it was a white fade, and **four charcoal marks join the one that was already there**.
Composited pixel by pixel over `--green-soft` by those revisions' own method, the artwork's mean |ΔL| against its ground goes
**0.0764 → 0.1726 — 126% louder** — and the share of it standing more than **1.10:1** off the fill goes **34.4% → 69.0%**.
**So rev 198's reading that the picture is «a watermark, not a second surface» is retired, not restated:** at a mean **1.62:1**
this is legible artwork on a fill. Median artwork green `#BBD340` (**1.07:1** on the fill), darkest `#345B08` (**5.04:1**),
where the old artwork ran `#B7DA4A` / `#415B10`. **The green count does not move** — the artwork paints no area the fill did not
already own — so the card is the same **41,431.5px² · 13.61%** of a 375 × 812 frame, rev 166's departure standing.
**The binding number did not move either, measured the same way:** at 4× supersample the **arc box and the figure box each
contain exactly ONE colour, `rgb(183,218,124)`**, the caption box two that differ by a single unit — so the worst `--on-green`
pair under any glyph is **10.94:1** where `WCAG 1.4.3` asks 4.5 at 22px and 13px, cleared **2.43×** — **and the arc box is flat
now where the old artwork ran a hairline through it**. Artwork coverage of the card **7.07% → 9.37%**, still **0%** of it under
type; the empty middle band survives the swap. `WCAG 1.1.1`, `1.4.1` and `1.4.11` are answered exactly where they were.
**Two costs, measured and reported rather than trimmed:** (1) the charcoal marks **double — 98 → 210 css px², and one blob
becomes five**: a 4-point sparkle at x 56–63 **cut by the card's top edge** (y 0–15), dots on the left arc at x 6–11 y 9–13 and
x 37–42 y 35–39, a mark at x 70–79 y 11–14, and the old charcoal star at x 289–302 y 84–97 — rev 198's «stray sixth star» is
now **five** marks in the arc's own ink, on a card whose subject is that five stars mean the rating; (2) the crop bites the same
and shows more of it — the same **1.777:1** artwork in the same **2.807:1** card still drops **36.7%** of the height, but the
ribbon runs off the left edge mid-stroke instead of fading out, and the nearest artwork pixel to the caption box closes from
**9.09 to 5.40 css px**. Neither engages a criterion; both are hers. **One stale figure was found and corrected while measuring:**
the rule's ink comment read **10.26:1**, the 85/15 number, three revisions after the token went to 70/30 — it is **11.05:1**.

**And the balance card takes a picture of its own the same day (rev 208)** — *«put by analogi this puttern on the
available withdrow amaunt»*, Figma node `136:11`. **This reverses the sentence the split above was written around** — rev 198
said the banner carries a picture the balance card must never have, and rev 207 repeated it. Reversed on her word and
recorded, not overwritten. **The split still earns its keep:** the two now carry **different pictures on different greens** —
`--green` `#9BCF4A` on `wallet`, `--green-soft` `#B7DA7C` on `ratings`. **Its own artwork:**
`assets/marks/wallet-pattern.png`, master **1672 × 941**, served **682 × 384** (**2.00×** the 341 × 191.9 the crop renders).
Coins, sparkles, a diamond and one arc **in the bottom-right corner only** (source x 915–1671, y 325–940, the left 55% empty),
which is what lets it survive a **row**: plate, figure and caption hold the left, the picture takes the right end.
`background: var(--green) url(../assets/marks/thumbs/wallet-pattern.png) center/cover no-repeat`. **No markup changed**, and
`wallet` is the only page that spends this modifier — `wallet-empty` and `withdraw` keep the bare `.dr-balance` and take no
picture. **Measured at 4× over `--green`: the glyph-plate box, the figure box and the caption box each contain exactly ONE
colour, `rgb(155,207,74)`**, so `--on-green` under every glyph is **9.46:1** flat against `WCAG 1.4.3`'s 4.5 at 20px and 12px
— **2.10×**, the number this card has had since rev 163. Artwork at **x 223.8–340.8**; leftmost pixel on the figure's row
**x 278**, on the caption's row **x 252.8**, against a caption ending near 190. Coverage **7.10%** of the card, **0%** under
type; the 44 plate is opaque `--green-wash` and keeps its **14.75:1**. **It is not a watermark and never pretended to be:**
mean |ΔL| **0.2625**, mean ratio **2.234:1**, **91.9%** of it over 1.10:1 off the fill — against 0.1726 / 1.62:1 for the
rating banner. Median artwork green `#C7D647`, **1.15:1** on `--green`. **The green count does not move** — no area the fill
did not already own — so `wallet` stands where rev 163 left it, **8.82%** of the frame, her call, keep as built.
**Two costs, reported not trimmed:** (1) **the coin carries a Bitcoin mark** — 457 css px² of charcoal at x 285.8–334.8,
y 29–83.8, the largest reading clearly as **₿** beside a figure that says **₴3,240**, in a product that takes Visa,
Mastercard, Apple Pay and Google Pay and has no crypto in it. No WCAG or HIG criterion is engaged; it is a **`voice.md` P2/P4**
objection, reported and hers to settle. (2) **The crop bites harder than the banner's** — the same 1.777:1 artwork in a
**4.060:1** card against the banner's 2.807:1, so `cover` drops **56.2%** of the height (visible band y 265–676 of 941) and the
coin stack's base is cut by the card's bottom edge, the artwork running to y 83.8 of 84.

**And on 2026-09-03 the banner goes back to solid `--green`, keeping its picture (rev 214)** — *«make
background colour as on this page bunner [`wallet.html`] keeping the existing puttern image with stars»*.
**This reverses the two lightening steps of 2026-08-24 and is recorded as a decision, not a correction:**
revs 200 and 201 lit this fill on her word (*«зроби бекграйнд трохи світлішим зеленим»*, then *«ще трохи
світліший»*) and derived `--green-soft` to hold it; today she asks for `wallet`'s ground on this card, and
`wallet`'s ground is `--green`. Both stand in the log so neither is re-proposed later as new. **Only the
token moves.** `background: var(--green) url(../assets/marks/thumbs/rating-pattern.png) center/cover
no-repeat` — the file, the crop, the geometry and the empty middle band are untouched, which is what
declaring the ground as a token has bought through four fills. **No markup changed;** `wireframes/ratings.html`
moves only in its comment. **What binds, measured the way revs 198–207 measured it** — the served thumb
composited over each ground at 4×, then the glyph boxes read: `--on-green` on `--green` is **9.46:1** against
`WCAG 1.4.3`'s 4.5 for the 22px figure and the 13px line, cleared **2.10×**, **down from 2.46×** on
`--green-soft`. **Both pass — the change spends margin, not conformance**, and that is said plainly rather
than reported as a defect. Under the glyphs the **arc box and the figure box each still contain exactly ONE
colour**, `rgb(155,207,74)` where rev 207 read `rgb(183,218,124)`; at the caption's widest credible extent the
ribbon's darkest intrusion takes the worst pair to **7.60:1** from 7.84:1 — **1.69×** the requirement, with
**0%** of the artwork under type. **The picture gets louder in count, not in voice, which is the opposite of
what revs 200 and 201 bought:** composited over both grounds in one pass, mean |ΔL| goes **0.1597 → 0.1593**
(flat, 0.3%) and mean ratio **1.556 → 1.513:1**, but the share of the artwork standing more than **1.10:1**
off its fill goes **65.1% → 78.6%**, because `rating-pattern.png` bakes its own greens (`#AACE4A` … `#C8E75B`)
and the darker ground drops below more of them. **The green budget does not move** — `--green-soft` was
counted as a fill at 1.45:1 on the page and never excused as a tint — so the card is the same
**41,431.5px² · 13.61%** of a 375 × 812 frame against §0's ~5%, with no green **control** on the screen to own
it: **rev 166's departure, hers, standing.** The card's own edge against the page goes **1.45 → 1.69:1**;
nothing rests on that number, since a surface engages no `WCAG 1.4.11`. **One cost, stated rather than
absorbed: `--green-soft` is now spent nowhere** — see the palette entry above.

**And on 2026-09-03 the line under the score is removed, which is the first time this card has lost a
child rather than a colour (rev 219)** — *«remove this frace»*, the designer pointing at
`126 ratings · last 90 days`. **The card is now a two-child column: 341 × 121.5 → 341 × 98**, the caption's
**19.5** line box and the **4** `--sp-within` step above it, measured on the build (**326 × 98** with the
frame's scrollbar). Nothing reflows — the note lived **inside** the card, so no gap collapses and no
sibling moves; `main` goes **864.5 → 841** in a 619 window and still scrolls. **The binding number
improves rather than holds, and it is measured by revs 198–214's own method** — the two remaining children
hidden, the card screenshotted at **4×**, each glyph box read against the bitmap: the **arc box and the
figure box each contain exactly ONE colour, `rgb(155,207,74)`**, so `--on-green` under every glyph is a
flat **9.46:1** against `WCAG 1.4.3`'s 4.5 at 22px — **2.10×**. The card's worst pair was **7.60:1** at
rev 214, and that was the caption's box catching the ribbon's darkest intrusion; with the box gone the
worst pair on the card **is** 9.46:1. **The crop bites harder, and that is the one visual cost:** the
1.777:1 artwork in a card that went from 2.807:1 to **3.480:1** now shows **51.1%** of its height where it
showed 63.3% — **48.9% cropped**, up from 36.7% — so the two hero stars are cut further into. Artwork
coverage of the card goes **9.37% → 10.63%** for the same reason, its dark ink measuring **289px² · 0.91%**
of the card and **0%** of it under type. **The green budget falls for the first time on this screen:**
**341 × 98 = 33,418px² · 10.97%** of a 375 × 812 frame, from 41,431.5px² · 13.61% — still over §0's ~5%
with no green **control** to own it, so **rev 166's departure stands, narrowed by 2.64pp rather than
closed**. **`WCAG 1.1.1`, `1.4.1`, `1.3.1` and `4.1.2` are untouched:** the card is
`aria-label="Overall rating"`, the caption carried no `id` and was named by no `aria` attribute, the arc
is still `aria-hidden` and **4.8** is still real text. **What is spent is proof, not conformance** —
`voice.md` **P2** asks for the proof and not the adjective, and a 4.8 with no denominator is the
adjective: 4.8 of 3 ratings and 4.8 of 126 now read alike, and the per-service rows carry no counts
either. Hers to spend, recorded rather than argued with, and one line brings it back.

**The star arc — one image since 2026-08-24 (rev 194).** *«постав цей патерн як зображння на бекграунт»*.
The eleven inline SVGs that drew this row — five track stars, five clipped fill stars, and the clip that
held them — are now a single mark, **`.dr-rating-arc`**, taking its shape from `assets/marks/rating-arc.svg`
through a CSS **`mask`**: the construction `.dr-brand` has always used, so the picture is a file and the
ink stays a token (`--ink`, **7.80:1** on the `--warn` ground) rather than being baked into the asset. The
box asks for **`calc(--sz-star * 3.34)` × `--sz-star`** — the five ratios summed — so no absolute width
enters the ramp. Measured on the built frame: **106.88 × 32**, **0px** off the card's centre line, geometry
identical to the eleven-SVG build. **What it costs is the partial fifth star, and the designer chose it with
the cost written out** — see below. **The description that follows is the geometry the image is drawn to**,
and it is still true of the picture; what is no longer true is that any of it is live CSS.

**The taper it is drawn to (`.dr-stars--arc`, now benched).** Five stars, the middle one largest, tapering symmetrically out, drawn
to the designer's reference (Figma `YlGWlsWWjKSCxhONMzGG2F` node `119:64`). **The taper is measured off that
bitmap and expressed as arithmetic on `--sz-star`, so no new size enters the ramp:** the reference draws its
stars at **19 / 32 / 44 / 32 / 19** of ink, giving `--sz-star-out` **.44** and `--sz-star-mid` **.73** of the
middle — declared the way `--sz-star-ink`, `--sz-star-inset`, `--node-centre` and `--pick-indent` are.
Built boxes **14.08 / 23.36 / 32 / 23.36 / 14.08**, row **106.88 × 32** where the flat row was 160, centred
with **117.1** of card either side.

**The partial star did survive the arc, and it did not survive the image (rev 194).** While the row was
live SVG the fill clipped the row's *ink*: the boxes were unequal so the width was written out — four full
stars plus the fifth's own inset and its own `.8` — because a general formula over unequal boxes cannot be
expressed in CSS. The fifth star being the **smallest**, 4.8 left **2.05px** of unearned point where the
flat 32 row left **4.64**. One flat image cannot clip, so **4.8 and 5.0 now draw alike** — the rounding rev
157 built, measured and rejected, arriving by another road. **It was put to the designer with that exact
consequence written into the option she picked, so it is a decision and not a defect.** Nothing that states
a fact was lost: the mark is `aria-hidden`, and **4.8** stands under it in charcoal at **7.80:1**, which is
where `WCAG 1.1.1` and `1.4.1` were always answered. **A two-tone asset would keep the .8 visible** — the
partial drawn into the file rather than clipped — at the price of baking two hexes into the image; it is the
open alternative, not the built one.

**And the read-only star display is now benched entirely, which is larger than the arc.** `.dr-stars`,
`.dr-stars__fill`, `.dr-stars--arc`, `--sz-star-out` and `--sz-star-mid` have **no product page at all** —
this banner was the last, and the only instance left in the repo is the specimen in `ui/kit.html`, a gallery
and not a surface. All stay **declared**, the terms `.dr-chip--sm` and `.dr-profile__role` were kept on.
**`.dr-star` — singular, the rating *input* on `rate` — is a different component and is untouched.**

**Every ink on either fill is `--on-green` at 9.46:1**, stated rather than inherited, because
`.dr-note`'s own `--slate` measures **3.91:1** on `--green` — a real `WCAG 1.4.3` failure at 12px.
**On the banner the star row is re-inked as well, and it has now been re-inked twice.** On `--green`
the row's own two colours — `--warn` filled, `--btn2` unfilled — measured **1.21:1** and **1.22:1**, so
the picture did not weaken, it disappeared, and the rungs had to become the accent's own
(`--on-green` earned **9.46:1** over `--green-wash` unearned **1.56:1**, **14.75:1** apart). **On
`--warn` the family the glyph belongs to IS the ground**, so the pair is the rating's own tint:
earned `--ink` **7.80:1**, unearned track `--warn-wash` **1.82:1** — a *stronger* step than the 1.56
it replaces — **14.21:1** against each other. The row stays `aria-hidden` and carries no meaning
alone; the figure states 4.8 in charcoal, which is what lets a 1.82:1 shape be a picture and not a
failure (`WCAG 1.1.1 · 1.4.1`). **No new hex enters for either fill.**

**Every ink on the yellow, measured.** Figure and caption `--ink` on `--warn` **7.80:1** — `WCAG 1.4.3`
asks 4.5 at 22px and at 13px, so it is cleared **1.73×**, against the 9.46:1 they read on green. The
caption still says its ink out loud rather than keeping `--slate`, for the same reason it did on
green: `--slate` is **3.23:1** on `--warn`, a real 1.4.3 failure at 13px, where it was 3.91:1 on
`--green`. The token is `--ink` and not `--on-green` because this ground is not green; the hex is the
same `#1A1A1A` and the meaning is not. The card's own edge against the page reads **1.69 → 2.05:1**,
though nothing rests on that number — a surface is not a control, so `WCAG 1.4.11` is not engaged.

**What they cost — and one of the two stopped costing anything on 2026-08-24.** The card is **8.82%**
of `wallet`'s frame (**9.41%** before rev 177 cut the glyph plate out of the fill, **8.91%** while that
plate was a disc), and that departure stands on the designer's rev 163 call: **keep as built, and leave
the ~5% rule where it stands**. **`ratings` is no longer the second screen recorded against it.** The
banner was **13.61%** of that frame and took the screen's solid green from **180 px² · 0.06%** (three
zone ticks) to **41,612 px² · 13.67%** of 375 × 812 — and because `flows.md` gives the dashboard no
action, **100%** of that green was a *surface* rather than the 81–100%-is-the-CTA the rule expects.
The yellow **closes that departure outright rather than narrowing it**: this banner was the only solid
green the screen ever carried, so `ratings` now measures **180 px² · 0.06%**, the three zone ticks,
which are annotation and not product. §0's ceiling is untouched — one screen is recorded against it
now, not two, and the rule did not move to make that true.

`.dr-note--flush` is `text-align: left`, nothing else: `.dr-note` is centred by construction — the
right default under a centred mark inside `.dr-msg` — so a caption standing beside a left-aligned
figure has to say so. Spent 7 times across four packs.

`.dr-note--balance` is `text-wrap: balance`, nothing else, and it is the **third** spend of that one
property — `.dr-display--balance` (rate's question, 2026-08-13) and `.dr-upload--card .dr-note` (the
upload subtitle, 2026-08-15) came first, and the rule they set is the rule here: **a measure or a
property, never a `<br>`**, so the UA re-balances the string and no markup hard-codes an English
break. **Two spends, both photo screens** (`account-photo`, `operator-account-photo`, 2026-08-27, the
designer on both built frames: *«make in 2 rows but it should be more text in second row apply this
chsnges for 2 profile roles»*). Left to the default, the 54-character file rule broke
`JPG or PNG, up to 5 MB. Nothing changes until you` / `save.` in the photo card's **301** measure — a
one-word orphan, reported at `concept.md` rev 202 and fixed here. Balanced it breaks on the sentence
boundary: **`JPG or PNG, up to 5 MB.` 139.05** / **`Nothing changes until you save.` 180.14**, the
second row **8 characters and 41.09px longer** than the first. **The paragraph is the same 301 × 36**
— zero layout cost, so nothing downstream moves: card 341 × 268, `main` **525 = 525**, no scroll,
0px overrun on either screen. **It changes where rows break and never how many**, verified by
measuring both frames with the property and without it at 12px (2 rows / 36) and at a 2× text step
(3 rows / 108, card bottom 457 in an 812 frame, overrun 0) — so `WCAG 1.4.4` reads exactly as it did.
The sentence stays **one text node**, which is what keeps `WCAG 1.3.1` / `4.1.2` unmoved: all three
action-bar buttons still resolve `aria-describedby="photo-rules"` and announce the same string,
verified in the built DOM on both screens. `HIG · Typography` prescribes the ramp, not the break.

**`switch-role`'s note *was* the one caption in the product whose break is markup — and the line itself
was deleted hours later, so no caption in the product carries a markup break any more. The account
stays because it records what the property cannot do.** 2026-09-10, against two rendered options: *«make like in this picture»*.
**The property could not reach the shape she set on 2026-08-27.** `text-wrap: balance` re-balances the
rows a measure produces — it does not create them, and it only ever *evens* them. Balanced, this
sentence broke `Switching is always reversible` **167.61** / `from the same Account entry.` **166.86** —
the first row longer, the opposite of *more text in second row*. A measure cannot reach it either:
greedy wrapping probed at 120 / 130 / 140 / 150 / 160 / 167px, and **every** width that isolates
`Switching is always` falls to **three** rows. So the break is a `<br>`: **109.02 / 225.45**, the second
row **116.43px and 19 characters longer**. **A `.dr-note--measure` class was minted for this an hour
earlier and is retired unspent** — `max-width: var(--t-note-measure)` + `margin-inline: auto` +
`text-wrap: balance`, correct for the two-row problem and wrong for this shape, and a rung applied to
nothing does not stay in the kit. `--t-note-measure` keeps its one spend on the upload card.
**THE SPACE BEFORE THE `<br>` CARRIES THE ACCESSIBILITY OF THE WHOLE DEPARTURE:** a `<br>` is a line
break and **not a word separator**, so `always<br>reversible` computes `textContent` **`alwaysreversible`**
— one word to a screen reader, to copy-paste and to any extraction. With the space the accessible string
is the sentence again, and the trailing space collapses at end of line: **109.02 / 225.45** with it and
without it, **0px** of layout cost. **MEASURED ON THE BUILD, FRAME 375 × 812:** the note **341 × 18 → 341 × 36**,
box width unchanged because no measure binds it; content ends **470.33 → 488.33**, gap to the action bar
**259.67 → 241.67**, `main.scrollHeight` **577 = 577** — no scroll bought and none owed. Two rows hold in
all three shell viewports (frame **375 / 768 / 842**) and at a **320** frame, overrun **0** in each.
`WCAG 1.4.4` at a 2× step: **3 rows / 108px**, `main` **577 = 577**, overrun **0** — the `<br>` fixes one
break, it does not stop the segments reflowing. `1.4.3` unmoved at **6.62:1**; `1.3.1` / `4.1.2` unmoved,
the `<p>` is still one paragraph and the accessible string is still the sentence. **What it costs is
translation:** the English break is frozen into the markup and the Ukrainian string inherits a break
chosen for English words. Recorded as a departure from `_conventions.md` §95, not filed as a defect.

**AND THEN THE LINE WENT — 2026-09-10 (rev 237), hers:** *«Remove this and all the other content aligne
by center of the page»*. The words read as a deletion of the whole centred block, so she was asked first,
and she kept the mark, the `h1` and the lead exactly as built: **only the note leaves, and its zone label
with it** — `WHAT HAPPENS` had nothing left to head. **MEASURED ON THE BUILD, FRAME 375 × 812, IN BOTH VIEWS:**
`.zlabel` is `display:none` under `wf-hide-anno`, so **in the view she reads** the note sat at **385.55 →
421.55** and `main` loses **48px** — the 12 gap and the note's 36 — content ending **421.55 → 373.55**, gap to
the action bar **308.45 → 356.45**; removing the label costs that view nothing. **With annotations on** the
label is real and the loss is **81.39** (12 + 25.39 + its 8 + 36), content ending **488.33 → 406.94**. Either
way `main.scrollHeight` **577 = 577** and `clientHeight` **577**, so the screen did not scroll before and does
not now. No token, no radius, no type
step, no green moves. **`.dr-note` keeps **31** spends across **26** other files and `.dr-note--balance` its **two**
(both photo screens)** — the class is untouched; one element left the product, not a component.

**AND THE OTHER HALF OF THAT SENTENCE LANDED THE SAME DAY — 2026-09-10 (rev 239), hers:** *«aligne content on center»*. **`.dr-main--center` — one rule, one page:** `.dr-main--center > .dr-center{ margin-block: auto; }`. With the annotations off `main` holds one child, and it hung from the top at **32.00** of air above the photo mark against **357.05** below the lead, **1 : 11.2**; centred it reads **194.53 / 194.53**, **delta 0.00** (free space **178.525** a side), the column **204.55 → 188.55** with its inline `padding-top:16px` dropped — the same drop rev 225 made on `support`, because under centring half of that padding is an **8px** offset off true centre rather than air. `main.scrollHeight` **578 = 578** before and after. **The property is chosen against a WCAG number, and nothing fails today:** `WCAG 1.4.4` caps at **200%**, where the column is **490.20** in **545.60** — no overflow, **55.40** of headroom, both properties passing, and the column still centred at **43.70 / 43.70**. That headroom is **one line wide** (lead line box at 200% **46.50**: one more line fits with 8.90 to spare, two do not, and the UA string is the longer one). What happens when it closes is the reason: `.dr-main` is `overflow-y:auto`, and `justify-content:center` pushes a too-tall child **above the scroll origin** — forced and measured (4× text, column **1729.40** in **562**), the top stands **583.50px above** `main`'s edge at `scrollTop:0` with `scrollHeight` **1162** against the **1761** needed: **583.50px unreachable, silently**. Auto margins resolve to **0** with no free space — `scrollHeight` **1761 / clientHeight 562**, first and last line both reachable — so they answer 1.4.4 at any growth where `justify-content` answers it only while the content fits. `HIG · Alerts` centres a confirmation's title and message and keeps the actions apart, so this is HIG's own shape for a confirm; `1.4.3` unmoved (`--ink` **15.99:1**, `--slate` **6.62:1**), `1.3.1` / `1.3.2` unmoved, no target moved — nothing in the column is tappable. **Open:** this is the geometric centre; optical centring would lift it a step and no standard prescribes either.

**Not spent on the caption above it, and that is a choice with a number rather than an oversight.**
The first `.dr-note` in the same `.dr-stack` breaks differently on the two screens: the client's
splits cleanly at its own sentence boundary (`Your operator sees this photo when they arrive.` 267.75
/ `Without one, they see your initials.` 195.2) and the operator's does not (`…they arrive. Without`
**298.11 of 301** / `one, they see your initials.` 147.38). Balancing it was measured on both: it
gives the operator's the second-row-longer shape (37 / 44 characters, 211.38 / 234.11) and costs the
client's its clean sentence break (`…when they` / `arrive. Without one…`, 228.84 / 234.11), at **36px
on all four readings**. One screen gains and one loses, so it is put to the designer rather than
taken — the instruction named `#photo-rules`.

### The availability head (`.dr-avail`)

A dot, the state, and one supporting clause, standing above the control that sets it — **the
segmented control until 2026-09-10, the picker row since** (rev 235).
**`operator-listings-empty` only, since 2026-08-21** — the designer took it off `operator-listings`
(*«видали цю стрічку»*), so the head now has one product page instead of two. Block **326.2 × 19**
(**332 × 19.19** measured at 390px), gap 8; dot **10 × 10** (`--sz-dot`, the checked radio's own
centre — no new size); state 15/600 `--ink` **15.99:1**; note 13 `--slate` **6.62:1**.

**The dot is `--ink` and not `--green`, and that is `WCAG 1.4.1` rather than taste.** A dot that is
green when Available and grey when Offline would rest on colour alone. The sentence beside it says
the state in words and the row below says it a third time, so the dot is a bullet, not a signal.
It also keeps the accent off a screen whose card CTAs already spend it.

**What the removal cost on the page that lost it, measured rather than asserted.** The sentence was
the third statement of one fact, so nothing programmatic moved: the carrier was still a checked
`<input type="radio">` inside a `<fieldset>` named by its legend (`WCAG 1.3.1` ✓, `4.1.2` ✓), and a
screen reader still read *Availability status · Available, selected*. **What it did cost is the
only wording of the state on the screen.** The segmented control's selected plate was `--page`
`#F7F5F2` on the `--media` track `#E4E1DA` — **1.20:1**, against `WCAG 1.4.11`'s **3:1** floor for a
state indicator, **2.5× under**; the label's ink step (`--slate` **5.51:1** → `--ink` **15.99:1**)
is text and outside `1.4.11`'s scope. That figure predated the deletion — the component measured
1.20:1 from the day it was painted — but until 2026-08-21 a sentence said the state in words beside
it, and after that nothing did. Reported to the designer with options at `concept.md` rev 164; the
cheapest conforming fix quoted then was a **1px `--slate` outline on the selected plate — 5.51:1
against the track, 1.8× over the floor** — because no *fill* in the warm palette reaches 3:1
against `--page` (the darkest grey rung, `--btn2` `#D6D2C9`, gets to **1.39:1**).

**CLOSED 2026-09-10 (rev 235), AND BY DELETION RATHER THAN BY THE FIX THAT WAS QUOTED.** The
designer replaced the segmented control with the kit's picker row — *«it shouldnt look like tab make
it like in slack where I select a status make like select»* — so there is no plate left to outline.
The state is now the row's **value**: `--ink` `#1A1A1A` on `--card` `#ECE9E4`, **14.37:1**, text and
therefore measured against `1.4.3`'s 4.5 rather than `1.4.11`'s 3 — **3.19× clear**. The outline
option is retired unspent.

**`operator-listings`'s Status zone, through both changes:** the `.dr-stack` held head + segment at
**71.19** (19.19 + the stack's 8 gap + 44); the head came off 2026-08-21 and it measured **44**; the
row replaced the segment 2026-09-10 and it measures **60** — the row is still 44, and the extra 16 is
the `.dr-rows` card's own 8 top and bottom. `.dr-main`'s scroll goes **1140 → 1156** in a 619
viewport, a page that already scrolled. **On `operator-listings-empty`, which keeps the head, the
zone goes 71.19 → 87.19 and `main` still does not scroll** — 619 of content in 619.

### The availability badge (`.dr-avail-badge`)

The state the availability control sets, standing in the **nav bar** so it stays on screen once that
control scrolls away (the designer, 2026-08-21: *«покажи індикатор відповідно до обраного
статусу»*). **`operator-listings` and `operator-listings-empty` — 2 · 2.** The control under it was
the segment until 2026-09-10 and is the picker row since (rev 235); the badge did not change a
value, only where it reads the word from.

**It is the kit's chip, and the only new CSS is the dot.** `.dr-chip--sm` — the rung cut the same
day for a badge that rides beside a name — plus `.dr-avail-badge__dot`. The pill, `--r-pill`
**999**, 11/600, padding `3 / 8` and the 6px gap all come from `.dr-chip` / `.dr-chip--sm`.
**No new token:** the dot is **8px** (`--sz-pager-dot`), its ring **2px** (`--sz-status-ring`).

**One declaration, two selectors.** Available wears the claim pair, and rather than repeat
`--green-wash` / `--ink` in the badge's own block, `.dr-avail-badge[data-state="available"]` is
named beside `.dr-chip--claim` in the chip block — one rule, two roles: a criterion being
**claimed**, and a state that is **live**.

**Measured in the shell's mobile viewport, frame 366 × 812, annotations off:**

| State | Badge box | Fill / ink | Text ratio | Dot |
|---|---|---|---|---|
| Available | **79.98 × 21.39** | `--green-wash` / `--ink` | **14.75:1** | 8 × 8 filled `--green` — **1.56:1** on the wash |
| Busy | **57.17 × 21.39** | `--media` / `--slate` | **5.51:1** | 8 × 8 filled `--slate` — **5.51:1** |
| Offline | **67.61 × 21.39** | `--media` / `--slate` | **5.51:1** | 8 × 8 **hollow** — a 2px `--slate` ring round a 4px hole, **5.51:1** |

Right edge **361** in all three, which is `--sp-screen` **16** off the bar's inner edge — the bar's
own inset, nothing positioned by hand. The name's right edge sits at **116.25** and the widest
badge starts at **281.02**, so **164.77px** of clear bar stands between them. `.dr-main`'s scroll is
**958 before and after**: the badge is in the bar, not in the scroller.

**Three carriers, and the word is the one that counts.** `WCAG 1.4.3` asks **4.5:1** of 11px text
(11 is under the 18.66-bold / 24 large-text threshold, so the stricter figure is the one measured)
— all three clear it, the smallest margin being **1.22×**. `WCAG 1.4.1 Use of Colour` (**A**) is
answered by the word before the dot is looked at, which is why the dot is allowed a colour at all:
**`--green` on `--green-wash` is 1.56:1**, under `1.4.11`'s **3:1**, and it is cleared the way
`.dr-pager__dot` clears its own 1.69:1 — the dot is never the sole carrier. **This is the exact
condition `.dr-avail__dot` refused green under**, satisfied here rather than avoided, because the
word travels inside the same pill. Busy and Offline share a fill, so **shape** separates them:
filled against hollow.

**Green budget:** the solid green added is **8 × 8 = 64 px²**, under **1%** of the Accept button's
own fill — a status mark, the case `concept.md` §0 admits beside the one-control rule. The
`--green-wash` pill is a tint at **1.08:1** against the page and is excluded from the ≤5% budget.

**Not a control and not a live region.** Nothing is tappable, so `HIG · 44pt` is not engaged. The
state's programmatic carrier is the control, not the badge — the checked radio in its legend-named
fieldset until 2026-09-10, and since rev 235 the picker row that names its own value plus the option
carrying `aria-current="true"` (`WCAG 1.3.1` ✓, `4.1.2` ✓). The badge restates it visually, and
`role="status"` would announce the same fact a second time on every change. **Its word is read at
runtime off the tapped option's own `.dr-picker__label`**, so `Available` / `Busy` / `Offline` live
in the markup once — in the drawer — and the script carries no product string; only `data-state` is
set from JS, read straight off the option that was tapped rather than from `aria-current`, which has
not moved yet at the moment this listener runs.

**What it closes, in two steps.** It closed `1.4.1` on `operator-listings` in rev 183, which rev 164
had opened when the `.dr-avail` sentence came off and left plate fill and label ink — both colour —
as the only cues. It did **not** move the segment's own plate, `--page` on `--media` at **1.20:1**
against `1.4.11`'s 3:1, and the 1px `--slate` outline (**5.51:1**) stood as the cheapest fix and the
designer's call. **That number is gone rather than fixed since rev 235:** the segment is not on the
product, and the state it carried is a row value at **14.37:1**.

### The earned score (`.dr-stars`) and `.dr-listing__score`

A score somebody else **gave**, not a score being given. **`ratings`.**

**Why not `.dr-rating`.** That class is an *input*: five `<button>`s, each a 44pt target carrying
`aria-pressed`, built for `rate.html` where the client awards a score. A read-only display must not
be a row of buttons announcing a pressed state it cannot change (`WCAG 4.1.2`), nor put five stops
in a dashboard's tab order. Same star path, and `--sz-star` 32 still names the largest star — the arc's
outer and inner rungs are `.44` and `.73` of it — **no tab stop**:
the row is `aria-hidden` and the figure beside it states the value at **9.46:1** on the green banner
(**15.99:1** on the page, before it). That is what lets a low-contrast shape carry a picture and
never a meaning — `--warn`'s **2.05:1** over `--btn2`'s **1.39:1** on `--page`, and, since
2026-08-21, `--on-green`'s **9.46:1** over `--green-wash`'s **1.56:1** on the banner's `--green`
fill. **The page pair does not survive that fill and was not carried onto it:** `--warn` measures
**1.21:1** and `--btn2` **1.22:1** on green, which is not a fainter picture but none at all.

**The clip lands on the ink, not on the box.** The star path spans x 3.3 → 20.7 of its 24-grid, so
only **72.5%** of a box is ink. Clipping the row at score/5 — 96% for 4.8 — removes just the tip of
the fifth arm and the display renders **five full stars**; that was built, measured and rejected.
Derived from the path's own coordinates instead: 4.8 covers exactly **0.800** of the fifth
silhouette, fill **150.96** of a 160 row, and the fifth star visibly keeps its unearned point
(grey on the page, `--green-wash` on the banner). A
whole-star floor renders 4.8 and 4.0 alike. `--sz-star-ink` / `--sz-star-inset` were the pass's only `:root`
additions, and `--sz-star-mid` / `--sz-star-out` joined them on 2026-08-21 — all four arithmetic on
`--sz-star`, none of them a new absolute size.

`.dr-listing__score` is the muted suffix on a name's own baseline — `· 5.0` beside a reviewer.
12.5/400 `--slate` **5.95:1** on `--card`, tabular. Nothing in the kit fitted: `.dr-listing__desc`
is the right ink but a block with `margin-top: 2`, and `.dr-op__rating` is the same string scoped to
`.dr-op`.

### The onboarding carousel (`.dr-slider`, `.dr-slide`)

Three slides on CSS scroll-snap, with the kit's own `.dr-pager`. **`welcome`,
`onboarding-client`, `onboarding-operator`.** The type inside a slide is the kit's own —
`.dr-display` for the heading, `.dr-lead` for the sub-line — so no slide-specific type class was
cut. Measured 2026-08-21 on the 375 frame: slider **373.4 × 577.6** filling `.dr-main`'s padding
box, inner measure 333.4.

**The copy is top-anchored, the picture is centred in what is left** — the designer, 2026-08-20
against a reference she supplied, then *«текст ще вище на самий верх сторінки»* and finally
*«Title and subtitle опусти на 32 px вниз»* / *«зображення постав по центру»* on 2026-08-21, this
last against a second reference: title and sub-line at the top, the illustration floating in the
middle, the action bar untouched. Heading and sub-line read first, **48** below the top of the
content area — `calc(var(--sp-screen) + var(--sp-cta))`, so the title's top edge sits **148.8**
down the frame — and the art band takes the rest and centres the picture in it. It replaces a
centred copy block over a fixed **35%** band, then a floor-standing picture under **16** of padding.

**The well keeps 32 of air and the picture fits the well** — the designer, 2026-08-21, on the one
slide that filled its band edge to edge: *«зроби цю картинку трохи меншою у висоту як на інших
wairframes аналогічних»*. `.dr-slide__art` takes `padding-block: var(--sp-cta)` and the image is
`height: 100%` under `object-fit: contain`, so nothing can overflow the well and nothing is cut.

**Measured after, picture × air above / below:** `oc1` 373.4 × 309.0 **59.6** · `oc2` 373.4 × 315.4
**56.4** · `oc3` 373.4 × 351.3 **50.1** · `oo1` 373.4 × 342.4 **42.9** · `oo2` 373.4 × 352.8
**37.8** · `oo3` **316.4 × 364.3** **32** · `w1` 373.4 × 265.4 **69.8** · `w2` **289.1 × 341.0**
**32** · `w3` 373.4 × 158.9 **96.1**. Seven are pixel-identical to the width-led build — `contain`
is width-limited for anything landscape. The two portrait cutouts are height-led instead: `oo3`
drops **65.8** of height into its neighbours' range and gives up 57 of width, and `w2` stops being
clipped (it was losing 17.7 off the cap and 17.8 off the feet). **For a picture taller than its
space the only two answers are cut or narrower**, and narrower is the one that was chosen.

**`.dr-slide--floor` — one slide opts out of the bottom air.** The designer, 2026-08-21:
*«хлопець як обрізаний тому картинка буде слоєм під низом слайдера вирівняна по нижньому краю»*.
`onboarding-dispatch` is the only picture in the set whose **subject is cut by its own canvas**, so
air under it reads as a fault in the drawing rather than as composition. The modifier gives the
well `padding-bottom: 0` and the picture `object-position: center bottom`: **373.4 × 342.4, bottom
edge 0.0 from the content floor.** It is on one `<section>` in `onboarding-operator.html` and
nowhere else. The picture is pushed **7 past the floor**, because the remaining gap was in the file: the PNG's
last opaque row is 682 of 697, so it carries **14 transparent rows** = **6.88** at the 0.4913 this
slide draws it at. `object-position: center calc(100% + 7px)` spends exactly that and the well
clips the overhang, leaving the jacket **0.12** above the bar's hairline; only transparency is
cut. It is a fixed length against a transparency that scales, so at 200% it overshoots by 3.1 —
**cropping the 14 rows out of the asset and dropping the offset is the durable fix**, and the
asset is the designer's. The pager sits 24 above that floor, so on this slide the dots paint over the picture
— the lit dot is **1.17:1** on skin and the next **1.91:1**, where the same dots on the page are
1.69:1 and 1.39:1. None of the four meets `WCAG 1.4.11`'s 3:1, on artwork or on page: the dot row
has never been a 3:1 indicator and is `aria-hidden` because each slide announces its own position.

**Every picture draws the full width** — the designer, 2026-08-21: *«зображення розтягни на всю
ширину екрану в мобільному»*. A fixed band could not promise it: the band held a 1.043 box, so a
portrait cutout was height-bound and drew **311 of 373.4 — 83.3%**. The band is now a flex item
that takes the height the copy did not, and the picture is width-led inside it — **373.4 on all
nine slides**, heights **159–441**, until the well took its 32 of air on 2026-08-21 — since then
the seven landscape cutouts still draw 373.4 and the two portrait ones are height-led. Nothing is
clipped either way: `cover` is still unused, because it would rescale and crop to fill.

**The pager stays one element under the slider** — the designer, 2026-08-21: *«слайдер має бути де
і був»*. A per-slide pager was built the same day and reverted on her word. Two costs were recorded
rather than argued: the artwork runs to the same floor, so it paints under the dots and on a phone
mockup they are hard to pick out; and one element cannot follow a swipe it has no script to hear,
so the lit dot was slide 1's on all three.

**The lit dot follows the swipe since 2026-09-19 (rev 270) — and the element still has not moved.**
The designer, on the built `onboarding-operator`: *«коли я свайпаю слайдер не показує на якому я
скріні 1, 2 чи 3 зроби щоб коли я свайпаю сторінку слайдер відповідно змінював колір кружочка
залежно від того на якій я сторінці»*. This closes the second of the two costs above and touches
neither the pager's place nor its markup: `.on` in the HTML is now the first paint only, and
`ui/kit.js` moves the class to whichever slide's centre is nearest the scrollport's, once per
animation frame. The first cost stands and is still open — the dots still paint over artwork on a
picture-filled slide. `HIG · Page controls` prescribes exactly this behaviour ("the current page
indicator is filled"), so a static dot was a departure from it and this is the repair.

**The two dots against each other: `--green` on `--btn2` is 1.22:1.** The pair that answers *which
slide am I on* is lit-against-idle, and it is weaker than either dot against the page (**1.69:1**
green, **1.39:1** grey). `WCAG 1.4.11` asks **3:1** of a graphic that carries meaning and none of
the three reaches it. **The criterion is not engaged** — the row is `aria-hidden` and every slide
announces *Slide n of 3*, so the dot is never the sole carrier — but the figure is recorded rather
than left to be found: 1.22:1 is why an 8px row reads as undifferentiated even with the right dot
lit. Open, and the designer's to spend.

**The fade is `--dur-fast` (.12s) on `background-color` only,** the rung the switch knob and the
disclosure chevron already use, with a `prefers-reduced-motion: reduce` counterpart beside the rule
(`WCAG 2.3.3`). Nothing moves, grows or travels — the dot's size, place and shape are constant.

**`--bleed` is opt-in, not automatic on `:has(img)`:** a slider whose slides mix the two treatments
reads as broken. A slide without its picture keeps a `--media` ground and its mono label
(`--slate` **5.51:1**), so a half-supplied slider reads as *picture pending* rather than as a broken
layout — **nine of nine slides carry a file since 2026-08-20**, so that ground draws nowhere today
and the rule stands for the next slide that starts empty.

**`WCAG 1.4.4 Resize text` — was failing, and the flex band closed it.** With the type tokens
doubled, the copy used to overrun the art by **181px** under the fixed 62% band and by **97px**
under the centred composition that preceded it — no text lost, but text drawn over a phone mockup
is not readable text. Measured again 2026-08-21, after the band became a flex item: **0px of
overrun on every slide at 200%**, and again after the copy dropped to 48 and the well took its
air — the copy clears the artwork by **44** on every slide, and on the worst one the well collapses
to its own 64 of padding with the picture at 0. The band gives its height up to the copy first and
gives its picture away rather than let a type size put text under artwork.

**The pager is an indicator, not a control** — the designer, 2026-08-18: *«крапки не клікабельні там
працює свайп»*. The dots were `<a href="#slide">` at an **8 × 8** target, three times under
`WCAG 2.5.8`'s 24 × 24 and five times under `HIG`'s 44pt. The fix was not to pad a hit area around a
dot nobody taps; it was to stop calling the dot a control. They are `<span>`s in an `aria-hidden`
container, and nothing is lost: the slider is a scrollable region, each slide announces *Slide n of
3*, and the position the dots draw is the position the slide states.

### The identity mark (`.dr-idmark`)

Diia and BankID on `signin`, from the designer's own Figma (`105:5`, `106:7`, supplied 2026-08-18).
Square at **20 × 20** where `.dr-paymark` is 40 × 20, because these are **badges** and a 1:1 mark in
a 2:1 box would letterbox; 20 matches the payment marks' height so the two families sit on one
optical line.

**Quoted, not drawn** — PNG, outside the 24-grid icon set, the same rule the Apple Pay and Google
Pay marks follow. Each keeps its own colours: Diia's black squircle, BankID's `#94C11F` plate with a
white `id`. **Neither is recoloured to the palette and neither is redrawn to the 1.7 stroke** — a
brand mark that has been restyled is no longer the brand's mark. The artwork carries its own rounded
corners as transparency, so no CSS radius: a radius here would cut a second corner inside the first.
`alt=""` on both, because the button's own text names the provider.

**One consequence to look at, not a defect:** BankID's `#94C11F` sits one row below DRON's
`#9BCF4A` primary. Two near greens on one screen, both correct — the brand's and the product's.

### The nav-bar avatar (`.dr-avatar-sm`)

**`operator-listings`, `operator-listings-empty`.** `--sz-avatar-sm` **28px**, `--media` ground,
`--r-pill`. Added 2026-08-18 on the designer's word, closing **the last place a painted page read a
colour from the grayscale sheet**: the disc was drawn with `_wireframe.css`'s `.avatar`, whose ground
is `#EEEEEE`, showing through a cutout's transparent corners.

**28 is derived, not picked:** `--h-topbar` is 56, so the disc is exactly half the bar it stands in
and centres with 14 above and below. None of the four existing rungs could be borrowed —
`--sz-avatar` 117 is the operator panel's *width* from an asset ratio, `--sz-avatar-xl` 120 is a
subject, `--sz-avatar-call` 176 is a screen's middle, and `--sz-avatar-badge` 20 is a badge *on* an
avatar rather than an avatar.

### The mark on a profile head (`--sz-head-mark`)

**`var(--sz-action)` = 44px.** Added 2026-08-24 (rev 197) at **32** for the pencil disc on the
client's 120px head, and raised to **44** the same day (rev 198) when the designer asked again and
chose 44 from 32 / 40 / 44 measured. It exists because `--sz-photo-mark` was *the height the
operator's rating pill and disc share*, not a disc size — the client's could not grow on it without
moving his pill. **It now resolves to an existing rung rather than a number of its own:**
`--sz-action`, the kit's circular icon action, so the disc is a `HIG · 44pt` box in its own right.
**36.7%** of the 120 circle, which is the first size to land inside the **~36%** iOS badge
proportion `--sz-avatar-badge`'s own note cites (20 on 56 = 35.7%); 24 read 20.0% and 32 read 26.7%.
Glyph `--ic-22`, the same **50%** of the disc that 16-in-32 and 12-in-24 held. On its own box the
disc clears `WCAG 2.5.8` at **1.00× → 1.33× → 1.83×** across the three sizes — none of which was
ever the criterion's answer, since the `<a>` wraps the whole photograph. **And `--sz-photo-mark`
now follows this token** (`var(--sz-head-mark)`), so the operator's pair keeps its equal height by
construction.

**And `--sz-photo-mark` stopped being written as this token the same day (rev 199).** It is
**24px** again and means **the rating pill's height alone**: aliasing it to the disc carried the
pill from 56 × 24 to 56 × 44 on an instruction that only ever named the edit button, and the
designer took that back. The two marks share a centre line and a 3px gap; they no longer share a
height. A token named for *what two things share* will move both when one is edited — which is the
reason this pair is now two names.

### Navigation

- **Nav bar:** **56px**, `--page`, `--line` bottom hairline, title as `<h1>` 17/600/−0.01em
  `--ink`. The height was not stated here before and is measured on all ten painted pages.
- **Tab bar:** `--page`, `--line` top hairline, 60px, four tabs, 22px icons over an 11/600 label,
  30px home indicator in `--ink`.
- **Selected tab:** `--green-wash` pill at `--r-card`, label and icon `--ink` (14.75:1).
  Unselected: transparent, `--slate` (6.62:1). Two independent signals — a fill appears and the ink
  darkens — because the accent cannot be the label colour at 1.69:1.
- **Action bar:** `--page`, `--line` top, padding `12px 16px 24px`, gap 8, full-width buttons.

### The in-page group row (`.dr-groups`) — two shapes, one component

A row of places with one current, **48px**, `overflow-x: auto` with the scrollbar hidden. It had
never reached this document in either shape; both are written down here at rev 232, the second of
them on the day it was built.

**The chip (`.dr-groups`) — 6 pages since rev 242.** The four `time-slot` day rows, and the two
`operator-listings` files, which came back to this shape on 2026-09-10 on a picture the designer
pasted (*«вибраний на зеленому бекграунді, тоненькі лінії зверху знизу»*) — see the hairline note below. Gap 8, row padding `0 16`,
pill `--r-pill` at **32px visible** with a `--pill-bleed` −6/−6 `::after` taking the target to
**44** (`HIG · 44pt` ✓, `WCAG 2.5.8` ✓ at 24). **From rev 269 both states are a fill** — the designer
against a category row she pasted (*«selected on green background, not selected gray»*): current =
`--on-green` on `--green` (**9.46:1**), the rest `--slate` on `--media` (**5.51:1**, down from 6.62:1
on the page and still **1.22×** the 4.5 floor). **The mark itself is `1.41:1`** — `--green` against
`--media` — which is under `WCAG 1.4.11`'s 3:1 and leans on the label moving 5.51 → 9.46 as well, a
text-against-text difference WCAG does not measure. Recorded as the known condition it is: the wash
it replaces measured **1.085:1**, so the fill improves the mark by **+0.33** without clearing the
floor, and the reading that would clear it — `--ink` selected on `--media` idle, **13.33:1**, the
pasted picture literally — was drawn and refused in favour of the accent.

**The count on a tab (`.dr-grouptab__count`, rev 269).** *Incoming · 2* becomes *Incoming* + a badge:
`--sz-fchip-x` **18** square, `--r-pill`, `--sp-2` inline, 10.5/500, `--green-wash` behind `--ink`
(**14.75:1**) — `.dr-chip--unread`'s pair in `.dr-count-badge`'s box, so nothing is minted. The badge
is a shape around text and not a state, so `1.4.11` does not bind on its edge — **1.56:1** on the
chosen pill, **1.11:1** on the idle one, the same hue-not-luminance reading `notifications` has run
on since 2026-08-31 (1.03:1 on `--card`). The digit is the tab's own text, so the accessible name is
*Incoming 2* and `4.1.2` needs nothing added.

**The underline tab (`.dr-groups--tabs`) — 5 pages since rev 242** (seven until the operator's two went back to the chip), the designer's pick 2026-09-10 and re-cut the
same day from own-width-and-scroll to equal-shares-and-truncate: five
`listings` and two `operator-listings`. Gap 0, row padding `0 4` — `--sp-screen` 16 minus the tab's
own `--sp-snug` 12, so the **label** lands on the screen margin and the underline runs 12 past the
text at each end. It takes its transparent ground back explicitly at rev 269, the chip having been
filled. Tab is the row's full height, **47.2** inside the 48 the hairline takes a pixel
from (`HIG · 44pt` ✓ +3.2, `WCAG 2.5.8` ✓ 1.96× the 44 × 44 area). Current = `--ink` label plus a
**2px `--ink`** rule on the bottom edge; the rest `--slate`. **The mark is `15.99:1`** — +12.99 over
`1.4.11`'s floor and the only one of the row's two shapes that passes on the mark alone.

- **`flex: 1 1 0` with `min-width: 0` — equal shares always, and the label gives way.**
  `listings` only, and since rev 242 that is the only page set this modifier has. **The operator's
  row passed through this rule twice in one evening and kept neither reading**, which is recorded so
  the arithmetic is not re-derived: equal shares gave two tabs **163 × 47** each — half the screen
  around a **79.97** label, which reads as a button rather than a tab — and rev 241's
  `flex: 0 0 auto; min-width: max-content` cut them to **103.97** and **82.92**, text plus
  `--sp-snug` 12 either side, a width that does not move with the frame where a share goes 170.5 at
  a 351 frame to 182.7 at 375. Rev 242 then left the modifier altogether for the chip, so **both
  rules now address nothing** and are kept declared at zero spend. `listings` **91.3 × 47.2** four times, and two of the four are cut: *Aerial photo &
  video* needs **155** against **91** of room (over by **64**) and *Inspection* needs **93**
  (over by **2**). At ≤ 389px the quarters are **82.8** — *All* and *Delivery* still whole at
  **83 / 83**, exactly on the edge; the other two cut by **72** and **10**. The row does not scroll
  at either tier.
- **Truncation, not wrap or scroll** (the designer's call 2026-09-10, having seen all four in the
  frame). `HIG · Segmented Controls` truncates rather than wraps, so this is HIG's own answer for a
  label that will not fit. **Nothing fails:** the ellipsis is drawn by CSS, the DOM text is
  untouched, so the accessible name stays the full string and `WCAG 4.1.2` / `2.5.3` are answered by
  it; the target is unchanged. **What is lost is reading, not conformance** — the eye cannot tell
  *Aerial p…* from another aerial category, and no criterion measures that. Recorded as her decision.
- **The tab is a block box, not a flex one** — `text-overflow` needs the text to be *in* the box, and
  inside `display:flex` a bare label becomes an anonymous flex item where the ellipsis never draws.
  So: `display:block`, `text-align:center`, and the line box centres vertically at
  `--h-groups` − `--hair` = **47**, derived from the row rather than typed.
- **The weight does not move with the state** — 600 in both. A heavier current tab is a wider tab,
  and on a row that scrolls that re-measures every sibling under the finger. Verified by tapping
  *Delivery* on the built page: all four widths byte-identical before and after.
- **The row got tighter, not looser.** Measured on `listings` by toggling the class live: content
  **423 → 375**, hidden scroll **84 → 36** at ≤ 389px. The tab spends nothing on gap and 8 on row
  padding where the chip spent 24 and 32.
- **The hairline — one line in the chrome, two in the page.** In the chrome (`listings`) it is the
  row's own `border-bottom`, which has always been there, so the row costs that screen no new line;
  its top edge is the bar's own rule and a second one would double it. **In `main`
  (`operator-listings`) the row is closed on BOTH edges since rev 242** — the designer's own ask
  (*«тоненькі лінії зверху знизу»*) with a reason the chrome row never had: a row standing inside the
  page has content **above** it as well as below, here the Availability field card. So `border-top`
  is declared on `.dr-main > .dr-groups` and nowhere else. **Rev 220's objection is answered rather
  than overruled** — it refused an *inset* rule as a divider inside content, and both lines run
  **edge to edge**: `margin-inline: -16` paid straight back as padding, the chips not moving a pixel
  sideways, **first chip measured at x 17**.
- **And since rev 267 (2026-09-19) the in-page row PINS to the top of the list.** The designer
  against the built `operator-listings`: *«Make fixed position»*. It is `position: sticky` and not
  `fixed` — `fixed` resolves against the **viewport**, and every screen here is drawn inside
  `.wf-frame`, a 375-wide phone standing in a 1151-wide browser, so a fixed row would leave the
  frame and lie across the shell; `sticky` resolves against the nearest scrollport, which is
  `.dr-main` itself (`overflow-y: auto`). **`top` is `-17px` and both halves of it were measured,
  not reasoned:** a sticky child pins to its scroll container's **content** box, so `top: 0` left
  the row standing **15px** below `.dr-topbar` with the list scrolling visibly through `.dr-main`'s
  own 16 of padding above it — `--sp-screen` is paid back (**−16**) to bring the row flush to the
  chrome, and one more `--hair` (**−17**) holds the row's own top rule outside `main`'s overflow
  edge so it is clipped, leaving **one** hairline at the junction instead of 2px of `--line`.
  **Measured, 375 × 812, annotations off:** at rest the row is unmoved — `373 × 48` at **88** from
  the scrollport, chip `103.97 × 32`; pinned it sits at **−1** with **47** visible and its bottom
  edge at **47**. `background` goes `transparent` → `--page` `rgb(247, 245, 242)`, which is the
  frame's own ground, so nothing changes at rest and nothing shows through when pinned; `z-index: 3`
  clears `.dr-card__link` **1** and `.dr-card__actions .dr-btn` **2** and stays under the scrim **5**
  and the sheet **6**, so the availability drawer still covers the row. **`WCAG 2.4.11 Focus Not
  Obscured (Minimum)` is answered in CSS rather than left open:** `scroll-padding-top:
  calc(var(--h-groups) - var(--hair))` = **47** on `.dr-main:has(> .dr-groups)`; tabbing the whole
  screen measures **0px of overlap** between the pinned row and every one of the eight focusable
  controls under it, and the row's own `#incoming` / `#active` jumps land **272** clear. **It repays
  the first of rev 220's two recorded costs** — `Active · 1` can no longer scroll off — **and
  restores `WCAG 3.2.3 Consistent Navigation`** between the two home screens without moving the DOM
  order, so rev 220's `HIG · Segmented Controls` reading holds at the same time. **`WCAG 1.4.11` is
  unmoved and still open:** the chip's mark is `--green-wash` at **1.085:1**. **Scope verified live,
  not assumed** — `operator-listings` and `operator-listings-empty` only; on `listings`,
  `listings-filtered`, `time-slot` and `order-history` the nav is a **sibling** of `main`,
  `position: static`, `scroll-padding-top: auto`. **0** console errors.

### Icons

Flat outline on a 24-grid, `stroke-width="1.7"` declared once, `fill="none"`, `currentColor`,
round caps and joins. **The rendered line follows the box** — 1.84 at a 26px mark, 2.27 at a 32px
mark — the way SF Symbols scales weight. No glyph compensates its stroke to hold a constant
rendered width.

Active / done is a **green shape behind a charcoal glyph**, never a recoloured stroke.

### Skeletons

`--btn2` bars, 13px tall, on the real layout. **Chrome stays solid, content pulses** — a surface
the loaded card also draws is painted at full strength; a block the load replaces animates.
`skPulse` 1.4s ease-in-out, opacity 1 → .5, with `−.47s` / `−.93s` offsets per card so the list
does not blink as one.

The rule produces opposite answers by design: on `order-history-loading` the drone well pulses
(the cutout sits *inside* it, so nothing survives the swap), while on `delivery-loading` the photo
well pulses (the photograph *covers* it). The question is never "should this pulse" but **"does
what loads replace this surface, or sit inside it"**.

**`.dr-sk-tray`** — the one-declaration modifier (`background: var(--media)`) that turns the
loaded `.dr-upload` tray into its own waiting state on `result-upload-loading`. It inherits the
component's `min-height` 140, `--r-media` 13, column, centring, `--sp-snug` 12 gap and `--sp-24`
padding, so the tray does not pulse and does not move: only the arrow inside it leaves (`skUp`).
The status sentence stands under the glyph as `.dr-status-line` — 14px `--slate` on `--media`,
**5.51:1** — where the loaded frame stands `Add photo` as `.dr-upload__action`. The `role="status"`
lives on that sentence and the `aria-hidden` on the glyph alone, never on the tray: a live region
inside an `aria-hidden` container is never announced (`WCAG 4.1.3`).

### Motion

| Name | Duration | Easing | What moves |
|---|---|---|---|
| button | .15s / .12s | default | `filter`, `background`, `transform` |
| `oh-ping` | 1.8s | `cubic-bezier(.22,.61,.36,1)` | a ring leaving a live status disc |
| `skPulse` | 1.4s | `ease-in-out` | skeleton opacity 1 → .5 |
| `skUp` | 1.6s | `cubic-bezier(.22,.61,.36,1)` | the arrow leaving an upload tray |
| `dr-spin` | 1.1s | `linear` | a 270° arc turning inside the milestone mark |

`skUp` moves the arrow only — the tray holds still, because what the screen waits on is a file
going *up*. It rests **visible** at 0% and 100%, so a dropped animation leaves a legible icon.

`dr-spin` is the only loop that describes no object — just system work, so it keeps its own
cadence. The other three sit at 1.8 / 1.4 / 1.6s because each traces something physical; an
activity indicator slower than ~1.2s reads as stalled (`HIG · Progress indicators`). 1.1s also
keeps it off the 1.4s skeleton pulse it shares `payment-loading` with — the two re-align only
every **15.4s**, so they never breathe as one. Easing is `linear`, alone in this table: an eased
spin stutters once per revolution. At 0.91 Hz it clears `WCAG 2.3.1`'s 3 Hz ceiling by 3.3×.

Every loop above is `animation: none` under `prefers-reduced-motion: reduce`. `dr-spin` is the
weak case of that contract — a frozen spinner is the picture of a hung app — which is why the arc
is 270° and not a closed ring: at rest it reads as work *incomplete*, and the `role="status"`
sentence beside it carries the state.

### Named rules

**The One-Component-One-Value Rule.** The same component drawn on two screens carries the same
numbers. The tracking ETA panel and the delivery details panel are one component; the order card's
node and the tracking timeline's node are one node.

**The Built-Not-Dimmed Rule.** A disabled or inactive control is built from its own colour pair.
Blanket opacity is never the mechanism — it produces a ratio nobody measured.

**The Shape-And-Behaviour Rule.** Two states never differ by colour alone. A dot pings and a check
sits; a clock is not a check; each keeps a text accessible name.

## Imagery

Real renders and photographs, never illustration and never a gradient. Written 2026-08-01 as *every
image on the ten painted pages*; the aerial set below joined the build later and was added to this
table on 2026-08-16 (rev 153), the three pile frames having been in the build with no entry here at
all. Each image, with what it is doing there:

| Asset | Surface | Native | Served | Box | Treatment |
|---|---|---|---|---|---|
| `drones/thumbs/drone-08.png` | `order-history` — the **live** package-delivery card **and the 28 Jun delivered card** (twice on the page) | 1024² | 256² | 96 × 72 frame, drawn 64 × 64 | cutout, `contain`, no ground |
| `drones/thumbs/drone-flight-camera.png` | `order-history` — aerial photo & video | 392 × 291 | 256² | same | same |
| `drones/thumbs/drone-flight-clean.png` | `order-history` — the roof-inspection card. **This row read “drawn nowhere since 2026-08-16” and was wrong** (corrected rev 153): the well was given a photograph that day and the designer reversed it the same day, so the render never left. The `wide/` cut of it is also `welcome`'s third slide | 409 × 174 | 256² | 96 × 72 frame | cutout, `contain`, no ground |
| `people/thumbs/operator.png` | `tracking` · `-empty` · `-error` — operator card | 595 × 702 | 300 × 354 | 117 × 138.1 | cutout, `cover`, full-bleed left panel, no ground |
| `scenes/thumbs/delivered-at-door.jpg` | `delivery` — proof of delivery. **Not on `order-history`** — this row said “the 28 Jun delivered card” until rev 153; that card carries `drone-08` | 1100 × 880 | 652 × 522 | 341 × 180 | photograph, `cover`, edge to edge |
| `scenes/thumbs/inspection-roof-cracked-tiles.jpg` | `inspection-report` — cover. **Not on `order-history`** — same correction, rev 153; that card carries `drone-flight-clean` | — | 652 × 489 | 341 × 180 | photograph, `cover`, edge to edge |
| `scenes/thumbs/aerial-rafting-run.jpg` | `order-details-aerial` — photo card. `order-history`'s aerial card keeps `drone-flight-camera` | 949 × 638 | 652 × 438 | 341 × 180 | photograph, `cover` |
| `scenes/thumbs/aerial-rafting-boulders.jpg` | `order-details-aerial` — the video card's cover | 599 × 362 | same pixels | 341 × 180 | photograph, `cover`, runs to the card's three edges |
| `scenes/thumbs/aerial-rafting-crew.jpg` | `delivery-aerial` — photo pile, 1 of 3 | 1514 × 1009 | 432 × 288 | 206.7 × 137.8 | photograph, `cover`, 3px `--page` edge, tilt +3deg |
| `scenes/thumbs/aerial-rafting-drop.jpg` | `delivery-aerial` — photo pile, 2 of 3 | 1488 × 992 | 432 × 288 | same | same, tilt −3.5deg |
| `scenes/thumbs/aerial-rafting-overhead.jpg` | `delivery-aerial` — photo pile, 3 of 3 | 1516 × 1011 | 432 × 288 | same | same, tilt +2deg, pulled 6% off the right edge |
| `map/live-map.jpg` | `tracking` · `-empty` · `-error` — live map | 1100 × 552 | — | 326 × 164 | photograph, `center/cover`, native 1.99 |
| inline base64 JPEG | `order-history-empty` — banner | — | — | 150px tall | `background-size: auto 78%`, `center 16px` |

**Why these units.** Each drone is the machine that did *that* job, so the payload names the
service: a lime cargo box for delivery, a gimbal camera for aerial work, an empty airframe for
inspection. In the fleet set every unit carries the same lime box, so a mixed list would read as
three deliveries — which is why the two service cards take in-flight cutouts and the two delivery
cards take a fleet render. The screen mixes registers deliberately, and pays a register seam for it.

**A finished card shows the result, not the machine — proposed, built, and reversed the same day
(2026-08-16). The reversal is what shipped, and this paragraph recorded the wrong half of it until
rev 153.** The idea was that the moment an order is *done*, the well carries what came back, on a
reason that is recall rather than decoration: a client who has had the same roof inspected three
times sees three identical airframes and cannot tell the orders apart, where three photographs are
three different roofs. It was built — `order-history`'s 28 Jun and 2 Jun cards took
`delivered-at-door` and `inspection-roof-cracked-tiles` — and the designer took it out the same day:
*«та не на ці картки фото, верни назад дрони, а коли я відкриваю картку щоб подивитись деталі»* —
**not photographs on these cards; put the drones back, and put the picture where I open the card to
see details.** So **all four `order-history` wells carry drone renders**, verified against the build
(`drone-08` twice, `drone-flight-camera`, `drone-flight-clean`), and the photographs live on the
records the cards open — which is exactly where the per-service `order-details` split put them.
Kept here as a decision with its reason, so it is not re-proposed later as a new idea. The live card
keeps its drone on the original reasoning too, because *what is flying* is
the true answer while it flies. The aerial card kept its drone only because the repo had no picture
of an aerial deliverable — **that gap is closed**: `visuals/gaps.md` B3 #17 was filled the same month
(rev 135) and the library now holds **five** aerial frames, #17 · #19 · #20 · #21 · #22. The card
itself did not move, and that is the designer's earlier call holding rather than an omission — she
reversed photographs on the `order-history` wells and kept the drones there.

**Why the operator photograph is load-bearing.** It answers the highest-drop-off job in the CJM —
confirm the operator is real and qualified — so it belongs exactly where the trust claim is made,
beside the verified badge and the insurance line. Never background texture, never cropped so the
face and the controller are both lost.

### Rules of use

- **One drone per surface.** A grid of drones is a specification, never product UI. In the product
  a screen shows the one unit doing the one job.
- **Do not recolour, tint or gradient-map.** The lime already *is* the accent; a second green would
  break the budget.
- **No added drop shadow.** Each render carries its own lighting and contact shadow.
- **Never upscale.** Every box above is a downscale. Below ~96px the rotors stop resolving.
- **Serve the size the box draws, keep the master.** The page references a `thumbs/` copy at
  roughly 2× the CSS box; the master stays in the repo untouched.
- **Alt text names the outcome, not the equipment** — *"Your parcel on its way"*, not *"quadcopter
  with lime cargo box"*. Decorative renders take `alt=""`, and the former placeholder label
  survives as the accessible name of the well.

**One live exception.** The `order-history-empty` banner is an inline JPEG with no alpha; its white
rectangle is knocked out by `background-blend-mode: multiply` against `--card`. It is the only
image in the product that is not a transparent PNG. The fix is to re-cut it as a PNG with alpha and
drop the 26 KB base64 blob out of the HTML.

## Do's and Don'ts

### Do

- **Do** spend green as a fill and put `--ink` on it — 9.46:1 on the fill, 14.75:1 on the tint.
- **Do** keep solid green at or under ~5% of the frame, with the primary CTA as most of it. **One
  screen departs, on the designer’s instruction and with its numbers written down rather than its
  instruction trimmed:** `wallet`, from 2026-08-21 (rev 163), carries a green balance card
  **and** a floating green CTA — **11.32%** of the frame, the CTA **22.1%** of the green
  (**11.91%** / 21.0% before rev 177 cut the glyph plate out of the card's fill; **11.41%** / 21.9%
  while that plate was a disc rather than rev 178's square).
  Contrast is unaffected (every ink on green is 9.46:1); it is the quantity rule that gives.
  **Put to her with the four readings drawn and the numbers on each; her call was to keep it as
  built, and to leave this rule at ~5% rather than widen it.** See `concept.md` rev 163.
- **Do** separate surfaces with a warm tone step and a radius, and measure the step before using it.
- **Do** give a state two signals — a shape *and* an ink change, or a glyph *and* a title.
- **Do** use `min-height` for anything that must stay a 44pt target.
- **Do** size a skeleton block to the element it waits for, and re-measure it when that element
  changes treatment.
- **Do** let a cutout sit straight on the card and a photograph cover its whole surface.
- **Do** write the contrast ratio next to any new pair, before it ships.
- **Do** check every decision against HIG and WCAG 2.1 AA, and report a mismatch with the exact
  value, the named criterion and the number — see `CLAUDE.md` → Design Standards.

### Don't

- **Don't** set text or an icon stroke in `--green` — 1.69:1 on the page, 1.52:1 on the card.
- **Don't** put white on green: 1.84:1.
- **Don't** mint new darkened greens. Where green must speak — a lone glyph, a word — it is
  `--green-ink #4F6B22` (rev 48) and nothing else; `--green` itself is never text. One ink rung
  exists, not a family: the ad-hoc `#3F5B18` that predated the rung was deleted for this.
- **Don't** add a shadow to a card, a panel, a well, a map or a photograph. One shadow exists and
  it is under the primary button.
- **Don't** spend green inside card UI — the direction chip, the route strip and card actions are
  neutral.
- **Don't** give a surface, control, well or chip a radius outside the six, and don't restate a
  parent's radius on a full-bleed child. Internal details may use the 2 / 4 / 8 scale.
- **Don't** dim a control with blanket opacity — build the disabled state from its own pair.
- **Don't** draw the raw semantic hue. A state is a wash carrying its own ink.
- **Don't** let a state be carried by colour alone.
- **Don't** upscale a cutout, add a ground under one in the product, or mix a grid of drones into a
  product screen.
- **Don't** compensate an icon's `stroke-width` to hold a constant rendered weight — declare 1.7 on
  the 24-grid and change the *size* instead.

### The notification bell (`.dr-bell`)

**`listings`, `operator-listings`** — the two **home** screens, and nowhere else. Added 2026-08-31
on the designer's word (*"add on the right side of the header on the home page, in front of the
DRON button icon, notification for both client and operator modes"*), together with the alert log
it opens (`wireframes/notifications.html`, `wireframes/operator-notifications.html`).

**It is `.dr-back` mirrored, and not one number in it is new.** `44 × 44` box, the `--ic-22` glyph
rung (the tab bar's, so no size was cut), transparent ground, `--ink` glyph, the same
`:focus-visible` ring at `--focus-w` on `--r-btn`, and `margin-right: -10px` where the back control
spends `margin-left` — which lands the icon's own edge back on the 16px gutter, measured **17.8px
from the frame edge** against the chevron's mirrored 17.8 on the left. The bar's optical edge does
not move.

| Measured | Value | Criterion | Result |
|---|---|---|---|
| Target | `44 × 44` | `HIG · 44pt target` | ✓ **100%** |
| Target | `44 × 44` | `WCAG 2.5.8 Target Size (Minimum)` | ✓ **1.83×** the 24px floor |
| Glyph | `--ink` `#1A1A1A` on `--page` `#F7F5F2` | `WCAG 1.4.11 Non-text Contrast` | ✓ **15.99:1** against 3:1 |
| Count digit | `--on-green` on `--green` | `WCAG 1.4.3` | ✓ **9.46:1** |
| Name | `aria-label="Notifications, 3 unread"` | `WCAG 4.1.2 Name, Role, Value` | ✓ the count is spoken |
| Colour dependence | none — the count is a numeral and a name | `WCAG 1.4.1 Use of Color` | ✓ not engaged |

**Why it is not `.dr-btn--icon`, which would have cost no new CSS at all.** That component is a
`--btn2` **disc**, and **no navigation bar in this product has ever held one** — counted on the
build: every trailing bar control is unfilled (`.dr-btn--text` *Save*, `.dr-btn--tertiary` *Cancel*
/ *Clear all*) and the one leading control is the bare `.dr-back` chevron. `HIG · Navigation bars`
puts a glyph or a word in the bar, not a filled shape. A grey disc beside the flat DRON wordmark
would have been the first of its kind in the chrome, so the bar's own precedent won and one class
entered the kit.

**The count badge is `.dr-count-badge`, unchanged, with one offset overridden.** The pill's own
`-2px / -2px` was derived on a 44px **circle**, where it lands the badge on the edge at 45°. This
box is a **square**, and `-2` would push the pill 2px past the bar's 16px gutter with 4px left to
the frame edge. `.dr-bell .dr-count-badge` takes `--sp-within` (**4**) instead: the pill overhangs
the 22px glyph by **7px** on each of two sides — the badge's normal reading — and keeps **10.8px**
of air to the frame edge. One existing token, no new rung. The pill was drawn on exactly one page
before this (`listings-filtered`'s filter count); it now stands on **three**.

**Green budget.** The pill is `18 × 18` = **324px²** — **0.106%** of the 375 × 812 frame, against
§0's **~5%** ceiling. It is a **status mark**, not a green *control*: on `listings` it is the only
solid green on the screen (measured **0.106%** total, the group tab carrying `--green-wash`, a tint
at 1.085:1 on the page, which §0 does not count — **rev 269 ends that**: the chosen tab is solid
`--green` and Home now measures 6.08%), and on `operator-listings` it joins a screen that
already measures **4.15%** visible green across two `Accept` buttons and the availability dot — the
bell adds **0.11pp** and changes neither the count nor the ceiling.

**On the operator's bar it stands after the availability badge**, at the trailing edge.
`HIG · Navigation bars` gives that edge to the bar's **controls**, and the badge is not one —
`operator-listings` already records that it is not tappable and owes no 44pt target. Gap between
them, measured: **8px**. The reverse order conforms equally and is one swap.

### The choice card carries the arrow again (`.dr-choice__chev`, rev 244)

**Every tappable choice card that is not an alert row ends in `chevron.forward`, flush with its
trailing edge** — five of the sixteen since rev 245: `support` 3, `role-select` 2. Rev 244 put it on
all sixteen, `notifications` 6 and `operator-notifications` 5 included, and rev 245 took it off those
eleven (next section). The designer, on the
built `support`: *«зроби стрілку вправо вирівняй по правому краю»*, and then, asked the scope with
`WCAG 3.2.4` on it, every choice card rather than `support`'s three. **This reverses rev 206**
(*«delete arrows from such kinde of cards»*), which is kept in `concept.md` as the record of why it
left; both readings conformed then and both conform now.

**The anatomy.** `.dr-choice__chev` is the card's last child: `flex:none`, `inline-flex`, `--slate`,
holding the 16px `.dr-ic` with path `M9 5l7 7-7 7` — the same glyph `.dr-field__chev` draws on the
picker rows, under the card's own class name. Nothing is minted for its position: the card's flex gap
(`--sp-group` **20**, **16** at `≤ 389px`) sets the distance to the text, the card's inset
(`--sp-screen` **16**) the distance to the edge. Vertical-centre offset measured **0**.

**The standards.** `HIG · Lists and tables` — a chevron on a row that opens another view; every one
of the sixteen is an `<a href>` that leaves the screen. `WCAG 1.4.11` — `--slate` on `--card`
**5.95:1**, **1.98×** the 3:1 floor. `WCAG 4.1.2` — the glyph is `aria-hidden="true"`; name and role
still come from the title and the link. `HIG · 44pt` / `WCAG 2.5.8` — the target is the card; the
smallest is still **341.4 × 55.8**.

**The cost is measure, 36 at the standard tier and 32 at the narrow one.** `support` body
**309.4 → 273.4** and `role-select` **233.4 → 197.4**, no title wraps and no row moves at the
standard tier. **The two alert logs pay it in lines:** on `notifications` *Your delivery photo is
ready*, *Ivan K. accepted your order* and *Your photo and video set is ready* go to two lines (rows
**78 → 101.8**, page scroll **11 → 82**); on `operator-notifications` *Job offer · Package delivery*
does (row **78 → 101.8**, page still does not scroll). At the narrow tier (380 viewport) six more
rows take a second line, `support`'s *The photo or report isn't right* and `role-select`'s *I need a
service done* among them. **Left wrapped, not truncated** — `WCAG 1.4.10` prefers the wrap; whether
any string is rephrased is a copy decision, open and hers. **The alert logs' share of that cost is
repaid at rev 245**, which takes the arrow off their rows.

**Where it does not go.** `notifications-loading`'s skeleton rows are `<div>`s, not links, and a row
that leads nowhere carries no arrow. `.dr-listing` is a different component and keeps *no price row
and no chevron*. And since rev 245, **no alert row** — next section.

### The alert rows carry no arrow (rev 245)

**On `notifications` and `operator-notifications` the choice card ends at its text — no
`.dr-choice__chev`.** The designer, on the built `operator-notifications`: *«we have no these icons in
notifications cards delete icons from notifications cards»*. Both logs, because she named the
notifications cards rather than one screen and the two logs are one screen in two vocabularies:
**11** rows, `notifications` 6 and `operator-notifications` 5. `support` and `role-select` keep the
arrow. **No CSS changes** — the markup omits the span; the class stays declared for the five cards
that carry it.

**The standards.** `HIG · Lists and tables` — the disclosure chevron is the convention for a row that
opens another view, not a requirement, and iOS's own notification list draws none; a **conforming
departure**, recorded as one. `WCAG 4.1.2` — the glyph was `aria-hidden`; name and role unchanged.
`WCAG 1.4.11` — not engaged; the arrow was never the only tappable cue. `WCAG 3.2.4` — engaged by
identification (name, label, text alternative), which a hidden glyph is not. `HIG · 44pt` /
`WCAG 2.5.8` — the target is the card: **341 × 77.98** at the 375 frame.

**What comes back, measured before and after on the build.** The text column regains **36** / **32**:
body **273 → 309** in the shell's 375 frame (1138 window), **258 → 290** at a 380 viewport,
**253 → 285** at a 375 viewport. Every row that the arrow had wrapped — four in the 375 frame, seven
at a 375 viewport — returns **101.78 → 77.98**; `main`'s overflow goes **137 → 65** on
`notifications` and **3 → 0** on `operator-notifications`. **Every title on both logs is one line at
all three widths, and every row is 77.98.**

### The choice card's title goes back to the title step's 600 (`.dr-choice__title`, rev 268)

**The value is 17/600, leading 1.4, tracking −0.01em, `--ink` on `--card` 14.37:1** — the `title`
step whole, declared as `--t-title-weight` rather than as a literal 600. The designer, on the built
`role-select`: *«make weith medium 600»*.

**This reverses rev 247, five days old and hers, and that is reported rather than smoothed.** Rev
247's recorded objection was that at 600 the row is Headline and *matches the nav-bar title*, itself
17/600. **`role-select` has no nav-bar title** — on the screen she pointed at there is nothing at
17/600 to collide with; `support`, `notifications` and `operator-notifications` all have one, and she
took the component anyway. Scope is the component, the same answer as revs 213, 221 and 247 — all
**16** instances.

**Both weights conform, and that went to her first.** `HIG · Typography` names **Body 17 Regular**
*and* **Headline 17 Semibold** — two real text styles at one size, so the guideline picks neither.
`HIG · Lists and tables` sets a plain row label in Body, which is rev 247's reading; but iOS sets a
**notification's** title in Semibold over a regular body, and **11 of these 16 rows are alert rows**,
so on those eleven 600 is the platform's own pattern rather than a departure from it.

**The one-off pairing rev 247 minted is closed, not re-minted.** Rev 247 recorded 17 + 400 as a new
pairing on the scale; taking `--t-title-weight` puts the component back on the step the nav bar, the
message title and (rev 266) the map's offer name already carry.

**Measured on the build, 375 × 812, all 16 instances, before the change was written.** Nothing wraps,
no row grows, no page starts scrolling:

| instance | column | 400 | 600 | slack |
|---|---|---|---|---|
| `role-select` · *I need a service done* | 197.00 | 167.13 | **176.44** | 20.56 |
| `role-select` · *I provide services* | 197.00 | 137.56 | 147.55 | 49.45 |
| `support` · *The photo or report isn't right* | 273.00 | 233.13 | 249.38 | 23.62 |
| `notifications` · *Your delivery photo is ready* | 245.72 | 218.09 | 233.34 | **12.38** — tightest of the 16 |
| `notifications` · *Your photo and video set is ready* | 294.00 | 262.00 | 277.89 | 16.11 |
| `operator-notifications` · *Olena H. rated your job 5 stars* | 309.00 | 239.67 | 254.66 | 54.34 |

Row heights identical at both weights — `support` **55.80**, `role-select` **76.00**, both logs
**77.98** — the line box being `17 × 1.4` = **23.8** either way. Every `.dr-main` reports the same
scrollHeight at 600 as at 400: `notifications` **791** against a **710** client at both, the other
three flush. The `role-select` column reads **197.00**, not the **241** rev 221 measured, because rev
244 put the chevron back.

**Standards.** `WCAG 1.4.3` — **14.37:1**; a 17px line is normal text at both weights (bold turns
large at 18.66px), so the floor is **4.5:1** either way and it passes by **9.87**. Weight is not a
contrast factor here. `WCAG 1.4.4` holds. `HIG · 44pt` / `WCAG 2.5.8` — no target moves.

**What is left at 17/400, said rather than left to be found:** `.dr-listing--service
.dr-listing__name` (rev 248), the five service cards on `listings` — the question rev 266 left open.
On the alert rows the title/description hierarchy rests on size, weight and colour together again
rather than on size and colour alone: 17/600 `--ink` **14.37:1** over 13/400 `--slate` **5.95:1**.

### The choice card's title is set at the row weight (`.dr-choice__title`, rev 247)

**The value is 17/400, leading 1.4, tracking −0.01em, `--ink` on `--card` 14.37:1** — the `title`
step's size, leading and track at `--weight-regular`. The designer, on the built `support`: *«перевір
шрифт чи не дуже великий що каже HIG»*.

**The size was not too big, and that was the answer first.** `HIG · Typography`'s default (Large)
Dynamic Type sizes put **Body at 17 Regular** and **Headline at 17 Semibold**; `HIG · Lists and
tables` sets a row's label in Body. So 17 was the platform's row size exactly. **The weight was the
difference:** at 600 the row was Headline, and on `support` each row matched the nav-bar title *Help*
at 17/600/−0.01em, under a 22/700 display only **1.29×** larger — and stood above every other card
title in the product, which are **15/600**. Three options went to her, all conforming: **17/400**,
**15/600** (rows **2.8px** shorter) and **17/600 kept**. She took 17/400. Rev 213's 14 was not
re-offered.

**A departure, recorded rather than minted.** 17 and 400 are both on the scale; the pairing is new.
Scope is the component, as at revs 213 and 221 — all **16** instances.

**Nothing moves but the stroke, by construction.** A line box is `size × leading` = **23.8** at either
weight, so every row keeps its height — `support` **55.80**, `role-select` **76**, both logs
**77.98** — and a regular glyph is narrower than a semibold one, so no title that fitted one line at
600 can wrap at 400. Not re-measured in a browser.

**Standards.** `WCAG 1.4.3` — **14.37:1**; a 17px line is normal text at both weights (bold becomes
large at 18.66px), so the floor is **4.5:1** either way and it passes by **9.87**. `WCAG 1.4.4` holds.
`HIG · 44pt` / `WCAG 2.5.8` — no target moves. On the alert rows the title/description hierarchy now
rests on size and colour: 17/400 `--ink` **14.37:1** over 13/400 `--slate` **5.95:1**, **1.31×**; the
unread signal is the **New** chip and never depended on weight.

**Not to be confused with rev 246**, which kept the picker's `.dr-field__value` at 600: a chosen value
on an entry row, a different component, untouched here.

### The choice card's title returns to 17 (`.dr-choice__title`, rev 221)

**The value was 17/600, leading 1.4, tracking −0.01em, `--ink` on `--card` 14.37:1** — the `title`
step exactly as the scale defines it, until rev 247 took the weight to 400 (section above). It spent
two revisions at **14** and came back: the designer, against the built `role-select`, *«поверни
розмір шрифту заголовку»*.

**Why it could come back — the constraint that forced 14 no longer exists.** Rev 213 stepped the
size down because one title in the product wrapped: `support`'s quality row, *The photo or report
wasn't what I expected*, **279.3 + a second line** of a **309px** measure. **But that same revision
also rewrote the row**, and the rewritten string — *The photo or report isn't right* — measures
**249.38** at 17, **59.62px inside** the same measure. **The rewrite, not the size, is what keeps
the triage list three equal cards**, and it keeps them at 17: **55.80 × 3**, the ragged middle row
still gone. Measured across every instance, **no `.dr-choice` title wraps at 17** — true at rev 221;
since rev 244's arrow took 36 of the column, four alert titles wrap at the standard tier (section
above); since rev 245 took the arrow off the alert rows, none does.

**Scope is the component, which is the answer she gave at rev 213 too.** A `role-select`-only
modifier was the alternative; taking the shared declaration keeps **one title size in the kit**, so
a triage row cannot drift from an alert row. The cost is stated rather than left to be found:
`support` and the eleven alert rows come back up **4.2px** each along with the screen she asked
about.

| Screen | Row height | Title | Note |
|---|---|---|---|
| `role-select` | **76 × 2, unchanged** | 14 → 17 | the **44px well** sets this row, not the title's 23.8 line box — **the size she asked for costs the screen nothing**; titles **176.44 / 147.55** of a **241** measure; list **160** |
| `support` | **51.59 → 55.80 × 3** | 14 → 17 | one height and one line each, as at 14; widest **249.38** of 309; list **170.78 → 183.39** |
| `notifications` | **73.78 → 77.98** × 6 | 14 → 17 | widest title *Your photo and video set is ready* **228.86 → 277.89** of 309; list **237.34 → 249.95** |
| `operator-notifications` | **73.78 → 77.98** × 5 | 14 → 17 | widest **269.06** of 309; lists **249.95 / 163.97** |
| `notifications-loading` | **64** × 3, unchanged | — | the skeleton is `<div>`s with no `__title`, so it does not follow either way; the gap it stands short by goes **9.78 → 13.98**, back to the inherited figure it carried before rev 213 |

**Standards, measured rather than asserted.** `HIG · Typography` puts SF Text below 20pt and asks
**11pt** as the floor — 17 sits inside both. `HIG · 44pt` on the **shortest** row the component now
has, **341 × 55.80**: ✓ **127%** of the 44pt height, **19,028px² = 9.8×** the 44 × 44 area;
`WCAG 2.5.8` ✓ **2.33×**. `WCAG 1.4.3` is not moved by a size change — `--ink` on `--card` stays
**14.37:1** and nothing here leans on the 3:1 large-text exemption. `WCAG 1.4.4` holds: px text
still zooms to 200%. `WCAG 2.4.4` is untouched — the accessible name is still the title alone.
**Every `.dr-main` reports `scrollHeight == clientHeight` at 17**, so no screen starts scrolling for
this.

**And one thing rev 213 recorded as a cost is paid back.** Where the card carries a description the
pair was **14/600 over 13/400** and the hierarchy rested on weight and colour alone; at 17 the size
gap is back, and `--sp-within` **4** returns to being what 2026-08-12 set it for — the gap the 16px
inset asks for.

### The description leaves the cards a person taps (`.dr-choice__desc`, rev 216)

**The designer, against the built `role-select`: «видали підзаголовок».** With rev 209 having taken
the same line off `support`'s three triage cards, that is now **every choice card in the product
that is a navigation fork**. The two lines that left:

- *Order delivery, aerial photo/video or inspection — a verified operator handles it.*
- *You're a certified drone operator — take jobs and get paid.*

**Rev 209's rule is overruled, not quietly retired.** It read: a card takes a description where the
destination is not self-evident from the words — and it named `role-select` as the case that
qualified, since a role's consequences are not in the words. She has decided the other way on that
same pair, so the rule is now **a choice card a person taps is a title**. `.dr-choice__desc` stays
declared and has **11 live instances**, every one an **alert row** on `notifications` /
`operator-notifications`, where the second line is which order it belongs to and when it arrived —
a log's proof (`voice.md` **P2**), not a fork's explanation.

**Measured on `role-select` at 375 × 812.** Body **82.4 / 64.2 → 23.8** (the title's line box
alone); cards **114.4 / 96.2 → 76 × 2**; list **218.6 → 160**, **−26.8%**. `main` **655.6** with a
scroll height of **656** before and after — the screen did not scroll and still does not — and
horizontal overrun is **0**.

**With one line of text the well is the floor again**, which is the whole reason rev 215's step now
shows: 44 + 32 of padding = **76**, against a 23.8 body. The two cards, which have never been the
same height, are now identical — **and the row is now immune to the title size**, since neither 17
nor 14 reaches 76, so rev 213 and rev 217 both leave it where it is.

**Standards.** `WCAG 2.4.4 Link Purpose (In Context)` is the criterion that moves, because the
description sat **inside** the `<a>` and was part of the link's accessible name. Verified in the DOM:
the names are now **«I need a service done»** and **«I provide services»**, each stating its own
purpose under a display that asks *How will you use DRON?* ✓ `WCAG 4.1.2` untouched — role from the
`<a href>`, name from the title. `HIG · 44pt` and `WCAG 2.5.8` on the smallest row, **341.4 × 76**:
✓ **173%** of the 44pt height, **25,946px² = 13.4×** the 44 × 44 area, **3.17×** the 24px minimum.
`WCAG 1.4.3` is not engaged by a removal; the 13/400 `--slate` line that left was **5.95:1** and
passing when it left.

**The cost, recorded as a cost.** *What you can order* and *who does it* were only written in the
lines that left. **One of the two survives one tap later and one does not:**
`onboarding-client`'s first slide reads *A verified operator* / *DRON assigns the nearest certified,
insured operator. You don't choose or guess.* — so the trust proof (`RJ-C1`, the highest single
drop-off in the CJM) arrives on the next screen. The **service list** — delivery, aerial photo/video,
inspection — appears nowhere in client onboarding, so it is gone from the entry flow until the
services list itself. On the operator side both halves survive: *Jobs come to you* and *Get paid
automatically / Earnings land within 30 min of client confirmation.*

### The alert log's list row (`.dr-choice` on `notifications`)

**No new component.** The log's rows are `.dr-choice` — the kit's tappable list row — with the
`__title` / `__desc` pair. Since rev 216 these eleven rows are the **only** place `__desc` is drawn:
`role-select` and `support` are title-only. Measured on the build: row **73.78px** tall
(`HIG · 44pt` ✓ **177%**, `WCAG 2.5.8` ✓ **3.25×**), `--card` ground at `--r-card` **16px**, title
17/400 (600 until rev 247) `--ink` on `--card` **14.37:1**, description 13 `--slate` on `--card` **5.95:1**.
**The row made a round trip on 2026-09-03**: rev 213 stepped the shared `__title` 17 → 14 and every
line box under it lost **4.2px** (**77.98 → 73.78**, lists of six / five **249.95 → 237.34**), and
rev 221 put both back. No title on either log wrapped at either size — the widest,
*Your photo and video set is ready*, is **277.89** of a **309px** measure — so the eleven rows read
smaller for two revisions and now read as they did. Contrast is untouched throughout: a size change
moves no ratio, and neither pair was ever leaning on the 3:1 large-text exemption.

**`__desc` is spent here under rev 209's own rule.** That revision made the description optional —
*"a choice card is a TITLE, and it takes a description only where the destination is not
self-evident from the words"*. Which order an alert belongs to, and when it arrived, are not in the
title and cannot be; the second line is the row's proof (`voice.md` **P2**), not decoration.

**The group heading is `.dr-sect`, and this is its first spend.** The rung was cut on 2026-08-15
for `account-edit`'s Documents zone and then **declared and applied on 0 of 80 pages** — DESIGN.md
and `ui/kit.css` both recorded it as open and hers. It lands here: 13/600 `--slate` on `--page`,
**6.62:1**, written as `<h2>` so `WCAG 1.3.1` gets the grouping programmatically.

**The headings are DAYS, since rev 218 — `Today` · `Yesterday` · `d MMMM`.** They were
**New** / **Earlier** until the designer asked for relative dates against the built
`operator-notifications`. `HIG · Lists and tables` gives a recent date relatively and an absolute
date past that; the built log had **no *Yesterday* at all** and jumped *Today* → *28 Jun*, so a
two-day-old alert was formatted like a sixty-seven-day-old one. The absolute step is a **format,
not a string**: `d MMMM`, day-first for UA/EU, month spelled out.

**Unread is still carried by a word and not by a hue — the word moved to the row.**
`.dr-chip--unread`, reading **New**: **the Available badge's pair, `--green-wash` behind `--ink`,
14.75:1** at 11/600 — `WCAG 1.4.3` ✓ at **3.28×** the 4.5 floor. **Since rev 243, on the designer's
word** (*«зроби бейджі салатові … Зроби такий ж»*, pointing at `operator-listings`' Available badge);
from rev 218 until then it was the base chip's `--media` ground with `--ink`, 13.33:1. It is a
third selector on the one declaration `.dr-chip--claim` and the Available badge already share, not
the pair restated. **No §0 rule bends:** the tint was already inside card UI — the Verified and
Insured claim chips wear it inside `.dr-op` — and the green budget does not count it. **0 px of
solid green added.** **No dot, on her word** (*«для new не потрібна крапка. Бо крапка то був
статус»*): the Available badge's dot is the availability status's own mark, one of three
shapes, and it does not travel with the colour. The
pill's edge is **1.03:1** on the card and is not what carries the state: unread is still the
**word**, so `WCAG 1.4.1` is no more engaged than it was as a heading. **What the move bought:** read-state and recency stopped being one axis — the operator's
*Documents approved* is unread **under Yesterday**, a pair of facts the two old headings could not
state together.

**`.dr-choice__head` is the title row that can carry a mark.** `display:flex`, `align-items:center`,
gap **8**; the title takes `flex:1; min-width:0`. Used by the two alert logs alone — every other
`.dr-choice` keeps `__title` as a direct child of `__body`. Centre, not baseline: the chip stands
**21.39** against the title's **23.8** line box, so it is the shorter of the two. **The mark costs
the row nothing** — an unread row and a read row are both **77.98** — so a group holding one of each
is not ragged.

**The chip's real cost is measure, and the budget is written down.** The pill and its gap take
**48.28** of the **309** text column, so a title carrying a mark is written to **260.72** at the
standard tier and **236.72** at the narrow one (`≤ 389px`, frame 351). Two strings were rephrased to
land inside it rather than truncated: *New job offer · Package delivery* → **Job offer · Package
delivery** (the chip already said *New*), and *Your documents are approved* → **Documents approved**
(250.77 against the narrow tier's 236.72). Measured after: **every title on both logs is one line at
both tiers**, and every row is **77.98**. **That budget is superseded at rev 244, and the claim was
already stale before it:** re-measured on 2026-09-14, four alert titles stood on two lines at the
narrow tier (380 viewport) with no arrow on the row. The arrow then takes **36** more at the standard
tier, so a marked title is written to **225.12** there (273.4 − 48.28), and four titles wrap at the
standard tier too — listed under *The choice card carries the arrow again*. **Restored at rev 245:**
the alert rows carry no arrow, so a marked title is written to **260.72** again, and re-measured the
same day every title on both logs is one line in the 375 frame, at a 380 viewport and at a 375
viewport. The narrow-tier wrap reported above did not reproduce; no cause is claimed.

**Spacing is a break now, not a seam.** Measured: **8** within a group (`.dr-list--snug`), **12**
under the heading (`--sp-snug`), **28** between groups — `.dr-log`, a flex column spending
`--sp-list`, because `.dr-main`'s generic **12** made a date break speak no louder than any other
gap on the page (12 : 8 = **1.5:1**). **28 : 8 = 3.5:1**, the designer's own pick with 20
(`--sp-group`, 2.5:1) and 24 (`--sp-24`, 3:1) drawn beside it. No rung is minted. The narrow tier
takes it to **22**. **The heading's own gap is on its third value and the last one is hers:** 0 as
first built, **4** (`--sp-within`) at rev 214, **12** at rev 222 — *«improve spases between titles
and cards»* — because 4 sat tighter than the **8** the cards spend between themselves, and a card's
top *edge* is a harder boundary than the gap between two of them. 8 (3.5:1), 12 (2.33:1) and keeping
4 (7:1) were drawn and all three conform; 12 leaves the break **2.33:1** over the bind — **1.83:1**
at the narrow tier, where `--sp-list` steps to 22 and `--sp-snug` does not step, reported and not
re-cut — and each group grows exactly **8px**, four groups per log, **+32** a page. `HIG · Layout`
prescribes the direction and not a number; no WCAG criterion is engaged, `1.3.1` being carried by
`<section aria-labelledby>` + `<h2>` throughout.

## Sources

- **[`concept/concept.md`](concept/concept.md)** — the single source of truth for the visual
  language: §0 Designer's Taste and anti-references, §0.1 Attributes, §0.2 the icon set, §1–§3 the
  sources and grafts, §4 the token seed, §5 direction 02 «Studio» as chosen, §6 the imagery
  library, and the change log that records every revision including the ones tried and reverted.
- **[`concept/concept.html`](concept/concept.html)** — the live testbed: every token, component and
  image at production size with its contrast measured on the page.
- **[`CLAUDE.md`](CLAUDE.md)** — project brief, design standards, and the standing HIG + WCAG
  conformance check.
- **[`voice.md`](voice.md)** and **[`microcopy.md`](microcopy.md)** — every product string in this
  system is written and checked against them.
- **[`wireframes/_conventions.md`](wireframes/_conventions.md)** and
  **[`wireframes/_screens.md`](wireframes/_screens.md)** — the wireframe contract and the state
  matrix that decides which screens and states exist at all.

The ten files this document was extracted from: `wireframes/order-history.html` · `-empty` ·
`-loading` · `wireframes/tracking.html` · `-empty` · `-error` · `-loading` ·
`wireframes/delivery.html` · `-error` · `-loading`.
