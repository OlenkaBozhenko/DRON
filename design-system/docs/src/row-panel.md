---
name: Row panel
slug: row-panel
group: Surfaces
order: 60
classes: .dr-rows · __row · __key · __val · __row--stack
file: rows.css
inventory: Row panel
kit: 747
---

## Anatomy

```html
<div class="dr-rows" aria-label="Delivery details" style="width:341px;max-width:100%">
  <div class="dr-rows__row"><span class="dr-rows__key">Delivered to</span><span class="dr-rows__val">Osokorky, 14</span></div>
  <div class="dr-rows__row"><span class="dr-rows__key">Time</span><span class="dr-rows__val">10:07</span></div>
  <div class="dr-rows__row"><span class="dr-rows__key">Operator</span><span class="dr-rows__val">Andriy M.</span></div>
</div>
```

- `.dr-rows` — The panel: `--bg-surface`, radius 16, padding 8 / 16. A grid whose label column is sized by the widest key in this panel, floored at 96.
- `.dr-rows__row` — One fact, `13px 0`, with a hairline under it and none under the last. Each row is a subgrid of the panel, so every value in the card starts on one axis.
- `.dr-rows__key` — The label, 13/400 in `--text-muted`, 5.95:1.
- `.dr-rows__val` — The value, 15/600 in `--text-primary`, tabular, 14.37:1, reading from the left after a 10 gap.

## Variants

### Default

```html
<div class="dr-rows" aria-label="Delivery details" style="width:341px;max-width:100%">
  <div class="dr-rows__row"><span class="dr-rows__key">Delivered to</span><span class="dr-rows__val">Osokorky, 14</span></div>
  <div class="dr-rows__row"><span class="dr-rows__key">Time</span><span class="dr-rows__val">10:07</span></div>
  <div class="dr-rows__row"><span class="dr-rows__key">Operator</span><span class="dr-rows__val">Andriy M.</span></div>
</div>
```

Facts read in pairs: label column, then value, both reading from the left. The tracking ETA panel and the delivery details panel are this panel. The specimen is `delivery`'s *Delivery details*.

### Stack

```html
<div class="dr-rows" style="width:341px;max-width:100%">
  <div class="dr-rows__row"><span class="dr-rows__key">Operator</span><span class="dr-rows__val">Andriy M.</span></div>
  <div class="dr-rows__row"><span class="dr-rows__key">Certificate</span><span class="dr-rows__val">UA-DRN-04812</span></div>
  <div class="dr-rows__row dr-rows__row--stack"><span class="dr-rows__key">Signed</span><span class="dr-rows__val">2 Jul, 15:42 · <span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/><path d="M9 11.5l2.2 2.2L15 10"/></svg>Verified by DRON<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span></span></div>
</div>
```

`--row--stack` puts the label on its own line and the value at the card's full width, for a value that holds a [credential chip](chip.html). A chip is `nowrap` at 164.08 and would otherwise eat the card's 16 inset. One row in the product: *Signed* on `inspection-report`, under *Operator* and *Certificate* in the signature panel.

### Money

```html
<div class="dr-rows dr-rows--money" aria-label="Price breakdown" style="width:341px;max-width:100%">
  <div class="dr-rows__row"><span class="dr-rows__key">Base fare</span><span class="dr-rows__val">₴90</span></div>
  <div class="dr-rows__row"><span class="dr-rows__key">Distance · 7.4 km</span><span class="dr-rows__val">₴70</span></div>
  <div class="dr-rows__row"><span class="dr-rows__key">Service fee</span><span class="dr-rows__val">₴20</span></div>
  <div class="dr-rows__row dr-rows__row--total"><span class="dr-rows__key">Total</span><span class="dr-rows__val">₴180</span></div>
</div>
```

Figures, not facts, keep a trailing column so the digits line up. This is `order-review`'s breakdown. It has its own page: [Money rows](money-rows.html).

## When to use

The row panel is the system's universal container for a fact: read, opened, or typed into. It stands on 61 files, among them `tracking`, `delivery`, `order-confirmed`, `order-review`, `inspection-report`, `job-brief`, `earning-details` and `account-edit`, where the same grid holds [fields](field.html) and [picker rows](picker-row.html). The same component on two screens carries the same numbers.

Values read from the left on the card's own axis. HIG ships both a trailing value (`HIG · Lists and tables`) and a leading one (`HIG · Text fields`), so this is a taste call and not a compliance fix; `WCAG 1.4.3`, `1.3.1` and `1.4.8` are untouched. Inside a [titled zone card](titled-zone-card.html) the panel gives up its ground and bleeds −16, so its separators run 16 / 16 from the card's edges.

The key is the dictionary noun for the fact (*Delivered to*, *Operator*, never *Pilot*); the value is the fact itself, a place, a time, a name. No adjectives and no sentence in a value.

Sources: DESIGN.md § Row panel · inventory.md § 1.3 (Row panel) · voice.md Vocabulary · ui/kit.html Row panel

## Rule

```html
<div class="dr-rows" aria-label="Delivery details" style="width:341px;max-width:100%">
  <div class="dr-rows__row"><span class="dr-rows__key">Delivered to</span><span class="dr-rows__val">Osokorky, 14</span></div>
  <div class="dr-rows__row"><span class="dr-rows__key">Time</span><span class="dr-rows__val">10:07</span></div>
  <div class="dr-rows__row"><span class="dr-rows__key">Operator</span><span class="dr-rows__val">Andriy M.</span></div>
</div>
```

The delivery details on `delivery`: where, when, who. Three facts, one card, one value axis.

## Anti-rule

```html
<div style="display:flex;flex-direction:column;gap:8px;width:341px;max-width:100%"><article class="dr-card dr-card--compact"><span class="dr-listing__body"><span class="dr-listing__desc">Delivered to</span><span class="dr-listing__name">Osokorky, 14</span></span></article><article class="dr-card dr-card--compact"><span class="dr-listing__body"><span class="dr-listing__desc">Time</span><span class="dr-listing__name">10:07</span></span></article></div>
```

One card per fact. Each pair becomes an object of its own and the reader loses the value axis. Put the facts as rows in one panel. For a price broken into its parts use [money rows](money-rows.html); for a list of objects use [cards](card.html) in a [list](list.html).
