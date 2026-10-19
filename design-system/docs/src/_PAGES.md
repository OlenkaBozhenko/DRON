# The component pages — the fixed list

One source file per row, `src/<slug>.md`. Slugs are fixed so pages can link each other before
all of them exist. `kit` is the line in `ui/kit.html` where the specimen row starts (`<div class="row">`
just above). Inventory rows are from `ui/inventory.md` § 1.

Grayscale-only inventory rows are NOT pages: their classes live in `wireframes/_wireframe.css`, not in
`design-system/`, so the showcase cannot draw them live — Small button (`.btn-sm`), Paired buttons
(`.row2`), Edit affordance, Icon button (`.icon-btn`), Tag, Search row, Stepper (`.counter`), Icon slot
(`.sq`), Tip block, Slider · pager (grayscale `.slider`). The inventory's "Switch — does not exist" row is
not a page either.

| slug | name | group | kit | inventory rows covered |
|---|---|---|---|---|
| button | Button | Actions | 500 | Primary, Secondary, Block, Disabled, Tertiary, Express wallet button — DONE, the reference page |
| screen-shell | Screen shell | Shell | 321 | Nav bar, Status bar, Tab bar, Home indicator, Brand slot, Back button |
| action-bar | Action bar | Shell | — (from wireframes, `footer.dr-actionbar`) | Action bar |
| section-heading | Section heading | Shell | 1632 (`.dr-sect`), 44 (`.dr-label` zone label) | Section heading, Zone label |
| screen-layout | Screen layout | Shell | 1762, 1819, 1872, 1900 | (layout helpers: `.dr-main--zones`, `.dr-center`, `.dr-note--balance`, `.dr-stack--zones`) |
| onscreen-keyboard | Onscreen keyboard | Shell | 406 | Onscreen keyboard |
| nav-bar-avatar | Nav-bar avatar | Shell | 475 | Nav-bar avatar |
| notification-bell | Notification bell | Shell | 475 | Notification bell |
| in-page-tabs | In-page tabs | Shell | 2774 | In-page tabs, Filter chip (applied `.dr-fchip`) |
| floating-action | Floating action | Actions | 558 | Floating action |
| circular-action | Circular action | Actions | 590 | Circular icon action, Icon action on a photograph, End call, Call control, Send action |
| card-actions | Card action slot | Actions | 623 | (`.dr-card__actions`) |
| identity-mark | Identity mark | Actions | 635 | Identity mark |
| pay-list | Pay list and share channels | Actions | 1690 | Pay drawer, Card entry drawer |
| call-surface | Call surface | Actions | 1093 | Call surface |
| order-card | Order card | Surfaces | 666 | Card (order), Status indicator, Inset strip |
| card | Card shapes | Surfaces | 859 | Card, Listing card |
| card-link | Card that is one link | Surfaces | 1381 | (`.dr-card__link`) |
| card-row | Card row | Surfaces | 1423 | Card row band |
| cover-card | Cover card | Surfaces | 949 | Cover card |
| row-panel | Row panel | Surfaces | 747 | Row panel |
| money-rows | Money rows | Surfaces | 921 | Total |
| price | Price above the action | Surfaces | 1353 | Price line |
| titled-zone-card | Titled zone card | Surfaces | 774 | Titled zone card |
| list | List | Surfaces | 803 | List container |
| operator-card | Operator card | Surfaces | 893 | Operator card |
| chip | Credential chip | Surfaces | 1052 | Verification badge |
| balance-block | Balance block | Surfaces | 1945 | Balance block |
| availability | Availability head and badge | Surfaces | 1984 | Availability head, Availability badge |
| earned-score | Earned score | Surfaces | 2019 | (`.dr-listing__score`, `.dr-stars`) |
| sheet | Sheet | Surfaces | 990 | Contact drawer, Action sheet |
| address-picker | Address picker | Surfaces | 2151 | Address drawer |
| filters-drawer | Filters drawer | Surfaces | 2205 | Tall drawer |
| map-screen | Results on the map | Surfaces | 1170 | Results on the map |
| finder | Finder | Surfaces | 2045 | Search home |
| chat-thread | Chat thread | Surfaces | 831 | Message thread |
| alerts-log | Alerts log | Surfaces | 1632 | (`.dr-log`) |
| rating-input | Rating input | Surfaces | 1720 | (`.dr-rating`, `.dr-star`) |
| profile-head | Profile head | Surfaces | 1489 | Profile head, Profile photo (large), Avatar edit |
| onboarding-slider | Onboarding slider | Surfaces | 1520 | Onboarding carousel |
| progress-rail | Progress rail | Progress | 2304 | (`.dr-node`, `.dr-rail`) |
| pager | Pager | Progress | 2346 | Pager |
| message-block | Message block | States | 2371 | Message block, Empty-state banner |
| banner-message | Banner message | States | 2482 | (`.dr-msg--banner`) |
| outcome | Outcome | States | 2414 | Outcome heading, Milestone mark |
| skeleton | Skeleton | States | 2446, 2515 | Skeleton bar, Skeleton card, Skeleton block, Skeleton body · media |
| toast | Toast | States | — (DESIGN.md § Toast, `components/toast.css`) | (`.dr-toast`) |
| well | Media well | Media | 2545 | Media well, Map |
| photo-pile | Photo pile | Media | 2568 | (`.dr-stack__shot`) |
| field | Field | Forms | 2618 | Form field, Input · select |
| text-area | Text area | Forms | 2947 | (`.dr-field--area`) |
| checkbox-radio | Checkbox and radio | Forms | 2670 | Checkbox, Radio |
| switch | Switch | Forms | 2706 | Switch |
| choice-card | Choice card | Forms | 2251 | Choice card |
| picker-row | Picker row | Forms | 2884 | Picker row |
| date-picker | Date picker | Forms | 1228 | Date picker, Time drawer row |
| price-range | Price range | Forms | 1300 | Range |
| upload-zone | Upload zone | Forms | 2825 | Upload zone |
| card-number-field | Card number field | Forms | 1458 | (`.dr-field__marks`) |
| language-switch | Language switch | Forms | — (`components/lang.css`, wireframes) | Language switch |
| ~~segmented-control~~ | — | — | — | NOT A PAGE: `.dr-segment` lives only in the ui/kit.css archive; retired for the picker row at rev 235 |
| disclosure-row | Disclosure row | Forms | — (`components/disclosure.css`) | Disclosure row |

## Wide screens (desktop, 2026-10-19)

What the desktop twins in `wireframes/desktop/` draw. Every desktop rule matches only inside `.dr-desk`, the
twins' frame, so the phone never reads any of it. Each page's specimens are copied from a named twin. The
tablet is being redesigned and shows *Coming soon*. Replaced on 2026-10-19 (phase 3 of
`responsive/desktop-to-system-brief.md`): *Wide shell* (the phone shell stretched, a mistake from the wrong
desktop) is now *Desktop shell*; *Wide grid and split* is removed — no twin draws it — and so is the
*Wide workspace* pattern.

| slug | name | group | kit | inventory rows covered |
|---|---|---|---|---|
| desktop-shell | Desktop shell | Wide screens | 3210 | Nav bar, Tab bar, Action bar (desktop: replaced by the frame, the header, the rails, Talk to AI) |
| wide-header | Desktop header | Wide screens | 3364 | (new) — navigation pill, Order, icon buttons, theme, profile chip, the logo link |
| desktop-window | Desktop window | Wide screens | 3391 | (new) — the step of a flow: head, scroll, foot; the search window; the window toast |
| desktop-panel | Desktop panel | Wide screens | 3468 | (new) — a tab root's content between the rails |
| hanging-cards | Hanging cards and Jobs tabs | Wide screens | 3546 | (new) — Activity and Jobs |
| side-panel | Side panel and flight | Wide screens | 3667 | (new) — the wait: side panel, live line, the route and the flying drone, the note on the map |
| map-route | Map route and pin | Wide screens | 3737 | (new) |
| call-chat-window | Call and chat windows | Wide screens | 3797 | Call surface, Message thread (desktop) |
| entry-window | Entry window | Wide screens | 3836 | Onboarding carousel (desktop) — signed-out windows, Previous / Next |
| operator-home | Operator home | Wide screens | 3883 | (new) — drone links, rail rows, availability card |
| window-outcome | Outcome in a window | Wide screens | 3930 | Outcome heading, Milestone mark (desktop) |
| review-card | Review card | Wide screens | 3958 | (new) |
| drop-zone | Drop zone | Wide screens | 3975 | Upload zone (desktop) |
| material-panel | Material panel | Wide screens | 3984 | (new) |
| stat-card | Stat card | Wide screens | 4008 | (new) |
| assistant | Assistant | Wide screens | 4017 | (new) — with the service card and Talk to AI |
| map-ground | Map ground | Wide screens | 4033 | (new) |
| bar-chart | Bar chart card | Wide screens | 4045 | (new) |
| tally-card | Tally card and live order | Wide screens | 4056 | (new) |
| place-field | Place field and last search | Wide screens | 4072 | (new) |
| console | Console | Wide screens | 4084 | (new) — the client home's layout |
