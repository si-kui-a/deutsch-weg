// ============================================================
// quiz.js — 測驗出題（純函式，可在 node 測試：scripts/test_core.js）
// 從 app.js 抽出的理由見 Meta_Dev_Knowledge.md R-06：
// 原寫法每題都取同一串洗牌結果的前三個字當錯誤選項，第 4 題起
// 三個錯誤選項完全相同，正確答案成了唯一的「新選項」，一看就知道。
// ============================================================
(function (root) {
  "use strict";

  // Fisher–Yates；rand 可注入，測試才能重現
  function shuffle(list, rand) {
    var a = list.slice(), r = rand || Math.random;
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(r() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // 每題各自隨機抽錯誤選項；釋義文字相同的字不能當錯誤選項
  // （buildQuiz 用文字比對對錯，見 R-04）
  function build(words, count, rand) {
    var picked = shuffle(words, rand).slice(0, Math.min(count, words.length));
    return picked.map(function (w) {
      var seen = {};
      seen[w.zh] = true;
      var wrong = shuffle(words, rand).filter(function (x) {
        if (seen[x.zh]) return false;
        seen[x.zh] = true;
        return true;
      }).slice(0, 3).map(function (x) { return x.zh; });
      return { w: w, opts: shuffle(wrong.concat([w.zh]), rand), picked: null };
    });
  }

  var QUIZ = { shuffle: shuffle, build: build };
  if (typeof module === "object" && module.exports) module.exports = QUIZ;
  else root.QUIZ = QUIZ;
})(typeof window === "undefined" ? globalThis : window);
