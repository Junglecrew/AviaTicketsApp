"use strict";var precacheConfig=[["/index.html","eeb03ff2a55a22f679603b17d01ed819"],["/static/css/main.5407e382.css","895fb011d19ca73834293414ca657e18"],["/static/js/main.885056fe.js","2844115cbbe554e995d5805a45a1c56a"],["/static/media/fa-brands-400.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/static/media/fa-brands-400.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/static/media/fa-brands-400.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/static/media/fa-brands-400.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/static/media/fa-brands-400.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/static/media/fa-regular-400.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/static/media/fa-regular-400.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/static/media/fa-regular-400.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/static/media/fa-regular-400.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/static/media/fa-regular-400.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"],["/static/media/fa-solid-900.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/static/media/fa-solid-900.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/static/media/fa-solid-900.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/static/media/fa-solid-900.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/static/media/fa-solid-900.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/static/media/index.d41d8cd9.css","d41d8cd98f00b204e9800998ecf8427e"],["/static/media/logo_aeroflot.42500537.png","4250053777364094408b3a86dbf116fc"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});