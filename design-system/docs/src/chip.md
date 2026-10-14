---
name: Credential chip
slug: chip
group: Surfaces
order: 200
classes: .dr-chip · --claim · --sm · .dr-chips · --stack
file: badge.css
inventory: Verification badge
kit: 1052
---

## Anatomy

```html
<span class="dr-chips"><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/><path d="M9 11.5l2.2 2.2L15 10"/></svg>Verified by DRON<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span></span>
```

- `.dr-chips` — The row that holds credentials: wraps, gap 6.
- `.dr-chip` — The pill: `--r-pill`, padding 5 / 10, 12/600, gap 6. Measured 164.1 × 26.8 for *Verified by DRON*.
- `.dr-ic:first-child` — The leading mark, 14px: a shield with the check inside it for a claim DRON confirmed.
- `.dr-ic:last-child` — The trailing tick, 14px. It says *confirmed* rather than merely stated, so the chip is never reduced to its colour.

## Variants

### Claim

```html
<span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/><path d="M9 11.5l2.2 2.2L15 10"/></svg>Verified by DRON<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span>
```

`--bg-accent-tint` under charcoal, 14.75:1. Green means DRON checked this document. The tint is not counted against the green budget.

### Fact

```html
<span class="dr-chips"><span class="dr-chip">Package delivery</span><span class="dr-chip">Today</span></span>
```

The base chip: `--bg-well` under `--text-muted`, 5.51:1. A plain supporting fact, such as the service and the day on a review in `ratings`.

### Small

```html
<span class="dr-chip dr-chip--sm">Operator</span>
```

11/600, padding 3 / 8, 65.7 × 21.4 against the base 74.2 × 26.8. Only for a chip that sits beside a name, where the base size outweighs the 15px name; colour is unchanged at 5.51:1.

### Stacked

```html
<span class="dr-chips dr-chips--stack"><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/><path d="M9 11.5l2.2 2.2L15 10"/></svg>Verified by DRON<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/></svg>Insured<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span></span>
```

`--stack` sets `flex-direction: column`: the pair stacks rather than wraps, because a credential that runs off the side of a card is one the client did not read. Used on `order-confirmed`, where the full-bleed operator photo leaves 196px.

## When to use

The credential chip answers RJ-C1, the highest single drop-off in the CJM: confirm the operator is real and qualified. So the credentials sit on the [operator card](operator-card.html), beside the name and job count and before any tap, never on a profile page behind a click. They stand on `tracking`, `order-confirmed`, `account`, `operator-account`, `operator-listings` and `inspection-report`. The same chip family also carries plain facts on review cards and, at `--sm`, a role beside a name.

The rule reads in one line: green means DRON confirmed this document, grey means a plain supporting fact. Green is the tint behind a charcoal label, never the letters, so the chip does not break the fill-only rule; it is the rule. The shield with a check, the plain shield and the trailing tick make the difference legible in drawing as well as in colour (`WCAG 1.4.1`). A `--trust` blue rung for third-party confirmation is declared in the `ui/kit.css` archive and drawn nowhere; it was not ported into `components/`.

The words are facts, not adjectives: *Verified by DRON*, *Insured*, *CAA licence*. On `order-confirmed-empty` alone the claim is shortened to *Verified* so the pair fits one row.

Sources: DESIGN.md § Chips and badges · § Named rules (One Accent) · inventory.md § 1 (Verification badge) · microcopy.md § order-confirmed, tracking · voice.md P2

## Rule

```html
<div class="dr-op" style="width:341px;max-width:100%"><span class="dr-op__info"><span class="dr-op__name">Andriy M.</span><span class="dr-op__rating">4.9 ★ · 214 jobs</span><span class="dr-chips dr-op__badges"><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/><path d="M9 11.5l2.2 2.2L15 10"/></svg>Verified by DRON<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/></svg>Insured<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span></span></span></div>
```

Credentials on the card, under the name they vouch for, readable without a tap.

## Anti-rule

```html
<span class="dr-chips"><span class="dr-chip dr-chip--claim">Book again</span></span>
```

A chip used as a control. A chip states a fact and takes no tap; an action is a [button](button.html), and an applied filter that can be removed is the filter chip of [in-page tabs](in-page-tabs.html). A state that changes, such as availability, is the [availability badge](availability.html).
