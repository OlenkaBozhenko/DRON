---
name: Floating action
slug: floating-action
group: Actions
order: 20
classes: .dr-fab · .dr-main--fab
file: button.css; frame.css
inventory: Floating action
kit: 558
---

## Anatomy

```html
<div class="dr" style="position:relative;width:375px;max-width:100%;height:150px;border-radius:var(--len-22);overflow:hidden;background:var(--bg-page)">
  <div class="dr-main dr-main--fab" style="padding-top:var(--len-16)">
    <div class="dr-rows" aria-label="Account details"><div class="dr-rows__row"><span class="dr-rows__key">Language</span><span class="dr-rows__val">English</span></div><div class="dr-rows__row"><span class="dr-rows__key">Member since</span><span class="dr-rows__val">2026</span></div></div>
  </div>
  <a class="dr-btn dr-btn--primary dr-fab" href="../../wireframes/account-edit.html"><svg class="dr-ic dr-ic--20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 5.2l4.3 4.3L8.4 19.9l-4.9 1.1 1.1-4.9z"/><path d="M12.9 6.8l4.3 4.3"/></svg>Edit profile</a>
</div>
```

- `.dr-fab` — The capsule. A [primary button](button.html#variant-primary) with position, the 999 pill radius (`--len-999`), 20px side padding and `--shadow-raised` added; centred on the frame with `left:50%` and `translateX(-50%)`. Its bottom sits at 102 (60 + 30 + 12): the tab bar's 60 row and the 30 home strip, then 12 of air, which leaves it 11px clear of the tab bar's 1px hairline.
- `.dr-ic` — An optional leading glyph, 20px, drawn in the label's charcoal. Green is never the ink and never the stroke.
- `.dr-rows` — Copied from `account`: the column the capsule floats over.
- `.dr-main--fab` — The other half of the component: the scrolling column gives back 72px of `padding-bottom` (44 + 12 + 16) so its last row scrolls clear of the capsule. All three screens that draw the capsule put it on their `<main>`.

## Variants

### Label only

```html
<div class="dr" style="position:relative;width:375px;max-width:100%;height:150px;border-radius:var(--len-22);overflow:hidden;background:var(--bg-page)">
  <div class="dr-main dr-main--fab" style="padding-top:var(--len-16)"></div>
  <a class="dr-btn dr-btn--primary dr-fab" href="../../wireframes/withdraw.html">Withdraw &#8372;3,240</a>
</div>
```

`wallet`'s *Withdraw ₴3,240*: 173.1 × 44, label `--on-green` on green at 9.46:1. The amount sits in the label, so the price is stated before the tap.

### With a leading glyph

```html
<div class="dr" style="position:relative;width:375px;max-width:100%;height:150px;border-radius:var(--len-22);overflow:hidden;background:var(--bg-page)">
  <div class="dr-main dr-main--fab" style="padding-top:var(--len-16)"></div>
  <a class="dr-btn dr-btn--primary dr-fab" href="../../wireframes/account-edit.html"><svg class="dr-ic dr-ic--20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 5.2l4.3 4.3L8.4 19.9l-4.9 1.1 1.1-4.9z"/><path d="M12.9 6.8l4.3 4.3"/></svg>Edit profile</a>
</div>
```

*Edit profile* on `account` and `operator-account`: 152.29 × 44. The pencil inherits the label's charcoal at 20px. No class, token or page CSS was added for the second user.

## States

```html
<div class="dr" style="position:relative;width:375px;max-width:100%;height:150px;border-radius:var(--len-22);overflow:hidden;background:var(--bg-page)">
  <a class="dr-btn dr-btn--primary dr-fab" href="../../wireframes/withdraw.html">Withdraw &#8372;3,240</a>
</div>
```

From `wallet`.

## When to use

The floating action is the screen's primary action when that screen is a tab root and has no action bar. It floats clear above the tab bar in the iOS 26 bottom-accessory slot, the capsule the Music mini-player rides in. `HIG · Tab bars` keeps actions out of the bar, so a circular button planted in or over it is the reading that fails. It stands on `wallet`, `account` and `operator-account`, and it is still `.dr-btn--primary`: the fill, ink, 44 height and press are the primary button's, so it is the screen's one green control.

It is one of three things in the product that take `--shadow-raised`, with the [sheet](sheet.html) and the [toast](toast.html), because it is over the page rather than in it. The cost is recorded rather than hidden: on `operator-account` the pill is 2.06% of the frame and 84.5% of the screen's green; on `wallet`, with the balance card, solid green reaches 11.32% against the ~5% ceiling, a departure the designer was shown and kept.

The label is a verb and its object, with the amount where there is one: *Withdraw ₴3,240*, *Edit profile*. No exclamation marks, no *successfully*.

Sources: DESIGN.md § The floating action · § Elevation & Depth · inventory.md § 1 (Floating action) · microcopy.md § wallet · voice.md P3

## Rule

```html
<div class="dr" style="position:relative;width:375px;max-width:100%;height:240px;border-radius:var(--len-22);overflow:hidden;background:var(--bg-page)">
  <div class="dr-main dr-main--fab" style="padding-top:var(--len-16)">
    <div class="dr-rows" aria-label="Account details"><div class="dr-rows__row"><span class="dr-rows__key">Language</span><span class="dr-rows__val">English</span></div><div class="dr-rows__row"><span class="dr-rows__key">Member since</span><span class="dr-rows__val">2026</span></div></div>
  </div>
  <a class="dr-btn dr-btn--primary dr-fab" href="../../wireframes/withdraw.html">Withdraw &#8372;3,240</a>
</div>
```

One capsule per screen, over a column that wears `.dr-main--fab`, on a tab-root screen with no action bar. The column's 72px floor keeps the last row reachable (`WCAG 2.4.11`).

## Anti-rule

```html
<div class="dr" style="position:relative;width:375px;max-width:100%;height:150px;border-radius:var(--len-22);overflow:hidden;background:var(--bg-page)">
  <div class="dr-main" style="padding-top:var(--len-16)">
    <div class="dr-rows" aria-label="Account details"><div class="dr-rows__row"><span class="dr-rows__key">Language</span><span class="dr-rows__val">English</span></div><div class="dr-rows__row"><span class="dr-rows__key">Member since</span><span class="dr-rows__val">2026</span></div></div>
  </div>
  <span class="dr-btn dr-btn--primary dr-fab">Contact support</span>
</div>
```

A capsule over a column that does not give the space back parks on the last row, and a secondary job spent as the screen's green control. On a screen with an action bar, the primary goes in the [action bar](action-bar.html) as a [block button](button.html#variant-primary); a second action is a [secondary button](button.html#variant-secondary), never a second floating one.
