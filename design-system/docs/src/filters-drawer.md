---
name: Filters drawer
slug: filters-drawer
group: Surfaces
order: 120
classes: .dr-sheet--tall · .dr-sheet__scroll · .dr-sheet__actions--row
file: sheet.css
inventory: Tall drawer
kit: 2205
---

## Anatomy

```html
<section class="dr dr-sheet dr-sheet--picker dr-sheet--tall" aria-label="Filters" style="animation:none;position:static;height:300px;width:375px;max-width:100%">
  <span class="dr-sheet__grip" aria-hidden="true"></span>
  <p class="dr-sheet__title">Filters</p>
  <div class="dr-sheet__scroll">
    <fieldset class="dr-zone">
      <p class="dr-zone__title">Drone type</p>
      <p class="dr-zone__sub">Which drone does your order</p>
      <ul class="dr-picks" style="list-style:none">
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Quadcopter</span><input type="checkbox" name="docdrone" class="sr-only"></label></li>
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Hexacopter</span><input type="checkbox" name="docdrone" class="sr-only"></label></li>
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">FPV</span><input type="checkbox" name="docdrone" class="sr-only"></label></li>
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Fixed-wing</span><input type="checkbox" name="docdrone" class="sr-only"></label></li>
      </ul>
    </fieldset>
  </div>
  <div class="dr-sheet__actions dr-sheet__actions--row">
    <button class="dr-btn dr-btn--secondary" type="button">Clear all</button>
    <button class="dr-btn dr-btn--primary" type="button">Apply filters</button>
  </div>
</section>
```

- `.dr-sheet--tall` — `max-height: calc(100% − 44px)`. A strip of the screen behind stays visible (`HIG · Sheets`), which shows the drawer is a layer over the page and not a new screen. Tapping the strip dismisses it. Measured 693.77 tall at the 375 × 812 frame.
- `.dr-sheet__title` — *Filters*, the name of the button that opened it.
- `.dr-sheet__scroll` — Only the middle scrolls: `flex: 1 1 auto; min-height: 0; overflow-y: auto`. It bleeds the sheet's 16px gutter back with `margin-inline: -16px` and pads 4 / 16, so a focus ring at the edge is not clipped.
- `.dr-zone` — One question per titled zone. *Drone type* is a fieldset of four checkbox rows, 341 × 274.
- `.dr-sheet__actions--row` — *Clear all* and *Apply filters* side by side at equal widths. Neither of them is a cancel.

## Variants

### Picked rows

```html
<ul class="dr-picks" style="list-style:none;width:341px;max-width:100%">
  <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Quadcopter</span><input type="checkbox" name="docpicked" class="sr-only" checked></label></li>
  <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">FPV</span><input type="checkbox" name="docpicked" class="sr-only"></label></li>
</ul>
```

A ticked row and an empty one. The state belongs to the `.sr-only` checkbox inside the label, so the whole row is the target. The box and the tick are drawn by [checkbox and radio](checkbox-radio.html).

### Fixed pane, scrolling middle

```html
<section class="dr dr-sheet dr-sheet--picker dr-sheet--tall" aria-label="Filters" style="animation:none;position:static;height:220px;width:375px;max-width:100%">
  <span class="dr-sheet__grip" aria-hidden="true"></span>
  <p class="dr-sheet__title">Filters</p>
  <div class="dr-sheet__scroll">
    <fieldset class="dr-zone">
      <p class="dr-zone__title">Drone type</p>
      <p class="dr-zone__sub">Which drone does your order</p>
      <ul class="dr-picks" style="list-style:none">
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Quadcopter</span><input type="checkbox" name="docshort" class="sr-only"></label></li>
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Hexacopter</span><input type="checkbox" name="docshort" class="sr-only"></label></li>
      </ul>
    </fieldset>
  </div>
  <div class="dr-sheet__actions dr-sheet__actions--row">
    <button class="dr-btn dr-btn--secondary" type="button">Clear all</button>
    <button class="dr-btn dr-btn--primary" type="button">Apply filters</button>
  </div>
</section>
```

When the zones are taller than the drawer, the grip, the title and the two actions stay where they are and only `.dr-sheet__scroll` moves. Without `min-height: 0` the flex child would refuse to shrink, and the drawer would grow instead of scrolling.

## When to use

The filters drawer is the second drawer `listings` opens and the only one that holds more than fits. The *Filters* button on the [finder](finder.html) raises it. It holds *Drone type* and the [price range](price-range.html), and at the built frame it has 0px to scroll. The scroll body exists for when zones are added later. Applied values come back to the home screen as filter chips above *Filters* (see [in-page tabs](in-page-tabs.html)), and a tap on a chip removes that filter.

*Apply filters* writes the chips and closes. *Clear all* empties every zone and closes. The scrim and Escape close without applying. The two actions sit side by side because neither is a cancel. The stacked-cancel rule from `HIG · Action sheets` applies to a *Cancel* / *Done* pair, and this is not one. The four drone type names (*Quadcopter · Hexacopter · FPV · Fixed-wing*) are equipment words. They depart from voice P4 and P1 on the designer's decision.

Sources: DESIGN.md § The search home (Drawers) · inventory.md § 1 Tall drawer · microcopy.md § listings, Filters drawer · ui/kit.html § Filters drawer

## Rule

```html
<div class="dr-sheet__actions dr-sheet__actions--row" style="width:341px;max-width:100%"><button class="dr-btn dr-btn--secondary" type="button">Clear all</button><button class="dr-btn dr-btn--primary" type="button">Apply filters</button></div>
```

Two actions that each change the result, *Clear all* and *Apply filters*, side by side at the drawer's foot. *Apply filters* is the drawer's one green control.

## Anti-rule

```html
<div class="dr-sheet__actions dr-sheet__actions--row" style="width:341px;max-width:100%"><button class="dr-btn dr-btn--secondary" type="button">Cancel</button><button class="dr-btn dr-btn--primary" type="button">Done</button></div>
```

*Cancel* and *Done* split across one row. A pair that includes a cancel stacks one per row, *Done* over *Cancel*, the way every Done/Cancel drawer does; see [stacked actions](sheet.html#variant-stacked-actions). A drawer whose content fits without scrolling does not need `--tall`. Use the plain [sheet](sheet.html).
