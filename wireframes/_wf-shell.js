/* ─────────────────────────────────────────────────────────────────────────
   DRON wireframes — shared shell (nav tree + fixed header + viewport switcher)
   One source, included on every wireframe page:  <script src="_wf-shell.js"></script>
   • Fixed top HEADER on every size: burger (opens the screen map) + current
     screen name + preview switcher (desktop) + icon buttons.
   • Header icon buttons: Back to DRON · annotations toggle · Tone of voice.
   • Left panel = a TREE: section → screen → its real states, indented.
     Pinned open on desktop; on mobile it collapses into the burger and slides
     in over a scrim (the preview switcher is hidden there — you're already mobile).
   • Structure is taken 1:1 from wireframes/_screens.md (state matrix) and the
     naming map in _conventions.md §12 — nothing invented.
   • Grayscale only, no colour. Current page is detected + marked automatically,
     so the markup is identical on every page.
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  /* Screen = its base page (default / success view).
     states[] = ONLY the states marked ✓ in _screens.md (empty / error / loading).
     success:true = base is a dedicated "it worked" milestone (matrix Success ✓). */
  var TREE = [
    { title: "Shared · entry", screens: [
      { name: "Sign in with Diia / BankID",            file: "signin.html",             states: [["error","signin-error.html"],["loading","signin-loading.html"]] },
      { name: "Choose your role — Client or Operator", file: "role-select.html",        states: [] },
      { name: "Client onboarding",                     file: "onboarding-client.html",  states: [["empty","onboarding-client-empty.html"]] },
      { name: "Operator onboarding",                   file: "onboarding-operator.html",states: [] },
      { name: "Account (profile · role switch)",       file: "account.html",            states: [["edit","account-edit.html"]] },
      { name: "Switch role · global",                  file: "switch-role.html",        states: [] }
    ]},
    { title: "Client · MJ-1", screens: [
      { name: "Home / start an order",                 file: "listings.html",           states: [["filters","listings-filters.html"],["region","listings-filter-region.html"],["city","listings-filter-city.html"],["district","listings-filter-district.html"],["filtered","listings-filtered.html"],["empty","listings-empty.html"],["error","listings-error.html"],["loading","listings-loading.html"]] },
      { name: "Order setup / details",                 file: "order-setup.html",        states: [["empty","order-setup-empty.html"],["error","order-setup-error.html"]] },
      { name: "Order review & price",                  file: "order-review.html",       states: [["loading","order-review-loading.html"]] },
      { name: "Payment",                               file: "payment.html",            states: [["error","payment-error.html"],["loading","payment-loading.html"]] },
      { name: "Order confirmed / operator revealed",   file: "order-confirmed.html", success: true, states: [["empty","order-confirmed-empty.html"],["error","order-confirmed-error.html"],["loading","order-confirmed-loading.html"]] },
      { name: "Live tracking & ETA",                   file: "tracking.html",           states: [["empty","tracking-empty.html"],["error","tracking-error.html"],["loading","tracking-loading.html"]] },
      { name: "Delivery confirmation",                 file: "delivery.html",       success: true, states: [["error","delivery-error.html"],["loading","delivery-loading.html"]] },
      { name: "Rate the order",                        file: "rate.html",           success: true, states: [] }
    ]},
    { title: "Operator · MJ-2 + RJ-O3", screens: [
      { name: "Operator home + status toggle",         file: "operator-listings.html",  states: [["empty","operator-listings-empty.html"]] },
      { name: "Incoming job offer / accept-decline",   file: "job-offer.html",          states: [["empty","job-offer-empty.html"]] },
      { name: "Job brief / detail",                    file: "job-brief.html",          states: [["error","job-brief-error.html"]] },
      { name: "Job checklist (in progress)",           file: "job-checklist.html",      states: [["error","job-checklist-error.html"]] },
      { name: "Result upload / close job",             file: "result-upload.html",      states: [["error","result-upload-error.html"],["loading","result-upload-loading.html"]] },
      { name: "Wallet / earnings",                     file: "wallet.html",         success: true, states: [["empty","wallet-empty.html"]] },
      { name: "Withdraw to card / bank account",       file: "withdraw.html",       success: true, states: [["error","withdraw-error.html"],["loading","withdraw-loading.html"]] }
    ]},
    { title: "Client · step 8 (EJ-1/2 · C-2 · repeat)", screens: [
      { name: "Welcome / first-use explainer",         file: "welcome.html",            states: [["empty","welcome-empty.html"]] },
      { name: "Time-slot pick (calendar-first)",       file: "time-slot.html",          states: [["empty","time-slot-empty.html"]] },
      { name: "Inspection report",                     file: "inspection-report.html", success: true, states: [["error","inspection-report-error.html"],["loading","inspection-report-loading.html"]] },
      { name: "Order history",                         file: "order-history.html",      states: [["empty","order-history-empty.html"],["loading","order-history-loading.html"]] },
      { name: "Share / refer",                         file: "share.html",              states: [["empty","share-empty.html"]] },
      { name: "Support / dispute",                     file: "support.html",            states: [] },
      { name: "Report an issue",                       file: "report-issue.html",       states: [["empty","report-issue-empty.html"],["loading","report-issue-loading.html"]] },
      { name: "Resolution outcome",                    file: "resolution.html",         states: [] },
      { name: "Contact human support",                 file: "contact-support.html",    states: [["error","contact-support-error.html"]] }
    ]},
    { title: "Operator · step 8 (activation · standing)", screens: [
      { name: "Operator landing / fee terms",          file: "operator-fee-terms.html", states: [] },
      { name: "Sign up / identity",                    file: "operator-signup.html",    states: [["error","operator-signup-error.html"],["loading","operator-signup-loading.html"]] },
      { name: "Verification / document upload",        file: "operator-verification.html", states: [["error","operator-verification-error.html"],["loading","operator-verification-loading.html"]] },
      { name: "Profile setup",                         file: "operator-profile-setup.html", states: [] },
      { name: "Dispute / client issue",                file: "operator-dispute.html",   states: [["error","operator-dispute-error.html"]] },
      { name: "Ratings dashboard",                     file: "ratings.html",            states: [["empty","ratings-empty.html"]] },
      { name: "Operator account (profile · role switch)", file: "operator-account.html", states: [] }
    ]}
  ];

  /* Not-yet-built pages shown as "planned" (faint). All main-path + step-8 screens
     are built — nothing planned remains. */
  var PLANNED = {};

  /* Viewport presets for the preview switcher. */
  var SIZES = { mobile: [375, 812], tablet: [768, 1024], desktop: [1280, 800] };

  /* Header icon glyphs — grayscale line icons (currentColor), tool chrome only. */
  var IC = {
    burger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    back:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5l-7 7 7 7"/><path d="M4 12h15"/></svg>',
    notes:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
    voice:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/></svg>'
  };

  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  function currentFile(){
    var f = (location.pathname.split("/").pop() || "").toLowerCase();
    return f || "listings.html";
  }

  /* ── styles (grayscale, from _conventions.md §4) ── */
  var CSS = ''
    /* content offset: fixed top bar (all sizes) + pinned tree (desktop) */
    + '.wf-shelled{ padding:52px 24px 24px 272px !important; }'
    + '.wf-shelled .wf-frame{ order:-1; }'  /* frame sits right next to the tree, meta after */

    /* ── fixed top header (full width, above everything) ── */
    + '.wf-toolbar{ position:fixed; top:0; left:0; right:0; height:52px; z-index:60; display:flex; align-items:center; gap:10px;'
    + '  padding:0 14px; background:#F4F4F4; border-bottom:1px solid rgba(0,0,0,0.12);'
    + '  font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","SF Pro Display",system-ui,sans-serif; }'
    + '.wf-burger{ display:none; width:36px; height:36px; flex:none; align-items:center; justify-content:center;'
    + '  border:1px solid rgba(0,0,0,0.15); border-radius:8px; background:#FFFFFF; color:#252525; cursor:pointer; padding:0; }'
    + '.wf-burger:hover{ background:#EEEEEE; }'
    + '.wf-burger:focus-visible{ outline:2px solid rgba(0,0,0,0.2); outline-offset:2px; }'
    + '.wf-burger svg{ width:20px; height:20px; display:block; }'
    + '.wf-tb-cur{ font-size:13px; color:#252525; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }'
    + '.wf-right{ margin-left:auto; display:flex; align-items:center; gap:10px; }'
    + '.wf-tb-title{ font-size:11px; font-weight:600; letter-spacing:.10em; text-transform:uppercase; color:#909090; }'
    + '.wf-seg{ display:flex; border:1px solid rgba(0,0,0,0.15); border-radius:6px; overflow:hidden; }'
    + '.wf-seg button{ height:32px; padding:0 14px; border:0; border-right:1px solid rgba(0,0,0,0.09); background:#FFFFFF;'
    + '  font:inherit; font-size:13px; font-weight:600; color:#5A5A5A; cursor:pointer; }'
    + '.wf-seg button:last-child{ border-right:0; }'
    + '.wf-seg button.on{ background:#111111; color:#FFFFFF; }'
    + '.wf-seg button:focus-visible{ outline:2px solid rgba(0,0,0,0.15); outline-offset:-2px; }'
    + '.wf-dim{ font-size:13px; color:#5A5A5A; font-variant-numeric:tabular-nums; }'

    /* ── header icon buttons: Back to DRON · annotations · tone of voice ── */
    + '.wf-actions{ display:flex; align-items:center; gap:8px; }'
    + '.wf-ico{ width:36px; height:36px; flex:none; display:inline-flex; align-items:center; justify-content:center;'
    + '  border:1px solid rgba(0,0,0,0.15); border-radius:8px; background:#FFFFFF; color:#252525; cursor:pointer;'
    + '  padding:0; text-decoration:none; }'
    + '.wf-ico svg{ width:18px; height:18px; display:block; }'
    + '.wf-ico:hover{ background:#EEEEEE; }'
    + '.wf-ico:focus-visible{ outline:2px solid rgba(0,0,0,0.2); outline-offset:2px; }'
    + '.wf-ico-back{ background:#111111; border-color:#111111; color:#FFFFFF; }'
    + '.wf-ico-back:hover{ background:#252525; }'
    + '.wf-anno.on{ background:#111111; border-color:#111111; color:#FFFFFF; }'
    + '.wf-voice.on{ background:#111111; border-color:#111111; color:#FFFFFF; }'

    /* ── right-side Tone-of-voice drawer ── */
    + '.wf-voice-drawer{ position:fixed; top:52px; right:0; bottom:0; width:min(460px,92vw); z-index:58;'
    + '  background:#FFFFFF; border-left:1px solid rgba(0,0,0,0.14); box-shadow:-8px 0 28px rgba(0,0,0,0.14);'
    + '  transform:translateX(100%); transition:transform .24s ease; display:flex; flex-direction:column; }'
    + '.wf-voice-drawer.open{ transform:translateX(0); }'
    + '.wf-vd-head{ flex:none; height:46px; display:flex; align-items:center; gap:10px; padding:0 12px 0 16px;'
    + '  border-bottom:1px solid rgba(0,0,0,0.10); font-size:12px; font-weight:600; letter-spacing:.10em;'
    + '  text-transform:uppercase; color:#111111; background:#F4F4F4; }'
    + '.wf-vd-head .sp{ flex:1; }'
    + '.wf-vd-open{ font-size:12px; color:#5A5A5A; text-decoration:none; letter-spacing:0; text-transform:none; font-weight:600; }'
    + '.wf-vd-open:hover{ color:#111111; }'
    + '.wf-vd-close{ width:30px; height:30px; border:1px solid rgba(0,0,0,0.15); border-radius:7px; background:#FFFFFF;'
    + '  color:#252525; cursor:pointer; font-size:15px; line-height:1; display:inline-flex; align-items:center; justify-content:center; }'
    + '.wf-vd-close:hover{ background:#EEEEEE; }'
    + '.wf-voice-drawer iframe{ flex:1; width:100%; border:0; background:#FFFFFF; }'
    + '.wf-voice-scrim{ position:fixed; inset:52px 0 0 0; z-index:57; background:rgba(0,0,0,0.28); opacity:0;'
    + '  pointer-events:none; transition:opacity .24s ease; }'
    + '.wf-voice-scrim.on{ opacity:1; pointer-events:auto; }'
    + '.wf-voice-link{ color:#111111 !important; border-top:1px solid rgba(0,0,0,0.08); border-bottom:1px solid rgba(0,0,0,0.08); margin-bottom:4px; }'

    /* ── left tree (pinned on desktop, drawer on mobile) ── */
    + '.wf-tree{ position:fixed; top:52px; left:0; bottom:0; width:248px; z-index:55; overflow-y:auto;'
    + '  background:#FFFFFF; border-right:1px solid rgba(0,0,0,0.12); padding:10px 10px 24px;'
    + '  font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","SF Pro Display",system-ui,sans-serif; -webkit-font-smoothing:antialiased; }'
    + '.wf-tree-head{ font-size:12px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:#111111; padding:4px 8px 2px; }'
    + '.wf-tree-note{ font-size:11px; color:#909090; padding:0 8px 12px; line-height:1.5; }'
    + '.wf-sec{ font-size:11px; font-weight:600; letter-spacing:.10em; text-transform:uppercase; color:#909090; padding:14px 8px 4px; }'
    + '.wf-tree a{ display:block; text-decoration:none; border-radius:6px; color:#5A5A5A; }'
    + '.wf-screen{ font-size:13px; font-weight:600; color:#252525; padding:6px 8px; }'
    + '.wf-screen:hover{ background:#EEEEEE; }'
    + '.wf-succ{ font-weight:400; color:#909090; font-size:11px; }'
    + '.wf-state{ font-size:12px; padding:4px 8px 4px 24px; position:relative; }'
    + '.wf-state:hover{ background:#EEEEEE; }'
    + '.wf-dot{ display:inline-block; width:5px; height:5px; border-radius:2px; background:#909090; margin-right:8px; vertical-align:middle; }'
    + '.wf-tree a.planned{ color:#B9B9B9; }'
    + '.wf-tree a.planned .wf-dot{ background:#D8D8D8; }'
    + '.wf-tree a.current{ background:#E2E2E2; color:#111111; box-shadow:inset 2px 0 0 #111111; }'
    + '.wf-tree a.current .wf-dot{ background:#111111; }'
    + '.wf-tree a.in-current{ box-shadow:inset 2px 0 0 rgba(0,0,0,0.25); }'

    /* scrim behind the mobile drawer (hidden until narrow + open) */
    + '.wf-scrim{ display:none; }'

    /* annotations hidden state — hides the .meta panel + .zlabel zone labels everywhere */
    + 'body.wf-hide-anno .meta, body.wf-hide-anno .zlabel{ display:none !important; }'

    /* Language switch — EN / UA, injected into every screen's top bar, so it is
       the one control standing on all 40 screens.

       THE KIT IS THE SOURCE. ui/kit.css `.dr-lang` holds the canonical block
       and the reasoning; this is the same component expressed once for all 84
       files. Only the painted ones load the kit, so each value is written
       `var(--token, literal)` — and the literal is the KIT's value, not the
       grayscale ramp's. Designer's call 2026-08-02: green chosen, grey not,
       on every screen. The switch is one control and it should not change
       colour depending on whether the screen behind it has been painted yet.

       This is the third carve-out from the grayscale rule, after real imagery
       and the DRON mark, and like those it is recorded rather than assumed —
       `_conventions.md` §1.7.

       It is coloured as the designer's buttons are — primary and secondary.
       The chosen language is the primary fill, the other is the secondary.

       Measured — painted / grayscale:
         chosen  --on-green on --green     9.46:1 / 18.88:1
         other   --ink on --btn2          11.54:1 / 11.83:1
         the two fills against each other  1.22:1 / 14.58:1
       That 1.22 is the catch, and it was found by measuring rather than by
       looking: Signal Green and the warm grey sit at almost the same
       luminance, and both halves carry the same #1A1A1A ink, so on a painted
       screen the state would rest on hue alone — which WCAG 1.4.1 does not
       allow. The chosen half therefore also takes --sh-sm, the shadow
       .dr-btn--primary already wears and the secondary does not: the second
       signal is the system's own way of saying primary. In grayscale the
       question never arises, the fills being 14.58:1 apart. aria-pressed
       carries it for assistive tech either way.

       Recorded, not argued: this stands on all 40 screens and every one of
       them already spends its single green on the CTA, so DESIGN.md's one
       green control per screen becomes two, plus ~0.3% of the frame on top of
       tracking's measured 5.09%. The designer set green and grey as the two
       button weights; this follows that rule.

       32px visible, 44px touched vertically — the button box is 28, so -8 top and
       bottom makes exactly 44. It shares a 56px bar with a title, so the
       full 44pt control would crowd it; the target comes back through a
       transparent ::after, the way iOS treats its own 32pt controls and the
       way ui/inventory.md already settled the in-page tabs. */
    /* Desktop only, from 2026-08-16 (rev 94). The designer took the language
       switch out of the mobile nav bar: the bar carries the back control and
       one name, and a second control on the right is the desktop question, not
       the phone's. It stays in the desktop preview because desktop navigation
       is being redrawn and the control has to be visible while that happens.
       Keyed off the viewport switcher's data attribute rather than the frame
       width, so it does not depend on when the switcher runs relative to this
       injection. */
    + '.wf-frame header.topbar .wf-lang{ display:none; flex:none; margin-left:auto;'
    + '  height:32px; border:0; border-radius:var(--r-btn,6px); overflow:hidden; }'
    + 'html[data-wf-viewport="desktop"] .wf-frame header.topbar .wf-lang{ display:inline-flex; }'
    + '.wf-frame header.topbar .wf-lang button{ position:relative; display:flex;'
    + '  align-items:center; justify-content:center; min-width:36px; padding:0 8px;'
    + '  border:0; cursor:pointer; font:inherit; font-size:12px; font-weight:600;'
    + '  letter-spacing:.04em;'
    // secondary: --btn2 / --ink painted, --wf-fill / --wf-text grayscale
    + '  background:var(--btn2,#D6D2C9); color:var(--ink,#1A1A1A); }'
    + '.wf-frame header.topbar .wf-lang button::after{ content:""; position:absolute; inset:-8px 0; }'
    // primary: --green / --on-green painted, --wf-ink / --wf-surface grayscale
    + '.wf-frame header.topbar .wf-lang button.on{ background:var(--green,#9BCF4A);'
    + '  color:var(--on-green,#1A1A1A); box-shadow:var(--sh-sm,0 1px 2px rgba(20,18,15,.05)); }'
    + '.wf-frame header.topbar .wf-lang button:hover:not(.on){ background:var(--media,#E4E1DA); }'
    + '.wf-frame header.topbar .wf-lang button:focus-visible{'
    + '  outline:var(--focus-w,2.5px) solid var(--ink,#1A1A1A);'
    + '  outline-offset:calc(-1 * var(--focus-offset,2px)); }'

    /* ── mobile / narrow: collapse the tree into the burger drawer ── */
    + '@media (max-width:899px){'
    + '  .wf-shelled{ padding:52px 12px 24px 12px !important; }'
    + '  .wf-frame{ width:375px !important; max-width:100%; margin:0 auto; }'
    + '  .wf-burger{ display:inline-flex; }'
    + '  .wf-tb-title, .wf-seg, .wf-dim{ display:none; }'
    + '  .wf-tb-cur{ max-width:38vw; }'
    + '  .wf-tree{ transform:translateX(-100%); transition:transform .22s ease; width:min(84vw,300px); }'
    + '  body.wf-nav-open .wf-tree{ transform:translateX(0); box-shadow:2px 0 20px rgba(0,0,0,0.20); }'
    + '  .wf-scrim{ display:block; position:fixed; inset:52px 0 0 0; z-index:54; background:rgba(0,0,0,0.34);'
    + '    opacity:0; pointer-events:none; transition:opacity .22s ease; }'
    + '  body.wf-nav-open .wf-scrim{ opacity:1; pointer-events:auto; }'
    + '}'
    + '@media print{ .wf-tree,.wf-toolbar,.wf-scrim{ display:none; } .wf-shelled{ padding:0 !important; } }';

  function buildTreeHTML(cur){
    var out = '<div class="wf-tree-head">DRON · Wireframes</div>'
            + '<p class="wf-tree-note">Screen = success / base page. Indented = its states (only those real in _screens.md). Faint = planned, not built yet.</p>'
            + '<a class="wf-screen wf-voice-link" href="../tone-of-voice.html">Tone of Voice</a>';
    for (var i=0;i<TREE.length;i++){
      var sec = TREE[i];
      out += '<div class="wf-sec">'+esc(sec.title)+'</div>';
      for (var j=0;j<sec.screens.length;j++){
        var s = sec.screens[j];
        var childCurrent = s.states.some(function(st){ return st[1].toLowerCase()===cur; });
        var planned = PLANNED[s.file] ? ' planned' : '';
        var isCur = s.file.toLowerCase()===cur ? ' current' : (childCurrent ? ' in-current' : '');
        out += '<a class="wf-screen'+planned+isCur+'" href="'+s.file+'"'+(s.file.toLowerCase()===cur?' aria-current="page"':'')+'>'
             + esc(s.name) + (s.success?' <span class="wf-succ">· success</span>':'') + '</a>';
        for (var k=0;k<s.states.length;k++){
          var label = s.states[k][0], file = s.states[k][1];
          var p2 = PLANNED[file] ? ' planned' : '';
          var c2 = file.toLowerCase()===cur ? ' current' : '';
          out += '<a class="wf-state'+p2+c2+'" href="'+file+'"'+(file.toLowerCase()===cur?' aria-current="page"':'')+'>'
               + '<span class="wf-dot"></span>'+esc(label)+'</a>';
        }
      }
    }
    return out;
  }

  function currentName(cur){
    for (var i=0;i<TREE.length;i++) for (var j=0;j<TREE[i].screens.length;j++){
      var s = TREE[i].screens[j];
      if (s.file.toLowerCase()===cur) return s.name;
      for (var k=0;k<s.states.length;k++) if (s.states[k][1].toLowerCase()===cur) return s.name+' · '+s.states[k][0];
    }
    return cur;
  }

  function init(){
    var cur = currentFile();

    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);

    /* left tree (screen map) */
    var tree = document.createElement("nav");
    tree.className = "wf-tree";
    tree.id = "wf-tree";
    tree.setAttribute("aria-label", "Wireframe screen map");
    tree.innerHTML = buildTreeHTML(cur);
    document.body.appendChild(tree);

    /* scrim behind the mobile drawer */
    var scrim = document.createElement("div");
    scrim.className = "wf-scrim";
    scrim.setAttribute("aria-hidden", "true");
    document.body.appendChild(scrim);

    /* fixed top header — burger · current screen · preview switcher · icon buttons */
    var bar = document.createElement("div");
    bar.className = "wf-toolbar";
    bar.innerHTML =
        '<div class="wf-actions">'
      + '  <a class="wf-ico wf-ico-back" href="../research.html" title="Back to DRON" aria-label="Back to DRON">'+IC.back+'</a>'
      + '  <button type="button" class="wf-ico wf-anno" aria-pressed="false" title="Hide annotations" aria-label="Hide annotations">'+IC.notes+'</button>'
      + '  <button type="button" class="wf-ico wf-voice" aria-pressed="false" title="Tone of voice" aria-label="Tone of voice">'+IC.voice+'</button>'
      + '</div>'
      + '<span class="wf-tb-cur">'+esc(currentName(cur))+'</span>'
      + '<div class="wf-right">'
      + '  <span class="wf-tb-title">Preview</span>'
      + '  <div class="wf-seg" role="group" aria-label="Preview size">'
      + '    <button type="button" data-size="mobile">Mobile</button>'
      + '    <button type="button" data-size="tablet">Tablet</button>'
      + '    <button type="button" data-size="desktop">Desktop</button>'
      + '  </div>'
      + '  <span class="wf-dim" aria-live="polite"></span>'
      + '  <button type="button" class="wf-burger" aria-label="Screen map" aria-controls="wf-tree" aria-expanded="false">'+IC.burger+'</button>'
      + '</div>';
    document.body.appendChild(bar);
    document.body.classList.add("wf-shelled");

    var frame = document.querySelector(".wf-frame");
    var dim = bar.querySelector(".wf-dim");
    var btns = bar.querySelectorAll(".wf-seg button");

    /* burger drawer (mobile): open/close the screen map over a scrim */
    var burger = bar.querySelector(".wf-burger");
    function setNav(open){
      document.body.classList.toggle("wf-nav-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    }
    burger.addEventListener("click", function(){ setNav(!document.body.classList.contains("wf-nav-open")); });
    scrim.addEventListener("click", function(){ setNav(false); });
    tree.addEventListener("click", function(e){ if (e.target.closest && e.target.closest("a")) setNav(false); });
    document.addEventListener("keydown", function(e){ if (e.key === "Escape") setNav(false); });

    /* preview viewport switcher (desktop) */
    function apply(key){
      if (!SIZES[key]) key = "mobile";
      var w = SIZES[key][0], h = SIZES[key][1];
      if (frame){ frame.style.width = w+"px"; frame.style.height = h+"px"; }
      if (dim) dim.textContent = w+" × "+h;
      for (var i=0;i<btns.length;i++) btns[i].classList.toggle("on", btns[i].getAttribute("data-size")===key);
      /* the language switch reads this (rev 94): in the bar on desktop, gone on
         mobile and tablet. An attribute, not a JS toggle, so it holds no matter
         which of the two injections runs first. */
      document.documentElement.setAttribute("data-wf-viewport", key);
      try { localStorage.setItem("wf-viewport", key); } catch(e){}
    }
    for (var i=0;i<btns.length;i++){
      (function(b){ b.addEventListener("click", function(){ apply(b.getAttribute("data-size")); }); })(btns[i]);
    }
    var saved = "mobile";
    try { saved = localStorage.getItem("wf-viewport") || "mobile"; } catch(e){}
    apply(saved);

    /* annotations toggle (icon button) — hides .meta panel + .zlabel zone labels on every page */
    var anno = bar.querySelector(".wf-anno");
    function applyAnno(hide){
      document.body.classList.toggle("wf-hide-anno", hide);
      anno.classList.toggle("on", hide);
      anno.setAttribute("aria-pressed", hide ? "true" : "false");
      var label = hide ? "Show annotations" : "Hide annotations";
      anno.setAttribute("title", label);
      anno.setAttribute("aria-label", label);
      try { localStorage.setItem("wf-hide-anno", hide ? "1" : "0"); } catch(e){}
    }
    anno.addEventListener("click", function(){ applyAnno(!document.body.classList.contains("wf-hide-anno")); });
    var savedAnno = "0";
    try { savedAnno = localStorage.getItem("wf-hide-anno") || "0"; } catch(e){}
    applyAnno(savedAnno === "1");

    /* tone of voice (icon button) — opens a right-side drawer with tone-of-voice.html
       (generated from voice.md). Also opened by the "Tone of Voice" link in the tree. */
    var voice = bar.querySelector(".wf-voice");
    var vScrim = document.createElement("div");
    vScrim.className = "wf-voice-scrim";
    vScrim.setAttribute("aria-hidden", "true");
    document.body.appendChild(vScrim);
    var vDrawer = document.createElement("aside");
    vDrawer.className = "wf-voice-drawer";
    vDrawer.setAttribute("aria-label", "Tone of voice");
    vDrawer.setAttribute("aria-hidden", "true");
    vDrawer.innerHTML =
        '<div class="wf-vd-head">Tone of voice'
      + '  <span class="sp"></span>'
      + '  <a class="wf-vd-open" href="../tone-of-voice.html" target="_blank" rel="noopener" title="Open full page">Open ↗</a>'
      + '  <button type="button" class="wf-vd-close" aria-label="Close tone of voice">✕</button>'
      + '</div>'
      + '<iframe title="DRON tone of voice" data-src="../tone-of-voice.html"></iframe>';
    document.body.appendChild(vDrawer);
    var vIframe = vDrawer.querySelector("iframe");
    var vLoaded = false;
    function setVoice(open){
      if (open && !vLoaded){ vIframe.src = vIframe.getAttribute("data-src"); vLoaded = true; }
      vDrawer.classList.toggle("open", open);
      vScrim.classList.toggle("on", open);
      voice.classList.toggle("on", open);
      voice.setAttribute("aria-pressed", open ? "true" : "false");
      vDrawer.setAttribute("aria-hidden", open ? "false" : "true");
    }
    voice.addEventListener("click", function(){ setVoice(!vDrawer.classList.contains("open")); });
    vScrim.addEventListener("click", function(){ setVoice(false); });
    vDrawer.querySelector(".wf-vd-close").addEventListener("click", function(){ setVoice(false); });
    document.addEventListener("keydown", function(e){ if (e.key === "Escape") setVoice(false); });
    /* the "Tone of Voice" entry in the left tree opens the same drawer (href is the fallback) */
    var vLinks = document.querySelectorAll(".wf-voice-link");
    for (var vl=0; vl<vLinks.length; vl++){
      vLinks[vl].addEventListener("click", function(e){ e.preventDefault(); setVoice(true); });
    }

    /* language switcher — inject into the top-right of the screen's topbar (opposite the logo).
       English is primary (default), Ukrainian is secondary. Copy itself stays English
       (wireframe convention §9); the control proves presence + placement. */
    var topbar = document.querySelector(".wf-frame header.topbar");
    if (topbar){
      var lang = document.createElement("div");
      lang.className = "wf-lang";
      lang.setAttribute("role", "group");
      lang.setAttribute("aria-label", "Language");
      lang.innerHTML = '<button type="button" data-lang="en">EN</button>'
                     + '<button type="button" data-lang="ua">UA</button>';
      topbar.appendChild(lang);
      var langBtns = lang.querySelectorAll("button");
      function applyLang(code){
        if (code !== "en" && code !== "ua") code = "en";
        for (var i=0;i<langBtns.length;i++){
          var on = langBtns[i].getAttribute("data-lang") === code;
          langBtns[i].classList.toggle("on", on);
          langBtns[i].setAttribute("aria-pressed", on ? "true" : "false");
        }
        try { localStorage.setItem("wf-lang", code); } catch(e){}
      }
      for (var i=0;i<langBtns.length;i++){
        (function(b){ b.addEventListener("click", function(){ applyLang(b.getAttribute("data-lang")); }); })(langBtns[i]);
      }
      var savedLang = "en";
      try { savedLang = localStorage.getItem("wf-lang") || "en"; } catch(e){}
      applyLang(savedLang);
    }

    /* back controls — make them work in the walkable prototype.
       Many screens use <button class="back"> with no href (inert on click);
       wire every .back to real history. When there is no history (a page opened
       directly / deep-linked), an <a class="back" href> still follows its href.

       .dr-back added 2026-08-15 (rev 84). The painted layer renamed the class
       and this selector was never widened, so 24 screens shipped a Back button
       that matched nothing here and did nothing on click — verified in the
       browser, 0 matches and the URL unchanged. history.back() is also the
       HIG-correct behaviour: the back control returns to the previous screen in
       the navigation stack, i.e. wherever the user actually came from, which a
       hardcoded href cannot do on a screen with more than one way in. */
    var backEls = document.querySelectorAll(".wf-frame .back, .wf-frame .dr-back");
    for (var bi=0; bi<backEls.length; bi++){
      (function(el){
        if (el.tagName === "BUTTON") el.type = "button";
        el.addEventListener("click", function(e){
          if (window.history.length > 1){ e.preventDefault(); window.history.back(); }
        });
      })(backEls[bi]);
    }

    /* toasts — any control with data-toast raises one (rev 89). The message
       lives on the element so the page stays declarative and the behaviour
       stays here, the way the nav and the language switch already do.
       role="status" announces it without moving focus (WCAG 4.1.3); it
       dismisses itself and on click, and it does not navigate, because a
       toast the user never sees is not a toast. */
    var toastEls = document.querySelectorAll(".wf-frame [data-toast]");
    for (var ti=0; ti<toastEls.length; ti++){
      (function(el){
        el.addEventListener("click", function(e){
          e.preventDefault();
          var frame = el.closest(".wf-frame"); if (!frame) return;
          /* Where the toast is PARENTED is an accessibility decision, not a
             layout one (rev 96). A sheet is aria-modal="true", so everything
             outside it is hidden from assistive technology — a toast appended
             to the frame while a sheet is open would be announced to nobody.
             So when the control that raised it lives in a dialog, the toast
             is built inside that dialog and floats above its top edge. */
          var sheet = el.closest('[role="dialog"]');
          var host  = sheet || frame;
          var t = host.querySelector(":scope > .dr-toast");
          if (!t){
            t = document.createElement("div");
            t.setAttribute("role", "status");
            host.appendChild(t);
          }
          t.className = sheet ? "dr-toast dr-toast--over-sheet" : "dr-toast";
          if (t._hide) clearTimeout(t._hide);
          t.textContent = el.getAttribute("data-toast");
          /* sit clear of whichever bottom chrome this screen has — an action
             bar is taller than a tab bar, and a toast that covers the button
             that raised it is worse than no toast. Measured, not assumed.
             In a sheet there is nothing to measure: the sheet owns the bottom
             edge, and the CSS puts the toast above it. */
          if (sheet){
            t.style.bottom = "";
          } else {
            var foot = frame.querySelector(".dr-actionbar, .dr-tabbar");
            t.style.bottom = ((foot ? foot.getBoundingClientRect().height : 0) + 20) + "px";
          }
          void t.offsetWidth;
          t.classList.add("is-on");
          t._hide = setTimeout(function(){ t.classList.remove("is-on"); }, 4000);
          t.onclick = function(){ clearTimeout(t._hide); t.classList.remove("is-on"); };
        });
      })(toastEls[ti]);
    }

    /* keep the current node in view within the tree */
    var active = tree.querySelector("a.current") || tree.querySelector("a.in-current");
    if (active && active.scrollIntoView) active.scrollIntoView({ block: "center" });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
