---
name: Text area
slug: text-area
group: Forms
order: 20
classes: .dr-field--area · --area6 · --half · .dr-field__input · .dr-field__label · .dr-field__hint
file: form.css
inventory: Form field (multiline)
kit: 2947
---

## Anatomy

```html
<div class="dr-field dr-field--area dr-field--area6" style="width:341px;max-width:100%"><label class="sr-only" for="text-area-nt">Notes for the operator</label><textarea class="dr-field__input" id="text-area-nt" placeholder="Floor, entrance code, what's inside…"></textarea></div>
```

- `.dr-field--area` — The row, stacked: `min-height` 80, padding 12 top and bottom. It stays out of the group's label grid.
- `.sr-only` — The label. On most screens the section title already asks the question, so the `<label>` is kept for assistive tech and hidden from view.
- `.dr-field__input` — The box: `--media` at radius 10 with a 12px inset, 15px type on a 1.5 leading. Typed `--ink` 13.33:1, placeholder `--slate` 5.51:1. No resize handle. Focused, a phone shows the caret only; with a mouse the box takes a 2.5px `--slate` ring 2px outside it, 6.62:1 on the page.

## Variants

### Base

```html
<div class="dr-field dr-field--area" style="width:341px;max-width:100%"><label class="dr-field__label" for="text-area-bio">Short bio</label><textarea class="dr-field__input" id="text-area-bio" placeholder="Certified operator since 2023. Fast, careful deliveries across Kyiv…"></textarea><span class="dr-field__hint">1–2 lines clients see. Your experience and the area you cover.</span></div>
```

No height modifier: the box's floor is 56 and the row's 80. A `<textarea>` defaults to `rows="2"`, so the box measures 69 and the row stands taller than both floors. Spent once, on `operator-profile-setup`'s bio, whose hint promises one or two lines. It is the one text area with a hint.

### Six lines

```html
<div class="dr-field dr-field--area dr-field--area6" style="width:341px;max-width:100%"><label class="sr-only" for="text-area-ms">Your message</label><textarea class="dr-field__input" id="text-area-ms" placeholder="Describe the issue and what you'd like to happen."></textarea></div>
```

`--area6` holds six typed lines with no scroll: the input is 159 high (6 × 15 × 1.5 + 24). The row is 183 where the label is hidden and 214 where it is drawn (`report-issue`, `operator-dispute`). It stands on 8 screens: `contact-support`, `order-setup`, `order-setup-aerial`, `order-setup-inspection`, `report-issue`, `operator-dispute`, `result-upload` and `result-upload-loading`.

### Half screen

```html
<div class="dr-field dr-field--area dr-field--half" style="width:341px;max-width:100%"><label class="sr-only" for="text-area-rv">Your review</label><textarea class="dr-field__input" id="text-area-rv" placeholder="What the operator did well, and anything to improve"></textarea></div>
```

`--half` gives the review half the 812 frame: the input 382, the row 406, because a review is the one place the product asks for prose. It stands on `rate`, `rate-aerial` and `rate-inspection`.

## States

```html
<div class="dr-field dr-field--area" style="width:341px;max-width:100%"><label class="dr-field__label" for="text-area-st">Short bio</label><textarea class="dr-field__input" id="text-area-st" placeholder="Certified operator since 2023. Fast, careful deliveries across Kyiv…"></textarea></div>
```

The base box, from `operator-profile-setup`.

## When to use

A text area collects prose the user writes in their own words: a message to support, notes for the operator, the description of an issue, a review, a reply to a dispute, handover notes. Its height is the promise. It tells the user how much to write before they start, so the modifier is chosen by what the screen is asking for, not by the space left over. It stands on 12 screens: `contact-support`, `order-setup` and its two service files, `report-issue`, `rate` and its two service files, `operator-profile-setup`, `operator-dispute`, `result-upload` and `result-upload-loading`.

The screens label it four ways. Seven files use a visually hidden `<label class="sr-only">` (`contact-support`, `order-setup`, `order-setup-aerial`, `order-setup-inspection`, `rate`, `rate-aerial`, `rate-inspection`). Two use a visible `.dr-field__label` (`report-issue`, `operator-profile-setup`). Two use `aria-label` on the `<textarea>` with no label element (`result-upload`, `result-upload-loading`). One uses a visible `.dr-field__label` and an `aria-label` on the `<textarea>` as well (`operator-dispute`).

The placeholder shows a real example of an answer, never a restatement of the label: *Floor, entrance code, what's inside…* under *Notes for the operator*. What the user types is theirs and is not rewritten.

Sources: DESIGN.md § Text areas, and the focus rule they changed · voice.md § Microcopy — rules by element type (hint) · microcopy.md § USER · inventory.md § 1.5

## Rule

```html
<div class="dr-field dr-field--area dr-field--area6" style="width:341px;max-width:100%"><label class="dr-field__label" for="text-area-ds">What happened?</label><textarea class="dr-field__input" id="text-area-ds" placeholder="Describe the issue, e.g. the field photos were blurry and missed the east half."></textarea></div>
```

`report-issue`'s description: a drawn question, six lines of room, and a placeholder that shows the kind of detail that settles a claim.

## Anti-rule

```html
<div class="dr-field dr-field--area dr-field--area6" style="width:341px;max-width:100%"><label class="dr-field__label" for="text-area-f">Phone</label><textarea class="dr-field__input" id="text-area-f"></textarea></div>
```

Six lines for a one-line value. A short typed value belongs in a [field](field.html), and a value chosen from a set in a [picker row](picker-row.html). An oversized box promises an answer the screen does not want.
