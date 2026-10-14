---
name: Skeleton
slug: skeleton
group: States
order: 40
classes: .dr-sk-line · --pill · .dr-sk-w90/70/50/40/30 · .dr-sk-title · .dr-sk-date · .dr-sk-head · .dr-sk-well · .dr-sk-block · .dr-sk-up · .dr-sk-arrow · .dr-sk-route · .dr-inset--sk · .dr-sk-d1/d2
file: skeleton.css
inventory: Skeleton bar; Skeleton card; Skeleton block; Skeleton body · media
kit: 2446
---

## Anatomy

```html
<div class="dr-card" style="width:341px;max-width:100%">
  <div class="dr-order__top" style="gap:16px">
    <span class="dr-sk-head">
      <span class="dr-sk-line dr-sk-title dr-sk-w70"></span>
      <span class="dr-sk-line dr-sk-date dr-sk-w40"></span>
    </span>
    <span class="dr-sk-well"></span>
  </div>
  <span class="dr-sk-line dr-sk-w90"></span>
  <span class="dr-sk-line dr-sk-w50"></span>
</div>
```

- `.dr-card` — The chrome: the loaded card's own surface, painted solid. Chrome stays solid, content pulses.
- `.dr-sk-head` — The title and date column, gap 8, standing where the loaded heading will.
- `.dr-sk-title` — A bar 14 tall where a title lands; `.dr-sk-date` is 10 tall.
- `.dr-sk-well` — The drone well, 96 × 96 at 13: it pulses, because the cutout sits inside the well and nothing survives the swap.
- `.dr-sk-w90` — A body bar: 13 tall, radius 4, `--btn2`. Its width is a class, never an inline style.

## Variants

### Bar

```html
<div style="display:flex;flex-direction:column;gap:12px;width:341px;max-width:100%"><span class="dr-sk-line dr-sk-w90"></span><span class="dr-sk-line dr-sk-w70"></span><span class="dr-sk-line dr-sk-w50"></span><span class="dr-sk-line dr-sk-w40"></span><span class="dr-sk-line dr-sk-w30"></span></div>
```

13px `--btn2` bars at five widths, so three skeletons do not read as one stamped block. Every one pulses on the shared 1.4s `dr-pulse` loop, opacity 1 → .5; `.dr-sk-d1` and `.dr-sk-d2` offset a card by −.47s and −.93s.

### Pill and route

```html
<div style="display:flex;flex-direction:column;gap:12px;width:341px;max-width:100%">
  <div class="dr-rows__row"><span class="dr-sk-line dr-sk-line--pill dr-sk-w40"></span><span class="dr-sk-line dr-sk-line--pill dr-sk-w30"></span></div>
  <span class="dr-inset dr-inset--sk"><span class="dr-sk-route"></span></span>
</div>
```

`--pill` where a chip will land, because a rectangle where a pill lands makes the page jump. The route strip is one bar inside the inset's own 16px padding, so the strip still holds 67px. From `tracking-loading` and `order-history-loading`.

### Card

```html
<div class="dr-card" style="width:341px;max-width:100%">
  <div class="dr-order__top" style="gap:16px">
    <span class="dr-sk-head">
      <span class="dr-sk-line dr-sk-title dr-sk-w70"></span>
      <span class="dr-sk-line dr-sk-date dr-sk-w40"></span>
    </span>
    <span class="dr-sk-well"></span>
  </div>
  <span class="dr-sk-line dr-sk-w90"></span>
  <span class="dr-sk-line dr-sk-w50"></span>
</div>
```

The loaded card's anatomy, block for block: 263.0px against the delivered card's 263.6, so the swap moves the list by half a pixel.

### Block

```html
<div style="display:flex;flex-direction:column;gap:12px;align-items:center;width:341px;max-width:100%">
  <div class="dr-sk-block dr-sk-up" style="width:100%;height:180px">
    <svg class="dr-ic dr-ic--32" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 13v5a1.6 1.6 0 0 0 1.6 1.6h8.8A1.6 1.6 0 0 0 18 18v-5"/><g class="dr-sk-arrow"><path d="M12 4.2v10.3"/><path d="M8.4 7.8L12 4.2l3.6 3.6"/></g></svg>
  </div>
  <span class="dr-hint">Waiting for the delivery photo…</span>
</div>
```

A media placeholder sized to what it waits for: 341 × 180 against a photo of 341 × 180. The block holds still; only the arrow leaves, on a 1.6s upload cadence, resting visible at 0% and 100% so a dropped animation leaves a legible icon.

## When to use

A skeleton is a claim about the loaded screen: it rehearses that screen's layout at its exact size, so nothing moves when the content arrives. It stands on every `-loading` screen with a list or a media zone, such as `order-history-loading`, `tracking-loading` and `delivery-loading`. The rule gives opposite answers by design. The question is never "should this pulse" but "does what loads replace this surface, or sit inside it": on `order-history-loading` the drone well pulses, on `delivery-loading` the photo well pulses, and on `result-upload-loading` the tray holds still. A skeleton never shows more detail than the loaded state rewards, and it expires when the screen it rehearses changes treatment.

The skeleton has no words; the sentence beside it does. It names what is loading, never a bare *Loading…*: *Waiting for the delivery photo…*, *Sending the delivery photo.* `prefers-reduced-motion` stops every pulse.

`Skeleton body · media` (`.sk-body`, `.sk-media`) is still grayscale and has no class in `components/`, so it is not drawn here.

Sources: DESIGN.md § Skeletons · inventory.md § 1.8 · kit.html Loading, Skeleton · pill and route · voice.md § Microcopy (Loading)

## Rule

```html
<div class="dr-card dr-sk-d1" style="width:341px;max-width:100%">
  <div class="dr-order__top" style="gap:16px">
    <span class="dr-sk-head">
      <span class="dr-sk-line dr-sk-title dr-sk-w70"></span>
      <span class="dr-sk-line dr-sk-date dr-sk-w40"></span>
    </span>
    <span class="dr-sk-well"></span>
  </div>
  <span class="dr-sk-line dr-sk-w90"></span>
  <span class="dr-sk-line dr-sk-w50"></span>
</div>
```

The order card's own surface with its contents rehearsed at their loaded sizes, offset by `.dr-sk-d1` so a list of three does not blink as one.

## Anti-rule

```html
<div class="dr-center" style="width:341px;max-width:100%"><svg class="dr-ic dr-spin" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5A8.5 8.5 0 1 1 3.5 12"/></svg><span class="dr-hint">Loading…</span></div>
```

A bare spinner over *Loading…* where a list will land. It names nothing, and when the list arrives the page jumps. Rehearse the list with skeleton cards; keep a spinner for a wait that has no layout to rehearse, inside the [outcome](outcome.html#variant-working) well, with a sentence that says what is in progress.
