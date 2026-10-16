---
name: Card shapes
slug: card
group: Surfaces
order: 20
classes: .dr-card · --row · --compact · .dr-listing__body · __name · __desc · __meta
file: card.css
inventory: Card; Listing card
kit: 859
---

## Anatomy

```html
<article class="dr-card dr-card--row dr-listing" style="width:341px;max-width:100%">
        <span class="dr-listing__body">
          <span class="dr-listing__name">Package delivery</span>
          <span class="dr-listing__desc">2.3 km · ~18 min</span>
          <span class="dr-listing__meta"><span><span class="sr-only">Pay</span><span class="dr-number">₴180</span></span></span>
        </span>
        <span class="dr-well"><img src="../assets/drones/thumbs/drone-01.png" alt="" loading="lazy" decoding="async"></span>
      </article>
```

- `.dr-card` — The surface: `--bg-surface` on the page, a 1.11:1 tone step, radius 16, no border, no shadow. Inset 24 / 20. Below 390 wide the inset is 24 / 16 and the gap 18.
- `.dr-listing__name` — The name, 15/600 at line-height 1.2, in `--text-primary`, 14.37:1.
- `.dr-listing__desc` — One line of description, 13/400 at line-height 1.4, in `--text-muted`, 5.95:1, 2 under the name.
- `.dr-listing__meta` — The money line, 6 under the description, items 8 apart: the figure is a `.dr-number`, 20/700 tabular, with its word (*Pay*) in `.sr-only` for a screen reader only.
- `.dr-well` — The drone doing the job, a 96 × 96 cutout with no ground, radius 13, padding 4, after the body. 68 × 68 below 390 wide.

The markup is `job-offer`'s. Every row card also carries `dr-listing`, as on the screens. It is a namespace with no rule of its own; the look comes from `dr-card--row`.

## Variants

### Default

```html
<article class="dr-card" style="width:341px;max-width:100%">
              <span class="dr-card__row">
                <span class="dr-listing__body">
                  <span class="dr-listing__name">Package delivery</span>
                  <span class="dr-listing__meta"><span class="dr-listing__desc">Today, 10:07</span></span>
                </span>
                <span><span class="sr-only">Earned</span><span class="dr-number">&#8372;180</span></span>
              </span>
              <span class="dr-card__actions">
                <a class="dr-btn dr-btn--secondary" href="#" aria-label="View details &#8212; Package delivery, today at 10:07">View details</a>
              </span>
            </article>
```

A column: inset 24 / 20, 20 between groups. Its parts are the [card row](card-row.html), the [card action slot](card-actions.html) and the [order card](order-card.html)'s blocks. This one is an earning on `wallet`. Six screens build the plain card: `wallet`, `order-history`, `order-history-loading`, `operator-listings`, `account-photo` and `operator-account-photo`.

### Row

```html
<article class="dr-card dr-card--row dr-listing" style="width:341px;max-width:100%">
        <span class="dr-listing__body">
          <span class="dr-listing__name">Package delivery</span>
          <span class="dr-listing__desc">2.3 km · ~18 min</span>
          <span class="dr-listing__meta"><span><span class="sr-only">Pay</span><span class="dr-number">₴180</span></span></span>
        </span>
        <span class="dr-well"><img src="../assets/drones/thumbs/drone-01.png" alt="" loading="lazy" decoding="async"></span>
      </article>
```

`--row` turns the card itself into a row, items centred, gap 12. Body first, picture after, so the name is read first and the drone is glanced at. On `job-offer`, `job-offer-inspection`, `operator-dispute` and `operator-dispute-error`.

### Row without a picture

```html
<article class="dr-card dr-card--row dr-listing" style="width:341px;max-width:100%">
              <div class="dr-listing__body">
                <span class="dr-listing__name">Olena H.<span class="dr-listing__score">· 5.0</span></span>
                <p class="dr-listing__desc">“Fast and careful — package arrived sealed and on time.”</p>
                <span class="dr-listing__meta"><span class="dr-chip">Package delivery</span><span class="dr-chip">Today</span></span>
              </div>
            </article>
```

The same row with the well left out and chips on the meta line. A review on `ratings`; the score is the [earned score](earned-score.html). `inspection-report` builds the same shape for its three findings.

### Compact

```html
<article class="dr-card dr-card--compact" style="width:341px;max-width:100%"><span class="dr-listing__body">Leave with the concierge, entrance code 4417.</span></article>
```

Inset 20 / 16 and gap 12 instead of 24 / 20 and 20; below 390 wide the inset is 16 / 16 and the gap 18. Holds one note, as on `job-brief`. Five screens build it. Three hold the client's note as `.dr-listing__body` (`job-brief`, `job-brief-inspection`, `job-offer-inspection`); `job-brief-aerial` holds its empty note as `.dr-listing__desc`; `operator-dispute` holds the client's issue as a caption, a `.dr-lead` quote and a chip.

## States

No state of its own: the card is a surface, and nothing in it takes focus. A card that is one link takes the [card link](card-link.html#s-states) states, and its buttons take the [button](button.html#s-states) states.

## When to use

A card is one object on a flat page: separated by a warm tone step and the 16 radius, never by a border or a shadow, and with no hover lift. Inside it the rhythm is 20 between groups and 4 or 8 within one; between cards it is the [list](list.html)'s gap, which is always larger. The listing card holds the drone doing the job, the name, one line of description and, on `job-offer`, the money line. It carries no chevron.

The cover card is a shape of its own with no inset; see [Cover card](cover-card.html). A card that is one tap target takes an empty stretched anchor; see [Card that is one link](card-link.html). The service-card modifier `.dr-listing--service` (title 17/400) is declared in `components/card.css` but no wireframe draws it any more, so it has no live block here.

The name is the dictionary word for the thing (*Package delivery*, a reviewer's name), the description is a fact with a number in it (*2.3 km · ~18 min*), and money is a figure with its meaning given to a screen reader in `.dr-sr`.

Sources: DESIGN.md § Cards · § Do's and Don'ts · inventory.md § 1.3 (Card, Listing card) · ui/kit.html Card, the other three shapes

## Rule

```html
<ul class="dr-list dr-list--snug" style="width:341px;max-width:100%"><li><article class="dr-card dr-card--row dr-listing">
              <div class="dr-listing__body">
                <span class="dr-listing__name">Olena H.<span class="dr-listing__score">· 5.0</span></span>
                <p class="dr-listing__desc">“Fast and careful — package arrived sealed and on time.”</p>
                <span class="dr-listing__meta"><span class="dr-chip">Package delivery</span><span class="dr-chip">Today</span></span>
              </div>
            </article></li><li><article class="dr-card dr-card--row dr-listing">
              <div class="dr-listing__body">
                <span class="dr-listing__name">Andriy P.<span class="dr-listing__score">· 4.0</span></span>
                <p class="dr-listing__desc">“Good shots overall, a couple came out a bit dark.”</p>
                <span class="dr-listing__meta"><span class="dr-chip">Photo &amp; video</span><span class="dr-chip">Yesterday</span></span>
              </div>
            </article></li></ul>
```

Flat cards of one shape, set apart by the list's gap and the tone step alone, as `ratings` draws them.

## Anti-rule

```html
<article class="dr-card dr-card--row dr-listing" style="width:341px;max-width:100%">
      <span class="dr-listing__body">
        <span class="dr-listing__name">Package delivery</span>
        <span class="dr-listing__desc">2.3 km &#183; ~18 min</span>
      </span>
      <span class="dr-well"><img src="../assets/drones/thumbs/drone-01.png" alt="" loading="lazy" decoding="async"></span>
      <span class="dr-choice__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span>
    </article>
```

A listing card with a borrowed chevron. The listing card has no chevron; the arrow belongs to the [choice card](choice-card.html), which is a route to another screen. For facts read in pairs use a [row panel](row-panel.html); for a group of data the user enters use a [titled zone card](titled-zone-card.html).
