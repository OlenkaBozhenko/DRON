---
name: Language switch
slug: language-switch
group: Forms
order: 90
classes: .dr-lang · button[aria-pressed]
file: lang.css
inventory: Language switch
kit: —
---

## Anatomy

```html
<div class="dr-lang" role="group" aria-label="Language"><button type="button" aria-pressed="true">EN</button><button type="button" aria-pressed="false">UA</button></div>
```

- `.dr-lang` — The container: 32 high, radius 12, no border. Two flush halves read as one control with two states, not as two buttons that touch.
- `button[aria-pressed="true"]` — The chosen language: Signal Green behind charcoal, 9.46:1, plus the `--shadow-sm` the primary button wears.
- `button[aria-pressed="false"]` — The other: `--btn2` behind `--ink`, 11.54:1, no shadow. Hover steps to `--media`. Each half is at least 36 wide, padding 0 8, its code at the caption step 12/600 with .04em tracking.

## Variants

### Ukrainian chosen

```html
<div class="dr-lang" role="group" aria-label="Language"><button type="button" aria-pressed="false">EN</button><button type="button" aria-pressed="true">UA</button></div>
```

One shape, two states. The two fills are only 1.22:1 apart and carry the same ink, so the shadow on the chosen half is the second signal that keeps the state off hue alone (`WCAG 1.4.1`). `aria-pressed` carries it to assistive tech. Each half is 32 visible and 44 to the touch: a transparent `::after` reaches 8 above and below.

### Motion (desktop)

```html
<div data-motion-demo><div class="dr dr-desk" style="width:420px;max-width:100%;padding:16px"><div class="dr-lang" role="group" aria-label="Language"><button type="button" aria-pressed="true">EN</button><button type="button" aria-pressed="false">UA</button></div></div></div>
```

**Job 1 · connect.** Pick another item: the selected fill moves to it over `--dur-base` (.2s) on `--ease-standard`, so the eye follows the choice from one to the other. Desktop only (rev 345): every rule matches inside `.dr-desk`, so the phone keeps its instant states. Under reduced motion nothing here travels; colour changes stay.

## States

```html
<div class="dr-lang" role="group" aria-label="Language"><button type="button" aria-pressed="true">EN</button><button type="button" aria-pressed="false">UA</button></div>
```

The Anatomy specimen, EN chosen.

## When to use

The language switch sets the interface language, English (primary) or Ukrainian. It is the shell's control: the wireframe shell (`_wf-shell.js`) injects it into the top bar opposite the brand, and it shows only in the desktop preview. The shell builds it as `<div class="wf-lang" role="group" aria-label="Language">` with two `<button>`s and `aria-pressed`, and paints it with its own copy of these values: 32 high, 36 minimum width, 12/600, the same fills and shadow. No screen in `wireframes/` and no specimen in `ui/kit.html` uses the `.dr-lang` class itself; the specimens here are the shell's markup under that class. The mobile nav bar carries the back control and one name, so a second control on its right is a desktop question. It is coloured as the buttons are, primary and secondary, which makes it a second green control on the screens it stands on, about 0.3% of the frame. That is recorded rather than argued.

The labels are the two-letter codes, *EN* and *UA*. The group is named *Language*.

Sources: wireframes/_wf-shell.js § Language switch · inventory.md § 1.5 · DESIGN.md § Elevation & Depth (pressed language toggle) · CLAUDE.md § Interface Languages

## Rule

```html
<div style="display:flex;align-items:center;justify-content:space-between;width:341px;max-width:100%"><span class="dr-brand" role="img" aria-label="DRON"></span><div class="dr-lang" role="group" aria-label="Language"><button type="button" aria-pressed="true">EN</button><button type="button" aria-pressed="false">UA</button></div></div>
```

The desktop top bar: the switch at the trailing edge, opposite the brand, available from every screen.

## Anti-rule

```html
<div class="dr-rows" style="width:341px;max-width:100%"><button class="dr-field dr-field--action" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="ls-sheet-language"><span class="dr-field__label">Language</span><span class="dr-field__value">English</span><span class="dr-field__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span></button></div>
```

This block shows the right control for the phone, where the switch does not go. On mobile, language is a setting on `account-edit`, in its *Language* card: a [picker row](picker-row.html) that opens a two-option drawer. Do not put the switch in the mobile [nav bar](screen-shell.html), and do not use it for other two-way choices. A value in a form is a [radio](checkbox-radio.html#variant-radio), and a setting that applies on the tap is a [switch](switch.html).
