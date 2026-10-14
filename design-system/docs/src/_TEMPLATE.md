---
name: Component name, as inventory.md and kit.html call it
slug: kebab-case-file-name
group: Shell | Actions | Surfaces | Progress | States | Media | Forms
order: 10
classes: .dr-thing · --variant · __part
file: thing.css
inventory: Inventory row name; another inventory row this page covers
kit: 514
---

<!--
THE SOURCE OF ONE COMPONENT PAGE. design-system/docs/build.py turns this file
into design-system/docs/<slug>.html; nothing is written into the HTML by hand.

Rules for every file in src/:
- English only. Facts, not adjectives (voice.md). No "successfully", no "!".
- Every ```html block is LIVE markup drawn by design-system/index.css. Copy it
  from ui/kit.html (the specimen) or from the wireframe that draws it; never
  invent a class. Asset paths are written as in ui/kit.html ("../assets/...");
  build.py rewrites them for the docs folder's depth.
- A block is wrapped in a plate that already carries .dr. Add an inline width
  (style="width:341px;max-width:100%") the way kit.html does when the component
  needs the 375 frame's column.
- Numbers come from DESIGN.md / inventory.md as measured there. Do not
  re-measure in prose and do not round.

The five sections below are required, in this order, with these headings.
-->

## Anatomy

```html
<button class="dr-btn dr-btn--primary" type="button">Label</button>
```

- `.dr-btn` — The control: 44pt minimum height, 12px radius.
- `.dr-ic` — A leading glyph, when there is one.

<!-- Each item: a CSS selector in backticks, an em dash, then what the part is.
     The selector is resolved INSIDE the block above and gets a numbered pin,
     so it must match an element in that block. 2-7 parts. -->

## Variants

### Variant name

```html
<button class="dr-btn dr-btn--secondary" type="button">Label</button>
```

One sentence: what differs and the measured value that matters (ratio, size).

<!-- One ### per variant or size listed for this component in inventory.md.
     Several variants may share one block when they belong side by side. -->

## When to use

One or two paragraphs: the role this component plays in the product, from
DESIGN.md (the component's section) and microcopy.md / voice.md (what its words
say and how). Name the screens it stands on.

Sources: DESIGN.md § Buttons · microcopy.md § ... · inventory.md § 1.2

## Rule

```html
<button class="dr-btn dr-btn--primary dr-btn--block" type="button">Pay 1,450 UAH</button>
```

The appropriate use, in one or two sentences: where it stands and why.

## Anti-rule

```html
<button class="dr-btn dr-btn--primary" type="button">Contact operator</button>
```

When NOT to use it and what to use instead. Link the other component by slug:
[Secondary button](button.html#variant-secondary) or [Choice card](choice-card.html).
The block is optional; when present it shows the wrong use, drawn live.
