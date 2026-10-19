---
name: Outcome with its record
slug: outcome-summary
order: 4
screens: inspection-report, order-confirmed, resolution
requires: dr-mark--milestone dr-display dr-lead dr-rows__key
built: [Outcome](outcome.html) · [Section heading](section-heading.html) · [Row panel](row-panel.html) · [Action bar](action-bar.html)
---

Something finished. The screen says so in one line, then shows the record of what was done, then the next step.

## Composition

```html
<div class="dr dr-screen">
    <div class="dr-statusbar"><span>9:41</span><span class="dr-statusbar__sys"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 18v-3.2M9.7 18v-6.4M14.3 18v-9.6M19 18V6"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11.5a11 11 0 0 1 15 0"/><path d="M7.5 14.7a7 7 0 0 1 9 0"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="8" width="16" height="8" rx="2.4"/><path d="M21.5 10.8v2.4"/><rect x="4.5" y="10" width="9" height="4" rx="1" fill="currentColor" stroke="none"/></svg></span></div>
    <header class="topbar dr-topbar"><a class="dr-back" href="../../wireframes/support.html" aria-label="Back to Help"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></a><h1 class="dr-topbar__title">Resolution</h1><span class="dr-topbar__spacer"></span></header>
    <main class="dr-main">
      <section class="dr-center" style="padding-top:8px;">
        <span class="dr-mark dr-mark--milestone"><svg class="dr-ic dr-ic--32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg></span>
        <h2 class="dr-display">Refund issued</h2>
        <p class="dr-lead">We reviewed your report and refunded this order in full.</p>
      </section>

      <p class="zlabel dr-label">Outcome <span class="dr-label__act">▸ the decision</span></p>
      <div class="dr-rows" aria-label="Resolution details">
        <div class="dr-rows__row"><span class="dr-rows__key">Issue</span><span class="dr-rows__val">Poor quality</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">Order #</span><span class="dr-rows__val">DR-4821</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">Decision</span><span class="dr-rows__val">Refund issued &#8372;180</span></div>
        <div class="dr-rows__row"><span class="dr-rows__key">Timeline</span><span class="dr-rows__val">To card in 1&ndash;3 days</span></div>
      </div>
      <p class="dr-note">Refunded to Visa &bull;&bull;&bull;&bull; 4921. Or book this order again for free below.</p>
    </main>
    <footer class="dr-actionbar">
      <a class="dr-btn dr-btn--primary dr-btn--block" href="../../wireframes/listings.html">Done</a>
      <a class="dr-btn dr-btn--secondary dr-btn--block" href="../../wireframes/order-confirmed.html">Book again for free</a>
      <a class="dr-btn dr-btn--secondary dr-btn--block" href="../../wireframes/contact-support.html">Contact support</a>
    </footer>
  </div>
```

From `resolution`.

- `.dr-center` — the [Outcome](outcome.html): the milestone mark, the fact as a display line, one lead line.
- `.dr-label` + `.dr-rows` — the record, key and value, labelled like any other zone.
- The next step: in the action bar (`resolution`, `inspection-report`) or as a block button closing `main` on a tab root (`order-confirmed`).

## Take the pattern

A job, an order or a case reached its end and the user needs both the fact and the receipt. `order-confirmed` puts the operator card and `inspection-report` the report before the rows; the order is outcome first, record after.

## Build from components instead

The result is still on its way: take [Waiting outcome](#waiting-screen). A finished thing with no record to show needs only the [Outcome](outcome.html).
