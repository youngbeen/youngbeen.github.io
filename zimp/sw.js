const CACHE_NAME = 'zimp'

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME)
    console.log('sw works correctly')
    cache.addAll([
      // '/',
      'https://img2.imgtp.com/2024/05/06/KIYjLdMm.png',
      'https://img2.imgtp.com/2024/05/06/UE2y82Q1.jpg',
      'https://img2.imgtp.com/2024/05/07/bJxHXZ4R.jpg',
      'https://img2.imgtp.com/2024/05/07/6jT5fj1K.jpg',
      'https://img2.imgtp.com/2024/05/07/f88h8vky.jpg'
      // '/converter.js',
      // '/converter.css'
    ])
  })())
})

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME)

    // Get the resource from the cache.
    const cachedResponse = await cache.match(event.request)
    if (cachedResponse) {
      return cachedResponse
    } else {
      try {
        // If the resource was not in the cache, try the network.
        const fetchResponse = await fetch(event.request)

        // Save the resource in the cache and return it.
        cache.put(event.request, fetchResponse.clone())
        return fetchResponse
      } catch (e) {
        // The network failed.
      }
    }
  })())
})
