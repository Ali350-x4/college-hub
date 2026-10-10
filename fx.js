(function(){
var cv=document.createElement("canvas");cv.id="fx";document.body.prepend(cv);var c=cv.getContext("2d"),W=0,H=0,raf=0,cur=null,st={},col="#6750a4",last=0,rm=matchMedia("(prefers-reduced-motion:reduce)");
function size(){var d=Math.min(devicePixelRatio||1,1.5);cv.width=innerWidth*d;cv.height=innerHeight*d;c.setTransform(d,0,0,d,0,0);W=innerWidth;H=innerHeight}
var R=Math.random,CH="01{}<>/=;+*#$&ABCDEF";
var TH={
 it:{init:function(){st.d=[];for(var i=0;i<Math.ceil(W/16);i++)st.d.push({y:R()*H/16,s:.15+R()*.35})},
  draw:function(t){c.clearRect(0,0,W,H);c.font="14px monospace";var rows=Math.ceil(H/16);
   st.d.forEach(function(o,i){o.y+=o.s;if(o.y-20>rows){o.y=-R()*20;o.s=.15+R()*.35}
    for(var k=0;k<18;k++){var r=Math.floor(o.y)-k;if(r<0||r>rows)continue;c.globalAlpha=(1-k/18)*(k===0?.85:.45);c.fillStyle=col;c.fillText(CH[(i*7+r*13+(k<3?(t/300|0):0))%CH.length],i*16,r*16)}});c.globalAlpha=1}},
 finance:{init:function(){st.cw=14;st.p=H*.55;st.x=0;st.c=[];var n=Math.ceil(W/st.cw)+3;for(var i=0;i<n;i++)st.c.push(nc());
   st.s=[];for(i=0;i<14;i++)st.s.push({x:R()*W,y:R()*H,v:.2+R()*.5,ch:"$€£¥₿%"[R()*6|0],z:18+R()*30})},
  draw:function(){c.clearRect(0,0,W,H);c.globalAlpha=.08;c.strokeStyle=col;c.lineWidth=1;for(var g=60;g<H;g+=60){c.beginPath();c.moveTo(0,g);c.lineTo(W,g);c.stroke()}
   st.x+=.5;if(st.x>=st.cw){st.x-=st.cw;st.c.shift();st.c.push(nc())}
   var cw=st.cw;st.c.forEach(function(k,i){var x=i*cw-st.x,up=k.c<k.o;c.globalAlpha=.4;c.strokeStyle=c.fillStyle=up?"#2ecc71":"#e74c3c";c.beginPath();c.moveTo(x+cw/2,k.h);c.lineTo(x+cw/2,k.l);c.stroke();c.fillRect(x+2,Math.min(k.o,k.c),cw-4,Math.max(2,Math.abs(k.o-k.c)))});
   c.globalAlpha=.7;c.strokeStyle=col;c.lineWidth=2;c.beginPath();st.c.forEach(function(k,i){var s=0,n=0;for(var j=Math.max(0,i-6);j<=i;j++){s+=st.c[j].c;n++}var x=i*cw-st.x+cw/2,y=s/n;i?c.lineTo(x,y):c.moveTo(x,y)});c.stroke();
   c.globalAlpha=.22;c.fillStyle=col;st.s.forEach(function(o){o.y-=o.v;if(o.y<-40){o.y=H+40;o.x=R()*W}c.font=o.z+"px sans-serif";c.fillText(o.ch,o.x,o.y)});c.globalAlpha=1}},
 politics:{init:function(){st.pts=[];var n=420,ga=Math.PI*(3-Math.sqrt(5));for(var i=0;i<n;i++){var y=1-2*i/(n-1),r=Math.sqrt(1-y*y),a=ga*i;st.pts.push([Math.cos(a)*r,y,Math.sin(a)*r])}
   st.arcs=[];for(i=0;i<7;i++)st.arcs.push({a:st.pts[R()*n|0],b:st.pts[R()*n|0],t:R()});st.rot=0;
   st.e=[];for(i=0;i<10;i++)st.e.push({x:R()*W,y:R()*H,v:.15+R()*.3,ch:"⚖️🏛️🗳️📜🌐"[[0,2,4,6,8][R()*5|0]],z:20+R()*22})},
  draw:function(){c.clearRect(0,0,W,H);st.rot+=.004;var cx=W*.5,cy=H*.46,r=Math.min(W,H)*.42,co=Math.cos(st.rot),si=Math.sin(st.rot);
   function P(p){var x=p[0]*co+p[2]*si,z=-p[0]*si+p[2]*co;return[cx+x*r,cy+p[1]*r,z]}
   c.fillStyle=col;st.pts.forEach(function(p){var q=P(p);c.globalAlpha=q[2]>0?.12+q[2]*.35:.05;c.beginPath();c.arc(q[0],q[1],q[2]>0?1.8:1,0,7);c.fill()});
   c.strokeStyle=col;c.lineWidth=1.5;st.arcs.forEach(function(o){var a=P(o.a),b=P(o.b);if(a[2]<-.1||b[2]<-.1)return;var mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,qx=cx+(mx-cx)*1.35,qy=cy+(my-cy)*1.35;
    c.globalAlpha=.3;c.beginPath();c.moveTo(a[0],a[1]);c.quadraticCurveTo(qx,qy,b[0],b[1]);c.stroke();o.t=(o.t+.006)%1;var u=o.t,x=(1-u)*(1-u)*a[0]+2*(1-u)*u*qx+u*u*b[0],y=(1-u)*(1-u)*a[1]+2*(1-u)*u*qy+u*u*b[1];c.globalAlpha=.9;c.beginPath();c.arc(x,y,3.5,0,7);c.fill()});
   c.globalAlpha=.2;st.e.forEach(function(o){o.y-=o.v;if(o.y<-40){o.y=H+40;o.x=R()*W}c.font=o.z+"px sans-serif";c.fillText(o.ch,o.x,o.y)});c.globalAlpha=1}}
};
function nc(){var o=st.p,cl=o+(R()-.5)*H*.035+(H*.5-o)*.01-H*.0012,h=Math.min(o,cl)-R()*H*.012,l=Math.max(o,cl)+R()*H*.012;cl=Math.max(H*.2,Math.min(H*.8,cl));st.p=cl;return{o:o,c:cl,h:h,l:l}}
function loop(t){raf=requestAnimationFrame(loop);if(t-last<33)return;last=t;TH[cur].draw(t)}
function stop(){cancelAnimationFrame(raf);c.clearRect(0,0,W,H)}
window.FX={set:function(n){col=getComputedStyle(document.documentElement).getPropertyValue("--pr").trim()||col;
  if(!n||n==="none"||!TH[n]||rm.matches){if(cur){cur=null;cv.style.opacity=0;document.body.classList.remove("fx");setTimeout(function(){if(!cur)stop()},650)}return}
  if(n===cur)return;stop();cur=n;size();st={};TH[n].init();cv.style.opacity=1;document.body.classList.add("fx");raf=requestAnimationFrame(loop)}};
addEventListener("resize",function(){if(cur){var n=cur;cur=null;FX.set(n)}});
FX.set(window.__th||"none");
})();
