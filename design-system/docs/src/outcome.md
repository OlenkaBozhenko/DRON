---
name: Outcome
slug: outcome
group: States
order: 30
classes: .dr-mark--milestone · .dr-display · .dr-lead · .dr-center
file: message.css
inventory: Outcome heading; Milestone mark
kit: 2414
---

## Anatomy

```html
<section class="dr-center" aria-label="Confirmation" style="width:341px;max-width:100%;padding-top:8px;">
  <span class="dr-mark dr-mark--milestone"><svg class="dr-ic dr-ic--32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg></span>
  <p class="dr-display">Payment received</p>
  <p class="dr-lead">Your operator is on the way.</p>
</section>
```

- `.dr-center` — The column: a flex column, centred, gap 12. The screens add their own top padding inline: 8 on `order-confirmed`, 4 on `inspection-report`, 32 / 20 on the loading screens.
- `.dr-mark--milestone` — The well: a 64px circle, `--green-wash` under a charcoal glyph, 14.75:1. The glyph is drawn at 32px whatever its own size class says.
- `.dr-display` — The fact, the display step 22/700 at line 1.4 and −.02em.
- `.dr-lead` — The next thing that happens, the lead step 15/400 at 1.55, in slate.

## Variants

### Success

```html
<section class="dr-center" aria-label="Confirmation" style="width:341px;max-width:100%;padding-top:8px;">
  <span class="dr-mark dr-mark--milestone"><svg class="dr-ic dr-ic--32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg></span>
  <p class="dr-display">Payment received</p>
  <p class="dr-lead">Your operator is on the way.</p>
</section>
```

A circle-check in the well. The fact, then the next step. From `order-confirmed`; the check stands on 7 screens: `order-confirmed` and its `-aerial`, `-empty`, `-inspection` and `-loading` files, `inspection-report` and `resolution`.

### Waiting

```html
<section class="dr-center" role="status" aria-label="Waiting for the delivery photo" style="width:341px;max-width:100%;padding-top:8px;">
  <span class="dr-mark dr-mark--milestone waiting" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3.3 2"/></svg></span>
  <p class="dr-display">Waiting for the delivery photo…</p>
  <p class="dr-lead">Your operator is uploading the delivery photo now.</p>
</section>
```

The same well with a clock, from `delivery-loading`. The clock also stands on `operator-verification-loading` and `welcome-empty`. There is no paler green for waiting: every mix below `--green-wash` lands at 1.03–1.05 against the page. The kit adds a `.dr-note` line (*This usually takes under a minute.*) under the lead; no screen builds this now.

### Working

```html
<section class="dr-center" aria-label="Authorizing payment" role="status" style="width:341px;max-width:100%;padding:32px 20px;">
  <span class="dr-mark dr-mark--milestone" aria-hidden="true"><svg class="dr-ic dr-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5A8.5 8.5 0 1 1 3.5 12"/></svg></span>
  <p class="dr-display">Authorizing your payment…</p>
  <p class="dr-lead">Confirming your payment with Apple Pay. Don't close the app.</p>
</section>
```

`payment-loading`: the well holds a turning arc on the 1.1s `dr-spin` loop, stopped under `prefers-reduced-motion`. The title names what is in progress. The arc stands on 6 screens: the three `payment-loading` files, `signin-loading`, `operator-signup-loading` and `withdraw-loading`.

## When to use

The outcome is the success screen, and success is deliberately rare: only the screens where the job has a result earn one, such as `order-confirmed` (*Payment received*), `inspection-report` (*Report ready*) and `resolution` (*Refund issued*), plus the loading screens while the money or the check moves. It stands at the top of the screen's main column. 17 screen files build the milestone well; 16 of them as an outcome, and `share` puts the well over a drawer title instead. Success and waiting share one well; the difference is the glyph and the words, never the colour, under the Shape-And-Behaviour Rule: a clock is not a check, and each keeps a text name.

The screens build it more than one way. The column is a `section` in 16 files and a `div` in `share`. The title is a `p.dr-display` in 15 files, an `h2.dr-display` in `resolution`, and a `p.dr-sheet__title` in `share`. `aria-hidden` sits on the well in 10 files and only on the glyph in 7 (`inspection-report`, `order-confirmed`, `order-confirmed-aerial`, `order-confirmed-empty`, `order-confirmed-inspection`, `order-confirmed-loading`, `resolution`). The glyph carries `dr-ic--32` in 9 files, `dr-spin` in 6, and plain `dr-ic` in `delivery-loading` and `operator-verification-loading`; all render at 32. `role="status"` is on the column in 7 files, on the lead in `operator-signup-loading` and `operator-verification-loading`, and on neither in the rest.

The words follow voice.md's success tone: lead with the fact, the number or the time, then the next step. No celebration, no *successfully*, no exclamation marks, no *You're all set*. A loading outcome names the specific thing in progress, never a bare *Loading…*.

Sources: DESIGN.md § Milestone mark · inventory.md § 1.3 Outcome heading, Milestone mark · voice.md § Microcopy (Success, Loading) · wireframes/order-confirmed.html · payment-loading.html · delivery-loading.html

## Rule

```html
<section class="dr-center" aria-label="Report ready" style="width:341px;max-width:100%;padding-top:4px;">
  <span class="dr-mark dr-mark--milestone"><svg class="dr-ic dr-ic--32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg></span>
  <p class="dr-display">Report ready</p>
  <p class="dr-lead">Inspection · Hlevakha, field 3 · completed 15:42.</p>
</section>
```

`inspection-report`: the fact and the time, nothing more. The next step, *Rate this order*, is the screen's primary button in the action bar, on top of *Report an issue*.

## Anti-rule

```html
<section class="dr-center" aria-label="Order history" style="width:341px;max-width:100%;">
  <span class="dr-mark dr-mark--milestone"><svg class="dr-ic dr-ic--32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11"/></svg></span>
  <p class="dr-display">No orders yet</p>
  <p class="dr-lead">Your orders appear here, ready to re-book in a tap.</p>
</section>
```

An empty state drawn as an outcome. The green well says something was achieved, and an empty list is not an achievement. Use the [message block](message-block.html#variant-empty) or the [banner message](banner-message.html), which also carry the way out.
