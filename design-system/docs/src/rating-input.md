---
name: Rating input
slug: rating-input
group: Surfaces
order: 170
classes: .dr-rating · .dr-star · [data-on] · [aria-checked] · .dr-display--balance · .dr-center--tight
file: rating.css
inventory: (.dr-rating, .dr-star)
kit: 1720
---

## Anatomy

```html
<section aria-label="Rating" class="dr-center dr-center--tight" style="width:341px;max-width:100%">
  <p class="dr-display dr-display--balance">How would you rate this order?</p>
  <div class="dr-rating" role="radiogroup" aria-label="Rating">
    <button class="dr-star" role="radio" aria-checked="false" aria-label="1 star" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
    <button class="dr-star" role="radio" aria-checked="false" aria-label="2 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
    <button class="dr-star" role="radio" aria-checked="false" aria-label="3 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
    <button class="dr-star" role="radio" aria-checked="true" aria-label="4 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
    <button class="dr-star" role="radio" aria-checked="false" aria-label="5 stars"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  </div>
</section>
```

- `.dr-display--balance` — The question, 22/700 with balanced line breaks. `--tight` puts it 8 above the stars rather than the column's 12, because a heading and the control it names are one group.
- `.dr-rating` — `role="radiogroup"`, five stars 8 apart, centred.
- `.dr-star[aria-checked="true"]` — The value. It lands on one star: the star the user tapped.
- `.dr-star[data-on]` — The fill, which runs up to the value. `--color-rating` `#E4A11B` is 2.05:1 on the page, so it never carries the state alone. The radio state does.
- `.dr-star:not([data-on])` — An empty star: `--color-rating-empty`, grey, with no outline.
- `.dr-ic` — The star glyph, 32 inside a 44 target (`HIG · 44pt`). It is the one glyph in the system that fills instead of stroking, because a rating is a quantity, not an icon.

## Variants

### Four stars, as built

```html
<div class="dr dr-rating" role="radiogroup" aria-label="Rating" style="width:341px;max-width:100%">
  <button class="dr-star" role="radio" aria-checked="false" aria-label="1 star" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  <button class="dr-star" role="radio" aria-checked="false" aria-label="2 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  <button class="dr-star" role="radio" aria-checked="false" aria-label="3 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  <button class="dr-star" role="radio" aria-checked="true" aria-label="4 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  <button class="dr-star" role="radio" aria-checked="false" aria-label="5 stars"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
</div>
```

The one state every screen builds: the fourth star checked and the first four filled. `rate`, `rate-aerial` and `rate-inspection` carry the same group, byte for byte. The empty and five-star states are not built on any screen and `ui/kit.html` does not show them, so they have no block here.

## States

```html
<div class="dr dr-rating" role="radiogroup" aria-label="Rating" style="width:341px;max-width:100%">
  <button class="dr-star" role="radio" aria-checked="false" aria-label="1 star" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  <button class="dr-star" role="radio" aria-checked="false" aria-label="2 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  <button class="dr-star" role="radio" aria-checked="false" aria-label="3 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  <button class="dr-star" role="radio" aria-checked="true" aria-label="4 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  <button class="dr-star" role="radio" aria-checked="false" aria-label="5 stars"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
</div>
```

The five stars as `rate` builds them, the fourth checked.

## When to use

The rating input stands on one screen, `rate`, in 3 files: `rate`, `rate-aerial` and `rate-inspection`. It is the only place in the product where a score is *given* rather than reported. It is an input: five real buttons in a radio group, each a 44pt target with an accessible name. The radio group replaced five `aria-pressed` toggles, which described one rating as five independent switches (`WCAG 4.1.2`).

A score that is only read, such as an operator's 4.9 on a card, must not be a row of buttons announcing a state it cannot change. That is the [earned score](earned-score.html), which writes the value as a number and puts no stops in the tab order. On `rate` the pair of question and stars sits 8 apart, and `.dr-main--zones` puts 24 around the pair (see [screen layout](screen-layout.html)).

The question names the order, not the drone: *How would you rate this order?* The stars are named *1 star* to *5 stars*. Under them comes an optional review field. The action bar holds *Submit review*, the screen's one green control, on top, and *Book again*, a secondary, under it.

Sources: DESIGN.md § The earned score (Why not `.dr-rating`) · § Neutral (rating colour) · components/rating.css · microcopy.md § rate · ui/kit.html § Rating input

## Rule

```html
<div class="dr" style="display:flex;flex-direction:column;gap:24px;width:341px;max-width:100%">
  <section aria-label="Rating" class="dr-center dr-center--tight">
    <p class="dr-display dr-display--balance">How would you rate this order?</p>
    <div class="dr-rating" role="radiogroup" aria-label="Rating">
      <button class="dr-star" role="radio" aria-checked="false" aria-label="1 star" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
      <button class="dr-star" role="radio" aria-checked="false" aria-label="2 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
      <button class="dr-star" role="radio" aria-checked="false" aria-label="3 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
      <button class="dr-star" role="radio" aria-checked="true" aria-label="4 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
      <button class="dr-star" role="radio" aria-checked="false" aria-label="5 stars"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
    </div>
  </section>
  <footer class="dr-actionbar" style="position:static">
    <a class="dr-btn dr-btn--primary dr-btn--block" href="#">Submit review</a>
    <a class="dr-btn dr-btn--secondary dr-btn--block" href="#">Book again</a>
  </footer>
</div>
```

The client gives a score after the order is complete: a question, five stars, and *Submit review* as the commit, over *Book again*. This is `rate`, with the review field between them left out.

## Anti-rule

```html
<div class="dr dr-rating" role="radiogroup" aria-label="Ivan K. rating" style="width:341px;max-width:100%">
  <button class="dr-star" role="radio" aria-checked="false" aria-label="1 star" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  <button class="dr-star" role="radio" aria-checked="false" aria-label="2 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  <button class="dr-star" role="radio" aria-checked="false" aria-label="3 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  <button class="dr-star" role="radio" aria-checked="false" aria-label="4 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  <button class="dr-star" role="radio" aria-checked="true" aria-label="5 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
</div>
```

An operator's score shown to a client as five tappable buttons. A score the reader cannot change is not an input. It would put five stops in the tab order and announce a choice that does not exist (`WCAG 4.1.2`). Use the [earned score](earned-score.html).
