---
name: Nav-bar avatar
slug: nav-bar-avatar
group: Shell
order: 60
classes: .dr-avatar-sm · .dr-op__name
file: avatar.css · card.css
inventory: Nav-bar avatar
kit: 475
---

## Anatomy

```html
<header class="topbar dr-topbar" style="width:375px;max-width:100%">
  <span class="dr-avatar-sm"><img src="../assets/people/thumbs/person-operator-ivan.png" alt="" loading="lazy" decoding="async"></span>
  <span class="dr-op__name">Ivan K.</span>
  <span class="dr-topbar__spacer"></span>
</header>
```

- `.dr-avatar-sm` — The disc: 28px, `--bg-well` ground, radius 999, `overflow: hidden`.
- `.dr-avatar-sm img` — The operator's photograph, `object-fit: cover`, `alt=""` because the name beside it says who it is.
- `.dr-op__name` — The operator's name, 8 after the disc (the bar's gap), at the heading step, 15/600, in `--text-primary`.

## Variants

### Operator's bar

```html
<header class="topbar dr-topbar" style="width:375px;max-width:100%">
  <span class="dr-avatar-sm"><img src="../assets/people/thumbs/person-operator-ivan.png" alt="" loading="lazy" decoding="async"></span>
  <span class="dr-op__name">Ivan K.</span>
  <span class="dr-topbar__spacer"></span>
  <span class="dr-chip dr-chip--sm dr-avail-badge" data-state="available"><span class="dr-avail-badge__dot" aria-hidden="true"></span><span>Available</span></span>
  <a class="dr-bell" href="#" aria-label="Notifications, 3 unread">
    <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.4a5.9 5.9 0 0 0-5.9 5.9c0 4.1-1.5 5.3-1.5 5.3h14.8s-1.5-1.2-1.5-5.3A5.9 5.9 0 0 0 12 3.4Z"/><path d="M10.1 18a2.1 2.1 0 0 0 3.8 0"/></svg><span class="dr-count-badge" aria-hidden="true">3</span>
  </a>
</header>
```

The whole bar of `operator-listings`: face, name, the [availability badge](availability.html) and the [notification bell](notification-bell.html), in one 56px row, 8 apart. The one size the component has. The screens split on the bell: `operator-listings` draws it, `operator-listings-empty` draws the same bar with the badge at *Offline* and no bell.

## When to use

The nav-bar avatar puts the operator's own face at the leading edge of his home bar, where the client's bar carries the DRON mark. It stands on `operator-listings` and `operator-listings-empty` only.

28 is derived, not picked: the nav bar is 56, so the disc is exactly half the bar and centres with 14 above and below (measured 13.6 / 14.4, the 0.8 being the bar's hairline). None of the other avatar rungs fits a bar: 117 is the operator panel's width, 120 is a subject, 176 is a call screen's middle, and 20 is a badge on an avatar. The disc's `--bg-well` ground closed the last place a painted page read a colour from the grayscale sheet.

The name is the operator's own short form: first name and initial, *Ivan K.*

Sources: DESIGN.md § The nav-bar avatar · ui/kit.html § Nav bar · operator home · inventory.md § 1 (Nav-bar avatar)

## Rule

```html
<header class="topbar dr-topbar" style="width:375px;max-width:100%">
  <span class="dr-avatar-sm"><img src="../assets/people/thumbs/person-operator-ivan.png" alt="" loading="lazy" decoding="async"></span>
  <span class="dr-op__name">Ivan K.</span>
  <span class="dr-topbar__spacer"></span>
</header>
```

On the operator's home: who is signed in, at the leading edge, half the bar's height.

## Anti-rule

```html
<header class="topbar dr-topbar" style="width:375px;max-width:100%">
  <span class="dr-avatar-md"><img src="../assets/people/thumbs/person-operator-ivan.png" alt="" loading="lazy" decoding="async"></span>
  <span class="dr-op__name">Ivan K.</span>
  <span class="dr-topbar__spacer"></span>
</header>
```

A larger avatar rung forced into the 56px bar. The 56 disc fills the bar edge to edge and leaves the face no air. Keep `.dr-avatar-sm` in the bar; a face that is the subject of the screen belongs in a [profile head](profile-head.html). A pushed screen leads with the [back chevron](screen-shell.html#variant-back-button), never with a face.
