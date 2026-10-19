---
name: Whole-screen message
slug: state-screen
order: 3
screens: contact-support-error, delivery-error, inspection-report-error, job-brief-error, job-offer-empty, notifications-empty, onboarding-client-empty, operator-notifications-empty, operator-signup-error, operator-verification-error, order-history-empty, payment-error, ratings-empty, report-issue-empty, result-upload-error, share-empty, signin-error, time-slot-empty, withdraw-error
requires: dr-msg dr-label
built: [Message block](message-block.html) · [Banner message](banner-message.html) · [Section heading](section-heading.html) · the screen's own frame
---

The screen's content is missing or failed, so `main` holds one zone label and one message, and the frame around it stays exactly as it was.

## Composition

```html
<div class="dr dr-screen">
    <div class="dr-statusbar"><span>9:41</span><span class="dr-statusbar__sys"><svg class="dr-ic" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M5 18v-3.2M9.7 18v-6.4M14.3 18v-9.6M19 18V6"/></svg><svg class="dr-ic" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11.5a11 11 0 0 1 15 0"/><path d="M7.5 14.7a7 7 0 0 1 9 0"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg><svg class="dr-ic" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="8" width="16" height="8" rx="2.4"/><path d="M21.5 10.8v2.4"/><rect x="4.5" y="10" width="9" height="4" rx="1" fill="currentColor" stroke="none"/></svg></span></div>
    <header class="topbar dr-topbar"><span class="dr-brand" role="img" aria-label="DRON"></span><h1 class="dr-topbar__title">Activity</h1><span class="dr-topbar__spacer"></span></header>
    <main class="dr-main">
      <p class="zlabel dr-label">Order history <span class="dr-label__act">▸ nothing yet: start the first order</span></p>
      <section aria-label="Past orders">
        <div class="dr-msg dr-msg--banner" role="status">
          <span class="dr-msg__banner" aria-hidden="true" style="background-image:url(../assets/drones/drone-cargo-banner.jpg)"></span>
          <span class="dr-msg__title">No orders yet</span>
          <p class="dr-msg__body">Your orders appear here, ready to re-book in a tap.</p>
          <div class="dr-msg__actions">
            <a class="dr-btn dr-btn--primary" href="../../wireframes/listings.html">Browse services</a>
          </div>
        </div>
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

From `order-history-empty`.

- The frame — nav bar, tab bar or action bar — unchanged from the screen's base file, so the user is still where they were.
- `.dr-label` — the zone the content would have filled, with what happened in its note.
- `.dr-msg` — what happened and what to do, with a way out. An empty state takes the neutral mark or the banner; an error takes the red mark (rev 293).

### The way out in the action bar

When the screen already has an action bar, the exits stay there (*Try again* on top) and the message carries none of its own.

```html
<div class="dr dr-screen">
    <div class="dr-statusbar"><span>9:41</span><span class="dr-statusbar__sys"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 18v-3.2M9.7 18v-6.4M14.3 18v-9.6M19 18V6"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11.5a11 11 0 0 1 15 0"/><path d="M7.5 14.7a7 7 0 0 1 9 0"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="8" width="16" height="8" rx="2.4"/><path d="M21.5 10.8v2.4"/><rect x="4.5" y="10" width="9" height="4" rx="1" fill="currentColor" stroke="none"/></svg></span></div>
    <header class="topbar dr-topbar"><a class="dr-back" href="../../wireframes/order-review.html" aria-label="Back to Order review"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></a><h1 class="dr-topbar__title">Payment</h1><span class="dr-topbar__spacer"></span></header>
    <main class="dr-main">
      <p class="zlabel dr-label">Amount <span class="dr-label__act">▸ not charged</span></p>
      <section aria-label="Payment error">
        <div class="dr-msg" role="alert">
          <span class="dr-mark dr-mark--danger" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.8 6.5H5a2 2 0 0 0-2 2v7a2 2 0 0 0 1 1.8"/><path d="M20 6.7a2 2 0 0 1 1 1.8v7a2 2 0 0 1-2 2H9.2"/><path d="M9.6 11.7A2.4 2.4 0 0 1 11.7 9.6"/><path d="M12.3 14.4A2.4 2.4 0 0 0 14.4 12.3"/><path d="M5.2 18.8L18.8 5.2"/></svg></span>
          <span class="dr-msg__title">Payment declined</span>
          <p class="dr-msg__body">Apple Pay couldn't complete the charge. Nothing was taken from your account. Try again or use another method.</p>
        </div>
      </section>
    </main>
    <footer class="dr-actionbar">
      <a class="dr-btn dr-btn--primary dr-btn--block" href="../../wireframes/order-confirmed.html">Try again</a>
      <a class="dr-btn dr-btn--secondary dr-btn--block" href="../../wireframes/order-review.html">Change method</a>
    </footer>
  </div>
```

From `payment-error`.

Stands on: payment-error, signin-error, operator-signup-error, contact-support-error.

## Take the pattern

The whole screen has nothing to show: an empty list, a failed load, a declined payment. One message, one way out, nothing else in `main`.

## Build from components instead

Only one zone fails and the rest of the screen still holds: `tracking-error` keeps the map, the rail and the rows, and the message is one zone among them. Use the [Message block](message-block.html) alone there.
