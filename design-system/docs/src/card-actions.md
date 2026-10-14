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
<span class="dr-card__actions" style="width:341px;max-width:100%"><span class="dr-btn dr-btn--primary">Accept</span><span class="dr-btn dr-btn--secondary">Decline</span></span>
```

- `.dr-card__actions` — The slot: a flex row, gap 8, no ground of its own, so the card's inset is unchanged.
- `.dr-btn--primary` — Each button in the slot takes `flex:1`, an equal share of the row, and `z-index:2`, so it stays tappable above a whole-card link.

## Variants

### One action

```html
<span class="dr-card__actions" style="width:286px;max-width:100%"><span class="dr-btn dr-btn--primary">View details</span></span>
```

A single button fills the slot. Measured 286.2 × 44 on `order-history`.

### Two actions

```html
<span class="dr-card__actions" style="width:341px;max-width:100%"><span class="dr-btn dr-btn--primary">Accept</span><span class="dr-btn dr-btn--secondary">Decline</span></span>
```

Two buttons share the row on the same rhythm, primary first. `operator-listings` uses it for *Accept* and *Decline* on an incoming job.

## When to use

The slot is where a card's own actions sit, so a card never lays out buttons ad hoc. It closes the card at its foot and holds one action or two on the same row and the same 8 gap. It stands on the list cards of `order-history` (*View details*), `operator-listings` (*Accept* · *Decline*, *Continue*) and `wallet` (*View details*). The buttons in it are ordinary [buttons](button.html); the slot adds only the row and the stacking above the card's link.

Labels follow the vocabulary: *View details* opens an order or a job, and client-side cards speak of an *order*, operator-side cards of a *job*.

Sources: inventory.md § 1 (Card action slot) · DESIGN.md § Cards · § The in-page group row (stacking order) · voice.md § Vocabulary

## Rule

```html
<article class="dr-card" style="width:341px;max-width:100%"><span class="dr-card__actions"><span class="dr-btn dr-btn--secondary">View details</span></span></article>
```

Actions at the foot of the card they belong to, inside `.dr-card__actions`, at the card's own inset.

## Anti-rule

```html
<article class="dr-card" style="width:341px;max-width:100%"><span class="dr-card__actions"><span class="dr-btn dr-btn--primary">Accept</span><span class="dr-btn dr-btn--secondary">Decline</span><span class="dr-btn dr-btn--secondary">Contact support</span></span></article>
```

Three equal shares on a 341 card leave each label too little width, and *Contact support* is not this card's action. Keep the slot to one or two actions about the card itself; a screen-level action goes in the [action bar](action-bar.html), and a whole card that opens one destination is a [card that is one link](card-link.html).
