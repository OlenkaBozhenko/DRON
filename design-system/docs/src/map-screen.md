---
name: Results on the map
slug: map-screen
group: Surfaces
order: 130
classes: .dr-mapscreen · .dr-mapview · .dr-sheet--dock · .dr-offers · .dr-offer · __body · __name · __meta · __price
file: card.css
inventory: Results on the map
kit: 1170
---

## Anatomy

```html
<div class="dr" style="width:375px;max-width:100%;border-radius:var(--len-22);overflow:hidden">
  <main class="dr-mapscreen" style="height:500px">
    <div class="dr-mapview" style="background-image:url(../assets/map/live-map.jpg)" role="img" aria-label="Map · available near you"></div>
    <section class="dr-sheet dr-sheet--dock">
      <span class="dr-sheet__grip" aria-hidden="true"></span>
      <p class="dr-sheet__title">Parcel size</p>
      <fieldset class="dr-offers">
        <label class="dr-offer">
          <input type="radio" name="docoffer" class="sr-only" checked>
          <span class="dr-well"><img src="../assets/drones/thumbs/drone-02.png" alt="" loading="lazy" decoding="async"></span>
          <span class="dr-offer__body">
            <span class="dr-offer__name">Up to 2 kg</span>
            <span class="dr-offer__meta">4 available · arrives in 6 min</span>
          </span>
          <span class="dr-offer__price">₴180</span>
        </label>
        <label class="dr-offer">
          <input type="radio" name="docoffer" class="sr-only">
          <span class="dr-well"><img src="../assets/drones/thumbs/drone-01.png" alt="" loading="lazy" decoding="async"></span>
          <span class="dr-offer__body">
            <span class="dr-offer__name">Up to 5 kg</span>
            <span class="dr-offer__meta">2 available · arrives in 9 min</span>
          </span>
          <span class="dr-offer__price">₴240</span>
        </label>
      </fieldset>
      <a class="dr-btn dr-btn--primary dr-btn--block" href="#">Order</a>
    </section>
  </main>
</div>
```

- `.dr-mapview` — The live map, a background image on a `<div>` with `role="img"` and its own label, so a screen reader meets one object. It fills the column under the nav bar, 373 × 375.2 at the 375 frame.
- `.dr-sheet--dock` — The sheet that does not float. It has no scrim, no `aria-modal` and no exit, because there is nothing behind it to go back to. It keeps the grip and `--shadow-raised`. Measured 340.8 tall.
- `.dr-offers` — A fieldset of radios: one tab stop, with the arrow keys moving inside it.
- `.dr-offer` — A radio label: 56 × 44 well, name 17/600, meta 13/400, price. It measures 341 × 60 at radius 12, with rows 8 apart. An unchosen row is a `--card` card: name and price 14.37:1, meta 5.95:1.
- `.dr-offer__price` — 17/600 with tabular figures. It is the size of a title, because the price is what is being chosen.
- `.dr-btn--primary` — *Order*, 341 × 44.

## Variants

### Chosen and unchosen

```html
<fieldset class="dr-offers" style="width:341px;max-width:100%">
  <label class="dr-offer">
    <input type="radio" name="docpair" class="sr-only" checked>
    <span class="dr-well"><img src="../assets/drones/thumbs/drone-02.png" alt="" loading="lazy" decoding="async"></span>
    <span class="dr-offer__body">
      <span class="dr-offer__name">Up to 2 kg</span>
      <span class="dr-offer__meta">4 available · arrives in 6 min</span>
    </span>
    <span class="dr-offer__price">₴180</span>
  </label>
  <label class="dr-offer">
    <input type="radio" name="docpair" class="sr-only">
    <span class="dr-well"><img src="../assets/drones/thumbs/drone-01.png" alt="" loading="lazy" decoding="async"></span>
    <span class="dr-offer__body">
      <span class="dr-offer__name">Up to 10 kg</span>
      <span class="dr-offer__meta">1 available · arrives in 14 min</span>
    </span>
    <span class="dr-offer__price">₴320</span>
  </label>
</fieldset>
```

The chosen row is solid `--color-action`, and name, meta and price all move to `--on-action` at 9.46:1. The meta moves too, because `--slate` on green is 3.91:1. Choosing a row moves no box. Rows stay 341 × 60.

### Photo and video

```html
<fieldset class="dr-offers" style="width:341px;max-width:100%">
  <label class="dr-offer">
    <input type="radio" name="docaerial" class="sr-only" checked>
    <span class="dr-well"><img src="../assets/drones/thumbs/drone-flight-camera.png" alt="" loading="lazy" decoding="async"></span>
    <span class="dr-offer__body">
      <span class="dr-offer__name">Photo</span>
      <span class="dr-offer__meta">3 available · arrives in 20 min</span>
    </span>
    <span class="dr-offer__price">₴640</span>
  </label>
  <label class="dr-offer">
    <input type="radio" name="docaerial" class="sr-only">
    <span class="dr-well"><img src="../assets/drones/thumbs/drone-flight-camera.png" alt="" loading="lazy" decoding="async"></span>
    <span class="dr-offer__body">
      <span class="dr-offer__name">Photo &amp; video</span>
      <span class="dr-offer__meta">2 available · arrives in 25 min</span>
    </span>
    <span class="dr-offer__price">₴800</span>
  </label>
</fieldset>
```

One file per service, with the same parts. The sheet's title names what is being chosen: *Parcel size* for delivery, *What you get* for photo and video, *Parts to inspect* for inspection.

## When to use

This is what *Find* on the [finder](finder.html) opens: the live map, with a sheet docked to the bottom carrying the offers to choose between. It stands on `listings-map`, `listings-map-aerial` and `listings-map-inspection`. An offer is a radio wearing a card. The whole row is the target, and the checked state belongs to the control, not to an attribute a script has to keep true.

The chosen row's green has three recorded departures, all the designer's decision. The fill is 1.52:1 against the grey rows, under the 3:1 of `WCAG 1.4.11`; the radio keeps the state programmatic (`4.1.2`). There is no checkmark, which `HIG · Lists and tables` would draw. And the screen has two green controls: by pixel *Order* is 4.77%, the chosen row 5.94–6.01%, and the frame 10.71–10.78% against the ~5% ceiling. The `--ink` focus ring stands outside the green at 15.99:1 on the drawer.

Copy is a fact per row: the size or deliverable in the name, availability and arrival time in the meta (*4 available · arrives in 6 min*), and the price on the row, before the tap (voice P3). The action is *Order*.

Sources: DESIGN.md § The search home (Results on the map, A choice row) · inventory.md § 1 Results on the map · microcopy.md § listings-map · voice.md P3 · ui/kit.html § The map screen

## Rule

```html
<section class="dr-sheet dr-sheet--dock" style="width:375px;max-width:100%">
  <span class="dr-sheet__grip" aria-hidden="true"></span>
  <p class="dr-sheet__title">Parcel size</p>
  <fieldset class="dr-offers">
    <label class="dr-offer">
      <input type="radio" name="docrule" class="sr-only" checked>
      <span class="dr-well"><img src="../assets/drones/thumbs/drone-02.png" alt="" loading="lazy" decoding="async"></span>
      <span class="dr-offer__body">
        <span class="dr-offer__name">Up to 2 kg</span>
        <span class="dr-offer__meta">4 available · arrives in 6 min</span>
      </span>
      <span class="dr-offer__price">₴180</span>
    </label>
    <label class="dr-offer">
      <input type="radio" name="docrule" class="sr-only">
      <span class="dr-well"><img src="../assets/drones/thumbs/drone-01.png" alt="" loading="lazy" decoding="async"></span>
      <span class="dr-offer__body">
        <span class="dr-offer__name">Up to 5 kg</span>
        <span class="dr-offer__meta">2 available · arrives in 9 min</span>
      </span>
      <span class="dr-offer__price">₴240</span>
    </label>
  </fieldset>
  <a class="dr-btn dr-btn--primary dr-btn--block" href="#">Order</a>
</section>
```

One choice from a few offers, with the price on every row and one *Order* under them. The first offer is checked when the screen opens.

## Anti-rule

```html
<a class="dr dr-choice" href="#" style="width:341px;max-width:100%">
  <span class="dr-well"><img src="../assets/drones/thumbs/drone-02.png" alt=""></span>
  <span class="dr-choice__body"><span class="dr-choice__title">Up to 2 kg</span></span>
  <span class="dr-choice__chev"><svg class="dr-ic dr-ic--16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></span>
</a>
```

An offer drawn as a link that leaves the screen. A value the user compares and then confirms is a radio row in `.dr-offers`. A [choice card](choice-card.html) is for navigation, a fork between routes. To pick a value from a field row without a map, use the [sheet](sheet.html#variant-picker) picker.
