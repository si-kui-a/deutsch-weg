// indonesian/ runs social-statistics-swipe-cards' app on the same origin, so its storage keys and cache
// name must differ from that site's (swipe-cards-*), and every local file it caches offline must exist.
// Run: node scripts/test_indonesian.js (CI runs it too)
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const DIR = path.join(__dirname, "..", "indonesian");
let fails = 0;
const ok = (name, cond) => { console.log(`${cond ? "PASS" : "FAIL"} ${name}`); if (!cond) fails++; };

const page = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(DIR, "site.js"), "utf8"), page);
const site = page.window.SITE || {};
const keys = [site.deckKey, ...Object.values(site.decks || {}).map(d => d.key)];
ok("site: decks and keys set", keys.length > 1 && keys.every(Boolean));
ok("site: keys differ from the statistics site's", keys.every(k => !String(k).startsWith("swipe-cards")));
ok("site: every deck file exists", Object.values(site.decks || {}).every(d => fs.existsSync(path.join(DIR, d.file))));

const worker = { self: {}, importScripts: () => {} };
vm.runInNewContext(fs.readFileSync(path.join(DIR, "sw.js"), "utf8"), worker);
const files = worker.self.SITE_FILES || [];
ok("sw: own cache name", /^id-swipe-cards-v\d+$/.test(worker.self.SITE_CACHE || ""));
ok("sw: every local file exists", files.length > 0 && files.filter(f => !f.startsWith("/"))
  .every(f => f === "./" || fs.existsSync(path.join(DIR, f))));
process.exit(fails ? 1 : 0);
