---
name: Field
slug: field
group: Forms
order: 10
classes: .dr-field · __label · __group · __input · __value · __hint · .dr-rows--card · .dr-search · .dr-search-row
file: form.css
inventory: Form field; Input · select; Search row
kit: 2618
---

## Anatomy

```html
<div class="dr-rows dr-rows--card" style="width:341px;max-width:100%"><div class="dr-field"><label class="dr-field__label" for="field-a-name">Full name</label><span class="dr-field__group"><input class="dr-field__input" id="field-a-name" value="Olena B."></span></div><div class="dr-field"><label class="dr-field__label" for="field-a-phone">Phone</label><span class="dr-field__group"><input class="dr-field__input" id="field-a-phone" type="tel" value="+380 67 000 4417"></span></div></div>
```

- `.dr-rows--card` — The group. A `--card` ground at radius 16; the hairline between rows is inset 16 at both ends.
- `.dr-field` — One row: `min-height` 44, padding 0 16, no border. The row, not the input, is the target.
- `.dr-field__label` — The key, `--slate` 15/400, 5.95:1 on the card. The column is sized by the widest key in the group, floored at 96.
- `.dr-field__group` — The box the input is measured in, so the input fills the row's second column.
- `.dr-field__input` — The typed value, `--ink` 14.37:1 on the card. No border, no focus ring: the caret, declared `--ink`, carries `WCAG 2.4.7`.

## Variants

### Grouped card

```html
<div class="dr-rows dr-rows--card" style="width:341px;max-width:100%"><div class="dr-field"><label class="dr-field__label" for="field-b-name">Full name</label><span class="dr-field__group"><input class="dr-field__input" id="field-b-name" value="Olena B."></span></div></div>
```

`.dr-rows--card` opts one input group back onto the card. One user in the product: `account-edit`'s Personal group, the screen that configures rather than composes.

### Plain list

```html
<div class="dr-rows" style="width:341px;max-width:100%"><div class="dr-field"><label class="dr-field__label" for="field-c-pk">Pickup address</label><span class="dr-field__group"><input class="dr-field__input" id="field-c-pk" value="Podil — Naberezhno-Khreshchatytska St, 21"></span></div><label class="dr-field"><input class="dr-field__input" type="text" placeholder="Drop-off address" aria-label="Drop-off address"></label></div>
```

The default input group: no card, no radius, the hairline kept. Typed `--ink` on the page is 15.99:1; the placeholder stays `--slate` at 5.95:1, above `WCAG 1.4.3`'s 4.5:1.

### Hint and error

```html
<div class="dr-rows" style="width:341px;max-width:100%"><div class="dr-field"><label class="dr-field__label" for="field-d-dp">Drop-off address</label><span class="dr-field__group"><input class="dr-field__input" id="field-d-dp" value="Irpin — Sadova St, 3" aria-describedby="field-d-err"></span><span class="dr-field__hint" id="field-d-err"><b>Outside the service zone.</b> DRON delivers within Kyiv city — enter an address in the city.</span></div></div>
```

`.dr-field__hint` takes the full row under the input, 12/400 `--slate`. An error is the same line, led by the fact in bold and followed by what to do; words carry it, never a boundary alone.

### Search

```html
<div class="dr-search-row" style="width:341px;max-width:100%"><div class="dr-search" style="flex:1"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg><input type="search" placeholder="Search messages" aria-label="Search messages"></div></div>
```

The one field with a ground of its own: `--media` at radius 10, because it stands on the page in no grouped list. Glyph and placeholder 5.51:1, value 13.33:1.

## When to use

A field is the row that accepts typing. It has never had a border: what separates it is the hairline between rows and, where the group keeps one, the card. iOS ships two form styles and the product uses both, keyed by what the panel holds. A group that composes something (`order-setup`, `contact-support`, `rate`, `report-issue`) is a plain list. The one group that configures (`account-edit`'s Personal) keeps its card. Every row holds 44, so `HIG · 44pt` and `WCAG 2.5.8` are met by the row.

The label says *what* to enter, as the dictionary noun: *Drop-off address*, not *Address 2*. The hint says *how*, by a real example: *e.g. UA-CAA-102938*. It never repeats the label. A validation error names exactly what to fix and states the fact without blaming the user: *Outside the service zone. DRON delivers within Kyiv city — enter an address in the city.* Never *Invalid input*.

Sources: DESIGN.md § Form rows — two panels, not one · § Text areas (the focus rule) · voice.md § Microcopy — rules by element type · inventory.md § 1.5

## Rule

```html
<div class="dr-rows" style="width:341px;max-width:100%"><div class="dr-field"><label class="dr-field__label" for="field-e-pk">Pickup address</label><span class="dr-field__group"><input class="dr-field__input" id="field-e-pk" value="Podil — Naberezhno-Khreshchatytska St, 21"></span></div><div class="dr-field"><label class="dr-field__label" for="field-e-dp">Drop-off address</label><span class="dr-field__group"><input class="dr-field__input" id="field-e-dp" placeholder="Street and building"></span></div></div>
```

`order-setup`'s address group: two typed values in a plain list, each with a visible label tied to its input by `for`.

## Anti-rule

```html
<div class="dr-rows" style="width:341px;max-width:100%"><div class="dr-field"><label class="dr-field__label" for="field-f-size">Parcel size</label><span class="dr-field__group"><input class="dr-field__input" id="field-f-size" placeholder="Small, medium or large"></span></div></div>
```

A value from a fixed list typed by hand. Where the answer is one of a known set, use a [picker row](picker-row.html), which opens the list in a drawer. For several lines of prose use a [text area](text-area.html), and for an on/off setting use a [switch](switch.html).
