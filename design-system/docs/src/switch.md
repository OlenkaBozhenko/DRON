---
name: Switch
slug: switch
group: Forms
order: 40
classes: .dr-field--toggle · .dr-switch · __knob
file: form.css
inventory: Switch
kit: 2706
---

## Anatomy

```html
<div class="dr-rows dr-rows--card" style="width:341px;max-width:100%"><label class="dr-field dr-field--toggle"><span class="dr-field__label">Order updates</span><input type="checkbox" role="switch" checked><span class="dr-switch" aria-hidden="true"><span class="dr-switch__knob"></span></span></label></div>
```

- `.dr-field--toggle` — The row, a `<label>` holding a real `<input type="checkbox" role="switch">`. The row is the target: 326.2 × 44 on the 375 frame.
- `.dr-field__label` — The setting's name in `--ink`, and the accessible name.
- `.dr-switch` — The track, 36 × 22, no ring. Green when on, `--btn2` when off.
- `.dr-switch__knob` — The knob, 18 × 18. It carries `WCAG 1.4.11`: 9.46:1 on, 11.54:1 off. It travels 14px.

## Variants

### On and off

```html
<div class="dr-rows dr-rows--card" style="width:341px;max-width:100%"><label class="dr-field dr-field--toggle"><span class="dr-field__label">Operator on the way</span><input type="checkbox" role="switch" checked><span class="dr-switch" aria-hidden="true"><span class="dr-switch__knob"></span></span></label><label class="dr-field dr-field--toggle"><span class="dr-field__label">Offers and news</span><input type="checkbox" role="switch"><span class="dr-switch" aria-hidden="true"><span class="dr-switch__knob"></span></span></label></div>
```

State is the knob's position as well as the fill (`WCAG 1.4.1`): the two tracks are only 1.22:1 apart. One size is declared, 36 × 22, a departure from iOS's 51 × 31 recorded with its reason; the 44pt target is the row.

## When to use

A switch is one independent setting, on or off, that takes effect the moment it moves. There is no separate Save. Where a checkbox sits in a list of several, a switch sits alone on its own row. It stands on `account-edit`, in the Notifications card (*Order updates*, *Operator on the way*, *Offers and news*, *Push*, *SMS*) and the Appearance card (*Dark theme*). It announces "on" and "off" rather than "checked" (`WCAG 4.1.2`). Motion is `--dur-fast` on `transform`, off under reduced motion.

The label names the setting, not the action: *Order updates*, never *Turn on order updates*. A moved switch is its own confirmation, so it never raises a toast. On the green budget a switch counts as a status mark, not as the screen's one green control.

Sources: DESIGN.md § Switch (`.dr-switch`) · voice.md § Microcopy — rules by element type (Toast) · inventory.md § 1.5

## Rule

```html
<div class="dr-rows dr-rows--card" style="width:341px;max-width:100%"><label class="dr-field dr-field--toggle"><span class="dr-field__label">Push</span><input type="checkbox" role="switch" checked><span class="dr-switch" aria-hidden="true"><span class="dr-switch__knob"></span></span></label><label class="dr-field dr-field--toggle"><span class="dr-field__label">SMS</span><input type="checkbox" role="switch"><span class="dr-switch" aria-hidden="true"><span class="dr-switch__knob"></span></span></label></div>
```

`account-edit`'s channels: each one is a separate setting that applies on the tap, one per row.

## Anti-rule

```html
<div class="dr-rows dr-rows--card" style="width:341px;max-width:100%"><label class="dr-field dr-field--toggle"><span class="dr-field__label">Save this card for next time</span><input type="checkbox" role="switch"><span class="dr-switch" aria-hidden="true"><span class="dr-switch__knob"></span></span></label></div>
```

A switch inside a form that commits later. *Save this card for next time* sits above *Pay* and changes nothing until then, so it is a [checkbox](checkbox-radio.html#variant-checkbox). A choice of one value from several is a [radio](checkbox-radio.html#variant-radio) or a [picker row](picker-row.html).
