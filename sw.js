// DuFattur service worker: caches the app itself, never user data.
const VERSION = 'dufattur-v2';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];
// Third-party libraries the page loads (pinned versions, safe to keep)
const CDN_HOSTS = ['cdn.jsdelivr.net', 'cdnjs.cloudflare.com', 'cdn.tailwindcss.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || req.headers.has('authorization')) return;
  const url = new URL(req.url);
  if (url.hostname.endsWith('supabase.co')) return;
  if (url.searchParams.has('ping')) return;

  // Pages: newest version first, cached copy when offline
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then(res => {
        if (res.ok && url.origin === self.location.origin) {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put('index.html', copy));
        }
        return res;
      }).catch(() => caches.match('index.html'))
    );
    return;
  }

  if (url.origin === self.location.origin || CDN_HOSTS.includes(url.hostname)) {
    // Serve from cache instantly, refresh in the background
    event.respondWith(
      caches.open(VERSION).then(async cache => {
        const cached = await cache.match(req);
        const fresh = fetch(req).then(res => {
          if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
          return res;
        }).catch(() => cached);
        return cached || fresh;
      })
    );
  }
});
