# Visuals — how every DRON image is made

**Status:** 2026-08-02. The generation contract for the image library.
**Sources of truth:** [`DESIGN.md`](../DESIGN.md) (palette, imagery rules), [`concept/concept.md`](../concept/concept.md) §6 (the library and its provenance).
**Scope:** every raster asset under `assets/` — drone renders, people, scenes, maps.

This file exists so the next image looks like it came from the same shoot as the last one.
Everything below is **measured off the assets already in the repo**, not asserted. Re-measure with
`check-style.py` before adding a file to the set.

---

## 1. Where the set comes from

| Set | Figma node | Register | In repo |
|---|---|---|---|
| The fleet — 12 studio drones | `19:59139` «Drons images» | studio / catalogue | `assets/drones/drone-01…12.png` + `_source-sheet.png` |
| In flight & people | `38:122` «images 2» | editorial / in use | `assets/drones/drone-flight-*.png`, `assets/people/`, `assets/scenes/` |
| The delivery photo | `47:4` | photograph | `assets/scenes/delivered-at-door.jpg` |
| The live map | — | flat map illustration | `assets/map/live-map.jpg` |

Node `19:59139` is already sliced into the repo; `_source-sheet.png` (3072 × 2048) is kept beside
the cuts, so a crop can be redone without going back to Figma.

---

## 2. The two registers — and which surface gets which

This is the split to get right before writing any prompt.

### Register P — **product imagery** (we supply it)

The machine doing the job. It is *our* picture, identical for every user, and it ships in the repo.

- **Surfaces:** service cards, order-history cards, job offers, onboarding slides, empty states.
- **Form:** transparent PNG cutout. `object-fit: contain`, **no well, no ground** — the cutout sits
  straight on the card (`DESIGN.md` → Imagery).
- **Rule:** one drone per surface. A grid of drones is a specification, never product UI.

### Register U — **user content** (a person uploads it)

The evidence a real order produced. It is *their* picture, different for every order; what ships in
the repo is only a **plausible stand-in** for the mock-ups.

- **Surfaces:** proof of delivery (`delivery.html`), inspection cover + finding frames, dispute
  evidence, profile photo, aerial deliverable.
- **Form:** full-bleed photograph. `object-fit: cover`, edge to edge inside `--r-media`, **no
  padding**. A photograph *is* the surface. Never inset on a `--media` ground — a floated photo
  reads as a sticker.
- **Rule:** it must look like something a person actually photographed on a phone, on site. Not a
  studio shot, not a hero, not styled. If it looks like an ad, it is wrong for this slot.

**One register per screen.** Studio-on-a-payload and in-flight-and-in-use on the same screen reads
as two different products. Catalogue and pickers get the fleet; live and outcome screens get scenes.

---

## 3. The colour contract — measured, not asserted

Two things are measured, on **different pixels on purpose**:

- **Neutral cast** — the mean of the *near-neutral* pixels only (saturation under 18%): the greys of
  the bodies, the fabric, the ambient. This is what decides whether a picture reads warm or cool
  against the warm `#F7F5F2` page. Measuring it over every pixel would be dominated by the lime
  payload — which is a saturated object, not a temperature. (Sampled over all pixels, `drone-08`
  reports a warm skew of **+43**; over its neutrals it is **−2.9**. The first number is the cargo
  box, not the light.)
- **Payload lime** — the dominant cluster inside a detection window of hue 62–80°, saturation ≥ 60%,
  lightness 32–60%, holding at least 0.15% of the frame. Olive foliage, dark composite cases and
  blown highlights fall outside it, so a photo with no brand lime correctly reports none.

Whole library, `python visuals/check-style.py`:

| Group | Neutral cast | Warm skew (R−B) | Ground hue | Payload lime |
|---|---|---:|---:|---|
| Fleet `drone-01…12` | `#363A39`–`#A4A6A1` | **−3.3 … +3.3** | neutral (sat < 3%) | 71–75° · 79–100% · 35–47% |
| Flight cutouts | `#434646`–`#56585A` | **−2.4 … −3.6** | neutral | 70° 93% 42%, or none |
| `people/operator.png` | `#40464A` | **−9.7** | 204° | `#B8C828` 66° 67% 47% ⚠ |
| `people/client-receiving.png` | `#44484A` | **−6.1** | 205° | `#A0D000` 74° 100% 41% |
| `scenes/handover · receive` | `#474A4D` · `#444749` | **−6.5** · **−5.4** | 208° · 202° | 72° 86% 45% · 70° 93% 42% |
| `scenes/operator-at-work.png` | `#3F4448` | **−8.8** | 203° | `#C0D028` 66° 68% 49% ⚠ |
| **`scenes/delivered-at-door.jpg`** | `#8D887D` | **+16.4** | **40.1°** | none — correct |
| `map/live-map.jpg` | `#DBDBD9` | +2.8 | 48.8° | `#90B800` 73° 100% 36% |

**Payload lime in band: 16 of the 18 files that carry one. Warm skew in band: 1 of 23.**

### 3.1 The lime

**Payload lime — the target for every new image:**

```
#B0D810   ·  HSL 72° 88% 41%   ·  tolerance ±5° hue, ±14pp saturation, ±9pp lightness
```

All twelve fleet renders sit inside that band. The two ⚠ above are the only misses: `operator.png`
and `operator-at-work.png` carry a duller, yellower lime at **66° 67%** — the same off-tone in both,
so it is one shoot, not two accidents.

**It is not the UI accent.** `--green` `#9BCF4A` is HSL **83° 58% 55%**. The payload lime is 11°
more yellow, 30pp more saturated and 14pp darker. See §7.1 — a live seam, not a typo.

### 3.2 Temperature

`--page` `#F7F5F2` is hue **36°**, `--card` `#ECE9E4` hue **37°** — a warm, very pale ground.

**The set has no shared temperature today.** The fleet is dead neutral (−3…+3), every image with a
person in it runs **cool by 5 to 10 points** (the softshell grey is a blue-grey, hue ~203°), and the
single photograph runs **warm by 16** — landing at hue **40.1°**, which is within four degrees of
`--card`. So the one asset that actually agrees with the UI ground is `delivered-at-door.jpg`, and
it is the one to generate towards.

| | Target for new work | Why |
|---|---|---|
| **Warm skew (R−B) on the neutrals** | **+4 … +18** | the band `delivered-at-door.jpg` already sits in (+16.4). Roughly 5000–5400 K. |
| **Ground hue**, where saturation ≥ 3% | **30–45°** | `--page` 36°, `--card` 37°, `delivered-at-door` 40.1° |
| **Lime** | 72° 88% 41% ±5/±14/±9 | §3.1 |

One band, not two: a studio cutout and an outdoor scene can both be lit warm, and the current split
is drift rather than intent. Existing files are **recorded, not corrected** (§7.2) — the checker
counts them as out of band and that is the honest number.

---

## 4. The master prompt

Two blocks. **Block A is fixed** — paste it verbatim, every time, unchanged. **Block B** names the
subject. Then the negative prompt.

### Block A — house style (never edit)

```
Photorealistic, calm, technical-industrial product photography. Matte finish throughout:
low specular, no gloss highlights, no chrome, no lens flare, no bloom.

Lighting: one large soft key from the upper left at about 35 degrees, broad soft fill from
the right, no rim light, no coloured light. Daylight leaning warm, 5000-5400K - the greys
must sit on the warm side of neutral, never blue-grey.
A soft, short contact shadow directly under the subject; nothing dramatic.

Colour: a strictly limited palette. Graphite and charcoal greys (#2E3133 to #4A4D4F) for
bodies and shells, mid-grey (#55585A) for fabric, matte black (#1A1A1A) for rubber, straps,
lenses and trim. Exactly one accent, an acid chartreuse lime #B0D810 (HSL 72, 86%, 45%),
and it appears only as a physical object or a seam detail - a cargo box, a piping stripe,
a cap tab, a screen element. No second green. No blue or teal technology lighting. No
orange except a small amber blade tip.

Camera: 50-85mm equivalent, eye level or a touch below, three-quarter view, subject centred,
generous margin, everything in focus. Composed for a small UI box, so the silhouette must
read at 96px.

Mood: competent, quiet, trustworthy. Real equipment doing real work. Unbranded.
```

### Block A-U — house style for **user content** (never edit)

Register U cannot take Block A: a studio key light contradicts a photo someone took on a doorstep.
Everything about the colour survives; the lighting does not.

```
Photographed on a phone, on site, in available daylight - a real record rather
than a styled shot. Slightly off-centre framing, a natural handheld angle,
everything that matters in focus.

Light: late-afternoon daylight leaning warm, 5000-5400K. Soft open shadows,
no flash, no golden-hour glow, no HDR.

Colour: warm neutral throughout - greys, stone and timber sit on the warm side
of neutral, ground hue around 36 degrees. NO lime and no brand colour anywhere:
this is a picture a client or an operator took, and it would not carry the brand.

Mood: plain and factual, unremarkable the way real evidence is.
```

### Block B — subject (one line, swap per image)

See §5 for the line to use per register. **Register P takes Block A; Register U takes Block A-U.**
The negative prompt below is the same for both.

### Negative prompt (always)

```
no logos, no brand marks, no text, no watermark, no UI overlay
no white box, no rectangle backdrop, no frame, no border, no vignette
no baked-in drop shadow under a cutout, no reflection plane
no gradient background, no studio sweep, no bokeh lights
no neon, no glow, no HDR halo, no oversaturation
no second green, no teal, no purple, no blue key light
no motion blur, no long exposure, no tilt-shift
no illustration, no 3D-cartoon, no low-poly, no isometric
no fisheye, no extreme wide angle, no dutch angle
```

---

## 5. Per-register prompt lines

### 5.1 Drone — studio cutout (Register P)

> **Block B:** `A single quadcopter delivery drone, folded low arms, [BODY], [OPTICS], carrying [PAYLOAD], shown [VIEW], on a fully transparent background.`

- `[BODY]` — `graphite body with a vent panel` · `white slim body with tall landing legs` · `black shell with amber arms`
- `[OPTICS]` — `a single forward lens` · `a twin-lens gimbal pod` · `twin sensor lenses`
- `[PAYLOAD]` — `a lime #B0D810 cargo box strapped with black webbing` · `a dark composite case` (inspection — the box must not read as a delivery) · `no payload`
- `[VIEW]` — `in side profile` · `three-quarter from the left` · `front-on` (front-on reads as *approaching* — use it for tracking)

**Output:** transparent PNG, subject trimmed to its alpha bounding box, centred on a **square
canvas with 6% padding**, written at **1024 × 1024**. That is what makes every unit sit at the same
optical scale in any well without re-cropping.

### 5.2 Person — cutout (Register P)

> **Block B — operator:** `A drone operator seen [POSE], holding a two-antenna ground controller with a small map on its screen, wearing the uniform, on a fully transparent background.`

**The uniform, fixed across every person image:** mid-grey softshell hooded jacket; a short lime
`#B0D810` flash on the upper sleeve and a second on the sleeve pocket; black cuffs; a charcoal cap
with a lime tab above the brim; black sunglasses. A small lime diamond emblem on the shoulder.

- `[POSE]` — `from three-quarters behind, looking off to the right` · `facing the camera, head and shoulders` (for an avatar) · `in half profile, glancing up at the sky`

> **Block B — client:** `A person receiving a parcel, [POSE], in ordinary everyday clothing, on a fully transparent background.`

⚠ **A client never wears the uniform.** In the current set `people/client-receiving.png` and the
right-hand figure in `scenes/handover.png` both wear the grey-and-lime operator kit, so the person
receiving the parcel reads as a second employee. Every new client image dresses the client as a
member of the public — a coat, a jumper, ordinary colours drawn from the warm neutral range, no
lime anywhere on them. The lime belongs to the equipment and the staff, and that is what makes it
mean *DRON*.

**Output:** transparent PNG at native resolution, plus a `thumbs/` copy at ≈2× the CSS box.

### 5.3 Scene photograph (Register U)

> **Block B — proof of delivery:** `A parcel left on the steps of a house: [SETTING]. Shot from standing height on a phone, slightly off-centre, late-afternoon sun. The parcel is the subject and it is clearly the thing that was delivered.`

- `[SETTING]` — `a modern timber front door with planting and an entry plaque` · `a painted apartment-block door with a tiled landing` · `a porch with a doormat and a bicycle`

> **Block B — inspection frame:** `A close aerial view of [DEFECT] on a residential roof, shot straight down from a drone at low altitude, flat overcast-to-daylight light, the defect centred and unmistakable.`

- `[DEFECT]` — `two cracked clay tiles near the ridge` · `a gutter run blocked with leaves and standing water` · `intact sealed chimney flashing`

> **Block B — aerial deliverable:** `An aerial photograph of [SUBJECT] from about 60 metres, straight-down or shallow oblique, late-afternoon light, sharp throughout.`

These carry **no transparency** and **no lime** — a real user photo would not contain the brand.
Save as **JPEG**, quality 82.

### 5.4 Map

The map is a flat vector-style illustration, not a photograph: pale warm-grey city grid on
`#E8E9E1`, white streets, muted green parks, a soft blue river. Exactly two accents — the route
drawn in lime `#90B800` and a lime destination pin. Native aspect **1.99**, used `center/cover`,
card radius, no shadow.

---

## 6. Naming, format, size

**Pattern:** `<subject>-<qualifier>[-<n>].<ext>` — lowercase latin, kebab-case, no dates, no
resolutions in the name.

| Prefix | Means | Example |
|---|---|---|
| `drone-` | a fleet render, numbered | `drone-08.png` |
| `drone-flight-` | in flight, by payload | `drone-flight-camera.png` |
| `person-` | a cutout of a human | `person-operator.png`, `person-client-olena.png` |
| `scene-` | two or more subjects in context | `scene-handover.png` |
| `delivered-proof-` | proof-of-delivery photo, numbered | `delivered-proof-1.jpg` |
| `inspection-` | an inspection frame | `inspection-roof-cracked-tiles.jpg` |
| `aerial-` | an aerial deliverable | `aerial-riverside-plot.jpg` |
| `map-` | a map surface | `map-live-route.jpg` |

Fleet renders keep **numbers, not descriptions** — the descriptor is a judgement that may be
revised, while every reference in code must stay stable.

**Format.** Transparency ⇒ PNG, always (JPEG cannot carry alpha). A full-bleed photograph ⇒ JPEG
q82. No WebP until every target browser is confirmed.

**Size.** Master at native; a right-sized copy in `thumbs/` at **≈2× the CSS box** — a retina
screen and nothing beyond it. The page references the copy; the master stays in the repo untouched.
Never upscale: below ~96px the rotors stop resolving.

**Alt text names the outcome, not the equipment** — *"Your parcel on its way"*, not *"quadcopter
with lime cargo box"*. Decorative renders take `alt=""`. Descriptive alt is correct only on spec
pages, where the asset itself is the subject.

---

## 7. Open seams

Recorded rather than silently fixed, per the standing conformance check in `CLAUDE.md`.

**7.1 The payload lime is not the UI accent.** `concept.md` §6 says the cargo box "reads as Signal
Green `#9BCF4A`". Measured, it does not: the box is `#B0D810` (72° 86% 45%), the accent is
`#9BCF4A` (83° 58% 55%) — **11° of hue, 28pp of saturation, 10pp of lightness apart**. On
`order-history` both are on screen at once: the lime box on four cards and the green CTA below
them. `DESIGN.md` → Don'ts says *"a second green would break the budget"*; by measurement there
already is one. Options: (a) keep it and rewrite the claim — the payload is a physical object and
the accent is paint, which is defensible and is what §7.2 of this file assumes; (b) regenerate the
fleet with the box at `#9BCF4A`, which costs 12 renders and makes the box paler; (c) move the UI
accent to the lime, which fails WCAG on every current pair. **Not decided — designer's call.**

**7.2 Everything with a person in it runs cool.** Measured on the neutral pixels: `operator.png`
**−9.7**, `operator-at-work.png` **−8.8**, `handover.png` **−6.5**, `client-receiving.png` **−6.1**,
`receive.png` **−5.4** — all at hue ~203°, a blue-grey. The fleet is neutral (−3…+3). The only warm
asset is `delivered-at-door.jpg` at **+16.4 / hue 40.1°**, which is the one that matches `--card`
(37°). So the operator card puts a blue-grey cutout on a warm beige card, and the delivery screen
puts a warm photograph on the same card; side by side in the same flow they are lit differently.
New work targets +4…+18 (§3.2). The existing files are recorded, not re-cut — re-grading them would
mean re-cutting eight alpha masks, and the cast is only visible when two of them are adjacent.

**7.2a Two files carry the wrong lime.** `operator.png` and `operator-at-work.png` measure **66°
67%** against the set's 72° 88%. Same off-tone in both, so it is one shoot. Everything else — all
twelve fleet renders, both remaining scenes, the map — is in band.

**7.3 The client wears the operator's uniform.** See §5.2. Affects `people/client-receiving.png`
and `scenes/handover.png`. New client images fix it; the two existing files are recorded, not
corrected.

**7.4 One asset carries no alpha.** The `order-history-empty` banner is an inline base64 **JPEG**,
its white knocked out by `background-blend-mode: multiply`. It is the only image in the product
that is not a transparent PNG. The fix is to re-cut it as PNG with alpha and drop the 26 KB blob
out of the HTML.

---

## 8. Checking a new image

```
python visuals/check-style.py assets/scenes/delivered-proof-2.jpg
```

Prints the mean, the warm skew and the dominant lime, so a file can be held against §3 before it
joins the set. A file that misses the band is regenerated, not colour-corrected — the correction
would show up as a cast on the greys.
