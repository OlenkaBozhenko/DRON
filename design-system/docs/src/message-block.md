---
name: Message block
slug: message-block
group: States
order: 10
classes: .dr-msg · __title · __body · __actions · .dr-mark · --warn · --danger
file: message.css
inventory: Message block; Empty-state banner
kit: 2371
---

## Anatomy

```html
<div class="dr-msg" style="width:341px;max-width:100%" role="alert">
  <span class="dr-mark dr-mark--danger" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24"><g opacity=".55"><path d="M3.2 10.6a13 13 0 0 1 17.6 0"/><path d="M6.8 14.8a8 8 0 0 1 10.4 0"/><path d="M10.4 19a3 3 0 0 1 3.2 0"/></g></svg></span>
  <span class="dr-msg__title">Live tracking lost</span>
  <span class="dr-msg__body">We’ve lost the live signal from the operator’s device. Your order is still active.</span>
  <span class="dr-msg__actions">
    <button class="dr-btn dr-btn--primary" type="button">Try again</button>
    <button class="dr-btn dr-btn--secondary" type="button">Contact support</button>
  </span>
</div>
```

- `.dr-msg` — The block: `--card` at the 16 radius, padding 22 / 18, gap 12, centred, no shadow.
- `.dr-mark` — The state mark: 52 × 52 at the 13 media radius, 26px glyph, `aria-hidden`.
- `.dr-msg__title` — What happened, at the title step 17/600.
- `.dr-msg__body` — What it means for the user, 13/400 in slate, capped at 260px.
- `.dr-msg__actions` — The way out: full-width buttons stacked with gap 10, primary first.

## Variants

### Empty

```html
<div class="dr-msg" style="width:341px;max-width:100%" role="status">
  <span class="dr-mark" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.6" cy="6" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.6" cy="12" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.6" cy="18" r="1.1" fill="currentColor" stroke="none"/></svg></span>
  <span class="dr-msg__title">No orders yet</span>
  <span class="dr-msg__body">Your orders appear here, ready to re-book in a tap.</span>
  <span class="dr-msg__actions"><button class="dr-btn dr-btn--primary" type="button">Browse services</button></span>
</div>
```

Neutral mark, `--media` under slate, 5.51:1. `role="status"`, and one way out.

### Error

```html
<div class="dr-msg" style="width:341px;max-width:100%" role="alert">
  <span class="dr-mark dr-mark--danger" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24"><g opacity=".55"><path d="M3.2 10.6a13 13 0 0 1 17.6 0"/><path d="M6.8 14.8a8 8 0 0 1 10.4 0"/><path d="M10.4 19a3 3 0 0 1 3.2 0"/></g></svg></span>
  <span class="dr-msg__title">Live tracking lost</span>
  <span class="dr-msg__body">We’ve lost the live signal from the operator’s device. Your order is still active.</span>
  <span class="dr-msg__actions">
    <button class="dr-btn dr-btn--primary" type="button">Try again</button>
    <button class="dr-btn dr-btn--secondary" type="button">Contact support</button>
  </span>
</div>
```

`--danger`: `--danger-wash` under `--danger-ink`, 5.49:1. `role="alert"`, with *Try again* and *Contact support* as the exits.

### Notice

```html
<div class="dr-msg" style="width:341px;max-width:100%" role="status">
  <span class="dr-mark dr-mark--warn" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24"><circle cx="12" cy="13.5" r="7"/><path d="M12 13.5V9.5"/><path d="M9.5 3.2h5"/><path d="M12 6.5v-3.3"/></svg></span>
  <span class="dr-msg__title">Running a few minutes late</span>
  <span class="dr-msg__body">Traffic near the drop-off is slowing your operator. They’re still on the way.</span>
  <span class="dr-msg__actions">
    <button class="dr-btn dr-btn--primary" type="button">Keep waiting</button>
    <button class="dr-btn dr-btn--secondary" type="button">Contact support</button>
  </span>
</div>
```

`--warn`: `--warn-wash` under `--warn-ink`, 5.65:1. Something changed, nothing failed.

## When to use

One component doing three jobs: the empty state, the error and the notice. It stands on every `-empty` and `-error` screen in the set and on the screens that report a delay, from `order-history-empty` to `tracking-error`. No empty or error screen is a dead end, so the block always ends on at least one action. The state is told by the mark's glyph and the title, with the wash as a second carrier, never by colour alone. When the empty state carries a picture, it is the [banner message](banner-message.html).

The copy follows voice.md's state tone. Empty: why it is empty, then one way out. Error: what happened, what it means for the user's order or money, and what to do, with no apology and no joke. The verbs are fixed: *Try again* to recover, *Contact support* to reach a person. No *Oops*, no exclamation marks.

Sources: DESIGN.md § Message block · § State marks · voice.md § Microcopy (Empty state, Error) · P5 · inventory.md § 1.3

## Rule

```html
<div class="dr-msg" style="width:341px;max-width:100%" role="alert">
  <span class="dr-mark dr-mark--danger" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24"><g opacity=".55"><path d="M3.2 10.6a13 13 0 0 1 17.6 0"/><path d="M6.8 14.8a8 8 0 0 1 10.4 0"/><path d="M10.4 19a3 3 0 0 1 3.2 0"/></g></svg></span>
  <span class="dr-msg__title">Live tracking lost</span>
  <span class="dr-msg__body">We’ve lost the live signal from the operator’s device. Your order is still active.</span>
  <span class="dr-msg__actions">
    <button class="dr-btn dr-btn--primary" type="button">Try again</button>
    <button class="dr-btn dr-btn--secondary" type="button">Contact support</button>
  </span>
</div>
```

`tracking-error`: the fact, what it costs (nothing; the order is still active) and two exits. It stays on screen until the user acts, which is why an error lives here and not in a toast.

## Anti-rule

```html
<div class="dr-msg" style="width:341px;max-width:100%" role="status">
  <span class="dr-mark" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span>
  <span class="dr-msg__title">Delivered</span>
  <span class="dr-msg__body">Your parcel arrived at 10:07.</span>
  <span class="dr-msg__actions"><button class="dr-btn dr-btn--primary" type="button">Rate this order</button></span>
</div>
```

A success drawn as a message block. Success is a screen of its own, with the milestone well and the display title: use the [outcome](outcome.html). For a confirmation of an action that leaves no other trace, use a [toast](toast.html).
