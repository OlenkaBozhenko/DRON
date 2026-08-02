# Imagery audit — every wireframe, every picture slot

**Status:** 2026-08-02. Audited, then the covered slots were filled — see §A for exactly what moved.
**Method:** every `.media-ph` · `.msg-ph` · `.slide-ph` · `.map-ph` · `.up-ph` · `.avatar` ·
`.success-mark` inside the phone frame, plus every `<img>` and `url(../assets/…)`. The annotation
sidebar is excluded — it is not the screen.
**Companion:** [`README.md`](README.md) — the house style and the prompt each row points at.

## Totals

| | Before | After placement |
|---|---:|---:|
| Wireframes audited | 84 | **84** |
| Carry a real asset | 7 | **16** |
| Carry a text placeholder | 54 | **45** |
| Carry no picture slot at all | 23 | **23** |

**76 picture slots**, split three ways — and only the second needs you at the generator:

| | Slots | Meaning |
|---|---:|---|
| **A · Placed** | 15 | done 2026-08-02 — an asset already in the repo fitted, and it is now in |
| **B · Missing** | 16 | **generate these** — 19 files (two slots take a matched pair; three files have no slot yet) |
| **C · Not a picture** | 45 | a 24-grid glyph or an upload tray — generating art for these would be wrong |

---

## A · Placed — done 2026-08-02

Fifteen slots whose picture already existed. Placed, not generated; nine pages moved from a text
label to a real asset.

| Page | Slot | Now carries |
|---|---|---|
| `listings` | `media-ph:DELIVERY` · `:AERIAL` · `:INSPECT` | `drone-01` · `drone-02` · `drone-11` |
| `listings-filtered` | `media-ph:AERIAL` · `:INSPECT` | `drone-02` · `drone-11` |
| `job-offer` | `media-ph:DELIVERY` | `drone-01` |
| `operator-dispute` · `-error` | `media-ph:AERIAL` | `drone-02` |
| `welcome` | `slide-ph:ORDER` · `:OPERATOR` · `:DRONE` | `handover` · `operator` · `drone-flight-clean` ⚠ |
| `onboarding-client` | `slide-ph:VERIFIED` · `:LIVE` | `operator` · `receive` |
| `onboarding-operator` | `slide-ph:JOBS` | `operator-at-work` |
| `job-brief` | `map-ph:ROUTE` | `live-map` ⚠ |

⚠ **Two are interim** and stay on the generate list — B2 #8 and B4 #19. `welcome`'s third slide says
*"what the drone does — and doesn't"* (a set route, keeping its distance) and a bare airframe does
not show that; `job-brief` needs **two** pins, pickup and drop-off, where the client map has one pin
and a drone on it.

**How they were placed.** `drone-11` carries the dark composite case rather than a lime box, so the
inspection card does not read as a third delivery. The service well grows **56 → 96 × 72**:
`concept.md` §6.3 puts the floor at ~96px, below which the rotors stop resolving, and
`order-history` had already taken this exact step for the same reason. The dashed well and its label
ground come off when a picture arrives — in the product a cutout sits straight on the card.

**Register check.** Catalogue surfaces (`listings`, `job-offer`) take the **fleet** renders;
onboarding and outcome surfaces take the **scenes**. Neither screen mixes the two — `README.md` §2.

**One slot from this group was not placed:** `order-confirmed`'s `avatar:AM`. `operator.png` is shot
from three-quarters *behind*, so cropping it into a 56px round avatar gives the back of a head. It
moves to B1 #4.

---

## B · Missing — please generate

19 files across 16 slots. Every row gives the target filename, who or what it shows, the page that
consumes it, and the `README.md` §5 prompt line to use. Filenames follow `README.md` §6.

### B1 · People — 5 files, highest value

The product has exactly **one** human cutout (`operator.png`, shot from behind), and five screens
name five different people. A face is the load-bearing trust signal in `RJ-C1`, and a round avatar —
28px in the operator header, 56px on the account and confirmation cards — needs a face pointing at
the camera. The existing cutout cannot be cropped into one.

| # | Filename | Who | Pages | Prompt |
|---|---|---|---|---|
| 1 | `people/person-operator-ivan.png` | Ivan K. — the signed-in operator. Face forward, head-and-shoulders, **avatar-safe**: readable inside a 28px circle | `operator-listings`, `operator-listings-empty`, `operator-account` | §5.2 operator, pose `facing the camera, head and shoulders` |
| 2 | `people/person-operator-kateryna.png` | Kateryna O. — a *newly certified* operator, 0 reviews. Must read as a different person from Andriy and Ivan | `order-confirmed-empty` | §5.2 operator, same pose |
| 3 | `people/person-client-olena.png` | Olena B. — the signed-in **client**. Ordinary clothes, **no lime, no uniform** | `account` | §5.2 client |
| 4 | `people/person-operator-andriy.png` | Andriy M. face forward — the same operator `tracking` already shows from behind. Needed because a round avatar cannot crop a back-of-head | `order-confirmed` | §5.2 operator, same pose |
| 5 | `people/person-support-agent.png` *(optional)* | DRON Support. **Recommend a lime-on-charcoal monogram, not a face** — a fabricated agent portrait is a trust claim the product cannot back | `contact-support` | — |

⚠ These are cutouts, so they are **PNG with alpha** — a `.jpg` cannot carry transparency.

### B2 · Scenes — 6 files

| # | Filename | What it shows | Pages | Prompt |
|---|---|---|---|---|
| 6 | `scenes/scene-role-client.png` | The role fork, client side: a person in ordinary clothes taking a parcel from a drone | `role-select` — `media-ph:CLIENT` | §5.2 client |
| ~~7~~ | ~~`scenes/scene-role-operator.png`~~ | **Closed 2026-08-02 by the designer's own choice — a drone, not a person.** She supplied Figma node `67:133`; it is saved as `drones/drone-flight-front.png` (744 × 212, served 256 × 73). The white frame ground was keyed out and the motion-blurred rotor tips feathered by their own luminance, so the streaks fade instead of arriving as an opaque white smear on the card. | `role-select` — `media-ph:OPERATOR` **(filled)** | — |
| 8 | `scenes/scene-drone-rules.png` | What the drone does and doesn't: holding a set line at altitude, clear distance from windows and people | `welcome` — `slide-ph:DRONE` **(interim in place)** | §5.1 + a scene backdrop |
| 9 | `scenes/scene-report-ready.png` | The outcome arriving: a finished inspection report on a phone in someone's hand | `onboarding-client` — `slide-ph:REPORT` | §5.3 |
| 10 | `scenes/scene-checklist.png` | An operator on site working the checklist on the controller before take-off | `onboarding-operator` — `slide-ph:STEPS` | §5.2 operator |
| 11 | `scenes/scene-paid.png` | Earnings landing — the payout moment, without fake UI or currency symbols | `onboarding-operator` — `slide-ph:PAID` | §5.3 |

**The matched pair is off — #7 was answered with a drone.** The two cards no longer show two people
in the same light; one shows the equipment, the other is still a `CLIENT` label. Whatever fills #6
now has to sit beside a machine rather than beside a person, and that is a question for the
designer, not an assumption to make here.

The original reasoning, kept because it still governs #6 if she wants the pair restored:
**#6 and #7 are one matched pair** — same lens, same crop, same light — because they sit side by side
as the two halves of a single choice. That is why `client-receiving.png` and `operator.png` were
*not* dropped in as an interim: they are different crops of different shoots and would read as a
mistake rather than a choice.

### B3 · User content — 7 files

These stand in for what a real user uploads. They must look **photographed on a phone, on site** —
not styled, not a hero. `README.md` §5.3, and **no lime anywhere**: a real user photo would not
carry the brand.

| # | Filename | What it shows | Pages |
|---|---|---|---|
| 12 | `scenes/inspection-cover-roof.jpg` | Cover frame — the whole roof from the air, the subject of the report | `inspection-report` — `media-ph:COVER PHOTO` |
| 13 | `scenes/inspection-roof-cracked-tiles.jpg` | **Severity High** — two cracked tiles near the ridge | `inspection-report` — `media-ph:INSPECTION IMAGE` 1/3 |
| 14 | `scenes/inspection-gutter-blocked.jpg` | **Severity Medium** — a gutter run blocked with leaves, standing water | `inspection-report` — 2/3 |
| 15 | `scenes/inspection-chimney-flashing.jpg` | **Severity None** — sealed, intact chimney flashing | `inspection-report` — 3/3 |
| 16 | `scenes/delivered-proof-2.jpg` | A second doorstep — an apartment landing, not a house | `order-history` carries **two** delivered package orders and one proof photo |
| 17 | `scenes/aerial-trukhaniv-island.jpg` | The aerial deliverable — a riverside plot from ~60 m, late afternoon | the *Aerial photo & video* order in `order-history` (see the flow seam below) |
| 18 | `scenes/dispute-evidence-aerial-blurry.jpg` | The disputed deliverable: an aerial frame that is genuinely soft, so the client's claim reads as fair | `operator-dispute` — `up-ph:FLIGHT LOG / PHOTO`, filled state |

### B4 · Map — 1 file

| # | Filename | What it shows | Pages |
|---|---|---|---|
| 19 | `map/map-job-route.jpg` | Operator-side route: **two** pins — pickup *and* drop-off — with the leg between them | `job-brief` — `map-ph:ROUTE` **(interim in place)** |

The client map (`live-map.jpg`) is standing in there now. It has one pin and a drone on it, which is
the client's question (*where is my order*), not the operator's (*where do I go, and then where*).
`README.md` §5.4.

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
