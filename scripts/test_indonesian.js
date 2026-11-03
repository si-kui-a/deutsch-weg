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

// Text colours stay readable (WCAG AA 4.5:1) on every surface they sit on; the palette was changed by hand
// once already (2026-11-03 dark plum -> cream), so the ratio is checked rather than trusted.
const lum = hex => {
  const c = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map(x => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => { const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x); return (hi + 0.05) / (lo + 0.05); };
const pal = site.palette || {};
const low = ["ink", "muted", "accent", "right", "wrong"].flatMap(fg => ["card", "paper", "tag"]
  .filter(bg => !(pal[fg] && pal[bg]) || ratio(pal[fg], pal[bg]) < 4.5).map(bg => `${fg}/${bg}`));
ok(`site: palette text contrast >= 4.5 ${low.join(" ")}`, low.length === 0);
// The colours shown before the app loads (and on the home-screen splash) match the palette's paper
const html = fs.readFileSync(path.join(DIR, "index.html"), "utf8");
const manifest = JSON.parse(fs.readFileSync(path.join(DIR, "manifest.webmanifest"), "utf8"));
const early = [html.match(/name="theme-color" content="([^"]+)"/)?.[1], html.match(/html, body \{ background: ([^;]+);/)?.[1],
  manifest.background_color, manifest.theme_color];
ok("site: page and manifest colours match palette.paper", early.every(c => c && c.toLowerCase() === String(pal.paper).toLowerCase()));

const worker = { self: {}, importScripts: () => {} };
vm.runInNewContext(fs.readFileSync(path.join(DIR, "sw.js"), "utf8"), worker);
const files = worker.self.SITE_FILES || [];
ok("sw: own cache name", /^id-swipe-cards-v\d+$/.test(worker.self.SITE_CACHE || ""));
ok("sw: every local file exists", files.length > 0 && files.filter(f => !f.startsWith("/"))
  .every(f => f === "./" || fs.existsSync(path.join(DIR, f))));
process.exit(fails ? 1 : 0);
