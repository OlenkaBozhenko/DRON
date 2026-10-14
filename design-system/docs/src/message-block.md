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
<div class="dr-msg" role="alert" style="width:341px;max-width:100%">
  <span class="dr-mark dr-mark--danger" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2.4"/><path d="M3 10.4h18"/><path d="M4 4l16 16"/></svg></span>
  <span class="dr-msg__title">Withdrawal didn't go through</span>
  <p class="dr-msg__body">The transfer to your card failed and the &#8372;1,500 is back in your balance. Check the card details, or try a bank transfer instead.</p>
  <div class="dr-msg__actions">
    <a class="dr-btn dr-btn--primary" href="#">Try again</a>
    <a class="dr-btn dr-btn--secondary" href="#">Use bank transfer</a>
  </div>
</div>
```

- `.dr-msg` — The block: `--card` at the 16 radius, padding 22 / 18, gap 12, centred, no shadow.
- `.dr-mark` — The state mark: 52 × 52 at the 13 media radius, 26px glyph, `aria-hidden`.
- `.dr-msg__title` — What happened, at the title step 17/600, line 1.4.
- `.dr-msg__body` — What it means for the user, 13/400 at line 1.5 in slate, capped at 260px.
- `.dr-msg__actions` — The way out: full-width buttons stacked with gap 10, 6 below the body, primary on top.

## Variants

### Empty

```html
<div class="dr-msg" role="status" style="width:341px;max-width:100%">
  <span class="dr-mark" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.4a5.9 5.9 0 0 0-5.9 5.9c0 4.1-1.5 5.3-1.5 5.3h14.8s-1.5-1.2-1.5-5.3A5.9 5.9 0 0 0 12 3.4Z"/><path d="M10.1 18a2.1 2.1 0 0 0 3.8 0"/></svg></span>
  <span class="dr-msg__title">No notifications yet</span>
  <p class="dr-msg__body">Nothing has been sent to you yet. Start an order and its updates land here.</p>
  <div class="dr-msg__actions">
    <a class="dr-btn dr-btn--primary" href="#">Browse services</a>
  </div>
</div>
```

Neutral mark, `--media` under slate, 5.51:1. `role="status"`, and one way out. From `notifications-empty`.

### Error

```html
<div class="dr-msg" role="alert" style="width:341px;max-width:100%">
  <span class="dr-mark dr-mark--danger" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2.4"/><path d="M3 10.4h18"/><path d="M4 4l16 16"/></svg></span>
  <span class="dr-msg__title">Withdrawal didn't go through</span>
  <p class="dr-msg__body">The transfer to your card failed and the &#8372;1,500 is back in your balance. Check the card details, or try a bank transfer instead.</p>
  <div class="dr-msg__actions">
    <a class="dr-btn dr-btn--primary" href="#">Try again</a>
    <a class="dr-btn dr-btn--secondary" href="#">Use bank transfer</a>
  </div>
</div>
```

`--danger`: `--danger-wash` under `--danger-ink`, 5.49:1. `role="alert"`, with *Try again* on top and a second exit below. From `withdraw-error`. Not every error takes the danger mark: `contact-support-error`, `inspection-report-error`, `operator-signup-error`, `order-confirmed-error` and `payment-error` carry the neutral mark under `role="alert"`.

### Notice

```html
<div class="dr-msg" role="status" style="width:341px;max-width:100%">
  <span class="dr-mark dr-mark--warn" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3.3 2"/></svg></span>
  <span class="dr-msg__title">Job expired</span>
  <p class="dr-msg__body">You didn't respond in time, so this job was reassigned to another operator. New jobs will appear here.</p>
  <div class="dr-msg__actions">
    <a class="dr-btn dr-btn--primary" href="#">Back to Jobs</a>
  </div>
</div>
```

`--warn`: `--warn-wash` under `--warn-ink`, 5.65:1. Something changed, nothing failed. From `job-offer-empty`. The warn mark stands on 7 screens: `job-brief-error`, `job-checklist-error`, `job-offer-empty`, `operator-dispute-error` and the three `tracking*-empty` late notices.

## When to use

One component doing three jobs: the empty state, the error and the notice. It stands on 32 screen files, every one an `-empty` or `-error` state, from `listings-error` to `withdraw-error`; the 33rd, `order-history-empty`, carries the [banner message](banner-message.html). No empty or error screen is a dead end. On 25 of the 32 the exits sit in the block's own `__actions`; on the other 7 (`contact-support-error`, `onboarding-client-empty`, `operator-signup-error`, `operator-verification-error`, `payment-error`, `report-issue-empty`, `signin-error`) the block ends on its body and the exits stand in the screen's action bar. The state is told by the mark's glyph and the title, with the wash as a second carrier, never by colour alone.

The screens build the title two ways: a `span` in 25 files and a `p` in 7 (`order-confirmed-error`, `tracking-empty`, `tracking-error`, `tracking-aerial-empty`, `tracking-aerial-error`, `tracking-inspection-empty`, `tracking-inspection-error`). The body is a `p` and the actions a `div` everywhere. The live role is `alert` on 15 blocks and `status` on 12; five carry none (`onboarding-client-empty`, `tracking-empty`, `tracking-aerial-empty`, `tracking-inspection-empty`, `wallet-empty`).

The copy follows voice.md's state tone. Empty: why it is empty, then one way out. Error: what happened, what it means for the user's order or money, and what to do, with no apology and no joke. The verbs are fixed: *Try again* to recover, *Contact support* to reach a person. No *Oops*, no exclamation marks.

Sources: DESIGN.md § Message block · § State marks · voice.md § Microcopy (Empty state, Error) · P5 · inventory.md § 1.3

## Rule

```html
<div class="dr-msg" role="alert" style="width:341px;max-width:100%">
  <span class="dr-mark dr-mark--danger" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><g opacity=".55"><path d="M3.2 10.6a13 13 0 0 1 17.6 0"/><path d="M6.8 14.8a8 8 0 0 1 10.4 0"/><path d="M10.4 19a3 3 0 0 1 3.2 0"/></g></svg></span>
  <p class="dr-msg__title">Live tracking lost</p>
  <p class="dr-msg__body">We've lost the live signal from the operator's device. Your order is still active.</p>
  <div class="dr-msg__actions">
    <a class="dr-btn dr-btn--primary" href="#">Try again</a>
    <a class="dr-btn dr-btn--secondary" href="#">Contact support</a>
  </div>
</div>
```

`tracking-error`: the fact, what it costs (nothing; the order is still active) and two exits. It stays on screen until the user acts, which is why an error lives here and not in a toast.

## Anti-rule

```html
<div class="dr-msg" role="status" style="width:341px;max-width:100%">
  <span class="dr-mark" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span>
  <span class="dr-msg__title">Delivered</span>
  <p class="dr-msg__body">Your parcel arrived at 10:07.</p>
  <div class="dr-msg__actions">
    <a class="dr-btn dr-btn--primary" href="#">Rate this order</a>
  </div>
</div>
```

A success drawn as a message block. Success is a screen of its own, with the milestone well and the display title: use the [outcome](outcome.html). For a confirmation of an action that leaves no other trace, use a [toast](toast.html).
