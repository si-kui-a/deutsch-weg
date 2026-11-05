# 語言學習網站（Language Learning）

繁中母語者用的多語言學習網站，原為德語網站 Der Weg（repo 原名 deutsch-weg，2026-11-05 改名）。純靜態、零框架、零後端。
線上版：https://si-kui-a.github.io/language-learning/

| 語言 | 資料夾 | 內容 |
|---|---|---|
| 德文 | `german/` | Der Weg — A1–C2 單字卡、文法、測驗 |
| 印尼文 | `indonesian/` | 課堂單字與講義滑卡（共用社統滑卡程式） |

- 根目錄 `index.html` 只是語言選單；每個語言各自一個資料夾，程式、樣式、localStorage key 互不相干。
- 新增語言：開新資料夾、在根目錄 `index.html` 加一個連結，CI 與 `PROJECT_PROFILE.yaml` 的 `find german indonesian` 也要加上新資料夾。

## Purpose（德文 `german/`）
- 目標使用者：繁中母語的德語學習者（A1–C2）
- 三套內建學習法：
  1. **性別色彩編碼** — der藍 / die紅 / das綠，全站視覺一致
  2. **間隔重複 SRS** — SM-2 簡化演算法，進度存 localStorage
  3. **口訣聯想** — 每個單字/文法主題附構詞、同源字或圖像記憶法（不用諧音）
- 營運定位：GitHub Pages 免費託管，運算成本 0，無伺服器維護

## Setup
```
本地開發：直接雙擊 index.html 或 german/index.html（無 build step、無 npm install）
上線：GitHub repo → Settings → Pages → Deploy from branch (main, /root)
```

## Dependency
| 項目 | 說明 | 風險 |
|---|---|---|
| Google Fonts (Fraunces / Noto Sans TC) | 唯一外部資源，漸進增強 | 載入失敗自動 fallback 系統字型，功能不受影響 |
| localStorage | 進度儲存 | 私密模式下降級為當次記憶，不報錯 |
| 其他 | 無。零 npm 依賴、零框架 | — |

## Maintenance Note
| 要改什麼 | 改哪裡 | 需要懂程式嗎 |
|---|---|---|
| 新增/修改德文單字 | `german/data/vocab.js`（複製一筆物件） | 否 |
| 新增/修改德文文法主題 | `german/data/grammar.js`（複製一筆物件） | 否 |
| 印尼文滑卡（`indonesian/`） | 題目 `indonesian/cards.json` 由印尼文課程倉庫 `id_cards.py export` 產生；介面直接執行社統滑卡的程式（`site.js` 設定題庫、儲存 key 與奶白配色，見 social-statistics-swipe-cards README「給其他網站共用」） | 否 |
| 德文換配色/換皮 | `german/css/zen.css` 的 `:root` token 區 | 否 |
| 德文 SRS 演算法 | `german/js/srs.js` | 是 |
| 德文頁面流程 | `german/js/app.js` | 是 |
| 語言選單 | 根目錄 `index.html` | 否 |

- 資料 schema 定義寫在各 data 檔頂部註解，新增內容照抄格式即可
- 已知天花板（`ponytail:` 註解已標記於程式碼內）：
  - localStorage 單機儲存 → 換裝置不同步；升級路徑：export/import JSON 或後端同步
  - 單字量目前每級 16 筆（示範密度）→ 內容擴充只動 data 檔，架構已支撐每級數千筆

## Version
- versionName: 0.1.0（MVP）
- 內容版本：vocab 96 entries / grammar 24 topics（2026-07-07）
