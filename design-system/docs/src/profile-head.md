---
name: Profile head
slug: profile-head
group: Surfaces
order: 180
classes: .dr-profile · __photo · __badges · .dr-avatar-edit · __badge · .dr-avatar-lg
file: avatar.css
inventory: Profile head; Profile photo (large); Avatar edit
kit: 1489
---

## Anatomy

```html
<div class="dr dr-profile" style="width:341px;max-width:100%">
  <a class="dr-profile__photo dr-avatar-edit" href="#" aria-label="Change profile photo">
    <span class="dr-avatar-lg"><img src="../assets/people/thumbs/person-client-olena.png" alt="" loading="lazy" decoding="async"></span>
    <span class="dr-avatar-edit__badge" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 5.2l4.3 4.3L8.4 19.9l-4.9 1.1 1.1-4.9z"/><path d="M12.9 6.8l4.3 4.3"/></svg></span>
  </a>
  <span class="dr-profile__name dr-display">Olena B.</span>
  <span class="dr-chips dr-profile__badges"><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/></svg>Verified with Diia<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span></span>
</div>
```

- `.dr-profile` — A centred column with no card: no ground, no padding, no radius. Standing on the page improves every pair: the name rises from 14.37:1 to 15.99:1.
- `.dr-avatar-edit` — The link. It wraps the picture and the badge, so the target is the whole 120 × 120 photo, not the disc, and its name is *Change profile photo*.
- `.dr-avatar-lg` — The photo, 120 × 120 at the pill radius, `object-fit: cover`, on a `--media` ground for the moment before it decodes.
- `.dr-avatar-edit__badge` — The pencil disc on the circle's edge: `--color-action` under `--on-action` at 9.46:1, cut out of the photo by a 2px ring. The ring is a border, not a shadow, so the flat rule holds. It is `aria-hidden`.
- `.dr-display` — The name, 22/700 at 15.99:1.
- `.dr-chip--claim` — What the platform has confirmed, on `--bg-accent-tint` at 14.75:1, with a shield and a trailing tick.

## Variants

### Client

```html
<div class="dr dr-profile" style="width:341px;max-width:100%">
  <a class="dr-profile__photo dr-avatar-edit" href="#" aria-label="Change profile photo">
    <span class="dr-avatar-lg"><img src="../assets/people/thumbs/person-client-olena.png" alt="" loading="lazy" decoding="async"></span>
    <span class="dr-avatar-edit__badge" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 5.2l4.3 4.3L8.4 19.9l-4.9 1.1 1.1-4.9z"/><path d="M12.9 6.8l4.3 4.3"/></svg></span>
  </a>
  <span class="dr-profile__name dr-display">Olena B.</span>
  <span class="dr-chips dr-profile__badges"><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/></svg>Verified with Diia<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span></span>
</div>
```

`account`: one credential, the identity check the client signed in with.

### Operator

```html
<div class="dr dr-profile" style="width:341px;max-width:100%">
  <a class="dr-profile__photo dr-avatar-edit" href="#" aria-label="Change profile photo">
    <span class="dr-avatar-lg"><img src="../assets/people/thumbs/person-operator-ivan.png" alt="" loading="lazy" decoding="async"></span>
    <span class="dr-avatar-edit__badge" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 5.2l4.3 4.3L8.4 19.9l-4.9 1.1 1.1-4.9z"/><path d="M12.9 6.8l4.3 4.3"/></svg></span>
  </a>
  <span class="dr-profile__name dr-display">Ivan K.</span>
  <span class="dr-chips dr-profile__badges"><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/></svg>Insured<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/></svg>CAA licence<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span></span>
</div>
```

`operator-account`: two credentials, both drawn the same way, because two chips of one kind must not be told apart by their drawing. The chips close the column. On both heads *Edit profile* is a [floating action](floating-action.html) above the tab bar, not a button in the head.

### Read-only

```html
<div class="dr dr-profile" style="width:341px;max-width:100%">
  <span class="dr-profile__photo"><span class="dr-avatar-lg"><img src="../assets/people/thumbs/operator.png" alt="Andriy M., your operator" loading="lazy" decoding="async"></span></span>
  <h2 class="dr-profile__name dr-display">Andriy M.</h2>
  <span class="dr-chips dr-profile__badges"><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/><path d="M9 11.5l2.2 2.2L15 10"/></svg>Verified by DRON<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/></svg>Insured<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span></span>
</div>
```

Someone else's profile, read and not owned (designer, rev 312: *«шапка профілю може бути без кнопки редагувати якщо це перегляд профілю»*). Drawn on `design-system/examples/operator-profile.html`, the client reading the operator who is coming. The photo is a `<span>`, not a link: no edit disc, no focus, and its `alt` names the person, because there the photo is the proof (`RJ-C1`). The name is the screen's heading. Edit is only ever on your own head.

## States

```html
<div class="dr dr-profile" style="width:160px;max-width:100%">
  <a class="dr-profile__photo dr-avatar-edit" href="#" aria-label="Change profile photo">
    <span class="dr-avatar-lg"><img src="../assets/people/thumbs/person-client-olena.png" alt="" loading="lazy" decoding="async"></span>
    <span class="dr-avatar-edit__badge" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 5.2l4.3 4.3L8.4 19.9l-4.9 1.1 1.1-4.9z"/><path d="M12.9 6.8l4.3 4.3"/></svg></span>
  </a>
</div>
```

The photo link alone, from `account`. The name and the credential chips take no state.

## When to use

The profile head is the top of `account` and `operator-account`: the face, the name, and what the platform has confirmed. It is a component of its own and not a modifier of the [operator card](operator-card.html). That card is a row in somebody else's list, while this column is the subject of the frame. The two heads are the same element with the same classes. Only the credentials differ. The credential sits on the head, before any tap. That is `RJ-C1`, the highest single drop-off in the CJM.

The photo is the control, and the green disc on it says *this can be changed*. The disc is not the screen's only green: the floating *Edit profile* is a solid green primary on both `account` and `operator-account`. On the head the disc measures 44 with a 22px pencil, larger than the component's base 20 × 20. The `<img>` takes `alt=""` here, because the name is written beside it. On `account-photo`, where the picture is the content, it carries real alt text (`WCAG 1.1.1`). The served thumb is 128 × 128 against the 120px box, so a 2× screen upscales it 1.875×. The imagery rule asks for ~240 × 240. This is recorded and left to the designer.

The name is the person's given name and initial: *Olena B.*, *Ivan K.* Credentials state a fact the platform checked: *Verified with Diia*, *Insured*, *CAA licence*. The name also carries `.dr-profile__name`, as on the screens. It has no rule of its own; the type comes from `.dr-display`.

Sources: DESIGN.md § Profile head · § Avatar edit · § Profile photo, large · inventory.md § 1 Profile head, Profile photo (large), Avatar edit · components/avatar.css · ui/kit.html § Profile head

## Rule

```html
<div class="dr dr-profile" style="width:341px;max-width:100%">
  <a class="dr-profile__photo dr-avatar-edit" href="#" aria-label="Change profile photo">
    <span class="dr-avatar-lg"><img src="../assets/people/thumbs/person-operator-ivan.png" alt="" loading="lazy" decoding="async"></span>
    <span class="dr-avatar-edit__badge" aria-hidden="true"><svg class="dr-ic dr-ic--12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 5.2l4.3 4.3L8.4 19.9l-4.9 1.1 1.1-4.9z"/><path d="M12.9 6.8l4.3 4.3"/></svg></span>
  </a>
  <span class="dr-profile__name dr-display">Ivan K.</span>
  <span class="dr-chips dr-profile__badges"><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/></svg>Insured<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span><span class="dr-chip dr-chip--claim"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 2.5v5.5c0 4-3 7.2-7 8.9-4-1.7-7-4.9-7-8.9V5.5z"/></svg>CAA licence<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span></span>
</div>
```

The head at the top of the person's own account: one face, one name, and the credentials the platform confirmed, all centred on the page with no card.

## Anti-rule

When the person is someone *else*, such as the operator a client is waiting for on `tracking` or `order-confirmed`, use the [operator card](operator-card.html). It is a row in a list, carries its own credentials, and has no edit affordance. The head is for one person who is the subject of the screen. Do not wrap it in a card, and do not put the pencil disc on a photo the viewer cannot change.
