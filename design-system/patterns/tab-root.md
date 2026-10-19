---
name: Tab root
slug: tab-root
order: 2
screens: account, delivery, operator-account, order-confirmed, order-history, ratings, support, tracking-empty, wallet
requires: dr-brand dr-topbar__title dr-tabbar
built: [Screen shell](screen-shell.html) · [Section heading](section-heading.html) · [Screen layout](screen-layout.html) · [Floating action](floating-action.html)
---

One of the four places the tab bar leads to. It has no back, because nothing is behind it.

## Composition

```html
<div class="dr dr-screen">
    <div class="dr-statusbar"><span>9:41</span><span class="dr-statusbar__sys"><svg class="dr-ic" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M5 18v-3.2M9.7 18v-6.4M14.3 18v-9.6M19 18V6"/></svg><svg class="dr-ic" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11.5a11 11 0 0 1 15 0"/><path d="M7.5 14.7a7 7 0 0 1 9 0"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg><svg class="dr-ic" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="8" width="16" height="8" rx="2.4"/><path d="M21.5 10.8v2.4"/><rect x="4.5" y="10" width="9" height="4" rx="1" fill="currentColor" stroke="none"/></svg></span></div>
    <header class="topbar dr-topbar"><span class="dr-brand" role="img" aria-label="DRON"></span><h1 class="dr-topbar__title">Activity</h1><span class="dr-topbar__spacer"></span></header>
    <main class="dr-main">
      <p class="zlabel dr-label">Order history <span class="dr-label__act">▸ tap to reopen · delete · open the result</span></p>
      <section aria-label="Past orders">
        <ul class="dr-list">
          <li>
            <article class="dr-card">
              <a class="dr-card__link" href="../../wireframes/tracking.html" aria-label="Package delivery, in progress — view details"></a>
                <span class="dr-order__top">
                  <span class="dr-order__head">
                    <span class="dr-order__title">Package delivery</span>
                    <span class="dr-order__date">Today · 10:03</span>
                  </span>
                  <span class="dr-well">
                    <img src="../assets/drones/thumbs/drone-08.png" alt="" loading="lazy" decoding="async">
                    <span class="dr-status dr-status--live" role="img" aria-label="In progress"></span>
                  </span>
                </span>
                <span class="dr-rail dr-rail--at2">
                  <span class="dr-rail__step"><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></span>
                  <span class="dr-rail__step" aria-current="step"><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">En route</span></span>
                  <span class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">On&#8209;site</span></span>
                  <span class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">Done</span></span>
                </span>
                <span class="dr-inset">
                  <span class="dr-inset__stop"><span class="dr-inset__lbl">From</span><span class="dr-inset__place">Podil</span></span>
                  <span class="dr-inset__dir" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12h13"/><path d="M13 7.5l4.5 4.5-4.5 4.5"/></svg></span>
                  <span class="dr-inset__stop dr-inset__stop--to"><span class="dr-inset__lbl">To</span><span class="dr-inset__place">Osokorky</span></span>
                </span>
                <span class="dr-order__fee">
                  <span><span class="sr-only">Delivery fee</span><span class="dr-number dr-order__price">&#8372;180</span></span>
                  <span class="dr-chip"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="13.5" r="7"/><path d="M12 13.5V9.5"/><path d="M9.5 3.2h5"/><path d="M12 6.5v-3.3"/></svg>ETA ~6 min</span>
                </span>
                <span class="dr-card__actions">
                  <a class="dr-btn dr-btn--primary" href="../../wireframes/tracking.html">View details</a>
                </span>
            </article>
          </li>
          <li>
            <article class="dr-card">
              <a class="dr-card__link" href="../../wireframes/order-details.html" aria-label="Package delivery, 28 Jun 2026, delivered — open order"></a>
                <span class="dr-order__top">
                  <span class="dr-order__head">
                    <span class="dr-order__title">Package delivery</span>
                    <span class="dr-order__date">28 Jun · 14:20</span>
                  </span>
                  <span class="dr-well">
                    <img src="../assets/drones/thumbs/drone-08.png" alt="" loading="lazy" decoding="async">
                    <span class="dr-status" role="img" aria-label="Delivered"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span>
                  </span>
                </span>
                <span class="dr-inset">
                  <span class="dr-inset__stop"><span class="dr-inset__lbl">From</span><span class="dr-inset__place">Podil</span></span>
                  <span class="dr-inset__dir" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12h13"/><path d="M13 7.5l4.5 4.5-4.5 4.5"/></svg></span>
                  <span class="dr-inset__stop dr-inset__stop--to"><span class="dr-inset__lbl">To</span><span class="dr-inset__place">Osokorky</span></span>
                </span>
                <span class="dr-order__fee">
                  <span><span class="sr-only">Delivery fee</span><span class="dr-number dr-order__price">&#8372;180</span></span>
                  <span class="dr-order__acts"><button class="dr-btn dr-btn--icon" type="button" aria-label="Delete order"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6.6h16"/><path d="M9.6 6.6V4.9a1.1 1.1 0 0 1 1.1-1.1h2.6a1.1 1.1 0 0 1 1.1 1.1v1.7"/><path d="M6.3 6.6l.85 12.1a1.6 1.6 0 0 0 1.6 1.5h6.5a1.6 1.6 0 0 0 1.6-1.5l.85-12.1"/><path d="M10.3 10.4v6M13.7 10.4v6"/></svg></button><a class="dr-btn dr-btn--icon" href="../../wireframes/delivery.html" aria-label="View details"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5.5" cy="6" r="2.1"/><circle cx="18.5" cy="6" r="2.1"/><circle cx="5.5" cy="18" r="2.1"/><circle cx="18.5" cy="18" r="2.1"/><path d="M7 7.5l3 3M17 7.5l-3 3M7 16.5l3-3M17 16.5l-3-3"/><rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1.3"/></svg></a></span>
                </span>
            </article>
          </li>
          <li>
            <article class="dr-card">
              <a class="dr-card__link" href="../../wireframes/order-details-aerial.html" aria-label="Photo and video, 14 Jun 2026, delivered — open order"></a>
                <span class="dr-order__top">
                  <span class="dr-order__head">
                    <span class="dr-order__title">Photo &amp; video</span>
                    <span class="dr-order__date">14 Jun · 11:30</span>
                  </span>
                  <span class="dr-well">
                    <img src="../assets/drones/thumbs/drone-flight-camera.png" alt="" loading="lazy" decoding="async">
                    <span class="dr-status" role="img" aria-label="Delivered"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span>
                  </span>
                </span>
                <span class="dr-inset">
                  <span class="dr-inset__stop"><span class="dr-inset__lbl">Location</span><span class="dr-inset__place">Trukhaniv Island</span></span>
                </span>
                <span class="dr-order__fee">
                  <span><span class="sr-only">Total</span><span class="dr-number dr-order__price">&#8372;800</span></span>
                  <span class="dr-order__acts"><button class="dr-btn dr-btn--icon" type="button" aria-label="Delete order"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6.6h16"/><path d="M9.6 6.6V4.9a1.1 1.1 0 0 1 1.1-1.1h2.6a1.1 1.1 0 0 1 1.1 1.1v1.7"/><path d="M6.3 6.6l.85 12.1a1.6 1.6 0 0 0 1.6 1.5h6.5a1.6 1.6 0 0 0 1.6-1.5l.85-12.1"/><path d="M10.3 10.4v6M13.7 10.4v6"/></svg></button><a class="dr-btn dr-btn--icon" href="../../wireframes/order-details-aerial.html" aria-label="View the photo and video set"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5.5" cy="6" r="2.1"/><circle cx="18.5" cy="6" r="2.1"/><circle cx="5.5" cy="18" r="2.1"/><circle cx="18.5" cy="18" r="2.1"/><path d="M7 7.5l3 3M17 7.5l-3 3M7 16.5l3-3M17 16.5l-3-3"/><rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1.3"/></svg></a></span>
                </span>
            </article>
          </li>
          <li>
            <article class="dr-card">
              <a class="dr-card__link" href="../../wireframes/order-details-inspection.html" aria-label="Inspection, 2 Jun 2026, delivered — open order"></a>
                <span class="dr-order__top">
                  <span class="dr-order__head">
                    <span class="dr-order__title">Inspection</span>
                    <span class="dr-order__date">2 Jun · 09:15</span>
                  </span>
                  <span class="dr-well">
                    <img src="../assets/drones/thumbs/drone-flight-clean.png" alt="" loading="lazy" decoding="async">
                    <span class="dr-status" role="img" aria-label="Delivered"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span>
                  </span>
                </span>
                <span class="dr-inset">
                  <span class="dr-inset__stop"><span class="dr-inset__lbl">Location</span><span class="dr-inset__place">Hlevakha, field 3</span></span>
                </span>
                <span class="dr-order__fee">
                  <span><span class="sr-only">Total</span><span class="dr-number dr-order__price">&#8372;650</span></span>
                  <span class="dr-order__acts"><button class="dr-btn dr-btn--icon" type="button" aria-label="Delete order"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6.6h16"/><path d="M9.6 6.6V4.9a1.1 1.1 0 0 1 1.1-1.1h2.6a1.1 1.1 0 0 1 1.1 1.1v1.7"/><path d="M6.3 6.6l.85 12.1a1.6 1.6 0 0 0 1.6 1.5h6.5a1.6 1.6 0 0 0 1.6-1.5l.85-12.1"/><path d="M10.3 10.4v6M13.7 10.4v6"/></svg></button><a class="dr-btn dr-btn--icon" href="../../wireframes/inspection-report.html" aria-label="View details"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5.5" cy="6" r="2.1"/><circle cx="18.5" cy="6" r="2.1"/><circle cx="5.5" cy="18" r="2.1"/><circle cx="18.5" cy="18" r="2.1"/><path d="M7 7.5l3 3M17 7.5l-3 3M7 16.5l3-3M17 16.5l-3-3"/><rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1.3"/></svg></a></span>
                </span>
            </article>
          </li>
        </ul>
      </section>
    </main>
    <footer class="dr-tabbar">
      <nav class="dr-tabs" aria-label="Primary">
        <a class="dr-tab" href="../../wireframes/listings.html"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="7" height="7" rx="1.6"/><rect x="13" y="4" width="7" height="7" rx="1.6"/><rect x="4" y="13" width="7" height="7" rx="1.6"/><rect x="13" y="13" width="7" height="7" rx="1.6"/></svg>Order</a>
        <a class="dr-tab" href="../../wireframes/order-history.html" aria-current="page"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.6" cy="6" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.6" cy="12" r="1.1" fill="currentColor" stroke="none"/><circle cx="4.6" cy="18" r="1.1" fill="currentColor" stroke="none"/></svg>Activity</a>
        <a class="dr-tab" href="../../wireframes/support.html"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M9.4 9.4a2.7 2.7 0 0 1 5.2 1c0 1.8-2.6 2.1-2.6 3.9"/><circle cx="12" cy="17" r=".9" fill="currentColor" stroke="none"/></svg>Help</a>
        <a class="dr-tab" href="../../wireframes/account.html"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c0-3.4 2.9-5.8 6.5-5.8s6.5 2.4 6.5 5.8"/></svg>Account</a>
      </nav>
      <div class="dr-home"><span></span></div>
    </footer>
  </div>
```

From `order-history`.

- `.dr-topbar` with `.dr-brand` — the DRON mark where a pushed screen has its back, then the tab's name.
- `.dr-main` — the tab's content, in labelled zones.
- `.dr-tabbar` — four tabs (client: Order, Activity, Help, Account; operator: Jobs, Earnings, Ratings, Account), the current one `aria-current="page"`.

### With a floating action

The tab's one action floats above the tab bar instead of standing in `main`: `.dr-main--fab` gives the column its floor, and the `.dr-fab` capsule sits after `main` in the DOM, where it sits on the screen.

```html
<div class="dr dr-screen">
    <div class="dr-statusbar"><span>9:41</span><span class="dr-statusbar__sys"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 18v-3.2M9.7 18v-6.4M14.3 18v-9.6M19 18V6"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11.5a11 11 0 0 1 15 0"/><path d="M7.5 14.7a7 7 0 0 1 9 0"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="8" width="16" height="8" rx="2.4"/><path d="M21.5 10.8v2.4"/><rect x="4.5" y="10" width="9" height="4" rx="1" fill="currentColor" stroke="none"/></svg></span></div>
    <header class="topbar dr-topbar"><span class="dr-brand" role="img" aria-label="DRON"></span><h1 class="dr-topbar__title">Earnings</h1><span class="dr-topbar__spacer"></span></header>
    <main class="dr-main dr-main--fab">
      <p class="zlabel dr-label">Balance <span class="dr-label__act">&#9656; available to withdraw</span></p>
      <section class="dr-balance dr-balance--card" aria-label="Balance">
        <span class="dr-balance__glyph" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6.6" rx="6.8" ry="2.9"/><path d="M5.2 6.6v4.5c0 1.6 3 2.9 6.8 2.9s6.8-1.3 6.8-2.9V6.6"/><path d="M5.2 11.1v4.5c0 1.6 3 2.9 6.8 2.9s6.8-1.3 6.8-2.9v-4.5"/></svg></span>
        <div class="dr-balance__body">
          <p class="dr-number">&#8372;3,240</p>
          <p class="dr-note dr-note--flush">Available to withdraw</p>
        </div>
      </section>

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
                <a class="dr-btn dr-btn--secondary" href="../../wireframes/earning-details.html" aria-label="View details &#8212; Package delivery, today at 10:07">View details</a>
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
                <a class="dr-btn dr-btn--secondary" href="../../wireframes/earning-details-aerial.html" aria-label="View details &#8212; Photo and video, today at 08:20">View details</a>
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
                <a class="dr-btn dr-btn--secondary" href="../../wireframes/earning-details-inspection.html" aria-label="View details &#8212; Inspection, yesterday">View details</a>
              </span>
            </article>
          </li>
        </ul>
      </section>
    </main>
    <a class="dr-btn dr-btn--primary dr-fab" href="../../wireframes/withdraw.html">Withdraw</a>
    <footer class="dr-tabbar">
      <nav class="dr-tabs" aria-label="Primary">
        <a class="dr-tab" href="../../wireframes/operator-listings.html"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.4" y="7.4" width="17.2" height="12.2" rx="2.2"/><path d="M9 7.4V6.1A1.7 1.7 0 0 1 10.7 4.4h2.6A1.7 1.7 0 0 1 15 6.1v1.3"/><path d="M3.4 12.6h17.2"/></svg>Jobs</a>
        <a class="dr-tab" href="../../wireframes/wallet.html" aria-current="page"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.8" y="6.8" width="18.4" height="10.4" rx="2.2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9.6v4.8M18 9.6v4.8"/></svg>Earnings</a>
        <a class="dr-tab" href="../../wireframes/ratings.html"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.79l2.84 5.75 6.36.93-4.6 4.48 1.09 6.33L12 17.29l-5.69 2.99 1.09-6.33-4.6-4.48 6.36-.93z"/></svg>Ratings</a>
        <a class="dr-tab" href="../../wireframes/operator-account.html"><svg class="dr-ic dr-ic--22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c0-3.4 2.9-5.8 6.5-5.8s6.5 2.4 6.5 5.8"/></svg>Account</a>
      </nav>
      <div class="dr-home"><span></span></div>
    </footer>
  </div>
```

From `wallet`.

Stands on: account, operator-account, wallet.

## Take the pattern

The screen is a tab destination. Its action, if it has one, goes in the floating capsule or inside `main`, because the tab bar holds the bottom. `tracking` is the one tab screen that trades the tab bar for an action bar while an order is live, and its `-empty` and `-error` files keep the tab bar.

## Build from components instead

`listings` and `operator-listings` are tab roots too, but they put the notification bell or the operator's own head in the title's place: build those from the [Screen shell](screen-shell.html) parts and the [Finder](finder.html).
