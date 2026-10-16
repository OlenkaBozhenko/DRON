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
<div class="dr-rows dr-rows--card" style="width:341px;max-width:100%"><div class="dr-field"><label class="dr-field__label" for="field-name">Full name</label><span class="dr-field__group"><input class="dr-field__input" id="field-name" name="name" value="Olena B."></span></div><div class="dr-field"><label class="dr-field__label" for="field-phone">Phone</label><span class="dr-field__group"><input class="dr-field__input" id="field-phone" name="phone" type="tel" value="+380 67 000 4417"></span></div><div class="dr-field"><label class="dr-field__label" for="field-addr">Saved address</label><span class="dr-field__group"><input class="dr-field__input" id="field-addr" name="addr" value="Podil, 21"></span></div></div>
```

- `.dr-rows--card` — The group. A `--card` ground at radius 16, padding 8 top and bottom; the hairline between rows is inset 16 at both ends.
- `.dr-field` — One row: `min-height` 44, padding 0 16, no border. The row, not the input, is the target.
- `.dr-field__label` — The key, `--slate` 15/400, 5.95:1 on the card. The column is sized by the widest key in the group, floored at 96, with a 10 gap.
- `.dr-field__group` — The box the input is measured in, so the input fills the row's second column.
- `.dr-field__input` — The typed value, `--ink` 15/400, 14.37:1 on the card. No border. Focused, a phone shows the caret only, as iOS does; with a mouse a card holding this one field takes a 2.5px `--slate` ring on its own edge, 5.95:1, as a Mac does. The caret is declared `--ink`.

## Variants

### Grouped card

```html
<div class="dr-rows dr-rows--card" style="width:341px;max-width:100%"><div class="dr-field"><label class="dr-field__label" for="field-wd-amount">Amount</label><span class="dr-field__group"><input class="dr-field__input" id="field-wd-amount" name="amount" type="text" inputmode="numeric" value="&#8372;1,500"></span></div></div>
```

`.dr-rows--card` opts an input group back onto the card. It stands on 5 screens: `account-edit` (Personal, and the *Add card* drawer), `payment`, `payment-aerial`, `payment-inspection` (the card form) and `withdraw` (*Amount*, from this screen).

### Plain list

```html
<div class="dr-rows" style="width:341px;max-width:100%"><div class="dr-field"><label class="dr-field__label" for="field-pk">Pickup address:</label><span class="dr-field__group"><input class="dr-field__input" id="field-pk" value="Podil — Naberezhno-Khreshchatytska St, 21"></span></div><div class="dr-field"><label class="dr-field__label" for="field-dp">Drop-off address:</label><span class="dr-field__group"><input class="dr-field__input" id="field-dp" value="Osokorky — Dniprovska Naberezhna, 14"></span></div></div>
```

The default input group: no card, no radius, no side padding, the hairline kept and run to both edges. Typed `--ink` on the page is 15.99:1; the label and the placeholder are `--slate` at 6.62:1, above `WCAG 1.4.3`'s 4.5:1. From `order-setup`; it also stands on `order-setup-aerial`, `order-setup-inspection`, `order-setup-error`, `operator-profile-setup` and `operator-verification`.

### Hint and error

```html
<div class="dr-rows" style="width:341px;max-width:100%"><div class="dr-field"><label class="dr-field__label" for="field-dp-err">Drop-off address:</label><span class="dr-field__group"><input class="dr-field__input" id="field-dp-err" value="Irpin — Sadova St, 3"></span><span class="dr-field__hint"><b>Outside the service zone.</b> DRON delivers within Kyiv city — enter an address in the city.</span></div></div>
```

`.dr-field__hint` takes the full row under the input, 12/400 `--slate` with 9 below it. An error is the same line, led by the fact in bold and followed by what to do; words carry it, never a boundary alone. From `order-setup-error`, the one screen that builds an error hint on a typed field.

### Search

```html
<div style="width:341px;max-width:100%"><span class="dr-search"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg><input type="text" placeholder="Search address" autocomplete="street-address" aria-label="Pickup address"></span></div>
```

The one field with a ground of its own: `--media` at radius 10, `min-height` 44, padding 0 12, a 16px glyph 8 before the input. Glyph and placeholder 5.51:1, value 13.33:1. The address search in the pickup and drop-off drawer on `listings`, `listings-error`, `listings-filters` and `listings-loading`; the input is named by the drawer's title.

### Message row

```html
<div class="dr-search-row" style="width:341px;max-width:100%"><label class="dr-search"><span class="dr-sr">Message</span><input type="text" placeholder="Message"></label><button class="dr-btn dr-btn--primary dr-btn--icon" type="button" aria-label="Send message"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19.5V5"/><path d="M5.5 11.5L12 5l6.5 6.5"/></svg></button></div>
```

`.dr-search-row` puts the same field beside a 44 icon button, 8 apart. It has no glyph, and its name is a hidden *Message* label. The composer on `chat`, `chat-aerial`, `chat-client` and `chat-inspection`.

## States

```html
<div style="display:grid;gap:8px;width:341px;max-width:100%">
  <div class="dr-rows dr-rows--card"><div class="dr-field"><label class="dr-field__label" for="field-st-amount">Amount</label><span class="dr-field__group"><input class="dr-field__input" id="field-st-amount" name="amount" type="text" inputmode="numeric" value="&#8372;1,500"></span></div></div>
  <span class="dr-search"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg><input type="text" placeholder="Search address" autocomplete="street-address" aria-label="Pickup address"></span>
</div>
```

From `withdraw` and `listings`.

## When to use

A field is the row that accepts typing. It has never had a border: what separates it is the hairline between rows and, where the group keeps one, the card. iOS ships two form styles and the product uses both, keyed by what the panel holds. A group that composes something (`order-setup`, `operator-profile-setup`, `operator-verification`) is a plain list. A group that configures or pays (`account-edit`, `payment`, `withdraw`) keeps its card. Every row holds 44, so `HIG · 44pt` and `WCAG 2.5.8` are met by the row.

The label says *what* to enter, as the dictionary noun: *Drop-off address*, not *Address 2*. The screens write it two ways: four files end the label with a colon (`order-setup`, `order-setup-aerial`, `order-setup-inspection`, `order-setup-error`: *Pickup address:*, *Location:*), and seven files do not (`account-edit`, `payment`, `payment-aerial`, `payment-inspection`, `operator-profile-setup`, `operator-verification`, `withdraw`). The hint or placeholder says *how*, by a real example: *e.g. UA-CAA-102938*. It never repeats the label. A validation error names exactly what to fix and states the fact without blaming the user: *Outside the service zone. DRON delivers within Kyiv city — enter an address in the city.* Never *Invalid input*.

Sources: DESIGN.md § Form rows — two panels, not one · § Text areas (the focus rule) · voice.md § Microcopy — rules by element type · inventory.md § 1.5

## Rule

```html
<div class="dr-rows" style="width:341px;max-width:100%"><div class="dr-field"><label class="dr-field__label" for="field-r-pk">Pickup address:</label><span class="dr-field__group"><input class="dr-field__input" id="field-r-pk" value="Podil — Naberezhno-Khreshchatytska St, 21"></span></div><div class="dr-field"><label class="dr-field__label" for="field-r-dp">Drop-off address:</label><span class="dr-field__group"><input class="dr-field__input" id="field-r-dp" value="Osokorky — Dniprovska Naberezhna, 14"></span></div></div>
```

`order-setup`'s address group: two typed values in a plain list, each with a visible label tied to its input by `for`.

## Anti-rule

```html
<div class="dr-rows" style="width:341px;max-width:100%"><div class="dr-field"><label class="dr-field__label" for="field-f-size">Parcel size</label><span class="dr-field__group"><input class="dr-field__input" id="field-f-size" placeholder="Small, medium or large"></span></div></div>
```

A value from a fixed list typed by hand. Where the answer is one of a known set, use a [picker row](picker-row.html), which opens the list in a drawer: *Parcel size* on `order-setup` is one. For several lines of prose use a [text area](text-area.html), and for an on/off setting use a [switch](switch.html).
