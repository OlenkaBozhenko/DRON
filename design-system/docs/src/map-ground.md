---
name: Map ground
slug: map-ground
group: Wide screens
order: 5
classes: .dr-mapground · __drone
file: mapground.css
inventory: (new, wide screens)
kit: —
---

## Anatomy

```html
<div class="dr" style="position:relative;width:560px;max-width:100%;height:280px;border-radius:22px;overflow:hidden"><div class="dr-mapground" role="img" aria-label="Live map"><span class="dr-mapground__drone" style="left:30%;top:40%"></span><span class="dr-mapground__drone" style="left:62%;top:28%"></span><span class="dr-mapground__drone" style="left:74%;top:66%"></span></div></div>
```

- `.dr-mapground` — The whole ground of a wide screen: `--img-map-ground`, a quiet light map or a quiet dark one by theme.
- `.dr-mapground__drone` — A drone in the air: a 10 green dot with a 22% halo.

## Variants

### Phone

```html
<p class="dr-note">Not on the phone.</p>
```

The phone keeps its own map well and results screen.

### Desktop

```html
<div class="dr" style="position:relative;width:560px;max-width:100%;height:200px;border-radius:22px;overflow:hidden"><div class="dr-mapground" role="img" aria-label="Live map"><span class="dr-mapground__drone" style="left:30%;top:40%"></span><span class="dr-mapground__drone" style="left:62%;top:28%"></span><span class="dr-mapground__drone" style="left:74%;top:66%"></span></div></div>
```

Switch the theme in the top bar: the file swaps, it is never filtered.

### Tablet

```html
<p class="dr-note">Coming soon.</p>
```

The tablet layout is being redesigned from scratch (the designer, 2026-10-18). Until then this page shows the phone and the desktop only.

## States

No state of its own.

## When to use

Behind the panels and the assistant on a wide screen.

Sources: responsive/width-audit.md § The designer's direction

## Rule

Keep it quiet: the map is ground, not content to read.

## Anti-rule

Do not put text straight on the map without a material or a shadow behind it.
