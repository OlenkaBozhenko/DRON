---
name: Bar chart card
slug: bar-chart
group: Wide screens
order: 8
classes: .dr-barchart · __bar · __bar--peak · __axis
file: chart.css
inventory: (new, wide screens)
kit: —
---

## Anatomy

```html
<div style="width:300px;max-width:100%"><div class="dr-tally dr-material"><h2 class="dr-tally__title">Deliveries today</h2><p class="dr-tally__sub">Kyiv · by hour · busiest 15:00</p>
        <div class="dr-barchart" aria-hidden="true"><span class="dr-barchart__bar" style="--value:22%"></span><span class="dr-barchart__bar" style="--value:30%"></span><span class="dr-barchart__bar" style="--value:26%"></span><span class="dr-barchart__bar" style="--value:38%"></span><span class="dr-barchart__bar" style="--value:54%"></span><span class="dr-barchart__bar" style="--value:72%"></span><span class="dr-barchart__bar" style="--value:64%"></span><span class="dr-barchart__bar" style="--value:80%"></span><span class="dr-barchart__bar dr-barchart__bar--peak" style="--value:92%"></span><span class="dr-barchart__bar" style="--value:76%"></span><span class="dr-barchart__bar" style="--value:58%"></span><span class="dr-barchart__bar" style="--value:44%"></span><span class="dr-barchart__bar" style="--value:36%"></span><span class="dr-barchart__bar" style="--value:30%"></span></div>
        <div class="dr-barchart__axis" aria-hidden="true"><span>08</span><span>12</span><span>16</span><span>20</span></div></div></div>
```

- `.dr-barchart__bar` — One bar per hour on `--bg-muted`; its height is the data, passed as `--value`.
- `.dr-barchart__bar--peak` — The busiest hour, the accent as a fill.
- `.dr-barchart__axis` — The hours, micro-sm, tabular.

## Variants

### Phone

```html
<p class="dr-note">Not on the phone.</p>
```

The phone keeps its own home and tab bar; nothing here reaches it.

### Desktop

```html
<div style="width:300px;max-width:100%"><div class="dr-tally dr-material"><h2 class="dr-tally__title">Deliveries today</h2><p class="dr-tally__sub">Kyiv · by hour · busiest 15:00</p>
        <div class="dr-barchart" aria-hidden="true"><span class="dr-barchart__bar" style="--value:22%"></span><span class="dr-barchart__bar" style="--value:30%"></span><span class="dr-barchart__bar" style="--value:26%"></span><span class="dr-barchart__bar" style="--value:38%"></span><span class="dr-barchart__bar" style="--value:54%"></span><span class="dr-barchart__bar" style="--value:72%"></span><span class="dr-barchart__bar" style="--value:64%"></span><span class="dr-barchart__bar" style="--value:80%"></span><span class="dr-barchart__bar dr-barchart__bar--peak" style="--value:92%"></span><span class="dr-barchart__bar" style="--value:76%"></span><span class="dr-barchart__bar" style="--value:58%"></span><span class="dr-barchart__bar" style="--value:44%"></span><span class="dr-barchart__bar" style="--value:36%"></span><span class="dr-barchart__bar" style="--value:30%"></span></div>
        <div class="dr-barchart__axis" aria-hidden="true"><span>08</span><span>12</span><span>16</span><span>20</span></div></div></div>
```

In the left rail of the wide home.

### Tablet

```html
<p class="dr-note">Coming soon.</p>
```

The tablet layout is being redesigned from scratch (the designer, 2026-10-18). Until then this page shows the phone and the desktop only.

## States

No state of its own: the bars are `aria-hidden` and the card's sub-line says what they show (`WCAG 1.1.1`).

## When to use

A small trend over the day where the figure itself is not the point.

Sources: responsive/width-audit.md § The designer's direction

## Rule

Name the busiest hour in words beside the chart.

## Anti-rule

Do not colour more than one bar with the accent.
