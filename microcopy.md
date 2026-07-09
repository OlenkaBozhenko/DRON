# DRON — Wireframe Microcopy Register

_Every interface string across all 83 wireframe pages (`wireframes/*.html`), transcribed verbatim. This is step one — a faithful inventory. It becomes the **source of truth**: the table each product string is checked against._

> Scope: text inside each page's `.wf-frame` (the actual screen). The `.meta` annotation panel and the JS-injected shell nav (`wireframes/_wf-shell.js`) are excluded — they are wireframe scaffolding, not product copy.

> Language: English, per the project rule that all repo files are written in English (`CLAUDE.md` › Content Rules). The UI copy itself is already English.


## Rewrite log — Batch 1: listings (base · empty · error · loading)

First screens rewritten against `voice.md` (Step 02). **Text only — structure and markup unchanged.** Base `listings.html` was already voice-compliant, so its strings are kept. User content and wireframe placeholders are left as-is. The master table below still shows the pre-rewrite strings; it will be regenerated across all screens once this approach is approved.

**Changed**

| Screen | Zone | Type | Before | After | Why (voice.md) |
|---|---|---|---|---|---|
| listings-empty | Counter | State message | Nothing found | 0 services | Microcopy › empty: state the fact; mirrors base "3 services" |
| listings-empty | Service list | State message (title) | Nothing found | No services match your search | Microcopy › empty: say *why* it's empty |
| listings-empty | Service list | State message (body) | No services match “crop spraying” and your current filters. Clear the filters or change your search. | No services match “crop spraying” with your filters. Clear the filters or search again. | Tightened; leads straight to the action (query echo kept — it's the user's input) |
| listings-error | Counter | State message | List unavailable | Couldn't load | Plain status |
| listings-error | Service list | State message (title) | Couldn't load the list | Couldn't load services | Dictionary word *services*, not "the list"; Microcopy › error: what happened |
| listings-error | Service list | State message (body) | No connection to the server. Check your internet and try again. | No internet connection. Check it and try again. | P4 plain (drop "server"); Microcopy › error: what to do |
| listings-error | Service list | Button | Help | Contact support | Vocabulary **A2** — one label to reach a human |
| listings-loading | Counter | State message | Loading… | Loading services… | Microcopy › loading: name what's loading, never a bare "Loading…" |
| listings-loading | Service list | Button | Show services | Browse services | Vocabulary **A4** — retire "Show services" |

**Kept deliberately (before = after)**
- **`listings.html` (base) — all strings:** service cards (*Package delivery* / "Parcels, documents, small goods — across the city", *Aerial photo & video*, *Inspection*), counter *3 services available now · Kyiv*, *Sort: Recommended*, category chips (*All / Delivery / Aerial photo & video / Inspection*), footer nav (*Order · Activity · Help · Account*), search hint *Search services*. Already compliant — plain outcome words (P4), canonical nav, facts only.
- **`crop spraying`** (empty-state search value) — **USER** content, never rewritten.
- **`EMPTY` / `ERROR` / `LOGO`** badges — **WF-PH** wireframe placeholders, not product copy.
- **`Try again`** (error), **`Clear filters`** / **`Notify me when available`** (empty) — already canonical (A1, A8).
- **Footer `Help` tab** — kept: it is the global-nav *section* name (Order · Activity · **Help** · Account), a different thing from the *action* "Contact support" (which is why the error button changed but the tab did not).

---

## Rewrite log — Batch 2: all remaining screens

Step 02, wave 2 — the other 36 screens (79 files) rewritten to `voice.md`, one agent per screen. **Text only; structure, hrefs, the `.meta` annotation panel, user content and placeholder badges untouched.** Fully voice-compliant screens were left unchanged and are noted below. Changes were auto-committed per file by the repo's `auto: update` automation.

**Screens already compliant (no change):** `onboarding-operator`, `signin`.

**123 strings changed across 34 screens.**


| Screen | File | Zone | Type | Before | After |
|---|---|---|---|---|---|
| account | account.html | Mode | body | Operator — provide services | Operator — take jobs |
| account | account-edit.html | Header / topbar | button | ‹ Back | ‹ Back to Account |
| account | account-edit.html | Documents (Drone documents) | button | Upload document | Add document |
| account | account-edit.html | Documents (Insurance) | button | Upload document | Add document |
| contact-support | contact-support.html | Topbar | button | ‹ Back | ‹ Back to Help |
| contact-support | contact-support.html | Message | placeholder | Tell the agent what's still wrong and what you'd like to happen. | Describe the issue and what you'd like to happen. |
| contact-support | contact-support.html | Outcome (actionbar) | button | Escalate — still unresolved | Still unresolved |
| contact-support | contact-support-error.html | Topbar | button | ‹ Back | ‹ Back to Help |
| contact-support | contact-support-error.html | Escalation | state message | Added to the escalation queue | Sent to a senior agent |
| contact-support | contact-support-error.html | Outcome (actionbar) | button | Back to orders | Back to Activity |
| contact-support | contact-support-error.html | Outcome (actionbar) | button | Try support again | Contact support |
| delivery | delivery.html | Confirmation / footer CTA | button | Rate the order | Rate this order |
| delivery | delivery-error.html | Proof of delivery (error alert) | state message | Proof of delivery is missing | Delivery photo is missing |
| delivery | delivery-error.html | Proof of delivery (error alert) | state message | The operator hasn't uploaded a delivery photo and the confirmation window has passed. Don't confirm until you have proof. | The operator hasn't uploaded a delivery photo and the confirmation window has passed. Without it, the order can't be confirmed or paid. Report an issue and support will resolve it. |
| delivery | delivery-loading.html | Waiting for proof (loading) | state message | Waiting for proof… | Waiting for the delivery photo… |
| delivery | delivery-loading.html | Waiting for proof (loading, aria-label) | body | Waiting for proof | Waiting for the delivery photo |
| delivery | delivery-loading.html | Proof of delivery (loading CTA) | button | Proof received | View delivery photo |
| inspection-report | inspection-report.html | Action footer | button | Rate the order | Rate this order |
| inspection-report | inspection-report-error.html | Report (no proof) | state message | The operator marked the inspection done but no photos or findings arrived in time. Without proof the job can't be completed or paid — let's sort it out. | The operator marked the inspection done but no photos or findings arrived in time. Without proof the job can't be completed or paid. Contact support to resolve it. |
| inspection-report | inspection-report-error.html | Report (recovery) | button | Refresh | Try again |
| inspection-report | inspection-report-loading.html | Status | state message | Report not uploaded yet… | The operator is still uploading the report… |
| inspection-report | inspection-report-loading.html | Action footer | button | Rate the order | Rate this order |
| job-brief | job-brief-error.html | Brief (stand-down) | button | Back to jobs | Back to Jobs |
| job-checklist | job-checklist.html | Pre-flight & job steps (checklist) | body | Confirm handover with recipient | Confirm handover with the client |
| job-checklist | job-checklist.html | Action bar (footer CTA) | button | Complete & upload result | Complete & add delivery photo |
| job-checklist | job-checklist-error.html | Pre-flight & job steps (checklist) | body | Confirm handover with recipient | Confirm handover with the client |
| job-checklist | job-checklist-error.html | Cannot close yet (error block) | state message | Finish the required step | Required steps still open |
| job-offer | job-offer.html | Offer | body | · pays on completion | · paid on completion |
| job-offer | job-offer-empty.html | Offer (empty state) | state message | Offer expired | Job expired |
| job-offer | job-offer-empty.html | Offer (empty state) | state message | You didn't respond in time, so this job was reassigned to another operator. New offers will appear here. | You didn't respond in time, so this job was reassigned to another operator. New jobs will appear here. |
| job-offer | job-offer-empty.html | Offer (empty state) | button | Back to jobs | Back to Jobs |
| job-offer | job-offer-empty.html | Footer note | body | Offers auto-expire after 10s to keep dispatch moving. | Jobs auto-expire after 10s to keep dispatch moving. |
| listings-subviews | listings-filters.html | Filter sheet header | button | Reset | Clear all |
| onboarding-client | onboarding-client.html | Slider · Slide 1 (verified) | body | DRON assigns the nearest certified, insured pilot. You don't choose or guess. | DRON assigns the nearest certified, insured operator. You don't choose or guess. |
| onboarding-client | onboarding-client.html | Slider · Slide 2 (live) | heading | Watch it live | Track it live |
| onboarding-client | onboarding-client.html | Slider · Slide 3 (proof) | heading | Proof every time | A photo or report, every time |
| onboarding-client | onboarding-client.html | Slider · Slide 3 (proof) | body | Get a photo or a report the moment the job is done. | Get a photo or a report the moment it's done. |
| onboarding-client | onboarding-client-empty.html | Explainer · one-card fallback | heading | The short version | How DRON works |
| onboarding-client | onboarding-client-empty.html | Explainer · one-card fallback | body | A certified, insured operator does the job. You track it live and pay only online — nothing to manage. | A certified, insured operator does the work. You track it live and pay only online — nothing to manage. |
| onboarding-client | onboarding-client-empty.html | Action bar | button | Start ordering | Get started |
| operator-dispute | operator-dispute.html | Client claim | body | Client reports | Client's issue |
| operator-dispute | operator-dispute.html | Your response | field label | Reply to the client | Your response |
| operator-dispute | operator-dispute.html | Your response / Evidence | button | Attach evidence | Add evidence |
| operator-dispute | operator-dispute-error.html | Status — Payment held | state message | ₴800 for Job #DR-2841 stays on hold while the dispute is reviewed. Add more evidence to your response, or bring in a human to resolve it. | ₴800 for Job #DR-2841 stays on hold while the dispute is reviewed. Add more evidence to your response, or contact support to resolve it. |
| operator-dispute | operator-dispute-error.html | Actionbar | button | Back to jobs | Back to Jobs |
| operator-fee-terms | operator-fee-terms.html | Value intro | body | DRON dispatches pre-qualified jobs to you, insures every flight, and pays out automatically. Here's what you keep and how you get paid. | DRON dispatches pre-qualified jobs to you, insures every flight, and pays you automatically. Here's what you keep and how you get paid. |
| operator-fee-terms | operator-fee-terms.html | Fee terms | field label | Payout | Payment |
| operator-fee-terms | operator-fee-terms.html | Fee terms | field label | Minimum payout | Minimum withdrawal |
| operator-listings | operator-listings.html | Status | state message | · receiving offers near Podil | · receiving jobs near Podil |
| operator-listings | operator-listings.html | Counter | state message | 2 new offers · 1 active job · nearest first | 2 new jobs · 1 active job · nearest first |
| operator-listings | operator-listings.html | Incoming offers | placeholder | Package delivery offer — open brief | Package delivery job — open brief |
| operator-listings | operator-listings.html | Incoming offers | placeholder | Roof inspection offer — open brief | Roof inspection job — open brief |
| operator-listings | operator-listings-empty.html | Status | state message | · no offers while offline | · no jobs while offline |
| operator-listings | operator-listings-empty.html | Offers (empty state) | state message | No offers while you're offline | No jobs while you're offline |
| operator-profile-setup | operator-profile-setup.html | Topbar | button | ‹ Back | ‹ Back to Verification |
| operator-profile-setup | operator-profile-setup.html | Name & bio — Short bio | placeholder | Need help? Start from a template — 1–2 lines is enough. | 1–2 lines clients see. Your experience and the area you cover. |
| operator-signup | operator-signup.html | Header / top bar | heading | Sign up | Sign in |
| operator-signup | operator-signup.html | Sign up (identity) | body | DRON verifies every operator. Confirm who you are with Diia or BankID — then upload your licence and insurance. | DRON verifies every operator. Confirm who you are with Diia or BankID — then add your licence and insurance. |
| operator-signup | operator-signup-error.html | Header / top bar | heading | Sign up | Sign in |
| operator-signup | operator-signup-error.html | Sign up (error) | state message | Diia declined the request or the details didn't match. You can try again, or get help if this keeps happening. | Diia declined the request or the details didn't match. You're not verified yet. Try again, or contact support if this keeps happening. |
| operator-signup | operator-signup-error.html | Sign up (error) — action bar | button | Get help | Contact support |
| operator-signup | operator-signup-loading.html | Header / top bar | heading | Sign up | Sign in |
| operator-signup | operator-signup-loading.html | Sign up (loading) | state message | Hold on a moment | Verifying your identity… |
| operator-signup | operator-signup-loading.html | Sign up (loading) | state message | Verifying your identity… | Confirming your details with Diia. This takes a few seconds. |
| operator-verification | operator-verification-error.html | Documents | state message | Insurance document is expired. Upload a current policy that covers commercial drone operation, then resubmit. | Insurance document is expired. Add a current policy that covers commercial drone operation, then submit again. |
| operator-verification | operator-verification-error.html | Documents | button | Re-upload documents | Add documents again |
| operator-verification | operator-verification-loading.html | Documents | button | Back to home | Back to Jobs |
| order-confirmed | order-confirmed.html | Confirmation | heading | You're all set | Payment received |
| order-confirmed | order-confirmed.html | Confirmation | state message | Payment received. Your operator is on the way. | Your operator is on the way. |
| order-confirmed | order-confirmed-empty.html | Confirmation | heading | You're all set | Payment received |
| order-confirmed | order-confirmed-empty.html | Confirmation | state message | Payment received. Your operator is on the way. | Your operator is on the way. |
| order-confirmed | order-confirmed-error.html | Refund | state message | No certified operator could take the job just now. A full refund to your card is already on its way. | No certified operator could take your order just now. A full refund to your card is already on its way. |
| order-confirmed | order-confirmed-loading.html | Matching | state message | Matching you with the nearest certified, insured pilot near Podil. | Matching you with the nearest certified, insured operator near Podil. |
| order-history | order-history-empty.html | Past orders (empty state) | state message | Your past orders show up here, ready to re-book in one tap. Start with your first drone service. | Your orders appear here, ready to re-book in a tap. |
| order-review | order-review.html | Topbar | heading | Review | Order review |
| order-review | order-review-loading.html | Topbar | heading | Review | Order review |
| order-setup | order-setup-empty.html | Availability / No operator available | button | Notify me when one is free | Notify me when available |
| order-setup | order-setup-error.html | Details form / Drop-off field | state message | Outside the service zone. DRON covers Kyiv city for delivery — try an address within the city. | Outside the service zone. DRON delivers within Kyiv city — enter an address in the city. |
| payment | payment-loading.html | Authorizing payment | state message | Authorizing… | Authorizing your payment… |
| rate | rate.html | Rating | heading | How was it? | Rate this order |
| rate | rate.html | Review | placeholder | What went well? Anything to improve? | What the operator did well, and anything to improve |
| ratings | ratings-empty.html | Overall (no ratings yet) | state message | You haven't been rated yet. Ratings build from your first jobs — the platform keeps auto-dispatching work to you until they do. | You haven't been rated yet. Ratings build from your first jobs — the platform keeps sending you jobs until they do. |
| ratings | ratings-empty.html | Overall (no ratings yet) | button | See available jobs | Find jobs |
| report-issue | report-issue.html | Topbar | button | ‹ Back | ‹ Back to Help |
| report-issue | report-issue.html | Report form · Issue type | field label | Poor quality — result not as expected | Poor quality — not as expected |
| report-issue | report-issue.html | Report form · What happened? | placeholder | Describe the problem — e.g. the roof photos were blurry and missed the north side. | Describe the issue — e.g. the roof photos were blurry and missed the north side. |
| report-issue | report-issue-empty.html | Topbar | button | ‹ Back | ‹ Back to Help |
| report-issue | report-issue-empty.html | Actionbar | button | Contact human support | Contact support |
| report-issue | report-issue-loading.html | Topbar | button | ‹ Back | ‹ Back to Help |
| resolution | resolution.html | Outcome | body | We reviewed your report and refunded this order — no questions asked. | We reviewed your report and refunded this order in full. |
| resolution | resolution.html | Outcome | body | Refunded to Visa •••• 4921. Prefer a fresh attempt instead? Book a free re-do below. | Refunded to Visa •••• 4921. Or book this order again for free below. |
| resolution | resolution.html | Next steps | button | Book a free re-do | Book again — free |
| resolution | resolution.html | Next steps | button | Still not resolved? | Contact support |
| result-upload | result-upload.html | Notes | placeholder | Handover notes, recipient name… | Handover notes, client name… |
| result-upload | result-upload-error.html | Result photo (upload error) | state message | The result photo didn't upload — weak signal. Retry now, or queue it to upload automatically when you're back online. Payment is held until proof arrives. | The delivery photo didn't upload — weak signal. Try again, or queue it to upload automatically when you're back online. Payment is held until the photo uploads. |
| result-upload | result-upload-error.html | Result photo (upload error) | button | Retry upload | Try again |
| result-upload | result-upload-error.html | Action bar note | state message | Payment stays held until the proof photo uploads. | Payment stays held until the delivery photo uploads. |
| result-upload | result-upload-loading.html | Uploading status | state message | Uploading result… | Uploading delivery photo… |
| role-select | role-select.html | Role choice | body | PILOT | OPERATOR |
| role-select | role-select.html | Role choice | body | You're a certified drone pilot — get dispatched jobs and get paid. | You're a certified drone operator — take jobs and get paid. |
| share | share-empty.html | Invite not sent (empty state) | state message | You didn't send it yet | Invite not sent yet |
| support | support.html | Support intro | heading | How can we help? | What happened? |
| support | support.html | Support intro | body | Tell us what went wrong with your order and we'll get it put right. | Pick the issue with your order and we'll route it to the right fix. |
| support | support.html | Triage list — didn't arrive | body | We'll re-dispatch a new operator now — or refund you, no questions. | We'll send a new operator now, or refund your order. |
| support | support.html | Triage list — quality | button | Result wasn't what I expected | The photo or report wasn't what I expected |
| support | support.html | Triage list — safety | body | Talk to a human straight away — support is online 24/7. | Contact support straight away — online 24/7. |
| support | support.html | Human fallback | button | Talk to a human | Contact support |
| switch-role | switch-role.html | Topbar | button | ‹ Back | ‹ Back to Account |
| switch-role | switch-role.html | Confirm / Cancel (actionbar) | button | Confirm & switch | Switch to Operator |
| time-slot | time-slot-empty.html | Slots (empty state) | state message | Every operator is booked that day. Try another date — Fri 4 and Sat 5 still have openings. | Every operator is booked that day. Pick another day — Fri 4 and Sat 5 still have openings. |
| tracking | tracking.html | Actionbar (footer) | button | Delivery details | View details |
| tracking | tracking-error.html | Live map / tracking lost | state message | We've lost the live signal from the operator's device. The job is still active. | We've lost the live signal from the operator's device. Your order is still active. |
| tracking | tracking-error.html | Live map / tracking lost | button | Refresh | Try again |
| wallet | wallet.html | Balance | state message | Paid: ₴800 for 'Aerial photo & video' added 12 min ago. | ₴800 paid for 'Aerial photo & video', added to your balance 12 min ago. |
| wallet | wallet.html | Balance | button | Withdraw | Withdraw ₴3,240 |
| wallet | wallet-empty.html | Keep earning / empty | heading | Almost there | Below the withdrawal minimum |
| wallet | wallet-empty.html | Keep earning / empty | state message | You need ₴500 to cash out. Take one more job to reach the payout minimum. | You need ₴500 to withdraw. Take one more job to reach the minimum. |
| wallet | wallet-empty.html | Keep earning / empty | placeholder | KEEP GOING | EMPTY |
| welcome | welcome.html | Slider · slide 3 (drone facts) | body | It flies a set route, keeps its distance, and only records what your job needs. Brief low noise on take-off and landing; no filming of your neighbours. | It flies a set route, keeps its distance, and only records what your order needs. Brief low noise on take-off and landing; no filming of your neighbours. |
| welcome | welcome-empty.html | One-card fallback (15-second version) | body | Order a drone service — a certified, insured operator does the flying. You see their name, photo and live position the moment you pay, and get proof when it's done. The drone flies a set route and only records what your job needs. | Order a drone service — a certified, insured operator does the flying. You see their name, photo and live position the moment you pay, and get a photo or report when it's done. The drone flies a set route and only records what your order needs. |
| withdraw | withdraw.html | Withdrawal method | field label | Payout method | Withdrawal method |
| withdraw | withdraw.html | Withdrawal method | field label | aria-label="Payout method" | aria-label="Withdrawal method" |
| withdraw | withdraw-error.html | Payout error | state message | Payout didn't go through | Withdrawal didn't go through |

### Cross-screen consistency check

After the full pass, every term pinned by the `voice.md` **Vocabulary** is now applied the same way on every screen — verified across all final button/heading labels:

- **reach a human = `Contact support`** everywhere (the `Help` tab is the global-nav *section* name, a different thing — kept); phone action stays `Call support`.
- **recover from error = `Try again`** (all `Refresh` / `Retry` / `Get help`-as-recover eliminated); the qualified `Try again with Diia` is the allowed variant.
- **attach = `Add …`** (`Upload` / `Attach` gone) · **open an order = `View details`** (`Delivery details` gone) · **re-order = `Book again`** (free variant `Book again — free`) · **operator find work = `Find jobs`** (`See available jobs` gone) · **submit to platform = `Submit …`**, send to a person = `Send …`.
- Object terms fully unified: **operator** (no `pilot`), client **order** vs operator **job** (no cross-leak, no stray `offer`), **issue** (no `problem`/`went wrong`), **delivery photo / inspection report** (no `result`/`proof` as an object), **Withdraw / withdrawal** + **paid/payment** (no `cash out`/`payout`), **Sign in** (no `Sign up`), **client** (no `recipient`).

**Remaining divergences** — labels the Vocabulary does *not* pin, which different agents worded differently. Nothing auto-fixed; listed for your decision:

| # | Same action | Labels now in the build (screens) | Recommended canonical | Status |
|---|---|---|---|---|
| **D1** | **Top-bar back chevron** | was `‹ Back` (~16 screens) vs `Back to {Section}` (a few) | **decision: `Back to {Section}` everywhere** — every top-bar back names its destination | **Resolved** — applied to all 36 top-bar backs |
| **D2** | Attach a document, redo after rejection | `Add document` vs `Add documents again` | `Add document` / redo = **`Add document again`** (singular) | **Resolved** |
| **D3** | Escalate an unresolved case | `Still unresolved` (contact-support) · `Contact support` (resolution) | keep split: inside the support chat = escalation `Still unresolved`; from elsewhere = `Contact support` | confirm |
| **D4** | Switch to another pay/payout method | `Change method` (payment-error) · `Use bank transfer` (withdraw-error) | contextual (each names the alternative) — acceptable, or standardize to `Change method` | your call |
| **D5** | Transient loading-advance vs the real CTA | `Continue` (order-review-loading, payment-loading, signin-loading, operator-signup-loading) vs the success CTA (`Pay ₴180`, …) | a disabled copy of the real verb (e.g. disabled `Pay ₴180`) | structural, later |
| **D6** | Dismiss / defer a step | `Skip` (onboarding) · `Cancel` (forms/dialogs) · `Maybe later` (fee-terms, share) | contextual split (skip intro / cancel action / decline offer) — acceptable | note |
| **D7** | In-content back to a non-nav destination | `Back to Jobs` (×4, correct) · `Back to setup` (time-slot) · `Back to live tracking` (delivery) | `Back to {Section}` where a nav section exists; contextual name otherwise | acceptable |

**D1 resolved — decision: `Back to {Section}` everywhere.** All 36 top-bar back buttons now name their destination; no bare `‹ Back` remains. Destinations use the nav-section label where the target is a section (`Back to Jobs · Earnings · Activity · Account · Help · Order`) and the destination screen's name for in-flow steps (`Back to Order setup · Order review · Checklist · Job brief · Sign in · Operator terms · Verification · live tracking · rating · intro`). The in-content recovery buttons that already named a destination were aligned to the same wording (e.g. `Back to setup` → `Back to Order setup`). **D2 resolved** (`Add document again`). D3–D7 left as noted — contextually acceptable — pending any further call.

---

## How to read the Flag column

| Flag | Meaning |
|---|---|
| _(blank)_ | Fixed UI copy — in scope for wording decisions. |
| **USER** | Text an end-user writes (reviews, dispute claims, delivery notes, search query, operator bio). **We do not control or rewrite this.** |
| **DATA** | Dynamic / sample values (operator & client names, avatars, addresses, prices, ETAs, dates, IDs, card numbers, referral link). Placeholder data, not fixed copy. |
| **WF-PH** | Uppercase media / badge placeholder in a bordered box (`MAP`, `LICENCE`, `DELIVERY PHOTO`, `DONE`, `EMPTY`…). Intentional wireframe convention (`wireframes/_conventions.md` §8), **not** leftover lorem. |
| **O1–O8** | Same *thing* named differently across screens (see catalogue). |
| **A1–A10** | Same *action* with different button labels (see catalogue). |
| **TONE** | Cheery / conversational-AI phrasing to reconsider. |

## Inconsistency catalogue — same meaning, different words

_Nothing rewritten here — only marked. Each code below is applied in the Flag column of the master table._

| Code | Same thing | Where it clashes |
|---|---|---|
| **O1** | operator vs pilot | The person doing the job is **operator** almost everywhere (Verified operator, Your operator, Operator terms, onboarding-operator) but **pilot** on `role-select`, `onboarding-client` and `order-confirmed-loading` ("certified, insured pilot", "certified drone pilot"). |
| **O2** | job vs offer (operator's incoming work) | The incoming unit is titled **New job** (`job-offer`, `job-offer-empty`) yet the body calls it an **offer** ("2 new offers", "Incoming offers", "Offer expired", "receiving offers"). Job and offer are used interchangeably for the same object on the operator side. |
| **O3** | order vs job (naming the work per persona) | Client-side the work is an **order** (Order confirmed, Order history, "Back to orders"); operator-side it is a **job** ("Back to jobs", Close job, Jobs). Largely an intentional persona split — but note `contact-support-error` says **"Back to orders"** while the section it returns to is labelled **"Activity"** everywhere else. |
| **O4** | issue vs problem vs dispute (the complaint) | Client raises an **issue** (Report an issue, Issue type) but the field asks "**Describe the problem**" / "**What happened?**", and support says "what **went wrong**". The same event on the operator side is a **Dispute**. Three+ names for one concept. |
| **O5** | result vs proof vs report (operator's uploaded evidence) | The operator's completion evidence is **result photo** (`result-upload`), **proof / delivery photo** (`delivery`), and **report** (`inspection-report`). Same deliverable, three words — sometimes on adjacent screens of one flow. |
| **O6** | withdraw vs cash out vs payout | The money-out action is **Withdraw** (button/title) but described as **cash out** (`wallet-empty`) and **payout** (Minimum payout, Payout method, "Payout didn't go through"). Three terms for one action. |
| **O7** | sign in vs sign up vs confirm identity vs verify | Client screen: **Sign in to DRON**. Operator screen: **Sign up** → body **Confirm your identity** → later step **Verification** / **Verifying your identity**. The same Diia/BankID step is named differently across personas and screens. |
| **O8** | client vs recipient (who receives the delivery) | Operator checklist says **Confirm handover with recipient** and result notes ask for **recipient name**, while elsewhere the receiving party is the **client**. May be deliberate (recipient ≠ payer) — flag for a decision. |
| **A1** | recover from error | **Try again** (5 screens) vs **Refresh** (`inspection-report-error`, `tracking-error`) vs **Retry upload** (`result-upload-error`) vs **Try again with Diia** vs **Try support again**. Same recover action, four verbs. |
| **A2** | reach a human | **Contact support** (7×), **Call support**, **Contact human support**, **Talk to a human**, **Get help**, and **Escalate — still unresolved** all mean "get a person". |
| **A3** | attach a file | **Add photo** / **Add document** / **Upload document** / **Add evidence** / **Attach evidence** — the same attach action. Note **Add document** and **Upload document** appear for the very same document-upload pattern (`operator-verification` vs `account-edit`). |
| **A4** | begin ordering (client CTA) | **Get started** (welcome, both onboardings) vs **Start ordering** (`onboarding-client-empty`) vs **Browse services** (`order-history-empty`) vs **Show services** (`listings-loading`). Same "start ordering" intent. |
| **A5** | re-order the same service | **Book again** (`order-history`, `rate`) vs **Book a free re-do** (`resolution`) vs body "re-book in one tap". |
| **A6** | see order/job detail | **View details** (`order-history`) vs **Delivery details** (`tracking`) for opening the same order. |
| **A7** | operator: go get work | **Find jobs** (`wallet-empty`) vs **See available jobs** (`ratings-empty`) vs **Go Available** (`operator-listings-empty`). |
| **A8** | notify me when a slot/operator frees up | **Notify me when available** (`listings-empty`) vs **Notify me when one is free** (`order-setup-empty`). |
| **A9** | submit vs send | The dominant submit verb is **Submit …** (report, response, review, & close job). `share` breaks it with **Send invite**. |
| **A10** | back-to-X object naming | **Back to jobs / Back to orders / Back to home / Back to setup / Back to live tracking** — the destination noun shifts per screen (see also O3). |

### TONE — cheery / conversational-AI phrasing

| Screen | String |
|---|---|
| inspection-report-error | The operator marked the inspection done but no photos or findings arrived in time. Without proof the job can't be completed or paid — let's sort it out. |
| onboarding-client-empty | The short version |
| operator-profile-setup | Need help? Start from a template — 1–2 lines is enough. |
| operator-signup-loading | Hold on a moment |
| order-confirmed-empty | You're all set |
| order-confirmed | You're all set |
| rate | How was it? |
| resolution | We reviewed your report and refunded this order — no questions asked. |
| wallet-empty | KEEP GOING |
| wallet-empty | Almost there |

**Also checked (clean):** no exclamation marks anywhere; no emoji (the `★` in "4.9 ★" is a rating glyph, not decoration); no `lorem`/`TODO`/`TBD` stubs. The uppercase boxes (`MAP`, `LICENCE`, `DONE`…) are the intended wireframe placeholder convention, flagged **WF-PH**, not leftover filler.


### USER — text the end-user writes (do not rewrite)

| Screen | Zone | String |
|---|---|---|
| job-brief | Notes | Leave with the concierge, entrance code 4417. |
| listings-empty | Search & filters | crop spraying |
| operator-dispute | Client claim | “The photos are blurry — I can't use them for the listing.” |
| operator-profile-setup | Profile photo | Certified operator since 2023. Fast, careful deliveries across Kyiv… |
| ratings | Recent reviews | “Fast and careful — package arrived sealed and on time.” |
| ratings | Recent reviews | “Good shots overall, a couple came out a bit dark.” |
| ratings | Recent reviews | “Clear roof footage, spotted the leak we couldn't see.” |

## Master table — every string

_Columns: Screen · Zone · Text (verbatim) · Type · Flag. One row per string, in document order._

| Screen | Zone | Text | Type | Flag |
|---|---|---|---|---|
| account-edit | — | Edit account | Heading |  |
| account-edit | Personal | Full name | Field label |  |
| account-edit | Personal | Olena B. | Field value | DATA |
| account-edit | Personal | Phone | Field label |  |
| account-edit | Personal | Used for order updates and operator contact. | Body |  |
| account-edit | Documents | Drone documents | Field label |  |
| account-edit | Documents | DRONE REGISTRATION / DOCUMENTS | Body | WF-PH |
| account-edit | Documents | Upload document | Button | A3 attach a file (Add/Upload/Attach) |
| account-edit | Documents | Registration, serial, or manufacturer papers (PDF / photo). | Body |  |
| account-edit | Documents | Insurance | Field label |  |
| account-edit | Documents | INSURANCE DOCUMENT | Body | WF-PH |
| account-edit | Documents | Upload document | Button | A3 attach a file (Add/Upload/Attach) |
| account-edit | Documents | Valid liability insurance covering the drone. | Body |  |
| account-edit | Preferences | Payment method | Field label |  |
| account-edit | Preferences | Visa •••• 4921 | Body | DATA |
| account-edit | Preferences | Saved address | Field label |  |
| account-edit | Preferences | Podil, 21 | Field value | DATA |
| account-edit | Preferences | Language | Field label |  |
| account-edit | Preferences | English | Body |  |
| account-edit | Preferences | Cancel | Button |  |
| account-edit | Preferences | Save changes | Button |  |
| account | — | Account | Heading |  |
| account | Profile | OB | Body | DATA |
| account | Profile | Olena B. | Body | DATA |
| account | Profile | Verified with Diia | Body |  |
| account | Profile | Client | Body |  |
| account | Mode | Client mode | Body |  |
| account | Mode | Client — order services | Body |  |
| account | Mode | current | Body |  |
| account | Mode | Operator — provide services | Body |  |
| account | Mode | switch | Body |  |
| account | Mode | Switching changes what the app shows. Your Diia identity stays the same. | Body |  |
| account | Account | Payment method | Body |  |
| account | Account | Visa •••• 4921 | Body | DATA |
| account | Account | Saved address | Body |  |
| account | Account | Podil, 21 | Body |  |
| account | Account | Language | Body |  |
| account | Account | English | Body |  |
| account | Account | Member since | Body |  |
| account | Account | Order | Button |  |
| account | Account | Activity | Button |  |
| account | Account | Help | Button |  |
| account | Account | Account | Button |  |
| contact-support-error | — | Support | Heading |  |
| contact-support-error | Escalation | QUEUE | State message | WF-PH |
| contact-support-error | Escalation | Added to the escalation queue | State message |  |
| contact-support-error | Escalation | We couldn't resolve this in chat, so a senior agent will review order #DR-4821 against our support policy and follow up. You don't need to wait here. | State message |  |
| contact-support-error | Escalation | Back to orders | Button | O3 order/job (client vs operator name for the work) |
| contact-support-error | Escalation | Try support again | Button | A1 recover from error (Try again/Refresh/Retry) |
| contact-support | — | Support | Heading |  |
| contact-support | Agent panel | DR | Body | DATA |
| contact-support | Agent panel | DRON Support | Body |  |
| contact-support | Agent panel | Online 24/7 · typically replies in ~3 min | Body | DATA |
| contact-support | Agent panel | Human agent | Body |  |
| contact-support | Agent panel | Order #DR-4821 | Body |  |
| contact-support | Message | Your message | Field label |  |
| contact-support | Message | Tell the agent what's still wrong and what you'd like to happen. | Field placeholder |  |
| contact-support | Message | Call support | Button | A2 reach a human (Contact support/Call support/Talk to a human/Get help) |
| contact-support | Message | Mark resolved | Button |  |
| contact-support | Message | Escalate — still unresolved | Button | A2 reach a human (Contact support/Call support/Talk to a human/Get help) |
| delivery-error | — | Delivered | Heading |  |
| delivery-error | Proof of delivery | NO PROOF | State message | WF-PH |
| delivery-error | Proof of delivery | Proof of delivery is missing | State message | O5 result/proof/report (operator deliverable) |
| delivery-error | Proof of delivery | The operator hasn't uploaded a delivery photo and the confirmation window has passed. Don't confirm until you have proof. | State message |  |
| delivery-error | Proof of delivery | Back to live tracking | Button | A10 back-to-X object naming |
| delivery-error | Proof of delivery | Report an issue | Button | O4 issue/problem/dispute (the complaint) |
| delivery-error | Proof of delivery | Order | Button |  |
| delivery-error | Proof of delivery | Activity | Button |  |
| delivery-error | Proof of delivery | Help | Button |  |
| delivery-error | Proof of delivery | Account | Button |  |
| delivery-loading | — | Delivered | Heading |  |
| delivery-loading | — | WAIT | State message | WF-PH |
| delivery-loading | — | Waiting for proof… | State message | O5 result/proof/report (operator deliverable) |
| delivery-loading | — | Your operator is uploading the delivery photo now. | State message |  |
| delivery-loading | Proof of delivery | This usually takes under a minute. | State message | O5 result/proof/report (operator deliverable) |
| delivery-loading | Proof of delivery | Proof received | Button | O5 result/proof/report (operator deliverable) |
| delivery-loading | Proof of delivery | Order | Button |  |
| delivery-loading | Proof of delivery | Activity | Button |  |
| delivery-loading | Proof of delivery | Help | Button |  |
| delivery-loading | Proof of delivery | Account | Button |  |
| delivery | — | Delivered | Heading |  |
| delivery | — | DONE | Body | WF-PH |
| delivery | — | Delivered | Body |  |
| delivery | — | Your parcel arrived at 10:07. | Body | DATA |
| delivery | Proof of delivery | DELIVERY PHOTO | Body | O5 result/proof/report (operator deliverable) |
| delivery | Details | Delivered to | Body |  |
| delivery | Details | Osokorky, 14 | Body |  |
| delivery | Details | Time | Body |  |
| delivery | Details | Operator | Body |  |
| delivery | Details | Andriy M. | Body | DATA |
| delivery | Details | Rate the order | Button |  |
| delivery | Details | Order | Button |  |
| delivery | Details | Activity | Button |  |
| delivery | Details | Help | Button |  |
| delivery | Details | Account | Button |  |
| inspection-report-error | — | Inspection report | Heading |  |
| inspection-report-error | Report | NO PROOF | State message | WF-PH |
| inspection-report-error | Report | No report received | State message | O5 result/proof/report (operator deliverable) |
| inspection-report-error | Report | The operator marked the inspection done but no photos or findings arrived in time. Without proof the job can't be completed or paid — let's sort it out. | State message | TONE |
| inspection-report-error | Report | Contact support | Button | A2 reach a human (Contact support/Call support/Talk to a human/Get help) |
| inspection-report-error | Report | Refresh | Button | A1 recover from error (Try again/Refresh/Retry) |
| inspection-report-error | Report | Contact support | Button | A2 reach a human (Contact support/Call support/Talk to a human/Get help) |
| inspection-report-loading | — | Inspection report | Heading |  |
| inspection-report-loading | — | Report not uploaded yet… | State message | O5 result/proof/report (operator deliverable) |
| inspection-report-loading | Photo set | Rate the order | Button |  |
| inspection-report | — | Inspection report | Heading |  |
| inspection-report | — | DONE | Body | WF-PH |
| inspection-report | — | Report ready | Body | O5 result/proof/report (operator deliverable) |
| inspection-report | — | Roof inspection · Osokorky, 14 · completed 15:42. | Body | DATA |
| inspection-report | Cover | COVER PHOTO | Body | WF-PH |
| inspection-report | Findings | Roof · north slope | Heading |  |
| inspection-report | Findings | 2 cracked tiles near the ridge — water ingress risk. | Body |  |
| inspection-report | Findings | Severity · High | Body |  |
| inspection-report | Findings | Gutter · east run | Heading |  |
| inspection-report | Findings | Leaf blockage over ~1.5 m, standing water. | Body | DATA |
| inspection-report | Findings | Severity · Medium | Body |  |
| inspection-report | Findings | Chimney flashing | Heading |  |
| inspection-report | Findings | Sealed and intact — no action needed. | Body |  |
| inspection-report | Findings | Severity · None | Body |  |
| inspection-report | Photo set | INSPECTION IMAGE | Body | WF-PH |
| inspection-report | Photo set | INSPECTION IMAGE | Body | WF-PH |
| inspection-report | Photo set | INSPECTION IMAGE | Body | WF-PH |
| inspection-report | Signature | Operator | Body |  |
| inspection-report | Signature | Andriy M. | Body | DATA |
| inspection-report | Signature | Certificate | Body |  |
| inspection-report | Signature | UA-DRN-04812 | Body | DATA |
| inspection-report | Signature | Signed | Body |  |
| inspection-report | Signature | 2 Jul, 15:42 · | Body | DATA |
| inspection-report | Signature | Verified by DRON | Body |  |
| inspection-report | Signature | Rate the order | Button |  |
| inspection-report | Signature | Report an issue | Button | O4 issue/problem/dispute (the complaint) |
| job-brief-error | — | Job brief | Heading |  |
| job-brief-error | Brief | GROUNDED | State message | WF-PH |
| job-brief-error | Brief | Stood down — airspace restricted | State message |  |
| job-brief-error | Brief | Flights are grounded at this location right now (airspace / weather). The job was re-dispatched and the client refunded — no action needed. | State message |  |
| job-brief-error | Brief | Back to jobs | Button | O3 order/job (client vs operator name for the work) |
| job-brief-error | Brief | No penalty. A stand-down isn't counted against you. | Body |  |
| job-brief | — | Job brief | Heading |  |
| job-brief | Route | ROUTE · Podil → Osokorky | Body | DATA |
| job-brief | Details | Service | Body |  |
| job-brief | Details | Package delivery | Body |  |
| job-brief | Details | Client | Body |  |
| job-brief | Details | Olena H. | Body | DATA |
| job-brief | Details | Pickup | Body |  |
| job-brief | Details | Podil, 21 | Body |  |
| job-brief | Details | Drop-off | Body |  |
| job-brief | Details | Osokorky, 14 | Body |  |
| job-brief | Details | Pay | Body |  |
| job-brief | Details | Est. time | Body |  |
| job-brief | Details | ~18 min | Body | DATA |
| job-brief | Notes | Leave with the concierge, entrance code 4417. | Body | USER |
| job-brief | Notes | Start job | Button |  |
| job-checklist-error | — | Checklist | Heading |  |
| job-checklist-error | Pre-flight & job steps | Pre-flight safety check | Field label |  |
| job-checklist-error | Pre-flight & job steps | Battery ≥ 80% | Field label |  |
| job-checklist-error | Pre-flight & job steps | Parcel secured | Field label |  |
| job-checklist-error | Pre-flight & job steps | Capture delivery photo | Field label |  |
| job-checklist-error | Pre-flight & job steps | Confirm handover with recipient | Field label | O8 client/recipient (delivery receiver) |
| job-checklist-error | Pre-flight & job steps | STEP LEFT | State message | WF-PH |
| job-checklist-error | Pre-flight & job steps | Finish the required step | State message |  |
| job-checklist-error | Pre-flight & job steps | You can't close the job until every required step is checked. 'Capture delivery photo' is still open. | State message |  |
| job-checklist-error | Pre-flight & job steps | Complete the step | Button |  |
| job-checklist-error | Pre-flight & job steps | Complete all steps to continue | Button |  |
| job-checklist | — | Checklist | Heading |  |
| job-checklist | Pre-flight & job steps | Pre-flight safety check | Field label |  |
| job-checklist | Pre-flight & job steps | Battery ≥ 80% | Field label |  |
| job-checklist | Pre-flight & job steps | Parcel secured | Field label |  |
| job-checklist | Pre-flight & job steps | Capture delivery photo | Field label |  |
| job-checklist | Pre-flight & job steps | Confirm handover with recipient | Field label | O8 client/recipient (delivery receiver) |
| job-checklist | Pre-flight & job steps | Complete & upload result | Button |  |
| job-offer-empty | — | New job | Heading | O2 job/offer (operator incoming) |
| job-offer-empty | Offer | EXPIRED | State message | WF-PH |
| job-offer-empty | Offer | Offer expired | State message | O2 job/offer (operator incoming) |
| job-offer-empty | Offer | You didn't respond in time, so this job was reassigned to another operator. New offers will appear here. | State message | O2 job/offer (operator incoming) |
| job-offer-empty | Offer | Back to jobs | Button | O3 order/job (client vs operator name for the work) |
| job-offer-empty | Offer | Offers auto-expire after 10s to keep dispatch moving. | Body | O2 job/offer (operator incoming) |
| job-offer | — | New job | Heading | O2 job/offer (operator incoming) |
| job-offer | Offer | DELIVERY | Body | WF-PH |
| job-offer | Offer | Package delivery | Heading |  |
| job-offer | Offer | 2.3 km · ~18 min · pickup near Podil | Body | DATA |
| job-offer | Offer | · pays on completion | Body |  |
| job-offer | Route | Pickup | Body |  |
| job-offer | Route | Podil, 21 | Body |  |
| job-offer | Route | Drop-off | Body |  |
| job-offer | Route | Osokorky, 14 | Body |  |
| job-offer | Decide fast | Expires in 8s | Body |  |
| job-offer | Decide fast | Accept | Button |  |
| job-offer | Decide fast | Decline | Button |  |
| listings-empty | — | Kyiv, UA ▾ | Button |  |
| listings-empty | — | All | Button |  |
| listings-empty | — | Delivery | Button |  |
| listings-empty | — | Aerial photo & video | Button |  |
| listings-empty | — | Inspection | Button |  |
| listings-empty | Search & filters | Search services | Field placeholder |  |
| listings-empty | Search & filters | crop spraying | Field value | USER |
| listings-empty | Search & filters | Filters | Button |  |
| listings-empty | Counter | Nothing found | State message |  |
| listings-empty | Counter | Sort: Recommended ▾ | Button |  |
| listings-empty | Service list | EMPTY | State message | WF-PH |
| listings-empty | Service list | Nothing found | State message |  |
| listings-empty | Service list | No services match “crop spraying” and your current filters. Clear the filters or change your search. | State message |  |
| listings-empty | Service list | Clear filters | Button |  |
| listings-empty | Service list | Notify me when available | Button | A8 notify when free (two phrasings) |
| listings-empty | Service list | Order | Button |  |
| listings-empty | Service list | Activity | Button |  |
| listings-empty | Service list | Help | Button |  |
| listings-empty | Service list | Account | Button |  |
| listings-error | — | Kyiv, UA ▾ | Button |  |
| listings-error | — | All | Button |  |
| listings-error | — | Delivery | Button |  |
| listings-error | — | Aerial photo & video | Button |  |
| listings-error | — | Inspection | Button |  |
| listings-error | Search & filters | Search services | Field placeholder |  |
| listings-error | Search & filters | Filters | Button |  |
| listings-error | Counter | List unavailable | State message |  |
| listings-error | Counter | Sort: Recommended ▾ | Button |  |
| listings-error | Service list | ERROR | State message | WF-PH |
| listings-error | Service list | Couldn't load the list | State message |  |
| listings-error | Service list | No connection to the server. Check your internet and try again. | State message |  |
| listings-error | Service list | Try again | Button | A1 recover from error (Try again/Refresh/Retry) |
| listings-error | Service list | Help | Button |  |
| listings-error | Service list | Order | Button |  |
| listings-error | Service list | Activity | Button |  |
| listings-error | Service list | Help | Button |  |
| listings-error | Service list | Account | Button |  |
| listings-filtered | — | Kyiv · Podil ▾ | Button |  |
| listings-filtered | — | All | Button |  |
| listings-filtered | — | Delivery | Button |  |
| listings-filtered | — | Aerial photo & video | Button |  |
| listings-filtered | — | Inspection | Button |  |
| listings-filtered | Search & filters | Search services | Field placeholder |  |
| listings-filtered | Applied filters | Price: High → Low | Body | DATA |
| listings-filtered | Applied filters | Today | Body |  |
| listings-filtered | Applied filters | Podil | Body |  |
| listings-filtered | Applied filters | Clear all | Body |  |
| listings-filtered | Counter | 2 services | Body |  |
| listings-filtered | Counter | · Podil · today | Body |  |
| listings-filtered | Counter | Sort: Price ↓ ▾ | Button |  |
| listings-filtered | Service list · cards | AERIAL | Body | WF-PH |
| listings-filtered | Service list · cards | Aerial photo & video | Heading |  |
| listings-filtered | Service list · cards | Events, real-estate listings, personal occasions | Body |  |
| listings-filtered | Service list · cards | INSPECT | Body | WF-PH |
| listings-filtered | Service list · cards | Inspection | Heading |  |
| listings-filtered | Service list · cards | Roofs, facades, hard-to-reach structures | Body |  |
| listings-filtered | Service list · cards | Order | Button |  |
| listings-filtered | Service list · cards | Activity | Button |  |
| listings-filtered | Service list · cards | Help | Button |  |
| listings-filtered | Service list · cards | Account | Button |  |
| listings-filters | — | Filters | Heading |  |
| listings-filters | — | Reset | Body |  |
| listings-filters | Price | Price | Heading |  |
| listings-filters | Price | Recommended | Body |  |
| listings-filters | Price | default | Body |  |
| listings-filters | Price | recommended | Field value | DATA |
| listings-filters | Price | Price: Low → High | Body | DATA |
| listings-filters | Price | asc | Field value | DATA |
| listings-filters | Price | Price: High → Low | Body | DATA |
| listings-filters | Price | desc | Field value | DATA |
| listings-filters | Time | Time | Heading |  |
| listings-filters | Time | Available now | Body |  |
| listings-filters | Time | now | Field value | DATA |
| listings-filters | Time | Today | Body |  |
| listings-filters | Time | today | Field value | DATA |
| listings-filters | Time | This week | Body |  |
| listings-filters | Time | week | Field value | DATA |
| listings-filters | Time | Pick a date & time… | Body |  |
| listings-filters | Time | calendar | Body |  |
| listings-filters | Time | pick | Field value | DATA |
| listings-filters | Location | Location · Kyiv | Heading |  |
| listings-filters | Location | All districts | Body |  |
| listings-filters | Location | all | Field value | DATA |
| listings-filters | Location | Podil | Body |  |
| listings-filters | Location | podil | Field value | DATA |
| listings-filters | Location | Obolon | Body |  |
| listings-filters | Location | obolon | Field value | DATA |
| listings-filters | Location | Pechersk | Body |  |
| listings-filters | Location | pechersk | Field value | DATA |
| listings-filters | Location | Clear all | Button |  |
| listings-filters | Location | Apply filters | Button |  |
| listings-loading | — | Kyiv, UA ▾ | Button |  |
| listings-loading | — | All | Button |  |
| listings-loading | — | Delivery | Button |  |
| listings-loading | — | Aerial photo & video | Button |  |
| listings-loading | — | Inspection | Button |  |
| listings-loading | Search & filters | Search services | Field placeholder |  |
| listings-loading | Search & filters | Filters | Button |  |
| listings-loading | Counter | Loading… | State message |  |
| listings-loading | Counter | Sort: Recommended ▾ | Button |  |
| listings-loading | Service list | Show services | Button | A4 begin ordering (Get started/Start ordering/Browse services) |
| listings-loading | Service list | Order | Button |  |
| listings-loading | Service list | Activity | Button |  |
| listings-loading | Service list | Help | Button |  |
| listings-loading | Service list | Account | Button |  |
| listings | — | Kyiv, UA ▾ | Button |  |
| listings | — | All | Button |  |
| listings | — | Delivery | Button |  |
| listings | — | Aerial photo & video | Button |  |
| listings | — | Inspection | Button |  |
| listings | Search & filters | Search services | Field placeholder |  |
| listings | Counter | 3 services | Body |  |
| listings | Counter | available now · Kyiv | Body |  |
| listings | Counter | Sort: Recommended ▾ | Button |  |
| listings | Service list · cards | DELIVERY | Body | WF-PH |
| listings | Service list · cards | Package delivery | Heading |  |
| listings | Service list · cards | Parcels, documents, small goods — across the city | Body |  |
| listings | Service list · cards | AERIAL | Body | WF-PH |
| listings | Service list · cards | Aerial photo & video | Heading |  |
| listings | Service list · cards | Events, real-estate listings, personal occasions | Body |  |
| listings | Service list · cards | INSPECT | Body | WF-PH |
| listings | Service list · cards | Inspection | Heading |  |
| listings | Service list · cards | Roofs, facades, hard-to-reach structures | Body |  |
| listings | Service list · cards | Order | Button |  |
| listings | Service list · cards | Activity | Button |  |
| listings | Service list · cards | Help | Button |  |
| listings | Service list · cards | Account | Button |  |
| onboarding-client-empty | Explainer | 15 SEC | State message | WF-PH |
| onboarding-client-empty | Explainer | The short version | State message | TONE |
| onboarding-client-empty | Explainer | A certified, insured operator does the job. You track it live and pay only online — nothing to manage. | State message | O1 operator/pilot |
| onboarding-client-empty | Explainer | Start ordering | Button | A4 begin ordering (Get started/Start ordering/Browse services) |
| onboarding-client | — | VERIFIED | Body | WF-PH |
| onboarding-client | — | A verified operator | Body |  |
| onboarding-client | — | DRON assigns the nearest certified, insured pilot. You don't choose or guess. | Body | O1 operator/pilot |
| onboarding-client | — | LIVE | Body | WF-PH |
| onboarding-client | — | Watch it live | Body |  |
| onboarding-client | — | See the operator's name, photo and live position the moment you pay. | Body |  |
| onboarding-client | — | PROOF | Body | WF-PH |
| onboarding-client | — | Proof every time | Body |  |
| onboarding-client | — | Get a photo or a report the moment the job is done. | Body |  |
| onboarding-client | — | Skip | Button |  |
| onboarding-client | — | Get started | Button | A4 begin ordering (Get started/Start ordering/Browse services) |
| onboarding-operator | — | JOBS | Body | WF-PH |
| onboarding-operator | — | Jobs come to you | Body |  |
| onboarding-operator | — | Auto-dispatch sends pre-qualified jobs. Accept or decline in seconds — no bidding. | Body |  |
| onboarding-operator | — | STEPS | Body | WF-PH |
| onboarding-operator | — | Follow the checklist | Body |  |
| onboarding-operator | — | Every job has a step-by-step checklist so nothing is missed on site. | Body |  |
| onboarding-operator | — | PAID | Body | WF-PH |
| onboarding-operator | — | Get paid automatically | Body |  |
| onboarding-operator | — | Earnings land within 30 min of client confirmation. Withdraw to card or bank. | Body | DATA |
| onboarding-operator | — | Skip | Button |  |
| onboarding-operator | — | Get started | Button | A4 begin ordering (Get started/Start ordering/Browse services) |
| operator-dispute-error | — | Dispute | Heading | O4 issue/problem/dispute (the complaint) |
| operator-dispute-error | Job | AERIAL | State message | WF-PH |
| operator-dispute-error | Job | Job #DR-2841 · Aerial photo | Heading |  |
| operator-dispute-error | Job | Client: Olena H. · disputed | State message | O4 issue/problem/dispute (the complaint) |
| operator-dispute-error | Job | · held | State message |  |
| operator-dispute-error | Status | HELD | State message | WF-PH |
| operator-dispute-error | Status | Payment held | State message |  |
| operator-dispute-error | Status | ₴800 for Job #DR-2841 stays on hold while the dispute is reviewed. Add more evidence to your response, or bring in a human to resolve it. | State message | DATA |
| operator-dispute-error | Status | Update response | Button |  |
| operator-dispute-error | Status | Contact support | Button | A2 reach a human (Contact support/Call support/Talk to a human/Get help) |
| operator-dispute-error | Status | Back to jobs | Button | O3 order/job (client vs operator name for the work) |
| operator-dispute | — | Dispute | Heading | O4 issue/problem/dispute (the complaint) |
| operator-dispute | Job | AERIAL | Body | WF-PH |
| operator-dispute | Job | Job #DR-2841 · Aerial photo | Heading |  |
| operator-dispute | Job | Client: Olena H. · closed 22 min ago | Body | DATA |
| operator-dispute | Job | · disputed | Body | O4 issue/problem/dispute (the complaint) |
| operator-dispute | Client claim | Client reports | Body |  |
| operator-dispute | Client claim | “The photos are blurry — I can't use them for the listing.” | Body | USER |
| operator-dispute | Client claim | Payment held | Body |  |
| operator-dispute | Your response | Reply to the client | Field label |  |
| operator-dispute | Your response | Explain what was delivered, weather, capture settings… | Field placeholder |  |
| operator-dispute | Your response | Evidence | Field label |  |
| operator-dispute | Your response | FLIGHT LOG / PHOTO | Body | WF-PH |
| operator-dispute | Your response | Attach evidence | Button | A3 attach a file (Add/Upload/Attach) |
| operator-dispute | Your response | Submit response | Button |  |
| operator-dispute | Your response | Payment still held? | Button | O4 issue/problem/dispute (the complaint) |
| operator-fee-terms | — | Operator terms | Heading |  |
| operator-fee-terms | Value intro | Earn on your schedule | Body |  |
| operator-fee-terms | Value intro | DRON dispatches pre-qualified jobs to you, insures every flight, and pays out automatically. Here's what you keep and how you get paid. | Body |  |
| operator-fee-terms | Fee terms | Commission | Body |  |
| operator-fee-terms | Fee terms | 18% per job | Body |  |
| operator-fee-terms | Fee terms | Payout | Body | O6 withdraw/cash out/payout |
| operator-fee-terms | Fee terms | Auto-release ≤30 min after client confirms | Body | O6 withdraw/cash out/payout |
| operator-fee-terms | Fee terms | Insurance | Body |  |
| operator-fee-terms | Fee terms | Covered from your first job | Body |  |
| operator-fee-terms | Fee terms | Minimum payout | Body | O6 withdraw/cash out/payout |
| operator-fee-terms | Fee terms | Accept & continue | Button |  |
| operator-fee-terms | Fee terms | Maybe later | Button |  |
| operator-listings-empty | — | IK | Body | DATA |
| operator-listings-empty | — | Ivan K. | Body | DATA |
| operator-listings-empty | — | Incoming · 0 | Body | O2 job/offer (operator incoming) |
| operator-listings-empty | — | Active · 0 | Body |  |
| operator-listings-empty | Status | You are Offline | State message |  |
| operator-listings-empty | Status | · no offers while offline | State message | O2 job/offer (operator incoming) |
| operator-listings-empty | Status | Availability status | State message |  |
| operator-listings-empty | Status | Available | Field label |  |
| operator-listings-empty | Status | available | Field value | DATA |
| operator-listings-empty | Status | Busy | Field label |  |
| operator-listings-empty | Status | busy | Field value | DATA |
| operator-listings-empty | Status | Offline | Field label |  |
| operator-listings-empty | Status | offline | Field value | DATA |
| operator-listings-empty | Offers | OFFLINE | State message | WF-PH |
| operator-listings-empty | Offers | No offers while you're offline | State message | O2 job/offer (operator incoming) |
| operator-listings-empty | Offers | Go Available to start receiving pre-qualified jobs near you. | State message | O2 job/offer (operator incoming) |
| operator-listings-empty | Offers | Go Available | Button | A7 go get work (Find jobs/See available jobs/Go Available) |
| operator-listings-empty | Offers | Jobs | Button |  |
| operator-listings-empty | Offers | Earnings | Button |  |
| operator-listings-empty | Offers | Ratings | Button |  |
| operator-listings-empty | Offers | Account | Button |  |
| operator-listings | — | IK | Body | DATA |
| operator-listings | — | Ivan K. | Body | DATA |
| operator-listings | — | Incoming · 2 | Body | O2 job/offer (operator incoming) |
| operator-listings | — | Active · 1 | Body |  |
| operator-listings | Status | You are Available | Body |  |
| operator-listings | Status | · receiving offers near Podil | Body | O2 job/offer (operator incoming) |
| operator-listings | Status | Availability status | Body |  |
| operator-listings | Status | Available | Field label |  |
| operator-listings | Status | available | Field value | DATA |
| operator-listings | Status | Busy | Field label |  |
| operator-listings | Status | busy | Field value | DATA |
| operator-listings | Status | Offline | Field label |  |
| operator-listings | Status | offline | Field value | DATA |
| operator-listings | Counter | 2 new offers | Body | O2 job/offer (operator incoming) |
| operator-listings | Counter | · 1 active job · nearest first | Body | O2 job/offer (operator incoming) |
| operator-listings | Incoming offers · cards | DELIVERY | Body | WF-PH |
| operator-listings | Incoming offers · cards | Package delivery | Heading |  |
| operator-listings | Incoming offers · cards | 2.3 km · ~18 min · pickup near Podil | Body | DATA |
| operator-listings | Incoming offers · cards | · expires in 8s | Body |  |
| operator-listings | Incoming offers · cards | Accept | Button |  |
| operator-listings | Incoming offers · cards | Decline | Button |  |
| operator-listings | Incoming offers · cards | INSPECT | Body | WF-PH |
| operator-listings | Incoming offers · cards | Roof inspection | Heading |  |
| operator-listings | Incoming offers · cards | 5.1 km · ~35 min · Obolon district | Body | DATA |
| operator-listings | Incoming offers · cards | · expires in 6s | Body |  |
| operator-listings | Incoming offers · cards | Accept | Button |  |
| operator-listings | Incoming offers · cards | Decline | Button |  |
| operator-listings | Active jobs · cards | AERIAL | Body | WF-PH |
| operator-listings | Active jobs · cards | Aerial photo & video | Heading |  |
| operator-listings | Active jobs · cards | Client: Olena H. · in progress · checklist 3 / 5 | Body |  |
| operator-listings | Active jobs · cards | · next: capture rooftop set | Body |  |
| operator-listings | Active jobs · cards | Continue | Button |  |
| operator-listings | Active jobs · cards | Jobs | Button |  |
| operator-listings | Active jobs · cards | Earnings | Button |  |
| operator-listings | Active jobs · cards | Ratings | Button |  |
| operator-listings | Active jobs · cards | Account | Button |  |
| operator-profile-setup | — | Profile setup | Heading |  |
| operator-profile-setup | Profile photo | PROFILE PHOTO | Body | WF-PH |
| operator-profile-setup | Profile photo | Add photo | Button | A3 attach a file (Add/Upload/Attach) |
| operator-profile-setup | Profile photo | Display name | Field label |  |
| operator-profile-setup | Profile photo | e.g. Andriy K. | Field placeholder |  |
| operator-profile-setup | Profile photo | Short bio | Field label |  |
| operator-profile-setup | Profile photo | Certified operator since 2023. Fast, careful deliveries across Kyiv… | Field placeholder | USER |
| operator-profile-setup | Profile photo | Need help? Start from a template — 1–2 lines is enough. | Body | TONE |
| operator-profile-setup | Profile photo | Service specializations | Field label |  |
| operator-profile-setup | Profile photo | Delivery | Field label |  |
| operator-profile-setup | Profile photo | Aerial photo & video | Field label |  |
| operator-profile-setup | Profile photo | Inspection | Field label |  |
| operator-profile-setup | Profile photo | Save & go live | Button |  |
| operator-signup-error | — | Sign up | Heading | O7 sign in/sign up/confirm identity/verify |
| operator-signup-error | Sign up | AUTH | State message | WF-PH |
| operator-signup-error | Sign up | Identity couldn't be verified | State message | O7 sign in/sign up/confirm identity/verify |
| operator-signup-error | Sign up | Diia declined the request or the details didn't match. You can try again, or get help if this keeps happening. | State message |  |
| operator-signup-error | Sign up | Try again | Button | A1 recover from error (Try again/Refresh/Retry) |
| operator-signup-error | Sign up | Get help | Button | A2 reach a human (Contact support/Call support/Talk to a human/Get help) |
| operator-signup-loading | — | Sign up | Heading | O7 sign in/sign up/confirm identity/verify |
| operator-signup-loading | Sign up | DIIA | State message | WF-PH |
| operator-signup-loading | Sign up | Hold on a moment | State message | TONE |
| operator-signup-loading | Sign up | Verifying your identity… | State message | O7 sign in/sign up/confirm identity/verify |
| operator-signup-loading | Sign up | Continue | Button |  |
| operator-signup-loading | Sign up | Cancel | Button |  |
| operator-signup | — | Sign up | Heading | O7 sign in/sign up/confirm identity/verify |
| operator-signup | Sign up | Confirm your identity | Body | O7 sign in/sign up/confirm identity/verify |
| operator-signup | Sign up | DRON verifies every operator. Confirm who you are with Diia or BankID — then upload your licence and insurance. | Body |  |
| operator-signup | Sign up | Diia and BankID confirm who you are. DRON never sees your password. | Body |  |
| operator-signup | Sign up | Continue with Diia | Button |  |
| operator-signup | Sign up | Continue with BankID | Button |  |
| operator-signup | Sign up | Secure national ID — your data stays with the provider. | Body |  |
| operator-verification-error | — | Verification | Heading | O7 sign in/sign up/confirm identity/verify |
| operator-verification-error | Documents | DOCS | State message | WF-PH |
| operator-verification-error | Documents | Documents were rejected | State message |  |
| operator-verification-error | Documents | Insurance document is expired. Upload a current policy that covers commercial drone operation, then resubmit. | State message |  |
| operator-verification-error | Documents | Re-upload documents | Button |  |
| operator-verification-error | Documents | Contact support | Button | A2 reach a human (Contact support/Call support/Talk to a human/Get help) |
| operator-verification-loading | — | Verification | Heading | O7 sign in/sign up/confirm identity/verify |
| operator-verification-loading | Documents | DOCS | State message | WF-PH |
| operator-verification-loading | Documents | Documents submitted | State message |  |
| operator-verification-loading | Documents | Under review — ETA 2–3 business days | State message |  |
| operator-verification-loading | Documents | We'll notify you when it's approved. | State message |  |
| operator-verification-loading | Documents | Continue (approved) | Button |  |
| operator-verification-loading | Documents | Back to home | Button | A10 back-to-X object naming |
| operator-verification | — | Verification | Heading | O7 sign in/sign up/confirm identity/verify |
| operator-verification | Documents | LICENCE (CAA/DASU) | Body | WF-PH |
| operator-verification | Documents | Add document | Button | A3 attach a file (Add/Upload/Attach) |
| operator-verification | Documents | INSURANCE DOCUMENT | Body | WF-PH |
| operator-verification | Documents | Add document | Button | A3 attach a file (Add/Upload/Attach) |
| operator-verification | Documents | Licence number | Field label |  |
| operator-verification | Documents | e.g. UA-CAA-102938 | Field placeholder | DATA |
| operator-verification | Documents | Review takes 2–3 business days. | Body |  |
| operator-verification | Documents | Submit for review | Button |  |
| order-confirmed-empty | — | Order confirmed | Heading |  |
| order-confirmed-empty | — | DONE | State message | WF-PH |
| order-confirmed-empty | — | You're all set | State message | TONE |
| order-confirmed-empty | — | Payment received. Your operator is on the way. | State message |  |
| order-confirmed-empty | Your operator | KO | State message | DATA |
| order-confirmed-empty | Your operator | Kateryna O. | State message | DATA |
| order-confirmed-empty | Your operator | New operator · no reviews yet | State message |  |
| order-confirmed-empty | Your operator | Verified by DRON | State message |  |
| order-confirmed-empty | Your operator | Insured | State message |  |
| order-confirmed-empty | Your operator | Every operator is licence-checked and insured by DRON before their first job — reviews build from here. | State message |  |
| order-confirmed-empty | Your operator | Track anyway | Button |  |
| order-confirmed-empty | Your operator | Ask for another operator | Button |  |
| order-confirmed-empty | Your operator | Order | Button |  |
| order-confirmed-empty | Your operator | Activity | Button |  |
| order-confirmed-empty | Your operator | Help | Button |  |
| order-confirmed-empty | Your operator | Account | Button |  |
| order-confirmed-error | — | Order confirmed | Heading |  |
| order-confirmed-error | — | REFUND | State message | WF-PH |
| order-confirmed-error | — | Couldn't confirm an operator | State message |  |
| order-confirmed-error | — | No certified operator could take the job just now. A full refund to your card is already on its way. | State message |  |
| order-confirmed-error | — | Try again | Button | A1 recover from error (Try again/Refresh/Retry) |
| order-confirmed-error | — | Contact support | Button | A2 reach a human (Contact support/Call support/Talk to a human/Get help) |
| order-confirmed-error | — | Order | Button |  |
| order-confirmed-error | — | Activity | Button |  |
| order-confirmed-error | — | Help | Button |  |
| order-confirmed-error | — | Account | Button |  |
| order-confirmed-loading | — | Order confirmed | Heading |  |
| order-confirmed-loading | — | MATCH | State message | WF-PH |
| order-confirmed-loading | — | Finding your operator… | State message |  |
| order-confirmed-loading | — | Matching you with the nearest certified, insured pilot near Podil. | State message | O1 operator/pilot |
| order-confirmed-loading | Your operator | Operator found | Button |  |
| order-confirmed-loading | Your operator | Order | Button |  |
| order-confirmed-loading | Your operator | Activity | Button |  |
| order-confirmed-loading | Your operator | Help | Button |  |
| order-confirmed-loading | Your operator | Account | Button |  |
| order-confirmed | — | Order confirmed | Heading |  |
| order-confirmed | — | DONE | Body | WF-PH |
| order-confirmed | — | You're all set | Body | TONE |
| order-confirmed | — | Payment received. Your operator is on the way. | Body |  |
| order-confirmed | Your operator | AM | Body | DATA |
| order-confirmed | Your operator | Andriy M. | Body | DATA |
| order-confirmed | Your operator | 4.9 ★ · 214 jobs | Body |  |
| order-confirmed | Your operator | Verified by DRON | Body |  |
| order-confirmed | Your operator | Insured | Body |  |
| order-confirmed | Arrival | ETA | Body |  |
| order-confirmed | Arrival | ~8 min | Body | DATA |
| order-confirmed | Arrival | Status | Body |  |
| order-confirmed | Arrival | En route to pickup | Body |  |
| order-confirmed | Arrival | Track live | Button |  |
| order-confirmed | Arrival | Order | Button |  |
| order-confirmed | Arrival | Activity | Button |  |
| order-confirmed | Arrival | Help | Button |  |
| order-confirmed | Arrival | Account | Button |  |
| order-history-empty | — | Activity | Heading |  |
| order-history-empty | Order history | EMPTY | State message | WF-PH |
| order-history-empty | Order history | No orders yet | State message |  |
| order-history-empty | Order history | Your past orders show up here, ready to re-book in one tap. Start with your first drone service. | State message |  |
| order-history-empty | Order history | Browse services | Button | A4 begin ordering (Get started/Start ordering/Browse services) |
| order-history-empty | Order history | Order | Button |  |
| order-history-empty | Order history | Activity | Button |  |
| order-history-empty | Order history | Help | Button |  |
| order-history-empty | Order history | Account | Button |  |
| order-history-loading | — | Activity | Heading |  |
| order-history-loading | Order history | Loading your orders… | State message |  |
| order-history-loading | Order history | Order | Button |  |
| order-history-loading | Order history | Activity | Button |  |
| order-history-loading | Order history | Help | Button |  |
| order-history-loading | Order history | Account | Button |  |
| order-history | — | Activity | Heading |  |
| order-history | Order history | DELIVERY | Body | WF-PH |
| order-history | Order history | Package delivery | Heading |  |
| order-history | Order history | Today · Podil → Osokorky | Body | DATA |
| order-history | Order history | · In progress · ETA ~6 min | Body | DATA |
| order-history | Order history | View details | Button | A6 see order/job detail (View details/Delivery details) |
| order-history | Order history | DELIVERY | Body | WF-PH |
| order-history | Order history | Package delivery | Heading |  |
| order-history | Order history | 28 Jun · Podil → Osokorky | Body | DATA |
| order-history | Order history | · Delivered | Body |  |
| order-history | Order history | Book again | Button | A5 re-order (Book again/Book a free re-do) |
| order-history | Order history | AERIAL | Body | WF-PH |
| order-history | Order history | Aerial photo & video | Heading |  |
| order-history | Order history | 14 Jun · Trukhaniv Island | Body | DATA |
| order-history | Order history | · Delivered | Body |  |
| order-history | Order history | Book again | Button | A5 re-order (Book again/Book a free re-do) |
| order-history | Order history | INSPECT | Body | WF-PH |
| order-history | Order history | Roof inspection | Heading |  |
| order-history | Order history | 2 Jun · Osokorky, 14 | Body | DATA |
| order-history | Order history | · Delivered | Body |  |
| order-history | Order history | Book again | Button | A5 re-order (Book again/Book a free re-do) |
| order-history | Order history | Order | Button |  |
| order-history | Order history | Activity | Button |  |
| order-history | Order history | Help | Button |  |
| order-history | Order history | Account | Button |  |
| order-review-loading | — | Review | Heading |  |
| order-review-loading | Summary | Service | State message |  |
| order-review-loading | Summary | Package delivery | State message |  |
| order-review-loading | Summary | Pickup | State message |  |
| order-review-loading | Summary | Podil, 21 | State message |  |
| order-review-loading | Summary | Drop-off | State message |  |
| order-review-loading | Summary | Osokorky, 14 | State message |  |
| order-review-loading | Price breakdown | Calculating the final price… | State message |  |
| order-review-loading | Price breakdown | Total | Field label |  |
| order-review-loading | Price breakdown | Continue | Button |  |
| order-review | — | Review | Heading |  |
| order-review | Summary | Service | Body |  |
| order-review | Summary | Package delivery | Body |  |
| order-review | Summary | Pickup | Body |  |
| order-review | Summary | Podil, 21 | Body |  |
| order-review | Summary | Drop-off | Body |  |
| order-review | Summary | Osokorky, 14 | Body |  |
| order-review | Summary | Parcel | Body |  |
| order-review | Summary | Small · up to 2 kg | Body | DATA |
| order-review | Summary | When | Body |  |
| order-review | Summary | Now · ~25 min | Body | DATA |
| order-review | Price breakdown | Base fare | Body |  |
| order-review | Price breakdown | Distance · 7.4 km | Body | DATA |
| order-review | Price breakdown | Service fee | Body |  |
| order-review | Price breakdown | Total | Body |  |
| order-review | Price breakdown | This is the final price. Nothing is added at checkout. | Body |  |
| order-review | Price breakdown | Total | Field label |  |
| order-review | Price breakdown | Pay ₴180 | Button |  |
| order-setup-empty | — | Package delivery | Heading |  |
| order-setup-empty | Details form | Pickup | State message |  |
| order-setup-empty | Details form | Podil, 21 | State message |  |
| order-setup-empty | Details form | Drop-off | State message |  |
| order-setup-empty | Details form | Osokorky, 14 | State message |  |
| order-setup-empty | Details form | Parcel | State message |  |
| order-setup-empty | Details form | Small · up to 2 kg | State message | DATA |
| order-setup-empty | Availability | ~40 MIN | State message | DATA |
| order-setup-empty | Availability | No operator free right now | State message |  |
| order-setup-empty | Availability | All nearby operators are on jobs. The next one is likely free in about 40 minutes. | State message |  |
| order-setup-empty | Availability | Notify me when one is free | Button | A8 notify when free (two phrasings) |
| order-setup-empty | Availability | Pick a later time | Button |  |
| order-setup-empty | Availability | We'll hold your details — no need to re-enter them. | Body |  |
| order-setup-error | — | Package delivery | Heading |  |
| order-setup-error | Details form | Pickup address | Field label |  |
| order-setup-error | Details form | Podil — Naberezhno-Khreshchatytska St, 21 | Field value | DATA |
| order-setup-error | Details form | Drop-off address | Field label |  |
| order-setup-error | Details form | Irpin — Sadova St, 3 | Field value | DATA |
| order-setup-error | Details form | Outside the service zone. | State message |  |
| order-setup-error | Details form | DRON covers Kyiv city for delivery — try an address within the city. | State message |  |
| order-setup-error | Details form | Parcel size | Field label |  |
| order-setup-error | Details form | Small — up to 2 kg | State message | DATA |
| order-setup-error | Details form | Edit drop-off address | Button |  |
| order-setup-error | Details form | Coverage: Kyiv (UA). More cities are rolling out. | Body |  |
| order-setup | — | Package delivery | Heading |  |
| order-setup | Details form | Pickup address | Field label |  |
| order-setup | Details form | Podil — Naberezhno-Khreshchatytska St, 21 | Field value | DATA |
| order-setup | Details form | Drop-off address | Field label |  |
| order-setup | Details form | Osokorky — Dniprovska Naberezhna, 14 | Field value | DATA |
| order-setup | Details form | Parcel size | Field label |  |
| order-setup | Details form | Small — up to 2 kg | Body | DATA |
| order-setup | Details form | Notes for the operator | Field label |  |
| order-setup | Details form | Floor, entrance code, what's inside… | Field placeholder |  |
| order-setup | Details form | Save this address for next time | Field label |  |
| order-setup | Details form | Total · locked, no extra fees | Field label |  |
| order-setup | Details form | Continue to review | Button |  |
| payment-error | — | Payment | Heading |  |
| payment-error | Amount | Payment declined | State message |  |
| payment-error | Amount | Apple Pay couldn't complete the charge. Nothing was taken from your account. Try again or use another method. | State message |  |
| payment-error | Amount | Try again | Button | A1 recover from error (Try again/Refresh/Retry) |
| payment-error | Amount | Change method | Button |  |
| payment-loading | — | Payment | Heading |  |
| payment-loading | — | Authorizing… | State message |  |
| payment-loading | — | Confirming your payment with Apple Pay. Don't close the app. | State message |  |
| payment-loading | — | Continue | Button |  |
| payment | — | Payment | Heading |  |
| payment | Amount | Package delivery · Podil → Osokorky | Body | DATA |
| payment | Payment method | Apple Pay | Field label |  |
| payment | Payment method | Google Pay | Field label |  |
| payment | Payment method | Visa •••• 4921 | Field label |  |
| payment | Payment method | Pay with Apple Pay | Field label |  |
| payment | Payment method | Pay ₴180 | Button |  |
| rate | — | Rate the order | Heading |  |
| rate | Rating | How was it? | Body | TONE |
| rate | Review | What went well? Anything to improve? | Field placeholder |  |
| rate | Review | Submit review | Button |  |
| rate | Review | Book again | Button | A5 re-order (Book again/Book a free re-do) |
| ratings-empty | — | Ratings | Heading |  |
| ratings-empty | Overall | NEW | State message | WF-PH |
| ratings-empty | Overall | No ratings yet | State message |  |
| ratings-empty | Overall | You haven't been rated yet. Ratings build from your first jobs — the platform keeps auto-dispatching work to you until they do. | State message |  |
| ratings-empty | Overall | See available jobs | Button | A7 go get work (Find jobs/See available jobs/Go Available) |
| ratings-empty | Overall | Jobs | Button |  |
| ratings-empty | Overall | Earnings | Button |  |
| ratings-empty | Overall | Ratings | Button |  |
| ratings-empty | Overall | Account | Button |  |
| ratings | — | Ratings | Heading |  |
| ratings | Overall | · 126 ratings · last 90 days | Body |  |
| ratings | Per service | Package delivery | Body |  |
| ratings | Per service | Aerial photo & video | Body |  |
| ratings | Per service | Inspection | Body |  |
| ratings | Recent reviews | Olena H. | Heading | DATA |
| ratings | Recent reviews | “Fast and careful — package arrived sealed and on time.” | Body | USER |
| ratings | Recent reviews | Package delivery | Body |  |
| ratings | Recent reviews | Today | Body |  |
| ratings | Recent reviews | Andriy P. | Heading | DATA |
| ratings | Recent reviews | “Good shots overall, a couple came out a bit dark.” | Body | USER |
| ratings | Recent reviews | Aerial photo & video | Body |  |
| ratings | Recent reviews | Yesterday | Body |  |
| ratings | Recent reviews | Maria D. | Heading | DATA |
| ratings | Recent reviews | “Clear roof footage, spotted the leak we couldn't see.” | Body | USER |
| ratings | Recent reviews | Inspection | Body |  |
| ratings | Recent reviews | 2 days ago | Body |  |
| ratings | Recent reviews | Jobs | Button |  |
| ratings | Recent reviews | Earnings | Button |  |
| ratings | Recent reviews | Ratings | Button |  |
| ratings | Recent reviews | Account | Button |  |
| report-issue-empty | — | Report an issue | Heading | O4 issue/problem/dispute (the complaint) |
| report-issue-empty | Report status | NO FILE | State message | WF-PH |
| report-issue-empty | Report status | No evidence attached | State message |  |
| report-issue-empty | Report status | Without a photo or note this is a weaker claim, so it goes to manual review only — which takes longer. Adding evidence gets you a faster decision. | State message |  |
| report-issue-empty | Report status | Contact human support | Button | A2 reach a human (Contact support/Call support/Talk to a human/Get help) |
| report-issue-empty | Report status | Add evidence | Button | A3 attach a file (Add/Upload/Attach) |
| report-issue-loading | — | Report an issue | Heading | O4 issue/problem/dispute (the complaint) |
| report-issue-loading | Review status | Issue under review… | State message | O4 issue/problem/dispute (the complaint) |
| report-issue-loading | Review status | We're checking your report for order #DR-4821. This usually takes a few minutes. | State message |  |
| report-issue-loading | Review status | You can leave this screen — we'll notify you when the outcome is ready. | State message |  |
| report-issue-loading | Review status | View resolution | Button |  |
| report-issue | — | Report an issue | Heading | O4 issue/problem/dispute (the complaint) |
| report-issue | Report form | Issue type | Field label | O4 issue/problem/dispute (the complaint) |
| report-issue | Report form | Poor quality — result not as expected | Body |  |
| report-issue | Report form | Also: Damaged item · Wrong location | Body |  |
| report-issue | Report form | What happened? | Field label | O4 issue/problem/dispute (the complaint) |
| report-issue | Report form | Describe the problem — e.g. the roof photos were blurry and missed the north side. | Field placeholder | O4 issue/problem/dispute (the complaint) |
| report-issue | Report form | Evidence | Field label |  |
| report-issue | Report form | ADD PHOTO / NOTE | Body | WF-PH |
| report-issue | Report form | A photo makes your claim stronger. Order #DR-4821. | Body |  |
| report-issue | Report form | Submit report | Button |  |
| report-issue | Report form | Submit without evidence | Button |  |
| resolution | — | Resolution | Heading |  |
| resolution | — | DONE | Body | WF-PH |
| resolution | — | Refund issued | Heading |  |
| resolution | — | We reviewed your report and refunded this order — no questions asked. | Body | TONE |
| resolution | Outcome | Issue | Body |  |
| resolution | Outcome | Poor quality | Body |  |
| resolution | Outcome | Order # | Body |  |
| resolution | Outcome | DR-4821 | Body | WF-PH |
| resolution | Outcome | Decision | Body |  |
| resolution | Outcome | Refund issued ₴180 | Body | DATA |
| resolution | Outcome | Timeline | Body |  |
| resolution | Outcome | To card in 1–3 days | Body |  |
| resolution | Outcome | Refunded to Visa •••• 4921. Prefer a fresh attempt instead? Book a free re-do below. | Body | DATA |
| resolution | Outcome | Done | Button |  |
| resolution | Outcome | Book a free re-do | Button | A5 re-order (Book again/Book a free re-do) |
| resolution | Outcome | Still not resolved? | Button |  |
| result-upload-error | — | Close job | Heading |  |
| result-upload-error | Result photo | UPLOAD | State message | WF-PH |
| result-upload-error | Result photo | Upload failed | State message |  |
| result-upload-error | Result photo | The result photo didn't upload — weak signal. Retry now, or queue it to upload automatically when you're back online. Payment is held until proof arrives. | State message | O5 result/proof/report (operator deliverable) |
| result-upload-error | Result photo | Retry upload | Button | A1 recover from error (Try again/Refresh/Retry) |
| result-upload-error | Result photo | Queue offline | Button |  |
| result-upload-error | Result photo | Payment stays held until the proof photo uploads. | Body | O5 result/proof/report (operator deliverable) |
| result-upload-loading | — | Close job | Heading |  |
| result-upload-loading | — | SEND | State message | WF-PH |
| result-upload-loading | — | Uploading result… | State message | O5 result/proof/report (operator deliverable) |
| result-upload-loading | — | Sending the delivery photo. Keep the app open. | State message |  |
| result-upload-loading | — | Payment is held until the client confirms — auto-confirms after 2h. | State message |  |
| result-upload-loading | — | Uploading… | Button |  |
| result-upload | — | Close job | Heading |  |
| result-upload | Result photo | RESULT PHOTO | Body | O5 result/proof/report (operator deliverable) |
| result-upload | Result photo | Add photo | Button | A3 attach a file (Add/Upload/Attach) |
| result-upload | Notes | Handover notes, recipient name… | Field placeholder | O8 client/recipient (delivery receiver) |
| result-upload | Job | Service | Body |  |
| result-upload | Job | Package delivery | Body |  |
| result-upload | Job | Client | Body |  |
| result-upload | Job | Olena H. | Body | DATA |
| result-upload | Job | Pay | Body |  |
| result-upload | Job | Submit & close job | Button |  |
| role-select | Role choice | How will you use DRON? | Body |  |
| role-select | Role choice | Pick a side to continue. You can switch anytime in Account. | Body |  |
| role-select | Role choice | CLIENT | Body | WF-PH |
| role-select | Role choice | I need a service done | Body |  |
| role-select | Role choice | Order delivery, aerial photo/video or inspection — a verified operator handles it. | Body |  |
| role-select | Role choice | PILOT | Body | O1 operator/pilot |
| role-select | Role choice | I provide services | Body |  |
| role-select | Role choice | You're a certified drone pilot — get dispatched jobs and get paid. | Body | O1 operator/pilot |
| role-select | Role choice | You can change this later in Account → Switch role. | Body | DATA |
| share-empty | — | Share DRON | Heading |  |
| share-empty | Invite | NOT SENT | State message | WF-PH |
| share-empty | Invite | You didn't send it yet | State message |  |
| share-empty | Invite | Your link is ready — dron.app/r/anna-k4. Pick a channel to send it, and you both get ₴100 off the next order. | State message | DATA |
| share-empty | Invite | Share again | Button |  |
| share-empty | Invite | Maybe later | Button |  |
| share-empty | Invite | Share again | Button |  |
| share | — | Share DRON | Heading |  |
| share | — | SHARE | Body | WF-PH |
| share | — | Invite a friend | Body |  |
| share | — | Send your link — you both get ₴100 off the next order. | Body | DATA |
| share | Your link | Referral link | Field label |  |
| share | Your link | dron.app/r/anna-k4 | Body | DATA |
| share | Your link | COPY | Body | WF-PH |
| share | Your link | Copy link | Button |  |
| share | Share to | Message | Button |  |
| share | Share to | Email | Button |  |
| share | Share to | More | Button |  |
| share | Share to | Your friend gets ₴100 off their first DRON order. When they complete it, ₴100 lands in your balance. No limit on invites. | Body | DATA |
| share | Share to | Send invite | Button | A9 submit vs send |
| signin-error | Sign in | AUTH | State message | WF-PH |
| signin-error | Sign in | Sign-in didn't complete | State message | O7 sign in/sign up/confirm identity/verify |
| signin-error | Sign in | Diia declined or cancelled the verification. You can try again, or continue with BankID instead. | State message |  |
| signin-error | Sign in | Try again with Diia | Button | A1 recover from error (Try again/Refresh/Retry) |
| signin-error | Sign in | Use BankID instead | Button |  |
| signin-loading | Sign in | DIIA | State message | WF-PH |
| signin-loading | Sign in | Opening Diia… | State message |  |
| signin-loading | Sign in | Redirecting you to Diia to confirm your identity. This takes a few seconds. | State message |  |
| signin-loading | Sign in | Continue | Button |  |
| signin-loading | Sign in | Cancel | Button |  |
| signin | Sign in | Sign in to DRON | Body | O7 sign in/sign up/confirm identity/verify |
| signin | Sign in | One verification lets you order drone services — or take jobs as a certified operator. | Body |  |
| signin | Sign in | Diia and BankID confirm who you are. DRON never sees your password. | Body |  |
| signin | Sign in | Continue with Diia | Button |  |
| signin | Sign in | Continue with BankID | Button |  |
| signin | Sign in | By continuing you agree to the Terms & Privacy Policy. | Body |  |
| support | — | Help & support | Heading |  |
| support | — | How can we help? | Heading |  |
| support | — | Tell us what went wrong with your order and we'll get it put right. | Body | O4 issue/problem/dispute (the complaint) |
| support | Triage list | My order didn't arrive / no-show | Body |  |
| support | Triage list | We'll re-dispatch a new operator now — or refund you, no questions. | Body |  |
| support | Triage list | Result wasn't what I expected | Body |  |
| support | Triage list | Report the issue with a photo or note and we'll review it. | Body | O4 issue/problem/dispute (the complaint) |
| support | Triage list | Safety or trust concern | Body |  |
| support | Triage list | Talk to a human straight away — support is online 24/7. | Body |  |
| support | Human fallback | Talk to a human | Button | A2 reach a human (Contact support/Call support/Talk to a human/Get help) |
| support | Human fallback | Can't find your issue above? A support agent is available any time, day or night. | Body |  |
| support | Human fallback | Order | Button |  |
| support | Human fallback | Activity | Button |  |
| support | Human fallback | Help | Button |  |
| support | Human fallback | Account | Button |  |
| switch-role | — | Switch role | Heading |  |
| switch-role | Switch | SWITCH | Body | WF-PH |
| switch-role | Switch | Switch to Operator? | Heading |  |
| switch-role | Switch | You're in Client mode. Switching shows the Operator app — jobs, earnings and ratings. Your Diia identity stays the same. | Body |  |
| switch-role | What happens | In-progress order | Body |  |
| switch-role | What happens | Kept — resume from Client | Body |  |
| switch-role | What happens | First time as Operator | Body |  |
| switch-role | What happens | Runs onboarding once | Body |  |
| switch-role | What happens | Switch back | Body |  |
| switch-role | What happens | Any time from Account | Body |  |
| switch-role | What happens | Switching is always reversible from the same Account entry. | Body |  |
| switch-role | What happens | Confirm & switch | Button |  |
| switch-role | What happens | Cancel | Button |  |
| time-slot-empty | — | Pick a time | Heading |  |
| time-slot-empty | — | Tue 1 | Button |  |
| time-slot-empty | — | Wed 2 | Button |  |
| time-slot-empty | — | Thu 3 | Button |  |
| time-slot-empty | — | Fri 4 | Button |  |
| time-slot-empty | — | Sat 5 | Button |  |
| time-slot-empty | Slots · Thu 3 Jul | EMPTY | State message | WF-PH |
| time-slot-empty | Slots · Thu 3 Jul | No free slots on Thu 3 Jul | State message | DATA |
| time-slot-empty | Slots · Thu 3 Jul | Every operator is booked that day. Try another date — Fri 4 and Sat 5 still have openings. | State message |  |
| time-slot-empty | Slots · Thu 3 Jul | Pick another day | Button |  |
| time-slot-empty | Slots · Thu 3 Jul | Back to setup | Button | A10 back-to-X object naming |
| time-slot-empty | Slots · Thu 3 Jul | No slot selected | Field label |  |
| time-slot-empty | Slots · Thu 3 Jul | Confirm slot | Button |  |
| time-slot | — | Pick a time | Heading |  |
| time-slot | — | Tue 1 | Button |  |
| time-slot | — | Wed 2 | Button |  |
| time-slot | — | Thu 3 | Button |  |
| time-slot | — | Fri 4 | Button |  |
| time-slot | — | Sat 5 | Button |  |
| time-slot | Slots · Wed 2 Jul | Operator free · Andriy M. nearby | Body |  |
| time-slot | Slots · Wed 2 Jul | Operator free | Body |  |
| time-slot | Slots · Wed 2 Jul | Operator free | Body |  |
| time-slot | Slots · Wed 2 Jul | Fully booked | Body |  |
| time-slot | Slots · Wed 2 Jul | Operator free · golden-hour light | Body |  |
| time-slot | Slots · Wed 2 Jul | Selected · Wed 2 Jul, 09:00 | Field label |  |
| time-slot | Slots · Wed 2 Jul | Confirm slot | Button |  |
| tracking-empty | — | On the way | Heading |  |
| tracking-empty | Live map | LIVE MAP · operator position | State message |  |
| tracking-empty | ETA | ETA | State message |  |
| tracking-empty | ETA | ~15 min (running late) | State message | DATA |
| tracking-empty | ETA | Status | State message |  |
| tracking-empty | ETA | En route to drop-off | State message |  |
| tracking-empty | Late notice | LATE | State message | WF-PH |
| tracking-empty | Late notice | Running a few minutes late | State message |  |
| tracking-empty | Late notice | Traffic near the drop-off is slowing your operator. They're still on the way. | State message |  |
| tracking-empty | Late notice | Keep waiting | Button |  |
| tracking-empty | Late notice | Contact support | Button | A2 reach a human (Contact support/Call support/Talk to a human/Get help) |
| tracking-empty | Operator | AM | State message | DATA |
| tracking-empty | Operator | Andriy M. | State message | DATA |
| tracking-empty | Operator | 4.9 ★ · 214 jobs | State message |  |
| tracking-empty | Operator | Verified by DRON | State message |  |
| tracking-empty | Operator | Insured | State message |  |
| tracking-empty | Operator | Contact operator | Button |  |
| tracking-empty | Progress | Accepted | State message |  |
| tracking-empty | Progress | Parcel picked up | State message |  |
| tracking-empty | Progress | En route | State message |  |
| tracking-empty | Progress | Arriving | State message |  |
| tracking-empty | Progress | Order | Button |  |
| tracking-empty | Progress | Activity | Button |  |
| tracking-empty | Progress | Help | Button |  |
| tracking-empty | Progress | Account | Button |  |
| tracking-error | — | On the way | Heading |  |
| tracking-error | Live map | NO GPS | State message | WF-PH |
| tracking-error | Live map | Live tracking lost | State message |  |
| tracking-error | Live map | We've lost the live signal from the operator's device. The job is still active. | State message |  |
| tracking-error | Live map | Refresh | Button | A1 recover from error (Try again/Refresh/Retry) |
| tracking-error | Live map | Contact support | Button | A2 reach a human (Contact support/Call support/Talk to a human/Get help) |
| tracking-error | ETA | ETA | State message |  |
| tracking-error | ETA | ~6 min | State message | DATA |
| tracking-error | ETA | Status | State message |  |
| tracking-error | ETA | En route to drop-off | State message |  |
| tracking-error | Operator | AM | State message | DATA |
| tracking-error | Operator | Andriy M. | State message | DATA |
| tracking-error | Operator | 4.9 ★ · 214 jobs | State message |  |
| tracking-error | Operator | Verified by DRON | State message |  |
| tracking-error | Operator | Insured | State message |  |
| tracking-error | Operator | Contact operator | Button |  |
| tracking-error | Progress | Accepted | State message |  |
| tracking-error | Progress | Parcel picked up | State message |  |
| tracking-error | Progress | En route | State message |  |
| tracking-error | Progress | Arriving | State message |  |
| tracking-error | Progress | Order | Button |  |
| tracking-error | Progress | Activity | Button |  |
| tracking-error | Progress | Help | Button |  |
| tracking-error | Progress | Account | Button |  |
| tracking-loading | — | On the way | Heading |  |
| tracking-loading | Live map | ACQUIRING GPS… | State message | WF-PH |
| tracking-loading | ETA | Getting a live signal from the operator… | State message |  |
| tracking-loading | ETA | Signal restored | Button | A1 recover from error (Try again/Refresh/Retry) |
| tracking-loading | ETA | Order | Button |  |
| tracking-loading | ETA | Activity | Button |  |
| tracking-loading | ETA | Help | Button |  |
| tracking-loading | ETA | Account | Button |  |
| tracking | — | On the way | Heading |  |
| tracking | Live map | LIVE MAP · operator position | Body |  |
| tracking | ETA | ETA | Body |  |
| tracking | ETA | ~6 min | Body | DATA |
| tracking | ETA | Status | Body |  |
| tracking | ETA | En route to drop-off | Body |  |
| tracking | Operator | AM | Body | DATA |
| tracking | Operator | Andriy M. | Body | DATA |
| tracking | Operator | 4.9 ★ · 214 jobs | Body |  |
| tracking | Operator | Verified by DRON | Body |  |
| tracking | Operator | Insured | Body |  |
| tracking | Progress | Accepted | Body |  |
| tracking | Progress | Parcel picked up | Body |  |
| tracking | Progress | En route | Body |  |
| tracking | Progress | Arriving | Body |  |
| tracking | Progress | Delivery details | Button | A6 see order/job detail (View details/Delivery details) |
| tracking | Progress | Contact operator | Button |  |
| wallet-empty | — | Earnings | Heading |  |
| wallet-empty | Balance | Below the ₴500 minimum to withdraw | State message | O6 withdraw/cash out/payout |
| wallet-empty | Balance | KEEP GOING | State message | TONE |
| wallet-empty | Balance | Almost there | State message | TONE |
| wallet-empty | Balance | You need ₴500 to cash out. Take one more job to reach the payout minimum. | State message | O6 withdraw/cash out/payout |
| wallet-empty | Balance | Find jobs | Button | A7 go get work (Find jobs/See available jobs/Go Available) |
| wallet-empty | Balance | Jobs | Button |  |
| wallet-empty | Balance | Earnings | Button |  |
| wallet-empty | Balance | Ratings | Button |  |
| wallet-empty | Balance | Account | Button |  |
| wallet | — | Earnings | Heading |  |
| wallet | Balance | Available to withdraw | Body | O6 withdraw/cash out/payout |
| wallet | Balance | Paid: ₴800 for 'Aerial photo & video' added 12 min ago. | Body | DATA |
| wallet | Balance | Withdraw | Button | O6 withdraw/cash out/payout |
| wallet | Recent | Package delivery | Heading |  |
| wallet | Recent | Today, 10:07 | Body | DATA |
| wallet | Recent | Aerial photo & video | Heading |  |
| wallet | Recent | Today, 08:20 | Body | DATA |
| wallet | Recent | Roof inspection | Heading |  |
| wallet | Recent | Yesterday | Body |  |
| wallet | Recent | Jobs | Button |  |
| wallet | Recent | Earnings | Button |  |
| wallet | Recent | Ratings | Button |  |
| wallet | Recent | Account | Button |  |
| welcome-empty | — | Skip | Body |  |
| welcome-empty | One-card fallback | DRON | State message | WF-PH |
| welcome-empty | One-card fallback | DRON in 15 seconds | State message |  |
| welcome-empty | One-card fallback | Order a drone service — a certified, insured operator does the flying. You see their name, photo and live position the moment you pay, and get proof when it's done. The drone flies a set route and only records what your job needs. | State message |  |
| welcome-empty | One-card fallback | Continue | Button |  |
| welcome | — | Skip | Body |  |
| welcome | — | ORDER | Body | WF-PH |
| welcome | — | You order, a pro handles it | Body |  |
| welcome | — | Pick a service and pay. A certified DRON operator does the flying — you never touch the drone. | Body |  |
| welcome | — | OPERATOR | Body | WF-PH |
| welcome | — | A verified, insured operator | Body |  |
| welcome | — | The moment you pay you see their name, photo and live position. Someone accountable is on the way. | Body |  |
| welcome | — | DRONE | Body | WF-PH |
| welcome | — | What the drone does — and doesn't | Body |  |
| welcome | — | It flies a set route, keeps its distance, and only records what your job needs. Brief low noise on take-off and landing; no filming of your neighbours. | Body |  |
| welcome | — | Get started | Button | A4 begin ordering (Get started/Start ordering/Browse services) |
| withdraw-error | — | Withdraw | Heading | O6 withdraw/cash out/payout |
| withdraw-error | Amount | FAILED | State message | WF-PH |
| withdraw-error | Amount | Payout didn't go through | State message | O6 withdraw/cash out/payout |
| withdraw-error | Amount | The transfer to your card failed and the ₴3,240 is back in your balance. Check the card details, or try a bank transfer instead. | State message | DATA |
| withdraw-error | Amount | Try again | Button | A1 recover from error (Try again/Refresh/Retry) |
| withdraw-error | Amount | Use bank transfer | Button |  |
| withdraw-error | Amount | Funds returned to your balance — nothing was lost. | Body |  |
| withdraw-loading | — | Withdraw | Heading | O6 withdraw/cash out/payout |
| withdraw-loading | — | SEND | State message | WF-PH |
| withdraw-loading | — | Sending to your card… | State message |  |
| withdraw-loading | — | Instant transfer to Visa •••• 3318 — usually under a minute. | State message | DATA |
| withdraw-loading | — | Transferring… | Button |  |
| withdraw | — | Withdraw | Heading | O6 withdraw/cash out/payout |
| withdraw | Amount | Full balance | Body |  |
| withdraw | Payout method | Instant to card •••• 3318 | Field label |  |
| withdraw | Payout method | Arrives in under a minute | Body |  |
| withdraw | Payout method | Bank transfer | Field label |  |
| withdraw | Payout method | 1–3 business days | Body |  |
| withdraw | Payout method | To Visa •••• 3318 | Field label |  |
| withdraw | Payout method | Withdraw ₴3,240 | Button |  |
