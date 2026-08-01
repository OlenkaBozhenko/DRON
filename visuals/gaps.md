# Imagery audit — every wireframe, every picture slot

**Status:** 2026-08-02. Read-only audit of `wireframes/` — nothing in that folder was changed.
**Method:** every `.media-ph` · `.msg-ph` · `.slide-ph` · `.map-ph` · `.up-ph` · `.avatar` ·
`.success-mark` inside the phone frame, plus every `<img>` and `url(../assets/…)`. The annotation
sidebar is excluded — it is not the screen.
**Companion:** [`README.md`](README.md) — the house style and the prompt each row points at.

## Totals

| | Pages |
|---|---:|
| Wireframes audited | **84** |
| Carry a real asset today | **7** |
| Carry a text placeholder | **54** |
| Carry no picture slot at all | **23** |

**76 placeholder slots** across those 54 pages, split three ways — and only the second needs you at
the generator:

| | Slots | Meaning |
|---|---:|---|
| **A · Covered** | 14 | an asset already in the repo fits — placement only, no generation |
| **B · Missing** | 17 | **generate these** — 18 files, because one pair shares no slot |
| **C · Not a picture** | 45 | a 24-grid glyph or an upload tray — generating art for these would be wrong |

---

## A · Covered by an asset already in the repo

No generation needed. These are text placeholders whose picture exists — they were built before the
Studio layer reached those screens.

| Page | Slot | Use this asset |
|---|---|---|
| `listings` · `job-offer` | `media-ph:DELIVERY` | `drones/drone-01.png` (¾ side, lime box) |
| `listings` · `listings-filtered` | `media-ph:INSPECT` | `drones/drone-04.png`, or `drone-11.png` if the box must not read as a delivery |
| `listings` · `listings-filtered` | `media-ph:AERIAL` | `drones/drone-02.png` (twin-lens gimbal pod) |
| `operator-dispute` · `-error` | `media-ph:AERIAL` | `drones/drone-02.png` |
| `order-confirmed` | `avatar:AM` — Andriy M. | `people/thumbs/operator.png`, in the full-height left panel `tracking.html` already uses |
| `welcome` | `slide-ph:ORDER` | `scenes/handover.png` |
| `welcome` · `onboarding-client` | `slide-ph:OPERATOR` · `slide-ph:VERIFIED` | `people/operator.png` |
| `onboarding-client` | `slide-ph:LIVE` | `scenes/receive.png`, or `map/live-map.jpg` |
| `onboarding-operator` | `slide-ph:JOBS` | `scenes/operator-at-work.png` |

**Register check.** Catalogue surfaces (`listings`, `job-offer`) take the **fleet** renders;
onboarding and outcome surfaces take the **scenes**. Do not mix the two on one screen — `README.md`
§2.

---

## B · Missing — please generate

18 images. Every row gives the target filename, the register, the page that consumes it, and the
`README.md` §5 prompt line to use. Filenames follow `README.md` §6.

### B1 · People — 4 files, highest value

The product has exactly **one** human cutout today (`operator.png`, shot from behind), and four
screens name four different people. A face is the load-bearing trust signal in `RJ-C1`.

| # | Filename | Who | Pages | Prompt |
|---|---|---|---|---|
| 1 | `people/person-operator-ivan.png` | Ivan K. — the signed-in operator. Face forward, head-and-shoulders, **avatar-safe**: readable inside a 44px circle | `operator-listings`, `operator-listings-empty`, `operator-account` | §5.2 operator, pose `facing the camera, head and shoulders` |
| 2 | `people/person-operator-kateryna.png` | Kateryna O. — a *newly certified* operator, 0 reviews. Must read as a different person from Andriy M. and Ivan K. | `order-confirmed-empty` | §5.2 operator, same pose |
| 3 | `people/person-client-olena.png` | Olena B. — the signed-in **client**. Ordinary clothes, **no lime, no uniform** | `account` | §5.2 client |
| 4 | `people/person-support-agent.png` *(optional)* | DRON Support. **Recommend a lime-on-charcoal monogram, not a face** — a fabricated agent portrait is a trust claim the product cannot back | `contact-support` | — |

⚠ These are cutouts, so they are **PNG with alpha** — a `.jpg` cannot carry transparency.

### B2 · Scenes — 6 files

| # | Filename | What it shows | Pages | Prompt |
|---|---|---|---|---|
| 5 | `scenes/scene-role-client.png` | The role fork, client side: a person in ordinary clothes taking a parcel from a drone | `role-select` — `media-ph:CLIENT` | §5.2 client |
| 6 | `scenes/scene-role-operator.png` | The role fork, operator side: **matched framing and crop to #5** — the two sit side by side as a choice | `role-select` — `media-ph:OPERATOR` | §5.2 operator |
| 7 | `scenes/scene-drone-rules.png` | What the drone does and doesn't: a drone holding a set line at altitude, clear distance from windows and people | `welcome` — `slide-ph:DRONE` | §5.1 + a scene backdrop |
| 8 | `scenes/scene-report-ready.png` | The outcome arriving: a finished inspection report / photo set on a phone in someone's hand | `onboarding-client` — `slide-ph:REPORT` | §5.3 |
| 9 | `scenes/scene-checklist.png` | An operator on site working through a checklist on the controller before take-off | `onboarding-operator` — `slide-ph:STEPS` | §5.2 operator |
| 10 | `scenes/scene-paid.png` | Earnings landing — the payout moment, shown without fake UI or currency symbols | `onboarding-operator` — `slide-ph:PAID` | §5.3 |

**#5 and #6 are one matched pair** — same lens, same crop, same light — because they sit side by side
as the two halves of a single choice.

### B3 · User content — 7 files

These stand in for what a real user uploads. They must look **photographed on a phone, on site** —
not styled, not a hero. `README.md` §5.3, and **no lime anywhere**: a real user photo would not
carry the brand.

| # | Filename | What it shows | Pages |
|---|---|---|---|
| 11 | `scenes/inspection-cover-roof.jpg` | Cover frame — the whole roof from the air, the subject of the report | `inspection-report` — `media-ph:COVER PHOTO` |
| 12 | `scenes/inspection-roof-cracked-tiles.jpg` | **Severity High** — two cracked tiles near the ridge | `inspection-report` — `media-ph:INSPECTION IMAGE` 1/3 |
| 13 | `scenes/inspection-gutter-blocked.jpg` | **Severity Medium** — a gutter run blocked with leaves, standing water | `inspection-report` — 2/3 |
| 14 | `scenes/inspection-chimney-flashing.jpg` | **Severity None** — sealed, intact chimney flashing | `inspection-report` — 3/3 |
| 15 | `scenes/delivered-proof-2.jpg` | A second doorstep, different from `delivered-at-door.jpg` — an apartment landing, not a house | `order-history` carries **two** delivered package orders and one proof photo |
| 16 | `scenes/aerial-trukhaniv-island.jpg` | The aerial deliverable — a riverside plot from ~60 m, late afternoon | the *Aerial photo & video* order in `order-history` (see the flow seam below) |
| 17 | `scenes/dispute-evidence-aerial-blurry.jpg` | The disputed deliverable: an aerial frame that is genuinely soft, so the client's claim reads as fair | `operator-dispute` — `up-ph:FLIGHT LOG / PHOTO`, filled state |

### B4 · Map — 1 file

| # | Filename | What it shows | Pages |
|---|---|---|---|
| 18 | `map/map-job-route.jpg` | Operator-side route: **two** pins — pickup *and* drop-off — with the leg between them. The client map (`live-map.jpg`) has one pin and a drone on it, which is the wrong read for a job brief | `job-brief` — `map-ph:ROUTE · Podil → Osokorky` |

Reusing `live-map.jpg` here is acceptable as an interim; it is listed because the two screens are
answering different questions. `README.md` §5.4.

---

## C · Not a picture — do not generate

45 slots. Feeding these to an image generator would put illustration where the system specifies a
24-grid glyph, and would break the one-icon-system rule.

| Slot family | Count | What it actually is |
|---|---:|---|
| `.msg-ph` — state mark | 23 | **52 × 52, `--r-media`, a 26px outline glyph** on a wash: neutral `--media`/`--slate`, `--warn-wash`/`--warn-ink`, `--danger-wash`/`--danger-ink`. Already built as SVG on `tracking-*` and `delivery-*`. |
| `.success-mark` — milestone | 13 | **64px circle, `--green-wash` + `--ink`, 32px glyph.** Delivered draws a circle-check, waiting draws a clock in the same well. |
| `.up-ph` — upload tray | 8 | The **empty** state of an upload control: a tray glyph and a button. `delivery-loading` already animates one (`skUp`). A *filled* tray would show a user's own thumbnail — the stand-ins for that are #17 above. |
| `.map-ph:ACQUIRING GPS…` | 1 | Deliberately **not** the city: the loading state shows the bare well because there is no signal yet. |

**One exception, already filled.** `order-history-empty` uses `.msg-ph` as a 150px banner carrying a
drone render — the only `.msg-ph` in the product that is a picture. It is filled today by an inline
base64 **JPEG** with no alpha, knocked out with `background-blend-mode: multiply`. Re-cutting it as a
transparent PNG is `README.md` §7.4.

---

## Flow seams noticed while auditing

Not imagery bugs — recorded here because they surfaced during the pass and they change what a
picture should show.

1. **The aerial order has no outcome screen.** In `order-history`, the *Aerial photo & video* card's
   "View details" points at `delivery.html`, which shows a parcel on a doorstep. An aerial order's
   deliverable is an aerial photograph. Either that link should go to a photo-set screen, or #16
   above has nowhere to live.
2. **`order-history` shows two delivered package orders and one proof photo exists.** Hence #15.
3. **The client wears the operator's uniform** in `people/client-receiving.png` and the right-hand
   figure of `scenes/handover.png`, so the person receiving the parcel reads as a second employee.
   Every new client image fixes this; the two existing files are recorded, not corrected —
   `README.md` §7.3.
4. **Renaming the existing assets would mean editing `wireframes/`.** `delivered-at-door.jpg` →
   `delivered-proof-1.jpg` and `operator.png` → `person-operator-andriy.png` would match the
   convention in `README.md` §6, but seven wireframes reference the current paths. Not done — ask
   first.
