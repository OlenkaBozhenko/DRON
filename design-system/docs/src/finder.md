---
name: Finder
slug: finder
group: Surfaces
order: 140
classes: .dr-finder · __services · __card · __actions · .dr-grouptab--icon · .dr-route · --single · __row · __mark · __open · __label · __value · __swap · .dr-when · __cell · __text · __label · __value
file: card.css
inventory: Search home
kit: 2045
---

## Anatomy

```html
<form class="dr dr-finder" role="search" aria-label="Find a service" action="#" style="width:341px;max-width:100%">
  <fieldset class="dr-finder__services" aria-label="Service">
    <label class="dr-grouptab dr-grouptab--icon">
      <input type="radio" name="docservice" value="delivery" checked class="sr-only">
      <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.6l7.6 4.2v8.4L12 20.4l-7.6-4.2V7.8z"/><path d="M4.6 7.9L12 12l7.4-4.1"/><path d="M12 12v8.3"/></svg>Delivery
    </label>
    <label class="dr-grouptab dr-grouptab--icon">
      <input type="radio" name="docservice" value="aerial" class="sr-only">
      <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="7" width="17" height="12.5" rx="2.6"/><path d="M8.6 7l1.3-2.4h4.2L15.4 7"/><circle cx="12" cy="13.2" r="3.2"/></svg>Photo &amp; video
    </label>
    <label class="dr-grouptab dr-grouptab--icon">
      <input type="radio" name="docservice" value="inspection" class="sr-only">
      <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8.5v-3A1.5 1.5 0 0 1 5.5 4h3M15.5 4h3A1.5 1.5 0 0 1 20 5.5v3M20 15.5v3a1.5 1.5 0 0 1-1.5 1.5h-3M8.5 20h-3A1.5 1.5 0 0 1 4 18.5v-3"/><path d="M8 12.6L12 9l4 3.6V16H8z"/></svg>Inspection
    </label>
  </fieldset>
  <div class="dr-finder__card">
    <div class="dr-route" role="group" aria-label="Route">
      <div class="dr-route__row">
        <span class="dr-route__mark" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6"/></svg></span>
        <button class="dr-route__open" type="button" aria-haspopup="dialog" aria-expanded="false">
          <span class="dr-route__label">From</span>
          <span class="dr-route__value" data-empty>Pickup address</span>
        </button>
      </div>
      <div class="dr-route__row">
        <span class="dr-route__mark" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6" fill="currentColor"/></svg></span>
        <button class="dr-route__open" type="button" aria-haspopup="dialog" aria-expanded="false">
          <span class="dr-route__label">To</span>
          <span class="dr-route__value" data-empty>Drop-off address</span>
        </button>
      </div>
      <button class="dr-btn dr-btn--icon dr-route__swap" type="button" aria-label="Swap pickup and drop-off">
        <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 19.5v-15"/><path d="M4.5 8L8 4.5 11.5 8"/><path d="M16 4.5v15"/><path d="M12.5 16l3.5 3.5 3.5-3.5"/></svg>
      </button>
    </div>
    <div class="dr-route dr-route--single" hidden>
      <div class="dr-route__row">
        <span class="dr-route__mark" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6" fill="currentColor"/></svg></span>
        <button class="dr-route__open" type="button" aria-haspopup="dialog" aria-expanded="false">
          <span class="dr-route__label">Where</span>
          <span class="dr-route__value" data-empty>Address</span>
        </button>
      </div>
    </div>
    <div class="dr-when">
      <button class="dr-when__cell" type="button" aria-haspopup="dialog" aria-expanded="false">
        <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="5.5" width="16" height="14.5" rx="2.4"/><path d="M4 10h16"/><path d="M8.5 3.5v4M15.5 3.5v4"/></svg>
        <span class="dr-when__text"><span class="dr-when__label">Date</span><span class="dr-when__value">Today</span></span>
      </button>
      <button class="dr-when__cell" type="button" aria-haspopup="dialog" aria-expanded="false">
        <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>
        <span class="dr-when__text"><span class="dr-when__label">Time</span><span class="dr-when__value">Now</span></span>
      </button>
    </div>
  </div>
  <div class="dr-fchips" role="group" aria-label="Applied filters" hidden></div>
  <div class="dr-finder__actions">
    <button class="dr-btn dr-btn--secondary" type="button" aria-haspopup="dialog" aria-expanded="false"><svg class="dr-ic dr-ic--20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7.5h9"/><circle cx="17" cy="7.5" r="2.4"/><path d="M20 16.5h-9"/><circle cx="7" cy="16.5" r="2.4"/></svg>Filters</button>
    <a class="dr-btn dr-btn--primary" href="#">Find</a>
  </div>
</form>
```

- `.dr-finder__services` — The service badges: an in-page tab worn by a radio, 32 visible inside a 44 target. Chosen is `--on-action` on `--color-action` at 9.46:1; idle is `--slate` on `--media` at 5.51:1. The row scrolls sideways rather than wrapping.
- `.dr-finder__card` — One `--card` for where and when, so the questions read as one answer being assembled. A hairline separates the address rows from Date · Time. Measured 341.4 × 176.4 for delivery.
- `.dr-route__open` — A route row is a `<button aria-haspopup="dialog">` that opens the [address picker](address-picker.html). The label is 12/400 at 5.95:1. The value is 15/600 `--ink` at 14.37:1 once an address is taken, and the placeholder is `--text-muted` at 400 while the row is empty (`data-empty`). Rows are 341 × 58.8.
- `.dr-route__swap` — A 44 × 44 icon button on the seam between *From* and *To*, named *Swap pickup and drop-off*.
- `.dr-when` — Date · Time: two buttons split by one rule, each opening its own drawer. Each half is 170.7 × 58.8. The button's name is its drawn text, *Date Today* (`WCAG 2.5.3`).
- `.dr-finder__actions` — *Filters* over *Find*, each 341 × 44, 8 apart. *Find* is the primary control, 4.93% of the frame.

## Variants

### One address

```html
<div class="dr dr-route dr-route--single" style="width:341px;max-width:100%">
  <div class="dr-route__row">
    <span class="dr-route__mark" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6" fill="currentColor"/></svg></span>
    <button class="dr-route__open" type="button" aria-haspopup="dialog" aria-expanded="false">
      <span class="dr-route__label">Where</span>
      <span class="dr-route__value" data-empty>Address</span>
    </button>
  </div>
</div>
```

`--single` is the same route with the swap taken out. Photo and inspection have one place, so the right padding drops from 16 + 44 + 8 back to 16, and the card measures 341.4 × 117.6. Both routes are in the frame at once, one of them `hidden`. The service badge chooses between them, which changes content and not context (`WCAG 3.2.2`).

### Service badges

```html
<fieldset class="dr dr-finder__services" aria-label="Service" style="width:341px;max-width:100%">
  <label class="dr-grouptab dr-grouptab--icon">
    <input type="radio" name="docbadge" value="delivery" class="sr-only">
    <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.6l7.6 4.2v8.4L12 20.4l-7.6-4.2V7.8z"/><path d="M4.6 7.9L12 12l7.4-4.1"/><path d="M12 12v8.3"/></svg>Delivery
  </label>
  <label class="dr-grouptab dr-grouptab--icon">
    <input type="radio" name="docbadge" value="aerial" class="sr-only" checked>
    <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="7" width="17" height="12.5" rx="2.6"/><path d="M8.6 7l1.3-2.4h4.2L15.4 7"/><circle cx="12" cy="13.2" r="3.2"/></svg>Photo &amp; video
  </label>
  <label class="dr-grouptab dr-grouptab--icon">
    <input type="radio" name="docbadge" value="inspection" class="sr-only">
    <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8.5v-3A1.5 1.5 0 0 1 5.5 4h3M15.5 4h3A1.5 1.5 0 0 1 20 5.5v3M20 15.5v3a1.5 1.5 0 0 1-1.5 1.5h-3M8.5 20h-3A1.5 1.5 0 0 1 4 18.5v-3"/><path d="M8 12.6L12 9l4 3.6V16H8z"/></svg>Inspection
  </label>
</fieldset>
```

`.dr-grouptab--icon` adds a 16px glyph before the word: a package, a camera, and a viewfinder around a house. The group is one tab stop with the arrow keys moving inside it. The chosen badge is announced by the radio, not by an attribute.

## States

No state of its own: the finder is a container, and its controls are other components. The service badges take the [in-page tabs](in-page-tabs.html#s-states) states, and *Filters*, *Find* and the swap disc the [button](button.html#s-states) states. The route rows and the Date · Time cells carry only the keyboard ring: no hover, pressed or disabled look is declared for them.

## When to use

The finder is the home screen, `listings`. It replaced the list of cards with one form that asks three questions: *what*, *from where to where*, and *when*. Each row is a button that opens a drawer: the [address picker](address-picker.html), the [date picker](date-picker.html), or the time drawer. *Filters* opens the [filters drawer](filters-drawer.html), and applied filters stand as chips above it. *Find* opens [results on the map](map-screen.html) for the chosen service. The finder stands on four files: `listings`, `listings-filters` (the filters drawer open over it), `listings-error` and `listings-loading`. All four build the same three badges, with *Delivery* chosen at rest. On `-error` and `-loading` the route is filled in (*Podil, 21* to *Osokorky, 14*). On `-loading`, *Find* becomes a disabled *Searching…* button and a status line names the place.

Home's solid green measures 6.08%: *Find* 4.93%, the chosen badge 1.05%, and the bell's count 0.11%. The solid green service badge beside *Find* is the designer's deliberate choice. It takes home over the ~5% guide, and that is how she wants it. The badge's mark is 1.41:1 against the idle fill, short of the 3:1 in `WCAG 1.4.11`. The label changing colour carries the state. The count badge on *Filters* (`.dr-finder__actions … .dr-count-badge`) is still declared and applies to nothing. The count moved off the button into the applied-filter chips (`.dr-fchips`), which stand between the card and *Filters*, hidden while nothing is applied.

Labels name the question in one word: *From*, *To*, *Where*, *Date*, *Time*. Placeholders name what goes there: *Pickup address*, *Drop-off address*, *Address*. Defaults are facts: *Today*, *Now*. The services are *Delivery*, *Photo & video* and *Inspection*. The two actions are *Filters* and *Find*.

Sources: DESIGN.md § The search home · inventory.md § 1 Search home · microcopy.md § listings, Search · ui/kit.html § The finder

## Rule

```html
<div class="dr dr-route" role="group" aria-label="Route" style="width:341px;max-width:100%">
  <div class="dr-route__row">
    <span class="dr-route__mark" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6"/></svg></span>
    <button class="dr-route__open" type="button" aria-haspopup="dialog" aria-expanded="false">
      <span class="dr-route__label">From</span>
      <span class="dr-route__value">Podil, 21</span>
    </button>
  </div>
  <div class="dr-route__row">
    <span class="dr-route__mark" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6" fill="currentColor"/></svg></span>
    <button class="dr-route__open" type="button" aria-haspopup="dialog" aria-expanded="false">
      <span class="dr-route__label">To</span>
      <span class="dr-route__value">Osokorky, 14</span>
    </button>
  </div>
  <button class="dr-btn dr-btn--icon dr-route__swap" type="button" aria-label="Swap pickup and drop-off">
    <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 19.5v-15"/><path d="M4.5 8L8 4.5 11.5 8"/><path d="M16 4.5v15"/><path d="M12.5 16l3.5 3.5 3.5-3.5"/></svg>
  </button>
</div>
```

Each row is a button that shows its label and its value, and it opens the address drawer when tapped, never when it gets focus (`WCAG 3.2.1`). The whole row is the target. The swap keeps its own 44 above the row.

## Anti-rule

```html
<div style="display:flex;gap:8px;width:341px;max-width:100%"><button class="dr-btn dr-btn--secondary" type="button">Filters</button><a class="dr-btn dr-btn--primary" href="#">Find</a></div>
```

*Filters* and *Find* split across one row. They stood that way at 166.5 × 44 until the designer stacked them. A split row is where labels wrap. Keep them in `.dr-finder__actions`, each the full width. To choose between routes that leave the screen, use a [choice card](choice-card.html), not the finder.
