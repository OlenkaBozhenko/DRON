---
name: Card action slot
slug: card-actions
group: Actions
order: 40
classes: .dr-card__actions
file: card.css
inventory: (.dr-card__actions)
kit: 623
---

## Anatomy

```html
<span class="dr-card__actions" style="width:303px;max-width:100%">
  <a class="dr-btn dr-btn--primary" href="../../wireframes/job-brief.html">Accept</a>
  <a class="dr-btn dr-btn--secondary" href="../../wireframes/operator-listings.html">Decline</a>
</span>
```

Copied from the *Package delivery* offer on `operator-listings`.

- `.dr-card__actions` — The slot: a flex row, gap 8, no ground of its own, so the card's inset is unchanged.
- `.dr-btn--primary` — Each button in the slot takes `flex:1`, an equal share of the row, and `z-index:2`, so it stays tappable above a whole-card link.

## Variants

### One action

```html
<span class="dr-card__actions" style="width:303px;max-width:100%">
  <a class="dr-btn dr-btn--secondary" href="../../wireframes/earning-details.html" aria-label="View details &#8212; Package delivery, today at 10:07">View details</a>
</span>
```

A single button fills the slot. On `wallet` each earning card closes on a secondary *View details*, whose `aria-label` names the job and its time. The screens split on the fill: 3 single-action slots are secondary (`wallet`), 2 are primary (*View details* on `order-history`, *Continue* on `operator-listings`).

### Two actions

```html
<span class="dr-card__actions" style="width:303px;max-width:100%">
  <a class="dr-btn dr-btn--primary" href="../../wireframes/job-brief.html">Accept</a>
  <a class="dr-btn dr-btn--secondary" href="../../wireframes/operator-listings.html">Decline</a>
</span>
```

Two buttons share the row on the same rhythm, primary first. `operator-listings` uses it for *Accept* and *Decline* on its two incoming offers.

## When to use

The slot is where a card's own actions sit, so a card never lays out buttons ad hoc. It closes the card at its foot and holds one action or two on the same row and the same 8 gap. It stands on 7 cards on three screens: `order-history` (one card, *View details*), `operator-listings` (*Accept* · *Decline* on two offers, *Continue* on the job in progress) and `wallet` (three earning cards, *View details*). The buttons are links (`<a>`) on every one of them. The buttons in it are ordinary [buttons](button.html); the slot adds only the row and the stacking above the card's link.

Labels follow the vocabulary: *View details* opens an order or a job, and client-side cards speak of an *order*, operator-side cards of a *job*.

Sources: inventory.md § 1 (Card action slot) · DESIGN.md § Cards · § The in-page group row (stacking order) · voice.md § Vocabulary

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
    <a class="dr-btn dr-btn--secondary" href="../../wireframes/earning-details.html" aria-label="View details &#8212; Package delivery, today at 10:07">View details</a>
  </span>
</article>
```

Actions at the foot of the card they belong to, inside `.dr-card__actions`, at the card's own inset. Copied from `wallet`.

## Anti-rule

```html
<article class="dr-card" style="width:341px;max-width:100%"><span class="dr-card__actions"><span class="dr-btn dr-btn--primary">Accept</span><span class="dr-btn dr-btn--secondary">Decline</span><span class="dr-btn dr-btn--secondary">Contact support</span></span></article>
```

Three equal shares on a 341 card leave each label too little width, and *Contact support* is not this card's action. Keep the slot to one or two actions about the card itself; a screen-level action goes in the [action bar](action-bar.html), and a whole card that opens one destination is a [card that is one link](card-link.html).
