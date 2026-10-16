---
name: Skeleton
slug: skeleton
group: States
order: 40
classes: .dr-sk-line · --pill · .dr-sk-w90/70/50/40/30 · .dr-sk-title · .dr-sk-date · .dr-sk-head · .dr-sk-well · .dr-sk-route · .dr-sk-money · .dr-sk-price · .dr-sk-btn · .dr-sk-block · .dr-sk-up · .dr-sk-arrow · .dr-sk-tray · .dr-inset--sk · .dr-sk-d1/d2
file: skeleton.css
inventory: Skeleton bar; Skeleton card; Skeleton block; Skeleton body · media
kit: 2446
---

## Anatomy

```html
<div class="dr-card" style="width:341px;max-width:100%">
  <span class="dr-order__top">
    <span class="dr-sk-head"><span class="dr-sk-line dr-sk-title" style="width:62%"></span><span class="dr-sk-line dr-sk-date" style="width:40%"></span></span>
    <span class="dr-sk-well"></span>
  </span>
  <span class="dr-inset dr-inset--sk">
    <span class="dr-sk-route"></span>
  </span>
  <span class="dr-order__fee">
    <span class="dr-sk-money"><span class="dr-sk-line dr-sk-price"></span></span>
    <span class="dr-order__acts"><span class="dr-sk-btn"></span><span class="dr-sk-btn"></span></span>
  </span>
</div>
```

- `.dr-card` — The chrome: the loaded card's own surface, painted solid. Chrome stays solid, content pulses.
- `.dr-sk-head` — The title and date column, gap 8, standing where the loaded heading will.
- `.dr-sk-title` — A bar 14 tall where the title lands; `.dr-sk-date` is 10 tall. On this screen their widths are inline styles.
- `.dr-sk-well` — The drone well, 96 × 96 at radius 13, `--bg-well`. It pulses, because the cutout sits inside the well and nothing survives the swap.
- `.dr-sk-route` — The route strip: one bar 35 tall (12 + 7 + 16), radius 4, inside the inset's 16px padding.
- `.dr-sk-price` — The price bar, 18 tall and 84 wide.
- `.dr-sk-btn` — A 44 × 44 circle where each icon button lands.

## Variants

### Bar

```html
<div class="dr-stack" style="width:341px;max-width:100%">
  <span class="dr-sk-line dr-sk-w90"></span>
  <span class="dr-sk-line dr-sk-w70"></span>
  <span class="dr-sk-line dr-sk-w50"></span>
</div>
```

A bar is 13 tall, radius 4, on `--bg-muted`. Its width is a class: `.dr-sk-w90`, `-w70`, `-w50`, `-w40`, `-w30`. From `operator-signup-loading`. Every bar pulses on the shared 1.4s `dr-pulse` loop, opacity 1 → .5. `.dr-sk-d1` and `.dr-sk-d2` offset a whole card by −.47s and −.93s.

The screens set widths two ways. 14 files use the width classes. 2 files write the width inline: `order-history-loading` (title, date and two price bars) and `notifications-loading` (title and date).

### Pill and route

```html
<div style="display:flex;flex-direction:column;gap:12px;width:341px;max-width:100%">
  <div class="dr-rows" aria-label="ETA (loading)">
    <div class="dr-rows__row"><span class="dr-sk-line dr-sk-line--pill dr-sk-w40"></span><span class="dr-sk-line dr-sk-line--pill dr-sk-w30"></span></div>
    <div class="dr-rows__row"><span class="dr-sk-line dr-sk-line--pill dr-sk-w40"></span><span class="dr-sk-line dr-sk-line--pill dr-sk-w30"></span></div>
  </div>
  <span class="dr-inset dr-inset--sk">
    <span class="dr-sk-route"></span>
  </span>
</div>
```

`--pill` rounds a bar to 999 where a chip lands, so the page does not jump. Only `tracking-loading` builds it. The route strip is one 35px bar inside the inset's 16px padding, so the strip holds 67px. `.dr-inset--sk` removes the inset's ground. Only `order-history-loading` builds it.

### Card

```html
<div class="dr-card dr-card--row" style="width:341px;max-width:100%">
  <span class="dr-sk-well"></span>
  <span class="dr-sk-head">
    <span class="dr-sk-line dr-sk-w70"></span>
    <span class="dr-sk-line dr-sk-w40"></span>
  </span>
</div>
```

A row card: a pulsing well, then a column of bars. From `order-confirmed-loading`, where it stands for the operator. `report-issue-loading` builds the same card with three bars (70, 90, 40). The full order card, with route, price and buttons, is the Anatomy above; it stands three times on `order-history-loading`.

### Block

```html
<div style="width:341px;max-width:100%">
  <div class="dr-sk-block" style="height:180px;">
    <span class="dr-sk-up" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 13v5a1.6 1.6 0 0 0 1.6 1.6h8.8A1.6 1.6 0 0 0 18 18v-5"/><g class="dr-sk-arrow"><path d="M12 4.2v10.3"/><path d="M8.4 7.8L12 4.2l3.6 3.6"/></g></svg></span>
  </div>
  <p class="dr-hint">This usually takes under a minute.</p>
</div>
```

A media placeholder sized to what it waits for: 180 tall on `delivery-loading`, against the delivery photo's 180 on `delivery`. Radius 13, `--bg-well`. The block holds still; only the 32px arrow leaves, on a 1.6s cadence, resting visible at 0% and 100% so a dropped animation leaves a legible icon. `inspection-report-loading` builds an empty block 200 tall for the cover photo, and `report-issue-loading` an empty block with no height set.

## States

No state of its own: a skeleton stands in for content that is loading, and nothing in it takes focus.

## When to use

A skeleton is a claim about the loaded screen: it rehearses that screen's layout at its exact size, so nothing moves when the content arrives. It stands on 18 `-loading` screens, among them `order-history-loading`, `notifications-loading`, `tracking-loading`, `delivery-loading`, the three `order-review-loading` and the three `payment-loading` files. The question is never "should this pulse" but "does what loads replace this surface, or sit inside it": on `order-history-loading` the drone well pulses, and on `result-upload-loading` the tray (`.dr-upload.dr-sk-tray`) holds still and only the arrow moves. A skeleton never shows more detail than the loaded state rewards.

The skeleton has no words; the sentence beside it does, with `role="status"`. It names what is loading, never a bare *Loading…*: *Loading your orders…*, *Calculating the final price…*, *Getting a live signal from the operator…*. `prefers-reduced-motion` stops every pulse.

`Skeleton body · media` (`.sk-body`, `.sk-media`) is still grayscale and has no class in `components/`, so it is not drawn here.

Sources: DESIGN.md § Skeletons · inventory.md § 1.8 · kit.html Loading, Skeleton · pill and route · voice.md § Microcopy (Loading)

## Rule

```html
<div class="dr-card" style="width:341px;max-width:100%">
  <span class="dr-order__top">
    <span class="dr-sk-head"><span class="dr-sk-line dr-sk-title" style="width:50%"></span><span class="dr-sk-line dr-sk-date" style="width:34%"></span></span>
    <span class="dr-sk-well"></span>
  </span>
  <span class="dr-inset dr-inset--sk">
    <span class="dr-sk-route"></span>
  </span>
  <span class="dr-order__fee">
    <span class="dr-sk-money"><span class="dr-sk-line dr-sk-price" style="width:70px"></span></span>
    <span class="dr-order__acts"><span class="dr-sk-btn"></span><span class="dr-sk-btn"></span></span>
  </span>
</div>
```

The order card's own surface with its contents rehearsed at their loaded sizes. On `order-history-loading` this second card sits in an `li.dr-sk-d1` and the third in `li.dr-sk-d2`, so a list of three does not blink as one.

## Anti-rule

```html
<div class="dr-center" style="width:341px;max-width:100%"><svg class="dr-ic dr-spin" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5A8.5 8.5 0 1 1 3.5 12"/></svg><span class="dr-hint">Loading…</span></div>
```

A bare spinner over *Loading…* where a list will land. It names nothing, and when the list arrives the page jumps. Rehearse the list with skeleton cards. The screens keep `.dr-spin` for a wait with no layout to rehearse: inside the milestone mark on `signin-loading`, `operator-signup-loading`, `withdraw-loading` and the three `payment-loading` files, with a sentence that says what is in progress.
