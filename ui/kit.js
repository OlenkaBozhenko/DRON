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

  /* TWO SHAPES MAY OPEN A DRAWER, and the second arrived 2026-08-16 (rev 129):
     the action bar's own CTA. The designer on `order-review`: «по кліку на pay
     має відкриватись дровер а не сторінка». `.dr-btn[aria-controls]` is added
     and NOT the obvious `[aria-haspopup="dialog"][aria-controls]` — that would
     also catch `listings-filters`' date opener, which is a .sr-only RADIO with
     both attributes and its own page script, and two handlers on one control is
     a fight. `.dr-btn` matched nothing before this pass (swept: 0). */
  var scrim = frame.querySelector('[data-scrim]'),
      rows  = frame.querySelectorAll('.dr-field--action[aria-controls], .dr-btn[aria-controls]');
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
    /* focus lands inside the drawer (`WCAG 2.4.3`): the current option if the
       drawer holds a list of values, otherwise its first control — the pay
       drawer's options are buttons, not .dr-picker__item rows. */
    var current = sheet.querySelector('.dr-picker__item[aria-current="true"]')
               || sheet.querySelector('.dr-picker__item')
               || sheet.querySelector('button, a[href]');
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

/* ═══════════════════════════════════════════════════════════════════════════
   THE ONSCREEN KEYBOARD — the kit's second behaviour, and the first that is
   not the product's own. The designer, 2026-08-16, on `rate`'s review field:
   «коли юзер вводить текст показуй дровер з клавіатурою відповідно до HIG».

   IT IS DRAWN BY THE SCRIPT AND NOT BY THE PAGE, deliberately. In a real
   product the keyboard is not in the app's DOM at all — the system puts it
   over the app. A page that had to carry 30-odd keys in its markup would be
   claiming the app owns them, and 40 pages of that is 40 chances to drift.
   So no page markup changes: any field, on any screen, gets the same picture.

   WHAT IS REAL AND WHAT IS A PICTURE. The plane is `aria-hidden`, has no tab
   stop and no pointer target — `WCAG 2.5.8` and `4.1.2` never engage, which
   is correct, because the system keyboard is not in the app's accessibility
   tree either. The accessory bar's `Done` is a real <button>: `HIG · Onscreen
   keyboards` notes a MULTILINE field's Return inserts a newline and cannot
   dismiss, so the app owes the user a dismissal it can see.

   WHAT HAPPENS TO THE BOTTOM BAR — the designer's call, put to her with the
   measurement: with the keyboard up, `Submit review` and `Book again` sit
   entirely behind drawn author content while still holding their place in the
   tab order, and `WCAG 2.4.11 Focus Not Obscured (Minimum)` fails the moment
   focus reaches one. `[hidden]` takes them out of the tree; `Done` brings them
   back. A field that lives INSIDE the bar is the exception — a chat composer
   is the field being typed into, so its bar rides above the keys instead.

   Escape dismisses as well, which costs nothing and is what a desktop reader
   of this prototype will try first.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var frame = document.querySelector('.wf-frame');
  if (!frame) return;

  var ROWS = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['⇧','z','x','c','v','b','n','m','⌫'],
    ['123','☺','space','return']
  ];

  var kb = null, bar = null, main = null, field = null, barRides = false;

  function build() {
    var el = document.createElement('div');
    el.className = 'dr-kb';
    el.hidden = true;

    var acc = document.createElement('div');
    acc.className = 'dr-kb__bar';
    var done = document.createElement('button');
    done.type = 'button';
    done.className = 'dr-kb__done';
    done.textContent = 'Done';
    acc.appendChild(done);

    var plane = document.createElement('div');
    plane.className = 'dr-kb__plane';
    plane.setAttribute('aria-hidden', 'true');

    var quick = document.createElement('div');
    quick.className = 'dr-kb__quick';
    quick.appendChild(document.createElement('span'));
    quick.appendChild(document.createElement('span'));
    quick.appendChild(document.createElement('span'));
    plane.appendChild(quick);

    var rows = document.createElement('div');
    rows.className = 'dr-kb__rows';
    ROWS.forEach(function (keys, i) {
      var row = document.createElement('div');
      row.className = 'dr-kb__row' + (i === 1 ? ' dr-kb__row--mid' : '');
      keys.forEach(function (k) {
        var key = document.createElement('span');
        key.className = 'dr-kb__key'
          + (k === 'space' ? ' dr-kb__key--space' : '')
          + (k === 'return' ? ' dr-kb__key--return' : '')
          + (k === '123' || k === '☺' || k === '⇧' || k === '⌫' ? ' dr-kb__key--mod' : '');
        key.textContent = k === 'space' ? '' : k;
        row.appendChild(key);
      });
      rows.appendChild(row);
    });
    plane.appendChild(rows);

    el.appendChild(acc);
    el.appendChild(plane);
    frame.appendChild(el);

    done.addEventListener('click', function () { dismiss(true); });
    return el;
  }

  function isField(el) {
    return !!el && (el.tagName === 'TEXTAREA'
      || (el.tagName === 'INPUT' && /^(text|email|tel|search|url|number|password)$/.test(el.type)));
  }

  function show(el) {
    if (!kb) kb = build();
    field = el;
    bar = frame.querySelector('.dr-actionbar');
    main = frame.querySelector('.dr-main');
    barRides = !!(bar && bar.contains(el));
    if (bar && !barRides) bar.hidden = true;
    if (bar && barRides) bar.style.marginBottom = 'var(--h-kb)';
    kb.hidden = false;
    /* THE CONTENT AREA TAKES THE KEYBOARD'S FRAME, which is the whole of what
       `HIG · Onscreen keyboards` asks an app to do: it does not draw over the
       content, the content gets smaller. Without this the field is simply
       overlaid — measured 180.2 of it behind the keys on `rate`.
       WHAT IT BUYS, AND WHAT IT DOES NOT: the scrollport becomes 100.8 → 476.2
       = 375.4 against a 382 field, so the field misses standing whole by 6.6.
       The zone above it scrolls off and the last 6.6 scrolls inside the port;
       nothing is hidden and nothing is unreachable. Reported rather than
       fixed by shrinking the field, which is the designer's call to make. */
    if (main) main.style.marginBottom = 'calc(var(--h-kb) + var(--h-control))';
    if (el.scrollIntoView) el.scrollIntoView({ block: 'nearest' });
  }

  function dismiss(blur) {
    if (!kb || kb.hidden) return;
    kb.hidden = true;
    if (bar) { bar.hidden = false; bar.style.marginBottom = ''; }
    if (main) { main.style.marginBottom = ''; main = null; }
    if (blur && field) field.blur();
    field = null; bar = null; barRides = false;
  }

  frame.addEventListener('focusin', function (e) {
    if (isField(e.target)) show(e.target);
    else if (kb && !kb.hidden && !kb.contains(e.target)) dismiss(false);
  });

  frame.addEventListener('focusout', function (e) {
    /* leaving for anywhere that is neither another field nor the accessory bar */
    setTimeout(function () {
      var a = document.activeElement;
      if (!isField(a) && (!kb || !kb.contains(a))) dismiss(false);
    }, 0);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && kb && !kb.hidden) dismiss(true);
  });
})();
