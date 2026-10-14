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
<ul class="dr-rail dr-rail--at2 dr-rail--zone" style="width:260px">
  <li class="dr-rail__step"><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></li>
  <li class="dr-rail__step" aria-current="step"><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">En route</span></li>
  <li class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">On&#8209;site</span></li>
  <li class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">Done</span></li>
</ul>
```

- `.dr-rail` — A 4-column grid. The track runs behind the circles from the centre of column 1 to the centre of column 4 (12.5% to 87.5%), `--line` for the rail and green for the walked span.
- `.dr-node--done` — A finished milestone: green fill and border, charcoal check, 9.46:1.
- `.dr-node--now` — The live milestone: green border, a filled charcoal dot and a 4px halo of green at 20%.
- `.dr-rail__lbl--now` — The live label steps from slate 10.5/400 to charcoal 10.5/600, so the state is carried by glyph, weight and position, never colour alone.
- `li:last-child .dr-node` — A pending milestone: 22px circle, 2px `--line` border on `--card`, no glyph.

## Variants

### Node states

```html
<div style="display:flex;gap:16px;align-items:center"><span class="dr-node" aria-hidden="true"></span><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.4"/></svg></span></div>
```

Pending, done, now: one 22px circle with a 2px border and a 12px glyph. Done is the green fill under a charcoal check at 9.46:1; now keeps the card ground and adds its own dot, so it is never an empty ring told apart by colour.

### Horizontal rail, step 2 of 4

```html
<ul class="dr-rail dr-rail--at2" style="width:300px;max-width:100%">
  <li class="dr-rail__step"><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></li>
  <li class="dr-rail__step" aria-current="step"><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">En route</span></li>
  <li class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">On&#8209;site</span></li>
  <li class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">Done</span></li>
</ul>
```

`--at2` is the fill, not a step count: the track is coloured as far as the order has walked, step 1 to 2 of 4, computed 25%. This is the rail inside the live order card on `order-history`.

### Under a zone label

```html
<div style="width:326px;max-width:100%"><ul class="dr-rail dr-rail--at2 dr-rail--zone">
  <li class="dr-rail__step"><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></li>
  <li class="dr-rail__step" aria-current="step"><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">En route</span></li>
  <li class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">On&#8209;site</span></li>
  <li class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">Done</span></li>
</ul></div>
```

`--zone` adds the 12px block margin the rail needs when it stands under a zone label. Measured 326.2 × 45.7 on `tracking`.

## When to use

The rail answers the question the client asks most between payment and arrival: where is my order now. It closes the void RJ-C2 names, so it stands wherever a live order is shown: the active card on `order-history` and the top of `tracking` and its `-aerial` / `-inspection` variants. One node component serves both, where two class names once drew the same circle.

The milestones are the canonical four everywhere: **Accepted · En route · On-site · Done**. Labels are one or two words, the user's words for where the order is, never equipment terms. `On‑site` takes a non-breaking hyphen so the shortest label cannot break and shift the rail. `aria-current="step"` marks the live step programmatically, so `WCAG 1.4.1` is met by glyph, weight and position.

DESIGN.md also describes a vertical axis on tracking (a 2px connector at `left:10px`). No class for it is declared in `components/`, and `tracking` draws the horizontal rail, so it is not shown here.

Sources: DESIGN.md § Progress · voice.md P1, P4 · kit.html "One node, two axes" · CLAUDE.md RJ-C2

## Rule

```html
<ul class="dr-rail dr-rail--at2" style="width:300px;max-width:100%">
  <li class="dr-rail__step"><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></li>
  <li class="dr-rail__step" aria-current="step"><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">En route</span></li>
  <li class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">On&#8209;site</span></li>
  <li class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">Done</span></li>
</ul>
```

The four milestones of one live order, with the current one marked by `aria-current="step"`, its own dot and a heavier label.

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
