const C="hub-v1",SHELL=["./","style.css","icon.svg","manifest.webmanifest"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);
 if(u.pathname.includes("/storage/v1/object/public/")){e.respondWith(caches.open("hub-files").then(c=>c.match(r).then(m=>m||fetch(r).then(x=>{if(x.ok)c.put(r,x.clone());return x}))));return}
 if(u.origin===location.origin){e.respondWith(fetch(r).then(x=>{const k=x.clone();caches.open(C).then(c=>c.put(r,k));return x}).catch(()=>caches.match(r)))}});
