---
name: Progress rail
slug: progress-rail
group: Progress
order: 10
classes: .dr-node · --done · --now · .dr-rail · --at2 · --zone · __step · __lbl · __lbl--now
file: progress.css
inventory: (.dr-node, .dr-rail) — the order card's rail and the tracking timeline
kit: 2304
---

## Anatomy

```html
<ul class="dr-rail dr-rail--at2 dr-rail--zone" style="width:326px;max-width:100%">
  <li class="dr-rail__step"><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></li>
  <li class="dr-rail__step" aria-current="step"><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">En route</span></li>
  <li class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">On&#8209;site</span></li>
  <li class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">Done</span></li>
</ul>
```

- `.dr-rail` — A 4-column grid. The 2px track runs behind the circles from the centre of column 1 to the centre of column 4 (12.5%, 75% wide), `--border-hairline` for the rail and green for the walked span. The walked span's width is `--dr-fill`.
- `.dr-node--done` — A finished milestone: green fill and border, charcoal check, 9.46:1.
- `.dr-node--now` — The live milestone: green border, a charcoal dot on the card ground and a 4px halo of green at 20%.
- `.dr-rail__lbl--now` — The live label steps from slate 11/400 to charcoal 11/600, so the state is carried by glyph, weight and position, never colour alone.
- `li:last-child .dr-node` — A pending milestone: 22px circle, 2px `--border-hairline` border on `--bg-surface`, no glyph.

From `tracking`, the majority build: nine files draw this same `<ul>` with `--zone`.

## Variants

### Node states

```html
<div style="display:flex;gap:16px;align-items:center"><span class="dr-node" aria-hidden="true"></span><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.4"/></svg></span></div>
```

Pending, done, now: one 22px circle with a 2px border and a 12px glyph, 9 above its label. Done is the green fill under a charcoal check at 9.46:1; now keeps the card ground and adds its own dot, so it is never an empty ring told apart by colour.

### In the order card, step 2 of 4

```html
<span class="dr-rail dr-rail--at2" style="width:300px;max-width:100%">
  <span class="dr-rail__step"><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></span>
  <span class="dr-rail__step" aria-current="step"><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">En route</span></span>
  <span class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">On&#8209;site</span></span>
  <span class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">Done</span></span>
</span>
```

`--at2` sets the fill, not a step count: `--dr-fill` is 25%, the track coloured from step 1 to step 2. A full walk to *Done* is 75%. This is the rail inside the live order card on `order-history`. Screens split on the markup: the nine `tracking` files build `<ul>` and `<li>` with `--zone` and `aria-hidden` on each glyph; `order-history` alone builds it from `<span>`s, since it stands inside the card's link, with no `--zone` and no `aria-hidden` on the glyphs.

### Under a zone label

```html
<ul class="dr-rail dr-rail--at2 dr-rail--zone" style="width:326px;max-width:100%">
  <li class="dr-rail__step"><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></li>
  <li class="dr-rail__step" aria-current="step"><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">En route</span></li>
  <li class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">On&#8209;site</span></li>
  <li class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">Done</span></li>
</ul>
```

`--zone` adds a 12px block margin above and below when the rail stands under a zone label. Node 22, gap 9 and an 11 × 1.4 label make it 46.4 tall. Built on `tracking`, `tracking-aerial`, `tracking-inspection` and their `-empty` and `-error` states, nine files.

## States

No state of its own: the rail reports where the order is, and nothing in it takes focus. In the order card it stands inside the card's link, which carries the states: see [order card](order-card.html#s-states).

## When to use

The rail answers the question the client asks most between payment and arrival: where is my order now. It closes the void RJ-C2 names, so it stands wherever a live order is shown: the active card on `order-history` and the Progress zone of `tracking`, its `-aerial` / `-inspection` variants and their empty and error states. `tracking-loading` draws no rail. One node component serves both places.

The milestones are the canonical four everywhere: **Accepted · En route · On-site · Done**. Labels are one or two words, the user's words for where the order is, never equipment terms. `On‑site` takes a non-breaking hyphen so the shortest label cannot break and shift the rail. `aria-current="step"` marks the live step programmatically, so `WCAG 1.4.1` is met by glyph, weight and position. Every screen shows step 2 of 4, *En route*.

The rail is horizontal only. No screen builds a vertical axis and no class for one is declared in `components/`.

Sources: wireframes/tracking.html, order-history.html · DESIGN.md § Progress · voice.md P1, P4 · components/progress.css · CLAUDE.md RJ-C2

## Rule

```html
<ul class="dr-rail dr-rail--at2 dr-rail--zone" style="width:326px;max-width:100%">
  <li class="dr-rail__step"><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></li>
  <li class="dr-rail__step" aria-current="step"><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">En route</span></li>
  <li class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">On&#8209;site</span></li>
  <li class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">Done</span></li>
</ul>
```

The four milestones of one live order on `tracking`, with the current one marked by `aria-current="step"`, its own dot and a heavier label.

## Anti-rule

```html
<ul class="dr-rail dr-rail--at2" style="width:300px;max-width:100%">
  <li class="dr-rail__step"><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Service</span></li>
  <li class="dr-rail__step" aria-current="step"><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">Details</span></li>
  <li class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">Pay</span></li>
  <li class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">Track</span></li>
</ul>
```

The rail as a checkout stepper. It tracks the order's milestones and nothing else; a rail that counts form steps teaches the client that the four nodes mean something other than where the operator is. The ordering flow is three taps and needs no stepper. For a position among slides, use the [pager](pager.html).
