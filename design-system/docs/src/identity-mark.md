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
<a class="dr-btn dr-btn--primary dr-btn--block" style="width:341px;max-width:100%" href="../../wireframes/role-select.html"><img class="dr-idmark" src="../assets/brand/diia.png" alt="" width="20" height="20" decoding="async">Continue with Diia</a>
```

- `.dr-idmark` — The provider's mark: a 20 × 20 square PNG, quoted from the designer's artwork, with no CSS radius and `alt=""`.
- `.dr-btn` — The button that carries it, a link to `role-select` whose label names the provider. Copied from `signin`.

## Variants

### Diia

```html
<a class="dr-btn dr-btn--primary dr-btn--block" style="width:341px;max-width:100%" href="../../wireframes/role-select.html"><img class="dr-idmark" src="../assets/brand/diia.png" alt="" width="20" height="20" decoding="async">Continue with Diia</a>
```

Diia's black squircle on the screen's primary button.

### BankID

```html
<a class="dr-btn dr-btn--secondary dr-btn--block" style="width:341px;max-width:100%" href="../../wireframes/role-select.html"><img class="dr-idmark" src="../assets/brand/bankid.png" alt="" width="20" height="20" decoding="async">Continue with BankID</a>
```

BankID's `#94C11F` plate with a white *id*, on the secondary button. The badge, not the wordmark, so the brand's name is not printed twice beside a label that already says it.

## When to use

Identity marks put the two sign-in providers, Diia and BankID, on the buttons of `signin`, and that is the only screen that draws them. The screens split here: `operator-signup` carries the same two labels on the same `dr-btn--primary` and `dr-btn--secondary` block buttons with no mark, and `signin-error`'s recovery pair (*Try again with Diia*, *Use BankID*) draws none either. They are square at 20 × 20 where the payment mark is 40 × 20, because these are badges and a 1:1 mark in a 2:1 box would letterbox; 20 matches the payment marks' height, so the two families share one optical line.

The marks are quoted, not drawn: PNGs outside the 24-grid icon set, neither recoloured to the palette nor redrawn to the 1.7 stroke, because a restyled brand mark is no longer the brand's mark. Each carries its own rounded corners as transparency, so a CSS radius would cut a second corner inside the first. BankID's green sits one row below DRON's `#9BCF4A` primary; both are correct, one the brand's and one the product's.

The label is the standard provider pattern, *Continue with Diia*, *Continue with BankID*; the screen's heading already says *Sign in*.

Sources: DESIGN.md § The identity mark · inventory.md § 1 (Identity mark) · microcopy.md § Audit V6

## Rule

```html
<div style="display:flex;flex-direction:column;gap:8px;width:341px;max-width:100%"><a class="dr-btn dr-btn--primary dr-btn--block" href="../../wireframes/role-select.html"><img class="dr-idmark" src="../assets/brand/diia.png" alt="" width="20" height="20" decoding="async">Continue with Diia</a><a class="dr-btn dr-btn--secondary dr-btn--block" href="../../wireframes/role-select.html"><img class="dr-idmark" src="../assets/brand/bankid.png" alt="" width="20" height="20" decoding="async">Continue with BankID</a></div>
```

One mark per provider button, leading the label, on `signin`: Diia as the primary, BankID as the secondary beneath it.

## Anti-rule

```html
<a class="dr-btn dr-btn--secondary dr-btn--block" style="width:341px;max-width:100%" href="../../wireframes/role-select.html"><img class="dr-idmark" src="../assets/brand/bankid.png" alt="BankID" width="20" height="20" decoding="async">Verified operator</a>
```

A provider's mark beside words that are not about that provider, and an `alt` that repeats a name. The mark identifies a sign-in route and nothing else. A credential the platform vouches for is a [credential chip](chip.html); a product glyph is drawn from the outline icon set.
