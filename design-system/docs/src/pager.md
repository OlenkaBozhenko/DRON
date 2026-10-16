---
name: Pager
slug: pager
group: Progress
order: 20
classes: .dr-pager · .on
file: media.css
inventory: Pager
kit: 2346
---

## Anatomy

```html
<div class="dr-pager" aria-hidden="true" style="margin-top:0"><span class="on"></span><span></span><span></span></div>
```

- `.dr-pager` — The row: centred, 8px between dots, 12px above it by default and 0 on every screen, where it follows `.dr-slider--bleed`. `aria-hidden`, because the slide it points at already announces *Slide n of 3*.
- `.on` — The lit dot: an 8px disc in `--color-action`, Signal Green #9BCF4A. `.on` in the markup is the first paint only; the script moves it to the slide whose centre is nearest the scrollport's.
- `span:last-child` — A resting dot: an 8px `--bg-muted` disc (#D6D2C9), built and not dimmed.

## Variants

### Indicator

```html
<div class="dr-pager" aria-hidden="true" style="margin-top:0"><span></span><span class="on"></span><span></span></div>
```

The only shape. Lit green against resting `--bg-muted` is a 1.22:1 step, and green on the page is 1.69:1 against `WCAG 1.4.11`'s 3:1; both are accepted because the dot is never the sole carrier: the slide itself shows position. The fill fades over 0.12s (`--time-0-12`, ease-out) on `background-color` only, and stops under `prefers-reduced-motion`.

## States

No state of its own: the dots are `aria-hidden` and take no pointer or focus. `.on` follows the slide; it is position, not a state of interaction.

## When to use

The pager is the dot row under the onboarding carousel. Three screens build it, all with the same markup: `welcome`, `onboarding-client` and `onboarding-operator`. It is an indicator, not a control: the slides change by swipe, so the dots are `<span>`s and carry no target. That is the designer's call of 2026-08-18. As links they were 8 × 8 targets, three times under `WCAG 2.5.8`'s 24 × 24 and five times under `HIG`'s 44pt; with no target, `2.5.8` no longer applies, and the scroll container gives the keyboard what the links gave (`2.1.1`).

The lit dot follows the swipe, which is what `HIG · Page controls` asks of the current indicator. The row itself does not move between slides. The pager carries no words; every name it needs lives on the slides.

Sources: wireframes/welcome.html, onboarding-client.html, onboarding-operator.html · inventory.md § 1.1 Pager · kit.html Onboarding slider · components/media.css

## Rule

```html
<div class="dr-pager" aria-hidden="true" style="margin-top:0"><span class="on"></span><span></span><span></span></div>
```

Three dots under three slides, one lit, as on `welcome`, the row hidden from assistive tech because each slide states its own position.

## Anti-rule

```html
<div class="dr-pager" aria-hidden="true" style="margin-top:0"><span class="on"></span><span class="on"></span><span></span><span></span></div>
```

The pager as order progress: four dots with the walked ones lit. Dots say position among equal slides, not how far a job has gone, and they carry no labels. To show where an order is, use the [progress rail](progress-rail.html), whose four milestones are named.
