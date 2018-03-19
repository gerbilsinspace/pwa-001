self.addEventListener('install', event =>
  event.waitUntil(
    caches.open('showcase-v03').then(cache =>
      cache.addAll([
        '.',
        'static/css/main.css',
        'static/js/bundle.js'
      ])
    )
  )
);

self.addEventListener('fetch', event =>
  event.respondWith(
    caches.match(event.request).then(response => {
      console.log(caches);
      return response || fetch(event.request)
    })
  )
);
