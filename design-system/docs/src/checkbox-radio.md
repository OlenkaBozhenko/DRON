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
<ul class="dr-picks" style="width:341px;max-width:100%"><li><label class="dr-pick"><span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span><span class="dr-pick__label">Instant to card &bull;&bull;&bull;&bull; 3318<span class="dr-pick__sub">Arrives in under a minute</span></span><input type="radio" name="checkbox-radio-payout" class="sr-only" checked></label></li><li><label class="dr-pick"><span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span><span class="dr-pick__label">Bank transfer<span class="dr-pick__sub">1&ndash;3 business days</span></span><input type="radio" name="checkbox-radio-payout" class="sr-only"></label></li></ul>
```

- `.dr-picks` — The panel: `--card` at radius 16, padding 16. Rows are separated by a full-width hairline.
- `.dr-pick` — The row, a `<label>` with `min-height` 44 and a 12 gap; padding 8 top and bottom, 12 when it carries a second line. The whole row is the target; the box does not have to be.
- `.dr-box` — The mark, 24 × 24, edge 1.7px `--ink`: the same line every glyph is drawn at. 14.37:1 on the card. It is `aria-hidden`; the real `<input>` sits after the label text, visually hidden with `.sr-only`.
- `.dr-pick__label` — The option's name, 15/400 `--ink`.
- `.dr-pick__sub` — An optional second line, 12.5 `--slate` (5.95:1 on the card), for the fact that decides the choice.

## Variants

### Checkbox

```html
<ul class="dr-picks" style="width:341px;max-width:100%"><li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Delivery</span><input type="checkbox" name="specialization" value="delivery" checked class="sr-only"></label></li><li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Photo &amp; video</span><input type="checkbox" name="specialization" value="aerial" checked class="sr-only"></label></li><li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Inspection</span><input type="checkbox" name="specialization" value="inspection" class="sr-only"></label></li></ul>
```

A square, corner 8: options independent of each other, several on at once. Checked is a green fill behind a charcoal check, 9.46:1. The check is a 14px glyph at the shared 1.7 stroke; unchecked it is drawn in `transparent`.

### Radio

```html
<div class="dr-picks" role="radiogroup" aria-label="Pick a time" style="width:341px;max-width:100%"><label class="dr-pick"><span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span><span class="dr-pick__label">Now</span><input type="radio" name="checkbox-radio-when" value="now" checked class="sr-only"></label><label class="dr-pick"><span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span><span class="dr-pick__label">At a set time</span><input type="radio" name="checkbox-radio-when" value="at" class="sr-only"></label></div>
```

A circle: one of a mutually exclusive set. Checked is a green disc carrying a 10px charcoal dot, 9.46:1. This is the *Pick a time* drawer on `listings`; the screen's *At a set time* row also holds the hour and minute selects of the [date picker](date-picker.html), trimmed here.

### Single checkbox

```html
<div style="width:341px;max-width:100%"><label class="dr-pick" style="border-radius:6px;"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Save this card for next time</span><input type="checkbox" name="save-card" class="sr-only"></label></div>
```

One `.dr-pick` on its own, with no panel: *Save this card for next time* in `payment`'s action bar, *Save this address for next time* on `order-setup`. The screens give the row an inline `border-radius:6px`.

## When to use

Shape says how many. A square is an independent on/off inside a list of several, and a circle is exactly one of a set. That is `HIG · Radio Buttons / Checkboxes` read directly, and it keeps one shape from meaning two functions (`WCAG 3.2.4`). The control is a real `<input>` inside the `<label>` that is the row, so the label is the accessible name. The focus ring is drawn on the box, 2.5px `--ink` at a 2px offset, keyboard only.

Checkboxes stand on 13 screens: `operator-profile-setup` (specializations), `order-setup-inspection` (what to inspect), the Filters drawer on `listings`, `listings-filters`, `listings-error` and `listings-loading` (drone type), `job-checklist` and `job-checklist-error` (the pre-flight list), and the single save rows on `order-setup`, `order-setup-aerial`, `order-setup-inspection`, `payment`, `payment-aerial` and `payment-inspection`. Radios stand on 5: `withdraw` (payout route) and the Time drawer on the four `listings` files. A checked box counts as a status mark on the green budget, like the walked progress node, and not as the screen's one green control.

The radio panel is built two ways. Four files (`listings`, `listings-error`, `listings-filters`, `listings-loading`) use a `<div class="dr-picks" role="radiogroup">` with the labels directly inside; one file (`withdraw`) uses a `<ul>` with each label in an `<li>`.

The label is the option's dictionary name. Where two options differ by what they cost in time or money, the second line says it as a fact: *Arrives in under a minute*, *1–3 business days*.

Sources: DESIGN.md § Selection controls (checkbox & radio) · inventory.md § 1.5 · voice.md P2, P3

## Rule

```html
<ul class="dr-picks" style="width:341px;max-width:100%"><li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Quadcopter</span><input type="checkbox" name="drone-type" value="quadcopter" class="sr-only"></label></li><li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Hexacopter</span><input type="checkbox" name="drone-type" value="hexacopter" checked class="sr-only"></label></li><li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">FPV</span><input type="checkbox" name="drone-type" value="fpv" class="sr-only"></label></li><li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Fixed-wing</span><input type="checkbox" name="drone-type" value="fixed-wing" class="sr-only"></label></li></ul>
```

`listings-filters`' drone type: several types can apply at once, so every row is a square, and nothing is committed until *Apply filters*.

## Anti-rule

```html
<ul class="dr-picks" style="width:341px;max-width:100%"><li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Instant to card &bull;&bull;&bull;&bull; 3318</span><input type="checkbox" class="sr-only" checked></label></li><li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Bank transfer</span><input type="checkbox" class="sr-only"></label></li></ul>
```

Squares on a choice where only one can be true. A withdrawal goes one way, so it is a radio. One setting that takes effect the moment it moves is a [switch](switch.html), and a choice that leaves the screen is a [choice card](choice-card.html).
