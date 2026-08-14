const CACHE='budgetv3-2026-08-08-15';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{const ks=await caches.keys();await Promise.all(ks.filter(k=>k.startsWith('budgetv3-')&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim();})()));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;e.respondWith((async()=>{try{const f=await fetch(r);const c=await caches.open(CACHE);c.put(r,f.clone());return f;}catch(err){const c=await caches.match(r);return c||caches.match('./index.html');}})());});
