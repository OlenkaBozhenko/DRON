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
  it is 1.69:1 on the page and 1.52:1 on the card, so it is never text and never a stroke —
  and, since 2026-08-15 (rev 86), with **no exception at all**: the mode picker's
  current-row checkmark wore green from rev 50 and is now `--ink` at **14.37:1**, so the
  rule stands unqualified and that row has left the below-3:1 table.
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
- **`--trust-wash` / `--trust-ink`** (`#D8E6F2` / `#2A5C7D`) — a credential the platform has
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
| `--ink` | `--green-wash` | 14.75:1 | selected tab, verified badge, milestone marks |
| `--ink` | `--card` | 14.37:1 | card titles, values |
| `--ink` | `--media` | 13.33:1 | glyphs in a well |
| `--ink` | `--btn2` | 11.54:1 | secondary button, settled status check |
| `--ink` | `--green` | 9.46:1 | primary button label, walked node glyph |
| `--danger-ink` | `--page` | 6.83:1 | destructive text action (`account-photo` · Remove photo) |
| `--slate` | `--page` | 6.62:1 | lead copy, unselected tabs |
| `--slate` | `--inset` | 6.33:1 | From / To labels |
| `--danger-ink` | `--card` | 6.14:1 | field error text; the destructive action if it ever stands on a card |
| `--slate` | `--card` | 5.95:1 | keys, dates, ratings, body |
| `--warn-ink` | `--card` | 5.72:1 | — |
| `--warn-ink` | `--warn-wash` | 5.65:1 | late-notice mark |
| `--trust-ink` | `--trust-wash` | 5.65:1 | Insured badge — label and its checkmark |
| `--trust-ink` | `--card` | 5.93:1 | — |
| `--green-ink` | `--page` | 5.58:1 | text button (declared — rev 51 took its one spend) |
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
| 12 | card-top gap, message-block gap, `.stack` gap; between cards **where the list is one zone among several** (`.dr-list--snug`) |
| 16 | screen padding and gap; compact card inset; inset-strip padding |
| 20 | between groups inside a list card, and that card's own inset |
| 28 | between cards **where the list is the screen** — greater than any interval inside one |
| 32 | bottom inset of a card whose last element is a primary button |

**Two list rungs, chosen by what surrounds the list.** `.dr-list` is 28 and `.dr-list--snug` is 12,
and the choice is not taste — it is proximity read one level up. `main` separates whole zones by
**16**, so a list left at 28 puts *siblings further apart than strangers*: the two service cards on
`listings-filtered` sat 28 apart while the applied-filter row and the list itself sat 16 apart, and
the list stopped reading as one thing. Where the list **is** the screen — nothing above or below it
to compete — 28 is right, and it still clears the 20 inside a card. Where the list is **one zone
among several**, 12 is right: above the 4px rhythm inside a card, under the 16 between zones, so
the group clusters and the zones still separate. 28 in that position is the defect; 12 in the first
position would leave the list undifferentiated from its own card interiors.

`.kv` rows take `13px 0`; the action bar takes `12px 16px 24px`; the tab bar `6px 8px 4px`. The
message block is `22px 18px` on `tracking` and `delivery`, and `16px 16px 32px` on
`order-history-empty`, whose last element is a CTA.

**Two card insets, both documented.** 20px on `order-history` list cards, 16px on the operator,
details and message cards. Unifying them is deferred: the operator card's trust-chip row cannot
pay the extra 4px.

**Responsive.** One breakpoint, `max-width: 389px`, tuned for `order-history` — the family with a
fixed-width media box to protect — but declared on `:root`, so it reaches every page that uses the
stepped tokens. Card inset 20 → 16, group gap 20 → 18, list gap 28 → 22 (`--sp-list` only:
`--sp-snug` does not step, so a `.dr-list--snug` list holds 12 at both tiers),
card-top gap 16 → 12, drone box 96 × 72 → 68 × 52, route padding 16 → 14. The skeleton page steps
identically, so the loading and loaded lists stay the same height at both tiers.

**Touch targets.** 44px minimum, met by `min-height` rather than `height` — a button is a flex
item in a scrolling column, and a fixed height gets shrunk below the target. Circular icon actions
are 44 × 44; tab targets measure 86.3 × 50.

**No-reflow contract.** A skeleton measures its loaded counterpart: the `order-history` skeleton
card is 263.0px against the delivered card's 263.6px; the `delivery` photo skeleton is 341 × 180
against a photo of 341 × 180.

### Named rules

**The Between-Beats-Within Rule.** Proximity groups in the right direction without a border or a
shadow — but the rule holds **per level**, not as one number. Where the list *is* the screen, the
gap between two cards (28) is larger than any gap inside one (≤20). Where the list is one zone
among several, the level above it takes over: `main` separates zones by 16, so the cards must close
to 12 or they read as further apart than the zones themselves. 12 is still above the 4px rhythm
inside a card, and the card's interior stays bounded by its drawn edge — `--card` on `--page` at
1.11:1 plus the 16px radius — not by whitespace it has to win.

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
2 / 4 / 8 scale. Two of those three are cut as rungs and both are spent: **`--r-detail` 4** on the
skeleton bars, and **`--r-detail-lg` 8** on the checkbox, added 2026-08-15 (rev 92) when the designer
chose to soften it. The six-radius ramp above them does not move.

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
- **Text:** transparent, `--green-ink` label — **5.58:1** on the page, **5.01:1** on the card;
  hover and press darken to `--ink` with the kit's 1px dip, the tertiary's own grammar. Added
  2026-08-12 (rev 49) for `listings-filtered`'s Clear all; rev 51 replaced that control with
  the leading `All` chip, so the variant is currently spent nowhere. The slate tertiary stays
  the skip/cancel voice.
- **Danger:** transparent, `--danger-ink` label — **6.83:1** on the page, **6.14:1** on the card;
  hover and press darken to `--ink` with the same 1px dip, so the three text rungs differ in ink and
  in nothing else. Added 2026-08-16 (rev 128) for `account-photo`'s *Remove photo*, and it is
  `--danger-ink`'s **first spend as a control** — the family had been declared since rev 25 and drawn
  only as `.dr-field__err` text and the `.dr-mark--danger` alert. `HIG · Action sheets` asks a
  destructive choice to read as destructive; `WCAG 1.4.1` is untouched because the verb is in the
  label, not in the colour. `--danger` (`#C4462A`, 4.07:1) stays declared and undrawn — it is a
  **fill** rung, and no surface has asked to be red. Like `--tertiary` and `--text`, it stays out of
  the action bar: the two filled buttons on the bottom edge are *Save photo* and *Cancel*, and Remove
  is a body action in its own zone.
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

**The label column is `--sz-rowkey` 140 — the same axis as the read-only row** (rev 114, 2026-08-16,
on the designer's word). It was `flex:1`, a 1:1 split, which held only where every row in a group had
the same anatomy: on `account-edit` the two picker rows carry a chevron and the input row does not, so
`flex:1` left **152.5** on one and **165.5** on the other and the card read down three different left
edges. Fixed, every value in the product — read, typed or chosen — starts **150** from its row's left
edge (**166** from the frame where the group keeps its card). Typed track **165.5 → 191**. The widest
field label is *Payment method* **135.64**, then *Drop-off address* **134.47**, both inside 140, so no
label wraps and every row holds **44** (`HIG · 44pt` ✓, `WCAG 2.5.8` ✓). `.dr-field--area` is
unaffected — its label has taken the full width since 2026-08-03.

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

**The row** is `.dr-field--action`: a real `<button>`, `aria-haspopup="dialog"` + `aria-expanded`,
carrying `chevron.forward` — one mark for both halves, because both say the same true thing, that
the list arrives from elsewhere. It replaced a `<span role="button">` that opened nothing and a
text-glyph **▾** that was not in the icon system.

**The trailing chevron is pinned by the shrink order, not by a number:** label `flex 0 0
var(--sz-rowkey)`, value `flex 1` with `min-width:0` and the ellipsis, chevron `flex:none`, row
**`flex-wrap: nowrap`**. The `nowrap` is load-bearing — measured, a 66-character value took the wrap
instead of the ellipsis and the row went **44 → 78** with the chevron **325px** in from the edge.
Measured after: both rows **44 × 341**, chevron right edge flush with the row's, gap to edge **0**,
on a 14-character value and a 56-character one alike; no horizontal overflow.

**The value reads from its left edge, not from the chevron** — rev 114, 2026-08-16. It was `label
flex 0 0 auto` + `value flex 0 1 auto` with `margin-left:auto`, which put the value's *left* edge
wherever its string ended: on `account-edit`'s card *Visa •••• 4921* stood at **192.84** and
*English* at **244.86** beside a typed value at **168**. The label now takes the same `--sz-rowkey`
**140** column as every other row, so the picker value starts at **150** like the typed one and the
read-only one, and the slack sits after the value instead of before it. **The cost, recorded:**
`report-issue`'s *Poor quality — not as expected* measures **231.95** against a **165** track and
now takes the ellipsis; it fit its old track by 7px.

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

### Circular icon action

44 × 44, `50%`, `--btn2` fill, `--ink` glyph at 20px, hover → `--media`, `z-index:2` so it clears
a full-card link overlay. Carries `aria-label` — the icon is the only content.

### Avatar edit (`.dr-avatar-edit`)

The pencil badge on a profile photo, added 2026-08-16 (rev 128) on the designer's word. **The link
wraps the picture and the badge together**, so the target is the whole avatar — **56 × 56**, 127% of
`HIG · 44pt` and 2.3× `WCAG 2.5.8` — and not the 20pt disc, which alone would be half the floor. The
badge is `aria-hidden`; the link carries the name.

- **Badge:** `--sz-avatar-badge` 20 × 20 at `right/bottom: −2px` — `.dr-count-badge`'s own offset,
  which puts the disc's centre **28.28** from a 28px radius, i.e. on the circle's edge at 45°.
- **Pair:** `--btn2` ground, `--ink` glyph — **11.54:1**, the circular icon action's own pair, so the
  two edit affordances on one card are one material. The disc is **1.25:1** on the card and is *not*
  the identifier: the glyph is, the way `.dr-upload`'s 1.08:1 well defers to its 32px mark.
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

### Cards

- **Surface:** `--card`, `--r-card` 16px, no border, no shadow.
- **Inset:** since 2026-08-15 (rev 88) the vertical inset is one rung above the horizontal on every
  card ground — **24 / 20** on a list card, **20 / 16** on operator and message cards, **8 / 16** on a
  row panel, and **8 / 0** on `.dr-disclosure`, the remaining full-bleed list, whose rows keep their
  own 16. 32px still at the bottom where the last element is a primary button.
- **`.dr-picks` is the one card with a single inset on all four sides — `16`** (rev 91). The 16 moved
  off the row and onto the card, so the row carries no padding of its own. Nothing shifts sideways:
  the label still begins 52px from the card's edge (`16 + --sz-box 24 + --sp-snug 12`), and
  `--pick-indent` is derived from the two remaining terms so the separator's leading edge follows.
  **The cost, recorded not corrected:** the separator now stops 16px short of the trailing edge,
  where `HIG · Lists and tables` runs it to that edge, and the row's hit area narrows 326 → 294px
  (× 44 tall — `WCAG 2.5.8` cleared ×12.25 and ×1.83). The designer was shown both readings on
  2026-08-15 and chose the literal one.
- **Measured on `listings-filters`, before → after (all three cards identical):** card padding
  `8px 0` → `16px`; row padding `0 16px` → `0`; card-edge to the first radio 16 / 18 → 16 / 26
  (left / top — the 8px difference is the row's own slack, not the card's); card-edge to the row box
  8 → 16 top and bottom; separator 52 from the leading edge in both, 0 → 16 short of the trailing
  edge; the Price card's foot below the `₴0 / ₴1,000+` labels 22 → 16.
- **Internal rhythm:** 20px between groups, 4/8 within a group.
- **Whole-card link:** an absolutely-positioned `.card-link` covering the card, with inner controls
  lifted above it.
- **Focus, keyboard only:** the inherited `:focus-within` ring is switched off and re-hung on
  `:has(> .card-link:focus-visible)`, so a pointer click does not flash an outline and a focused
  inner button does not double-ring the card.
- **No hover lift.** Hover is desktop-only and the card is flat at rest.

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
  own 16 and its separator runs from that inset to the **card's** trailing edge.
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

**Two columns on a fixed axis, both reading from the left** — the designer's call 2026-08-16, taken
from the editable card (`.dr-field`) in `account-edit`. The label column is `--sz-rowkey` **140px**,
sized on the widest key in the system (*First time as Operator*, **133.34**), so no label wraps; the
value takes the rest, **159px** on a 341 card, and every value on every screen starts at **x = 166**.
Gap `--sp-10`, not `--sp-snug`.

**The field row joined this column at rev 114** (2026-08-16), which is where the axis was copied from
in the first place: the reference card was still mixing a 1:1 split with two trailing picker values.
One column now serves read, typed and chosen alike — `--sz-rowkey` is the product's single value axis,
and *Payment method* **135.64** is its new widest key, still **4.36px** inside it.

Before: `justify-content: space-between` with `text-align: right`, so the value's **left** edge landed
wherever its string happened to end — measured across the 13 wireframes that carry it, **46 rows at
24 different x**, from 131.75 (`switch-role`) to 294.78 (`order-review`'s ₴90).

**One exception — `.dr-rows--money`.** A card whose values are *figures*, not facts, keeps the
trailing column: tabular numerals only line up on the last digit if the column is right-aligned, and
left they line up on the ₴ with ₴180 running 24px past ₴90. Key `flex: 1`, value `flex: none`. Spent
on `order-review`'s price breakdown and its loading state, nowhere else — `resolution`'s *Refund
issued ₴180* is a sentence and stays with the facts.

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

**What the axis costs, measured:** the value column is 159, and four strings are wider, so rows on two
lines go **3 → 5**. The two new ones are `switch-role`'s *Any time from Account* (172.45) and
`tracking-empty`'s *~15 min (running late)* (168.97). No frame changed height (812 on all 13); no page
scrolls sideways.

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
