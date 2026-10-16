---
name: Screen layout
slug: screen-layout
group: Shell
order: 40
classes: .dr-main · --zones · --center · .dr-center · --tight · .dr-note--balance · .dr-stack--zones
file: frame.css · type.css · media.css
inventory: (layout helpers: .dr-main--zones, .dr-center, .dr-note--balance, .dr-stack--zones)
kit: 1762
---

## Anatomy

```html
<main class="dr-main dr-main--zones" style="height:auto;overflow:visible;width:375px;max-width:100%">
  <p class="zlabel dr-label">Role choice <span class="dr-label__act">▸ pick a side (switchable later)</span></p>
  <section class="dr-stack" aria-label="Role choice">
    <p class="dr-display">How will you use DRON?</p>
    <p class="dr-lead">Pick a side to continue.<br>You can switch anytime between accounts.</p>
  </section>
  <section aria-label="Choose your role">
    <div class="dr-list dr-list--snug">
      <a class="dr-choice" href="../../wireframes/onboarding-client.html">
        <span class="dr-well"><img src="../assets/objects/thumbs/cargo-box.png" alt="" loading="lazy" decoding="async"></span>
        <span class="dr-choice__body">
          <span class="dr-choice__title">I need a service done</span>
        </span>
        <span class="dr-choice__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span>
      </a>
      <a class="dr-choice" href="../../wireframes/onboarding-operator.html">
        <span class="dr-well"><img src="../assets/drones/thumbs/tight/drone-flight-camera.png" alt="" loading="lazy" decoding="async"></span>
        <span class="dr-choice__body">
          <span class="dr-choice__title">I provide services</span>
        </span>
        <span class="dr-choice__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span>
      </a>
    </div>
  </section>
</main>
```

- `.dr-main--zones` — The column between the bars: padding 16, scrolls on its own. `--zones` widens its gap from 12 to 24. Here `role-select`.
- `.dr-stack` — A block in the column: here the copy that asks the question, its display and lead 8 apart.
- `.dr-list--snug` — The answer: two choice cards 8 apart, so the 24 above them is a 3:1 boundary.

## Variants

### Generic column

```html
<main class="dr-main" style="height:auto;overflow:visible;width:375px;max-width:100%">
  <p class="zlabel dr-label">Sign up <span class="dr-label__act">▸ verify your identity to operate</span></p>
  <section class="dr-stack" aria-label="Sign up">
    <p class="dr-display">Confirm your identity</p>
    <p class="dr-lead">DRON verifies every operator. Confirm who you are with Diia or BankID — then add your licence and insurance.</p>
    <p class="dr-note dr-note--flush">Diia and BankID confirm who you are. DRON never sees your password.</p>
  </section>
</main>
```

`.dr-main` at gap 12, here `operator-signup`. 121 of the 130 pages with a main column use it bare. Above a list whose cards sit 8 apart, 12 is 1.5:1: too quiet to read as a break between two questions.

### Centred main

```html
<div class="dr dr-screen" style="height:560px">
  <header class="topbar dr-topbar"><a class="dr-back" href="../../wireframes/account.html" aria-label="Back to Account"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></a><h1 class="dr-topbar__title">Switch role</h1><span class="dr-topbar__spacer"></span></header>
  <main class="dr-main dr-main--center">
    <section aria-label="Switch role" class="dr-center">
      <span class="success-mark" aria-hidden="true"><img src="../assets/people/thumbs/person-client-olena.png" alt="" loading="lazy" decoding="async"></span>
      <h1 class="dr-display">Switch to Operator?</h1>
      <p class="dr-lead">You're in Client mode. Switching shows the Operator app — jobs, earnings and ratings. Your Diia identity stays the same.</p>
    </section>
  </main>
  <footer class="dr-actionbar">
    <a class="dr-btn dr-btn--primary dr-btn--block" href="../../wireframes/role-select.html">Switch to Operator</a>
    <a class="dr-btn dr-btn--secondary dr-btn--block" href="../../wireframes/account.html">Cancel</a>
  </footer>
</div>
```

`switch-role`, the only page that builds it: `.dr-main--center > .dr-center` takes `margin-block: auto`, not `justify-content: center`, so a column taller than the space starts at the top instead of overflowing above the scroll origin. At 200% the column is 490.20px in 545.60px of main (`WCAG 1.4.4`). `.dr-center` stacks its children 12 apart and centres them; 22 pages use it, most as the confirm block of a loading or success state.

### Tight centre

```html
<section aria-label="Rating" class="dr-center dr-center--tight" style="width:341px;max-width:100%">
  <p class="dr-display dr-display--balance">How would you rate this order?</p>
  <div class="dr-rating" role="radiogroup" aria-label="Rating">
    <button class="dr-star" role="radio" aria-checked="false" aria-label="1 star" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
    <button class="dr-star" role="radio" aria-checked="false" aria-label="2 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
    <button class="dr-star" role="radio" aria-checked="false" aria-label="3 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
    <button class="dr-star" role="radio" aria-checked="true" aria-label="4 stars" data-on><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
    <button class="dr-star" role="radio" aria-checked="false" aria-label="5 stars"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z"/></svg></button>
  </div>
</section>
```

`rate`, `rate-aerial` and `rate-inspection`: a heading welded to the control it names sits at 8 instead of the column's 12, while `--zones` puts 24 around the pair.

### Balanced note

```html
<div style="display:flex;flex-direction:column;gap:16px;width:260px">
  <p class="dr-note" style="margin:0">JPG or PNG, up to 5 MB. Nothing changes until you save.</p>
  <p class="dr-note dr-note--balance" id="sl-photo-rules" style="margin:0">JPG or PNG, up to 5 MB. Nothing changes until you save.</p>
</div>
```

One declaration, `text-wrap: balance`: the lower note evens its lines instead of leaving words orphaned. `account-photo` and `operator-account-photo` only, where the note is the `photo-rules` line every action button points at with `aria-describedby`.

### Form in zones

```html
<form class="dr-stack dr-stack--zones" action="#" aria-label="Edit account" style="width:341px;max-width:100%">
  <p class="zlabel dr-label">Personal <span class="dr-label__act">▸ editable name · phone · address</span></p>
  <div class="dr-zone" role="group" aria-labelledby="sl-acc-personal-title" aria-describedby="sl-acc-personal-sub">
    <p class="dr-zone__title" id="sl-acc-personal-title">Personal details</p>
    <p class="dr-zone__sub" id="sl-acc-personal-sub">What the operator needs to reach you</p>
    <div class="dr-rows dr-rows--card">
      <div class="dr-field">
        <label class="dr-field__label" for="sl-name">Full name</label>
        <span class="dr-field__group"><input class="dr-field__input" id="sl-name" name="name" value="Olena B."></span>
      </div>
      <div class="dr-field">
        <label class="dr-field__label" for="sl-phone">Phone</label>
        <span class="dr-field__group"><input class="dr-field__input" id="sl-phone" name="phone" type="tel" value="+380 67 000 4417"></span>
      </div>
      <div class="dr-field">
        <label class="dr-field__label" for="sl-addr">Saved address</label>
        <span class="dr-field__group"><input class="dr-field__input" id="sl-addr" name="addr" value="Podil, 21"></span>
      </div>
    </div>
  </div>
  <p class="zlabel dr-label">Payment <span class="dr-label__act">▸ the saved method</span></p>
  <div class="dr-zone" role="group" aria-labelledby="sl-acc-pay-title" aria-describedby="sl-acc-pay-sub">
    <p class="dr-zone__title" id="sl-acc-pay-title">Payment method</p>
    <p class="dr-zone__sub" id="sl-acc-pay-sub">How you pay</p>
    <div class="dr-rows">
      <button class="dr-field dr-field--action" type="button" aria-haspopup="dialog" aria-expanded="false">
        <span class="dr-field__label">Payment method</span>
        <span class="dr-field__value">Visa •••• 4921</span>
        <span class="dr-field__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span>
      </button>
    </div>
  </div>
</form>
```

`account-edit` and `operator-profile-setup`: each group is a titled zone under its zone label, typed rows in one, a row that opens a drawer in the next. `.dr-stack`'s own gap is 8, so 12 is already 1.5:1, and the panel edges do the rest. `account-edit` goes on to Language, Appearance, Notifications and the two upload cards in the same column.

## States

No state of its own: these are layout helpers that place blocks in the column, and nothing in them takes focus. The controls they hold carry their own states, for example the [choice card](choice-card.html#s-states).

## When to use

These classes are the column's spacing, not components with a surface. None mints a value: 24, 12 and 8 are `--len-24`, `--len-12` and `--len-8`. The argument is the ratio — a gap between two different questions has to be clearly larger than the gaps inside either one. `--zones` is spent on five pages: `rate`, `rate-aerial`, `rate-inspection`, `support` and `role-select`. `.dr-stack--zones` is on `account-edit` and `operator-profile-setup`; `.dr-main--center` on `switch-role` alone. A sixth modifier, `.dr-main--fab` on `account`, `operator-account` and `wallet`, pads the column's foot for the [floating action](floating-action.html). The fifth rung, `.dr-rail--zone` (margin-block 12 around the progress rail), is documented with the [progress rail](progress-rail.html).

There is no `WCAG` criterion for spacing; this is the proximity rule, and the check is a ratio either way. No heading is added between zones: the boundary is spatial, and every row already names itself.

Sources: ui/kit.html § Zone boundaries, Centred main, Balanced note, Form in zones · DESIGN.md § Layout · inventory.md § 1

## Rule

```html
<main class="dr-main dr-main--zones" style="height:auto;overflow:visible;width:375px;max-width:100%">
  <p class="zlabel dr-label">Role choice <span class="dr-label__act">▸ pick a side (switchable later)</span></p>
  <section class="dr-stack" aria-label="Role choice">
    <p class="dr-display">How will you use DRON?</p>
    <p class="dr-lead">Pick a side to continue.<br>You can switch anytime between accounts.</p>
  </section>
  <section aria-label="Choose your role">
    <div class="dr-list dr-list--snug">
      <a class="dr-choice" href="../../wireframes/onboarding-client.html">
        <span class="dr-well"><img src="../assets/objects/thumbs/cargo-box.png" alt="" loading="lazy" decoding="async"></span>
        <span class="dr-choice__body">
          <span class="dr-choice__title">I need a service done</span>
        </span>
        <span class="dr-choice__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span>
      </a>
      <a class="dr-choice" href="../../wireframes/onboarding-operator.html">
        <span class="dr-well"><img src="../assets/drones/thumbs/tight/drone-flight-camera.png" alt="" loading="lazy" decoding="async"></span>
        <span class="dr-choice__body">
          <span class="dr-choice__title">I provide services</span>
        </span>
        <span class="dr-choice__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span>
      </a>
    </div>
  </section>
</main>
```

`role-select`: the copy that asks and the fork that answers are two zones: 24 between them against 8 inside the list, 3:1.

## Anti-rule

```html
<main class="dr-main dr-main--zones" style="height:auto;overflow:visible;width:341px;max-width:100%">
  <a class="dr-choice" href="../../wireframes/onboarding-client.html"><span class="dr-choice__body"><span class="dr-choice__title">I need a service done</span></span></a>
  <a class="dr-choice" href="../../wireframes/onboarding-operator.html"><span class="dr-choice__body"><span class="dr-choice__title">I provide services</span></span></a>
</main>
```

`--zones` used to space the cards of one list. Two answers to one question now sit as far apart as two questions. Put them in a [list](list.html), whose gap is the space between cards. On a form whose groups are panels, use `.dr-stack--zones` at 12, not `--zones` at 24.
