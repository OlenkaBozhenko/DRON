---
name: Chat thread
slug: chat-thread
group: Surfaces
order: 150
classes: .dr-thread · .dr-bubble · --in · --out · __time
file: chat.css
inventory: Message thread
kit: 831
---

## Anatomy

```html
<section class="dr dr-stack dr-thread" aria-label="Thread" style="width:341px;max-width:100%">
  <p class="dr-note">Today</p>
  <ul class="dr-list dr-list--snug" aria-label="Messages">
    <li class="dr-bubble dr-bubble--in"><span class="dr-sr">Andriy M.:</span>Your parcel is picked up from Podil, 21. On the way to Osokorky, 14.<time class="dr-bubble__time" datetime="2026-08-16T09:32">9:32</time></li>
    <li class="dr-bubble dr-bubble--out"><span class="dr-sr">You:</span>The courtyard gate is locked — the code is 4471.<time class="dr-bubble__time" datetime="2026-08-16T09:34">9:34</time></li>
    <li class="dr-bubble dr-bubble--in"><span class="dr-sr">Andriy M.:</span>Got it. I'll land at the entrance and send the delivery photo.<time class="dr-bubble__time" datetime="2026-08-16T09:35">9:35</time></li>
  </ul>
</section>
```

- `.dr-thread` — One declaration, `margin-top: auto`. The thread fills upward, so the newest message sits against the composer and a short conversation leaves its empty space above.
- `.dr-note` — The date, above the run of messages, not a divider through it.
- `.dr-bubble--in` — The other person's message on `--bg-surface`, anchored to the leading edge. `--ink` at 14.37:1. Radius 16, padding 10 / 12, capped at 260px.
- `.dr-bubble--out` — Your message on `--bg-muted`, anchored to the trailing edge. `--ink` at 11.54:1.
- `.dr-sr` — The speaker's name, heard only by a screen reader. Nothing announces which edge a bubble hugs (`WCAG 1.3.1`).
- `.dr-bubble__time` — A real `<time datetime>` on its own line inside the bubble. 12.5/400 `--text-muted`: 5.95:1 on the incoming ground and 4.77:1 on the outgoing one.

## Variants

### Incoming and outgoing

```html
<ul class="dr dr-list dr-list--snug" aria-label="Messages" style="width:341px;max-width:100%">
  <li class="dr-bubble dr-bubble--out"><span class="dr-sr">You:</span>Which entrance?<time class="dr-bubble__time" datetime="2026-08-16T09:36">9:36</time></li>
  <li class="dr-bubble dr-bubble--in"><span class="dr-sr">Andriy M.:</span>The one facing the playground. About 6 minutes out.<time class="dr-bubble__time" datetime="2026-08-16T09:38">9:38</time></li>
</ul>
```

The two grounds are 1.25:1 apart, which reads as one tone. *Who said it* is carried by the edge the bubble anchors to and by the hidden name, never by colour alone (`WCAG 1.4.1`). The tone step only keeps the thread from reading as loose paragraphs. A one-line bubble measures 134.8 × 60 and a two-line one 260 × 81.

### Composer

```html
<footer class="dr dr-actionbar" style="width:375px;max-width:100%">
  <div class="dr-search-row">
    <label class="dr-search">
      <span class="dr-sr">Message</span>
      <input type="text" placeholder="Message">
    </label>
    <button class="dr-btn dr-btn--primary dr-btn--icon" type="button" aria-label="Send message"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19.5V5"/><path d="M5.5 11.5L12 5l6.5 6.5"/></svg></button>
  </div>
</footer>
```

The composer is built from parts that already exist: the action bar, a search row, a field (289.4 × 44, `--ink` on `--media` at 13.33:1) and the 44px Send disc. Send is the screen's one green control. The field takes no focus ring, because the caret carries `WCAG 2.4.7`.

## When to use

The chat thread is the one place in the product where two people write to each other. It stands on `chat`, the client's thread with the operator, opened from *Chat with the operator* in the tracking screen's contact [sheet](sheet.html#variant-action-sheet), and on `chat-client` and the per-service chat files. It is not a variant of the [message block](message-block.html). That one is a centred state notice with a mark, a title and actions, and it shares only the word *message* with this one.

No bubble is green. A messaging UI normally spends its accent on the outgoing side. Here green is never spent inside card UI, and a thread repeats, so the ~5% budget would be gone by the fourth message. Messages are a sequence, so they sit at `--snug`: 8 apart, not the list's 28.

The messages are what the client and the operator write. The system's own words are the field's placeholder, *Message*, and the Send button's accessible name, *Send message*. The hidden speaker names are *You:* and the operator's name, *Andriy M.:*. In system copy he is always the *operator*, never the pilot.

Sources: DESIGN.md § Message bubble and thread · inventory.md § 1 Message thread · microcopy.md § call (A12) · ui/kit.html § Chat thread

## Rule

```html
<section class="dr dr-stack dr-thread" aria-label="Thread" style="width:341px;max-width:100%">
  <p class="dr-note">Today</p>
  <ul class="dr-list dr-list--snug" aria-label="Messages">
    <li class="dr-bubble dr-bubble--out"><span class="dr-sr">You:</span>The courtyard gate is locked — the code is 4471.<time class="dr-bubble__time" datetime="2026-08-16T09:34">9:34</time></li>
    <li class="dr-bubble dr-bubble--in"><span class="dr-sr">Andriy M.:</span>Got it. I'll land at the entrance and send the delivery photo.<time class="dr-bubble__time" datetime="2026-08-16T09:35">9:35</time></li>
  </ul>
</section>
```

A conversation between the client and the operator about one order, with each speaker named for assistive tech and each message timed.

## Anti-rule

```html
<ul class="dr dr-list dr-list--snug" aria-label="Messages" style="width:341px;max-width:100%">
  <li class="dr-bubble dr-bubble--in"><span class="dr-sr">DRON:</span>Your delivery photo is ready.<time class="dr-bubble__time" datetime="2026-08-16T10:12">10:12</time></li>
</ul>
```

A system event dressed as a message. A bubble is a person speaking. To tell the user that something happened, use the [alerts log](alerts-log.html) for the record and a [toast](toast.html) for the moment. For a state that fills a screen, use the [message block](message-block.html).
