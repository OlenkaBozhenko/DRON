/* wireframes/desktop/_desktop.js - TEMPORARY (2026-10-18)
   THE PROGRESS FOLLOWS THE FLIGHT (the designer: «тут має змінюватись поки дрон
   летить»). On a tracking page the drone flies the route (.dr-flyer, _desktop-wait.css);
   while it flies the rail stays on its step and the ETA counts down, and when it lands
   the rail moves to the next step, then to Done. The words are the rail's own labels.
   Reduced motion: the drone does not fly, so the page stays as built. */
(function () {
  'use strict';
  var flyer = document.querySelector('.dr-flyer');
  var rail = document.querySelector('.dr-side .dr-rail');
  if (!flyer || !rail) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var steps = [].slice.call(rail.querySelectorAll('.dr-rail__step'));
  var CHECK = '<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 6"/></svg>';
  var DOT = '<svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.4"/></svg>';
  var rows = [].slice.call(document.querySelectorAll('.dr-side .dr-rows__row'));
  function row(key) {
    for (var i = 0; i < rows.length; i++) {
      var k = rows[i].querySelector('.dr-rows__key');
      if (k && k.textContent.trim() === key) return rows[i].querySelector('.dr-rows__val');
    }
    return null;
  }
  var eta = row('ETA'), status = row('Status');
  var pill = document.querySelector('.dr-livestatus');
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
  var slider = document.querySelector('.dr-entry .dr-slider');
  var btns = [].slice.call(document.querySelectorAll('.dr-slidenav'));
  if (!slider || !btns.length) return;
  var win = slider.closest('.dr-entry');
  function place() {
    var art = slider.querySelector('.dr-slide__art');
    if (!art) return;
    var a = art.getBoundingClientRect(), w = win.getBoundingClientRect();
    win.style.setProperty('--slidenav-top', (a.top - w.top + win.scrollTop + a.height / 2) + 'px');
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
      var group = document.querySelector(t.getAttribute('href')).closest('.dr-jobs-group');
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
    var foot = win.querySelector(':scope > .dr-foot');
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
    var win = el.closest('.dr-window, .dr-panel');
    if (!win) return;
    e.preventDefault();
    var t = win.querySelector(':scope > .dr-toast--window:not([data-autoshow])');
    if (!t) {
      t = document.createElement('p');
      t.className = 'dr-toast dr-toast--window';
      t.setAttribute('role', 'status');
      win.appendChild(t);
    }
    t.textContent = el.getAttribute('data-toast');
    pop(t, win);
  });
  [].forEach.call(document.querySelectorAll('.dr-toast--window[data-autoshow]'), function (t) {
    var win = t.closest('.dr-window, .dr-panel');
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

/* DROP ZONE FOR THE RESULT PHOTO (the designer, 2026-10-19: «зроби цю зону drag and drop,
   напиши які файли може загрузити … поки юзер не загрузить фото натискаючи підтвердити -
   сповіщення загрузи фото»). Photos dropped on the zone, or chosen with a click or Enter,
   appear as thumbnails under it, each with a remove control; Replace photo clears them and
   opens the chooser. Submit with no photo stays on the page and pops the toast instead. */
(function () {
  'use strict';
  var zone = document.querySelector('[data-drop]');
  if (!zone) return;
  var input = zone.querySelector('[data-drop-input]');
  var list = document.querySelector('[data-drop-list]');
  var replace = document.querySelector('[data-drop-replace]');
  var submit = document.querySelector('[data-needs-photo]');
  var files = [];
  var OK = /^image\/(jpeg|png|heic)$/;
  function render() {
    list.innerHTML = '';
    files.forEach(function (f, i) {
      var li = document.createElement('li');
      li.className = 'dr-drop__item';
      var img = document.createElement('img');
      img.alt = f.name;
      img.src = URL.createObjectURL(f);
      var rm = document.createElement('button');
      rm.type = 'button';
      rm.className = 'dr-drop__rm';
      rm.setAttribute('aria-label', 'Remove ' + f.name);
      rm.textContent = '×';
      rm.addEventListener('click', function (e) { e.stopPropagation(); files.splice(i, 1); render(); });
      li.appendChild(img);
      li.appendChild(rm);
      list.appendChild(li);
    });
    zone.querySelector('.dr-upload__action').textContent = files.length ? 'Add more photos' : 'Add photo';
    if (replace) replace.disabled = !files.length;
  }
  function add(fl) {
    [].forEach.call(fl, function (f) { if (OK.test(f.type) && f.size <= 10 * 1024 * 1024) files.push(f); });
    render();
    var t = zone.closest('.dr-window').querySelector(':scope > .dr-toast--window.is-on');
    if (t && files.length) t.classList.remove('is-on');
  }
  zone.addEventListener('click', function (e) { if (e.target !== input) input.click(); });
  zone.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); }
  });
  input.addEventListener('change', function () { add(input.files); input.value = ''; });
  ['dragenter', 'dragover'].forEach(function (t) {
    zone.addEventListener(t, function (e) { e.preventDefault(); zone.classList.add('dr-drop--over'); });
  });
  ['dragleave', 'drop'].forEach(function (t) {
    zone.addEventListener(t, function (e) { e.preventDefault(); zone.classList.remove('dr-drop--over'); });
  });
  zone.addEventListener('drop', function (e) { add(e.dataTransfer.files); });
  if (replace) replace.addEventListener('click', function () { files = []; render(); input.click(); });
  if (submit) submit.addEventListener('click', function (e) {
    if (files.length) return;
    e.preventDefault();
    var win = submit.closest('.dr-window');
    var t = win.querySelector(':scope > .dr-toast--window:not([data-autoshow])');
    if (!t) {
      t = document.createElement('p');
      t.className = 'dr-toast dr-toast--window';
      t.setAttribute('role', 'alert');
      win.appendChild(t);
    }
    t.textContent = submit.getAttribute('data-needs-photo');
    var foot = win.querySelector(':scope > .dr-foot');
    t.style.bottom = ((foot ? win.getBoundingClientRect().bottom - foot.getBoundingClientRect().top : 0) + 16) + 'px';
    if (t._hide) clearTimeout(t._hide);
    void t.offsetWidth;
    t.classList.add('is-on');
    t._hide = setTimeout(function () { t.classList.remove('is-on'); }, 4000);
    zone.focus();
  });
}());

/* COUNTDOWN (backlog B-5, rev 344; the designer, 2026-10-19: «words + a bar that empties»).
   The words count down once a second in step with .dr-countdown__fill, which empties in CSS
   over the same --time-10; at 0 they read "Offer expired". role="timer" keeps a screen reader
   from announcing every second. */
(function () {
  'use strict';
  [].forEach.call(document.querySelectorAll('[data-countdown]'), function (el) {
    var left = parseInt(el.getAttribute('data-countdown'), 10);
    var tick = setInterval(function () {
      left -= 1;
      el.textContent = left > 0 ? 'Expires in ' + left + 's' : 'Offer expired';
      if (left <= 0) clearInterval(tick);
    }, 1000);
  });
}());

/* ARRIVING FROM ITS OWN LOADING STATE (rev 345, DESIGN.md § Motion). A step's window rises
   in when it arrives (window.css). When the page before was this screen's -loading state,
   it is the same screen and the same window: it stays put (.dr-window--stay) and only the
   content fades in where the placeholders stood. */
(function () {
  'use strict';
  var win = document.querySelector('.dr-window');
  if (!win || !document.referrer) return;
  var name = function (u) { return u.split('?')[0].split('#')[0].split('/').pop(); };
  var here = name(location.pathname), ref = name(document.referrer);
  var strip = function (n) { return n.replace(/-loading(?=[-.])/, ''); };
  if (/-loading/.test(ref) && !/-loading/.test(here) && strip(ref) === strip(here)) win.classList.add('dr-window--stay');
}());
