---
title: Patterns · DRON Design System
description: The compositions of components that already repeat across DRON's screens, and when to take one instead of building from parts.
---

# Patterns

A component is one brick: a card, a button, a row panel. A **pattern** is a fixed composition of
bricks that already repeats on the screens: the frame of a pushed screen, the whole-screen message,
a list of cards under its label. Each one below is built only from components on the
[components page](index.html), carries no CSS and no class of its own, and is copied from a real
screen. The source of each is one file in `design-system/patterns/`.

**A pattern exists only where it already stands on three screens.** The build holds that rule:
every screen a pattern names must exist in `wireframes/` and still carry the classes the pattern is
made of, and the names must add up to three screens once a screen's `-empty`, `-error`, `-loading`
and service files are counted as that one screen. When a screen stops carrying a pattern, the build
fails until the pattern or the screen is put right. A composition found on one or two screens stays
in those screens and is not drawn here.

## Take the pattern when

- **The new screen does a job an existing screen already does.** Arrived from elsewhere and ends in
  a decision: [Pushed screen](#pushed-screen). One of the four tabs: [Tab root](#tab-root). Nothing to
  show: [Whole-screen message](#state-screen). Take the pattern's markup, keep its order, its zone
  labels and where its actions go, and change only the words and the data.
- **You would otherwise choose the order of parts yourself.** The pattern has already settled it:
  outcome before record, label before panel, the primary above the secondaries, the exit inside the
  message or in the action bar but never both.

## Build from components when

- **No pattern does the screen's job.** Build it from the components, and if the same composition
  then reaches three screens it becomes a pattern here.
- **Only part of the screen changes.** One zone failing is a [Message block](message-block.html) in
  that zone, not a whole-screen message; one fact is a note, not a panel.
- **The pattern almost fits.** Do not bend a pattern with a modifier or an inline style. A pattern
  has no CSS to bend; a change of look is a change to a component, made in
  `design-system/components/` and shown on every screen that uses it.

## Looked for and not found

Three compositions were looked for and stand on fewer than three screens, so they are not patterns:

- **A list header with a filter.** The finder with its filter drawer stands on `listings` only; the
  in-page tabs over a list stand on `operator-listings` and `time-slot`. Two screens.
- **The search home.** It is one screen, and it is the [Finder](finder.html) component.
- **The call.** It stands on three screens but is one component, the [Call surface](call-surface.html).
