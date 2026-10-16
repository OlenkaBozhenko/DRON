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
<section class="dr-sheet dr-sheet--picker dr-sheet--tall" style="animation:none;position:static;height:300px;width:375px;max-width:100%" role="dialog" aria-modal="true" aria-labelledby="fd-sheet-filters-title">
  <span class="dr-sheet__grip" aria-hidden="true"></span>
  <p class="dr-sheet__title" id="fd-sheet-filters-title">Filters</p>
  <div class="dr-sheet__scroll">
    <fieldset class="dr-zone" aria-labelledby="fd-type-title" aria-describedby="fd-type-sub">
      <p class="dr-zone__title" id="fd-type-title">Drone type</p>
      <p class="dr-zone__sub" id="fd-type-sub">Which drone does your order</p>
      <ul class="dr-picks">
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Quadcopter</span><input type="checkbox" name="fd-drone-type" value="quadcopter" class="sr-only"></label></li>
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Hexacopter</span><input type="checkbox" name="fd-drone-type" value="hexacopter" class="sr-only"></label></li>
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">FPV</span><input type="checkbox" name="fd-drone-type" value="fpv" class="sr-only"></label></li>
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Fixed-wing</span><input type="checkbox" name="fd-drone-type" value="fixed-wing" class="sr-only"></label></li>
      </ul>
    </fieldset>
    <fieldset class="dr-range" aria-labelledby="fd-price-title" aria-describedby="fd-price-sub">
      <p class="dr-range__title" id="fd-price-title">Price range</p>
      <p class="dr-range__sub" id="fd-price-sub">Service price, all fees included</p>
      <div class="dr-range__band">
        <div class="dr-range__hist" role="img" aria-label="How services are priced: most cost ₴200 – ₴350">
          <i class="dr-range__bar" style="height:6%"></i><i class="dr-range__bar" style="height:8%"></i><i class="dr-range__bar" style="height:10%"></i><i class="dr-range__bar" style="height:14%"></i>
          <i class="dr-range__bar" style="height:22%"></i><i class="dr-range__bar" style="height:30%"></i><i class="dr-range__bar" style="height:44%"></i><i class="dr-range__bar" style="height:58%"></i>
          <i class="dr-range__bar" style="height:72%"></i><i class="dr-range__bar" style="height:86%"></i><i class="dr-range__bar" style="height:100%"></i><i class="dr-range__bar" style="height:92%"></i>
          <i class="dr-range__bar" style="height:78%"></i><i class="dr-range__bar" style="height:70%"></i><i class="dr-range__bar" style="height:62%"></i><i class="dr-range__bar" style="height:66%"></i>
          <i class="dr-range__bar" style="height:54%"></i><i class="dr-range__bar" style="height:46%"></i><i class="dr-range__bar" style="height:40%"></i><i class="dr-range__bar" style="height:44%"></i>
          <i class="dr-range__bar" style="height:38%"></i><i class="dr-range__bar" style="height:32%"></i><i class="dr-range__bar" style="height:36%"></i><i class="dr-range__bar" style="height:28%"></i>
          <i class="dr-range__bar" style="height:30%"></i><i class="dr-range__bar" style="height:24%"></i><i class="dr-range__bar" style="height:20%"></i><i class="dr-range__bar" style="height:22%"></i>
          <i class="dr-range__bar" style="height:16%"></i><i class="dr-range__bar" style="height:14%"></i><i class="dr-range__bar" style="height:12%"></i><i class="dr-range__bar" style="height:14%"></i>
          <i class="dr-range__bar" style="height:10%"></i><i class="dr-range__bar" style="height:8%"></i><i class="dr-range__bar" style="height:9%"></i><i class="dr-range__bar" style="height:7%"></i>
          <i class="dr-range__bar" style="height:6%"></i><i class="dr-range__bar" style="height:8%"></i><i class="dr-range__bar" style="height:12%"></i><i class="dr-range__bar" style="height:26%"></i>
        </div>
        <div class="dr-range__rail">
          <span class="dr-range__fill"></span>
          <input class="dr-range__input" type="range" id="fd-pmin" min="0" max="1000" step="50" value="0" aria-label="Minimum price" aria-valuetext="₴0">
          <input class="dr-range__input" type="range" id="fd-pmax" min="0" max="1000" step="50" value="1000" aria-label="Maximum price" aria-valuetext="₴1,000+">
        </div>
      </div>
      <div class="dr-range__fields">
        <p class="dr-range__field">
          <span class="dr-range__cap">Minimum</span>
          <output class="dr-range__val" for="fd-pmin">₴0</output>
        </p>
        <p class="dr-range__field">
          <span class="dr-range__cap">Maximum</span>
          <output class="dr-range__val" for="fd-pmax">₴1,000+</output>
        </p>
      </div>
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
- `.dr-sheet__scroll` — Only the middle scrolls: `flex: 1 1 auto; min-height: 0; overflow-y: auto`. It bleeds the sheet's 16px gutter back with `margin-inline: -16px` and pads 4 / 16, so a focus ring at the edge is not clipped. The zones inside it stand 12 apart.
- `.dr-zone` — One question per titled zone. *Drone type* is a fieldset of four checkbox rows, 341 × 274.
- `.dr-range` — The second zone, *Price range*, drawn by [price range](price-range.html).
- `.dr-sheet__actions--row` — *Clear all* and *Apply filters* side by side at equal widths. Neither of them is a cancel.

## Variants

### Picked rows

```html
<fieldset class="dr-zone" style="width:341px;max-width:100%" aria-labelledby="fp-type-title" aria-describedby="fp-type-sub">
  <p class="dr-zone__title" id="fp-type-title">Drone type</p>
  <p class="dr-zone__sub" id="fp-type-sub">Which drone does your order</p>
  <ul class="dr-picks">
    <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Quadcopter</span><input type="checkbox" name="fp-drone-type" value="quadcopter" class="sr-only"></label></li>
    <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Hexacopter</span><input type="checkbox" name="fp-drone-type" value="hexacopter" class="sr-only" checked></label></li>
    <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">FPV</span><input type="checkbox" name="fp-drone-type" value="fpv" class="sr-only"></label></li>
    <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Fixed-wing</span><input type="checkbox" name="fp-drone-type" value="fixed-wing" class="sr-only"></label></li>
  </ul>
</fieldset>
```

The zone as `listings-filters` and `listings-error` build it, with *Hexacopter* ticked. The state belongs to the `.sr-only` checkbox inside the label, so the whole row is the target. The box and the tick are drawn by [checkbox and radio](checkbox-radio.html).

### Fixed pane, scrolling middle

```html
<section class="dr-sheet dr-sheet--picker dr-sheet--tall" style="animation:none;position:static;height:220px;width:375px;max-width:100%" role="dialog" aria-modal="true" aria-labelledby="fs-sheet-filters-title">
  <span class="dr-sheet__grip" aria-hidden="true"></span>
  <p class="dr-sheet__title" id="fs-sheet-filters-title">Filters</p>
  <div class="dr-sheet__scroll">
    <fieldset class="dr-zone" aria-labelledby="fs-type-title" aria-describedby="fs-type-sub">
      <p class="dr-zone__title" id="fs-type-title">Drone type</p>
      <p class="dr-zone__sub" id="fs-type-sub">Which drone does your order</p>
      <ul class="dr-picks">
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Quadcopter</span><input type="checkbox" name="fs-drone-type" value="quadcopter" class="sr-only"></label></li>
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Hexacopter</span><input type="checkbox" name="fs-drone-type" value="hexacopter" class="sr-only"></label></li>
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">FPV</span><input type="checkbox" name="fs-drone-type" value="fpv" class="sr-only"></label></li>
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Fixed-wing</span><input type="checkbox" name="fs-drone-type" value="fixed-wing" class="sr-only"></label></li>
      </ul>
    </fieldset>
    <fieldset class="dr-range" aria-labelledby="fs-price-title" aria-describedby="fs-price-sub">
      <p class="dr-range__title" id="fs-price-title">Price range</p>
      <p class="dr-range__sub" id="fs-price-sub">Service price, all fees included</p>
      <div class="dr-range__band">
        <div class="dr-range__hist" role="img" aria-label="How services are priced: most cost ₴200 – ₴350">
          <i class="dr-range__bar" style="height:6%"></i><i class="dr-range__bar" style="height:8%"></i><i class="dr-range__bar" style="height:10%"></i><i class="dr-range__bar" style="height:14%"></i>
          <i class="dr-range__bar" style="height:22%"></i><i class="dr-range__bar" style="height:30%"></i><i class="dr-range__bar" style="height:44%"></i><i class="dr-range__bar" style="height:58%"></i>
          <i class="dr-range__bar" style="height:72%"></i><i class="dr-range__bar" style="height:86%"></i><i class="dr-range__bar" style="height:100%"></i><i class="dr-range__bar" style="height:92%"></i>
          <i class="dr-range__bar" style="height:78%"></i><i class="dr-range__bar" style="height:70%"></i><i class="dr-range__bar" style="height:62%"></i><i class="dr-range__bar" style="height:66%"></i>
          <i class="dr-range__bar" style="height:54%"></i><i class="dr-range__bar" style="height:46%"></i><i class="dr-range__bar" style="height:40%"></i><i class="dr-range__bar" style="height:44%"></i>
          <i class="dr-range__bar" style="height:38%"></i><i class="dr-range__bar" style="height:32%"></i><i class="dr-range__bar" style="height:36%"></i><i class="dr-range__bar" style="height:28%"></i>
          <i class="dr-range__bar" style="height:30%"></i><i class="dr-range__bar" style="height:24%"></i><i class="dr-range__bar" style="height:20%"></i><i class="dr-range__bar" style="height:22%"></i>
          <i class="dr-range__bar" style="height:16%"></i><i class="dr-range__bar" style="height:14%"></i><i class="dr-range__bar" style="height:12%"></i><i class="dr-range__bar" style="height:14%"></i>
          <i class="dr-range__bar" style="height:10%"></i><i class="dr-range__bar" style="height:8%"></i><i class="dr-range__bar" style="height:9%"></i><i class="dr-range__bar" style="height:7%"></i>
          <i class="dr-range__bar" style="height:6%"></i><i class="dr-range__bar" style="height:8%"></i><i class="dr-range__bar" style="height:12%"></i><i class="dr-range__bar" style="height:26%"></i>
        </div>
        <div class="dr-range__rail">
          <span class="dr-range__fill"></span>
          <input class="dr-range__input" type="range" id="fs-pmin" min="0" max="1000" step="50" value="0" aria-label="Minimum price" aria-valuetext="₴0">
          <input class="dr-range__input" type="range" id="fs-pmax" min="0" max="1000" step="50" value="1000" aria-label="Maximum price" aria-valuetext="₴1,000+">
        </div>
      </div>
      <div class="dr-range__fields">
        <p class="dr-range__field">
          <span class="dr-range__cap">Minimum</span>
          <output class="dr-range__val" for="fs-pmin">₴0</output>
        </p>
        <p class="dr-range__field">
          <span class="dr-range__cap">Maximum</span>
          <output class="dr-range__val" for="fs-pmax">₴1,000+</output>
        </p>
      </div>
    </fieldset>
  </div>
  <div class="dr-sheet__actions dr-sheet__actions--row">
    <button class="dr-btn dr-btn--secondary" type="button">Clear all</button>
    <button class="dr-btn dr-btn--primary" type="button">Apply filters</button>
  </div>
</section>
```

When the zones are taller than the drawer, the grip, the title and the two actions stay where they are and only `.dr-sheet__scroll` moves. Without `min-height: 0` the flex child would refuse to shrink, and the drawer would grow instead of scrolling.

## States

No state of its own: the drawer is a container, and its controls are other components. The rows take the [checkbox and radio](checkbox-radio.html#s-states) states, the two thumbs the [price range](price-range.html#s-states) states, and *Clear all* and *Apply filters* the [button](button.html#s-states) states.

## When to use

The filters drawer is the second drawer `listings` opens and the only one that holds more than fits. The *Filters* button on the [finder](finder.html) raises it. It holds *Drone type* and the [price range](price-range.html), and at the built frame it has 0px to scroll. The scroll body exists for when zones are added later. Applied values come back to the home screen as filter chips above *Filters* (see [in-page tabs](in-page-tabs.html)), and a tap on a chip removes that filter.

*Apply filters* writes the chips and closes. *Clear all* empties every zone and closes. The scrim and Escape close without applying. The two actions sit side by side because neither is a cancel. The stacked-cancel rule from `HIG · Action sheets` applies to a *Cancel* / *Done* pair, and this is not one. The four drone type names (*Quadcopter · Hexacopter · FPV · Fixed-wing*) are equipment words. They depart from voice P4 and P1 on the designer's decision.

Four screens build it with the same markup: `listings`, `listings-loading`, `listings-filters` and `listings-error`. On `listings` and `listings-loading` nothing is picked and the band is ₴0 – ₴1,000+. On `listings-filters` and `listings-error` *Hexacopter* is ticked and the minimum is ₴600. Only the values differ.

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
