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
| account | account-edit.html | Documents (Drone documents) | button | Add document | Add drone documents (designer, 2026-08-13: the upload action becomes a text action and the link names its object; her "Upload documents about drone" lands as A3's own **Add + object** — `voice.md` bars ~~Upload~~) |
| account | account-edit.html | Documents (Insurance) | button | Add document | Add insurance (same call — the one attach verb, the concrete object) |
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
| order-history | order-history.html | Past order card (accessible name, ×3) | link | Package delivery, 28 Jun 2026, delivered — **reopen** | …, delivered — **open order** (2026-08-16: the card stopped opening an editable setup form and started opening the order's record, so the verb had to stop promising an edit) |
| order-review | order-review.html | Topbar | heading | Review | Order review |
| order-review | order-review-loading.html | Topbar | heading | Review | Order review |
| order-setup | order-setup-empty.html | Availability / No operator available | button | Notify me when one is free | Notify me when available |
| order-setup | order-setup-error.html | Details form / Drop-off field | state message | Outside the service zone. DRON covers Kyiv city for delivery — try an address within the city. | Outside the service zone. DRON delivers within Kyiv city — enter an address in the city. |
| payment | payment-loading.html | Authorizing payment | state message | Authorizing… | Authorizing your payment… |
| rate | rate.html | Rating | heading | How was it? | Rate this order |
| rate | rate.html | Rating | heading | Rate this order | How would you rate this order? |
| rate | rate.html | Review | placeholder | What went well? Anything to improve? | What the operator did well, and anything to improve |
| rate | rate.html | Review | field label | Your review | Share your review of this order |
| rate | rate.html | Review | field label | Share your review of this order | Your review — screen-reader only (designer, 2026-08-13: the compose card is one surface; the visible line comes off and the placeholder is the one sentence of help text) |
| contact-support | contact-support.html | Message | field label | Your message | Your message — screen-reader only (designer, 2026-08-15: *remove “your message text”*; the visible line comes off and the placeholder carries the naming, the pattern `rate` took on 2026-08-13) |
| order-setup | order-setup.html | Details form · Notes | field label | Notes for the operator | Notes for the operator — screen-reader only (designer, 2026-08-16: *забери цей текст*; the visible line comes off, the name stays on the control. Third compose card to take the `rate` pattern — and the first where the placeholder does **not** carry the naming, since *Floor, entrance code, what's inside…* is examples only. Open: whether the placeholder should name the field) |
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
| result-upload | result-upload.html | Result photo | button | Add photo | Replace photo (2026-08-16: the base state now carries the delivery photo, so the control's object changed. `voice.md` A3's one attach verb — **Add …** — names attaching a file that is *not there yet*; with the photo on screen the same word would offer a second one. `Replace` is a new verb in the product and is **open for her word**.) |
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
| **D1** | **Nav-bar back button** | mixed `‹ Back` / `Back to {Section}` | **decision: iOS HIG (Variant A)** — `‹ {previous screen's title}`; bare `‹ Back` only when the previous screen has no title; tab roots get no back | **Resolved** — 43 backs relabelled, `support` (Help tab root) back removed |
| **D2** | Attach a document, redo after rejection | `Add document` vs `Add documents again` | `Add document` / redo = **`Add document again`** (singular) | **Resolved** |
| **D3** | Escalate an unresolved case | `Still unresolved` (contact-support) · `Contact support` (resolution) | keep split: inside the support chat = escalation `Still unresolved`; from elsewhere = `Contact support` | confirm |
| **D4** | Switch to another pay/payout method | `Change method` (payment-error) · `Use bank transfer` (withdraw-error) | contextual (each names the alternative) — acceptable, or standardize to `Change method` | your call |
| **D5** | Transient loading-advance vs the real CTA | `Continue` (order-review-loading, payment-loading, signin-loading, operator-signup-loading) vs the success CTA (`Pay ₴180`, …) | a disabled copy of the real verb (e.g. disabled `Pay ₴180`) | structural, later |
| **D6** | Dismiss / defer a step | `Skip` (onboarding) · `Cancel` (forms/dialogs) · `Maybe later` (fee-terms, share) | contextual split (skip intro / cancel action / decline offer) — acceptable | note |
| **D7** | In-content back to a non-nav destination | `Back to Jobs` (×4, correct) · `Back to setup` (time-slot) · `Back to live tracking` (delivery) | `Back to {Section}` where a nav section exists; contextual name otherwise | acceptable |

**D1 resolved — decision: iOS HIG (Variant A).** Per Apple's Human Interface Guidelines (the client-mobile standard in `CLAUDE.md`), each nav-bar back button now shows the **title of the screen it returns to**, prefixed with `‹` — e.g. `‹ Order review` (on Payment), `‹ Sign in` (on Verification), `‹ Jobs` (on Dispute), `‹ Help` (on Support/Report an issue) — never `Back to …`. Bare `‹ Back` is kept only where the previous screen has no title (`operator-fee-terms`, whose previous is the title-less onboarding slider). The Help **tab root** (`support.html`) had its back button **removed** (tab roots are reached by switching tabs, not by a back). The in-content recovery buttons in empty/error blocks (e.g. `Back to Jobs`) are a different element — content CTAs, not the nav-bar back — and keep their descriptive wording. **D2 resolved** (`Add document again`). D3–D7 left as noted.

**D8 resolved — one screen, one name (designer, 2026-08-15; Variant A).** D1 fixed the *shape* of the back
button but not the *source* of the string, so a screen could be called two different things depending on where
it was named. The rule is now closed in `voice.md` § *Nav-bar back button*: the destination's name is **(1)** its
nav-bar title, **(2)** its **tab label** when it is a tab root (a tab root carries a brand mark instead of a
title, so the tab label *is* the name), **(3)** bare `‹ Back` only when it has neither. The back string is that
name character for character.

*Audit — all 44 nav-bar back controls in `wireframes/`, label checked against the destination's name:*

| Destination | Its name | Source | Back label | Controls | Verdict |
|---|---|---|---|---|---|
| `listings` | **Order** | tab label (no title) | `‹ Order` | 3 | pass |
| `operator-listings` | **Jobs** | tab label (no title) | `‹ Jobs` | 4 | pass |
| `support` | **Help** | tab label = title | `‹ Help` | 6 | **fixed** — title was `Help & support` |
| `account` | **Account** | title = tab label | `‹ Account` | 2 | pass |
| `wallet` | **Earnings** | title = tab label | `‹ Earnings` | 3 | pass |
| `order-setup` | **Package delivery** | title | `‹ Package delivery` | 4 | pass |
| `order-review` | **Order review** | title | `‹ Order review` | 2 | pass |
| `tracking` | **On the way** | title | `‹ On the way` | 3 | pass |
| `delivery` | **Delivered** | title | `‹ Delivered` | 1 | pass |
| `rate` | **Rate the order** | title | `‹ Rate the order` | 2 | pass |
| `job-brief` | **Job brief** | title | `‹ Job brief` | 2 | pass |
| `job-checklist` | **Checklist** | title | `‹ Checklist` | 3 | pass |
| `operator-signup` | **Sign in** | title | `‹ Sign in` | 3 | pass |
| `operator-fee-terms` | **Operator terms** | title | `‹ Operator terms` | 3 | pass |
| `operator-verification` | **Verification** | title | `‹ Verification` | 1 | pass |
| `onboarding-operator` | *(none)* | — | `‹ Back` | 1 | pass — rule (3) |
| `listings-filters` → `listings` | — | — | `×` *(modal close)* | 1 | out of scope |

**One name failed: the Help screen had two.** `support.html`'s nav-bar title read `Help & support` while its
tab label, `sitemap.md` §7.3 global nav, `CLAUDE.md` § Information Architecture and all six back buttons
pointing at it read `Help`. The title is the outlier, so **`support.html`'s title becomes `Help`** — one word,
everywhere. (Row *support · Help & support · Heading* in the master table below is corrected to `Help`.)
`contact-support.html` keeps its own separate title `Support`; it is a different screen and nothing navigates
back to it.

`listings-filters` is a **modal sheet**, not a pushed screen: HIG gives a sheet a close control, not a back
chevron, so its `×` (`aria-label="Close filters"`) is correct and outside this rule.

*Navigation made real (same pass).* Ten back controls were `<button class="back">` with no destination —
`job-brief` ×2, `job-checklist` ×2, `result-upload` ×3, `withdraw` ×3. `_wf-shell.js` wires every `.back` to
`history.back()`, but only when `history.length > 1`; opened directly, those ten did nothing, and unlike the
other 34 they had no `href` to fall back to. All ten are now `<a class="back" href="…">` pointing at the screen
their label names, which is the fallback the shell's own comment assumes.

**D9 resolved — the back control loses its label (designer, 2026-08-16). Supersedes D1 and D8.**
D1 gave the back button the destination's title; D8 made that name consistent. Both answered *which*
name the control carries. The designer's finding is that it should carry **none**: *"має бути іконка і
назва"* — an icon and a name, one of each. A labelled back button puts a **second screen name** in the
bar, and measured on the build the two are the same colour (`#1A1A1A`) at the same weight (600), 2px
apart in size — so they read as two titles of equal rank, not as a control and the name of this screen.

**The rule.** The nav bar holds **one name** — the title of the screen you are on — and the back control
is the **chevron icon alone**. All 44 controls lose their text.

| | Before (D8) | After (D9) |
|---|---|---|
| Painted layer, 24 controls | `‹ Order` | chevron icon, `aria-label="Back to Order"` |
| Grayscale layer, 20 controls | `‹ Operator terms` | chevron icon, `aria-label="Back to Operator terms"` |
| Tab roots | no back control | unchanged |
| `listings-filters` | `×` modal close | unchanged — a sheet closes, it does not go back |

**The destination name is not deleted, it moves.** It lives on as the control's `aria-label`, so a screen
reader still announces where back goes. `Back to …` is forbidden as a *visible* label (the chevron
already says "back") but is the clearest form for an invisible accessible name, and `WCAG 2.5.3 Label in
Name` does not apply where there is no visible label. `WCAG 4.1.2 Name, Role, Value` **requires** this:
an icon-only control with no accessible name is a failure.

**What this costs, recorded rather than argued away.** `HIG · Navigation bars` permits the bare chevron
but **prefers** the labelled form, because the label is what tells a sighted user where back goes. This
is therefore a **conforming departure, taken deliberately** — the project rule that the bar carries one
name wins over Apple's preference, the way `concept.md` §5's outline-only selected tab already departs
from the filled-symbol convention. Sighted users lose the destination name; assistive-tech users keep it.

**Retired with D9:** the three-step name resolution in D8 (title → tab label → bare `Back`) no longer
governs the back control, because the control has no text to resolve. It still governs how a screen is
named **elsewhere** — and the one fix D8 shipped stands: `support.html`'s title stays **`Help`**, matching
its tab label, `sitemap.md` §7.3 and `CLAUDE.md` § IA. A screen still has exactly one name.

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
| **A5** | re-order the same service | **Book again** (`rate`) vs **Book a free re-do** (`resolution`) vs body "re-book in one tap". On `order-history` the labelled button is gone — tapping a past card reopens setup, so the repeat path carries no string of its own. |
| **A6** | see order/job detail | **View details** (`order-history`) vs **Delivery details** (`tracking`) for opening the same order. |
| **A7** | operator: go get work | **Find jobs** (`wallet-empty`) vs **See available jobs** (`ratings-empty`) vs **Go Available** (`operator-listings-empty`). |
| **A8** | notify me when a slot/operator frees up | **Notify me when available** (`listings-empty`) vs **Notify me when one is free** (`order-setup-empty`). |
| **A9** | submit vs send | The dominant submit verb is **Submit …** (report, response, review, & close job). `share` breaks it with **Send invite**. |
| **A10** | back-to-X object naming | **Back to jobs / Back to orders / Back to home / Back to setup / Back to live tracking** — the destination noun shifts per screen (see also O3). |

### TONE — cheery / conversational-AI phrasing

_All rows below were the Step-01 finding; **all resolved** in the voice rewrite (see the rewrite logs and the Step-03 audit)._

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

## Audit — voice-compliance pass (Step 03)

Rigorous re-check of every screen against `voice.md`. Kept here as source of truth — each defect and how it was resolved.

**Fixed**

| # | Screen | Element | Was | Now |
|---|---|---|---|---|
| V1 | inspection-report-error | body | Without **proof** the job can't be completed or paid. | Without **the report**, the job can't be completed or paid. |
| V2 | result-upload | badge | `RESULT PHOTO` | `DELIVERY PHOTO` |
| V3 | delivery-error | badge | `NO PROOF` | `NO PHOTO` |
| V4 | inspection-report-error | badge | `NO PROOF` | `NO REPORT` |
| V5 | onboarding-client | slide badge | `PROOF` | `REPORT` |
| A1 | contact-support | button | `Still unresolved` | `Ask a senior agent` |
| V7 | operator-account | Mode | `Operator — provide services` | `Operator — take jobs` |
| V8 | operator-account | Account | `Payout method` | `Withdrawal method` |

**Reviewed — kept (with reason)**

| # | Item | Decision |
|---|---|---|
| V6 | `Continue with Diia / BankID` (signin, operator-signup) | Kept — standard provider-auth button pattern (cf. Apple's "Continue with Apple"); the screen heading already says "Sign in". |
| A2 | `Change method` (payment-error) vs `Use bank transfer` (withdraw-error) | Kept — contextually distinct (choose among several vs the single alternative); both concrete. |
| A3 | `Continue` on `-loading` screens | Kept — consistent across all loading stubs (a prototype advance, not a real CTA). |
| A4 | `Skip` / `Cancel` / `Maybe later` | Kept — three distinct dismiss contexts (skip intro / cancel a form / decline an offer). |

**Clean — no findings**
- **Forbidden:** no exclamation marks, no emoji (`★` is a rating glyph), no "successfully", no clichés, no motivational tone.
- **State tone:** errors state the fact + next step (no jokes); every empty state has an exit; loadings name what is loading; successes state the fact without celebration.

**Sync (S1 — fixed)**
- The **Master table** below was **regenerated from the current wireframes** — it had drifted to the pre-rewrite strings. Both directions reconciled: phantom "before" strings removed, current strings (incl. the Variant A back labels) added.
- A new operator screen **`operator-account.html`** (the Operator Account tab, fixing a nav leak) appeared during this pass — audited (V7/V8) and included in the master table.
- Sample-date DATA drift in `order-history` refreshed by the regeneration.

**Sync — 2026-08-13 (counter zone removed)**
- The **Counter zone left the five client listing pages** (`listings`, `-filtered`, `-empty`, `-error`, `-loading`) on the designer's word on the built error page: *"remove this and sorting — I have filters instead."* The `Sort:` control and the sheet's Price dimension fell in the same day's sorting-removal pass (logged in `_screens.md`); this call takes the row itself — the count was the list restating its own length. Its 8 remaining rows leave the master table: the counts (`3 services` / `available now · Kyiv` / `2 services` / `· Podil · today` / `0 services`), the two state messages (`Couldn't load`, `Loading services…`), and `listings-error`'s `ERROR` placeholder — that mark is now the alert-triangle icon (`dr-mark--danger`, `aria-hidden`), carrying no string.
- **Consequence to note:** `listings-loading` loses *"Loading services…"* — the one product string (and its `role="status"` live region) that named what was loading (Microcopy › loading; `WCAG 4.1.3`). The skeletons remain; whether the loading state should name itself somewhere else is the designer's call.

**Sync — 2026-08-15 (the upload label is the zone's own line)**
- The two `account-edit` document actions land as **text inside the upload zone**, not as a filled button under the glyph — the designer's call on the built page: *"improve upload area, write just with text"*, against a Figma reference whose zone carries a glyph and one line and nothing else. This is the build half of the **2026-08-13** call already logged two rows above (*"the upload action becomes a text action and the link names its object"*), which had been recorded but never drawn.
- **No string changes.** `Add drone documents` and `Add insurance` stand exactly as 2026-08-13 settled them, and the two hints (`Registration, serial, or manufacturer papers (PDF / photo).`, `Valid liability insurance covering the drone.`) are untouched. What moves is the element the words sit in: `<button class="dr-btn dr-btn--secondary">` → a line inside the zone, with the **zone itself** carrying `role="button"`.
- **`voice.md` A3 re-checked and holds.** Her note reads *"uploade sertificated drone document"*; A3 bars ~~Upload~~ in favour of **Add + object**, which is the resolution her own 2026-08-13 wording (*"Upload documents about drone"*) already took. The word **certified** is not added — the drone papers are registration / serial / manufacturer documents, and the hint already names them; *certified* would claim an attestation the flow does not ask for (P2: show the proof, not the adjective). **Open for her word** if she wants the object renamed.
- **Accessible name unchanged in substance, better in mechanism:** the name now comes from the visible line itself (name-from-contents), so `WCAG 2.5.3 Label in Name` is satisfied by construction rather than by a matching `aria-label`; the hint is wired to the control with `aria-describedby` instead of floating unassociated beside it.

**Sync — 2026-08-15 (`order-confirmed-empty`'s badge shortens to fit one row)**
- **One string changes on one screen:** `Verified by DRON` → **`Verified`**, on `order-confirmed-empty` only. The designer asked for the two badges on a single row *«якщо достатньо місця»* — if there is enough room — so the condition was measured rather than assumed: that card's round 56px avatar leaves the text column **241px**, and one row carrying both pills **with** the shield icons needs **275.86**. It does not fit. Offered three ways out with the numbers, she chose the shorter label: **218.98** needed against 241, **22px** of slack, row **59.59 → 26.80** and card **138.09 → 105.30**.
- **What the shortening costs, said plainly:** *by DRON* is who did the verifying, and that is the trust claim itself (`RJ-C1`). On this card the loss is smallest — the badge sits on an operator card inside the DRON app, beside *Insured*, under the DRON mark in the nav bar — but it is a loss, and it is hers, taken with the cost stated.
- **Deliberately not swept:** the other five screens keep `Verified by DRON`. `order-confirmed`'s own success state cannot fit one row at any label length — its full-bleed operator photo leaves only **196px** — so shortening there would cost the words and buy nothing. The product therefore carries two strings for one concept, which is a `voice.md` drift recorded here rather than hidden; unifying it in either direction is one line of work whenever she wants it.
- **The fit has a floor:** the row needs a frame **≥ ~353px**. At the design width of 375 there are 22px to spare, but any narrowing below that — or a longer word in either pill — wraps it back to two lines, and nothing breaks when it does.

**Sync — 2026-08-15 (one Documents heading over both cards)**
- The zone gains its **first real product heading**: a single **`Documents`** standing above both upload cards. The designer's call, given in two parts — *"зроби окремо заголовок над зонами загрузки: Documents"*, then, asked which of the two readings she meant, *"зроби один заголовок Documents для обох карток"*. It is one heading for the pair, not one per card.
- **Two strings retire:** the in-card field labels **`Drone documents`** and **`Insurance`**. Their job passes to the two lines the cards already carry — the title `Add drone documents` / `Add insurance` names the object, and the heading names the group. Nothing the user could read is lost; one line of restatement per card is.
- **No other string moves.** Both titles and both hints stand exactly as written. What changes is the role the hint plays: it was a caption floating under the zone, and it is now the card's **subtitle**, inside the control and wired to it with `aria-describedby`.
- **Voice check.** The heading is a plain noun naming what the group holds — no verb, no adjective, no cliché (`voice.md` P1, P2). "Documents" covers the insurance card too, since an insurance certificate is a document; the designer was shown that reading and chose the shared heading anyway, so it is her call and is recorded as one, not as a defect.
- **Drift found, recorded, not corrected:** the master table still carries two `WF-PH` rows for this zone — `DRONE REGISTRATION / DOCUMENTS` and `INSURANCE DOCUMENT` — which are the grayscale wireframe's placeholder labels. Neither string is in the painted build; the painted zone has carried a glyph since 2026-08-03. They are left in place for the designer's word rather than deleted.

**Sync — 2026-08-16 (the toast sweep — two new strings, and the list of places that deliberately get none)**
- The designer, on the `listings-empty` toast she had just approved: *«пройдись по проекту де ще потрібні такі увідомлення тости і добав їх. Текст має бути різний відповідати функції»*. **So the whole product was walked control by control, not sampled** — every `<button>` and every `.dr-btn` inside a `.wf-frame`, 84 files, 234 controls. The answer is smaller than the question sounds, and the reason is the finding.
- **The rule the sweep applied, now written into `voice.md` as the Toast element rule:** a toast belongs to an action that finishes **on the screen you are standing on** and leaves **no other trace**. Two tests, and most controls fail the second, not the first.
- **Two new strings, and they are different because the functions are different:**
  - `share` · **Copy link** → **`Link copied.`** One sentence, because there is no second fact: the link is on the clipboard and nothing follows. This is the purest case in the product — the sheet cannot show that a copy happened, so without the toast the tap has no answer at all.
  - `order-setup-empty` · **Notify me when available** → **`Saved. We'll tell you when an operator is free.`** Two sentences, on the `listings-empty` pattern: the fact, then the promise that the user does not have to come back and check.
- **Why the second one does not repeat the first one's sentence, which is the designer's instruction taken literally.** `listings-empty` says *Request received. We'll tell you when it's available.* — that button is about a **region DRON has not launched in**, and *available* means the service. This one is about **an operator being busy right now**, and the thing being waited for is a person, not a launch. Same act, different object, so the second clause changes and the first one changes with it: **`Saved`** is `flows.md`'s own word at this node (`"save for later" → Saved: notify me when an operator is free`), where the other node reads *Saved: notify me when DRON launches here* and rev 90 chose *Request received* over it on P1 grounds. Using both words, each where its flow node uses it, is the honest reading of *«текст має бути різний»*.
- **`order-setup-empty`'s button stops navigating, and `flows.md` is the reason, not taste.** It was `<a href="order-setup.html">` — tap *Notify me when available* and the app drops you into a working order form, which answers a request with a non-sequitur. The flow node is **terminal** (`:::done`), exactly like `listings-empty`'s. The toast is what a terminal node looks like on a screen. The `href` is left in place on rev 89's precedent (`Mark resolved` carries one and does not navigate) rather than swept, and that inconsistency is flagged below, not hidden.
- **Where a toast was considered and deliberately refused — this is the more useful half of the sweep:**
  | Screen · control | Why no toast |
  |---|---|
  | `operator-verification` **Add document** ×2 · `operator-profile-setup` **Add photo** · `result-upload` **Add photo** · `operator-dispute` **Add evidence** | The file lands in its own upload well. The result is on screen; a toast would restate it and teach the pattern that every tap owes a message. |
  | `contact-support` **Call support** | ~~Hands off to the phone app. The dialer is the confirmation, and nothing has happened yet at the moment of the tap.~~ **Reason corrected 2026-08-16, verdict unchanged:** there was never a dialer — the button had no target at all, and the `tel:` reading left the product at rev 141 with the masked number. It now opens `call-support.html`, so it **changes screen**, which puts it in the last row of this section rather than this one: a toast on a navigating control would have to ride the navigation. |
  | `listings*` **Filters** · the four service tabs · `time-slot*` day chips · `rate` stars | Open a picker or move a selection. Visible either way. |
  | `operator-listings` availability segment | The line above it already reads **You are Available · receiving jobs near Podil**, and it stays readable. A permanent statement beats a 4-second one. |
  | every `-error` screen | An error must stay re-readable; a toast leaves. Now stated in `voice.md`. |
- **`order-history` · Delete order (×3) — reported, not built, because it is not a toast question.** Three icon buttons, `aria-label="Delete order"`, no confirm and no undo anywhere in the flow. `voice.md`'s **Dangerous action** rule asks for the consequence **before** the tap (`Decline this job? … won't come back to you.` + `Decline` / `Keep job`), and a toast after the fact is not that. Two ways to close it — a confirm sheet before, or a toast **with an Undo**, which the component does not have — and both are the designer's call. The rule now says so out loud.
- **Everything else that wants a toast wants one the mechanism cannot give.** Five real cases — `account-edit` **Save changes**, `rate` **Submit review**, `job-offer` **Decline**, `result-upload-error` **Queue offline**, `contact-support` **Mark resolved** — all finish by **changing screen**, and the toast would have to ride the navigation and appear on the screen the user lands on. Today `data-toast` fires only where you stay. That is rev 89's own open question, still open, still hers.

**Sync — 2026-08-15 (the second toast)**
- **Notify me when available** on `listings-empty` now answers: **Request received. We'll tell you when it's available.** — the designer's *«при натисканні кнопки покажи toast… що реквест отримано, як тільки з'явиться ми повідомимо»*, which is the sentence she dictated, cut to a toast's length.
- **Two sentences because the state needs both:** the fact (*it is recorded*) and what happens next (*we come to you — you do not have to come back and check*). That is the success rule read literally, and it is the whole reason the button exists: it converts a dead end into a promise. No celebration, no exclamation, no *successfully*.
- **"We" is already this product's voice** — `contact-support-error` says *We couldn't resolve this in chat*, `tracking-error` says *We've lost the live signal*. The platform speaks as **we** when it is the actor, and the user is **you** throughout.
- **Wording checked against `flows.md`, and they differ on purpose.** The flow's terminal node reads *“Saved: notify me when DRON launches here”*, and `Saved` is the outcome word there. The toast says **Request received** instead, because *saved* describes the system's filing and *received* describes the exchange the user just had — P1's own preference for the outcome over the mechanism. **Open:** whether `flows.md`'s node should be reworded to match is hers; the two are consistent in meaning and differ only in which end of the act they name.

**Sync — 2026-08-15 (the first toast)**
- One new string, and the product's **first toast**: **Issue marked resolved.** — the designer's *«по кліку на кнопку покажи тост»* on `contact-support`'s **Mark resolved**.
- **Written to the success rule, not to a celebration.** `voice.md` asks a success state for *the fact and the next step, no celebration*: this states the fact and stops. It uses the vocabulary's own word for the thing — **issue** — not "case", "ticket" or "complaint", and it does not contain *successfully*, which the Never list bars. One sentence, one full stop, no exclamation.

**Sync — 2026-08-15 (no screen says its own name twice)**
- The designer's call on navigation: *«не повинно залишитись ніде два заголовка»* — no two headings left anywhere. **Swept across all 84 wireframes and states; exactly one screen was doing it.** `delivery` carried **Delivered** in the nav bar *and* **Delivered** again as the display line under the success mark. The display line is retired; the bar keeps the name, which is what `HIG · Navigation bars` gives it and what she asked the bar to do (*«текст показує на якій сторінці я знаходжусь»*).
- **Nothing is lost, and the screen says more than it did.** The line beneath it, *Your parcel arrived at 10:07.*, is the same fact stated with the time in it — P1's own preference for the outcome over the label. The sibling states keep their display lines because theirs never duplicated the bar: `delivery-error` says *Delivery photo is missing*, `delivery-loading` says *Waiting for the delivery photo…*

**Sync — 2026-08-15 (`contact-support-error`'s QUEUE becomes the paper plane)**
- One placeholder retired on the designer's word — *постав іконку Paper Plane*: the **QUEUE** `WF-PH` row leaves the master table, and the mark now carries a glyph instead of a word. The standing placeholder count drops **five → four**.
- **No product string moves.** The block keeps *Sent to a senior agent* and its body verbatim; the mark takes `aria-hidden="true"`, which it did not have while it held a word, so the `role="alert"` text beside it is the only thing announced (`WCAG 1.1.1`, `4.1.2`).

**Sync — 2026-08-15 (the reassurance sentence comes off `order-confirmed-empty`)**
- One string retired on the designer's word on the built page — *remove this sentence*: **"Every operator is licence-checked and insured by DRON before their first job — reviews build from here."** Its master-table row is gone.
- **The empty state still answers `voice.md`'s two questions**, which is why this is not a dead-end: *why it's empty* is said by **"New operator · no reviews yet"** on the operator card, and *one way out* by the two actions, **Track anyway** and **Ask for another operator**. `flows.md`'s RJ-C1 node — *"Empty: 0 reviews" → platform-backed reassurance → trust decision* — is also still satisfied: the reassurance moves from a sentence to the two badges, **Verified by DRON** and **Insured**, which is where P2 wants it — *show the proof, not the adjective*. The sentence was the adjective, restating in prose exactly what the two chips already assert.
- **No new string.** The same day's badge change (blue ground, confirming checkmark — `concept.md` rev 58) draws a mark, not a word: the chip keeps **Insured** verbatim, and the checkmark is `aria-hidden` because the word is the carrier — the kit's own chip rule, *a chip is never reduced to a colour; each keeps its words*. **Open for her word:** if *confirmed* should be **said** and not only drawn, the string becomes **Insurance confirmed**, and that is a change made here first.

**Sync — 2026-08-15 (the price reassurance comes off `order-review`)**
- One string retired on the designer's word on the built page — *remove this text*: **"This is the final price. Nothing is added at checkout."** Its master-table row is gone. The same move the `order-confirmed-empty` sentence made above, one principle over: that one was P2's adjective, this one is **P3's**.
- **P3 still holds on the screen, and by arithmetic rather than by promise.** The rule is *the full price appears before any commitment, locked, with no «from», «quote», «negotiable» or «plus fees»* — and what remains says it in numbers: the breakdown itemises **Base fare ₴90 · Distance · 7.4 km ₴70 · Service fee ₴20** and totals **₴180**, the sum closes with nothing unaccounted, and the action bar repeats the figure as **Pay ₴180**. The sentence was prose restating a sum the reader can already check; the fee that a *"plus fees"* warning would be about is itself a named line. Nothing on the screen says *from*, *quote* or *estimate*.
- **Recorded, because it is a real loss and not a neutral one:** the sentence was the only place the product *promised* nothing would be added — the breakdown proves today's arithmetic, it does not undertake anything about the payment screen. CJM Drop-off #2 is *"any 'plus fees' or surprise on the payment screen = abandonment"*, so the undertaking is now carried by `payment.html` charging **₴180** and not a hryvnia more, which is a build guarantee rather than a written one.
- **Consequence for `voice.md`, needing the designer's word:** P3 lists exactly two worked examples, and **both are now unbuilt** — `Total · locked, no extra fees — ₴180` came off the action bar on 2026-08-13 (`concept.md` rev 53) and this is the other. The principle is unchanged and still met, but its two illustrations point at strings that exist nowhere in the product. Left as-is rather than rewritten: whether P3 keeps them as aspirational examples or takes its examples from the built screen (the breakdown rows and `Pay ₴180`) is hers, and `voice.md` is not edited on my initiative.

**Sync — 2026-08-15 (the phone hint comes off `account-edit`)**
- One string retired on the designer's word on the built page — *remove this phrase*: **"Used for order updates and operator contact."** Its master-table row is gone. This is the third sentence to come off a built screen today, after `order-confirmed-empty`'s reassurance and `order-review`'s price line.
- **`WCAG 3.3.2` is unaffected, and that is measured rather than assumed.** The criterion asks that *labels or instructions are provided when content requires user input*; the field keeps its `<label for="phone">Phone</label>`, and the retired sentence carried **no instruction** — no format, length, country-code or required-field rule was stated in it, and the value renders as `+380 67 000 4417` either way. **`1.3.1` is untouched for a blunter reason:** the input **never carried `aria-describedby`**, so the sentence sat visually beside the field and programmatically unconnected to it. A screen-reader user moving through the form never heard it. Nothing they had is being taken away.
- **The form gets more consistent, not less.** Measured on the built page before the cut: this was the **only** `.dr-field__hint` on the screen. `Full name`, `Payment method`, `Saved address` and `Language` carry none and each measures **44**; `Phone` alone stood at **56.8**. Removing it lands every row of the form on the same **44** and drops `.dr-main`'s scroll height from **773** to **760** inside a **629** viewport (overflow **144** → **131**). The drop is **13**, not the hint's own **25.8** — its 9px bottom padding was absorbing part of the row gap, so half the height it occupied was never its own. The form still scrolls exactly as it did, no zone reflows, no state changes.
- **This is a density call, not a voice fix.** The sentence broke no `voice.md` rule: it was plain, specific, second-person, free of cliché and adjective, and it named an outcome rather than the equipment (P1, P4). It goes because the designer wants the field bare, and that is recorded as her call rather than as a defect closed.
- **Recorded, because it is a real loss.** The sentence was the **only place in the product** — every `.md` source and every frame — that said *why* DRON holds the client's phone number. A search for the purpose returns nothing else: not on `account`, not in `voice.md`, not on any onboarding or registration screen. What is given up is a purpose disclosure **at the point of collection**, which is exactly where a reader is most likely to ask the question. It is left off as asked and not restored elsewhere on my initiative; if it should be said somewhere, the natural home is an Account → Privacy line rather than a hint under the field, and that is a new string decided here first.

**Sync — 2026-08-15 (`listings-empty`'s mark becomes a puzzle piece)**
- One **WF-PH placeholder retired**, not a product string: `listings-empty`'s **EMPTY** mark is now the puzzle-piece icon (`concept.md` rev 61), so its master-table row is gone. This is the second of the two marks the designer has converted — `listings-error`'s **ERROR** became the alert triangle on 2026-08-13 (rev 54) — and the pair of listings states now carry glyphs where they carried words.
- **No copy moves, and none is lost.** The icon is `aria-hidden`; the block's `role="status"` text is the carrier and is untouched — title **"No services match your search"**, body **"No services match "crop spraying" with your filters. Clear the filters or search again."**, actions **Clear filters** / **Notify me when available**. `voice.md`'s empty-state rule — *why it's empty + one way out* — is answered by those, not by the mark, so retiring the word costs the state nothing.
- **Four text placeholders are still standing**, for whenever she wants them: `time-slot-empty` **EMPTY**, `report-issue-empty` **NO FILE**, `share-empty` **NOT SENT**, `inspection-report-error` **NO REPORT**. (`contact-support-error`'s **QUEUE** left the list on 2026-08-15 — rev 83 made it the paper plane; **NO FILE** left it on 2026-08-16 — rev 116 made it the alert triangle — **leaving three**.) `order-setup-empty`'s **~40 MIN** is deliberately not in that list — it is a value the mark is displaying, not a stand-in for a picture.

**Sync — 2026-08-15 (`order-setup-empty`'s mark becomes a struck magnifier)**
- **A string is retired that this file had deliberately kept.** The designer's word on the built screen: *«постав іконку лупи закреслену що означатиме не знайшов»*. The `~40 MIN` row leaves the master table — and it is the **first mark to lose a value rather than a placeholder**. The 2026-08-15 note directly above says so in as many words: *«`order-setup-empty`'s ~40 MIN is deliberately not in that list — it is a value the mark is displaying, not a stand-in for a picture»*. That reading is not retro-edited; it is overruled on her word, and the row is gone because the value is now nowhere on the mark.
- **The number is not lost — it was never only on the mark.** The body sentence is untouched and carries it in words: **"All nearby operators are on jobs. The next one is likely free in about 40 minutes."** So the state still answers `voice.md`'s empty rule — *why it's empty + one way out* — through the title, the body and two actions (**Notify me when available** / **Pick a later time**), and `P2` (*show the proof, not the adjective*) is met by the sentence rather than by a 52px badge. What is genuinely given up is the **glance**: a reader who took the wait from the badge alone now reads a line to get it.
- **The screen reader gains rather than loses.** The block is `role="status"`; the mark's text used to be announced first, so the region opened with **"~40 MIN"** before the title. The icon is `aria-hidden="true"` like every glyph in this kit, so the announcement now opens on **"No operator free right now"** and reaches the same 40 minutes through the body (`WCAG 4.1.3` ✓, `1.1.1` ✓ — the picture carries nothing the text does not say).
- **Five text placeholders were still standing at this pass** (`time-slot-empty` **EMPTY**, `report-issue-empty` **NO FILE**, `share-empty` **NOT SENT**, `contact-support-error` **QUEUE**, `inspection-report-error` **NO REPORT**) — unchanged by it, which converted the one mark that was never on that list. **QUEUE came off on 2026-08-15 (rev 83), leaving four; NO FILE came off on 2026-08-16 (rev 116), leaving three.**

**Sync — 2026-08-15 (`order-setup-empty`'s mark becomes a clock)**
- **No string moves, and the retirement above stands.** The designer's word the same evening: *«постав годинник»*. Only the picture changed — the struck magnifier gives way to the clock `tracking-empty` already owns (`concept.md` rev 80). `~40 MIN` stays retired from the master table, the title, body and both actions are untouched, and the mark is still `aria-hidden` inside the `role="status"` block, so nothing in this file's inventory moves.
- **The words and the picture now agree, which they did not for two minutes.** The body says *"The next one is likely free in about 40 minutes"* — a **wait**, not a failed search — and the clock says the same thing the retired `~40 MIN` said, without spending a value on a 52px badge.

**Sync — 2026-08-16 (`payment`'s action-bar method line comes off)**
- **One string retired on the designer's word**, given on the built screen: *«прибери цю фразу і суму напроти з бот бара — у нас є сума на кнопці»* ("take this phrase and the figure opposite it off the bottom bar — we have the amount on the button"). The row **`payment · Payment method · Pay with Apple Pay · Field label`** leaves the master table. Its figure half, `₴180`, never had a row of its own — it was `DATA`, the same fact the CTA carries.
- **Nothing said only there.** The **method** is stated by the selected radio in the list above (`Apple Pay`, checked, the first of three), the **amount** by the screen's own figure — `₴180` under the *Amount* zone label — and again by the CTA, **`Pay ₴180`**. So the screen still names *how* and *how much* before the commitment, which is what `voice.md` **P3** asks (*state the price as a fact, before the tap*); what goes is the third statement of both, six words above the button that said them.
- **Measured, not asserted** (430 × 932 frame, the line toggled live on the current kit): the action bar loses the `.dr-price` row (**23.8px**) and its **8px** column gap — **112.8 → 81px** — and `.dr-main` takes back exactly that, **597.2 → 629**. The CTA does not move or resize (**44px**). Content occupies 336.6px of the column either way, and `scrollHeight == clientHeight` before (597 = 597) and after (629 = 629): nothing scrolled before, nothing scrolls now, and no sibling state mirrors this bar (`payment-error` and `payment-loading` carry buttons only).
- **This closes the first of the two cases rev 53 left open** (2026-08-13, *the action-bar Total line comes off*): that sweep took three Total lines and deliberately left `payment`'s method line and `time-slot`'s selection line for her word. Hers is now given for `payment`.
- **The sweep she asked for, and what it found in the other 55 action-bar files.** One exact twin: **`withdraw`** (operator, grayscale) reads `To Visa •••• 3318 · ₴3,240` above **`Withdraw ₴3,240`** — a destination line restating the account chosen above it and the figure printed on its own button. **Left as built and reported**, because `wireframes/` is not swept without her word. **`time-slot` / `-empty` are not the same case:** their bar line (`Selected · Wed 2 Jul, 09:00 · ₴800` / `No slot selected`) is the **only** place either screen states a price, and the CTA is `Confirm slot` with no figure — taking it would leave the screen with no price at all, which P3 forbids. No third repeat exists anywhere in the product.

**Sync — 2026-08-16 (`withdraw` follows: the destination line comes off too)**
- **Her answer to the question above, given the same hour: take the whole line off**, the same edit as `payment`. The row **`withdraw · Withdrawal method · To Visa •••• 3318 · Field label`** leaves the master table; its figure `₴3,240` was `DATA` and had no row.
- **Both halves are still stated, and by better carriers.** The **destination** is the checked radio in the list above — *Instant to card •••• 3318*, with its own note *Arrives in under a minute* — and the **amount** is the screen's `.amount` figure (**₴3,240**, subtitle *Full balance*) and the CTA, **`Withdraw ₴3,240`**. So the operator still reads *where* and *how much* before the tap; what goes is the third telling of both.
- **Measured at 430 × 932, the line toggled live: the grayscale bar behaves exactly as the painted one did** — bar **112.8 → 81**, `main` **597.2 → 629**, CTA unmoved at **44px**, `scrollHeight == clientHeight` before (597 = 597) and after (629 = 629), frame 812 either way. `withdraw-error` and `withdraw-loading` never drew the line, so no state has to match it.
- **Consequence for the kit:** the grayscale rule `footer.actionbar .price-line` (`_wireframe.css:439–441`) is now **declared and spent nowhere** — left in place, not deleted, because `wireframes/` is not edited beyond what was asked. The painted `.dr-price` keeps its one spend, `time-slot`.
- **`time-slot` is unchanged and stays that way** for the reason logged above: its line is the only price on the screen.

**Sync — 2026-08-16 (`report-issue`'s Evidence label comes off)**
- **One string retired on the designer's word**, given on the built screen: *«видали "evidence"»*. The row **`report-issue · Report form · Evidence · Field label`** leaves the master table. It is the fourth in-card field label to retire this way, after `account-edit`'s `Drone documents` and `Insurance` (2026-08-15) and `payment`'s method line (this morning).
- **It was a label in name only.** Measured in the browser, `<label for="ev">` pointed at an id that exists nowhere on the page — so a screen reader never heard it attached to the upload zone, and the zone's accessible name came, as it still does, from `aria-label="Add a photo or note"`. Nothing an AT user had is being taken away; a sighted reader loses one line of restatement above a well that already says what it takes.
- **`WCAG 3.3.2` is carried by the other half of the criterion — *labels **or** instructions*.** The zone keeps **"A photo makes your claim stronger. Order #DR-4821."**, which names the object to attach, and the 32px tray glyph above it. What is genuinely given up is the **verb**: unlike `account-edit`'s zones, this one has no `Add…` line inside it, so `voice.md`'s **Add…** is now spoken (`aria-label`) but not printed. **Reported to the designer, not fixed** — if the verb returns it belongs inside the zone as `.dr-upload__action` (`Add a photo`), not as the row label that just came off.
- **Not swept:** `operator-dispute` still carries its own grayscale `Evidence` field label. A different screen and a different persona, and `wireframes/` is not swept without her word.

**Sync — 2026-08-16 (`report-issue-empty`'s mark becomes the alert triangle)**
- One **WF-PH placeholder retired**, not a product string: the designer's word on the built page — *«put icon alert»* — so the **NO FILE** mark is now the set's Warning glyph (`concept.md` rev 116) and its master-table row is gone. Sixth of the marks converted this way, after `delivery-error`, `tracking-error`, `listings-error`, `listings-empty` and `contact-support-error`. **Three text placeholders remain:** `time-slot-empty` **EMPTY**, `share-empty` **NOT SENT**, `inspection-report-error` **NO REPORT**.
- **No copy moves, and none is lost.** The block's `role="status"` text is the carrier and is untouched — title **"No evidence attached"**, body **"Without a photo or note this is a weaker claim, so it goes to manual review only — which takes longer. Adding evidence gets you a faster decision."**, actions **Contact support** / **Add evidence**. `voice.md`'s empty-state rule — *why it's empty + one way out* — is answered by those two sentences and those two buttons, so retiring the word costs the state nothing.
- **The screen reader gains rather than loses.** The mark carried no `aria-hidden` while it held `NO FILE`, so the region opened by reading out two words written for a wireframe, not for a person. The glyph takes `aria-hidden="true"` like every sibling, and the announcement now opens on **"No evidence attached"** (`WCAG 1.1.1` ✓, `4.1.2` ✓).
- **The word and the picture say the same thing, which is the test.** `NO FILE` named the missing object; the triangle names the consequence the body spells out — *a weaker claim, manual review only, takes longer*. Both are true of this state, and the copy is written around the consequence, not around the file.

**Sync — 2026-08-16 (`account-edit`'s Documents heading comes off, and the upload cards go last)**
- **One string retired on the designer's word**, given on the built screen: *«видали назву»*. The row **`account-edit · Documents · Documents · Section heading`** leaves the master table. It is the **fifth** in-card / above-card label to retire this way, after `account-edit`'s own `Drone documents` and `Insurance` (2026-08-15), `payment`'s method line and `report-issue`'s `Evidence` (both this morning) — and the first of them that had been **added** on her word, at rev 60, twenty-four hours earlier.
- **It answers rev 60's open question the other way.** That entry closed by reporting a consequence and refusing to fix it: *"the group closes on 12 … because `Personal` and `Preferences` have no heading of their own to open with — whether they get one is her call."* Her call is that **none of them does.** The form is now three unnamed groups at one rhythm rather than one named group among two unnamed ones, which is the consistency the open question was about — reached by taking the heading away rather than by giving two more.
- **Nothing an assistive reader had is taken away, and that is by construction rather than by luck.** Each upload zone keeps `aria-labelledby` → its own title (**Add drone documents** / **Add insurance**) and `aria-describedby` → its own subtitle, so both controls are still named and described exactly as they read (`WCAG 2.5.3` ✓, `4.1.2` ✓). What is genuinely given up is the **group** name: the pair no longer announces under a shared heading, and after the move the word *Documents* survives on this screen only as `.zlabel`, the wireframe's annotation, which vanishes with the shell's toggle — which is how she reads the page. So the product has no name for the pair at all, and that is the loss, stated rather than smoothed over. If it should be named again, it comes back as a heading above the pair in its new place at the foot of the form, and it is decided here first.
- **`WCAG 1.3.1` is not broken by the removal, because the visual and programmatic layers still agree.** The criterion asks that structure conveyed visually be available programmatically; with the heading gone, **no grouping is conveyed visually either** — the two cards sit in the same 12px rhythm as everything above them. `2.4.6 Headings and Labels` governs headings that exist and does not require one, and the five field labels are untouched. **The one criterion that preferred the heading is `2.4.10 Section Headings`, and it is AAA** — the project's target is AA (`CLAUDE.md`), so this is a preference forgone, not a conformance lost. Reported, not fixed.
- **The second call — *«перемісти картки з загрузкою на низ фрейма»* — moves no string, and it moves three of them above the fold.** Measured at 375 × 800 with annotations off: the two 161px zones used to stand third and fourth in the form and pushed the Preferences card to **673–821** against a fold at **770.8**, so **Language** and part of **Saved address** were only reachable by scrolling. With the cards last, all five rows — `Full name`, `Phone`, `Payment method`, `Saved address`, `Language` — are above the fold, and what falls below it is the second upload card. The strings a returning client actually edits are now the ones they can see.

**Sync — 2026-08-16 (`listings-filters` · the Price zone becomes a titled range card, and four strings retire with the rows that carried them)**
- **The designer's call on the built panel**, with a Figma reference (`YlGWlsWWjKSCxhONMzGG2F`, node `94:6`): *«зроби такий вю … заголовок Діапазон цін, підзаголовок ціна послуги, і підпис внизу мінімум та максимум, такий барчарт з булітами»*. Put to her before it was built, because the reference has no preset rows: **replace them, or keep them above the chart** — she took **replace**, so the three bands go and the card is exactly the reference.
- **Four rows leave the master table**: `Low`, `Medium`, `High` (Body) and `Insured` (Body), with their `low` / `medium` / `high` field values. **Two more are rewritten rather than retired**: `Lowest price` → **`Minimum price`** and `Highest price` → **`Maximum price`**, and the single readout `₴0 – ₴1,000+` splits into two field values, `₴0` and `₴1,000+`.
- **The rewrite is a `WCAG 2.5.3 Label in Name` fix, not a preference.** The thumbs now sit under printed captions reading **Minimum** and **Maximum**; an accessible name of *Lowest price* would not contain the visible word, and *Minimum price* does. Nothing else about the controls changed.
- **`voice.md` P2 is answered where rev 66 said it would have to be.** That entry recorded a departure taken on her word — *Low / Medium / High* are three adjectives with no checkable figure, on a screen whose cards carry no price at all — and noted the range's readout as the honest half of the zone. **The adjectives are now gone and only the figures remain**, so the departure closes on the designer's own instruction rather than being argued down.
- **`Insured` goes with the band it rode on, and that is a loss worth naming.** rev 66 flagged the chip as readable *the cheaper two are not*, since `.dr-chip--trust` sits on **every** operator card in the built product; retiring it removes that reading. What it also removes is the only trust mark in the filter sheet — `RJ-C1` is the highest single drop-off in the CJM — and the sheet is not where a credential is confirmed. **Nothing is deleted from the repo**: the chip is a live component on `order-confirmed` / `-empty`, and it can return to any row on her word.
- **Two strings are new.** The card's title **`Price range`** is a `<legend>`, so the drawn line is also the group's name and no `aria-label` is spent on it. The subtitle **`Service price, all fees included`** is her *ціна послуги* plus the reference's own *з усіма зборами* clause; it is written that way to keep it off the product's `Service fee ₴20` line — *price*, not *fee* — and it is true by build, the `order-setup` breakdown totalling **₴90 + ₴70 + ₴20 = ₴180** with nothing unaccounted (P3). **If four words are three too many, `Service price` alone is one edit** — hers to say.
- **The histogram gets a text alternative rather than being hidden.** `role="img"` with **`How services are priced: most cost ₴200 – ₴350`** — it states what the drawn bars show, so `WCAG 1.1.1` is met by a sentence and not by `aria-hidden`. It describes the **distribution**, never the selection: the chosen band is spoken by the two thumbs and printed in the two value fields.

**Sync — 2026-08-16 (`listings-filters` · the other two zones become titled cards, and three strings arrive)**
- **The designer's call on the built panel**, the day after the Price zone got its title: *«добав заголовок і підзаголовок у два фільта вище Location & available date»*. rev 123 titled one of three zones; **Location** and the time zone carried no name in the product at all — the only word standing over either was `.zlabel`, which is the **wireframe's** structure annotation and disappears with the shell's annotation toggle, **which is how she reads the page**. So with annotations off the panel read as two unnamed cards under one named one.
- **Three strings are new, and two of them are one sentence shape.** `Location` ▸ **`Where you need the service`**; `Date & time` ▸ **`When you need the service`**. Where / When, same words after them, so the two zones read as a pair rather than as two separate writings. Both answer **P1** — the outcome, never the drone — and **P4**: *service* is the product's own word, on the Home tiles, on `order-setup` and in `Service price, all fees included` one card below.
- **`Date & time` is a two-word title over a one-word `.zlabel`, deliberately, and the same way `Price` ▸ `Price range` already is.** The zone sets a **day** and a time within it — *Available now · Today · This week · Pick a date & time…* — and *Time* alone reads as a time of day. It is also the wording the product already writes, on the option's own label and on the drawer's title, so nothing new is invented for it. **Her own word for this filter was *available date*.** If she wants the title to be the `.zlabel`'s single `Time` instead, it is one string in one file.
- **No string is retired and nothing moves.** `Time` stays in the table as the `.zlabel` it now only is; every field label, value and option on the panel is untouched.
- **Each card's name is now the line the eye reads.** `aria-labelledby` → the title and `aria-describedby` → the subtitle, on the Location group and on the Time fieldset — so `aria-label="Location"` / `aria-label="Time"`, two strings that could drift from the drawn page without anything showing it, are gone from the markup (`WCAG 1.3.1`, `2.5.3`, `4.1.2`). It is the third and fourth time this panel spends the patch rev 119 chose over a `<legend>`.
- **One row in this table was wrong and is corrected against the frame, not the other way round.** `Price range` was recorded as a **`<legend>`**; the built page has a `<p>` named by `aria-labelledby`, because a rendered legend sits in the fieldset's block-start border region — outside the padding box — and took the card's whole 16px inset with it. `kit.css` has said so since rev 119; the master table had not caught up.

**Sync — 2026-08-16 (`account-edit` and `payment` take the same titled card, and the sweep that decided where it stops)**
- **The designer's call, straight after the filter panel:** *«якщо в проекті ще є аналогічні картки добав до них так само заголовок і підзаголовок але не у картках замовлень та оператора а там де є необхідність вводити дані які посортовані по категоріях»*. So the question is not *which screens have cards* but **which cards hold data the user enters, sorted into categories** — and the answer was swept, measured in the browser, before a line was written.
- **What the sweep found, and it is a short list on purpose.** Every group on every painted screen was read by computed style, and a group counts only if its background is `--card`: **`account-edit` · Personal** (three typed rows) and **· Preferences** (two picker rows), and **`payment` · Payment method** (three options). That is all of it. **`order-setup`, `report-issue`, `contact-support` and `rate` have no such card** — their entry groups compute `rgba(0,0,0,0)`, because rev 98 made every input group a **plain list** on the designer's own word (*«мені не подобається обводка в полях вводу… зроби як у HIG»*). Titling them would mean giving them cards first, which reverses a product-wide call rather than applying this one. **Not done, and not decided here.**
- **Six strings are new**, three pairs on one shape. `Personal details` ▸ *What the operator needs to reach you*; `Payment & language` ▸ *How you pay and the language you see*; `Payment method` ▸ *How you pay for this order*.
- **The two payment cards are deliberately not the same sentence.** `account-edit`'s is the **saved default** and `payment`'s is **this order's** choice; the words *for this order* are the only thing on either screen that says which is which, so they earn their place (P3 — the fact, before the tap).
- **A title says what the card holds, not what drawer it lives in.** `Payment & language` over `Preferences`, `Personal details` over `Personal` — `voice.md` **P2** asks for the proof rather than the category word, and both `.zlabel`s stay as they are, being the wireframe's annotation and not product copy.
- **The `Documents` pair is untouched, and that is the point.** Its two upload cards already carry their own title and subtitle, and the heading that stood **above** the pair came off on her word at rev 120 (*«видали назву»*). Nothing here puts it back: what is added is a title **inside** a card, which is the shape she has kept every time it was built. `account-photo`'s two upload cards are titled the same way and needed nothing.
- **The operator's own two candidates are named rather than skipped quietly.** `withdraw` (Amount ▸ Withdrawal method) and `result-upload` (Result photo ▸ Notes) are exactly the shape she described — data entered by category — but they are still **grayscale**, with no `ui/kit.css` and no card component to put a title in. They come with the operator side when it is painted.

**Sync — 2026-08-16 (the pay drawer gains a message, and it is the sum itemised)**
- **One string arrives:** **`Total ₴180 — base fare ₴90, distance ₴70, service fee ₴20`**, under `Pay ₴180` inside the drawer. The designer, on the built sheet: *«добав сюди якокось опису трохи тотал пеймент etc»*.
- **The slot is the guideline's, not an invention.** `HIG · Action sheets` gives a sheet a title **and an optional message beneath it**; the line is tied to the dialog with `aria-describedby`, so it is announced with the sheet's name instead of sitting loose in it (`WCAG 4.1.2`, `1.3.1`). It reuses `.dr-note` — 12/400 `--slate`, centred — the class `share`'s own sheet already carries, so no class and no rule is added.
- **Three shapes were measured and put to her before anything was written, and she chose the second.** (1) what the total covers — *Total for Package delivery · Podil, 21 → Osokorky, 14*; (2) the total itemised, which is what is built; (3) the four-row breakdown repeated inside the drawer, which takes the sheet to **518.2px = 63.82%** of the frame and covers the card it repeats. (1) and (2) cost the same **30px**.
- **It restores what the drawer hides, which is the opposite of what a first, wrong reading said.** Measured on the real stylesheet: the money card sits at y **395–592.4** and the sheet's top edge at **488.4** — the drawer covers **`Service fee ₴20`** and **`Total ₴180`** outright and cuts **`Distance · 7.4 km ₴70`** at 488.4, leaving **`Base fare ₴90`** as the only row whole behind the scrim. (This was true before rev 136 too: at 292.8 the sheet's edge was 519.2 and `Total ₴180` was already under it.) So while the sheet is up, this line and the title `Pay ₴180` are the only place the total exists at all. **That is what separates it from the string retired here on 2026-08-15:** *"This is the final price. Nothing is added at checkout."* was a **promise** about the price and restated nothing the reader could not check; this is the **price itself**, on the surface that takes the money — `voice.md` **P3**, the fact before the tap.
- **Measured on the build, 375 × 812, annotations off.** Sheet **292.8 → 322.8**, **36.06% → 39.75%** of the frame; the line is **one line** at 341.4 wide against a natural text width of **329** — **12.4px of slack**, which is thin: a five-figure total (`₴1,180`) wraps it to two lines and the sheet to 340.8. `--slate` on `--page` **6.62:1** against `WCAG 1.4.3`'s 4.5:1. Green unmoved at **15,022px² · 4.93%**, one control, one shadow.
- **The figures are `DATA`.** They track the order, the way `Small · up to 2 kg` and `Now · ~25 min` do; the string that is fixed is the shape — *Total ₴X — base fare ₴Y, distance ₴Z, service fee ₴W*.
- **Not swept.** `order-review-loading` has no drawer (its bottom edge is `Continue`), and `payment.html` states the amount in its own `Amount` zone; neither gains this line.

**Sync — 2026-08-16 (`payment` stops asking the method and starts taking the card)**
- **The designer, reading the built drawer:** *«по кліку на кнопку "Pay with card" відкриваються поля вводу номера картки дати csv та ім'я власника та сторінка яку ти відкриваєш вже не релевантна»*. The drawer answered *how you pay*; the screen behind it asked the same question again, over three radios, and never took a card number at all — the file's own header said so: *"Wireframe placeholders only — no real card entry."*
- **Five strings retire, and none of them for taste.** `Payment method` (heading) · `How you pay for this order` (subtitle) · `Apple Pay` · `Google Pay` · `Visa •••• 4921` (three field labels). They were correct copy for a method list; there is no method list left on the screen. **`Payment method` survives elsewhere untouched** — on `account-edit`'s row and its drawer — so the concept still holds one word across the product, it simply stops being asked twice in one flow.
- **Seven arrive.** Five field labels — `Card number` · `Expiry` · `CVV` · `First name` · `Last name` — the checkbox `Save this card for next time`, and a new card title / subtitle pair, `Card` ▸ *Visa or Mastercard, charged once for this order*.
- **The name is two labels, not one, and that was the designer's call the same day** (*«імя прізвище»*). `Cardholder` was built first and retired within the hour. Both shapes were put to her with the standards first and **neither fails**: `WCAG 1.3.5` names `cc-name` for the single field and `cc-given-name` + `cc-family-name` for the split, and `HIG · Text fields` asks for the fewest fields, the name being printed on the card as one line. A taste call with nothing failing either way. `First name` / `Last name` is also the pair `account-edit`'s `Full name` would split into, so the product would hold one naming, not two.
- **The subtitle is three facts, not a sentence about the product.** *Visa or Mastercard* — which cards work, stated **before** the sixteen digits rather than after them (**P3**, the price/fact before the tap). *Charged once* — the recurring-charge fear answered on the screen that takes the money, against CJM Drop-off #2 (*any surprise on the payment screen = abandonment*). *For this order* — the same scoping that already separated this card from `account-edit`'s saved default, and it keeps doing that work now that the two cards hold different things.
- **`Save this card for next time` is not a new sentence.** It is `order-setup`'s `Save this address for next time` with one noun changed — the product's other save-for-later checkbox, same component, same place on the bottom edge, same shape of promise. One pattern, said twice the same way.
- **`CVV` is the designer's word** (*«csv»*, read as CVV). Mastercard prints **CVC** and Apple's own forms say **Security Code**; the project takes one label per concept and this is it. Recorded rather than silently normalised, so the alternative is a decision she can reverse and not a thing that went missing.
- **The nav title changes with the content:** `Payment` → `Card details`. `HIG · Navigation bars` asks the title to name the current screen, and the screen now asks for a card. `payment-error` and `payment-loading` **keep `Payment`** on purpose — they serve the Apple Pay and Google Pay paths too, where *Card details* would be false.
- **One link moves, and it is a consequence, not an addition.** `payment-error`'s `Change method` pointed at `payment.html`, which was the method list; it now points at `order-review.html`, where the method drawer actually is. The string is unchanged.
- **Left standing, and flagged rather than rewritten:** `payment-error`'s body still reads *"Apple Pay couldn't complete the charge…"* and `payment-loading`'s still reads *"Confirming your payment with Apple Pay."* Both were written when Apple Pay was the checked default; the card path now reaches the same two screens and would be told the wrong method. **Open — the designer's word, one string each.**

**Sync — 2026-08-16 (the drawer's message becomes the price card: rev 136's sentence retires after one day)**
- **The designer, on the built sheet:** *«зроби самері гарним у 4 стрічки»*. So the message slot keeps its job and changes its shape: four lines instead of one.
- **Nothing arrives and one thing leaves.** The four lines are `Base fare` · `Distance · 7.4 km` · `Service fee` · `Total` with their figures — the rows this screen already carries, verbatim and in order — so the master table gains **no** string. What retires is rev 136's own line, *Total ₴180 — base fare ₴90, distance ₴70, service fee ₴20*: the same four facts written as prose, which is what she asked to replace. It stood for one day and is logged rather than quietly overwritten, so it is not re-proposed later as new.
- **This is the third of the three shapes rev 136 put to her, chosen after being passed over.** rev 136 priced it then at **518.2px = 63.82%** of the frame; built today it measures **518.8 = 63.89%**.
- **Both shapes offered this time conform, so it went to her as a taste call with the numbers first** (`CLAUDE.md`, the conformance check). (a) the screen's `.dr-rows--money` in the sheet — keys **5.95:1**, figures **14.37:1**, drawer **63.89%**; (b) four `.dr-price` lines on the sheet's ground, last on `.dr-price--total` — **6.62:1** / **15.99:1**, drawer **53.59%**. `HIG · Action sheets` allows a title **and** content beneath it; `WCAG 1.4.3`'s floor is 4.5:1. She took **(a)**.
- **The accessible description survives the change, which is the part that could have been lost silently.** `sheet-pay-desc` moves onto the rows container, so the dialog is still described by its figures (`WCAG 4.1.2`, `1.3.1`); the card takes **no** `aria-label` — the same card wears one on the screen, and here it would win the description computation and speak *Price breakdown* instead of the money.
- **Re-measured on the current build rather than inherited.** rev 136's sentence about what the drawer hides (card at y 395–592.4, edge 488.4) is stale: the card now stands at y **462.78–676.78** and the edge at **292.2**, so all four repeated rows are under the scrim. Nothing is read twice.
- **Not swept.** `order-review-loading` has no drawer — its bottom edge is `Continue` — and `payment.html` states the amount in its own zone. Neither gains this card.

**Sync — 2026-08-16 (the pay drawer's title comes off, and the string moves rather than retires)**
- **The designer, on the built drawer, pointing at `Pay ₴180`:** *«delete it»*.
- **Nothing is retired here, which is why this is not filed as a retirement.** The words stop being *read* and go on being *announced*: `aria-labelledby="sheet-pay-title"` becomes `aria-label="Pay ₴180"` on the dialog. A `role="dialog"` with no accessible name is a plain **`WCAG 4.1.2`** failure — the sheet would have opened as *dialog*, unnamed — so the visible line going is a design decision and the name staying is not optional.
- **The redundancy it removes arrived with rev 138.** The card under the title states `Total ₴180` at **20/700**, the largest figure on the surface; the title said the same number at 17/600, three lines up. Before rev 138 the title was the only place the total existed while the sheet was up, which is why it was right then and is not now.
- **`HIG · Action sheets` permits it:** a title and a message are both optional, the **named cancel** is not, and it is untouched. **`2.5.3 Label in Name`** stops applying with no visible label left; **`2.4.6`** governs the labels that exist, not their existence.
- **One consistency cost, stated with its boundary.** Six drawers keep their `.dr-sheet__title` — `Mode` · `Parcel size` · `Issue type` · `Language` · `Payment method` · `Pick a date & time` — and every one titles a **list of options that says nothing on its own**. This drawer's content is a statement of price. The rule is written into `wireframes/_conventions.md` rather than left as a page that quietly differs.
- **Measured:** sheet **518.8 → 483.0**, **63.89% → 59.48%** of the frame.

**Sync — 2026-08-16 (`account-photo` becomes a modal, and four strings change with the shape)**
- **The designer, on the built screen, with her Figma `100:30` beside it:** *«залиш зображення аватарки посередині а кнопки "Take a photo", Choose a picture, Delete і Сancel зроби у ботом барі по типу цього … лиш кнопки по стилю мої з кіта»*. Her reference is an iOS action sheet over an *Edit Profile* screen — **Cancel** top-left, **Save** top-right — and she chose that reading over the two alternatives when the three were priced against `HIG · Modality`.
- **Two strings are hers verbatim and are logged as her words, not as an improvement:** `Choose from library` → **`Choose a picture`**, `Remove photo` → **`Delete`**. The second one closes a real split — *Remove* stood in exactly one place in the product while *Delete order* stood in two — so `voice.md` gains **A13**, one destruction verb everywhere.
- **`Save photo` → `Save`, and the object is not lost, it moves.** In the action bar the button stood alone and had to name what it saved; in a navigation bar the centred title reads *Profile photo* on the same line. `account-edit`'s `Save changes` is deliberately **not** swept with it — that one is still a lone button on a bottom edge.
- **Two sentences carry the copy that the deleted zones were holding**, rather than being dropped with them: `Your initials show instead.` joins the photo card's own sentence, and `You can retake it before saving.` becomes *Nothing changes until you save.* — which now covers `Delete` as well as the two sources, and is the reason a destructive button here still needs no confirmation alert.
- **The back chevron's string retires** (`‹ Account` / *Back to Account*). A modal is dismissed by its named Cancel; carrying both would put two exits with two different words on one bar (`WCAG 2.4.6`, and `HIG · Modality` outright).
- **Nothing else on the screen changed wording:** `Profile photo`, `Take a photo`, `JPG or PNG, up to 5 MB.` and `Your operator sees this photo when they arrive.` are the strings rev 128 wrote.

---

## Master table — every string

_Columns: Screen · Zone · Text (verbatim) · Type · Flag. One row per string, in document order. Regenerated from the current wireframes after the voice rewrite (Step 03 audit)._

| Screen | Zone | Text | Type | Flag |
|---|---|---|---|---|
| account-edit | — | ‹ Account | Button |  |
| account-edit | — | Edit account | Heading |  |
| account-edit | Personal | Personal details | Heading | the card's title, new 2026-08-16 (rev 127) — the group's accessible name by `aria-labelledby`, and the group had **no** programmatic name before this pass. Two words where the `.zlabel` has one: *Personal* alone is a category, *Personal details* is what the card holds |
| account-edit | Personal | What the operator needs to reach you | Body | the card's subtitle, new 2026-08-16 (rev 127) — `aria-describedby` on the group. It says what the three rows are **for** rather than listing them again: the name, the phone and the saved address are exactly what an operator uses to find and call you (P1 — the outcome, not the equipment) |
| account-edit | Personal | Full name | Field label |  |
| account-edit | Personal | Olena B. | Field value | DATA |
| account-edit | Personal | Phone | Field label |  |
| account-edit | Preferences | Payment & language | Heading | the card's title, new 2026-08-16 (rev 127) — it names the two things in the card, where the `.zlabel`'s *Preferences* names only the drawer they sit in (P2 — the proof, not the category word) |
| account-edit | Preferences | How you pay and the language you see | Body | the card's subtitle, new 2026-08-16 (rev 127) — `aria-describedby` on the group. It is the **saved default**, which is why `payment`'s card next to it reads *for this order*: two cards, two scopes, and the copy is what tells them apart |
| account-edit | Preferences | Payment method | Field label | also the drawer's title (rev 102) |
| account-edit | Preferences | Visa •••• 4921 | Body | DATA · the row's value and the current option |
| account-edit | Preferences | Mastercard •••• 8830 | Body | DATA · picker option, new 2026-08-16 (rev 101) |
| account-edit | Preferences | Apple Pay | Body | picker option, new 2026-08-16 (rev 101) — the `CLAUDE.md` payment set, named as the platform names itself |
| account-edit | Preferences | Google Pay | Body | picker option, new 2026-08-16 (rev 101) — same |
| account-edit | Preferences | Saved address | Field label |  |
| account-edit | Preferences | Podil, 21 | Field value | DATA |
| account-edit | Preferences | Language | Field label | also the drawer's title (rev 102) |
| account-edit | Preferences | English | Body | the row's value and the current option |
| account-edit | Preferences | Ukrainian | Body | picker option, new 2026-08-16 (rev 101) — the language is named **in the interface language**, not in its own («Українська»), because `CLAUDE.md` holds every file to English and the switcher elsewhere is EN/UA |
| account-edit | Documents | DRONE REGISTRATION / DOCUMENTS | Body | WF-PH · not in the painted build — see the 2026-08-15 sync |
| account-edit | Documents | Add drone documents | Button | the card's title |
| account-edit | Documents | Registration, serial, or manufacturer papers (PDF / photo). | Body | the card's subtitle |
| account-edit | Documents | INSURANCE DOCUMENT | Body | WF-PH · not in the painted build — see the 2026-08-15 sync |
| account-edit | Documents | Add insurance | Button | the card's title |
| account-edit | Documents | Valid liability insurance covering the drone. | Body | the card's subtitle |
| account-edit | Preferences | Cancel | Button |  |
| account-edit | Preferences | Save changes | Button |  |
| account-edit | Payment drawer | Cancel | Button | the drawer's dismissal, new 2026-08-16 (rev 102) — `HIG · Action sheets` asks for the cancel by name. It never stands beside the form's own Cancel: the scrim covers the action bar while the drawer is up |
| account-edit | Language drawer | Cancel | Button | same |
| account | — | Account | Heading |  |
| account | Profile | Change profile photo | Button | the pencil badge on the avatar, new 2026-08-16 — an **accessible name only**, the badge being icon-only (`WCAG 4.1.2`). Deliberately *not* `Edit profile photo`: the sibling pencil beside the name is already `Edit profile`, and two adjacent icon controls announcing one word apart is the ambiguity `WCAG 2.4.6` names. Different verb, different object → `Change` + *profile photo* against `Edit` + *profile* |
| account | Profile | OB | Body | DATA |
| account | Profile | Olena B. | Body | DATA |
| account | Profile | Verified with Diia | Body |  |
| account | Profile | Client | Body |  |
| account | Mode | Mode | Field label | rev 111 — the picker became a settings row, so the row gains a label and the drawer takes `Mode` as its title |
| account | Mode | Client | Field value | rev 111 — replaces `Client mode`, which said the noun twice once the row was labelled |
| account | Mode | Client — order services | Body |  |
| account | Mode | Operator — take jobs | Body |  |
| account | Mode | switch | Body |  |
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
| account-photo | — | Cancel | Button | the modal's dismissal, new 2026-08-16 (rev 146) — `HIG · Modality` gives a view that commits with Save a **named** Cancel, and the back chevron leaves with it: a screen cannot both push and be dismissed. It never stands beside a second Cancel; the one that used to sit in the action bar is gone |
| account-photo | — | Profile photo | Heading | new screen 2026-08-16 |
| account-photo | — | Save | Button | the modal's commit, new 2026-08-16 (rev 146). **Bare, where the action bar's string was `Save photo`** — in a navigation bar the title stands 100px away saying *Profile photo*, so the object is on screen and `HIG · Modality` asks the bar's own word; `account-edit`'s `Save changes` is untouched, its object having nothing else to lean on |
| account-photo | Photo | Your operator sees this photo when they arrive. Without one, they see your initials. | Body | P1 — names the outcome (being recognised on arrival), not the file. **The second sentence is `Delete`'s consequence, printed before the tap** (P3): it was `Your initials show instead.` under the Remove zone that rev 146 dissolved into the bar, and it says the same thing in the same voice as the sentence above it |
| account-photo | Action bar | JPG or PNG, up to 5 MB. Nothing changes until you save. | Body | P3 — two facts before the tap: the file rule, and that **no button in this bar commits on its own**. The second sentence carries what `You can retake it before saving.` said under the removed upload card, and now covers `Delete` as well as the two sources — which is what makes the destructive action recoverable without a confirmation alert. `HIG · Action sheets` allows a message above the choices; it is tied to all three by `aria-describedby` |
| account-photo | Action bar | Take a photo | Button | `HIG · Action sheets` ships this source by name. A3 fixes the *attach* verb as **Add** + object and bars ~~Upload~~ / ~~Attach~~; what this names is the **source** |
| account-photo | Action bar | Choose a picture | Button | the second `HIG · Action sheets` source. **The designer's own word 2026-08-16 (rev 146)**, from her Figma `100:30` — it was `Choose from library`, which named the iOS app rather than the thing the user wants |
| account-photo | Action bar | Delete | Button | destructive, and **the designer's own word (rev 146)** — it was `Remove photo`. `voice.md` **A13** now fixes **Delete** as the product's one destruction verb, and this was the only string standing outside it. Bare, because the bar's own title says *Profile photo*. The verb carries the meaning with the colour gone (`WCAG 1.4.1`), the same reading rev 131 wrote for `Delete order` |
| contact-support-error | — | ‹ Help | Button |  |
| contact-support-error | — | Support | Heading |  |
| contact-support-error | Escalation | Sent to a senior agent | State message |  |
| contact-support-error | Escalation | We couldn't resolve this in chat, so a senior agent will review order #DR-4821 against our support policy and follow up. You don't need to wait here. | State message |  |
| contact-support-error | Escalation | Back to Activity | Button |  |
| contact-support-error | Escalation | Contact support | Button |  |
| call | Call | Andriy M. | Heading | DATA. **The name is the screen**, which is how every call UI titles itself and how her reference draws it — 22/700, centred, with no nav bar under it to compete. It is also where `RJ-C1` lands now that the operator card is gone: the client sees who is on the line, and the badges stay one tap behind on `tracking` |
| call | Call | 02:14 | Body | DATA. **The running clock is the statement that the call is up**, so no line says *Connected* — `voice.md`'s own rule, state the fact and cut what decorates it. 15/400 in `--btn2`, the dimmer light ink, and **tabular**, because a duration that reflows its own width every second is what those figures exist to stop |
| call | Call | Call duration | Body | SR-ONLY — a bare number is ambiguous to a screen reader, and `<time datetime="PT2M14S">` carries the machine-readable value beside it (`WCAG 1.3.1`) |
| call | Call | Minimise the call | Button | **accessible name only** — the control is a 44px disc with two inward arrows and no visible text, so `2.5.3` does not apply and the name carries the act (`1.1.1`, `4.1.2`). *Minimise*, not *Back*: the call keeps running, which a back chevron would not say. Not *Hide* — nothing is being concealed |
| call | Call | Add support to the call | Button | **accessible name only, and the one string on this screen that is an interpretation** — the reference draws a person+ here, and *add someone to a call* has no job in `sitemap.md`. The nearest thing DRON does have is `EJ-2`'s reach-a-human, so it names that and opens `contact-support.html`. Flagged rather than smoothed over: if it is not this, the control comes off rather than being invented into something |
| call | Call | Chat with the operator | Button | **accessible name only** — `voice.md` **A12**, the same string the tracking drawer's row carries, opening the same `chat.html`. One destination, one name, on both surfaces that reach it |
| call | Controls | Video | Button | **accessible name only.** A toggle: the label does **not** flip to *Stop video* when pressed — `aria-pressed` carries the state and a label that flips makes one control announce two things (`WCAG 2.5.3`, `4.1.2`). **The second control with no `sitemap.md` job behind it**, and in her frame rather than invented here; flagged with the person+ above |
| call | Controls | Speaker | Button | **accessible name only**, same toggle rule. Not *Speakerphone* — `voice.md` **P4** takes the word the client would say |
| call | Controls | Mute | Button | **accessible name only**, same toggle rule — it does not become *Unmute* when pressed. The reference draws its mic already muted, which is the pressed half of this control; the base file is the normal state, so it rests here |
| call | Controls | End call | Button | **accessible name only** from 2026-08-16 — the control was a labelled block button for one build and became a red disc on the designer's reference. Verb + object: not *Hang up* (a landline idiom C-1 does not use), not *End* alone, and **not** *Cancel* — the call happened, it is being finished rather than undone |
| call-support | Call | DRON Support | Heading | DATA, and **the same string the agent card on `contact-support` carries**, which is the whole point of the screen: you called the party you were already writing to, and the name does not change on the way. Not *Support*, not *Agent*, not a person's name — the agent is not named anywhere in `EJ-2`, and inventing one here would make the call answerable by a stranger. 22/700, centred, no nav bar under it |
| call-support | Call | 01:07 | Body | DATA. Same rule as `call`: the running clock **is** the statement that the call is up, so no line says *Connected*. 15/400 in `--btn2` and tabular |
| call-support | Call | Call duration | Body | SR-ONLY — same reason as on `call`: a bare number is ambiguous, and `<time datetime="PT1M7S">` carries the machine-readable value beside it (`WCAG 1.3.1`) |
| call-support | Call | Minimise the call | Button | **accessible name only**, the same string and the same 44px disc as on `call` — one control, one name, on both surfaces that have it. Its target differs because the screen behind differs: `contact-support.html`, not `tracking.html` |
| call-support | Controls | Video | Button | **accessible name only**, the toggle rule unchanged. **Inherited with its flag**, not re-decided: §9c already records that a video call has no `sitemap.md` job behind it. It stays so the two calls are one component; it comes off both in one line, together |
| call-support | Controls | Speaker | Button | **accessible name only**, same toggle rule as on `call`. Not *Speakerphone* (`voice.md` **P4**) |
| call-support | Controls | Mute | Button | **accessible name only** — does not become *Unmute* when pressed (`WCAG 2.5.3`); `aria-pressed` carries the state |
| call-support | Controls | End call | Button | **accessible name only**, the same red disc and the same verb+object as on `call`. Not *Hang up*, not *End*, and **not** *Cancel* — the call happened. It returns to the message form, where `Mark resolved` and `Ask a senior agent` are still waiting, so the escalation ladder survives the call |
| call-support | — | ~~Add support to the call~~ · ~~Chat with the operator~~ | Button | **NOT BUILT, and recorded so the absence reads as a decision.** Both are on `call`'s top right. The first is meaningless when support **is** the party on the line; the second names the wrong person, and the typed channel to *this* agent is the message form behind the screen — which is where **Minimise** already lands, so a second control for it would be one act under two names. `.dr-call__side--empty` holds their 44px so the name stays centred |
| call | — | ~~The call goes through DRON. Your number is not shared with the operator.~~ | Body | **REMOVED 2026-08-16 with the light build**, and recorded rather than dropped quietly. The masking fact was the one thing this screen said in words, and the reference has no place for a sentence. It still runs where `voice.md` **P3**'s discipline actually wants it — in the `Contact operator` drawer, **before** the tap, not during the call. If it should also be on this screen, the place for it is under the duration |
| chat | — | Back to On the way | Button | **accessible name only** — the nav-bar back is the chevron alone (`microcopy.md` **D9**). *On the way* is what `tracking`'s own bar is titled, so the destination is named by the name that place carries, the same string `inspection-report` already uses |
| chat | — | Andriy M. | Heading | DATA. **The bar carries the person, not the function** — `HIG · Navigation bars` titles the current view, and here the view *is* the correspondent, which is how Messages reads it. It is also the only place `RJ-C1` is answered on this screen: the client sees whose thread they are in without repeating the operator panel standing one tap away on `tracking` |
| chat | Thread | Today | Body | the day mark over the group. One word, not *Today, 16 August* — the times below it are all within the hour of a live job, and the longer form is the `wallet` list's rung, where entries span days |
| chat | Thread | Andriy M.: · You: | Body | SR-ONLY, one per message. Which side said it is carried **by the edge the bubble is anchored to**, and the two grounds are 1.25:1 apart — no eye separates them and nothing announces an alignment, so each row names its speaker for assistive tech (`WCAG 1.4.1`, `1.3.1`). Written with the operator's own name rather than *Operator*, because the bar above already introduced them by it |
| chat | Thread | Your parcel is picked up from Podil, 21. On the way to Osokorky, 14. | Body | DATA — USER content, one side of a real conversation, and the addresses are `order-review`'s own (*Podil, 21* → *Osokorky, 14*). Conversation is not system copy, but it is still held to `voice.md`'s floor: no exclamation marks, no emoji, no cheer. The operator states the fact and the next move |
| chat | Thread | The courtyard gate is locked — the code is 4471. | Body | DATA — USER content. **This is the sentence that justifies the screen:** a gate code cannot be collected at order time and cannot wait for `EJ-2`, and it is the Bolt in-ride message verbatim — the thing `sitemap.md §4`'s deleted pre-booking chat was never for |
| chat | Thread | Got it. I'll land at the entrance and send the delivery photo. | Body | DATA — USER content. *Delivery photo* is `voice.md` **O5**'s dictionary word for the deliverable, so the operator's own sentence names it the same way the product does |
| chat | Thread | Which entrance? | Body | DATA — USER content |
| chat | Thread | The one facing the playground. About 6 minutes out. | Body | DATA — USER content. *About 6 minutes* is the same figure `tracking`'s ETA row shows (*~6 min*) — one fact, one number, on both surfaces |
| chat | Composer | Message | Field label + placeholder | the label is SR-ONLY and the placeholder carries it visually, the shape `contact-support`'s message field already ships. One noun, the thing you are about to write; not *Write a message* (a sentence in a field) and not *Type here* (an instruction about the keyboard) |
| chat | Composer | Send message | Button | **accessible name only** — the control is a 44px disc with an arrow and no visible text, so `WCAG 2.5.3 Label in Name` does not apply and the name has to carry the object (`1.1.1`, `4.1.2`). The verb is `voice.md` **A9**: *to a person: Send* — never *Submit*, which is what you do to the platform |
| contact-support | — | ‹ Help | Button |  |
| contact-support | — | Support | Heading |  |
| contact-support | Agent panel | DR | Body | DATA |
| contact-support | Agent panel | DRON Support | Body |  |
| contact-support | Agent panel | Online 24/7 · typically replies in ~3 min | Body | DATA |
| contact-support | Agent panel | Human agent | Body |  |
| contact-support | Agent panel | Order #DR-4821 | Body |  |
| contact-support | Message | Your message | Field label | SR-ONLY — visually the field shows one sentence: the placeholder (designer, 2026-08-15) |
| contact-support | Message | Describe the issue and what you'd like to happen. | Field placeholder |  |
| contact-support | Outcome (actionbar) | Call support | Button | Moved out of the Message zone into the footer action bar, 2026-08-16 (rev 106) — string unchanged. **The string has now outlived two targets and never moved, which is the test of a good label:** `voice.md` **A2** names this exception in the entry itself (*"a phone-only action may say Call support — calling ≠ messaging"*), and from 2026-08-16 it opens **`call-support.html`**, DRON's own call screen, on the designer's word. Until then it opened **nothing at all** — a `<button type="button">` with no target, no handler and no toast, described in this file and in `concept.md` rev 106 as *"hands off to the phone app"* on a `tel:` reading that left the product at rev 141 with the masked number. The element becomes an `<a>` because it now navigates, the same change `Call operator` went through |
| contact-support | Message | Mark resolved | Button |  |
| contact-support | Outcome | Issue marked resolved. | Toast |  |
| contact-support | Message | Ask a senior agent | Button |  |
| delivery-error | — | Delivered | Heading |  |
| delivery-error | Proof of delivery | NO PHOTO | State message | WF-PH |
| delivery-error | Proof of delivery | Delivery photo is missing | State message |  |
| delivery-error | Proof of delivery | The operator hasn't uploaded a delivery photo and the confirmation window has passed. Without it, the order can't be confirmed or paid. Report an issue and support will resolve it. | State message |  |
| delivery-error | Proof of delivery | Back to live tracking | Button |  |
| delivery-error | Proof of delivery | Report an issue | Button |  |
| delivery-error | Proof of delivery | Order | Button |  |
| delivery-error | Proof of delivery | Activity | Button |  |
| delivery-error | Proof of delivery | Help | Button |  |
| delivery-error | Proof of delivery | Account | Button |  |
| delivery-loading | — | Delivered | Heading |  |
| delivery-loading | — | WAIT | State message | WF-PH |
| delivery-loading | — | Waiting for the delivery photo… | State message |  |
| delivery-loading | — | Your operator is uploading the delivery photo now. | State message |  |
| delivery-loading | Proof of delivery | This usually takes under a minute. | State message |  |
| delivery-loading | Proof of delivery | View delivery photo | Button |  |
| delivery-loading | Proof of delivery | Order | Button |  |
| delivery-loading | Proof of delivery | Activity | Button |  |
| delivery-loading | Proof of delivery | Help | Button |  |
| delivery-loading | Proof of delivery | Account | Button |  |
| delivery | — | Delivered | Heading |  |
| delivery | — | DONE | Body | WF-PH |
| delivery | — | Your parcel arrived at 10:07. | Body | DATA |
| delivery | Proof of delivery | DELIVERY PHOTO | Body | WF-PH |
| delivery | Details | Delivered to | Body |  |
| delivery | Details | Osokorky, 14 | Body |  |
| delivery | Details | Time | Body |  |
| delivery | Details | Operator | Body |  |
| delivery | Details | Andriy M. | Body | DATA |
| delivery | Details | Rate this order | Button |  |
| delivery | Details | Order | Button |  |
| delivery | Details | Activity | Button |  |
| delivery | Details | Help | Button |  |
| delivery | Details | Account | Button |  |
| inspection-report-error | — | ‹ On the way | Button |  |
| inspection-report-error | — | Inspection report | Heading |  |
| inspection-report-error | Report | NO REPORT | State message | WF-PH |
| inspection-report-error | Report | No report received | State message |  |
| inspection-report-error | Report | The operator marked the inspection done but no photos or findings arrived in time. Without the report, the job can't be completed or paid. Contact support to resolve it. | State message |  |
| inspection-report-error | Report | Contact support | Button |  |
| inspection-report-error | Report | Try again | Button |  |
| inspection-report-error | Report | Contact support | Button |  |
| inspection-report-loading | — | ‹ On the way | Button |  |
| inspection-report-loading | — | Inspection report | Heading |  |
| inspection-report-loading | — | The operator is still uploading the report… | State message |  |
| inspection-report-loading | Photo set | Rate this order | Button |  |
| inspection-report | — | ‹ On the way | Button |  |
| inspection-report | — | Inspection report | Heading |  |
| inspection-report | — | DONE | Body | WF-PH |
| inspection-report | — | Report ready | Body |  |
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
| inspection-report | Signature | Rate this order | Button |  |
| inspection-report | Signature | Report an issue | Button |  |
| job-brief-error | — | ‹ Jobs | Button |  |
| job-brief-error | — | Job brief | Heading |  |
| job-brief-error | Brief | GROUNDED | State message | WF-PH |
| job-brief-error | Brief | Stood down — airspace restricted | State message |  |
| job-brief-error | Brief | Flights are grounded at this location right now (airspace / weather). The job was re-dispatched and the client refunded — no action needed. | State message |  |
| job-brief-error | Brief | Back to Jobs | Button |  |
| job-brief-error | Brief | No penalty. A stand-down isn't counted against you. | Body |  |
| job-brief | — | ‹ Jobs | Button |  |
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
| job-checklist-error | — | ‹ Job brief | Button |  |
| job-checklist-error | — | Checklist | Heading |  |
| job-checklist-error | Pre-flight & job steps | Pre-flight safety check | Field label |  |
| job-checklist-error | Pre-flight & job steps | Battery ≥ 80% | Field label |  |
| job-checklist-error | Pre-flight & job steps | Parcel secured | Field label |  |
| job-checklist-error | Pre-flight & job steps | Capture delivery photo | Field label |  |
| job-checklist-error | Pre-flight & job steps | Confirm handover with the client | Field label |  |
| job-checklist-error | Pre-flight & job steps | STEP LEFT | State message | WF-PH |
| job-checklist-error | Pre-flight & job steps | Required steps still open | State message |  |
| job-checklist-error | Pre-flight & job steps | You can't close the job until every required step is checked. 'Capture delivery photo' is still open. | State message |  |
| job-checklist-error | Pre-flight & job steps | Complete the step | Button |  |
| job-checklist-error | Pre-flight & job steps | Complete all steps to continue | Button |  |
| job-checklist | — | ‹ Job brief | Button |  |
| job-checklist | — | Checklist | Heading |  |
| job-checklist | Pre-flight & job steps | Pre-flight safety check | Field label |  |
| job-checklist | Pre-flight & job steps | Battery ≥ 80% | Field label |  |
| job-checklist | Pre-flight & job steps | Parcel secured | Field label |  |
| job-checklist | Pre-flight & job steps | Capture delivery photo | Field label |  |
| job-checklist | Pre-flight & job steps | Confirm handover with the client | Field label |  |
| job-checklist | Pre-flight & job steps | Complete & add delivery photo | Button |  |
| job-offer-empty | — | New job | Heading |  |
| job-offer-empty | Offer | EXPIRED | State message | WF-PH |
| job-offer-empty | Offer | Job expired | State message |  |
| job-offer-empty | Offer | You didn't respond in time, so this job was reassigned to another operator. New jobs will appear here. | State message |  |
| job-offer-empty | Offer | Back to Jobs | Button |  |
| job-offer-empty | Offer | Jobs auto-expire after 10s to keep dispatch moving. | Body |  |
| job-offer | — | New job | Heading |  |
| job-offer | Offer | DELIVERY | Body | WF-PH |
| job-offer | Offer | Package delivery | Heading |  |
| job-offer | Offer | 2.3 km · ~18 min · pickup near Podil | Body | DATA |
| job-offer | Offer | · paid on completion | Body |  |
| job-offer | Route | Pickup | Body |  |
| job-offer | Route | Podil, 21 | Body |  |
| job-offer | Route | Drop-off | Body |  |
| job-offer | Route | Osokorky, 14 | Body |  |
| job-offer | Decide fast | Expires in 8s | Body |  |
| job-offer | Decide fast | Accept | Button |  |
| job-offer | Decide fast | Decline | Button |  |
| listings-empty | — | All | Button |  |
| listings-empty | — | Delivery | Button |  |
| listings-empty | — | Aerial photo & video | Button |  |
| listings-empty | — | Inspection | Button |  |
| listings-empty | Search & filters | Search services | Field placeholder |  |
| listings-empty | Search & filters | crop spraying | Field value | USER |
| listings-empty | Search & filters | Filters | Button |  |
| listings-empty | Service list | No services match your search | State message |  |
| listings-empty | Service list | No services match “crop spraying” with your filters. Clear the filters or search again. | State message |  |
| listings-empty | Service list | Clear filters | Button |  |
| listings-empty | Service list | Notify me when available | Button |  |
| listings-empty | Service list | Request received. We'll tell you when it's available. | Toast |  |
| listings-empty | Service list | Order | Button |  |
| listings-empty | Service list | Activity | Button |  |
| listings-empty | Service list | Help | Button |  |
| listings-empty | Service list | Account | Button |  |
| listings-error | — | All | Button |  |
| listings-error | — | Delivery | Button |  |
| listings-error | — | Aerial photo & video | Button |  |
| listings-error | — | Inspection | Button |  |
| listings-error | Search & filters | Search services | Field placeholder |  |
| listings-error | Search & filters | Filters | Button |  |
| listings-error | Service list | Couldn't load services | State message |  |
| listings-error | Service list | No internet connection. Check it and try again. | State message |  |
| listings-error | Service list | Try again | Button |  |
| listings-error | Service list | Contact support | Button |  |
| listings-error | Service list | Order | Button |  |
| listings-error | Service list | Activity | Button |  |
| listings-error | Service list | Help | Button |  |
| listings-error | Service list | Account | Button |  |
| listings-filter-country | — | Country | Heading |  |
| listings-filter-country | — | Back to Filters | Button | invisible label on the chevron — microcopy.md D9 |
| listings-filter-country | Country | Czechia | Body | DATA |
| listings-filter-country | Country | Germany | Body | DATA |
| listings-filter-country | Country | Hungary | Body | DATA |
| listings-filter-country | Country | Moldova | Body | DATA |
| listings-filter-country | Country | Poland | Body | DATA |
| listings-filter-country | Country | Romania | Body | DATA |
| listings-filter-country | Country | Slovakia | Body | DATA |
| listings-filter-country | Country | Ukraine | Body | DATA · the current pick, sitting in its alphabetical place like Kyiv City does on listings-filter-region |
| listings-filter-city | — | City · Kyiv City | Heading |  |
| listings-filter-city | — | Back to Filters | Button | invisible label on the chevron — microcopy.md D9 |
| listings-filter-city | City | Kyiv | Body | DATA |
| listings-filter-city | City | Kyiv City holds one city. To serve elsewhere, change the region. | State message | the way out of the shortest case — voice.md P5, plain and not apologetic |
| listings-filter-city | City | Change region | Button |  |
| listings-filter-district | — | District · Kyiv | Heading |  |
| listings-filter-district | — | Back to Filters | Button | invisible label on the chevron — microcopy.md D9 |
| listings-filter-district | District | All districts | Body | the default and the way to widen again |
| listings-filter-district | District | Darnytskyi | Body | DATA |
| listings-filter-district | District | Desnianskyi | Body | DATA |
| listings-filter-district | District | Dniprovskyi | Body | DATA |
| listings-filter-district | District | Holosiivskyi | Body | DATA |
| listings-filter-district | District | Obolonskyi | Body | DATA |
| listings-filter-district | District | Pecherskyi | Body | DATA |
| listings-filter-district | District | Podilskyi | Body | DATA |
| listings-filter-district | District | Shevchenkivskyi | Body | DATA |
| listings-filter-district | District | Solomianskyi | Body | DATA |
| listings-filter-district | District | Sviatoshynskyi | Body | DATA |
| listings-filter-region | — | Region | Heading |  |
| listings-filter-region | — | Back to Filters | Button | invisible label on the chevron — microcopy.md D9 |
| listings-filter-region | Search | Search regions | Field placeholder | the list is 1100px in a 640px area, so it scrolls and takes a search |
| listings-filter-region | Region | Cherkasy Oblast | Body | DATA |
| listings-filter-region | Region | Chernihiv Oblast | Body | DATA |
| listings-filter-region | Region | Chernivtsi Oblast | Body | DATA |
| listings-filter-region | Region | Dnipropetrovsk Oblast | Body | DATA |
| listings-filter-region | Region | Donetsk Oblast | Body | DATA |
| listings-filter-region | Region | Ivano-Frankivsk Oblast | Body | DATA |
| listings-filter-region | Region | Kharkiv Oblast | Body | DATA |
| listings-filter-region | Region | Kherson Oblast | Body | DATA |
| listings-filter-region | Region | Khmelnytskyi Oblast | Body | DATA |
| listings-filter-region | Region | Kirovohrad Oblast | Body | DATA |
| listings-filter-region | Region | Kyiv City | Body | DATA |
| listings-filter-region | Region | Kyiv Oblast | Body | DATA |
| listings-filter-region | Region | Luhansk Oblast | Body | DATA |
| listings-filter-region | Region | Lviv Oblast | Body | DATA |
| listings-filter-region | Region | Mykolaiv Oblast | Body | DATA |
| listings-filter-region | Region | Odesa Oblast | Body | DATA |
| listings-filter-region | Region | Poltava Oblast | Body | DATA |
| listings-filter-region | Region | Rivne Oblast | Body | DATA |
| listings-filter-region | Region | Sumy Oblast | Body | DATA |
| listings-filter-region | Region | Ternopil Oblast | Body | DATA |
| listings-filter-region | Region | Vinnytsia Oblast | Body | DATA |
| listings-filter-region | Region | Volyn Oblast | Body | DATA |
| listings-filter-region | Region | Zakarpattia Oblast | Body | DATA |
| listings-filter-region | Region | Zaporizhzhia Oblast | Body | DATA |
| listings-filter-region | Region | Zhytomyr Oblast | Body | DATA |
| listings-filtered | — | All | Button |  |
| listings-filtered | — | Delivery | Button |  |
| listings-filtered | — | Aerial photo & video | Button |  |
| listings-filtered | — | Inspection | Button |  |
| listings-filtered | Search & filters | Search services | Field placeholder |  |
| listings-filtered | Applied filters | Today | Body |  |
| listings-filtered | Applied filters | Podilskyi | Body |  |
| listings-filtered | Applied filters | All | Body | the leading chip — took the exit-to-full-list job from the Clear all text button at the designer's call, 2026-08-13 |
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
| listings-filters | — | Clear all | Body |  |
| listings-filters | Location | Location | Heading | first zone on the panel from 2026-08-16, the designer's call — it stood second, under Time, until then. From rev 125 the same word is the **card's own title** as well as the `.zlabel` above it: the label is the wireframe's structure annotation and goes with the shell's toggle, the title is content and stays |
| listings-filters | Location | Where you need the service | Body | the card's subtitle, new 2026-08-16 (rev 125) — `aria-describedby` on the group, whose name is now the drawn title (`WCAG 1.3.1`, `4.1.2`). Pairs with the Date & time card's *When you need the service*; P1 — it names the outcome, not the drone, and P4 — *service* is the word the product uses on every screen |
| listings-filters | Location | Country | Field label | added 2026-08-16 on the designer's word — the geography is Ukraine AND European countries, and the filter stated the country nowhere |
| listings-filters | Location | Ukraine | Field value | DATA |
| listings-filters | Location | Region | Field label |  |
| listings-filters | Location | Kyiv City | Field value | DATA |
| listings-filters | Location | City | Field label |  |
| listings-filters | Location | Kyiv | Field value | DATA |
| listings-filters | Location | District | Field label |  |
| listings-filters | Location | All districts | Field value | DATA |
| listings-filters | Time | Time | Heading | the `.zlabel` only, from rev 125 — the wireframe's structure annotation, which the shell's toggle hides. The card's own title is *Date & time* below |
| listings-filters | Time | Date & time | Heading | the card's title, new 2026-08-16 (rev 125) — the group's accessible name by `aria-labelledby`, so the drawn line **is** the name. Two words and not the `.zlabel`'s one: the zone sets a **day** and a time within it, *Time* alone reads as a time of day, and the product already writes it this way on the option (*Pick a date & time…*) and on the drawer's title. Her word for the filter was *available date* |
| listings-filters | Time | When you need the service | Body | the card's subtitle, new 2026-08-16 (rev 125) — `aria-describedby` on the fieldset. The Location card's *Where…* and this *When…* are one sentence shape, so the two zones read as one pair |
| listings-filters | Time | Available now | Body |  |
| listings-filters | Time | now | Field value | DATA |
| listings-filters | Time | Today | Body |  |
| listings-filters | Time | today | Field value | DATA |
| listings-filters | Time | This week | Body |  |
| listings-filters | Time | week | Field value | DATA |
| listings-filters | Time | Pick a date & time… | Body |  |
| listings-filters | Time | calendar | Body |  |
| listings-filters | Time | pick | Field value | DATA |
| listings-filters | Date picker | Pick a date & time | Heading | the drawer's title — the option's own label keeps the `…`, the drawer's does not: the ellipsis promises more input, and inside the drawer the input has arrived |
| listings-filters | Date picker | Previous month | Icon label |  |
| listings-filters | Date picker | Next month | Icon label |  |
| listings-filters | Date picker | August 2026 | Field value | DATA — month + year, locale-formatted, `aria-live="polite"` |
| listings-filters | Date picker | Mo Tu We Th Fr Sa Su | Field label | DATA — weekday initials, Monday first; each `<th>` carries the full name as its accessible name |
| listings-filters | Date picker | Sat 22 Aug 2026, today | Field value | DATA — a day cell's accessible name; the `, today` suffix is what keeps today off colour alone |
| listings-filters | Date picker | Time | Field label |  |
| listings-filters | Date picker | Hour | Field label | accessible name only |
| listings-filters | Date picker | Minute | Field label | accessible name only |
| listings-filters | Date picker | Cancel | Body | `HIG · Action sheets` asks for the cancel by name; a drawer never takes the `×` |
| listings-filters | Date picker | Done | Body |  |
| listings-filters | Time | Sat 22 Aug, 17:30 | Field value | DATA — what the option reads once a date is taken, replacing *Pick a date & time…*; the product's own format, `time-slot`'s `Wed 2 Jul, 09:00` |
| listings-filters | Price | Price | Heading |  |
| listings-filters | Price | Price range | Heading | the card's own title. **Corrected 2026-08-16 (rev 125): this row said `<legend>`, and the built frame says `<p>` named by `aria-labelledby`.** The legend was built first and measured out — rendered, it sits in the fieldset's block-start border region, outside the padding box, and took the card's whole 16px inset with it — which rev 119's own note in `kit.css` records. The frame is the source; the row is corrected to it, not the other way round. The visible line is still the group's accessible name |
| listings-filters | Price | Service price, all fees included | Body | the subtitle; `aria-describedby` on the group. P3 — the number is the whole price, which the `order-setup` breakdown proves line by line |
| listings-filters | Price | How services are priced: most cost ₴200 – ₴350 | Icon label | DATA — the histogram's text alternative (`role="img"`), `WCAG 1.1.1`; it describes the drawn distribution, not the chosen band |
| listings-filters | Price | Minimum price | Field label | accessible name of the lower thumb — it contains the visible word *Minimum* (`WCAG 2.5.3`) |
| listings-filters | Price | Maximum price | Field label | accessible name of the upper thumb |
| listings-filters | Price | Minimum | Field label |  |
| listings-filters | Price | Maximum | Field label |  |
| listings-filters | Price | ₴0 | Field value | DATA |
| listings-filters | Price | ₴1,000+ | Field value | DATA |
| listings-filters | Location | Clear all | Button |  |
| listings-filters | Location | Apply filters | Button |  |
| listings-loading | — | All | Button |  |
| listings-loading | — | Delivery | Button |  |
| listings-loading | — | Aerial photo & video | Button |  |
| listings-loading | — | Inspection | Button |  |
| listings-loading | Search & filters | Search services | Field placeholder |  |
| listings-loading | Search & filters | Filters | Button |  |
| listings-loading | Service list | Browse services | Button |  |
| listings-loading | Service list | Order | Button |  |
| listings-loading | Service list | Activity | Button |  |
| listings-loading | Service list | Help | Button |  |
| listings-loading | Service list | Account | Button |  |
| listings | — | All | Button |  |
| listings | — | Delivery | Button |  |
| listings | — | Aerial photo & video | Button |  |
| listings | — | Inspection | Button |  |
| listings | Search & filters | Search services | Field placeholder |  |
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
| onboarding-client-empty | Explainer | How DRON works | State message |  |
| onboarding-client-empty | Explainer | A certified, insured operator does the work. You track it live and pay only online — nothing to manage. | State message |  |
| onboarding-client-empty | Explainer | Get started | Button |  |
| onboarding-client | — | VERIFIED | Body | WF-PH |
| onboarding-client | — | A verified operator | Body |  |
| onboarding-client | — | DRON assigns the nearest certified, insured operator. You don't choose or guess. | Body |  |
| onboarding-client | — | LIVE | Body | WF-PH |
| onboarding-client | — | Track it live | Body |  |
| onboarding-client | — | See the operator's name, photo and live position the moment you pay. | Body |  |
| onboarding-client | — | REPORT | Body | WF-PH |
| onboarding-client | — | A photo or report, every time | Body |  |
| onboarding-client | — | Get a photo or a report the moment it's done. | Body |  |
| onboarding-client | — | Skip | Button |  |
| onboarding-client | — | Get started | Button |  |
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
| onboarding-operator | — | Get started | Button |  |
| operator-account | — | Account | Heading |  |
| operator-account | Profile | IK | Body | DATA |
| operator-account | Profile | Ivan K. | Body | DATA |
| operator-account | Profile | 4.9 ★ · 214 jobs · Verified by DRON | Body |  |
| operator-account | Profile | Operator | Body |  |
| operator-account | Profile | Insured | Body |  |
| operator-account | Profile | CAA licence | Body |  |
| operator-account | Mode | Operator mode | Body |  |
| operator-account | Mode | Operator — take jobs | Body |  |
| operator-account | Mode | current | Body |  |
| operator-account | Mode | Client — order services | Body |  |
| operator-account | Mode | switch | Body |  |
| operator-account | Mode | Switching changes what the app shows. Your Diia identity stays the same. | Body |  |
| operator-account | Account | Withdrawal method | Body |  |
| operator-account | Account | Card •••• 4921 | Body | DATA |
| operator-account | Account | Service area | Body |  |
| operator-account | Account | Podil · Obolon | Body |  |
| operator-account | Account | Drone | Body |  |
| operator-account | Account | DJI Mavic 3 · reg. verified | Body | DATA |
| operator-account | Account | Language | Body |  |
| operator-account | Account | English | Body |  |
| operator-account | Account | Operator since | Body |  |
| operator-account | Account | Jobs | Button |  |
| operator-account | Account | Earnings | Button |  |
| operator-account | Account | Ratings | Button |  |
| operator-account | Account | Account | Button |  |
| operator-dispute-error | — | ‹ Jobs | Button |  |
| operator-dispute-error | — | Dispute | Heading |  |
| operator-dispute-error | Job | AERIAL | State message | WF-PH |
| operator-dispute-error | Job | Job #DR-2841 · Aerial photo | Heading |  |
| operator-dispute-error | Job | Client: Olena H. · disputed | State message |  |
| operator-dispute-error | Job | · held | State message |  |
| operator-dispute-error | Status | HELD | State message | WF-PH |
| operator-dispute-error | Status | Payment held | State message |  |
| operator-dispute-error | Status | ₴800 for Job #DR-2841 stays on hold while the dispute is reviewed. Add more evidence to your response, or contact support to resolve it. | State message | DATA |
| operator-dispute-error | Status | Update response | Button |  |
| operator-dispute-error | Status | Contact support | Button |  |
| operator-dispute-error | Status | Back to Jobs | Button |  |
| operator-dispute | — | ‹ Jobs | Button |  |
| operator-dispute | — | Dispute | Heading |  |
| operator-dispute | Job | AERIAL | Body | WF-PH |
| operator-dispute | Job | Job #DR-2841 · Aerial photo | Heading |  |
| operator-dispute | Job | Client: Olena H. · closed 22 min ago | Body | DATA |
| operator-dispute | Job | · disputed | Body |  |
| operator-dispute | Client claim | Client's issue | Body |  |
| operator-dispute | Client claim | “The photos are blurry — I can't use them for the listing.” | Body | USER |
| operator-dispute | Client claim | Payment held | Body |  |
| operator-dispute | Your response | Your response | Field label |  |
| operator-dispute | Your response | Explain what was delivered, weather, capture settings… | Field placeholder |  |
| operator-dispute | Your response | Evidence | Field label |  |
| operator-dispute | Your response | FLIGHT LOG / PHOTO | Body | WF-PH |
| operator-dispute | Your response | Add evidence | Button |  |
| operator-dispute | Your response | Submit response | Button |  |
| operator-dispute | Your response | Payment still held? | Button |  |
| operator-fee-terms | — | Operator terms | Heading |  |
| operator-fee-terms | Value intro | Earn on your schedule | Body |  |
| operator-fee-terms | Value intro | DRON dispatches pre-qualified jobs to you, insures every flight, and pays you automatically. Here's what you keep and how you get paid. | Body |  |
| operator-fee-terms | Fee terms | Commission | Body |  |
| operator-fee-terms | Fee terms | 18% per job | Body |  |
| operator-fee-terms | Fee terms | Payment | Body |  |
| operator-fee-terms | Fee terms | Auto-release ≤30 min after client confirms | Body | DATA |
| operator-fee-terms | Fee terms | Insurance | Body |  |
| operator-fee-terms | Fee terms | Covered from your first job | Body |  |
| operator-fee-terms | Fee terms | Minimum withdrawal | Body |  |
| operator-fee-terms | Fee terms | Accept & continue | Button |  |
| operator-fee-terms | Fee terms | Maybe later | Button |  |
| operator-listings-empty | — | IK | Body | DATA |
| operator-listings-empty | — | Ivan K. | Body | DATA |
| operator-listings-empty | — | Incoming · 0 | Body |  |
| operator-listings-empty | — | Active · 0 | Body |  |
| operator-listings-empty | Status | You are Offline | State message |  |
| operator-listings-empty | Status | · no jobs while offline | State message |  |
| operator-listings-empty | Status | Availability status | State message |  |
| operator-listings-empty | Status | Available | Field label |  |
| operator-listings-empty | Status | available | Field value | DATA |
| operator-listings-empty | Status | Busy | Field label |  |
| operator-listings-empty | Status | busy | Field value | DATA |
| operator-listings-empty | Status | Offline | Field label |  |
| operator-listings-empty | Status | offline | Field value | DATA |
| operator-listings-empty | Offers | OFFLINE | State message | WF-PH |
| operator-listings-empty | Offers | No jobs while you're offline | State message |  |
| operator-listings-empty | Offers | Go Available to start receiving pre-qualified jobs near you. | State message |  |
| operator-listings-empty | Offers | Go Available | Button |  |
| operator-listings-empty | Offers | Jobs | Button |  |
| operator-listings-empty | Offers | Earnings | Button |  |
| operator-listings-empty | Offers | Ratings | Button |  |
| operator-listings-empty | Offers | Account | Button |  |
| operator-listings | — | IK | Body | DATA |
| operator-listings | — | Ivan K. | Body | DATA |
| operator-listings | — | Incoming · 2 | Body |  |
| operator-listings | — | Active · 1 | Body |  |
| operator-listings | Status | You are Available | Body |  |
| operator-listings | Status | · receiving jobs near Podil | Body |  |
| operator-listings | Status | Availability status | Body |  |
| operator-listings | Status | Available | Field label |  |
| operator-listings | Status | available | Field value | DATA |
| operator-listings | Status | Busy | Field label |  |
| operator-listings | Status | busy | Field value | DATA |
| operator-listings | Status | Offline | Field label |  |
| operator-listings | Status | offline | Field value | DATA |
| operator-listings | Counter | 2 new jobs | Body |  |
| operator-listings | Counter | · 1 active job · nearest first | Body |  |
| operator-listings | Incoming offers · cards | Package delivery | Body |  |
| operator-listings | Incoming offers · cards | New | Body |  |
| operator-listings | Incoming offers · cards | 2.3 km · ~18 min | Body | DATA |
| operator-listings | Incoming offers · cards | Pickup | Body |  |
| operator-listings | Incoming offers · cards | Podil | Body |  |
| operator-listings | Incoming offers · cards | Drop-off | Body |  |
| operator-listings | Incoming offers · cards | Osokorky | Body |  |
| operator-listings | Incoming offers · cards | expires in 8s | Body |  |
| operator-listings | Incoming offers · cards | Accept | Button |  |
| operator-listings | Incoming offers · cards | Decline | Button |  |
| operator-listings | Incoming offers · cards | Roof inspection | Body |  |
| operator-listings | Incoming offers · cards | New | Body |  |
| operator-listings | Incoming offers · cards | 5.1 km · ~35 min | Body | DATA |
| operator-listings | Incoming offers · cards | Location | Body |  |
| operator-listings | Incoming offers · cards | Obolon district | Body |  |
| operator-listings | Incoming offers · cards | expires in 6s | Body |  |
| operator-listings | Incoming offers · cards | Accept | Button |  |
| operator-listings | Incoming offers · cards | Decline | Button |  |
| operator-listings | Active jobs · cards | Aerial photo & video | Body |  |
| operator-listings | Active jobs · cards | In progress | Body |  |
| operator-listings | Active jobs · cards | Client · Olena H. | Body |  |
| operator-listings | Active jobs · cards | Location | Body |  |
| operator-listings | Active jobs · cards | Trukhaniv Island | Body |  |
| operator-listings | Active jobs · cards | checklist 3 / 5 | Body |  |
| operator-listings | Active jobs · cards | Continue | Button |  |
| operator-listings | Active jobs · cards | Jobs | Button |  |
| operator-listings | Active jobs · cards | Earnings | Button |  |
| operator-listings | Active jobs · cards | Ratings | Button |  |
| operator-listings | Active jobs · cards | Account | Button |  |
| operator-profile-setup | — | ‹ Verification | Button |  |
| operator-profile-setup | — | Profile setup | Heading |  |
| operator-profile-setup | Profile photo | PROFILE PHOTO | Body | WF-PH |
| operator-profile-setup | Profile photo | Add photo | Button |  |
| operator-profile-setup | Profile photo | Display name | Field label |  |
| operator-profile-setup | Profile photo | e.g. Andriy K. | Field placeholder |  |
| operator-profile-setup | Profile photo | Short bio | Field label |  |
| operator-profile-setup | Profile photo | Certified operator since 2023. Fast, careful deliveries across Kyiv… | Field placeholder | USER |
| operator-profile-setup | Profile photo | 1–2 lines clients see. Your experience and the area you cover. | Body |  |
| operator-profile-setup | Profile photo | Service specializations | Field label |  |
| operator-profile-setup | Profile photo | Delivery | Field label |  |
| operator-profile-setup | Profile photo | Aerial photo & video | Field label |  |
| operator-profile-setup | Profile photo | Inspection | Field label |  |
| operator-profile-setup | Profile photo | Save & go live | Button |  |
| operator-signup-error | — | ‹ Operator terms | Button |  |
| operator-signup-error | — | Sign in | Heading |  |
| operator-signup-error | Sign up | AUTH | State message | WF-PH |
| operator-signup-error | Sign up | Identity couldn't be verified | State message |  |
| operator-signup-error | Sign up | Diia declined the request or the details didn't match. You're not verified yet. Try again, or contact support if this keeps happening. | State message |  |
| operator-signup-error | Sign up | Try again | Button |  |
| operator-signup-error | Sign up | Contact support | Button |  |
| operator-signup-loading | — | ‹ Operator terms | Button |  |
| operator-signup-loading | — | Sign in | Heading |  |
| operator-signup-loading | Sign up | DIIA | State message | WF-PH |
| operator-signup-loading | Sign up | Verifying your identity… | State message |  |
| operator-signup-loading | Sign up | Confirming your details with Diia. This takes a few seconds. | State message |  |
| operator-signup-loading | Sign up | Continue | Button |  |
| operator-signup-loading | Sign up | Cancel | Button |  |
| operator-signup | — | ‹ Operator terms | Button |  |
| operator-signup | — | Sign in | Heading |  |
| operator-signup | Sign up | Confirm your identity | Body |  |
| operator-signup | Sign up | DRON verifies every operator. Confirm who you are with Diia or BankID — then add your licence and insurance. | Body |  |
| operator-signup | Sign up | Diia and BankID confirm who you are. DRON never sees your password. | Body |  |
| operator-signup | Sign up | Continue with Diia | Button |  |
| operator-signup | Sign up | Continue with BankID | Button |  |
| operator-signup | Sign up | Secure national ID — your data stays with the provider. | Body |  |
| operator-verification-error | — | ‹ Sign in | Button |  |
| operator-verification-error | — | Verification | Heading |  |
| operator-verification-error | Documents | DOCS | State message | WF-PH |
| operator-verification-error | Documents | Documents were rejected | State message |  |
| operator-verification-error | Documents | Insurance document is expired. Add a current policy that covers commercial drone operation, then submit again. | State message |  |
| operator-verification-error | Documents | Add document again | Button |  |
| operator-verification-error | Documents | Contact support | Button |  |
| operator-verification-loading | — | ‹ Sign in | Button |  |
| operator-verification-loading | — | Verification | Heading |  |
| operator-verification-loading | Documents | DOCS | State message | WF-PH |
| operator-verification-loading | Documents | Documents submitted | State message |  |
| operator-verification-loading | Documents | Under review — ETA 2–3 business days | State message |  |
| operator-verification-loading | Documents | We'll notify you when it's approved. | State message |  |
| operator-verification-loading | Documents | Continue (approved) | Button |  |
| operator-verification-loading | Documents | Back to Jobs | Button |  |
| operator-verification | — | ‹ Sign in | Button |  |
| operator-verification | — | Verification | Heading |  |
| operator-verification | Documents | LICENCE (CAA/DASU) | Body | WF-PH |
| operator-verification | Documents | Add document | Button |  |
| operator-verification | Documents | INSURANCE DOCUMENT | Body | WF-PH |
| operator-verification | Documents | Add document | Button |  |
| operator-verification | Documents | Licence number | Field label |  |
| operator-verification | Documents | e.g. UA-CAA-102938 | Field placeholder | DATA |
| operator-verification | Documents | Review takes 2–3 business days. | Body |  |
| operator-verification | Documents | Submit for review | Button |  |
| order-confirmed-empty | — | Order confirmed | Heading |  |
| order-confirmed-empty | — | DONE | State message | WF-PH |
| order-confirmed-empty | — | Payment received | State message |  |
| order-confirmed-empty | — | Your operator is on the way. | State message |  |
| order-confirmed-empty | Your operator | KO | State message | DATA |
| order-confirmed-empty | Your operator | Kateryna O. | State message | DATA |
| order-confirmed-empty | Your operator | New operator · no reviews yet | State message |  |
| order-confirmed-empty | Your operator | Verified | State message | shortened from `Verified by DRON` on this card alone (designer, 2026-08-15) so the pair fits one row beside the round avatar — see the sync note below |
| order-confirmed-empty | Your operator | Insured | State message |  |
| order-confirmed-empty | Your operator | Track anyway | Button |  |
| order-confirmed-empty | Your operator | Ask for another operator | Button |  |
| order-confirmed-empty | Your operator | Order | Button |  |
| order-confirmed-empty | Your operator | Activity | Button |  |
| order-confirmed-empty | Your operator | Help | Button |  |
| order-confirmed-empty | Your operator | Account | Button |  |
| order-confirmed-error | — | Order confirmed | Heading |  |
| order-confirmed-error | — | REFUND | State message | WF-PH |
| order-confirmed-error | — | Couldn't confirm an operator | State message |  |
| order-confirmed-error | — | No certified operator could take your order just now. A full refund to your card is already on its way. | State message |  |
| order-confirmed-error | — | Try again | Button |  |
| order-confirmed-error | — | Contact support | Button |  |
| order-confirmed-error | — | Order | Button |  |
| order-confirmed-error | — | Activity | Button |  |
| order-confirmed-error | — | Help | Button |  |
| order-confirmed-error | — | Account | Button |  |
| order-confirmed-loading | — | Order confirmed | Heading |  |
| order-confirmed-loading | — | MATCH | State message | WF-PH |
| order-confirmed-loading | — | Finding your operator… | State message |  |
| order-confirmed-loading | — | Matching you with the nearest certified, insured operator near Podil. | State message |  |
| order-confirmed-loading | Your operator | Operator found | Button |  |
| order-confirmed-loading | Your operator | Order | Button |  |
| order-confirmed-loading | Your operator | Activity | Button |  |
| order-confirmed-loading | Your operator | Help | Button |  |
| order-confirmed-loading | Your operator | Account | Button |  |
| order-confirmed | — | Order confirmed | Heading |  |
| order-confirmed | — | DONE | Body | WF-PH |
| order-confirmed | — | Payment received | Body |  |
| order-confirmed | — | Your operator is on the way. | Body |  |
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
| order-history-empty | Order history | Your orders appear here, ready to re-book in a tap. | State message |  |
| order-history-empty | Order history | Browse services | Button |  |
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
| order-details | — | ‹ Activity | Button | new screen 2026-08-16. The chevron alone; `Back to Activity` is its accessible name (rev 93 took the visible label off every bar) |
| order-details | — | Package delivery | Heading | the bar names the **service**, not the screen: a client arriving from the list already knows they tapped a record, and the one thing they came to check is which order it was. **From 2026-08-16 it also names WHICH of the three record files this is** — the designer, on all three finished cards opening one page: *«у мене є три різні сторінки have already made orders де є доставка, огляд криші та фото — так от вони мають мати різні назви відповідно і різні фотки»*. The heading is copied from the card that opens it, word for word, so the tap lands on the name it was made from |
| order-details | Delivery photo | Delivery photo | Section name | accessible name of the deliverable zone (not visible text). **Was `Proof of delivery` until 2026-08-16.** `voice.md` **O5** allows *proof* only as reassurance inside a sentence, never as a screen object, and fixes the object's name per service: *delivery photo* · *inspection report* · *photo/video set*. The well's own `aria-label` was already `Delivery photo`, so the section and the thing inside it now agree instead of naming one image twice, two ways |
| order-details | Summary | From · To · Parcel · Delivered · Operator · Paid | Field labels | past tense on the one row that has a tense — **Delivered**, not *Delivery*. `order-review` says *When · Now ~25 min* because it is a promise; this is a fact that already happened. **`Paid` joined this list 2026-08-16** — see its own row below |
| order-details | Summary | Podil, 21 · Osokorky, 14 | Values | the short form `order-review` already uses for the same two stops |
| order-details | Summary | Paid | Field label | **Paid**, not *Total*. `voice.md` fixes *paid* as money that has landed; `order-review`'s `Total` is what you are about to be charged, and the two screens must not use one word for both. **THE STRING CARRIES NO BREAKDOWN** — the designer, 2026-08-16 (rev 132): *«на цих wireframes що показують деталі вже виконаного замовлення лише остаточна сума без розшифровки»*. `Base fare` / `Distance · 7.4 km` / `Service fee` were built into the HTML at rev 130 and were never listed here; they belong to `order-review`, where **P3** puts the price before the tap. A record states what was charged, not how it was computed. **AND FROM 2026-08-16 IT IS THE LAST ROW OF `Summary`, NOT A ZONE OF ITS OWN** (rev 136) — *«помісти інфу Paid 800 у картку з самері і так само на ще 2 аналогічних фреймах»*. With the breakdown gone the `Payment` zone was a card holding one row under a label that said nothing the row did not; the record now reads *what · where · when · who · how much* in one panel. The string is unchanged; only which zone owns it |
| order-details | Action bar | Book again | Button | the vocabulary's own re-order verb (A3), the same string `resolution` carries as `Book again — free` |
| order-details | Delivery photo | A ribboned cardboard parcel left on the wooden entrance steps beside the door and its intercom panel, the way the operator photographed it on arrival. | Alt text | **Written against the rendered frame, not from the filename.** The first draft said *"upright on a doormat outside a flat door"* — `delivered-at-door.jpg` actually shows a house entrance: wooden steps, planting either side, an intercom panel by the door. An alt guessed from a file stem is the same failure as no alt, and it was caught by looking at the screen rather than at the markup. | **WCAG 1.1.1 Non-text Content.** The well used to carry `role="img" aria-label="Delivery photo"` with an empty `alt`, so a screen-reader user was told the *category* of the picture and never its content — the sighted client can see the parcel arrived, and that is the whole point of the zone (`RJ-C4`). The alt now says what is in the frame; the zone keeps its name on the `<section>`, where a name belongs. Same construction `inspection-report` has used since it was built |
| order-details-inspection | — | ‹ Activity | Button | new file 2026-08-16, same chevron and same accessible name as `order-details` |
| order-details-inspection | — | Roof inspection | Heading | copied from the card that opens it |
| order-details-inspection | Summary | Location · Structure · Delivered · Operator · Paid | Field labels | **Location**, not *From ▸ To* — an inspection has one stop, and the card it opens from already shows a single `Location` row. **Structure** is the inspection's analogue of `Parcel`: the thing the order was about. **Delivered** is the same word the delivery record uses, and for the same reason — `voice.md` keeps one word per concept, and the concept is *the deliverable landed*, not *a parcel landed*; all three cards already carry `Delivered` as the accessible name of their settled check |
| order-details-inspection | Summary | Osokorky, 14 · Roof · gutters · chimney · 2 Jun · 09:15 · Andriy M. | Values | DATA — every value is read off what is already built: the address and date/time from the `order-history` card, and `Roof · gutters · chimney` from the three findings `inspection-report` actually carries (north slope, east gutter run, chimney flashing), so the record names the same scope the report documents |
| order-details-inspection | Inspection report | Inspection report | Section name | `voice.md` **O5** — the per-service name of what the operator hands over. Not *proof*, not *result* |
| order-details-inspection | Inspection report | Cracked roof tiles near the ridge — the cover of this order's report. | Alt text | the same frame `inspection-report` opens with, so the record and the report agree on what the job found; the alt is that page's wording with *report* pointed back at this order |
| order-details-inspection | Summary | Paid | Field label | the one string, no breakdown — rev 132's rule holds for every record file, and from rev 136 so does its place: the summary card's last row, not a `Payment` zone |
| order-details-inspection | Summary | ₴650 | Values | DATA — the sum on the card that opens it |
| order-details-inspection | Action bar | Book again · Delete order | Buttons | identical to `order-details`, including the grey secondary rung (rev 131) |
| order-details-aerial | — | ‹ Activity | Button | new file 2026-08-16 |
| order-details-aerial | — | Aerial photo & video | Heading | copied from the card that opens it, ampersand included |
| order-details-aerial | Summary | Location · Shoot · Delivered · Operator · Paid | Field labels | **Shoot** is this service's analogue of `Parcel` / `Structure` — the thing the order was about. It is the client's own word for a booked photo session, not equipment (`voice.md` **P4**); *Job* was not available for it, since `voice.md` reserves *job* for the operator side |
| order-details-aerial | Summary | Trukhaniv Island · Event · 30 min · 14 Jun · 11:30 · Andriy M. | Values | DATA — from the card that opens it. **`Event` is the listings card's own word** (*Events, real-estate listings, personal occasions*). **`Trukhaniv Island` is kept on the designer's call, 2026-08-16, against the frame** — the photograph she chose is a raft running rapids in a rock gorge, which cannot be a flat sand island in the Dnipro. Asked and decided rather than smoothed; the mismatch is recorded in `wireframes/_critique.md`, not corrected |
| order-details-aerial | Photo & video set | Photo & video set | Section name | `voice.md` **O5** names it *photo/video set*; written with the ampersand to match the service heading directly above it on the same screen |
| order-details-aerial | Photo & video set | A raft of paddlers in helmets and yellow life vests dropping through white water between wet rock walls, shot from above. | Alt text | **No head-count in it, deliberately** — the first draft said *"six people"* and the frame holds seven: six paddlers in green and yellow plus a guide in black at the stern. A number in an alt is a claim that can be wrong, and here it was. Otherwise it describes the frame and only the frame. It does **not** repeat *Trukhaniv Island* from the row above: with the label kept against the picture (see the Values row), an alt that echoed the label would state as fact something the image contradicts, which is the failure `WCAG 1.1.1` exists to prevent |
| order-details-aerial | Photo & video set | A grey raft with a crew in red helmets and life jackets running a rapid between dark boulders, white water breaking around it, shot from above. | Alt text | **the video card's cover, new 2026-08-16 (rev 140)** — the designer's second frame (Figma `97:22`). Written against the rendered picture like the one above it, and **no head-count in it either**: the crew is described by what it wears, which is what tells the two files apart at a glance. It does **not** say *video* or *preview* — an alt says what is in the frame; that this one plays is carried by the control standing on it, whose name is `Play video · 0:38` |
| order-details-aerial | Summary | Paid | Field label | as the other two records, including its move into the summary card at rev 136 — this is the frame she pointed at when she asked for it |
| order-details-aerial | Summary | ₴800 | Values | DATA — the sum on the card, and the same ₴800 `wallet` shows landing on the operator's balance for this service |
| order-details-aerial | Photo & video set | Video | Body | **new 2026-08-16 (rev 137)** — the designer, on this frame: *«добав сюди картку з відео прев'ю та можливістю скачати відео»*. The item's name inside a zone already called *Photo & video set*: it says the one thing the picture cannot, which of the two files this is. Not *Aerial video* — the nav bar three lines above already reads *Aerial photo & video* — and not *Clip* or *Footage*: `voice.md` **P4** takes the word the client would say out loud |
| order-details-aerial | Photo & video set | 0:38 · 46 MB | Body | DATA. **The two facts a thumb needs before it taps Download** — how long the thing is and what it will cost in data — stated before the tap rather than discovered after it, which is `voice.md` **P3**'s discipline applied to a download instead of a price. The order was a *30 min* shoot and the set that came back is *0:38*; the two numbers are different things and are not reconciled. Same middot the record uses everywhere else (*Event · 30 min*) |
| order-details-aerial | Photo & video set | Download video | Button | **accessible name only from 2026-08-16 (rev 140) — the button is a circular icon action and has no visible text.** The verb is still the designer's own (*«можливістю скачати відео»*, `скачати` = download), fixed once in `voice.md` as **A11**: **Download**, never *Save*, *Export* or *Get*; not `A3 Add` reversed (*Add* is the client putting a file **into** DRON) and not `O6 Withdraw`, which is reserved for money leaving a balance. It was built as a labelled pill (`Download`, 136.64 × 44) and became an icon on her instruction to follow the card she drew (Figma `97:18`), where the file's action is a 44px disc at the end of the line. `WCAG 2.5.3 Label in Name` no longer applies — there is no visible label to contain — and the name carries the object because the glyph cannot: `1.1.1` / `4.1.2`. The same reading `order-history` already ships on *Delete order* and *View details* |
| order-details-aerial | Photo & video set | Play video · 0:38 | Button | accessible name, not visible text — the mark on the poster is a play triangle and nothing else, so the name carries the verb **and** the length. The duration repeats the facts line below on purpose: a screen-reader user arriving at the control has not necessarily passed that line yet |
| order-details-aerial | Action bar | Book again · Delete order | Buttons | identical to `order-details` |
| order-details | Action bar | Delete order | Button | destructive, but **grey `.dr-btn--secondary`** on the designer's call (2026-08-16, *«зроби кнопку секондарі сірою»*) — built red as `.dr-btn--danger` and changed the same day. **The string now carries the whole warning**, which is why it stays a plain imperative naming its object: with the colour gone, `Delete` is the only thing a reader has. Matches the trash control's accessible name on the card it came from, so one action has one name in both places |
| order-history | — | Activity | Heading |  |
| order-history | Order history | Package delivery | Body |  |
| order-history | Order history | In progress | Label | status indicator — accessible name, not visible text |
| order-history | Order history | Today · 10:03 | Body | DATA |
| order-history | Order history | From | Body |  |
| order-history | Order history | Podil | Body |  |
| order-history | Order history | To | Body |  |
| order-history | Order history | Osokorky | Body |  |
| order-history | Order history | ETA ~6 min | Body | DATA |
| order-history | Order history | View details | Button |  |
| order-history | Order history | Package delivery | Body |  |
| order-history | Order history | Delivered | Label | status indicator — accessible name, not visible text |
| order-history | Order history | 28 Jun · 14:20 | Body | DATA |
| order-history | Order history | From | Body |  |
| order-history | Order history | Podil | Body |  |
| order-history | Order history | To | Body |  |
| order-history | Order history | Osokorky | Body |  |
| order-history | Order history | Delete order | Button |  |
| order-history | Order history | Aerial photo & video | Body |  |
| order-history | Order history | Delivered | Label | status indicator — accessible name, not visible text |
| order-history | Order history | 14 Jun · 11:30 | Body | DATA |
| order-history | Order history | Location | Body |  |
| order-history | Order history | Trukhaniv Island | Body |  |
| order-history | Order history | Delete order | Button |  |
| order-history | Order history | Roof inspection | Body |  |
| order-history | Order history | Delivered | Label | status indicator — accessible name, not visible text |
| order-history | Order history | 2 Jun · 09:15 | Body | DATA |
| order-history | Order history | Location | Body |  |
| order-history | Order history | Osokorky, 14 | Body |  |
| order-history | Order history | Delete order | Button |  |
| order-history | Order history | Order | Button |  |
| order-history | Order history | Activity | Button |  |
| order-history | Order history | Help | Button |  |
| order-history | Order history | Account | Button |  |
| order-review-loading | — | ‹ Package delivery | Button |  |
| order-review-loading | — | Order review | Heading |  |
| order-review-loading | Summary | Service | State message |  |
| order-review-loading | Summary | Package delivery | State message |  |
| order-review-loading | Summary | Pickup | State message |  |
| order-review-loading | Summary | Podil, 21 | State message |  |
| order-review-loading | Summary | Drop-off | State message |  |
| order-review-loading | Summary | Osokorky, 14 | State message |  |
| order-review-loading | Price breakdown | Calculating the final price… | State message |  |
| order-review-loading | Price breakdown | Continue | Button |  |
| order-review | — | ‹ Package delivery | Button |  |
| order-review | — | Order review | Heading |  |
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
| order-review | Price breakdown | Pay ₴180 | Button |  |
| order-review | Action bar | Pay ₴180 | Button | rev 129 — the string is unchanged, the element is not: it was an `<a href>` to Payment and is now a `<button>` that opens the pay drawer. `HIG · Buttons` asks a label that ends in `…` when a control needs more input before it completes; this one does **not** take the ellipsis, because the drawer it opens is the completion, not a detour — the amount is already final and the next tap pays |
| order-review-aerial | — | ‹ Pick a time | Button | **new file 2026-08-16.** *Not* ‹ Aerial photo & video: `HIG · Navigation Bars` puts the title of the screen you return to on the back control, and on a calendar-first service that screen is the slot list, not the setup form two steps back |
| order-review-aerial | — | Order review | Heading | unchanged across all three review files — the screen is the same screen |
| order-review-aerial | Summary | Service · Location · Shoot · What you get · When | Field labels | the setup form read back in the order it was asked. **Five rows, the delivery file's own count**, so nothing about the frame moves |
| order-review-aerial | Summary | Aerial photo &amp; video · Trukhaniv Island · Event · 30 min · Photo &amp; video · Wed 2 Jul · 09:00–10:00 | Values | DATA. **`Shoot` carries both facts in one row** (*Event · 30 min*), as on the finished record: the form asks them as two pickers, the summary joins them with the middot the product already uses for *14 Jun · 11:30*. **`When` is a booked hour, not an ETA** — this order was scheduled on `time-slot`, so the row states the slot chosen there instead of the delivery file's *Now · ~25 min* |
| order-review-aerial | Price breakdown | Shoot · 30 min · Photo &amp; video · Service fee · Total | Field labels | **the deliverable takes its own line — the designer's call, 2026-08-16**, over a delivery-shaped *base fare + variable + fee*. `voice.md` **P3**: she had just made *What you get* a client choice, and a choice that moves the price shows its price before the tap rather than hiding it in a base fare — pick *Photo* alone and it is this line that moves. **No `Distance` row**: a shoot is paid for by the hour it occupies, not the kilometres to it, and a meaningless row is not carried over as a nominal zero |
| order-review-aerial | Price breakdown | ₴500 · ₴280 · ₴20 · ₴800 | Values | DATA. **Reconciles exactly — 500 + 280 + 20 = 800.** `RJ-C3`'s point: a breakdown that does not add up is the "plus fees" surprise under another name. ₴800 is not invented here — it is what the aerial record was paid, what `wallet` shows landing on the operator's balance, and what `time-slot`'s action bar was already showing before this screen existed |
| order-review-aerial | Action bar | Pay ₴800 | Button | the `order-review` string with its own figure; same `<button>` opening the pay drawer, same reason for taking no ellipsis |
| order-review-aerial | Pay drawer | Pay ₴800 | Accessible name | the dialog's name, not a visible line — titleless by rev 139's rule, since the card below states the total at 20/700 and a 17/600 title would say the number twice. `WCAG 4.1.2` needs the name, `HIG · Action sheets` makes the visible title optional |
| order-review-inspection | — | ‹ Pick a time | Button | new file 2026-08-16, same reading as the aerial file |
| order-review-inspection | — | Order review | Heading |  |
| order-review-inspection | Summary | Service · Location · Structure · When | Field labels | **four rows, not five** — a report is fixed, so there is no *What you get* to state (`voice.md` **O5** is unchanged for this service). Stated rather than padded to match |
| order-review-inspection | Summary | Inspection · Osokorky, 14 · Roof · gutters · chimney · Wed 2 Jul · 09:00–10:00 | Values | DATA. **`Structure` is the record's own string** — the three boxes ticked on the setup form, joined by the middot; review and record read identically, which is what makes *Book again* a promise the next screen keeps. The address takes the review's short form, as the delivery file writes *Podil, 21* for a field that holds the whole street line |
| order-review-inspection | Price breakdown | Inspection · 3 parts · Inspection report · Service fee · Total | Field labels | the deliverable on its own line, as on the aerial file, so the two calendar-first services do not disagree about what a breakdown is. **Here the line is the report** — `target-audience.md` makes it the thing C-2 is actually buying, not the flight. **The variable row is the structure count, not distance**: three parts ticked, three parts charged, and a fourth would move this line (`voice.md` **P3**) |
| order-review-inspection | Price breakdown | ₴480 · ₴150 · ₴20 · ₴650 | Values | DATA. **Reconciles exactly — 480 + 150 + 20 = 650**, and ₴650 is what the inspection record was paid |
| order-review-inspection | Action bar | Pay ₴650 | Button | as the aerial file, with its own figure |
| order-review-inspection | Pay drawer | Pay ₴650 | Accessible name | as the aerial file |
| payment-aerial | Amount | ₴800 | Values | DATA — **the figure the previous screen locked.** The delivery file said ₴180 here regardless of what was ordered, which is `voice.md` **P3** / `RJ-C3` broken at the sharpest point in the flow: the screen where the card goes in. Nothing else on the screen moves — the `cc-*` tokens (`WCAG 1.3.5`), the drawn labels (`3.3.2`), the 44pt rows and the save-card contract are the delivery file's |
| payment-aerial | Amount | Aerial photo &amp; video · Trukhaniv Island | Body | what the money is for, in the service's own name and the order's own place. The delivery file writes the route (*Podil → Osokorky*) because a delivery has two ends; a shoot has one |
| payment-aerial | Action bar | Pay ₴800 | Button | the same string and element as the delivery file, with its own figure |
| payment-inspection | Amount | ₴650 · Inspection · Osokorky, 14 | Values | DATA, as the aerial file |
| payment-inspection | Action bar | Pay ₴650 | Button | as the aerial file |
| order-confirmed-aerial | Confirmation | Your shoot is booked for Wed 2 Jul, 09:00. | Body | **replaces *Your operator is on the way*, which is false for a service booked for Wednesday.** `RJ-C2` — close the void after payment — is answered by stating **when**, not by asserting motion that is not happening. *Payment received* above it is unchanged: that part did happen |
| order-confirmed-aerial | Booking | When · Wed 2 Jul · 09:00–10:00 | Field label + value | replaces `ETA · ~8 min`. A booked hour is not an estimate, so the key is not *ETA* |
| order-confirmed-aerial | Booking | Status · Booked | Field label + value | replaces *En route to pickup*. One word, and it is true on the day the order is placed |
| order-confirmed-aerial | Booking | Booking ▸ when they come (RJ-C2) | Zone label | was *Arrival ▸ where &amp; when*; there is no arrival yet to name |
| order-confirmed-aerial | Action bar | Track live | Button | **kept, not disabled.** A prototype compresses time — the delivery flow does not make anyone wait 25 minutes either — so the button walks to the day-of screen while the rows above state honestly that the day is Wednesday |
| order-confirmed-inspection | Confirmation | Your inspection is booked for Wed 2 Jul, 09:00. | Body | as the aerial file, with this service's noun |
| tracking-aerial | ETA | Status · En route to the shoot | Field value | replaces *En route to drop-off* — the job has no drop-off. The four rail nodes (*Accepted · En route · On-site · Done*) needed nothing: they already fitted all three services |
| tracking-aerial | Late notice | Traffic near the shoot is slowing your operator. They're still on the way. | Body | the `-empty` state's own sentence, with the place it names corrected. Tone unchanged — `voice.md` **P5**: what happened, what it means, no apology and no cheer |
| tracking-aerial | Action bar | View details | Button | `voice.md` **A10**'s fixed string, unchanged; only its destination moves, to `delivery-aerial` |
| tracking-inspection | ETA | Status · En route to the site | Field value | *site* rather than *shoot* — C-2's word for the building being inspected. **View details** goes to `inspection-report`, which already existed |
| delivery-aerial | — | Done | Heading | replaces *Delivered*, which names an act this service does not perform. It is the fourth rail node's own word on `tracking`, so the milestone and the rail agree |
| delivery-aerial | Confirmation | Your photo &amp; video set is ready. | Body | **states the deliverable by the name that order chose** — `voice.md` **O5**, amended in this pass: a photo-only order would read *Your photo set is ready*. Not *Your shoot is complete*: `voice.md` **P1** names the outcome the client gets, not the operation that produced it |
| delivery-aerial | Photo &amp; video set | Photo &amp; video set ▸ what the operator sent back (RJ-C4) | Zone label | the record's own zone name, so the confirmation and the record call the set one thing |
| delivery-aerial | Photo &amp; video set | Photo from the shoot | Accessible name | on the well, replacing *Delivery photo*. The well shows the set's photograph; the video and its `Download video` control live on the record, which is where the set is kept |
| delivery-aerial | Details | Location · Trukhaniv Island · Shot · Wed 2 Jul · 09:00–10:00 | Field labels + values | DATA. *Delivered to* becomes **Location** — nothing was delivered to a place — and *Time* becomes **Shot**, which names what happened in that hour |
| time-slot-inspection | — | ‹ Inspection | Button | **new file 2026-08-16.** The shared slot list could send its five exits to only one review, which left the whole inspection chain unwalkable; this file's back control names its own setup form (`HIG · Navigation Bars`) |
| time-slot-inspection | Action bar | ₴650 | Value | the inspection total, where the aerial instance shows ₴800 — the figure was already correct for aerial before either file existed |
| order-review | Pay drawer | Pay ₴180 | Accessible name | rev 139 — **it stops being read and stays being announced.** Built at rev 129 as the drawer's visible title (`aria-labelledby`); the designer took the line off on 2026-08-16 — *«delete it»* — because rev 138 had put the price card under it and `Total ₴180` at 20/700 states the same number larger, three lines down. The string is **not** retired: `aria-labelledby` had nothing left to point at and a `role="dialog"` with no accessible name fails `WCAG 4.1.2`, so it moves to `aria-label` on the section and the sheet still opens as *Pay ₴180, dialog*, then its four figures. `2.5.3 Label in Name` no longer applies — no visible label is left to disagree with the name. P3 is unaffected: the price is still on the surface that takes the money, now stated by the card rather than by a heading above it |
| order-review | Pay drawer | *(the four Price breakdown rows, verbatim)* | Body | rev 138 — the sheet's message slot stops being a sentence and takes the **price card**, on the designer's word: *«зроби самері гарним у 4 стрічки»*. **No string arrives.** `Base fare` · `Distance · 7.4 km` · `Service fee` · `Total` and their figures are the four rows this screen already carries above, in the same order and the same words, so the table gains no line — it gains a second place the same four are shown. **One string retires:** *Total ₴180 — base fare ₴90, distance ₴70, service fee ₴20*, rev 136's message, which was these four facts written as prose; prose is what she asked to replace. `aria-describedby` moves with the content — the id `sheet-pay-desc` now sits on the rows container, so the dialog is still described by the figures (`WCAG 4.1.2`), and the card takes **no** `aria-label`, which would speak *Price breakdown* in place of them. **Re-measured, not inherited from rev 136:** the money card stands at y **462.78–676.78** and the drawer's edge at **292.2**, so every row it repeats is under the scrim and, while the sheet is up, the card inside it and the title `Pay ₴180` are the only place the price exists. The figures are `DATA` and change with the order |
| order-review | Pay drawer | Pay with Apple Pay | Button | rev 129 — an **accessible name only**: the button's visible content is the Apple Pay mark, which is how Apple ships it. Parallel to its two siblings so the set reads as one (`WCAG 4.1.2`, `2.5.3`) |
| order-review | Pay drawer | Pay with Google Pay | Button | rev 129 — accessible name only, same reading |
| order-review | Pay drawer | Pay with card | Button | rev 129 — the one option DRON words itself, so here the label is printed and not spoken. Taken from the designer's reference (Figma `95:10`, *Pay with card*); it pushes **Payment**, where the card is chosen |
| order-review | Pay drawer | Cancel | Button | `HIG · Action sheets` asks for the cancel by name; `_conventions.md` gives every bottom-edge drawer a grabber and a named Cancel |
| order-setup-empty | — | ‹ Order | Button |  |
| order-setup-empty | — | Package delivery | Heading |  |
| order-setup-empty | Details form | Pickup | State message |  |
| order-setup-empty | Details form | Podil, 21 | State message |  |
| order-setup-empty | Details form | Drop-off | State message |  |
| order-setup-empty | Details form | Osokorky, 14 | State message |  |
| order-setup-empty | Details form | Parcel | State message |  |
| order-setup-empty | Details form | Small · up to 2 kg | State message | DATA |
| order-setup-empty | Availability | No operator free right now | State message |  |
| order-setup-empty | Availability | All nearby operators are on jobs. The next one is likely free in about 40 minutes. | State message |  |
| order-setup-empty | Availability | Notify me when available | Button |  |
| order-setup-empty | Availability | Saved. We'll tell you when an operator is free. | Toast | raised by `Notify me when available`; `flows.md`'s own word at this terminal node |
| order-setup-empty | Availability | Pick a later time | Button |  |
| order-setup-empty | Availability | We'll hold your details — no need to re-enter them. | Body |  |
| order-setup-error | — | ‹ Order | Button |  |
| order-setup-error | — | Package delivery | Heading |  |
| order-setup-error | Details form | Pickup address: | Field label | colon added 2026-08-03 |
| order-setup-error | Details form | Podil — Naberezhno-Khreshchatytska St, 21 | Field value | DATA |
| order-setup-error | Details form | Drop-off address: | Field label | colon added 2026-08-03 |
| order-setup-error | Details form | Irpin — Sadova St, 3 | Field value | DATA |
| order-setup-error | Details form | Outside the service zone. | State message |  |
| order-setup-error | Details form | DRON delivers within Kyiv city — enter an address in the city. | State message |  |
| order-setup-error | Details form | Parcel size | Field label |  |
| order-setup-error | Details form | Small — up to 2 kg | State message | DATA · the row's value and the current option |
| order-setup-error | Details form | Medium — up to 5 kg | Body | picker option, new 2026-08-16 (rev 111) |
| order-setup-error | Details form | Large — up to 10 kg | Body | picker option, new 2026-08-16 (rev 111) |
| order-setup-error | Details form | Cancel | Button | the drawer's dismissal (rev 111) |
| order-setup-error | Details form | Edit drop-off address | Button |  |
| order-setup-error | Details form | Coverage: Kyiv (UA). More cities are rolling out. | Body |  |
| order-setup | — | ‹ Order | Button |  |
| order-setup | — | Package delivery | Heading |  |
| order-setup | Details form | Pickup address: | Field label | colon added 2026-08-03 |
| order-setup | Details form | Podil — Naberezhno-Khreshchatytska St, 21 | Field value | DATA |
| order-setup | Details form | Drop-off address: | Field label | colon added 2026-08-03 |
| order-setup | Details form | Osokorky — Dniprovska Naberezhna, 14 | Field value | DATA |
| order-setup | Details form | Parcel size | Field label |  |
| order-setup | Details form | Small — up to 2 kg | Body | DATA · the row's value and the current option |
| order-setup | Details form | Medium — up to 5 kg | Body | picker option, **new 2026-08-16 (rev 111)** — the product had only ever written the smallest size, because the picker that would have shown its siblings did not open |
| order-setup | Details form | Large — up to 10 kg | Body | picker option, **new 2026-08-16 (rev 111)** — same |
| order-setup | Details form | Cancel | Button | the drawer's dismissal (rev 111) — `HIG · Action sheets` asks for the cancel by name |
| order-setup | Details form | Notes for the operator | Field label | SR-ONLY — spoken, not drawn; visually the field shows the placeholder alone (designer, 2026-08-16) |
| order-setup | Details form | Floor, entrance code, what's inside… | Field placeholder |  |
| order-setup | Details form | Save this address for next time | Field label |  |
| order-setup | Details form | Continue to review | Button |  |
| order-setup-aerial | — | ‹ Order | Button | new file 2026-08-16 |
| order-setup-aerial | — | Aerial photo &amp; video | Heading | copied from the card that opens it, ampersand included — the fix is that the link text and the destination now name the same service (`WCAG 2.4.4`) |
| order-setup-aerial | Details form | enter location, shoot, what you get | Zone label | the zone label states the three things asked, as the delivery file's *enter pickup, drop-off, parcel* does |
| order-setup-aerial | Details form | Location: | Field label | **one place, not two.** The delivery form's Pickup / Drop-off pair collapses to one field: a shoot happens somewhere, it does not travel — which is also why the aerial record shows a single `Location` row and not `From ▸ To`. Colon as on the delivery fields |
| order-setup-aerial | Details form | Trukhaniv Island | Field value | DATA — the aerial record's own location, so *Book again* arrives pre-filled with what was booked (`sitemap.md` CE-3, *"re-book pre-fills it"*). The place-vs-photograph mismatch already logged in `_critique.md` is inherited here, not re-opened |
| order-setup-aerial | Details form | Shoot | Field label | **the same word the record uses**, fixed there as this service's analogue of `Parcel` / `Structure` — the thing the order was about, in the client's own word (`voice.md` **P4**). The form asks it and the record reports it, one name |
| order-setup-aerial | Details form | Event · Real-estate listing · Personal occasion | Picker options | **the listings card's own three**, singularised — *Events, real-estate listings, personal occasions*. The catalogue and the form name the same three things the same way; the form invents no fourth category. `Event` is the value the record already shows |
| order-setup-aerial | Details form | Duration | Field label | a second picker, not a second half of `Shoot`. The record joins them for display — *Event · 30 min*, the same middot as *14 Jun · 11:30* — but that is a summary of two facts, not one control |
| order-setup-aerial | Details form | 30 min · 60 min · 90 min | Picker options | DATA · `30 min` is the record's own value and the row's current option |
| order-setup-aerial | Details form | What you get | Field label | **new field, aerial only, 2026-08-16 — the designer's call.** The client picks the deliverable instead of receiving a fixed one; a delivery photo and an inspection report are single files with nothing to choose. **Named for the client's side of the exchange** — not *Deliverable*, not *Output*, not *Format*: `voice.md` **P1** names the outcome and **P4** takes the user's words |
| order-setup-aerial | Details form | Photo · Video · Photo &amp; video | Picker options | the list builds up to the default, which is the fullest: the service the client tapped is called *Aerial photo &amp; video*, so that is what they asked for until they say otherwise. **This choice names what comes back** — `voice.md` **O5**, amended in this pass: a photo-only order's record is headed *Photo set*, not *Photo &amp; video set* |
| order-setup-aerial | Details form | What to capture, access to the site, anything to avoid… | Field placeholder | examples only, like the delivery file's *Floor, entrance code, what's inside…* — and the same open question applies (whether the placeholder should name the field) |
| order-setup-aerial | Details form | Notes for the operator | Field label | SR-ONLY, as on the delivery file |
| order-setup-aerial | Details form | Save this address for next time | Field label | identical to `order-setup`, including its place in the action bar and `form="order-details"` |
| order-setup-aerial | Details form | Cancel | Button | each drawer's dismissal — `HIG · Action sheets` asks for the cancel by name |
| order-setup-aerial | Action bar | Pick a time | Button | **not *Continue to review*, because the next screen is not review.** Aerial is calendar-first (`sitemap.md` CE-2): a shoot is booked for an hour, not dispatched now, so setup hands off to the slot list — whose own title is *Pick a time*, which is what the button names |
| order-setup-inspection | — | ‹ Order | Button | new file 2026-08-16 |
| order-setup-inspection | — | Inspection | Heading | the listings card's name for the service. **Not *Roof inspection***, which is what the record is headed: the record names the job that was done, the form is opened before the client has said which structure |
| order-setup-inspection | Details form | enter location, what to inspect | Zone label | two things asked, so two named |
| order-setup-inspection | Details form | Location: | Field label | one place, as on the aerial file — a building does not travel |
| order-setup-inspection | Details form | Osokorky — Dniprovska Naberezhna, 14 | Field value | DATA — **the inspection record's address written out.** The record's card shortens it to *Osokorky, 14* because a summary row has one line; a field the client is about to edit shows the whole address, exactly as the delivery form's two fields do. Same place, two renderings |
| order-setup-inspection | Details form | Structure | Field label | **the record's own word**, this service's analogue of `Parcel` / `Shoot` |
| order-setup-inspection | Details form | What the operator should inspect — pick as many as apply | Zone sub | **states that the group takes more than one answer, before the tap** (`voice.md` **P3**'s discipline: say the rule as a fact, not as an error afterwards). `WCAG 3.3.2 Labels or Instructions` |
| order-setup-inspection | Details form | Roof · Facade · Gutters · Chimney | Checkbox labels | **a group, not a picker — read off the built record**, whose `Structure` row says *Roof · gutters · chimney*: three things, so the control that produces it takes more than one. **The four options are the ones the product has already named and no fifth is invented** — the listings card offers *Roofs, facades, hard-to-reach structures*, the record adds gutters and chimney. Roof, Gutters and Chimney are ticked, which is exactly the record this screen books again |
| order-setup-inspection | Details form | Height, access to the roof, what you want checked… | Field placeholder | examples only, as on the other two files |
| order-setup-inspection | Details form | Notes for the operator | Field label | SR-ONLY, as on the delivery file |
| order-setup-inspection | Details form | Save this address for next time | Field label | identical to `order-setup` |
| order-setup-inspection | Action bar | Pick a time | Button | calendar-first, as aerial (`sitemap.md` CE-2) |
| payment-error | — | ‹ Order review | Button |  |
| payment-error | — | Payment | Heading |  |
| payment-error | Amount | Payment declined | State message |  |
| payment-error | Amount | Apple Pay couldn't complete the charge. Nothing was taken from your account. Try again or use another method. | State message |  |
| payment-error | Amount | Try again | Button |  |
| payment-error | Amount | Change method | Button |  |
| payment-loading | — | Payment | Heading |  |
| payment-loading | — | Authorizing your payment… | State message |  |
| payment-loading | — | Confirming your payment with Apple Pay. Don't close the app. | State message |  |
| payment-loading | — | Continue | Button |  |
| payment | — | ‹ Order review | Button |  |
| payment | — | Card details | Heading | was `Payment` until 2026-08-16 — `HIG · Navigation bars` asks the title to name the current screen, and after the drawer took the method this screen asks only for the card. `payment-error` / `payment-loading` keep `Payment`, serving all three methods |
| payment | Amount | Package delivery · Podil → Osokorky | Body | DATA |
| payment | Card | Card | Heading | the card's title, 2026-08-16 — the group's accessible name by `aria-labelledby`. Was `Payment method` (rev 127), which retired with the method list it named; the string itself lives on unchanged on `account-edit` |
| payment | Card | Visa or Mastercard, charged once for this order | Body | the card's subtitle, 2026-08-16 — `aria-describedby` on the fieldset. Three facts: **Visa or Mastercard** before the sixteen digits, not after (P3); **charged once** against CJM Drop-off #2; **for this order**, the scoping that keeps this card and `account-edit`'s saved default apart |
| payment | Card | Card number | Field label |  |
| payment | Card | Expiry | Field label |  |
| payment | Card | CVV | Field label | the designer's word (*«csv»*, read as CVV). Mastercard prints **CVC**, Apple's own forms say **Security Code** — one label per concept, and this is the one chosen |
| payment | Card | First name | Field label | the designer's split, 2026-08-16 (*«імя прізвище»*), replacing `Cardholder`. `WCAG 1.3.5` names both shapes and neither fails — `cc-name` single, `cc-given-name` + `cc-family-name` split — so it was hers on taste, not on conformance |
| payment | Card | Last name | Field label | `cc-family-name`; see `First name` above |
| payment | Card | Save this card for next time | Field label | 2026-08-16 — `order-setup`'s `Save this address for next time` with one noun changed: the product's other save-for-later checkbox, same component, same place on the bottom edge |
| payment | Card | Pay ₴180 | Button |  |
| rate | — | ‹ Delivered | Button |  |
| rate | — | Rate the order | Heading |  |
| rate | Rating | How would you rate this order? | Body |  |
| rate | Review | Your review | Field label | SR-ONLY — visually the card shows one sentence: the placeholder (designer, 2026-08-13) |
| rate | Review | What the operator did well, and anything to improve | Field placeholder |  |
| rate | Review | Submit review | Button |  |
| rate | Review | Book again | Button |  |
| ratings-empty | — | Ratings | Heading |  |
| ratings-empty | Overall | NEW | State message | WF-PH |
| ratings-empty | Overall | No ratings yet | State message |  |
| ratings-empty | Overall | You haven't been rated yet. Ratings build from your first jobs — the platform keeps sending you jobs until they do. | State message |  |
| ratings-empty | Overall | Find jobs | Button |  |
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
| report-issue-empty | — | ‹ Help | Button |  |
| report-issue-empty | — | Report an issue | Heading |  |
| report-issue-empty | Report status | No evidence attached | State message |  |
| report-issue-empty | Report status | Without a photo or note this is a weaker claim, so it goes to manual review only — which takes longer. Adding evidence gets you a faster decision. | State message |  |
| report-issue-empty | Report status | Contact support | Button |  |
| report-issue-empty | Report status | Add evidence | Button |  |
| report-issue-loading | — | ‹ Help | Button |  |
| report-issue-loading | — | Report an issue | Heading |  |
| report-issue-loading | Review status | Issue under review… | State message |  |
| report-issue-loading | Review status | We're checking your report for order #DR-4821. This usually takes a few minutes. | State message |  |
| report-issue-loading | Review status | You can leave this screen — we'll notify you when the outcome is ready. | State message |  |
| report-issue-loading | Review status | View resolution | Button |  |
| report-issue | — | ‹ Help | Button |  |
| report-issue | — | Report an issue | Heading |  |
| report-issue | Report form | Issue type | Field label |  |
| report-issue | Report form | Poor quality — not as expected | Body |  |
| report-issue | Report form | Damaged item | Body | picker option (rev 111) — was a name inside the `Also:` hint, now an option in the drawer |
| report-issue | Report form | Wrong location | Body | picker option (rev 111) — same |
| report-issue | Report form | Cancel | Button | the drawer's dismissal (rev 111) |
| ~~report-issue~~ | ~~Report form~~ | ~~Also: Damaged item · Wrong location~~ | ~~Body~~ | **RETIRED 2026-08-16 (rev 111).** It existed because the picker did not open — the only place the other two types could be shown. A caption that lists a control's own options is a caption for a control that does not work |
| report-issue | Report form | What happened? | Field label |  |
| report-issue | Report form | Describe the issue — e.g. the roof photos were blurry and missed the north side. | Field placeholder |  |
| report-issue | Report form | ADD PHOTO / NOTE | Body | WF-PH |
| report-issue | Report form | A photo makes your claim stronger. Order #DR-4821. | Body |  |
| report-issue | Report form | Submit report | Button |  |
| report-issue | Report form | Submit without evidence | Button |  |
| resolution | — | ‹ Help | Button |  |
| resolution | — | Resolution | Heading |  |
| resolution | — | DONE | Body | WF-PH |
| resolution | — | Refund issued | Heading |  |
| resolution | — | We reviewed your report and refunded this order in full. | Body |  |
| resolution | Outcome | Issue | Body |  |
| resolution | Outcome | Poor quality | Body |  |
| resolution | Outcome | Order # | Body |  |
| resolution | Outcome | DR-4821 | Body | WF-PH |
| resolution | Outcome | Decision | Body |  |
| resolution | Outcome | Refund issued ₴180 | Body | DATA |
| resolution | Outcome | Timeline | Body |  |
| resolution | Outcome | To card in 1–3 days | Body |  |
| resolution | Outcome | Refunded to Visa •••• 4921. Or book this order again for free below. | Body | DATA |
| resolution | Outcome | Done | Button |  |
| resolution | Outcome | Book again — free | Button |  |
| resolution | Outcome | Contact support | Button |  |
| result-upload-error | — | ‹ Checklist | Button |  |
| result-upload-error | — | Close job | Heading |  |
| result-upload-error | Result photo | UPLOAD | State message | WF-PH |
| result-upload-error | Result photo | Upload failed | State message |  |
| result-upload-error | Result photo | The delivery photo didn't upload — weak signal. Try again, or queue it to upload automatically when you're back online. Payment is held until the photo uploads. | State message |  |
| result-upload-error | Result photo | Try again | Button |  |
| result-upload-error | Result photo | Queue offline | Button |  |
| result-upload-error | Result photo | Payment stays held until the delivery photo uploads. | Body |  |
| result-upload-loading | — | ‹ Checklist | Button |  |
| result-upload-loading | — | Close job | Heading |  |
| result-upload-loading | — | SEND | State message | WF-PH |
| result-upload-loading | — | Uploading delivery photo… | State message |  |
| result-upload-loading | — | Sending the delivery photo. Keep the app open. | State message |  |
| result-upload-loading | — | Payment is held until the client confirms — auto-confirms after 2h. | State message |  |
| result-upload-loading | — | Uploading… | Button |  |
| result-upload | — | ‹ Checklist | Button |  |
| result-upload | — | Close job | Heading |  |
| result-upload | Result photo | DELIVERY PHOTO | Body | WF-PH |
| result-upload | Result photo | Add photo | Button |  |
| result-upload | Notes | Handover notes, client name… | Field placeholder |  |
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
| role-select | Role choice | OPERATOR | Body | WF-PH |
| role-select | Role choice | I provide services | Body |  |
| role-select | Role choice | You're a certified drone operator — take jobs and get paid. | Body |  |
| role-select | Role choice | You can change this later in Account → Switch role. | Body | DATA |
| share-empty | — | ‹ Rate the order | Button |  |
| share-empty | — | Share DRON | Heading |  |
| share-empty | Invite | NOT SENT | State message | WF-PH |
| share-empty | Invite | Invite not sent yet | State message |  |
| share-empty | Invite | Your link is ready — dron.app/r/anna-k4. Pick a channel to send it, and you both get ₴100 off the next order. | State message | DATA |
| share-empty | Invite | Share again | Button |  |
| share-empty | Invite | Maybe later | Button |  |
| share-empty | Invite | Share again | Button |  |
| share | — | ‹ Rate the order | Button |  |
| share | — | Share DRON | Heading |  |
| share | — | SHARE | Body | WF-PH |
| share | — | Invite a friend | Body |  |
| share | — | Send your link — you both get ₴100 off the next order. | Body | DATA |
| share | Your link | Referral link | Field label |  |
| share | Your link | dron.app/r/anna-k4 | Body | DATA |
| share | Your link | COPY | Body | WF-PH |
| share | Your link | Copy link | Button |  |
| share | Your link | Link copied. | Toast | raised by `Copy link`; the first toast to float above a sheet |
| share | Share to | Message | Button |  |
| share | Share to | Email | Button |  |
| share | Share to | More | Button |  |
| share | Share to | Your friend gets ₴100 off their first DRON order. When they complete it, ₴100 lands in your balance. No limit on invites. | Body | DATA |
| share | Share to | ~~Send invite~~ | Button | removed 2026-08-03 — the share-sheet redesign made the channels the send action, which also closes the A9 submit-vs-send drift |
| signin-error | Sign in | AUTH | State message | WF-PH |
| signin-error | Sign in | Sign-in didn't complete | State message |  |
| signin-error | Sign in | Diia declined or cancelled the verification. You can try again, or continue with BankID instead. | State message |  |
| signin-error | Sign in | Try again with Diia | Button |  |
| signin-error | Sign in | Use BankID instead | Button |  |
| signin-loading | Sign in | DIIA | State message | WF-PH |
| signin-loading | Sign in | Opening Diia… | State message |  |
| signin-loading | Sign in | Redirecting you to Diia to confirm your identity. This takes a few seconds. | State message |  |
| signin-loading | Sign in | Continue | Button |  |
| signin-loading | Sign in | Cancel | Button |  |
| signin | Sign in | Sign in to DRON | Body |  |
| signin | Sign in | One verification lets you order drone services — or take jobs as a certified operator. | Body |  |
| signin | Sign in | Diia and BankID confirm who you are. DRON never sees your password. | Body |  |
| signin | Sign in | Continue with Diia | Button |  |
| signin | Sign in | Continue with BankID | Button |  |
| signin | Sign in | By continuing you agree to the Terms & Privacy Policy. | Body |  |
| support | — | Help | Heading |  | *(was `Help & support` — corrected by D8: one screen, one name)* |
| support | — | What happened? | Heading |  |
| support | — | Pick the issue with your order and we'll route it to the right fix. | Body |  |
| support | Triage list | My order didn't arrive / no-show | Body |  |
| support | Triage list | We'll send a new operator now, or refund your order. | Body |  |
| support | Triage list | The photo or report wasn't what I expected | Body |  |
| support | Triage list | Report the issue with a photo or note and we'll review it. | Body |  |
| support | Triage list | Safety or trust concern | Body |  |
| support | Triage list | Contact support straight away — online 24/7. | Body |  |
| support | Human fallback | Contact support | Button |  |
| support | Human fallback | Can't find your issue above? A support agent is available any time, day or night. | Body |  |
| support | Human fallback | Order | Button |  |
| support | Human fallback | Activity | Button |  |
| support | Human fallback | Help | Button |  |
| support | Human fallback | Account | Button |  |
| switch-role | — | ‹ Account | Button |  |
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
| switch-role | What happens | Switch to Operator | Button |  |
| switch-role | What happens | Cancel | Button |  |
| time-slot-empty | — | ‹ Package delivery | Button |  |
| time-slot-empty | — | Pick a time | Heading |  |
| time-slot-empty | — | Tue 1 | Button |  |
| time-slot-empty | — | Wed 2 | Button |  |
| time-slot-empty | — | Thu 3 | Button |  |
| time-slot-empty | — | Fri 4 | Button |  |
| time-slot-empty | — | Sat 5 | Button |  |
| time-slot-empty | Slots · Thu 3 Jul | EMPTY | State message | WF-PH |
| time-slot-empty | Slots · Thu 3 Jul | No free slots on Thu 3 Jul | State message | DATA |
| time-slot-empty | Slots · Thu 3 Jul | Every operator is booked that day. Pick another day — Fri 4 and Sat 5 still have openings. | State message |  |
| time-slot-empty | Slots · Thu 3 Jul | Pick another day | Button |  |
| time-slot-empty | Slots · Thu 3 Jul | Back to Order setup | Button |  |
| time-slot-empty | Slots · Thu 3 Jul | No slot selected | Field label |  |
| time-slot-empty | Slots · Thu 3 Jul | Confirm slot | Button |  |
| time-slot | — | ‹ Package delivery | Button |  |
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
| tracking-empty | Late notice | Contact support | Button |  |
| tracking-empty | Operator | AM | State message | DATA |
| tracking-empty | Operator | Andriy M. | State message | DATA |
| tracking-empty | Operator | 4.9 ★ · 214 jobs | State message |  |
| tracking-empty | Operator | Verified by DRON | State message |  |
| tracking-empty | Operator | Insured | State message |  |
| tracking-empty | Operator | Contact operator | Button |  |
| tracking-empty | Progress | Accepted | State message |  |
| tracking-empty | Progress | En route | State message |  |
| tracking-empty | Progress | On-site | State message |  |
| tracking-empty | Progress | Done | State message |  |
| tracking-empty | Progress | Order | Button |  |
| tracking-empty | Progress | Activity | Button |  |
| tracking-empty | Progress | Help | Button |  |
| tracking-empty | Progress | Account | Button |  |
| tracking-error | — | On the way | Heading |  |
| tracking-error | Live map | NO GPS | State message | WF-PH |
| tracking-error | Live map | Live tracking lost | State message |  |
| tracking-error | Live map | We've lost the live signal from the operator's device. Your order is still active. | State message |  |
| tracking-error | Live map | Try again | Button |  |
| tracking-error | Live map | Contact support | Button |  |
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
| tracking-error | Progress | En route | State message |  |
| tracking-error | Progress | On-site | State message |  |
| tracking-error | Progress | Done | State message |  |
| tracking-error | Progress | Order | Button |  |
| tracking-error | Progress | Activity | Button |  |
| tracking-error | Progress | Help | Button |  |
| tracking-error | Progress | Account | Button |  |
| tracking-loading | — | On the way | Heading |  |
| tracking-loading | Live map | ACQUIRING GPS… | State message | WF-PH |
| tracking-loading | ETA | Getting a live signal from the operator… | State message |  |
| tracking-loading | ETA | Signal restored | Button |  |
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
| tracking | Progress | En route | Body |  |
| tracking | Progress | On-site | Body |  |
| tracking | Progress | Done | Body |  |
| tracking | Progress | View details | Button |  |
| tracking | Progress | Contact operator | Button | string unchanged; **from 2026-08-16 it opens a drawer instead of loading the Help hub** — the designer's call. The label was already right and the target was wrong: a button naming the *operator* went to `support.html`. See the four rows below, which are the same drawer on `tracking`, `tracking-empty` and `tracking-error` |
| tracking · -empty · -error | Contact drawer | Contact operator | Heading | the sheet's title, and the same words as the button that raised it — a drawer titled by its opener, the shape the other six pickers use (`Mode`, `Parcel size`, `Issue type`, `Language`, `Payment method`, `Pick a date & time`). Not dropped the way `order-review`'s Pay title was at rev 139: that sheet's content stated its own number, this one's is three unlabelled routes |
| tracking · -empty · -error | Contact drawer | Call operator | Button | `voice.md` **A2** fixes *Contact support* for reaching a human **and names the exception in the same entry** — *"a phone-only action may say Call support — calling ≠ messaging."* This is that exception with the other object. Verb + object, so it stands beside the two rows under it without borrowing the drawer title's noun. **The label did not move on 2026-08-16 when its target did** — it opened a `tel:` for one build and now opens `call.html`, the designer's *«зроби фрейм який відкриє дзвінок»*; the row says what happens either way, which is the test of a good label |
| tracking · -empty · -error | Contact drawer | Chat with the operator | Button | **the designer's own word, chosen 2026-08-16 against the built drawer**, and fixed as `voice.md` **A12**. It was shipped for one build as *Send message*; she was given the standards first — the Button rule (*an action verb, never a bare noun*) and **A9** (*to a person: Send*) — and both readings conformed, so it was hers to call. **Her word turns out to satisfy the Button rule rather than bend it:** *chat* here is a **verb taking its object** — *chat with someone* — not the bare noun that names a room, which is why *Chat* alone was the one shape not offered. **A9 keeps its own job:** *Send message* is still the composer's button on `chat` — that action commits one message, this one opens the conversation, and two different acts do not share a label. Longest row at 22 characters and it does not wrap: the label column is 309.4 wide |
| tracking · -empty · -error | Contact drawer | Contact support | Button | `voice.md` **A2**'s fixed string, unchanged, in its usual place — the last way out, after the two that reach the operator |
| tracking · -empty · -error | Contact drawer | Calls and messages go through DRON. Your number is not shared with the operator. | Body | two facts, no adjective (`voice.md` **P2**), stated **before** the tap rather than discovered after it — **P3**'s discipline applied to privacy instead of to price. It answers the risk `ux-research/user-stories-cjm.md` logs 🔴 as *"direct channel bypasses platform"* by showing the client why the platform sits in the middle, and it is the reason the Call row can be a `tel:` to a masked line without the client wondering whose number it is |
| tracking · -empty · -error | Contact drawer | Cancel | Button | `HIG · Action sheets` asks for the cancel **by name**; the × belongs to a full modal screen, the reading rev 101 wrote for the picker and rev 129 for the Pay drawer |
| wallet-empty | — | Earnings | Heading |  |
| wallet-empty | Balance | Below the ₴500 minimum to withdraw | State message | DATA |
| wallet-empty | Balance | EMPTY | State message | WF-PH |
| wallet-empty | Balance | Below the withdrawal minimum | State message |  |
| wallet-empty | Balance | You need ₴500 to withdraw. Take one more job to reach the minimum. | State message | DATA |
| wallet-empty | Balance | Find jobs | Button |  |
| wallet-empty | Balance | Jobs | Button |  |
| wallet-empty | Balance | Earnings | Button |  |
| wallet-empty | Balance | Ratings | Button |  |
| wallet-empty | Balance | Account | Button |  |
| wallet | — | Earnings | Heading |  |
| wallet | Balance | Available to withdraw | Body |  |
| wallet | Balance | ₴800 paid for 'Aerial photo & video', added to your balance 12 min ago. | Body | DATA |
| wallet | Balance | Withdraw ₴3,240 | Button |  |
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
| welcome-empty | One-card fallback | Order a drone service — a certified, insured operator does the flying. You see their name, photo and live position the moment you pay, and get a photo or report when it's done. The drone flies a set route and only records what your order needs. | State message |  |
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
| welcome | — | It flies a set route, keeps its distance, and only records what your order needs. Brief low noise on take-off and landing; no filming of your neighbours. | Body |  |
| welcome | — | Get started | Button |  |
| withdraw-error | — | ‹ Earnings | Button |  |
| withdraw-error | — | Withdraw | Heading |  |
| withdraw-error | Amount | FAILED | State message | WF-PH |
| withdraw-error | Amount | Withdrawal didn't go through | State message |  |
| withdraw-error | Amount | The transfer to your card failed and the ₴3,240 is back in your balance. Check the card details, or try a bank transfer instead. | State message | DATA |
| withdraw-error | Amount | Try again | Button |  |
| withdraw-error | Amount | Use bank transfer | Button |  |
| withdraw-error | Amount | Funds returned to your balance — nothing was lost. | Body |  |
| withdraw-loading | — | ‹ Earnings | Button |  |
| withdraw-loading | — | Withdraw | Heading |  |
| withdraw-loading | — | SEND | State message | WF-PH |
| withdraw-loading | — | Sending to your card… | State message |  |
| withdraw-loading | — | Instant transfer to Visa •••• 3318 — usually under a minute. | State message | DATA |
| withdraw-loading | — | Transferring… | Button |  |
| withdraw | — | ‹ Earnings | Button |  |
| withdraw | — | Withdraw | Heading |  |
| withdraw | Amount | Full balance | Body |  |
| withdraw | Withdrawal method | Instant to card •••• 3318 | Field label |  |
| withdraw | Withdrawal method | Arrives in under a minute | Body |  |
| withdraw | Withdrawal method | Bank transfer | Field label |  |
| withdraw | Withdrawal method | 1–3 business days | Body |  |
| withdraw | Withdrawal method | Withdraw ₴3,240 | Button |  |
