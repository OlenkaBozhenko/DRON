---
name: Toast
slug: toast
group: States
order: 50
classes: .dr-toast · .is-on · --over-sheet
file: toast.css
inventory: (.dr-toast)
kit: —
---

## Anatomy

```html
<div style="padding:8px 0"><div class="dr-toast is-on" role="status" style="position:static;animation:none">Link copied.</div></div>
```

- `.dr-toast` — The surface: a pill with 12 / 20 padding, body 14 at weight 600 and line 1.4, `--text-on-inverse` on `--bg-inverse` at 15.99:1. It floats, so it spends `--shadow-raised`.
- `.is-on` — The shown state: opacity 1, no offset. Without it the toast sits 8px low at opacity 0 and takes no clicks; the rise is 0.15s.
- `[role="status"]` — Announced without taking focus (`WCAG 4.1.3`). No screen writes this markup: the shell (`_wf-shell.js`) builds this one `div` the first time a `data-toast` control is tapped.

## Variants

### Over the screen

```html
<div style="position:relative;height:150px;width:341px;max-width:100%;border-radius:var(--len-22);overflow:hidden;background:var(--bg-page)">
  <div class="dr-toast is-on" role="status" style="animation:none">Issue marked resolved.</div>
</div>
```

The default. It floats 20px above whatever bottom chrome the screen has, set inline by the shell as the measured height of the action bar or tab bar plus 20, so the toast never covers the button that raised it.

### Over a sheet

```html
<div style="position:relative;height:250px;width:341px;max-width:100%;border-radius:var(--len-22);overflow:hidden;background:var(--bg-page)">
  <section class="dr-sheet" role="dialog" aria-label="Share DRON" style="animation:none">
    <span class="dr-sheet__grip" aria-hidden="true"></span>
    <button type="button" class="dr-btn dr-btn--primary dr-btn--block">Copy link</button>
    <div class="dr-toast dr-toast--over-sheet is-on" role="status" style="animation:none">Link copied.</div>
  </section>
</div>
```

`--over-sheet`: when the raising control sits inside a `[role="dialog"]`, the toast is parented inside that dialog and floats 12px above the sheet's top edge. Outside the dialog it would be hidden by `aria-modal` and announced to nobody. Measured on `share`: 125.55 × 43.60, exactly 12px above the sheet. On the screen the sheet also carries `aria-modal="true"`, left off this plate so the docs page stays readable to assistive technology.

## States

No state of its own: the toast announces through `role="status"` without taking focus, and it takes no clicks.

## When to use

A toast is a transient confirmation for an action that finishes on the screen you are standing on and leaves no other trace. It is the product's one inverted surface and one of two that float, with the [sheet](sheet.html). Any control carrying `data-toast` raises it; it dismisses itself after 4s and on click, and nothing depends on reading it in time (`WCAG 2.2.1`), because it states the action just taken. Three controls raise one today: *Copy link* on `share`, *Mark resolved* on `contact-support`, and *Notify me when available* on `order-setup-empty`.

State the fact; add a second sentence only when the user would otherwise have to come back and check. One toast, one function: two controls that do different things never say the same sentence. *Link copied.* · *Issue marked resolved.* · *Saved. We'll tell you when an operator is free.* Never *Copied!*, never *Done*, never *successfully*.

Sources: DESIGN.md § Toast · voice.md § Microcopy (Toast) · microcopy.md § the toast sweep · components/toast.css · wireframes/_wf-shell.js

## Rule

```html
<div style="padding:8px 0"><div class="dr-toast is-on" role="status" style="position:static;animation:none">Saved. We'll tell you when an operator is free.</div></div>
```

`order-setup-empty`: the request is stored and nothing else on the screen changes, so the toast is the only trace, and its second sentence spares the user a return visit.

## Anti-rule

```html
<div style="padding:8px 0"><div class="dr-toast is-on" role="status" style="position:static;animation:none">Payment declined. Try again.</div></div>
```

An error in a toast. An error is a state the user must be able to re-read, and a toast leaves after 4s. Use the [message block](message-block.html#variant-error). No toast either where the result is already on screen: a file in its upload well, a switch that moved, a screen that replaces this one.
