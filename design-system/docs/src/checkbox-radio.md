---
name: Checkbox and radio
slug: checkbox-radio
group: Forms
order: 30
classes: .dr-picks · .dr-pick · __label · __sub · .dr-box · --check · --radio · __dot
file: form.css
inventory: Checkbox; Radio
kit: 2670
---

## Anatomy

```html
<ul class="dr-picks" style="width:280px"><li><label class="dr-pick"><input type="radio" name="checkbox-radio-a" checked><span class="dr-box dr-box--radio"><i class="dr-box__dot"></i></span><span class="dr-pick__label">Instant to card •••• 3318<span class="dr-pick__sub">Arrives in under a minute</span></span></label></li><li><label class="dr-pick"><input type="radio" name="checkbox-radio-a"><span class="dr-box dr-box--radio"><i class="dr-box__dot"></i></span><span class="dr-pick__label">Bank transfer<span class="dr-pick__sub">1–3 business days</span></span></label></li></ul>
```

- `.dr-picks` — The panel: `--card` at radius 16, padding 16. Rows are separated by a hairline.
- `.dr-pick` — The row, a `<label>` with `min-height` 44. The whole row is the target; the box does not have to be.
- `.dr-box` — The mark, 24 × 24, edge 1.7px `--ink`: the same line every glyph is drawn at. 14.37:1 on the card.
- `.dr-pick__label` — The option's name, 15/400 `--ink`.
- `.dr-pick__sub` — An optional second line, 12.5 `--slate`, for the fact that decides the choice.

## Variants

### Checkbox

```html
<ul class="dr-picks" style="width:250px"><li><label class="dr-pick"><input type="checkbox" checked><span class="dr-box dr-box--check"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" stroke-width="2.5" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><span class="dr-pick__label">Delivery</span></label></li><li><label class="dr-pick"><input type="checkbox" checked><span class="dr-box dr-box--check"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" stroke-width="2.5" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><span class="dr-pick__label">Aerial photo &amp; video</span></label></li><li><label class="dr-pick"><input type="checkbox"><span class="dr-box dr-box--check"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" stroke-width="2.5" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><span class="dr-pick__label">Inspection</span></label></li></ul>
```

A square, corner 8: options independent of each other, several on at once. Checked is a green fill behind a charcoal check, 9.46:1.

### Radio

```html
<ul class="dr-picks" style="width:250px"><li><label class="dr-pick"><input type="radio" name="checkbox-radio-b" checked><span class="dr-box dr-box--radio"><i class="dr-box__dot"></i></span><span class="dr-pick__label">Now</span></label></li><li><label class="dr-pick"><input type="radio" name="checkbox-radio-b"><span class="dr-box dr-box--radio"><i class="dr-box__dot"></i></span><span class="dr-pick__label">At a set time</span></label></li></ul>
```

A circle: one of a mutually exclusive set. Checked is a green disc carrying a 10px charcoal dot, 9.46:1.

## When to use

Shape says how many. A square is an independent on/off inside a list of several, and a circle is exactly one of a set. That is `HIG · Radio Buttons / Checkboxes` read directly, and it keeps one shape from meaning two functions (`WCAG 3.2.4`). The control is a real `<input>` inside the `<label>` that is the row, so the label is the accessible name. The focus ring is drawn on the box, 2.5px `--ink`, keyboard only.

Checkboxes stand on `operator-profile-setup` (specializations) and `listings-filters` (drone type). Radios stand on `withdraw` (payout route) and the Time drawer on `listings`. A checked box counts as a status mark on the green budget, like the walked progress node, and not as the screen's one green control.

The label is the option's dictionary name. Where two options differ by what they cost in time or money, the second line says it as a fact: *Arrives in under a minute*, *1–3 business days*.

Sources: DESIGN.md § Selection controls (checkbox & radio) · inventory.md § 1.5 · voice.md P2, P3

## Rule

```html
<ul class="dr-picks" style="width:280px"><li><label class="dr-pick"><input type="checkbox"><span class="dr-box dr-box--check"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" stroke-width="2.5" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><span class="dr-pick__label">Quadcopter</span></label></li><li><label class="dr-pick"><input type="checkbox" checked><span class="dr-box dr-box--check"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" stroke-width="2.5" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><span class="dr-pick__label">Hexacopter</span></label></li><li><label class="dr-pick"><input type="checkbox"><span class="dr-box dr-box--check"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" stroke-width="2.5" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><span class="dr-pick__label">FPV</span></label></li></ul>
```

`listings-filters`' drone type: several types can apply at once, so every row is a square, and nothing is committed until *Apply filters*.

## Anti-rule

```html
<ul class="dr-picks" style="width:280px"><li><label class="dr-pick"><input type="checkbox" checked><span class="dr-box dr-box--check"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" stroke-width="2.5" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><span class="dr-pick__label">Instant to card •••• 3318</span></label></li><li><label class="dr-pick"><input type="checkbox"><span class="dr-box dr-box--check"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" stroke-width="2.5" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><span class="dr-pick__label">Bank transfer</span></label></li></ul>
```

Squares on a choice where only one can be true. A withdrawal goes one way, so it is a radio. One setting that takes effect the moment it moves is a [switch](switch.html), and a choice that leaves the screen is a [choice card](choice-card.html).
