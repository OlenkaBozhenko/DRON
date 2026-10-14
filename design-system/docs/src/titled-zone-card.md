---
name: Titled zone card
slug: titled-zone-card
group: Surfaces
order: 90
classes: .dr .dr-zone · __title · __sub
file: rows.css
inventory: Titled zone card
kit: 774
---

## Anatomy

```html
<fieldset class="dr dr-zone" style="width:341px;max-width:100%" aria-labelledby="dz-type-title" aria-describedby="dz-type-sub">
      <p class="dr-zone__title" id="dz-type-title">Drone type</p>
      <p class="dr-zone__sub" id="dz-type-sub">Which drone does your order</p>
      <ul class="dr-picks">
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Quadcopter</span><input type="checkbox" name="kitdrone" class="sr-only"></label></li>
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Hexacopter</span><input type="checkbox" name="kitdrone" class="sr-only"></label></li>
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">FPV</span><input type="checkbox" name="kitdrone" class="sr-only"></label></li>
      </ul>
    </fieldset>
```

- `.dr-zone` — The card: `--bg-surface`, radius 16, a 16 inset on all four sides. Selected as `.dr .dr-zone` (0-2-0), because the base `.dr fieldset{ padding: 0 }` is 0-1-1 and a zone may be a fieldset.
- `.dr-zone__title` — The question the card asks, 17/600 in `--text-primary`, 14.37:1. It names the group through `aria-labelledby`.
- `.dr-zone__sub` — One line on what the answer is for, 13/400 in `--text-muted`, 5.95:1, 4 under the title, read through `aria-describedby`.
- `.dr-picks` — The control group, 20 under the subtitle. It gives up its own ground, radius and inset to the card and does not move.

## Variants

### With choices

```html
<fieldset class="dr dr-zone" style="width:341px;max-width:100%" aria-labelledby="dz-type2-title" aria-describedby="dz-type2-sub">
      <p class="dr-zone__title" id="dz-type2-title">Drone type</p>
      <p class="dr-zone__sub" id="dz-type2-sub">Which drone does your order</p>
      <ul class="dr-picks">
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Quadcopter</span><input type="checkbox" name="kitdrone2" class="sr-only"></label></li>
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Hexacopter</span><input type="checkbox" name="kitdrone2" class="sr-only"></label></li>
      </ul>
    </fieldset>
```

A real `<fieldset>` around [checkboxes](checkbox-radio.html): one question, so the element is the one the platform has for a group. `listings-filters`, `payment`, `operator-profile-setup`.

### With fields

```html
<div class="dr dr-zone" role="group" aria-labelledby="dz-personal-title" aria-describedby="dz-personal-sub" style="width:341px;max-width:100%">
        <p class="dr-zone__title" id="dz-personal-title">Personal details</p>
        <p class="dr-zone__sub" id="dz-personal-sub">What the operator needs to reach you</p>
        <div class="dr-rows dr-rows--card">
<div class="dr-field">
          <label class="dr-field__label" for="dz-name">Full name</label>
          <span class="dr-field__group"><input class="dr-field__input" id="dz-name" name="name" value="Olena B."></span>
        </div>
        <div class="dr-field">
          <label class="dr-field__label" for="dz-phone">Phone</label>
          <span class="dr-field__group"><input class="dr-field__input" id="dz-phone" name="phone" type="tel" value="+380 67 000 4417"></span>
        </div>
</div>
        </div>
```

A `role="group"` holding a [row panel](row-panel.html) of typed [fields](field.html). The panel bleeds −16 either side, so its rows keep their own 16 and its separators run 16 / 16 from the card's edges. `account-edit`.

## When to use

The titled zone card is the card a group of entered data opens with: every card in the product that holds data the user enters, sorted into categories. It stands on `listings-filters` (Location · Date & time · Price · Drone type), `account-edit` (Personal details · Payment method · Language), `payment` (Payment method) and `operator-profile-setup`. The title and subtitle are the card's own, inside its surface: a [zone label](section-heading.html) names a region of the screen and sits outside any surface.

It does not go on an entry group that is a plain list (`order-setup`, `report-issue`, `contact-support`, `rate`), on a navigation group (`account`), on an upload card that has its own title, or on the order and operator cards, which display rather than collect. What it costs is height: +66 per card for the two lines and the 20 gap. Green spent: 0px².

The title is the question as a noun (*Drone type*, *Personal details*); the subtitle says what the answer is for, in the user's words (*What the operator needs to reach you*). Titles are `<p>`, not headings: `WCAG 2.4.10` is AAA and the target is AA. A `<legend>` is not used, because it renders in the fieldset's border region and takes the 16 inset with it.

Sources: DESIGN.md § Titled zone card · § Cards · inventory.md § 1.3 (Titled zone card) · ui/kit.html Titled zone card · wireframes/account-edit.html

## Rule

```html
<fieldset class="dr dr-zone" style="width:341px;max-width:100%" aria-labelledby="dz-type3-title" aria-describedby="dz-type3-sub">
      <p class="dr-zone__title" id="dz-type3-title">Drone type</p>
      <p class="dr-zone__sub" id="dz-type3-sub">Which drone does your order</p>
      <ul class="dr-picks">
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Quadcopter</span><input type="checkbox" name="kitdrone3" class="sr-only"></label></li>
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Hexacopter</span><input type="checkbox" name="kitdrone3" class="sr-only"></label></li>
        <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">FPV</span><input type="checkbox" name="kitdrone3" class="sr-only"></label></li>
      </ul>
    </fieldset>
```

One question per card, named by its drawn title, with the controls that answer it inside.

## Anti-rule

```html
<div class="dr dr-zone" role="group" aria-labelledby="dz-done-title" style="width:341px;max-width:100%">
        <p class="dr-zone__title" id="dz-done-title">Delivery</p>
        <div class="dr-rows">
      <div class="dr-rows__row"><span class="dr-rows__key">Delivered to</span><span class="dr-rows__val">Osokorky, 14</span></div>
      <div class="dr-rows__row"><span class="dr-rows__key">Time</span><span class="dr-rows__val">10:07</span></div>
    </div>
        </div>
```

A zone card around facts the user only reads. The zone collects; a record of what happened is a plain [row panel](row-panel.html), and an order is an [order card](order-card.html).
