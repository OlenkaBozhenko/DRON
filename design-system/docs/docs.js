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
    var ti = document.querySelector('[data-theme-toggle]');
    if (ti) ti.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    try { localStorage.setItem('dsd-theme', t); } catch (e) {}
    requestAnimationFrame(function () { pinAll(); resolveTokens(); });
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
    var ti = document.querySelector('[data-theme-toggle]');
    if (ti) ti.addEventListener('click', function () { setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'); });
    var t = 'light';
    try { t = localStorage.getItem('dsd-theme') || 'light'; } catch (e) {}
    setTheme(t);
    // Specimens in the index are previews: keep them out of the tab order.
    document.querySelectorAll('.dsd-card__view a, .dsd-card__view button, .dsd-card__view input, .dsd-card__view [tabindex]')
      .forEach(function (n) { n.setAttribute('tabindex', '-1'); });
    filterSide();
    resolveTokens();
    burger();
  });

  // Token pages: the browser reads each value in the theme now showing, so the
  // table needs no server and follows the theme switch. A colour is read off its
  // own swatch (color-mix included) and an ink also gets its contrast against
  // the page and the card, by the WCAG luminance formula.
  function rgbOf(str) {
    var m = str.match(/color\(srgb ([\d.]+) ([\d.]+) ([\d.]+)/);
    if (m) return [m[1] * 255, m[2] * 255, m[3] * 255];
    m = str.match(/rgba?\(([\d.]+),?\s*([\d.]+),?\s*([\d.]+)/);
    return m ? [+m[1], +m[2], +m[3]] : null;
  }
  function hex(c) {
    return '#' + c.map(function (v) { return ('0' + Math.round(v).toString(16)).slice(-2); }).join('').toUpperCase();
  }
  function lum(c) {
    var a = c.map(function (v) { v /= 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  }
  function ratio(a, b) {
    var x = lum(a), y = lum(b);
    return ((Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05)).toFixed(2) + ':1';
  }
  function probe(name) {
    var s = document.createElement('span');
    s.style.background = 'var(' + name + ')';
    document.body.appendChild(s);
    var c = rgbOf(getComputedStyle(s).backgroundColor);
    s.remove();
    return c;
  }
  function resolveTokens() {
    var rows = document.querySelectorAll('tr[data-tok]');
    if (!rows.length) return;
    var page = probe('--bg-page'), card = probe('--bg-surface');
    var root = getComputedStyle(document.documentElement);
    rows.forEach(function (tr) {
      var name = tr.getAttribute('data-tok'), val = tr.querySelector('[data-val]'), r = tr.querySelector('[data-ratio]');
      if (tr.hasAttribute('data-colour')) {
        var c = rgbOf(getComputedStyle(tr.querySelector('[data-sw]')).backgroundColor);
        val.textContent = c ? hex(c) : root.getPropertyValue(name).trim();
        if (tr.hasAttribute('data-ink') && c && page && card) r.textContent = ratio(c, page) + ' / ' + ratio(c, card);
      } else {
        val.textContent = root.getPropertyValue(name).trim();
      }
    });
  }

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
    // A word matches the start of a word in the entry's name or in its search
    // words (description, classes, token names, sub-headings), and a plural
    // matches its singular: "buttons" finds Button, "green" finds Colour.
    function stem(w) { return w.length > 3 ? w.replace(/(es|s)$/, '') : w; }
    function words(t) { return t.toLowerCase().replace(/[^a-z0-9.-]+/g, ' ').split(' ').filter(Boolean); }
    function matches(li, qs) {
      var hay = words(li.textContent + ' ' + (li.getAttribute('data-keys') || ''));
      return qs.every(function (q) {
        return hay.some(function (w) { return w.indexOf(q) === 0 || w.replace(/^[.-]+/, '').indexOf(q) === 0 || stem(w) === q; });
      });
    }
    input.addEventListener('input', function () {
      var raw = input.value.trim(), any = false;
      var qs = words(raw).map(stem);
      groups.forEach(function (g) {
        var hit = false, ul = g.querySelector('ul');
        var lis = [].slice.call(ul.children);
        lis.forEach(function (li, i) { if (!li.hasAttribute('data-i')) li.setAttribute('data-i', i); });
        lis.forEach(function (li) {
          var ok = !qs.length || matches(li, qs);
          li.hidden = !ok;
          // a word in the name itself ranks above a word found only in the description
          li.setAttribute('data-rank', qs.length && ok && words(li.textContent).some(function (w) {
            return qs.some(function (q) { return w.indexOf(q) === 0; }); }) ? 0 : 1);
          if (ok) hit = true;
        });
        lis.sort(function (a, b) {
          return qs.length ? (a.getAttribute('data-rank') - b.getAttribute('data-rank')) || (a.getAttribute('data-i') - b.getAttribute('data-i'))
                           : a.getAttribute('data-i') - b.getAttribute('data-i');
        }).forEach(function (li) { ul.appendChild(li); });
        g.hidden = !hit;
        if (qs.length && hit) g.setAttribute('open', '');
        if (hit) any = true;
      });
      none.hidden = any;
    });
    // The overview's own search (phone): the same matching, the hits listed in the
    // page under the field, each with the group it belongs to; nothing typed, no list.
    var page = document.querySelector('[data-filter-page]');
    if (!page) return;
    var list = document.getElementById('dsd-ov-results'), nope = document.querySelector('.dsd-ov-none');
    page.addEventListener('input', function () {
      var qs = words(page.value.trim()).map(stem);
      list.innerHTML = '';
      if (!qs.length) { list.hidden = true; nope.hidden = true; return; }
      var hits = [];
      groups.forEach(function (g) {
        var name = g.querySelector('summary').textContent;
        g.querySelectorAll('li').forEach(function (li) {
          if (!matches(li, qs)) return;
          var rank = words(li.textContent).some(function (w) { return qs.some(function (q) { return w.indexOf(q) === 0; }); }) ? 0 : 1;
          hits.push({ rank: rank, a: li.querySelector('a'), group: name });
        });
      });
      hits.sort(function (a, b) { return a.rank - b.rank; }).slice(0, 12).forEach(function (h) {
        var li = document.createElement('li'), a = document.createElement('a'), sm = document.createElement('small');
        a.href = h.a.getAttribute('href');
        a.textContent = h.a.textContent;
        sm.textContent = h.group;
        a.appendChild(sm);
        li.appendChild(a);
        list.appendChild(li);
      });
      list.hidden = !hits.length;
      nope.hidden = !!hits.length;
    });
  }
  window.addEventListener('load', pinAll);
  window.addEventListener('resize', function () { requestAnimationFrame(pinAll); });
  // The burger (phone): the sidebar slides in as a drawer over a scrim. Escape,
  // the scrim, the burger again or a chosen link closes it; focus goes into the
  // drawer on open and back to the burger on close.
  function burger() {
    var btn = document.querySelector('[data-burger]'), side = document.getElementById('dsd-side');
    if (!btn || !side) return;
    var scrim = document.createElement('div');
    scrim.className = 'dsd-scrim';
    document.body.appendChild(scrim);
    function set(open) {
      document.documentElement.classList.toggle('dsd-open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      // the drawer turns visible on the next frame, and a hidden element cannot take focus
      if (open) setTimeout(function () { var f = side.querySelector('a'); if (f) f.focus(); }, 60); else btn.focus();
    }
    btn.addEventListener('click', function () { set(!document.documentElement.classList.contains('dsd-open')); });
    scrim.addEventListener('click', function () { set(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.documentElement.classList.contains('dsd-open')) set(false);
    });
    side.addEventListener('click', function (e) {
      if (e.target.closest('a') && document.documentElement.classList.contains('dsd-open')) document.documentElement.classList.remove('dsd-open');
    });
  }
}());

/* 3. MOTION DEMOS (rev 345). A specimen wrapped in [data-motion-demo] is played, not
   just shown: inside it a link does not navigate, a click moves aria-current /
   aria-pressed to the item clicked (so a selection's motion can be seen), and in a
   [data-motion-demo="replay"] specimen a click plays its animations again. The
   motion itself is the component's own CSS; this only gives it a trigger. */
(function () {
  'use strict';
  document.addEventListener('click', function (e) {
    var demo = e.target.closest('[data-motion-demo]');
    if (!demo) return;
    var link = e.target.closest('a');
    if (link) e.preventDefault();
    if (demo.getAttribute('data-motion-demo') === 'replay') {
      demo.getAnimations({ subtree: true }).forEach(function (a) { a.cancel(); a.play(); });
      return;
    }
    var item = e.target.closest('[aria-current], [aria-pressed]');
    var sib = item && item.parentElement;
    if (!item && link && link.parentElement.querySelector('[aria-current]')) { item = link; sib = link.parentElement; }
    if (!item) return;
    var attr = sib.querySelector('[aria-pressed]') ? 'aria-pressed' : 'aria-current';
    [].forEach.call(sib.children, function (c) {
      if (attr === 'aria-pressed') c.setAttribute('aria-pressed', c === item ? 'true' : 'false');
      else if (c === item) c.setAttribute('aria-current', 'true'); else c.removeAttribute('aria-current');
    });
  });
}());
