---
name: Labelled detail rows
slug: labelled-rows
order: 6
screens: account, delivery, earning-details, inspection-report, job-brief, job-offer, operator-account, operator-fee-terms, order-confirmed, order-details, order-review, ratings, resolution, result-upload, tracking
requires: dr-label dr-rows__key dr-rows__val
built: [Section heading](section-heading.html) · [Row panel](row-panel.html)
---

Facts about one thing, grouped by topic: each topic a zone label and a panel of key and value rows.

## Composition

```html
<div class="dr-main" style="width:375px;max-width:100%">
  <p class="zlabel dr-label">Summary <span class="dr-label__act">&#9656; what was done &#183; where &#183; when &#183; what it paid</span></p>
  <div class="dr-rows" aria-label="Job summary">
      <div class="dr-rows__row"><span class="dr-rows__key">Service</span><span class="dr-rows__val">Package delivery</span></div>
      <div class="dr-rows__row"><span class="dr-rows__key">From</span><span class="dr-rows__val">Podil, 21</span></div>
      <div class="dr-rows__row"><span class="dr-rows__key">To</span><span class="dr-rows__val">Osokorky, 14</span></div>
      <div class="dr-rows__row"><span class="dr-rows__key">Done</span><span class="dr-rows__val">Today, 10:07</span></div>
      <div class="dr-rows__row"><span class="dr-rows__key">Earned</span><span class="dr-rows__val">&#8372;180</span></div>
    </div>
  <p class="zlabel dr-label">Payout <span class="dr-label__act">&#9656; how it reached your balance (RJ-O3)</span></p>
  <div class="dr-rows" aria-label="Payout">
      <div class="dr-rows__row"><span class="dr-rows__key">Status</span><span class="dr-rows__val">Paid</span></div>
      <div class="dr-rows__row"><span class="dr-rows__key">Released</span><span class="dr-rows__val">Automatically, after the client confirmed</span></div>
      <div class="dr-rows__row"><span class="dr-rows__key">To</span><span class="dr-rows__val">Your balance</span></div>
    </div>
</div>
```

From `earning-details`.

- `.dr-label` — the topic, with its note.
- `.dr-rows` — one `.dr-rows__row` per fact, `.dr-rows__key` muted, `.dr-rows__val` in ink.
- Repeated per topic, in the order the user asks the questions.

## Take the pattern

The user reads facts and changes none of them: an order, a job, a payout, a decision.

## Build from components instead

The values are typed or chosen: take [Field](field.html) rows in a card. One fact alone is a [note](screen-layout.html), not a panel.
