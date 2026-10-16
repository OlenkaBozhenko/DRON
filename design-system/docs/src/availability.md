---
name: Availability head and badge
slug: availability
group: Surfaces
order: 210
classes: .dr-avail · __dot · __state · __note · .dr-avail-badge · __dot · [data-state]
file: badge.css
inventory: Availability head; Availability badge
kit: 1984
---

## Anatomy

```html
<div style="display:flex;flex-direction:column;gap:16px;align-items:flex-start;width:341px;max-width:100%">
<p class="dr-avail">
  <span class="dr-avail__dot" aria-hidden="true"></span>
  <b class="dr-avail__state">You are Offline</b><span class="dr-avail__note">· no jobs while offline</span>
</p>
<span class="dr-chip dr-chip--sm dr-avail-badge" data-state="offline"><span class="dr-avail-badge__dot" aria-hidden="true"></span><span>Offline</span></span>
</div>
```

- `.dr-avail__dot` — The head's bullet, 10 × 10, charcoal in every state. It is a bullet, not a signal.
- `.dr-avail__state` — The state in words, 15/600 charcoal, 15.99:1.
- `.dr-avail__note` — One supporting clause, 13 in `--text-muted` on the page, 6.62:1.
- `.dr-avail-badge` — The same fact as a small [chip](chip.html#variant-small) in the nav bar: 11/600, padding 3 / 8, radius 999, 6 between dot and word.
- `.dr-avail-badge__dot` — The badge's dot, 8px; its fill or ring changes with `data-state`. Here it is Offline's 2px ring.

## Variants

### Head

```html
<p class="dr-avail" style="width:341px;max-width:100%">
  <span class="dr-avail__dot" aria-hidden="true"></span>
  <b class="dr-avail__state">You are Offline</b><span class="dr-avail__note">· no jobs while offline</span>
</p>
```

A sentence in the page, 326.2 × 19, gap 8: a 10px dot, the state at 15/600 and the note at 13. It stands above the *Availability* field row that opens the state drawer. Only `operator-listings-empty` builds it, and only with *You are Offline*.

### Badge · Available

```html
<span class="dr-chip dr-chip--sm dr-avail-badge" data-state="available"><span class="dr-avail-badge__dot" aria-hidden="true"></span><span>Available</span></span>
```

The claim pair, `--bg-accent-tint` under charcoal at 14.75:1, with a solid `--color-action` dot. 79.98 × 21.39. `operator-listings` draws this state in its bar.

### Badge · Busy

```html
<span class="dr-chip dr-chip--sm dr-avail-badge" data-state="busy"><span class="dr-avail-badge__dot" aria-hidden="true"></span><span>Busy</span></span>
```

The chip's own `--bg-well` under `--text-muted`, 5.51:1, with a dot filled in the same `--text-muted` (`currentColor`). 57.17 × 21.39. No screen draws this state in its markup; `operator-listings` sets it when the operator picks *Busy* in the drawer.

### Badge · Offline

```html
<span class="dr-chip dr-chip--sm dr-avail-badge" data-state="offline"><span class="dr-avail-badge__dot" aria-hidden="true"></span><span>Offline</span></span>
```

The same grey pair as Busy, and the dot becomes a 2px ring round a 4px hole. Busy and Offline share a fill, so shape separates them. 67.61 × 21.39. `operator-listings-empty` draws this state in its bar.

## States

No state of its own: the head is a sentence and the badge is a [chip](chip.html), and neither takes focus. The state is changed in the drawer that the *Availability* row opens, not on the badge.

## When to use

Availability is the operator's own state, said twice on one screen at two sizes: a sentence in the page and a chip in the bar. The badge stands in the nav bar of `operator-listings` and `operator-listings-empty`, so the state stays on screen after the control that sets it has scrolled away; the head stands only on `operator-listings-empty`. Neither is a control and neither is a live region. The control is the *Availability* field row (`.dr-field--action`), which opens a drawer of three picker rows; the badge restates its value visually.

`WCAG 1.4.1` is answered by the word, which is printed in every state. That is why the head's dot is charcoal and not green: the sentence beside it would otherwise lean on colour. The badge's dot may take green, at 1.56:1 on the wash, because the word travels inside the same pill, and the 8 × 8 green dot is a status mark of 64 px², outside the one-green-control budget.

The words are the state names, *Available*, *Busy*, *Offline*, read at runtime from the option the operator tapped, so they live in the markup once. The head's sentence addresses the operator: *You are Available · receiving jobs near Podil*.

Sources: DESIGN.md § The availability head · § The availability badge · inventory.md § 1 (Availability head, Availability badge) · microcopy.md § operator-listings

## Rule

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

The badge after the operator's name, restating the state the operator set, with the word always printed. On `operator-listings` the notification bell follows it, because the bar's trailing edge belongs to the one control in it. The two screens split here, one each: `operator-listings` builds the bell after the badge, and `operator-listings-empty` builds no bell, so its badge stands at the edge.

## Anti-rule

```html
<p class="dr-avail" style="width:341px;max-width:100%"><span class="dr-avail-badge" data-state="available"><span class="dr-avail-badge__dot" aria-hidden="true"></span></span></p>
```

A dot with no word. Colour alone would carry the state (`WCAG 1.4.1`), and the green dot sits at 1.56:1. Print the state beside every dot. To let the operator change the state, use the field row that opens the [picker](picker-row.html) drawer; a credential that does not change is a [credential chip](chip.html).
