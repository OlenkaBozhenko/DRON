---
name: Button
slug: button
group: Actions
order: 10
classes: .dr-btn · --primary · --secondary · --tertiary · --text · --pay · --block · --icon · :disabled
file: button.css
inventory: Primary button; Secondary button; Block button; Disabled; Tertiary button; Express wallet button
kit: 500
---

## Anatomy

```html
<div style="width:341px;max-width:100%"><a class="dr-btn dr-btn--primary dr-btn--block" href="../../wireframes/payment.html"><svg class="dr-ic dr-ic--20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2.4"/><path d="M3 10.4h18"/><path d="M6.5 14.4h3.5"/></svg>Pay with card</a></div>
```

- `.dr-btn` — The control. `min-height` 44, never a fixed height, so a scrolling column cannot shrink it below the 44pt target. Radius 12, padding 0 16.
- `.dr-ic` — An optional leading glyph, 20px, 8px before the label, drawn in the label's ink. *Pay with card* in the `order-review` pay drawer.
- `.dr-btn--primary` — The fill. Signal Green behind a charcoal label, 9.46:1, with the one shadow rung a resting control may carry.

## Variants

### Primary

```html
<a class="dr-btn dr-btn--primary dr-btn--block" href="../../wireframes/rate.html">Rate this order</a>
```

The screen's one green control, here from `delivery`. Charcoal on green, 9.46:1. Hover brightens by 3%; press dips 1px and scales to 0.99.

### Secondary

```html
<a class="dr-btn dr-btn--secondary dr-btn--block" href="../../wireframes/report-issue.html">Report an issue</a>
```

Every other filled action, here from `inspection-report`. Warm grey fill, charcoal label, 11.54:1, no shadow. *Cancel* is its most common label (43 uses), then *Contact support* (12).

### Tertiary

```html
<a class="dr-btn dr-btn--tertiary" href="../../wireframes/account.html">Cancel</a>
```

No fill; slate label, 6.62:1 on the page. The cancel voice in a navigation bar, never in the action bar. Two screens build it: `account-photo` and `operator-account-photo`, both as *Cancel* on the left of the bar.

### Text

```html
<a class="dr-btn dr-btn--text" href="../../wireframes/account.html">Save</a>
```

No fill; the green ink that may be text, 5.58:1 on the page. The right-hand commit in a modal's navigation bar: *Save* on `account-photo` and `operator-account-photo`, the only two screens that build it.

### Disabled

```html
<button type="button" class="dr-btn dr-btn--primary dr-btn--block" disabled>Complete all steps to continue</button>
```

Built, not dimmed: the secondary's own grey with a slate label, 4.77:1. Blanket opacity would take charcoal-on-green to 2.35:1. A `<button>` takes `disabled` (`job-checklist-error`, `listings-loading`, `result-upload`, `result-upload-loading`); a link takes `aria-disabled="true"` (`inspection-report-loading`, `time-slot-empty`, `time-slot-inspection-empty`). The same rule draws both.

### Pay

```html
<a class="dr-btn dr-btn--pay dr-btn--block" href="../../wireframes/payment-loading.html" aria-label="Pay with Apple Pay"><svg class="dr-paymark dr-paymark--pay" viewBox="0 0 46 23" aria-hidden="true" focusable="false"><svg x="3.1" y="5.19" width="10.33" height="12.69" viewBox="0 0 814 1000" preserveAspectRatio="xMidYMid meet"><path fill="#FFF" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg><text x="16.37" y="16.85" textLength="26.54" lengthAdjust="spacingAndGlyphs" font-size="15" font-weight="600" fill="#FFF">Pay</text></svg></a>
```

The one rung whose colour the product does not choose. Apple and Google allow black, white, or white with an outline on a button that starts their payment. Used in the pay drawer of `order-review`, `order-review-aerial` and `order-review-inspection` only, as Apple Pay and Google Pay above *Pay with card*.

### Block and icon

```html
<span class="dr-order__acts"><button class="dr-btn dr-btn--icon" type="button" aria-label="Delete order"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6.6h16"/><path d="M9.6 6.6V4.9a1.1 1.1 0 0 1 1.1-1.1h2.6a1.1 1.1 0 0 1 1.1 1.1v1.7"/><path d="M6.3 6.6l.85 12.1a1.6 1.6 0 0 0 1.6 1.5h6.5a1.6 1.6 0 0 0 1.6-1.5l.85-12.1"/><path d="M10.3 10.4v6M13.7 10.4v6"/></svg></button><a class="dr-btn dr-btn--icon" href="../../wireframes/delivery.html" aria-label="View details"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5.5" cy="6" r="2.1"/><circle cx="18.5" cy="6" r="2.1"/><circle cx="5.5" cy="18" r="2.1"/><circle cx="18.5" cy="18" r="2.1"/><path d="M7 7.5l3 3M17 7.5l-3 3M7 16.5l3-3M17 16.5l-3-3"/><rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1.3"/></svg></a></span>
```

`--block` takes the column's width: the default in an action bar and at the foot of a card (179 uses on 99 files). `--icon` is a 44 × 44 circle on the secondary's grey, with a 20px glyph and its accessible name in `aria-label`. Here the pair on an `order-history` card: *Delete order* and *View details*. It is built on 16 files.

## When to use

A button is a verb the user commits to. The system spends one green control per screen. Two screens stack two primaries in one action bar: `account-photo` and `operator-account-photo` (*Take a photo* over *Choose a picture*, then *Delete* as secondary). The primary button carries the screen's main job and covers 81–100% of that screen's green, while everything else that can be tapped is warm grey. In the action bar every button is filled and stacks one per row at full width, primary first, so no label wraps at 320pt. Text-only rungs (tertiary, text) live in navigation bars and inside cards, never on the bottom edge.

Two rungs in DESIGN.md are not in the live system. *Outline* (pill, slate edge) and *destructive text* are declared in the `ui/kit.css` archive, but no screen draws them, so they were never ported into `components/`. The first screen that needs one brings it in, and this page follows.

The label is the outcome, not the mechanism: *Pay ₴180*, *Rate this order*, *Report an issue*. One word stands for one concept: *Contact support* to reach a person, *Try again* to recover, *Withdraw* for money out. No exclamation marks and no *successfully*. A price is stated in the label before the tap, the way P3 of the voice asks.

Sources: DESIGN.md § Buttons · § Named rules (One Accent, Built Not Dimmed) · voice.md P1, P3 · microcopy.md § Inconsistency catalogue · inventory.md § 1.2

## Rule

```html
<footer class="dr-actionbar" style="width:375px;max-width:100%">
  <a class="dr-btn dr-btn--primary dr-btn--block" href="../../wireframes/rate-inspection.html">Rate this order</a>
  <a class="dr-btn dr-btn--secondary dr-btn--block" href="../../wireframes/report-issue.html">Report an issue</a>
</footer>
```

The action bar of `inspection-report`: one primary for the screen's job and a secondary for the way out, both full width, one per row. The primary is on top in every action bar (rev 290).

## Anti-rule

```html
<div style="display:flex;gap:8px;width:341px;max-width:100%"><button class="dr-btn dr-btn--primary" type="button">Pay ₴180</button><button class="dr-btn dr-btn--primary" type="button">Contact support</button></div>
```

Two green buttons split across one row. A second primary spends the screen's only accent twice, and a split row is where labels wrap. Make the second action a [secondary](button.html#variant-secondary) on its own row. To pick between routes rather than commit to one, use a [choice card](choice-card.html).
