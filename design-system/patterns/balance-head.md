---
name: Balance first
slug: balance-head
order: 8
screens: payment, ratings, wallet, withdraw
requires: dr-label dr-balance
built: [Section heading](section-heading.html) · [Balance block](balance-block.html)
---

One figure leads the screen, and the zones under it explain it or spend it.

## Composition

```html
<div class="dr-main" style="width:375px;max-width:100%">
  <p class="zlabel dr-label">Balance <span class="dr-label__act">&#9656; available to withdraw</span></p>
  <section class="dr-balance dr-balance--card" aria-label="Balance">
      <span class="dr-balance__glyph" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6.6" rx="6.8" ry="2.9"/><path d="M5.2 6.6v4.5c0 1.6 3 2.9 6.8 2.9s6.8-1.3 6.8-2.9V6.6"/><path d="M5.2 11.1v4.5c0 1.6 3 2.9 6.8 2.9s6.8-1.3 6.8-2.9v-4.5"/></svg></span>
      <div class="dr-balance__body">
        <p class="dr-number">&#8372;3,240</p>
        <p class="dr-note dr-note--flush">Available to withdraw</p>
      </div>
    </section>
</div>
```

From `wallet`.

- `.dr-label` — what the figure is.
- `.dr-balance` — the figure and its line: a green card on `wallet`, plain on `withdraw` and `payment`, the banner on `ratings`.
- The zones after it: the history that made it, or the form that spends it.

## Take the pattern

The screen exists for one number: the balance to withdraw, the amount to pay, the rating earned.

## Build from components instead

The number is one fact among many: it is a row in [Labelled detail rows](#labelled-rows).
