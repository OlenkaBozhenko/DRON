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
<div class="dr dr-screen" style="width:1024px;height:auto;max-width:none"><main class="dr-main"><div class="dr-wgrid"><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">1</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">2</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">3</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">4</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">5</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">6</span></div></div></div></main></div>
```

- `.dr-wgrid` — One column on the phone; `--col-count-tablet` (2) columns from 47.875rem and `--col-count-desktop` (3) from 79.875rem, `--grid-gap` apart.

## Variants

### Phone (375)

```html
<div class="dr dr-screen" style="width:375px;height:auto;max-width:none"><main class="dr-main"><div class="dr-wgrid"><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">1</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">2</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">3</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">4</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">5</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">6</span></div></div></div></main></div>
```

On the phone: unchanged. The frame is 375 wide, the container query never matches, and every rule here is skipped. One column, the stack the phone already draws.

### Tablet (768)

```html
<div class="dr dr-screen" style="width:768px;height:auto;max-width:none"><main class="dr-main"><div class="dr-wgrid"><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">1</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">2</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">3</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">4</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">5</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Item</span><span class="dr-rows__val">6</span></div></div></div></main></div>
```

Two columns.

### Split: list and detail

```html
<div class="dr dr-screen" style="width:1024px;height:auto;max-width:none"><main class="dr-main"><div class="dr-split"><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">List</span><span class="dr-rows__val">3 orders</span></div></div><div class="dr-rows"><div class="dr-rows__row"><span class="dr-rows__key">Detail</span><span class="dr-rows__val">The chosen order</span></div></div></div></main></div>
```

`.dr-split`: 2fr and 3fr from the tablet; a third child (the map) gets a third pane on a desktop.

## States

No state of its own: a layout.

## When to use

`.dr-wgrid` where the audit says *Wider layout*; `.dr-split` where it says *New behaviour* (list beside detail).

Sources: responsive/width-audit.md § Client · § Operator

## Rule

A screen takes the class; the component owns the columns.

## Anti-rule

Do not write grid columns on a screen, and never a media query.
