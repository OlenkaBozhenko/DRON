---
name: Disclosure row
slug: disclosure-row
group: Forms
order: 110
classes: .dr-disclosure__item · [aria-current="true"]
file: disclosure.css
inventory: Disclosure row
kit: —
---

## Anatomy

```html
<div class="dr-picker__list" style="width:341px;max-width:100%"><a class="dr-disclosure__item" href="#" aria-current="true">Client: order services<svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></a><a class="dr-disclosure__item" href="#">Operator: take jobs</a></div>
```

- `.dr-disclosure__item` — One option: `min-height` 44, padding 0 16, gap 8, `--ink` at the heading step 15, 14.37:1 on the card. A hairline above every row but the first. Hover `--media`; the keyboard ring is 2.5px `--ink`, drawn inside.
- `[aria-current="true"]` — The current option. It carries the bare checkmark in `--ink`, 14.37:1. The other rows carry no mark.

No screen builds this now, and `ui/kit.html` does not show it. The specimen is drawn from `components/disclosure.css` alone, with the words of the mode picker it used to be.

## Variants

No screen builds a disclosure row now, and `ui/kit.html` shows none, so no variant is documented. The *Option list* variant this page used to show was removed for that reason. The row's rules are shared, selector for selector, with `.dr-picker__item`, which every screen does build: see [Picker row](picker-row.html).

## States

```html
<div class="dr-picker__list" style="width:341px;max-width:100%"><a class="dr-disclosure__item" href="#" aria-current="true">Client: order services<svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></a><a class="dr-disclosure__item" href="#">Operator: take jobs</a></div>
```

The Anatomy specimen: no screen builds the row now.

## When to use

The disclosure row is the option row of an in-flow list: a native `<details>` that opens in place and pushes the page down instead of floating. It was built on `account` as the mode picker. In the project-wide picker sweep (2026-08-16) that picker became a row with a drawer, like every other dropdown, so the component has no page left in the product. `operator-account` records the same in a comment: `.dr-disclosure` is applied to no page in the painted product. It is kept on the bench, recorded rather than deleted.

Only the option row was ported into `components/`. The `<details>` container, its `<summary>` and the chevron that turns 180° on open are kept in the `ui/kit.css` archive. The first screen that needs an in-flow disclosure brings the container in, and this page follows.

An option is named by its own value, *Client: order services*, *Operator: take jobs*, and the current one is marked by the checkmark, never by the word *current*.

Sources: inventory.md § 1.5 (Disclosure row) · DESIGN.md § The picker row (options) · ui/kit.css (archive, `.dr-disclosure`) · wireframes/account.html, operator-account.html

## Rule

```html
<div class="dr-picker__list" style="width:341px;max-width:100%">
        <a class="dr-picker__item" href="#" aria-current="true"><span class="dr-picker__label">Client: order services</span><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></a>
        <a class="dr-picker__item" href="#"><span class="dr-picker__label">Operator: take jobs</span><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></a>
      </div>
```

What the screens build where this row used to stand: `account`'s mode drawer. The options are routes, so each row is an `<a>`, and the checkmark plus `aria-current` carry the state. The list sits in a drawer, not in flow.

## Anti-rule

```html
<div class="dr-picker__list" style="width:341px;max-width:100%"><a class="dr-disclosure__item" href="#" aria-current="true">Visa •••• 4921<svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></a><a class="dr-disclosure__item" href="#">Apple Pay</a><a class="dr-disclosure__item" href="#">Google Pay</a></div>
```

A form value laid out in the page as an open list. Every dropdown-shaped control in the product is a [picker row](picker-row.html) that opens its options in a drawer. Pick this row only where the list must open in flow.
