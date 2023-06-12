'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e161fdbdbaaeb9a5e5e64f805a99bb2e",
"index.html": "0b3b96058354bf554df1b3a54a388c99",
"/": "0b3b96058354bf554df1b3a54a388c99",
"main.dart.js": "af219fff81d6cd8e59c79237bf2f0daa",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6044cea10ff925a2869d321873dfec0f",
"assets/AssetManifest.json": "8d5c67584e882bb81e1683fe4d10dfa6",
"assets/NOTICES": "7ab2ae19bf77417129315c970509722a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "3c64ffca29d715fdff4d24551f4879b1",
"assets/packages/flutter_snake/assets/default_snake_fruit.png": "bbb606a12b3ba19937ac0c297da164b5",
"assets/packages/flutter_snake/assets/default_snake_body.png": "e0f0c1181f116fea93928b8b10b028e8",
"assets/packages/flutter_snake/assets/default_snake_turn.png": "fe2430372678c1223c6a568a63960f0b",
"assets/packages/flutter_snake/assets/default_snake_head.png": "928555dde8bae5699ad6698d1b801f5c",
"assets/packages/flutter_snake/assets/default_snake_tail.png": "5b75cf22f7d3f634e561a605c70e5856",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/lib/assets/2048.png": "b91d3acc79bde15f69f5bc21ef338002",
"assets/lib/assets/mortal.png": "8f239b64af9159031377110540df0b73",
"assets/lib/assets/snake.png": "62dfeb6355eaaebe697af2638a118f97",
"assets/AssetManifest.smcbin": "0913aa3107c32bd45dabca4fdc5f04b9",
"assets/fonts/MaterialIcons-Regular.otf": "d72c708ee7d4d769a8195579a84ec083",
"assets/assets/images/duck.png": "76b189d08534e735a2a757abf6087d1a",
"assets/assets/images/p_bg.png": "78a5d1a132267b60eb5ea0f4dec01b7e",
"assets/assets/images/jump.png": "5a4f0549c92f6c685bcf48ec2cddbadb",
"assets/assets/images/liu/stance.png": "628da841e32134eb5e85d3d8b571da6f",
"assets/assets/images/p_2.gif": "a2ae266ff39120e916b8d73efab8be30",
"assets/assets/images/home.png": "7bae30553b8149c290366c431fbbc9e2",
"assets/assets/images/p_1.gif": "9f7f79b93751e1d8c1ca961aa95563ac",
"assets/assets/images/left.png": "137ebc8f0ff54b010031718349930354",
"assets/assets/images/a1.gif": "bfbded5656dce7d0da9cec752decdffd",
"assets/assets/images/sprite.png": "5438542557626c9814ef2162a19e2908",
"assets/assets/images/hit.png": "686bd30fc32b69ba6580726f7d003a32",
"assets/assets/images/a2.gif": "daf24dfab6773e24aefbe747f3e556d0",
"assets/assets/images/walk.png": "dddadb829afa04133d8ec5c19492d505",
"assets/assets/images/ice.png": "2ac8b4d72b357093a6de2051fd7ccf26",
"assets/assets/images/p_4.png": "c270285ca9208b828ef178e979d92797",
"assets/assets/images/p_3.png": "8b94fcf8c455fb5812c773cc51d7e40b",
"assets/assets/images/right.png": "38b3eb3fc9931f44f872ba6f5b649f2f",
"assets/assets/images/p_3b.gif": "d7518ca07ea0b9933e8487124082724a",
"assets/assets/images/shoot.png": "99f31f36a716ffef0fee4c47168cace4",
"assets/assets/images/spritesheet.png": "8594a8d768cad446c92f4365abcb251b",
"assets/assets/audio/die.wav": "629d572e913e69fd0a3b27a22ad90660",
"assets/assets/audio/point.wav": "5a6c267d6743faf5069536fda2553b27",
"assets/assets/audio/wing.wav": "4355dd665aa14ae22458f03e6b5643f8",
"assets/assets/audio/swooshing.wav": "3de704c77bf2eec51ba00897a8712355",
"assets/assets/audio/theme.mp3": "c6459444e5a25e47e4b7459879f22554",
"assets/assets/audio/hit.wav": "0941f389fbd65a06291a90dd17ef2e36",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
