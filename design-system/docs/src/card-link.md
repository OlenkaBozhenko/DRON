---
name: Card that is one link
slug: card-link
group: Surfaces
order: 30
classes: .dr-card__link · .dr-card:has(> .dr-card__link:focus-visible) · .dr-card:focus-within
file: card.css
inventory: Card (whole-card link)
kit: 1381
---

## Anatomy

```html
<article class="dr dr-card" style="width:341px;max-width:100%">
      <a class="dr-card__link" href="#" aria-label="Package delivery, in progress &#8212; view details"></a>
      <span class="dr-order__top">
        <span class="dr-order__head">
          <span class="dr-order__title">Package delivery</span>
          <span class="dr-order__date">Today &#183; 10:03</span>
        </span>
        <span class="dr-well">
          <img src="../assets/drones/thumbs/drone-08.png" alt="" loading="lazy" decoding="async">
          <span class="dr-status dr-status--live" role="img" aria-label="In progress"></span>
        </span>
      </span>
      <span class="dr-order__fee">
        <span><span class="dr-sr">Delivery fee </span><span class="dr-number dr-order__price">&#8372;180</span></span>
        <span class="dr-chip"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="13.5" r="7"/><path d="M12 13.5V9.5"/><path d="M9.5 3.2h5"/><path d="M12 6.5v-3.3"/></svg>ETA ~6 min</span>
      </span>
    </article>
```

- `.dr-card__link` — An empty anchor stretched over the card: `position: absolute; inset: 0; z-index: 1`, radius 16, the card's own. It carries the whole card's meaning in `aria-label`.
- `.dr-card` — The card the ring is drawn on: 2.5px of `--text-primary` at offset 2, keyboard focus only.
- `.dr-order__title` — Text inside stays text: selectable and not a second link.

## Variants

### Order card as one link

```html
<article class="dr dr-card" style="width:341px;max-width:100%">
      <a class="dr-card__link" href="#" aria-label="Package delivery, in progress &#8212; view details"></a>
      <span class="dr-order__top">
        <span class="dr-order__head">
          <span class="dr-order__title">Package delivery</span>
          <span class="dr-order__date">Today &#183; 10:03</span>
        </span>
        <span class="dr-well">
          <img src="../assets/drones/thumbs/drone-08.png" alt="" loading="lazy" decoding="async">
          <span class="dr-status dr-status--live" role="img" aria-label="In progress"></span>
        </span>
      </span>
      <span class="dr-order__fee">
        <span><span class="dr-sr">Delivery fee </span><span class="dr-number dr-order__price">&#8372;180</span></span>
        <span class="dr-chip"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="13.5" r="7"/><path d="M12 13.5V9.5"/><path d="M9.5 3.2h5"/><path d="M12 6.5v-3.3"/></svg>ETA ~6 min</span>
      </span>
    </article>
```

One tab stop and one announcement instead of a title link, a date link and a chip link that all go to the same place. Tab to it: the ring is on the card. The target is the whole card, far past `HIG · 44pt`.

### With controls inside

```html
<article class="dr-card" style="width:341px;max-width:100%">
              <a class="dr-card__link" href="#" aria-label="Package delivery job — open brief"></a>
              <span class="dr-order__top">
                <span class="dr-order__head">
                  <span class="dr-order__title">Package delivery</span>
                  <span class="dr-order__date">2.3 km · ~18 min</span>
                </span>
                <span class="dr-chip dr-chip--claim">New</span>
              </span>
              <span class="dr-inset">
                <span class="dr-inset__stop"><span class="dr-inset__lbl">Pickup</span><span class="dr-inset__place">Podil</span></span>
                <span class="dr-inset__dir" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12h13"/><path d="M13 7.5l4.5 4.5-4.5 4.5"/></svg></span>
                <span class="dr-inset__stop dr-inset__stop--to"><span class="dr-inset__lbl">Drop-off</span><span class="dr-inset__place">Osokorky</span></span>
              </span>
              <span class="dr-order__fee">
                <span><span class="sr-only">Pay</span><span class="dr-number dr-order__price">₴180</span></span>
                <span class="dr-chip">expires in 8s</span>
              </span>
              <span class="dr-card__actions">
                <a class="dr-btn dr-btn--primary" href="#">Accept</a>
                <a class="dr-btn dr-btn--secondary" href="#">Decline</a>
              </span>
            </article>
```

The job offer on `operator-listings`. The buttons in `.dr-card__actions` are lifted to `z-index: 2`, above the link's 1, so each stays its own target; the card ring belongs to the link alone, and a focused button does not double-ring the card.

## When to use

Four screens build a card this way: `order-history`, `operator-listings`, `time-slot` and `time-slot-inspection`. Use it when the whole card goes to one place. The card is not wrapped in an anchor; the stretched link keeps the text inside selectable and gives the card one accessible name.

Focus is keyboard only. `.dr-card:focus-within` clears the default outline, because `:focus-within` fires on a pointer click too, and the ring is re-hung on `.dr-card:has(> .dr-card__link:focus-visible)`. It takes the card's radius, 16: the link has no shape of its own, and a ring that rounded differently would announce a second element that is not there. A ring on the empty anchor would trace the card's inner edge, so the shape the user tapped is the one that is outlined (`WCAG 2.4.11`).

The `aria-label` reads the card in order and ends in the action: *Package delivery, in progress — view details*. It uses the canonical *view details*, and on the operator side the noun is *job*.

Sources: DESIGN.md § Cards (whole-card link, focus) · inventory.md § 1.3 (Card) · ui/kit.html The card that is one link

## Rule

```html
<ul class="dr-list" style="width:341px;max-width:100%"><li><article class="dr dr-card">
      <a class="dr-card__link" href="#" aria-label="Package delivery, in progress &#8212; view details"></a>
      <span class="dr-order__top">
        <span class="dr-order__head">
          <span class="dr-order__title">Package delivery</span>
          <span class="dr-order__date">Today &#183; 10:03</span>
        </span>
        <span class="dr-well">
          <img src="../assets/drones/thumbs/drone-08.png" alt="" loading="lazy" decoding="async">
          <span class="dr-status dr-status--live" role="img" aria-label="In progress"></span>
        </span>
      </span>
      <span class="dr-order__fee">
        <span><span class="dr-sr">Delivery fee </span><span class="dr-number dr-order__price">&#8372;180</span></span>
        <span class="dr-chip"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="13.5" r="7"/><path d="M12 13.5V9.5"/><path d="M9.5 3.2h5"/><path d="M12 6.5v-3.3"/></svg>ETA ~6 min</span>
      </span>
    </article></li></ul>
```

A card in a list that opens one screen: one anchor over it, the whole meaning in its name, every other element plain text.

## Anti-rule

```html
<article class="dr dr-card" style="width:341px;max-width:100%">
      <span class="dr-order__top">
        <span class="dr-order__head">
          <a class="dr-order__title" href="#">Package delivery</a>
          <a class="dr-order__date" href="#">Today &#183; 10:03</a>
        </span>
        <span class="dr-well">
          <img src="../assets/drones/thumbs/drone-08.png" alt="" loading="lazy" decoding="async">
          <span class="dr-status dr-status--live" role="img" aria-label="In progress"></span>
        </span>
      </span>
    </article>
```

Several links inside one card that all go to the same place: three tab stops, three announcements, and targets smaller than the card. Stretch one `.dr-card__link` over it instead. When the card is a choice between routes rather than a record, use the [choice card](choice-card.html), which is itself the anchor.
