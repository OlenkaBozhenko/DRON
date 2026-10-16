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

- `.dr-actionbar` — The bar: `--bg-page` ground, 1px `--border-hairline` on top, padding 12 16 24, a column with gap 8.
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
  <button class="dr-btn dr-btn--primary dr-btn--block" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="sheet-contact">Contact operator</button>
  <a class="dr-btn dr-btn--secondary dr-btn--block" href="#">View details</a>
</footer>
```

`tracking`: the primary on top, one button per row, never two split across one row. All 38 multi-button bars in the build stack (34 with two buttons, 4 with three), and no label wraps at 320pt.

Every bar holds at most one primary. `account-photo` and `operator-account-photo` stack *Take a photo* (primary) over *Choose a picture* and *Delete* (both secondary); they carried two primaries until rev 292.

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

`chat`: the bar holds the message field and Send, the screen's one green control at 44 × 44. Built on `chat`, `chat-client`, `chat-aerial` and `chat-inspection`. This is the one bar that rides above the [onscreen keyboard](onscreen-keyboard.html) instead of leaving.

### Note only

```html
<footer class="dr-actionbar" style="width:375px;max-width:100%">
  <p class="dr-note">Payment stays held until the delivery photo uploads.</p>
</footer>
```

`result-upload-error`: a bar that holds one note and no button. Five state pages build it: `job-brief-error`, `job-offer-empty`, `order-setup-empty`, `result-upload-error` and `withdraw-error`. Their way out sits in the column above.

## States

No state of its own: the bar is a container and nothing in it takes focus but the controls it holds. Its buttons take the [button](button.html#s-states) states, and the composer's message field takes the [field](field.html#s-states) states.

## When to use

The action bar is the bottom edge of a pushed screen: where the screen's job is committed. It replaces the tab bar of the [screen shell](screen-shell.html); 87 of the 133 pages in `wireframes/` draw it. Of those, 35 hold one button, 38 a stack, 4 the chat composer, 5 a note only, and 5 the call controls of the [call surface](call-surface.html) (`call`, `call-aerial`, `call-client`, `call-inspection`, `call-support`). Every button in it is filled and full width, stacked one per row. Text-only rungs (tertiary, text) live in the nav bar, never here.

While the onscreen keyboard is up the bar takes `[hidden]` and leaves; buttons drawn behind the keys while still in the tab order would fail `WCAG 2.4.11 Focus Not Obscured`. A screen with nothing to commit ends at `</main>` and draws no bar: `earning-details`, `notifications`, `role-select` and `listings-filters`, for example. The tab roots draw no bar either; they carry the tab bar.

The primary is on top in every action bar (designer, rev 290): the screen's job first, the way out under it, in the markup as well as on screen. Drawers stack *Done* over *Cancel* the same way (rev 291); the finder keeps *Filters* over *Find*, her own call. Labels name the outcome and state a price before the tap: *Pay ₴180*, *Submit review*, *Contact support*, *Try again*.

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
  <a class="dr-btn dr-btn--primary dr-btn--block" href="#">Submit report</a>
  <button class="dr-btn dr-btn--tertiary" type="button">Cancel</button>
</footer>
```

A text-only rung in the bar. No screen builds this: every button in an action bar is filled and full width. *Cancel* belongs in the nav bar as a [tertiary button](button.html#variant-tertiary), or in the bar as a [secondary](button.html#variant-secondary) under the primary. For a choice between routes rather than a commitment, use [choice cards](choice-card.html) in the column, not a stack of buttons in the bar.
