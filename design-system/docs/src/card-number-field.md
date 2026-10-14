---
name: Card number field
slug: card-number-field
group: Forms
order: 80
classes: .dr-field__marks · .dr-paymark--fit · .dr-field__group · .dr-sr
file: form.css
inventory: Card entry drawer (the card-number row)
kit: 1458
---

## Anatomy

```html
<div class="dr-field" style="width:341px;max-width:100%"><label class="dr-field__label" for="card-number-field-a">Card number</label><span class="dr-field__group"><input class="dr-field__input" id="card-number-field-a" type="text" inputmode="numeric" autocomplete="off" value="4921 1122 3344" aria-describedby="card-number-field-a-brands"><span class="dr-field__marks" aria-hidden="true"><svg class="dr-paymark dr-paymark--fit" viewBox="0 0 31 20" aria-hidden="true" focusable="false"><text x="0" y="14.8" textLength="30" lengthAdjust="spacingAndGlyphs" font-size="14" font-weight="700" font-style="italic" fill="#1434CB">VISA</text></svg><svg class="dr-paymark dr-paymark--fit" viewBox="0 0 21 20" aria-hidden="true" focusable="false"><circle cx="7" cy="10" r="7" fill="#EB001B"/><circle cx="14" cy="10" r="7" fill="#F79E1B"/><path d="M10.5 3.94a7 7 0 0 1 0 12.12 7 7 0 0 1 0-12.12Z" fill="#FF5F00"/></svg></span><span class="dr-sr" id="card-number-field-a-brands">Visa or Mastercard</span></span></div>
```

- `.dr-field__input` — The number, `inputmode="numeric"`, described by the accepted brands.
- `.dr-field__marks` — The marks at the row's trailing edge, 6 apart, `aria-hidden`.
- `.dr-paymark--fit` — One brand's artwork, viewBox cropped to the ink at 20 high: Visa 31 × 20, Mastercard 21 × 20. Full brand colour, a licensed exception to the palette.
- `.dr-sr` — *Visa or Mastercard* in words, because a logo is not an accessible name (`WCAG 1.1.1`).

## Variants

### Brand not yet known

```html
<div class="dr-field" style="width:341px;max-width:100%"><label class="dr-field__label" for="card-number-field-b">Card number</label><span class="dr-field__group"><input class="dr-field__input" id="card-number-field-b" type="text" inputmode="numeric" autocomplete="off" aria-describedby="card-number-field-b-brands"><span class="dr-field__marks" aria-hidden="true"><svg class="dr-paymark dr-paymark--fit" viewBox="0 0 31 20" aria-hidden="true" focusable="false"><text x="0" y="14.8" textLength="30" lengthAdjust="spacingAndGlyphs" font-size="14" font-weight="700" font-style="italic" fill="#1434CB">VISA</text></svg><svg class="dr-paymark dr-paymark--fit" viewBox="0 0 21 20" aria-hidden="true" focusable="false"><circle cx="7" cy="10" r="7" fill="#EB001B"/><circle cx="14" cy="10" r="7" fill="#F79E1B"/><path d="M10.5 3.94a7 7 0 0 1 0 12.12 7 7 0 0 1 0-12.12Z" fill="#FF5F00"/></svg></span><span class="dr-sr" id="card-number-field-b-brands">Visa or Mastercard</span></span></div>
```

Empty, or a prefix that is neither brand: both marks show. Beside both, a 16-digit number measured 157.34 against 139 and scrolled.

### Brand known

```html
<div class="dr-field" style="width:341px;max-width:100%"><label class="dr-field__label" for="card-number-field-c">Card number</label><span class="dr-field__group"><input class="dr-field__input" id="card-number-field-c" type="text" inputmode="numeric" autocomplete="off" value="4921 1122 3344 5566" aria-describedby="card-number-field-c-brands"><span class="dr-field__marks" aria-hidden="true"><svg class="dr-paymark dr-paymark--fit" viewBox="0 0 31 20" aria-hidden="true" focusable="false"><text x="0" y="14.8" textLength="30" lengthAdjust="spacingAndGlyphs" font-size="14" font-weight="700" font-style="italic" fill="#1434CB">VISA</text></svg><svg class="dr-paymark dr-paymark--fit" viewBox="0 0 21 20" aria-hidden="true" focusable="false" hidden><circle cx="7" cy="10" r="7" fill="#EB001B"/><circle cx="14" cy="10" r="7" fill="#F79E1B"/><path d="M10.5 3.94a7 7 0 0 1 0 12.12 7 7 0 0 1 0-12.12Z" fill="#FF5F00"/></svg></span><span class="dr-sr" id="card-number-field-c-brands">Visa or Mastercard</span></span></div>
```

Once the first digits decide (4 is Visa; 51–55 and 2221–2720 are Mastercard), the other mark takes `hidden`. The number then gets 166 (Visa) or 176 (Mastercard), with all 16 digits in view.

## When to use

The card number field is the one field with a brand on it. It is the first row of `account-edit`'s *Add card* drawer, above *Expiry* and *CVV*, opened from the payment method picker. The marks carry information there that no name beside them repeats, so they are hidden from assistive tech and the input is described by *Visa or Mastercard* in words. Only the two cards the product accepts are drawn.

The labels are the plain names a card carries: *Card number*, *Expiry*, *CVV*. Each input takes its `autocomplete` token (`cc-number`, `cc-exp`, `cc-csc`, `WCAG 1.3.5`) and the CVV is masked.

Sources: DESIGN.md § The picker row (the third rung, `.dr-paymark--fit`) · ui/kit.html § Card number field · inventory.md § 1.5

## Rule

```html
<div class="dr-rows dr-rows--card" style="width:341px;max-width:100%"><div class="dr-field"><label class="dr-field__label" for="card-number-field-d">Card number</label><span class="dr-field__group"><input class="dr-field__input" id="card-number-field-d" name="cc-number" type="text" inputmode="numeric" autocomplete="cc-number" aria-describedby="card-number-field-d-brands"><span class="dr-field__marks" aria-hidden="true"><svg class="dr-paymark dr-paymark--fit" viewBox="0 0 31 20" focusable="false" data-brand="visa"><text x="0" y="14.8" textLength="30" lengthAdjust="spacingAndGlyphs" font-size="14" font-weight="700" font-style="italic" fill="#1434CB">VISA</text></svg><svg class="dr-paymark dr-paymark--fit" viewBox="0 0 21 20" focusable="false" data-brand="mastercard"><circle cx="7" cy="10" r="7" fill="#EB001B"/><circle cx="14" cy="10" r="7" fill="#F79E1B"/><path d="M10.5 3.94a7 7 0 0 1 0 12.12 7 7 0 0 1 0-12.12Z" fill="#FF5F00"/></svg></span><span class="dr-sr" id="card-number-field-d-brands">Visa or Mastercard</span></span></div><div class="dr-field"><label class="dr-field__label" for="card-number-field-d-exp">Expiry</label><span class="dr-field__group"><input class="dr-field__input" id="card-number-field-d-exp" name="cc-exp" type="text" inputmode="numeric" autocomplete="cc-exp"></span></div><div class="dr-field"><label class="dr-field__label" for="card-number-field-d-csc">CVV</label><span class="dr-field__group"><input class="dr-field__input" id="card-number-field-d-csc" name="cc-csc" type="password" inputmode="numeric" autocomplete="cc-csc"></span></div></div>
```

The *Add card* group: the number row carries the marks, and the two rows under it are plain [fields](field.html).

## Anti-rule

```html
<div class="dr-field" style="width:341px;max-width:100%"><label class="dr-field__label" for="card-number-field-e">Expiry</label><span class="dr-field__group"><input class="dr-field__input" id="card-number-field-e" type="text" inputmode="numeric"><span class="dr-field__marks" aria-hidden="true"><svg class="dr-paymark dr-paymark--fit" viewBox="0 0 31 20" aria-hidden="true" focusable="false"><text x="0" y="14.8" textLength="30" lengthAdjust="spacingAndGlyphs" font-size="14" font-weight="700" font-style="italic" fill="#1434CB">VISA</text></svg></span></span></div>
```

Marks on a row that does not decide the brand. They belong on the number row only. A saved card is chosen, not typed, so it is a [picker row](picker-row.html) whose options carry the 40 × 20 mark. A payment route is a row in the [pay list](pay-list.html).
