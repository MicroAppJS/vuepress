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
    "revision": "86ceb162e504c7acc4af630488e949c5"
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
    "url": "assets/js/1.a9c70984.js",
    "revision": "1ed933e6ea4b15953d6f87ea79d3c3c6"
  },
  {
    "url": "assets/js/10.ca302214.js",
    "revision": "56cc5433657f4c354573b3ac68e3293e"
  },
  {
    "url": "assets/js/11.bb20faa1.js",
    "revision": "ca891a576e82bcd1822d98453341f372"
  },
  {
    "url": "assets/js/12.1e8eefad.js",
    "revision": "b712ae6637b0a2045ed5983cf9fbfbc2"
  },
  {
    "url": "assets/js/13.abe6fa03.js",
    "revision": "7e0cd0477b1c441d622d21ea0e435b95"
  },
  {
    "url": "assets/js/14.575e7315.js",
    "revision": "4b6941918d4d6f5a8fa4e40c7412a87f"
  },
  {
    "url": "assets/js/15.a5166330.js",
    "revision": "7024ac3173f904f6a1658cc620466292"
  },
  {
    "url": "assets/js/16.2e9c5ee8.js",
    "revision": "1d7c99a8286bd008a2158ab64a98e435"
  },
  {
    "url": "assets/js/17.d36223b3.js",
    "revision": "0704deea7914ea3855b0a8752f0e4d75"
  },
  {
    "url": "assets/js/18.1d1470e1.js",
    "revision": "dc4c35b3de6b68a08a0290d896086a3e"
  },
  {
    "url": "assets/js/19.34d82816.js",
    "revision": "779b9b1b30d9430e75ff44095c4e6fcc"
  },
  {
    "url": "assets/js/20.864b46f2.js",
    "revision": "de3115baa9191b6b8eacb802d4a29651"
  },
  {
    "url": "assets/js/21.b5a6da40.js",
    "revision": "ee1ea14306b68cc50e498c19b155461e"
  },
  {
    "url": "assets/js/22.239a64c5.js",
    "revision": "55efd1a41be00d2e7ec869e8e5b7fca1"
  },
  {
    "url": "assets/js/23.e853339b.js",
    "revision": "7de9ca1bef78c4ecb63b66f31ef69b24"
  },
  {
    "url": "assets/js/24.50909099.js",
    "revision": "bca3a3dbb0b4cc050b8a8240afeee979"
  },
  {
    "url": "assets/js/25.b918712e.js",
    "revision": "9567b1ca5d1e6f8ba2ee721ec2c98cdd"
  },
  {
    "url": "assets/js/26.450b511e.js",
    "revision": "76b01214dfe16ceb743eeecba664ef26"
  },
  {
    "url": "assets/js/27.89df8f7c.js",
    "revision": "9bcb05beb98e544fe2887f351ce3f366"
  },
  {
    "url": "assets/js/28.cb4f52a1.js",
    "revision": "b286f08bd2b7bad6a73f5601c8db776f"
  },
  {
    "url": "assets/js/29.b01a082e.js",
    "revision": "c150882db9920e1d2d0cfafd6d6a7d26"
  },
  {
    "url": "assets/js/30.cd16cfdd.js",
    "revision": "2a1bd67fe08e0ce809742336a791619e"
  },
  {
    "url": "assets/js/31.5633bb74.js",
    "revision": "a1d4fa10fe39e4ba53e528941ef41941"
  },
  {
    "url": "assets/js/32.e44206d9.js",
    "revision": "b65ab63bcf1750285b43fa6e78fd9a45"
  },
  {
    "url": "assets/js/33.19bac321.js",
    "revision": "e8c6f485b73f7e1f0d6435983794f58a"
  },
  {
    "url": "assets/js/34.755dd940.js",
    "revision": "2322f340274a3b41d06d1288d6eb8543"
  },
  {
    "url": "assets/js/35.31043c4a.js",
    "revision": "7f0c3a965e564a01db4c0ae3a1c8ce0f"
  },
  {
    "url": "assets/js/36.876f9747.js",
    "revision": "928df6c901f3d9ec91dfa76d9d0dec78"
  },
  {
    "url": "assets/js/37.2f1008d8.js",
    "revision": "fd8a84fe8dc8ac1fe9a3c2c2da92e7aa"
  },
  {
    "url": "assets/js/38.ff914f7b.js",
    "revision": "360d76768244877506aa8ed914294206"
  },
  {
    "url": "assets/js/39.7a80f7c4.js",
    "revision": "f75d3c45db9c444a006802140bc090dc"
  },
  {
    "url": "assets/js/40.5d608728.js",
    "revision": "e09334d8d47b60f15121f9930100cfb1"
  },
  {
    "url": "assets/js/41.7551f16e.js",
    "revision": "7b027bb91f8e10337f888688632a3ff1"
  },
  {
    "url": "assets/js/42.adf8c8fb.js",
    "revision": "0581b66fbcdff94b3c44a8b424621edf"
  },
  {
    "url": "assets/js/43.0465404f.js",
    "revision": "c066c7d66b9adaf4055fb3e49c836452"
  },
  {
    "url": "assets/js/44.d8b5077c.js",
    "revision": "317097453ecc683d1573a379ceabddff"
  },
  {
    "url": "assets/js/45.f623b87c.js",
    "revision": "6c1cf5c89b9ce0f4185640998135ac78"
  },
  {
    "url": "assets/js/7.1af6ecf1.js",
    "revision": "6cf14fafd39f54fc967025511575c150"
  },
  {
    "url": "assets/js/8.d59150c0.js",
    "revision": "ecf0caefb98401c17bbbc359b39f8967"
  },
  {
    "url": "assets/js/9.e5e67a21.js",
    "revision": "71d6e02b992f5acb1a1a79d17e80169a"
  },
  {
    "url": "assets/js/app.56b1e540.js",
    "revision": "fee2fe76f33fe88d9c14d294c220ef73"
  },
  {
    "url": "assets/js/icon-svg.6419613d.js",
    "revision": "0bb2df91d20d21cbba62503504cca2c8"
  },
  {
    "url": "assets/js/vendors~flowchart.5ea5abd4.js",
    "revision": "3dd3ded8b0d9f29f24045326110d21ea"
  },
  {
    "url": "assets/js/vendors~icon-svg.213be43f.js",
    "revision": "dce987091ad7e637fdbee16fd45e1460"
  },
  {
    "url": "assets/js/vuejs-paginate.9ec6f6f8.js",
    "revision": "088da00cf9bd11e38f48958e07c2f527"
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
    "url": "logo.png",
    "revision": "50cccd0c2aa8112e2fae9ef18fd49a32"
  },
  {
    "url": "zh/config/blog/author.html",
    "revision": "3e076eb550c95f6c9f5bbcfca599c0cd"
  },
  {
    "url": "zh/config/blog/blog-config.html",
    "revision": "6baecafcd8570843d2c7ee31954c658f"
  },
  {
    "url": "zh/config/blog/category-tag.html",
    "revision": "a4e9f53b7c97f650d1dcb2690b22e101"
  },
  {
    "url": "zh/config/blog/comment.html",
    "revision": "c61fd97fd196e57da85e1ad606acd8ae"
  },
  {
    "url": "zh/config/blog/frontmatter.html",
    "revision": "e3ba32ee0e94a870883ef0d85fef8627"
  },
  {
    "url": "zh/config/blog/home.html",
    "revision": "a38e3a731b585a2af658238a074a90c2"
  },
  {
    "url": "zh/config/blog/index.html",
    "revision": "ad8a245f7c387090183adead6c1107c2"
  },
  {
    "url": "zh/config/blog/rss.html",
    "revision": "e9d19657b478d0892c3fd4ac0c655a2d"
  },
  {
    "url": "zh/config/copyright.html",
    "revision": "fb3893b59381aaaee63e1675dde918a5"
  },
  {
    "url": "zh/config/footer.html",
    "revision": "cbc723746fb467c1b7618b439a22a88d"
  },
  {
    "url": "zh/config/friend-link.html",
    "revision": "502e6b45efb4291696fed24545031f1f"
  },
  {
    "url": "zh/config/google-analytics.html",
    "revision": "e1ed21c7f2627df44d043c6db43c822e"
  },
  {
    "url": "zh/config/home.html",
    "revision": "c48bac083f4730e51cd392b70d819ac6"
  },
  {
    "url": "zh/config/index.html",
    "revision": "31e064fc1dd4732e9b28f479320c5c17"
  },
  {
    "url": "zh/config/redirect.html",
    "revision": "e54a7bc83242418706b2a1a8c339a057"
  },
  {
    "url": "zh/config/svg-icon.html",
    "revision": "102afbd7586ec94558fdfd65752a3a6e"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "d796b25cb3390acabdefece0aab27d71"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "933f004e48a6d15158c413fc2f6c6760"
  },
  {
    "url": "zh/guide/deep/frontmatter.html",
    "revision": "fc03b6966489a2b0cd1a9e2e8691c48e"
  },
  {
    "url": "zh/guide/deep/global-computed.html",
    "revision": "fca03ea3a114bc04a6e536d324df0ca9"
  },
  {
    "url": "zh/guide/deep/markdown-slot.html",
    "revision": "338223abd00065f28d749775f281a97e"
  },
  {
    "url": "zh/guide/deep/permalinks.html",
    "revision": "5424b7391e67801c69d5d16268fb6d18"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "9255c58b9063fcda18b5fc3704f81150"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "969b5bc041387ffe28b303aeba690278"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "0c9c8d3c69358267145f4fbae38fefcc"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "a9d26a17fd132803f79a6506d647bb35"
  },
  {
    "url": "zh/guide/theme-config.html",
    "revision": "5d94320a3702f537879779cdb3354e57"
  },
  {
    "url": "zh/index.html",
    "revision": "f45fe012dfd3eef33ce855206ae442fc"
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
