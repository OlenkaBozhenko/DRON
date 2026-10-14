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
<div class="dr dr-screen" style="height:420px">
  <div class="dr-statusbar">
    <span>9:41</span>
    <span class="dr-statusbar__sys">
      <svg class="dr-ic" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 18v-3.2M9.7 18v-6.4M14.3 18v-9.6M19 18V6"/></svg>
      <svg class="dr-ic" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 11.5a11 11 0 0 1 15 0"/><path d="M7.5 14.7a7 7 0 0 1 9 0"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg>
      <svg class="dr-ic" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="8" width="16" height="8" rx="2.4"/><path d="M21.5 10.8v2.4"/><rect x="4.5" y="10" width="9" height="4" rx="1" fill="currentColor" stroke="none"/></svg>
    </span>
  </div>
  <header class="dr-topbar">
    <span class="dr-brand" role="img" aria-label="DRON"></span>
    <h1 class="dr-topbar__title">Activity</h1>
    <span class="dr-topbar__spacer"></span>
  </header>
  <main class="dr-main">
    <p class="dr-label">Order history <span class="dr-label__act">▸ tap to reopen setup</span></p>
    <p class="dr-lead">The screen goes here.</p>
  </main>
  <footer class="dr-tabbar">
    <nav class="dr-tabs" aria-label="Primary">
      <a class="dr-tab" href="#"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="7" height="7" rx="1.6"/><rect x="13" y="4" width="7" height="7" rx="1.6"/><rect x="4" y="13" width="7" height="7" rx="1.6"/><rect x="13" y="13" width="7" height="7" rx="1.6"/></svg>Order</a>
      <a class="dr-tab" href="#" aria-current="page"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.6" cy="6" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.6" cy="12" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.6" cy="18" r="1.1" fill="currentColor" stroke="none"/></svg>Activity</a>
      <a class="dr-tab" href="#"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M9.4 9.4a2.7 2.7 0 0 1 5.2 1c0 1.8-2.6 2.1-2.6 3.9"/><circle cx="12" cy="17" r=".9" fill="currentColor" stroke="none"/></svg>Help</a>
      <a class="dr-tab" href="#"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c0-3.4 2.9-5.8 6.5-5.8s6.5 2.4 6.5 5.8"/></svg>Account</a>
    </nav>
    <div class="dr-home"><span></span></div>
  </footer>
</div>
```

- `.dr-statusbar` — The status bar: 44 tall, 9:41 and three 17px system glyphs in `--ink`. It depicts what iOS draws; the product owns none of it.
- `.dr-brand` — The brand slot: the DRON quadcopter mark as a 60 × 20 CSS mask in the bar's ink, `role="img" aria-label="DRON"`, 15.99:1 on the page.
- `.dr-topbar__title` — The screen's one name: an `<h1>`, 17/600/−0.01em, centred absolutely in the 56px nav bar, 15.99:1.
- `.dr-main` — The scrolling column between the bars. See [Screen layout](screen-layout.html).
- `.dr-tab[aria-current="page"]` — The selected tab: a `--green-wash` pill at radius 16 behind an `--ink` icon and label, 14.75:1. Target 86.3 × 50.
- `.dr-home` — The home indicator: a 30px band holding a 134 × 5 bar in `--ink`.

## Variants

### Root screen

```html
<header class="dr-topbar" style="width:375px;max-width:100%">
  <span class="dr-brand" role="img" aria-label="DRON"></span>
  <h1 class="dr-topbar__title">Activity</h1>
  <span class="dr-topbar__spacer"></span>
</header>
```

A tab root carries the brand at the leading edge and the screen's title centred, and no back control. On the 8 entry and listing screens the brand stands alone with no title.

### Pushed screen

```html
<div class="dr dr-screen" style="height:420px">
  <div class="dr-statusbar"><span>9:41</span><span class="dr-statusbar__sys">
    <svg class="dr-ic" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 18v-3.2M9.7 18v-6.4M14.3 18v-9.6M19 18V6"/></svg>
    <svg class="dr-ic" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 11.5a11 11 0 0 1 15 0"/><path d="M7.5 14.7a7 7 0 0 1 9 0"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg>
    <svg class="dr-ic" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="8" width="16" height="8" rx="2.4"/><path d="M21.5 10.8v2.4"/><rect x="4.5" y="10" width="9" height="4" rx="1" fill="currentColor" stroke="none"/></svg>
  </span></div>
  <header class="dr-topbar">
    <a class="dr-back" href="#" aria-label="Back to Order review"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></a>
    <h1 class="dr-topbar__title">On the way</h1>
    <span class="dr-topbar__spacer"></span>
  </header>
  <main class="dr-main">
    <p class="dr-label">Live map <span class="dr-label__act">▸ operator position</span></p>
    <div class="dr-well dr-well--map"><img src="../assets/map/live-map.jpg" alt="Live map, operator position"></div>
  </main>
  <footer class="dr-actionbar">
    <button class="dr-btn dr-btn--secondary dr-btn--block" type="button">Contact support</button>
    <button class="dr-btn dr-btn--primary dr-btn--block" type="button">View details</button>
  </footer>
</div>
```

A pushed screen leads with the back chevron alone, 22px glyph in a 44 × 44 target, and ends in an [action bar](action-bar.html) instead of the tab bar.

### Back button

```html
<header class="dr-topbar" style="width:375px;max-width:100%">
  <a class="dr-back" href="#" aria-label="Back to Order review"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></a>
  <h1 class="dr-topbar__title">Payment</h1>
  <span class="dr-topbar__spacer"></span>
</header>
```

No visible words. `aria-label="Back to {destination}"` names it (`WCAG 4.1.2`); `margin-left: -10px` puts the glyph back on the 16px gutter. 44 × 44 is `HIG · 44pt` and 1.83× `WCAG 2.5.8`.

### Tab bar

```html
<footer class="dr-tabbar" style="width:375px;max-width:100%">
  <nav class="dr-tabs" aria-label="Primary">
    <a class="dr-tab" href="#" aria-current="page"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="7" height="7" rx="1.6"/><rect x="13" y="4" width="7" height="7" rx="1.6"/><rect x="4" y="13" width="7" height="7" rx="1.6"/><rect x="13" y="13" width="7" height="7" rx="1.6"/></svg>Order</a>
    <a class="dr-tab" href="#"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.6" cy="6" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.6" cy="12" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.6" cy="18" r="1.1" fill="currentColor" stroke="none"/></svg>Activity</a>
    <a class="dr-tab" href="#"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M9.4 9.4a2.7 2.7 0 0 1 5.2 1c0 1.8-2.6 2.1-2.6 3.9"/><circle cx="12" cy="17" r=".9" fill="currentColor" stroke="none"/></svg>Help</a>
    <a class="dr-tab" href="#"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c0-3.4 2.9-5.8 6.5-5.8s6.5 2.4 6.5 5.8"/></svg>Account</a>
  </nav>
  <div class="dr-home"><span></span></div>
</footer>
```

60px of tabs over the 30px home indicator. Unselected tabs are transparent with a `--slate` label, 6.62:1; icons stay outline in both states, a recorded departure from the iOS filled-symbol convention.

## When to use

Every product screen stands in this frame: status bar 44, nav bar 56, then either a tab bar (60 + 30) on a tab root or an [action bar](action-bar.html) on a pushed screen. Every bar takes the page ground `--page` and only a 1px hairline separates it from the content. The client's tabs are Order · Activity · Help · Account; the operator's are Jobs · Earnings · Ratings · Account.

The selected tab carries the accent as a fill, not as a tinted label. HIG tints the label with the accent, but raw green as text is 1.69:1, so the accent moves into the pill and the ink darkens with it: two signals where the convention gives one.

The nav bar holds one name: the title of the screen you are on, in sentence case. The back control carries no words (`microcopy.md` D9); *Back to…* is right as an accessible name and forbidden as visible copy. A tab root has no back. `listings-filters` is the one deliberate exception: a `×` with `aria-label="Close filters"`, because a sheet is dismissed rather than a screen popped.

Sources: DESIGN.md § Navigation · voice.md § Nav-bar back button · microcopy.md D9 · inventory.md § 1 (Nav bar, Status bar, Tab bar, Home indicator, Brand slot, Back button)

## Rule

```html
<header class="dr-topbar" style="width:375px;max-width:100%">
  <a class="dr-back" href="#" aria-label="Back to Delivered"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></a>
  <h1 class="dr-topbar__title">Rate the order</h1>
  <span class="dr-topbar__spacer"></span>
</header>
```

The nav bar of `rate`: the chevron alone, named for assistive tech by where it goes, and one title in the centre.

## Anti-rule

```html
<header class="dr-topbar" style="width:375px;max-width:100%">
  <a class="dr-btn dr-btn--tertiary" href="#">‹ Delivered</a>
  <h1 class="dr-topbar__title">Rate the order</h1>
  <span class="dr-topbar__spacer"></span>
</header>
```

A labelled back button puts a second screen name in the bar, and the two read as two titles rather than a control and a name. Use `.dr-back` with the chevron alone and the destination in `aria-label`. A filled disc does not belong in the bar either: a trailing control is a bare glyph, like the [notification bell](notification-bell.html), or a word, like a [text button](button.html#variant-text).
