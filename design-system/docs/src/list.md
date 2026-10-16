---
name: List
slug: list
group: Surfaces
order: 100
classes: .dr-list · --snug
file: list.css
inventory: List container
kit: 803
---

## Anatomy

```html
<ul class="dr-list" style="width:341px;max-width:100%">
  <li>
    <article class="dr-card dr-card--row dr-listing">
      <a class="dr-card__link" href="#" aria-label="Book 09:00 to 10:00, operator free"></a>
      <span class="dr-listing__body">
        <span class="dr-listing__name">09:00 – 10:00</span>
        <span class="dr-listing__desc">Operator free · Andriy M. nearby</span>
      </span>
    </article>
  </li>
  <li>
    <article class="dr-card dr-card--row dr-listing">
      <a class="dr-card__link" href="#" aria-label="Book 11:00 to 12:00, operator free"></a>
      <span class="dr-listing__body">
        <span class="dr-listing__name">11:00 – 12:00</span>
        <span class="dr-listing__desc">Operator free</span>
      </span>
    </article>
  </li>
</ul>
```

- `.dr-list` — A `<ul>` with no bullets, a flex column. The gap between cards is 28, 22 under 390px. The specimen is `time-slot`'s list.
- `.dr-card` — Each item is a flat [card](card.html). No line and no shadow between them: the gap is the separator.

## Variants

### Default

```html
<ul class="dr-list" style="width:341px;max-width:100%">
  <li>
    <article class="dr-card dr-card--row dr-listing">
      <a class="dr-card__link" href="#" aria-label="Book 09:00 to 10:00, operator free"></a>
      <span class="dr-listing__body">
        <span class="dr-listing__name">09:00 – 10:00</span>
        <span class="dr-listing__desc">Operator free · Andriy M. nearby</span>
      </span>
    </article>
  </li>
  <li>
    <article class="dr-card dr-card--row dr-listing">
      <a class="dr-card__link" href="#" aria-label="Book 11:00 to 12:00, operator free"></a>
      <span class="dr-listing__body">
        <span class="dr-listing__name">11:00 – 12:00</span>
        <span class="dr-listing__desc">Operator free</span>
      </span>
    </article>
  </li>
</ul>
```

Gap 28, the one step above any gap inside a card. For a list that is the screen: `order-history` and `time-slot`, in 4 files (`order-history`, `order-history-loading`, `time-slot`, `time-slot-inspection`).

### Snug

```html
<ul class="dr-list dr-list--snug" style="width:341px;max-width:100%">
  <li>
    <article class="dr-card dr-card--row dr-listing">
      <div class="dr-listing__body">
        <span class="dr-listing__name">Olena H.<span class="dr-listing__score">· 5.0</span></span>
        <p class="dr-listing__desc">“Fast and careful — package arrived sealed and on time.”</p>
        <span class="dr-listing__meta"><span class="dr-chip">Package delivery</span><span class="dr-chip">Today</span></span>
      </div>
    </article>
  </li>
  <li>
    <article class="dr-card dr-card--row dr-listing">
      <div class="dr-listing__body">
        <span class="dr-listing__name">Andriy P.<span class="dr-listing__score">· 4.0</span></span>
        <p class="dr-listing__desc">“Good shots overall, a couple came out a bit dark.”</p>
        <span class="dr-listing__meta"><span class="dr-chip">Photo &amp; video</span><span class="dr-chip">Yesterday</span></span>
      </div>
    </article>
  </li>
</ul>
```

Gap 8 at every width. For a list that is one zone among several, or a sequence, in 14 files: `chat` (and `chat-aerial`, `chat-client`, `chat-inspection`), `inspection-report` (and `-loading`), `notifications` (and `-loading`), `operator-notifications`, `operator-listings`, `ratings`, `role-select`, `support` and `wallet`. The specimen is `ratings`.

## States

No state of its own: the list is a container, and only its items take focus. A card that is one link takes the [card link](card-link.html#s-states) states.

## When to use

The list sets the gap between cards, and that gap is always greater than any gap inside one, so proximity groups in the right direction without a border or a shadow. 18 files stack their cards with it: 4 at the default gap and 14 snug.

The rung is chosen by what surrounds the list, not by taste. Where the list is the screen and has nothing to be confused with, 28 is right and still clears the 20 inside a card. Where it is one zone among several, `main` separates zones by 12, so 28 would put siblings further apart than strangers; the snug rung, 8, clusters the group and lets the zones separate. Chat messages and wallet rows are a sequence rather than a set of separate objects, so they take 8 as well, the same step that separates parts inside a card.

Each card also carries `.dr-listing`, as on the screens. It has no rule of its own.

The list carries no words of its own. An empty list is a [message block](message-block.html) that says why it is empty and gives one way out.

Sources: DESIGN.md § Layout (Two list rungs) · inventory.md § 1.3 (List container) · ui/kit.html List and its snug rung

## Rule

```html
<ul class="dr-list dr-list--snug" style="width:341px;max-width:100%">
  <li>
    <article class="dr-card dr-card--row dr-listing">
      <div class="dr-listing__body">
        <span class="dr-listing__name">Olena H.<span class="dr-listing__score">· 5.0</span></span>
        <p class="dr-listing__desc">“Fast and careful — package arrived sealed and on time.”</p>
        <span class="dr-listing__meta"><span class="dr-chip">Package delivery</span><span class="dr-chip">Today</span></span>
      </div>
    </article>
  </li>
  <li>
    <article class="dr-card dr-card--row dr-listing">
      <div class="dr-listing__body">
        <span class="dr-listing__name">Andriy P.<span class="dr-listing__score">· 4.0</span></span>
        <p class="dr-listing__desc">“Good shots overall, a couple came out a bit dark.”</p>
        <span class="dr-listing__meta"><span class="dr-chip">Photo &amp; video</span><span class="dr-chip">Yesterday</span></span>
      </div>
    </article>
  </li>
</ul>
```

A list that shares the screen with other zones takes `--snug`, so the cards read as one group and the zones above and below still separate. This is `ratings`, where the reviews sit under the score.

## Anti-rule

```html
<div style="display:flex;flex-direction:column;width:341px;max-width:100%"><article class="dr-card dr-card--compact"><span class="dr-listing__body">Leave with the concierge, entrance code 4417.</span></article><article class="dr-card dr-card--compact"><span class="dr-listing__body">Ring twice; the gate is on the courtyard side.</span></article></div>
```

Cards stacked with no gap: two surfaces of one tone merge into one, and only a border or a shadow could part them, both of which the system forbids. Stack cards in a `.dr-list`. For facts inside one card use a [row panel](row-panel.html), which separates rows with a hairline.
