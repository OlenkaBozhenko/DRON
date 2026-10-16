---
name: Money rows
slug: money-rows
group: Surfaces
order: 70
classes: .dr-rows--money · .dr-rows__row--total
file: rows.css
inventory: Total
kit: 921
---

## Anatomy

```html
<div class="dr dr-rows dr-rows--money" aria-label="Price breakdown" style="width:341px;max-width:100%">
        <div class="dr-rows__row"><span class="dr-rows__key">Base fare</span><span class="dr-rows__val">&#8372;90</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">Distance &#183; 7.4 km</span><span class="dr-rows__val">&#8372;70</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">Service fee</span><span class="dr-rows__val">&#8372;20</span></div>
        <div class="dr-rows__row dr-rows__row--total"><span class="dr-rows__key">Total</span><span class="dr-rows__val">&#8372;180</span></div>
      </div>
```

- `.dr-rows--money` — The [row panel](row-panel.html) with a trailing column: key `flex: 1`, value `flex: none`, right-aligned. `--bg-surface`, radius 16, padding 8 / 16.
- `.dr-rows__key` — The part of the price, 13/400 in `--text-muted`, 5.95:1.
- `.dr-rows__val` — The figure, 15/600 tabular, so the hryvnia column lines up digit under digit.
- `.dr-rows__row--total` — The total: label 15/600 in `--text-primary`, figure at the money step 20/700 tabular. Set apart by air, 13 above and below, not by a colour.

## Variants

### Breakdown with total

```html
<div class="dr dr-rows dr-rows--money" aria-label="Price breakdown" style="width:341px;max-width:100%">
        <div class="dr-rows__row"><span class="dr-rows__key">Base fare</span><span class="dr-rows__val">&#8372;90</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">Distance &#183; 7.4 km</span><span class="dr-rows__val">&#8372;70</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">Service fee</span><span class="dr-rows__val">&#8372;20</span></div>
        <div class="dr-rows__row dr-rows__row--total"><span class="dr-rows__key">Total</span><span class="dr-rows__val">&#8372;180</span></div>
      </div>
```

Measured on `order-review`: the panel is 341.4 × 213.4; the total row is 309.4 × 54, taller than a plain row, and that extra air is the emphasis.

## States

No state of its own: the rows are read, never pressed, and nothing in them takes focus.

## When to use

Money rows state a price as a set of parts and a total before the user commits. They stand on 6 files: `order-review`, `order-review-aerial` and `order-review-inspection`, each twice (on the screen and again inside the pay drawer, since rev 138), and the three `order-review-loading` files, where the rows hold skeleton lines under `aria-busy` and no total row. In the drawer the rows are the same; the panel loses its `aria-label` and takes the id the sheet's `aria-describedby` points at. This is `voice.md` P3 built as a component: the full price appears before the tap, locked, with no *from*, *quote* or *plus fees*, and the breakdown sits on the screen rather than behind a disclosure.

Figures keep the trailing column because tabular numerals only line up on the last digit when the column is right-aligned; on the left they line up on the ₴ and ₴180 runs 24px past ₴90. Everywhere else the row panel reads from the left. A sum stated as a sentence, such as *Refund issued ₴180* on `resolution`, is a fact and stays in the plain [row panel](row-panel.html).

Keys name the part in the user's words (*Base fare*, *Distance · 7.4 km*, *Service fee*; *Shoot · 30 min* and *Photo & video* for aerial; *Field · 12 ha* and *Inspection report* for inspection); the last row is *Total*. The total is stated in one place, here, and again only in the CTA's verb: *Pay ₴180*. The `.dr-price--total` line once drawn above the CTA is not declared in `components/`, so it has no block here.

Sources: DESIGN.md § Row panel (`.dr-rows--money`) · voice.md P3 · inventory.md § 1.6 (Total) · ui/kit.html Money rows

## Rule

```html
<div style="display:flex;flex-direction:column;gap:12px;width:341px;max-width:100%"><div class="dr dr-rows dr-rows--money" aria-label="Price breakdown">
        <div class="dr-rows__row"><span class="dr-rows__key">Base fare</span><span class="dr-rows__val">&#8372;90</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">Distance &#183; 7.4 km</span><span class="dr-rows__val">&#8372;70</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">Service fee</span><span class="dr-rows__val">&#8372;20</span></div>
        <div class="dr-rows__row dr-rows__row--total"><span class="dr-rows__key">Total</span><span class="dr-rows__val">&#8372;180</span></div>
      </div><button class="dr-btn dr-btn--primary dr-btn--block" type="button" aria-haspopup="dialog" aria-expanded="false">Pay ₴180</button></div>
```

The breakdown on the screen, the total as its last row, and the same sum in the button's verb. This is `order-review`: the button stands in the action bar and opens the pay drawer.

## Anti-rule

```html
<div class="dr dr-rows" aria-label="Price breakdown" style="width:341px;max-width:100%">
        <div class="dr-rows__row"><span class="dr-rows__key">Base fare</span><span class="dr-rows__val">&#8372;90</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">Distance &#183; 7.4 km</span><span class="dr-rows__val">&#8372;70</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">Service fee</span><span class="dr-rows__val">&#8372;20</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">Total</span><span class="dr-rows__val">&#8372;180</span></div>
      </div>
```

Figures in the plain panel: the values read from the left, the digits do not line up, and the total is just another row. Use `--money` with `--row--total`. For a single price beside the action, with no parts to add up, use the [price line](price.html).
