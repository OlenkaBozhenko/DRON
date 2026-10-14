---
name: Identity mark
slug: identity-mark
group: Actions
order: 50
classes: .dr-idmark
file: button.css
inventory: Identity mark
kit: 635
---

## Anatomy

```html
<span class="dr-btn dr-btn--primary dr-btn--block" style="width:341px;max-width:100%"><img class="dr-idmark" src="../assets/brand/diia.png" alt="" width="20" height="20" decoding="async">Continue with Diia</span>
```

- `.dr-idmark` — The provider's mark: a 20 × 20 square PNG, quoted from the designer's artwork, with no CSS radius and `alt=""`.
- `.dr-btn` — The button that carries it, whose label names the provider.

## Variants

### Diia

```html
<span class="dr-btn dr-btn--primary dr-btn--block" style="width:341px;max-width:100%"><img class="dr-idmark" src="../assets/brand/diia.png" alt="" width="20" height="20" decoding="async">Continue with Diia</span>
```

Diia's black squircle on the screen's primary button.

### BankID

```html
<span class="dr-btn dr-btn--secondary dr-btn--block" style="width:341px;max-width:100%"><img class="dr-idmark" src="../assets/brand/bankid.png" alt="" width="20" height="20" decoding="async">Continue with BankID</span>
```

BankID's `#94C11F` plate with a white *id*, on the secondary button. The badge, not the wordmark, so the brand's name is not printed twice beside a label that already says it.

## When to use

Identity marks put the two sign-in providers, Diia and BankID, on the buttons of `signin` (`operator-signup` carries the same labels but is still grayscale and draws no mark). They are square at 20 × 20 where the payment mark is 40 × 20, because these are badges and a 1:1 mark in a 2:1 box would letterbox; 20 matches the payment marks' height, so the two families share one optical line.

The marks are quoted, not drawn: PNGs outside the 24-grid icon set, neither recoloured to the palette nor redrawn to the 1.7 stroke, because a restyled brand mark is no longer the brand's mark. Each carries its own rounded corners as transparency, so a CSS radius would cut a second corner inside the first. BankID's green sits one row below DRON's `#9BCF4A` primary; both are correct, one the brand's and one the product's.

The label is the standard provider pattern, *Continue with Diia*, *Continue with BankID*; the screen's heading already says *Sign in*.

Sources: DESIGN.md § The identity mark · inventory.md § 1 (Identity mark) · microcopy.md § Audit V6

## Rule

```html
<div style="display:flex;flex-direction:column;gap:8px;width:341px;max-width:100%"><span class="dr-btn dr-btn--primary dr-btn--block"><img class="dr-idmark" src="../assets/brand/diia.png" alt="" width="20" height="20" decoding="async">Continue with Diia</span><span class="dr-btn dr-btn--secondary dr-btn--block"><img class="dr-idmark" src="../assets/brand/bankid.png" alt="" width="20" height="20" decoding="async">Continue with BankID</span></div>
```

One mark per provider button, leading the label, on `signin`: Diia as the primary, BankID as the secondary beneath it.

## Anti-rule

```html
<span class="dr-btn dr-btn--secondary dr-btn--block" style="width:341px;max-width:100%"><img class="dr-idmark" src="../assets/brand/bankid.png" alt="BankID" width="20" height="20" decoding="async">Verified operator</span>
```

A provider's mark beside words that are not about that provider, and an `alt` that repeats a name. The mark identifies a sign-in route and nothing else. A credential the platform vouches for is a [credential chip](chip.html); a product glyph is drawn from the outline icon set.
