---
name: Cover card
slug: cover-card
group: Surfaces
order: 50
classes: .dr-card--cover · .dr-well--photo · .dr-listing__foot · __body · __name · __desc · .dr-btn--onphoto
file: card.css
inventory: Cover card
kit: 949
---

## Anatomy

```html
<article class="dr-card dr-card--cover" style="width:341px;max-width:100%">
  <div class="dr-well dr-well--photo" style="height:180px;">
    <img src="../assets/scenes/thumbs/aerial-rafting-boulders.jpg" alt="A grey raft with a crew in red helmets and life jackets running a rapid between dark boulders, white water breaking around it, shot from above." loading="lazy" decoding="async">
    <button class="dr-btn dr-btn--icon dr-btn--onphoto" type="button" aria-label="Play video &#183; 0:38"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.5 6.8 18 12 9.5 17.2Z"/></svg></button>
  </div>
  <div class="dr-listing__foot">
    <span class="dr-listing__body">
      <span class="dr-listing__name">Video</span>
      <span class="dr-listing__desc">0:38 &#183; 46 MB</span>
    </span>
    <button class="dr-btn dr-btn--icon" type="button" aria-label="Download video"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.8v10.4"/><path d="M7.6 9.8 12 14.2 16.4 9.8"/><path d="M5 19.2h14"/></svg></button>
  </div>
</article>
```

- `.dr-card--cover` — The card with no inset: padding 0, gap 0, `overflow:hidden`, clipped by its own radius 16. No shadow.
- `.dr-well--photo` — The cover, 180 tall, flush to three edges. The media's 13 radius is switched off, so one corner carries one radius.
- `.dr-btn--onphoto` — The play button on the photograph, a 44 × 44 grey disc centred on the cover, its name in `aria-label`; see [Circular action](circular-action.html).
- `.dr-listing__foot` — The file's line, 68 tall at padding 12 / 16, gap 12.
- `.dr-listing__name` — The file's kind, *Video*, 15/600 in `--text-primary`, 14.37:1. The size and length under it are 13/400 in `--text-muted`, 5.95:1.
- `.dr-listing__foot .dr-btn--icon` — The file's action, *Download video*, a grey 44 × 44 icon button with its name in `aria-label`.

## Variants

### Video

```html
<article class="dr-card dr-card--cover" style="width:341px;max-width:100%">
  <div class="dr-well dr-well--photo" style="height:180px;">
    <img src="../assets/scenes/thumbs/aerial-rafting-boulders.jpg" alt="A grey raft with a crew in red helmets and life jackets running a rapid between dark boulders, white water breaking around it, shot from above." loading="lazy" decoding="async">
    <button class="dr-btn dr-btn--icon dr-btn--onphoto" type="button" aria-label="Play video &#183; 0:38"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.5 6.8 18 12 9.5 17.2Z"/></svg></button>
  </div>
  <div class="dr-listing__foot">
    <span class="dr-listing__body">
      <span class="dr-listing__name">Video</span>
      <span class="dr-listing__desc">0:38 &#183; 46 MB</span>
    </span>
    <button class="dr-btn dr-btn--icon" type="button" aria-label="Download video"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.8v10.4"/><path d="M7.6 9.8 12 14.2 16.4 9.8"/><path d="M5 19.2h14"/></svg></button>
  </div>
</article>
```

The only shape in use: the video card on `order-details-aerial`, cover 180 plus line 68, 248 tall in all.

## When to use

The cover card holds one file of an aerial delivery where the picture is the content: one user, the video card on `order-details-aerial`. A cover is never inset, and that is the imagery rule winning where it meets the inset rule: a photograph *is* the surface, and a picture floated inside a padded card is the sticker the rule forbids. The padding moves onto the line below, 12 vertical against 16 horizontal, because that line already carries a 44px control and its height is set by the target.

Both actions are icon buttons, not pills, 44 × 44 with an `aria-label` each. `WCAG 2.5.3 Label in Name` stops applying rather than failing, since there is no visible label to contain. They are grey, not green: *Book again* is that screen's one green control. Two files in one zone are told apart by what they show, not by a badge, and the `alt` describes the frame and only the frame. The action word is still *Download*, spoken instead of printed.

Sources: DESIGN.md § Cards (`.dr-card--cover`) · § Imagery · inventory.md § 1.3 (Cover card) · voice.md Vocabulary · ui/kit.html Cover card

## Rule

```html
<article class="dr-card dr-card--cover" style="width:341px;max-width:100%">
  <div class="dr-well dr-well--photo" style="height:180px;">
    <img src="../assets/scenes/thumbs/aerial-rafting-boulders.jpg" alt="A grey raft with a crew in red helmets and life jackets running a rapid between dark boulders, white water breaking around it, shot from above." loading="lazy" decoding="async">
    <button class="dr-btn dr-btn--icon dr-btn--onphoto" type="button" aria-label="Play video &#183; 0:38"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.5 6.8 18 12 9.5 17.2Z"/></svg></button>
  </div>
  <div class="dr-listing__foot">
    <span class="dr-listing__body">
      <span class="dr-listing__name">Video</span>
      <span class="dr-listing__desc">0:38 &#183; 46 MB</span>
    </span>
    <button class="dr-btn dr-btn--icon" type="button" aria-label="Download video"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.8v10.4"/><path d="M7.6 9.8 12 14.2 16.4 9.8"/><path d="M5 19.2h14"/></svg></button>
  </div>
</article>
```

A photograph that is the deliverable runs to the card's edges, and the file's facts and action sit on the line beneath it.

## Anti-rule

```html
<article class="dr dr-card" style="width:341px;max-width:100%">
        <div class="dr-well dr-well--photo" style="height:180px;width:100%">
          <img src="../assets/scenes/thumbs/aerial-rafting-boulders.jpg" alt="A grey raft with a crew in red helmets and life jackets running a rapid between dark boulders, white water breaking around it, shot from above." loading="lazy" decoding="async">
        </div>
        <div class="dr-listing__foot">
          <span class="dr-listing__body">
            <span class="dr-listing__name">Video</span>
            <span class="dr-listing__desc">0:38 &#183; 46 MB</span>
          </span>
        </div>
      </article>
```

A photograph inset inside a padded card: a sticker on a card, with two radii on nested corners. Take the padding off with `--cover`. A transparent drone cutout is the opposite case and sits in a plain [media well](well.html) on an ordinary [card](card.html).
