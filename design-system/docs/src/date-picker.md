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
<div style="width:341px;max-width:100%">
<p class="dr-sheet__title" id="dp-datepick-title">Pick a date</p>
<div class="dr-cal">
  <div class="dr-cal__bar">
    <button class="dr-cal__nav" type="button" aria-label="Previous month" disabled><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button>
    <span class="dr-cal__month" aria-live="polite">September 2026</span>
    <button class="dr-cal__nav" type="button" aria-label="Next month"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button>
  </div>
  <table class="dr-cal__grid" role="grid" aria-labelledby="dp-datepick-title">
    <thead><tr><th scope="col" aria-label="Monday">Mo</th><th scope="col" aria-label="Tuesday">Tu</th><th scope="col" aria-label="Wednesday">We</th><th scope="col" aria-label="Thursday">Th</th><th scope="col" aria-label="Friday">Fr</th><th scope="col" aria-label="Saturday">Sa</th><th scope="col" aria-label="Sunday">Su</th></tr></thead>
    <tbody>
        <tr role="row"><td role="gridcell"></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Tue 1 Sep 2026" tabindex="-1" disabled>1</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Wed 2 Sep 2026" tabindex="-1" disabled>2</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Thu 3 Sep 2026" tabindex="-1" disabled>3</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Fri 4 Sep 2026" tabindex="-1" disabled>4</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Sat 5 Sep 2026" tabindex="-1" disabled>5</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Sun 6 Sep 2026" tabindex="-1" disabled>6</button></td></tr>
        <tr role="row"><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Mon 7 Sep 2026" tabindex="-1" disabled>7</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Tue 8 Sep 2026" tabindex="-1" disabled>8</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Wed 9 Sep 2026" tabindex="-1" disabled>9</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Thu 10 Sep 2026" tabindex="-1" disabled>10</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Fri 11 Sep 2026" tabindex="-1" disabled>11</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Sat 12 Sep 2026" tabindex="-1" disabled>12</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Sun 13 Sep 2026" tabindex="-1" disabled>13</button></td></tr>
        <tr role="row"><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Mon 14 Sep 2026" tabindex="-1" disabled>14</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Tue 15 Sep 2026" tabindex="-1" disabled>15</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Wed 16 Sep 2026" tabindex="-1" disabled>16</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Thu 17 Sep 2026" tabindex="-1" disabled>17</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Fri 18 Sep 2026" tabindex="-1" disabled>18</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Sat 19 Sep 2026" tabindex="-1" disabled>19</button></td><td role="gridcell"><button class="dr-cal__day dr-cal__day--today" type="button" aria-label="Sun 20 Sep 2026, today" tabindex="-1">20</button></td></tr>
        <tr role="row"><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Mon 21 Sep 2026" tabindex="-1">21</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Tue 22 Sep 2026" tabindex="-1">22</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Wed 23 Sep 2026" tabindex="-1">23</button></td><td role="gridcell" aria-selected="true"><button class="dr-cal__day" type="button" aria-label="Thu 24 Sep 2026" tabindex="0">24</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Fri 25 Sep 2026" tabindex="-1">25</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Sat 26 Sep 2026" tabindex="-1">26</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Sun 27 Sep 2026" tabindex="-1">27</button></td></tr>
        <tr role="row"><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Mon 28 Sep 2026" tabindex="-1">28</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Tue 29 Sep 2026" tabindex="-1">29</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Wed 30 Sep 2026" tabindex="-1">30</button></td><td role="gridcell"></td><td role="gridcell"></td><td role="gridcell"></td><td role="gridcell"></td></tr>
        <tr role="row"><td role="gridcell"></td><td role="gridcell"></td><td role="gridcell"></td><td role="gridcell"></td><td role="gridcell"></td><td role="gridcell"></td><td role="gridcell"></td></tr>
    </tbody>
  </table>
</div>
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
<div class="dr-cal" style="width:341px;max-width:100%"><table class="dr-cal__grid" role="grid" aria-label="Pick a date"><tbody><tr role="row"><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Mon 14 Sep 2026" tabindex="-1" disabled>14</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Tue 15 Sep 2026" tabindex="-1" disabled>15</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Wed 16 Sep 2026" tabindex="-1" disabled>16</button></td><td role="gridcell" aria-selected="true"><button class="dr-cal__day dr-cal__day--today" type="button" aria-label="Thu 17 Sep 2026, today" tabindex="0">17</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Fri 18 Sep 2026" tabindex="-1">18</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Sat 19 Sep 2026" tabindex="-1">19</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Sun 20 Sep 2026" tabindex="-1">20</button></td></tr></tbody></table></div>
```

The week the drawer opens on when today is chosen: past days unavailable, today chosen, later days available. The drawer opens on the day the search holds, and the search starts on today. Every day is a 44 × 44 button in a 44-tall row, so `HIG · 44pt` and `WCAG 2.5.8` are met by the cell itself. When today is also the pick, its dot takes the numeral's charcoal on green, 9.46:1. Each day button carries its full date as `aria-label` (*Thu 17 Sep 2026, today*), and only the chosen day is in the tab order. Three states, three carriers, none colour alone (`WCAG 1.4.1`).

### Time drawer row

```html
<div style="width:341px;max-width:100%">
<p class="dr-sheet__title" id="dp-time1-title">Pick a time</p>
<div class="dr-picks" role="radiogroup" aria-labelledby="dp-time1-title">
  <label class="dr-pick">
    <span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span>
    <span class="dr-pick__label">Now</span>
    <input type="radio" name="dp-time1" value="now" checked class="sr-only">
  </label>
  <label class="dr-pick">
    <span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span>
    <span class="dr-pick__label">At a set time</span>
    <input type="radio" name="dp-time1" value="at" class="sr-only">
    <span class="dr-cal__clock">
      <select class="dr-cal__unit" aria-label="Hour"><option>00</option><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option selected>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select>
      <span class="dr-cal__colon" aria-hidden="true">:</span>
      <select class="dr-cal__unit" aria-label="Minute"><option selected>00</option><option>15</option><option>30</option><option>45</option></select>
    </span>
  </label>
</div>
</div>
```

The second drawer, *Pick a time*, as it opens: *Now* chosen, and *At a set time* with the clock riding the second row, pushed right. The hour runs 00 to 23 and the minute is the quarter-hour, 24-hour on every machine. The clock is two native `<select>`s on a `--media` ground at the 10 input radius, charcoal on it 13.33:1. Setting an hour is choosing the second option, so the state cannot disagree with the value.

### Now unavailable

```html
<div style="width:341px;max-width:100%">
<p class="dr-sheet__title" id="dp-time2-title">Pick a time</p>
<div class="dr-picks" role="radiogroup" aria-labelledby="dp-time2-title">
  <label class="dr-pick">
    <span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span>
    <span class="dr-pick__label">Now</span>
    <input type="radio" name="dp-time2" value="now" disabled class="sr-only">
  </label>
  <label class="dr-pick">
    <span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span>
    <span class="dr-pick__label">At a set time</span>
    <input type="radio" name="dp-time2" value="at" checked class="sr-only">
    <span class="dr-cal__clock">
      <select class="dr-cal__unit" aria-label="Hour"><option>00</option><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option selected>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select>
      <span class="dr-cal__colon" aria-hidden="true">:</span>
      <select class="dr-cal__unit" aria-label="Minute"><option selected>00</option><option>15</option><option>30</option><option>45</option></select>
    </span>
  </label>
</div>
</div>
```

*Now* is offered only while the chosen day is today; on any other day it is disabled, slate on `--card` 5.95:1, and the time becomes a set one. The search never says *Now* about next Tuesday.

## States

```html
<div class="dr-cal" style="width:160px;max-width:100%"><table class="dr-cal__grid" role="grid" aria-label="Pick a date"><tbody><tr role="row"><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Wed 16 Sep 2026" tabindex="-1" disabled>16</button></td><td role="gridcell" aria-selected="true"><button class="dr-cal__day dr-cal__day--today" data-st-enabled type="button" aria-label="Thu 17 Sep 2026, today" tabindex="0">17</button></td><td role="gridcell"><button class="dr-cal__day" type="button" aria-label="Fri 18 Sep 2026" tabindex="-1">18</button></td></tr></tbody></table></div>
```

Three day buttons from the *Day states* week above: a past day, today chosen, a later day. In the Disabled cell the chosen day stays as it is, because a day you cannot pick is never the chosen one; the other two take the faded ink.

## When to use

The date picker is how the client says when the service should happen. It opens from the date and time cells of the search card (`.dr-when`) on `listings`, `listings-filters`, `listings-error` and `listings-loading`; the four build the two drawers identically. The date opens as a calendar grid in a drawer, the shape iOS Calendar opens and the one `HIG · Pickers` puts in a sheet when space is short; the time is a second drawer. The grid follows WAI-ARIA APG's Date Picker Dialog with one documented variant: selection follows focus, so an arrow both moves and picks, and what is focused is always what is chosen. The grid always draws six week rows, so the drawer keeps one height from month to month.

The words are fixed values: the month and year, two-letter weekday heads with the full name as `aria-label`, and 24-hour time written the way the product writes it everywhere (`09:00 – 10:00`, `28 Jun · 14:20`). The drawers are titled *Pick a date* and *Pick a time*. Each ends in the stacked pair *Done* (primary) over *Cancel*; Cancel puts back the value there was.

`.dr-cal__time` (a hairline wrapper above the clock) is declared in `components/` but no screen draws it since date and time became two drawers, so it is not shown.

Sources: inventory.md § 1.5 Date picker, Time drawer row · kit.html Date picker · microcopy.md (Date & time) · components/calendar.css

## Rule

```html
<div style="width:341px;max-width:100%">
<p class="dr-sheet__title" id="dp-time3-title">Pick a time</p>
<div class="dr-picks" role="radiogroup" aria-labelledby="dp-time3-title">
  <label class="dr-pick">
    <span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span>
    <span class="dr-pick__label">Now</span>
    <input type="radio" name="dp-time3" value="now" class="sr-only">
  </label>
  <label class="dr-pick">
    <span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span>
    <span class="dr-pick__label">At a set time</span>
    <input type="radio" name="dp-time3" value="at" checked class="sr-only">
    <span class="dr-cal__clock">
      <select class="dr-cal__unit" aria-label="Hour"><option>00</option><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option selected>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select>
      <span class="dr-cal__colon" aria-hidden="true">:</span>
      <select class="dr-cal__unit" aria-label="Minute"><option>00</option><option>15</option><option selected>30</option><option>45</option></select>
    </span>
  </label>
</div>
</div>
```

Two native selects, each with its own label. On iOS a `<select>` opens the platform's own wheel, so this is the iOS time picker, with arrow keys and an exposed value for free.

## Anti-rule

```html
<div class="dr-rows dr-rows--card" style="width:341px;max-width:100%"><div class="dr-field"><span class="dr-field__label">Time</span><span class="dr-field__group"><input class="dr-field__input" type="time" value="14:00" aria-label="Time"></span></div></div>
```

`<input type="time">`. Its face is drawn in the viewer's locale, not the document's, so it reads *02:00 PM* on a 12-hour machine against a product that writes 24-hour times everywhere; `lang` does not change it. A wheel row was ruled out too: at 34pt it fails `HIG · 44pt` by 10. For a single value chosen from a short list, use a [picker row](picker-row.html).
