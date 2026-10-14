---
name: Notification bell
slug: notification-bell
group: Shell
order: 70
classes: .dr-bell · .dr-count-badge
file: shell.css · badge.css
inventory: Notification bell
kit: 475
---

## Anatomy

```html
<header class="topbar dr-topbar" style="width:375px;max-width:100%">
  <span class="dr-brand" role="img" aria-label="DRON"></span>
  <span class="dr-topbar__spacer"></span>
  <a class="dr-bell" href="#" aria-label="Notifications, 3 unread">
    <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.4a5.9 5.9 0 0 0-5.9 5.9c0 4.1-1.5 5.3-1.5 5.3h14.8s-1.5-1.2-1.5-5.3A5.9 5.9 0 0 0 12 3.4Z"/><path d="M10.1 18a2.1 2.1 0 0 0 3.8 0"/></svg><span class="dr-count-badge" aria-hidden="true">3</span>
  </a>
</header>
```

- `.dr-bell` — The control: a 44 × 44 link with a transparent ground, `margin-right: -10px` so the glyph lands 17.8px from the frame edge, mirroring the back chevron.
- `.dr-bell .dr-ic` — The bell glyph at the 22px rung, `--text-primary` on `--bg-page`, 15.99:1.
- `.dr-count-badge` — The unread count: an 18px pill, 11/600, `--on-action` on `--color-action`, 9.46:1, set 4 from the box's top and right. `aria-hidden`; the link's name speaks the number.

## Variants

### Client home

```html
<header class="topbar dr-topbar" style="width:375px;max-width:100%">
  <span class="dr-brand" role="img" aria-label="DRON"></span>
  <span class="dr-topbar__spacer"></span>
  <a class="dr-bell" href="#" aria-label="Notifications, 3 unread">
    <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.4a5.9 5.9 0 0 0-5.9 5.9c0 4.1-1.5 5.3-1.5 5.3h14.8s-1.5-1.2-1.5-5.3A5.9 5.9 0 0 0 12 3.4Z"/><path d="M10.1 18a2.1 2.1 0 0 0 3.8 0"/></svg><span class="dr-count-badge" aria-hidden="true">3</span>
  </a>
</header>
```

`listings`, and the same bar on `listings-error`, `listings-filters` and `listings-loading`: the brand at the leading edge, the bell at the trailing edge, nothing between. The bell links to `notifications`.

### Operator home

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

`operator-listings`: the bell stands after the availability badge, 8 apart, and links to `operator-notifications`. `HIG · Navigation bars` gives the trailing edge to controls, and the badge is not one.

## When to use

The bell is the whole entrance to the alert log (`notifications`, `operator-notifications`), and it stands on the two home screens and nowhere else: 5 pages, the four `listings` pages and `operator-listings`. The screens split on the operator side: `operator-listings` draws the bell, and its empty state `operator-listings-empty` draws the same bar without it. It is `.dr-back` mirrored and not one number in it is new: the same 44 × 44 box, 22px glyph, focus ring and 10px pull to the gutter. `HIG · 44pt` 100%, `WCAG 2.5.8` 1.83×.

The count is spoken, not only shown: `aria-label="Notifications, 3 unread"` carries the number and the pill is `aria-hidden`, so `WCAG 4.1.2` is met and `WCAG 1.4.1` is never engaged. The pill is a status mark, not a green control: 324px², 0.106% of the frame.

Sources: DESIGN.md § The notification bell · ui/kit.html § Nav bar · operator home · inventory.md § 1 (Notification bell)

## Rule

```html
<header class="topbar dr-topbar" style="width:375px;max-width:100%">
  <span class="dr-brand" role="img" aria-label="DRON"></span>
  <span class="dr-topbar__spacer"></span>
  <a class="dr-bell" href="#" aria-label="Notifications, 3 unread">
    <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.4a5.9 5.9 0 0 0-5.9 5.9c0 4.1-1.5 5.3-1.5 5.3h14.8s-1.5-1.2-1.5-5.3A5.9 5.9 0 0 0 12 3.4Z"/><path d="M10.1 18a2.1 2.1 0 0 0 3.8 0"/></svg><span class="dr-count-badge" aria-hidden="true">3</span>
  </a>
</header>
```

A bare glyph at the trailing edge of a home bar, named with its count.

## Anti-rule

```html
<header class="topbar dr-topbar" style="width:375px;max-width:100%">
  <span class="dr-brand" role="img" aria-label="DRON"></span>
  <span class="dr-topbar__spacer"></span>
  <button class="dr-btn dr-btn--icon" type="button" aria-label="Notifications"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.4a5.9 5.9 0 0 0-5.9 5.9c0 4.1-1.5 5.3-1.5 5.3h14.8s-1.5-1.2-1.5-5.3A5.9 5.9 0 0 0 12 3.4Z"/><path d="M10.1 18a2.1 2.1 0 0 0 3.8 0"/></svg></button>
</header>
```

A filled disc in the nav bar. No bar in the product holds one: `HIG · Navigation bars` puts a glyph or a word in the bar, and every trailing control built so far is unfilled. The [circular action](circular-action.html) belongs in content and on photographs; in the bar, use `.dr-bell`. A count that names the screen's own unread rows belongs on the row as a *New* chip, as in the [alerts log](alerts-log.html).
