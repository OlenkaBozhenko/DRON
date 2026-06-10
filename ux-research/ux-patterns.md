# UX Patterns: Speed-First On-Demand Service

**Core task:** Client gets service as fast as possible. Operator processes order as fast as possible.

---

## 5 Fundamentally Different Patterns

---

### 1. Auto-Dispatch — system decides

**How it works:** Client specifies service type + location → system automatically assigns the nearest available operator → booking confirmed. No selection step — only confirmation.

**Where used:** Bolt, Uber, Amazon Flex, emergency dispatch, Glovo (courier assignment)

**Fits when:**
- Operators are interchangeable (any = same quality level)
- Speed is the primary value
- Platform guarantees quality through standards, not through client selection

**Breaks when:**
- Operators are differentiated (client wants a specific person or specialization)
- Service requires pre-start coordination with the client
- Client doesn't trust the platform enough to hand the decision to the system

---

### 2. Marketplace Browse — client selects from a list

**How it works:** Client sees a list/grid of available operators with profiles → browses → selects → confirms. Decision is entirely the client's.

**Where used:** Airbnb, TaskRabbit, Rover, Upwork, Fiverr

**Fits when:**
- Providers are differentiated (experience, specialization, reviews)
- Client has time to evaluate
- First transaction, client needs psychological ownership of the decision

**Breaks when:**
- Speed is critical → choice paralysis
- Too many options → paradox of choice (Whalen: Decision mind)
- First time — client doesn't know the criteria to evaluate by

---

### 3. Broadcast / Race to Accept — operators compete for the job

**How it works:** Client submits a request → system broadcasts to 5–10 nearby operators simultaneously → first to confirm gets the job → client notified.

**Where used:** Original TaskRabbit (pre-2014), Kabanchik.ua, Rappi during peak hours, some B2B tender systems

**Fits when:**
- Supply is uneven and unpredictable
- Operators are self-employed; competition increases motivation
- Platform is still building its operator pool

**Breaks when:**
- Client waits with no certainty → unresolvable anxiety state
- Operators cherry-pick — only accept easy/nearby jobs
- After rejections, client feels unwanted; trust in platform collapses

---

### 4. Calendar-First / Slot Booking — pick time, then provider

**How it works:** Client selects date and time → system shows available operators for that slot → client confirms. Time is the primary axis.

**Where used:** Zocdoc, Treatwell, Calendly, barbershop apps, B2B SaaS onboarding calls

**Fits when:**
- Service requires planning (weather-dependent, needs client presence, daylight-sensitive)
- Both sides have structured schedules
- Service is non-urgent

**Breaks when:**
- Client needs service now → slot selection feels like a barrier
- Simple services → unnecessary complexity
- Client doesn't know how long the service takes and can't pick the right slot

---

### 5. Guided Wizard / Progressive Disclosure — system narrows via questions

**How it works:** App asks questions one at a time ("What do you need?" → "Where?" → "When?" → "Details?") → based on answers, presents a single recommended option or narrow shortlist. Client configures, doesn't choose from a catalog.

**Where used:** Goship, insurance calculators, Wix site builder, some B2B procurement flows

**Fits when:**
- Service is complex or configurable (many variables affect price/provider)
- Client doesn't know what to order
- First time, educational context

**Breaks when:**
- Client knows what they want → repeated questions are friction
- Repeat users hate the wizard — can't skip steps
- Mobile context + many steps = drop-off by screen 3

---

## Fit Analysis Against DRON Context

*(Based on CLAUDE.md brief)*

---

### Best fit: Auto-Dispatch (#1)

**Reason 1 — Business model makes it possible and required.**
DRON is a company with its own operators. All are verified, insured, and trained to a single standard. This means any operator = guaranteed quality. The client doesn't need to choose between "good" and "bad" — there are no bad ones in the system. This is exactly the precondition for auto-dispatch.

**Reason 2 — Core product value.**
"Client wants to get the service as fast as possible" is the literal headline of the task. Auto-dispatch eliminates the longest step: operator selection. From "choose service" to "booking confirmed" becomes 2 taps instead of 5–7.

**Reason 3 — Audience has never used drones.**
From CLAUDE.md: users have never operated a drone and don't intend to; they want someone with a drone to handle everything. This audience has no criteria to evaluate drone operators — they don't know what to look for in a pilot's profile. Choice without evaluation criteria = paralysis (Whalen: Decision mind). Auto-dispatch removes the question from the table: "the system picked the best available."

---

### Second fit under condition X: Calendar-First (#4)

**Condition X:** Client is ordering aerial photography or inspection — services that depend on weather, daylight, and require client presence or object preparation.

For delivery, auto-dispatch is absolute. For aerial photo and inspection, the client needs time coordination. Calendar-first is natural here: "Pick your time slot → we'll confirm an operator." This isn't slowing down — it's expected coordination the client anticipates for these service types.

**MVP implementation:** one product, two modes by service type. Delivery → auto-dispatch. Photo/Inspection → calendar-first with auto-assignment of operator to selected slot.

---

### Does not fit: Broadcast / Race to Accept (#3)

DRON has its own operators — broadcast has no architectural meaning (it's a tool for marketplaces with independent contractors). But the core reason is emotional.

DRON's audience came precisely because they want certainty, not search. Broadcast recreates exactly the anxiety DRON is meant to solve: *post a request → wait → not know if anyone will respond → feel ignored*. This is Kabanchik.ua with a nicer interface.

Whalen (Emotion mind): the waiting state after broadcast with no guaranteed outcome is an unresolvable anxiety. It destroys platform trust after the very first experience — the opposite of DRON's primary brand promise.
