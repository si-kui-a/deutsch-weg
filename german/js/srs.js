// ============================================================
// srs.js — 間隔重複引擎（SM-2 簡化版）＋儲存層
// 純前端、無後端：進度存 localStorage（key: dw.srs.v1）
// ponytail: localStorage 單機版，天花板=換裝置進度不同步 → 未來可加 export/import JSON 或雲端同步
// ============================================================
(function () {
  "use strict";
  var KEY = "dw.srs.v1";

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { // 私密模式/配額滿/資料毀損 → 降級為當次記憶
      return {};
    }
  }
  function save(db) {
    try { localStorage.setItem(KEY, JSON.stringify(db)); }
    catch (e) { /* 寫入失敗不阻斷學習流程 */ }
  }

  var db = load();
  var DAY = 86400000;

  // grade: 0=忘記 1=模糊 2=記得
  function review(cardId, grade) {
    var c = db[cardId] || { ef: 2.5, iv: 0, reps: 0 };
    if (grade === 0) {                 // 忘記 → 重置間隔
      c.reps = 0; c.iv = 0;
      c.ef = Math.max(1.3, c.ef - 0.2);
    } else {
      c.reps += 1;
      if (c.reps === 1) c.iv = 1;
      else if (c.reps === 2) c.iv = 3;
      else c.iv = Math.round(c.iv * c.ef);
      if (grade === 1) c.ef = Math.max(1.3, c.ef - 0.05); // 模糊小扣
      else c.ef = Math.min(2.8, c.ef + 0.05);             // 記得小加
    }
    c.due = Date.now() + c.iv * DAY;
    db[cardId] = c;
    save(db);
  }

  function isDue(cardId) {
    var c = db[cardId];
    return !c || !c.due || c.due <= Date.now();
  }

  function stats(cardIds) {
    var s = { total: cardIds.length, seen: 0, due: 0, mature: 0 };
    cardIds.forEach(function (id) {
      var c = db[id];
      if (c) s.seen++;
      if (isDue(id)) s.due++;
      if (c && c.iv >= 21) s.mature++; // 間隔≥21天視為長期記憶
    });
    return s;
  }

  function reset() { db = {}; save(db); }

  window.SRS = { review: review, isDue: isDue, stats: stats, reset: reset };

  // 自我檢查（開 console 執行 SRS._test()）
  window.SRS._test = function () {
    var bak = JSON.stringify(db);
    reset();
    review("t1", 2); review("t1", 2); review("t1", 2);
    console.assert(db.t1.iv >= 7, "三次記得後間隔應≥7天, got " + db.t1.iv);
    review("t1", 0);
    console.assert(db.t1.iv === 0 && db.t1.reps === 0, "忘記應重置");
    db = JSON.parse(bak); save(db);
    return "SRS self-check passed";
  };
})();
