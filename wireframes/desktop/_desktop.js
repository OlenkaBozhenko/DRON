/* wireframes/desktop/_desktop.js - TEMPORARY (2026-10-18)
   THE PROGRESS FOLLOWS THE FLIGHT (the designer: «тут має змінюватись поки дрон
   летить»). On a tracking page the drone flies the route (.dk-flyer, _desktop-wait.css);
   while it flies the rail stays on its step and the ETA counts down, and when it lands
   the rail moves to the next step, then to Done. The words are the rail's own labels.
   Reduced motion: the drone does not fly, so the page stays as built. */
(function () {
  'use strict';
  var flyer = document.querySelector('.dk-flyer');
  var rail = document.querySelector('.dk-side .dr-rail');
  if (!flyer || !rail) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var steps = [].slice.call(rail.querySelectorAll('.dr-rail__step'));
  var CHECK = '<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg>';
  var DOT = '<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.4"/></svg>';
  var rows = [].slice.call(document.querySelectorAll('.dk-side .dr-rows__row'));
  function row(key) {
    for (var i = 0; i < rows.length; i++) {
      var k = rows[i].querySelector('.dr-rows__key');
      if (k && k.textContent.trim() === key) return rows[i].querySelector('.dr-rows__val');
    }
    return null;
  }
  var eta = row('ETA'), status = row('Status');
  var pill = document.querySelector('.dk-status');
  var who = pill ? pill.textContent.replace(/^\s*Live\s*/, '').split('·')[0].trim() : '';

  function label(i) { return steps[i].querySelector('.dr-rail__lbl').textContent.trim(); }
  function go(cur) {
    rail.className = rail.className.replace(/\bdr-rail--at\d\b/, 'dr-rail--at' + (cur + 1));
    steps.forEach(function (li, i) {
      var node = li.querySelector('.dr-node'), lbl = li.querySelector('.dr-rail__lbl');
      node.className = 'dr-node' + (i < cur ? ' dr-node--done' : i === cur ? ' dr-node--now' : '');
      node.innerHTML = i < cur ? CHECK : i === cur ? DOT : '';
      lbl.classList.toggle('dr-rail__lbl--now', i === cur);
      if (i === cur) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current');
    });
    if (status) status.textContent = label(cur);
    if (eta) eta.textContent = cur >= steps.length - 1 ? 'Done' : 'Arrived';
    if (pill) pill.innerHTML = '<span class="dr-live">Live</span> ' + who + ' · ' + label(cur);
  }

  var start = steps.findIndex(function (li) { return li.hasAttribute('aria-current'); });
  if (start < 0) return;
  var minutes = eta ? parseInt((eta.textContent.match(/\d+/) || ['6'])[0], 10) : 6;
  var dur = parseFloat(getComputedStyle(flyer).animationDuration) * 1000 || 7000;
  /* the ETA counts down while the drone is in the air */
  var t0 = Date.now(), tick = setInterval(function () {
    var left = Math.max(1, Math.round(minutes * (1 - (Date.now() - t0) / dur)));
    if (eta) eta.textContent = '~' + left + ' min';
    if (pill) pill.innerHTML = pill.innerHTML.replace(/~\d+ min/, '~' + left + ' min');
  }, 500);
  flyer.addEventListener('animationend', function () {
    clearInterval(tick);
    if (start + 1 < steps.length) go(start + 1);
    if (start + 2 < steps.length) setTimeout(function () { go(start + 2); }, 2500);
  });
}());

/* THE SLIDER TURNS BY MOUSE (the designer, 2026-10-18: «добав тут стрілки я ж не можу
   вайпати»). Previous / Next scroll the slider one slide; the pager follows from kit.js's
   own scroll handler. At either end the arrow stays visible and is marked unavailable. */
(function () {
  'use strict';
  var slider = document.querySelector('.dk-entry .dr-slider');
  var btns = [].slice.call(document.querySelectorAll('.dk-slidenav'));
  if (!slider || !btns.length) return;
  var win = slider.closest('.dk-entry');
  function place() {
    var art = slider.querySelector('.dr-slide__art');
    if (!art) return;
    var a = art.getBoundingClientRect(), w = win.getBoundingClientRect();
    win.style.setProperty('--dk-slidenav-top', (a.top - w.top + win.scrollTop + a.height / 2) + 'px');
  }
  function state() {
    var max = slider.scrollWidth - slider.clientWidth - 2;
    btns.forEach(function (b) {
      var end = b.getAttribute('data-slide') < 0 ? slider.scrollLeft <= 2 : slider.scrollLeft >= max;
      if (end) b.setAttribute('aria-disabled', 'true'); else b.removeAttribute('aria-disabled');
    });
  }
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      if (b.getAttribute('aria-disabled') === 'true') return;
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      slider.scrollBy({ left: slider.clientWidth * b.getAttribute('data-slide'), behavior: reduce ? 'auto' : 'smooth' });
    });
  });
  slider.addEventListener('scroll', state, { passive: true });
  window.addEventListener('resize', place);
  window.addEventListener('load', place);
  place(); state();
}());

/* JOB GROUPS AS TABS (the designer, 2026-10-19: «в один ряд з Jobs»). The group pills
   stand in one row with the Jobs title; a pill shows its group and hides the other, as
   the phone's group tabs do. aria-current marks the group on show. */
(function () {
  'use strict';
  var bar = document.querySelector('[data-dk-groups]');
  if (!bar) return;
  var tabs = [].slice.call(bar.querySelectorAll('a[href^="#"]'));
  function show(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      var group = document.querySelector(t.getAttribute('href')).closest('.dk-jobs-group');
      group.hidden = !on;
      if (on) t.setAttribute('aria-current', 'true'); else t.removeAttribute('aria-current');
    });
  }
  tabs.forEach(function (t) {
    t.addEventListener('click', function (e) { e.preventDefault(); show(t); });
  });
}());

/* TOASTS, AS ON THE PHONE (the designer, 2026-10-19: «он як вискакувало увідомлення - так
   зроби»). A [data-toast] control pops its words up over the content of its window, just
   above the window's foot, for 4 s; a click dismisses it. A toast that is the page's own
   state ([data-autoshow], the checklist error) pops up the same way when the page opens.
   The phone's shell does this for phone frames; the desktop twins do not load it. */
(function () {
  'use strict';
  function place(t, win) {
    var foot = win.querySelector(':scope > .dk-foot');
    t.style.bottom = ((foot ? win.getBoundingClientRect().bottom - foot.getBoundingClientRect().top : 0) + 16) + 'px';
  }
  function pop(t, win) {
    place(t, win);
    if (t._hide) clearTimeout(t._hide);
    void t.offsetWidth;
    t.classList.add('is-on');
    t._hide = setTimeout(function () { t.classList.remove('is-on'); }, 4000);
    t.onclick = function () { clearTimeout(t._hide); t.classList.remove('is-on'); };
  }
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-toast]');
    if (!el) return;
    var win = el.closest('.dk-window, .dk-panel');
    if (!win) return;
    e.preventDefault();
    var t = win.querySelector(':scope > .dk-toast:not([data-autoshow])');
    if (!t) {
      t = document.createElement('p');
      t.className = 'dr-toast dk-toast';
      t.setAttribute('role', 'status');
      win.appendChild(t);
    }
    t.textContent = el.getAttribute('data-toast');
    pop(t, win);
  });
  [].forEach.call(document.querySelectorAll('.dk-toast[data-autoshow]'), function (t) {
    var win = t.closest('.dk-window, .dk-panel');
    setTimeout(function () { pop(t, win); }, 400);
  });
}());

/* RATING STARS (the designer, 2026-10-19: «зроби щоб натискаючи цю зірочку вона ставала
   жовта»). A star sets the rating: it and every star before it fill, the rest empty, and
   it becomes the checked radio. Arrow keys move the rating, as a radio group should
   (WCAG 2.1.1). */
(function () {
  'use strict';
  [].forEach.call(document.querySelectorAll('.dr-stars, [role="radiogroup"]'), function (group) {
    var stars = [].slice.call(group.querySelectorAll('.dr-star'));
    if (!stars.length) return;
    function set(n, focus) {
      stars.forEach(function (s, i) {
        if (i <= n) s.setAttribute('data-on', ''); else s.removeAttribute('data-on');
        s.setAttribute('aria-checked', i === n ? 'true' : 'false');
        s.tabIndex = i === n ? 0 : -1;
      });
      if (focus) stars[n].focus();
    }
    var cur = stars.findIndex(function (s) { return s.getAttribute('aria-checked') === 'true'; });
    set(cur < 0 ? 0 : cur, false);
    stars.forEach(function (s, i) {
      s.addEventListener('click', function () { set(i, false); });
      s.addEventListener('keydown', function (e) {
        var k = e.key;
        if (k === 'ArrowRight' || k === 'ArrowUp') { e.preventDefault(); set(Math.min(stars.length - 1, i + 1), true); }
        if (k === 'ArrowLeft' || k === 'ArrowDown') { e.preventDefault(); set(Math.max(0, i - 1), true); }
      });
    });
  });
}());
