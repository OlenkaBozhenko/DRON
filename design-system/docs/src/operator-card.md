---
name: Operator card
slug: operator-card
group: Surfaces
order: 230
classes: .dr-op · __photo · __info · __name · __rating · __badges
file: card.css
inventory: Operator card
kit: 893
---

## Anatomy

```html
<article class="dr-op" style="width:341px;max-width:100%">
  <span class="dr-op__photo"><img src="../assets/people/thumbs/operator.png" alt=""></span>
  <span class="dr-op__info">
    <span class="dr-op__name">Andriy M.</span>
    <span class="dr-op__rating">4.9 ★ · 214 jobs</span>
    <span class="dr-chips dr-op__badges"><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/><path d="M9 11.5l2.2 2.2L15 10"/></svg>Verified by DRON<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/></svg>Insured<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span></span>
  </span>
</article>
```

- `.dr-op` — The card: `--bg-surface`, padding 20 / 16, gap 12, radius 16, `overflow:hidden`, no shadow.
- `.dr-op__photo` — The operator, a full-height panel on the left edge at 117 × 138.1, the asset's own 595 × 702 ratio, uncropped. Negative margins push it out over the card's inset; the card cuts its two outer corners.
- `.dr-op__name` — The name, 15/600 charcoal.
- `.dr-op__rating` — Rating and job count, 12.5/400 in `--text-muted`, tabular figures.
- `.dr-op__badges` — The [credential chips](chip.html), 9 under the rating, on the card before any tap.

## Variants

### Photo-led

```html
<article class="dr-op" style="width:341px;max-width:100%">
  <span class="dr-op__photo"><img src="../assets/people/thumbs/operator.png" alt=""></span>
  <span class="dr-op__info">
    <span class="dr-op__name">Andriy M.</span>
    <span class="dr-op__rating">4.9 ★ · 214 jobs</span>
    <span class="dr-chips dr-op__badges dr-chips--stack"><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/><path d="M9 11.5l2.2 2.2L15 10"/></svg>Verified by DRON<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/></svg>Insured<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span></span>
  </span>
</article>
```

The operator who will do the job, on `tracking` and `order-confirmed` and their service and state variants. On `order-confirmed` the chips stack, because the full-bleed photo leaves 196px.

### Text-led

```html
<article class="dr-op" style="width:341px;max-width:100%">
  <span class="dr-op__info">
    <span class="dr-op__name">DRON Support</span>
    <span class="dr-op__rating">Online 24/7 &middot; typically replies in ~3 min</span>
    <span class="dr-chips dr-op__badges"><span class="dr-chip">Human agent</span><span class="dr-chip">Order #DR-4821</span></span>
  </span>
  <span class="dr-brand" role="img" aria-label="DRON"></span>
</article>
```

On `contact-support` the leading element is the 60 × 20 DRON mark instead of a photo, placed on the right: text left, mark right, card 341 × 105.3. The chips are plain facts, so they keep the grey pair.

## When to use

The operator card is the trust surface. It answers RJ-C1, the highest single drop-off in the CJM: confirm the operator is real and qualified, before any tap. It also closes RJ-C2, the void between payment and arrival, by putting the operator's name and photo on the confirmation screen instead of a generic *order received* state. It stands on `order-confirmed`, `tracking` and their aerial, inspection, empty and error variants, and in its text-led form on `contact-support`.

The photograph is shown whole, never cropped to a circle, because the client is handing a job to a person and needs to see them. The rating line states facts the client can check: score and job count, *4.9 ★ · 214 jobs*. The credentials are written as facts, *Verified by DRON*, *Insured*; the word is always *operator*, never *pilot*.

Sources: DESIGN.md § Cards · § Chips and badges · inventory.md § 1 (Operator card) · ui/kit.html § Operator card · CLAUDE.md § Design Focus (RJ-C1, RJ-C2)

## Rule

```html
<article class="dr-op" style="width:341px;max-width:100%">
  <span class="dr-op__photo"><img src="../assets/people/thumbs/operator.png" alt=""></span>
  <span class="dr-op__info">
    <span class="dr-op__name">Andriy M.</span>
    <span class="dr-op__rating">4.9 ★ · 214 jobs</span>
    <span class="dr-chips dr-op__badges"><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/><path d="M9 11.5l2.2 2.2L15 10"/></svg>Verified by DRON<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span></span>
  </span>
</article>
```

Once an order has an operator: who is coming, their record and their credentials, in one card on the screen where the client waits.

## Anti-rule

```html
<article class="dr-op" style="width:341px;max-width:100%">
  <span class="dr-op__info">
    <span class="dr-op__name">Andriy M.</span>
    <span class="dr-op__rating">Top pilot · amazing shots</span>
  </span>
</article>
```

No photo, no credentials, and adjectives where facts belong; *pilot* is not the product's word. A card without the proof does not do the operator card's job. To list offers the client chooses between, use a [card](card.html) or the offers of [results on the map](map-screen.html); to show the signed-in person's own profile, use the [profile head](profile-head.html).
