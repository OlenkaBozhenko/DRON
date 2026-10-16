---
name: Pushed screen
slug: pushed-screen
order: 1
screens: account-edit, chat, contact-support, inspection-report, job-brief, job-checklist, operator-dispute, operator-fee-terms, operator-profile-setup, operator-signup, operator-verification, order-details, order-review, order-setup, payment, rate, report-issue, resolution, result-upload, switch-role, time-slot, withdraw
requires: dr-back dr-topbar__title dr-actionbar
built: [Screen shell](screen-shell.html) · [Section heading](section-heading.html) · [Screen layout](screen-layout.html) · [Action bar](action-bar.html) · [Button](button.html)
---

A screen you reach from another one and leave by deciding. It is the most common screen in the product.

## Composition

```html
<div class="dr dr-screen">
    <div class="dr-statusbar"><span>9:41</span><span class="dr-statusbar__sys"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 18v-3.2M9.7 18v-6.4M14.3 18v-9.6M19 18V6"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11.5a11 11 0 0 1 15 0"/><path d="M7.5 14.7a7 7 0 0 1 9 0"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="8" width="16" height="8" rx="2.4"/><path d="M21.5 10.8v2.4"/><rect x="4.5" y="10" width="9" height="4" rx="1" fill="currentColor" stroke="none"/></svg></span></div>
    <header class="topbar dr-topbar"><a class="dr-back" href="../../wireframes/order-history.html" aria-label="Back to Activity"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></a><h1 class="dr-topbar__title">Package delivery</h1><span class="dr-topbar__spacer"></span></header>
    <main class="dr-main">
      <p class="zlabel dr-label">Summary <span class="dr-label__act">▸ what was done · what it cost</span></p>
      <div class="dr-rows" aria-label="Order summary">
        <div class="dr-rows__row"><span class="dr-rows__key">From</span><span class="dr-rows__val">Podil, 21</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">To</span><span class="dr-rows__val">Osokorky, 14</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">Parcel</span><span class="dr-rows__val">Small · up to 2 kg</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">Delivered</span><span class="dr-rows__val">28 Jun · 14:20</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">Operator</span><span class="dr-rows__val">Andriy M.</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">Paid</span><span class="dr-rows__val">&#8372;180</span></div>
      </div>

      <p class="zlabel dr-label">Delivery photo <span class="dr-label__act">▸ what the operator sent back (RJ-C4)</span></p>
      <section aria-label="Delivery photo">
        <div class="dr-well dr-well--photo" style="width:100%;height:180px;"><img src="../assets/scenes/thumbs/delivered-at-door.jpg" alt="A ribboned cardboard parcel left on the wooden entrance steps beside the door and its intercom panel, the way the operator photographed it on arrival." loading="lazy" decoding="async"></div>
      </section>
    </main>
    <footer class="dr-actionbar">
      <a class="dr-btn dr-btn--primary dr-btn--block" href="../../wireframes/order-setup.html">Book again</a>
      <a class="dr-btn dr-btn--secondary dr-btn--block" href="../../wireframes/order-history.html">Delete order</a>
    </footer>
  </div>
```

From `order-details`.

- `.dr-statusbar` — the iOS status bar, drawn, owned by nothing.
- `.dr-topbar` with `.dr-back` — the chevron alone, named `Back to {destination}` for assistive tech, and the screen's one title. No brand, no second control.
- `.dr-main` — labelled zones, one [section heading](section-heading.html) above each.
- `.dr-actionbar` — the decision. The primary on top, secondaries under it (rev 290).

## Take the pattern

The user arrives from another screen and the screen ends in an action: pay, confirm, send, save. Take the frame whole and change only what is inside `main`.

## Build from components instead

The screen is one of the four tab destinations (take [Tab root](#tab-root)), or it has no nav bar at all, like the call (take [Call surface](call-surface.html)). A pushed screen with nothing to commit drops the action bar and keeps the rest: `earning-details`, `notifications` and `operator-notifications` are built that way.
