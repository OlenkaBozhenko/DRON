/* DRON - design-system/docs/docs.js
   Two behaviours, both chrome:
   1. the theme switch - writes data-theme on <html>, the attribute the product's
      dark build keys off, and remembers it per viewer;
   2. the anatomy pins - each legend item names a selector; the part it matches
      inside the LIVE specimen is measured and a numbered pin is placed on it.
      Nothing is drawn from coordinates written by hand, so a pin follows the
      component when the component changes. A selector that matches nothing is
      marked in the legend instead of being pinned somewhere wrong. */
(function () {
  'use strict';
  var root = document.documentElement;

  function setTheme(t) {
    if (t === 'dark') root.setAttribute('data-theme', 'dark'); else root.removeAttribute('data-theme');
    document.querySelectorAll('[data-theme-btn]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-theme-btn') === t));
    });
    try { localStorage.setItem('dsd-theme', t); } catch (e) {}
    requestAnimationFrame(pinAll);
  }

  function pinAll() {
    document.querySelectorAll('.dsd-anatomy').forEach(function (an) {
      var stage = an.querySelector('.dsd-stage');
      var plate = stage.querySelector('.dsd-plate');
      stage.querySelectorAll('.dsd-pin, .dsd-hl').forEach(function (n) { n.remove(); });
      var box = stage.getBoundingClientRect();
      var seen = [];  // a part that shares an element with an earlier one steps right
      an.querySelectorAll('.dsd-parts li').forEach(function (li, i) {
        var el = null;
        try { el = plate.querySelector(li.getAttribute('data-sel')); } catch (e) {}
        if (!el && plate.firstElementChild && plate.firstElementChild.matches(li.getAttribute('data-sel'))) el = plate.firstElementChild;
        li.classList.toggle('is-missing', !el);
        if (!el) return;
        var r = el.getBoundingClientRect();
        var pin = document.createElement('span');
        pin.className = 'dsd-pin';
        pin.setAttribute('aria-hidden', 'true');
        pin.textContent = String(i + 1);
        var step = seen.filter(function (x) { return x === el; }).length;
        seen.push(el);
        pin.style.left = (r.left - box.left + step * 26) + 'px';
        pin.style.top = (r.top - box.top) + 'px';
        stage.appendChild(pin);
        li.onmouseenter = li.onfocus = function () {
          var hl = document.createElement('span');
          hl.className = 'dsd-hl';
          var rr = el.getBoundingClientRect(), bb = stage.getBoundingClientRect();
          hl.style.left = (rr.left - bb.left) + 'px'; hl.style.top = (rr.top - bb.top) + 'px';
          hl.style.width = rr.width + 'px'; hl.style.height = rr.height + 'px';
          stage.appendChild(hl);
        };
        li.onmouseleave = li.onblur = function () { stage.querySelectorAll('.dsd-hl').forEach(function (n) { n.remove(); }); };
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-theme-btn]').forEach(function (b) {
      b.addEventListener('click', function () { setTheme(b.getAttribute('data-theme-btn')); });
    });
    var t = 'light';
    try { t = localStorage.getItem('dsd-theme') || 'light'; } catch (e) {}
    setTheme(t);
    // Specimens in the index are previews: keep them out of the tab order.
    document.querySelectorAll('.dsd-card__view a, .dsd-card__view button, .dsd-card__view input, .dsd-card__view [tabindex]')
      .forEach(function (n) { n.setAttribute('tabindex', '-1'); });
    filterSide();
  });

  // Overview sidebar: the filter narrows every group to the links whose name
  // holds the typed text, opens the groups that still match, and says so when
  // nothing does. On a narrow screen the groups start closed, so the sidebar
  // does not push the page below the fold.
  function filterSide() {
    var input = document.querySelector('[data-filter]');
    if (!input) return;
    var groups = document.querySelectorAll('.dsd-side__grp');
    var none = document.querySelector('.dsd-side__none');
    if (window.matchMedia('(max-width: 900px)').matches) {
      groups.forEach(function (g) { g.removeAttribute('open'); });
    }
    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase(), any = false;
      groups.forEach(function (g) {
        var hit = false;
        g.querySelectorAll('li').forEach(function (li) {
          var ok = !q || li.textContent.toLowerCase().indexOf(q) > -1;
          li.hidden = !ok;
          if (ok) hit = true;
        });
        g.hidden = !hit;
        if (q && hit) g.setAttribute('open', '');
        if (hit) any = true;
      });
      none.hidden = any;
    });
  }
  window.addEventListener('load', pinAll);
  window.addEventListener('resize', function () { requestAnimationFrame(pinAll); });
}());
