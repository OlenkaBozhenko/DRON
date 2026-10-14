---
name: Alerts log
slug: alerts-log
group: Surfaces
order: 160
classes: .dr-log · .dr-sect · .dr-choice · __head · __title · __desc · .dr-chip--unread
file: progress.css
inventory: (.dr-log)
kit: 1632
---

## Anatomy

```html
<div class="dr dr-log" style="width:341px;max-width:100%">
  <section>
    <h2 class="dr-sect">Today</h2>
    <ul class="dr-list dr-list--snug" style="list-style:none">
      <li><a class="dr-choice" href="#">
        <span class="dr-choice__body">
          <span class="dr-choice__head">
            <span class="dr-choice__title">Your delivery photo is ready</span><span class="dr-chip dr-chip--sm dr-chip--unread">New</span>
          </span>
          <span class="dr-choice__desc">Package delivery · 10:12</span>
        </span>
      </a></li>
      <li><a class="dr-choice" href="#">
        <span class="dr-choice__body">
          <span class="dr-choice__head">
            <span class="dr-choice__title">Ivan is 2 minutes away</span><span class="dr-chip dr-chip--sm dr-chip--unread">New</span>
          </span>
          <span class="dr-choice__desc">Package delivery · 10:03</span>
        </span>
      </a></li>
    </ul>
  </section>
  <section>
    <h2 class="dr-sect">Yesterday</h2>
    <ul class="dr-list dr-list--snug" style="list-style:none">
      <li><a class="dr-choice" href="#">
        <span class="dr-choice__body">
          <span class="dr-choice__head">
            <span class="dr-choice__title">Order completed</span>
          </span>
          <span class="dr-choice__desc">Inspection · 17:40</span>
        </span>
      </a></li>
    </ul>
  </section>
</div>
```

- `.dr-log` — The column of day groups, 28 apart. Rows inside a group are 8 apart (`.dr-list--snug`).
- `.dr-sect` — The day heading, a real `<h2>`: 13/600 `--text-muted` on the page at 6.62:1, with 12 below it. A screen reader can jump through the days.
- `.dr-choice` — The row: the kit's tappable list row on `--card` at radius 16, 73.78 tall (`HIG · 44pt` 177%). It has no arrow.
- `.dr-choice__title` — What happened, 17/400 `--ink` at 14.37:1.
- `.dr-chip--unread` — *New*, a word on the row: `--bg-accent-tint` behind `--text-primary`, 14.75:1 at 11/600. It has no dot.
- `.dr-choice__desc` — The order it belongs to and the time it arrived, 13 `--text-muted` at 5.95:1. It is the row's proof (voice P2).

## Variants

### Unread

```html
<a class="dr dr-choice" href="#" style="width:341px;max-width:100%">
  <span class="dr-choice__body">
    <span class="dr-choice__head">
      <span class="dr-choice__title">Your delivery photo is ready</span><span class="dr-chip dr-chip--sm dr-chip--unread">New</span>
    </span>
    <span class="dr-choice__desc">Package delivery · 10:12</span>
  </span>
</a>
```

The *New* chip rides the title line in `.dr-choice__head`. Unread is carried by a word, so `WCAG 1.4.1` is not engaged. The tint is decoration that the word does not depend on.

### Read

```html
<a class="dr dr-choice" href="#" style="width:341px;max-width:100%">
  <span class="dr-choice__body">
    <span class="dr-choice__head">
      <span class="dr-choice__title">Order completed</span>
    </span>
    <span class="dr-choice__desc">Inspection · 17:40</span>
  </span>
</a>
```

The same row without the chip. Nothing else changes, so a row's box does not move when it is read.

## When to use

The alerts log is the screen `notifications` for the client and `operator-notifications` for the operator. Alerts are grouped under days and the unread ones carry a word. Headings are relative and then absolute: *Today*, *Yesterday*, then `d MMMM`, day first for Ukraine and Europe with the month spelled out (`HIG · Lists and tables`). Read state and recency are two separate facts. An alert can be unread under *Yesterday*, which the old *New* / *Earlier* headings could not say.

The log is not a new component. It is `.dr-choice` rows in day sections. These alert rows are the only `.dr-choice` rows that carry `__desc`, and they carry no chevron. Each row links to the screen the alert is about. It adds no solid green.

The title states the fact in plain words: *Your delivery photo is ready*, *Ivan is 2 minutes away*, *Order completed*. No exclamation marks and no celebration. The second line is the service and the time: *Package delivery · 10:12*. With no alerts the screen says *No notifications yet*, the same title on both sides.

Sources: DESIGN.md § The alert log's list row · § The alert rows carry no arrow · inventory.md § 1 Section heading · microcopy.md § notifications-empty · voice.md P2 · ui/kit.html § Alerts log

## Rule

```html
<div class="dr dr-log" style="width:341px;max-width:100%">
  <section>
    <h2 class="dr-sect">Today</h2>
    <ul class="dr-list dr-list--snug" style="list-style:none">
      <li><a class="dr-choice" href="#">
        <span class="dr-choice__body">
          <span class="dr-choice__head">
            <span class="dr-choice__title">Ivan is 2 minutes away</span><span class="dr-chip dr-chip--sm dr-chip--unread">New</span>
          </span>
          <span class="dr-choice__desc">Package delivery · 10:03</span>
        </span>
      </a></li>
    </ul>
  </section>
</div>
```

One day heading over its alerts, each row naming what happened, which order it belongs to, and when.

## Anti-rule

```html
<div class="dr dr-log" style="width:341px;max-width:100%">
  <section>
    <h2 class="dr-sect">New</h2>
    <ul class="dr-list dr-list--snug" style="list-style:none">
      <li><a class="dr-choice" href="#"><span class="dr-choice__body"><span class="dr-choice__head"><span class="dr-choice__title">Your delivery photo is ready</span></span><span class="dr-choice__desc">Package delivery · 10:12</span></span></a></li>
    </ul>
  </section>
  <section>
    <h2 class="dr-sect">Earlier</h2>
    <ul class="dr-list dr-list--snug" style="list-style:none">
      <li><a class="dr-choice" href="#"><span class="dr-choice__body"><span class="dr-choice__head"><span class="dr-choice__title">Order completed</span></span><span class="dr-choice__desc">Inspection · 17:40</span></span></a></li>
    </ul>
  </section>
</div>
```

Read state used as the heading. It mixes two facts on one axis, so the log can no longer show an unread alert from yesterday. Group by day and put *New* on the row. To route the user somewhere, rather than keep a record, use a [choice card](choice-card.html) with its title only.
