---
name: Screen shell
slug: screen-shell
group: Shell
order: 10
classes: .dr-screen · .dr-statusbar · __sys · .dr-topbar · __title · __spacer · .dr-brand · .dr-back · .dr-tabbar · .dr-tabs · .dr-tab · .dr-home
file: shell.css · frame.css
inventory: Nav bar; Status bar; Tab bar; Home indicator; Brand slot; Back button
kit: 321
---

## Anatomy

```html
<div class="dr dr-screen" style="height:520px">
  <div class="dr-statusbar"><span>9:41</span><span class="dr-statusbar__sys"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 18v-3.2M9.7 18v-6.4M14.3 18v-9.6M19 18V6"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11.5a11 11 0 0 1 15 0"/><path d="M7.5 14.7a7 7 0 0 1 9 0"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="8" width="16" height="8" rx="2.4"/><path d="M21.5 10.8v2.4"/><rect x="4.5" y="10" width="9" height="4" rx="1" fill="currentColor" stroke="none"/></svg></span></div>
  <header class="topbar dr-topbar"><span class="dr-brand" role="img" aria-label="DRON"></span><h1 class="dr-topbar__title">Help</h1><span class="dr-topbar__spacer"></span></header>
  <main class="dr-main dr-main--zones">
    <section aria-label="Support intro">
      <h2 class="dr-display">What happened?</h2>
      <p class="dr-lead">Pick the issue with your order and we'll route it to the right fix.</p>
    </section>
  </main>
  <footer class="dr-tabbar">
    <nav class="dr-tabs" aria-label="Primary">
      <a class="dr-tab" href="../../wireframes/listings.html"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="7" height="7" rx="1.6"/><rect x="13" y="4" width="7" height="7" rx="1.6"/><rect x="4" y="13" width="7" height="7" rx="1.6"/><rect x="13" y="13" width="7" height="7" rx="1.6"/></svg>Order</a>
      <a class="dr-tab" href="../../wireframes/order-history.html"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.6" cy="6" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.6" cy="12" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.6" cy="18" r="1.1" fill="currentColor" stroke="none"/></svg>Activity</a>
      <a class="dr-tab" href="../../wireframes/support.html" aria-current="page"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M9.4 9.4a2.7 2.7 0 0 1 5.2 1c0 1.8-2.6 2.1-2.6 3.9"/><circle cx="12" cy="17" r=".9" fill="currentColor" stroke="none"/></svg>Help</a>
      <a class="dr-tab" href="../../wireframes/account.html"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c0-3.4 2.9-5.8 6.5-5.8s6.5 2.4 6.5 5.8"/></svg>Account</a>
    </nav>
    <div class="dr-home"><span></span></div>
  </footer>
</div>
```

- `.dr-statusbar` — The status bar: 44 tall, 9:41 at 13/600 and three 17px system glyphs 5 apart, in `--text-primary`. It depicts what iOS draws; the product owns none of it. It stands on all 133 pages.
- `.dr-brand` — The brand slot: the DRON quadcopter mark as a 60 × 20 CSS mask in the bar's ink, `role="img" aria-label="DRON"`, 15.99:1 on the page.
- `.dr-topbar__title` — The screen's one name: a `<span>`, 17/600/−0.01em, centred absolutely in the 56px nav bar, 15.99:1. It truncates with an ellipsis before it reaches a 44 control on either side.
- `.dr-main` — The scrolling column between the bars. See [Screen layout](screen-layout.html).
- `.dr-tab[aria-current="page"]` — The selected tab: a `--bg-accent-tint` pill at radius 16 behind a `--text-primary` 22px icon and an 11/600 label, 14.75:1. Target 86.3 × 50.
- `.dr-home` — The home indicator: a 30px band holding a 134 × 5 bar in `--text-primary`.

## Variants

### Root screen

```html
<header class="topbar dr-topbar" style="width:375px;max-width:100%"><span class="dr-brand" role="img" aria-label="DRON"></span><h1 class="dr-topbar__title">Help</h1><span class="dr-topbar__spacer"></span></header>
```

A tab root carries the brand at the leading edge and the screen's title centred, and no back control. Here `support`. The brand stands alone with no title on 13 pages: the 9 entry pages (`welcome`, `welcome-empty`, `role-select`, `signin`, `signin-error`, `signin-loading`, `onboarding-client`, `onboarding-client-empty`, `onboarding-operator`) and the 4 `listings` pages, where the [notification bell](notification-bell.html) stands at the trailing edge. `operator-listings` leads with the operator's [avatar and name](nav-bar-avatar.html) instead of the brand.

### Pushed screen

```html
<div class="dr dr-screen" style="height:520px">
  <div class="dr-statusbar"><span>9:41</span><span class="dr-statusbar__sys"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 18v-3.2M9.7 18v-6.4M14.3 18v-9.6M19 18V6"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11.5a11 11 0 0 1 15 0"/><path d="M7.5 14.7a7 7 0 0 1 9 0"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="8" width="16" height="8" rx="2.4"/><path d="M21.5 10.8v2.4"/><rect x="4.5" y="10" width="9" height="4" rx="1" fill="currentColor" stroke="none"/></svg></span></div>
  <header class="topbar dr-topbar"><a class="dr-back" href="../../wireframes/tracking-inspection.html" aria-label="Back to On the way"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></a><h1 class="dr-topbar__title">Inspection report</h1><span class="dr-topbar__spacer"></span></header>
  <main class="dr-main">
    <p class="zlabel dr-label">Cover <span class="dr-label__act">▸ hero shot (RJ-C4)</span></p>
    <section aria-label="Cover photo">
      <span class="dr-well dr-well--photo" style="width:100%;height:200px;"><img src="../assets/scenes/thumbs/inspection-field-split.jpg" alt="A sunflower field split in two, the west half in full bloom and the east half dried out: the subject of this report" loading="lazy" decoding="async"></span>
    </section>
  </main>
  <footer class="dr-actionbar">
    <a class="dr-btn dr-btn--primary dr-btn--block" href="../../wireframes/rate-inspection.html">Rate this order</a>
    <a class="dr-btn dr-btn--secondary dr-btn--block" href="../../wireframes/report-issue.html">Report an issue</a>
  </footer>
</div>
```

A pushed screen leads with the back chevron alone, 22px glyph in a 44 × 44 target, and ends in an [action bar](action-bar.html) instead of the tab bar. Here `inspection-report`. 75 pages carry a back control; 87 end in an action bar.

### Back button

```html
<header class="topbar dr-topbar" style="width:375px;max-width:100%"><a class="dr-back" href="../../wireframes/order-review.html" aria-label="Back to Order review"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></a><h1 class="dr-topbar__title">Card details</h1><span class="dr-topbar__spacer"></span></header>
```

No visible words. `aria-label="Back to {destination}"` names it (`WCAG 4.1.2`); `margin-left: -10px` puts the glyph back on the 16px gutter. 44 × 44 is `HIG · 44pt` and 1.83× `WCAG 2.5.8`. Here `payment`. All 75 back controls are this same `<a class="dr-back">` with an `aria-label`.

### Tab bar

```html
<div style="width:375px;max-width:100%">
  <footer class="dr-tabbar">
    <nav class="dr-tabs" aria-label="Primary">
      <a class="dr-tab" href="../../wireframes/listings.html"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="7" height="7" rx="1.6"/><rect x="13" y="4" width="7" height="7" rx="1.6"/><rect x="4" y="13" width="7" height="7" rx="1.6"/><rect x="13" y="13" width="7" height="7" rx="1.6"/></svg>Order</a>
      <a class="dr-tab" href="../../wireframes/order-history.html"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.6" cy="6" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.6" cy="12" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.6" cy="18" r="1.1" fill="currentColor" stroke="none"/></svg>Activity</a>
      <a class="dr-tab" href="../../wireframes/support.html" aria-current="page"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M9.4 9.4a2.7 2.7 0 0 1 5.2 1c0 1.8-2.6 2.1-2.6 3.9"/><circle cx="12" cy="17" r=".9" fill="currentColor" stroke="none"/></svg>Help</a>
      <a class="dr-tab" href="../../wireframes/account.html"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c0-3.4 2.9-5.8 6.5-5.8s6.5 2.4 6.5 5.8"/></svg>Account</a>
    </nav>
    <div class="dr-home"><span></span></div>
  </footer>
</div>
```

60px of tabs over the 30px home indicator, from `support`. Unselected tabs are transparent with a `--text-muted` label, 6.62:1; icons stay outline in both states, a recorded departure from the iOS filled-symbol convention. 33 pages carry the tab bar. The tab glyph is 22px on every one, but the markup splits: 19 pages write `class="dr-ic dr-ic--22"` and 14 write `class="dr-ic"`, and `.dr-tab .dr-ic` draws both at 22. The 14 are `delivery`, `delivery-aerial`, `delivery-error`, `delivery-loading`, `order-history`, `order-history-empty`, `order-history-loading`, `tracking-loading`, `tracking-empty`, `tracking-error`, `tracking-aerial-empty`, `tracking-aerial-error`, `tracking-inspection-empty`, `tracking-inspection-error`.

## States

```html
<div style="width:375px;max-width:100%">
  <header class="topbar dr-topbar"><a class="dr-back" href="#" aria-label="Back to Order review"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></a><h1 class="dr-topbar__title">Card details</h1><span class="dr-topbar__spacer"></span></header>
  <nav class="dr-tabs" aria-label="Primary">
    <a class="dr-tab" href="#"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="7" height="7" rx="1.6"/><rect x="13" y="4" width="7" height="7" rx="1.6"/><rect x="4" y="13" width="7" height="7" rx="1.6"/><rect x="13" y="13" width="7" height="7" rx="1.6"/></svg>Order</a>
    <a class="dr-tab" href="#" aria-current="page"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M9.4 9.4a2.7 2.7 0 0 1 5.2 1c0 1.8-2.6 2.1-2.6 3.9"/><circle cx="12" cy="17" r=".9" fill="currentColor" stroke="none"/></svg>Help</a>
  </nav>
</div>
```

The shell's two controls: the back chevron from `payment` and two tabs from `support`, one selected. The status bar, brand and home indicator take no state.

## When to use

Every product screen stands in this frame: status bar 44, nav bar 56, then either a tab bar (60 + 30) on a tab root or an [action bar](action-bar.html) on a pushed screen. Every bar takes the page ground `--bg-page` and only a 1px `--border-hairline` separates it from the content. The five call pages keep the status bar and home indicator but draw neither nav bar nor tab bar. The client's tabs are Order · Activity · Help · Account; the operator's are Jobs · Earnings · Ratings · Account.

The selected tab carries the accent as a fill, not as a tinted label. HIG tints the label with the accent, but raw green as text is 1.69:1, so the accent moves into the pill and the ink darkens with it: two signals where the convention gives one.

The nav bar holds one name: the title of the screen you are on, in sentence case. Every nav bar is `<header class="topbar dr-topbar">` (128 pages). The title is an `<h1>` on every page (rev 292), so a screen reader lands on the screen's name as its heading (`WCAG 1.3.1`, `2.4.6`). It draws exactly as the `<span>` it replaced. The status bar glyphs split the same quiet way: 21 pages write `width="17" height="17"` on them and 112 leave it to the CSS, which draws both at 17. The back control carries no words (`microcopy.md` D9); *Back to…* is right as an accessible name and forbidden as visible copy. A tab root has no back. No nav bar draws a close `×`: drawers end in their own Done and Cancel pair.

Sources: DESIGN.md § Navigation · voice.md § Nav-bar back button · microcopy.md D9 · inventory.md § 1 (Nav bar, Status bar, Tab bar, Home indicator, Brand slot, Back button)

## Rule

```html
<header class="topbar dr-topbar" style="width:375px;max-width:100%"><a class="dr-back" href="../../wireframes/delivery.html" aria-label="Back to Delivered"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></a><h1 class="dr-topbar__title">Rate the order</h1><span class="dr-topbar__spacer"></span></header>
```

The nav bar of `rate`: the chevron alone, named for assistive tech by where it goes, and one title in the centre.

## Anti-rule

```html
<header class="topbar dr-topbar" style="width:375px;max-width:100%">
  <a class="dr-btn dr-btn--tertiary" href="../../wireframes/delivery.html">‹ Delivered</a>
  <h1 class="dr-topbar__title">Rate the order</h1>
  <span class="dr-topbar__spacer"></span>
</header>
```

A labelled back button puts a second screen name in the bar, and the two read as two titles rather than a control and a name. Use `.dr-back` with the chevron alone and the destination in `aria-label`. A filled disc does not belong in the bar either: a trailing control is a bare glyph, like the [notification bell](notification-bell.html), or a word, like a [text button](button.html#variant-text).
