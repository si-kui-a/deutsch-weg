// ============================================================
// app.js — 視圖層（零依賴原生 JS）
// 結構：state → render 函式 × 4（home/vocab/grammar/quiz）→ 事件委派
// 維護原則：資料改 data/*.js，樣式改 css/zen.css，此檔只管流程
// ============================================================
(function () {
  "use strict";
  var LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
  var LEVEL_LABEL = { a1: "A1 入門", a2: "A2 基礎", b1: "B1 進階", b2: "B2 獨立", c1: "C1 流利", c2: "C2 精通" };
  var $ = function (sel) { return document.querySelector(sel); };

  var state = { tab: "home", level: "a1", queue: [], idx: 0, flipped: false, quiz: null };

  // ---------- 共用 ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function cardId(w) { return state.level + ":" + w.de; }
  function genderClass(g) { return g === "der" ? "g-der" : g === "die" ? "g-die" : g === "das" ? "g-das" : ""; }
  function genderDot(g) { return g ? '<span class="dot ' + genderClass(g) + '"></span>' : ""; }

  function levelPicker() {
    return '<div class="levels" role="tablist" aria-label="級別選擇">' + LEVELS.map(function (l) {
      return '<button class="lv' + (state.level === l ? " on" : "") + '" data-level="' + l + '" role="tab" aria-selected="' + (state.level === l) + '">' + LEVEL_LABEL[l] + "</button>";
    }).join("") + "</div>";
  }

  // ---------- 首頁 ----------
  function renderHome() {
    var rows = LEVELS.map(function (l) {
      var ids = window.VOCAB[l].map(function (w) { return l + ":" + w.de; });
      var s = window.SRS.stats(ids);
      var pct = s.total ? Math.round((s.seen / s.total) * 100) : 0;
      return '<button class="lrow" data-goto="' + l + '">' +
        '<span class="lrow-name">' + LEVEL_LABEL[l] + "</span>" +
        '<span class="lrow-meta">' + window.VOCAB[l].length + " 單字 · " + window.GRAMMAR[l].length + " 文法 · 待複習 " + s.due + "</span>" +
        '<span class="bar"><span class="bar-fill" style="width:' + pct + '%"></span></span>' +
        "</button>";
    }).join("");
    return '<section class="hero">' +
      '<p class="eyebrow">Der Weg · 德語之路</p>' +
      "<h1><em class=\"g-der\">der</em>·<em class=\"g-die\">die</em>·<em class=\"g-das\">das</em><br>從顏色開始記德文</h1>" +
      '<p class="lede">三種學習法內建：性別色彩編碼、間隔重複（SRS）、口訣聯想。每天 10 分鐘，進度自動保存在這台裝置。</p>' +
      "</section>" +
      '<section class="lrows">' + rows + "</section>" +
      '<section class="legend"><span><span class="dot g-der"></span>der 陽性</span><span><span class="dot g-die"></span>die 陰性</span><span><span class="dot g-das"></span>das 中性</span></section>';
  }

  // ---------- 單字卡 ----------
  function buildQueue() {
    var words = window.VOCAB[state.level];
    var due = words.filter(function (w) { return window.SRS.isDue(cardId(w)); });
    state.queue = (due.length ? due : words.slice()).sort(function () { return Math.random() - 0.5; });
    state.idx = 0;
    state.flipped = false;
  }
  function renderVocab() {
    if (!state.queue.length) buildQueue();
    var w = state.queue[state.idx];
    if (!w) return levelPicker() + '<div class="done"><p>本輪複習完成。</p><button class="btn" data-act="again">再來一輪</button></div>';
    var front = '<div class="word ' + genderClass(w.g) + '">' + esc(w.de) + "</div>" +
      '<p class="hint">' + (w.g ? "先猜性別，再想意思" : "想一下中文意思") + "</p>";
    var back = '<div class="word ' + genderClass(w.g) + '">' + esc(w.de) + "</div>" +
      '<div class="zh">' + esc(w.zh) + (w.pl && w.pl !== "—" ? '<span class="pl">複數 ' + esc(w.pl) + "</span>" : "") + "</div>" +
      '<p class="ex">' + esc(w.ex) + "<br><span>" + esc(w.exZh) + "</span></p>" +
      '<p class="mn">記法 · ' + esc(w.mn) + "</p>";
    var grades = '<div class="grades">' +
      '<button class="btn g0" data-grade="0">忘記</button>' +
      '<button class="btn g1" data-grade="1">模糊</button>' +
      '<button class="btn g2" data-grade="2">記得</button></div>';
    return levelPicker() +
      '<p class="counter">' + (state.idx + 1) + " / " + state.queue.length + "</p>" +
      '<div class="card" data-act="flip" role="button" tabindex="0" aria-label="點擊翻面">' + (state.flipped ? back : front) + "</div>" +
      (state.flipped ? grades : '<p class="tap">點卡片翻面</p>');
  }

  // ---------- 文法 ----------
  function renderGrammar() {
    var topics = window.GRAMMAR[state.level].map(function (t) {
      var table = "";
      if (t.table) {
        table = '<table><thead><tr>' + t.table.head.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          t.table.rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") +
          "</tbody></table>";
      }
      var pts = "<ul>" + t.pts.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>";
      return '<details class="topic"><summary>' + esc(t.title) + "</summary>" +
        '<p class="core">' + esc(t.core) + "</p>" +
        '<p class="mn">' + esc(t.mn) + "</p>" + table + pts + "</details>";
    }).join("");
    return levelPicker() + '<div class="topics">' + topics + "</div>";
  }

  // ---------- 測驗 ----------
  function buildQuiz() {
    var words = window.VOCAB[state.level].slice().sort(function () { return Math.random() - 0.5; });
    var qs = words.slice(0, Math.min(8, words.length)).map(function (w) {
      var wrong = words.filter(function (x) { return x.de !== w.de; }).slice(0, 3).map(function (x) { return x.zh; });
      var opts = wrong.concat([w.zh]).sort(function () { return Math.random() - 0.5; });
      return { w: w, opts: opts, picked: null };
    });
    state.quiz = { qs: qs, i: 0, score: 0 };
  }
  function renderQuiz() {
    if (!state.quiz) buildQuiz();
    var q = state.quiz;
    if (q.i >= q.qs.length) {
      return levelPicker() + '<div class="done"><p class="score">' + q.score + " / " + q.qs.length + '</p><p>' +
        (q.score === q.qs.length ? "全對。此級別可以推進。" : "錯的字會回到單字卡佇列，明天再驗收。") +
        '</p><button class="btn" data-act="requiz">再測一次</button></div>';
    }
    var cur = q.qs[q.i];
    var opts = cur.opts.map(function (o) {
      var cls = "";
      if (cur.picked !== null) {
        if (o === cur.w.zh) cls = " right";
        else if (o === cur.picked) cls = " wrong";
      }
      return '<button class="opt' + cls + '" data-opt="' + esc(o) + '"' + (cur.picked !== null ? " disabled" : "") + ">" + esc(o) + "</button>";
    }).join("");
    return levelPicker() +
      '<p class="counter">' + (q.i + 1) + " / " + q.qs.length + "</p>" +
      '<div class="quiz"><div class="word ' + genderClass(cur.w.g) + '">' + esc(cur.w.de) + "</div>" + opts +
      (cur.picked !== null ? '<button class="btn next" data-act="nextq">下一題</button>' : "") + "</div>";
  }

  // ---------- Render ----------
  function render() {
    var view = { home: renderHome, vocab: renderVocab, grammar: renderGrammar, quiz: renderQuiz }[state.tab]();
    $("#view").innerHTML = view;
    document.querySelectorAll(".tab").forEach(function (b) {
      b.classList.toggle("on", b.dataset.tab === state.tab);
      b.setAttribute("aria-selected", String(b.dataset.tab === state.tab));
    });
  }

  // ---------- 事件（單一委派） ----------
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-tab],[data-level],[data-goto],[data-act],[data-grade],[data-opt]");
    if (!t) return;
    if (t.dataset.tab) { state.tab = t.dataset.tab; state.queue = []; state.quiz = null; }
    else if (t.dataset.level) { state.level = t.dataset.level; state.queue = []; state.quiz = null; }
    else if (t.dataset.goto) { state.level = t.dataset.goto; state.tab = "vocab"; state.queue = []; }
    else if (t.dataset.act === "flip") { state.flipped = !state.flipped; }
    else if (t.dataset.act === "again") { buildQueue(); }
    else if (t.dataset.act === "requiz") { buildQuiz(); }
    else if (t.dataset.act === "nextq") { state.quiz.i++; }
    else if (t.dataset.grade !== undefined) {
      var w = state.queue[state.idx];
      window.SRS.review(cardId(w), Number(t.dataset.grade));
      state.idx++; state.flipped = false;
    }
    else if (t.dataset.opt !== undefined) {
      var cur = state.quiz.qs[state.quiz.i];
      cur.picked = t.dataset.opt;
      if (cur.picked === cur.w.zh) state.quiz.score++;
      else window.SRS.review(state.level + ":" + cur.w.de, 0); // 答錯 → 打回 SRS 佇列
    }
    render();
  });
  // 鍵盤：空白鍵翻卡（無障礙）
  document.addEventListener("keydown", function (e) {
    if ((e.key === " " || e.key === "Enter") && e.target.classList && e.target.classList.contains("card")) {
      e.preventDefault(); state.flipped = !state.flipped; render();
    }
  });

  render();
})();
