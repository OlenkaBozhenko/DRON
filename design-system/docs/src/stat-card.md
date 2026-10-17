---
name: Stat card
slug: stat-card
group: Wide screens
order: 3
classes: .dr-stat · __ic · __label · __figure · __trend
file: stat.css
inventory: (new, wide screens)
kit: —
---

## Anatomy

```html
<div style="width:300px;max-width:100%"><div class="dr-stat dr-material"><span class="dr-stat__ic"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="6" r="2.5"/><path d="M7.5 6h9M12 6v4"/><rect x="8.5" y="10" width="7" height="5" rx="1.5"/></svg></span><span><span class="dr-stat__label">Drones in the air now</span><span class="dr-stat__figure">128</span><span class="dr-stat__trend">↗ 12% vs. yesterday</span></span></div></div>
```

- `.dr-stat__ic` — A 52 icon plate on `--bg-well`, the 24-grid glyph at 1.7.
- `.dr-stat__figure` — The figure on the display step, tabular.
- `.dr-stat__trend` — `--text-accent-wide`: the main dark in light, green in dark (9.46:1), the wide-screen departure.

## Variants

### Phone

```html
<p class="dr-note">Not on the phone.</p>
```

The phone shows no live statistics.

### Tablet and desktop

```html
<div style="display:grid;gap:12px;width:300px;max-width:100%"><div class="dr-stat dr-material"><span class="dr-stat__ic"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="6" r="2.5"/><path d="M7.5 6h9M12 6v4"/><rect x="8.5" y="10" width="7" height="5" rx="1.5"/></svg></span><span><span class="dr-stat__label">Average delivery price</span><span class="dr-stat__figure">₴186</span><span class="dr-stat__trend">in your area</span></span></div><div class="dr-stat dr-material"><span class="dr-stat__ic"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="6" r="2.5"/><path d="M7.5 6h9M12 6v4"/><rect x="8.5" y="10" width="7" height="5" rx="1.5"/></svg></span><span><span class="dr-stat__label">Average arrival</span><span class="dr-stat__figure">7 min</span><span class="dr-stat__trend">↘ 1 min faster</span></span></div></div>
```

In the left column over the map.

## States

No state of its own: it is read, not pressed.

## When to use

One live figure about what is happening now.

Sources: responsive/width-audit.md § The designer's direction, 2026-10-18

## Rule

One figure per card, with its unit and its comparison.

## Anti-rule

Do not use a stat card for a figure the client must act on; that is a price line beside its action.
