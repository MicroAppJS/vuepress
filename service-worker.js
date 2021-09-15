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
    "revision": "89f6d4cef311b205b2a2222051a4045d"
  },
  {
    "url": "assets/css/0.styles.d63f2cc1.css",
    "revision": "62bf2d2a3cd35cf94e47a5c6ae821e71"
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
    "url": "assets/js/1.dde8d31a.js",
    "revision": "d37301ee97fd43d56ff3e38a2dd8c7f5"
  },
  {
    "url": "assets/js/10.ab4051c7.js",
    "revision": "991a03519afb805ed9b0a8a4dede4c52"
  },
  {
    "url": "assets/js/11.2ab27ac1.js",
    "revision": "6576828ee2af7e75f335dfe17507cc60"
  },
  {
    "url": "assets/js/12.08f244f6.js",
    "revision": "a75d6aec5c0976da704af1f92f431a21"
  },
  {
    "url": "assets/js/13.9f8d556f.js",
    "revision": "0e4f372c98cc3565972347a28bb1359b"
  },
  {
    "url": "assets/js/14.429eecde.js",
    "revision": "837d644ee8b6039da4aea33fdd339a0f"
  },
  {
    "url": "assets/js/15.e96b5eda.js",
    "revision": "81e31c1372b03aa2e8ad8bb91d10e83f"
  },
  {
    "url": "assets/js/16.44383482.js",
    "revision": "6a768ff6aabec66641220045c23c99d0"
  },
  {
    "url": "assets/js/17.0b43ee3c.js",
    "revision": "28977d7c56f5fb2ab1ef5c8975938dd1"
  },
  {
    "url": "assets/js/18.1c9769a9.js",
    "revision": "2f1ae9409f78f7ee4ed1790d9cb5ec88"
  },
  {
    "url": "assets/js/7.fc3b9ac2.js",
    "revision": "c0e3665556486c73f48defcd1d47cce1"
  },
  {
    "url": "assets/js/8.2a05c7bd.js",
    "revision": "b4ccf8264cd35893b21c176efbea7643"
  },
  {
    "url": "assets/js/9.f904fe5e.js",
    "revision": "5bed0ce312a91303d1ce952d69de012d"
  },
  {
    "url": "assets/js/app.23264999.js",
    "revision": "89e40b45b5f13b224b455e72ae1de0ca"
  },
  {
    "url": "assets/js/icon-svg.e9588127.js",
    "revision": "a3c21ac22ca3eb166efe89aa66062fce"
  },
  {
    "url": "assets/js/vendors~flowchart.1f69ef14.js",
    "revision": "ae0825d72fee936e737f70d12751eb6c"
  },
  {
    "url": "assets/js/vendors~icon-svg.b4d6a3e5.js",
    "revision": "16c99cf04a328d6150f5156ed98bbad7"
  },
  {
    "url": "assets/js/vuejs-paginate.7284e060.js",
    "revision": "d9b05503ea06880eb5145c7b7de9a405"
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
    "revision": "868f932922921b842f608585155a50d9"
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
