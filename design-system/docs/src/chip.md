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
<span class="dr-chips dr-op__badges"><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/><path d="M9 11.5l2.2 2.2L15 10"/></svg>Verified by DRON<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/></svg>Insured<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span></span>
```

- `.dr-chips` — The row that holds credentials: wraps, gap 6. On the operator card it also wears `.dr-op__badges`, which adds a 9px top margin.
- `.dr-chip` — The pill: radius 999, padding 5 / 10, 12/600 caption type, gap 6. 26.8 high; measured 164.1 wide for *Verified by DRON*.
- `.dr-ic:first-child` — The leading mark, 14px. A shield with a check inside it on *Verified by DRON*; a plain shield on *Insured*.
- `.dr-ic:last-child` — The trailing tick, 14px. It says *confirmed* rather than merely stated, so the chip is never reduced to its colour.

This is the pair as `tracking` builds it, the majority shape: six `tracking*` files and `order-confirmed-empty` set the two claims in a wrapping row.

## Variants

### Claim

```html
<span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/><path d="M9 11.5l2.2 2.2L15 10"/></svg>Verified by DRON<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span>
```

`--bg-accent-tint` under charcoal, 14.75:1. Green means DRON checked this document. The tint is not counted against the green budget. One screen spends the claim tint without the marks: `operator-listings` sets two plain *New* chips as `dr-chip dr-chip--claim` with no shield and no tick, on the two incoming job offers.

### Fact

```html
<span class="dr-listing__meta"><span class="dr-chip">Package delivery</span><span class="dr-chip">Today</span></span>
```

The base chip: `--bg-well` under `--text-muted`, 5.51:1. A plain supporting fact, such as the service and the day on a review in `ratings`, where the pair sits in `.dr-listing__meta` (gap 8). Fact chips also stand on `inspection-report` (*Severity · High*), `operator-listings` (*expires in 8s*, *checklist 3 / 5*), `job-checklist` and `job-checklist-error` (*3 / 5*), `contact-support` (*Human agent*, *Order #DR-4821*), `operator-dispute` (*Payment held*) and `order-history`, where the one fact chip carries a leading timer glyph (*ETA ~6 min*).

### Small

```html
<span class="dr-chip dr-chip--sm dr-chip--unread">New</span>
```

11/600, padding 3 / 8, 21.4 high against the base 26.8. No screen builds a plain `--sm` chip now. It is worn only inside two compounds: the *New* mark on `notifications` and `operator-notifications` (`--unread`, on the accent tint at 14.75:1; see [alerts log](alerts-log.html)), and the [availability badge](availability.html) on `operator-listings` and `operator-listings-empty`.

### Stacked

```html
<span class="dr-chips dr-op__badges dr-chips--stack"><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/><path d="M9 11.5l2.2 2.2L15 10"/></svg>Verified by DRON<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/></svg>Insured<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span></span>
```

`--stack` sets `flex-direction: column` and `align-items: flex-start`: the pair stacks rather than wraps, because a credential that runs off the side of a card is one the client did not read. Used on `order-confirmed`, `order-confirmed-aerial` and `order-confirmed-inspection`, beside the full-bleed operator photo. `order-confirmed-empty` does not stack: it keeps the wrapping row and shortens the claim to *Verified*.

## When to use

The credential chip answers RJ-C1, the highest single drop-off in the CJM: confirm the operator is real and qualified. So the credentials sit on the [operator card](operator-card.html), beside the name and job count and before any tap, never on a profile page behind a click. Claim chips stand on the six `tracking*` files, the four `order-confirmed*` files, `account` (*Verified with Diia*), `operator-account` (*Insured*, *CAA licence*) and `inspection-report` (*Verified by DRON* on the signature row). The same chip family also carries plain facts on review cards, job offers and reports, and, at `--sm`, the *New* mark and the availability badge.

The rule reads in one line: green means DRON confirmed this document, grey means a plain supporting fact. Green is the tint behind a charcoal label, never the letters, so the chip does not break the fill-only rule; it is the rule. The shield with a check, the plain shield and the trailing tick make the difference legible in drawing as well as in colour (`WCAG 1.4.1`). A `--trust` blue rung for third-party confirmation is declared in the `ui/kit.css` archive and drawn nowhere; it was not ported into `components/`.

The words are facts, not adjectives: *Verified by DRON*, *Insured*, *CAA licence*, *Verified with Diia*. On `order-confirmed-empty` alone the claim is shortened to *Verified* so the pair fits one row.

Sources: DESIGN.md § Chips and badges · § Named rules (One Accent) · inventory.md § 1 (Verification badge) · microcopy.md § order-confirmed, tracking · voice.md P2

## Rule

```html
<article class="dr-op" style="width:341px;max-width:100%">
  <span class="dr-op__photo"><img src="../assets/people/thumbs/operator.png" alt="" loading="lazy" decoding="async"></span>
  <span class="dr-op__info">
    <span class="dr-op__name">Andriy M.</span>
    <span class="dr-op__rating">4.9 ★ · 214 jobs</span>
    <span class="dr-chips dr-op__badges"><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/><path d="M9 11.5l2.2 2.2L15 10"/></svg>Verified by DRON<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/></svg>Insured<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span></span>
  </span>
</article>
```

Credentials on the card, under the name they vouch for, readable without a tap. This is the operator card on `tracking`.

## Anti-rule

```html
<span class="dr-chips"><span class="dr-chip dr-chip--claim">Book again</span></span>
```

A chip used as a control. A chip states a fact and takes no tap; an action is a [button](button.html), and an applied filter that can be removed is the filter chip of [in-page tabs](in-page-tabs.html). A state that changes, such as availability, is the [availability badge](availability.html).
