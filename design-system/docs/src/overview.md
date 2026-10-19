---
title: DRON design system and guidelines
description: How DRON speaks, the values it is built from, the components it is made of and the patterns they form.
---

# DRON design system and guidelines

The DRON design system holds everything a screen is made of and everything it says: the voice, the
tokens, the components and the patterns. It exists so that a client handing a job to a stranger with a
flying machine sees one calm, precise product on every screen, and so that anyone building a screen
starts from what is already decided and measured against HIG and WCAG.

## Tone of voice

How the product speaks. Every string is written and checked against these rules, and in trouble the
product is plain and accountable, never cheery. For more, see [Tone of voice](voice.html).

- card: [Principles](voice-principles.html) · voice-principles · Five rules every string is checked against.
- card: [Vocabulary](voice-vocabulary.html) · voice-vocabulary · One concept, one word: order, job, operator, issue.
- card: [Don't use](voice-don-t-use.html) · voice-dont · Clichés, cheer, exclamation marks and "successfully".
- card: [Microcopy](voice-microcopy.html) · voice-microcopy · Rules by element: buttons, errors, empty states, hints.

## Tokens

The values every component reads: colour, type, length, depth, motion, each named for its job and
measured in both themes. For more, see [Tokens](tokens.html).

- card: [Colour](tokens-colour.html) · tokens-colour · Warm surfaces, one green accent as a fill, every pair measured.
- card: [Typography](tokens-typography.html) · tokens-type · Ten steps in SF Pro, none below HIG's 11pt.
- card: [Length](tokens-length.html) · tokens-length · One ramp for space, radius and size, on an 8px grid.
- card: [Shadow and elevation](tokens-shadow-and-elevation.html) · tokens-shadow · Flat surfaces; depth only on what floats.
- card: [Motion](tokens-motion.html) · tokens-motion · The times and easings, and what reduced motion keeps.
- card: [Light and dark](tokens-light-and-dark.html) · tokens-themes · The semantic tier redrawn for the dark build.

## Motion

How DRON moves: three jobs (connect, status, answer), three durations, three curves, two distances, and the tone each state arrives in. Every page plays the motion it describes.

## Components

The bricks: 61 components, each drawn live by the stylesheet the product links, with its anatomy,
variants, states and rules. For more, see [Components](index.html).

- card: [Shell](index.html#g-shell) · comp-shell · The status bar, the nav bar, the tab bar and the action bar.
- card: [Actions](index.html#g-actions) · comp-actions · Buttons, the floating action, call controls.
- card: [Surfaces](index.html#g-surfaces) · comp-surfaces · Cards, rows, sheets, the finder, the map.
- card: [Progress](index.html#g-progress) · comp-progress · The progress rail and the pager.
- card: [States](index.html#g-states) · comp-states · Messages, outcomes, skeletons and the toast.
- card: [Media](index.html#g-media) · comp-media · The media well and the photo pile.
- card: [Forms](index.html#g-forms) · comp-forms · Fields, checkboxes, switches, pickers, upload.

## Patterns

The compositions of components that already repeat on three or more screens. Take one when a new
screen does a job an existing one already does. For more, see [Patterns](patterns.html).

- card: [Pushed screen](patterns.html#pushed-screen) · pat-pushed · Back, a title, zones and the decision at the bottom.
- card: [Tab root](patterns.html#tab-root) · pat-tabroot · One of the four tabs, with no back.
- card: [Whole-screen message](patterns.html#state-screen) · pat-state · Nothing to show, one way out.
- card: [Outcome with its record](patterns.html#outcome-summary) · pat-outcome · The fact, the receipt, the next step.
- card: [Waiting outcome](patterns.html#waiting-screen) · pat-waiting · A hand-off to Diia, the bank or Apple Pay.
- card: [Labelled detail rows](patterns.html#labelled-rows) · pat-rows · Facts grouped by topic, key and value.
- card: [Labelled card list](patterns.html#card-feed) · pat-cards · Records of one kind, one card each.
- card: [Balance first](patterns.html#balance-head) · pat-balance · One figure leads; the rest explains it.
