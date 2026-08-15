/* ═══════════════════════════════════════════════════════════════════════════
   DRON — the kit's one script.

   The kit is CSS. This file exists because exactly one component in it cannot
   be built out of CSS alone: THE PICKER DRAWER. A floating surface that opens,
   traps focus, makes the screen behind it unreachable and gives the focus back
   on close is behaviour, not appearance — and behaviour written four times in
   four pages is four chances to drift. So it is written once, here, and the
   pages that carry a picker link it.

   THE RULE IT SERVES (designer, 2026-08-16):
     ≤ 6 options → the list rises as a DRAWER from the bottom edge — this file.
     ≥ 7 options → the tap PUSHES A NEW SCREEN — an <a href>, no script at all.
   A row that leads to a screen is `.dr-field--action` with an `href`; a row
   that opens a drawer is `.dr-field--action` with `aria-controls`. The markup
   says which, and this file only ever answers to the second.

   WHAT IT DOES NOT DO: it does not open the row. The row is a real <button>,
   so Enter, Space, the tab order and the accessible name come from the element
   (`WCAG 4.1.2`). This adds the modal contract and lands the pick.

   MARKUP CONTRACT — a page carrying a drawer holds, inside `.wf-frame`:
     <button class="dr-field dr-field--action" aria-haspopup="dialog"
             aria-expanded="false" aria-controls="ID"> … </button>
     <div class="dr-scrim dr-scrim--picker" data-scrim hidden></div>
     <section class="dr-sheet dr-sheet--picker" id="ID" role="dialog"
              aria-modal="true" aria-labelledby="ID-title" hidden> … </section>
   One scrim serves every drawer on the page: only one row was tapped.

   AN OPTION IS A <button> WHEN IT IS A VALUE and an <a> when it is a route.
   The mode picker's options leave the screen, so they navigate and nothing is
   written back into the row; every other picker sets the row's value, moves
   `aria-current`, and closes.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var frame = document.querySelector('.wf-frame');
  if (!frame) return;

  var scrim = frame.querySelector('[data-scrim]'),
      rows  = frame.querySelectorAll('.dr-field--action[aria-controls]');
  if (!scrim || !rows.length) return;

  /* everything the drawer must switch off while it is up: the frame's own
     children, minus the drawer layer itself */
  var behind = [].slice.call(frame.children).filter(function (el) {
    return !el.classList.contains('dr-sheet') && el !== scrim;
  });

  var openRow = null;

  function sheetOf(row) {
    return document.getElementById(row.getAttribute('aria-controls'));
  }

  function open(row) {
    var sheet = sheetOf(row);
    if (!sheet) return;
    openRow = row;
    row.setAttribute('aria-expanded', 'true');
    scrim.hidden = false;
    sheet.hidden = false;
    /* aria-modal is a promise made to assistive tech; inert is what keeps it
       for the pointer and the tab key too */
    behind.forEach(function (el) { el.inert = true; });
    var current = sheet.querySelector('.dr-picker__item[aria-current="true"]')
               || sheet.querySelector('.dr-picker__item');
    if (current) current.focus();
  }

  function close() {
    if (!openRow) return;
    var row = openRow, sheet = sheetOf(row);
    openRow = null;
    behind.forEach(function (el) { el.inert = false; });
    if (sheet) sheet.hidden = true;
    scrim.hidden = true;
    row.setAttribute('aria-expanded', 'false');
    row.focus();
  }

  rows.forEach(function (row) {
    var sheet = sheetOf(row);
    if (!sheet) return;

    row.addEventListener('click', function () { open(row); });

    var items = sheet.querySelectorAll('.dr-picker__item'),
        value = row.querySelector('.dr-field__value'),
        exit  = sheet.querySelector('[data-close]');

    items.forEach(function (item) {
      /* a route leaves the screen — nothing to write back, nothing to close */
      if (item.tagName === 'A') return;
      item.addEventListener('click', function () {
        items.forEach(function (other) { other.removeAttribute('aria-current'); });
        item.setAttribute('aria-current', 'true');
        /* .dr-picker__label, never the item's own textContent: an option may
           carry artwork, and a wordmark drawn with SVG <text> lands in
           textContent — "VISAVisa •••• 4921" is what the naive read gives. */
        if (value) value.textContent = (item.querySelector('.dr-picker__label') || item).textContent.trim();
        close();
      });
    });

    if (exit) exit.addEventListener('click', close);
  });

  scrim.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (!openRow) return;
    if (e.key === 'Escape') { close(); return; }
    if (e.key !== 'Tab') return;
    /* the trap: while the drawer is up it IS the tab order */
    var stops = sheetOf(openRow).querySelectorAll('button, a[href]'),
        first = stops[0], last = stops[stops.length - 1];
    if (!stops.length) return;
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}());
