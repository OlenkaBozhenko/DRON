---
name: Banner message
slug: banner-message
group: States
order: 20
classes: .dr-msg--banner · __banner · __title · __body · __actions
file: message.css
inventory: Empty-state banner (.dr-msg--banner)
kit: 2482
---

## Anatomy

```html
<div class="dr-msg dr-msg--banner" role="status" style="width:341px;max-width:100%;margin-top:0">
  <span class="dr-msg__banner" aria-hidden="true" style="background-image:url(../assets/drones/thumbs/drone-flight-front.png)"></span>
  <span class="dr-msg__title">No orders yet</span>
  <p class="dr-msg__body">Your orders appear here, ready to re-book in a tap.</p>
  <div class="dr-msg__actions">
    <span class="dr-btn dr-btn--primary">Browse services</span>
  </div>
</div>
```

- `.dr-msg--banner` — The block: `--card` at 16, padding 16 / 16 / 32, gap 12, no shadow. The deeper floor is because the block ends on a button and the button needs its own air.
- `.dr-msg__banner` — The art: 100% × 150 at the 13 media radius, no ground, `multiply` blend, the render placed at 78% of the box, 16 from the top. `aria-hidden`.
- `.dr-msg__title` — The fact, 17/600.
- `.dr-msg__body` — The reason to come back, at body 14 instead of the plain block's 13.
- `.dr-msg__actions` — The one way out.

## Variants

### Banner

```html
<div class="dr-msg dr-msg--banner" role="status" style="width:341px;max-width:100%;margin-top:0">
  <span class="dr-msg__banner" aria-hidden="true" style="background-image:url(../assets/drones/thumbs/drone-flight-front.png)"></span>
  <span class="dr-msg__title">No orders yet</span>
  <p class="dr-msg__body">Your orders appear here, ready to re-book in a tap.</p>
  <div class="dr-msg__actions">
    <span class="dr-btn dr-btn--primary">Browse services</span>
  </div>
</div>
```

The only shape. Measured on the build at 341.4 × 347.8. On a screen it is offset 56 from the content above (`margin-top`), switched off in this plate.

## When to use

The banner message is the empty state that carries a picture: an illustrated top, the sentence, and one way out. It stands on `order-history-empty`. It is a [message block](message-block.html) with a render in place of the 52px mark, and it is the one decorative image in the product: the art is `aria-hidden` because it says nothing the sentence does not (`WCAG 1.1.1`). `role="status"` announces the state without taking focus (`WCAG 4.1.3`).

The copy is the empty-state tone from voice.md: *No orders yet* states the fact, *ready to re-book in a tap* is the reason to come back, *Browse services* is the exit. No apology, no cheer, no *Oops*.

Sources: kit.html Banner message · inventory.md § 1.3 Empty-state banner · voice.md § Microcopy (Empty state) · microcopy.md order-history-empty

## Rule

```html
<div class="dr-msg dr-msg--banner" role="status" style="width:341px;max-width:100%;margin-top:0">
  <span class="dr-msg__banner" aria-hidden="true" style="background-image:url(../assets/drones/thumbs/drone-flight-front.png)"></span>
  <span class="dr-msg__title">No orders yet</span>
  <p class="dr-msg__body">Your orders appear here, ready to re-book in a tap.</p>
  <div class="dr-msg__actions">
    <span class="dr-btn dr-btn--primary">Browse services</span>
  </div>
</div>
```

A first-time empty screen: nothing has gone wrong, so the block can open with a picture of the service before the one action.

## Anti-rule

```html
<div class="dr-msg dr-msg--banner" role="alert" style="width:341px;max-width:100%;margin-top:0">
  <span class="dr-msg__banner" aria-hidden="true" style="background-image:url(../assets/drones/thumbs/drone-flight-front.png)"></span>
  <span class="dr-msg__title">Live tracking lost</span>
  <p class="dr-msg__body">We’ve lost the live signal from the operator’s device. Your order is still active.</p>
  <div class="dr-msg__actions">
    <span class="dr-btn dr-btn--primary">Try again</span>
  </div>
</div>
```

An error with a picture on top. In trouble the product is plain and accountable, and a drone render over a lost signal reads as decoration where the user needs the facts. Use the [message block](message-block.html#variant-error) with the danger mark.
