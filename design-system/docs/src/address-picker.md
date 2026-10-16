---
name: Address picker
slug: address-picker
group: Surfaces
order: 110
classes: .dr-sheet--steady · .dr-search · .dr-picker__list · __item · __lead · __label · __sub
file: sheet.css
inventory: Address drawer
kit: 2151
---

## Anatomy

```html
<section class="dr dr-sheet dr-sheet--picker dr-sheet--steady" role="dialog"
         aria-modal="true" aria-labelledby="ap1-title" style="animation:none;position:static;min-height:460px;width:375px;max-width:100%">
  <span class="dr-sheet__grip" aria-hidden="true"></span>
  <p class="dr-sheet__title" id="ap1-title">Pickup address</p>
  <span class="dr-search">
    <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg><input type="text" placeholder="Search address" autocomplete="street-address" aria-labelledby="ap1-title">
  </span>
  <div class="dr-picker__list">
    <button class="dr-picker__item" type="button">
      <svg class="dr-ic dr-picker__lead" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 4.5L4.5 11l6.4 2.1 2.1 6.4z"/></svg>
      <span class="dr-picker__label">Use my location</span>
    </button>
    <button class="dr-picker__item" type="button">
      <svg class="dr-ic dr-picker__lead" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11L12 4.5l7.5 6.5"/><path d="M6.5 9.3v10.2h11V9.3"/><path d="M10.2 19.5v-4.8h3.6v4.8"/></svg>
      <span class="dr-picker__label">Podil, 21 <span class="dr-picker__sub">Saved address</span></span>
    </button>
    <button class="dr-picker__item" type="button">
      <svg class="dr-ic dr-picker__lead" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>
      <span class="dr-picker__label">Osokorky, 14 <span class="dr-picker__sub">Recent</span></span>
    </button>
  </div>
  <p class="sr-only" role="status"></p>

  <div class="dr-sheet__actions">
    <button class="dr-btn dr-btn--primary" type="button">Done</button>
    <button class="dr-btn dr-btn--secondary" type="button">Cancel</button>
  </div>
</section>
```

- `.dr-sheet__title` — Named after the row that opened the sheet: *Pickup address*, *Drop-off address* or *Address*.
- `.dr-search` — The field, 341 × 44, radius 10. Typed text is 15px `--text-primary` on `--bg-well`, 13.33:1; the placeholder *Search address* is `--text-muted`, 5.51:1. The field has no label of its own: it is named by the sheet's title (`aria-labelledby`). It opens holding the row's current address and takes focus, so the keyboard rises and the sheet rides on it.
- `.dr-picker__lead` — A 20px leading glyph in `--text-muted` on the `--bg-surface` list, 5.95:1, 12px before the label. It is the one place a picker row shows a `.dr-ic` other than the current-item tick. It is `aria-hidden` and never carries meaning on its own.
- `.dr-picker__sub` — The sub-line, 12.5/400 in `--text-muted`, 5.95:1. It says in words what the glyph shows.
- `.dr-sheet__actions` — *Done* over *Cancel*, 341 × 44 each. With `--steady` they take `margin-top: auto` and stay on the floor of the sheet.

## Variants

### One-line row

```html
<div class="dr-picker__list" style="width:341px;max-width:100%"><button class="dr-picker__item" type="button"><svg class="dr-ic dr-picker__lead" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 4.5L4.5 11l6.4 2.1 2.1 6.4z"/></svg><span class="dr-picker__label">Use my location</span></button></div>
```

A lead and a label, 44 tall. *Use my location* is always the first row and is never filtered out.

### Two-line row

```html
<div class="dr-picker__list" style="width:341px;max-width:100%"><button class="dr-picker__item" type="button"><svg class="dr-ic dr-picker__lead" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11L12 4.5l7.5 6.5"/><path d="M6.5 9.3v10.2h11V9.3"/><path d="M10.2 19.5v-4.8h3.6v4.8"/></svg><span class="dr-picker__label">Podil, 21 <span class="dr-picker__sub">Saved address</span></span></button></div>
```

`.dr-picker__item:has(.dr-picker__sub)` pads to 12 top and bottom, so the row measures 58. It clears `HIG · 44pt` the same way a one-line row does.

### Steady, list narrowed

```html
<section class="dr dr-sheet dr-sheet--picker dr-sheet--steady" role="dialog"
         aria-modal="true" aria-labelledby="ap2-title" style="animation:none;position:static;min-height:460px;width:375px;max-width:100%">
  <span class="dr-sheet__grip" aria-hidden="true"></span>
  <p class="dr-sheet__title" id="ap2-title">Pickup address</p>
  <span class="dr-search">
    <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg><input type="text" placeholder="Search address" autocomplete="street-address" aria-labelledby="ap2-title" value="Osok">
  </span>
  <div class="dr-picker__list">
    <button class="dr-picker__item" type="button">
      <svg class="dr-ic dr-picker__lead" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 4.5L4.5 11l6.4 2.1 2.1 6.4z"/></svg>
      <span class="dr-picker__label">Use my location</span>
    </button>
    <button class="dr-picker__item" type="button" hidden>
      <svg class="dr-ic dr-picker__lead" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11L12 4.5l7.5 6.5"/><path d="M6.5 9.3v10.2h11V9.3"/><path d="M10.2 19.5v-4.8h3.6v4.8"/></svg>
      <span class="dr-picker__label">Podil, 21 <span class="dr-picker__sub">Saved address</span></span>
    </button>
    <button class="dr-picker__item" type="button">
      <svg class="dr-ic dr-picker__lead" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>
      <span class="dr-picker__label">Osokorky, 14 <span class="dr-picker__sub">Recent</span></span>
    </button>
  </div>
  <p class="sr-only" role="status">1 address</p>

  <div class="dr-sheet__actions">
    <button class="dr-btn dr-btn--primary" type="button">Done</button>
    <button class="dr-btn dr-btn--secondary" type="button">Cancel</button>
  </div>
</section>
```

Typing narrows the list by word prefix and hides rows with `[hidden]`. The page pins the sheet's `min-height` to the height it opened at, so the title, the field and both buttons do not move under the thumb. The number of rows left is announced through an `sr-only` line with `role="status"`: *1 address*, *2 addresses* or *No matching address*. *Use my location* is never hidden.

## States

```html
<div class="dr-picker__list" style="width:341px;max-width:100%"><button class="dr-picker__item" type="button"><svg class="dr-ic dr-picker__lead" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 4.5L4.5 11l6.4 2.1 2.1 6.4z"/></svg><span class="dr-picker__label">Use my location</span></button><button class="dr-picker__item" type="button"><svg class="dr-ic dr-picker__lead" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11L12 4.5l7.5 6.5"/><path d="M6.5 9.3v10.2h11V9.3"/><path d="M10.2 19.5v-4.8h3.6v4.8"/></svg><span class="dr-picker__label">Podil, 21 <span class="dr-picker__sub">Saved address</span></span></button></div>
```

Two rows of the list, from the *Pickup address* sheet on `listings`. The sheet's *Done* and *Cancel* take the [button](button.html#s-states) states.

## When to use

The address picker is the sheet where an address is typed or chosen. One sheet serves *From*, *To* and *Where* on the [finder](finder.html). A tap on a route row opens it, never focus on the row. With the keyboard up at the 375 frame it measures 412.8 tall, top at 63.2, bottom on the keyboard's 476, overlap 0. *Done* is 4.93% of the frame, the only green above the scrim.

A tapped row is taken at once. *Done* takes what was typed. *Cancel*, the scrim and Escape change nothing. A tap does not move focus off the field, so the keyboard stays up until the tap lands.

The first row uses the user's words, *Use my location*, not GPS or geolocation (voice P4). Addresses are written in the product's short form, *Podil, 21*, and the sub-line says why a row is there: *Saved address*, *Recent*. The status line counts results, *1 address*, *2 addresses* or *No matching address*, and does not count *Use my location*.

Sources: DESIGN.md § The search home (Address drawer) · inventory.md § 1 Address drawer · microcopy.md § listings, Address drawer · voice.md P4 · ui/kit.html § Address picker

## Rule

```html
<section class="dr dr-sheet dr-sheet--picker dr-sheet--steady" role="dialog"
         aria-modal="true" aria-labelledby="ap3-title" style="animation:none;position:static;width:375px;max-width:100%">
  <span class="dr-sheet__grip" aria-hidden="true"></span>
  <p class="dr-sheet__title" id="ap3-title">Address</p>
  <span class="dr-search">
    <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg><input type="text" placeholder="Search address" autocomplete="street-address" aria-labelledby="ap3-title">
  </span>
  <div class="dr-picker__list">
    <button class="dr-picker__item" type="button">
      <svg class="dr-ic dr-picker__lead" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 4.5L4.5 11l6.4 2.1 2.1 6.4z"/></svg>
      <span class="dr-picker__label">Use my location</span>
    </button>
    <button class="dr-picker__item" type="button">
      <svg class="dr-ic dr-picker__lead" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11L12 4.5l7.5 6.5"/><path d="M6.5 9.3v10.2h11V9.3"/><path d="M10.2 19.5v-4.8h3.6v4.8"/></svg>
      <span class="dr-picker__label">Podil, 21 <span class="dr-picker__sub">Saved address</span></span>
    </button>
    <button class="dr-picker__item" type="button">
      <svg class="dr-ic dr-picker__lead" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>
      <span class="dr-picker__label">Osokorky, 14 <span class="dr-picker__sub">Recent</span></span>
    </button>
  </div>
  <p class="sr-only" role="status"></p>

  <div class="dr-sheet__actions">
    <button class="dr-btn dr-btn--primary" type="button">Done</button>
    <button class="dr-btn dr-btn--secondary" type="button">Cancel</button>
  </div>
</section>
```

Photo and inspection have one place, so the *Where* row opens the same sheet titled *Address*. The search field, the list and *Done* over *Cancel* are the same. Only `listings` and its three states (`listings-error`, `listings-filters`, `listings-loading`) build this sheet, and all four build it identically.

## Anti-rule

```html
<span class="dr-search" style="width:341px;max-width:100%"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg><input type="text" placeholder="Drop-off address" aria-label="Drop-off address"></span>
```

A bare search field on the home screen in place of the route row. The typing belongs in this sheet. On the finder the row is a `<button aria-haspopup="dialog">` that opens on a tap (`WCAG 3.2.1`, `4.1.2`); see the [finder](finder.html). For a value chosen from a short fixed list, with nothing to type, use the plain [sheet](sheet.html#variant-picker) picker without a search field.
