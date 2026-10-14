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
<fieldset class="dr dr-zone" style="width:341px;max-width:100%" aria-labelledby="dza-type-title" aria-describedby="dza-type-sub">
  <p class="dr-zone__title" id="dza-type-title">Drone type</p>
  <p class="dr-zone__sub" id="dza-type-sub">Which drone does your order</p>
  <ul class="dr-picks">
    <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Quadcopter</span><input type="checkbox" name="dza-drone-type" value="quadcopter" class="sr-only"></label></li>
    <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Hexacopter</span><input type="checkbox" name="dza-drone-type" value="hexacopter" class="sr-only"></label></li>
    <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">FPV</span><input type="checkbox" name="dza-drone-type" value="fpv" class="sr-only"></label></li>
    <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Fixed-wing</span><input type="checkbox" name="dza-drone-type" value="fixed-wing" class="sr-only"></label></li>
  </ul>
</fieldset>
```

- `.dr-zone` — The card: `--bg-surface`, radius 16, a 16 inset on all four sides. Selected as `.dr .dr-zone` (0-2-0), because the base `.dr fieldset{ padding: 0 }` is 0-1-1 and a zone may be a fieldset.
- `.dr-zone__title` — The question the card asks, 17/600 in `--text-primary`, 14.37:1. It names the group through `aria-labelledby`.
- `.dr-zone__sub` — One line on what the answer is for, 13/400 in `--text-muted`, 5.95:1, 4 under the title, read through `aria-describedby`.
- `.dr-picks` — The control group, 20 under the subtitle (16 under 390px). It gives up its own ground, radius and inset to the card and does not move.

## Variants

### With choices

```html
<fieldset class="dr dr-zone" style="width:341px;max-width:100%" aria-labelledby="dzb-type-title" aria-describedby="dzb-type-sub">
  <p class="dr-zone__title" id="dzb-type-title">Drone type</p>
  <p class="dr-zone__sub" id="dzb-type-sub">Which drone does your order</p>
  <ul class="dr-picks">
    <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Quadcopter</span><input type="checkbox" name="dzb-drone-type" value="quadcopter" class="sr-only"></label></li>
    <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Hexacopter</span><input type="checkbox" name="dzb-drone-type" value="hexacopter" class="sr-only"></label></li>
    <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">FPV</span><input type="checkbox" name="dzb-drone-type" value="fpv" class="sr-only"></label></li>
    <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Fixed-wing</span><input type="checkbox" name="dzb-drone-type" value="fixed-wing" class="sr-only"></label></li>
  </ul>
</fieldset>
```

A real `<fieldset>` around [checkboxes](checkbox-radio.html): one question, so the element is the one the platform has for a group. The specimen is *Drone type* in the filters drawer of the four `listings` files. `operator-profile-setup` (*Service specializations*) and `order-setup-inspection` (*Subject*) build the same shape. The three `payment` files also use a `<fieldset>`, around a row panel of card fields (*Card*).

### With fields

```html
<div class="dr dr-zone" role="group" aria-labelledby="dz-acc-personal-title" aria-describedby="dz-acc-personal-sub" style="width:341px;max-width:100%">
  <p class="dr-zone__title" id="dz-acc-personal-title">Personal details</p>
  <p class="dr-zone__sub" id="dz-acc-personal-sub">What the operator needs to reach you</p>
  <div class="dr-rows dr-rows--card">
    <div class="dr-field">
      <label class="dr-field__label" for="dz-name">Full name</label>
      <span class="dr-field__group"><input class="dr-field__input" id="dz-name" name="name" value="Olena B."></span>
    </div>
    <div class="dr-field">
      <label class="dr-field__label" for="dz-phone">Phone</label>
      <span class="dr-field__group"><input class="dr-field__input" id="dz-phone" name="phone" type="tel" value="+380 67 000 4417"></span>
    </div>
    <div class="dr-field">
      <label class="dr-field__label" for="dz-addr">Saved address</label>
      <span class="dr-field__group"><input class="dr-field__input" id="dz-addr" name="addr" value="Podil, 21"></span>
    </div>
  </div>
</div>
```

A `role="group"` holding a [row panel](row-panel.html) of typed [fields](field.html). The panel bleeds −16 either side, so its rows keep their own 16 and its separators run 16 / 16 from the card's edges. `account-edit`, where all five zones are built this way: *Personal details*, *Payment method*, *Language*, *Appearance* and *Notifications*.

## When to use

The titled zone card is the card a group of entered data opens with: every card in the product that holds data the user enters, sorted into categories. It stands on 10 files, 14 cards: the filters drawer on the four `listings` files (*Drone type*), `account-edit` (*Personal details* · *Payment method* · *Language* · *Appearance* · *Notifications*), `payment`, `payment-aerial` and `payment-inspection` (*Card*), `order-setup-inspection` (*Subject*) and `operator-profile-setup` (*Service specializations*). 13 of the 14 cards carry a subtitle; the one on `operator-profile-setup` has a title only and no `aria-describedby`. The title and subtitle are the card's own, inside its surface: a [zone label](section-heading.html) names a region of the screen and sits outside any surface.

It does not go on an entry group that is a plain list (`order-setup`, `report-issue`, `contact-support`, `rate`; `order-setup-inspection`'s *Subject* is the exception), on a navigation group (`account`), on an upload card that has its own title, or on the order and operator cards, which display rather than collect. What it costs is height: +66 per card for the two lines and the 20 gap. Green spent: 0px².

The title is the question as a noun (*Drone type*, *Personal details*); the subtitle says what the answer is for, in the user's words (*What the operator needs to reach you*). Titles are `<p>`, not headings: `WCAG 2.4.10` is AAA and the target is AA. A `<legend>` is not used, because it renders in the fieldset's border region and takes the 16 inset with it.

Sources: DESIGN.md § Titled zone card · § Cards · inventory.md § 1.3 (Titled zone card) · ui/kit.html Titled zone card · wireframes/account-edit.html

## Rule

```html
<fieldset class="dr dr-zone" style="width:341px;max-width:100%" aria-labelledby="dzc-type-title" aria-describedby="dzc-type-sub">
  <p class="dr-zone__title" id="dzc-type-title">Drone type</p>
  <p class="dr-zone__sub" id="dzc-type-sub">Which drone does your order</p>
  <ul class="dr-picks">
    <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Quadcopter</span><input type="checkbox" name="dzc-drone-type" value="quadcopter" class="sr-only"></label></li>
    <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Hexacopter</span><input type="checkbox" name="dzc-drone-type" value="hexacopter" class="sr-only"></label></li>
    <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">FPV</span><input type="checkbox" name="dzc-drone-type" value="fpv" class="sr-only"></label></li>
    <li><label class="dr-pick"><span class="dr-box dr-box--check" aria-hidden="true"><svg class="dr-ic dr-ic--14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 6"/></svg></span><span class="dr-pick__label">Fixed-wing</span><input type="checkbox" name="dzc-drone-type" value="fixed-wing" class="sr-only"></label></li>
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
