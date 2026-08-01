#!/usr/bin/env python3
"""Hold an image against the colour contract in visuals/README.md section 3.

    python visuals/check-style.py                      # the whole library
    python visuals/check-style.py assets/scenes/x.jpg  # one candidate

Two things are measured, and they are measured on different pixels on purpose:

  * the NEUTRAL CAST - the mean of the near-neutral pixels only (saturation
    under 18%). This is the grey of the bodies, the fabric and the ambient, and
    it is what decides whether the picture reads warm or cool against the warm
    #F7F5F2 page. Measuring it over every pixel would be dominated by the lime
    payload, which is a saturated object and not a temperature.

  * the PAYLOAD LIME - the dominant cluster inside the lime detection window.
    Olive foliage and dark composite cases fall outside the window, so a photo
    with no brand lime correctly reports none.

Requires Pillow.
"""
import argparse
import colorsys
import glob
import os
import sys
from collections import Counter

# --- the contract (visuals/README.md section 3) --------------------------------
# payload lime, centre 72deg 88% 41% - measured across all 12 fleet renders
LIME_HUE = (67.0, 77.0)
LIME_SAT = (74.0, 100.0)
LIME_LIT = (32.0, 50.0)
# window used to decide whether a lime is present at all (wider than the band).
# The lightness ceiling matters: in HLS a blown near-white highlight with a faint
# yellow cast reports saturation 100%, so without it a sunlit flower reads as lime.
LIME_WINDOW_HUE = (62.0, 80.0)
LIME_WINDOW_SAT = 60.0
LIME_WINDOW_LIT = (32.0, 60.0)
# a real lime seam on a person is ~0.4% of the frame; sunlit foliage lands under
# 0.1%, so this is what separates the brand accent from a bright leaf
LIME_MIN_SHARE = 0.15

GROUND_HUE = (30.0, 45.0)      # --page is 36deg, --card is 37deg
GROUND_MIN_SAT = 3.0           # below this a mean has no meaningful hue
WARM = (4.0, 18.0)             # R-B on the neutral pixels

UI_ACCENT = "#9BCF4A"          # reference only - NOT the payload lime, see README 7.1


def hexof(rgb):
    return "#%02X%02X%02X" % tuple(int(round(c)) for c in rgb)


def analyse(path):
    from PIL import Image

    im = Image.open(path).convert("RGBA")
    native = im.size
    im.thumbnail((240, 240))
    px = list(im.getdata())
    opaque = [p for p in px if p[3] > 200]
    if not opaque:
        return None

    neutral, limes = [], Counter()
    for r, g, b, _ in opaque:
        h, l, s = colorsys.rgb_to_hls(r / 255, g / 255, b / 255)
        deg, sat, lit = h * 360, s * 100, l * 100
        if sat < 18 and 6 < lit < 92:
            neutral.append((r, g, b))
        if (LIME_WINDOW_HUE[0] <= deg <= LIME_WINDOW_HUE[1]
                and sat >= LIME_WINDOW_SAT
                and LIME_WINDOW_LIT[0] <= lit <= LIME_WINDOW_LIT[1]):
            limes[(r // 8 * 8, g // 8 * 8, b // 8 * 8)] += 1

    out = {"native": "%d x %d" % native,
           "neutral_share": 100 * len(neutral) / len(opaque),
           "lime_share": 100 * sum(limes.values()) / len(opaque)}

    if neutral:
        n = len(neutral)
        m = tuple(sum(c[i] for c in neutral) / n for i in range(3))
        h, l, s = colorsys.rgb_to_hls(*[c / 255 for c in m])
        out.update(neutral=hexof(m), warm=m[0] - m[2], hue=h * 360, sat=s * 100)
    if limes and out["lime_share"] >= LIME_MIN_SHARE:
        (r, g, b), c = limes.most_common(1)[0]
        h, l, s = colorsys.rgb_to_hls(r / 255, g / 255, b / 255)
        out.update(lime=hexof((r, g, b)), lh=h * 360, ls=s * 100, ll=l * 100)
    return out


def mark(value, lo, hi):
    return "ok " if lo <= value <= hi else "OFF"


def report(a, rel):
    print(f"\n{rel}   ({a['native']})")

    if "neutral" not in a:
        print("  neutral cast  none - the image has no near-neutral pixels")
    else:
        print(f"  neutral cast  {a['neutral']}  ({a['neutral_share']:.0f}% of pixels)")
        print(f"  warm skew     {a['warm']:+6.1f}   [{mark(a['warm'], *WARM)}]  "
              f"target {WARM[0]:+.0f}..{WARM[1]:+.0f} (new work; "
              "most of the existing set predates it - README 7.2)")
        if a["sat"] < GROUND_MIN_SAT:
            print(f"  ground hue    --        [-- ]  neutral "
                  f"(saturation {a['sat']:.1f}%, below {GROUND_MIN_SAT:.0f}%)")
        else:
            print(f"  ground hue    {a['hue']:6.1f}    [{mark(a['hue'], *GROUND_HUE)}]  "
                  f"target {GROUND_HUE[0]:.0f}..{GROUND_HUE[1]:.0f}  "
                  f"(--page is 36, --card 37)")

    if "lime" not in a:
        print("  payload lime  none found - correct for a user-content photograph "
              "or an unpayloaded airframe")
    else:
        ok = all(mark(v, lo, hi) == "ok " for v, (lo, hi) in
                 ((a["lh"], LIME_HUE), (a["ls"], LIME_SAT), (a["ll"], LIME_LIT)))
        print(f"  payload lime  {a['lime']}  {a['lh']:.0f} {a['ls']:.0f}% {a['ll']:.0f}%  "
              f"({a['lime_share']:.1f}% of pixels)  [{'ok ' if ok else 'OFF'}]  "
              f"target 72 88% 41%")
        if not ok:
            for name, v, (lo, hi) in (("hue", a["lh"], LIME_HUE),
                                      ("sat", a["ls"], LIME_SAT),
                                      ("lit", a["ll"], LIME_LIT)):
                if not lo <= v <= hi:
                    print(f"                  {name} {v:.0f} outside {lo:.0f}..{hi:.0f}")


def main():
    ap = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("paths", nargs="*", help="image files; default is the whole library")
    args = ap.parse_args()

    try:
        import PIL  # noqa: F401
    except ImportError:
        print("Pillow is required:  pip install Pillow")
        return 2

    paths = args.paths
    if not paths:
        root = os.path.join(os.path.dirname(__file__), "..", "assets")
        for ext in ("png", "jpg", "jpeg"):
            paths += glob.glob(os.path.join(root, "**", f"*.{ext}"), recursive=True)
        paths = sorted(p for p in paths
                       if "thumbs" not in p.replace("\\", "/")
                       and not os.path.basename(p).startswith("_"))
    if not paths:
        print("nothing to check")
        return 1

    print(f"Checking {len(paths)} file(s) against visuals/README.md section 3")
    print(f"UI accent for reference: {UI_ACCENT} (83 58% 55%) - deliberately NOT the "
          "payload lime, see README 7.1")

    warm_ok = lime_ok = lime_seen = 0
    for p in paths:
        rel = os.path.relpath(p).replace("\\", "/")
        a = analyse(p)
        if a is None:
            print(f"\n{rel}\n  fully transparent - nothing to sample")
            continue
        report(a, rel)
        if "warm" in a and WARM[0] <= a["warm"] <= WARM[1]:
            warm_ok += 1
        if "lime" in a:
            lime_seen += 1
            if (LIME_HUE[0] <= a["lh"] <= LIME_HUE[1]
                    and LIME_SAT[0] <= a["ls"] <= LIME_SAT[1]
                    and LIME_LIT[0] <= a["ll"] <= LIME_LIT[1]):
                lime_ok += 1

    print(f"\n--- {len(paths)} file(s) ---")
    print(f"  warm skew in band   {warm_ok}/{len(paths)}")
    print(f"  payload lime in band {lime_ok}/{lime_seen} of the files that carry one")
    return 0


if __name__ == "__main__":
    sys.exit(main())
