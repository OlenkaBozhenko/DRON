---
name: Labelled card list
slug: card-feed
order: 7
screens: inspection-report, operator-listings, order-history, ratings, time-slot, wallet
requires: dr-label dr-list dr-card
built: [Section heading](section-heading.html) · [List](list.html) · [Card shapes](card.html) · [Card action slot](card-actions.html)
---

Records of one kind, one card each, under the zone label that names them.

## Composition

```html
<div class="dr-main" style="width:375px;max-width:100%">
  <p class="zlabel dr-label">Recent <span class="dr-label__act">&#9656; earnings history</span></p>
  <section aria-label="Recent earnings">
      <ul class="dr-list dr-list--snug">
        <li>
          <article class="dr-card">
            <span class="dr-card__row">
              <span class="dr-listing__body">
                <span class="dr-listing__name">Package delivery</span>
                <span class="dr-listing__meta"><span class="dr-listing__desc">Today, 10:07</span></span>
              </span>
              <span><span class="sr-only">Earned</span><span class="dr-number">&#8372;180</span></span>
            </span>
            <span class="dr-card__actions">
              <a class="dr-btn dr-btn--secondary" href="../../wireframes/earning-details.html" aria-label="View details, Package delivery, today at 10:07">View details</a>
            </span>
          </article>
        </li>
        <li>
          <article class="dr-card">
            <span class="dr-card__row">
              <span class="dr-listing__body">
                <span class="dr-listing__name">Photo &amp; video</span>
                <span class="dr-listing__meta"><span class="dr-listing__desc">Today, 08:20</span></span>
              </span>
              <span><span class="sr-only">Earned</span><span class="dr-number">&#8372;800</span></span>
            </span>
            <span class="dr-card__actions">
              <a class="dr-btn dr-btn--secondary" href="../../wireframes/earning-details-aerial.html" aria-label="View details, Photo and video, today at 08:20">View details</a>
            </span>
          </article>
        </li>
        <li>
          <article class="dr-card">
            <span class="dr-card__row">
              <span class="dr-listing__body">
                <span class="dr-listing__name">Inspection</span>
                <span class="dr-listing__meta"><span class="dr-listing__desc">Yesterday</span></span>
              </span>
              <span><span class="sr-only">Earned</span><span class="dr-number">&#8372;650</span></span>
            </span>
            <span class="dr-card__actions">
              <a class="dr-btn dr-btn--secondary" href="../../wireframes/earning-details-inspection.html" aria-label="View details, Inspection, yesterday">View details</a>
            </span>
          </article>
        </li>
      </ul>
    </section>
</div>
```

From `wallet`.

- `.dr-label` — what the records are.
- `.dr-list` — the `<ul>`, `--snug` where the cards are short.
- `.dr-card` — one record per card, the same shape down the list, each with its own way in.

## Take the pattern

Several records of the same kind, each opened on its own: orders, earnings, reviews, time slots, jobs.

## Build from components instead

The records are facts of one thing rather than separate things: take [Labelled detail rows](#labelled-rows). An empty list: take [Whole-screen message](#state-screen).
