---
name: Price range
slug: price-range
group: Forms
order: 210
classes: .dr-range · __title · __sub · __band · __hist · __bar · --in · __rail · __fill · __input · __fields · __field · __cap · __val
file: form.css
inventory: Range
kit: 1300
---

## Anatomy

```html
<fieldset class="dr-range" aria-labelledby="a-price-title" aria-describedby="a-price-sub" style="width:341px;max-width:100%">
  <p class="dr-range__title" id="a-price-title">Price range</p>
  <p class="dr-range__sub" id="a-price-sub">Service price, all fees included</p>
  <div class="dr-range__band">
    <div class="dr-range__hist" role="img" aria-label="How services are priced: most cost ₴200 – ₴350">
    <i class="dr-range__bar" style="height:6%"></i><i class="dr-range__bar" style="height:8%"></i><i class="dr-range__bar" style="height:10%"></i><i class="dr-range__bar" style="height:14%"></i>
    <i class="dr-range__bar" style="height:22%"></i><i class="dr-range__bar" style="height:30%"></i><i class="dr-range__bar" style="height:44%"></i><i class="dr-range__bar" style="height:58%"></i>
    <i class="dr-range__bar" style="height:72%"></i><i class="dr-range__bar" style="height:86%"></i><i class="dr-range__bar" style="height:100%"></i><i class="dr-range__bar" style="height:92%"></i>
    <i class="dr-range__bar" style="height:78%"></i><i class="dr-range__bar" style="height:70%"></i><i class="dr-range__bar" style="height:62%"></i><i class="dr-range__bar" style="height:66%"></i>
    <i class="dr-range__bar" style="height:54%"></i><i class="dr-range__bar" style="height:46%"></i><i class="dr-range__bar" style="height:40%"></i><i class="dr-range__bar" style="height:44%"></i>
    <i class="dr-range__bar" style="height:38%"></i><i class="dr-range__bar" style="height:32%"></i><i class="dr-range__bar" style="height:36%"></i><i class="dr-range__bar" style="height:28%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:30%"></i><i class="dr-range__bar dr-range__bar--in" style="height:24%"></i><i class="dr-range__bar dr-range__bar--in" style="height:20%"></i><i class="dr-range__bar dr-range__bar--in" style="height:22%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:16%"></i><i class="dr-range__bar dr-range__bar--in" style="height:14%"></i><i class="dr-range__bar dr-range__bar--in" style="height:12%"></i><i class="dr-range__bar dr-range__bar--in" style="height:14%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:10%"></i><i class="dr-range__bar dr-range__bar--in" style="height:8%"></i><i class="dr-range__bar dr-range__bar--in" style="height:9%"></i><i class="dr-range__bar dr-range__bar--in" style="height:7%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:6%"></i><i class="dr-range__bar dr-range__bar--in" style="height:8%"></i><i class="dr-range__bar dr-range__bar--in" style="height:12%"></i><i class="dr-range__bar dr-range__bar--in" style="height:26%"></i>
    </div>
    <div class="dr-range__rail">
      <span class="dr-range__fill" style="left:60%;right:0%"></span>
      <input class="dr-range__input" type="range" id="a-pmin" min="0" max="1000" step="50" value="600" aria-label="Minimum price" aria-valuetext="₴600">
      <input class="dr-range__input" type="range" id="a-pmax" min="0" max="1000" step="50" value="1000" aria-label="Maximum price" aria-valuetext="₴1,000+">
    </div>
  </div>
  <div class="dr-range__fields">
    <p class="dr-range__field">
      <span class="dr-range__cap">Minimum</span>
      <output class="dr-range__val" for="a-pmin">₴600</output>
    </p>
    <p class="dr-range__field">
      <span class="dr-range__cap">Maximum</span>
      <output class="dr-range__val" for="a-pmax">₴1,000+</output>
    </p>
  </div>
</fieldset>
```

- `.dr-range__title` — The zone's title, *Price range*, 17 title on a 23.8 line. `.dr-range__sub` under it says what the price includes, 13 body-sm in slate.
- `.dr-range__hist` — Forty bars, one per ₴25 slice, 48 tall with 2 between them, standing on the rail: a picture of what services actually cost. One `role="img"` with a sentence for its label.
- `.dr-range__bar--in` — A bar inside the chosen band: charcoal `--text-primary`, 14.37:1 on the card. Out of band the bars stay `--bg-muted` (#D6D2C9), 1.25:1.
- `.dr-range__fill` — The chosen span on the 4px rail, in charcoal.
- `.dr-range__input` — Two native `<input type="range">` on one rail: 24px solid charcoal thumbs in a 44px lane. Each has its own label and an `aria-valuetext` that says the money.
- `.dr-range__val` — The printed values, `<output>` elements tied to their slider by `for`, under *Minimum* and *Maximum*: 15 medium in a 44-tall well with a 10 radius.

The screens write no `--in` class and no fill position into the markup. The page's script paints both from the two values at load and on every move; the specimens here carry the result.

## Variants

### Upper band

```html
<fieldset class="dr-range" aria-labelledby="b-price-title" aria-describedby="b-price-sub" style="width:341px;max-width:100%">
  <p class="dr-range__title" id="b-price-title">Price range</p>
  <p class="dr-range__sub" id="b-price-sub">Service price, all fees included</p>
  <div class="dr-range__band">
    <div class="dr-range__hist" role="img" aria-label="How services are priced: most cost ₴200 – ₴350">
    <i class="dr-range__bar" style="height:6%"></i><i class="dr-range__bar" style="height:8%"></i><i class="dr-range__bar" style="height:10%"></i><i class="dr-range__bar" style="height:14%"></i>
    <i class="dr-range__bar" style="height:22%"></i><i class="dr-range__bar" style="height:30%"></i><i class="dr-range__bar" style="height:44%"></i><i class="dr-range__bar" style="height:58%"></i>
    <i class="dr-range__bar" style="height:72%"></i><i class="dr-range__bar" style="height:86%"></i><i class="dr-range__bar" style="height:100%"></i><i class="dr-range__bar" style="height:92%"></i>
    <i class="dr-range__bar" style="height:78%"></i><i class="dr-range__bar" style="height:70%"></i><i class="dr-range__bar" style="height:62%"></i><i class="dr-range__bar" style="height:66%"></i>
    <i class="dr-range__bar" style="height:54%"></i><i class="dr-range__bar" style="height:46%"></i><i class="dr-range__bar" style="height:40%"></i><i class="dr-range__bar" style="height:44%"></i>
    <i class="dr-range__bar" style="height:38%"></i><i class="dr-range__bar" style="height:32%"></i><i class="dr-range__bar" style="height:36%"></i><i class="dr-range__bar" style="height:28%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:30%"></i><i class="dr-range__bar dr-range__bar--in" style="height:24%"></i><i class="dr-range__bar dr-range__bar--in" style="height:20%"></i><i class="dr-range__bar dr-range__bar--in" style="height:22%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:16%"></i><i class="dr-range__bar dr-range__bar--in" style="height:14%"></i><i class="dr-range__bar dr-range__bar--in" style="height:12%"></i><i class="dr-range__bar dr-range__bar--in" style="height:14%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:10%"></i><i class="dr-range__bar dr-range__bar--in" style="height:8%"></i><i class="dr-range__bar dr-range__bar--in" style="height:9%"></i><i class="dr-range__bar dr-range__bar--in" style="height:7%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:6%"></i><i class="dr-range__bar dr-range__bar--in" style="height:8%"></i><i class="dr-range__bar dr-range__bar--in" style="height:12%"></i><i class="dr-range__bar dr-range__bar--in" style="height:26%"></i>
    </div>
    <div class="dr-range__rail">
      <span class="dr-range__fill" style="left:60%;right:0%"></span>
      <input class="dr-range__input" type="range" id="b-pmin" min="0" max="1000" step="50" value="600" aria-label="Minimum price" aria-valuetext="₴600">
      <input class="dr-range__input" type="range" id="b-pmax" min="0" max="1000" step="50" value="1000" aria-label="Maximum price" aria-valuetext="₴1,000+">
    </div>
  </div>
  <div class="dr-range__fields">
    <p class="dr-range__field">
      <span class="dr-range__cap">Minimum</span>
      <output class="dr-range__val" for="b-pmin">₴600</output>
    </p>
    <p class="dr-range__field">
      <span class="dr-range__cap">Maximum</span>
      <output class="dr-range__val" for="b-pmax">₴1,000+</output>
    </p>
  </div>
</fieldset>
```

₴600 to ₴1,000+: sixteen of forty bars carry `--in`. The maximum reads *₴1,000+*, not *1000*, to a screen reader as on screen. This is the band `listings-filters` and `listings-error` open on.

### Full band

```html
<fieldset class="dr-range" aria-labelledby="c-price-title" aria-describedby="c-price-sub" style="width:341px;max-width:100%">
  <p class="dr-range__title" id="c-price-title">Price range</p>
  <p class="dr-range__sub" id="c-price-sub">Service price, all fees included</p>
  <div class="dr-range__band">
    <div class="dr-range__hist" role="img" aria-label="How services are priced: most cost ₴200 – ₴350">
    <i class="dr-range__bar dr-range__bar--in" style="height:6%"></i><i class="dr-range__bar dr-range__bar--in" style="height:8%"></i><i class="dr-range__bar dr-range__bar--in" style="height:10%"></i><i class="dr-range__bar dr-range__bar--in" style="height:14%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:22%"></i><i class="dr-range__bar dr-range__bar--in" style="height:30%"></i><i class="dr-range__bar dr-range__bar--in" style="height:44%"></i><i class="dr-range__bar dr-range__bar--in" style="height:58%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:72%"></i><i class="dr-range__bar dr-range__bar--in" style="height:86%"></i><i class="dr-range__bar dr-range__bar--in" style="height:100%"></i><i class="dr-range__bar dr-range__bar--in" style="height:92%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:78%"></i><i class="dr-range__bar dr-range__bar--in" style="height:70%"></i><i class="dr-range__bar dr-range__bar--in" style="height:62%"></i><i class="dr-range__bar dr-range__bar--in" style="height:66%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:54%"></i><i class="dr-range__bar dr-range__bar--in" style="height:46%"></i><i class="dr-range__bar dr-range__bar--in" style="height:40%"></i><i class="dr-range__bar dr-range__bar--in" style="height:44%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:38%"></i><i class="dr-range__bar dr-range__bar--in" style="height:32%"></i><i class="dr-range__bar dr-range__bar--in" style="height:36%"></i><i class="dr-range__bar dr-range__bar--in" style="height:28%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:30%"></i><i class="dr-range__bar dr-range__bar--in" style="height:24%"></i><i class="dr-range__bar dr-range__bar--in" style="height:20%"></i><i class="dr-range__bar dr-range__bar--in" style="height:22%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:16%"></i><i class="dr-range__bar dr-range__bar--in" style="height:14%"></i><i class="dr-range__bar dr-range__bar--in" style="height:12%"></i><i class="dr-range__bar dr-range__bar--in" style="height:14%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:10%"></i><i class="dr-range__bar dr-range__bar--in" style="height:8%"></i><i class="dr-range__bar dr-range__bar--in" style="height:9%"></i><i class="dr-range__bar dr-range__bar--in" style="height:7%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:6%"></i><i class="dr-range__bar dr-range__bar--in" style="height:8%"></i><i class="dr-range__bar dr-range__bar--in" style="height:12%"></i><i class="dr-range__bar dr-range__bar--in" style="height:26%"></i>
    </div>
    <div class="dr-range__rail">
      <span class="dr-range__fill" style="left:0%;right:0%"></span>
      <input class="dr-range__input" type="range" id="c-pmin" min="0" max="1000" step="50" value="0" aria-label="Minimum price" aria-valuetext="₴0">
      <input class="dr-range__input" type="range" id="c-pmax" min="0" max="1000" step="50" value="1000" aria-label="Maximum price" aria-valuetext="₴1,000+">
    </div>
  </div>
  <div class="dr-range__fields">
    <p class="dr-range__field">
      <span class="dr-range__cap">Minimum</span>
      <output class="dr-range__val" for="c-pmin">₴0</output>
    </p>
    <p class="dr-range__field">
      <span class="dr-range__cap">Maximum</span>
      <output class="dr-range__val" for="c-pmax">₴1,000+</output>
    </p>
  </div>
</fieldset>
```

₴0 to ₴1,000+: all forty bars carry `--in` and the fill spans the whole rail. This is the band `listings` and `listings-loading` open on, before any price is chosen. The slider steps by ₴50, exactly two bars, so the shading can never land half a bar out.

## When to use

The price range is the price control in the filters drawer, and the whole of that zone. Four screens build it: `listings`, `listings-error`, `listings-filters` and `listings-loading`. A price slider with no distribution behind it asks the client to guess what is normal; the forty bars say it instead, and the bars inside the chosen band darken, so the control shows how much of the market the band actually covers. The chart is a picture of supply and never the carrier of the choice: the band is said by the thumbs, by the filled span and by the two printed values before the picture is read. The two native sliders take the arrow keys with no script (`WCAG 2.1.1`) and expose role, min, max and value with no ARIA patch (`4.1.2`).

The copy states figures only, the way voice.md P3 asks: *Price range*, *Service price, all fees included*, *Minimum*, *Maximum*, and the money. The histogram's label describes the distribution (*most cost ₴200 – ₴350*), never the selection.

Sources: wireframes/listings-filters.html · inventory.md § 1.5 Range · voice.md P2, P3 · components/form.css

## Rule

```html
<fieldset class="dr-range" aria-labelledby="r-price-title" aria-describedby="r-price-sub" style="width:341px;max-width:100%">
  <p class="dr-range__title" id="r-price-title">Price range</p>
  <p class="dr-range__sub" id="r-price-sub">Service price, all fees included</p>
  <div class="dr-range__band">
    <div class="dr-range__hist" role="img" aria-label="How services are priced: most cost ₴200 – ₴350">
    <i class="dr-range__bar" style="height:6%"></i><i class="dr-range__bar" style="height:8%"></i><i class="dr-range__bar" style="height:10%"></i><i class="dr-range__bar" style="height:14%"></i>
    <i class="dr-range__bar" style="height:22%"></i><i class="dr-range__bar" style="height:30%"></i><i class="dr-range__bar" style="height:44%"></i><i class="dr-range__bar" style="height:58%"></i>
    <i class="dr-range__bar" style="height:72%"></i><i class="dr-range__bar" style="height:86%"></i><i class="dr-range__bar" style="height:100%"></i><i class="dr-range__bar" style="height:92%"></i>
    <i class="dr-range__bar" style="height:78%"></i><i class="dr-range__bar" style="height:70%"></i><i class="dr-range__bar" style="height:62%"></i><i class="dr-range__bar" style="height:66%"></i>
    <i class="dr-range__bar" style="height:54%"></i><i class="dr-range__bar" style="height:46%"></i><i class="dr-range__bar" style="height:40%"></i><i class="dr-range__bar" style="height:44%"></i>
    <i class="dr-range__bar" style="height:38%"></i><i class="dr-range__bar" style="height:32%"></i><i class="dr-range__bar" style="height:36%"></i><i class="dr-range__bar" style="height:28%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:30%"></i><i class="dr-range__bar dr-range__bar--in" style="height:24%"></i><i class="dr-range__bar dr-range__bar--in" style="height:20%"></i><i class="dr-range__bar dr-range__bar--in" style="height:22%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:16%"></i><i class="dr-range__bar dr-range__bar--in" style="height:14%"></i><i class="dr-range__bar dr-range__bar--in" style="height:12%"></i><i class="dr-range__bar dr-range__bar--in" style="height:14%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:10%"></i><i class="dr-range__bar dr-range__bar--in" style="height:8%"></i><i class="dr-range__bar dr-range__bar--in" style="height:9%"></i><i class="dr-range__bar dr-range__bar--in" style="height:7%"></i>
    <i class="dr-range__bar dr-range__bar--in" style="height:6%"></i><i class="dr-range__bar dr-range__bar--in" style="height:8%"></i><i class="dr-range__bar dr-range__bar--in" style="height:12%"></i><i class="dr-range__bar dr-range__bar--in" style="height:26%"></i>
    </div>
    <div class="dr-range__rail">
      <span class="dr-range__fill" style="left:60%;right:0%"></span>
      <input class="dr-range__input" type="range" id="r-pmin" min="0" max="1000" step="50" value="600" aria-label="Minimum price" aria-valuetext="₴600">
      <input class="dr-range__input" type="range" id="r-pmax" min="0" max="1000" step="50" value="1000" aria-label="Maximum price" aria-valuetext="₴1,000+">
    </div>
  </div>
  <div class="dr-range__fields">
    <p class="dr-range__field">
      <span class="dr-range__cap">Minimum</span>
      <output class="dr-range__val" for="r-pmin">₴600</output>
    </p>
    <p class="dr-range__field">
      <span class="dr-range__cap">Maximum</span>
      <output class="dr-range__val" for="r-pmax">₴1,000+</output>
    </p>
  </div>
</fieldset>
```

The card in the drawer on `listings-filters`: title, subtitle, the chart on the rail, two thumbs, two printed values, 341 × 254.98 at 16 inset all round, on the `--bg-surface` card with a 16 radius.

## Anti-rule

```html
<div class="dr-picks" role="radiogroup" aria-label="Price" style="width:341px;max-width:100%;list-style:none">
  <label class="dr-pick"><span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span><span class="dr-pick__label">Low</span><input type="radio" name="prwrong" value="low" class="sr-only"></label>
  <label class="dr-pick"><span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span><span class="dr-pick__label">Medium</span><input type="radio" name="prwrong" value="medium" checked class="sr-only"></label>
  <label class="dr-pick"><span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span><span class="dr-pick__label">High</span><input type="radio" name="prwrong" value="high" class="sr-only"></label>
</div>
```

Price as three adjectives. *Low*, *Medium*, *High* carry no checkable figure, which is what voice.md P2 forbids; these presets came off the zone on the designer's word. A price is a number in this product. To pick one value from a short list that really is a list, use a [checkbox or radio](checkbox-radio.html) group.
