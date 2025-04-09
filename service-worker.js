/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "84770a7786ade2a16e5a0cb85dc43633"
  },
  {
    "url": "assets/css/0.styles.e5bebbd9.css",
    "revision": "f8beb6e9a68be07e5fc5c015cc43e642"
  },
  {
    "url": "assets/img/avatar.8babcb7f.svg",
    "revision": "8babcb7fe47e21c362c59493f8abe533"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8c2b9b9f.js",
    "revision": "be0d1c6c85c0a10c52699ebc9efb04cf"
  },
  {
    "url": "assets/js/10.659d052b.js",
    "revision": "f5c1b8e3f6fb07121545e2ca6e4defee"
  },
  {
    "url": "assets/js/11.239e7f87.js",
    "revision": "15e73eff1467744f3784de211b6ee2fe"
  },
  {
    "url": "assets/js/12.aacfbc15.js",
    "revision": "745fafa70efc8d47702f2315bb8669ac"
  },
  {
    "url": "assets/js/13.cf58d063.js",
    "revision": "ecd297151e40549b33865ea26050f659"
  },
  {
    "url": "assets/js/14.652ac876.js",
    "revision": "06cfea3a05fc54626cff46dd501b8d48"
  },
  {
    "url": "assets/js/15.3c41ca8f.js",
    "revision": "a613b8b938b8b06fad6f8973048ba3a5"
  },
  {
    "url": "assets/js/16.4e649216.js",
    "revision": "48a5d25f6e0d6e23e6837e12f701de84"
  },
  {
    "url": "assets/js/17.3fc76e11.js",
    "revision": "f4d91d670515e00f4f57537f5bf59dc5"
  },
  {
    "url": "assets/js/18.8e2910fa.js",
    "revision": "533ebd7e47c8883fb69bb88b3af462ef"
  },
  {
    "url": "assets/js/19.a34585cc.js",
    "revision": "ac942bd070c752be621a09f6704cc4f0"
  },
  {
    "url": "assets/js/7.ebbbcda3.js",
    "revision": "eb0e8f8c35f631dc5434ea36cecb1345"
  },
  {
    "url": "assets/js/8.11e9b424.js",
    "revision": "77a13345ee9270046c91ed34b8ac178f"
  },
  {
    "url": "assets/js/9.746111d4.js",
    "revision": "4fcdc1942aa4da32e26a788ff15cb0b8"
  },
  {
    "url": "assets/js/app.065b91a6.js",
    "revision": "afc366ea4a77fe6012a10cedd2ae8588"
  },
  {
    "url": "assets/js/icon-svg.d5a6d790.js",
    "revision": "414511850a755521b3a63ddc1729f1f6"
  },
  {
    "url": "assets/js/vendors~flowchart.74a0c6ed.js",
    "revision": "94914949126c97682394fa11d1a0ab50"
  },
  {
    "url": "assets/js/vendors~icon-svg.4dafb3a7.js",
    "revision": "423fd57f5fc71c28204457e31631e9a0"
  },
  {
    "url": "assets/js/vuejs-paginate.44863e86.js",
    "revision": "ba4087267f3525e66a1632535daa572f"
  },
  {
    "url": "banner/designer_mindset.svg",
    "revision": "06a17862c47e475d5bfef3b10c18dd22"
  },
  {
    "url": "banner/good_team.svg",
    "revision": "67670919ded15ec263c13cf3614f4040"
  },
  {
    "url": "banner/portfolio_update.svg",
    "revision": "997c206730cf789cc242bac9e5d99afa"
  },
  {
    "url": "banner/superhero.svg",
    "revision": "23333259330f2715b63f48fb0772a795"
  },
  {
    "url": "icons/favicon.png",
    "revision": "832a679eb73da5d45aeb1a83042702af"
  },
  {
    "url": "icons/favicon.svg",
    "revision": "7104bdbe1e365657d12901702d8f4fd8"
  },
  {
    "url": "icons/favicon@0,25x.png",
    "revision": "a8a9d3ce5d03a8302ef61ad29af0a0e1"
  },
  {
    "url": "icons/favicon@0,5x.png",
    "revision": "02ea300f5ec7e89d4ade1241c49ff43c"
  },
  {
    "url": "icons/favicon@0,75x.png",
    "revision": "cf1fe52208a3e5f8a6af03eff5a67505"
  },
  {
    "url": "icons/favicon@1x.png",
    "revision": "2745d7010081620633775ceb547bd3c9"
  },
  {
    "url": "index.html",
    "revision": "0f81e790f6b7bb6ab8a7299b776be092"
  },
  {
    "url": "logo.png",
    "revision": "50cccd0c2aa8112e2fae9ef18fd49a32"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
