---
name: Circular action
slug: circular-action
group: Actions
order: 30
classes: .dr-btn--icon · --danger-solid · --night · --night[aria-pressed] · --onphoto · --primary.dr-btn--icon
file: button.css; media.css
inventory: Circular icon action; Icon action on a photograph; End call; Call control; Send action
kit: 590
---

## Anatomy

```html
<button class="dr-btn dr-btn--icon" type="button" aria-label="Delete order"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6.6h16"/><path d="M9.6 6.6V4.9a1.1 1.1 0 0 1 1.1-1.1h2.6a1.1 1.1 0 0 1 1.1 1.1v1.7"/><path d="M6.3 6.6l.85 12.1a1.6 1.6 0 0 0 1.6 1.5h6.5a1.6 1.6 0 0 0 1.6-1.5l.85-12.1"/><path d="M10.3 10.4v6M13.7 10.4v6"/></svg></button>
```

- `.dr-btn--icon` — The disc: 44 × 44, `border-radius:50%`, no border and no shadow. `HIG · 44pt` exactly, 1.83× `WCAG 2.5.8`'s 24 × 24. `z-index:2`, so it clears a whole-card link.
- `.dr-ic` — The 20px glyph, rendered stroke 1.42. It is the only content, so the accessible name lives in `aria-label`, and it is the glyph, not the disc, that carries `WCAG 1.4.11`.

## Variants

### Default

```html
<button class="dr-btn dr-btn--icon" type="button" aria-label="Delete order"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6.6h16"/><path d="M9.6 6.6V4.9a1.1 1.1 0 0 1 1.1-1.1h2.6a1.1 1.1 0 0 1 1.1 1.1v1.7"/><path d="M6.3 6.6l.85 12.1a1.6 1.6 0 0 0 1.6 1.5h6.5a1.6 1.6 0 0 0 1.6-1.5l.85-12.1"/><path d="M10.3 10.4v6M13.7 10.4v6"/></svg></button>
```

The secondary pair as a disc: warm grey fill, charcoal glyph, 11.54:1. Hover takes the well grey.

### End call

```html
<span class="dr-btn dr-btn--icon dr-btn--danger-solid" role="img" aria-label="End call"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.4 14.3a12 12 0 0 1 17.2 0"/><path d="M3.4 14.3l1.7 1.7a1.5 1.5 0 0 0 2.1 0l1.1-1.1a1.5 1.5 0 0 0 0-2.1l-.7-.7"/><path d="M20.6 14.3l-1.7 1.7a1.5 1.5 0 0 1-2.1 0l-1.1-1.1a1.5 1.5 0 0 1 0-2.1l.7-.7"/></svg></span>
```

`--danger-solid`: the palette's one destructive fill, `#C4462A` with a page-coloured glyph at 4.53:1 against `1.4.11`'s 3:1. Flat, and spent only on *End call*.

### Call control

```html
<div style="display:flex;gap:14px;padding:12px;border-radius:var(--len-22);background:var(--bg-night-raised)"><span class="dr-btn dr-btn--icon dr-btn--night" role="img" aria-label="Video"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6.6" width="12.4" height="10.8" rx="2.4"/><path d="M15.4 10.6l5.1-2.9v8.6l-5.1-2.9z"/></svg></span><button class="dr-btn dr-btn--icon dr-btn--night" type="button" aria-pressed="true" aria-label="Mute"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9.2" y="3.4" width="5.6" height="11" rx="2.8"/><path d="M5.5 11.4a6.5 6.5 0 0 0 13 0"/><path d="M12 17.9v2.7"/></svg></button></div>
```

`--night`: the disc inverted for the call screen, page-coloured glyph on `#1A1A1A` at 15.99:1. Pressed (`aria-pressed="true"`, right) takes the light half of the same pair; the label never flips to *Unmute* (`WCAG 2.5.3`).

### On a photograph

```html
<div class="dr-well dr-well--photo" style="width:341px;max-width:100%;height:180px"><img src="../assets/scenes/thumbs/aerial-rafting-boulders.jpg" alt="A grey raft with a crew in red helmets and life jackets running a rapid between dark boulders, white water breaking around it, shot from above."><button class="dr-btn dr-btn--icon dr-btn--onphoto" type="button" aria-label="Play video &#183; 0:38"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.5 6.8 18 12 9.5 17.2Z"/></svg></button></div>
```

`--onphoto` is position only: the default disc, centred in a media well, no ring and no shadow. The charcoal glyph holds 11.54:1 on its own ground where no flat disc colour could hold 3:1 against every pixel of the picture.

### Send

```html
<button class="dr-btn dr-btn--primary dr-btn--icon" type="button" aria-label="Send message"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19.5V5"/><path d="M5.5 11.5L12 5l6.5 6.5"/></svg></button>
```

`--primary` and `--icon` worn at once: green disc, charcoal glyph at 9.46:1, `--shadow-sm`. On `chat` it is the screen's one green control at 0.64% of the frame.

## When to use

A circular action is an icon-only command: one glyph whose meaning is unambiguous where it stands, so the label can be dropped. It is the shape of every icon-only button in the product, one 44 disc on different grounds for different jobs: the default on light surfaces, `--night` and `--danger-solid` on the [call surface](call-surface.html) (`call`, `call-client`, `call-support`), `--onphoto` on the video cover of `order-details-aerial`, and the green Send in the composer of `chat`.

The words are the accessible name, so they carry the whole meaning: a verb and its object, *End call*, *Send message*, *Play video · 0:38*. Not *Hang up*, not *End* alone. A toggle keeps one name and states its condition in `aria-pressed`.

Sources: DESIGN.md § Circular icon action · § Destructive fill · § Call control · § Circular action as a screen's primary · inventory.md § 1 (Circular icon action, Icon action on a photograph, End call, Call control, Send action) · microcopy.md § call, chat

## Rule

```html
<div style="display:flex;gap:8px;align-items:center;width:341px;max-width:100%"><span class="dr-btn dr-btn--icon dr-btn--night" role="img" aria-label="Minimise the call"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 3.5l6 6"/><path d="M4.5 9.5h5v-5"/><path d="M20.5 20.5l-6-6"/><path d="M19.5 14.5h-5v5"/></svg></span><span class="dr-btn dr-btn--icon dr-btn--danger-solid" role="img" aria-label="End call"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.4 14.3a12 12 0 0 1 17.2 0"/><path d="M3.4 14.3l1.7 1.7a1.5 1.5 0 0 0 2.1 0l1.1-1.1a1.5 1.5 0 0 0 0-2.1l-.7-.7"/><path d="M20.6 14.3l-1.7 1.7a1.5 1.5 0 0 1-2.1 0l-1.1-1.1a1.5 1.5 0 0 1 0-2.1l.7-.7"/></svg></span></div>
```

Icon-only where the glyph is the convention, each with an `aria-label` that names verb and object. The red fill goes only to the one destructive control, *End call*.

## Anti-rule

```html
<div style="display:flex;gap:8px;align-items:center;width:341px;max-width:100%"><button class="dr-btn dr-btn--icon" type="button"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6.6h16"/><path d="M9.6 6.6V4.9a1.1 1.1 0 0 1 1.1-1.1h2.6a1.1 1.1 0 0 1 1.1 1.1v1.7"/><path d="M6.3 6.6l.85 12.1a1.6 1.6 0 0 0 1.6 1.5h6.5a1.6 1.6 0 0 0 1.6-1.5l.85-12.1"/><path d="M10.3 10.4v6M13.7 10.4v6"/></svg></button><button class="dr-btn dr-btn--icon dr-btn--danger-solid" type="button" aria-label="Cancel order"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6l12 12"/><path d="M18 6L6 18"/></svg></button></div>
```

A disc with no `aria-label` has no accessible name (`WCAG 4.1.2`), and the red fill spent on a command that is not ending a call. When the action needs words to be understood, such as cancelling an order or paying, use a labelled [button](button.html). To offer a set of routes, use a [sheet](sheet.html).
