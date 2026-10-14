---
name: Picker row
slug: picker-row
group: Forms
order: 60
classes: .dr-field--action · __label · __value · __chev · .dr-picker__list · .dr-picker__item · .dr-picker__label · .dr-sheet--picker
file: form.css
inventory: Picker row; Input · select
kit: 2884
---

## Anatomy

```html
<div class="dr-rows" style="width:341px;max-width:100%"><button class="dr-field dr-field--action" type="button" aria-haspopup="dialog" aria-expanded="false"><span class="dr-field__label">Payment method</span><span class="dr-field__value">Visa •••• 4921</span><span class="dr-field__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span></button></div>
```

- `.dr-field--action` — The row, a real `<button>` with `aria-haspopup="dialog"` and `aria-expanded`. 44 tall, `flex-wrap: nowrap`, so a long value takes the ellipsis instead of a second line.
- `.dr-field__label` — The key, `--slate` 6.62:1, in the group's label column.
- `.dr-field__value` — The chosen value, `--ink` 15/600, 15.99:1. It reads from its left edge, level with a typed value.
- `.dr-field__chev` — `chevron.forward`, 16px `--slate`, in a track of its own, flush with the trailing edge. Never a down arrow: the list arrives from elsewhere.

## Variants

### Row

```html
<div class="dr-rows" style="width:341px;max-width:100%"><button class="dr-field dr-field--action" type="button" aria-haspopup="dialog" aria-expanded="false"><span class="dr-field__label">Payment method</span><span class="dr-field__value">Visa •••• 4921</span><span class="dr-field__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span></button><button class="dr-field dr-field--action" type="button" aria-haspopup="dialog" aria-expanded="false"><span class="dr-field__label">Language</span><span class="dr-field__value">English</span><span class="dr-field__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span></button></div>
```

A group that holds only picker rows keeps its card; a group mixed with typed fields is a plain list. The chevron sits 16 from the card edge, or flush in a plain list.

### Options in the drawer

```html
<div style="width:341px;max-width:100%;background:var(--bg-page);border-radius:22px 22px 0 0;box-shadow:var(--shadow-raised);padding:12px 16px 24px;display:flex;flex-direction:column;gap:12px"><span class="dr-sheet__grip" aria-hidden="true"></span><p class="dr-sheet__title">Payment method</p><div class="dr-picker__list"><button class="dr-picker__item" type="button" aria-current="true"><svg class="dr-paymark" viewBox="0 0 40 20" aria-hidden="true" focusable="false"><text x="0" y="14.8" textLength="30" lengthAdjust="spacingAndGlyphs" font-size="14" font-weight="700" font-style="italic" fill="#1434CB">VISA</text></svg><span class="dr-picker__label">Visa •••• 4921</span><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></button><button class="dr-picker__item" type="button"><svg class="dr-paymark" viewBox="0 0 40 20" aria-hidden="true" focusable="false"><svg x="0" y="4.5" width="8.95" height="11" viewBox="0 0 814 1000" preserveAspectRatio="xMidYMid meet"><path fill="#000" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg><text x="11.5" y="14.6" textLength="23" lengthAdjust="spacingAndGlyphs" font-size="13" font-weight="500" fill="#000">Pay</text></svg><span class="dr-picker__label">Apple Pay</span><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></button></div><button class="dr-btn dr-btn--secondary dr-btn--block" type="button">Cancel</button></div>
```

What the row opens. Options are `.dr-picker__item`, 44 × 341, `--ink` 14.37:1 on a `--card` list at radius 16. Every option holds the checkmark and only the current one shows it, with `aria-current="true"`. Payment options carry the brand mark in full colour, 40 × 20, with the name beside it.

## When to use

A picker row is a form row whose value is chosen, not typed. Where the list appears is a count: up to six options rise as a drawer from the bottom edge, and seven or more push a new screen in from the right. No list in the product reaches seven, so every picker is a drawer: payment (4) and language (2) on `account-edit`, parcel size (3) on `order-setup`, issue type (3) on `report-issue`, mode (2) on `account` and `operator-account`, and availability on `operator-listings`.

The drawer keeps the modal contract. Everything behind it is `inert`, Tab cycles inside it, and it closes three ways: Esc, the scrim, and *Cancel*, which `HIG · Action sheets` asks for by name. Each returns focus to the row, which by then shows the new value. An option is a `<button>` when it sets a value and an `<a>` when it is a route, like the mode picker's options.

The label is the dictionary noun for what is being set, and the value is the option's own words, so the row reads as a sentence: *Parcel size* · *Small — up to 2 kg*.

Sources: DESIGN.md § The picker row — a form row whose value is chosen, not typed · inventory.md § 1.5 · voice.md P4

## Rule

```html
<div class="dr-rows" style="width:341px;max-width:100%"><button class="dr-field dr-field--action" type="button" aria-haspopup="dialog" aria-expanded="false"><span class="dr-field__label">Parcel size</span><span class="dr-field__value">Small — up to 2 kg</span><span class="dr-field__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span></button></div>
```

`order-setup`'s parcel size: three fixed answers, so the row opens a drawer and the value is never typed.

## Anti-rule

```html
<div class="dr-rows" style="width:341px;max-width:100%"><button class="dr-field dr-field--action" type="button" aria-haspopup="dialog" aria-expanded="false"><span class="dr-field__label">Drop-off address</span><span class="dr-field__value">Choose</span><span class="dr-field__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span></button></div>
```

A picker row for an open answer. A value the user has to write is a [field](field.html). Two or three options that should all stay visible on the screen are [radios](checkbox-radio.html#variant-radio), and a choice that leaves the screen is a [choice card](choice-card.html).
