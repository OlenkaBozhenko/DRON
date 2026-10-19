---
name: Stat card
slug: stat-card
group: Wide screens
order: 21
classes: .dr-stat · __ic · __brand · __label · __figure · __trend
file: stat.css
inventory: (new, wide screens)
kit: 4008
---

## Anatomy

```html
<div class="dr dr-desk" style="width:300px;max-width:100%"><div class="dr-stat dr-material"><span class="dr-stat__ic"><span class="dr-brand dr-stat__brand" aria-hidden="true"></span></span><span><span class="dr-stat__label">Drones in the air now</span><span class="dr-stat__figure">128</span><span class="dr-stat__trend">↗ 12% vs. yesterday</span></span></div></div>
```

- `.dr-stat__ic` — A 52 icon plate on `--bg-well`, the 24-grid glyph at 1.7.
- `.dr-stat__brand` — On the drones-in-the-air figure the plate carries the DRON mark itself, 40 × 14, in the plate's ink (the designer, 2026-10-19).
- `.dr-stat__figure` — The figure on the display step, tabular.
- `.dr-stat__trend` — `--text-accent-wide`: the main dark in light, green in dark (8.02:1 on the dark material), the wide-screen departure.

## Variants

### Phone

```html
<p class="dr-note">Not on the phone.</p>
```

The phone never draws it: every rule here matches only inside `.dr-desk`, the frame of a desktop twin.

### Client

```html
<div class="dr dr-desk" style="display:grid;gap:12px;width:300px;max-width:100%"><div class="dr-stat dr-material"><span class="dr-stat__ic"><span class="dr-brand dr-stat__brand" aria-hidden="true"></span></span><span><span class="dr-stat__label">Drones in the air now</span><span class="dr-stat__figure">128</span><span class="dr-stat__trend">↗ 12% vs. yesterday</span></span></div><div class="dr-stat dr-material"><span class="dr-stat__ic"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12.5V5h7.5L20 13.5 13.5 20z"/><circle cx="8.5" cy="9" r="1.3"/></svg></span><span><span class="dr-stat__label">Average delivery price</span><span class="dr-stat__figure">₴186</span><span class="dr-stat__trend">in your area</span></span></div><div class="dr-stat dr-material"><span class="dr-stat__ic"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg></span><span><span class="dr-stat__label">Average arrival</span><span class="dr-stat__figure">7 min</span><span class="dr-stat__trend">↘ 1 min faster</span></span></div></div>
```

The left rail of every client twin (`order-history`): drones in the air, the average price, the average arrival.

### Operator

```html
<div class="dr dr-desk" style="display:grid;gap:12px;width:300px;max-width:100%"><div class="dr-stat dr-material"><span class="dr-stat__ic"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 7.5A2.5 2.5 0 0 1 7 5h10.5v3"/><rect x="4.5" y="8" width="15" height="11" rx="2.5"/><path d="M15.5 13.5h1.5"/></svg></span><span><span class="dr-stat__label">Available to withdraw</span><span class="dr-stat__figure">₴3,240</span><span class="dr-stat__trend">Earnings</span></span></div><div class="dr-stat dr-material"><span class="dr-stat__ic"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4l2.4 5 5.4.7-4 3.7 1 5.4L12 16.2 7.2 18.8l1-5.4-4-3.7 5.4-.7z"/></svg></span><span><span class="dr-stat__label">Your rating</span><span class="dr-stat__figure">4.8</span><span class="dr-stat__trend">Ratings</span></span></div><div class="dr-stat dr-material"><span class="dr-stat__ic"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg></span><span><span class="dr-stat__label">Earned today</span><span class="dr-stat__figure">₴980</span><span class="dr-stat__trend">2 jobs</span></span></div></div>
```

The left rail of every operator twin (`operator-listings`): available to withdraw, the rating, earned today.

### Tablet

```html
<p class="dr-note">Coming soon.</p>
```

The tablet layout is being redesigned from scratch (the designer, 2026-10-18). Until then this page shows the phone and the desktop only.

## States

No state of its own: it is read, not pressed.

## When to use

One live figure about what is happening now, at the top of the left rail.

Sources: wireframes/desktop/order-history.html, operator-listings.html; design-system/components/stat.css

## Rule

One figure per card, with its unit and its comparison.

## Anti-rule

Do not use a stat card for a figure the client must act on; that is a price line beside its action.
