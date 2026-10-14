---
name: Date picker
slug: date-picker
group: Forms
order: 200
classes: .dr-cal · __bar · __month · __nav · __grid · __day · __day--today · __clock · __unit · __colon · .dr-pick > .dr-cal__clock
file: calendar.css
inventory: Date picker; Time drawer row
kit: 1228
---

## Anatomy

```html
<div class="dr-cal" style="width:341px;max-width:100%">
  <div class="dr-cal__bar">
    <button class="dr-cal__nav" type="button" aria-label="Previous month" disabled><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button>
    <span class="dr-cal__month">September 2026</span>
    <button class="dr-cal__nav" type="button" aria-label="Next month"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button>
  </div>
  <table class="dr-cal__grid" role="grid">
    <thead><tr><th scope="col" aria-label="Monday">Mo</th><th scope="col" aria-label="Tuesday">Tu</th><th scope="col" aria-label="Wednesday">We</th><th scope="col" aria-label="Thursday">Th</th><th scope="col" aria-label="Friday">Fr</th><th scope="col" aria-label="Saturday">Sa</th><th scope="col" aria-label="Sunday">Su</th></tr></thead>
    <tbody>
        <tr><td></td><td><button class="dr-cal__day" type="button" disabled>1</button></td><td><button class="dr-cal__day" type="button" disabled>2</button></td><td><button class="dr-cal__day" type="button" disabled>3</button></td><td><button class="dr-cal__day" type="button" disabled>4</button></td><td><button class="dr-cal__day" type="button" disabled>5</button></td><td><button class="dr-cal__day" type="button" disabled>6</button></td></tr>
        <tr><td><button class="dr-cal__day" type="button" disabled>7</button></td><td><button class="dr-cal__day" type="button" disabled>8</button></td><td><button class="dr-cal__day" type="button" disabled>9</button></td><td><button class="dr-cal__day" type="button" disabled>10</button></td><td><button class="dr-cal__day" type="button" disabled>11</button></td><td><button class="dr-cal__day" type="button" disabled>12</button></td><td><button class="dr-cal__day" type="button" disabled>13</button></td></tr>
        <tr><td><button class="dr-cal__day" type="button" disabled>14</button></td><td><button class="dr-cal__day" type="button" disabled>15</button></td><td><button class="dr-cal__day" type="button" disabled>16</button></td><td><button class="dr-cal__day" type="button" disabled>17</button></td><td><button class="dr-cal__day" type="button" disabled>18</button></td><td><button class="dr-cal__day" type="button" disabled>19</button></td><td><button class="dr-cal__day dr-cal__day--today" type="button">20</button></td></tr>
        <tr><td><button class="dr-cal__day" type="button">21</button></td><td><button class="dr-cal__day" type="button">22</button></td><td><button class="dr-cal__day" type="button">23</button></td><td aria-selected="true"><button class="dr-cal__day" type="button">24</button></td><td><button class="dr-cal__day" type="button">25</button></td><td><button class="dr-cal__day" type="button">26</button></td><td><button class="dr-cal__day" type="button">27</button></td></tr>
        <tr><td><button class="dr-cal__day" type="button">28</button></td><td><button class="dr-cal__day" type="button">29</button></td><td><button class="dr-cal__day" type="button">30</button></td><td></td><td></td><td></td><td></td></tr>
    </tbody>
  </table>
</div>
```

- `.dr-cal__bar` — The month bar, 44 tall: the month name at heading 15 between two 44 × 44 arrows.
- `.dr-cal__nav:disabled` — The back arrow is disabled in the current month: nothing before today can be booked.
- `.dr-cal__day--today` — Today: charcoal numeral, 14.37:1, plus a 4px dot under it in `currentColor`. The accent becomes a shape, not a tinted word.
- `td[aria-selected="true"] .dr-cal__day` — The chosen day: the 44 circle filled `--green` under charcoal, 9.46:1, the checked radio's own pair.
- `.dr-cal__day:disabled` — A day that cannot be booked: a real `disabled` button in slate, 5.95:1. It keeps its place and is skipped by the keyboard.

## Variants

### Day states

```html
<div class="dr-cal" style="width:341px;max-width:100%"><table class="dr-cal__grid" role="grid"><tbody><tr><td><button class="dr-cal__day" type="button" disabled>19</button></td><td><button class="dr-cal__day dr-cal__day--today" type="button">20</button></td><td><button class="dr-cal__day" type="button">21</button></td><td aria-selected="true"><button class="dr-cal__day" type="button">22</button></td><td aria-selected="true"><button class="dr-cal__day dr-cal__day--today" type="button">23</button></td><td></td><td></td></tr></tbody></table></div>
```

Unavailable, today, available, chosen, and today chosen. Every day is a 44 × 44 button in a 44-tall row, so `HIG · 44pt` and `WCAG 2.5.8` are met by the cell itself. When today is also the pick, its dot inverts with the numeral to 9.46:1. Three states, three carriers, none colour alone (`WCAG 1.4.1`).

### Time drawer row

```html
<div class="dr-picks" role="radiogroup" aria-label="Pick a time" style="width:341px;max-width:100%;list-style:none">
  <label class="dr-pick">
    <span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span>
    <span class="dr-pick__label">Now</span>
    <input type="radio" name="dpwhen" value="now" class="sr-only">
  </label>
  <label class="dr-pick">
    <span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span>
    <span class="dr-pick__label">At a set time</span>
    <input type="radio" name="dpwhen" value="at" checked class="sr-only">
    <span class="dr-cal__clock">
      <select class="dr-cal__unit" aria-label="Hour"><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option selected>14</option><option>15</option><option>16</option><option>17</option><option>18</option></select>
      <span class="dr-cal__colon" aria-hidden="true">:</span>
      <select class="dr-cal__unit" aria-label="Minute"><option>00</option><option>15</option><option selected>30</option><option>45</option></select>
    </span>
  </label>
</div>
```

The second drawer: *Now* and *At a set time*, with the clock riding the second row, pushed right. The clock is two native `<select>`s on a `--media` ground at the 10 input radius, charcoal on it 13.33:1. Setting an hour is choosing the second option, so the state cannot disagree with the value.

### Now unavailable

```html
<div class="dr-picks" role="radiogroup" aria-label="Pick a time" style="width:341px;max-width:100%;list-style:none">
  <label class="dr-pick">
    <span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span>
    <span class="dr-pick__label">Now</span>
    <input type="radio" name="dpwhen2" value="now" disabled class="sr-only">
  </label>
  <label class="dr-pick">
    <span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span>
    <span class="dr-pick__label">At a set time</span>
    <input type="radio" name="dpwhen2" value="at" checked class="sr-only">
    <span class="dr-cal__clock">
      <select class="dr-cal__unit" aria-label="Hour"><option selected>09</option><option>10</option><option>11</option></select>
      <span class="dr-cal__colon" aria-hidden="true">:</span>
      <select class="dr-cal__unit" aria-label="Minute"><option selected>00</option><option>15</option><option>30</option><option>45</option></select>
    </span>
  </label>
</div>
```

*Now* is offered only while the chosen day is today; on any other day it is disabled, slate on `--card` 5.95:1. The search never says *Now* about next Tuesday.

## When to use

The date picker is how the client says when the service should happen, in the *Date & time* zone of `listings` and `listings-filters`. It opens as a calendar grid in a drawer, the shape iOS Calendar opens and the one `HIG · Pickers` puts in a sheet when space is short; the time is a second drawer. The grid follows WAI-ARIA APG's Date Picker Dialog with one documented variant: selection follows focus, so an arrow both moves and picks, and what is focused is always what is chosen. The grid always draws six week rows, so the drawer keeps one height from month to month.

The words are fixed values: the month and year, two-letter weekday heads with the full name as `aria-label`, and 24-hour time written the way the product writes it everywhere (`09:00 – 10:00`, `28 Jun · 14:20`). The drawer is titled *Pick a date & time*.

`.dr-cal__time` (a hairline wrapper above the clock) is declared in `components/` but no screen draws it since date and time became two drawers, so it is not shown.

Sources: inventory.md § 1.5 Date picker, Time drawer row · kit.html Date picker · microcopy.md (Date & time) · components/calendar.css

## Rule

```html
<div class="dr-picks" role="radiogroup" aria-label="Pick a time" style="width:341px;max-width:100%;list-style:none">
  <label class="dr-pick">
    <span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span>
    <span class="dr-pick__label">Now</span>
    <input type="radio" name="dpwhen3" value="now" class="sr-only">
  </label>
  <label class="dr-pick">
    <span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span>
    <span class="dr-pick__label">At a set time</span>
    <input type="radio" name="dpwhen3" value="at" checked class="sr-only">
    <span class="dr-cal__clock">
      <select class="dr-cal__unit" aria-label="Hour"><option>13</option><option selected>14</option><option>15</option></select>
      <span class="dr-cal__colon" aria-hidden="true">:</span>
      <select class="dr-cal__unit" aria-label="Minute"><option>00</option><option>15</option><option selected>30</option><option>45</option></select>
    </span>
  </label>
</div>
```

Two native selects, each with its own label. On iOS a `<select>` opens the platform's own wheel, so this is the iOS time picker, with arrow keys and an exposed value for free.

## Anti-rule

```html
<div class="dr-rows dr-rows--card" style="width:341px;max-width:100%"><div class="dr-field"><span class="dr-field__label">Time</span><span class="dr-field__group"><input class="dr-field__input" type="time" value="14:00" aria-label="Time"></span></div></div>
```

`<input type="time">`. Its face is drawn in the viewer's locale, not the document's, so it reads *02:00 PM* on a 12-hour machine against a product that writes 24-hour times everywhere; `lang` does not change it. A wheel row was ruled out too: at 34pt it fails `HIG · 44pt` by 10. For a single value chosen from a short list, use a [picker row](picker-row.html).
