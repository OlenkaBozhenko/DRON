/* wireframes/desktop/_arrive.js - HOW A SCREEN ARRIVES (rev 346; animations/state-tone.md).
   Loaded on every desktop page. It only sets classes; the motion is in design-system
   (window.css, flight.css), in the tone of each state's words.
   1. The same screen in another state (payment -> payment-error, withdraw-loading ->
      withdraw-sent): the window stays (.dr-window--stay) and its content arrives in the new
      state's tone: --arrive-error, --arrive-success, or the plain fade (empty, loading, back
      to the form). The note on the map takes --arrive-error / --arrive-empty.
   2. A window opened from the list on the right rail comes in from that side
      (.dr-window--from-end). The click leaves a mark naming the page it opens; the mark
      lives 5s and only that page reads it. */
(function () {
  'use strict';
  var STATE = /-(loading|error|empty)(?=[-.])/;
  var name = function (u) { return (u || '').split('?')[0].split('#')[0].split('/').pop(); };
  var state = function (n) { var m = n.match(STATE); return m ? m[1] : 'success'; };
  var strip = function (n) { return n.replace(STATE, ''); };
  var here = name(location.pathname), ref = name(document.referrer);
  var win = document.querySelector('.dr-window'), note = document.querySelector('.dr-mapnote');
  var base = strip(ref).replace(/\.html$/, '');
  var same = ref && ref !== here && (strip(ref) === strip(here) ||
    (state(ref) === 'loading' && state(here) === 'success' && here.indexOf(base + '-') === 0));

  if (same) {
    var tone = state(here);
    if (tone === 'success' && state(ref) !== 'loading') tone = 'back';
    if (win) {
      win.classList.add('dr-window--stay');
      if (tone === 'error' || tone === 'success') win.classList.add('dr-window--arrive-' + tone);
    }
    if (note && (tone === 'error' || tone === 'empty')) note.classList.add('dr-mapnote--arrive-' + tone);
  } else if (win) {
    try {
      var mark = JSON.parse(sessionStorage.getItem('dr-from') || 'null');
      if (mark && mark.to === here && Date.now() - mark.at < 5000) {
        win.classList.add('dr-window--from-end');
        sessionStorage.removeItem('dr-from');
      }
    } catch (e) {}
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('.dr-deskrail--end a[href]');
    if (!a) return;
    try { sessionStorage.setItem('dr-from', JSON.stringify({ to: name(a.getAttribute('href')), at: Date.now() })); } catch (err) {}
  }, true);
}());
