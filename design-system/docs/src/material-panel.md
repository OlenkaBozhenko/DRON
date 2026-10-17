---
name: Material panel
slug: material-panel
group: Wide screens
order: 2
classes: .dr-material
file: material.css
inventory: (new, wide screens)
kit: —
---

## Anatomy

```html
<div class="dr" style="position:relative;width:560px;max-width:100%;height:260px;border-radius:22px;overflow:hidden"><div class="dr-mapground" role="img" aria-label="Live map"><span class="dr-mapground__drone" style="left:30%;top:40%"></span><span class="dr-mapground__drone" style="left:62%;top:28%"></span><span class="dr-mapground__drone" style="left:74%;top:66%"></span></div><div class="dr-material" style="position:absolute;left:24px;top:24px;width:300px;padding:18px"><b>Free now near you</b><p style="margin:6px 0 0">46 drones · package delivery</p></div></div>
```

- `.dr-material` — Translucent `--bg-material` over the map, blurred 22, a hairline `--border-material`, radius 22 and `--shadow-float`. HIG macOS *Materials* / Liquid Glass. Solid `--bg-material-solid` under *Reduce transparency*; a `--text-muted` edge under *Increase contrast*.

## Variants

### Phone

```html
<p class="dr-note">Not on the phone.</p>
```

The phone has no material panels: its surfaces stay flat and opaque.

### Desktop

```html
<div class="dr" style="position:relative;width:560px;max-width:100%;height:200px;border-radius:22px;overflow:hidden"><div class="dr-mapground" role="img" aria-label="Live map"><span class="dr-mapground__drone" style="left:30%;top:40%"></span><span class="dr-mapground__drone" style="left:62%;top:28%"></span><span class="dr-mapground__drone" style="left:74%;top:66%"></span></div><div class="dr-material" style="position:absolute;left:24px;top:24px;width:260px;padding:16px"><b>Your month</b><p style="margin:6px 0 0">7 orders · ₴1,940</p></div></div>
```

Over the map ground, in both themes: the dark build tints it with `--charcoal-800`.

### Tablet

```html
<p class="dr-note">Coming soon.</p>
```

The tablet layout is being redesigned from scratch (the designer, 2026-10-18). Until then this page shows the phone and the desktop only.

## States

No state of its own: a panel is a surface. The controls inside it take their own states.

## When to use

For anything that floats over the map on a wide screen: statistics, the live order, the order window.

Sources: responsive/width-audit.md § Light build panels follow HIG for macOS

## Rule

Float it over the map, never over the page: a material reads only over something to blur.

## Anti-rule

Do not put a material on the phone, and do not stack one material inside another.
