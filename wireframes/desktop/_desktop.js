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
