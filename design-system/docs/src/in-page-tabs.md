---
name: In-page tabs
slug: in-page-tabs
group: Shell
order: 80
classes: .dr-groups · .dr-grouptab · __count · --icon · .dr-fchips · .dr-fchip · __x
file: tabs-inpage.css · badge.css
inventory: In-page tabs; Filter chip
kit: 2774
---

## Anatomy

```html
<div class="dr dr-main" style="width:375px;max-width:100%;padding-block:0;background:var(--bg-page)">
  <nav class="dr-groups" aria-label="Job groups">
    <span class="dr-grouptab" aria-current="true">Incoming <span class="dr-grouptab__count">2</span></span>
    <span class="dr-grouptab">Active <span class="dr-grouptab__count">1</span></span>
  </nav>
</div>
```

- `.dr-groups` — The row: 48 tall, gap 8, `overflow-x: auto` with the scrollbar hidden. Inside `.dr-main` it bleeds −16 to both edges, carries a hairline on both, and pins to the top of the list.
- `.dr-grouptab[aria-current="true"]` — The current pill: `--on-green` on `--green`, 9.46:1. 32 visible, a −6/−6 `::after` takes the target to 44.
- `.dr-grouptab__count` — The count: an 18px pill, `--green-wash` behind `--ink`, 14.75:1. It is the tab's own text, so the accessible name is *Incoming 2*.

## Variants

### Pill row with a count

```html
<div class="dr dr-main" style="width:375px;max-width:100%;padding-block:0;background:var(--bg-page)">
  <nav class="dr-groups" aria-label="Job groups">
    <span class="dr-grouptab" aria-current="true">Incoming <span class="dr-grouptab__count">2</span></span>
    <span class="dr-grouptab">Active <span class="dr-grouptab__count">1</span></span>
  </nav>
</div>
```

`operator-listings`: the idle pill is `--slate` on `--media`, 5.51:1. Pills measure 103.97 and 82.92 wide.

### Day row

```html
<nav class="dr-groups" aria-label="Pick a day" style="width:375px;max-width:100%">
  <button class="dr-grouptab">Tue 1</button>
  <button class="dr-grouptab" aria-current="true">Wed 2</button>
  <button class="dr-grouptab">Thu 3</button>
  <button class="dr-grouptab">Fri 4</button>
  <button class="dr-grouptab">Sat 5</button>
</nav>
```

The four `time-slot` pages: the row stands in the chrome under the nav bar, so it keeps its own bottom hairline and does not pin.

### Glyph and radio

```html
<div style="display:flex;gap:8px;width:341px;max-width:100%">
  <label class="dr-grouptab dr-grouptab--icon">
    <input type="radio" name="doc-service" value="delivery" checked class="sr-only">
    <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.6l7.6 4.2v8.4L12 20.4l-7.6-4.2V7.8z"/><path d="M4.6 7.9L12 12l7.4-4.1"/><path d="M12 12v8.3"/></svg>Delivery
  </label>
  <label class="dr-grouptab dr-grouptab--icon">
    <input type="radio" name="doc-service" value="aerial" class="sr-only">
    <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="7" width="17" height="12.5" rx="2.6"/><path d="M8.6 7l1.3-2.4h4.2L15.4 7"/><circle cx="12" cy="13.2" r="3.2"/></svg>Photo &amp; video
  </label>
  <label class="dr-grouptab dr-grouptab--icon">
    <input type="radio" name="doc-service" value="inspection" class="sr-only">
    <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8.5v-3A1.5 1.5 0 0 1 5.5 4h3M15.5 4h3A1.5 1.5 0 0 1 20 5.5v3M20 15.5v3a1.5 1.5 0 0 1-1.5 1.5h-3M8.5 20h-3A1.5 1.5 0 0 1 4 18.5v-3"/><path d="M8 12.6L12 9l4 3.6V16H8z"/></svg>Inspection
  </label>
</div>
```

The service badges on the [finder](finder.html): `--icon` adds a 16px glyph 6 before the label, and the pill wraps a visually hidden radio, so the checked input paints the fill and its focus paints the ring.

### Applied filter chip

```html
<section class="dr-fchips" aria-label="Applied filters" style="width:341px;max-width:100%">
  <button class="dr-fchip" type="button" aria-label="Remove filter: Quadcopter">Quadcopter <span class="dr-fchip__x" aria-hidden="true">&times;</span></button>
  <button class="dr-fchip" type="button" aria-label="Remove filter: ₴600 &#8211; ₴1,000+">&#8372;600 &#8211; &#8372;1,000+ <span class="dr-fchip__x" aria-hidden="true">&times;</span></button>
</section>
```

`listings-filtered`: what the filter sheet applied, on `--green-wash` under `--ink`, 14.75:1, with no edge. The remove mark is an 18px `--green` pill with a charcoal cross, 9.46:1. The name is *Remove filter: {label}*, which contains the visible text (`WCAG 2.5.3`).

## When to use

In-page tabs say *which of these* inside one screen: a row of places with one current. The pill row switches the operator's job list between Incoming and Active and the time-slot list between days; the radio form picks a service on the finder. The tab bar of the [screen shell](screen-shell.html) is the top-level navigation; this row never is.

The current pill is a fill, so it is a second solid-green control on its screen: 99.7 × 32, 1.05% of the frame. Its mark is 1.41:1 against the idle pill, under `WCAG 1.4.11`'s 3:1; it leans on the label moving 5.51 → 9.46 as well. That is recorded as the designer's choice of the accent over the `--ink` reading (13.33:1). Weight stays 600 in both states so the current tab does not grow.

Labels are short nouns in sentence case, one name per service everywhere: *Delivery*, *Photo & video*, *Inspection*. Two declared shapes are not drawn here. The underline tab (`.dr-groups--tabs`) left the product with the category row on `listings` and is declared at zero spend. `.dr-fchip--all` is declared and no page applies it.

Sources: DESIGN.md § The in-page group row · ui/kit.html § In-page tabs · count · filter chip · voice.md § the three services · inventory.md § 1 (In-page tabs, Filter chip)

## Rule

```html
<nav class="dr-groups" aria-label="Pick a day" style="width:375px;max-width:100%">
  <button class="dr-grouptab">Tue 1</button>
  <button class="dr-grouptab" aria-current="true">Wed 2</button>
  <button class="dr-grouptab">Thu 3</button>
  <button class="dr-grouptab">Fri 4</button>
  <button class="dr-grouptab">Sat 5</button>
</nav>
```

One list, several slices of it, one current: the row sits directly above the content it switches.

## Anti-rule

```html
<nav class="dr-groups" aria-label="Primary" style="width:375px;max-width:100%">
  <a class="dr-grouptab" href="#" aria-current="true">Order</a>
  <a class="dr-grouptab" href="#">Activity</a>
  <a class="dr-grouptab" href="#">Help</a>
  <a class="dr-grouptab" href="#">Account</a>
</nav>
```

The app's top-level places drawn as in-page pills. `HIG · Tab bars` reserves those for the bottom [tab bar](screen-shell.html#variant-tab-bar). To pick one option of a form value, use a [picker row](picker-row.html) or [choice cards](choice-card.html) (the segmented control was retired for the picker row at rev 235); to show applied filters, use the chip, not a pill row.
