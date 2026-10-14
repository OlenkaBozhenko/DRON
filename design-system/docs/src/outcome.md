---
name: Outcome
slug: outcome
group: States
order: 30
classes: .dr-mark--milestone · .dr-display · .dr-lead · .dr-note · .dr-center
file: message.css
inventory: Outcome heading; Milestone mark
kit: 2414
---

## Anatomy

```html
<div class="dr-center" style="width:341px;max-width:100%">
  <span class="dr-mark dr-mark--milestone" aria-hidden="true"><svg class="dr-ic dr-ic--32" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3.3 2"/></svg></span>
  <span class="dr-display">Delivered</span>
  <span class="dr-lead">Your operator is uploading the delivery photo now.</span>
  <span class="dr-note">This usually takes under a minute.</span>
</div>
```

- `.dr-center` — The column: centred, gap 12.
- `.dr-mark--milestone` — The well: a 64px circle, `--green-wash` under a charcoal glyph, 14.75:1, 32px glyph. `aria-hidden`; the title carries the state.
- `.dr-display` — The fact, 22/700 at −.02em, the only place 22px appears.
- `.dr-lead` — The next thing that happens, 15/400 at 1.55.
- `.dr-note` — An optional line under the lead: how long the wait is.

## Variants

### Success

```html
<div class="dr-center" style="width:341px;max-width:100%">
  <span class="dr-mark dr-mark--milestone" aria-hidden="true"><svg class="dr-ic dr-ic--32" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg></span>
  <span class="dr-display">Delivered</span>
  <span class="dr-lead">Your parcel arrived at 10:07.</span>
</div>
```

A circle-check in the well. The fact with its time, then the next step.

### Waiting

```html
<div class="dr-center" style="width:341px;max-width:100%">
  <span class="dr-mark dr-mark--milestone" aria-hidden="true"><svg class="dr-ic dr-ic--32" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3.3 2"/></svg></span>
  <span class="dr-display">Delivered</span>
  <span class="dr-lead">Your operator is uploading the delivery photo now.</span>
  <span class="dr-note">This usually takes under a minute.</span>
</div>
```

The same well with a clock. There is no paler green for waiting: every mix below `--green-wash` lands at 1.03–1.05 against the page.

### Working

```html
<div class="dr-center" role="status" aria-label="Authorizing payment" style="width:341px;max-width:100%">
  <span class="dr-mark dr-mark--milestone" aria-hidden="true"><svg class="dr-ic dr-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5A8.5 8.5 0 1 1 3.5 12"/></svg></span>
  <p class="dr-display">Authorizing your payment…</p>
  <p class="dr-lead">Confirming your payment with Apple Pay. Don't close the app.</p>
</div>
```

`payment-loading`: the well holds a turning arc on the 1.1s `dr-spin` loop, stopped under `prefers-reduced-motion`. The title names what is in progress.

## When to use

The outcome is the success screen, and success is deliberately rare: only the screens where the job has a result earn one, such as `order-confirmed` (*Payment received*), `delivery` and `payment-loading` while the money moves. It stands centred in the screen's main column with the action bar below it. Delivered and waiting share one well; the difference is the glyph and the words, never the colour, under the Shape-And-Behaviour Rule: a clock is not a check, and each keeps a text name.

The words follow voice.md's success tone: lead with the fact, the number or the time, then the next step. No celebration, no *successfully*, no exclamation marks, no *You're all set*. A loading outcome names the specific thing in progress, never a bare *Loading…*.

Sources: DESIGN.md § Milestone mark · inventory.md § 1.3 Outcome heading, Milestone mark · voice.md § Microcopy (Success, Loading) · wireframes/payment-loading.html · order-confirmed.html

## Rule

```html
<div class="dr-center" style="width:341px;max-width:100%">
  <span class="dr-mark dr-mark--milestone" aria-hidden="true"><svg class="dr-ic dr-ic--32" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg></span>
  <span class="dr-display">Delivered</span>
  <span class="dr-lead">Your parcel arrived at 10:07.</span>
</div>
```

The fact and the time, nothing more. The next step, *Rate this order*, is the screen's primary button in the action bar under it.

## Anti-rule

```html
<div class="dr-center" style="width:341px;max-width:100%">
  <span class="dr-mark dr-mark--milestone" aria-hidden="true"><svg class="dr-ic dr-ic--32" viewBox="0 0 24 24"><path d="M9 6h11M9 12h11M9 18h11"/></svg></span>
  <span class="dr-display">No orders yet</span>
  <span class="dr-lead">Your orders appear here, ready to re-book in a tap.</span>
</div>
```

An empty state drawn as an outcome. The green well says something was achieved, and an empty list is not an achievement. Use the [message block](message-block.html#variant-empty) or the [banner message](banner-message.html), which also carry the way out.
