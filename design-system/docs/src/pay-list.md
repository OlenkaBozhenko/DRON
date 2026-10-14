---
name: Pay list and share channels
slug: pay-list
group: Actions
order: 60
classes: .dr-paylist · .dr-btn--pay · .dr-paymark--pay · .dr-sheet__channels · .dr-channel
file: sheet.css; button.css
inventory: Pay drawer; Card entry drawer
kit: 1690
---

## Anatomy

```html
<div class="dr-paylist" style="width:341px;max-width:100%">
<a class="dr-btn dr-btn--pay dr-btn--block" href="#" aria-label="Pay with Apple Pay"><svg class="dr-paymark dr-paymark--pay" viewBox="0 0 46 23" aria-hidden="true" focusable="false"><svg x="3.1" y="5.19" width="10.33" height="12.69" viewBox="0 0 814 1000" preserveAspectRatio="xMidYMid meet"><path fill="#FFF" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg><text x="16.37" y="16.85" textLength="26.54" lengthAdjust="spacingAndGlyphs" font-size="15" font-weight="600" fill="#FFF">Pay</text></svg></a>
<a class="dr-btn dr-btn--primary dr-btn--block" href="#"><svg class="dr-ic dr-ic--20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2.4"/><path d="M3 10.4h18"/><path d="M6.5 14.4h3.5"/></svg>Pay with card</a>
</div>
```

- `.dr-paylist` — The column of ways to pay, gap 8, the action bar's own rhythm, against the sheet's 12 out to *Cancel*.
- `.dr-btn--pay` — An express option: flat `#000`, the fill Apple and Google license, with no shadow.
- `.dr-paymark--pay` — The brand lockup, scaled into a 46 × 23 box so its word sits on the button label's own 15/600 step.
- `.dr-btn--primary` — DRON's own option, *Pay with card*, last in the list: the drawer's one green control and its one `--shadow-sm`.

## Variants

### Pay list

```html
<div class="dr-paylist" style="width:341px;max-width:100%">
<a class="dr-btn dr-btn--pay dr-btn--block" href="#" aria-label="Pay with Apple Pay"><svg class="dr-paymark dr-paymark--pay" viewBox="0 0 46 23" aria-hidden="true" focusable="false"><svg x="3.1" y="5.19" width="10.33" height="12.69" viewBox="0 0 814 1000" preserveAspectRatio="xMidYMid meet"><path fill="#FFF" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg><text x="16.37" y="16.85" textLength="26.54" lengthAdjust="spacingAndGlyphs" font-size="15" font-weight="600" fill="#FFF">Pay</text></svg></a>
<a class="dr-btn dr-btn--pay dr-btn--block" href="#" aria-label="Pay with Google Pay"><svg class="dr-paymark dr-paymark--pay" viewBox="0 0 46 23" aria-hidden="true" focusable="false"><svg x="0.79" y="4.04" width="14.7" height="15" viewBox="2 2 43.12 44" preserveAspectRatio="xMidYMid meet"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg><text x="18.67" y="16.85" textLength="26.54" lengthAdjust="spacingAndGlyphs" font-size="15" font-weight="600" fill="#FFF">Pay</text></svg></a>
<a class="dr-btn dr-btn--primary dr-btn--block" href="#"><svg class="dr-ic dr-ic--20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2.4"/><path d="M3 10.4h18"/><path d="M6.5 14.4h3.5"/></svg>Pay with card</a>
</div>
```

The three ways to pay in the drawer on `order-review`, each 341 × 44. The express marks read 21:1 (Apple's white) and 5.35–12.30:1 (Google's four-colour G) on black; *Pay with card* is charcoal on green at 9.46:1, 4.93% of the frame.

### Share channels

```html
<div class="dr-sheet__channels" style="width:341px;max-width:100%">
<button type="button" class="dr-channel"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.6a8.5 8.5 0 0 1-8.5 8.4c-1.6 0-3.1-.4-4.4-1.2L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.6z"/></svg>Message</button>
<button type="button" class="dr-channel"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7.5l9 6 9-6"/></svg>Email</button>
<button type="button" class="dr-channel"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg>More</button>
</div>
```

A channel is a glyph over a label, not a button with an icon: 22px glyph, 12/600 caption, on the secondary pair at 11.54:1, each an equal share of the row and at least 44 tall. Used on `share`, where the channels are the send action.

## When to use

Both rows are lists of ways out. The pay list is the content of the pay drawer that the action bar of `order-review` (and its aerial and inspection variants) opens: three ways to pay is under the picker's count rule, so a list rises instead of a page. The brand buttons come first and DRON's own *Pay with card* comes last. *Pay with card* pushes `payment`, while Apple Pay and Google Pay go straight to `payment-loading`, because the method is already chosen.

The express buttons are the palette's one licensed exception. `HIG · Apple Pay Marks and Buttons` and Google Pay's brand guidelines allow a button that starts their payment to be black, white or white with an outline, and nothing else, so they leave the warm ramp on purpose. Their accessible name, *Pay with Apple Pay*, is on the element; *Pay with card* is the one option DRON words itself, and it is printed. The card-entry drawer that *Add card* opens on `account-edit` is drawn by the [card number field](card-number-field.html) and the [sheet](sheet.html), not by this list.

The share channels name the place, not the act: *Message*, *Email*, *More*. The verb is the tap.

Sources: DESIGN.md § The pay drawer · inventory.md § 1 (Pay drawer, Card entry drawer) · microcopy.md § order-review, share · voice.md P3

## Rule

```html
<div class="dr-paylist" style="width:341px;max-width:100%">
<a class="dr-btn dr-btn--pay dr-btn--block" href="#" aria-label="Pay with Apple Pay"><svg class="dr-paymark dr-paymark--pay" viewBox="0 0 46 23" aria-hidden="true" focusable="false"><svg x="3.1" y="5.19" width="10.33" height="12.69" viewBox="0 0 814 1000" preserveAspectRatio="xMidYMid meet"><path fill="#FFF" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg><text x="16.37" y="16.85" textLength="26.54" lengthAdjust="spacingAndGlyphs" font-size="15" font-weight="600" fill="#FFF">Pay</text></svg></a>
<a class="dr-btn dr-btn--primary dr-btn--block" href="#"><svg class="dr-ic dr-ic--20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2.4"/><path d="M3 10.4h18"/><path d="M6.5 14.4h3.5"/></svg>Pay with card</a>
</div>
```

Express buttons in the brands' black, first; DRON's green *Pay with card* last, the drawer's only green control.

## Anti-rule

```html
<div class="dr-paylist" style="width:341px;max-width:100%">
<a class="dr-btn dr-btn--primary dr-btn--block" href="#">Apple Pay</a>
<a class="dr-btn dr-btn--primary dr-btn--block" href="#">Google Pay</a>
<a class="dr-btn dr-btn--primary dr-btn--block" href="#">Pay with card</a>
</div>
```

Every option green. It breaks both brands' button licence, which a real integration fails at review, and it spends the screen's accent three times: 14.78% of the frame where the rule is ~5%. Express payment wears `.dr-btn--pay`; only DRON's own option is a [primary button](button.html#variant-primary).
