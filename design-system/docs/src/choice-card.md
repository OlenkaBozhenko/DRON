---
name: Choice card
slug: choice-card
group: Forms
order: 50
classes: .dr-choice · __body · __title · __chev · __head · __desc
file: card.css
inventory: Choice card
kit: 2251
---

## Anatomy

```html
<a class="dr-choice" href="#" style="width:341px;max-width:100%"><span class="dr-well"><img src="../assets/objects/thumbs/cargo-box.png" alt=""></span><span class="dr-choice__body"><span class="dr-choice__title">I need a service done</span></span><span class="dr-choice__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span></a>
```

- `.dr-choice` — The card, one `<a href>`: `--card` at radius 16, padding 16, gap 20 (16 at ≤ 389px). No hover; the ring is keyboard-only, 2.5px `--ink`.
- `.dr-well` — The picture, this card's own size: 56 × 44 with a 48 × 36 picture box.
- `.dr-choice__title` — The route's name, 17/600, `--ink` on the card 14.37:1, and the link's accessible name.
- `.dr-choice__chev` — `chevron.forward`, 16px `--slate`, 5.95:1, flush with the trailing edge and `aria-hidden`.

## Variants

### Route

```html
<a class="dr-choice" href="#" style="width:341px;max-width:100%"><span class="dr-well"><img src="../assets/drones/thumbs/tight/drone-flight-camera.png" alt=""></span><span class="dr-choice__body"><span class="dr-choice__title">I provide services</span></span><span class="dr-choice__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span></a>
```

A title and a chevron, with or without the well: the five cards on `role-select` and `support`. With one line of text the smallest card is 341.4 × 76, 173% of `HIG · 44pt`.

### Alert row

```html
<a class="dr-choice" href="#" style="width:341px;max-width:100%"><span class="dr-choice__body"><span class="dr-choice__head"><span class="dr-choice__title">Your delivery photo is ready</span><span class="dr-chip dr-chip--sm dr-chip--unread">New</span></span><span class="dr-choice__desc">Package delivery · 10:12</span></span></a>
```

The eleven rows on `notifications` and `operator-notifications`. `__desc` (13 `--slate`, 5.95:1) says which order and when, and there is no chevron. The row measures 73.78 tall.

## When to use

A choice card is navigation, not a picker: every instance is a link that leaves the screen. It is the fork at the start of a path. On `role-select` the user says who they are, and on `support` they name what went wrong. On the two alert logs it is the row that opens the order an alert is about.

A card a person taps is a title. The title names the destination in the user's words: *I need a service done*, *My order didn't arrive*, *Safety or trust concern*. It takes a description only where the destination is not self-evident from the words. On an alert row that is the proof of which order and when, *Package delivery · 10:12*. The description sits inside the link, so the title alone carries the purpose (`WCAG 2.4.4`).

Sources: DESIGN.md § The choice card carries the arrow again · § The choice card's title goes back to the title step's 600 · § The alert log's list row · inventory.md § 1.5 · voice.md P2, P4

## Rule

```html
<div style="display:flex;flex-direction:column;gap:8px;width:341px;max-width:100%"><a class="dr-choice" href="#"><span class="dr-choice__body"><span class="dr-choice__title">My order didn't arrive</span></span><span class="dr-choice__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span></a><a class="dr-choice" href="#"><span class="dr-choice__body"><span class="dr-choice__title">The photo or report isn't right</span></span><span class="dr-choice__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span></a></div>
```

`support`'s triage: each card is a different route, and the title is the whole of what the user needs to read to pick one.

## Anti-rule

```html
<div style="display:flex;flex-direction:column;gap:8px;width:341px;max-width:100%"><a class="dr-choice" href="#"><span class="dr-choice__body"><span class="dr-choice__title">Instant to card •••• 3318</span></span><span class="dr-choice__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span></a><a class="dr-choice" href="#"><span class="dr-choice__body"><span class="dr-choice__title">Bank transfer</span></span><span class="dr-choice__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span></a></div>
```

Choice cards used to set a value on the same screen. A value the form keeps is a [radio](checkbox-radio.html#variant-radio), or a [picker row](picker-row.html) when the list is long enough to need its own drawer. A choice card always leaves.
