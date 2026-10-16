---
name: Waiting outcome
slug: waiting-screen
order: 5
screens: operator-signup-loading, operator-verification-loading, payment-loading, signin-loading, withdraw-loading
requires: dr-mark--milestone dr-display dr-sk-line
built: [Outcome](outcome.html) · [Skeleton](skeleton.html) · [Action bar](action-bar.html)
---

Something is being handed off and will come back: a provider sign-in, a payment, a withdrawal. The screen names what is happening and holds the place for the answer.

## Composition

```html
<div class="dr dr-screen">
    <div class="dr-statusbar"><span>9:41</span><span class="dr-statusbar__sys"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 18v-3.2M9.7 18v-6.4M14.3 18v-9.6M19 18V6"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11.5a11 11 0 0 1 15 0"/><path d="M7.5 14.7a7 7 0 0 1 9 0"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="8" width="16" height="8" rx="2.4"/><path d="M21.5 10.8v2.4"/><rect x="4.5" y="10" width="9" height="4" rx="1" fill="currentColor" stroke="none"/></svg></span></div>
    <header class="topbar dr-topbar"><span class="dr-brand" role="img" aria-label="DRON"></span><span class="dr-topbar__spacer"></span></header>
    <main class="dr-main">
      <p class="zlabel dr-label">Sign in <span class="dr-label__act">▸ loading — opening provider</span></p>
      <section class="dr-center" aria-label="Signing in" role="status">
        <span class="dr-mark dr-mark--milestone" aria-hidden="true"><svg class="dr-ic dr-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5A8.5 8.5 0 1 1 3.5 12"/></svg></span>
        <p class="dr-display">Opening Diia…</p>
        <p class="dr-lead">Redirecting you to Diia to confirm your identity. This takes a few seconds.</p>
        <div class="dr-stack" style="width:100%;">
          <span class="dr-sk-line dr-sk-w90"></span>
          <span class="dr-sk-line dr-sk-w70"></span>
        </div>
      </section>
    </main>
    <footer class="dr-actionbar">
      <a class="dr-btn dr-btn--primary dr-btn--block" href="../../wireframes/role-select.html">Continue</a>
      <a class="dr-btn dr-btn--secondary dr-btn--block" href="../../wireframes/signin.html">Cancel</a>
    </footer>
  </div>
```

From `signin-loading`.

- `.dr-center` with `role="status"` — the outcome shape, its mark the activity indicator.
- `.dr-display` + `.dr-lead` — what is happening, in the provider's name, and how long it takes.
- `.dr-stack` of `.dr-sk-line` — the lines the answer will fill.

## Take the pattern

The wait is for another party: Diia, Bank ID, Apple Pay, the bank. Nothing on the screen can be shown yet.

## Build from components instead

A list or a detail screen is loading its own data: keep the screen's layout and put [Skeleton](skeleton.html) bars where the content goes (`order-history-loading`, `inspection-report-loading`).
