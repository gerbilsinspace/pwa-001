self.addEventListener('install', event =>
  event.waitUntil(
    caches.open('showcase-v1').then(cache =>
      cache.addAll([
        '.',
        'static/css/main.css',
        'static/js/bundle.js',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
        'https://fonts.gstatic.com/s/materialicons/v36/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
      ])
    )
  )
);

self.addEventListener('fetch', event =>
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  )
);
