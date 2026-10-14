---
name: Earned score
slug: earned-score
group: Surfaces
order: 220
classes: .dr-listing__score
file: card.css
inventory: (.dr-listing__score, .dr-stars)
kit: 2019
---

## Anatomy

```html
<article class="dr-card dr-card--row" style="width:341px;max-width:100%">
  <div class="dr-listing__body">
    <span class="dr-listing__name">Olena H.<span class="dr-listing__score">· 5.0</span></span>
    <p class="dr-listing__desc">“Fast and careful — package arrived sealed and on time.”</p>
    <span class="dr-listing__meta"><span class="dr-chip">Package delivery</span><span class="dr-chip">Today</span></span>
  </div>
</article>
```

- `.dr-listing__name` — The name the score belongs to; the score rides inside it, on its line.
- `.dr-listing__score` — The suffix: 12.5/400 in `--text-muted`, 5.95:1 on the card, tabular figures, 8 from the name.
- `.dr-listing__meta` — The review's service and date, as chips under the quote.

## Variants

### Inline suffix

```html
<span class="dr-listing__name">Olena H.<span class="dr-listing__score">· 5.0</span></span>
```

The only variant in `components/`. One screen builds it: `ratings`, on all three review cards. A long name pushes the number along instead of colliding with it, and a card with no score leaves no empty slot.

## When to use

The earned score is a score somebody else gave, not a score being given. On `ratings` it sits beside each reviewer's name as `· 5.0`, written as a number rather than drawn as stars, so it cannot be read as a control. `.dr-rating` is an input: five buttons, each a 44pt target with `aria-pressed`, for `rate`, where the client awards a score. A display must not be a row of buttons announcing a pressed state it cannot change (`WCAG 4.1.2`), nor put five stops in a dashboard's tab order.

The read-only star row DESIGN.md names `.dr-stars` is not declared in `components/`. The overall rating on `ratings` is drawn instead by the [balance block](balance-block.html#variant-banner): the `.dr-rating-arc` mask over the figure, `aria-hidden`, with the figure stating the value.

The value is written with one decimal and a middle dot, *· 4.0*, never as a sentence and never with a star glyph the user might tap.

Sources: DESIGN.md § The earned score · inventory.md § 1 · ui/kit.html § Earned score

## Rule

```html
<article class="dr-card dr-card--row" style="width:341px;max-width:100%">
  <div class="dr-listing__body">
    <span class="dr-listing__name">Andriy P.<span class="dr-listing__score">· 4.0</span></span>
    <p class="dr-listing__desc">“Good shots overall, a couple came out a bit dark.”</p>
    <span class="dr-listing__meta"><span class="dr-chip">Photo &amp; video</span><span class="dr-chip">Yesterday</span></span>
  </div>
</article>
```

A review card on `ratings`: the score as a muted suffix on the reviewer's name, the review under it.

## Anti-rule

```html
<div class="dr-rating" role="group" aria-label="Rating" style="width:341px;max-width:100%">
  <button class="dr-star" aria-pressed="true" type="button" aria-label="1 star"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  <button class="dr-star" aria-pressed="true" type="button" aria-label="2 stars"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  <button class="dr-star" aria-pressed="true" type="button" aria-label="3 stars"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  <button class="dr-star" aria-pressed="true" type="button" aria-label="4 stars"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  <button class="dr-star" aria-pressed="false" type="button" aria-label="5 stars"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
</div>
```

The [rating input](rating-input.html) used to show a score already given: five buttons announcing a pressed state the reader cannot change. Show a received score as `.dr-listing__score`, or as the figure of a [balance block](balance-block.html) when it is the screen's headline.
