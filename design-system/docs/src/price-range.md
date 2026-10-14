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
<fieldset class="dr-range" style="width:341px;max-width:100%">
  <p class="dr-range__title">Price range</p>
  <p class="dr-range__sub">Service price, all fees included</p>
  <div class="dr-range__band">
    <div class="dr-range__hist" role="img" aria-label="How services are priced: most cost &#8372;200 &#8211; &#8372;350"><i class="dr-range__bar" style="height:6%"></i><i class="dr-range__bar" style="height:8%"></i><i class="dr-range__bar" style="height:10%"></i><i class="dr-range__bar" style="height:14%"></i><i class="dr-range__bar" style="height:22%"></i><i class="dr-range__bar" style="height:30%"></i><i class="dr-range__bar" style="height:44%"></i><i class="dr-range__bar" style="height:58%"></i><i class="dr-range__bar" style="height:72%"></i><i class="dr-range__bar" style="height:86%"></i><i class="dr-range__bar" style="height:100%"></i><i class="dr-range__bar" style="height:92%"></i><i class="dr-range__bar" style="height:78%"></i><i class="dr-range__bar" style="height:70%"></i><i class="dr-range__bar" style="height:62%"></i><i class="dr-range__bar" style="height:66%"></i><i class="dr-range__bar" style="height:54%"></i><i class="dr-range__bar" style="height:46%"></i><i class="dr-range__bar" style="height:40%"></i><i class="dr-range__bar" style="height:44%"></i><i class="dr-range__bar" style="height:38%"></i><i class="dr-range__bar" style="height:32%"></i><i class="dr-range__bar" style="height:36%"></i><i class="dr-range__bar" style="height:28%"></i><i class="dr-range__bar dr-range__bar--in" style="height:30%"></i><i class="dr-range__bar dr-range__bar--in" style="height:24%"></i><i class="dr-range__bar dr-range__bar--in" style="height:20%"></i><i class="dr-range__bar dr-range__bar--in" style="height:22%"></i><i class="dr-range__bar dr-range__bar--in" style="height:16%"></i><i class="dr-range__bar dr-range__bar--in" style="height:14%"></i><i class="dr-range__bar dr-range__bar--in" style="height:12%"></i><i class="dr-range__bar dr-range__bar--in" style="height:14%"></i><i class="dr-range__bar dr-range__bar--in" style="height:10%"></i><i class="dr-range__bar dr-range__bar--in" style="height:8%"></i><i class="dr-range__bar dr-range__bar--in" style="height:9%"></i><i class="dr-range__bar dr-range__bar--in" style="height:7%"></i><i class="dr-range__bar dr-range__bar--in" style="height:6%"></i><i class="dr-range__bar dr-range__bar--in" style="height:8%"></i><i class="dr-range__bar dr-range__bar--in" style="height:12%"></i><i class="dr-range__bar dr-range__bar--in" style="height:26%"></i></div>
    <div class="dr-range__rail">
      <span class="dr-range__fill" style="left:60%;right:0%"></span>
      <input class="dr-range__input" type="range" min="0" max="1000" step="50" value="600" aria-label="Minimum price" aria-valuetext="&#8372;600">
      <input class="dr-range__input" type="range" min="0" max="1000" step="50" value="1000" aria-label="Maximum price" aria-valuetext="&#8372;1,000+">
    </div>
  </div>
  <div class="dr-range__fields">
    <p class="dr-range__field">
      <span class="dr-range__cap">Minimum</span>
      <output class="dr-range__val">&#8372;600</output>
    </p>
    <p class="dr-range__field">
      <span class="dr-range__cap">Maximum</span>
      <output class="dr-range__val">&#8372;1,000+</output>
    </p>
  </div>
</fieldset>
```

- `.dr-range__title` — The zone's title, *Price range*, with `.dr-range__sub` saying what the price includes.
- `.dr-range__hist` — Forty bars, one per ₴25 slice, standing on the rail: a picture of what services actually cost. One `role="img"` with a sentence for its label.
- `.dr-range__bar--in` — A bar inside the chosen band: charcoal, 14.37:1. Out of band the bars stay `--btn2`, 1.25:1.
- `.dr-range__fill` — The chosen span on the rail, in charcoal.
- `.dr-range__input` — Two native `<input type="range">` on one rail: 24px solid charcoal thumbs in a 44px lane. Each has its own label and an `aria-valuetext` that says the money.
- `.dr-range__val` — The printed values, `<output>` elements under *Minimum* and *Maximum*.

## Variants

### Upper band

```html
<fieldset class="dr-range" style="width:341px;max-width:100%">
  <p class="dr-range__title">Price range</p>
  <p class="dr-range__sub">Service price, all fees included</p>
  <div class="dr-range__band">
    <div class="dr-range__hist" role="img" aria-label="How services are priced: most cost &#8372;200 &#8211; &#8372;350"><i class="dr-range__bar" style="height:6%"></i><i class="dr-range__bar" style="height:8%"></i><i class="dr-range__bar" style="height:10%"></i><i class="dr-range__bar" style="height:14%"></i><i class="dr-range__bar" style="height:22%"></i><i class="dr-range__bar" style="height:30%"></i><i class="dr-range__bar" style="height:44%"></i><i class="dr-range__bar" style="height:58%"></i><i class="dr-range__bar" style="height:72%"></i><i class="dr-range__bar" style="height:86%"></i><i class="dr-range__bar" style="height:100%"></i><i class="dr-range__bar" style="height:92%"></i><i class="dr-range__bar" style="height:78%"></i><i class="dr-range__bar" style="height:70%"></i><i class="dr-range__bar" style="height:62%"></i><i class="dr-range__bar" style="height:66%"></i><i class="dr-range__bar" style="height:54%"></i><i class="dr-range__bar" style="height:46%"></i><i class="dr-range__bar" style="height:40%"></i><i class="dr-range__bar" style="height:44%"></i><i class="dr-range__bar" style="height:38%"></i><i class="dr-range__bar" style="height:32%"></i><i class="dr-range__bar" style="height:36%"></i><i class="dr-range__bar" style="height:28%"></i><i class="dr-range__bar dr-range__bar--in" style="height:30%"></i><i class="dr-range__bar dr-range__bar--in" style="height:24%"></i><i class="dr-range__bar dr-range__bar--in" style="height:20%"></i><i class="dr-range__bar dr-range__bar--in" style="height:22%"></i><i class="dr-range__bar dr-range__bar--in" style="height:16%"></i><i class="dr-range__bar dr-range__bar--in" style="height:14%"></i><i class="dr-range__bar dr-range__bar--in" style="height:12%"></i><i class="dr-range__bar dr-range__bar--in" style="height:14%"></i><i class="dr-range__bar dr-range__bar--in" style="height:10%"></i><i class="dr-range__bar dr-range__bar--in" style="height:8%"></i><i class="dr-range__bar dr-range__bar--in" style="height:9%"></i><i class="dr-range__bar dr-range__bar--in" style="height:7%"></i><i class="dr-range__bar dr-range__bar--in" style="height:6%"></i><i class="dr-range__bar dr-range__bar--in" style="height:8%"></i><i class="dr-range__bar dr-range__bar--in" style="height:12%"></i><i class="dr-range__bar dr-range__bar--in" style="height:26%"></i></div>
    <div class="dr-range__rail">
      <span class="dr-range__fill" style="left:60%;right:0%"></span>
      <input class="dr-range__input" type="range" min="0" max="1000" step="50" value="600" aria-label="Minimum price" aria-valuetext="&#8372;600">
      <input class="dr-range__input" type="range" min="0" max="1000" step="50" value="1000" aria-label="Maximum price" aria-valuetext="&#8372;1,000+">
    </div>
  </div>
  <div class="dr-range__fields">
    <p class="dr-range__field">
      <span class="dr-range__cap">Minimum</span>
      <output class="dr-range__val">&#8372;600</output>
    </p>
    <p class="dr-range__field">
      <span class="dr-range__cap">Maximum</span>
      <output class="dr-range__val">&#8372;1,000+</output>
    </p>
  </div>
</fieldset>
```

₴600 to ₴1,000+: sixteen of forty bars carry `--in`. The maximum reads *₴1,000+*, not *1000*, to a screen reader as on screen.

### Inside the market

```html
<fieldset class="dr-range" style="width:341px;max-width:100%">
  <p class="dr-range__title">Price range</p>
  <p class="dr-range__sub">Service price, all fees included</p>
  <div class="dr-range__band">
    <div class="dr-range__hist" role="img" aria-label="How services are priced: most cost &#8372;200 &#8211; &#8372;350"><i class="dr-range__bar" style="height:6%"></i><i class="dr-range__bar" style="height:8%"></i><i class="dr-range__bar" style="height:10%"></i><i class="dr-range__bar" style="height:14%"></i><i class="dr-range__bar" style="height:22%"></i><i class="dr-range__bar" style="height:30%"></i><i class="dr-range__bar dr-range__bar--in" style="height:44%"></i><i class="dr-range__bar dr-range__bar--in" style="height:58%"></i><i class="dr-range__bar dr-range__bar--in" style="height:72%"></i><i class="dr-range__bar dr-range__bar--in" style="height:86%"></i><i class="dr-range__bar dr-range__bar--in" style="height:100%"></i><i class="dr-range__bar dr-range__bar--in" style="height:92%"></i><i class="dr-range__bar dr-range__bar--in" style="height:78%"></i><i class="dr-range__bar dr-range__bar--in" style="height:70%"></i><i class="dr-range__bar dr-range__bar--in" style="height:62%"></i><i class="dr-range__bar dr-range__bar--in" style="height:66%"></i><i class="dr-range__bar dr-range__bar--in" style="height:54%"></i><i class="dr-range__bar dr-range__bar--in" style="height:46%"></i><i class="dr-range__bar dr-range__bar--in" style="height:40%"></i><i class="dr-range__bar dr-range__bar--in" style="height:44%"></i><i class="dr-range__bar dr-range__bar--in" style="height:38%"></i><i class="dr-range__bar dr-range__bar--in" style="height:32%"></i><i class="dr-range__bar" style="height:36%"></i><i class="dr-range__bar" style="height:28%"></i><i class="dr-range__bar" style="height:30%"></i><i class="dr-range__bar" style="height:24%"></i><i class="dr-range__bar" style="height:20%"></i><i class="dr-range__bar" style="height:22%"></i><i class="dr-range__bar" style="height:16%"></i><i class="dr-range__bar" style="height:14%"></i><i class="dr-range__bar" style="height:12%"></i><i class="dr-range__bar" style="height:14%"></i><i class="dr-range__bar" style="height:10%"></i><i class="dr-range__bar" style="height:8%"></i><i class="dr-range__bar" style="height:9%"></i><i class="dr-range__bar" style="height:7%"></i><i class="dr-range__bar" style="height:6%"></i><i class="dr-range__bar" style="height:8%"></i><i class="dr-range__bar" style="height:12%"></i><i class="dr-range__bar" style="height:26%"></i></div>
    <div class="dr-range__rail">
      <span class="dr-range__fill" style="left:15%;right:45%"></span>
      <input class="dr-range__input" type="range" min="0" max="1000" step="50" value="150" aria-label="Minimum price" aria-valuetext="&#8372;150">
      <input class="dr-range__input" type="range" min="0" max="1000" step="50" value="550" aria-label="Maximum price" aria-valuetext="&#8372;550">
    </div>
  </div>
  <div class="dr-range__fields">
    <p class="dr-range__field">
      <span class="dr-range__cap">Minimum</span>
      <output class="dr-range__val">&#8372;150</output>
    </p>
    <p class="dr-range__field">
      <span class="dr-range__cap">Maximum</span>
      <output class="dr-range__val">&#8372;550</output>
    </p>
  </div>
</fieldset>
```

₴150 to ₴550, also sixteen bars, now over the peak. The slider steps by ₴50, exactly two bars, so the shading can never land half a bar out.

## When to use

The price range is the price control on `listings` and `listings-filters`, and the whole of that zone. A price slider with no distribution behind it asks the client to guess what is normal; the forty bars say it instead, and the bars inside the chosen band darken, so the control shows how much of the market the band actually covers. The chart is a picture of supply and never the carrier of the choice: the band is said by the thumbs, by the filled span and by the two printed values before the picture is read. The two native sliders take the arrow keys with no script (`WCAG 2.1.1`) and expose role, min, max and value with no ARIA patch (`4.1.2`).

The copy states figures only, the way voice.md P3 asks: *Price range*, *Service price, all fees included*, *Minimum*, *Maximum*, and the money. The histogram's label describes the distribution (*most cost ₴200 – ₴350*), never the selection.

Sources: inventory.md § 1.5 Range · kit.html Price range · voice.md P2, P3 · components/form.css

## Rule

```html
<fieldset class="dr-range" style="width:341px;max-width:100%">
  <p class="dr-range__title">Price range</p>
  <p class="dr-range__sub">Service price, all fees included</p>
  <div class="dr-range__band">
    <div class="dr-range__hist" role="img" aria-label="How services are priced: most cost &#8372;200 &#8211; &#8372;350"><i class="dr-range__bar" style="height:6%"></i><i class="dr-range__bar" style="height:8%"></i><i class="dr-range__bar" style="height:10%"></i><i class="dr-range__bar" style="height:14%"></i><i class="dr-range__bar" style="height:22%"></i><i class="dr-range__bar" style="height:30%"></i><i class="dr-range__bar" style="height:44%"></i><i class="dr-range__bar" style="height:58%"></i><i class="dr-range__bar" style="height:72%"></i><i class="dr-range__bar" style="height:86%"></i><i class="dr-range__bar" style="height:100%"></i><i class="dr-range__bar" style="height:92%"></i><i class="dr-range__bar" style="height:78%"></i><i class="dr-range__bar" style="height:70%"></i><i class="dr-range__bar" style="height:62%"></i><i class="dr-range__bar" style="height:66%"></i><i class="dr-range__bar" style="height:54%"></i><i class="dr-range__bar" style="height:46%"></i><i class="dr-range__bar" style="height:40%"></i><i class="dr-range__bar" style="height:44%"></i><i class="dr-range__bar" style="height:38%"></i><i class="dr-range__bar" style="height:32%"></i><i class="dr-range__bar" style="height:36%"></i><i class="dr-range__bar" style="height:28%"></i><i class="dr-range__bar dr-range__bar--in" style="height:30%"></i><i class="dr-range__bar dr-range__bar--in" style="height:24%"></i><i class="dr-range__bar dr-range__bar--in" style="height:20%"></i><i class="dr-range__bar dr-range__bar--in" style="height:22%"></i><i class="dr-range__bar dr-range__bar--in" style="height:16%"></i><i class="dr-range__bar dr-range__bar--in" style="height:14%"></i><i class="dr-range__bar dr-range__bar--in" style="height:12%"></i><i class="dr-range__bar dr-range__bar--in" style="height:14%"></i><i class="dr-range__bar dr-range__bar--in" style="height:10%"></i><i class="dr-range__bar dr-range__bar--in" style="height:8%"></i><i class="dr-range__bar dr-range__bar--in" style="height:9%"></i><i class="dr-range__bar dr-range__bar--in" style="height:7%"></i><i class="dr-range__bar dr-range__bar--in" style="height:6%"></i><i class="dr-range__bar dr-range__bar--in" style="height:8%"></i><i class="dr-range__bar dr-range__bar--in" style="height:12%"></i><i class="dr-range__bar dr-range__bar--in" style="height:26%"></i></div>
    <div class="dr-range__rail">
      <span class="dr-range__fill" style="left:60%;right:0%"></span>
      <input class="dr-range__input" type="range" min="0" max="1000" step="50" value="600" aria-label="Minimum price" aria-valuetext="&#8372;600">
      <input class="dr-range__input" type="range" min="0" max="1000" step="50" value="1000" aria-label="Maximum price" aria-valuetext="&#8372;1,000+">
    </div>
  </div>
  <div class="dr-range__fields">
    <p class="dr-range__field">
      <span class="dr-range__cap">Minimum</span>
      <output class="dr-range__val">&#8372;600</output>
    </p>
    <p class="dr-range__field">
      <span class="dr-range__cap">Maximum</span>
      <output class="dr-range__val">&#8372;1,000+</output>
    </p>
  </div>
</fieldset>
```

The card on `listings-filters`: title, subtitle, the chart on the rail, two thumbs, two printed values, 341 × 254.98 at 16 inset all round.

## Anti-rule

```html
<div class="dr-picks" role="radiogroup" aria-label="Price" style="width:341px;max-width:100%;list-style:none">
  <label class="dr-pick"><span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span><span class="dr-pick__label">Low</span><input type="radio" name="prwrong" value="low" class="sr-only"></label>
  <label class="dr-pick"><span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span><span class="dr-pick__label">Medium</span><input type="radio" name="prwrong" value="medium" checked class="sr-only"></label>
  <label class="dr-pick"><span class="dr-box dr-box--radio" aria-hidden="true"><i class="dr-box__dot"></i></span><span class="dr-pick__label">High</span><input type="radio" name="prwrong" value="high" class="sr-only"></label>
</div>
```

Price as three adjectives. *Low*, *Medium*, *High* carry no checkable figure, which is what voice.md P2 forbids; these presets came off the zone on the designer's word. A price is a number in this product. To pick one value from a short list that really is a list, use a [checkbox or radio](checkbox-radio.html) group.
