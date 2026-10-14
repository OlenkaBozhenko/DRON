---
name: Media well
slug: well
group: Media
order: 10
classes: .dr-well · --photo · --map · --acquiring
file: media.css
inventory: Media well; Map
kit: 2545
---

## Anatomy

```html
<span class="dr-well dr-well--photo" style="width:200px;height:106px"><img src="../assets/scenes/thumbs/delivered-at-door.jpg" alt="Your parcel at the door"></span>
```

- `.dr-well--photo` — The box: the 13 media radius, `--media` as the pre-load ground, clipped. A photograph takes padding 0.
- `img` — The picture: `object-fit: cover`, edge to edge. Its `alt` names the outcome, not the equipment.

## Variants

### Cutout

```html
<div style="background:var(--bg-surface);border-radius:var(--len-16);padding:16px"><span class="dr-well"><img src="../assets/drones/thumbs/drone-08.png" alt=""></span></div>
```

A transparent render: 96 × 96, a 4px inset, `contain`, and no ground at all; the cutout sits straight on the card. The box is a measuring frame only. Decorative renders take `alt=""`.

### Photograph

```html
<span class="dr-well dr-well--photo" style="width:200px;height:106px"><img src="../assets/scenes/thumbs/delivered-at-door.jpg" alt="Your parcel at the door"></span>
```

A photograph is the surface: `cover`, padding 0, edge to edge inside the 13 radius.

### Map

```html
<span class="dr-well dr-well--map" style="width:200px"><img src="../assets/map/live-map.jpg" alt="Live map, operator position"></span>
```

The card radius 16, not the media 13: the map is a surface in the layout, not a well inside a card. Native 1.99 aspect, `center/cover`, no shadow.

### Acquiring

```html
<span class="dr-well dr-well--map dr-well--acquiring" style="width:200px;display:flex;align-items:center;justify-content:center">ACQUIRING GPS…</span>
```

The map before its first fix: `--media` ground, slate mono micro type naming what is loading.

## When to use

The well holds the product's real imagery: drone renders, scenes, the operator's delivery photo and the live map, never illustration and never a gradient. A cutout stands in list rows (the job, tracking and `order-history` cards at 96 × 96, 68 × 68 on the narrow tier); a photograph stands on `delivery` and the cover cards; the map stands on `tracking`. Two treatments, one rule: a cutout sits in the layout and is contained, a photograph is the surface and covers it. A photo floated inside a well reads as a sticker, so the two never swap.

Never upscale: every box is a downscale, served from a `thumbs/` copy at about 2× the CSS box while the master stays in the repo. Do not recolour, gradient-map or add a shadow; each render carries its own lighting. Alt text names the outcome, not the equipment: *Your parcel at the door*, not *quadcopter with lime cargo box*.

The inventory's `.inset` modifier and DESIGN.md's `--shot` are not declared in `components/`, so they are not shown here; the 56 × 44 rung inside `.dr-choice` is set by the card, not by a well class.

Sources: DESIGN.md § Media · § Imagery · inventory.md § 1.3 Media well, Map · kit.html Well

## Rule

```html
<article class="dr-card dr-card--row" style="width:341px;max-width:100%">
  <span class="dr-listing__body">
    <span class="dr-listing__name">Package delivery</span>
    <span class="dr-listing__desc">2.3 km &#183; ~18 min</span>
    <span class="dr-listing__meta"><span><span class="dr-sr">Pay</span><span class="dr-number">&#8372;180</span></span></span>
  </span>
  <span class="dr-well"><img src="../assets/drones/thumbs/drone-01.png" alt="" loading="lazy" decoding="async"></span>
</article>
```

The `job-offer` row: the body first, the cutout after it, sitting straight on the card in its 96 box with no ground of its own.

## Anti-rule

```html
<div style="background:var(--bg-surface);border-radius:var(--len-16);padding:16px"><span class="dr-well" style="background:var(--bg-well)"><img src="../assets/scenes/thumbs/delivered-at-door.jpg" alt="Your parcel at the door"></span></div>
```

A photograph contained inside a padded well on a grey ground: the sticker the imagery rule forbids. A photograph takes `--photo` and covers its box; several photographs from one order take the [photo pile](photo-pile.html).
