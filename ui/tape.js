/* ─────────────────────────────────────────────────────────────────────────
   DRON landing — the tape player
   Spec: landing.md. One component, two live modes:

     data-mode="reel"  the flow plays itself; touch it and it hands over
     data-mode="live"  nothing moves until the visitor moves it

   THE STANDING PROHIBITION (landing.md §0): nothing in wireframes/ is ever
   modified for this file's benefit. The embedded page is rendered exactly as
   it ships and is dressed from OUT HERE — the parent writes one stylesheet
   into the iframe document (same origin), and tapes address only selectors
   that already exist in the built page. When a selector breaks, THIS file is
   fixed. Never the page.

   Accessibility, built rather than asserted (landing.md §3):
     WCAG 2.2.2  a real <button> pauses the reel — keyboard reachable.
     WCAG 2.1.1  pointer take-over is a bonus on top of that button, not the
                 mechanism; a keyboard user never touches anything.
     HIG Motion  prefers-reduced-motion: no autoplay, no crossfade.
     WCAG 4.1.2  every iframe carries a title; the back layer is inert.
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  var BASE = "wireframes/";
  var FADE = 260;            /* ms — matches .lp-view transition in landing.css */
  var SCROLL_SETTLE = 380;   /* ms — after scrolling a target into view        */

  var REDUCED = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : { matches: false, addEventListener: function () {} };

  /* The stylesheet the parent writes into every embedded page.
     `body.wf-shelled` is named explicitly: _wf-shell.js sets
     .wf-shelled{padding:52px 24px 24px 272px !important}, and a class
     selector beats a bare `body` even when both are !important. */
  var INJECT = [
    ".wf-toolbar,.wf-tree,.wf-scrim,.wf-voice-drawer,.wf-voice-scrim,",
    /* .zlabel is the zone annotation drawn INSIDE the frame — it is on 124 of
       the pages and it is not product copy. Nothing annotated is ever shown
       on the landing. */
    ".meta,.zlabel,.state-switch{display:none!important}",
    "body,body.wf-shelled{margin:0!important;padding:0!important;",
    "background:transparent!important;display:block!important}",
    ".wf-frame{border:0!important;border-radius:0!important}"
  ].join("");

  function Player(root) {
    var self = this;

    this.root = root;
    this.mode = root.getAttribute("data-mode") || "live";
    this.phone = root.querySelector(".lp-phone");
    this.caps = Array.prototype.slice.call(root.querySelectorAll(".lp-steps li"));
    this.toggle = root.querySelector(".lp-toggle");
    this.note = root.querySelector(".lp-note");

    /* The tape. Written in landing.html, sourced from landing.md §5. */
    var json = root.querySelector(".lp-tape");
    this.tape = json ? JSON.parse(json.textContent) : [];

    /* Layer A is already in the HTML with a src, so the section works with
       JavaScript off — it degrades to a plain, clickable prototype. Layer B
       is added here purely to carry the crossfade. */
    this.a = this.phone.querySelector("iframe");
    this.b = this.a.cloneNode(false);
    this.b.removeAttribute("src");
    this.b.classList.add("is-back");
    this.b.setAttribute("aria-hidden", "true");
    this.b.inert = true;
    this.phone.appendChild(this.b);

    /* NOTHING UNDRESSED IS EVER SEEN. Layer A carries its src in the HTML, so
       the browser paints the wireframe page — shell header, state-switch row,
       annotations — in the moment before the stylesheet below reaches it. The
       layer is held invisible until it has been dressed; the warm .lp-phone
       background stands in, which is the product's own page colour. Every
       later step loads into the hidden layer and is dressed before the
       crossfade, so this is the only place the flash could occur.
       Set after the clone so layer B does not inherit the inline value. */
    this.a.style.opacity = "0";

    this.pulse = document.createElement("span");
    this.pulse.className = "lp-pulse";
    this.pulse.setAttribute("aria-hidden", "true");
    /* The class comes off when the animation ends. Left on, it is invisible
       (the keyframes finish at opacity 0) but it makes the element lie about
       its state to anything reading the DOM. */
    this.pulse.addEventListener("animationend", function () {
      self.pulse.classList.remove("on");
    });
    this.phone.appendChild(this.pulse);

    this.idx = 0;
    this.playing = false;
    this.taken = false;
    this.timer = null;

    /* A STANDING listener on BOTH layers. The one-shot listener in show()
       only covers the step it was attached for — after the first crossfade
       the visible layer had no handler at all, so any document that arrived
       by another route was never dressed and came up wearing the wireframe
       shell. Dressing is idempotent, so both may fire. */
    this.dress(this.a);
    [this.a, this.b].forEach(function (fr) {
      fr.addEventListener("load", function () { self.dress(fr); });
    });

    if (this.mode === "reel") this.setupReel();
    if (this.toggle) {
      this.toggle.addEventListener("click", function () {
        if (self.mode === "live") { self.restart(); return; }
        if (self.playing) self.pause("paused"); else self.play();
      });
    }
  }

  /* ── the embedded page, dressed from outside ───────────────────────────── */

  Player.prototype.doc = function (fr) {
    try {
      var d = fr.contentDocument;
      /* Touch it: an opaque origin throws here rather than returning null. */
      return d && d.body ? d : null;
    } catch (e) { return null; }
  };

  Player.prototype.dress = function (fr) {
    var self = this;
    var d = this.doc(fr);
    if (!d) { this.blocked(); return false; }
    /* Dropping the src off a spent back layer navigates it to about:blank and
       fires load. There is nothing to dress and nothing is wrong. */
    if (d.location && d.location.href === "about:blank") return false;

    if (!d.getElementById("lp-injected")) {
      var s = d.createElement("style");
      s.id = "lp-injected";
      s.textContent = INJECT;
      d.head.appendChild(s);
    }

    /* Belt and braces on annotations. The stylesheet above names the two
       classes as they stand today; this switches on the page's OWN
       annotations-off state, so if a wireframe ever grows a third kind of
       annotation and adds it to that rule, the landing hides it without this
       file learning about it. Runtime state only — the file is not edited
       (landing.md §0), and the designer's own stored preference for browsing
       the wireframes is left alone. */
    d.body.classList.add("wf-hide-anno");

    /* THE HORIZON (landing.md §4.6). A visitor who has taken the screen over
       taps the product's real controls, and half of those are links — Track
       live, View details, the tab bar. So links work, but they can only ever
       reach another screen in wireframes/, and they are routed through the
       parent so the arriving document is dressed before it is shown.

       What that shuts out is the project around the screens: `../research.html`,
       the tone-of-voice drawer, anything with a path in it, anything off-site.
       Sealing every link instead — the first cut of this rule — made the
       paused screen read as broken, which is worse than the leak it prevented.

       Capture phase, before the page's own handlers, every mode. */
    if (!d.__lpSealed) {
      d.__lpSealed = true;
      d.addEventListener("click", function (ev) {
        var a = ev.target.closest && ev.target.closest("a[href]");
        if (!a) return;
        var href = a.getAttribute("href") || "";
        if (href.charAt(0) === "#") return;                    /* in-page anchor: the page's own */
        ev.preventDefault();
        ev.stopPropagation();
        /* A bare filename in the same directory, and nothing else. A path
           separator, a scheme or a ".." is a way out and is refused. */
        if (!/^[a-z0-9._-]+\.html(#.*)?$/i.test(href)) return;
        /* The visitor has walked off the tape. The reel does not try to pick
           up where it was — the button becomes Replay and the next press
           starts it from the top (landing.md §4.5). */
        self.taken = true;
        self.idx = 0;
        self.setToggle();
        self.show(href.split("#")[0]);
      }, true);
    }

    /* Dressed — this layer may now be shown. The inline value is cleared
       rather than set to "1", or it would beat .lp-view.is-back when the
       layer is swapped to the back and the crossfade would stop working. */
    fr.style.opacity = "";
    return true;
  };

  Player.prototype.blocked = function () {
    /* The frame cannot be dressed, so it is shown as it is rather than left
       blank — the note explains why it looks like the wireframe shell. */
    this.a.style.opacity = "";
    if (!this.note) return;
    this.note.hidden = false;
    this.root.classList.add("is-blocked");
    if (this.toggle) this.toggle.disabled = true;
  };

  /* ── crossfade ─────────────────────────────────────────────────────────── */

  Player.prototype.show = function (file, then) {
    var self = this;
    var fade = REDUCED.matches ? 0 : FADE;

    this.b.addEventListener("load", function once() {
      self.b.removeEventListener("load", once);
      self.dress(self.b);

      var front = self.b, back = self.a;
      front.classList.remove("is-back");
      back.classList.add("is-back");
      front.inert = self.playing;
      back.inert = true;
      front.removeAttribute("aria-hidden");
      back.setAttribute("aria-hidden", "true");
      self.a = front; self.b = back;

      window.setTimeout(function () {
        self.b.removeAttribute("src");
        if (then) then();
      }, fade);
    });
    this.b.src = BASE + file;
  };

  /* ── the pulse: where a finger would land ──────────────────────────────── */

  Player.prototype.point = function (sel, then) {
    var self = this;
    var d = this.doc(this.a);
    var el = d && d.querySelector(sel);
    if (!el) { if (then) then(); return; }   /* a moved selector never stalls the reel */

    var place = function () {
      var r = el.getBoundingClientRect();
      self.pulse.style.left = (r.left + r.width / 2) + "px";
      self.pulse.style.top = (r.top + r.height / 2) + "px";
      self.pulse.classList.remove("on");
      void self.pulse.offsetWidth;            /* restart the animation */
      self.pulse.classList.add("on");
      if (then) then();
    };

    var r0 = el.getBoundingClientRect();
    var h = d.documentElement.clientHeight;
    if (r0.top < 0 || r0.bottom > h) {
      el.scrollIntoView({ block: "center", behavior: REDUCED.matches ? "auto" : "smooth" });
      window.setTimeout(place, REDUCED.matches ? 0 : SCROLL_SETTLE);
    } else { place(); }
  };

  /* ── the reel ──────────────────────────────────────────────────────────── */

  Player.prototype.setupReel = function () {
    var self = this;

    /* The veil sits in the PARENT document, over the phone. Two jobs: it
       stops a stray click landing on a screen that is about to change, and
       it is what "touch it and it hands over" actually catches — events
       inside an iframe do not reach the parent, and the iframe is inert
       while playing anyway. */
    this.veil = document.createElement("button");
    this.veil.type = "button";
    this.veil.className = "lp-veil";
    this.veil.tabIndex = -1;                  /* the Pause button is the keyboard path */
    this.veil.setAttribute("aria-hidden", "true");
    this.veil.addEventListener("pointerdown", function () { self.pause("taken"); });
    this.phone.appendChild(this.veil);

    this.caps.forEach(function (li, n) {
      var btn = li.querySelector("button");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var at = 0;
        for (var i = 0; i < self.tape.length; i++) { if (self.tape[i].cap === n) { at = i; break; } }
        self.idx = at;
        self.play();
      });
    });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting && e.intersectionRatio >= 0.5) {
            if (!self.taken && !self.userPaused) self.play();
          } else if (self.playing) {
            self.halt();                       /* out of sight: stop the clock, keep the state */
          }
        });
      }, { threshold: [0, 0.5] }).observe(this.root);
    }

    REDUCED.addEventListener("change", function () { if (REDUCED.matches) self.pause("reduced"); });
    if (this.toggle) this.toggle.disabled = false;
    this.setToggle();
  };

  Player.prototype.setToggle = function () {
    if (!this.toggle) return;
    if (this.mode === "live") { this.toggle.textContent = "Start over"; return; }
    var on = this.playing;
    this.toggle.textContent = on ? "Pause" : (this.taken ? "Replay" : "Play");
    this.toggle.setAttribute("aria-pressed", on ? "false" : "true");
    this.root.classList.toggle("is-playing", on);
    this.root.classList.toggle("is-taken", !on && this.taken);
  };

  Player.prototype.play = function () {
    if (this.root.classList.contains("is-blocked")) return;
    /* Any step still counting down is cancelled first. Without this, jumping
       to a step from its caption leaves the previous timer running and two
       clocks drive the reel at once — it skips ahead on its own. */
    window.clearTimeout(this.timer);
    this.userPaused = false;
    this.taken = false;
    this.playing = true;
    this.a.inert = true;
    this.setToggle();
    this.step();
  };

  /* halt = the clock stops but nothing is handed over (scrolled out of view). */
  Player.prototype.halt = function () {
    window.clearTimeout(this.timer);
    this.playing = false;
    this.setToggle();
  };

  Player.prototype.pause = function (why) {
    window.clearTimeout(this.timer);
    this.playing = false;
    this.userPaused = true;
    this.taken = (why === "taken");
    this.a.inert = false;                      /* the screen becomes operable */
    this.pulse.classList.remove("on");
    this.setToggle();
  };

  Player.prototype.step = function () {
    var self = this;
    if (!this.playing) return;

    var s = this.tape[this.idx];
    if (!s) { this.idx = 0; this.step(); return; }

    if (typeof s.cap === "number") {
      this.caps.forEach(function (li, n) {
        var on = (n === s.cap);
        li.classList.toggle("on", on);
        var b = li.querySelector("button");
        if (b) { if (on) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current"); }
      });
    }

    var after = function () {
      self.timer = window.setTimeout(function () {
        self.idx = (self.idx + 1) % self.tape.length;
        self.step();
      }, s.hold || 1200);
    };

    if (s.page) { this.show(s.page, after); return; }
    if (s.tap) {
      this.point(s.tap, function () {
        var d = self.doc(self.a);
        var el = d && d.querySelector(s.tap);
        window.setTimeout(function () { if (el) el.click(); after(); }, 220);
      });
      return;
    }
    if (s.point) { this.point(s.point, after); return; }
    after();
  };

  Player.prototype.restart = function () {
    var first = this.tape.length && this.tape[0].page;
    if (first) this.show(first);
  };

  /* ── boot ──────────────────────────────────────────────────────────────── */

  /* Under 375 CSS px the frame no longer fits. It is scaled rather than
     allowed to push the page sideways — WCAG 1.4.10 Reflow beats the 4%
     the 44pt target loses at a 360px viewport (landing.md §4.4). */
  function fit() {
    var w = document.documentElement.clientWidth;
    var s = w < 375 ? Math.max(w / 375, 0.6) : 1;
    document.documentElement.style.setProperty("--lp-s", s.toFixed(4));
    Array.prototype.forEach.call(document.querySelectorAll(".lp-stage"), function (st) {
      var dev = st.querySelector(".lp-device");
      if (!dev) return;
      st.style.height = s === 1 ? "" : (dev.offsetHeight * s) + "px";
    });
  }

  function boot() {
    Array.prototype.forEach.call(document.querySelectorAll(".lp-player"), function (el) {
      new Player(el);
    });
    fit();
    window.addEventListener("resize", fit);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else { boot(); }
})();
