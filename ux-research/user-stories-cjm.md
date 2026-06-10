# User Stories & Customer Journey Map

## Cognitive Framework: Whalen's 6 Minds

All drop-off analysis uses John Whalen's framework from *Design for How People Think* (O'Reilly, 2019).
Each mind represents a cognitive dimension where friction causes abandonment:

| Mind | Cognitive process | Design risk |
|---|---|---|
| **Vision** | What users see and attend to | Critical CTA invisible; wrong visual hierarchy |
| **Wayfinding** | Navigation and spatial orientation | User lost in multi-step flow; can't go back |
| **Memory** | Working memory limits (7±2 chunks) | Too many fields/steps at once → mental overload |
| **Language** | Word processing, terminology | Drone jargon ("UAV", "payload") alienates non-technical users |
| **Decision** | Choice under uncertainty | Too many operators to compare → paralysis |
| **Emotion** | Fear, trust, anxiety, delight | "A stranger with a drone will be near my home" → abandonment |

> Key insight from Whalen: **Emotion is the deepest mind.** Unresolved anxiety overrides every other cognitive process. A user who is afraid will not complete a booking regardless of how simple the flow is.

---

## User Stories

### USER TYPE 1 — Client (Замовник)

**Epic: Order a drone service as fast as possible**

| ID | Story | Acceptance criteria | Whalen mind |
|---|---|---|---|
| C-01 | As a client ordering delivery, I want to see available operators near me with estimated arrival time so I can decide if the wait is acceptable before committing | Availability shown on browse screen: "Available now (2 operators)" or "Next available: 40 min" | Decision |
| C-02 | As a client, I want to sign up with Diia or Bank ID in one tap so I don't need to fill out a registration form | Registration complete in ≤ 3 taps; no manual text entry required | Memory |
| C-03 | As a client, I want to see the operator's verified profile — photo, rating, verification badge, insurance status — before I confirm the order so I know who is coming | Operator card shows: name, photo, rating (X.X ★ · N reviews), "Verified by DRON", "Insured up to 500 000 UAH" — all visible before payment screen | Emotion |
| C-04 | As a client, I want to pay with Apple Pay or Google Pay in one tap so checkout does not interrupt momentum | Payment screen offers Apple/Google Pay as primary option; card as secondary; ≤ 2 taps to confirm | Memory, Decision |
| C-05 | As a client, I want live tracking of the drone with countdown ETA so I know exactly when to be ready | Live map with drone position updates every 5s; ETA displayed as "~8 min"; push notification "Operator is 2 min away" | Emotion, Vision |
| C-06 | As a client ordering inspection, I want to receive a structured photo report after the job so I have documentation | Report delivered in-app ≤ 15 min after job close: cover photo, annotated findings, operator signature | Memory, Emotion |
| C-07 | As a client, I want to re-book the same operator with one tap so returning doesn't require starting from scratch | "Book again" card on home screen after first completed order; pre-fills all previous service details | Memory |
| C-08 | As a client, I want to see a price estimate before confirming so there are no surprises at checkout | Price shown on service details screen, before operator selection; final price confirmed on payment screen with no hidden fees | Decision, Emotion |

---

### USER TYPE 2 — Operator (Оператор / SRM)

**Epic: Manage incoming jobs efficiently with minimal admin overhead**

| ID | Story | Acceptance criteria | Whalen mind |
|---|---|---|---|
| O-01 | As an operator, I want to receive job alerts with service type, location, and estimated job duration so I can accept or decline in under 10 seconds | Push notification: service type + distance from my location + estimated time + price. Accept / Decline buttons on lock screen | Decision |
| O-02 | As an operator, I want to set my status (Available / Busy / Offline) in one tap so I only receive requests when I can take them | Status toggle on SRM home screen; persists until manually changed | Vision, Memory |
| O-03 | As an operator, I want a structured job checklist for each service type so I don't miss required steps on site | Checklist auto-generated at job start: pre-flight, execution, delivery confirmation, result photo — all checkable in-app | Memory, Wayfinding |
| O-04 | As an operator, I want to upload job result photos and notes in-app so the client sees the outcome without me sending messages manually | Photo upload + short text note in job close screen; client sees update in real time | Language |
| O-05 | As an operator, I want automatic payment transfer after job completion is confirmed so I have no invoicing overhead | Payment auto-released to operator wallet within 30 min of client confirmation or auto-confirm after 2h | Emotion |
| O-06 | As an operator, I want to see my rating and individual review text so I know what clients liked or didn't | Ratings tab: overall score + breakdown by service type + last 10 reviews with text | Emotion |
| O-07 | As an operator, I want a map view of incoming requests around me so I can prioritize by distance | Map screen with request pins; tap pin → see job summary; accept from map | Wayfinding, Decision |

---

## Customer Journey Map

**Evaluation criteria per stage:**
- 🔴 High drop-off risk
- 🟡 Medium friction
- 🟢 Smooth, no cognitive barrier

---

### CLIENT JOURNEY

#### Stage 1 — ATTRACTION
*Goal: User discovers DRON and understands what it is*

| Touchpoint | User action | Emotion | Whalen friction | Drop-off signal |
|---|---|---|---|---|
| Social media ad / TikTok | Sees video: drone delivers pizza box to balcony | Curiosity + slight disbelief | **Language** — "Is this actually available where I live?" | 🔴 Lands on homepage → value prop unclear → bounces in 8s |
| Word of mouth | Friend says "I used a drone service, it was wild" | Trust (social proof) | **Emotion** — "But would I trust it?" | 🟡 Interest but no immediate action |
| App Store search | Searches "drone delivery Kyiv" | Intent | **Vision** — screenshot quality decides install | 🟡 Installs if screenshots show real service, not concept art |
| Google search | Searches "замовити дрон" | High intent | **Language** — landing page copy must match search intent | 🔴 Mismatch between ad copy and landing page = instant back |

**Critical drop-off:** First 8 seconds on homepage. If vision + language don't answer "what do I get, how fast, how much?" — user is gone.

---

#### Stage 2 — ACTIVATION
*Goal: User completes registration and places first order*

| Step | User action | Emotion | Whalen friction | Drop-off signal |
|---|---|---|---|---|
| App install → open | Sees onboarding screens | Anticipation | **Memory** — 3+ onboarding slides = skipped | 🟡 |
| Registration | Taps "Sign in with Diia" | Mild anxiety about data | **Emotion** — "Am I giving too much info?" | 🔴 If registration requires manual form → 60–70% drop |
| Browse services | Sees Delivery / Photo / Inspection tiles | Curiosity | **Decision** — which one is for me? | 🟢 If tiles show clear use-case illustrations |
| Operator selection | Views 2–3 available operators | **Peak anxiety** | **Emotion** — "Who is this person? Do I trust them?" | 🔴 Highest single drop-off point if trust signals missing |
| Pricing screen | Sees total cost | Decision tension | **Decision + Emotion** — hidden fees = rage quit | 🔴 Any "plus fees" or surprise on payment screen = abandonment |
| Payment | Apple Pay one tap | Relief | **Memory** — card entry is a barrier | 🟢 if Apple/Google Pay is primary CTA |
| Post-booking | Sees tracking screen with operator photo + ETA | Trust established | **Emotion** — anxiety converts to anticipation | 🟢 |

**Critical drop-off:** Operator selection screen. User is asking: "Is this person real? Are they qualified? What if something goes wrong?" Every missing trust signal is a reason to close the app.

---

#### Stage 3 — INVOLVEMENT
*Goal: User forms habit of using DRON for repeat needs*

| Touchpoint | User action | Emotion | Whalen friction | Drop-off signal |
|---|---|---|---|---|
| Order history | Tries to find previous order | Mild frustration | **Wayfinding** — where is my history? | 🟡 If buried 3+ taps deep |
| Repeat booking | Wants to re-book same operator | Expectation of speed | **Memory** — don't make me re-enter everything | 🔴 If no "Book again" shortcut → goes to Kabanchik instead |
| Issue / complaint | Job result not satisfying | Anger + distrust | **Emotion** — one bad experience taints platform | 🔴 No clear resolution path = permanent churn |
| Rating prompt | Asked to rate after job | Mild friction | **Decision** — takes effort | 🟡 One-tap star rating = higher completion |

---

#### Stage 4 — RETENTION
*Goal: User becomes loyal, refers others*

| Touchpoint | User action | Emotion | Whalen friction | Drop-off signal |
|---|---|---|---|---|
| Notification | "Your favorite operator is available" | Positive nudge | **Emotion** — platform remembers me | 🟢 |
| Direct contact | Tries to contact operator outside app | Rational cost-saving | **Emotion vs. rational** | 🔴 Direct channel bypasses platform = revenue loss |
| Referral | Tells friend about service | Pride + advocate | **Language** — needs simple share mechanism | 🟢 One-tap share link |

---

### OPERATOR JOURNEY

#### Stage 1 — ATTRACTION
*Goal: Drone operator discovers DRON as a job source*

| Touchpoint | Emotion | Whalen friction | Drop-off signal |
|---|---|---|---|
| Facebook/Telegram drone communities | Curiosity + skepticism | **Language** — "another platform that takes 30%?" | 🔴 Fee structure must be immediately visible and fair |
| LinkedIn / drone pilot job boards | Professional interest | **Decision** — compare with freelancing directly | 🟡 |

---

#### Stage 2 — ACTIVATION
*Goal: Operator completes verification and goes live*

| Step | Emotion | Whalen friction | Drop-off signal |
|---|---|---|---|
| Document upload (license, insurance) | Effort + uncertainty | **Memory + Emotion** — "How long will review take?" | 🔴 If no ETA for verification → operator goes silent |
| Profile setup | Motivation | **Language** — what should I write about myself? | 🟡 Templates/prompts reduce abandonment |
| First job offer received | Excitement + anxiety | **Decision** — accept? enough info? | 🟢 If job card has all details |

---

#### Stage 3 — INVOLVEMENT
*Goal: Operator manages jobs efficiently through SRM*

| Touchpoint | Emotion | Whalen friction | Drop-off signal |
|---|---|---|---|
| Job checklist in field | Focus | **Wayfinding** — app usable with gloves, sunlight | 🟡 Large touch targets, high contrast required |
| Photo upload on site | Task completion | **Memory** — upload must be instant, not slow | 🔴 Slow upload = operator skips it = client unhappy |
| Payment received | Satisfaction | **Emotion** — delay > 24h erodes trust in platform | 🔴 |

---

#### Stage 4 — RETENTION
*Goal: Operator keeps DRON as primary job source*

| Touchpoint | Emotion | Whalen friction | Drop-off signal |
|---|---|---|---|
| Direct client contact | Rational bypass | **Emotion** — "I built this relationship, why share revenue?" | 🔴 Platform must provide value beyond matching (insurance, admin, payments) |
| Rating visibility | Pride or frustration | **Emotion** — transparent, fair rating = loyalty | 🟢 |

---

## Drop-off Summary: Top 5 Critical Points

| # | Stage | Who | What happens | Whalen root cause |
|---|---|---|---|---|
| 1 | Activation | Client | Sees operator selection screen, closes app | **Emotion** — trust signals absent or buried |
| 2 | Activation | Client | Hits pricing screen, sees unexpected fees | **Emotion + Decision** — surprise = rage quit |
| 3 | Activation | Operator | Uploads documents, hears nothing | **Emotion** — no feedback = feels ignored |
| 4 | Involvement | Client | Tries to re-book, can't find shortcut | **Memory** — high effort = goes elsewhere |
| 5 | Retention | Operator | Builds direct client relationship | **Emotion** — platform value unclear beyond matching |
