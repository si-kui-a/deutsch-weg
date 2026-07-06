# Der Weg — 德語之路

A1–C2 全級別德語單字與文法學習網站。純靜態、零框架、零後端。

## Purpose
- 目標使用者：繁中母語的德語學習者（A1–C2）
- 三套內建學習法：
  1. **性別色彩編碼** — der藍 / die紅 / das綠，全站視覺一致
  2. **間隔重複 SRS** — SM-2 簡化演算法，進度存 localStorage
  3. **口訣聯想** — 每個單字/文法主題附字源、諧音或圖像記憶法
- 營運定位：GitHub Pages 免費託管，運算成本 0，無伺服器維護

## Setup
```
本地開發：直接雙擊 index.html（無 build step、無 npm install）
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
| 新增/修改單字 | `data/vocab.js`（複製一筆物件） | 否 |
| 新增/修改文法主題 | `data/grammar.js`（複製一筆物件） | 否 |
| 換配色/換皮 | `css/zen.css` 的 `:root` token 區 | 否 |
| SRS 演算法 | `js/srs.js` | 是 |
| 頁面流程 | `js/app.js` | 是 |

- 資料 schema 定義寫在各 data 檔頂部註解，新增內容照抄格式即可
- 已知天花板（`ponytail:` 註解已標記於程式碼內）：
  - localStorage 單機儲存 → 換裝置不同步；升級路徑：export/import JSON 或後端同步
  - 單字量目前每級 16 筆（示範密度）→ 內容擴充只動 data 檔，架構已支撐每級數千筆

## Version
- versionName: 0.1.0（MVP）
- 內容版本：vocab 96 entries / grammar 24 topics（2026-07-07）
