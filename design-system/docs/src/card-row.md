---
name: Card row
slug: card-row
group: Surfaces
order: 40
classes: .dr-card__row
file: card.css
inventory: Card row band
kit: 1423
---

## Anatomy

```html
<article class="dr-card" style="width:341px;max-width:100%">
  <span class="dr-card__row">
    <span class="dr-listing__body">
      <span class="dr-listing__name">Package delivery</span>
      <span class="dr-listing__meta"><span class="dr-listing__desc">Today, 10:07</span></span>
    </span>
    <span><span class="sr-only">Earned</span><span class="dr-number">&#8372;180</span></span>
  </span>
  <span class="dr-card__actions">
    <a class="dr-btn dr-btn--secondary" href="#" aria-label="View details, Package delivery, today at 10:07">View details</a>
  </span>
</article>
```

- `.dr-card__row` — The band that leads the card: `display:flex; align-items:center; gap:12`. Structure only; no colour, size or radius.
- `.dr-listing__body` — The text, `flex: 1`, so it takes the space and the gap stays a real 12.
- `.dr-number` — The figure, 20/700 tabular, beside the text and given no width. Its meaning (*Earned*) is in `.sr-only`.
- `.dr-card__actions` — The action on its own row under the band, at full width; see [Card action slot](card-actions.html).

## Variants

### Band with an action under it

```html
<article class="dr-card" style="width:341px;max-width:100%">
  <span class="dr-card__row">
    <span class="dr-listing__body">
      <span class="dr-listing__name">Package delivery</span>
      <span class="dr-listing__meta"><span class="dr-listing__desc">Today, 10:07</span></span>
    </span>
    <span><span class="sr-only">Earned</span><span class="dr-number">&#8372;180</span></span>
  </span>
  <span class="dr-card__actions">
    <a class="dr-btn dr-btn--secondary" href="#" aria-label="View details, Package delivery, today at 10:07">View details</a>
  </span>
</article>
```

The one shape it has: the earnings card on `wallet`, a line of text and a number, then the action under it. `wallet` is the only screen that builds it, three cards in a `.dr-list--snug`; each *View details* link carries an accessible name that says which record it opens (`WCAG 2.4.4`).

## States

No state of its own: the band is structure only, and nothing in it takes focus. The action under it takes the [button](button.html#s-states) states.

## When to use

The card row is the third member of the `.dr-card__*` family, beside `__actions` and `__link`. It exists because `.dr-card--row` turns the whole card into a row, while `wallet`'s earnings card is a column whose first child is one. `.dr-listing__foot` declares the same gap, but its name says *foot* and it cannot serve a band that leads.

The figure alone does not say whether money came in or went out, so `.sr-only` puts *Earned* in front of it for a screen reader (`WCAG 1.3.1`); sighted readers get it from the *Recent* label above the list. The action stays out of the band, so the button keeps its full 44pt target across the card instead of being squeezed in beside a price. Money that lands is *paid* or *earned*; money out is *Withdraw*.

Sources: DESIGN.md § Cards (`.dr-card__row`) · inventory.md § 1.3 (Card row band) · ui/kit.html Card row

## Rule

```html
<article class="dr-card" style="width:341px;max-width:100%">
  <span class="dr-card__row">
    <span class="dr-listing__body">
      <span class="dr-listing__name">Package delivery</span>
      <span class="dr-listing__meta"><span class="dr-listing__desc">Today, 10:07</span></span>
    </span>
    <span><span class="sr-only">Earned</span><span class="dr-number">&#8372;180</span></span>
  </span>
  <span class="dr-card__actions">
    <a class="dr-btn dr-btn--secondary" href="#" aria-label="View details, Package delivery, today at 10:07">View details</a>
  </span>
</article>
```

A column card that opens with a name-and-figure line and closes with its action on a row of its own.

## Anti-rule

```html
<article class="dr-card" style="width:341px;max-width:100%">
  <span class="dr-card__row">
    <span class="dr-listing__body">
      <span class="dr-listing__name">Package delivery</span>
      <span class="dr-listing__meta"><span class="dr-listing__desc">Today, 10:07</span></span>
    </span>
    <span><span class="sr-only">Earned</span><span class="dr-number">&#8372;180</span></span>
    <a class="dr-btn dr-btn--secondary" href="#" aria-label="View details, Package delivery, today at 10:07">View details</a>
  </span>
</article>
```

The action squeezed into the band beside the price: the text column narrows and the target shrinks. Put the button in [`.dr-card__actions`](card-actions.html) under the band. When the whole card is one row with a picture, use the [row card](card.html#variant-row) (`.dr-card--row`) instead.
