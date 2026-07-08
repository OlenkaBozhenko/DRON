/* ─────────────────────────────────────────────────────────────────────────
   DRON wireframes — shared shell (nav tree + viewport switcher)
   One source, included on every wireframe page:  <script src="_wf-shell.js"></script>
   • Left panel = a TREE: section → screen → its real states, indented.
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
      { name: "Account (profile · role switch)",       file: "account.html",            states: [] },
      { name: "Switch role · global",                  file: "switch-role.html",        states: [] }
    ]},
    { title: "Client · MJ-1", screens: [
      { name: "Home / start an order",                 file: "listings.html",           states: [["empty","listings-empty.html"],["error","listings-error.html"],["loading","listings-loading.html"]] },
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
      { name: "Ratings dashboard",                     file: "ratings.html",            states: [["empty","ratings-empty.html"]] }
    ]}
  ];

  /* Not-yet-built pages shown as "planned" (faint). All main-path + step-8 screens
     are built — nothing planned remains. */
  var PLANNED = {};

  /* Viewport presets for the preview switcher. */
  var SIZES = { mobile: [375, 812], tablet: [768, 1024], desktop: [1280, 800] };

  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  function currentFile(){
    var f = (location.pathname.split("/").pop() || "").toLowerCase();
    return f || "listings.html";
  }

  /* ── styles (grayscale, from _conventions.md §4) ── */
  var CSS = ''
    + '.wf-shelled{ padding:52px 24px 24px 272px !important; }'
    + '.wf-shelled .wf-frame{ order:-1; }'  /* frame sits right next to the tree, meta after */
    + '.wf-tree{ position:fixed; top:0; left:0; bottom:0; width:248px; z-index:50; overflow-y:auto;'
    + '  background:#FFFFFF; border-right:1px solid rgba(0,0,0,0.12); padding:10px 10px 24px;'
    + '  font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","SF Pro Display",system-ui,sans-serif; -webkit-font-smoothing:antialiased; }'
    + '.wf-tree a.wf-back{ position:sticky; top:8px; z-index:51; display:flex; align-items:center;'
    + '  height:38px; margin:0 0 14px; padding:0 12px; border-radius:8px; text-decoration:none;'
    + '  background:#111111; color:#FFFFFF; font-size:12px; font-weight:600; letter-spacing:.04em; }'
    + '.wf-tree a.wf-back:hover{ background:#252525; }'
    + '.wf-back .wf-back-arrow{ margin-right:8px; color:rgba(255,255,255,0.6); }'
    + '.wf-tree-head{ font-size:12px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:#111111; padding:0 8px 2px; }'
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
    + '.wf-toolbar{ position:fixed; top:0; left:248px; right:0; height:52px; z-index:40; display:flex; align-items:center; gap:12px;'
    + '  padding:0 20px; background:#F4F4F4; border-bottom:1px solid rgba(0,0,0,0.12);'
    + '  font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","SF Pro Display",system-ui,sans-serif; }'
    + '.wf-tb-title{ font-size:11px; font-weight:600; letter-spacing:.10em; text-transform:uppercase; color:#909090; }'
    + '.wf-seg{ display:flex; border:1px solid rgba(0,0,0,0.15); border-radius:6px; overflow:hidden; }'
    + '.wf-seg button{ height:32px; padding:0 14px; border:0; border-right:1px solid rgba(0,0,0,0.09); background:#FFFFFF;'
    + '  font:inherit; font-size:13px; font-weight:600; color:#5A5A5A; cursor:pointer; }'
    + '.wf-seg button:last-child{ border-right:0; }'
    + '.wf-seg button.on{ background:#111111; color:#FFFFFF; }'
    + '.wf-seg button:focus-visible{ outline:2px solid rgba(0,0,0,0.15); outline-offset:-2px; }'
    + '.wf-dim{ font-size:13px; color:#5A5A5A; font-variant-numeric:tabular-nums; }'
    + '.wf-tb-cur{ margin-left:auto; font-size:13px; color:#252525; font-weight:600; }'
    + '@media print{ .wf-tree,.wf-toolbar{ display:none; } .wf-shelled{ padding:0 !important; } }';

  function buildTreeHTML(cur){
    var out = '<a class="wf-back" href="../research.html"><span class="wf-back-arrow" aria-hidden="true">&larr;</span>Back to DRON</a>'
            + '<div class="wf-tree-head">DRON · Wireframes</div>'
            + '<p class="wf-tree-note">Screen = success / base page. Indented = its states (only those real in _screens.md). Faint = planned, not built yet.</p>';
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

    /* left tree */
    var tree = document.createElement("nav");
    tree.className = "wf-tree";
    tree.setAttribute("aria-label", "Wireframe map");
    tree.innerHTML = buildTreeHTML(cur);
    document.body.appendChild(tree);

    /* top toolbar — viewport switcher */
    var bar = document.createElement("div");
    bar.className = "wf-toolbar";
    bar.innerHTML =
        '<span class="wf-tb-title">Preview</span>'
      + '<div class="wf-seg" role="group" aria-label="Preview size">'
      + '  <button type="button" data-size="mobile">Mobile</button>'
      + '  <button type="button" data-size="tablet">Tablet</button>'
      + '  <button type="button" data-size="desktop">Desktop</button>'
      + '</div>'
      + '<span class="wf-dim" aria-live="polite"></span>'
      + '<span class="wf-tb-cur">'+esc(currentName(cur))+'</span>';
    document.body.appendChild(bar);
    document.body.classList.add("wf-shelled");

    var frame = document.querySelector(".wf-frame");
    var dim = bar.querySelector(".wf-dim");
    var btns = bar.querySelectorAll(".wf-seg button");

    function apply(key){
      if (!SIZES[key]) key = "mobile";
      var w = SIZES[key][0], h = SIZES[key][1];
      if (frame){ frame.style.width = w+"px"; frame.style.height = h+"px"; }
      if (dim) dim.textContent = w+" × "+h;
      for (var i=0;i<btns.length;i++) btns[i].classList.toggle("on", btns[i].getAttribute("data-size")===key);
      try { localStorage.setItem("wf-viewport", key); } catch(e){}
    }
    for (var i=0;i<btns.length;i++){
      (function(b){ b.addEventListener("click", function(){ apply(b.getAttribute("data-size")); }); })(btns[i]);
    }
    var saved = "mobile";
    try { saved = localStorage.getItem("wf-viewport") || "mobile"; } catch(e){}
    apply(saved);

    /* keep the current node in view within the tree */
    var active = tree.querySelector("a.current") || tree.querySelector("a.in-current");
    if (active && active.scrollIntoView) active.scrollIntoView({ block: "center" });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
