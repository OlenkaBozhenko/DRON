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
<div class="dr-log" style="width:341px;max-width:100%">
  <section aria-labelledby="sh-ntf-today">
    <h2 class="dr-sect" id="sh-ntf-today">Today</h2>
    <ul class="dr-list dr-list--snug" style="list-style:none;">
      <li>
        <a class="dr-choice" href="../../wireframes/delivery.html">
          <span class="dr-choice__body">
            <span class="dr-choice__head">
              <span class="dr-choice__title">Your delivery photo is ready</span>
              <span class="dr-chip dr-chip--sm dr-chip--unread">New</span>
            </span>
            <span class="dr-choice__desc">Package delivery &#183; 10:12</span>
          </span>
        </a>
      </li>
    </ul>
  </section>
</div>
```

- `.dr-sect` — The heading: a real `<h2>` with an `id` its `<section>` names in `aria-labelledby`. SF 13/600 in `--slate` on `--page`, 6.62:1, sentence case. Inside `.dr-log` it keeps 12 below it.
- `.dr-list` — The group it names, `--snug`: 8 between the cards. Two groups stand 28 apart in `.dr-log`, 22 below a 390 viewport.

## Variants

### Section heading

```html
<div class="dr-log" style="width:341px;max-width:100%">
  <section aria-labelledby="sh-ntf-today2">
    <h2 class="dr-sect" id="sh-ntf-today2">Today</h2>
    <ul class="dr-list dr-list--snug" style="list-style:none;">
      <li>
        <a class="dr-choice" href="../../wireframes/delivery.html">
          <span class="dr-choice__body">
            <span class="dr-choice__head">
              <span class="dr-choice__title">Your delivery photo is ready</span>
              <span class="dr-chip dr-chip--sm dr-chip--unread">New</span>
            </span>
            <span class="dr-choice__desc">Package delivery &#183; 10:12</span>
          </span>
        </a>
      </li>
    </ul>
  </section>
  <section aria-labelledby="sh-ntf-yesterday">
    <h2 class="dr-sect" id="sh-ntf-yesterday">Yesterday</h2>
    <ul class="dr-list dr-list--snug" style="list-style:none;">
      <li>
        <a class="dr-choice" href="../../wireframes/rate.html">
          <span class="dr-choice__body">
            <span class="dr-choice__title">Rate your order</span>
            <span class="dr-choice__desc">Package delivery &#183; 14:41</span>
          </span>
        </a>
      </li>
    </ul>
  </section>
</div>
```

The product's own group name, from `notifications`. On the alert log each day is a heading, so the log has an outline a screen reader can jump through (`WCAG 1.3.1`). Each screen builds four: *Today*, *Yesterday* and two dates (*14 June*, *2 June* on `notifications`; *28 June*, *27 June* on `operator-notifications`). A row with an unread *New* chip wraps its title in `__head`; a read row has no `__head`.

### Zone label

```html
<div style="width:341px;max-width:100%">
  <p class="zlabel dr-label">Live map <span class="dr-label__act">▸ operator position (RJ-C2 · C-05)</span></p>
</div>
```

The wireframe's annotation, here from `tracking`: mono 11/600 uppercase in `--slate`, 6.62:1, over a 1px `--line` rule with a 30 × 2px green tick at its left end. `__act` adds what the zone does, after a `▸`, in its own case. Every screen writes it as `<p class="zlabel dr-label">`: 223 labels on 124 files, each file with at least one `__act`.

## States

No state of its own: it is a heading, and nothing in it takes focus. The group it names carries the states, for example the [choice card](choice-card.html#s-states).

## When to use

Two headings with two jobs. `.dr-sect` labels content: a quiet product heading above a group of cards, in the text face and sentence case. It stands on `notifications` and `operator-notifications` only, four headings each, where the days (*Today*, *Yesterday*, then dates) group the alerts and unread rides each row as a *New* chip. `HIG · inset grouped lists` indents such a header to the row content; here the cards' content is centred, so the heading stands flush with the card edge — a recorded departure.

`.dr-label` labels structure. It names a region of the screen for the reader of the prototype, not for the client: wireframes write it as `class="zlabel dr-label"` on 124 files and the shell's annotations toggle hides every one. The green tick is the one place the accent is a line, and it is a fill, not a stroke. With annotations off a screen must still read, which is why `.dr-sect` exists.

A heading names the group in the user's words, one or two words, no punctuation.

Sources: DESIGN.md § Typography · inventory.md § 1 (Section heading, Zone label) · ui/kit.html § Alerts log · wireframes/_conventions.md

## Rule

```html
<div class="dr-log" style="width:341px;max-width:100%">
  <section aria-labelledby="sh-ntf-yesterday2">
    <h2 class="dr-sect" id="sh-ntf-yesterday2">Yesterday</h2>
    <ul class="dr-list dr-list--snug" style="list-style:none;">
      <li>
        <a class="dr-choice" href="../../wireframes/rate.html">
          <span class="dr-choice__body">
            <span class="dr-choice__title">Rate your order</span>
            <span class="dr-choice__desc">Package delivery &#183; 14:41</span>
          </span>
        </a>
      </li>
    </ul>
  </section>
</div>
```

A day over the alerts it holds, from `notifications`: the heading sits 12 above its list and 28 below the previous group (22 below a 390 viewport), so the boundary between days reads before the 8 between cards.

## Anti-rule

```html
<div style="width:341px;max-width:100%">
  <p class="zlabel dr-label">Yesterday</p>
  <ul class="dr-list dr-list--snug" style="list-style:none">
    <li><article class="dr-card dr-card--compact"><span class="dr-listing__name">Rate your order</span></article></li>
  </ul>
</div>
```

A zone label used as a product heading. It is an annotation the shell hides, so with annotations off the group stands under no name at all; and it is a `<p>`, so it gives no outline. Use `.dr-sect`. A name that belongs inside a card, for the one control group it holds, is the card's own title: use a [titled zone card](titled-zone-card.html).
