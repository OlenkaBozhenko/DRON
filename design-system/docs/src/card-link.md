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
<article class="dr-card" style="width:341px;max-width:100%">
  <a class="dr-card__link" href="#" aria-label="Package delivery, in progress — view details"></a>
    <span class="dr-order__top">
      <span class="dr-order__head">
        <span class="dr-order__title">Package delivery</span>
        <span class="dr-order__date">Today · 10:03</span>
      </span>
      <span class="dr-well">
        <img src="../assets/drones/thumbs/drone-08.png" alt="" loading="lazy" decoding="async">
        <span class="dr-status dr-status--live" role="img" aria-label="In progress"></span>
      </span>
    </span>
    <span class="dr-rail dr-rail--at2">
      <span class="dr-rail__step"><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></span>
      <span class="dr-rail__step" aria-current="step"><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">En route</span></span>
      <span class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">On&#8209;site</span></span>
      <span class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">Done</span></span>
    </span>
    <span class="dr-inset">
      <span class="dr-inset__stop"><span class="dr-inset__lbl">From</span><span class="dr-inset__place">Podil</span></span>
      <span class="dr-inset__dir" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12h13"/><path d="M13 7.5l4.5 4.5-4.5 4.5"/></svg></span>
      <span class="dr-inset__stop dr-inset__stop--to"><span class="dr-inset__lbl">To</span><span class="dr-inset__place">Osokorky</span></span>
    </span>
    <span class="dr-order__fee">
      <span><span class="sr-only">Delivery fee</span><span class="dr-number dr-order__price">&#8372;180</span></span>
      <span class="dr-chip"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="13.5" r="7"/><path d="M12 13.5V9.5"/><path d="M9.5 3.2h5"/><path d="M12 6.5v-3.3"/></svg>ETA ~6 min</span>
    </span>
    <span class="dr-card__actions">
      <a class="dr-btn dr-btn--primary" href="#">View details</a>
    </span>
</article>
```

- `.dr-card__link` — An empty anchor stretched over the card: `position: absolute; inset: 0; z-index: 1`, radius 16, the card's own. It carries the whole card's meaning in `aria-label`.
- `.dr-card` — The card the ring is drawn on: 2.5px of `--text-primary` at offset 2, keyboard focus only.
- `.dr-order__title` — Text inside stays text: selectable and not a second link.

## Variants

### Order card as one link

```html
<article class="dr-card" style="width:341px;max-width:100%">
  <a class="dr-card__link" href="#" aria-label="Package delivery, 28 Jun 2026, delivered — open order"></a>
    <span class="dr-order__top">
      <span class="dr-order__head">
        <span class="dr-order__title">Package delivery</span>
        <span class="dr-order__date">28 Jun · 14:20</span>
      </span>
      <span class="dr-well">
        <img src="../assets/drones/thumbs/drone-08.png" alt="" loading="lazy" decoding="async">
        <span class="dr-status" role="img" aria-label="Delivered"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span>
      </span>
    </span>
    <span class="dr-inset">
      <span class="dr-inset__stop"><span class="dr-inset__lbl">From</span><span class="dr-inset__place">Podil</span></span>
      <span class="dr-inset__dir" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12h13"/><path d="M13 7.5l4.5 4.5-4.5 4.5"/></svg></span>
      <span class="dr-inset__stop dr-inset__stop--to"><span class="dr-inset__lbl">To</span><span class="dr-inset__place">Osokorky</span></span>
    </span>
    <span class="dr-order__fee">
      <span><span class="sr-only">Delivery fee</span><span class="dr-number dr-order__price">&#8372;180</span></span>
      <span class="dr-order__acts"><button class="dr-btn dr-btn--icon" type="button" aria-label="Delete order"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6.6h16"/><path d="M9.6 6.6V4.9a1.1 1.1 0 0 1 1.1-1.1h2.6a1.1 1.1 0 0 1 1.1 1.1v1.7"/><path d="M6.3 6.6l.85 12.1a1.6 1.6 0 0 0 1.6 1.5h6.5a1.6 1.6 0 0 0 1.6-1.5l.85-12.1"/><path d="M10.3 10.4v6M13.7 10.4v6"/></svg></button><a class="dr-btn dr-btn--icon" href="#" aria-label="View details"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5.5" cy="6" r="2.1"/><circle cx="18.5" cy="6" r="2.1"/><circle cx="5.5" cy="18" r="2.1"/><circle cx="18.5" cy="18" r="2.1"/><path d="M7 7.5l3 3M17 7.5l-3 3M7 16.5l3-3M17 16.5l-3-3"/><rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1.3"/></svg></a></span>
    </span>
</article>
```

A past order on `order-history`. One tab stop and one announcement instead of a title link, a date link and a price link that all go to the same place. Tab to it: the ring is on the card. The target is the whole card, far past `HIG · 44pt`. The two 44 × 44 icon buttons in `.dr-order__acts` sit above the link, because `.dr-btn--icon` carries `z-index: 2` of its own.

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

The job offer on `operator-listings`, three cards. The buttons in `.dr-card__actions` are lifted to `z-index: 2`, above the link's 1, so each stays its own target; the card ring belongs to the link alone, and a focused button does not double-ring the card.

### Row card as one link

```html
<article class="dr-card dr-card--row" style="width:341px;max-width:100%">
  <a class="dr-card__link" href="#" aria-label="Book 09:00 to 10:00, operator free"></a>
  <span class="dr-listing__body">
    <span class="dr-listing__name">09:00 – 10:00</span>
    <span class="dr-listing__desc">Operator free · Andriy M. nearby</span>
  </span>
</article>
```

A free hour on `time-slot` and `time-slot-inspection`, four cards on each. The same stretched link on a `--row` card with no picture and no controls: the whole row books that hour.

## When to use

Four screens build a card this way: `order-history`, `operator-listings`, `time-slot` and `time-slot-inspection`. Use it when the whole card goes to one place. The card is not wrapped in an anchor; the stretched link keeps the text inside selectable and gives the card one accessible name.

Focus is keyboard only. `.dr-card:focus-within` clears the default outline, because `:focus-within` fires on a pointer click too, and the ring is re-hung on `.dr-card:has(> .dr-card__link:focus-visible)`. It takes the card's radius, 16: the link has no shape of its own, and a ring that rounded differently would announce a second element that is not there. A ring on the empty anchor would trace the card's inner edge, so the shape the user tapped is the one that is outlined (`WCAG 2.4.11`).

The `aria-label` reads the card in order and ends in the action: *Package delivery, in progress — view details* on the live order, *Package delivery, 28 Jun 2026, delivered — open order* on a past one, *Book 09:00 to 10:00, operator free* on a time slot. On the operator side the noun is *job*: *Package delivery job — open brief*.

Sources: DESIGN.md § Cards (whole-card link, focus) · inventory.md § 1.3 (Card) · ui/kit.html The card that is one link

## Rule

```html
<ul class="dr-list" style="width:341px;max-width:100%"><li><article class="dr-card">
  <a class="dr-card__link" href="#" aria-label="Package delivery, 28 Jun 2026, delivered — open order"></a>
    <span class="dr-order__top">
      <span class="dr-order__head">
        <span class="dr-order__title">Package delivery</span>
        <span class="dr-order__date">28 Jun · 14:20</span>
      </span>
      <span class="dr-well">
        <img src="../assets/drones/thumbs/drone-08.png" alt="" loading="lazy" decoding="async">
        <span class="dr-status" role="img" aria-label="Delivered"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span>
      </span>
    </span>
    <span class="dr-inset">
      <span class="dr-inset__stop"><span class="dr-inset__lbl">From</span><span class="dr-inset__place">Podil</span></span>
      <span class="dr-inset__dir" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12h13"/><path d="M13 7.5l4.5 4.5-4.5 4.5"/></svg></span>
      <span class="dr-inset__stop dr-inset__stop--to"><span class="dr-inset__lbl">To</span><span class="dr-inset__place">Osokorky</span></span>
    </span>
    <span class="dr-order__fee">
      <span><span class="sr-only">Delivery fee</span><span class="dr-number dr-order__price">&#8372;180</span></span>
      <span class="dr-order__acts"><button class="dr-btn dr-btn--icon" type="button" aria-label="Delete order"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6.6h16"/><path d="M9.6 6.6V4.9a1.1 1.1 0 0 1 1.1-1.1h2.6a1.1 1.1 0 0 1 1.1 1.1v1.7"/><path d="M6.3 6.6l.85 12.1a1.6 1.6 0 0 0 1.6 1.5h6.5a1.6 1.6 0 0 0 1.6-1.5l.85-12.1"/><path d="M10.3 10.4v6M13.7 10.4v6"/></svg></button><a class="dr-btn dr-btn--icon" href="#" aria-label="View details"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5.5" cy="6" r="2.1"/><circle cx="18.5" cy="6" r="2.1"/><circle cx="5.5" cy="18" r="2.1"/><circle cx="18.5" cy="18" r="2.1"/><path d="M7 7.5l3 3M17 7.5l-3 3M7 16.5l3-3M17 16.5l-3-3"/><rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1.3"/></svg></a></span>
    </span>
</article></li><li><article class="dr-card">
  <a class="dr-card__link" href="#" aria-label="Photo and video, 14 Jun 2026, delivered — open order"></a>
    <span class="dr-order__top">
      <span class="dr-order__head">
        <span class="dr-order__title">Photo &amp; video</span>
        <span class="dr-order__date">14 Jun · 11:30</span>
      </span>
      <span class="dr-well">
        <img src="../assets/drones/thumbs/drone-flight-camera.png" alt="" loading="lazy" decoding="async">
        <span class="dr-status" role="img" aria-label="Delivered"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span>
      </span>
    </span>
    <span class="dr-inset">
      <span class="dr-inset__stop"><span class="dr-inset__lbl">Location</span><span class="dr-inset__place">Trukhaniv Island</span></span>
    </span>
    <span class="dr-order__fee">
      <span><span class="sr-only">Total</span><span class="dr-number dr-order__price">&#8372;800</span></span>
      <span class="dr-order__acts"><button class="dr-btn dr-btn--icon" type="button" aria-label="Delete order"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6.6h16"/><path d="M9.6 6.6V4.9a1.1 1.1 0 0 1 1.1-1.1h2.6a1.1 1.1 0 0 1 1.1 1.1v1.7"/><path d="M6.3 6.6l.85 12.1a1.6 1.6 0 0 0 1.6 1.5h6.5a1.6 1.6 0 0 0 1.6-1.5l.85-12.1"/><path d="M10.3 10.4v6M13.7 10.4v6"/></svg></button><a class="dr-btn dr-btn--icon" href="#" aria-label="View the photo and video set"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5.5" cy="6" r="2.1"/><circle cx="18.5" cy="6" r="2.1"/><circle cx="5.5" cy="18" r="2.1"/><circle cx="18.5" cy="18" r="2.1"/><path d="M7 7.5l3 3M17 7.5l-3 3M7 16.5l3-3M17 16.5l-3-3"/><rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1.3"/></svg></a></span>
    </span>
</article></li></ul>
```

Cards in a list that each open one screen, as `order-history` draws them: one anchor over each, the whole meaning in its name, every other element plain text or its own lifted control.

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
