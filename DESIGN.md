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
  green-wash: "#E7F0D2"
  warn: "#E4A11B"
  warn-ink: "#7A5200"
  warn-wash: "#F6E7C4"
  danger: "#C4462A"
  danger-ink: "#9A3115"
  danger-wash: "#F2D8CF"
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
  list: "28px"
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
    padding: "20px"
  card-compact:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "16px"
  row-panel:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.card}"
    padding: "2px 16px"
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

Extracted from the ten painted product surfaces and verified by computed style in a browser,
2026-08-01:

| Family | Files | `<style>` block |
|---|---|---|
| Order history | `order-history` · `-empty` · `-loading` | one per state |
| Live tracking | `tracking` · `-empty` · `-error` · `-loading` | byte-identical ×4 (13 224 chars) |
| Delivery confirmation | `delivery` · `-error` · `-loading` | byte-identical ×3 (13 042 chars) |

The layer applies to the phone frame only (`.wf-frame`, 375 × 812, `--r-panel` 22px, 1px `--line`
border). The wireframe annotation sidebar keeps its own chrome and is not part of the system.

**Key characteristics:**

- **Four painted surfaces, one warm ramp.** Page `#F7F5F2` → card `#ECE9E4` → media `#E4E1DA` →
  secondary button `#D6D2C9`. Every step is warm; there is no white and no black in the palette
  (`#FFFFFF` and `#000000` appear nowhere on a product surface).
- **Two inks.** `#1A1A1A` and `#5A5751`. Every rendered string on all ten pages is one of the two.
- **One accent, fill only.** `#9BCF4A` is a fill or a tint. It is never a text colour and never an
  icon stroke — measured, it is 1.69:1 on the page and 1.52:1 on the card.
- **Measured green budget:** solid green covers **4.43% / 5.09% / 4.71%** of the frame on
  `order-history` / `tracking` / `delivery`, and the primary CTA is 81–100% of that area.
- **Flat.** No card and no media surface casts a shadow on any of the ten pages. One shadow is
  spent in the whole system: `--sh-sm` under the green primary.
- **One icon system.** 98 SVGs across the ten pages, all `viewBox="0 0 24 24"`, all
  `stroke-width="1.7"`, all `fill="none"`, all `currentColor`.
- **One font stack**, declared once in `_wireframe.css`. No page declares a second UI family.
- **Ten type sizes**, all in use: 22 · 20 · 17 · 15 · 14 · 13 · 12.5 · 12 · 11 · 10.5.
- **Six radii plus circles.** `10` · `12` · `13` · `16` · `22` · `999`, and `50%`.
- **Zero text-contrast failures.** Lowest measured text pair is 4.77:1 (AA needs 4.5:1).

## Colors

Declared as custom properties on `.wf-frame`. `--warn`, `--danger` and `--r-input` are declared
and applied to nothing — they are recorded rungs, not live values (`var(--warn)` and
`var(--danger)` each appear 0 times across the ten pages).

### Primary

- **`--green` Signal Green** (`#9BCF4A`) — the single accent. Fill only: the primary button, the
  walked progress node, the live status disc. Charcoal sits on it at **9.46:1**. As a foreground
  it is 1.69:1 on the page and 1.52:1 on the card, so it is never text and never a stroke.
- **`--on-green`** (`#1A1A1A`) — the only colour permitted on a green fill. Never white: white on
  `#9BCF4A` is 1.84:1.
- **`--green-wash`** (`#E7F0D2`) — the one green tint. Carries the selected tab, the verified
  badge, and the delivered / waiting milestone marks. Charcoal on it is **14.75:1**. Against the
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
  settled status disc.
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

Each family is a **wash carrying its own ink**. The raw hue is declared but never drawn, because
it cannot carry a mark: `--warn` on the card is 1.84:1 and `--danger` reaches only 4.07:1.

- **`--warn-wash` / `--warn-ink`** (`#F6E7C4` / `#7A5200`) — ETA slipping. `tracking-empty`.
- **`--danger-wash` / `--danger-ink`** (`#F2D8CF` / `#9A3115`) — signal lost, upload missing.
  `tracking-error`, `delivery-error`.

### Measured contrast

Every pair carried on a product surface, verified in the browser.

| Foreground | Ground | Ratio | Where |
|---|---|---|---|
| `--ink` | `--page` | 15.99:1 | nav-bar title, focus ring |
| `--ink` | `--inset` | 15.29:1 | route place names |
| `--ink` | `--green-wash` | 14.75:1 | selected tab, verified badge, milestone marks |
| `--ink` | `--card` | 14.37:1 | card titles, values |
| `--ink` | `--media` | 13.33:1 | glyphs in a well |
| `--ink` | `--btn2` | 11.54:1 | secondary button, settled status check |
| `--ink` | `--green` | 9.46:1 | primary button label, walked node glyph |
| `--slate` | `--page` | 6.62:1 | lead copy, unselected tabs |
| `--slate` | `--inset` | 6.33:1 | From / To labels |
| `--danger-ink` | `--card` | 6.14:1 | — |
| `--slate` | `--card` | 5.95:1 | keys, dates, ratings, body |
| `--warn-ink` | `--card` | 5.72:1 | — |
| `--warn-ink` | `--warn-wash` | 5.65:1 | late-notice mark |
| `--slate` | `--media` | 5.51:1 | muted chips, upload glyph |
| `--danger-ink` | `--danger-wash` | 5.49:1 | tracking-lost, photo-missing marks |
| `--slate` | `--btn2` | 4.77:1 | disabled label |

**Non-text, below 3:1, each accepted for a stated reason:**

| Pair | Ratio | Why it stands |
|---|---|---|
| `--green` live status disc on `--card` | 1.52:1 | Never the sole carrier: the same card is the only one with a progress rail, an ETA chip and the green CTA, and the disc's accessible name says "In progress". |
| `--line` hairline on `--card` | 1.21:1 | A decorative surface edge — not text (1.4.3), not a control or state indicator (1.4.11). |
| `--media` on `--page` | 1.20:1 | Same. |
| `--card` on `--page` | 1.11:1 | Same. |
| `--green-wash` on `--page` | 1.085:1 | Same; the selected state also moves the ink `--slate` → `--ink`. |
| `--danger-ink` at `opacity .55` on `--danger-wash` | 2.43:1 | The lost-signal glyph, where the fade *is* the semantic. It sits in an `aria-hidden` well and the meaning is carried by the visible title. **Switch to `.70` (3.20:1) if the glyph is ever made load-bearing.** |

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
| `title` | 17 | 600 | 23.8 (1.4) | −0.01em | nav-bar title, alert title |
| `heading` | 15 | 600 | 18 (1.2) | — | card title, operator name |
| `body` | 14 | 400 | 18.2 (1.3) | — | place names |
| `body-sm` | 13 | 400 | 18.2 (1.4) | — | keys |
| `meta` | 12.5 | 400 | 15 (1.2) | — | dates |
| `caption` | 12 | 600 | 16.8 (1.4) | — | chips, badges |
| `micro` | 11 | 600 | 15.4 (1.4) | .09em | mono zone labels |
| `micro-sm` | 10.5 | 400 | 14.7 (1.4) | — | milestone labels under a rail |

**Leading is 1.4 by inheritance; a step overrides it only where the box demands it.** The frame
inherits `font-size:15px / line-height:1.4` from `_wireframe.css`, and that is what a step renders
at unless it declares otherwise. Measured departures, and their reason:

| Size | Leading | Element |
|---|---|---|
| 20 | 1.0 | the price — a figure has no descender line to protect |
| 15 | 1.2 | card title, operator name — a one-line box |
| 15 | 1.55 | `.lead` — a paragraph |
| 14 | 1.3 | place name in the route strip |
| 13 | 1.5 | `.msg-body` — a paragraph |
| 12.5 | 1.2 | card date · 1.4 on the operator rating |

**One size, several roles.** 15px is `heading` at 600/1.2, the button label at 600/1.4, the `.kv`
value at 600/1.4 tabular, and `.lead` at 400/1.55. 11px is mono-600 for zone and route labels,
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

**Content column.** `main` takes `padding:16px` and `gap:16px`. Usable width 341px at a 375 frame
(375 − 2 border − 32 padding). Inside a 20px-inset card, 286.2px.

**Spacing scale — base 4, not 8.**

| Step | Use |
|---|---|
| 4 | within a group — title to date |
| 8 | between sibling icon actions |
| 12 | card-top gap, message-block gap, `.stack` gap |
| 16 | screen padding and gap; compact card inset; inset-strip padding |
| 20 | between groups inside a list card, and that card's own inset |
| 28 | between cards — always greater than any interval inside one |
| 32 | bottom inset of a card whose last element is a primary button |

`.kv` rows take `13px 0`; the action bar takes `12px 16px 24px`; the tab bar `6px 8px 4px`. The
message block is `22px 18px` on `tracking` and `delivery`, and `16px 16px 32px` on
`order-history-empty`, whose last element is a CTA.

**Two card insets, both documented.** 20px on `order-history` list cards, 16px on the operator,
details and message cards. Unifying them is deferred: the operator card's trust-chip row cannot
pay the extra 4px.

**Responsive.** One breakpoint, `max-width: 389px`, on `order-history` only — the family with a
fixed-width media box to protect. Card inset 20 → 16, group gap 20 → 18, list gap 28 → 22,
card-top gap 16 → 12, drone box 96 × 72 → 68 × 52, route padding 16 → 14. The skeleton page steps
identically, so the loading and loaded lists stay the same height at both tiers.

**Touch targets.** 44px minimum, met by `min-height` rather than `height` — a button is a flex
item in a scrolling column, and a fixed height gets shrunk below the target. Circular icon actions
are 44 × 44; tab targets measure 86.3 × 50.

**No-reflow contract.** A skeleton measures its loaded counterpart: the `order-history` skeleton
card is 263.0px against the delivered card's 263.6px; the `delivery` photo skeleton is 341 × 180
against a photo of 341 × 180.

### Named rules

**The Between-Beats-Within Rule.** The gap between two cards (28) is always larger than any gap
inside one (≤20), so proximity groups in the right direction without a border or a shadow.

**The Skeleton-Measures-The-Load Rule.** A loading block is the size of the thing it waits for. A
skeleton is a claim about the loaded screen, so it expires when that screen changes treatment.

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
| `--r-media` | 13px | media wells, state marks, the delivery photo |
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
2 / 4 / 8 scale.

**The Cut-By-The-Parent Rule.** A full-bleed child is square and the parent's `overflow:hidden`
gives it the corner. It never restates the parent's radius.

## Components

### Buttons

- **Shape:** rounded rect, `--r-btn` 12px. Not a pill — this language is Fauna, not Monarch.
- **Height:** `min-height:44px`, never a fixed height. Padding `0 16px` on every variant.
- **Type:** 15/600, gap 8 to a leading glyph.
- **Primary:** `--green` fill, `--on-green` label (9.46:1), `--sh-sm`. Hover
  `filter: brightness(1.03)`; active `translateY(1px) scale(.99)`.
- **Secondary:** `--btn2` fill, `--ink` label (11.54:1), no shadow. Hover → `--media`.
- **Block:** `width:100%`. The default in an action bar and at the foot of a card.
- **Disabled:** `--btn2` fill with a `--slate` label — **4.77:1**, the secondary button's own pair.
  It is built, not dimmed: blanket opacity would take charcoal-on-green to 2.35:1. No
  `--disabled-*` token is declared on these ten pages; the pair arrives through the token remap,
  where `_wireframe.css`'s `.btn:disabled` reads `--wf-fill` and `--wf-muted` and the frame points
  those at `--btn2` and `--slate`.
- **Focus:** `2.5px solid var(--ink)`, `outline-offset:2px`.

### Circular icon action

44 × 44, `50%`, `--btn2` fill, `--ink` glyph at 20px, hover → `--media`, `z-index:2` so it clears
a full-card link overlay. Carries `aria-label` — the icon is the only content.

### Cards

- **Surface:** `--card`, `--r-card` 16px, no border, no shadow.
- **Inset:** 20px on a list card, 16px on operator / details / message cards, 32px at the bottom
  where the last element is a primary button.
- **Internal rhythm:** 20px between groups, 4/8 within a group.
- **Whole-card link:** an absolutely-positioned `.card-link` covering the card, with inner controls
  lifted above it.
- **Focus, keyboard only:** the inherited `:focus-within` ring is switched off and re-hung on
  `:has(> .card-link:focus-visible)`, so a pointer click does not flash an outline and a focused
  inner button does not double-ring the card.
- **No hover lift.** Hover is desktop-only and the card is flat at rest.

### Row panel (`.kv`)

`--card`, `--r-card`, padding `2px 16px`. Each row `13px 0` with a `--line` bottom hairline. Key
`--slate` 13/400; value `--ink` 15/600 tabular, right-aligned. One component, two screens — the
tracking ETA panel and the delivery details panel are the same two rules.

### Inset strip (`.ohl-route`)

`--inset` `#F2F0EC`, `--r-btn` 12px, padding 16. From-stop left, To-stop right-aligned, a 26px
`--media` direction chip between them. The chip is neutral, not green: green is not spent inside
card UI. Present on every order card, including delivered ones.

### Chips and badges

`--r-pill`, padding `5px 10px`, 12/600, **14px** leading glyph, gap 6.

**One glyph size, settled 2026-08-02.** The build drew 13px in a badge (`.badge`) and 14px in the
ETA pill (`.ohl-eta`) — one component with two values, against the One-Component-One-Value rule.
The designer's call is **14 everywhere**.

- **Live / claim:** `--green-wash` + `--ink` — *Verified by DRON*, the selected tab.
- **Muted / fact:** `--media` + `--slate` — *Insured*, the ETA chip.

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

### Media

- **Cutout (transparent PNG):** `object-fit: contain`, **no ground** — in the product the cutout
  sits straight on the card. The box is a measuring frame only.
- **Photograph:** `object-fit: cover`, edge to edge inside `--r-media`, no padding — a photograph
  *is* the surface. Never inset on a `--media` ground; a floated photo reads as a sticker.
- **Map:** `--r-card`, `center/cover`, native 1.99 aspect, `--media` as the pre-load ground.

### Navigation

- **Nav bar:** **56px**, `--page`, `--line` bottom hairline, title as `<h1>` 17/600/−0.01em
  `--ink`. The height was not stated here before and is measured on all ten painted pages.
- **Tab bar:** `--page`, `--line` top hairline, 60px, four tabs, 22px icons over an 11/600 label,
  30px home indicator in `--ink`.
- **Selected tab:** `--green-wash` pill at `--r-card`, label and icon `--ink` (14.75:1).
  Unselected: transparent, `--slate` (6.62:1). Two independent signals — a fill appears and the ink
  darkens — because the accent cannot be the label colour at 1.69:1.
- **Action bar:** `--page`, `--line` top, padding `12px 16px 24px`, gap 8, full-width buttons.

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

### Motion

| Name | Duration | Easing | What moves |
|---|---|---|---|
| button | .15s / .12s | default | `filter`, `background`, `transform` |
| `oh-ping` | 1.8s | `cubic-bezier(.22,.61,.36,1)` | a ring leaving a live status disc |
| `skPulse` | 1.4s | `ease-in-out` | skeleton opacity 1 → .5 |
| `skUp` | 1.6s | `cubic-bezier(.22,.61,.36,1)` | the arrow leaving an upload tray |

`skUp` moves the arrow only — the tray holds still, because what the screen waits on is a file
going *up*. It rests **visible** at 0% and 100%, so a dropped animation leaves a legible icon.
Every loop above is `animation: none` under `prefers-reduced-motion: reduce`.

### Named rules

**The One-Component-One-Value Rule.** The same component drawn on two screens carries the same
numbers. The tracking ETA panel and the delivery details panel are one component; the order card's
node and the tracking timeline's node are one node.

**The Built-Not-Dimmed Rule.** A disabled or inactive control is built from its own colour pair.
Blanket opacity is never the mechanism — it produces a ratio nobody measured.

**The Shape-And-Behaviour Rule.** Two states never differ by colour alone. A dot pings and a check
sits; a clock is not a check; each keeps a text accessible name.

## Imagery

Real renders and photographs, never illustration and never a gradient. Every image on the ten
painted pages, with what it is doing there:

| Asset | Surface | Native | Served | Box | Treatment |
|---|---|---|---|---|---|
| `drones/thumbs/drone-08.png` | `order-history` — the two package-delivery cards | 1024² | 256² | 96 × 72 frame, drawn 64 × 64 | cutout, `contain`, no ground |
| `drones/thumbs/drone-flight-camera.png` | `order-history` — aerial photo & video | 392 × 291 | 256² | same | same |
| `drones/thumbs/drone-flight-clean.png` | `order-history` — roof inspection | 409 × 174 | 256² | same | same |
| `people/thumbs/operator.png` | `tracking` · `-empty` · `-error` — operator card | 595 × 702 | 300 × 354 | 117 × 138.1 | cutout, `cover`, full-bleed left panel, no ground |
| `scenes/thumbs/delivered-at-door.jpg` | `delivery` — proof of delivery | 1100 × 880 | 652 × 522 | 341 × 180 | photograph, `cover`, edge to edge |
| `map/live-map.jpg` | `tracking` · `-empty` · `-error` — live map | 1100 × 552 | — | 326 × 164 | photograph, `center/cover`, native 1.99 |
| inline base64 JPEG | `order-history-empty` — banner | — | — | 150px tall | `background-size: auto 78%`, `center 16px` |

**Why these units.** Each drone is the machine that did *that* job, so the payload names the
service: a lime cargo box for delivery, a gimbal camera for aerial work, an empty airframe for
inspection. In the fleet set every unit carries the same lime box, so a mixed list would read as
three deliveries — which is why the two service cards take in-flight cutouts and the two delivery
cards take a fleet render. The screen mixes registers deliberately, and pays a register seam for it.

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
- **Do** keep solid green at or under ~5% of the frame, with the primary CTA as most of it.
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
- **Don't** introduce a darkened green as an ink. `--green-ink #3F5B18` was deleted for exactly
  this reason: a darkened accent is still the accent used as text.
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
