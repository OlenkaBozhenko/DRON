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
<div class="dr-picker__list" style="width:341px;max-width:100%"><a class="dr-disclosure__item" href="#" aria-current="true">Client<svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></a><a class="dr-disclosure__item" href="#">Operator</a></div>
```

- `.dr-disclosure__item` — One option: 44 high, padding 0 16, `--ink` 15/400, 14.37:1 on the card. A hairline above every row but the first. Hover `--media`; the keyboard ring is 2.5px `--ink`, drawn inside.
- `[aria-current="true"]` — The current option. It carries the bare checkmark in `--ink`, 14.37:1. The other rows carry no mark.

## Variants

### Option list

```html
<div class="dr-picker__list" style="width:341px;max-width:100%"><a class="dr-disclosure__item" href="#">English</a><a class="dr-disclosure__item" href="#" aria-current="true">Ukrainian<svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></a></div>
```

The one variant the system declares. The row is the same block as `.dr-picker__item`, one set of values under two names; the picker's item adds a `<button>` reset and keeps a hidden check on every row.

## When to use

The disclosure row is the option row of an in-flow list: a native `<details>` that opens in place and pushes the page down instead of floating. It was built on `account` as the mode picker. In the project-wide picker sweep that picker became a row with a drawer, like every other dropdown, so the component has no page left in the product. It is kept on the bench, recorded rather than deleted.

Only the option row was ported into `components/`. The `<details>` container, its `<summary>` and the chevron that turns 180° on open are kept in the `ui/kit.css` archive, so this page draws the rows on the card ground they share with the picker list. The first screen that needs an in-flow disclosure brings the container in, and this page follows.

An option is named by its own value, *Client*, *Operator*, *English*, and the current one is marked by the checkmark, never by the word *current*.

Sources: inventory.md § 1.5 (Disclosure row) · DESIGN.md § The picker row (options) · ui/kit.css (archive, `.dr-disclosure`)

## Rule

```html
<div class="dr-picker__list" style="width:341px;max-width:100%"><a class="dr-disclosure__item" href="#" aria-current="true">Client<svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></a><a class="dr-disclosure__item" href="#">Operator</a></div>
```

A short list of routes where the current one is marked and each row is a link. Every row is 44, and the checkmark plus `aria-current` carry the state.

## Anti-rule

```html
<div class="dr-picker__list" style="width:341px;max-width:100%"><a class="dr-disclosure__item" href="#" aria-current="true">Visa •••• 4921<svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></a><a class="dr-disclosure__item" href="#">Apple Pay</a><a class="dr-disclosure__item" href="#">Google Pay</a></div>
```

A form value laid out in the page as an open list. Every dropdown-shaped control in the product is a [picker row](picker-row.html) that opens its options in a drawer. Pick this row only where the list must open in flow.
