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
<div class="dr-upload dr-upload--card" role="button" tabindex="0" aria-labelledby="uz-a-licence-title" style="width:341px;max-width:100%">
  <svg class="dr-ic dr-ic--32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 13v5a1.6 1.6 0 0 0 1.6 1.6h8.8A1.6 1.6 0 0 0 18 18v-5"/><path d="M12 4.2v10.3"/><path d="M8.4 7.8L12 4.2l3.6 3.6"/></svg>
  <span class="dr-upload__action" id="uz-a-licence-title">Add licence</span>
</div>
```

- `.dr-upload` — The zone, and the control itself: `role="button"`, `tabindex="0"`, no button inside it. `min-height` 140, padding 24, gap 12, no border. Content is centred in a column.
- `.dr-ic` — The upload tray glyph at rest, 32px, in `--text-muted` slate: 5.95:1 on the card, 5.51:1 in the well. The same mark `result-upload-loading` animates.
- `.dr-upload__action` — The verb line, 15/600 charcoal `--text-primary` on a 21 line, 14.37:1 on the card, and the zone's accessible name through `aria-labelledby`.

From `operator-verification`. The verb line alone is the majority build of the card zone: three of the five card zones carry no second line (`operator-verification` ×2, `operator-profile-setup` ×1); the two on `account-edit` add a note.

## Variants

### Card

```html
<div class="dr-upload dr-upload--card" role="button" tabindex="0" aria-labelledby="uz-b-profile-photo-title" style="width:341px;max-width:100%">
  <svg class="dr-ic dr-ic--32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 13v5a1.6 1.6 0 0 0 1.6 1.6h8.8A1.6 1.6 0 0 0 18 18v-5"/><path d="M12 4.2v10.3"/><path d="M8.4 7.8L12 4.2l3.6 3.6"/></svg>
  <span class="dr-upload__action" id="uz-b-profile-photo-title">Add photo</span>
</div>
```

`--card`: the `--bg-surface` card ground (#ECE9E4) at radius 16, standing on the page. Hover steps to `--bg-muted` (#D6D2C9), where ink is 11.54:1 and slate 4.77:1. Built on `operator-profile-setup`, `operator-verification` and `account-edit`.

### Card with a note

```html
<div class="dr-upload dr-upload--card" role="button" tabindex="0" aria-labelledby="uz-c-drone-docs-title" aria-describedby="uz-c-drone-docs-hint" style="width:341px;max-width:100%">
  <svg class="dr-ic dr-ic--32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 13v5a1.6 1.6 0 0 0 1.6 1.6h8.8A1.6 1.6 0 0 0 18 18v-5"/><path d="M12 4.2v10.3"/><path d="M8.4 7.8L12 4.2l3.6 3.6"/></svg>
  <span class="dr-upload__action" id="uz-c-drone-docs-title">Add drone documents</span>
  <span class="dr-note" id="uz-c-drone-docs-hint">Registration, serial, or manufacturer papers (PDF / photo).</span>
</div>
```

A second line in `.dr-note` says what is accepted, slate 5.95:1, tied by `aria-describedby`, capped at 30ch and balanced so it breaks into two even lines. Only `account-edit` builds it, on both its zones. Measured 326.2 × 161 there.

### Well

```html
<div class="dr-upload" role="button" tabindex="0" aria-labelledby="uz-d-result-photo-act" style="width:341px;max-width:100%">
  <svg class="dr-ic dr-ic--32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 13v5a1.6 1.6 0 0 0 1.6 1.6h8.8A1.6 1.6 0 0 0 18 18v-5"/><path d="M12 4.2v10.3"/><path d="M8.4 7.8L12 4.2l3.6 3.6"/></svg>
  <span class="dr-upload__action" id="uz-d-result-photo-act">Add photo</span>
</div>
```

The base zone with the role takes the `--bg-well` ground (#E4E1DA) at radius 13; glyph 5.51:1, verb 14.09:1. From `result-upload`, where the empty well and the filled photo are one box; `operator-dispute` builds the same, *Add evidence*. Screens split here: two of three well zones carry a `.dr-upload__action` verb line named by `aria-labelledby`; `report-issue` instead puts a `.dr-field__hint` line (*A photo makes your claim stronger. Order #DR-4821.*) in the zone and names it with `aria-label="Add a photo or note"`. `result-upload-loading` reuses the box with no role as its skeleton tray, `.dr-upload .dr-sk-tray`.

## States

```html
<div style="display:grid;gap:8px;width:341px;max-width:100%">
  <div class="dr-upload dr-upload--card" role="button" tabindex="0" aria-labelledby="uz-s-card-title">
    <svg class="dr-ic dr-ic--32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 13v5a1.6 1.6 0 0 0 1.6 1.6h8.8A1.6 1.6 0 0 0 18 18v-5"/><path d="M12 4.2v10.3"/><path d="M8.4 7.8L12 4.2l3.6 3.6"/></svg>
    <span class="dr-upload__action" id="uz-s-card-title">Add licence</span>
  </div>
  <div class="dr-upload" role="button" tabindex="0" aria-labelledby="uz-s-well-act">
    <svg class="dr-ic dr-ic--32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 13v5a1.6 1.6 0 0 0 1.6 1.6h8.8A1.6 1.6 0 0 0 18 18v-5"/><path d="M12 4.2v10.3"/><path d="M8.4 7.8L12 4.2l3.6 3.6"/></svg>
    <span class="dr-upload__action" id="uz-s-well-act">Add photo</span>
  </div>
</div>
```

The card zone from `operator-verification` and the well zone from `result-upload`.

## When to use

An upload zone is where the user adds a file to DRON. Six screens build it: drone documents and insurance on `account-edit`, licence and insurance on `operator-verification`, the profile photo on `operator-profile-setup`, the delivery photo on `result-upload`, evidence on `operator-dispute`, and the claim's photo on `report-issue`. The whole zone is the target and the control, with no nested button. A keyboard focus draws the system's 2.5px charcoal ring at a 2px offset (`WCAG 2.4.7`). There is no dashed boundary. An interactive zone keeps a visible ground, while the identifier is the glyph, the verb and the ring. The ground is 1.08:1 and is never read as one.

The verb is always *Add* with its object: *Add drone documents*, *Add insurance*, *Add licence*, *Add photo*, *Add evidence*. It is never *Upload* or *Attach*. A second line, where there is one, says what is accepted, in the user's words. When a file lands in the zone it shows there, and no toast announces it.

Sources: wireframes/account-edit.html, operator-verification.html, result-upload.html · DESIGN.md § Form rows · voice.md A3 · inventory.md § 1.5 · components/form.css

## Rule

```html
<div class="dr-upload dr-upload--card" role="button" tabindex="0" aria-labelledby="uz-r-licence-title" style="width:341px;max-width:100%">
  <svg class="dr-ic dr-ic--32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 13v5a1.6 1.6 0 0 0 1.6 1.6h8.8A1.6 1.6 0 0 0 18 18v-5"/><path d="M12 4.2v10.3"/><path d="M8.4 7.8L12 4.2l3.6 3.6"/></svg>
  <span class="dr-upload__action" id="uz-r-licence-title">Add licence</span>
</div>
```

`operator-verification`'s document zone: one card per document, the verb naming the object.

## Anti-rule

```html
<div class="dr-upload dr-upload--card" role="button" tabindex="0" aria-label="Upload" style="width:341px;max-width:100%"><svg class="dr-ic dr-ic--32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 13v5a1.6 1.6 0 0 0 1.6 1.6h8.8A1.6 1.6 0 0 0 18 18v-5"/><path d="M12 4.2v10.3"/><path d="M8.4 7.8L12 4.2l3.6 3.6"/></svg><button class="dr-btn dr-btn--secondary" type="button">Upload</button></div>
```

A button nested inside the zone, labelled with the mechanism. The zone is already the control, so a second target inside it is redundant. Its verb is *Add* plus the object. To hand a file back to the user, use a [button](button.html) labelled *Download*.
