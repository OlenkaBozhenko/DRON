---
name: Availability head and badge
slug: availability
group: Surfaces
order: 210
classes: .dr-avail · __dot · __state · __note · .dr-avail-badge · __dot · [data-state]
file: badge.css
inventory: Availability head; Availability badge
kit: 1984
---

## Anatomy

```html
<div style="display:flex;flex-direction:column;gap:16px;align-items:flex-start;width:341px;max-width:100%">
<p class="dr-avail"><span class="dr-avail__dot" aria-hidden="true"></span><b class="dr-avail__state">You are Available</b><span class="dr-avail__note">&#183; receiving jobs near Podil</span></p>
<span class="dr-chip dr-chip--sm dr-avail-badge" data-state="available"><span class="dr-avail-badge__dot" aria-hidden="true"></span><span>Available</span></span>
</div>
```

- `.dr-avail__dot` — The head's bullet, 10 × 10, charcoal in every state. It is a bullet, not a signal.
- `.dr-avail__state` — The state in words, 15/600 charcoal, 15.99:1.
- `.dr-avail__note` — One supporting clause, 13 in `--text-muted`, 6.62:1.
- `.dr-avail-badge` — The same fact as a small [chip](chip.html#variant-small) in the nav bar: 11/600, padding 3 / 8, `--r-pill`.
- `.dr-avail-badge__dot` — The badge's dot, 8px; its fill or ring changes with `data-state`.

## Variants

### Head

```html
<p class="dr-avail" style="width:341px;max-width:100%"><span class="dr-avail__dot" aria-hidden="true"></span><b class="dr-avail__state">You are Offline</b><span class="dr-avail__note">&#183; no jobs while offline</span></p>
```

A sentence in the page, 326.2 × 19, gap 8, standing above the picker row that sets the state. On `operator-listings-empty` only.

### Badge · Available

```html
<span class="dr-chip dr-chip--sm dr-avail-badge" data-state="available"><span class="dr-avail-badge__dot" aria-hidden="true"></span><span>Available</span></span>
```

The claim pair, `--bg-accent-tint` under charcoal at 14.75:1, with a solid green dot. 79.98 × 21.39.

### Badge · Busy

```html
<span class="dr-chip dr-chip--sm dr-avail-badge" data-state="busy"><span class="dr-avail-badge__dot" aria-hidden="true"></span><span>Busy</span></span>
```

The chip's own `--bg-well` under `--text-muted`, 5.51:1, with a filled dot in the ink colour. 57.17 × 21.39.

### Badge · Offline

```html
<span class="dr-chip dr-chip--sm dr-avail-badge" data-state="offline"><span class="dr-avail-badge__dot" aria-hidden="true"></span><span>Offline</span></span>
```

The same grey pair as Busy, and the dot becomes a 2px ring round a 4px hole. Busy and Offline share a fill, so shape separates them. 67.61 × 21.39.

## When to use

Availability is the operator's own state, said twice on one screen at two sizes: a sentence in the page and a chip in the bar. The badge stands in the nav bar of `operator-listings` and `operator-listings-empty`, so the state stays on screen after the control that sets it has scrolled away; the head stands only on `operator-listings-empty`. Neither is a control and neither is a live region. The control is the availability picker row, and the badge restates its value visually.

`WCAG 1.4.1` is answered by the word, which is printed in every state. That is why the head's dot is charcoal and not green: the sentence beside it would otherwise lean on colour. The badge's dot may take green, at 1.56:1 on the wash, because the word travels inside the same pill, and the 8 × 8 green dot is a status mark of 64 px², outside the one-green-control budget.

The words are the state names, *Available*, *Busy*, *Offline*, read at runtime from the option the operator tapped, so they live in the markup once. The head's sentence addresses the operator: *You are Available · receiving jobs near Podil*.

Sources: DESIGN.md § The availability head · § The availability badge · inventory.md § 1 (Availability head, Availability badge) · microcopy.md § operator-listings

## Rule

```html
<header class="dr-topbar" style="width:341px;max-width:100%"><span class="dr-op__name">Ivan K.</span><span class="dr-topbar__spacer"></span><span class="dr-chip dr-chip--sm dr-avail-badge" data-state="available"><span class="dr-avail-badge__dot" aria-hidden="true"></span><span>Available</span></span></header>
```

The badge at the right end of the bar, 16 from its edge, restating the state the operator set, with the word always printed.

## Anti-rule

```html
<p class="dr-avail" style="width:341px;max-width:100%"><span class="dr-avail-badge" data-state="available"><span class="dr-avail-badge__dot" aria-hidden="true"></span></span></p>
```

A dot with no word. Colour alone would carry the state (`WCAG 1.4.1`), and the green dot sits at 1.56:1. Print the state beside every dot. To let the operator change the state, use a [picker row](picker-row.html); a credential that does not change is a [credential chip](chip.html).
