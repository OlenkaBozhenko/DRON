---
name: Wide grid and split
slug: wide-grid
group: Wide screens
order: 6
classes: .dr-wgrid · .dr-split
file: wgrid.css
inventory: (new, wide screens)
kit: —
---

## Anatomy

```html
<div class="dr dr-screen" style="width:1280px;height:auto;max-width:none"><main class="dr-main"><div class="dr-wgrid"><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">1</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">2</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">3</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">4</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">5</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">6</span></div></div></div></main></div>
```

- `.dr-wgrid` — One column on the phone; `--col-count-desktop` (3) columns from 79.875rem, `--grid-gap` apart.

## Variants

### Phone (375)

```html
<div class="dr dr-screen" style="width:375px;height:auto;max-width:none"><main class="dr-main"><div class="dr-wgrid"><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">1</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">2</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">3</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">4</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">5</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">6</span></div></div></div></main></div>
```

On the phone: unchanged. The frame is 375 wide, the container query never matches, and every rule here is skipped. One column, the stack the phone already draws.

### Split: list and detail

```html
<div class="dr dr-screen" style="width:1280px;height:auto;max-width:none"><main class="dr-main"><div class="dr-split"><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">List</span><span class="dr-rows__val">3 orders</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Detail</span><span class="dr-rows__val">The chosen order</span></div></div></div></main></div>
```

`.dr-split`: list and detail side by side on a desktop; a third child (the map) gets a third pane.

### Tablet

```html
<p class="dr-note">Coming soon.</p>
```

The tablet layout is being redesigned from scratch (the designer, 2026-10-18). Until then this page shows the phone and the desktop only.

## States

No state of its own: a layout.

## When to use

`.dr-wgrid` where the audit says *Wider layout*; `.dr-split` where it says *New behaviour* (list beside detail).

Sources: responsive/width-audit.md § Client · § Operator

## Rule

A screen takes the class; the component owns the columns.

## Anti-rule

Do not write grid columns on a screen, and never a media query.
