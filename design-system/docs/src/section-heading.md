---
name: Section heading
slug: section-heading
group: Shell
order: 30
classes: .dr-sect · .dr-label · __act
file: rows.css · type.css
inventory: Section heading; Zone label
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
        <span class="dr-choice__desc">Package delivery &#183; 10:12</span>
      </span>
    </a></li>
    </ul>
  </section>
</div>
```

- `.dr-sect` — The heading: a real `<h2>`, SF 13/600 in `--slate` on `--page`, 6.62:1, sentence case. `margin-top` 12, 0 on a first child.
- `.dr-list` — The group it names. 12 under the heading, 8 between the cards, 28 between two groups.

## Variants

### Section heading

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
        <span class="dr-choice__desc">Package delivery &#183; 10:03</span>
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
        <span class="dr-choice__desc">Inspection &#183; 17:40</span>
      </span>
    </a></li>
    </ul>
  </section>
</div>
```

The product's own group name. On the alert log each day is a heading, so the log has an outline a screen reader can jump through (`WCAG 1.3.1`).

### Zone label

```html
<div style="width:341px;max-width:100%">
  <p class="dr-label">Live map <span class="dr-label__act">▸ operator position</span></p>
</div>
```

The wireframe's annotation: mono 11/600 uppercase in `--slate`, 6.62:1, over a 1px `--line` rule with a 30 × 2px green tick at its left end. `__act` adds what the zone does, after a `▸`.

## When to use

Two headings with two jobs. `.dr-sect` labels content: a quiet product heading above a group of cards, in the text face and sentence case. It stands on `notifications` and `operator-notifications`, where the days (*Today*, *Yesterday*) group the alerts and unread rides each row as a *New* chip. `HIG · inset grouped lists` indents such a header to the row content; here the cards' content is centred, so the heading stands flush with the card edge — a recorded departure.

`.dr-label` labels structure. It names a region of the screen for the reader of the prototype, not for the client: wireframes write it as `class="zlabel dr-label"` and the shell's annotations toggle hides every one. The green tick is the one place the accent is a line, and it is a fill, not a stroke. With annotations off a screen must still read, which is why `.dr-sect` exists.

A heading names the group in the user's words, one or two words, no punctuation.

Sources: DESIGN.md § Typography · inventory.md § 1 (Section heading, Zone label) · ui/kit.html § Alerts log · wireframes/_conventions.md

## Rule

```html
<div class="dr dr-log" style="width:341px;max-width:100%">
  <section>
    <h2 class="dr-sect">Yesterday</h2>
    <ul class="dr-list dr-list--snug" style="list-style:none">
    <li><a class="dr-choice" href="#">
      <span class="dr-choice__body">
        <span class="dr-choice__head">
          <span class="dr-choice__title">Order completed</span>
        </span>
        <span class="dr-choice__desc">Inspection &#183; 17:40</span>
      </span>
    </a></li>
    </ul>
  </section>
</div>
```

A day over the alerts it holds: the heading sits 12 above its list and 28 below the previous group, so the boundary between days reads before the gap between cards.

## Anti-rule

```html
<div style="width:341px;max-width:100%">
  <p class="dr-label">Yesterday</p>
  <ul class="dr-list dr-list--snug" style="list-style:none">
    <li><article class="dr-card dr-card--compact"><span class="dr-listing__name">Order completed</span></article></li>
  </ul>
</div>
```

A zone label used as a product heading. It is an annotation the shell hides, so with annotations off the group stands under no name at all; and it is a `<p>`, so it gives no outline. Use `.dr-sect`. A name that belongs inside a card, for the one control group it holds, is the card's own title: use a [titled zone card](titled-zone-card.html).
