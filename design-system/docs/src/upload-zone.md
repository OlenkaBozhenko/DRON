---
name: Upload zone
slug: upload-zone
group: Forms
order: 70
classes: .dr-upload · [role="button"] · --card · __action
file: form.css
inventory: Upload zone
kit: 2825
---

## Anatomy

```html
<div class="dr-upload dr-upload--card" role="button" tabindex="0" aria-labelledby="upload-zone-a-title" aria-describedby="upload-zone-a-hint" style="width:341px;max-width:100%"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 13v5a1.6 1.6 0 0 0 1.6 1.6h8.8A1.6 1.6 0 0 0 18 18v-5"/><path d="M12 4.2v10.3"/><path d="M8.4 7.8L12 4.2l3.6 3.6"/></svg><span class="dr-upload__action" id="upload-zone-a-title">Add drone documents</span><span class="dr-note" id="upload-zone-a-hint">Registration, serial, or manufacturer papers (PDF / photo).</span></div>
```

- `.dr-upload` — The zone, and the control itself: `role="button"`, `tabindex="0"`, no button inside it. `min-height` 140, padding 24, gap 12, no border.
- `.dr-ic` — The delivery tray glyph at rest, 32px: the same mark `delivery-loading` animates.
- `.dr-upload__action` — The verb line, 15/600 `--ink`, 14.37:1 on the card, and the zone's accessible name.
- `.dr-note` — What is accepted, `--slate` 5.95:1, capped at 30ch and balanced so it breaks into two even lines.

## Variants

### Card

```html
<div class="dr-upload dr-upload--card" role="button" tabindex="0" aria-labelledby="upload-zone-b-title" aria-describedby="upload-zone-b-hint" style="width:341px;max-width:100%"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 13v5a1.6 1.6 0 0 0 1.6 1.6h8.8A1.6 1.6 0 0 0 18 18v-5"/><path d="M12 4.2v10.3"/><path d="M8.4 7.8L12 4.2l3.6 3.6"/></svg><span class="dr-upload__action" id="upload-zone-b-title">Add insurance</span><span class="dr-note" id="upload-zone-b-hint">Valid liability insurance covering the drone.</span></div>
```

`--card`: the card's own `--card` ground at radius 16, standing on the page. Measured 326.2 × 161 on `account-edit`. Hover steps to `--btn2`, where ink is 11.54:1 and slate 4.77:1.

### Well

```html
<div class="dr-upload" role="button" tabindex="0" aria-label="Add a photo or note" style="width:341px;max-width:100%"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 13v5a1.6 1.6 0 0 0 1.6 1.6h8.8A1.6 1.6 0 0 0 18 18v-5"/><path d="M12 4.2v10.3"/><path d="M8.4 7.8L12 4.2l3.6 3.6"/></svg><span class="dr-field__hint">A photo makes your claim stronger. Order #DR-4821.</span></div>
```

The base zone with the role takes the `--media` well at radius 13, glyph 5.51:1. 341.4 × 140 on `report-issue`, where it stands in a field row as one input among several and carries no verb line.

## When to use

An upload zone is where the user adds a file to DRON: drone documents and insurance on `account-edit`, evidence for a claim on `report-issue`. The whole zone is the target and the control, with no nested button. A keyboard focus draws the system's 2.5px `--ink` ring (`WCAG 2.4.7`). There is no dashed boundary. An interactive zone keeps a visible ground, while the identifier is the glyph, the verb and the ring. The ground is 1.08:1 and is never read as one.

The verb is always *Add* with its object: *Add drone documents*, *Add insurance*, *Add a photo or note*. It is never *Upload* or *Attach*. The second line says what is accepted, in the user's words. When a file lands in the zone it shows there, and no toast announces it.

Sources: DESIGN.md § Form rows — two panels, not one (the Evidence zone) · voice.md A3 · § Microcopy — rules by element type (Toast) · inventory.md § 1.5

## Rule

```html
<div class="dr-upload dr-upload--card" role="button" tabindex="0" aria-labelledby="upload-zone-c-title" aria-describedby="upload-zone-c-hint" style="width:341px;max-width:100%"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 13v5a1.6 1.6 0 0 0 1.6 1.6h8.8A1.6 1.6 0 0 0 18 18v-5"/><path d="M12 4.2v10.3"/><path d="M8.4 7.8L12 4.2l3.6 3.6"/></svg><span class="dr-upload__action" id="upload-zone-c-title">Add drone documents</span><span class="dr-note" id="upload-zone-c-hint">Registration, serial, or manufacturer papers (PDF / photo).</span></div>
```

`account-edit`'s Documents zone: one card per document, the verb naming the object, the note naming what counts.

## Anti-rule

```html
<div class="dr-upload dr-upload--card" role="button" tabindex="0" aria-label="Upload" style="width:341px;max-width:100%"><svg class="dr-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 13v5a1.6 1.6 0 0 0 1.6 1.6h8.8A1.6 1.6 0 0 0 18 18v-5"/><path d="M12 4.2v10.3"/><path d="M8.4 7.8L12 4.2l3.6 3.6"/></svg><button class="dr-btn dr-btn--secondary" type="button">Upload</button></div>
```

A button nested inside the zone, labelled with the mechanism. The zone is already the control, so a second target inside it is redundant. Its verb is *Add* plus the object. To hand a file back to the user, use a [button](button.html) labelled *Download*.
