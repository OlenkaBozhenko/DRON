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
<button class="dr-btn dr-btn--primary" type="button"><svg class="dr-ic dr-ic--20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 5.2l4.3 4.3L8.4 19.9l-4.9 1.1 1.1-4.9z"/><path d="M12.9 6.8l4.3 4.3"/></svg>Edit profile</button>
```

- `.dr-btn` — The control. `min-height` 44, never a fixed height, so a scrolling column cannot shrink it below the 44pt target. Radius 12, padding 0 16.
- `.dr-ic` — An optional leading glyph, 20px, 8px before the label, drawn in the label's ink.
- `.dr-btn--primary` — The fill. Signal Green behind a charcoal label, 9.46:1, with the one shadow rung a resting control may carry.

## Variants

### Primary

```html
<button class="dr-btn dr-btn--primary dr-btn--block" type="button">Rate this order</button>
```

The screen's one green control. Charcoal on green, 9.46:1. Hover brightens by 3%; press dips 1px.

### Secondary

```html
<button class="dr-btn dr-btn--secondary dr-btn--block" type="button">Contact operator</button>
```

Every other filled action. Warm grey fill, charcoal label, 11.54:1, no shadow.

### Tertiary

```html
<button class="dr-btn dr-btn--tertiary" type="button">Cancel</button>
```

No fill; slate label, 6.62:1. The skip-or-cancel voice in a navigation bar, never in the action bar.

### Text

```html
<button class="dr-btn dr-btn--text" type="button">Save</button>
```

No fill; the green ink that may be text, 5.58:1 on the page. The right-hand commit in a modal's navigation bar.

### Disabled

```html
<button class="dr-btn dr-btn--primary dr-btn--block" type="button" disabled>View delivery photo</button>
```

Built, not dimmed: the secondary's own grey with a slate label, 4.77:1. Blanket opacity would take charcoal-on-green to 2.35:1.

### Pay

```html
<a class="dr-btn dr-btn--pay dr-btn--block" href="#" aria-label="Pay with Apple Pay"><svg class="dr-paymark dr-paymark--pay" viewBox="0 0 46 23" aria-hidden="true" focusable="false"><svg x="3.1" y="5.19" width="10.33" height="12.69" viewBox="0 0 814 1000" preserveAspectRatio="xMidYMid meet"><path fill="#FFF" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg><text x="16.37" y="16.85" textLength="26.54" lengthAdjust="spacingAndGlyphs" font-size="15" font-weight="600" fill="#FFF">Pay</text></svg></a>
```

The one rung whose colour the product does not choose. Apple and Google allow black, white, or white with an outline on a button that starts their payment. Used in the pay drawer only.

### Block and icon

```html
<div style="display:flex;gap:12px;align-items:center;width:341px;max-width:100%"><button class="dr-btn dr-btn--secondary dr-btn--block" type="button">Full width</button><button class="dr-btn dr-btn--icon" type="button" aria-label="Delete order"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.6h16"/><path d="M9.6 6.6V4.9a1.1 1.1 0 0 1 1.1-1.1h2.6a1.1 1.1 0 0 1 1.1 1.1v1.7"/><path d="M6.3 6.6l.85 12.1a1.6 1.6 0 0 0 1.6 1.5h6.5a1.6 1.6 0 0 0 1.6-1.5l.85-12.1"/><path d="M10.3 10.4v6M13.7 10.4v6"/></svg></button></div>
```

`--block` takes the column's width: the default in an action bar and at the foot of a card. `--icon` is a 44 × 44 square whose accessible name lives in `aria-label`.

## When to use

A button is a verb the user commits to. The system spends exactly one green control per screen. The primary button carries the screen's main job and covers 81–100% of that screen's green, while everything else that can be tapped is warm grey. In the action bar every button is filled and stacks one per row at full width, primary first, so no label wraps at 320pt. Text-only rungs (tertiary, text) live in navigation bars and inside cards, never on the bottom edge.

Two rungs in DESIGN.md are not in the live system. *Outline* (pill, slate edge) and *destructive text* are declared in the `ui/kit.css` archive, but no screen draws them, so they were never ported into `components/`. The first screen that needs one brings it in, and this page follows.

The label is the outcome, not the mechanism: *Pay 1,450 UAH*, *Rate this order*, *View delivery photo*. One word stands for one concept: *Contact support* to reach a person, *Try again* to recover, *Withdraw* for money out. No exclamation marks and no *successfully*. A price is stated in the label before the tap, the way P3 of the voice asks.

Sources: DESIGN.md § Buttons · § Named rules (One Accent, Built Not Dimmed) · voice.md P1, P3 · microcopy.md § Inconsistency catalogue · inventory.md § 1.2

## Rule

```html
<div style="display:flex;flex-direction:column;gap:8px;width:341px;max-width:100%"><button class="dr-btn dr-btn--primary dr-btn--block" type="button">Pay 1,450 UAH</button><button class="dr-btn dr-btn--secondary dr-btn--block" type="button">Change time</button></div>
```

An action bar with two actions: one primary for the screen's job and a secondary for the way out, both full width, one per row. (Which of the two leads is not settled across the screens yet; inventory.md records both orders.)

## Anti-rule

```html
<div style="display:flex;gap:8px;width:341px;max-width:100%"><button class="dr-btn dr-btn--primary" type="button">Pay 1,450 UAH</button><button class="dr-btn dr-btn--primary" type="button">Contact operator</button></div>
```

Two green buttons split across one row. A second primary spends the screen's only accent twice, and a split row is where labels wrap. Make the second action a [secondary](button.html#variant-secondary) on its own row. To pick between routes rather than commit to one, use a [choice card](choice-card.html).
