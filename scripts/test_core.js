// test_core.js — 出題與 SRS 規則的單元測試（零依賴，node 直接跑，CI 也跑這支）
//
// 用真實的 data/vocab.js 跑每個級別。測驗的檢查也拿舊寫法跑一次，
// 確認這支測試真的抓得到 Meta_Dev_Knowledge.md R-06 那個 bug。
"use strict";
const path = require("node:path");
const assert = require("node:assert");

global.window = {};
require(path.join(__dirname, "..", "data", "vocab.js"));
require(path.join(__dirname, "..", "js", "srs.js"));
const QUIZ = require(path.join(__dirname, "..", "js", "quiz.js"));
const VOCAB = global.window.VOCAB, SRS = global.window.SRS;

// 可重現的亂數（mulberry32）
function seeded(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 回傳問題清單；空陣列＝通過
function quizProblems(qs) {
  const out = [];
  qs.forEach((q, i) => {
    if (q.opts.filter(o => o === q.w.zh).length !== 1) out.push(`第${i + 1}題正確答案不是剛好出現一次`);
    if (new Set(q.opts).size !== q.opts.length) out.push(`第${i + 1}題有重複選項`);
  });
  // 錯誤選項組合：題數夠多時不該幾乎全部相同
  const sets = qs.map(q => q.opts.filter(o => o !== q.w.zh).sort().join("|"));
  const top = Math.max(...[...new Set(sets)].map(s => sets.filter(x => x === s).length));
  if (qs.length >= 6 && top > qs.length / 2) out.push(`${top}/${qs.length} 題的錯誤選項完全相同`);
  return out;
}

// 舊寫法（R-06 修正前），只用來證明 quizProblems 抓得到
function legacyBuild(words, rand) {
  const w2 = QUIZ.shuffle(words, rand);
  return w2.slice(0, 8).map(w => ({
    w, opts: w2.filter(x => x.de !== w.de).slice(0, 3).map(x => x.zh).concat([w.zh]), picked: null,
  }));
}

let n = 0;
function test(name, fn) { fn(); n++; console.log("ok - " + name); }

test("每個級別：選項正確、不重複、錯誤選項每題不同", () => {
  for (const level of Object.keys(VOCAB)) {
    for (let seed = 1; seed <= 50; seed++) {
      const qs = QUIZ.build(VOCAB[level], 8, seeded(seed));
      assert.strictEqual(qs.length, Math.min(8, VOCAB[level].length));
      assert.deepStrictEqual(quizProblems(qs), [], `${level} seed=${seed}`);
      qs.forEach(q => assert.strictEqual(q.opts.length, 4, `${level} 應有 4 個選項`));
    }
  }
});

test("檢查會抓到舊寫法的 bug", () => {
  const caught = [1, 2, 3, 4, 5].filter(s => quizProblems(legacyBuild(VOCAB.a1, seeded(s))).length);
  assert.strictEqual(caught.length, 5);
});

test("釋義文字相同的字不會成為錯誤選項", () => {
  const words = [
    { de: "a", zh: "同" }, { de: "b", zh: "同" }, { de: "c", zh: "甲" },
    { de: "d", zh: "乙" }, { de: "e", zh: "丙" },
  ];
  for (let s = 1; s <= 30; s++) {
    QUIZ.build(words, 5, seeded(s)).forEach(q => {
      assert.strictEqual(q.opts.filter(o => o === q.w.zh).length, 1);
    });
  }
});

test("shuffle 不改動原陣列、元素不變", () => {
  const src = [1, 2, 3, 4, 5];
  const out = QUIZ.shuffle(src, seeded(7));
  assert.deepStrictEqual(src, [1, 2, 3, 4, 5]);
  assert.deepStrictEqual(out.slice().sort(), [1, 2, 3, 4, 5]);
});

// SRS._test() 用 console.assert，失敗不會丟例外，所以這裡直接驗證行為
test("SRS：三次記得後 6 天內不到期，忘記後立刻到期", () => {
  const realNow = Date.now;
  try {
    SRS.reset();
    SRS.review("t1", 2); SRS.review("t1", 2); SRS.review("t1", 2);
    Date.now = () => realNow() + 6 * 86400000;
    assert.strictEqual(SRS.isDue("t1"), false);
    Date.now = realNow;
    SRS.review("t1", 0);
    assert.strictEqual(SRS.isDue("t1"), true);
    assert.strictEqual(SRS.isDue("never-seen"), true);
  } finally {
    Date.now = realNow;
    SRS.reset();
  }
});

console.log(`${n} tests passed`);
