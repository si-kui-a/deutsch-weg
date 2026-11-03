// Offline support for the Indonesian page: the shared swipe-card app's own service worker logic, with this
// page's cache name and files (see site.js and social-statistics-swipe-cards README "給其他網站共用").
// Bump the number when this list changes; each site deletes only its own older caches.
self.SITE_CACHE = "id-swipe-cards-v1";
self.SITE_FILES = ["./", "index.html", "site.js", "cards.json", "manifest.webmanifest", "icon.svg",
  "/social-statistics-swipe-cards/boot.js", "/social-statistics-swipe-cards/index.html", "/social-statistics-swipe-cards/engine.js"];
importScripts("/social-statistics-swipe-cards/sw.js");
