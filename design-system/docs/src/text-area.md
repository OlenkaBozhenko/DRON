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
<div class="dr-field dr-field--area" style="width:341px;max-width:100%"><label class="dr-field__label" for="text-area-a">Short bio</label><textarea class="dr-field__input" id="text-area-a" placeholder="Certified operator since 2023. Fast, careful deliveries across Kyiv…"></textarea><span class="dr-field__hint">1–2 lines clients see. Your experience and the area you cover.</span></div>
```

- `.dr-field--area` — The row, stacked: `min-height` 80, padding 12 top and bottom. It stays out of the group's label grid.
- `.dr-field__label` — The question, on its own line above the box. Where the screen title already asks it, the label is visually hidden instead.
- `.dr-field__input` — The box: `--media` at radius 10 with a 12px inset. Typed `--ink` 13.33:1, placeholder `--slate` 5.51:1. No resize handle and no focus ring; the caret carries the focus.
- `.dr-field__hint` — The format, by example, under the box.

## Variants

### Base

```html
<div class="dr-field dr-field--area" style="width:341px;max-width:100%"><label class="dr-field__label" for="text-area-b">Short bio</label><textarea class="dr-field__input" id="text-area-b"></textarea></div>
```

Two typed lines. A `<textarea>` defaults to `rows="2"`, so the box measures 69 and the row 93, above both declared floors (56 and 80). Spent on `operator-profile-setup`'s bio, whose hint promises one or two lines.

### Six lines

```html
<div class="dr-field dr-field--area dr-field--area6" style="width:341px;max-width:100%"><label class="dr-sr" for="text-area-c">Your message</label><textarea class="dr-field__input" id="text-area-c" placeholder="Describe the issue and what you’d like to happen."></textarea></div>
```

`--area6` holds six typed lines with no scroll: the input measures 159 × 341.4. The row is 183 where the label is hidden (`contact-support`, `order-setup`) and 214 where it is drawn (`report-issue`).

### Half screen

```html
<div class="dr-field dr-field--area dr-field--half" style="width:341px;max-width:100%"><label class="dr-sr" for="text-area-d">Your review</label><textarea class="dr-field__input" id="text-area-d" placeholder="What the operator did well, and anything to improve"></textarea></div>
```

`--half` gives `rate`'s review half the frame, 382 / 406, because a review is the one place the product asks for prose.

## When to use

A text area collects prose the user writes in their own words: a message to support, notes for the operator, the description of an issue, a review. Its height is the promise. It tells the user how much to write before they start, so the modifier is chosen by what the screen is asking for, not by the space left over. It stands on `contact-support`, `order-setup`, `report-issue`, `rate` and `operator-profile-setup`.

The placeholder shows a real example of an answer, never a restatement of the label: *Floor, entrance code, what's inside…* under *Notes for the operator*. What the user types is theirs and is not rewritten.

Sources: DESIGN.md § Text areas, and the focus rule they changed · voice.md § Microcopy — rules by element type (hint) · microcopy.md § USER · inventory.md § 1.5

## Rule

```html
<div class="dr-field dr-field--area dr-field--area6" style="width:341px;max-width:100%"><label class="dr-field__label" for="text-area-e">What happened?</label><textarea class="dr-field__input" id="text-area-e" placeholder="Describe the issue — e.g. the field photos were blurry and missed the east half."></textarea></div>
```

`report-issue`'s description: a drawn question, six lines of room, and a placeholder that shows the kind of detail that settles a claim.

## Anti-rule

```html
<div class="dr-field dr-field--area dr-field--area6" style="width:341px;max-width:100%"><label class="dr-field__label" for="text-area-f">Phone</label><textarea class="dr-field__input" id="text-area-f"></textarea></div>
```

Six lines for a one-line value. A short typed value belongs in a [field](field.html), and a value chosen from a set in a [picker row](picker-row.html). An oversized box promises an answer the screen does not want.
