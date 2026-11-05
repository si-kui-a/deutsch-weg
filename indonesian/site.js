// Indonesian swipe cards: 10-1901's swipe-card app (social-statistics-swipe-cards), shared through its boot.js,
// run with this deck, its own storage keys and a light cream palette. The app's code is not copied here;
// see that repository's README "給其他網站共用". cards.json is written by the Indonesian course repository
// (indonesian-course-archive scripts/id_cards.py export); do not edit it by hand.
window.SITE = {
  // Keys differ from the statistics site's (swipe-cards-*): both sites share the origin's localStorage
  decks: { id: { title: "印尼文", file: "cards.json", key: "id-swipe-cards-v1", newStart: 10 } },
  deckKey: "id-swipe-cards-deck",
  app: "deutsch-weg-indonesian",
  repo: "si-kui-a/language-learning",
  texts: {
    creditsLicence: "單字例句、說明與講義題目由 AI（Claude）依課堂內容自編，非官方；拼字以 KBBI 為準，不收錄課本與辭典原文。App 程式沿用社會統計滑卡，保留所有權利。",
    creditsReport: "每張卡翻面後的「出處」列出課堂單元或講義。發現錯誤或有疑慮：翻面後按「回報這題有誤或有疑慮」，或到 GitHub 倉庫 si-kui-a/language-learning 開 issue，確認後修正或移除。",
  },
  // Cream whatever the phone's setting (user choice 2026-11-03, replacing dark plum): cream paper, warm brown
  // ink, plum-rose accent. Every text colour is at least 4.5:1 (WCAG AA) on card, paper and tag.
  palette: {
    paper: "#f7f1e6", grid: "#ece3d4", card: "#fffbf3", ink: "#3b2f2a", muted: "#76665a",
    line: "#e2d6c3", accent: "#9c4d7a", right: "#3a744a", wrong: "#ad4532", tag: "#f2e8d8",
  },
  colorScheme: "light",
};
