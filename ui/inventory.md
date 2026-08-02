# UI Inventory — the DRON component kit

The component kit behind the whole product: **40 screens, both personas, painted and grayscale
alike.** This file is the source; [`ui/inventory.html`](inventory.html) and the published artifact
are rendered from it.

> **Live artifact:** https://claude.ai/code/artifact/b8f34fe2-1728-410d-9d72-28982190ae5e
> — every painted component live at production size, republished to the same URL on every change.

---

## Method

**Counted by screen, not by file.** `wireframes/` holds 84 HTML files, but `-empty`, `-error` and
`-loading` are *states* of a screen, not screens — the `_screens.md` matrix says so. Collapsing
them gives **40 screens**, and that is the denominator everywhere below.

**Class usage was read from inside the phone frame only** (`.wf-frame` onward), so the wireframe
annotation sidebar and the state switcher are excluded — they are not product.

**Out of scope, 2026-08-02:** the **operator job card** on `operator-listings`, with `.avatar` and
the kebab action that belong to it. It is neither painted nor hand-edited and is being reworked, so
counting it would inventory a draft. It comes back in when it is redone.

**Narrowed the same day.** This note first read "…and with it `.grouptab`, `.segment`" — the whole
screen. That was wider than the instruction, which was about the **card**. `.grouptab` and
`.segment` are separate controls that happen to share the screen, and they are now in the kit.

**Inclusion rule, set by the designer 2026-08-02:** a component earns a row in the kit by appearing
on **two screens or more**. That is what makes it a kit rather than a pile. Anything on exactly one
screen is collected in [§3 One-off](#3-one-off) and deliberately not pulled in.

**Status.** Three screens carry the Studio layer — `order-history`, `tracking`, `delivery`, with
their state pages. Their components are marked **painted**, and every value is read off computed
style in a browser, not off the stylesheet. The other 37 screens draw in the shared grayscale base
(`wireframes/_wireframe.css`); their components are marked **grayscale** and carry **no values**,
because a specimen would have to invent them. Those rows say what has to be decided instead.

| | |
|---|---|
| Screens | **40** (from 84 files) |
| Painted | **3** — order-history, tracking, delivery |
| In the kit | **53** |
| — carrying Studio values | **29** |
| — still grayscale | **24** |
| One-off (1 screen) | **9 blocks** (the operator job card excluded, see above) |

**Changed 2026-08-02:** 49 → 50 → 53. The checkbox and the radio were one row and are now two,
because they are two controls with two shapes and two meanings. The radio also moved **out of §3
One-off** — counted as a control rather than as the class name `.radio`, it stands on three screens.
Then the **segmented control**, the **in-page tabs** and the **switch** were added on the designer's
count of what was missing.

**The 2+ rule takes its first two exceptions, and they are named.** The segmented control and the
in-page tabs stand on **one screen each** — `operator-listings`. They are in the kit anyway, because
the rule exists to stop a kit becoming a pile, not to hide a control the system plainly needs; and a
segmented control is a system control by nature, whichever screen happens to draw it first. Their
counts are shown as **1 · 0**, unrounded, so the exception is visible rather than smoothed over.

**A correction to the scope note above.** The designer's instruction was to leave the **operator job
card** out while it is being reworked. That was widened here to the whole screen — `.grouptab`,
`.segment` and the rest — which she did not ask for. The job card stays out; its neighbours come in.

**The switch is counted at zero.** It earns a row by not existing: the question was asked, the 40
screens were counted, and the answer is that the product has no on/off switch and `HIG · Toggles`
says it should not have one. An absence that has been checked is a finding.

---

## 1. The kit

### 1.1 Frame & navigation — 9

Every system bar takes the page ground, so the chrome melts into the page and only a hairline
separates it. The most reused components in the product.

| Component | Classes | Screens | Status | Values / what to decide |
|---|---|---|---|---|
| **Nav bar** | `header.topbar`, `h1.title` | 40 · 3 painted | painted | **56px** — corrected 2026-08-02, this row said 44 and the ten painted pages measure **56** by computed style; ground `--page`; 1px `--line` rule; title 17/600/−.01em `--ink` — **15.99:1**. Title is an `<h1>`, not a span: one entry point per screen (1.3.1 / 2.4.6). |
| **Status bar** | `.statusbar`, `.sysph` | 40 · 3 | painted | 44px; glyphs 17px on the 24-grid, rendered stroke 1.20; `--ink`. |
| **Zone label** | `.zlabel`, `.act` | 39 · 3 | painted | mono 11/600, `.09em`, `--slate` — **6.62:1**; 1px `--line` bottom rule; a 30 × 2px `--green` tick at its left end. The one place the accent is a line, and it is a fill, not a stroke. |
| **Action bar** | `footer.actionbar` | 29 · 1 | painted | `--page`; 1px `--line` top; padding `12px 16px 24px`; gap 8; full-width buttons. Secondary above primary, so the thumb reaches the primary first. |
| **Tab bar** | `footer.tabbar`, `.tabs`, `.tab` | 12 · 3 | painted | 60 + 30px; tab `--r-card` 16, target 86 × 50; selected `--green-wash` + `--ink` **14.75:1**, rest transparent + `--slate` **6.62:1**; icons 22px, labels 11/600. HIG tints the selected label with the accent — `#9BCF4A` is 1.69:1, so the accent moves into the fill and the ink darkens with it: **two signals where the convention gives one**. Icons stay outline in both states, so the iOS filled-symbol convention is deliberately not used. |
| **In-page tabs** | `nav.groups`, `.grouptab` | 1 · 0 | **decided · not built** | A row of job groups above the list — *Incoming · 2*, *Active · 1*. **Painted 2026-08-02, and it takes the tab bar's values unchanged**, because it is the tab bar's problem: a row of places, one of them current. One selection pattern in the system, not two.

**Row** `--page`, 48px, 1px `--line` bottom — a separator inside a surface, not a boundary that identifies a control, so 1.4.11 does not reach it. **Unselected** transparent on the page, `--slate` 13/600 — **6.62:1**. **Selected** `--green-wash` `#E7F0D2` fill with an `--ink` label — **14.75:1**; `--r-pill`. The fill step is **1.085:1** against the page, which is small on its own — the ink going `--slate` → `--ink` is the second signal, and `concept.md` records that pairing as the answer to selection here: **two signals where the convention gives one.** Green arrives as a tint behind charcoal and never as the letters; the wash is not counted against the green budget at 1.085:1.

**The three faults are fixed, each by a rule the system already has.** (1) `HIG · 44pt`: the pill stays **32px visible** and the hit area is extended to **44** by a transparent `::after{inset:-6px 0}` — the same thing iOS does with its own 32pt controls, so the target conforms without thickening the row. (2) `WCAG 4.1.2`: the `<a href="#" aria-current>` becomes `role="tab"` in a `role="tablist"` with `aria-selected`, or radios like the segment beside it. A link cannot expose a tab set. (3) `HIG · Tab bars`: this screen runs the tab bar, these tabs **and** a segmented control at once. Painting does not fix that — **it is a structural call left open** and it belongs to the `operator-listings` rework. |
| **Home indicator** | `.home-indicator` | 12 · 3 | painted | 30px; bar 134 × 5 at `--r-pill`; `--ink`. |
| **Brand slot** | `.brand` | 18 · 3 | **filled · widened** | **Filled 2026-08-02, same day it was reserved; widened the same day from 8 screens to 18.** The designer supplied the mark from Figma (`YlGWlsWWjKSCxhONMzGG2F`, node `56:52`): a single-path quadcopter silhouette seen head-on, no wordmark. Saved trimmed to its ink as `assets/brand/dron-logo.svg` — `viewBox 0 85 257 86`, aspect **2.99 : 1**. Drawn as a CSS mask filled with `currentColor` rather than an embedded file, so it takes the surface's ink and cannot introduce a second colour. Rendered **60 × 20**, up from the 44 × 24 the placeholder held, because 3:1 artwork inside 44px would stand only 14.7px tall. `WCAG 1.4.11` asks 3:1 for a non-text graphic and it clears twice over: `#252525` on the `#FFFFFF` wireframe bar is **15.33 : 1** (5.1×), and on the three painted screens the mask takes `--ink` `#1A1A1A` against the `--page` `#F7F5F2` bar for **15.99 : 1** (5.3×) — no page overrides `.brand`, so the mark inherits each surface's own ink. It carries `role="img" aria-label="DRON"` on every screen, the same label everywhere (`WCAG 1.1.1`, `WCAG 3.2.4`). **Two shapes.** On the 8 entry and listing screens it stands alone. On the 10 **tab-root** screens it leads the bar and the screen's own title follows 8px later — the title's `padding-left:16px` comes off, because that inset stood in for the optical lead-in a back control would give and the mark now gives it; 8px is the gap `.who` already keeps from `.avatar` on `operator-listings`. Measured at the 375px preset before it was written: the tightest tab root is `order-confirmed` (title **127px**), leaving **148px** free after the mark and its gap — **0 of 23 files overflow**. |
| **Back button** | `.back` | 22 · 0 | grayscale | None of the three painted screens is a pushed screen, so the painted set has never drawn one. Needs a chevron on the 24-grid and a 44pt target — both settled elsewhere. Shows the title of the screen you return to (`‹ Order review`), never "Back to…" (`voice.md`). |

### 1.2 Actions — 9

One green control per screen. Everything else that can be tapped is warm grey — green is not spent
inside card UI. Height is a `min-height`, never fixed: a button is a flex item in a scrolling column
and a fixed height gets shrunk below the 44pt target.

| Component | Classes | Screens | Status | Values / what to decide |
|---|---|---|---|---|
| **Primary button** | `.btn-primary` | 35 · 3 | painted | `--green` fill, `--on-green` label — **9.46:1**; `--r-btn` 12; padding `0 16px`; `min-height` 44; `--sh-sm`, the only shadow spent in the system. Hover `brightness(1.03)`, active `translateY(1px) scale(.99)`. |
| **Secondary button** | `.btn-secondary` | 28 · 2 | painted | `--btn2` fill, `--ink` label — **11.54:1**; same geometry, no shadow; hover → `--media`. |
| **Block button** | `.btn-block` | 30 · 2 | painted | `width:100%`. The default in an action bar and at the foot of a card. Content column 341px at a 375 frame. |
| **Small button** | `.btn-sm` | 8 · 1 | painted | The in-card variant. Base is 32px; the painted card sets a **fixed** `height:44px` where §5 asks for `min-height`. Measured at exactly 44.0, so the HIG target is met and the mechanism is recorded rather than corrected. |
| **Disabled** | `.btn:disabled` | 37 · 3 | painted | `--btn2` + `--slate` — **4.77:1**, the system's contrast floor. Built, not dimmed: blanket opacity would take charcoal-on-green to 2.35:1. No `--disabled-*` token exists; the pair arrives through the token remap (`--wf-fill` / `--wf-muted`). |
| **Circular icon action** | `.sbi.grey` | 1 painted screen | painted · **the form** | 44 × 44, 50%, `--btn2`, glyph 20px `--ink` — **11.54:1**; hover → `--media`; `z-index:2` to clear the whole-card link. Carries its own `aria-label`. **Settled 2026-08-02: this is the shape of an icon-only button**, because it is the only one standing on a screen the designer painted. The two square variants on `listings` and `account` are drafts on unpainted screens and are decided when those screens are drawn. |
| **Tertiary button** | `.btn-tertiary` | 8 · 0 | grayscale | A borderless text action — skip, cancel, "not now". Needs a decision the painted set never faced: a 44pt target and a visible pressed state with no fill to change. |
| **Paired buttons** | `.row2` | 4 · 0 | grayscale | Two actions side by side in one action-bar row. The painted action bar **stacks** instead. Decide whether side-by-side survives: at 341px two targets in a row leave ~166px each — enough, but tight for a two-word label. |
| **Edit affordance** | `.op-edit`, `.ic-edit`, `.pencil` | 2 · 0 | grayscale | The pencil on the profile card, `account` and `operator-account` — **a draft**, same as the filter button: neither screen is painted or hand-edited. Three classes for one control, which is worth collapsing when it is drawn. |
| **Icon button** | `.icon-btn`, `.ic-filter` | 2 · 0 | grayscale | A square filter affordance beside the search field, on `listings` — **a draft**: that screen is neither painted nor hand-edited. Settled 2026-08-02 only in the negative: the circular action is the form of an icon-only button because it stands on a painted screen; what happens to this square is decided when `listings` is painted, not before. |

### 1.3 Content surfaces — 13

Flat, all of them. No card, panel, well, map or photograph casts a shadow — separation is a warm
tone step plus a radius, and every step is measured before it is used.

| Component | Classes | Screens | Status | Values / what to decide |
|---|---|---|---|---|
| **Message block** | `.msg-block`, `.msg-ph`, `.msg-title`, `.msg-body`, `.msg-actions` | 25 · 3 | painted | One component doing three jobs — **empty state**, **error banner**, **notice**. `--card`, `--r-card`, padding `22px 18px`, gap 12, centred. Mark 52px at `--r-media`; title 17/600; body 13/400 capped at 260px; actions gap 10. `role="alert"` on an error, `role="status"` on an empty state. Marks: neutral `--media`/`--slate` **5.51:1**, warn `--warn-wash`/`--warn-ink` **5.65:1**, danger `--danger-wash`/`--danger-ink` **5.49:1**. |
| **Empty-state banner** | `.msg-block` + image `.msg-ph` | 2 · 1 | painted | The same block with a render instead of a glyph. Padding `16px 16px 32px` — **32 under the button against 16 above it**, because an action wants more clearance from the card edge than the text rhythm above it; 32 is the 8-pt grid's next step. Banner 100% × 150px at `--r-media`, no ground, `background-blend-mode: multiply`, placed `auto 78%` / `center 16px`; block offset `margin-top:56`. |
| **Row panel** | `.kv`, `.kv-row`, `.kv-key`, `.kv-val` | 15 · 2 | painted | **The system's universal container** — three components fold into it: read (as built), *opened* (rev 43), *typed into* (rev 45). `--card`, `--r-card`, padding `2px 16px`; rows `13px 0` with a `--line` bottom hairline; key `--slate` 13/400 **5.95:1**, value `--ink` 15/600 tabular **14.37:1**, right-aligned. One component, two painted screens. |
| **Card** | `article.card`, `.card-link` | 11 · 1 | painted | `--card` **1.11:1** on the page; `--r-card` 16; no border, no shadow; inset 20 on a list card, 16 compact, 32 at the bottom where the last element is a primary button. Whole-card link with inner controls lifted above it; focus ring is keyboard-only, re-hung on `:has(> .card-link:focus-visible)` because `:focus-within` fires on a pointer click too. No hover lift — a card flat at rest cannot grow a shadow. |
| **Listing card** | `.card .body`, `.name`, `.desc`, `.meta-row`, `.price`, `.avail`, `.loc`, `.chev` | 12 · 0 | grayscale | The service card the client flow starts from — media, name, one line of description, price beside availability, chevron. Also the operator's job card and the wallet row. **The painted order card has solved every part of this except the chevron.**

**Settled 2026-08-02: this row is the client service card only.** Drone, name, one line of description — three elements, tap opens setup. The operator job card is a separate component and is **out of this inventory for now**: it is neither painted nor hand-edited, and the designer is reworking it. |
| **List container** | `ul.list` | 10 · 1 | painted | Gap **28px** between cards, 22 under 390px. Base is 12. **The gap between cards is always greater than any gap inside one**, so proximity groups in the right direction without a border or a shadow. |
| **Operator card** | `.op-card`, `.op-avatar`, `.op-info`, `.op-name`, `.op-rating` | 5 · 1 | painted | The trust surface. `--card`, padding 16, gap 12, `align-items:stretch`, `overflow:hidden`. Photo is a full-height panel on the left edge at **117 × 138.1** — the asset's own 595 × 702 ratio at the height the card resolves to, so the operator is shown whole. Name 15/600, rating 12.5/400 tabular. Five screens still draw the grayscale 56px avatar and are waiting for this card. |
| **Milestone mark** | `.success-mark` | 13 · 1 | painted | 64px circle, `--green-wash` + `--ink` — **14.75:1**; glyph 32px, rendered stroke 2.27. Delivered and waiting share one well: a paler green step was drawn and measured first and does not exist — every mix below the wash lands at 1.03–1.05 against the page. The difference is the glyph and the screen title. |
| **Outcome heading** | `.big-title`, `.lead`, `.center` | 20 · 1 | painted | Title 22/700/−.02em — the only place 22px appears; lead 15/400 at 1.55; gap 12; centred. |
| **Media well** | `.media-ph` | 7 · 1 | painted | `--r-media` 13. **Two treatments, one rule:** a transparent cutout sits *in* the layout and is `contain`-ed — in the product with no ground at all, straight on the card; a photograph *is* the surface, padding 0, `cover`, edge to edge. A photo floated inside a well reads as a sticker. **Imagery landed 2026-08-02** on `listings`, `listings-filtered`, `job-offer` and `operator-dispute` — the well grows **56 → 96 × 72** when it carries a render, because `concept.md` §6.3 puts the floor at ~96px and `order-history` had already taken that step. The label placeholder and its dashed ground come off with it. Still a placeholder where the picture is a *user's* upload: `inspection-report`'s cover and photo strip — `visuals/gaps.md` B3. |
| **Map** | `.map-ph` | 2 · 1 | painted | `--r-card` 16, not media — the map is a surface in the layout rather than a well inside a card. `center/cover` at its native 1.99 aspect; `--media` as the pre-load ground; no shadow. Never stretched, never a texture behind text. `job-brief` carries the client map as an **interim** since 2026-08-02; a job brief needs two pins, pickup and drop-off, where the client map has one — `visuals/gaps.md` B4. |
| **Caption · note** | `.hint`, `.note` | 13 · 2 | painted (partly) | `.hint` is the mono loading line — mono 11/400 `--slate` **6.62:1** — and is painted. `.note` is the centred explanatory caption and is not. Two classes, one job; they should probably be one. |
| **Tip block** | `.tip` | 2 · 0 | grayscale | A short advisory panel on the account screens. Close enough to the neutral message block that it may not need to exist — decide whether the kit has one advisory surface or two. |

### 1.4 Chips & badges — 3

Same geometry, different jobs. The green tint carries a claim being made; the warm grey carries a
supporting fact. A chip is never reduced to a colour — each keeps its wording.

| Component | Classes | Screens | Status | Values / what to decide |
|---|---|---|---|---|
| **Verification badge** | `.badge`, `.badges` | 8 · 1 | painted | `--r-pill`; padding `5px 10px`; 12/600; glyph **14px**, gap 6 — **settled 2026-08-02**: the build drew 13 in a badge and 14 in the ETA pill, one component with two values, and the designer's call is 14 everywhere. Claim = `--green-wash` + `--ink` **14.75:1**; fact = `--media` + `--slate` **5.51:1**. Green arrives as a tint behind charcoal, never as the letters. |
| **Filter chip** | `.chip`, `.cats` | 3 · 0 | **decided · not built** | A scrolling row of category filters. Selected currently inverts to solid ink. **Selected cannot invert to solid green** — the label would be 1.52:1. **Takes the same pair as the in-page tabs and the tab bar** (2026-08-02): unselected transparent with a `--slate` label **6.62:1**, selected `--green-wash` with an `--ink` label **14.75:1**, `--r-pill`, 32px visible with the target extended to 44. It would be wrong to paint one row of pills and leave its twin — this is the same control on three more screens. |
| **Tag** | `.tag` | 2 · 0 | grayscale | A small non-interactive label. **Its main use just went away** — the `current` tag on the mode switcher is replaced by a checkmark (decided 2026-08-02). Check what is left before giving it values. |

### 1.5 Forms — 12

**The largest gap in the system.** Nothing a person types into, checks, picks or uploads has been
painted — not one field on any of the three painted screens. `--r-input: 10px` is declared in the
token block and drawn nowhere; this is what it was reserved for. Every row needs a focus, error and
disabled treatment, each with a measured pair, before it can leave grayscale.

**One rule now governs the whole group: shape says how many.** A **circle** is one of a set, a
**square** is an independent on/off — set by the designer 2026-08-02, and it is `HIG · Radio Buttons
/ Checkboxes` verbatim. It is also the fix for the one real defect the count turned up: `payment` and
`withdraw` carry `type="radio"` inside a square box, so the same shape means "one of these" there and
"several of these" on `operator-profile-setup` — `WCAG 3.2.4 Consistent Identification`. **The
wireframes are not being changed for it**; the rule is recorded here and applied when those screens
are painted.

**Nothing in the product floats.** Counted across all 40 screens: no modal, sheet, popover, dialog,
scrim or backdrop, and not one `position:fixed`. Every surface sits in the flow, which is why the
flat rule has never had to answer for an overlay and why `--sh-onphoto` is still spent nowhere.
Where it is expected: **a modal, a popover, a drawer or a dropdown menu** — there a floating surface
is appropriate and the exception is what it was named for.

| Component | Classes | Screens | Status | What to decide |
|---|---|---|---|---|
| **Form field** | `.form-field`, `.field-label`, `.field-hint` | 8 · 0 | **decided · not built** | **No border** (decided 2026-08-02, HIG's own form pattern). A field lives inside a row panel and *is* the row that accepts typing — label, value, separator, no box. Value `--ink` on `--card` **14.37:1**; label and placeholder `--slate` **5.95:1**. Focus is the painted ring, `2.5px --ink` — **14.37:1** on a card. Error text `--danger-ink` **6.14:1**, carried by words or a glyph, never by a boundary alone. **What does not survive painting:** the grayscale `border:1px solid var(--line)` at **1.21:1** — a boundary that identifies a control and sits under 3:1 is the actual 1.4.11 failure.  Row height 47–47.8px, so HIG's 44pt target is met by the row panel's existing rhythm with no change. **Drawn in the artifact** as a decided specimen, read across from Apple's own grouped form (Figma `1:301`):

**Anatomy.** Grouped card `--card` at `--r-card` 16 · row `min-height:44` with `0 16px` padding · separator `--line` inset 16px from the left, drawn on every row but the first · placeholder `--slate` 15/400 · value `--ink` 15/600 · caret 2 × 19px `--ink` — **not green**, which cannot be a line at 1.52:1 where Apple uses its blue tint · clear button a 20px `--btn2` disc with an `--ink` glyph, **11.54:1**. Measured: every row lands at exactly **44.0px**. |
| **Input · select** | `.control`, `.select` | 10 · 0 | **decided · not built** | Same call: no border, no ground of its own. The 44px row height stays (HIG's target). The select keeps its chevron, which rotates on open per rev 44. **Drawn in the artifact** beside the form field, because a select is that row with a value on the right and a chevron after it — the difference is the chevron, not the container. Chevron 16px `--slate` — **5.95:1**; value `--ink` 15/600 right-aligned before it; the row is the tap target at 44.0px, not the chevron. |
| **Search row** | `.search-row`, `.field` | 2 · 0 | grayscale · **settled** | The one field that keeps a ground, because it is not in a grouped list — a filled rounded rect on the page, `--media` at **`--r-input` 10px**, no border. That is the iOS search bar (Apple's Figma `1:424`), and it finally gives `--r-input` its only home: declared since §4 and drawn nowhere until now.

**Anatomy.** `--media` fill · `--r-input` 10 · `min-height:44` (measured 44.0) · padding `0 12px` · gap 8 · 16px magnifier and placeholder both `--slate`, **5.51:1** · value `--ink` **13.33:1**. |
| **Checkbox** | `.check-item`, `.check-box`, `.checklist` | 3 · 0 | grayscale · **shape settled** | **A square** — the control for options that are independent of each other, several of which can be on at once. 24px at `--r-detail` 4; unchecked outline **1px `--slate`** — **5.95:1**, because the grayscale `--line` outline is **1.21:1** and a drawn boundary that identifies a control has to clear 3:1 (`WCAG 1.4.11`); checked carries a charcoal check on a fill. The whole row is the 44pt target — measured 52px — so the box does not have to be. **Two gaps stay open:** the checked fill (see §4), and the fact that `job-checklist`, `operator-profile-setup` and `order-setup` draw the box as a static `<span aria-hidden>` with **no `<input>` at all** — no role and no state for `WCAG 4.1.2`. On `job-checklist` that is defensible, it is a progress readout rather than a control; on the other two it is not. |
| **Radio** | `.check-item` + `type="radio"`, `.radio`, `.opt` | 3 · 0 | grayscale · **shape settled** | **A circle** — the control for a set of mutually exclusive options, exactly one of which is on. Same 24px box, `--r-pill`, same **5.95:1** unchecked outline; checked carries a filled dot, `inset:4px`. **Settled 2026-08-02 by the designer: shape carries the difference, not a glyph inside it** — circle means one, square means several. The correct circle already exists on `listings-filters`; `payment` and `withdraw` hold `type="radio"` in a **square** box and separate the two only by a 4px bullet against a 4px check. That is `WCAG 3.2.4 Consistent Identification`: one shape cannot mean two functions. **`HIG · Radio Buttons / Checkboxes` says the same thing** — radio for a mutually exclusive set, checkbox for independent on/off. iOS diverges by having no radio control at all and marking one-of-many with a trailing checkmark; DRON is mobile **web** in a browser with a WCAG 2.1 AA desktop, so the platform convention is the one that reads. |
| **Segmented control** | `fieldset.segment`, `.seg` | 1 · 0 | **decided · not built** | The operator's availability — *Available / Busy / Offline* — three equal `flex:1` segments in one track. **Structurally the best-built control in the grayscale set:** a real `<fieldset>` of `type="radio"`, so `WCAG 4.1.2` is satisfied without an ARIA patch, and **44px exactly**, so `HIG · 44pt` passes on the nose. `HIG · Segmented controls` asks for mutually exclusive modes, up to about five, equal width, one kind of content — all four hold.

**Painted 2026-08-02.** **Track** `--media` `#E4E1DA` at `--r-btn` 12, height 44, **no border** — it reads as a recess at **1.20:1** below the page. **Selected** is a `--page` `#F7F5F2` plate inset 2px at `--r-input` 10 — the nesting is the ramp's own arithmetic, 12 − 2 = 10 — standing **1.20:1** above the track, the largest tone step the palette holds. **Selected label** `--ink` 13/600 — **15.99:1**. **Unselected label** `--slate` 13/600 on the track — **5.51:1**. **No dividers:** the plate carries the state, so the hairline between segments is not needed.

**Both open points are closed, and each by a rule already in the file.** The 1.21:1 boundary is not darkened but **removed** — `concept.md` rev 43 says a surface is a card and not a frame, and rev 45 answered this same 1.21:1 under the form field the same way. A boundary that is absent cannot fail 1.4.11. And the selected segment **raises a light plate instead of inverting**, which is what `HIG · Segmented controls` describes; iOS lifts its plate with a shadow, and this one is lifted by tone alone, because §5 spends exactly one shadow in the system and it is not here. **No green:** this is card UI, and `concept.md` §5 does not spend the accent inside a card — the screen's one green control is its action, not its status picker. |
| **Switch** | — | **0** | **does not exist** | Counted across all 40 screens: there is **no on/off switch in the product**, and `HIG · Toggles` says there should not be one. A switch is for a setting that takes effect the moment it is flipped, with no separate Save. The only independent toggle in the product is `order-setup`'s *"Save this address for next time"* — and it sits above a **Continue** button, so the change is not immediate. That makes it a **checkbox**, which is what it already is. The row is here so the absence is a recorded answer rather than a gap: **the kit does not carry a switch, and nothing in the product asks for one.** |
| **Choice card** | `.choice-card`, `.choice-list`, `.choice-title`, `.choice-desc` | 2 · 0 | grayscale | **Corrected 2026-08-02: this is navigation, not a picker.** Both instances are `<a href>` that leave the screen — `role-select` to the two onboarding paths, `support` to three resolution routes. There is no selected state to design, which is why the earlier open question about "the card behind the check" was asked of the wrong component and is closed rather than answered. What it needs is a card's own set: `--card`, `--r-card` 16, a 44pt row, a chevron, and a keyboard-visible focus ring. |
| **Disclosure row** | `details.dropdown` | 2 · 0 | grayscale | A native `<details>` — **it opens in flow and pushes the page down; it does not float.** **Decided 2026-08-02: card, not frame** — so on `--card` with `--line` rules between its rows it *becomes the row panel that opens*, one component rather than two. **Decided: the selected row carries a checkmark**, not the word "current". **Decided: the chevron rotates 180° on open** — closed points down, open points up. Nothing left open on this component. |
| **Stepper** | `.counter`, `.count` | 3 · 0 | grayscale | Both controls are 44pt targets and the figure is tabular. The circular icon action is the shape to borrow, already measured at **11.54:1**. |
| **Upload zone** | `.upload-zone`, `.up-ph` | 6 · 0 | grayscale | The upload glyph and its motion already exist on `delivery-loading` at 32px and **5.51:1**; this is the same mark at rest, in a dashed well. |
| **Icon slot** | `.sq`, `.sq-16 / -20 / -24` | 37 · **310 slots** | grayscale | A bordered square holding the place an icon goes. On the painted three the glyph is already in: the box gives way to a real 24-grid SVG **in the same slot**. **Nothing to decide — the icons go in.** The set is settled (flat outline, 24-grid, `stroke-width 1.7` declared once, `fill:none`, `currentColor`) and §0.2 maps a glyph to every service, status, trust signal, nav item and action. Drawing work against a finished spec — which is also why the slot count is the honest measure of how much of the prototype is still grayscale. |

### 1.6 Money — 2

The figures the payment and payout flows turn on. The `number` step (20/700/tabular) already exists
on the painted order card; these are that step at a larger job, and neither is painted.

| Component | Classes | Screens | Status | What to decide |
|---|---|---|---|---|
| **Price line** | `.price-line`, `.lbl`, `.val` | 5 · 0 | grayscale | The painted fee row already solves this — caption over a tabular figure, baseline-aligned against a chip. Port rather than decide. |
| **Total** | `.price-total`, `.amount`, `.amount-sub` | 5 · 0 | grayscale | `voice.md` P3 says the price is stated as a fact before the tap, so this may want a step above `number` — and **the scale is closed at ten**, so that is a real decision. |

### 1.7 Onboarding — 1

| Component | Classes | Screens | Status | What to decide |
|---|---|---|---|---|
| **Slider · pager** | `.slider`, `.slide`, `.slide-ph`, `.pager`, `.on` | 3 · 0 | grayscale, media in | The active pager dot is the one place a bare green dot might be right — and at 1.69:1 on the page it would still need a second signal, exactly as the live status disc does. **The scene library is now in the slides** (2026-08-02): six of the nine carry `handover`, `operator`, `receive`, `operator-at-work` and a flight cutout. Three are still labels and need generating — `welcome:DRONE` is filled with an interim, `onboarding-client:REPORT` and `onboarding-operator:STEPS · PAID` are empty (`visuals/gaps.md` B2). **Second pass, same day — `.is-bleed`:** the picture stopped being a well and became the **background of the whole frame**. The slider is pinned to the 375 × 812 so the artwork reaches all four edges and passes under the top bar and the action bar, which go transparent. The layer is capped at **35%** bottom-anchored, and that cap is what the measurement bought: uncapped, the operator cutout filled the frame and put a dark cap under the title at **1.00:1**; capped, all three slides read **13.94:1** (title) and **6.27:1** (lead). The pager moved off the artwork for the same reason — on the jacket the active dot measured **1.00:1** against the 3:1 `WCAG 1.4.11` asks of a state indicator; pinned 12px above the picture it reads **17.17:1**. **Open, and older than this change: the inactive dot.** `--wf-fill` `#E2E2E2` on `--wf-bg` `#F4F4F4` is **1.18:1** — it fails on every page that has a pager, with or without a picture, so it is the base pair and not a consequence of the bleed. It carries "how many slides there are". Needs a decision. |

### 1.8 Loading — 4

Chrome stays solid, content pulses. A surface the loaded screen also draws is painted at full
strength; a block the load replaces animates. The same rule gives opposite answers on the two
painted loading screens — the question is never "should this pulse" but **does what loads replace
this surface, or sit inside it**.

| Component | Classes | Screens | Status | Values / what to decide |
|---|---|---|---|---|
| **Skeleton bar** | `.sk-line`, `.sk-w90/70/50/40/30` | 12 · 2 | painted | `--btn2`; 13px; radius 4px or `--r-pill`; `skPulse` 1.4s ease-in-out, opacity 1 → .5, offset −.47s / −.93s per card. Widths vary per card so three skeletons do not read as one stamped block. |
| **Skeleton card** | `.sk-card` | 5 · 1 | painted | The loaded card's anatomy, block for block: **263.0px against the delivered card's 263.6** — the swap moves the list by half a pixel. Surface solid, content pulses. |
| **Skeleton block** | `.sk-block` | 4 · 1 | painted | A media placeholder sized to the thing it waits for: **341 × 180 against a photo of 341 × 180** — exact, not approximate. |
| **Skeleton body · media** | `.sk-body`, `.sk-media` | 4 · 0 | grayscale | Each must be measured against its own loaded screen. A skeleton is a claim about the loaded screen, so it expires when that screen changes treatment. |

---

## 2. Motion

**Four entries, and the chevron did not add a fifth.** Every loop is functional; none is decoration. Loops carry information; the button row is a transition that answers a touch, and a chevron turning on open is that second kind. All are `animation: none` under
`prefers-reduced-motion: reduce`.

| Name | Duration | Easing | What moves |
|---|---|---|---|
| button | .15s / .12s | default | `filter`, `background`, `transform`; active `translateY(1px) scale(.99)`. **Also carries the disclosure chevron's 180° turn** (decided 2026-08-02) — feedback for a touch belongs here, not in a loop of its own. |
| `oh-ping` | 1.8s | `cubic-bezier(.22,.61,.36,1)` | one ring leaving a live status disc and fading — far under the 3-flashes-per-second ceiling |
| `skPulse` | 1.4s | `ease-in-out` | skeleton opacity 1 → .5 |
| `skUp` | 1.6s | `cubic-bezier(.22,.61,.36,1)` | the arrow leaves the upload tray; the tray holds still. Rests **visible** at 0% and 100%, so a dropped animation leaves a legible icon |

---

## 3. One-off

Built for exactly one screen, so they are **not pulled into the kit**. This is not a complaint — a
product needs bespoke screens. It is a watch-list: the moment one is wanted on a second screen it
stops being a one-off and has to earn a row above, with values that hold in both places.

**The finding worth sitting with:** the two most developed components in the whole system — the
order card and the tracking timeline — are both here. Everything painted about them is bound to a
single screen by its class names.

| Screen | What is bespoke to it |
|---|---|
| **order-history** | **The live and delivered order card, whole.** Its drone frame, the status indicator riding on it, the four-node horizontal rail, the From ▸ To inset strip, the fee row and the circular card actions — 28 classes, every one prefixed `ohl-` or `oh-`. The most measured component in the product and the least portable. **Promote first** if a second list screen is ever painted. |
| **tracking** | **The vertical milestone timeline** — `.timeline`, `.tl-item`, `.tl-dot`, `.tl-text` — plus the map's acquiring state and the late-notice wash. The node inside it is byte-identical to the order card's, which is the argument for promoting one shared node rather than two. |
| **listings-filters** | **The filter sheet** — `.fgroup`, `.txt`, `.reset`. **`.radio` and `.opt` left this list 2026-08-02**: the radio is a kit component now, standing on three screens once counted as a control rather than as a class name, and this screen is the only one that draws it correctly. |
| **listings-filtered** | **The applied-filter row** — `.fchip`, `.count-badge`, `.applied`, `.clear-all`, `.x`. A dismissible chip is close enough to the kit's filter chip that the two should probably be one component before either is painted. |
| **rate** | **The five-star rating input** — `.rating`, `.star`. Distinct from the rating *value* on the operator card, which is in the kit and painted. A filled star cannot be green: the accent is not an icon. |
| **delivery** | **The upload mark and its motion** — `.sk-up`, `.sk-arrow`, `.waiting`. Painted, measured, used once. The upload zone in the kit is where it wants to go next. |
| **job-offer** | **The offer card header** — a lone `.card-top` no other screen uses, though the painted order card has the same row under a different name. |
| **withdraw** | **The payout note** — `.check-note`, a caption under a checklist row. One line of copy with its own class. |
| **welcome** | **Skip** — `.skip`. The onboarding escape hatch; a tertiary button by another name. |

---

## 4. Open questions

| # | Question | Why it is open |
|---|---|---|
| 1 | **What fills a checked box or a selected radio?** | Two pairs, both conforming. **Green `--green` + `--on-green` = 9.46:1** repeats the walked node `.tl-dot.done`, which is already painted exactly that way. **Charcoal `--ink` + `--card` = 14.37:1** is what the grayscale build already holds. `WCAG 1.4.11` needs 3:1 and both clear it by a wide margin, so this is not a contrast question. It is a budget question: `concept.md` allows **one green control per screen**, and on `payment` that is already the "Pay" button — a green radio beside it would be the second. |
| 2 | **Does the total get a type step above `number`?** | The scale is closed at ten steps, so adding one is a real decision, not a tweak. |
| 3 | **Does `operator-listings` keep three selection mechanisms?** | The tab bar, the in-page tabs and the segmented control all run on one screen. `HIG · Tab bars` gives the tab bar to top-level sections and in-screen filtering to a segmented control, so one of the three is doing a job the guideline assigns elsewhere. **Painting does not answer this** — it is structural, and it belongs to the `operator-listings` rework. |

**Closed 2026-08-02, not answered:** *"Does the selected choice card change behind the check?"* — the
choice card turned out to be navigation. Both instances are links that leave the screen, so there is
no selected state for a surface to change behind. The question was asked of the wrong component.

**Closed 2026-08-02 by painting:** *"Does the selected segment invert, or raise a light plate?"* — it
**raises a light plate**, which is what `HIG · Segmented controls` describes: a `--page` plate standing
**1.20:1** above a `--media` track. iOS lifts its plate with a shadow; this one is lifted by tone alone,
because §5 spends exactly one shadow in the system and it is not here.

**Closed 2026-08-02 by painting:** *"How does the 1.21:1 control boundary get to 3:1?"* — it does not
get there, it **goes away**. `concept.md` rev 43 says a surface is a card and not a frame, and rev 45
answered this same 1.21:1 under the form field the same way. A boundary that is absent cannot fail
`WCAG 1.4.11`.

**Closed 2026-08-02, answered by the guideline:** *"Is a lone on/off row a checkbox or a switch?"* —
a **checkbox**, which is what it already is. `HIG · Toggles` reserves the switch for a setting that
takes effect the moment it is flipped; `order-setup`'s "Save this address" sits above a **Continue**
button, so the change is not immediate. The kit carries no switch.

---

## 5. Decisions taken

| Date | Decision | Recorded in |
|---|---|---|
| 2026-08-01 | The selected tab label is `--ink` `#1A1A1A` on the green tint, not `--green-ink` `#3F5B18` — **7.09:1 → 14.75:1**. Fixed on the two `order-history` state pages that had lagged. | `concept.md` rev 42 |
| 2026-08-01 | The focus ring on those two pages keeps `--green-ink` by the designer's call; both values clear WCAG 2.4.11, so it is a choice rather than a survivor. | `concept.md` rev 42 |
| 2026-08-01 | **Flat wins.** §0's CoffeeTech / Fauna "Take" lines and A-1's technique promised a soft shadow; the build has none, and the reason is a stated preference. §0 amended. | `concept.md` rev 42 |
| 2026-08-01 | Six radii are closed for anything the eye reads as an object; **below that the 2 / 4 / 8 scale is permissible** for an internal detail. | `concept.md` rev 42 |
| 2026-08-02 | **A surface is a card, not a frame.** A border does not survive the move into Studio: `--card` at the 1.11:1 tone step, `--r-card` 16, rows separated by their own `--line` hairline. | `concept.md` rev 43 |
| 2026-08-02 | **A selected row carries a checkmark, per HIG** — not a word. `--ink` on `--card` = **14.37:1**, the same glyph the walked node draws. Governs every one-of-many list. | `concept.md` rev 43 |
| 2026-08-02 | A floating surface belongs in a **modal, popover, drawer or dropdown menu**, and there it is appropriate. None exists yet, so `--sh-onphoto` stays unspent. | `concept.md` rev 43 |
| 2026-08-02 | **Imagery goes in wherever an asset already fits.** Fifteen slots on nine screens moved from a text label to a real render — service wells, onboarding slides, the job-brief map. A card well that carries a render grows **56 → 96 × 72**, because below ~96px the rotors stop resolving; the dashed well and its label ground come off, since in the product a cutout sits straight on the card. The remaining slots need pictures that do not exist yet. | `visuals/gaps.md` §A |
| 2026-08-02 | **The brand slot is filled — the mark exists after all.** Reserved in the morning, filled the same day: the designer supplied a quadcopter silhouette from Figma (`56:52`), which is a mark without a wordmark. It goes into the 16 files that hold the slot and nowhere else — the other 68 carry a `‹ Back` + title nav bar, and `HIG · Navigation bars` gives that bar to the screen's own title. Drawn as a mask so it stays inside the grayscale ramp; 60 × 20 at **15.33 : 1**. **Superseded the same day — see the entry below.** | `wireframes/_conventions.md` §8 |
| 2026-08-02 | **The circular action is the form of an icon-only button** — it is the one standing on a painted screen. The square filter on `listings` and the square pencil on `account` are drafts on screens that are neither painted nor hand-edited; what happens to them is decided when those screens are drawn. | `ui/inventory.md` |
| 2026-08-02 | **The client listing card and the operator job card stay two components.** Different jobs, different densities, no forcing one into the other. What *is* worth consolidating is the route — see Open questions. | `ui/inventory.md` |
| 2026-08-02 | **A field has no border** — HIG's own form pattern, confirmed against Apple's own Figma: node `1:301` is the grouped form (no boxes; placeholder, caret, clear button and separator do the identifying) and node `1:424` is the search field (a filled plate). Apple does not choose between the two styles — it uses a row in a form and a plate in search, which is the split this system had already landed on. It lives in a row panel and *is* the row that accepts typing. Value `--ink` on `--card` **14.37:1**, label and placeholder `--slate` **5.95:1**, focus `2.5px --ink` **14.37:1**, error `--danger-ink` **6.14:1**. 1.4.11 governs a boundary that is drawn, not one that is absent — so the failure was the grayscale `--line` border at **1.21:1**, which does not survive painting. The search field is the one exception and keeps a `--media` ground at `--r-input` 10px, which is the iOS search bar. | `concept.md` rev 45 |
| 2026-08-02 | **Shape says how many: a radio is a circle, a checkbox is a square.** Circle = one of a mutually exclusive set; square = an independent on/off, several at a time. `HIG · Radio Buttons / Checkboxes` states exactly this. iOS diverges — it has no radio control and marks one-of-many with a trailing checkmark — but DRON is mobile **web** in a browser with a WCAG 2.1 AA desktop, so the platform convention is what a user reads. **This supersedes rev 43's blanket "a selected row carries a checkmark, governs every one-of-many list":** the checkmark stays for the disclosure row, which is a menu, and gives way to the circle wherever a form asks a question. The defect it names: `payment` and `withdraw` hold `type="radio"` in a **square** box and separate the two only by a 4px bullet against a 4px check, so one shape carries two functions — `WCAG 3.2.4`. **The wireframes are not being changed for it** — recorded here, applied when those screens are painted. | `ui/inventory.md` |
| 2026-08-02 | **An unchecked control's outline is `--slate` `#5A5751`, not `--line`.** The grayscale `1px --line` is **1.21:1** on the card and `WCAG 1.4.11` needs **3:1** for a boundary that identifies a control; `--slate` is **5.95:1**. This is the same 1.21:1 that rev 45 found under the form field — there the answer was to remove the border, because HIG's form row has none; here the box *is* the control and cannot be removed, so it is darkened instead. | `ui/inventory.md` |
| 2026-08-02 | **The choice card is navigation, not a picker** — both instances are `<a href>` leaving the screen. It has no selected state, so it needs a card's set (`--card`, `--r-card` 16, 44pt row, chevron, focus ring) and not a selection treatment. | `ui/inventory.md` |
| 2026-08-02 | **The kit carries no switch, and nothing asks for one.** Counted across all 40 screens: there is no on/off switch in the product. `HIG · Toggles` reserves the switch for a setting that takes effect the moment it is flipped, with no separate Save. The only independent toggle is `order-setup`'s "Save this address for next time", and it sits above a **Continue** button — the change is not immediate, so it is a checkbox, which is what it already is. Recorded as a zero rather than left as a gap. | `ui/inventory.md` |
| 2026-08-02 | **The 2+ rule takes its first two named exceptions.** The segmented control and the in-page tabs stand on one screen each and are in the kit anyway: the rule exists to stop a kit becoming a pile, not to hide a control the system plainly needs. Their counts are shown unrounded as **1 · 0** so the exception stays visible. At the same time the out-of-scope note was **narrowed back to the operator job card**, which is what the designer actually asked to leave out; `.grouptab` and `.segment` were swept in with it by mistake. | `ui/inventory.md` |
| 2026-08-02 | **The in-page tabs take the tab bar's values unchanged, and so does the filter chip.** A row of places with one current is one problem, so it gets one answer: unselected transparent with a `--slate` label **6.62:1**, selected `--green-wash` with an `--ink` label **14.75:1**, `--r-pill`, 32px visible with the hit area extended to 44 by a transparent `::after` — which is what iOS does with its own 32pt controls. The fill step is only **1.085:1**; the ink change is the second signal, and `concept.md` already records that pairing as the answer here. Three selection patterns became one. | `ui/inventory.md` |
| 2026-08-02 | **The segmented control raises a plate and loses its border.** Track `--media` at `--r-btn` 12 reading **1.20:1** below the page; selected a `--page` plate inset 2px at `--r-input` 10, standing **1.20:1** above the track — the largest tone step the palette holds, and the ramp's own arithmetic, 12 − 2 = 10. Label `--ink` **15.99:1** selected, `--slate` **5.51:1** at rest. No border and no dividers: the 1.21:1 boundary is removed rather than darkened, per rev 43 and rev 45, and a boundary that is absent cannot fail 1.4.11. **No green** — this is card UI, and §5 does not spend the accent inside a card. | `ui/inventory.md` |
| 2026-08-02 | **The nav bar is 56px, and the documents are corrected to the frames.** Measured by computed style on all ten painted pages. This inventory's Nav bar row said **44**; `DESIGN.md` did not state a height at all. The frames are the design, so both documents now carry 56. | `DESIGN.md`, `ui/inventory.md` |
| 2026-08-02 | **A chip's glyph is 14px, everywhere.** The build drew **13** in a badge (`.badge`, operator card) and **14** in the ETA pill (`.ohl-eta`, order card) — the same component at two values, against the One-Component-One-Value rule. The designer's call is 14. `--ic-13` becomes a declared rung that nothing spends. | `DESIGN.md`, `ui/inventory.md`, `ui/kit.css` |
| 2026-08-02 | **The chevron rotates 180° on open** — closed points down, open points up. It joins the button's `transform .12s` rather than becoming a fifth motion loop, because it answers a touch instead of carrying continuous information. Under `prefers-reduced-motion` the glyph still turns, it just does not travel: the direction is information, the animation is only how it gets there. | `concept.md` rev 44 |
| 2026-08-02 | **The brand slot follows the back control, not the title — 8 screens → 18.** The morning's rule was "no logo where there is a title"; the designer widened it to "no logo where there is a **back**". A tab root has a title but nothing to return to, so its bar has a free leading edge and the mark takes it, with the title 8px behind. The 21 screens that carry a `‹ Back` still do not get it: `HIG · Navigation bars` gives that bar to the back control and the title, and a mark wedged between them makes the leading edge argue with itself. Space was never the objection and was measured before the rule was written — at 375px the tightest tab root leaves **148px** free after the mark, 0 of 23 files overflow, and `WCAG` has no objection either way (**15.33 : 1** on the wireframe bar, **15.99 : 1** on the painted one, against 1.4.11's 3:1). This is the earlier rule narrowed, not dropped. | `wireframes/_conventions.md` §8 |
| 2026-08-02 | **`payment-loading` was left out of the widening, and it exposes a defect.** It is the only file in the product with neither a `‹ Back` nor a mark: its siblings `payment` and `payment-error` both carry `‹ Order review`, so the loading state has lost its back control. Branding it would have propagated that — the screen is pushed, not a tab root. Against `_conventions.md` §12 ("same DOM structure as its sibling state pages") the missing back is the defect, not the missing mark. **Recorded, not fixed** — the wireframe is not changed for it. | `ui/inventory.md` |

---

## Sources

- **[`DESIGN.md`](../DESIGN.md)** — the token-level spec extracted from the painted screens: palette
  with every measured ratio, ten type steps, six radii, spacing scale, components, imagery.
- **[`concept/concept.md`](../concept/concept.md)** — the reasoning and the change log, including
  every revision that was tried and reverted, so a rejected idea is not re-proposed as a new one.
- **[`wireframes/_screens.md`](../wireframes/_screens.md)** — which screens exist and which of the
  four states is real per screen; the matrix this file's screen count comes from.
- **[`wireframes/_conventions.md`](../wireframes/_conventions.md)** — the wireframe contract.
- **[`voice.md`](../voice.md)** and **[`microcopy.md`](../microcopy.md)** — every string shown.
- **[`CLAUDE.md`](../CLAUDE.md)** — design standards and the standing HIG + WCAG conformance check.
- **[`visuals/README.md`](../visuals/README.md)** — how every image in the product is generated: the
  house-style prompt, the two registers (product render vs user upload), the measured colour and
  temperature contract, naming and output sizes.
- **[`visuals/gaps.md`](../visuals/gaps.md)** — all 84 wireframes audited slot by slot: what was
  placed, what still has to be generated, and which slots are glyphs that must never become pictures.

**Counted and measured 2026-08-02 against 84 files.** The wireframes are edited by hand and they are
the design — so when a component changes there, or a fourth screen is painted, this inventory is
wrong until it is regenerated. It is a view of the source, not the source.
