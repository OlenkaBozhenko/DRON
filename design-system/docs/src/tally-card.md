---
name: Tally card and live order
slug: tally-card
group: Wide screens
order: 9
classes: .dr-tally · __title · __sub · __row · __key · __who · .dr-live
file: tally.css
inventory: (new, wide screens)
kit: —
---

## Anatomy

```html
<div style="width:320px;max-width:100%"><div class="dr-tally dr-material"><span class="dr-live">Live</span><h2 class="dr-tally__title">Package delivery</h2><p class="dr-tally__sub">Podil → Osokorky · arrives 10:09</p>
        <span class="dr-rail dr-rail--at2">
                  <span class="dr-rail__step"><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></span>
                  <span class="dr-rail__step" aria-current="step"><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">En route</span></span>
                  <span class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">On&#8209;site</span></span>
                  <span class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">Done</span></span>
                </span>
        <div class="dr-tally__who"><img src="../assets/people/thumbs/operator.png" alt=""><span>Andriy M.<small>Verified by DRON · 4.9 ★</small></span></div></div></div>
```

- `.dr-live` — *Live*: a green dot and the word, `--text-accent-wide`.
- `.dr-tally__title` — What the card is: the order, or what is being counted.
- `.dr-rail` — The order's progress, the phone's own rail.
- `.dr-tally__who` — The operator: the face, the name, the credential and the rating.

## Variants

### Phone

```html
<p class="dr-note">Not on the phone.</p>
```

The phone keeps its own home and tab bar; nothing here reaches it.

### Labelled figures

```html
<div style="width:320px;max-width:100%"><div class="dr-tally dr-material"><h2 class="dr-tally__title">Free now near you</h2><div class="dr-tally__row"><span class="dr-tally__key">Package delivery</span><span>46 drones</span></div><div class="dr-tally__row"><span class="dr-tally__key">Photo &amp; video</span><span>18 drones</span></div><div class="dr-tally__row"><span class="dr-tally__key">Inspection</span><span>9 drones</span></div></div></div>
```

Free now near you, Your month: key and value rows on the material, a hairline between.

### Tablet

```html
<p class="dr-note">Coming soon.</p>
```

The tablet layout is being redesigned from scratch (the designer, 2026-10-18). Until then this page shows the phone and the desktop only.

## States

No state of its own: read, not pressed.

## When to use

In the right rail: the live order and a few figures about the client's own use.

Sources: responsive/width-audit.md § The designer's direction

## Rule

Three or four rows; more is a screen, not a card.

## Anti-rule

Do not put an action inside a tally card; the order opens from *Activity*.
