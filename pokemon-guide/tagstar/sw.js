const CACHE="tagstar-4489663d-aad0b38c1bf1";
const PREFIX="tagstar-4489663d-";
const FILES=["/pokemon-guide/assets/styles-BE1lgNWJ.js","/pokemon-guide/assets/styles-CUf7dFxD.css","/pokemon-guide/assets/tagstar-CUyLmsJv.js","/pokemon-guide/assets/tagstar-d34aHt7z.css","/pokemon-guide/favicon.svg","/pokemon-guide/tagstar/","/pokemon-guide/tagstar/icon-192.png","/pokemon-guide/tagstar/icon-512.png","/pokemon-guide/tagstar/index.html","/pokemon-guide/tagstar/manifest.webmanifest"];
const SCOPE="/pokemon-guide/tagstar/";
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin)return;if(event.request.mode==='navigate'){if(!url.pathname.startsWith(SCOPE))return;event.respondWith(fetch(event.request).catch(()=>caches.open(CACHE).then(cache=>cache.match(SCOPE+'index.html'))));return;}if(FILES.includes(url.pathname))event.respondWith(caches.open(CACHE).then(cache=>cache.match(url.pathname)).then(hit=>hit||fetch(event.request)));});
