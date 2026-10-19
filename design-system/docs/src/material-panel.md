---
name: Material panel
slug: material-panel
group: Wide screens
order: 20
classes: .dr-material
file: material.css
inventory: (new, wide screens)
kit: 3984
---

## Anatomy

```html
<div class="dr dr-screen dr-desk dr-desk--outcome" style="width:400px;height:640px;max-width:none">
<div class="dr-mapground" role="img" aria-label="Live map of Kyiv, 128 drones in the air"><span class="dr-mapground__drone" style="left:31%;top:34%"></span><span class="dr-mapground__drone" style="left:44%;top:58%"></span><span class="dr-mapground__drone" style="left:63%;top:30%"></span><span class="dr-mapground__drone" style="left:70%;top:66%"></span><span class="dr-mapground__drone" style="left:60%;top:82%"></span><span class="dr-mapground__drone" style="left:38%;top:76%"></span><span class="dr-mapground__drone" style="left:78%;top:44%"></span><span class="dr-mapground__drone" style="left:24%;top:60%"></span><span class="dr-mapground__drone" style="left:58%;top:48%"></span></div>
<div class="dr-veil" aria-hidden="true"></div>
<aside class="dr-deskrail dr-deskrail--end" aria-label="Your orders">
      <a class="dr-tally dr-material dr-tally--link" href="../../wireframes/desktop/tracking.html"><span class="dr-live">Live</span><h2 class="dr-tally__title">Package delivery</h2><p class="dr-tally__sub">Podil → Osokorky · arrives 10:09</p>
        <span class="dr-rail dr-rail--at2">
                  <span class="dr-rail__step"><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></span>
                  <span class="dr-rail__step" aria-current="step"><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">En route</span></span>
                  <span class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">On&#8209;site</span></span>
                  <span class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">Done</span></span>
                </span>
        <div class="dr-tally__who"><img src="../../assets/people/thumbs/operator.png" alt=""><span>Andriy M.<small>Verified by DRON · 4.9 ★</small></span></div></a>
      <div class="dr-tally dr-material"><h2 class="dr-tally__title">Free now near you</h2><div class="dr-tally__row"><span class="dr-tally__key">Package delivery</span><span>46 drones</span></div><div class="dr-tally__row"><span class="dr-tally__key">Photo &amp; video</span><span>18 drones</span></div><div class="dr-tally__row"><span class="dr-tally__key">Inspection</span><span>9 drones</span></div></div>
      <div class="dr-tally dr-material"><h2 class="dr-tally__title">Your month</h2><div class="dr-tally__row"><span class="dr-tally__key">Orders</span><span>7</span></div><div class="dr-tally__row"><span class="dr-tally__key">Spent</span><span>₴1,940</span></div></div>
    </aside>
</div>
```

- `.dr-material` — Translucent `--bg-material` over the map (white at 72% in light, `--charcoal-800` at 72% in dark), blurred 22, a hairline `--border-material`, radius 22 and `--shadow-float` — HIG macOS *Materials*. Solid `--bg-material-solid` under *Reduce transparency*; a `--text-muted` edge under *Increase contrast*. Ink on it: 16.98:1 light, 13.55:1 dark; muted 7.03:1 / 9.77:1.

## Variants

### Phone

```html
<p class="dr-note">Not on the phone.</p>
```

The phone never draws it: every rule here matches only inside `.dr-desk`, the frame of a desktop twin.

### Everything that floats

```html
<div class="dr dr-screen dr-desk dr-desk--outcome" style="width:400px;height:640px;max-width:none">
<div class="dr-mapground" role="img" aria-label="Live map of Kyiv, 128 drones in the air"><span class="dr-mapground__drone" style="left:31%;top:34%"></span><span class="dr-mapground__drone" style="left:44%;top:58%"></span><span class="dr-mapground__drone" style="left:63%;top:30%"></span><span class="dr-mapground__drone" style="left:70%;top:66%"></span><span class="dr-mapground__drone" style="left:60%;top:82%"></span><span class="dr-mapground__drone" style="left:38%;top:76%"></span><span class="dr-mapground__drone" style="left:78%;top:44%"></span><span class="dr-mapground__drone" style="left:24%;top:60%"></span><span class="dr-mapground__drone" style="left:58%;top:48%"></span></div>
<div class="dr-veil" aria-hidden="true"></div>
<aside class="dr-deskrail dr-deskrail--start" aria-label="What is happening">
      <div class="dr-stat dr-material"><span class="dr-stat__ic"><span class="dr-brand dr-stat__brand" aria-hidden="true"></span></span><span><span class="dr-stat__label">Drones in the air now</span><span class="dr-stat__figure">128</span><span class="dr-stat__trend">↗ 12% vs. yesterday</span></span></div><div class="dr-stat dr-material"><span class="dr-stat__ic"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12.5V5h7.5L20 13.5 13.5 20z"/><circle cx="8.5" cy="9" r="1.3"/></svg></span><span><span class="dr-stat__label">Average delivery price</span><span class="dr-stat__figure">₴186</span><span class="dr-stat__trend">in your area</span></span></div><div class="dr-stat dr-material"><span class="dr-stat__ic"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg></span><span><span class="dr-stat__label">Average arrival</span><span class="dr-stat__figure">7 min</span><span class="dr-stat__trend">↘ 1 min faster</span></span></div>
      <div class="dr-tally dr-material"><h2 class="dr-tally__title">Deliveries today</h2><p class="dr-tally__sub">Kyiv · by hour · busiest 15:00</p>
        <div class="dr-barchart" aria-hidden="true"><span class="dr-barchart__bar" style="--value:22%"></span><span class="dr-barchart__bar" style="--value:30%"></span><span class="dr-barchart__bar" style="--value:26%"></span><span class="dr-barchart__bar" style="--value:38%"></span><span class="dr-barchart__bar" style="--value:54%"></span><span class="dr-barchart__bar" style="--value:72%"></span><span class="dr-barchart__bar" style="--value:64%"></span><span class="dr-barchart__bar" style="--value:80%"></span><span class="dr-barchart__bar dr-barchart__bar--peak" style="--value:92%"></span><span class="dr-barchart__bar" style="--value:76%"></span><span class="dr-barchart__bar" style="--value:58%"></span><span class="dr-barchart__bar" style="--value:44%"></span><span class="dr-barchart__bar" style="--value:36%"></span><span class="dr-barchart__bar" style="--value:30%"></span></div>
        <div class="dr-barchart__axis dr-barchart__axis--each" aria-hidden="true"><span></span><span>08</span><span></span><span></span><span></span><span>12</span><span></span><span></span><span></span><span>16</span><span></span><span></span><span></span><span>20</span></div></div>
    </aside>
</div>
```

From `order-history`, the right rail: every card of a rail is the material. So are the header's navigation, icon buttons and profile chip, every window and panel, the side panel, the live line, Talk to AI and the hanging cards.

### Tablet

```html
<p class="dr-note">Coming soon.</p>
```

The tablet layout is being redesigned from scratch (the designer, 2026-10-18). Until then this page shows the phone and the desktop only.

## States

No state of its own: a material is a surface. The controls on it take their own states.

## When to use

For anything that floats over the map on the desktop.

Sources: wireframes/desktop/order-history.html; design-system/components/material.css

## Rule

Float it over the map, never over the page: a material reads only over something to blur.

## Anti-rule

Do not put a material card inside a material card. The one material inside a material the twins draw is a round control on its window or card (the window's back, the live job's chat).
