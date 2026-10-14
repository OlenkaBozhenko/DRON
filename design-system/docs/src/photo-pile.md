---
name: Photo pile
slug: photo-pile
group: Media
order: 20
classes: .dr-stack · .dr-stack__shot
file: media.css
inventory: (.dr-stack__shot)
kit: 2568
---

## Anatomy

```html
<div style="width:220px;background:var(--bg-page);border-radius:var(--len-16);padding:4px">
  <div class="dr-stack">
    <span class="dr-stack__shot"><img src="../assets/scenes/thumbs/aerial-rafting-crew.jpg" alt="Photo 1 of 3 — the crew head-on in white water, helmets up and both blades in the air." loading="lazy" decoding="async"></span>
    <span class="dr-stack__shot"><img src="../assets/scenes/thumbs/aerial-rafting-drop.jpg" alt="Photo 2 of 3 — the raft airborne off the waterfall, the whole crew's arms raised." loading="lazy" decoding="async"></span>
    <span class="dr-stack__shot"><img src="../assets/scenes/thumbs/aerial-rafting-overhead.jpg" alt="Photo 3 of 3 — the raft from directly overhead, running the rapid between wet rock and green water." loading="lazy" decoding="async"></span>
  </div>
</div>
```

- `.dr-stack` — The vertical stack the pile is built on; with shots inside it takes 8 / 4 padding and keeps its 8px gap.
- `.dr-stack__shot:first-child` — The first frame: right-aligned, tilted 3deg, at the back.
- `.dr-stack__shot:nth-child(2)` — The second: left-aligned, −3.5deg, overlapping the first by −14% of the column's width.
- `.dr-stack__shot:last-child` — The third: right-aligned with a 6% inset, 2deg, on top. The later frame sits on top, so the pile reads front-to-back downward.
- `img` — The photograph: `cover` inside a 62%-wide 3 / 2 frame with a 3px `--page` edge and the 13 media radius. A border, never a shadow.

## Variants

### Three frames

```html
<div style="width:220px;background:var(--bg-page);border-radius:var(--len-16);padding:4px">
  <div class="dr-stack">
    <span class="dr-stack__shot"><img src="../assets/scenes/thumbs/aerial-rafting-crew.jpg" alt="Photo 1 of 3 — the crew head-on in white water, helmets up and both blades in the air." loading="lazy" decoding="async"></span>
    <span class="dr-stack__shot"><img src="../assets/scenes/thumbs/aerial-rafting-drop.jpg" alt="Photo 2 of 3 — the raft airborne off the waterfall, the whole crew's arms raised." loading="lazy" decoding="async"></span>
    <span class="dr-stack__shot"><img src="../assets/scenes/thumbs/aerial-rafting-overhead.jpg" alt="Photo 3 of 3 — the raft from directly overhead, running the rapid between wet rock and green water." loading="lazy" decoding="async"></span>
  </div>
</div>
```

The only shape: the tilts are set on the first three children. Measured on the build at 375: frame 206.7 × 137.8, overlap 38.7 of 137.8 = 28.1%, block 341.4 × 352.1, horizontal overflow 0. This plate is narrower than the phone column, so its pixels differ; the proportions hold, being percentages.

## When to use

Several photographs from one order, shown the way a phone shows several photographs: a loose pile, not a grid. One screen carries it, `delivery-aerial`, where the client's deliverable is a set rather than a single file. The alternating tilt is the whole trick: one shared angle reads as a skewed grid, opposed angles read as a pile somebody set down. No green anywhere near it; the pile is photographs and page ground.

Every frame keeps its own descriptive `alt`, numbered *n of 3*, because a partly covered photograph still carries meaning (`WCAG 1.1.1`). The tilt is static, with no transition and no animation, so reduced motion has nothing to switch off (`WCAG 2.3.3`). No text is rotated. The photographs are not re-cropped: the masters are all 1.500, so 3 / 2 is the shoot's own ratio.

One departure is recorded and left as built: the reference covers 35% and the build 28.1%, because `.dr-stack`'s 8px gap pushes back against the overlap. `gap: 0` would land 33.9%.

Sources: DESIGN.md § The photo pile · kit.html Photo pile · § Imagery

## Rule

```html
<div style="width:220px;background:var(--bg-page);border-radius:var(--len-16);padding:4px">
  <div class="dr-stack">
    <span class="dr-stack__shot"><img src="../assets/scenes/thumbs/aerial-rafting-crew.jpg" alt="Photo 1 of 3 — the crew head-on in white water, helmets up and both blades in the air." loading="lazy" decoding="async"></span>
    <span class="dr-stack__shot"><img src="../assets/scenes/thumbs/aerial-rafting-drop.jpg" alt="Photo 2 of 3 — the raft airborne off the waterfall, the whole crew's arms raised." loading="lazy" decoding="async"></span>
    <span class="dr-stack__shot"><img src="../assets/scenes/thumbs/aerial-rafting-overhead.jpg" alt="Photo 3 of 3 — the raft from directly overhead, running the rapid between wet rock and green water." loading="lazy" decoding="async"></span>
  </div>
</div>
```

Three delivery photos of one aerial order on the page ground, each with a numbered `alt`.

## Anti-rule

```html
<div style="width:220px;background:var(--bg-page);border-radius:var(--len-16);padding:4px">
  <div class="dr-stack">
    <span class="dr-stack__shot"><img src="../assets/scenes/thumbs/delivered-at-door.jpg" alt="Your parcel at the door" loading="lazy" decoding="async"></span>
  </div>
</div>
```

A pile of one. A single tilted photograph is not a set, it is a crooked picture. One delivery photo takes the [media well](well.html#variant-photograph) as a photograph, or a [cover card](cover-card.html) when it carries a file line.
