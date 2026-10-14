---
name: Onboarding slider
slug: onboarding-slider
group: Surfaces
order: 190
classes: .dr-slider · --bleed · .dr-slide · --floor · __art · .dr-pager
file: media.css
inventory: Onboarding carousel
kit: 1520
---

## Anatomy

```html
<div class="dr dr-screen">
  <div class="dr-statusbar"><span>9:41</span><span class="dr-statusbar__sys"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 18v-3.2M9.7 18v-6.4M14.3 18v-9.6M19 18V6"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11.5a11 11 0 0 1 15 0"/><path d="M7.5 14.7a7 7 0 0 1 9 0"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="8" width="16" height="8" rx="2.4"/><path d="M21.5 10.8v2.4"/><rect x="4.5" y="10" width="9" height="4" rx="1" fill="currentColor" stroke="none"/></svg></span></div>
  <header class="dr-topbar"><span class="dr-brand" role="img" aria-label="DRON"></span><span class="dr-topbar__spacer"></span></header>
  <main class="dr-main">
    <div class="dr-slider dr-slider--bleed" aria-label="What to expect from DRON">
      <section class="dr-slide" aria-label="Slide 1 of 3">
        <p class="dr-display">You order, a pro handles it</p>
        <p class="dr-lead">Pick a service and pay. A certified DRON operator does the flying — you never touch the drone.</p>
        <span class="dr-slide__art"><img src="../assets/scenes/thumbs/handover.png" alt="" decoding="async"></span>
      </section>
      <section class="dr-slide" aria-label="Slide 2 of 3">
        <p class="dr-display">A verified, insured operator</p>
        <p class="dr-lead">The moment you pay you see their name, photo and live position. Someone accountable is on the way.</p>
        <span class="dr-slide__art"><img src="../assets/people/thumbs/wide/operator.png" alt="" loading="lazy" decoding="async"></span>
      </section>
      <section class="dr-slide" aria-label="Slide 3 of 3">
        <p class="dr-display">What the drone does — and doesn't</p>
        <p class="dr-lead">It flies a set route, keeps its distance, and only records what your order needs. Brief low noise on take-off and landing; no filming of your neighbours.</p>
        <span class="dr-slide__art"><img src="../assets/drones/thumbs/wide/drone-flight-clean.png" alt="" loading="lazy" decoding="async"></span>
      </section>
    </div>
    <div class="dr-pager" aria-hidden="true"><span class="on"></span><span></span><span></span></div>
  </main>
  <footer class="dr-actionbar">
    <a class="dr-btn dr-btn--secondary dr-btn--block" href="#">Skip</a>
    <a class="dr-btn dr-btn--primary dr-btn--block" href="#">Get started</a>
  </footer>
</div>
```

- `.dr-slider--bleed` — The scroll-snap row, 373.4 × 577.6, filling the main area's padding box so it stops exactly at the action bar's top edge. It is `position: absolute; inset: 0`, and the frame opts in through `.dr-screen:has(.dr-slider--bleed) > .dr-main`. The same `:has()` keeps the status bar, top bar and action bar above the art.
- `.dr-slide` — One slide, named *Slide 1 of 3*. Its text is padded 20 from each side, and the art takes a negative margin of exactly that, so the words keep their measure while the picture runs edge to edge.
- `.dr-display` — The heading, 22/700, top-anchored 48 below the top of the content area.
- `.dr-lead` — The sub-line under the heading. No type class was made for slides.
- `.dr-slide__art` — The picture in what is left of the slide, with 32 of air above and below. `object-fit: contain`, never `cover`, so a real photograph or cutout is never cropped.
- `.dr-pager` — One pager for the whole slider, under it. The lit dot is `--color-action` and the rest are `--bg-muted`. `ui/kit.js` moves `.on` as the user swipes, and this page runs no script.
- `.dr-actionbar` — *Skip* as a secondary and *Get started* as the primary, one per row.

## Variants

### Floor

```html
<div class="dr dr-screen">
  <div class="dr-statusbar"><span>9:41</span><span class="dr-statusbar__sys"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 18v-3.2M9.7 18v-6.4M14.3 18v-9.6M19 18V6"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11.5a11 11 0 0 1 15 0"/><path d="M7.5 14.7a7 7 0 0 1 9 0"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="8" width="16" height="8" rx="2.4"/><path d="M21.5 10.8v2.4"/><rect x="4.5" y="10" width="9" height="4" rx="1" fill="currentColor" stroke="none"/></svg></span></div>
  <header class="dr-topbar"><span class="dr-brand" role="img" aria-label="DRON"></span><span class="dr-topbar__spacer"></span></header>
  <main class="dr-main">
    <div class="dr-slider dr-slider--bleed" aria-label="How operating on DRON works">
      <section class="dr-slide dr-slide--floor" aria-label="Slide 1 of 3">
        <p class="dr-display">Jobs come to you</p>
        <p class="dr-lead">Auto-dispatch sends pre-qualified jobs. Accept or decline in seconds — no bidding.</p>
        <span class="dr-slide__art"><img src="../assets/scenes/thumbs/onboarding-dispatch.png" alt="" loading="lazy" decoding="async"></span>
      </section>
      <section class="dr-slide" aria-label="Slide 2 of 3">
        <p class="dr-display">Follow the checklist</p>
        <p class="dr-lead">Every job has a step-by-step checklist so nothing is missed on site.</p>
        <span class="dr-slide__art"><img src="../assets/scenes/thumbs/onboarding-checklist.png" alt="" loading="lazy" decoding="async"></span>
      </section>
      <section class="dr-slide" aria-label="Slide 3 of 3">
        <p class="dr-display">Get paid automatically</p>
        <p class="dr-lead">Earnings land within 30 min of client confirmation. Withdraw to card or bank.</p>
        <span class="dr-slide__art"><img src="../assets/scenes/thumbs/onboarding-payout.png" alt="" loading="lazy" decoding="async"></span>
      </section>
    </div>
    <div class="dr-pager" aria-hidden="true"><span class="on"></span><span></span><span></span></div>
  </main>
  <footer class="dr-actionbar">
    <a class="dr-btn dr-btn--secondary dr-btn--block" href="#">Skip</a>
    <a class="dr-btn dr-btn--primary dr-btn--block" href="#">Get started</a>
  </footer>
</div>
```

`--floor` is for a slide whose subject stands on the bottom edge. Exactly one slide in the product takes it: the first slide of `onboarding-operator`, whose picture is cut by its own canvas. The art keeps its top padding, drops the bottom one, and uses `object-position: center calc(100% + 7px)` to make up for the transparent rows at the bottom of the file. It is a modifier on the slide, not on the slider.

## When to use

The onboarding slider opens three screens: `welcome`, `onboarding-client` and `onboarding-operator`. It is the only place where a picture runs to the edge of the frame. It only works inside a [screen shell](screen-shell.html), because the frame opts in. The specimens are drawn at the built 375 × 812, because the art takes whatever height the copy leaves. A shorter frame would show a different composition, not the same slide smaller. A slide whose picture has not been supplied keeps a `--media` ground and a mono label at 5.51:1, so it reads as *picture pending*. No artwork is invented to fill it.

Each slide answers one fear in one sentence pair. The heading names the outcome (*You order, a pro handles it*, *Jobs come to you*), and the sub-line gives the proof: certified, insured, live position, paid within 30 min (voice P1, P2). The privacy and noise fears are stated as facts, not reassurance. *Skip* is a secondary, not a tertiary or text button. A borderless action on the bottom edge reads as a caption. *Get started* is the one green control.

Sources: DESIGN.md § The onboarding carousel · inventory.md § 1 Onboarding carousel · microcopy.md § D6, A4, onboarding-client · voice.md P1, P2 · ui/kit.html § Onboarding slider

## Rule

```html
<div class="dr dr-screen">
  <div class="dr-statusbar"><span>9:41</span><span class="dr-statusbar__sys"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 18v-3.2M9.7 18v-6.4M14.3 18v-9.6M19 18V6"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11.5a11 11 0 0 1 15 0"/><path d="M7.5 14.7a7 7 0 0 1 9 0"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="8" width="16" height="8" rx="2.4"/><path d="M21.5 10.8v2.4"/><rect x="4.5" y="10" width="9" height="4" rx="1" fill="currentColor" stroke="none"/></svg></span></div>
  <header class="dr-topbar"><span class="dr-brand" role="img" aria-label="DRON"></span><span class="dr-topbar__spacer"></span></header>
  <main class="dr-main">
    <div class="dr-slider dr-slider--bleed" aria-label="How DRON works">
      <section class="dr-slide" aria-label="Slide 1 of 3">
        <p class="dr-display">A verified operator</p>
        <p class="dr-lead">DRON assigns the nearest certified, insured operator. You don't choose or guess.</p>
        <span class="dr-slide__art"><img src="../assets/scenes/thumbs/onboarding-verified-operator.png" alt="" loading="lazy" decoding="async"></span>
      </section>
      <section class="dr-slide" aria-label="Slide 2 of 3">
        <p class="dr-display">Track it live</p>
        <p class="dr-lead">See the operator's name, photo and live position the moment you pay.</p>
        <span class="dr-slide__art"><img src="../assets/scenes/thumbs/onboarding-live-tracking.png" alt="" loading="lazy" decoding="async"></span>
      </section>
      <section class="dr-slide" aria-label="Slide 3 of 3">
        <p class="dr-display">A photo or report, every time</p>
        <p class="dr-lead">Get a photo or a report the moment it's done.</p>
        <span class="dr-slide__art"><img src="../assets/scenes/thumbs/onboarding-report.png" alt="" loading="lazy" decoding="async"></span>
      </section>
    </div>
    <div class="dr-pager" aria-hidden="true"><span class="on"></span><span></span><span></span></div>
  </main>
  <footer class="dr-actionbar">
    <a class="dr-btn dr-btn--secondary dr-btn--block" href="#">Skip</a>
    <a class="dr-btn dr-btn--primary dr-btn--block" href="#">Get started</a>
  </footer>
</div>
```

`onboarding-client`: three slides on what happens after the client pays, each a heading and one sentence of proof, with a picture that is never cropped.

## Anti-rule

```html
<footer class="dr dr-actionbar" style="width:375px;max-width:100%"><a class="dr-btn dr-btn--tertiary" href="#">Skip</a><a class="dr-btn dr-btn--primary dr-btn--block" href="#">Get started</a></footer>
```

*Skip* drawn as a borderless tertiary on the bottom edge. In the action bar every button is filled. Make it a [secondary](button.html#variant-secondary). Do not use `--bleed` or the slider anywhere outside these three screens. To show progress through steps that ask for input, use the [pager](pager.html) or the [progress rail](progress-rail.html).
