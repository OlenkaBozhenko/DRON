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
<div style="width:341px;max-width:100%">
  <div class="dr-well dr-well--photo" style="width:100%;height:180px;"><img src="../assets/scenes/thumbs/delivered-at-door.jpg" alt="A ribboned cardboard parcel left on the wooden entrance steps beside the door and its intercom panel, the way the operator photographed it on arrival." loading="lazy" decoding="async"></div>
</div>
```

- `.dr-well--photo` — The box: the 13 media radius, `--bg-well` as the pre-load ground, clipped, padding 0. The screen sets its size inline: the column's width, 180 tall.
- `img` — The picture: `object-fit: cover`, edge to edge. Its `alt` describes what the operator photographed, not the equipment.

## Variants

### Cutout

```html
<div style="background:var(--bg-surface);border-radius:var(--len-16);padding:16px"><span class="dr-well"><img src="../assets/drones/thumbs/drone-02.png" alt="" loading="lazy" decoding="async"></span></div>
```

A transparent render: 96 × 96, a 4px inset, `contain`, and no ground at all; the cutout sits straight on the card. The box is a measuring frame only. Every cutout on the screens takes `alt=""`. From `operator-dispute`. Below 390px wide the box steps to 68 × 68. Inside `.dr-choice` (`role-select`) and `.dr-offer` (the three `listings-map` files) the card sets it to 56 × 44.

### Photograph

```html
<div style="width:341px;max-width:100%">
  <div class="dr-well dr-well--photo" style="width:100%;height:180px;"><img src="../assets/scenes/thumbs/delivered-at-door.jpg" alt="A ribboned cardboard parcel left on the wooden entrance steps beside the door and its intercom panel, the way the operator photographed it on arrival." loading="lazy" decoding="async"></div>
</div>
```

A photograph is the surface: `cover`, padding 0, edge to edge inside the 13 radius. From `order-details`. The screens build it three ways. 3 files use a `div` with a descriptive `alt`: `order-details`, `order-details-aerial`, `order-details-inspection`. `inspection-report` uses a `span` with a descriptive `alt` (a cover 200 tall and three evidence frames 88 tall). `delivery` puts `role="img"` and `aria-label="Delivery photo"` on the `div` and leaves the `img` with `alt=""`.

### Map

```html
<div style="width:341px;max-width:100%">
  <div class="dr-well dr-well--map" style="background-image:url(../assets/map/live-map.jpg)" role="img" aria-label="Live map · operator position"></div>
</div>
```

The card radius 16, not the media 13: the map is a surface in the layout, not a well inside a card. Aspect 1.99, `center/cover`, padding 0, no shadow. From `tracking`. The screens build it two ways. 6 files paint the map as a background on a `role="img"` box: `tracking`, `tracking-aerial`, `tracking-inspection` and their three `-empty` files. 3 files put an `<img alt="">` inside the `role="img"` box: `job-brief`, `job-brief-aerial`, `job-brief-inspection`.

### Acquiring

```html
<div style="width:341px;max-width:100%">
  <div class="dr-well dr-well--map dr-well--acquiring" role="img" aria-label="Live map · acquiring GPS">ACQUIRING GPS…</div>
</div>
```

The map before its first fix: `--bg-well` ground, `--text-muted` mono micro type naming what is loading. Only `tracking-loading` builds it.

## When to use

The well holds the product's real imagery: drone renders, scenes, the operator's delivery photo and the live map, never illustration and never a gradient. A cutout stands in list rows at 96 × 96: `job-offer`, `job-offer-inspection`, `operator-dispute`, `operator-dispute-error` and the four `order-history` cards. It stands at 56 × 44 in the `role-select` and `listings-map` choices. A photograph stands on `delivery`, `inspection-report`, the three `order-details` files and the cover card on `order-details-aerial`. The map stands on the `tracking` and `job-brief` files. Two treatments, one rule: a cutout sits in the layout and is contained, a photograph is the surface and covers it. A photo floated inside a well reads as a sticker, so the two never swap.

Never upscale: every box is a downscale, served from a `thumbs/` copy at about 2× the CSS box while the master stays in the repo. The `tracking` maps are the exception: they read the master `live-map.jpg`, where `job-brief` reads `thumbs/live-map.jpg`. Do not recolour, gradient-map or add a shadow; each render carries its own lighting. Alt text names the outcome, not the equipment.

The inventory's `.inset` modifier and DESIGN.md's `--shot` are not declared in `components/`, and no screen builds them (`--shot` is named only in an `order-history` comment), so they are not shown here.

Sources: DESIGN.md § Media · § Imagery · inventory.md § 1.3 Media well, Map · kit.html Well

## Rule

```html
<article class="dr-card dr-card--row" style="width:341px;max-width:100%">
  <span class="dr-listing__body">
    <span class="dr-listing__name">Package delivery</span>
    <span class="dr-listing__desc">2.3 km · ~18 min</span>
    <span class="dr-listing__meta"><span><span class="sr-only">Pay</span><span class="dr-number">₴180</span></span></span>
  </span>
  <span class="dr-well"><img src="../assets/drones/thumbs/drone-01.png" alt="" loading="lazy" decoding="async"></span>
</article>
```

The `job-offer` row: the body first, the cutout after it, sitting straight on the card in its 96 box with no ground of its own. The screen also carries `dr-listing` on the `article`; no component declares that class, so the build drops it here.

## Anti-rule

```html
<div style="background:var(--bg-surface);border-radius:var(--len-16);padding:16px"><span class="dr-well" style="background:var(--bg-well)"><img src="../assets/scenes/thumbs/delivered-at-door.jpg" alt="Your parcel at the door"></span></div>
```

A photograph contained inside a padded well on a grey ground: the sticker the imagery rule forbids. A photograph takes `--photo` and covers its box; several photographs from one order take the [photo pile](photo-pile.html).
