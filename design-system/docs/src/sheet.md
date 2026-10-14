---
name: Sheet
slug: sheet
group: Surfaces
order: 100
classes: .dr-sheet · --picker · __grip · __title · __actions · --row · .dr-scrim · --picker · .dr-picker__list · __item · __label
file: sheet.css
inventory: Contact drawer; Action sheet
kit: 990
---

## Anatomy

```html
<div class="dr" style="position:relative;width:375px;max-width:100%;height:340px;border-radius:var(--len-22);overflow:hidden;background:var(--bg-page)">
  <div class="dr-scrim dr-scrim--picker" aria-hidden="true" style="animation:none"></div>
  <section class="dr-sheet dr-sheet--picker" aria-label="Contact operator" style="animation:none">
    <span class="dr-sheet__grip" aria-hidden="true"></span>
    <p class="dr-sheet__title">Contact operator</p>
    <div class="dr-picker__list">
      <a class="dr-picker__item" href="#"><span class="dr-picker__label">Call operator</span></a>
      <a class="dr-picker__item" href="#"><span class="dr-picker__label">Chat with the operator</span></a>
      <a class="dr-picker__item" href="#"><span class="dr-picker__label">Contact support</span></a>
    </div>
    <button class="dr-btn dr-btn--secondary dr-btn--block" type="button">Cancel</button>
  </section>
</div>
```

- `.dr-scrim` — Warm ink at 40%, never black. One scrim serves every drawer on a page, because only one row was tapped.
- `.dr-sheet` — The floating surface. Radius 22 on the top corners only, padding 12 / 16 / 24, gap 12, `--shadow-raised`. Measured open at the 375 frame: 373.4 × 324.8, 40.0% of the frame.
- `.dr-sheet__grip` — 36 × 5 at the pill radius. It says the surface can be dragged.
- `.dr-sheet__title` — The title step, centred. On a live page it names the dialog through `aria-labelledby`.
- `.dr-picker__list` — The options on `--bg-surface` at radius 16 over the sheet's page ground, the system's 1.11:1 step. Rows 341.4 × 44, `HIG · 44pt` exactly.
- `.dr-btn--secondary` — The named *Cancel* that `HIG · Action sheets` requires, 341.4 × 44 on the secondary fill at 11.54:1.

## Variants

### Picker

```html
<section class="dr-sheet dr-sheet--picker" aria-label="Parcel size" style="animation:none;position:static;width:375px;max-width:100%">
  <span class="dr-sheet__grip" aria-hidden="true"></span>
  <p class="dr-sheet__title">Parcel size</p>
  <div class="dr-picker__list">
    <button class="dr-picker__item" type="button" aria-current="true"><span class="dr-picker__label">Small — up to 2 kg</span><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></button>
    <button class="dr-picker__item" type="button"><span class="dr-picker__label">Medium — up to 5 kg</span><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></button>
    <button class="dr-picker__item" type="button"><span class="dr-picker__label">Large — up to 10 kg</span><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></button>
  </div>
  <button class="dr-btn dr-btn--secondary dr-btn--block" type="button">Cancel</button>
</section>
```

The sheet sets a value. Each option is a `<button>`; the current one carries `aria-current="true"` and is the only row whose 16px tick is visible. A tap writes the value back to the row that opened the sheet and closes it.

### Action sheet

```html
<section class="dr-sheet dr-sheet--picker" aria-label="Contact operator" style="animation:none;position:static;width:375px;max-width:100%">
  <span class="dr-sheet__grip" aria-hidden="true"></span>
  <p class="dr-sheet__title">Contact operator</p>
  <div class="dr-picker__list">
    <a class="dr-picker__item" href="#"><span class="dr-picker__label">Call operator</span></a>
    <a class="dr-picker__item" href="#"><span class="dr-picker__label">Chat with the operator</span></a>
    <a class="dr-picker__item" href="#"><span class="dr-picker__label">Contact support</span></a>
  </div>
  <button class="dr-btn dr-btn--secondary dr-btn--block" type="button">Cancel</button>
</section>
```

The sheet offers ways out. Each option is an `<a>`, because it leaves the screen. No row carries `aria-current` and nothing is written back. Text rows with no icons, the way an Apple action sheet lists its choices. The sheet holds zero green.

### Stacked actions

```html
<div class="dr-sheet__actions" style="width:341px;max-width:100%"><button class="dr-btn dr-btn--secondary" type="button">Cancel</button><button class="dr-btn dr-btn--primary" type="button">Done</button></div>
```

*Cancel* over *Done*, one per row, 8 apart. This is the stack every Done/Cancel drawer carries. Putting *Done* at the bottom is a recorded departure from the default-on-top order in `HIG · Alerts`.

### Side-by-side actions

```html
<div class="dr-sheet__actions dr-sheet__actions--row" style="width:341px;max-width:100%"><button class="dr-btn dr-btn--secondary" type="button">Clear all</button><button class="dr-btn dr-btn--primary" type="button">Apply filters</button></div>
```

`--row` puts the two actions side by side at equal widths. It is only for a pair where neither action is a cancel, such as the [filters drawer](filters-drawer.html).

## When to use

The sheet is the product's floating surface. It is one of two components that take `--shadow-raised`; the other is the [toast](toast.html). The flat rule covers cards that sit *in* the page, and a drawer floats over it. Up to about six options rise from the bottom edge. More than that is a screen. The picker variant brings the modal contract from `ui/kit.js`: focus is trapped, the screen behind goes `inert`, Escape closes the sheet, and focus returns to the control that opened it. A field row (`.dr-field--action`) or a CTA (`.dr-btn[aria-controls]`) opens it. It stands on `order-setup`, `report-issue`, `time-slot`, `account-edit` and the three `tracking` states, among others.

Three modifiers have their own pages: `--steady` is the [address picker](address-picker.html), `--tall` is the [filters drawer](filters-drawer.html), and `--dock` is the sheet that does not float, on [results on the map](map-screen.html). The pay drawer is the one sheet with no title, and it is on [pay list](pay-list.html). A top-bar placement for *Cancel* and *Done* (`.dr-sheet__bar`) was tried for one revision and is not in `components/`, so it is not drawn here.

The title is the name of the row or button that opened the sheet: *Parcel size*, *Issue type*, *Contact operator*. Options use the user's words and the product's single word for each concept: *operator*, never pilot. *Contact support* reaches a person. Every sheet ends in a named *Cancel* (or the *Cancel* / *Done* pair), and the scrim and Escape close it without changing anything.

Sources: DESIGN.md § Action sheet · § The picker row · § Elevation & Depth · inventory.md § 1 Contact drawer · microcopy.md § D6 · ui/kit.html § Sheet · scrim · grip

## Rule

```html
<section class="dr-sheet dr-sheet--picker" aria-label="Issue type" style="animation:none;position:static;width:375px;max-width:100%">
  <span class="dr-sheet__grip" aria-hidden="true"></span>
  <p class="dr-sheet__title">Issue type</p>
  <div class="dr-picker__list">
    <button class="dr-picker__item" type="button" aria-current="true"><span class="dr-picker__label">Poor quality — not as expected</span><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></button>
    <button class="dr-picker__item" type="button"><span class="dr-picker__label">Damaged item</span><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></button>
    <button class="dr-picker__item" type="button"><span class="dr-picker__label">Wrong location</span><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></button>
  </div>
  <button class="dr-btn dr-btn--secondary dr-btn--block" type="button">Cancel</button>
</section>
```

`report-issue`'s issue type: three values, titled by the row that opened the sheet, with the current one ticked and a named *Cancel* under the list.

## Anti-rule

```html
<section class="dr-sheet dr-sheet--picker" aria-label="Contact operator" style="animation:none;position:static;width:375px;max-width:100%">
  <span class="dr-sheet__grip" aria-hidden="true"></span>
  <p class="dr-sheet__title">Contact operator</p>
  <button class="dr-btn dr-btn--secondary dr-btn--block" type="button">Call operator</button>
  <button class="dr-btn dr-btn--secondary dr-btn--block" type="button">Chat with the operator</button>
  <button class="dr-btn dr-btn--primary dr-btn--block" type="button">Done</button>
</section>
```

Options drawn as filled buttons, with a green *Done* added under them. A route is a picker row, not a commit. A sheet of routes has nothing to confirm, so it ends in *Cancel*. If there are more than about six options, build a screen. If you only need to tell the user something, without asking them to choose, use a [toast](toast.html) or a [banner message](banner-message.html).
