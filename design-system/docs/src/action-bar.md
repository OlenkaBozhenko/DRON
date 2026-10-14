---
name: Action bar
slug: action-bar
group: Shell
order: 20
classes: .dr-actionbar · [hidden]
file: shell.css
inventory: Action bar
kit: —
---

## Anatomy

```html
<footer class="dr-actionbar" style="width:375px;max-width:100%">
  <a class="dr-btn dr-btn--primary dr-btn--block" href="#">Submit review</a>
  <a class="dr-btn dr-btn--secondary dr-btn--block" href="#">Book again</a>
</footer>
```

- `.dr-actionbar` — The bar: `--page` ground, 1px `--line` hairline on top, padding 12 16 24, a column with gap 8.
- `.dr-btn--primary` — The screen's one green control, full width: 341 at the 375 frame.
- `.dr-btn--secondary` — Every other action, on its own row, the same width.

## Variants

### One action

```html
<footer class="dr-actionbar" style="width:375px;max-width:100%">
  <button class="dr-btn dr-btn--primary dr-btn--block" type="button">Pay ₴180</button>
</footer>
```

`order-review`: the bar holds the screen's commitment alone, with the price in the label.

### Two actions, stacked

```html
<footer class="dr-actionbar" style="width:375px;max-width:100%">
  <a class="dr-btn dr-btn--secondary dr-btn--block" href="#">View details</a>
  <button class="dr-btn dr-btn--primary dr-btn--block" type="button">Contact operator</button>
</footer>
```

`tracking`: one button per row, never two split across one row. All 27 multi-button bars in the build stack, and no label wraps at 320pt.

### Composer

```html
<footer class="dr-actionbar" style="width:375px;max-width:100%">
  <div class="dr-search-row">
    <label class="dr-search">
      <span class="dr-sr">Message</span>
      <input type="text" placeholder="Message">
    </label>
    <button class="dr-btn dr-btn--primary dr-btn--icon" type="button" aria-label="Send message"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19.5V5"/><path d="M5.5 11.5L12 5l6.5 6.5"/></svg></button>
  </div>
</footer>
```

`chat`: the bar holds the message field and Send, the screen's one green control at 44 × 44. This is the one bar that rides above the [onscreen keyboard](onscreen-keyboard.html) instead of leaving.

## When to use

The action bar is the bottom edge of a pushed screen: where the screen's job is committed. It replaces the tab bar of the [screen shell](screen-shell.html); 87 pages in `wireframes/` draw it. Every button in it is filled and full width, stacked one per row. Text-only rungs (tertiary, text) live in the nav bar, never here.

While the onscreen keyboard is up the bar takes `[hidden]` and leaves; buttons drawn behind the keys while still in the tab order would fail `WCAG 2.4.11 Focus Not Obscured`. A screen with nothing to commit ends at `</main>` and draws no bar: `earning-details`, `notifications`, `role-select` and the four filter screens.

The order of two buttons is not settled. The kit's note puts the secondary above the primary, so the thumb reaches the primary first; the build leads with the primary on 21 of 27 bars. Labels name the outcome and state a price before the tap: *Pay ₴180*, *Submit review*, *Contact support*, *Try again*.

Sources: DESIGN.md § Navigation · voice.md P1, P3 · microcopy.md § Master table · inventory.md § 1 (Action bar)

## Rule

```html
<footer class="dr-actionbar" style="width:375px;max-width:100%">
  <a class="dr-btn dr-btn--primary dr-btn--block" href="#">Submit report</a>
  <a class="dr-btn dr-btn--secondary dr-btn--block" href="#">Submit without evidence</a>
</footer>
```

`report-issue`: the main job as the primary, the way out as a secondary under it, each on its own full-width row.

## Anti-rule

```html
<footer class="dr-actionbar" style="width:375px;max-width:100%">
  <p class="dr-note">You can change this later in Account → Switch role.</p>
</footer>
```

A bar that holds no button. `role-select`'s bar carried only this note until the designer removed it; a fact belongs in the column as a [message](message-block.html) or a lead line, and a screen with no action ends at `</main>`. For a choice between routes rather than a commitment, use [choice cards](choice-card.html) in the column, not a stack of buttons in the bar.
