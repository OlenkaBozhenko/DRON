---
name: Place field and order window
slug: place-field
group: Wide screens
order: 10
classes: .dr-place · .dr-sheet__lead
file: place.css
inventory: (new, wide screens)
kit: —
---

## Anatomy

```html
<div style="width:360px;max-width:100%"><span class="dr-place"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>Podil — Naberezhno-Khreshchatytska St, 21</span></div>
```

- `.dr-place` — A pin and the address on `--bg-well`, 48 tall, read and not typed.

## Variants

### Phone

```html
<p class="dr-note">Not on the phone.</p>
```

The phone keeps its own home and tab bar; nothing here reaches it.

### The order window

```html
<div class="dr dr-screen" style="width:1024px;height:620px;max-width:none"><section class="dr-sheet dr-sheet--picker dr-material" id="sheet-order" role="dialog" aria-modal="true" aria-labelledby="sheet-order-title">
    <span class="dr-sheet__grip" aria-hidden="true"></span>
    <h2 class="dr-sheet__title" id="sheet-order-title">Package delivery</h2>
    <p class="dr-sheet__lead">Arrives in 6 min · the price is locked when you pay</p>
    <span class="dr-place"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>Podil — Naberezhno-Khreshchatytska St, 21</span>
    <span class="dr-place"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>Osokorky — Dniprovska Naberezhna, 14</span>
    <fieldset class="dr-offers" aria-labelledby="offers-title">
          <label class="dr-offer">
            <input type="radio" name="offer" value="2kg" checked class="sr-only">
            <span class="dr-well"><img src="../assets/drones/thumbs/drone-02.png" alt="" loading="lazy" decoding="async"></span>
            <span class="dr-offer__body">
              <span class="dr-offer__name">Up to 2 kg</span>
              <span class="dr-offer__meta">4 available · arrives in 6 min</span>
            </span>
            <span class="dr-offer__price">₴180</span>
          </label>
          <label class="dr-offer">
            <input type="radio" name="offer" value="5kg" class="sr-only">
            <span class="dr-well"><img src="../assets/drones/thumbs/drone-01.png" alt="" loading="lazy" decoding="async"></span>
            <span class="dr-offer__body">
              <span class="dr-offer__name">Up to 5 kg</span>
              <span class="dr-offer__meta">2 available · arrives in 9 min</span>
            </span>
            <span class="dr-offer__price">₴240</span>
          </label>
          <label class="dr-offer">
            <input type="radio" name="offer" value="10kg" class="sr-only">
            <span class="dr-well"><img src="../assets/drones/thumbs/drone-08.png" alt="" loading="lazy" decoding="async"></span>
            <span class="dr-offer__body">
              <span class="dr-offer__name">Up to 10 kg</span>
              <span class="dr-offer__meta">1 available · arrives in 14 min</span>
            </span>
            <span class="dr-offer__price">₴320</span>
          </label>
        </fieldset>
    <a class="dr-btn dr-btn--primary dr-btn--block" href="../../wireframes/order-review.html">Continue to pay · ₴180</a>
  </section></div>
```

On a wide screen the sheet is a centred dialog: the title, the lead line, the two places, the offers and *Continue to pay*.

## States

No state of its own: the window's controls (the offers, the button) take theirs.

## When to use

In the order window, to show where the order goes before it is paid.

Sources: responsive/width-audit.md § The order window leads to payment

## Rule

Show both places before the price.

## Anti-rule

Do not let the client type the address here; it is changed on Home or with the assistant.
