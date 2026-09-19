# Tokens — audit of what is built

**Read:** `ui/kit.css` (6 578 lines · 2 781 declarations · 238 variable definitions) and all
**134** `wireframes/*.html`. Read alongside them, because every one of those pages links it:
`wireframes/_wireframe.css` (943 declarations · 12 variable definitions) and the 17 per-page
`<style>` blocks.

**Nothing is changed, renamed, merged or deleted by this document.** It records what is there.

---

## 0. Method, and what the numbers mean

| Column | How it was produced |
|---|---|
| **Value** | The literal in `:root` of `ui/kit.css`, lines 52–578. |
| **Where used — classes** | Every selector in `kit.css` whose declaration reaches the variable through `var()`, grouped by the property it lands on. Parsed, not grepped: comments stripped, braces balanced, so a value quoted inside a comment is never counted as a use. |
| **Where used — pages** | Pages whose **markup** carries every class the selector needs. This is a static count of `class="…"` tokens. |
| **Role** | Read off the property + selector pair. Where the same variable lands on two unlike properties, both roles are named. |

**Seventeen classes are built by script and therefore show 0 pages although they are drawn:**
the eleven `.dr-kb*` (keyboard — `ui/kit.js`), `.dr-toast` + `.dr-toast--over-sheet` and
`.dr-lang` (`wireframes/_wf-shell.js`), `.dr-cal__day` + `.dr-cal__day--today` and
`.dr-range__bar--in` (page scripts in `listings.html` / `listings-filters.html`). Everything
else showing 0 pages is declared in the kit and drawn on no surface — that is a finding, not
an artefact, and it is listed in §3.

**Load order on every painted page** is `_wireframe.css` → per-page `<style>` (where present) →
`ui/kit.css`. At equal specificity the kit wins, which is what makes the duplicated layer
below mostly invisible rather than absent.

---

## 1. The table

### 1.1 Colour — 4 surfaces, 2 inks, 1 accent, 4 washes, 1 night pair

| Variable | Value | Where used (pages · classes) | Role in each place |
|---|---|---|---|
| `--page` | `#F7F5F2` | 131 pages · 28 uses | **background** on `.dr`, `.dr-screen`, `.dr-statusbar`, `.dr-topbar`, `.dr-tabbar`, `.dr-actionbar`, `.dr-groups`, `.dr-sheet`, `.dr-kb__key`, `.dr-segment__seg:checked`, `.dr-call .dr-home span`, `.dr-btn--night[pressed]` → screen ground and every system bar; **colour (ink)** on `.dr-call`, `.dr-call__name`, `.dr-toast`, `.dr-btn--danger-solid`, `.dr-channel[pressed]` → light ink on a dark ground; **border** on `.dr-stack__shot`, `.dr-profile__rating` → the cut-out edge against a photograph; **outline** on `.dr-btn--night:focus-visible`, `.dr-btn--danger-solid:focus-visible` → focus ring on dark. |
| `--card` | `#ECE9E4` | 116 pages · 24 uses | **background** on `.dr-card`, `.dr-rows`, `.dr-node`, `.dr-msg`, `.dr-bubble--in`, `.dr-choice`, `.dr-op`, `.dr-picker__list`, `.dr-picks`, `.dr-zone`, `.dr-range`, `.dr-disclosure`, `.dr-upload--card`, `.dr-cal`, `.dr-kb__bar`, `.dr-kb__key--mod/--return`, `.dr-when`, `.dr-route`, `.dr-finder__card`, `.dr-offer` → the card plane; **background-color** on `.dr-msg__banner`; **border** on `.dr-avatar-edit__badge`; **box-shadow** on `.dr-status` → a 2px ring in the card's own colour, cutting the live disc out of the well. |
| `--media` | `#E4E1DA` | 117 pages · 32 uses | **background** on `.dr-chip`, `.dr-grouptab`, `.dr-mark`, `.dr-well--photo/--shot/--acquiring`, `.dr-stack__shot`, `.dr-avatar-lg/-sm/-md`, `.dr-field--area .dr-field__input`, `.dr-search`, `.dr-range__val`, `.dr-segment`, `.dr-sk-well/-block/-tray`, `.dr-cal__clock`, `.dr-slide__art`, `.dr-mapview` → media wells, muted chips, inert fields; **background on hover** for `.dr-btn--secondary`, `.dr-btn--icon`, `.dr-lang button`, `.dr-disclosure__item`, `.dr-picker__item`, `.dr-channel`, `.dr-cal__nav`, `.dr-cal__day`, `.dr-avatar-edit__badge` → the hover step of the secondary pair. |
| `--btn2` | `#D6D2C9` | 121 pages · 24 uses | **background** on `.dr-btn--secondary`, `.dr-btn:disabled`, `.dr-btn--icon`, `.dr-status`, `.dr-bubble--out`, `.dr-avatar-edit__badge`, `.dr-field__clear`, `.dr-switch`, `.dr-range__bar`, `.dr-range__rail::before`, `.dr-lang button`, `.dr-fchip--all`, `.dr-channel`, `.dr-pager > *`, `.dr-sk-line/-btn/-dir/-route`, `.dr-kb__plane` → secondary ground, disabled ground, switch track, skeleton bar; **colour (ink)** on `.dr-call .dr-label`, `.dr-call__time`, `.dr-star`, `.dr-stars` → the secondary ink on the night surface (`--slate` is barred there at 2.42:1) and the unfilled star. |
| `--inset` | `#F2F0EC` | 3 pages (`order-history`, `-loading`, `operator-listings`) · 1 use | **background** on `.dr-inset` — the only plane declared to sit *inside* a card. |
| `--ink` | `#1A1A1A` | 133 pages · 128 uses | **colour** on ~80 selectors — every title, value, label, button label, tab-current, number; **background** on `.dr-brand`, `.dr-home span`, `.dr-switch__knob`, `.dr-range__bar--in`, `.dr-range__fill`, range thumbs, `.dr-toast`, `.dr-avail__dot`, `.dr-btn--pay:hover/:active`, `.dr-channel[pressed]`, `.dr-groups--tabs .dr-grouptab[selected]::after` → ink as a fill and as the selected-tab underline; **border** on `.dr-box`; **border-color** on `.dr-btn--outline:hover/:active`; **caret-color** on three inputs; **outline** on 30 `:focus-visible` rules → the focus ring's colour; **`--scrim`** source at 40 %. |
| `--slate` | `#5A5751` | 133 pages · 60 uses | **colour** on `.dr-tab`, `.dr-lead`, `.dr-label`, `.dr-hint`, `.dr-note`, `.dr-sect`, `.dr-rows__key`, `.dr-chip`, `.dr-grouptab`, `.dr-node`, `.dr-track__text`, `.dr-msg__body`, `.dr-order__date`, `.dr-listing__desc`, `.dr-choice__desc`, `.dr-op__rating`, `.dr-field__label`, every `::placeholder`, `.dr-price__lbl`, `.dr-cal__grid th`, `.dr-picker__sub`, `.dr-offer__meta`, `.dr-btn:disabled`, `.dr-btn--tertiary` → the secondary ink, and the disabled ink; **border-color** on `.dr-btn--outline` → the same value carrying an edge rather than a word. |
| `--line` | `#D9D5CE` | 133 pages · 25 uses | **border-top / -bottom / -left** on `.dr-topbar`, `.dr-tabbar`, `.dr-actionbar`, `.dr-rows__row`, `.dr-groups`, `.dr-label`, `.dr-disclosure`, `.dr-picker__item`, `.dr-kb__bar`, `.dr-kb__quick span+span` → every hairline; **border** on `.dr-screen`, `.dr-node`; **background** on nine separator pseudo-elements *and* on `.dr-sheet__grip` → a line colour filling the drawer's grabber, which is a shape, not a rule. |
| `--green` | `#9BCF4A` | 132 pages · 30 uses | **background** on `.dr-btn--primary` (+ `--icon`), `.dr-grouptab[selected]`, `.dr-status--live`, `.dr-node--done`, `.dr-rail::after`, `.dr-track__item--done::before`, `.dr-label::after`, `.dr-profile .dr-avatar-edit__badge`, `.dr-box:checked`, `.dr-switch:checked`, `.dr-lang button[pressed]`, `.dr-fchip__x`, `.dr-count-badge`, `.dr-pager .on`, `.dr-cal__grid td[selected] .dr-cal__day`, `.dr-avail-badge__dot`, `.dr-balance--card/--banner`, `.dr-offer:checked` → action, selection, live state, done state, count badge, balance card, selected day — **all one token**; **border-color** on `.dr-node--done/--now`, checked `.dr-box`; **box-shadow** in `@keyframes dr-ping`; **`--halo-now`** source at 20 %. |
| `--on-green` | `#1A1A1A` | 115 pages · 19 uses | **colour** on everything sitting on a green fill (17 selectors); **background** on `.dr-switch__knob:checked` and `.dr-rating-arc`. Same hex as `--ink`, declared again to name the rule "the only colour allowed on green". |
| `--green-soft` | `#B7DA7C` | **0 pages · 0 uses** | Declared, spent nowhere. Was `#A9D563`; retuned, not replaced. Its one site (`.dr-balance--banner`) went back to `--green` on 2026-09-03. |
| `--green-wash` | `#E7F0D2` | 48 pages · 6 uses | **background** on `.dr-tab[aria-current]`, `.dr-chip--claim`, `.dr-chip--unread`, `.dr-avail-badge[available]`, `.dr-grouptab__count`, `.dr-mark--milestone`, `.dr-fchip`, `.dr-balance__glyph` → the tint behind a current tab, a claim chip, an applied filter, a milestone. |
| `--green-ink` | `#4F6B22` | 2 pages (`account-photo`, `operator-account-photo`) · 1 use | **colour** on `.dr-btn--text` — the only place green is allowed to be a word. |
| `--warn` | `#E4A11B` | 1 page (`rate`) · 3 uses | **colour** on `.dr-star[aria-pressed]` and `.dr-stars__fill` → the filled star; **background** on `.dr-profile__rating` → the rating pill. `.dr-stars__fill` and `.dr-profile__rating` are in **no page's markup**, so the built spend is the star alone. |
| `--warn-ink` | `#7A5200` | 7 pages · 1 use | **colour** on `.dr-mark--warn`. |
| `--warn-wash` | `#F6E7C4` | 7 pages · 1 use | **background** on `.dr-mark--warn` — the pair is only ever used together. |
| `--danger` | `#C4462A` | 3 pages (`call`, `-client`, `-support`) · 3 uses | **background** on `.dr-btn--danger-solid` (+ `--icon`, + hover) → the end-call button. |
| `--danger-ink` | `#9A3115` | 9 error pages · 3 uses | **colour** on `.dr-btn--danger`, `.dr-mark--danger`, `.dr-field__err`. `.dr-field__err` is in no markup. |
| `--danger-wash` | `#F2D8CF` | 9 error pages · 1 use | **background** on `.dr-mark--danger`. |
| `--trust-ink` | `#2A5C7D` | **0 pages** · 1 use | **colour** on `.dr-chip--trust`. |
| `--trust-wash` | `#D8E6F2` | **0 pages** · 1 use | **background** on `.dr-chip--trust`. The whole trust pair is declared and drawn nowhere. |
| `--night` | `#1A1A1A` | 3 call pages · 5 uses | **background** on `.dr-call`, its status bar, its action bar, `.dr-btn--night`; **colour** on `.dr-btn--night[pressed]`. Same hex as `--ink`, third name for a third role. |
| `--night-raised` | `#2E2E2E` | 3 call pages · 3 uses | **background** on `.dr-call__avatar`, `.dr-call__bar`, `.dr-btn--night:hover` — one tone step above the night ground. |

### 1.2 Type — two stacks, ten steps

| Variable | Value | Where used (pages · classes) | Role in each place |
|---|---|---|---|
| `--font-ui` | SF stack | 132 pages · 16 uses | `font-family` on `.dr` and on every element that resets it: `.dr-btn`, `.dr-grouptab`, `.dr-field__input`, `.dr-picker__item`, `.dr-search input`, `.dr-segment__seg`, `.dr-lang button`, `.dr-channel`, `.dr-cal__day/__unit`, `.dr-when__cell`, `.dr-route__input/__open`, `.dr-paymark text`. |
| `--font-mono` | mono stack | 127 pages · 5 uses | `font-family` on `.dr-label`, `.dr-hint`, `.dr-inset__lbl`, `.dr-well--acquiring`, `.dr-slide__art` → structural labels only. |
| `--t-display-size` | `22px` | 38 pages · 5 uses | `font-size` on `.dr-display`, `.dr-call__name`, `.dr-kb__key`, `.dr-balance .dr-number`; also the first term of `--sz-glyph-plate`. |
| `--t-display-weight` | `700` | 31 pages | `font-weight` on `.dr-display`, `.dr-call__name`. |
| `--t-display-line` | `1.4` | 31 pages | `line-height`, same two. |
| `--t-display-track` | `-.02em` | 31 pages | `letter-spacing`, same two. |
| `--t-display-measure` | `18ch` | 1 page (`rate`) | `max-width` on `.dr-display--balance` — where the display line must wrap. |
| `--t-note-measure` | `30ch` | 2 pages | `max-width` on `.dr-upload--card .dr-note`. |
| `--t-number-size` | `20px` | 16 pages · 3 uses | `font-size` on `.dr-number`, `.dr-price--total .dr-price__val`, `.dr-rows__row--total .dr-rows__val`. |
| `--t-number-weight` | `700` | 16 pages | `font-weight`, same three. |
| `--t-number-line` | `1` | 13 pages | `line-height` on two of them; also a term of `--sz-glyph-plate`. |
| `--t-number-track` | `-.02em` | 16 pages | `letter-spacing`, same three. |
| `--t-title-size` | `17px` | 121 pages · 9 uses | `font-size` on `.dr-topbar__title`, `.dr-msg__title`, `.dr-choice__title`, `.dr-zone__title`, `.dr-range__title`, `.dr-sheet__title`, `.dr-price__val`, `.dr-offer__name`, `.dr-offer__price`. |
| `--t-title-weight` | `600` | 120 pages · 7 uses | `font-weight` on the same set less `.dr-offer__name` and `.dr-listing--service`. |
| `--t-title-line` | `1.4` | 122 pages · 5 uses | `line-height`; also on `.dr-call__time`, which takes the title's leading at the lead's size. |
| `--t-title-track` | `-.01em` | 120 pages · 5 uses | `letter-spacing`. |
| `--t-heading-size` | `15px` | 128 pages · 28 uses | `font-size` on `.dr-btn`, `.dr-rows__val`, `.dr-order__title`, `.dr-listing__name`, `.dr-op__name`, `.dr-field__label/__input/__value`, `.dr-search input`, `.dr-pick`, `.dr-range__val/__out`, `.dr-disclosure > summary`, `.dr-picker__item`, `.dr-upload__action`, `.dr-cal__month/__day/__unit`, `.dr-kb__done`, `.dr-avail__state`, `.dr-when__value`, `.dr-route__input/__value`; also a term inside two `min-height` calcs. |
| `--t-heading-weight` | `600` | 30 pages · 4 uses | `font-weight` on `.dr-order__title`, `.dr-listing__name`, `.dr-op__name`, `.dr-cal__month`. |
| `--t-heading-line` | `1.2` | 32 pages · 9 uses | `line-height` on nine headings. |
| `--t-lead-size` | `15px` | 29 pages · 2 uses | `font-size` on `.dr-lead`, `.dr-call__time`. |
| `--t-lead-weight` | `400` | 26 pages | `font-weight` on `.dr-lead`. |
| `--t-lead-line` | `1.55` | 26 pages | `line-height` on `.dr-lead`. |
| `--t-body-size` | `14px` | 8 pages · 6 uses | `font-size` on `.dr-status-line`, `.dr-inset__place`, `.dr-track__text`, `.dr-msg--banner .dr-msg__body`, `.dr-bubble`, `.dr-toast`. |
| `--t-body-weight` | `400` | **0 uses** | Declared; every body element inherits 400 instead. |
| `--t-body-line` | `1.3` | 2 pages · 1 use | `line-height` on `.dr-inset__place` only. |
| `--t-bodysm-size` | `13px` | 131 pages · 14 uses | `font-size` on `.dr-statusbar`, `.dr-sect`, `.dr-rows__key`, `.dr-grouptab`, `.dr-msg__body`, `.dr-counter__count`, `.dr-listing__desc`, `.dr-choice__desc`, `.dr-zone__sub`, `.dr-segment__seg`, `.dr-price__lbl`, `.dr-avail__note`, `.dr-balance--banner .dr-note`, `.dr-offer__meta`. |
| `--t-bodysm-weight` | `400` | **0 uses** | Declared, inherited instead. |
| `--t-bodysm-line` | `1.4` | 25 pages · 6 uses | `line-height` on six of the above. |
| `--t-para-line` | `1.5` | 67 pages · 9 uses | `line-height` on `.dr-note`, `.dr-msg__body`, `.dr-bubble`, `.dr-well--acquiring`, `.dr-field--area .dr-field__input`, `.dr-slide__art`; a term of `--sz-glyph-plate`; and a term of `.dr-field--area6`'s `min-height`. |
| `--t-meta-size` | `12.5px` | 22 pages · 8 uses | `font-size` on `.dr-bubble__time`, `.dr-order__date`, `.dr-op__rating`, `.dr-pick__sub`, `.dr-range__cap/__ends`, `.dr-listing__score`, `.dr-picker__sub`. |
| `--t-meta-weight` | `400` | 2 pages · 1 use | `font-weight` on `.dr-bubble__time`. |
| `--t-meta-line` | `1.2` | 7 pages · 5 uses | `line-height` on five of the meta set. |
| `--t-caption-size` | `12px` | 57 pages · 14 uses | `font-size` on `.dr-note`, `.dr-chip`, `.dr-field__err/__hint`, `.dr-lang button`, `.dr-fchip`, `.dr-fchip__x`, `.dr-channel`, `.dr-cal__grid th`, `.dr-kb__key--mod/--return`, `.dr-when__label`, `.dr-route__label`; a term of `--sz-glyph-plate`. |
| `--t-caption-weight` | `600` | 30 pages · 4 uses | `font-weight` on `.dr-chip`, `.dr-fchip`, `.dr-channel`, `.dr-cal__grid th`. |
| `--t-caption-line` | `1.4` | 27 pages · 3 uses | `line-height` on `.dr-chip`, `.dr-when__label`, `.dr-route__label`. |
| `--t-micro-size` | `11px` | 128 pages · 9 uses | `font-size` on `.dr-tab`, `.dr-label`, `.dr-label__act`, `.dr-hint`, `.dr-inset__lbl`, `.dr-chip--sm`, `.dr-well--acquiring`, `.dr-profile__rating`, `.dr-slide__art`. |
| `--t-micro-weight` | `600` | 127 pages · 4 uses | `font-weight` on `.dr-label`, `.dr-inset__lbl`, `.dr-profile__rating`, `.dr-slide__art`. |
| `--t-micro-line` | `1.4` | 4 pages · 2 uses | `line-height` on `.dr-chip--sm`, `.dr-profile__rating`. |
| `--t-micro-track` | `.09em` | 127 pages · 3 uses | `letter-spacing` on `.dr-label`, `.dr-well--acquiring`, `.dr-slide__art`. |
| `--t-micro-track-tight` | `.05em` | 2 pages · 1 use | `letter-spacing` on `.dr-inset__lbl` — the FROM / TO route labels. |
| `--t-act-track` | `.02em` | 124 pages · 1 use | `letter-spacing` on `.dr-label__act` — the zone label's trailing note. |
| `--t-microsm-size` | `10.5px` | 14 pages · 3 uses | `font-size` on `.dr-grouptab__count`, `.dr-rail__lbl`, `.dr-count-badge`. |
| `--t-microsm-weight` | `400` | 10 pages · 1 use | `font-weight` on `.dr-rail__lbl`. |
| `--t-microsm-line` | `1.4` | 10 pages · 1 use | `line-height` on `.dr-rail__lbl`. |
| `--t-base-size` | `15px` | 131 pages · 1 use | `font-size` on `.dr` — the frame's inherited default. |
| `--t-base-line` | `1.4` | 131 pages · 5 uses | `line-height` on `.dr`, `.dr-btn`, `.dr-upload__action`, `.dr-toast`; a term of `.dr-field--half`'s `min-height`. |
| `--weight-regular` | `400` | 54 pages · 11 uses | `font-weight` where an element must be pulled *back* to regular: `.dr-note`, `.dr-listing--service .dr-listing__name`, `.dr-profile__role`, `.dr-field__hint`, `.dr-picker__item`, `.dr-call__time`, `.dr-listing__score`, `.dr-when__label`, `.dr-route__label`, two placeholder states. |
| `--weight-medium` | `600` | 131 pages · 28 uses | `font-weight` on 28 selectors — the product's working weight. |

### 1.3 Radius — a closed ramp of six, plus two off-ramp rungs and circles

| Variable | Value | Where used (pages · classes) | Role in each place |
|---|---|---|---|
| `--r-detail` | `4px` | 17 pages · 4 uses | `border-radius` on `.dr-sk-line`, `.dr-sk-route`, `.dr-sk-price`, `.dr-cal__unit:focus-visible` — an internal detail below the ramp. |
| `--r-detail-lg` | `8px` | 11 pages · 1 use | `border-radius` on `.dr-box--check` only. |
| `--r-key` | `5px` | 0 pages (script-built) · 1 use | `border-radius` on `.dr-kb__key` — quoted from iOS, off the ramp on purpose. |
| `--r-hairline` | `2px` | 38 pages · 3 uses | `border-radius` on `.dr-home span`, `.dr-range__bar`. |
| `--r-input` | `10px` | 19 pages · 5 uses | `border-radius` on `.dr-field--area .dr-field__input`, `.dr-search`, `.dr-range__val`, `.dr-segment__seg`, `.dr-cal__clock`. |
| `--r-btn` | `12px` | 129 pages · 9 uses | `border-radius` on `.dr-btn`, `.dr-inset`, `.dr-segment`, `.dr-lang`, `.dr-channel`, `.dr-kb__done`, `.dr-offer`, and the focus rings of `.dr-back` / `.dr-bell`. |
| `--r-media` | `13px` | 83 pages · 9 uses | `border-radius` on `.dr-mark`, `.dr-msg__banner`, `.dr-well`, `.dr-stack__shot`, `.dr-upload`, `.dr-sk-well`, `.dr-sk-block`, `.dr-slide__art`, `.dr-balance__glyph`. |
| `--r-card` | `16px` | 114 pages · 23 uses | `border-radius` on every card-class surface plus `.dr-tab`, `.dr-well--map`, `.dr-when__cell`, `.dr-route__open::after`, `.dr-finder__card`. |
| `--r-panel` | `22px` | 131 pages · 4 uses | `border-radius` on `.dr-screen`, `.dr-sheet`; and **negated as a `margin-bottom`** on `.dr-mapview` (`calc(var(--r-panel) * -1)`) — the same number spent as a distance, so the map bleeds under the screen's own rounded corner. Derived, so the two cannot drift apart. |
| `--r-pill` | `999px` | 60 pages · 31 uses | `border-radius` on pills, chips, badges, the switch track, range rail and thumb, the sheet grip, the toast, the FAB — **and on the three avatar discs** `.dr-avatar-lg/-md/-sm`. |
| `--r-circle` | `50%` | 36 pages · 11 uses | `border-radius` on `.dr-btn--icon`, `.dr-status`, `.dr-node`, `.dr-mark--milestone`, `.dr-field__clear`, `.dr-switch__knob`, `.dr-call__avatar`, `.dr-sk-btn`, `.dr-cal__nav`, `.dr-cal__day`. **The same role as `--r-pill` on the avatars — see §3.** |

### 1.4 Space — base 4

| Variable | Value | Where used (pages · uses) | Role in each place |
|---|---|---|---|
| `--sp-within` | `4px` | 128 · 23 | `gap` on `.dr-tabs`, `.dr-order__head`, `.dr-profile__rating`, `.dr-balance`; `padding` on `.dr-tabs`, `.dr-well`, `.dr-cal__clock`, `.dr-slide`, `.dr-sheet__scroll`; `margin-top` on six elements; `top`/`right` of `.dr-bell .dr-count-badge`; `bottom` of the track connector; a term of `--sz-glyph-plate`. |
| `--sp-within-lg` | `8px` | 133 · 54 | `gap` (28 selectors) · `padding` (17) · `margin`, `margin-left/-right/-top` · **`transform`** on `.dr-toast` · **`width`** on `.dr-cal__grid` · `right` of a route separator. |
| `--sp-snug` | `12px` | 132 · 68 | The most-spent token: `gap` (30) · `padding` (15) · `min-height` terms · `padding-block/-inline/-top/-bottom` · `left`/`top`/`bottom` offsets of five separators · `margin-block`, `margin-top`, `margin-bottom`; also `--pick-indent`'s second term. |
| `--sp-screen` | `16px` | 132 · 59 | `padding` (26 selectors) — the 16px screen gutter; `margin-inline`, `margin-left/-right`; `gap`; `left`/`right`/`top` of full-bleed separators; a term of `.dr-topbar__title`'s `max-width`; and in a media query it **redefines `--sp-group`**. |
| `--sp-group` | `20px` | 58 · 15 | `padding` on `.dr-card`, `.dr-op`, `.dr-toast`, `.dr-balance`, `.dr-fab`; `gap` on `.dr-card`, `.dr-choice`, `.dr-call .dr-main`; `margin-top` on three; `bottom` of `.dr-toast`; `margin` of a bleed slide. |
| `--sp-list` | `28px` | 18 · 2 | `gap` on `.dr-log`, `.dr-list` — the gap *between* cards. |
| `--sp-cta` | `32px` | 4 · 4 | `padding` on `.dr-msg--banner`, a bleed slide; `padding-block`; `padding-bottom` on `.dr-card--cta`. |
| `--sp-2` | `2px` | 38 · 15 | `gap`, `padding`, `margin-top`, **and `width`/`height` of `.dr-switch__knob`'s inset**. |
| `--sp-3` | `3px` | 36 · 5 | `gap` on `.dr-tab`; `padding` on `.dr-chip--sm`, `.dr-profile__rating`, `.dr-kb__plane`; `left` of the avatar badge. |
| `--sp-5` | `5px` | 131 · 5 | `gap` on `.dr-statusbar__sys`; `padding` on `.dr-chip`, `.dr-fchip`. |
| `--sp-6` | `6px` | 126 · 17 | `gap` (10 selectors) · `padding` on `.dr-tabs` · `margin-left/-top` · `top`/`right` of `.dr-status` · `bottom` of the today dot. |
| `--sp-9` | `9px` | 124 · 4 | `gap` on `.dr-rail__step`; `padding` on `.dr-label`, `.dr-field__hint`; `margin-top` on `.dr-op__badges`. |
| `--sp-10` | `10px` | 88 · 10 | `gap` on `.dr-rows__row`, `.dr-field`, `.dr-when__cell`; `column-gap`; `padding` on `.dr-chip`, `.dr-bubble`, `.dr-cal__clock`; a `min-height` term. |
| `--sp-13` | `13px` | 52 · 3 | `padding` on `.dr-rows__row`; `height` of `.dr-sk-line`; `margin-bottom` of `.dr-profile__photo`. |
| `--sp-14` | `14px` | 3 · 2 | `gap` on `.dr-call__bar`; `padding` on `.dr-inset` under `max-width: 389px`. |
| `--sp-18` | `18px` | 34 · 5 | `padding` on `.dr-msg`, `.dr-kb__row--mid`; `gap` on `.dr-card` under 389px; `height` of `.dr-kb__quick span`; `padding-bottom` of `.dr-track__item`. |
| `--sp-22` | `22px` | 34 · 1 | `padding` on `.dr-msg`. |
| `--sp-24` | `24px` | 105 · 7 | `padding` on `.dr-actionbar`, `.dr-card`, `.dr-upload`, `.dr-sheet`; `gap` on `.dr-main--zones`; `max-width` of `.dr-toast`; `min-height` of the textarea. |

### 1.5 Size

| Variable | Value | Where used (pages · uses) | Role in each place |
|---|---|---|---|
| `--h-control` | `44px` | 124 · 25 | `min-height` on 12 controls — the HIG target; `height` on `.dr-range__rail/__input`, `.dr-segment`, `.dr-cal__nav`, `.dr-cal__day`, `.dr-cal__grid tbody tr`, `.dr-kb__bar`; `width` on `.dr-star`, `.dr-cal__nav/__day`; `padding-bottom` of `.dr-main--fab`; both terms of `--pill-bleed` and `--hist-seat`. |
| `--h-statusbar` | `44px` | 131 · 2 | `height` of `.dr-statusbar`; `max-height` term of `.dr-sheet--tall`. |
| `--h-topbar` | `56px` | 128 · 1 | `height` of `.dr-topbar`. (Measured 56 on all ten painted pages; `ui/inventory.md` says 44 — recorded at the top of `kit.css`.) |
| `--h-tabs` | `60px` | 34 · 2 | `height` of `.dr-tabs`; a term of `.dr-fab`'s `bottom`. |
| `--h-tab` | `50px` | 34 · 1 | `height` of `.dr-tab`. |
| `--h-home` | `30px` | 37 · 3 | `height` of `.dr-home`; `padding` of `.dr-kb__plane`; a term of `.dr-fab`'s `bottom`. |
| `--h-kb` | `291px` | script-built · 1 | `height` of `.dr-kb__plane`. |
| `--h-kb-quick` | `45px` | script-built · 1 | `height` of `.dr-kb__quick`. |
| `--h-groups` | `48px` | 10 · 3 | `height` of `.dr-groups`; `line-height` term of the underline tab; `scroll-padding-top` of the main behind it. |
| `--h-pill` | `32px` | 11 · 3 | `height` of `.dr-grouptab`, `.dr-lang`; a term of `--pill-bleed`. |
| `--w-home-bar` / `--h-home-bar` | `134px` / `5px` | 37 · 1 each | `width` / `height` of `.dr-home span`. |
| `--sz-node` | `22px` | 11 · 8 | `width`/`height` of `.dr-node`; **`height` of `.dr-switch` and width+height of `.dr-switch__knob`**; `top` of the track connector; a term of `--node-centre` and of the knob's travel. A shape's rung read as a control's height — the coupling is written down in `kit.css`. |
| `--sz-node-glyph` | `12px` | **0 uses** | Declared; the node's glyph takes `--ic-12` instead. |
| `--sz-node-border` | `2px` | 10 · 1 | `border` of `.dr-node`. |
| `--sz-track` | `2px` | 10 · 3 | `height` of the rail; `width` of the vertical connector; a term of `--node-centre`. |
| `--sz-status` | `20px` | 1 (`order-history`) · 2 | `width`/`height` of `.dr-status`. |
| `--sz-status-ring` | `2px` | 3 · 2 | `box-shadow` spread on `.dr-status`; `border` of the offline availability dot. |
| `--sz-mark` | `52px` | 48 · 2 | `width`/`height` of `.dr-mark`. |
| `--sz-mark-lg` | `64px` | 15 · 2 | `width`/`height` of `.dr-mark--milestone`. |
| `--sz-action` | `44px` | 10 · 10 | `width`/`height`/`min-height` of `.dr-btn--icon`, `.dr-sk-btn`, `.dr-call__side--empty`; **`padding` of `.dr-route__row`**; `top`/`right` offsets in the route strip; and the source of `--sz-head-mark`. |
| `--sz-glyph-plate` | `calc(…)` = 44 | 1 (`wallet`) · 2 | `width`/`height` of `.dr-balance__glyph` — derived from the type steps beside it, not from `--sz-action`. |
| `--sz-box` | `24px` | 13 · 7 | `width`/`height` of `.dr-box` and of both range thumbs; first term of `--pick-indent`. |
| `--sz-switch` | `36px` | 1 (`account-edit`) · 2 | `width` of `.dr-switch`; the knob's `transform` distance. |
| `--sz-well-w` / `--sz-well-h` | `96px` / `96px` | 29 · 2 each | `width`/`height` of `.dr-well` and `.dr-sk-well`. Remapped to the `-sm` pair under `max-width: 389px`. |
| `--sz-well-w-sm` / `--sz-well-h-sm` | `68px` / `68px` | media query only · 1 each | Redefine `--sz-well-w/-h` on the narrow tier. |
| `--sz-well-w-xs` / `--sz-well-h-xs` | `56px` / `44px` | 4 · 2 each | `width`/`height` of `.dr-choice > .dr-well` and `.dr-offer > .dr-well`. |
| `--sz-avatar` | `117px` | 12 · 1 | `width` of `.dr-op__photo` — an asset ratio, not a grid step. |
| `--sz-avatar-xl` | `120px` | 4 · 2 | `width`/`height` of `.dr-avatar-lg`. |
| `--sz-avatar-md` | `56px` | 1 (`order-confirmed-empty`) · 2 | `width`/`height` of `.dr-avatar-md`. |
| `--sz-avatar-sm` | `28px` | 2 · 2 | `width`/`height` of `.dr-avatar-sm` — the operator's face in the nav bar. |
| `--sz-photo-mark` | `24px` | **0 pages** · 1 | `min-height` of `.dr-profile__rating`. |
| `--sz-head-mark` | `var(--sz-action)` | **0 pages** · 5 | `width`/`height` of `.dr-avatar-edit__badge` on a profile head; `margin-bottom` of the photo block. The `:has(.dr-profile__rating)` branch is unreachable — no page carries that class. |
| `--sz-rating-w` | `56px` | **0 pages** · 2 | `min-width` of the rating pill; `left` of the badge beside it. |
| `--sz-avatar-badge` | `20px` | 2 · 2 | `width`/`height` of `.dr-avatar-edit__badge` in its default (corner) placement. |
| `--w-badge-ring` | `2px` | 2 · 2 | `border` of `.dr-avatar-edit__badge` and `.dr-profile__rating` — a cut-out edge, never a shadow. |
| `--w-shot-edge` | `3px` | 1 (`delivery-aerial`) · 1 | `border` of `.dr-stack__shot`. |
| `--sz-arrow` | `26px` | 2 · 4 | `width`/`height` of `.dr-inset__dir`, `.dr-sk-dir`. |
| `--sz-tick` / `--sz-tick-h` | `30px` / `2px` | 124 · 1 each | `width` / `height` of `.dr-label::after` — the green tick under a zone label. |
| `--sz-dot` | `10px` | 5 · 4 | `width`/`height` of `.dr-box__dot` (checked radio) and `.dr-avail__dot`. |
| `--sz-rail` | `4px` | 2 · 3 | `height` of `.dr-range__rail::before` and `.dr-range__fill`; a term of `--hist-seat`. |
| `--sz-hist` | `48px` | 2 · 1 | `height` of `.dr-range__hist` — the price chart. |
| `--sz-rowkey` | `96px` | 58 · 4 | `flex` basis of `.dr-rows__key` and `.dr-field__label`; `grid-template-columns` of `.dr-rows`. The label column's **floor**, not its width. |
| `--sk-title-h` `--sk-date-h` `--sk-lbl-h` `--sk-lbl-w` `--sk-lbl-w-sm` `--sk-place-h` `--sk-price-h` `--sk-price-w` `--sk-stop-gap` `--sk-head-gap` | `14` `10` `12` `38` `22` `16` `18` `84` `7` `8` px | 1–6 pages each | Each is one skeleton bar's `height` or `width`, sized to the element it stands in for, on `order-history-loading` and `notifications-loading`. `--sk-lbl-w` reaches no page: `.dr-sk-lbl` is in no markup. |
| `--sz-brand-w` / `--sz-brand-h` | `60px` / `20px` | 48 · 1 each | `width` / `height` of `.dr-brand`. |
| `--node-centre` | `calc((22−2)/2)` | 10 · 2 | `left` / `top` of the rail and connector — derived so the arithmetic cannot drift. |
| `--pick-indent` | `calc(24+12)` | **0 uses** | Declared; the row it indented lost its own inset at rev 91. |
| `--pill-bleed` | `calc((44−32)/−2)` | 11 · 3 | `inset` of `.dr-grouptab::after` — grows the hit area to 44 without moving the pill; also places `.dr-finder__actions .dr-count-badge`. |
| `--hist-seat` | `calc(4/2 − 44/2)` | 2 · 1 | `margin-top` of `.dr-range__rail` — seats the chart on the rail. |
| `--sz-pager-dot` | `8px` | 5 · 4 | `width`/`height` of `.dr-pager > *` and `.dr-avail-badge__dot`. |
| `--sz-today-dot` | `4px` | script-built · 3 | `width`/`height`/`margin-left` of `.dr-cal__day--today::after`. |
| `--sz-area-min` | `80px` | 10 · 2 | `min-height` of `.dr-field--area` and its input. |
| `--sz-upload-min` | `140px` | 7 · 1 | `min-height` of `.dr-upload`. |
| `--sz-star` | `32px` | 2 · 12 | `width`/`height` of the star glyph and `.dr-rating-arc`; the source of all four `--sz-star-*` derivations. |
| `--sz-star-ink` `--sz-star-inset` `--sz-star-mid` `--sz-star-out` | `calc(--sz-star × …)` | **0 pages** · 1/1/4/5 | `width`/`height` of `.dr-stars__fill` and the arc's outer stars — `.dr-stars*` is in no markup. |
| `--sz-fchip-x` | `18px` | 4 · 6 | `width`/`height` of `.dr-fchip__x`, **and** `height`/`min-width` of `.dr-grouptab__count` and `.dr-count-badge` — three components on one number. |
| `--sz-avatar-call` | `176px` | 3 · 2 | `width`/`height` of `.dr-call__avatar`. |
| `--sz-grip-w` / `--sz-grip-h` | `36px` / `5px` | 29 · 1 each | `width` / `height` of `.dr-sheet__grip`. |
| `--screen-w` / `--screen-h` | `375px` / `812px` | 131 · 1 / 3 | `width` / `height` of `.dr-screen`; `--screen-h` is also the first term of `.dr-field--half`'s half-screen `min-height`. |
| `--measure-msg` | `260px` | 36 · 2 | `max-width` of `.dr-msg__body`, `.dr-bubble`. |
| `--map-aspect` | `1.99` | 10 · 1 | `aspect-ratio` of `.dr-well--map`. |
| `--fill-2of4` | `25%` | 10 · 1 | Sets `--dr-fill` on `.dr-rail--at2`. |
| `--dr-fill` | `var(--fill-2of4)` | 10 · 1 | `width` of `.dr-rail::after` — the walked span. |
| `--rail-track-start` / `--rail-track-span` | `12.5%` / `75%` | 10 · 1 each | `left` / `width` of the rail — column centres, not pixels. |
| `--banner-h` `--banner-shift` `--banner-art` `--banner-top` | `150px` `56px` `78%` `16px` | 1 (`order-history-empty`) · 1 each | `height`, `margin-top`, `background-size`, `background-position` of the empty-state banner. |
| `--w-stack-shot` `--stack-aspect` `--sp-stack-lap` `--sp-stack-in` | `62%` `3/2` `−14%` `6%` | 1 (`delivery-aerial`) · 1 each | `width`, `aspect-ratio`, overlap `margin-top`, right `margin` of the photo pile. |
| `--sk-w90` `--sk-w70` `--sk-w50` `--sk-w40` `--sk-w30` | `90/70/50/40/30 %` | 5–8 loading pages · 1 each | `width` of a skeleton bar — varied so three skeletons do not read as one stamped block. |
| `--mark-shift` | `0px` (set on a rule, not `:root`) | **0 pages** · 2 | `left` of the badge and `transform` of the rating pill inside `.dr-profile__photo:has(.dr-profile__rating)`. |

### 1.6 Icon sizes, lines, focus

| Variable | Value | Where used (pages · uses) | Role in each place |
|---|---|---|---|
| `--ic-12` | `12px` | 12 · 8 | `.dr-ic--12`; the glyph inside `.dr-status`, `.dr-node`, `.dr-avatar-edit__badge`. |
| `--ic-13` | `13px` | **0 pages** · 2 | `.dr-ic--13` — a declared rung nothing spends. |
| `--ic-14` | `14px` | 37 · 8 | `.dr-ic--14`; glyphs in `.dr-inset__dir`, `.dr-chip`, `.dr-box`. |
| `--ic-16` | `16px` | 23 · 10 | `.dr-ic--16`; glyphs in `.dr-search`, `.dr-grouptab--icon`, `.dr-route__mark`; **and `top`/`bottom` of the route connector**. |
| `--ic-17` | `17px` | 131 · 4 | `.dr-ic--17`; the status-bar system glyphs. |
| `--ic-20` | `20px` | 132 · 15 | The default `.dr-ic` size; `.dr-btn--icon`, `.dr-field__clear`, `.dr-cal__nav`, `.dr-when__cell`, `.dr-picker__lead`, `.dr-route__mark`; **and `left` of two separators**. |
| `--ic-22` | `22px` | 110 · 16 | `.dr-ic--22`; `.dr-back`, `.dr-bell`, `.dr-tab`, `.dr-avatar-edit__badge`, `.dr-channel`, `.dr-balance__glyph`. |
| `--ic-26` | `26px` | 48 · 4 | `.dr-ic--26`; the glyph in `.dr-mark`. |
| `--ic-32` | `32px` | 22 · 8 | `.dr-ic--32`; `.dr-mark--milestone`, `.dr-upload`, `.dr-sk-up`. |
| `--ic-stroke` | `1.7` | 132 · 1 | `stroke-width` on `.dr-ic` — declared once, the rendered line follows the box. |
| `--ic-grid` | `0 0 24 24` | **0 uses** | Declared; every SVG writes `viewBox="0 0 24 24"` in markup instead. |
| `--hair` | `1px` | 133 · 28 | `border` / `border-top` / `-bottom` / `-left` on 15 selectors; `height` or `width` of six separator pseudo-elements; a subtrahend in `.dr-groups--tabs`'s `line-height` and in `scroll-padding-top` and `top`. |
| `--box-edge` | `1.7px` | 13 · 1 | `border` of `.dr-box` — the selection control's edge, deliberately the icon stroke's number. |
| `--focus-w` | `2.5px` | 132 · 30 | `outline` width on all 30 `:focus-visible` rules. |
| `--focus-offset` | `2px` | 129 · 29 | `outline-offset` on 29 of them (negated on three, where the ring must turn inward). |

### 1.7 Elevation and motion

| Variable | Value | Where used (pages · uses) | Role in each place |
|---|---|---|---|
| `--sh-sm` | `0 1px 2px rgba(20,18,15,.05)` | 111 · 3 | `box-shadow` on `.dr-btn--primary`, `.dr-btn--primary.dr-btn--icon`, `.dr-lang button[pressed]`. |
| `--sh-card` | 2-layer | **0 uses** | Declared rung, applied to nothing. |
| `--sh-raised` | 2-layer | 30 · 3 | `box-shadow` on `.dr-sheet`, `.dr-toast`, `.dr-fab` — the three things that genuinely float. |
| `--sh-onphoto` | `0 2px 8px rgba(20,18,15,.18)` | **0 uses** | Declared rung, held for a chip that floats over a photograph. |
| `--halo-now` | `0 0 0 4px green@20%` | 10 · 1 | `box-shadow` on `.dr-node--now`. |
| `--dur-fast` | `.12s` | 119 · 5 | `transition` of `transform` on `.dr-btn`; of the switch knob, the disclosure chevron, the pager dot. |
| `--dur-base` | `.15s` | 119 · 4 | `transition` of `filter` and `background` on `.dr-btn`; of `.dr-toast`. |
| `--dur-ping` | `1.8s` | 1 · 1 | `animation` of `.dr-status--live::after`. |
| `--dur-pulse` | `1.4s` | 15 · 1 | `animation` of every skeleton bar. |
| `--dur-upload` | `1.6s` | 2 · 1 | `animation` of `.dr-sk-arrow`. |
| `--dur-spin` | `1.1s` | 4 · 1 | `animation` of `.dr-spin` — deliberately out of phase with the pulse. |
| `--dur-sheet` | `.32s` | 25 · 3 | `animation` of `.dr-sheet--picker`, its scrim, and `.dr-kb`. |
| `--ease-out` | `cubic-bezier(.22,.61,.36,1)` | 31 · 9 | the easing of five animations and three transitions. |
| `--lift-active` | `1px` | 118 · 9 | `translateY` in nine `:active` rules. |
| `--scale-active` | `.99` | 118 · 10 | `scale` in ten `:active` rules. |
| `--bright-hover` | `1.03` | 114 · 7 | `filter: brightness` in seven `:hover` rules. |
| `--pulse-floor` | `.5` | keyframe only · 1 | `opacity` at 50 % of `@keyframes dr-pulse`. |
| `--ping-reach` | `8px` | keyframe only · 1 | the ring's spread at 70 % of `@keyframes dr-ping`. |
| `--up-out` / `--up-in` | `−3.2px` / `2.6px` | keyframe only · 1 each | the arrow's travel out of and back into the upload tray. |
| `--turn-open` | `180deg` | script-free, 0 pages · 1 | `rotate` of the disclosure chevron — `.dr-disclosure` is in no markup. |
| `--tilt-1/-2/-3` | `3deg` `−3.5deg` `2deg` | 1 (`delivery-aerial`) · 1 each | static `rotate` of the three photographs in the pile. |
| `--scrim` | `ink @ 40 %` | 26 · 1 | `background` of `.dr-scrim` — warm, never black. |

---

## 2. Finding A — value drift

### A1 · Two complete palettes are loaded on the same 123 pages, and they name the same seven roles at different values

`_wireframe.css` is linked before `ui/kit.css` on 123 of the 134 pages. It declares its own
`:root`. Both sets are live; the kit wins by source order, not by intent.

| Role | Kit | Grayscale sheet | Distance |
|---|---|---|---|
| page / surface ground | `--page #F7F5F2` | `--wf-surface #FFFFFF` (+ `--wf-bg #F4F4F4`) | warm vs. pure white — and `kit.css`'s palette comment states "No `#FFFFFF` and no `#000000` anywhere" |
| card ground | `--card #ECE9E4` | `--wf-recessed #EEEEEE` | warm vs. neutral |
| media / fill | `--media #E4E1DA` | `--wf-fill #E2E2E2` | warm vs. neutral |
| skeleton bar | `--btn2 #D6D2C9` | `--wf-skeleton #D8D8D8` | warm vs. neutral |
| primary ink | `--ink #1A1A1A` | `--wf-ink #111111` (+ `--wf-text #252525`) | **three values for one role** |
| secondary ink | `--slate #5A5751` | `--wf-text-2 #5A5A5A` (+ `--wf-muted #909090`) | `#5A5751` vs. `#5A5A5A` — 3 points apart on two channels |
| hairline | `--line #D9D5CE` | `--wf-border rgba(0,0,0,.09)`, `--wf-border-2 rgba(0,0,0,.15)` | a warm solid vs. two black alphas |

Painted pages carry **both class names on one element** — `class="topbar dr-topbar"`,
`class="zlabel dr-label"` (124 pages). Each of those elements is addressed by two sheets at
equal specificity. What they render is decided by the link order.

### A2 · The same `--wf-*` palette is declared eleven more times, inline

Eleven pages restate all twelve `--wf-*` definitions inside their own `<style>` block:
`listings`, `-empty`, `-error`, `-filtered`, `-filters`, `-loading`,
`listings-filter-city` / `-country` / `-district` / `-region`, and `operator-listings`.
`_navbar-options.html` restates seven of them.

Ten of the eleven are exactly the pages that do **not** link `_wireframe.css` — the sheet was
pasted in instead of linked. The eleventh, `listings.html`, **does both**: it links the sheet
and re-declares the same twelve tokens above it.

All values match today. There are **twelve places** to edit if one moves, plus the partial
seven in `_navbar-options.html`.

### A3 · One role, two values, inside the kit

| Role | Two values | Where |
|---|---|---|
| a circular shape's radius | `--r-pill 999px` vs `--r-circle 50%` | `.dr-avatar-lg/-md/-sm`, `.dr-switch`, `.dr-box--radio`, `.dr-box__dot`, `.dr-avail__dot` take `999px`; `.dr-call__avatar`, `.dr-btn--icon`, `.dr-status`, `.dr-node`, `.dr-switch__knob`, `.dr-cal__day` take `50%`. The switch's **track** is `999px` and its **knob** is `50%`. |
| the card's media well | `--sz-well-w/h` = `96 × 96` (`.dr-well`) | `listings-filtered.html`'s page-local `.media-ph:has(img)` builds the same card's render at **`96 × 72`**, `border-radius: 6px`, on `--wf-recessed` — a second value for one role, in the page rather than the kit. |
| a card's radius | `--r-card 16px` | the grayscale sheet and every page `<style>` draws a card at `border-radius: 8px`; a button at `6px`. |

### A4 · A value that moved and left its trace

`--green-soft` is `#B7DA7C` today and was `#A9D563` for one revision. Both are written in
`kit.css`; only the first is a declaration, the second a comment. The token now has **zero
spends** — `.dr-balance--banner` went back to `--green` — so a fifth green sits in the
palette with no surface.

### A5 · One value declared under many names

Not drift in itself — separate scales may legitimately land on one number — but it is what
makes drift hard to see. Counted off `:root`:

| Value | Names | Which |
|---|---|---|
| `2px` | **8** | `--r-hairline` · `--sp-2` · `--sz-node-border` · `--sz-track` · `--sz-status-ring` · `--w-badge-ring` · `--sz-tick-h` · `--focus-offset` |
| `1.4` | **7** | `--t-display-line` · `--t-title-line` · `--t-bodysm-line` · `--t-caption-line` · `--t-micro-line` · `--t-microsm-line` · `--t-base-line` |
| `22px` | 6 | `--t-display-size` · `--r-panel` · `--sp-22` · `--sz-node` · `--sk-lbl-w-sm` · `--ic-22` |
| `20px` | 6 | `--t-number-size` · `--sp-group` · `--sz-status` · `--sz-avatar-badge` · `--sz-brand-h` · `--ic-20` |
| `12px` | 6 | `--t-caption-size` · `--r-btn` · `--sp-snug` · `--sz-node-glyph` · `--sk-lbl-h` · `--ic-12` |
| `400` | 6 | five `--t-*-weight` + `--weight-regular` |
| `600` | 5 | four `--t-*-weight` + `--weight-medium` |
| `56px` | 5 | `--h-topbar` · `--sz-well-w-xs` · `--sz-avatar-md` · `--sz-rating-w` · `--banner-shift` |
| `16px` | 5 | `--r-card` · `--sp-screen` · `--sk-place-h` · `--ic-16` · `--banner-top` |
| `8px` | 5 | `--r-detail-lg` · `--sp-within-lg` · `--sk-head-gap` · `--ping-reach` · `--sz-pager-dot` |
| `44px` | 4 | `--h-control` · `--h-statusbar` · `--sz-action` · `--sz-well-h-xs` |
| `#1A1A1A` | 3 | `--ink` · `--on-green` · `--night` |
| `15px` | 3 | `--t-heading-size` · `--t-lead-size` · `--t-base-size` |
| `96px` | 3 | `--sz-well-w` · `--sz-well-h` · `--sz-rowkey` |

(Full list: 37 values carry more than one name.)

---

## 3. Finding B — one variable, several roles

Ordered by how far apart the roles are.

| Variable | Roles it carries at once | Sites |
|---|---|---|
| **`--green`** | **action** (primary CTA) · **selection** (chosen tab, checked box, checked radio, selected day, selected offer, language toggle) · **live state** (status disc, ping ring) · **done state** (node, rail, checklist line, tick under a zone label) · **count** (`.dr-count-badge`, `.dr-grouptab__count`'s ground) · **identity/edit affordance** (`.dr-profile .dr-avatar-edit__badge`) · **money** (`.dr-balance--card/--banner`) · **removal** (`.dr-fchip__x`) | 23 background sites + 3 borders |
| **`--ink`** | **primary text** (≈80 selectors) · **a fill** (brand mark, home indicator, switch knob, range fill, toast ground, selected-tab underline) · **the focus ring's colour** (30 outlines) · **a caret** · **a border** (`.dr-box`) · **the scrim's source** | 128 uses |
| **`--btn2`** | **a surface** (secondary button, disabled button, icon button, switch track, skeleton bar, pager dot, keyboard plane) · **an ink** (`.dr-call .dr-label`, `.dr-call__time`, `.dr-star`, `.dr-stars` — light text on the night ground) | 20 backgrounds + 4 colours |
| **`--page`** | **the screen's ground** · **an ink** (on `--night` and on `--danger`) · **a border** (the photo-pile cut-out) · **a focus ring** on dark | 14 + 9 + 2 + 2 |
| **`--media`** | **a resting surface** (well, chip, avatar ground, textarea, search field) · **the hover state** of the secondary pair (9 `:hover` rules) | 32 uses |
| **`--slate`** | **secondary text** (58 sites) · **the disabled ink** · **a border** (`.dr-btn--outline`) | 60 uses |
| **`--line`** | **every hairline border** · **the background of nine separator pseudo-elements** · **the fill of `.dr-sheet__grip`**, which is a shape and not a rule | 25 uses |
| **`--card`** | **the card plane** · **a ring** (`box-shadow` on `.dr-status`) · **a border** (`.dr-avatar-edit__badge`) | 24 uses |
| **`--h-control` (44)** | **the HIG touch target** (12 `min-height`) · **a row height** (rail, segment, calendar row) · **a width** (`.dr-star`, `.dr-cal__nav/__day`) · **arithmetic** inside `--pill-bleed` and `--hist-seat` | 25 uses |
| **`--sz-action` (44)** | **a control's box** (`.dr-btn--icon`) · **a badge's box** (`--sz-head-mark`) · **padding** (`.dr-route__row`) · **offsets** (`top`, `right`) | 10 uses |
| **`--sz-node` (22)** | **the progress node's diameter** · **the switch's height and its knob's box** (the coupling is declared in `kit.css` and flagged there for re-decision) | 8 uses |
| **`--sz-fchip-x` (18)** | **the filter chip's ✕** · **the group tab's count badge** · **the bell's count badge** | 6 uses |
| **`--sp-within-lg` (8)** | **gap** · **padding** · **margin** · **a `transform` distance** (`.dr-toast`) · **a `width`** (`.dr-cal__grid`) | 54 uses |
| **`--sp-screen` (16)** | **the screen gutter** · **a gap** · **a separator's inset** · **a term in a `max-width` calc** · **and it redefines `--sp-group` inside a media query** | 59 uses |
| **`--ic-16` / `--ic-20`** | **a glyph's box** · **the `top`/`bottom`/`left` offsets of route separators** — an icon-scale rung spent as geometry | 10 / 15 uses |
| **`--hair` (1)** | **a border width** · **the height or width of a separator element** · **a subtrahend** in `line-height`, `scroll-padding-top`, `top` | 28 uses |
| **`--r-panel` (22)** | **a radius** (`.dr-screen`, `.dr-sheet`) · **a negative `margin-bottom`** (`.dr-mapview`, so the map bleeds under that same radius) | 4 uses |
| **`--warn`** | **the filled star** · **the operator's rating pill** (declared; that class is in no markup) | 3 uses |
| **`--screen-h` (812)** | **the frame's height** · **a term of a field's `min-height`** | 3 uses |
| **`--h-statusbar` (44)** | **the status bar's height** · **the tall sheet's top inset** | 2 uses |

**Declared with no page to play a role on** — 20 variables. `--green-soft`, `--trust-ink`,
`--trust-wash`, `--sh-card`, `--sh-onphoto`, `--pick-indent`, `--sz-node-glyph`,
`--t-body-weight`, `--t-bodysm-weight`, `--ic-grid`, `--ic-13`, `--sk-lbl-w`,
`--sz-photo-mark`, `--sz-head-mark`, `--sz-rating-w`, `--mark-shift`, `--sz-star-ink`,
`--sz-star-inset`, `--sz-star-mid`, `--sz-star-out`.

Behind them sit **38 kit classes styled but present in no markup and built by no script** —
55 are absent from markup, 17 of those are script-built (§0). The 38:
`.dr-actionbar__row` · `.dr-btn--danger` · `.dr-btn--outline` · `.dr-card--cta` ·
`.dr-chip--trust` · `.dr-counter` · `.dr-counter__count` · `.dr-disclosure` ·
`.dr-disclosure__item` · `.dr-field__clear` · `.dr-field__err` · `.dr-ic--13` · `.dr-ic--17` ·
`.dr-ic--26` · `.dr-op--badgerow` · `.dr-op__head` · `.dr-price--total` · `.dr-profile__edit` ·
`.dr-profile__rating` · `.dr-profile__role` · `.dr-range__ends` · `.dr-range__out` ·
`.dr-route__input` · `.dr-segment` · `.dr-segment__seg` · `.dr-sheet__bar` · `.dr-sk-dir` ·
`.dr-sk-lbl` · `.dr-sk-place` · `.dr-sk-stop` · `.dr-stars` · `.dr-stars--arc` ·
`.dr-stars__fill` · `.dr-track__item` · `.dr-track__item--done` · `.dr-track__item--now` ·
`.dr-track__text` · `.dr-well--shot`.

Two of them are modifier classes whose token is still spent through a descendant selector:
`.dr-ic--17` and `.dr-ic--26` are unused, but `--ic-17` and `--ic-26` still reach pages through
`.dr-statusbar__sys .dr-ic` and `.dr-mark .dr-ic`.

---

## 4. Finding C — values past variables

### C1 · `ui/kit.css` — 20 literal design values in 2 781 declarations

Every one carries a comment saying why. Listed as found, not judged.

| Line | Selector | Declaration | What it bypasses |
|---|---|---|---|
| 4502 | `.dr-btn--pay` | `background: #000; color: #FFF` | The palette's own rule at line 55: *"No `#FFFFFF` and no `#000000` anywhere."* Apple's and Google's brand requirement; the hover state immediately steps back to `var(--ink)`. |
| 718 | `.dr-back` | `width: 44px; height: 44px` | `--h-control` / `--sz-action`, both 44. |
| 757 | `.dr-bell` | `width: 44px; height: 44px` | the same two. |
| 678 | `.dr-topbar__title` | `max-width: calc(100% − 2 * (44px + var(--sp-screen)))` | the 44 is `.dr-back`'s box restated. |
| 1889 | `.dr-groups--tabs .dr-grouptab::after` | `height: 2px` | `--sz-track` / `--r-hairline` / `--sp-2`, all 2. |
| 3537 | `.dr-paymark` | `width: 40px; height: 20px` | no rung exists; `20` is `--sz-brand-h`. |
| 4515 | `.dr-paymark--pay` | `width: 46px; height: 23px` | the 40 × 20 box scaled 15/13. |
| 3552 | `.dr-idmark` | `width: 20px; height: 20px` | `--ic-20` / `--sz-status` / `--sz-avatar-badge`, all 20. |
| 4237 | `.dr-lang button` | `min-width: 36px` | `--sz-switch` / `--sz-grip-w`, both 36. |
| 4242 | `.dr-lang button` | `letter-spacing: .04em` | not on the tracking scale (`.09` / `.05` / `.02` / `−.01` / `−.02`). |
| 4407 | `.dr-fchip__x` | `line-height: 1` | `--t-number-line` is 1. |
| 5600 | `.dr-slide--floor .dr-slide__art img` | `object-position: center calc(100% + 7px)` | no rung; `7` is `--sk-stop-gap`. |
| 609 | `.dr-sr, .sr-only` | `width: 1px; height: 1px` | the standard clip idiom — structural, not a design value. |

### C2 · Page `<style>` blocks — 1 263 literal design values across 17 pages

| Page | Declarations | Token definitions | Literal design values |
|---|---|---|---|
| `operator-listings.html` | 474 | 12 | **196** |
| `listings-filtered.html` | 379 | 12 | **162** |
| `listings.html` | 360 | 12 | **151** |
| `listings-empty.html` | 274 | 12 | 117 |
| `listings-error.html` | 274 | 12 | 117 |
| `listings-loading.html` | 260 | 12 | 111 |
| `listings-filters.html` | 219 | 12 | 97 |
| `listings-filter-city / -country / -district / -region` | 93 each | 12 each | 40 each |
| `_navbar-options.html` | 113 | 7 | 60 |
| `_checkbox-options.html` | 52 | 0 | 29 |
| `_field-options.html` | 62 | 0 | 26 |
| `account.html` | 37 | 0 | 17 |
| `operator-account.html` | 37 | 0 | 17 |
| `switch-role.html` | 11 | 0 | 3 |

The most repeated literals inside these blocks: `font-weight: 600` (106×),
**`border-radius: 6px` (55×)** — a radius that is on no ramp, kit or grayscale —
`font-size: 13px` (51×), `border-radius: 8px` (23×), `border-radius: 4px` (22×),
`height: 56px` (20×), `height: 44px` (15×), `outline: 2px solid` (17×).

**Which of these are alive:** the `account.html` and `operator-account.html` blocks are dead —
`.op-edit`, `.ic-edit`, `.op-card`, `.pencil` appear in no markup on either page.
`switch-role.html`'s `.success-mark:has(img)` is alive. `listings-filtered.html`'s
`.media-ph` is **alive** and draws the service card's drone render (see A3).
`_field-options.html` holds two literal hexes that exist nowhere else in the project —
`#6C6963` and `#86827A`, two placeholder shades under comparison.

### C3 · Inline `style="…"` attributes — 40 occurrences carrying a design value

| Value | Where |
|---|---|
| `border-radius: 6px` | `order-setup.html`, `-aerial`, `-inspection`, `payment.html`, `-aerial`, `-inspection` — six painted pages, on a radius that is on no ramp |
| `height: 180px` | `delivery.html`, `delivery-loading.html`, `order-details.html`, `-aerial`, `-inspection` — a media box with no token |
| `height: 200px`, `height: 88px`, `gap: 8px` | `inspection-report.html`, `inspection-report-loading.html` |
| `padding: 32px 20px`, `margin-top: 8px` | `payment-loading`, `withdraw-loading`, `operator-signup-loading`, `operator-verification-loading` |
| `padding-top: 8px` / `4px` | six `order-confirmed*` pages, `resolution.html`, `inspection-report.html`, `delivery-loading.html` |
| `width: 70px` / `78px` | `order-history-loading.html` — two skeleton bars sized past `--sk-*` |
| `opacity: .55` | `time-slot.html`, `time-slot-inspection.html` — a dimmed state, where the kit's rule is that disabled is a built pair, never an opacity |
| `margin-top: 34px` | `_field-options.html` |
| `font-size:17px; font-weight:600; color:var(--wf-text)` | `report-issue-loading.html` — the type step restated as literals **and** the grayscale ink named directly on a painted page |
| ~60 `height: N%` bars | `listings.html`, `listings-filters.html` — the price histogram's data, which is content rather than a design value |

### C4 · Literal hexes in markup — brand artwork

`account-edit.html` carries Visa `#1434CB`, Mastercard `#EB001B` / `#FF5F00` / `#F79E1B` and
Apple `#000` inline in SVG; `order-review.html`, `-aerial`, `-inspection` carry Google Pay's
`#4285F4` / `#34A853` / `#EA4335` / `#FBBC05` and `#FFF`. These are quoted marks and the kit
says so at line 3545; they are recorded here because they are literal colour in a page.

---

## 5. Candidate semantic roles

For each: the role, and the uses that make it visible. Nothing is renamed — this is what the
evidence supports.

### Page background
**Seen in:** `--page #F7F5F2` as `background` on `.dr`, `.dr-screen` and on every system bar
(`.dr-statusbar`, `.dr-topbar`, `.dr-tabbar`, `.dr-actionbar`, `.dr-groups`) — 14 sites where
the value means "this is the ground, not a thing on it". The role is already single-valued in
the kit; what splits it is `--wf-surface #FFFFFF` and `--wf-bg #F4F4F4` doing the same job on
the same pages from the grayscale sheet, and `--night #1A1A1A` doing it on the call screen.
**Open question this raises:** whether the ground is one role with a light and a dark value,
or two roles.

### Card background
**Seen in:** `--card #ECE9E4` on 21 container classes — `.dr-card`, `.dr-rows`, `.dr-msg`,
`.dr-choice`, `.dr-op`, `.dr-picks`, `.dr-zone`, `.dr-range`, `.dr-cal`, `.dr-when`,
`.dr-route`, `.dr-offer`, `.dr-finder__card`. Three further values appear in the same
neighbourhood and each has its own reason: `--inset #F2F0EC` (a plane *inside* a card, 1 site),
`--media #E4E1DA` (a well *inside* a card, 32 sites), `--night-raised #2E2E2E` (the same step
on the dark ground). **This is a four-rung surface ramp, not one role** — the evidence is that
`.dr-card > .dr-inset > …` stacks them.

### Text primary
**Seen in:** `--ink #1A1A1A` as `color` on ≈80 selectors — every title, value, button label,
row value, current tab. The role is unambiguous. What muddies it is that the same token is
also 14 fills, 30 focus rings and a border, so "text primary" cannot simply be read off the
name. On the night surface the role is carried by `--page`.

### Text secondary
**Seen in:** `--slate #5A5751` as `color` on 58 selectors — every `__desc`, `__sub`, `__label`,
`__hint`, `__key`, `__date`, `__meta`, `__note`, and every `::placeholder`. Two further things
sit inside this role today: the **disabled** ink (`.dr-btn:disabled` — same token, different
meaning) and `--btn2` used as the secondary ink on the call screen, because `--slate` fails
there at 2.42:1. **So the role has one value on light and a different one on dark**, and
"disabled" is riding on it.

### Action
**Seen in:** `--green #9BCF4A` on `.dr-btn--primary` and `.dr-btn--primary.dr-btn--icon`;
`--on-green` as the only ink allowed on it; `--sh-sm` under it (its only 3 spends);
`--bright-hover` on its hover; `--lift-active` + `--scale-active` on its press. That cluster —
fill, ink, shadow, hover, press — is the action role complete, and it is the one green spend
the "one green control per screen" rule counts. It is also the token doing eight other jobs
(§3), which is what makes "action" hard to see.

### Selection / state
**Seen in:** the same `--green` on `.dr-grouptab[aria-selected]`, `.dr-box:checked`,
`.dr-switch:checked`, `.dr-lang button[pressed]`, `.dr-cal__grid td[selected]`,
`.dr-offer:checked`, `.dr-pager .on`; and `--green-wash #E7F0D2` behind
`.dr-tab[aria-current]`, `.dr-fchip`, `.dr-chip--claim`, `.dr-chip--unread`. **The evidence
that this is a role of its own and not "action":** its ink partner differs — a chosen thing is
`--on-green` on a fill *or* `--ink` on a wash, while an action is only ever the first — and it
has a second, lighter rung that the action role never uses.

### Trust
**Seen in:** `--trust-ink #2A5C7D` + `--trust-wash #D8E6F2` on `.dr-chip--trust`, the Insured
badge — **declared, and drawn on no page**. The role's real evidence today is elsewhere and
carries no colour: `.dr-chip--claim` (verified, on the green wash), the `LICENCE` well, the
operator photo + rating pill, `.dr-op__rating`. Per CLAUDE.md this is the product's highest
job (RJ-C1). **It is the one candidate role with a token and no surface.**

### Danger
**Seen in:** three tokens doing two different things. `--danger #C4462A` is a **fill**, and its
only site is `.dr-btn--danger-solid` — the end-call button on 3 call pages.
`--danger-ink #9A3115` is a **word**: `.dr-btn--danger`, `.dr-mark--danger`, `.dr-field__err`,
across 9 error pages. `--danger-wash #F2D8CF` is the mark's ground. The pattern `X` / `X-ink` /
`X-wash` repeats exactly for warn and trust, so the palette already has a **semantic family
shape** — fill · ink · wash — that green does not follow (`--green` / `--green-ink` /
`--green-wash` exist, but `--green-ink` has one spend and `--green` is the fill everywhere).

### Two roles the evidence names that the list above does not
- **Line** — `--line #D9D5CE` on 25 sites, of which 10 are not borders at all but the fill of a
  separator element or a grabber. A "divider" role and a "thin fill" role are sharing one token.
- **Disabled** — built, not dimmed: `.dr-btn:disabled` = `--slate` on `--btn2`, 4.77:1. It has
  no token of its own; it borrows the secondary ink and the secondary surface. `concept.md`
  §4 names the pair `--disabled-bg` / `--disabled-ink`, and **neither name exists in
  `kit.css`** — 0 occurrences. `concept.md` line 306 already records this gap; the audit
  confirms it on the built file. The role is real and is spelled out per rule instead of
  being named once.

---

*Audit only. No value, name, file or class was changed.*
