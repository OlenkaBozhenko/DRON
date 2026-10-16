---
name: Onscreen keyboard
slug: onscreen-keyboard
group: Shell
order: 50
classes: .dr-kb · __bar · __done · __plane · __quick · __rows · __row · --mid · __key · --mod · --space · --return · --blank · --press
file: keyboard.css
inventory: Onscreen keyboard
kit: 406
---

## Anatomy

```html
<div class="dr" style="position:relative;width:260px;height:300px;background:var(--bg-page);border-radius:var(--len-22);overflow:hidden;border:1px solid var(--border-hairline)">
  <div class="dr-kb" style="animation:none">
    <div class="dr-kb__bar"><button type="button" class="dr-kb__done">Done</button></div>
    <div class="dr-kb__plane" style="height:190px" aria-hidden="true">
      <div class="dr-kb__quick" style="height:30px"><span></span><span></span><span></span></div>
      <div class="dr-kb__rows">
        <div class="dr-kb__row"><span class="dr-kb__key">q</span><span class="dr-kb__key">w</span><span class="dr-kb__key">e</span><span class="dr-kb__key">r</span><span class="dr-kb__key">t</span><span class="dr-kb__key">y</span><span class="dr-kb__key">u</span><span class="dr-kb__key">i</span><span class="dr-kb__key">o</span><span class="dr-kb__key">p</span></div>
        <div class="dr-kb__row dr-kb__row--mid"><span class="dr-kb__key">a</span><span class="dr-kb__key">s</span><span class="dr-kb__key">d</span><span class="dr-kb__key">f</span><span class="dr-kb__key">g</span><span class="dr-kb__key">h</span><span class="dr-kb__key">j</span><span class="dr-kb__key">k</span><span class="dr-kb__key">l</span></div>
        <div class="dr-kb__row"><span class="dr-kb__key dr-kb__key--mod">⇧</span><span class="dr-kb__key">z</span><span class="dr-kb__key">x</span><span class="dr-kb__key">c</span><span class="dr-kb__key">v</span><span class="dr-kb__key">b</span><span class="dr-kb__key">n</span><span class="dr-kb__key">m</span><span class="dr-kb__key dr-kb__key--mod">⌫</span></div>
        <div class="dr-kb__row"><span class="dr-kb__key dr-kb__key--mod">123</span><span class="dr-kb__key dr-kb__key--mod">☺</span><span class="dr-kb__key dr-kb__key--space"></span><span class="dr-kb__key dr-kb__key--return">return</span></div>
      </div>
    </div>
  </div>
</div>
```

- `.dr-kb__bar` — The accessory bar: 44 tall on `--bg-surface`, a 1px `--border-hairline` on top. HIG's 44pt floor.
- `.dr-kb__done` — The one real control: a `<button>`, 15/600 in `--text-primary`, 44 tall, padding 0 12, at the bar's trailing edge. A multiline field's Return inserts a newline and cannot dismiss, so Done does.
- `.dr-kb__plane` — The keys' plane: 291 in the build (216 keys + 45 QuickType + 30 home-indicator inset), `aria-hidden`, no pointer target. Scaled to fit here.
- `.dr-kb__quick` — The QuickType strip, 45 tall, drawn as three empty cells split by 18px hairlines.
- `.dr-kb__key--mod` — A modifier key (⇧, ⌫, 123, ☺) on `--bg-surface` with a 12px label, 14.37:1; letter keys are `--bg-page` on the `--bg-muted` plane with a 22px label in `--text-primary`, 15.99:1. Radius 5.

## Variants

### Letters

```html
<div class="dr" style="position:relative;width:260px;height:300px;background:var(--bg-page);border-radius:var(--len-22);overflow:hidden;border:1px solid var(--border-hairline)">
  <div class="dr-kb" style="animation:none">
    <div class="dr-kb__bar"><button type="button" class="dr-kb__done">Done</button></div>
    <div class="dr-kb__plane" style="height:190px" aria-hidden="true">
      <div class="dr-kb__quick" style="height:30px"><span></span><span></span><span></span></div>
      <div class="dr-kb__rows">
        <div class="dr-kb__row"><span class="dr-kb__key">q</span><span class="dr-kb__key">w</span><span class="dr-kb__key">e</span><span class="dr-kb__key">r</span><span class="dr-kb__key">t</span><span class="dr-kb__key">y</span><span class="dr-kb__key">u</span><span class="dr-kb__key">i</span><span class="dr-kb__key">o</span><span class="dr-kb__key">p</span></div>
        <div class="dr-kb__row dr-kb__row--mid"><span class="dr-kb__key">a</span><span class="dr-kb__key">s</span><span class="dr-kb__key">d</span><span class="dr-kb__key">f</span><span class="dr-kb__key">g</span><span class="dr-kb__key">h</span><span class="dr-kb__key">j</span><span class="dr-kb__key">k</span><span class="dr-kb__key">l</span></div>
        <div class="dr-kb__row"><span class="dr-kb__key dr-kb__key--mod">⇧</span><span class="dr-kb__key">z</span><span class="dr-kb__key">x</span><span class="dr-kb__key">c</span><span class="dr-kb__key">v</span><span class="dr-kb__key">b</span><span class="dr-kb__key">n</span><span class="dr-kb__key">m</span><span class="dr-kb__key dr-kb__key--mod">⌫</span></div>
        <div class="dr-kb__row"><span class="dr-kb__key dr-kb__key--mod">123</span><span class="dr-kb__key dr-kb__key--mod">☺</span><span class="dr-kb__key dr-kb__key--space"></span><span class="dr-kb__key dr-kb__key--return">return</span></div>
      </div>
    </div>
  </div>
</div>
```

QWERTY for every field that is not numeric. Four rows divide the 216 evenly at 45 with a 12 gutter; keys sit 6 apart and letter keys measure 31.3 × 45. The bottom row is 123, ☺, space and return, as `ui/kit.js` draws it; the middle row is inset 18 a side.

### Number pad

```html
<div class="dr" style="position:relative;width:200px;height:300px;background:var(--bg-page);border-radius:var(--len-22);overflow:hidden;border:1px solid var(--border-hairline)">
  <div class="dr-kb" style="animation:none">
    <div class="dr-kb__bar"><button type="button" class="dr-kb__done">Done</button></div>
    <div class="dr-kb__plane" style="height:190px" aria-hidden="true">
      <div class="dr-kb__quick" style="height:30px"><span></span><span></span><span></span></div>
      <div class="dr-kb__rows">
        <div class="dr-kb__row"><span class="dr-kb__key dr-kb__key--press">1</span><span class="dr-kb__key dr-kb__key--press">2</span><span class="dr-kb__key dr-kb__key--press">3</span></div>
        <div class="dr-kb__row"><span class="dr-kb__key dr-kb__key--press">4</span><span class="dr-kb__key dr-kb__key--press">5</span><span class="dr-kb__key dr-kb__key--press">6</span></div>
        <div class="dr-kb__row"><span class="dr-kb__key dr-kb__key--press">7</span><span class="dr-kb__key dr-kb__key--press">8</span><span class="dr-kb__key dr-kb__key--press">9</span></div>
        <div class="dr-kb__row"><span class="dr-kb__key dr-kb__key--blank"></span><span class="dr-kb__key dr-kb__key--press">0</span><span class="dr-kb__key dr-kb__key--blank dr-kb__key--press">⌫</span></div>
      </div>
    </div>
  </div>
</div>
```

`inputmode` of `numeric · decimal · tel`, or `type` of `number · tel`, draws the pad: 14 fields. Card number, expiry and CVC on each of `payment`, `payment-aerial` and `payment-inspection` (9); card number, expiry, CVC and phone on `account-edit` (4); the amount on `withdraw` (1). Pad keys measure 118.3 × 45. The plane keeps its 291 either way. Its ten digits and delete take `--press` and write at the caret; the empty cell does not.

## States

```html
<div class="dr" style="width:260px;max-width:100%">
  <div class="dr-kb__bar"><button type="button" class="dr-kb__done">Done</button></div>
</div>
```

The accessory bar's *Done*, the one real control; the keys are `aria-hidden`.

## When to use

The keyboard is the frame's third piece of system chrome, beside the status bar and the home indicator. It depicts what iOS draws over an app; the product does not own it. `ui/kit.js` builds it on the pages that carry a field, so no page writes its markup: 26 pages, every one that loads `ui/kit.js` and holds a text field or text area. The specimens on this page are the markup it builds. It rises only while the viewport switcher says *mobile*: 291 is quoted from a phone in portrait, a tablet is an iPad and a desktop has a hardware keyboard.

While the keys are up the [action bar](action-bar.html) takes `[hidden]` and a tab root sheds its tab bar, so no control sits behind the plane while still in the tab order (`WCAG 2.4.11`). A press that is not on a field keeps the field's focus. The exception is a composer living inside the bar, as on `chat`, which rides above the keys instead.

Colour is the product's own, no new token. The key radius `--len-5` is off the closed radius ramp and is recorded as a quotation of Apple's geometry, not a defect. The keys rise over 0.32s; reduced motion drops the rise.

Sources: ui/kit.html § Onscreen keyboard · inventory.md § 1 (Onscreen keyboard) · HIG · Onscreen keyboards

## Rule

```html
<div class="dr" style="position:relative;width:200px;height:300px;background:var(--bg-page);border-radius:var(--len-22);overflow:hidden;border:1px solid var(--border-hairline)">
  <div class="dr-kb" style="animation:none">
    <div class="dr-kb__bar"><button type="button" class="dr-kb__done">Done</button></div>
    <div class="dr-kb__plane" style="height:190px" aria-hidden="true">
      <div class="dr-kb__quick" style="height:30px"><span></span><span></span><span></span></div>
      <div class="dr-kb__rows">
        <div class="dr-kb__row"><span class="dr-kb__key dr-kb__key--press">1</span><span class="dr-kb__key dr-kb__key--press">2</span><span class="dr-kb__key dr-kb__key--press">3</span></div>
        <div class="dr-kb__row"><span class="dr-kb__key dr-kb__key--press">4</span><span class="dr-kb__key dr-kb__key--press">5</span><span class="dr-kb__key dr-kb__key--press">6</span></div>
        <div class="dr-kb__row"><span class="dr-kb__key dr-kb__key--press">7</span><span class="dr-kb__key dr-kb__key--press">8</span><span class="dr-kb__key dr-kb__key--press">9</span></div>
        <div class="dr-kb__row"><span class="dr-kb__key dr-kb__key--blank"></span><span class="dr-kb__key dr-kb__key--press">0</span><span class="dr-kb__key dr-kb__key--blank dr-kb__key--press">⌫</span></div>
      </div>
    </div>
  </div>
</div>
```

The field picks the plane: a card number or a phone draws the pad, and Done in the accessory bar is the only way down.

## Anti-rule

```html
<div class="dr" style="position:relative;width:260px;height:300px;background:var(--bg-page);border-radius:var(--len-22);overflow:hidden;border:1px solid var(--border-hairline)">
  <footer class="dr-actionbar" style="position:absolute;left:0;right:0;bottom:110px">
    <button class="dr-btn dr-btn--primary dr-btn--block" type="button">Submit review</button>
  </footer>
  <div class="dr-kb" style="animation:none">
    <div class="dr-kb__bar"><button type="button" class="dr-kb__done">Done</button></div>
    <div class="dr-kb__plane" style="height:110px" aria-hidden="true">
      <div class="dr-kb__quick" style="height:30px"><span></span><span></span><span></span></div>
    </div>
  </div>
</div>
```

An action bar left standing behind the keys. It is still in the tab order, and the moment focus reaches *Submit review* it is obscured (`WCAG 2.4.11`). Hide the [action bar](action-bar.html) while the keys are up; never dim it. Do not make the keys real controls either: only Done, and the pad's digits on a numeric field, take a press.
