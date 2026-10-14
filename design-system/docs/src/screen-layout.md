---
name: Screen layout
slug: screen-layout
group: Shell
order: 40
classes: .dr-main · --zones · --center · .dr-center · --tight · .dr-note--balance · .dr-stack--zones
file: frame.css · type.css · media.css
inventory: (layout helpers: .dr-main--zones, .dr-center, .dr-note--balance, .dr-stack--zones)
kit: 1762
---

## Anatomy

```html
<div class="dr dr-main dr-main--zones" style="height:auto;overflow:visible;width:200px">
  <p class="dr-label">Copy</p>
  <p class="dr-note">The intro that asks the question.</p>
  <ul class="dr-list dr-list--snug" style="list-style:none">
    <li><article class="dr-card dr-card--compact"><span class="dr-listing__name">Client</span></article></li>
    <li><article class="dr-card dr-card--compact"><span class="dr-listing__name">Operator</span></article></li>
  </ul>
</div>
```

- `.dr-main--zones` — The column between the bars: padding 16, scrolls on its own. `--zones` widens its gap from 12 to 24.
- `.dr-note` — A block in the column: here the copy that asks the question.
- `.dr-list--snug` — The answer: a list whose cards sit 8 apart, so the 24 above it is a 3:1 boundary.

## Variants

### Generic column

```html
<div class="dr dr-main" style="height:auto;overflow:visible;width:200px">
  <p class="dr-label">Copy</p>
  <p class="dr-note">The intro that asks the question.</p>
  <ul class="dr-list dr-list--snug" style="list-style:none">
    <li><article class="dr-card dr-card--compact"><span class="dr-listing__name">Client</span></article></li>
    <li><article class="dr-card dr-card--compact"><span class="dr-listing__name">Operator</span></article></li>
  </ul>
</div>
```

`.dr-main` at gap 12. Above a list whose cards sit 8 apart that is 1.5:1, measured and too quiet to read as a break between two questions.

### Centred main

```html
<div class="dr dr-screen" style="height:560px">
  <header class="dr-topbar"><a class="dr-back" href="#" aria-label="Back to Account"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></a><span class="dr-topbar__title">Switch role</span><span class="dr-topbar__spacer"></span></header>
  <main class="dr-main dr-main--center">
    <section class="dr-center" aria-label="Switch role">
      <p class="dr-display">Switch to Operator?</p>
      <p class="dr-lead">You're in Client mode. Switching shows the Operator app &#8212; jobs, earnings and ratings. Your Diia identity stays the same.</p>
    </section>
  </main>
  <footer class="dr-actionbar">
    <span class="dr-btn dr-btn--primary dr-btn--block">Switch to Operator</span>
    <span class="dr-btn dr-btn--secondary dr-btn--block">Cancel</span>
  </footer>
</div>
```

`switch-role`: `.dr-main--center > .dr-center` takes `margin-block: auto`, not `justify-content: center`, so a column taller than the space starts at the top instead of overflowing above the scroll origin. At 200% the column is 490.20px in 545.60px of main (`WCAG 1.4.4`).

### Tight centre

```html
<section aria-label="Rating" class="dr-center dr-center--tight" style="width:341px;max-width:100%">
  <p class="dr-display">How would you rate this order?</p>
  <div class="dr-rating" role="radiogroup" aria-label="Rating">
    <button class="dr-star" role="radio" aria-checked="false" aria-label="1 star" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
    <button class="dr-star" role="radio" aria-checked="false" aria-label="2 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
    <button class="dr-star" role="radio" aria-checked="false" aria-label="3 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
    <button class="dr-star" role="radio" aria-checked="true" aria-label="4 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
    <button class="dr-star" role="radio" aria-checked="false" aria-label="5 stars"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  </div>
</section>
```

`rate`: a heading welded to the control it names sits at 8 instead of the column's 12, while `--zones` puts 24 around the pair.

### Balanced note

```html
<div style="display:flex;flex-direction:column;gap:16px;width:260px">
  <p class="dr-note" style="margin:0">JPG or PNG, up to 5 MB. Nothing changes until you save.</p>
  <p class="dr-note dr-note--balance" style="margin:0">JPG or PNG, up to 5 MB. Nothing changes until you save.</p>
</div>
```

One declaration, `text-wrap: balance`: the lower note evens its lines instead of leaving words orphaned. `account-photo` and `operator-account-photo` only.

### Form in zones

```html
<form class="dr dr-stack dr-stack--zones" action="#" aria-label="Edit account" style="width:341px;max-width:100%">
  <div class="dr-rows">
    <div class="dr-field">
      <label class="dr-field__label" for="doc-sl-nm">Name</label>
      <span class="dr-field__group"><input class="dr-field__input" id="doc-sl-nm" type="text" value="Olena B."></span>
    </div>
    <div class="dr-field">
      <label class="dr-field__label" for="doc-sl-ph">Phone</label>
      <span class="dr-field__group"><input class="dr-field__input" id="doc-sl-ph" type="tel" value="+380 67 123 4567"></span>
    </div>
  </div>
  <div class="dr-rows">
    <span class="dr-field dr-field--action">
      <span class="dr-field__label">Payment method</span>
      <span class="dr-field__group"><span class="dr-field__value">Visa &#8226;&#8226;&#8226;&#8226; 4921</span><svg class="dr-ic dr-field__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span>
    </span>
    <span class="dr-field dr-field--action">
      <span class="dr-field__label">Language</span>
      <span class="dr-field__group"><span class="dr-field__value">English</span><svg class="dr-ic dr-field__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span>
    </span>
  </div>
</form>
```

`account-edit` and `operator-profile-setup`: typed rows in one panel, rows that open a drawer in the next. `.dr-stack`'s own gap is 8, so 12 is already 1.5:1, and the panel edges do the rest.

## When to use

These classes are the column's spacing, not components with a surface. None mints a value: 24, 12 and 8 are `--sp-24`, `--sp-12` and `--sp-8`. The argument is the ratio — a gap between two different questions has to be clearly larger than the gaps inside either one. `--zones` is spent on `rate`, `support`, `role-select` and `tracking`; `.dr-stack--zones` on `account-edit` and `operator-profile-setup`. The fifth rung, `.dr-rail--zone` (margin-block 12 around the progress rail), is documented with the [progress rail](progress-rail.html).

There is no `WCAG` criterion for spacing; this is the proximity rule, and the check is a ratio either way. No heading is added between zones: the boundary is spatial, and every row already names itself.

Sources: ui/kit.html § Zone boundaries, Centred main, Balanced note, Form in zones · DESIGN.md § Layout · inventory.md § 1

## Rule

```html
<div class="dr dr-main dr-main--zones" style="height:auto;overflow:visible;width:341px;max-width:100%">
  <p class="dr-lead">Pick a side to continue.</p>
  <ul class="dr-list dr-list--snug" style="list-style:none">
    <li><article class="dr-card dr-card--compact"><span class="dr-listing__name">I need a service done</span></article></li>
    <li><article class="dr-card dr-card--compact"><span class="dr-listing__name">I provide services</span></article></li>
  </ul>
</div>
```

`role-select`, reduced: the copy that asks and the fork that answers are two zones: 24 between them against 8 inside the list, 3:1.

## Anti-rule

```html
<div class="dr dr-main dr-main--zones" style="height:auto;overflow:visible;width:200px">
  <article class="dr-card dr-card--compact"><span class="dr-listing__name">Client</span></article>
  <article class="dr-card dr-card--compact"><span class="dr-listing__name">Operator</span></article>
</div>
```

`--zones` used to space the cards of one list. Two answers to one question now sit as far apart as two questions. Put them in a [list](list.html), whose gap is the space between cards. On a form whose groups are panels, use `.dr-stack--zones` at 12, not `--zones` at 24.
