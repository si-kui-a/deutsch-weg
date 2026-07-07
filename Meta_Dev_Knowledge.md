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

## 驗證紀錄
- [ ] 瀏覽器四分頁功能驗證（本 session 以 node 靜態檢查替代，實機驗證待使用者執行）
- [x] JS 語法檢查通過（node --check）
- [x] SRS 自我測試函式內建（console 執行 SRS._test()）

## Deploy Log
- DEPLOY-01: bundle → GitHub 首次推送，SHA b0af378f6c8f6b0b8e6cb19b334967542592095b，時間 2026-07-07（force push 覆蓋網頁上傳版 47ff9ca，經 user PROCEED 核准）
- 本地 repo: C:\Projects\deutsch-weg-repo；remote 走 SSH alias github.com-deutsch-weg（deploy key id_ed25519_backup，僅此 repo 權限）
- HALT-S1-DST_EXISTS: C:\Projects\deutsch-weg 已存在（.env + bundle + 無 .git 純檔案複本），user 裁決改 clone 至 deutsch-weg-repo
- HALT-S2-NO_GITIGNORE: bundle 內無 .gitignore，已補（.env/.env.*/*.pem/*.key/secrets//*.bundle）
- HALT-PREFLIGHT-SSH: 原無帳號級 GitHub key，user 以 deploy key 方案解決
- DEPLOY-02: 待定 — 既有備份非 hourly 亦非 $repos 陣列 .ps1：實際為 IntelPusher_Backup（每日 03:00，bash backup.sh，intel-pusher 專用含加密步驟，不可共用）。deutsch-weg 掛備份需另建 script + 排程，等待 user 裁決。
