---
name: Call surface
slug: call-surface
group: Actions
order: 70
classes: .dr-call · __top · __who · __name · __time · __side · __side--empty · __stage · __avatar · __bar
file: call.css
inventory: Call surface
kit: 1093
---

## Anatomy

```html
<div class="dr dr-call" style="width:341px;max-width:100%;border-radius:var(--len-22);overflow:hidden">
  <div class="dr-statusbar"><span>9:41</span></div>
  <main class="dr-main" style="padding-block:var(--len-12)">
    <div class="dr-call__top">
      <a class="dr-btn dr-btn--icon dr-btn--night" href="../../wireframes/tracking.html" aria-label="Minimise the call"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 3.5l6 6"/><path d="M4.5 9.5h5v-5"/><path d="M20.5 20.5l-6-6"/><path d="M19.5 14.5h-5v5"/></svg></a>
      <span class="dr-call__who">
        <span class="dr-call__name">Andriy M.</span>
        <span class="dr-call__time"><span class="dr-sr">Call duration </span><time datetime="PT2M14S">02:14</time></span>
      </span>
      <span class="dr-call__side">
        <a class="dr-btn dr-btn--icon dr-btn--night" href="../../wireframes/contact-support.html" aria-label="Add support to the call"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10" cy="8" r="3.4"/><path d="M3.5 20c0-3.4 2.9-5.8 6.5-5.8 1.1 0 2.1.2 3 .6"/><path d="M18 14.6v5.8"/><path d="M15.1 17.5h5.8"/></svg></a>
        <a class="dr-btn dr-btn--icon dr-btn--night" href="../../wireframes/chat.html" aria-label="Chat with the operator"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 11.7c0 3.9-3.8 7.1-8.5 7.1-1 0-2-.15-2.9-.42L4.2 20.3l1.5-3.3a6.8 6.8 0 0 1-2.2-5.3c0-3.9 3.8-7.1 8.5-7.1s8.5 3.2 8.5 7.1z"/></svg></a>
      </span>
    </div>
    <div class="dr-call__stage">
      <span class="dr-call__avatar" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8.4" r="4"/><path d="M4.4 20.6c0-4.2 3.4-7 7.6-7s7.6 2.8 7.6 7"/></svg></span>
    </div>
  </main>
  <footer class="dr-actionbar">
    <div class="dr-call__bar">
      <button class="dr-btn dr-btn--icon dr-btn--night" type="button" aria-pressed="false" aria-label="Video"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6.6" width="12.4" height="10.8" rx="2.4"/><path d="M15.4 10.6l5.1-2.9v8.6l-5.1-2.9z"/></svg></button>
      <button class="dr-btn dr-btn--icon dr-btn--night" type="button" aria-pressed="false" aria-label="Speaker"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.4h3.3L12 5.4v13.2l-4.7-4H4z"/><path d="M16.1 9.6a3.6 3.6 0 0 1 0 4.8"/><path d="M18.7 7a7.2 7.2 0 0 1 0 10"/></svg></button>
      <button class="dr-btn dr-btn--icon dr-btn--night" type="button" aria-pressed="false" aria-label="Mute"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9.2" y="3.4" width="5.6" height="11" rx="2.8"/><path d="M5.5 11.4a6.5 6.5 0 0 0 13 0"/><path d="M12 17.9v2.7"/></svg></button>
      <a class="dr-btn dr-btn--icon dr-btn--danger-solid" href="../../wireframes/tracking.html" aria-label="End call"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.4 14.3a12 12 0 0 1 17.2 0"/><path d="M3.4 14.3l1.7 1.7a1.5 1.5 0 0 0 2.1 0l1.1-1.1a1.5 1.5 0 0 0 0-2.1l-.7-.7"/><path d="M20.6 14.3l-1.7 1.7a1.5 1.5 0 0 1-2.1 0l-1.1-1.1a1.5 1.5 0 0 1 0-2.1l.7-.7"/></svg></a>
    </div>
    <div class="dr-home"><span></span></div>
  </footer>
</div>
```

Copied from `call`.

- `.dr-call` — The ground: `--bg-night`, `#1A1A1A`, the same value as the primary ink under the name of the role it plays here.
- `.dr-call__top` — The top row on a 12 gap: minimise on the left, the person in the middle, the side column on the right.
- `.dr-call__name` — Who is on the line: the 22 display step, page-coloured ink at 15.99:1.
- `.dr-call__time` — The duration at 15, regular, in `--text-on-night-muted`, 11.54:1, with a screen-reader prefix *Call duration*.
- `.dr-call__side` — The side actions, 44 [call controls](circular-action.html#variant-call-control) stacked on a 12 gap.
- `.dr-call__avatar` — The portrait disc, 176, on `--bg-night-raised` `#2E2E2E`, 1.28:1 against the ground.
- `.dr-call__bar` — The control pill on `--bg-night-raised`: four 44 call controls on a 14 gap inside 8 of padding, one of them red.

## Variants

### With two side actions

```html
<div class="dr dr-call" style="width:341px;max-width:100%;padding:var(--len-12) var(--len-16);border-radius:var(--len-22)">
    <div class="dr-call__top">
      <a class="dr-btn dr-btn--icon dr-btn--night" href="../../wireframes/tracking.html" aria-label="Minimise the call"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 3.5l6 6"/><path d="M4.5 9.5h5v-5"/><path d="M20.5 20.5l-6-6"/><path d="M19.5 14.5h-5v5"/></svg></a>
      <span class="dr-call__who">
        <span class="dr-call__name">Andriy M.</span>
        <span class="dr-call__time"><span class="dr-sr">Call duration </span><time datetime="PT2M14S">02:14</time></span>
      </span>
      <span class="dr-call__side">
        <a class="dr-btn dr-btn--icon dr-btn--night" href="../../wireframes/contact-support.html" aria-label="Add support to the call"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10" cy="8" r="3.4"/><path d="M3.5 20c0-3.4 2.9-5.8 6.5-5.8 1.1 0 2.1.2 3 .6"/><path d="M18 14.6v5.8"/><path d="M15.1 17.5h5.8"/></svg></a>
        <a class="dr-btn dr-btn--icon dr-btn--night" href="../../wireframes/chat.html" aria-label="Chat with the operator"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 11.7c0 3.9-3.8 7.1-8.5 7.1-1 0-2-.15-2.9-.42L4.2 20.3l1.5-3.3a6.8 6.8 0 0 1-2.2-5.3c0-3.9 3.8-7.1 8.5-7.1s8.5 3.2 8.5 7.1z"/></svg></a>
      </span>
    </div>
</div>
```

On `call`, `call-aerial` and `call-inspection` (the client calls the operator) the side column holds two actions: *Add support to the call* and *Chat with the operator*.

### With one side action

```html
<div class="dr dr-call" style="width:341px;max-width:100%;padding:var(--len-12) var(--len-16);border-radius:var(--len-22)">
    <div class="dr-call__top">
      <a class="dr-btn dr-btn--icon dr-btn--night" href="../../wireframes/job-checklist.html" aria-label="Minimise the call"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 3.5l6 6"/><path d="M4.5 9.5h5v-5"/><path d="M20.5 20.5l-6-6"/><path d="M19.5 14.5h-5v5"/></svg></a>
      <span class="dr-call__who">
        <span class="dr-call__name">Olena H.</span>
        <span class="dr-call__time"><span class="dr-sr">Call duration </span><time datetime="PT4M2S">04:02</time></span>
      </span>
      <span class="dr-call__side">
        <a class="dr-btn dr-btn--icon dr-btn--night" href="../../wireframes/chat-client.html" aria-label="Chat with the client"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 11.7c0 3.9-3.8 7.1-8.5 7.1-1 0-2-.15-2.9-.42L4.2 20.3l1.5-3.3a6.8 6.8 0 0 1-2.2-5.3c0-3.9 3.8-7.1 8.5-7.1s8.5 3.2 8.5 7.1z"/></svg></a>
      </span>
    </div>
</div>
```

On `call-client` (the operator calls the client) the side column holds one action, *Chat with the client*.

### Side empty

```html
<div class="dr dr-call" style="width:341px;max-width:100%;padding:var(--len-12) var(--len-16);border-radius:var(--len-22)">
    <div class="dr-call__top">
      <a class="dr-btn dr-btn--icon dr-btn--night" href="../../wireframes/contact-support.html" aria-label="Minimise the call"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 3.5l6 6"/><path d="M4.5 9.5h5v-5"/><path d="M20.5 20.5l-6-6"/><path d="M19.5 14.5h-5v5"/></svg></a>
      <span class="dr-call__who">
        <span class="dr-call__name">DRON Support</span>
        <span class="dr-call__time"><span class="dr-sr">Call duration </span><time datetime="PT1M7S">01:07</time></span>
      </span>
      <span class="dr-call__side dr-call__side--empty" aria-hidden="true"></span>
    </div>
</div>
```

On `call-support` there is nobody left to add. `__side--empty` keeps a 44px hole, hidden from assistive technology, so the name stays on the same centred axis on every call screen.

## When to use

The call surface is the product's one dark surface and the only screen the platform, rather than the product, owns. It is not a second theme and not a dark mode: a call is a full-screen takeover that has to recede, the way CallKit, FaceTime, WhatsApp and Telegram all do whatever the app's theme is. `--bg-page` stays the ground on every other screen. It stands on five screens: `call`, `call-aerial` and `call-inspection` (the client calls the operator, from `tracking`), `call-client` (the operator calls the client, from `job-checklist`) and `call-support` (the support agent, from `contact-support`).

The surface carries its own ink pair. `--text-muted` is barred here at 2.42:1, a real `WCAG 1.4.3` failure; the dimmer ink is `--text-on-night-muted` at 11.54:1. There is no green at all, and the red fill goes only to *End call*, the one destructive control. The controls carry no visible words, so each name is in `aria-label` as verb and object: *End call*, not *Hang up* and not *Cancel*.

Sources: DESIGN.md § The night pair · § Destructive fill · § Call control · inventory.md § 1 (Call surface, End call, Call control) · microcopy.md § call, call-support, call-client

## Rule

```html
<div class="dr dr-call" style="width:341px;max-width:100%;padding:var(--len-12) var(--len-16);border-radius:var(--len-22)">
  <div class="dr-call__bar">
      <button class="dr-btn dr-btn--icon dr-btn--night" type="button" aria-pressed="false" aria-label="Video"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6.6" width="12.4" height="10.8" rx="2.4"/><path d="M15.4 10.6l5.1-2.9v8.6l-5.1-2.9z"/></svg></button>
      <button class="dr-btn dr-btn--icon dr-btn--night" type="button" aria-pressed="false" aria-label="Speaker"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.4h3.3L12 5.4v13.2l-4.7-4H4z"/><path d="M16.1 9.6a3.6 3.6 0 0 1 0 4.8"/><path d="M18.7 7a7.2 7.2 0 0 1 0 10"/></svg></button>
      <button class="dr-btn dr-btn--icon dr-btn--night" type="button" aria-pressed="false" aria-label="Mute"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9.2" y="3.4" width="5.6" height="11" rx="2.8"/><path d="M5.5 11.4a6.5 6.5 0 0 0 13 0"/><path d="M12 17.9v2.7"/></svg></button>
      <a class="dr-btn dr-btn--icon dr-btn--danger-solid" href="../../wireframes/tracking.html" aria-label="End call"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.4 14.3a12 12 0 0 1 17.2 0"/><path d="M3.4 14.3l1.7 1.7a1.5 1.5 0 0 0 2.1 0l1.1-1.1a1.5 1.5 0 0 0 0-2.1l-.7-.7"/><path d="M20.6 14.3l-1.7 1.7a1.5 1.5 0 0 1-2.1 0l-1.1-1.1a1.5 1.5 0 0 1 0-2.1l.7-.7"/></svg></a>
    </div>
</div>
```

The whole screen for the length of a voice call: night controls on the night ground, one red disc to end it, nothing green.

## Anti-rule

```html
<div class="dr dr-call" style="width:341px;max-width:100%;padding:var(--len-12) var(--len-16);border-radius:var(--len-22)">
  <span class="dr-call__name">Order #DR-4821</span>
  <span class="dr-call__time">Operator on the way</span>
  <span class="dr-btn dr-btn--primary dr-btn--block">Contact operator</span>
</div>
```

The night ground used as a dark card inside an ordinary screen, with a green button on it. The surface exists only for a call in progress. Order status belongs on an [order card](order-card.html) on the page ground, and reaching the operator goes through a [sheet](sheet.html) that offers the call.
