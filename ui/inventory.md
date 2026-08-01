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
| In the kit (2+ screens) | **49** |
| — carrying Studio values | **26** |
| — still grayscale | **23** |
| One-off (1 screen) | **10 blocks · 93 classes** |

---

## 1. The kit

### 1.1 Frame & navigation — 8

Every system bar takes the page ground, so the chrome melts into the page and only a hairline
separates it. The most reused components in the product.

| Component | Classes | Screens | Status | Values / what to decide |
|---|---|---|---|---|
| **Nav bar** | `header.topbar`, `h1.title` | 40 · 3 painted | painted | 44px; ground `--page`; 1px `--line` rule; title 17/600/−.01em `--ink` — **15.99:1**. Title is an `<h1>`, not a span: one entry point per screen (1.3.1 / 2.4.6). |
| **Status bar** | `.statusbar`, `.sysph` | 40 · 3 | painted | 44px; glyphs 17px on the 24-grid, rendered stroke 1.20; `--ink`. |
| **Zone label** | `.zlabel`, `.act` | 39 · 3 | painted | mono 11/600, `.09em`, `--slate` — **6.62:1**; 1px `--line` bottom rule; a 30 × 2px `--green` tick at its left end. The one place the accent is a line, and it is a fill, not a stroke. |
| **Action bar** | `footer.actionbar` | 29 · 1 | painted | `--page`; 1px `--line` top; padding `12px 16px 24px`; gap 8; full-width buttons. Secondary above primary, so the thumb reaches the primary first. |
| **Tab bar** | `footer.tabbar`, `.tabs`, `.tab` | 12 · 3 | painted | 60 + 30px; tab `--r-card` 16, target 86 × 50; selected `--green-wash` + `--ink` **14.75:1**, rest transparent + `--slate` **6.62:1**; icons 22px, labels 11/600. HIG tints the selected label with the accent — `#9BCF4A` is 1.69:1, so the accent moves into the fill and the ink darkens with it: **two signals where the convention gives one**. Icons stay outline in both states, so the iOS filled-symbol convention is deliberately not used. |
| **Home indicator** | `.home-indicator` | 12 · 3 | painted | 30px; bar 134 × 5 at `--r-pill`; `--ink`. |
| **Brand slot** | `.brand-ph` | 8 · 0 | grayscale | **Blocked outside the design system.** There is no wordmark or logotype in the repo — `assets/` holds drones, people and scenes and nothing brand. Until one exists the slot can only be reserved, not painted. |
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
| **Circular icon action** | `.sbi.grey` | 1 painted screen | painted *(one-off — see §3)* | 44 × 44, 50%, `--btn2`, glyph 20px `--ink` — **11.54:1**; hover → `--media`; `z-index:2` to clear the whole-card link. Carries its own `aria-label`. |
| **Tertiary button** | `.btn-tertiary` | 8 · 0 | grayscale | A borderless text action — skip, cancel, "not now". Needs a decision the painted set never faced: a 44pt target and a visible pressed state with no fill to change. |
| **Paired buttons** | `.row2` | 4 · 0 | grayscale | Two actions side by side in one action-bar row. The painted action bar **stacks** instead. Decide whether side-by-side survives: at 341px two targets in a row leave ~166px each — enough, but tight for a two-word label. |
| **Edit affordance** | `.op-edit`, `.ic-edit`, `.pencil` | 2 · 0 | grayscale | Three classes for one control. It is the circular icon action again, already measured — a consolidation, not a new design. |
| **Icon button** | `.icon-btn`, `.ic-filter` | 2 · 0 | grayscale | A square icon affordance beside the search field. **The painted set already has this idea under another name** — the circular `.sbi`. Decide whether the kit has one icon action or two shapes. |

### 1.3 Content surfaces — 13

Flat, all of them. No card, panel, well, map or photograph casts a shadow — separation is a warm
tone step plus a radius, and every step is measured before it is used.

| Component | Classes | Screens | Status | Values / what to decide |
|---|---|---|---|---|
| **Message block** | `.msg-block`, `.msg-ph`, `.msg-title`, `.msg-body`, `.msg-actions` | 25 · 3 | painted | One component doing three jobs — **empty state**, **error banner**, **notice**. `--card`, `--r-card`, padding `22px 18px`, gap 12, centred. Mark 52px at `--r-media`; title 17/600; body 13/400 capped at 260px; actions gap 10. `role="alert"` on an error, `role="status"` on an empty state. Marks: neutral `--media`/`--slate` **5.51:1**, warn `--warn-wash`/`--warn-ink` **5.65:1**, danger `--danger-wash`/`--danger-ink` **5.49:1**. |
| **Empty-state banner** | `.msg-block` + image `.msg-ph` | 2 · 1 | painted | The same block with a render instead of a glyph. Padding `16px 16px 32px` — **32 under the button against 16 above it**, because an action wants more clearance from the card edge than the text rhythm above it; 32 is the 8-pt grid's next step. Banner 100% × 150px at `--r-media`, no ground, `background-blend-mode: multiply`, placed `auto 78%` / `center 16px`; block offset `margin-top:56`. |
| **Row panel** | `.kv`, `.kv-row`, `.kv-key`, `.kv-val` | 15 · 2 | painted | `--card`, `--r-card`, padding `2px 16px`; rows `13px 0` with a `--line` bottom hairline; key `--slate` 13/400 **5.95:1**, value `--ink` 15/600 tabular **14.37:1**, right-aligned. One component, two painted screens. |
| **Card** | `article.card`, `.card-link` | 11 · 1 | painted | `--card` **1.11:1** on the page; `--r-card` 16; no border, no shadow; inset 20 on a list card, 16 compact, 32 at the bottom where the last element is a primary button. Whole-card link with inner controls lifted above it; focus ring is keyboard-only, re-hung on `:has(> .card-link:focus-visible)` because `:focus-within` fires on a pointer click too. No hover lift — a card flat at rest cannot grow a shadow. |
| **Listing card** | `.card .body`, `.name`, `.desc`, `.meta-row`, `.price`, `.avail`, `.loc`, `.chev` | 12 · 0 | grayscale | The service card the client flow starts from — media, name, one line of description, price beside availability, chevron. Also the operator's job card and the wallet row. **The painted order card has solved every part of this except the chevron.** Open: whether the two become one component or stay a client card and an operator card — the same question `operator-listings` raises in §3. |
| **List container** | `ul.list` | 10 · 1 | painted | Gap **28px** between cards, 22 under 390px. Base is 12. **The gap between cards is always greater than any gap inside one**, so proximity groups in the right direction without a border or a shadow. |
| **Operator card** | `.op-card`, `.op-avatar`, `.op-info`, `.op-name`, `.op-rating` | 5 · 1 | painted | The trust surface. `--card`, padding 16, gap 12, `align-items:stretch`, `overflow:hidden`. Photo is a full-height panel on the left edge at **117 × 138.1** — the asset's own 595 × 702 ratio at the height the card resolves to, so the operator is shown whole. Name 15/600, rating 12.5/400 tabular. Five screens still draw the grayscale 56px avatar and are waiting for this card. |
| **Milestone mark** | `.success-mark` | 13 · 1 | painted | 64px circle, `--green-wash` + `--ink` — **14.75:1**; glyph 32px, rendered stroke 2.27. Delivered and waiting share one well: a paler green step was drawn and measured first and does not exist — every mix below the wash lands at 1.03–1.05 against the page. The difference is the glyph and the screen title. |
| **Outcome heading** | `.big-title`, `.lead`, `.center` | 20 · 1 | painted | Title 22/700/−.02em — the only place 22px appears; lead 15/400 at 1.55; gap 12; centred. |
| **Media well** | `.media-ph` | 7 · 1 | painted | `--r-media` 13. **Two treatments, one rule:** a transparent cutout sits *in* the layout and is `contain`-ed — in the product with no ground at all, straight on the card; a photograph *is* the surface, padding 0, `cover`, edge to edge. A photo floated inside a well reads as a sticker. |
| **Map** | `.map-ph` | 2 · 1 | painted | `--r-card` 16, not media — the map is a surface in the layout rather than a well inside a card. `center/cover` at its native 1.99 aspect; `--media` as the pre-load ground; no shadow. Never stretched, never a texture behind text. |
| **Caption · note** | `.hint`, `.note` | 13 · 2 | painted (partly) | `.hint` is the mono loading line — mono 11/400 `--slate` **6.62:1** — and is painted. `.note` is the centred explanatory caption and is not. Two classes, one job; they should probably be one. |
| **Tip block** | `.tip` | 2 · 0 | grayscale | A short advisory panel on the account screens. Close enough to the neutral message block that it may not need to exist — decide whether the kit has one advisory surface or two. |

### 1.4 Chips & badges — 3

Same geometry, different jobs. The green tint carries a claim being made; the warm grey carries a
supporting fact. A chip is never reduced to a colour — each keeps its wording.

| Component | Classes | Screens | Status | Values / what to decide |
|---|---|---|---|---|
| **Verification badge** | `.badge`, `.badges` | 8 · 1 | painted | `--r-pill`; padding `5px 10px`; 12/600; glyph 13px, gap 6. Claim = `--green-wash` + `--ink` **14.75:1**; fact = `--media` + `--slate` **5.51:1**. Green arrives as a tint behind charcoal, never as the letters. |
| **Filter chip** | `.chip`, `.cats` | 3 · 0 | grayscale | A scrolling row of category filters. Selected currently inverts to solid ink. **Selected cannot invert to solid green** — the label would be 1.52:1. The tab bar has already answered this: green tint behind charcoal plus an ink change, so selection is not colour alone. |
| **Tag** | `.tag` | 2 · 0 | grayscale | A small non-interactive label. **Its main use just went away** — the `current` tag on the mode switcher is replaced by a checkmark (decided 2026-08-02). Check what is left before giving it values. |

### 1.5 Forms — 9

**The largest gap in the system.** Nothing a person types into, checks, picks or uploads has been
painted — not one field on any of the three painted screens. `--r-input: 10px` is declared in the
token block and drawn nowhere; this is what it was reserved for. Every row needs a focus, error and
disabled treatment, each with a measured pair, before it can leave grayscale.

**Nothing in the product floats.** Counted across all 40 screens: no modal, sheet, popover, dialog,
scrim or backdrop, and not one `position:fixed`. Every surface sits in the flow, which is why the
flat rule has never had to answer for an overlay and why `--sh-onphoto` is still spent nowhere.
Where it is expected: **a modal, a popover, a drawer or a dropdown menu** — there a floating surface
is appropriate and the exception is what it was named for.

| Component | Classes | Screens | Status | What to decide |
|---|---|---|---|---|
| **Form field** | `.form-field`, `.field-label`, `.field-hint` | 8 · 0 | grayscale | Focus cannot be a green ring — the accent is not a line. The painted focus ring is `2.5px --ink` at **15.99:1** and the field should take it. Error text needs a pair the palette does not yet have: `--danger-ink` on the page is untested. |
| **Input · select** | `.control`, `.select` | 10 · 0 | grayscale | Ground is the open question: `--card` would make a field indistinguishable from the panel it sits on at 1.11:1. A field probably needs the page ground inside a hairline — a pair nobody has measured. |
| **Search row** | `.search-row`, `.field` | 2 · 0 | grayscale | Blocked on the field — it is that component in a row with an icon action. |
| **Checkbox · checklist** | `.check-item`, `.check-box`, `.checklist` | 5 · 0 | grayscale | **The one form control the system has already solved** — a ticked box is a green fill behind a charcoal check, exactly the walked progress node at **9.46:1**. Only the radius and the target need setting. |
| **Choice card · radio** | `.choice-card`, `.choice-list`, `.choice-title`, `.choice-desc` | 2 · 0 | grayscale | **Half-settled 2026-08-02:** the selected card carries a **checkmark**, per HIG and the same call made on the disclosure row — charcoal on the card at **14.37:1**. Still open: whether the card itself changes behind the check. A green tint across a whole card would spend the screen's accent budget on a picker. |
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
| **Slider · pager** | `.slider`, `.slide`, `.slide-ph`, `.pager`, `.on` | 3 · 0 | grayscale | The active pager dot is the one place a bare green dot might be right — and at 1.69:1 on the page it would still need a second signal, exactly as the live status disc does. The slide media is where the scene library finally gets used. |

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
| **operator-listings** | **The operator's job card and its segmented header** — a second, parallel card family (`oh-head`, `oh-route`, `oh-stop`, `oh-price`, `oh-eta`…) built before the client card and never reconciled with it. Also the only `.grouptab`, `.segment`, `.avatar` and kebab action in the repo. |
| **listings-filters** | **The filter sheet** — `.fgroup`, `.opt`, `.radio`, `.txt`, `.reset`. The only true radio control in the product; the choice card in the kit is a different pattern with the same job. |
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
| 1 | **Does the selected choice card change behind the check?** | The checkmark is settled. Whether the card surface also changes is not — and a green tint across a whole card would spend the screen's accent budget on a picker. |
| 2 | **One icon action or two shapes?** | `.sbi` is circular and painted; `.icon-btn` and `.ic-edit` are square and grey. Three class families, one control. |
| 3 | **One card or two?** | The client listing card and the operator job card were built separately and never reconciled. |
| 4 | **Does the total get a type step above `number`?** | The scale is closed at ten steps, so adding one is a real decision, not a tweak. |

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
| 2026-08-02 | **The chevron rotates 180° on open** — closed points down, open points up. It joins the button's `transform .12s` rather than becoming a fifth motion loop, because it answers a touch instead of carrying continuous information. Under `prefers-reduced-motion` the glyph still turns, it just does not travel: the direction is information, the animation is only how it gets there. | `concept.md` rev 44 |

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

**Counted and measured 2026-08-02 against 84 files.** The wireframes are edited by hand and they are
the design — so when a component changes there, or a fourth screen is painted, this inventory is
wrong until it is regenerated. It is a view of the source, not the source.
