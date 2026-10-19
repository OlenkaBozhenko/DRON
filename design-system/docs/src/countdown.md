---
name: Countdown
slug: countdown
group: Wide screens
order: 28
classes: .dr-countdown · __bar · __fill
file: countdown.css
inventory: (new) Countdown (desktop), backlog B-5
kit: 3983
---

## Anatomy

```html
<div class="dr dr-desk" style="width:420px;padding:16px"><div class="dr-countdown"><p class="dr-display" role="timer">Expires in 10s</p><span class="dr-countdown__bar" aria-hidden="true"><span class="dr-countdown__fill"></span></span></div></div>
```

- `.dr-countdown` — The whole: the words and their bar, 8 apart, one thing (proximity).
- `.dr-display` — The time left in words, *Expires in 10s* down to *Expires in 1s*, then *Offer expired*. It carries the fact (`WCAG 1.4.1`) and takes `role="timer"`, so a screen reader is not interrupted every second.
- `.dr-countdown__bar` — The track: 4 high, a pill, `--bg-muted`. Hidden from assistive technology: the words already say it.
- `.dr-countdown__fill` — The time still left: `--bg-meter`, charcoal in light, cream in dark. It empties from the right, linear over `--time-10`, in step with the words.

## Variants

### Phone

```html
<p class="dr-note">Not on the phone.</p>
```

The phone is frozen as built (the designer, 2026-10-18). Every rule here matches only inside `.dr-desk`.

### Reduced motion

```html
<p class="dr-note">The bar steps, it does not glide.</p>
```

Under `prefers-reduced-motion: reduce` the bar drops one tenth with each second the words count (`steps(10)`), so it still shows the time left without continuous motion (`WCAG 2.3.3`).

### Tablet

```html
<p class="dr-note">Coming soon.</p>
```

The tablet layout is being redesigned from scratch (the designer, 2026-10-18). Until then this page shows the phone and the desktop only.

## States

```html
<div class="dr dr-desk" style="width:420px;padding:16px"><div class="dr-countdown"><p class="dr-display" role="timer">Expires in 10s</p><span class="dr-countdown__bar" aria-hidden="true"><span class="dr-countdown__fill"></span></span></div></div>
```

No interactive state: the countdown is read, never pressed, and takes no focus. It runs once from the page's load and stops empty; `_desktop.js` counts the words with it.

## When to use

A decision with a fixed, known time: the operator's job offer, 10 seconds to accept (`flows.md` MJ-2, *Accept within 10s?*). Chosen by the designer on the live compare, 2026-10-19 (*«words + a bar that empties»*). Standards: `HIG · Progress indicators` (a known duration is shown as determinate progress); `WCAG 2.2.1` (a real-time offer is the allowed exception to adjustable timing); `WCAG 2.2.2` (the motion is the time limit itself and ends with it, so it is essential, and it lasts 10s); `WCAG 1.4.1` (the words carry it). Job 2 of `DESIGN.md` § Motion: it shows a process running.

Sources: design-system/backlog.md B-5; design-system/components/countdown.css; wireframes/desktop/job-offer.html

## Rule

Keep the seconds in words beside the bar, and let both reach zero together.

## Anti-rule

Do not paint the bar green: the screen's one green control is the action the time is for.
