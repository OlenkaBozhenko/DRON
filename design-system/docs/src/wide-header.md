---
name: Wide header
slug: wide-header
group: Wide screens
order: 7
classes: .dr-whead · __nav · __link · __end · .dr-iconbtn · __sun · __moon · .dr-profilechip · __text · __place
file: header.css
inventory: (new, wide screens)
kit: —
---

## Anatomy

```html
<div class="dr" style="width:1100px;max-width:100%;padding:8px;border-radius:22px;background:var(--bg-surface)"><header class="dr-whead">
    <span class="dr-brand" role="img" aria-label="DRON"></span>
    <nav class="dr-whead__nav dr-material" aria-label="Primary">
      <a class="dr-whead__link" href="#" aria-current="page">Overview</a>
      <a class="dr-whead__link" href="../../wireframes/order-history.html">Activity</a>
      <a class="dr-whead__link" href="../../wireframes/support.html">Help</a>
      <a class="dr-whead__link" href="../../wireframes/account.html">Account</a>
    </nav>
    <div class="dr-whead__end">
      <button class="dr-btn dr-btn--primary" type="button" aria-controls="sheet-order" aria-haspopup="dialog" aria-expanded="false">Order</button>
      <a class="dr-iconbtn dr-material" href="#" aria-label="Search"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg></a>
      <button class="dr-iconbtn dr-material dr-console__toggle" type="button" data-panel-toggle aria-controls="your-orders" aria-expanded="false" aria-label="Your orders"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="5" width="17" height="14" rx="2.5"/><path d="M14.5 5v14"/></svg></button>
      <button class="dr-iconbtn dr-material" type="button" data-theme-cycle aria-label="Switch the theme"><svg class="dr-ic dr-iconbtn__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/></svg><svg class="dr-ic dr-iconbtn__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg></button>
      <a class="dr-iconbtn dr-material" href="../../wireframes/notifications.html" aria-label="Notifications, 2 new"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg><span class="dr-count-badge">2</span></a>
      <a class="dr-profilechip dr-material" href="../../wireframes/account.html"><img src="../assets/people/thumbs/person-client-olena.png" alt=""><span class="dr-profilechip__text">Olena B.<span class="dr-profilechip__place">Kyiv · Podil</span></span></a>
    </div>
  </header></div>
```

- `.dr-whead__nav` — The four destinations as links on a material pill; the current one on `--bg-well`, medium weight.
- `.dr-whead__end > .dr-btn--primary` — *Order*, the screen's one green control, a pill. It steps back to grey while a window is open.
- `.dr-iconbtn` — A round 48 button on the material: search, the theme (a moon in light, a sun in dark, named for what it switches to), notifications with the count badge.
- `.dr-profilechip` — The face, the name and where.

## Variants

### Phone

```html
<p class="dr-note">Not on the phone.</p>
```

The phone keeps its own home and tab bar; nothing here reaches it.

### Navigation

```html
<div style="width:520px;max-width:100%"><nav class="dr-whead__nav dr-material" aria-label="Primary">
      <a class="dr-whead__link" href="#" aria-current="page">Overview</a>
      <a class="dr-whead__link" href="../../wireframes/order-history.html">Activity</a>
      <a class="dr-whead__link" href="../../wireframes/support.html">Help</a>
      <a class="dr-whead__link" href="../../wireframes/account.html">Account</a>
    </nav></div>
```

The same four destinations as the phone's tab bar, in the same order.

### The end of the header

```html
<div style="width:560px;max-width:100%"><div class="dr-whead__end">
      <button class="dr-btn dr-btn--primary" type="button" aria-controls="sheet-order" aria-haspopup="dialog" aria-expanded="false">Order</button>
      <a class="dr-iconbtn dr-material" href="#" aria-label="Search"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg></a>
      <button class="dr-iconbtn dr-material dr-console__toggle" type="button" data-panel-toggle aria-controls="your-orders" aria-expanded="false" aria-label="Your orders"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="5" width="17" height="14" rx="2.5"/><path d="M14.5 5v14"/></svg></button>
      <button class="dr-iconbtn dr-material" type="button" data-theme-cycle aria-label="Switch the theme"><svg class="dr-ic dr-iconbtn__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/></svg><svg class="dr-ic dr-iconbtn__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg></button>
      <a class="dr-iconbtn dr-material" href="../../wireframes/notifications.html" aria-label="Notifications, 2 new"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg><span class="dr-count-badge">2</span></a>
      <a class="dr-profilechip dr-material" href="../../wireframes/account.html"><img src="../assets/people/thumbs/person-client-olena.png" alt=""><span class="dr-profilechip__text">Olena B.<span class="dr-profilechip__place">Kyiv · Podil</span></span></a>
    </div></div>
```

Order, search, theme, notifications, the profile.

### Tablet

```html
<p class="dr-note">Coming soon.</p>
```

The tablet layout is being redesigned from scratch (the designer, 2026-10-18). Until then this page shows the phone and the desktop only.

## States

```html
<div style="display:flex;gap:10px;align-items:center"><a class="dr-whead__link" href="#" aria-current="page">Overview</a><a class="dr-iconbtn dr-material" href="#" aria-label="Search"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg></a></div>
```

A destination (the current one) and an icon button.

## When to use

At the top of every wide screen: the top-level destinations and the global actions.

Sources: responsive/width-audit.md § The designer's direction, 2026-10-18

## Rule

One green control in the header, *Order*; everything else is grey on the material.

## Anti-rule

Do not add a fifth destination to the header that the phone's tab bar does not have.
