---
name: Map ground
slug: map-ground
group: Wide screens
order: 23
classes: .dr-mapground · __drone
file: mapground.css
inventory: (new, wide screens)
kit: 4033
---

## Anatomy

```html
<div class="dr dr-screen dr-desk dr-desk--outcome" style="width:640px;height:360px;max-width:none">
<div class="dr-mapground" role="img" aria-label="Live map of Kyiv, 128 drones in the air"><span class="dr-mapground__drone" style="left:31%;top:34%"></span><span class="dr-mapground__drone" style="left:44%;top:58%"></span><span class="dr-mapground__drone" style="left:63%;top:30%"></span><span class="dr-mapground__drone" style="left:70%;top:66%"></span><span class="dr-mapground__drone" style="left:60%;top:82%"></span><span class="dr-mapground__drone" style="left:38%;top:76%"></span><span class="dr-mapground__drone" style="left:78%;top:44%"></span><span class="dr-mapground__drone" style="left:24%;top:60%"></span><span class="dr-mapground__drone" style="left:58%;top:48%"></span></div>
<div class="dr-veil" aria-hidden="true"></div>
</div>
```

- `.dr-mapground` — The ground of the whole desktop window, under the veil: `--img-map-ground`, a quiet light map or a quiet dark one by theme; the file swaps, it is never filtered.
- `.dr-mapground__drone` — A drone in the air: a 10 green dot with a 22% halo and, on the desktop, a 24 glow at 45%.

## Variants

### Phone

```html
<p class="dr-note">Not on the phone.</p>
```

The phone never draws it: every rule here matches only inside `.dr-desk`, the frame of a desktop twin.

### Jobs on the map

```html
<div class="dr dr-screen dr-desk dr-desk--jobs" style="width:640px;height:360px;max-width:none">
<div class="dr-mapground" aria-label="Live map of Kyiv with your open jobs"><a class="dr-mapground__drone dr-dronelink" href="../../wireframes/desktop/job-offer.html" aria-label="Package delivery job, 2.3 km" style="left:46%;top:40%"></a><a class="dr-mapground__drone dr-dronelink" href="../../wireframes/desktop/job-offer-inspection.html" aria-label="Inspection job, 5.1 km" style="left:30%;top:72%"></a><a class="dr-mapground__drone dr-dronelink" href="../../wireframes/desktop/job-brief-aerial.html" aria-label="Photo and video job in progress" style="left:66%;top:58%"></a></div>
<div class="dr-veil" aria-hidden="true"></div>
</div>
```

On the operator's home an open job is a drone that is a link (`.dr-dronelink`, 44 target). See [Operator home](operator-home.html).

### Tablet

```html
<p class="dr-note">Coming soon.</p>
```

The tablet layout is being redesigned from scratch (the designer, 2026-10-18). Until then this page shows the phone and the desktop only.

## States

No state of its own: the ground is read, not pressed.

## When to use

Behind everything on the desktop: the header, the rails, the windows, the assistant.

Sources: wireframes/desktop/*.html; design-system/components/mapground.css, desk.css

## Rule

Keep it quiet: the map is ground, not content to read.

## Anti-rule

Do not put text straight on the map without a material behind it.
