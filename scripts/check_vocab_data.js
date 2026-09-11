// check_vocab_data.js — data/vocab.js 每級別內容唯一性檢查（零依賴，node 直接跑）
//
// 檢查兩件事，理由見 Meta_Dev_Knowledge.md R-04：
//  1. 同一級別內 `de`（德文字）不可重複 —— js/app.js 的 cardId() 用
//     `level + ":" + de` 當 SRS（間隔重複）進度的 key，重複會讓兩個不同
//     單字共用同一份複習進度，其中一個的記憶狀態會被另一個悄悄覆蓋。
//  2. 同一級別內 `zh`（中文釋義）不可重複 —— js/app.js 的 buildQuiz()
//     用文字比對 `o === cur.w.zh` 判斷測驗選項對錯，若有兩個不同單字
//     的釋義文字相同，測驗選項會出現兩顆看起來一樣的按鈕，UX混淆。
//
// 目前（16字/級別）沒有觸發過，但 R-02 已載明未來會批量擴充內容，
// 這正是這類重複最容易被引入的時機，先把機械檢查準備好。
"use strict";
const path = require("node:path");

global.window = {};
require(path.join(__dirname, "..", "data", "vocab.js"));
const VOCAB = global.window.VOCAB;

let errors = [];
for (const level of Object.keys(VOCAB)) {
  const words = VOCAB[level];
  for (const field of ["de", "zh"]) {
    const seen = new Map();
    words.forEach((w, idx) => {
      const key = w[field];
      if (seen.has(key)) {
        errors.push(`${level}: 重複的 ${field}「${key}」（索引 ${seen.get(key)} 與 ${idx}）`);
      } else {
        seen.set(key, idx);
      }
    });
  }
}

if (errors.length) {
  console.log("FAILED:");
  errors.forEach((e) => console.log("  - " + e));
  process.exit(1);
}
console.log(`OK: 全部 ${Object.keys(VOCAB).length} 個級別的 de/zh 皆無重複`);
