---
name: Desktop header
slug: wide-header
group: Wide screens
order: 2
classes: .dr-whead · __nav · __link · __end · .dr-brandlink · .dr-iconbtn · __sun · __moon · .dr-profilechip · __text · __place
file: header.css
inventory: (new, desktop) — navigation pill, Order, icon buttons, theme, profile chip, the logo link
kit: 3364
---

## Anatomy

```html
<div class="dr dr-screen dr-desk" style="width:1440px;height:96px;max-width:none">
<div class="dr-mapground" role="img" aria-label="Live map of Kyiv, 128 drones in the air"><span class="dr-mapground__drone" style="left:31%;top:34%"></span><span class="dr-mapground__drone" style="left:44%;top:58%"></span><span class="dr-mapground__drone" style="left:63%;top:30%"></span><span class="dr-mapground__drone" style="left:70%;top:66%"></span><span class="dr-mapground__drone" style="left:60%;top:82%"></span><span class="dr-mapground__drone" style="left:38%;top:76%"></span><span class="dr-mapground__drone" style="left:78%;top:44%"></span><span class="dr-mapground__drone" style="left:24%;top:60%"></span><span class="dr-mapground__drone" style="left:58%;top:48%"></span></div>
<div class="dr-veil" aria-hidden="true"></div>
<header class="dr-whead">
    <a class="dr-brandlink" href="../../research.html" aria-label="DRON project"><span class="dr-brand" aria-hidden="true"></span></a>
    <nav class="dr-whead__nav dr-material" aria-label="Primary">
      <a class="dr-whead__link" href="../../wireframes/desktop/listings.html">Overview</a>
      <a class="dr-whead__link" href="../../wireframes/desktop/order-history.html" aria-current="page">Activity</a>
      <a class="dr-whead__link" href="../../wireframes/desktop/support.html">Help</a>
    </nav>
    <div class="dr-whead__end">
      <a class="dr-btn dr-btn--primary" href="../../wireframes/desktop/listings-map.html">Order</a>
      <a class="dr-iconbtn dr-material" href="../../wireframes/desktop/listings-filters.html" aria-label="Search and filters"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg></a>
      <button class="dr-iconbtn dr-material" type="button" data-theme-cycle aria-label="Switch the theme"><svg class="dr-ic dr-iconbtn__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/></svg><svg class="dr-ic dr-iconbtn__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg></button>
      <a class="dr-iconbtn dr-material" href="../../wireframes/desktop/notifications.html" aria-label="Notifications, 2 new"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg><span class="dr-count-badge">2</span></a>
      <a class="dr-profilechip dr-material" href="../../wireframes/desktop/account.html"><img src="../../assets/people/thumbs/person-client-olena.png" alt=""><span class="dr-profilechip__text">Olena B.<span class="dr-profilechip__place">Kyiv · Podil</span></span></a>
    </div>
  </header>
</div>
```

- `.dr-brandlink` — The DRON mark, 66 wide, as a link to the project's hub page `research.html`: 44 × 44 (`HIG · 44pt target`), named *DRON project*, its focus ring 2.5 and 4 out (the mark is a mask and would cut a ring of its own).
- `.dr-whead__nav` — The top-level destinations as links on a material pill, 44 tall: **Overview · Activity · Help** for the client, **Overview · Jobs · Earnings · Ratings** for the operator. The current one is `--bg-well` behind `--text-primary`, medium: 13.33:1 light, 14.09:1 dark; the others `--text-muted` on the material, 7.03:1 / 9.77:1 (`WCAG 1.4.3`).
- `.dr-whead__end > .dr-btn--primary` — **Order**, the client's green pill: it opens the search. It stays green while a step's window is open, so a step shows two green controls — the header is the app's frame, not part of the step (the designer, 2026-10-19; a recorded departure from one green control per screen).
- `.dr-iconbtn` — Round 48 buttons on the material: search and filters (the client only), the theme — a moon in light, a sun in dark, named for what it does — and notifications with the count badge.
- `.dr-profilechip` — **Account** is the profile chip, not a destination in the navigation: the face at 40, the name, and where (the client's district, or *Operator · Kyiv*).

## Variants

### Phone

```html
<p class="dr-note">Not on the phone.</p>
```

The phone never draws it: every rule here matches only inside `.dr-desk`, the frame of a desktop twin.

### Client

```html
<div class="dr dr-screen dr-desk" style="width:1440px;height:96px;max-width:none">
<div class="dr-mapground" role="img" aria-label="Live map of Kyiv, 128 drones in the air"><span class="dr-mapground__drone" style="left:31%;top:34%"></span><span class="dr-mapground__drone" style="left:44%;top:58%"></span><span class="dr-mapground__drone" style="left:63%;top:30%"></span><span class="dr-mapground__drone" style="left:70%;top:66%"></span><span class="dr-mapground__drone" style="left:60%;top:82%"></span><span class="dr-mapground__drone" style="left:38%;top:76%"></span><span class="dr-mapground__drone" style="left:78%;top:44%"></span><span class="dr-mapground__drone" style="left:24%;top:60%"></span><span class="dr-mapground__drone" style="left:58%;top:48%"></span></div>
<div class="dr-veil" aria-hidden="true"></div>
<header class="dr-whead">
    <a class="dr-brandlink" href="../../research.html" aria-label="DRON project"><span class="dr-brand" aria-hidden="true"></span></a>
    <nav class="dr-whead__nav dr-material" aria-label="Primary">
      <a class="dr-whead__link" href="../../wireframes/desktop/listings.html">Overview</a>
      <a class="dr-whead__link" href="../../wireframes/desktop/order-history.html" aria-current="page">Activity</a>
      <a class="dr-whead__link" href="../../wireframes/desktop/support.html">Help</a>
    </nav>
    <div class="dr-whead__end">
      <a class="dr-btn dr-btn--primary" href="../../wireframes/desktop/listings-map.html">Order</a>
      <a class="dr-iconbtn dr-material" href="../../wireframes/desktop/listings-filters.html" aria-label="Search and filters"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg></a>
      <button class="dr-iconbtn dr-material" type="button" data-theme-cycle aria-label="Switch the theme"><svg class="dr-ic dr-iconbtn__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/></svg><svg class="dr-ic dr-iconbtn__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg></button>
      <a class="dr-iconbtn dr-material" href="../../wireframes/desktop/notifications.html" aria-label="Notifications, 2 new"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg><span class="dr-count-badge">2</span></a>
      <a class="dr-profilechip dr-material" href="../../wireframes/desktop/account.html"><img src="../../assets/people/thumbs/person-client-olena.png" alt=""><span class="dr-profilechip__text">Olena B.<span class="dr-profilechip__place">Kyiv · Podil</span></span></a>
    </div>
  </header>
</div>
```

From `order-history`: Activity is current.

### Operator

```html
<div class="dr dr-screen dr-desk" style="width:1440px;height:96px;max-width:none">
<div class="dr-mapground" role="img" aria-label="Live map of Kyiv, 128 drones in the air"><span class="dr-mapground__drone" style="left:31%;top:34%"></span><span class="dr-mapground__drone" style="left:44%;top:58%"></span><span class="dr-mapground__drone" style="left:63%;top:30%"></span><span class="dr-mapground__drone" style="left:70%;top:66%"></span><span class="dr-mapground__drone" style="left:60%;top:82%"></span><span class="dr-mapground__drone" style="left:38%;top:76%"></span><span class="dr-mapground__drone" style="left:78%;top:44%"></span><span class="dr-mapground__drone" style="left:24%;top:60%"></span><span class="dr-mapground__drone" style="left:58%;top:48%"></span></div>
<div class="dr-veil" aria-hidden="true"></div>
<header class="dr-whead">
    <a class="dr-brandlink" href="../../research.html" aria-label="DRON project"><span class="dr-brand" aria-hidden="true"></span></a>
    <nav class="dr-whead__nav dr-material" aria-label="Primary">
      <a class="dr-whead__link" href="../../wireframes/desktop/operator-listings.html" aria-current="page">Overview</a>
      <a class="dr-whead__link" href="../../wireframes/desktop/operator-jobs.html">Jobs <span class="dr-grouptab__count">2</span><span class="sr-only"> new</span></a>
      <a class="dr-whead__link" href="../../wireframes/desktop/wallet.html">Earnings</a>
      <a class="dr-whead__link" href="../../wireframes/desktop/ratings.html">Ratings</a>
    </nav>
    <div class="dr-whead__end">
      <button class="dr-iconbtn dr-material" type="button" data-theme-cycle aria-label="Switch the theme"><svg class="dr-ic dr-iconbtn__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/></svg><svg class="dr-ic dr-iconbtn__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg></button>
      <a class="dr-iconbtn dr-material" href="../../wireframes/desktop/operator-notifications.html" aria-label="Notifications, 3 unread"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg><span class="dr-count-badge" aria-hidden="true">3</span></a>
      <a class="dr-profilechip dr-material" href="../../wireframes/desktop/operator-account.html"><img src="../../assets/people/thumbs/person-operator-ivan.png" alt=""><span class="dr-profilechip__text">Ivan K.<span class="dr-profilechip__place">Operator · Kyiv</span></span></a>
    </div>
  </header>
</div>
```

From `operator-listings`: Jobs carries the count of new offers, read as *Jobs 2 new*. No Order and no search: an operator takes jobs, never orders.

### Signed out

```html
<div class="dr dr-screen dr-desk" style="width:1440px;height:96px;max-width:none">
<div class="dr-mapground" role="img" aria-label="Live map of Kyiv, 128 drones in the air"><span class="dr-mapground__drone" style="left:31%;top:34%"></span><span class="dr-mapground__drone" style="left:44%;top:58%"></span><span class="dr-mapground__drone" style="left:63%;top:30%"></span><span class="dr-mapground__drone" style="left:70%;top:66%"></span><span class="dr-mapground__drone" style="left:60%;top:82%"></span><span class="dr-mapground__drone" style="left:38%;top:76%"></span><span class="dr-mapground__drone" style="left:78%;top:44%"></span><span class="dr-mapground__drone" style="left:24%;top:60%"></span><span class="dr-mapground__drone" style="left:58%;top:48%"></span></div>
<div class="dr-veil" aria-hidden="true"></div>
<header class="dr-whead">
    <a class="dr-brandlink" href="../../research.html" aria-label="DRON project"><span class="dr-brand" aria-hidden="true"></span></a>
    <div class="dr-whead__end">
      <button class="dr-iconbtn dr-material" type="button" data-theme-cycle aria-label="Switch the theme"><svg class="dr-ic dr-iconbtn__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/></svg><svg class="dr-ic dr-iconbtn__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg></button>
    </div>
  </header>
</div>
```

From `signin`: the logo and the theme, nothing else.

### Tablet

```html
<p class="dr-note">Coming soon.</p>
```

The tablet layout is being redesigned from scratch (the designer, 2026-10-18). Until then this page shows the phone and the desktop only.

## States

```html
<div class="dr dr-desk" style="display:flex;gap:10px;align-items:center;padding:12px"><nav class="dr-whead__nav dr-material" aria-label="Primary">
      <a class="dr-whead__link" href="../../wireframes/desktop/listings.html">Overview</a>
      <a class="dr-whead__link" href="../../wireframes/desktop/order-history.html" aria-current="page">Activity</a>
      <a class="dr-whead__link" href="../../wireframes/desktop/support.html">Help</a>
    </nav><button class="dr-iconbtn dr-material" type="button" data-theme-cycle aria-label="Switch the theme"><svg class="dr-ic dr-iconbtn__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/></svg><svg class="dr-ic dr-iconbtn__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg></button></div>
```

The navigation and the theme button from `order-history`. A link's hover darkens it to `--text-primary`, pressed scales it to .99, focus is the 2.5 `--text-primary` ring (17.40:1 / 12.48:1 against the material). An icon button's hover firms its edge. The Disabled cell draws the icon button's own disabled rule (`--text-disabled`), the look the onboarding's *Previous slide* takes on the first slide; a destination is never unavailable.

## When to use

At the top of every desktop twin. The destinations are the job-clusters of `sitemap.md` without Account, which is the chip.

Sources: wireframes/desktop/ (the twins); design-system/components/header.css (and its DESKTOP section); responsive/desktop-to-system-brief.md

## Rule

Client: Overview · Activity · Help, then Order (green), search, theme, notifications, the profile chip. Operator: Overview · Jobs · Earnings · Ratings, then theme, notifications, the profile chip. The logo goes to `research.html`.

## Anti-rule

Do not put Account in the navigation, and do not give the operator an Order button or a search. Do not grey Order while a window is open.
