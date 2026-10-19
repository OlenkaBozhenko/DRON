---
name: Entry window
slug: entry-window
group: Wide screens
order: 9
classes: .dr-entry · --flush · __acts · __acts--one · __label · .dr-slidenav · --prev · --next
file: entry.css
inventory: Onboarding carousel, Pager (desktop) — welcome, sign in, role select, switch role
kit: 3836
---

## Anatomy

```html
<div class="dr dr-screen dr-desk" style="width:1440px;height:900px;max-width:none">
<div class="dr-mapground" role="img" aria-label="Live map of Kyiv, 128 drones in the air"><span class="dr-mapground__drone" style="left:31%;top:34%"></span><span class="dr-mapground__drone" style="left:44%;top:58%"></span><span class="dr-mapground__drone" style="left:63%;top:30%"></span><span class="dr-mapground__drone" style="left:70%;top:66%"></span><span class="dr-mapground__drone" style="left:60%;top:82%"></span><span class="dr-mapground__drone" style="left:38%;top:76%"></span><span class="dr-mapground__drone" style="left:78%;top:44%"></span><span class="dr-mapground__drone" style="left:24%;top:60%"></span><span class="dr-mapground__drone" style="left:58%;top:48%"></span></div>
<div class="dr-veil" aria-hidden="true"></div>
<header class="dr-whead">
    <a class="dr-brandlink" href="../../research.html" aria-label="DRON project"><span class="dr-brand" aria-hidden="true"></span></a>
    <div class="dr-whead__end">
      <button class="dr-iconbtn dr-material" type="button" data-theme-cycle aria-label="Switch the theme"><svg class="dr-ic dr-iconbtn__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/></svg><svg class="dr-ic dr-iconbtn__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg></button>
    </div>
  </header>
<div class="dr-dim" aria-hidden="true"></div>
<main class="dr-window dr-material dr-entry" aria-label="How DRON works">
    <div class="dr-scroll">
      <div class="dr-slider" role="region" tabindex="0" aria-label="How DRON works">
        <section class="dr-slide" id="oc1--s38" aria-label="Slide 1 of 3">
          <h1 class="dr-display">A verified operator</h1>
          <p class="dr-lead">DRON assigns the nearest certified, insured operator. You don't choose or guess.</p>
          <span class="dr-slide__art"><img src="../../assets/scenes/thumbs/onboarding-verified-operator.png" alt="" decoding="async"></span>
        </section>
        <section class="dr-slide" id="oc2--s38" aria-label="Slide 2 of 3">
          <p class="dr-display">Track it live</p>
          <p class="dr-lead">See the operator's name, photo and live position the moment you pay.</p>
          <span class="dr-slide__art"><img src="../../assets/scenes/thumbs/onboarding-live-tracking.png" alt="" loading="lazy" decoding="async"></span>
        </section>
        <section class="dr-slide" id="oc3--s38" aria-label="Slide 3 of 3">
          <p class="dr-display">A photo or report, every time</p>
          <p class="dr-lead">Get a photo or a report the moment it's done.</p>
          <span class="dr-slide__art"><img src="../../assets/scenes/thumbs/onboarding-report.png" alt="" loading="lazy" decoding="async"></span>
        </section>
      </div>
      <div class="dr-pager" aria-hidden="true"><span class="on"></span><span></span><span></span></div>
      <button class="dr-iconbtn dr-material dr-slidenav dr-slidenav--prev" type="button" data-slide="-1" aria-label="Previous slide" aria-disabled="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg></button>
      <button class="dr-iconbtn dr-material dr-slidenav dr-slidenav--next" type="button" data-slide="1" aria-label="Next slide"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg></button>
    </div>
    <div class="dr-foot"><div class="dr-entry__acts">
      <a class="dr-btn dr-btn--primary dr-btn--block" href="../../wireframes/desktop/listings.html">Get started</a>
      <a class="dr-btn dr-btn--secondary dr-btn--block" href="../../wireframes/desktop/listings.html">Skip</a>
    </div></div>
  </main>
</div>
```

- `.dr-entry` — A signed-out window: no head, the phone's centred reading; no rails and no Talk to AI round it.
- `.dr-slider` — One slide at a time inside the window, the picture 260 tall so the window does not grow with the art.
- `.dr-slidenav--prev` — A mouse has no swipe, so the slider gets *Previous* and *Next* beside the picture, 24 in: round 48 icon buttons, named (`WCAG 4.1.2`). On the first slide *Previous* is `aria-disabled` and drawn `--text-disabled`.
- `.dr-pager` — The pager stands 32 above the actions (its 20 and the 12 gap).
- `.dr-entry__acts` — The actions at the foot, stacked, the primary on top, 10 apart.

## Variants

### Phone

```html
<p class="dr-note">Not on the phone.</p>
```

The phone never draws it: every rule here matches only inside `.dr-desk`, the frame of a desktop twin.

### Sign in

```html
<div class="dr dr-screen dr-desk" style="width:640px;height:900px;max-width:none">
<div class="dr-mapground" role="img" aria-label="Live map of Kyiv, 128 drones in the air"><span class="dr-mapground__drone" style="left:31%;top:34%"></span><span class="dr-mapground__drone" style="left:44%;top:58%"></span><span class="dr-mapground__drone" style="left:63%;top:30%"></span><span class="dr-mapground__drone" style="left:70%;top:66%"></span><span class="dr-mapground__drone" style="left:60%;top:82%"></span><span class="dr-mapground__drone" style="left:38%;top:76%"></span><span class="dr-mapground__drone" style="left:78%;top:44%"></span><span class="dr-mapground__drone" style="left:24%;top:60%"></span><span class="dr-mapground__drone" style="left:58%;top:48%"></span></div>
<div class="dr-veil" aria-hidden="true"></div>
<div class="dr-dim" aria-hidden="true"></div>
<main class="dr-window dr-material dr-entry dr-entry--flush" aria-label="Sign in">
    <div class="dr-scroll">
      <section class="dr-stack" aria-label="Sign in">
        <h1 class="dr-display">Sign in to DRON</h1>
        <p class="dr-lead">One verification lets you order drone services — or take jobs as a certified operator.</p>
        <p class="dr-note dr-note--flush">Diia and BankID confirm who you are. DRON never sees your password.</p>
      </section>
    </div>
    <div class="dr-foot"><div class="dr-entry__acts">
      <a class="dr-btn dr-btn--primary dr-btn--block" href="../../wireframes/desktop/role-select.html"><img class="dr-idmark" src="../../assets/brand/diia.png" alt="" width="20" height="20" decoding="async">Continue with Diia</a>
      <a class="dr-btn dr-btn--secondary dr-btn--block" href="../../wireframes/desktop/role-select.html"><img class="dr-idmark" src="../../assets/brand/bankid.png" alt="" width="20" height="20" decoding="async">Continue with BankID</a>
      <p class="dr-note">By continuing you agree to the Terms &amp; Privacy Policy.</p>
    </div></div>
  </main>
</div>
```

`signin`: `.dr-entry--flush` sets the copy flush left, like the phone's stack.

### Role select

```html
<div class="dr dr-screen dr-desk" style="width:640px;height:900px;max-width:none">
<div class="dr-mapground" role="img" aria-label="Live map of Kyiv, 128 drones in the air"><span class="dr-mapground__drone" style="left:31%;top:34%"></span><span class="dr-mapground__drone" style="left:44%;top:58%"></span><span class="dr-mapground__drone" style="left:63%;top:30%"></span><span class="dr-mapground__drone" style="left:70%;top:66%"></span><span class="dr-mapground__drone" style="left:60%;top:82%"></span><span class="dr-mapground__drone" style="left:38%;top:76%"></span><span class="dr-mapground__drone" style="left:78%;top:44%"></span><span class="dr-mapground__drone" style="left:24%;top:60%"></span><span class="dr-mapground__drone" style="left:58%;top:48%"></span></div>
<div class="dr-veil" aria-hidden="true"></div>
<div class="dr-dim" aria-hidden="true"></div>
<main class="dr-window dr-material dr-entry" aria-label="Role choice">
    <section class="dr-stack" aria-label="Role choice">
      <h1 class="dr-display">How will you use DRON?</h1>
      <p class="dr-lead">Pick a side to continue.<br>You can switch anytime between accounts.</p>
    </section>
    <section aria-label="Choose your role">
      <div class="dr-list dr-list--snug">
        <a class="dr-choice" href="../../wireframes/desktop/onboarding-client.html">
          <span class="dr-well"><img src="../../assets/objects/thumbs/cargo-box.png" alt="" decoding="async"></span>
          <span class="dr-choice__body"><span class="dr-choice__title">I need a service done</span></span>
          <span class="dr-choice__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span>
        </a>
        <a class="dr-choice" href="../../wireframes/desktop/onboarding-operator.html">
          <span class="dr-well"><img src="../../assets/drones/thumbs/tight/drone-flight-camera.png" alt="" decoding="async"></span>
          <span class="dr-choice__body"><span class="dr-choice__title">I provide services</span></span>
          <span class="dr-choice__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span>
        </a>
      </div>
    </section>
  </main>
</div>
```

`role-select`: a window with no slider — the title and its lead 8 apart, each group 32 from the next, the choices 12 apart and left-aligned beside their pictures.

### Tablet

```html
<p class="dr-note">Coming soon.</p>
```

The tablet layout is being redesigned from scratch (the designer, 2026-10-18). Until then this page shows the phone and the desktop only.

## States

```html
<div class="dr dr-desk" style="display:flex;gap:12px;padding:12px"><button class="dr-iconbtn dr-material" type="button" data-slide="-1" aria-label="Previous slide" aria-disabled="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg></button><button class="dr-iconbtn dr-material" type="button" data-slide="1" aria-label="Next slide"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg></button></div>
```

Previous and Next from `onboarding-client`, off their places beside the picture. Hover firms the edge, pressed scales to .99, focus is the 2.5 ring. Disabled is real here: *Previous* on the first slide takes the icon button's own `--text-disabled` rule (2.01:1 light, exempt under `WCAG 1.4.3` as an inactive control), so the first cell already shows it.

## When to use

Before sign-in: the onboarding, welcome, sign in, role select, switch role (`.dr-entry__label` keeps the phone's nav-bar title as words beside its back).

Sources: wireframes/desktop/ (the twins); design-system/components/entry.css

## Rule

One centred window on the map, no rails; the actions at the foot.

## Anti-rule

Do not leave a slider swipe-only on the desktop: give it Previous and Next.
