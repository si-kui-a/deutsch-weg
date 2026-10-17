# 10-1001_Deutsch_Weg_德語學習網站/scripts 指令目錄

<!-- make_command_catalog: dirs=.; title=10-1001_Deutsch_Weg_德語學習網站/scripts 指令目錄 -->
本檔由 `make_command_catalog.py` 從各腳本開頭說明自動產生，不要手動編輯；改腳本說明後執行 `python make_command_catalog.py --recheck COMMANDS.md --write`。

| 腳本 | 用途 |
|---|---|
| `check_vocab_data.js` | data/vocab.js 每級別內容唯一性檢查（零依賴，node 直接跑） |
| `ci_check_html_refs.py` | CI-only smoke check for this zero-build static site, stdlib only. |
| `install_hooks.py` | 安裝 pre-commit + pre-push hook。 |
| `pre_commit_guard.py` | git commit前的強制檢查，安裝於 .git/hooks/pre-commit（見 scripts/install_hooks.py）。 |
| `pre_push_guard.py` | git push前的強制檢查，安裝於 .git/hooks/pre-push（見 scripts/install_hooks.py / install_hooks_full.py）。 |

## 呼叫方式

### `check_vocab_data.js`

```
node scripts/check_vocab_data.js   （不需參數；CI 與 PROJECT_PROFILE offline_check 都會跑）
```

### `ci_check_html_refs.py`

```
python ci_check_html_refs.py   (不需參數)
```

### `install_hooks.py`

```
python scripts/install_hooks.py      在repo根目錄執行一次，安裝pre-commit與pre-push
```

### `pre_commit_guard.py`

```
由 .git/hooks/pre-commit 自動呼叫（python scripts/install_hooks.py 安裝）
python scripts/pre_commit_guard.py   手動對目前暫存區跑一次同樣的檢查
```

### `pre_push_guard.py`

```
由 .git/hooks/pre-push 自動呼叫（python scripts/install_hooks.py 安裝），git傳入remote名稱與URL
```
