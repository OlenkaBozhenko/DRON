---
name: Balance block
slug: balance-block
group: Surfaces
order: 240
classes: .dr-balance · --card · --banner · __glyph · __body · .dr-rating-arc · .dr-note--flush
file: card.css; rating.css; type.css
inventory: Balance block
kit: 1945
---

## Anatomy

```html
<section class="dr-balance dr-balance--card" aria-label="Balance" style="width:341px;max-width:100%">
  <span class="dr-balance__glyph" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6.6" rx="6.8" ry="2.9"/><path d="M5.2 6.6v4.5c0 1.6 3 2.9 6.8 2.9s6.8-1.3 6.8-2.9V6.6"/><path d="M5.2 11.1v4.5c0 1.6 3 2.9 6.8 2.9s6.8-1.3 6.8-2.9v-4.5"/></svg></span>
  <div class="dr-balance__body">
    <p class="dr-number">&#8372;3,240</p>
    <p class="dr-note dr-note--flush">Available to withdraw</p>
  </div>
</section>
```

- `.dr-balance` — The block: a figure over the line that names it, 4 apart. As `--card` it turns on its side inside a green card, 341 × 84, padding 20 / 16 (16 / 16 below 390 wide), radius 16, no shadow; glyph and body are 12 apart.
- `.dr-balance__glyph` — A 44 × 44 square plate, radius 13, `--bg-accent-tint`, with a 22px coin stack inside it. Its 44 is the body's own height (22 + 4 + 18), so glyph and text share a top and a bottom edge.
- `.dr-number` — The figure, 700 with tabular figures and line-height 1, so money lines up digit under digit. Inside `.dr-balance` it takes the display size, 22, in place of the number step's 20.
- `.dr-note--flush` — The caption, 12 regular at line-height 1.5 (18), set left instead of the note's default centre.

## Variants

### Plain

```html
<section class="dr-balance" aria-label="Amount" style="width:341px;max-width:100%">
  <p class="dr-number">&#8372;180</p>
  <p class="dr-note dr-note--flush">Package delivery · Podil → Osokorky</p>
</section>
```

On the page ground: figure charcoal at 15.99:1, caption `--text-muted` at 6.62:1. Five screens build it: `payment`, `payment-aerial`, `payment-inspection`, `withdraw` and `wallet-empty`.

### Card

```html
<section class="dr-balance dr-balance--card" aria-label="Balance" style="width:341px;max-width:100%">
  <span class="dr-balance__glyph" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6.6" rx="6.8" ry="2.9"/><path d="M5.2 6.6v4.5c0 1.6 3 2.9 6.8 2.9s6.8-1.3 6.8-2.9V6.6"/><path d="M5.2 11.1v4.5c0 1.6 3 2.9 6.8 2.9s6.8-1.3 6.8-2.9v-4.5"/></svg></span>
  <div class="dr-balance__body">
    <p class="dr-number">&#8372;3,240</p>
    <p class="dr-note dr-note--flush">Available to withdraw</p>
  </div>
</section>
```

`wallet`'s balance on a green fill carrying `wallet-pattern.png`. Every ink is `--on-action` at 9.46:1; the caption's colour is stated, because `--text-muted` would measure 3.91:1 on green.

### Banner

```html
<section aria-label="Overall rating" class="dr-balance dr-balance--banner" style="width:341px;max-width:100%">
  <span class="dr-rating-arc" aria-hidden="true"></span>
  <p class="dr-number">4.8</p>
</section>
```

`ratings`' overall score, centred, on green with `rating-pattern.png`, padding 20 / 16, radius 16. The star arc is one mask, 106.88 × 32, filled with `--on-action` and `aria-hidden`; the figure states the value at 9.46:1. There is no caption under the figure.

## States

No state of its own: the block shows a figure and the line that names it, and nothing in it takes focus.

## When to use

A balance block is the headline figure of a screen and the line that names it: the amount being paid on `payment`, the money available on `wallet` and `withdraw`, the balance below the minimum on `wallet-empty`, the overall rating on `ratings`. It replaces the grayscale `.amount` at 34/600, a size outside the ten steps and an ink outside the palette. A balance is the definition of a figure the user verifies, so it is always `.dr-number`, tabular.

The two filled versions are green cards that sit in the page like any other card, with no shadow. Their cost is recorded: on `wallet` the card alone is 8.82% of the frame and, with the [floating action](floating-action.html), the screen's solid green reaches 11.32% against the ~5% ceiling, a departure the designer was shown and kept. The patterns are the product's one decoration, taken on her word.

The caption names what the figure is, in the user's words: *Available to withdraw*, the service and route on `payment`. Money out is *Withdraw*; a figure is stated, never celebrated.

Sources: DESIGN.md § The balance card · § The balance block · inventory.md § 1 (Balance block) · ui/kit.html § Balance block · microcopy.md § wallet

## Rule

```html
<section class="dr-balance" aria-label="Amount" style="width:341px;max-width:100%">
  <p class="dr-number">&#8372;650</p>
  <p class="dr-note dr-note--flush">Inspection · Hlevakha, field 3</p>
</section>
```

One block at the head of the screen whose job is that figure, with a caption that says what it is for.

## Anti-rule

```html
<div style="display:flex;flex-direction:column;gap:8px;width:341px;max-width:100%">
<section class="dr-balance dr-balance--card" aria-label="Balance"><div class="dr-balance__body"><p class="dr-number">&#8372;3,240</p><p class="dr-note dr-note--flush">Available to withdraw</p></div></section>
<section class="dr-balance dr-balance--card" aria-label="Paid this week"><div class="dr-balance__body"><p class="dr-number">&#8372;1,180</p><p class="dr-note dr-note--flush">Paid this week</p></div></section>
</div>
```

Two green cards on one screen double the green and leave no single headline. A screen has one balance block. Supporting amounts, a price broken into parts or a list of payouts belong in [money rows](money-rows.html) or a [row panel](row-panel.html).
