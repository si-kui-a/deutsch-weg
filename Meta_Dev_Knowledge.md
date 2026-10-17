# Meta_Dev_Knowledge.md — deutsch-weg

## 決策紀錄
- ARCH-01 [CORE_IMMUTABLE]: 純靜態站（HTML/CSS/原生JS），拒絕框架與build step。理由：上線營運成本0（GitHub Pages）、維護門檻最低、運算複雜度最低。
- ARCH-02 [CORE_IMMUTABLE]: 內容與邏輯分離——data/*.js 純資料、js/*.js 純邏輯。內容擴充不碰程式碼。
- ARCH-03: 資料用 window.DATA 全域 script 而非 fetch(JSON)。理由：file:// 本地雙擊即可運行，無 CORS 問題。天花板：資料量>1MB 時改 fetch+分片。
- SRS-01: SM-2 簡化版（三鍵評分：忘記/模糊/記得）。完整SM-2的q0-q5六級評分對行動端過重。
- UI-01 [CORE_IMMUTABLE]: 性別三色（der藍/die紅/das綠）同時是學習法與視覺識別，任何換皮不得移除。
- UI-02: ZenTheme token 化於 css :root，換皮只改 token。

## 已知風險（p>60%）
- R-01: localStorage 進度不跨裝置。緩解：MVP 可接受；v0.2 加 export/import JSON 按鈕。
- R-02: 內容量（每級16字）不足以支撐真實營運。緩解：架構已就緒，擴充=純資料工作，可外包/AI批量生成後人工校對。
- R-03: 無 analytics → 上線後看不到使用行為。緩解：GitHub Pages 可加 privacy-friendly 的 GoatCounter（免費、無cookie），列入 v0.2。
- R-04（2026-09-11全倉庫稽核發現，尚未觸發，已加CI防護）：同一級別內若 `de`
  重複，`js/app.js` 的 `cardId()`（`level + ":" + de`）會讓兩個不同單字共用
  同一份 SRS 進度，其中一個的複習狀態被另一個悄悄覆蓋；若 `zh` 重複，
  `buildQuiz()` 用文字比對判斷測驗選項對錯，會出現兩顆看起來一樣的選項。
  目前16字/級別皆無重複，是 R-02「內容量待擴充」實現時最容易引入的錯誤
  ——已加 `scripts/check_vocab_data.js` + CI 步驟先擋住，不等內容真的
  擴充出問題才處理。
- R-05（2026-09-11 repo-bug-audit-pipeline稽核發現並修復）：
  `scripts/pre_commit_guard.py`的`check_no_secret_files()`跟
  `.github/workflows/ci.yml`的「Secret/key file scan」宣稱做同一件事
  （擋secrets/簽章金鑰檔案進版控），但金鑰副檔名清單悄悄長歪——CI擋
  `.jks/.keystore/.p12/.pem`，pre-commit hook（第一道防線，commit前
  就該擋下）漏了`.pem`，只有等push後CI才會抓到（此時檔案已經進了
  git history）。已修：hook補上`.pem`，兩邊清單同步。
- R-06（2026-10-17 以社統題庫為基準比對時發現並修復）：`buildQuiz()`
  每題都取同一串洗牌結果的前三個字當錯誤選項，第 4 題起三個錯誤選項
  完全相同，正確答案成了唯一的「新選項」，測驗形同送分。已修：出題抽到
  `js/quiz.js` 的純函式（每題各自抽錯誤選項、釋義相同的字不當錯誤選項、
  Fisher–Yates 洗牌取代有偏差的 `sort(random-0.5)`），`scripts/test_core.js`
  用真實單字資料測試並證明抓得到舊寫法，CI 執行。另發現 `SRS._test()`
  用 `console.assert`，失敗不丟例外，測試改為直接驗證到期行為。

## 驗證紀錄
- [ ] 瀏覽器四分頁功能驗證（本 session 以 node 靜態檢查替代，實機驗證待使用者執行）
- [x] JS 語法檢查通過（node --check）
- [x] SRS 自我測試函式內建（console 執行 SRS._test()）
- [x] 2026-10-17 headless Chrome 帶既有 SRS 進度實測：未到期的字排除在佇列外、8 題錯誤選項各不相同、答錯寫回 SRS

## Deploy Log
- DEPLOY-01: bundle → GitHub 首次推送，SHA b0af378f6c8f6b0b8e6cb19b334967542592095b，時間 2026-07-07（force push 覆蓋網頁上傳版 47ff9ca，經 user PROCEED 核准）
- 本地 repo: 本 repo 所在資料夾（舊路徑 deutsch-weg-repo 已依專案命名規則改名，見 C:\Projects\INDEX.md）；remote 走 SSH alias github.com-deutsch-weg（deploy key id_ed25519_backup，僅此 repo 權限）
- HALT-S1-DST_EXISTS: C:\Projects\deutsch-weg 已存在（.env + bundle + 無 .git 純檔案複本），user 裁決改 clone 至 deutsch-weg-repo
- HALT-S2-NO_GITIGNORE: bundle 內無 .gitignore，已補（.env/.env.*/*.pem/*.key/secrets//*.bundle）
- HALT-PREFLIGHT-SSH: 原無帳號級 GitHub key，user 以 deploy key 方案解決
- HALT-S5-SCRIPT_STRUCTURE_UNKNOWN: 任務書預設的 hourly $repos 陣列 .ps1 不存在。實際為 IntelPusher_Backup（每日 03:00，bash backup.sh，intel-pusher 專用含加密步驟）——不共用、不修改，避免盲改生產腳本。
- DEPLOY-02: user 裁決方案 A（每日）— 另建 backup.ps1（add→commit→push，ASCII-only、UTF-8 no BOM）＋ 排程任務 DeutschWeg_Backup（每日 03:10）。logs/ 已入 .gitignore 防 log 自我提交迴圈。
