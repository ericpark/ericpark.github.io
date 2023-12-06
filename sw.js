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

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({ modulePathPrefix: "workbox-v3.6.3" });

workbox.core.setCacheNameDetails({ prefix: "gatsby-plugin-offline" });

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    url: "webpack-runtime-4ff5371e784785b38177.js"
  },
  {
    url: "styles.1661457935623c552e44.css"
  },
  {
    url: "styles-29147cbc04bbc833f6a0.js"
  },
  {
    url: "framework-8de36d3fd07627b19105.js"
  },
  {
    url: "app-42334df3f01bd1ab03f9.js"
  },
  {
    url:
      "component---node-modules-gatsby-plugin-offline-app-shell-js-786fca1931f6eac50ed9.js"
  },
  {
    url: "offline-plugin-app-shell-fallback/index.html",
    revision: "3eba89a22c2da9c890da83757bd3bb8c"
  },
  {
    url: "polyfill-67ce08954519b26f9c4e.js"
  },
  {
    url: "manifest.json",
    revision: "b773e901ef06ac93343dc05e67540787"
  },
  {
    url: "manifest.webmanifest",
    revision: "b156b5b72ab0315b6001f84e692a1ef0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /(\.js$|\.css$|static\/)/,
  workbox.strategies.cacheFirst(),
  "GET"
);
workbox.routing.registerRoute(
  /^https?:.*\page-data\/.*\/page-data\.json/,
  workbox.strategies.networkFirst(),
  "GET"
);
workbox.routing.registerRoute(
  /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
  workbox.strategies.staleWhileRevalidate(),
  "GET"
);
workbox.routing.registerRoute(
  /^https?:\/\/fonts\.googleapis\.com\/css/,
  workbox.strategies.staleWhileRevalidate(),
  "GET"
);

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`);

const { NavigationRoute } = workbox.routing;

const navigationRoute = new NavigationRoute(async ({ event }) => {
  let { pathname } = new URL(event.request.url);
  pathname = pathname.replace(new RegExp(`^`), ``);

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`);
  if (!resources || !(await caches.match(`/app-42334df3f01bd1ab03f9.js`))) {
    return await fetch(event.request);
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request);
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`;
  return await caches.match(offlineShell);
});

workbox.routing.registerRoute(navigationRoute);

const messageApi = {
  setPathResources(event, { path, resources }) {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources));
  },

  clearPathResources(event) {
    event.waitUntil(idbKeyval.clear());
  }
};

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data;
  if (gatsbyApi) messageApi[gatsbyApi](event, event.data);
});
