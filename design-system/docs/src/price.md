---
name: Price above the action
slug: price
group: Surfaces
order: 80
classes: .dr-price · __lbl · __val
file: rows.css
inventory: Price line
kit: 1353
---

## Anatomy

```html
<footer class="dr dr-actionbar" style="position:static;width:341px;max-width:100%">
        <div class="dr-price"><span class="dr-price__lbl">Selected &#183; Wed 2 Jul, 09:00</span><span class="dr-price__val">&#8372;800</span></div>
        <span class="dr-btn dr-btn--primary dr-btn--block">Confirm slot</span>
      </footer>
```

- `.dr-price` — The line: `display:flex`, `align-items: baseline`, `space-between`, gap 12. It sits on the [action bar](action-bar.html)'s shelf above the button.
- `.dr-price__lbl` — What the price is for, 13 in `--text-muted`, 4.77:1 on `--bg-page`.
- `.dr-price__val` — The price, 17/600 in `--text-primary`, tabular, 14.75:1 on `--bg-page`.

## Variants

### Selected

```html
<footer class="dr dr-actionbar" style="position:static;width:341px;max-width:100%">
        <div class="dr-price"><span class="dr-price__lbl">Selected &#183; Wed 2 Jul, 09:00</span><span class="dr-price__val">&#8372;800</span></div>
        <span class="dr-btn dr-btn--primary dr-btn--block">Confirm slot</span>
      </footer>
```

A slot is chosen: the label names it and the price stands beside it. `time-slot`.

### Nothing selected yet

```html
<div class="dr dr-price" style="width:341px;max-width:100%"><span class="dr-price__lbl">No slot selected</span><span class="dr-price__val">₴800</span></div>
```

The label says what is missing and the price is still stated. `time-slot-empty`.

## When to use

The price line puts the sum on the button's own shelf, so the price and the commitment are read in one glance. It stands on one screen: `time-slot` (and `time-slot-inspection`), base and empty, where it is the only place the price is stated at all. Every other screen states its price in a [money rows](money-rows.html) breakdown and in the CTA's verb.

This is `voice.md` P3 built as a component: state the price as a fact, before the tap. Baseline, not centre: `align-items: baseline` sets the 13px label and 17px value on one line of type. The value is `tabular-nums`, so a price does not jitter as it changes. Both pairs clear `WCAG 1.4.3`'s 4.5:1, and the money is the one that reads first.

The label names what is being paid for, as a fact (*Selected · Wed 2 Jul, 09:00*); the value is the full price with no *from* and no asterisk.

Sources: ui/kit.html Price above the action · voice.md P3 · inventory.md § 1.6 (Price line, Total)

## Rule

```html
<footer class="dr dr-actionbar" style="position:static;width:341px;max-width:100%">
        <div class="dr-price"><span class="dr-price__lbl">Selected &#183; Wed 2 Jul, 09:00</span><span class="dr-price__val">&#8372;800</span></div>
        <span class="dr-btn dr-btn--primary dr-btn--block">Confirm slot</span>
      </footer>
```

A choice whose price is otherwise nowhere on the screen: the line stands directly above the button that commits to it.

## Anti-rule

```html
<footer class="dr dr-actionbar" style="position:static;width:341px;max-width:100%">
        <div class="dr-price"><span class="dr-price__lbl">Total</span><span class="dr-price__val">&#8372;180</span></div>
        <span class="dr-btn dr-btn--primary dr-btn--block">Pay ₴180</span>
      </footer>
```

A Total line above a CTA that already says the sum, on a screen that already shows the breakdown: the fact is stated three times. The action-bar Total line came off every screen; the total lives in [money rows](money-rows.html) and in the [button](button.html)'s verb.
