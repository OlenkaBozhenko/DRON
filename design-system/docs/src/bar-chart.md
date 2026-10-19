---
name: Bar chart card
slug: bar-chart
group: Wide screens
order: 24
classes: .dr-barchart · __bar · __bar--peak · __axis · __axis--each
file: chart.css
inventory: (new, wide screens)
kit: 4045
---

## Anatomy

```html
<div class="dr dr-desk" style="width:300px;max-width:100%"><div class="dr-tally dr-material"><h2 class="dr-tally__title">Deliveries today</h2><p class="dr-tally__sub">Kyiv · by hour · busiest 15:00</p>
        <div class="dr-barchart" aria-hidden="true"><span class="dr-barchart__bar" style="--value:22%"></span><span class="dr-barchart__bar" style="--value:30%"></span><span class="dr-barchart__bar" style="--value:26%"></span><span class="dr-barchart__bar" style="--value:38%"></span><span class="dr-barchart__bar" style="--value:54%"></span><span class="dr-barchart__bar" style="--value:72%"></span><span class="dr-barchart__bar" style="--value:64%"></span><span class="dr-barchart__bar" style="--value:80%"></span><span class="dr-barchart__bar dr-barchart__bar--peak" style="--value:92%"></span><span class="dr-barchart__bar" style="--value:76%"></span><span class="dr-barchart__bar" style="--value:58%"></span><span class="dr-barchart__bar" style="--value:44%"></span><span class="dr-barchart__bar" style="--value:36%"></span><span class="dr-barchart__bar" style="--value:30%"></span></div>
        <div class="dr-barchart__axis dr-barchart__axis--each" aria-hidden="true"><span></span><span>08</span><span></span><span></span><span></span><span>12</span><span></span><span></span><span></span><span>16</span><span></span><span></span><span></span><span>20</span></div></div></div>
```

- `.dr-barchart__bar` — One bar per hour or month on `--bg-muted`; its height is the data, passed as `--value`.
- `.dr-barchart__bar--peak` — The busiest one, the accent as a fill.
- `.dr-barchart__axis--each` — One label under each bar, on the bars' own columns, centred; a label wider than its bar overhangs it rather than drift.

## Variants

### Phone

```html
<p class="dr-note">Not on the phone.</p>
```

The phone never draws it: every rule here matches only inside `.dr-desk`, the frame of a desktop twin.

### Operator

```html
<div class="dr dr-desk" style="width:300px;max-width:100%"><div class="dr-tally dr-material"><h2 class="dr-tally__title">Earnings, all time</h2><p class="dr-tally__sub">By month · up 24% since May</p><div class="dr-barchart" aria-hidden="true"><span class="dr-barchart__bar" style="--value:34%"></span><span class="dr-barchart__bar" style="--value:40%"></span><span class="dr-barchart__bar" style="--value:38%"></span><span class="dr-barchart__bar" style="--value:52%"></span><span class="dr-barchart__bar" style="--value:61%"></span><span class="dr-barchart__bar" style="--value:58%"></span><span class="dr-barchart__bar" style="--value:70%"></span><span class="dr-barchart__bar dr-barchart__bar--peak" style="--value:84%"></span></div><div class="dr-barchart__axis dr-barchart__axis--each" aria-hidden="true"><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span></div></div></div>
```

`operator-listings`: earnings by month, one label per bar.

### Tablet

```html
<p class="dr-note">Coming soon.</p>
```

The tablet layout is being redesigned from scratch (the designer, 2026-10-18). Until then this page shows the phone and the desktop only.

## States

No state of its own: the bars are `aria-hidden` and the card's sub-line says what they show (`WCAG 1.1.1`).

## When to use

A small trend at the foot of the left rail where the figure itself is not the point.

Sources: wireframes/desktop/listings.html, operator-listings.html; design-system/components/chart.css

## Rule

Name the busiest hour or the trend in words beside the chart.

## Anti-rule

Do not colour more than one bar with the accent.
