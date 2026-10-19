---
name: Tally card and live order
slug: tally-card
group: Wide screens
order: 25
classes: .dr-tally · --link · --chat · __title · __sub · __row · __key · __who · __chat · __stretch · .dr-live
file: tally.css
inventory: (new, wide screens)
kit: 4056
---

## Anatomy

```html
<div class="dr dr-desk" style="width:300px;max-width:100%"><a class="dr-tally dr-material dr-tally--link" href="../../wireframes/desktop/tracking.html"><span class="dr-live">Live</span><h2 class="dr-tally__title">Package delivery</h2><p class="dr-tally__sub">Podil → Osokorky · arrives 10:09</p>
        <span class="dr-rail dr-rail--at2">
                  <span class="dr-rail__step"><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></span>
                  <span class="dr-rail__step" aria-current="step"><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">En route</span></span>
                  <span class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">On&#8209;site</span></span>
                  <span class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">Done</span></span>
                </span>
        <div class="dr-tally__who"><img src="../../assets/people/thumbs/operator.png" alt=""><span>Andriy M.<small>Verified by DRON · 4.9 ★</small></span></div></a></div>
```

- `.dr-live` — *Live*: a green dot and the word, `--text-accent-wide`.
- `.dr-tally__title` — What the card is: the order, or what is being counted.
- `.dr-rail` — The order's progress, the phone's own rail.
- `.dr-tally__who` — The operator: the face, the name, the credential and the rating.

## Variants

### Phone

```html
<p class="dr-note">Not on the phone.</p>
```

The phone never draws it: every rule here matches only inside `.dr-desk`, the frame of a desktop twin.

### Labelled figures

```html
<div class="dr dr-desk" style="width:300px;max-width:100%"><div class="dr-tally dr-material"><h2 class="dr-tally__title">Free now near you</h2><div class="dr-tally__row"><span class="dr-tally__key">Package delivery</span><span>46 drones</span></div><div class="dr-tally__row"><span class="dr-tally__key">Photo &amp; video</span><span>18 drones</span></div><div class="dr-tally__row"><span class="dr-tally__key">Inspection</span><span>9 drones</span></div></div></div>
```

*Free now near you*, *Your month*: key and value rows on the material, a hairline between.

### A job on now, with its chat

```html
<div class="dr dr-desk dr-desk--jobs" style="width:300px;max-width:100%"><div class="dr-tally dr-material dr-tally--link dr-tally--chat"><span class="dr-live">Live</span><a class="dr-iconbtn dr-material dr-tally__chat" href="../../wireframes/desktop/chat-client.html" aria-label="Chat with the client, 2 unread"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-3.5 3.5V16A2.5 2.5 0 0 1 4 13.5v-7A2.5 2.5 0 0 1 6.5 4z"/></svg><span class="dr-count-badge" aria-hidden="true">2</span></a><h2 class="dr-tally__title"><a class="dr-tally__stretch" href="../../wireframes/desktop/job-checklist.html">On now</a></h2><p class="dr-tally__sub">Photo &amp; video · Trukhaniv Island · checklist 3 / 5</p></div></div>
```

On every operator page (`call-client`): the card is one target — its title's link (`.dr-tally__stretch`) stretches over it — and the chat (`.dr-tally__chat`) is a second, separate control above that layer, the unread count in its name (`WCAG 4.1.2`). A link is never nested in a link.

### Tablet

```html
<p class="dr-note">Coming soon.</p>
```

The tablet layout is being redesigned from scratch (the designer, 2026-10-18). Until then this page shows the phone and the desktop only.

## States

```html
<div class="dr dr-desk" style="width:300px;max-width:100%"><a class="dr-tally dr-material dr-tally--link" href="../../wireframes/desktop/tracking.html"><span class="dr-live">Live</span><h2 class="dr-tally__title">Package delivery</h2><p class="dr-tally__sub">Podil → Osokorky · arrives 10:09</p>
        <span class="dr-rail dr-rail--at2">
                  <span class="dr-rail__step"><span class="dr-node dr-node--done" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-rail__lbl">Accepted</span></span>
                  <span class="dr-rail__step" aria-current="step"><span class="dr-node dr-node--now" aria-hidden="true"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.4"/></svg></span><span class="dr-rail__lbl dr-rail__lbl--now">En route</span></span>
                  <span class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">On&#8209;site</span></span>
                  <span class="dr-rail__step"><span class="dr-node" aria-hidden="true"></span><span class="dr-rail__lbl">Done</span></span>
                </span>
        <div class="dr-tally__who"><img src="../../assets/people/thumbs/operator.png" alt=""><span>Andriy M.<small>Verified by DRON · 4.9 ★</small></span></div></a></div>
```

The live order is a link to its tracking (`.dr-tally--link`): hover firms the edge to `--text-muted`, focus is the 2.5 ring. It is never unavailable, so the Disabled cell shows it at rest.

## When to use

In the right rail: the live order, and a few figures about the client's own use. Proximity, **measured and recorded**: the live card's three groups (what and where · the progress · who) stand 20 apart, 4 short of the 24 between groups; inside a group 4.

Sources: wireframes/desktop/order-history.html, call-client.html; design-system/components/tally.css

## Rule

Three or four rows; more is a screen, not a card. The live order opens its tracking.

## Anti-rule

Do not nest a link inside the card's link: a second action (the chat) stands above the stretched link as its own control.
