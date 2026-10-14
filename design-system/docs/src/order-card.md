---
name: Order card
slug: order-card
group: Surfaces
order: 10
classes: .dr-card · .dr-order__top · __head · __title · __date · __fee · __price · __acts · .dr-status · --live · .dr-inset · __stop · --to · __lbl · __place · __dir
file: card.css
inventory: Card (order); Status indicator; Inset strip
kit: 666
---

## Anatomy

```html
<article class="dr-card" style="width:341px;max-width:100%">
      <div class="dr-order__top">
        <span class="dr-order__head">
          <span class="dr-order__title">Package delivery</span>
          <span class="dr-order__date">Today · 10:03</span>
        </span>
        <span class="dr-well">
          <img src="../assets/drones/thumbs/drone-08.png" alt="">
          <span class="dr-status dr-status--live" role="img" aria-label="In progress"></span>
        </span>
      </div>
      <div class="dr-rail" style="--dr-fill:25%">
        <div class="dr-rail__step"><span class="dr-node dr-node--done"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></div>
        <div class="dr-rail__step"><span class="dr-node dr-node--now"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">En route</span></div>
        <div class="dr-rail__step"><span class="dr-node"></span><span class="dr-rail__lbl">On-site</span></div>
        <div class="dr-rail__step"><span class="dr-node"></span><span class="dr-rail__lbl">Done</span></div>
      </div>
      <div class="dr-inset">
        <span class="dr-inset__stop"><span class="dr-inset__lbl">From</span><span class="dr-inset__place">Podil</span></span>
        <span class="dr-inset__dir" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24"><path d="M4.5 12h13"/><path d="M13 7.5l4.5 4.5-4.5 4.5"/></svg></span>
        <span class="dr-inset__stop dr-inset__stop--to"><span class="dr-inset__lbl">To</span><span class="dr-inset__place">Osokorky</span></span>
      </div>
      <div class="dr-order__fee">
        <span><span class="dr-sr">Delivery fee</span><span class="dr-number dr-order__price">₴180</span></span>
        <span class="dr-chip"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13.5" r="7.5"/><path d="M12 13.5V9"/><path d="M12 13.5l3.4 2"/><path d="M9.5 3.2h5"/></svg>ETA ~6 min</span>
      </div>
      <button class="dr-btn dr-btn--primary dr-btn--block" type="button">View details</button>
    </article>
```

- `.dr-order__head` — The name over the date, first in the DOM. Title 15/600 in `--text-primary`; date in the meta step, `--text-muted`, ellipsised on one line.
- `.dr-well` — The drone doing the job, a 96 × 96 cutout with no ground, closing the row on the right.
- `.dr-status` — The status indicator: a 20px disc on the well's top-right corner with a 2px card-coloured cutout ring.
- `.dr-rail` — The four-step [progress rail](progress-rail.html). Live orders only.
- `.dr-inset` — The From ▸ To strip: `--bg-inset`, radius 12, padding 16, a 26px neutral direction chip between the stops.
- `.dr-order__fee` — The fee as a `.dr-number` (20/700, tabular) with its word in `.dr-sr`, and the ETA chip beside it.
- `.dr-btn--primary` — The screen's one green control, on the live card only.

## Variants

### Live

```html
<article class="dr-card" style="width:341px;max-width:100%">
      <div class="dr-order__top">
        <span class="dr-order__head">
          <span class="dr-order__title">Package delivery</span>
          <span class="dr-order__date">Today · 10:03</span>
        </span>
        <span class="dr-well">
          <img src="../assets/drones/thumbs/drone-08.png" alt="">
          <span class="dr-status dr-status--live" role="img" aria-label="In progress"></span>
        </span>
      </div>
      <div class="dr-rail" style="--dr-fill:25%">
        <div class="dr-rail__step"><span class="dr-node dr-node--done"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></div>
        <div class="dr-rail__step"><span class="dr-node dr-node--now"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">En route</span></div>
        <div class="dr-rail__step"><span class="dr-node"></span><span class="dr-rail__lbl">On-site</span></div>
        <div class="dr-rail__step"><span class="dr-node"></span><span class="dr-rail__lbl">Done</span></div>
      </div>
      <div class="dr-inset">
        <span class="dr-inset__stop"><span class="dr-inset__lbl">From</span><span class="dr-inset__place">Podil</span></span>
        <span class="dr-inset__dir" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24"><path d="M4.5 12h13"/><path d="M13 7.5l4.5 4.5-4.5 4.5"/></svg></span>
        <span class="dr-inset__stop dr-inset__stop--to"><span class="dr-inset__lbl">To</span><span class="dr-inset__place">Osokorky</span></span>
      </div>
      <div class="dr-order__fee">
        <span><span class="dr-sr">Delivery fee</span><span class="dr-number dr-order__price">₴180</span></span>
        <span class="dr-chip"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13.5" r="7.5"/><path d="M12 13.5V9"/><path d="M12 13.5l3.4 2"/><path d="M9.5 3.2h5"/></svg>ETA ~6 min</span>
      </div>
      <button class="dr-btn dr-btn--primary dr-btn--block" type="button">View details</button>
    </article>
```

An order in progress: rail, ETA chip and the green CTA. It is the only card on the list that carries all three.

### Delivered

```html
<article class="dr-card" style="width:341px;max-width:100%">
      <div class="dr-order__top">
        <span class="dr-order__head">
          <span class="dr-order__title">Package delivery</span>
          <span class="dr-order__date">28 Jun · 14:20</span>
        </span>
        <span class="dr-well">
          <img src="../assets/drones/thumbs/drone-08.png" alt="">
          <span class="dr-status" role="img" aria-label="Delivered"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span>
        </span>
      </div>
      <div class="dr-inset">
        <span class="dr-inset__stop"><span class="dr-inset__lbl">From</span><span class="dr-inset__place">Podil</span></span>
        <span class="dr-inset__dir" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24"><path d="M4.5 12h13"/><path d="M13 7.5l4.5 4.5-4.5 4.5"/></svg></span>
        <span class="dr-inset__stop dr-inset__stop--to"><span class="dr-inset__lbl">To</span><span class="dr-inset__place">Osokorky</span></span>
      </div>
      <div class="dr-order__fee">
        <span><span class="dr-sr">Delivery fee</span><span class="dr-number dr-order__price">₴180</span></span>
        <span class="dr-order__acts">
          <button class="dr-btn dr-btn--icon" type="button" aria-label="Delete order"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.6h16"/><path d="M9.6 6.6V4.9a1.1 1.1 0 0 1 1.1-1.1h2.6a1.1 1.1 0 0 1 1.1 1.1v1.7"/><path d="M6.3 6.6l.85 12.1a1.6 1.6 0 0 0 1.6 1.5h6.5a1.6 1.6 0 0 0 1.6-1.5l.85-12.1"/><path d="M10.3 10.4v6M13.7 10.4v6"/></svg></button>
        </span>
      </div>
    </article>
```

Differs by structure, not decoration: no rail, and the green CTA becomes 44 × 44 grey icon actions in `.dr-order__acts`. The From ▸ To strip stays.

### Status indicator

```html
<div style="display:flex;gap:16px"><span class="dr-well"><img src="../assets/drones/thumbs/drone-08.png" alt=""><span class="dr-status dr-status--live" role="img" aria-label="In progress"></span></span><span class="dr-well"><img src="../assets/drones/thumbs/drone-08.png" alt=""><span class="dr-status" role="img" aria-label="Delivered"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span></span></div>
```

Live is a solid green disc with one ring leaving it on a 1.8s cycle, off under `prefers-reduced-motion`. Done is the secondary grey with a charcoal check at 11.54:1. Each keeps its wording as its accessible name.

### Inset strip

```html
<div class="dr-inset" style="width:301px;max-width:100%">
        <span class="dr-inset__stop"><span class="dr-inset__lbl">From</span><span class="dr-inset__place">Podil</span></span>
        <span class="dr-inset__dir" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24"><path d="M4.5 12h13"/><path d="M13 7.5l4.5 4.5-4.5 4.5"/></svg></span>
        <span class="dr-inset__stop dr-inset__stop--to"><span class="dr-inset__lbl">To</span><span class="dr-inset__place">Osokorky</span></span>
      </div>
```

From-stop left, To-stop right-aligned. The direction chip is neutral, not green: green is not spent inside card UI.

## When to use

The order card is the record of one order in a list: `order-history` and its loading state on the client side, `operator-listings` on the operator side, where the same card is a job. It is the most measured component in the product. The name leads and the well closes the row, so the reading order and the screen-reader order are the same sequence (`WCAG 1.3.2`): *Package delivery · Today 10:03 · In progress*.

The status is never carried by the mark alone. Live green is 1.52:1 on the well and does not clear `WCAG 1.4.11` by itself; the live card is also the only one with a rail, an ETA chip and the green CTA, and the mark says *In progress* outright. Shape and behaviour separate live from done, never colour alone.

The title is the service, not the drone. The fee is a figure with its word in `.dr-sr`, the CTA is the canonical *View details*, and the icon actions take their name from `aria-label` (*Delete order*). Client side it is an *order*, operator side a *job*; the words never cross.

Sources: DESIGN.md § Cards · § Inset strip · § Status indicator · inventory.md § 3 (order-history) · voice.md § Microcopy — rules by element type · ui/kit.html Order card

## Rule

```html
<ul class="dr-list" style="width:341px;max-width:100%"><li><article class="dr-card">
      <div class="dr-order__top">
        <span class="dr-order__head">
          <span class="dr-order__title">Package delivery</span>
          <span class="dr-order__date">Today · 10:03</span>
        </span>
        <span class="dr-well">
          <img src="../assets/drones/thumbs/drone-08.png" alt="">
          <span class="dr-status dr-status--live" role="img" aria-label="In progress"></span>
        </span>
      </div>
      <div class="dr-order__fee">
        <span><span class="dr-sr">Delivery fee</span><span class="dr-number dr-order__price">₴180</span></span>
        <span class="dr-chip"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13.5" r="7.5"/><path d="M12 13.5V9"/><path d="M12 13.5l3.4 2"/><path d="M9.5 3.2h5"/></svg>ETA ~6 min</span>
      </div>
      <button class="dr-btn dr-btn--primary dr-btn--block" type="button">View details</button>
    </article></li><li><article class="dr-card">
      <div class="dr-order__top">
        <span class="dr-order__head">
          <span class="dr-order__title">Package delivery</span>
          <span class="dr-order__date">28 Jun · 14:20</span>
        </span>
        <span class="dr-well">
          <img src="../assets/drones/thumbs/drone-08.png" alt="">
          <span class="dr-status" role="img" aria-label="Delivered"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span>
        </span>
      </div>
      <div class="dr-order__fee">
        <span><span class="dr-sr">Delivery fee</span><span class="dr-number dr-order__price">₴180</span></span>
        <span class="dr-order__acts">
          <button class="dr-btn dr-btn--icon" type="button" aria-label="Delete order"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.6h16"/><path d="M9.6 6.6V4.9a1.1 1.1 0 0 1 1.1-1.1h2.6a1.1 1.1 0 0 1 1.1 1.1v1.7"/><path d="M6.3 6.6l.85 12.1a1.6 1.6 0 0 0 1.6 1.5h6.5a1.6 1.6 0 0 0 1.6-1.5l.85-12.1"/><path d="M10.3 10.4v6M13.7 10.4v6"/></svg></button>
        </span>
      </div>
    </article></li></ul>
```

One live order and one delivered, 28 apart on a list that is the screen. The live card spends the screen's one green control; the delivered card answers with a grey icon action.

## Anti-rule

```html
<article class="dr-card" style="width:341px;max-width:100%">
      <div class="dr-order__top">
        <span class="dr-order__head">
          <span class="dr-order__title">Package delivery</span>
          <span class="dr-order__date">28 Jun · 14:20</span>
        </span>
        <span class="dr-well">
          <img src="../assets/drones/thumbs/drone-08.png" alt="">
          <span class="dr-status" role="img" aria-label="Delivered"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span>
        </span>
      </div>
      <div class="dr-rail" style="--dr-fill:75%">
        <div class="dr-rail__step"><span class="dr-node dr-node--done"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></div>
        <div class="dr-rail__step"><span class="dr-node dr-node--done"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">En route</span></div>
        <div class="dr-rail__step"><span class="dr-node dr-node--done"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">On-site</span></div>
        <div class="dr-rail__step"><span class="dr-node dr-node--done"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Done</span></div>
      </div>
      <button class="dr-btn dr-btn--primary dr-btn--block" type="button">View details</button>
    </article>
```

A delivered order with a rail of four ticked nodes and a green CTA. Four ticks say nothing and cost 60px, and the green spends a second primary on a list that already has a live order. Drop the rail and use the [delivered shape](order-card.html#variant-delivered). To make a whole card one tap target instead of carrying a button, use the [card that is one link](card-link.html).
