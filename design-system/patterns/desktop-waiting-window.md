---
name: Desktop waiting window
slug: desktop-waiting-window
order: 12
screens: desktop/operator-signup-loading, desktop/order-confirmed-loading, desktop/payment-loading, desktop/signin-loading, desktop/withdraw-loading
requires: dr-desk dr-window dr-scroll dr-center dr-spin dr-mark--milestone dr-display dr-lead
built: [Desktop window](desktop-window.html) · [Outcome](outcome.html) · [Skeleton](skeleton.html) · [Button](button.html)
---

A hand-off the user waits on (Diia, the bank, Apple Pay, the search for an operator), drawn as the step's own window with one spinning mark in its middle. It is the phone's [waiting outcome](#waiting-screen) on the desktop.

## Composition

```html
<div class="dr dr-screen dr-desk dr-desk--jobs" style="width:1440px;height:900px;max-width:none">
  <div class="dr-mapground" role="img" aria-label="Live map of Kyiv, 128 drones in the air"><span class="dr-mapground__drone" style="left:31%;top:34%"></span><span class="dr-mapground__drone" style="left:44%;top:58%"></span><span class="dr-mapground__drone" style="left:63%;top:30%"></span><span class="dr-mapground__drone" style="left:70%;top:66%"></span><span class="dr-mapground__drone" style="left:60%;top:82%"></span><span class="dr-mapground__drone" style="left:38%;top:76%"></span><span class="dr-mapground__drone" style="left:78%;top:44%"></span><span class="dr-mapground__drone" style="left:24%;top:60%"></span><span class="dr-mapground__drone" style="left:58%;top:48%"></span></div>
  <div class="dr-veil" aria-hidden="true"></div>
  <header class="dr-whead">
    <a class="dr-brandlink" href="../../research.html" aria-label="DRON project"><span class="dr-brand" aria-hidden="true"></span></a>
    <div class="dr-whead__end">
      <button class="dr-iconbtn dr-material" type="button" data-theme-cycle aria-label="Switch the theme"><svg class="dr-ic dr-iconbtn__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/></svg><svg class="dr-ic dr-iconbtn__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg></button>
    </div>
  </header>
  <div class="dr-dim" aria-hidden="true"></div>
  <main class="dr-window dr-material" aria-labelledby="win-title--wait1">
    <div class="dr-window__head"><a class="dr-iconbtn dr-material" href="../../wireframes/desktop/operator-fee-terms.html" aria-label="Back to Operator terms"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></a><h1 class="dr-window__title" id="win-title--wait1">Sign in</h1></div>
    <div class="dr-scroll">
      <section class="dr-center dr-waitmsg" aria-label="Verifying identity">
        <span class="dr-mark dr-mark--milestone" aria-hidden="true"><svg class="dr-ic dr-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5A8.5 8.5 0 1 1 3.5 12"/></svg></span>
        <p class="dr-display">Verifying your identity…</p>
        <p class="dr-lead" role="status">Confirming your details with Diia. This takes a few seconds.</p>
        <div class="dr-stack dr-waitmsg__sk">
          <span class="dr-sk-line dr-sk-w90"></span>
          <span class="dr-sk-line dr-sk-w70"></span>
          <span class="dr-sk-line dr-sk-w50"></span>
        </div>
      </section>
    </div>
    <div class="dr-foot"><div class="dr-acts">
      <a class="dr-btn dr-btn--primary dr-btn--block" href="../../wireframes/desktop/operator-verification.html">Continue</a>
      <a class="dr-btn dr-btn--secondary dr-btn--block" href="../../wireframes/desktop/operator-signup.html">Cancel</a>
    </div></div>
  </main>
</div>
```

From `desktop/operator-signup-loading`.

- `.dr-window` with its head — the same window as the step before, so the wait reads as part of that step.
- `.dr-center` — the milestone mark with the spinning glyph (`.dr-spin`), what is happening as the display line, and how long it takes as the lead; in the middle of the space between the head and the foot.
- The skeleton lines the phone puts under the spinner stay in the markup and are drawn nowhere on the desktop: one indicator for one wait (`HIG · Progress indicators`).
- `.dr-foot` — what the user can still do: *Continue* when the hand-off returns, *Cancel* under it. `withdraw-loading` has no foot: the transfer hands over on its own.

Measured at 1600 × 900 on `payment-loading`: the padding 32, the head 32 above the content, the mark, the display line and the lead 12 apart. The 12 is the outcome's own rhythm, above the 4–8 the proximity rule gives the parts of one thing. A departure, recorded: it is half of the 24 that would split the block, so it still reads as one.

Checked against the standards: the wait is announced (`role="status"` on the block or on its lead, `WCAG 4.1.3`); the glyph stops under reduced motion (`reduced-motion.css`; `WCAG 2.3.3`, `HIG · Reduce motion`) and the words still say what is happening.

## Take the pattern

The screen waits on a hand-off whose progress it cannot show, and says what it is waiting for and for how long.

## Build from components instead

The wait has a shape to show: a list or a form about to load is a [Skeleton](skeleton.html) in its own place (`order-review-loading`, `notifications-loading`), not a spinner in the middle.
