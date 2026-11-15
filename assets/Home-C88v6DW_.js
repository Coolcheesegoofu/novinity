import{r as i,j as e,L as pe}from"./react-B8WvyCSS.js";import{c as Ae,g as oe,G as xe,L as ve,a as O,w as Se,e as ge,u as ke}from"./index-SX6dzyT3.js";import{u as L,a as Me,b as _,c as we,d as Le,f as F,e as ye,R as C,g as Q,s as ie}from"./sections-B9IoCIzD.js";import{g as je,B as _e,P as Fe,W as H,D as Pe,a as De,d as Ie}from"./scenes-B88pgKNb.js";import{s as Ce}from"./text-Bap1hsSt.js";import{A as Be}from"./arrow-left-HuSxtMBk.js";import{S as B}from"./catalog-C9ch4WK8.js";import{C as X}from"./Cover-D69ErVCy.js";import"./motion-9R5hWzyv.js";import"./flow-BZkxKe5K.js";import"./Book3D-lGfZ1LvF.js";import"./chapters-lry23kQo.js";import"./ui-Du0dtpT5.js";import"./price-BzK5oTpc.js";/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};be.node;const $e=Ae(be),W=["The night mail stops at a station that closed in 1939. One passenger gets off.","The city’s last tree is guarded by a robot that only knows how to water it.","Two rival bakers on the same street get snowed in together for Christmas.","Every scarecrow in the county has turned to face the same farmhouse.","My daughter swears a fox made of stars walks her home from the bus stop."],Ue="Describe the book you want to read",ce=34,Oe=14,Ge=2200,He=450;function Ne({id:s,label:t="Your idea for a novel",className:r=""}){const a=L("(prefers-reduced-motion: reduce)"),n=Me(),[d,l]=i.useState(""),[u,w]=i.useState(!1),v=i.useRef(null),y=_(v),j=We(),c=!a&&!u&&d==="",{shown:x,idea:f}=Xe(c&&y&&j),o=m=>{m==null||m.preventDefault();const g=d.trim()||(c&&x?f:"");n(g?{premise:g}:{})},h=m=>{m.key==="Enter"&&!m.shiftKey&&o(m)};return e.jsxs("form",{ref:v,className:`cn-prompt ${r}`,"data-away":!(y&&j)||void 0,onSubmit:o,children:[e.jsx("label",{htmlFor:s,className:"sr-only",children:t}),e.jsx("textarea",{id:s,className:"cn-prompt-input",rows:2,value:d,onChange:m=>l(m.target.value),onKeyDown:h,onFocus:()=>w(!0),onBlur:()=>w(!1),placeholder:a||u?Ue:"",maxLength:400}),c&&e.jsxs("p",{className:"cn-prompt-ghost","aria-hidden":"true",children:[x,e.jsx("span",{className:"cn-caret"})]}),e.jsx("button",{type:"submit",className:`cn-prompt-send${d.trim()?" is-ready":""}`,"aria-label":"Start this novel",children:e.jsx($e,{"aria-hidden":"true"})})]})}function Xe(s){const[t,r]=i.useState(""),a=i.useRef({idea:0,n:0,erasing:!1});return i.useEffect(()=>{if(!s)return;let n=0;const d=()=>{const l=a.current,u=W[l.idea];l.erasing?l.n>0?(l.n--,r(u.slice(0,l.n)),n=window.setTimeout(d,Oe)):(l.erasing=!1,l.idea=(l.idea+1)%W.length,n=window.setTimeout(d,He)):l.n<u.length?(l.n++,r(u.slice(0,l.n)),n=window.setTimeout(d,ce)):(l.erasing=!0,n=window.setTimeout(d,Ge))};return n=window.setTimeout(d,a.current.n===0?700:ce),()=>clearTimeout(n)},[s]),{shown:t,idea:W[a.current.idea]}}function We(){const[s,t]=i.useState(()=>typeof document>"u"||!document.hidden);return i.useEffect(()=>{const r=()=>t(!document.hidden);return document.addEventListener("visibilitychange",r),()=>document.removeEventListener("visibilitychange",r)},[]),s}function qe(){const s=L("(prefers-reduced-motion: reduce)"),t=L("(max-aspect-ratio: 4/5)"),r=i.useRef(null),a=i.useRef(null),n=_(r),d=t?"hero-tall":"hero",l=we();return Le(),i.useEffect(()=>{const u=a.current;!u||s||(n?u.play().catch(()=>{}):u.pause())},[n,s,d,l]),e.jsxs("section",{ref:r,className:"cn-hero","aria-labelledby":"cn-hero-title",children:[s?e.jsx("img",{className:"cn-hero-film",src:F(`${d}.webp`),alt:"","aria-hidden":"true",decoding:"async"}):e.jsx("video",{ref:a,className:"cn-hero-film",muted:!0,loop:!0,playsInline:!0,autoPlay:!0,preload:"auto",poster:F(`${d}.webp`),"aria-hidden":"true",tabIndex:-1,src:l?ye(d,l):void 0},d),e.jsx("div",{className:"cn-hero-veil","aria-hidden":"true"}),e.jsxs("div",{className:"cn-hero-copy",children:[e.jsx("h1",{id:"cn-hero-title",className:"cn-hero-title",children:"Novels written for you."}),e.jsx("p",{className:"cn-hero-line",children:"One prompt in. A whole book out."}),e.jsx(Ne,{id:"cn-idea"})]})]})}let le=!1,q=!1;const ze=900,Ye=1.75,U=[{text:"Your imagination.",at:[-.2,.3]},{text:"We bring it to life.",at:[.38,.68]},{text:"Then it’s yours to read.",at:[.8,1.4]}],de=s=>Math.min(1,Math.max(0,s)),Ke=(s,[t,r])=>Math.min(de((s-t)/.05),1-de((s-(r-.05))/.05));function Ve(){const s=L("(prefers-reduced-motion: reduce)"),t=L("(max-width: 760px) and (orientation: portrait)"),r=i.useRef(null),a=i.useRef(null),n=i.useRef(null),d=i.useRef([]),[l]=i.useState(le),u=l||s,w=_(r,"900px"),v=_(a,"-22% 0px -22% 0px"),[y,j]=i.useState(!1);return i.useEffect(()=>{const c=n.current;if(!(!c||u)){if(!v){c.pause();return}c.ended||(le=!0,c.playbackRate=Ye,c.play().then(()=>j(!0)).catch(()=>{}))}},[v,u,w]),i.useEffect(()=>{const c=a.current;if(!c||u||q)return;let x=window.scrollY,f=0,o=!1;const h=p=>p.preventDefault(),m=p=>{[" ","PageDown","PageUp","ArrowDown","ArrowUp","End","Home"].includes(p.key)&&p.preventDefault()},g=()=>{var p;o&&(o=!1,(p=oe())==null||p.start(),window.removeEventListener("wheel",h),window.removeEventListener("touchmove",h),window.removeEventListener("keydown",m))},N=()=>{var E;const p=window.scrollY,b=p>x;if(x=p,q||!b)return;const T=c.getBoundingClientRect(),S=T.top+T.height/2-window.innerHeight/2,A=window.innerHeight*.06;S>A||(q=!0,!(S<-window.innerHeight*.35)&&(o=!0,(E=oe())==null||E.stop(),window.addEventListener("wheel",h,{passive:!1}),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("keydown",m),f=window.setTimeout(g,ze)))};return window.addEventListener("scroll",N,{passive:!0}),()=>{window.removeEventListener("scroll",N),window.clearTimeout(f),g()}},[u]),i.useEffect(()=>{const c=n.current;if(!c||u)return;let x=0;const f=()=>{const g=Number.isFinite(c.duration)&&c.duration>0?c.currentTime/c.duration:0;d.current.forEach((N,p)=>{N&&(N.style.opacity=String(Ke(g,U[p].at)))})},o=()=>{f(),x=requestAnimationFrame(o)},h=()=>{cancelAnimationFrame(x),x=requestAnimationFrame(o)},m=()=>{cancelAnimationFrame(x),f()};return c.addEventListener("playing",h),c.addEventListener("pause",m),c.addEventListener("ended",m),f(),()=>{cancelAnimationFrame(x),c.removeEventListener("playing",h),c.removeEventListener("pause",m),c.removeEventListener("ended",m)}},[u,w]),e.jsxs("section",{ref:r,className:"cn-dive","aria-labelledby":"cn-dive-title",children:[e.jsx("h2",{id:"cn-dive-title",className:"sr-only",children:U.map(c=>c.text).join(" ")}),e.jsxs("div",{ref:a,className:"cn-dive-card","data-tall":t||void 0,children:[u?e.jsx("img",{className:"cn-dive-film",src:F(t?"dive-tall-last.webp":"dive-last.webp"),alt:"A hardcover novel, The Bells of Saint Martin, held open-handed over a desk; its cover is the painted hilltop village.",loading:"lazy",decoding:"async"}):e.jsxs(e.Fragment,{children:[e.jsx("video",{ref:n,className:"cn-dive-film",muted:!0,playsInline:!0,preload:w?"auto":"none",src:w?F(t?"dive-tall.mp4":"dive.mp4"):void 0,"aria-hidden":"true",tabIndex:-1},t?"tall":"wide"),e.jsx("img",{className:"cn-dive-poster","data-hide":y||void 0,src:F(t?"dive-tall-first.webp":"dive-first.webp"),alt:"","aria-hidden":"true",loading:"lazy",decoding:"async",draggable:!1})]}),e.jsx("div",{className:"cn-dive-scrim","aria-hidden":"true"}),e.jsx("div",{className:"cn-dive-lines","aria-hidden":"true",children:U.map((c,x)=>e.jsx("p",{ref:f=>{d.current[x]=f},className:"cn-dive-line",style:{opacity:u?x===U.length-1?1:0:x===0?1:0},children:c.text},c.text))})]})]})}const Je="attribute vec2 p; void main() { gl_Position = vec4(p, 0.0, 1.0); }",Qe=`
precision mediump float;
uniform vec2 r;
uniform float t;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + vec2(17.0, 9.0); a *= 0.5; }
  return v;
}

// One curtain of light: a bright, crisp ribbon along its lower edge that folds slowly, with tall
// rays standing up from it and fading out. Ice-white at the ribbon, cyan above it, deep blue at the top.
vec3 curtain(vec2 p, vec2 uv, float fi, float base) {
  float x = p.x * (0.50 + 0.10 * fi) + fi * 3.1;
  // the ribbon sweeps across in long folds
  float y = base
    + 0.24 * sin(x * 0.9 + t * (0.07 + 0.02 * fi) + fi)
    + 0.07 * sin(x * 2.6 - t * 0.11 + fi * 2.0)
    + 0.16 * (fbm(vec2(x * 0.8 + t * 0.03, fi * 7.0 + t * 0.02)) - 0.5);
  float d = uv.y - y;
  // the rays lean and shimmer a little as they drift sideways; bright ones stand tall, dim ones stay short
  float rays = noise(vec2(p.x * 21.0 + fi * 40.0 + t * 0.14 + 0.8 * sin(uv.y * 2.5 + t * 0.2 + fi), t * 0.06 + fi * 3.0));
  rays = rays * rays * (3.0 - 2.0 * rays);
  // the light comes and goes along the ribbon, so it is never one unbroken band
  float present = smoothstep(0.20, 0.62, fbm(vec2(x * 0.7 - t * 0.05, fi * 9.0 + t * 0.015)));
  float tail = exp(-max(d, 0.0) * mix(9.0, 2.1, rays));
  float light = smoothstep(-0.034, 0.004, d) * tail * (0.32 + 0.68 * rays) * present;
  vec3 c = mix(vec3(0.18, 0.74, 1.00), vec3(0.13, 0.32, 0.88), smoothstep(0.0, 0.40, d));
  c = mix(vec3(0.46, 0.88, 1.00), c, smoothstep(-0.01, 0.035, d));
  return c * light;
}

void main() {
  vec2 uv = gl_FragCoord.xy / r;
  vec2 p = vec2(uv.x * r.x / r.y, uv.y);

  // deep navy, a touch lighter toward the bottom, like a horizon
  vec3 col = mix(vec3(0.026, 0.060, 0.170), vec3(0.008, 0.016, 0.058), smoothstep(0.0, 1.0, uv.y));

  col += curtain(p, uv, 0.0, 0.16) * 1.15;
  col += curtain(p, uv, 1.0, 0.42) * 0.95;
  col += curtain(p, uv, 2.0, 0.64) * 0.60;

  // a few stars, more of them higher up, each twinkling on its own beat
  vec2 g = gl_FragCoord.xy / 2.6;
  float h = hash(floor(g));
  float star = step(0.9925, h) * smoothstep(0.5, 0.05, length(fract(g) - 0.5)) * (0.55 + 0.45 * sin(t * 1.3 + h * 90.0));
  col += vec3(0.80, 0.90, 1.00) * star * smoothstep(0.15, 0.9, uv.y);

  // soft roll-off so overlapping curtains never clip to white, then darker corners
  col = 1.0 - exp(-col * 1.7);
  vec2 q = uv - 0.5;
  col *= 1.0 - 0.55 * dot(q, q);
  // a breath of grain, so the dark gradients never band
  col += (hash(gl_FragCoord.xy) - 0.5) / 160.0;

  gl_FragColor = vec4(col, 1.0);
}`,Ze=.6,et=960,tt=32;function st({on:s}){const t=i.useRef(null),r=i.useRef(null);return i.useEffect(()=>{const a=t.current;if(!a)return;const n=a.getContext("webgl",{antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"low-power"});if(!n)return;const d=(h,m)=>{const g=n.createShader(h);return n.shaderSource(g,m),n.compileShader(g),g},l=n.createProgram();if(n.attachShader(l,d(n.VERTEX_SHADER,Je)),n.attachShader(l,d(n.FRAGMENT_SHADER,Qe)),n.linkProgram(l),!n.getProgramParameter(l,n.LINK_STATUS))return;n.useProgram(l),n.bindBuffer(n.ARRAY_BUFFER,n.createBuffer()),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),n.STATIC_DRAW);const u=n.getAttribLocation(l,"p");n.enableVertexAttribArray(u),n.vertexAttribPointer(u,2,n.FLOAT,!1,0,0);const w=n.getUniformLocation(l,"r"),v=n.getUniformLocation(l,"t");let y=40,j=!1;const c=h=>{j||(y+=h,n.uniform2f(w,a.width,a.height),n.uniform1f(v,y),n.drawArrays(n.TRIANGLES,0,3))},x=()=>{const h=Math.max(2,Math.min(et,Math.round(a.clientWidth*Ze))),m=Math.max(2,Math.round(h*a.clientHeight/Math.max(1,a.clientWidth)));a.width===h&&a.height===m||(a.width=h,a.height=m,n.viewport(0,0,h,m),c(0))},f=new ResizeObserver(x);f.observe(a),x(),c(0),a.setAttribute("data-live",""),r.current=c;const o=h=>{h.preventDefault(),j=!0,a.removeAttribute("data-live")};return a.addEventListener("webglcontextlost",o),()=>{f.disconnect(),a.removeEventListener("webglcontextlost",o),r.current=null}},[]),i.useEffect(()=>{if(!s)return;let a=0,n=0;const d=l=>{var w;if(a=requestAnimationFrame(d),n&&l-n<tt)return;const u=n?Math.min(.1,(l-n)/1e3):0;n=l,(w=r.current)==null||w.call(r,u)};return a=requestAnimationFrame(d),()=>cancelAnimationFrame(a)},[s]),e.jsx("span",{className:"cs-sky","aria-hidden":"true",children:e.jsx("canvas",{ref:t})})}const nt={"last-passenger":"Carrow Halt closed on the last night of September 1939, and nobody had told the man in the grey coat."},Ee=B.find(s=>s.id==="last-passenger")??B[0],k=Ee.meta,at=Ce(k.title),G=k.inspire.split(new RegExp("(?<=\\.)\\s+")).slice(0,2).join(" "),rt=[nt["last-passenger"],"I was told as much at York, on the morning of Monday the fourteenth of December, 1953, by Inspector Gledhill, who put it less well. Then he pushed an envelope across the desk and let me open it myself.","Inside was a railway ticket. An Edmondson card, green pasteboard, old LMS issue: CARROW HALT to LEEDS, Third Class Single, Fare 5/1, No. 0417. On the back, in the violet ink of a dating press, 30 SE 39.","I turned it over twice. The corners were sharp enough to cut a thumb. There was no crease in it, no stain, none of the shine that pasteboard takes on after a week in a waistcoat pocket."],P={genres:["mystery","historical"],length:"novel"},ot=O.find(s=>s.id===P.length),ue=(()=>{const s=De({...ge(),premise:G,genres:[...P.genres],length:P.length,autoCharacters:!0});return{...s,cover:Ee.cover,meta:{...s.meta,title:k.title,subtitle:k.subtitle,blurb:k.blurb.split(new RegExp("(?<=\\.)\\s+"))[0],setting:k.setting,mood:k.mood,characters:k.characters,contents:k.contents}}})(),z={screen:"idea",typing:!1,genres:0,length:!1,press:"",scroll:0},J=3400,it=3.2,Re=[{ms:6700,start:z,from:"rest",cues:[{at:600,to:"idea"},{at:1300,click:!0,set:{typing:!0}},{at:1550+J,to:"next"},{at:2300+J,click:!0,set:{press:"next"}}]},{ms:10900,start:{...z,screen:"genre",typing:!0},from:"next",cues:[{at:1750,to:"g-mystery"},{at:2450,click:!0,set:{genres:1}},{at:2650,set:{scroll:330}},{at:3150,to:"g-historical"},{at:3750,click:!0,set:{genres:2}},{at:4300,to:"next"},{at:4900,click:!0,set:{press:"next"}},{at:5150,set:{screen:"length",press:"",scroll:70}},{at:6750,to:"l-novel"},{at:7450,click:!0,set:{length:!0}},{at:7950,set:{screen:"details",scroll:0}},{at:9200,to:"next"},{at:1e4,click:!0,set:{press:"next"}}]},{ms:14600,start:{...z,screen:"plan",typing:!0,genres:2,length:!0},from:"",cues:[{at:4900,to:"next"},{at:5650,click:!0,set:{press:"next"}},{at:5900,set:{screen:"book",press:""},to:""},{at:9500,to:"start"},{at:10300,click:!0},{at:10650,set:{screen:"read"},to:""}]}],Y=Re.map(s=>s.ms);function ct(s,t){const[r,a]=i.useState(0),n=i.useRef(0);return i.useEffect(()=>{if(t!=="run"||r>=s.length)return;const d=performance.now();let l=!1;const u=window.setTimeout(()=>{l=!0,n.current=s[r].at,a(r+1)},Math.max(0,s[r].at-n.current));return()=>{clearTimeout(u),l||(n.current+=performance.now()-d)}},[r,t,s]),t==="still"?s.length:r}function lt(s,t,r,a){const[n,d]=i.useState(0);return i.useEffect(()=>{if(!t||r!=="run"||n>=s.length)return;const l=window.setTimeout(()=>d(u=>u+1),a/s.length);return()=>clearTimeout(l)},[n,t,r,s,a]),r==="still"?s.length:n}const dt={desk:[1280,744],phone:[390,660]},ut=650,D=()=>{};function ht({step:s,mode:t,phone:r,onScreen:a}){const n=Re[s],d=ct(n.cues,t),l=n.cues.slice(0,d),u=l.reduce((o,h)=>h.set?{...o,...h.set}:o,n.start),w=l.reduce((o,h)=>h.to===void 0?o:h.to,n.from),v=l.filter(o=>o.click).length,y=i.useRef(null),j=i.useRef(null),[c,x]=dt[r?"phone":"desk"];i.useEffect(()=>{a==null||a(u.screen)},[u.screen,a]),i.useLayoutEffect(()=>{const o=y.current;if(!o)return;const h=()=>o.style.setProperty("--s",String(o.clientWidth/c));h();const m=new ResizeObserver(h);return m.observe(o),()=>m.disconnect()},[c]);const f=i.useRef(!1);return i.useEffect(()=>{if(!(t!=="run"||f.current)){f.current=!0;for(const o of xe)new Image().src=je(o.id)}},[t]),e.jsxs("div",{ref:y,className:"dm-fit",style:{aspectRatio:`${c} / ${x}`},children:[e.jsxs("div",{ref:j,className:"dm","data-size":r?"phone":"desk","aria-hidden":"true",inert:"",children:[u.screen==="read"?e.jsx(wt,{}):e.jsx(vt,{s:u,mode:t,phone:r}),e.jsx(ft,{root:j,target:w,clicks:v,screen:u.screen,hidden:t==="still",touch:r,rest:[c*.62,x*.8]})]}),u.screen==="read"&&e.jsx(pe,{to:C.sample,className:"btn btn-sm dm-keep",children:"Keep reading"})]})}function ft({root:s,target:t,clicks:r,screen:a,hidden:n,touch:d,rest:l}){const[u,w]=i.useState(l),[v,y]=i.useState(!0),j=i.useRef(!1);return i.useLayoutEffect(()=>{const c=s.current,x=t&&(c==null?void 0:c.querySelector(`[data-c="${t}"]`));if(x&&c){const f=c.getBoundingClientRect(),o=x.getBoundingClientRect(),h=f.width/c.offsetWidth||1,m=(o.left+o.width/2-f.left)/h,g=(o.top+o.height/2-f.top)/h;w([m,g+Math.min(10,o.height/h*.14)]),y(!j.current)}j.current=!0},[t,a,d,s]),e.jsx("span",{className:"dm-cur","data-touch":d||void 0,"data-jump":v||void 0,"data-off":n||!t||void 0,style:{transform:`translateX(${u[0]}px)`},children:e.jsxs("span",{className:"dm-cur-y",style:{transform:`translateY(${u[1]}px)`},children:[r>0&&e.jsx("span",{className:"dm-cur-ring"},r),e.jsx("span",{className:"dm-cur-tip","data-pressed":r>0||void 0,children:d?e.jsx("span",{className:"dm-cur-finger"}):e.jsx("svg",{viewBox:"0 0 16 24",focusable:"false",children:e.jsx("path",{d:"M1.4 1.4v17.3l4.1-3.8 2.8 6.6 2.9-1.2-2.8-6.5h5.7z",fill:"#000",stroke:"#fff",strokeWidth:"1.15",strokeLinejoin:"round"})})},`a${r}`)]})})}const mt=["Idea","Genre","Length","Details","Plan","Book"],pt={idea:0,genre:1,length:2,details:3,plan:4,book:5},xt=Ie(ge());function vt({s,mode:t,phone:r}){const a=s.screen,n=pt[a],[d,l]=i.useState(!1),[u,w]=i.useState(null),v=i.useRef(a);i.useEffect(()=>{if(v.current===a)return;const f=v.current;if(v.current=a,t==="still")return;w(f);const o=window.setTimeout(()=>w(null),ut);return()=>clearTimeout(o)},[a,t]);const y=f=>e.jsx("header",{className:"sc-head",children:e.jsx("p",{className:"cr-q",children:f})}),j=f=>{switch(f){case"idea":return e.jsxs(e.Fragment,{children:[y("What’s your story about?"),e.jsx("div",{className:"sc-idea",children:e.jsx(gt,{typing:s.typing,mode:t})})]});case"genre":return e.jsxs(e.Fragment,{children:[y("Pick a genre."),e.jsx(H,{size:"genre",label:"Genres",picked:s.genres>0,children:xe.map(o=>{const h=P.genres.slice(0,s.genres).includes(o.id);return e.jsxs("span",{className:"tile tile--art","data-c":`g-${o.id}`,"data-on":h||void 0,children:[e.jsx("img",{src:je(o.id),alt:"",decoding:"async",draggable:!1}),e.jsx("span",{className:"tile-cap",children:e.jsx("span",{className:"tile-title",children:o.title})})]},o.id)})})]});case"length":return e.jsxs(e.Fragment,{children:[y("How long should it be?"),e.jsx(H,{size:"length",label:"Length",radio:!0,picked:s.length,children:O.map(o=>e.jsxs("span",{className:"tile tile--len","data-c":`l-${o.id}`,"data-on":s.length&&o.id===P.length||void 0,children:[e.jsx("span",{className:"len-title",children:o.label}),e.jsxs("span",{className:"len-pages",children:[e.jsx("span",{className:"len-num tnum",children:o.pages}),e.jsx("span",{className:"len-unit",children:"pages"})]}),e.jsx("span",{className:"len-bar",children:e.jsx("span",{style:{transform:`scaleX(${o.pages/O[O.length-1].pages})`}})}),e.jsxs("span",{className:"len-price tnum",children:["$",o.price]})]},o.id))})]});case"details":return e.jsxs(e.Fragment,{children:[y("Anything else?"),e.jsx(H,{size:"details",label:"Details",picked:!1,children:Pe.map(([o,h])=>e.jsxs("span",{className:"tile tile--det",children:[e.jsx("span",{className:"det-title",children:h}),e.jsx("span",{className:"det-value",children:xt[o]})]},o))})]});case"plan":return e.jsx(Fe,{book:ue,live:t==="run",instant:t==="still",speed:it,follow:!1,edits:{},onEdit:D,redoLeft:1,onRedo:D,onReady:l});case"book":return e.jsx(_e,{book:ue,live:!0,price:`$${ot.price}`,onRevealed:D,onOpen:D,onAnother:D})}},c=a==="details"?"Draft my story plan":a==="plan"?d?Se(P.length):"Drafting…":"Continue",x=a==="genre"?s.genres===0:a==="length"?!s.length:a==="plan"?!d:!1;return e.jsxs("div",{className:"dm-create",children:[e.jsxs("div",{className:"dm-nav",children:[e.jsx(ve,{className:"dm-logo",decorative:!0}),r?e.jsx("span",{className:"dm-burger"}):e.jsx(e.Fragment,{children:e.jsxs("span",{className:"dm-nav-links",children:[e.jsx("span",{children:"Library"}),e.jsx("span",{children:"My Space"}),e.jsx("span",{children:"Pricing"})]})})]}),e.jsx("div",{className:"cw-top",children:e.jsxs("div",{className:"cw-top-inner",children:[e.jsx("ol",{className:"cw-steps",children:mt.map((f,o)=>e.jsx("li",{children:e.jsx("span",{className:"cw-step","aria-current":o===n?"step":void 0,children:f})},f))}),a!=="book"&&e.jsxs("div",{className:"cw-top-links",children:[e.jsx("span",{className:"cw-link",children:"Save draft"}),e.jsx("span",{className:"cw-link",children:"Start over"})]})]})}),e.jsx("div",{className:"sc-stage","data-dir":"fwd",children:[...u&&u!==a?[u]:[],a].map(f=>e.jsx("section",{className:`sc sc--${f} ${f===a?"sc-in":"sc-out"}`,style:r&&f===a?{"--dm-scroll":s.scroll}:void 0,children:j(f)},f))}),a!=="book"&&e.jsx("div",{className:"cw-bar",children:e.jsxs("div",{className:"cw-bar-inner",children:[e.jsx("span",{className:"cw-back","data-off":n===0||void 0,children:"Back"}),e.jsx("span",{className:"cc-btn cc-btn--primary cw-next","data-c":"next","data-off":x||void 0,"data-press":s.press==="next"||void 0,children:c})]})})]})}function gt({typing:s,mode:t}){const r=lt(G,s,t,J),a=r>=G.length;return e.jsx("div",{className:"idea","data-c":"idea",children:e.jsx("p",{className:"idea-input",children:r===0&&!s?e.jsx("span",{className:"dm-idea-ph",children:"Write as detailed a prompt as you like."}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:G.slice(0,r)}),s&&!a&&e.jsx("span",{className:"dm-caret"})]})})})}function wt(){const[s,...t]=rt,r=s.split(" ").slice(0,4).join(" ");return e.jsxs("div",{className:"dm-reader",children:[e.jsxs("div",{className:"dm-r-top",children:[e.jsx(Be,{className:"dm-r-back"}),e.jsx("span",{className:"dm-r-head",children:e.jsx("b",{children:at})})]}),e.jsx("div",{className:"dm-r-page",children:e.jsxs("div",{className:"dm-r-scroll",children:[e.jsx("p",{className:"dm-r-k",children:"Chapter One"}),e.jsx("p",{className:"dm-r-title",children:k.contents[0]}),e.jsx("span",{className:"dm-r-orn"}),e.jsxs("div",{className:"dm-r-text",children:[e.jsxs("p",{children:[e.jsx("span",{className:"dm-r-cap",children:r[0]}),e.jsx("span",{className:"dm-r-lead",children:r.slice(1)}),s.slice(r.length)]}),t.map(a=>e.jsx("p",{children:a},a.slice(0,16)))]})]})}),e.jsxs("div",{className:"dm-r-foot",children:["Chapter 1 of ",k.chapters," · 10 min left"]})]})}const $=16,he=26,yt=`
attribute vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }`,jt=`
precision highp float;
uniform sampler2D u_mask;   // the word
uniform sampler2D u_soft;   // the word, blurred (for the pooling at the letters' edges)
uniform vec2 u_res;
uniform float u_aspect;     // the word's box: width over height
uniform float u_time;
uniform float u_flood;      // how far along the word the first wash has got (x, in heights)
uniform float u_front;      // 1 while that wash's front is still wet, 0 once it has dried
uniform vec4 u_drop[${$}];  // x, y (x runs 0..aspect, y 0..1), birth, seed

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(17.1, 9.2);
    a *= 0.5;
  }
  return v;
}

// how much of red, green and blue each pigment takes out of the paper, for one layer of it
const vec3 ULTRAMARINE = vec3(2.05, 1.30, 0.32);
const vec3 CERULEAN = vec3(1.55, 0.62, 0.14);
const vec3 INDIGO = vec3(2.35, 2.00, 1.25);
const vec3 PAPER = vec3(0.972, 0.976, 0.988);

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  uv.y = 1.0 - uv.y;
  float a = texture2D(u_mask, uv).a;
  if (a < 0.004) { gl_FragColor = vec4(0.0); return; }
  float soft = texture2D(u_soft, uv).a;

  vec2 p = vec2(uv.x * u_aspect, uv.y);
  float t = u_time;

  // the paper is never quite still: a slow wide pull on everything, and two finer ones that fray the edges a little
  vec2 pull = vec2(fbm(p * 1.3 + vec2(0.0, t * 0.03)), fbm(p * 1.3 + vec2(31.7, -t * 0.026))) - 0.5;
  vec2 fray = vec2(fbm(p * 4.6 + 3.1), fbm(p * 4.6 + 57.3)) - 0.5;
  vec2 fibre = vec2(noise(p * 26.0 + 11.0), noise(p * 26.0 + 71.0)) - 0.5;
  vec2 q = p + pull * 0.3;

  // the first wash, flooding through the word: a soft dark swell behind the front, and the front itself a fine line
  float behind = u_flood - (q.x + fray.x * 0.34 + fibre.x * 0.025);
  float flooded = smoothstep(0.0, 0.016, behind);
  float swell = exp(-pow(max(behind, 0.0) / 0.42, 2.0)) * flooded * u_front;
  float tip = exp(-pow(max(behind, 0.0) / 0.035, 2.0)) * flooded * u_front;

  // the wash itself: two blues run together, in long soft gradients
  float w1 = fbm(q * 0.85 + 11.0);
  float w2 = fbm(q * 1.05 + vec2(40.0 + t * 0.012, 7.0));
  float ultra = 0.24 + 0.42 * w2 + swell * 0.5 + tip * 0.3;
  float ceru = 0.18 + 0.36 * w1 + swell * 0.15;
  float indigo = 0.0;
  float rim = 0.0;     // pigment pushed out to the edge of a water bloom
  float clear = 1.0;   // how much paint the water blooms have left behind
  float wet = swell;

  for (int i = 0; i < ${$}; i++) {
    vec4 d = u_drop[i];
    float age = t - d.z;
    if (age <= 0.0 || age > ${he}.0) continue;
    float seed = d.w;

    // fast, then slower and slower, like water wicking into paper
    float grow = 1.0 - exp(-age / 4.2);
    float R = (0.44 + 0.46 * fract(seed * 7.13)) * (0.04 + 0.96 * grow);
    // it runs further along the word than across it
    vec2 dl = (q - d.xy) * vec2(0.6, 1.0);
    float turn = seed * 6.2831;
    // every drop's edge wanders in its own way, gently
    float rag = (fray.x * cos(turn) + fray.y * sin(turn)) * (0.2 + 0.16 * grow) + (fibre.x * sin(turn) - fibre.y * cos(turn)) * 0.03;
    float f = length(dl) / R + rag;

    // wet in wet: the bloom itself has no edge at all, it just thins away
    float bloom = exp(-f * f * 2.1);
    // as it dries a fine line comes up where the water stopped, and is the last thing to go
    float inside = 1.0 - smoothstep(0.985, 1.0, f);
    float line = exp(-pow((1.0 - f) / 0.04, 2.0)) * inside;
    float born = smoothstep(0.0, 1.8, age);
    float dry = smoothstep(7.0, 17.0, age);                          // 0 wet, 1 dry
    float amt = born * (1.0 - smoothstep(18.0, ${he}.0, age));
    float fill = bloom * mix(0.62, 0.1, dry);
    float edge = line * smoothstep(2.5, 9.0, age) * 0.3;

    float kind = fract(seed * 3.71);
    if (kind < 0.42) {
      ultra += amt * (fill + edge);
    } else if (kind < 0.7) {
      ceru += amt * (fill * 1.5 + edge);
    } else if (kind < 0.8) {
      indigo += amt * (fill * 0.34 + edge * 0.5);
    } else {
      // clear water: it pushes the paint away into a pale bloom, and leaves a fine dark rim
      clear *= 1.0 - amt * bloom * mix(0.6, 0.3, dry);
      rim += amt * line * smoothstep(1.5, 7.0, age) * 0.42;
    }
    wet = max(wet, bloom * born * (1.0 - dry));
  }

  // (however much water lands, the letters keep enough paint to read)
  clear = max(clear, 0.52);
  ultra = ultra * clear + rim;
  ceru *= clear;
  indigo *= clear;

  // pigment pools along the edge of a letter: a fine darker outline
  float pool = smoothstep(0.12, 0.6, a - soft);
  ultra += 0.26 * pool;
  indigo += 0.05 * pool;

  // granulation: the heavy pigment settles into the tooth of the paper (only just)
  float tooth = noise(gl_FragCoord.xy * 0.6) * 0.5 + noise(gl_FragCoord.xy * 1.7) * 0.5;
  ultra *= 0.93 + 0.14 * tooth;
  ceru *= 0.97 + 0.06 * tooth;

  // paper the wash has not reached yet holds only a ghost of the word
  float amount = mix(0.2, 1.0, flooded);
  // (and no layer gets endlessly thick)
  vec3 taken = (ULTRAMARINE * ultra + CERULEAN * ceru + INDIGO * indigo) * amount;
  taken = 3.0 * (1.0 - exp(-taken / 3.0));
  vec3 col = PAPER * exp(-taken);
  // wet paint is a touch deeper
  col *= 1.0 - 0.04 * wet;

  gl_FragColor = vec4(col * a, a);
}`,fe=s=>{const t=s?.82+Math.random()*.16:Math.random()*.78;return(Math.floor(Math.random()*3)+t)/3.71};function bt(s){const t=(r,a)=>{const n=document.createElement("canvas");n.width=Math.max(1,Math.round(r.width/a)),n.height=Math.max(1,Math.round(r.height/a));const d=n.getContext("2d");return d.imageSmoothingEnabled=!0,d.imageSmoothingQuality="high",d.drawImage(r,0,0,n.width,n.height),n};return t(t(t(s,2),2),3)}function Nt(s){const t=s.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!1,powerPreference:"low-power"});if(!t)return null;const r=(p,b)=>{const T=t.createShader(p);return t.shaderSource(T,b),t.compileShader(T),T},a=t.createProgram();if(t.attachShader(a,r(t.VERTEX_SHADER,yt)),t.attachShader(a,r(t.FRAGMENT_SHADER,jt)),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS))return null;t.useProgram(a);const n=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,n),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const d=t.getAttribLocation(a,"a_position");t.enableVertexAttribArray(d),t.vertexAttribPointer(d,2,t.FLOAT,!1,0,0);const l=p=>{const b=t.createTexture();return t.activeTexture(t.TEXTURE0+p),t.bindTexture(t.TEXTURE_2D,b),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),b},u=l(0),w=l(1),v=p=>t.getUniformLocation(a,p);t.uniform1i(v("u_mask"),0),t.uniform1i(v("u_soft"),1);const y=v("u_res"),j=v("u_aspect"),c=v("u_time"),x=v("u_flood"),f=v("u_front"),o=v("u_drop[0]"),h=new Float32Array($*4);for(let p=0;p<$;p++)h[p*4+2]=-1e3;let m=0,g=!1,N=!1;return{setMask(p){N||(s.width=p.width,s.height=p.height,t.viewport(0,0,p.width,p.height),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,u),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,p),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,w),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,bt(p)),t.uniform2f(y,p.width,p.height),t.uniform1f(j,p.width/p.height),g=!0)},drop(p,b,T,S=Math.random()){h.set([p,b,T,S],m*4),m=(m+1)%$},draw(p,b,T){!g||N||(t.uniform1f(c,p),t.uniform1f(x,b),t.uniform1f(f,T),t.uniform4fv(o,h),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLES,0,6))},stop(){N=!0,t.deleteProgram(a),t.deleteTexture(u),t.deleteTexture(w),t.deleteBuffer(n)}}}const Et=232,me=200,Rt=32,Te=8.5,Tt=6,K=[2.3,3.7],V=(s,t)=>{const r=Math.min(1,Math.max(0,s/Te));return-.5+(t+1.4)*(1-Math.pow(1-r,1.7))},At=s=>1-Math.min(1,Math.max(0,(s-Te)/Tt));function St(){const s=i.useRef(null),t=i.useRef(null),r=i.useRef(null),a=i.useRef(null),n=L("(prefers-reduced-motion: reduce)"),d=_(s,"-12% 0px -12% 0px"),[l,u]=i.useState(!1),w=i.useRef(null),v=i.useRef(0),y=i.useRef(4),j=()=>{var c;return(c=w.current)==null?void 0:c.draw(v.current,V(v.current,y.current),At(v.current))};return i.useEffect(()=>{var N;const c=t.current,x=r.current,f=a.current;if(!c||!x||!f)return;const o=Nt(f);w.current=o,v.current=0;let h=!1;const m=()=>{var ne;if(h)return;const p=x.getBBox();if(!(p.width>0))return;const b={x:p.x-6,y:p.y+p.height*.1,w:p.width+12,h:p.height*.86};if(c.setAttribute("viewBox",`${b.x} ${b.y} ${b.w} ${b.h}`),!o)return;const T=c.getBoundingClientRect();if(!(T.width>0))return;const S=Math.min(Math.max(window.devicePixelRatio||1,1.5),2),A=T.width*S/b.w,E=document.createElement("canvas");E.width=Math.max(2,Math.round(b.w*A)),E.height=Math.max(2,Math.round(b.h*A));const R=E.getContext("2d");if(!R)return;const M=getComputedStyle(x);R.font=`${M.fontWeight} ${Et*A}px ${M.fontFamily}`,R.textBaseline="alphabetic",R.fillStyle="#fff";const Z=(parseFloat(M.letterSpacing)||0)*A,ee=-b.x*A,te=(me-b.y)*A,se=((ne=x.textContent)==null?void 0:ne.trim())??"";if("letterSpacing"in R)R.letterSpacing=`${Z}px`,R.fillText(se,ee,te);else{let ae=ee;for(const re of se)R.fillText(re,ae,te),ae+=R.measureText(re).width+Z}y.current=E.width/E.height,o.setMask(E),j(),u(!0)};m(),(N=document.fonts)==null||N.ready.then(m);const g=new ResizeObserver(m);return g.observe(c),()=>{h=!0,g.disconnect(),o==null||o.stop(),w.current=null}},[]),i.useEffect(()=>{const c=w.current;if(!c||!l||!n)return;v.current=60;const x=y.current,f=[[.12,.55,12,.05],[.3,.42,6,.36],[.5,.6,9,.24],[.68,.45,4,.17],[.86,.56,7,.02]];for(const[o,h,m,g]of f)c.drop(o*x,h,v.current-m,g);j()},[l,n]),i.useEffect(()=>{const c=w.current,x=s.current,f=t.current;if(!c||!x||!f||!l||n||!d)return;let o=0,h=0,m=v.current+2.4,g=0,N=null,p=0;const b=S=>{const A=f.getBoundingClientRect();if(!A.width)return;const E=(S.clientX-A.left)/A.width*y.current,R=(S.clientY-A.top)/A.height;if(R<-.2||R>1.2)return;const M=v.current;N&&Math.hypot(E-N[0],R-N[1])<.55&&M-N[2]<1.3||E>V(M,y.current)-.2||(N=[E,R,M],c.drop(E,Math.min(.88,Math.max(.12,R)),M,fe(p++%3===1)),m=Math.max(m,M+1.6))};x.addEventListener("pointermove",b);const T=S=>{if(o=requestAnimationFrame(T),document.hidden){h=0;return}if(h&&S-h<Rt-4)return;const A=h?Math.min(.1,(S-h)/1e3):0;h=S,v.current+=A;const E=v.current;if(E>=m){const R=Math.min(1,Math.max(.12,(V(E,y.current)-.5)/y.current));g=(g+.15+Math.random()*.13)%1,c.drop((.04+g*.92)*R*y.current,.3+Math.random()*.4,E,fe(Math.random()<.2)),m=E+K[0]+Math.random()*(K[1]-K[0])}j()};return o=requestAnimationFrame(T),()=>{cancelAnimationFrame(o),x.removeEventListener("pointermove",b)}},[l,n,d]),e.jsxs("div",{ref:s,className:"cn-word","data-live":l||void 0,children:[e.jsx("svg",{ref:t,className:"cn-word-svg",viewBox:"0 0 1000 240",role:"img","aria-label":"Novinity",focusable:"false",children:e.jsx("text",{ref:r,className:"cn-word-text",x:"0",y:me,"aria-hidden":"true",children:"Novinity"})}),e.jsx("canvas",{ref:a,className:"cn-word-paint","aria-hidden":"true"})]})}function kt(){const s=i.useRef(null);Q(s);const t=L("(prefers-reduced-motion: reduce)"),r=L("(max-width: 734px)"),a=_(s,"-18% 0px -18% 0px"),n=Mt(),[d,l]=i.useState(!0),[u,w]=i.useState(0),[v,y]=i.useState(0),j=t||!d?"still":a&&n?"run":"hold",c=g=>{w(g),y(N=>N+1)},x=()=>c((u+1)%Y.length),[f,o]=i.useState(!1),h=i.useCallback(g=>o(g==="read"),[]),m=i.useRef(Y[0]);return i.useEffect(()=>{m.current=Y[u]},[v]),i.useEffect(()=>{if(j!=="run")return;const g=performance.now(),N=window.setTimeout(x,m.current);return()=>{clearTimeout(N),m.current-=performance.now()-g}},[j,v]),e.jsx("section",{ref:s,className:"cn-steps","aria-labelledby":"cn-steps-title",children:e.jsxs("div",{className:"cs-wrap",children:[e.jsxs("header",{className:"cs-head","data-reveal":!0,children:[e.jsx(St,{}),e.jsx("h2",{id:"cn-steps-title",className:"cn-h2",children:"From one prompt to a whole book."})]}),e.jsxs("div",{className:"cs-stage","data-mode":j,"data-reveal":!0,style:{"--i":1},children:[e.jsx(st,{on:j==="run"}),e.jsxs("div",{className:"cs-window",role:"group","aria-label":"A demonstration of Novinity",children:[e.jsxs("div",{className:"cs-chrome",children:[e.jsxs("div",{className:"cs-tabs","aria-hidden":"true",children:[e.jsx("span",{className:"cs-tabsearch",children:e.jsx("svg",{viewBox:"0 0 12 12",focusable:"false",children:e.jsx("path",{d:"M2.5 4.5L6 8l3.5-3.5"})})}),e.jsxs("span",{className:"cs-tab",children:[e.jsx(ve,{variant:"mark",decorative:!0,className:"cs-tab-icon"}),e.jsx("span",{className:"cs-tab-title",children:f?"The Last Passenger · Novinity":"Start your novel · Novinity"}),e.jsx("svg",{className:"cs-tab-x",viewBox:"0 0 12 12",focusable:"false",children:e.jsx("path",{d:"M2.5 2.5l7 7m0-7l-7 7"})})]}),e.jsx("svg",{className:"cs-tab-new",viewBox:"0 0 12 12",focusable:"false",children:e.jsx("path",{d:"M6 1.5v9M1.5 6h9"})}),e.jsxs("span",{className:"cs-winctl",children:[e.jsx("svg",{viewBox:"0 0 12 12",focusable:"false",children:e.jsx("path",{d:"M1.5 6h9"})}),e.jsx("svg",{viewBox:"0 0 12 12",focusable:"false",children:e.jsx("rect",{x:"2",y:"2",width:"8",height:"8",rx:"1"})}),e.jsx("svg",{viewBox:"0 0 12 12",focusable:"false",children:e.jsx("path",{d:"M2 2l8 8m0-8l-8 8"})})]})]}),e.jsxs("div",{className:"cs-tools",children:[e.jsxs("span",{className:"cs-tool-icons","aria-hidden":"true",children:[e.jsx("svg",{viewBox:"0 0 16 16",focusable:"false",children:e.jsx("path",{d:"M13 8H3.5M7.5 3.5L3 8l4.5 4.5"})}),e.jsx("svg",{viewBox:"0 0 16 16",focusable:"false","data-off":!0,children:e.jsx("path",{d:"M3 8h9.5M8.5 3.5L13 8l-4.5 4.5"})}),e.jsx("svg",{viewBox:"0 0 16 16",focusable:"false",children:e.jsx("path",{d:"M13 8a5 5 0 1 1-1.6-3.7M13 2.5v3h-3"})})]}),e.jsxs("span",{className:"cs-omni","aria-hidden":"true",children:[e.jsx("span",{className:"cs-omni-info",children:e.jsxs("svg",{viewBox:"0 0 16 16",focusable:"false",children:[e.jsx("path",{d:"M2.5 5h5.5M12 5h1.5M2.5 11H4M8 11h5.5"}),e.jsx("circle",{cx:"10",cy:"5",r:"1.7"}),e.jsx("circle",{cx:"6",cy:"11",r:"1.7"})]})}),e.jsxs("span",{className:"cs-omni-url",children:["novinity.ai",e.jsx("span",{children:f?"/read/the-last-passenger":"/create"})]}),e.jsx("svg",{className:"cs-omni-star",viewBox:"0 0 16 16",focusable:"false",children:e.jsx("path",{d:"M8 2.2l1.8 3.7 4 .6-2.9 2.8.7 4L8 11.4l-3.6 1.9.7-4L2.2 6.5l4-.6z"})})]}),!t&&e.jsx("button",{type:"button",className:"cs-pause",onClick:()=>l(g=>!g),"aria-pressed":!d,children:d?"Pause":"Play"}),e.jsxs("span",{className:"cs-tool-end","aria-hidden":"true",children:[e.jsx("span",{className:"cs-avatar",children:e.jsxs("svg",{viewBox:"0 0 16 16",focusable:"false",children:[e.jsx("circle",{cx:"8",cy:"6",r:"2.6"}),e.jsx("path",{d:"M3 13.2c.9-2.2 2.8-3.2 5-3.2s4.1 1 5 3.2"})]})}),e.jsxs("svg",{className:"cs-kebab",viewBox:"0 0 16 16",focusable:"false",children:[e.jsx("circle",{cx:"8",cy:"3.2",r:"1.1"}),e.jsx("circle",{cx:"8",cy:"8",r:"1.1"}),e.jsx("circle",{cx:"8",cy:"12.8",r:"1.1"})]})]})]})]}),e.jsx(ht,{step:u,mode:j,phone:r,onScreen:h},`${v}${r?"p":"d"}`)]})]})]})})}function Mt(){const[s,t]=i.useState(()=>typeof document>"u"||!document.hidden);return i.useEffect(()=>{const r=()=>t(!document.hidden);return document.addEventListener("visibilitychange",r),()=>document.removeEventListener("visibilitychange",r)},[]),s}function Lt(){const s=i.useRef(null);return Q(s),e.jsxs("section",{ref:s,className:"cn-bento","aria-labelledby":"cn-bento-title",children:[e.jsx("header",{className:"cn-bento-head","data-reveal":!0,children:e.jsx("h2",{id:"cn-bento-title",className:"cn-h2",children:"Everything a book should be."})}),e.jsxs("div",{className:"cn-bento-grid",children:[e.jsx(I,{i:0,wide:!0,to:C.create,title:"A cover of its own.",children:e.jsx("div",{className:"cn-fan","aria-hidden":"true",children:B.slice(0,3).map((t,r)=>e.jsx("div",{className:"cn-fan-book",style:{"--k":r},children:e.jsx(X,{spec:t.cover,title:t.meta.title})},t.id))})}),e.jsx(I,{i:1,to:C.sample,title:"Physical or Online.",children:e.jsx("div",{className:"cn-photo cn-photo--devices",children:e.jsx("img",{src:ie("devices"),width:1636,height:706,alt:"A phone and an e-reader open on chapter one.",loading:"lazy",decoding:"async",draggable:!1})})}),e.jsx(I,{i:2,to:"/pricing",title:"Hardcover. Coming soon.",children:e.jsx("div",{className:"cn-photo cn-photo--edition",children:e.jsx("img",{src:ie("explode"),width:1133,height:855,alt:"The Novinity Edition taken apart: spine, Midnight endpapers, pages and cover.",loading:"lazy",decoding:"async",draggable:!1})})}),e.jsx(I,{i:3,to:C.library,title:"My Space.",children:e.jsx("ul",{className:"cn-rows","aria-label":"Sample books",children:B.slice(0,3).map((t,r)=>e.jsxs("li",{style:{"--k":r},children:[e.jsx("span",{className:"cn-rows-cover","aria-hidden":"true",children:e.jsx(X,{spec:t.cover,title:t.meta.title,bare:!0})}),e.jsx("span",{className:"cn-rows-text",children:e.jsx("span",{className:"cn-rows-title",children:t.meta.title})})]},t.id))})}),e.jsx(I,{i:4,to:C.explore,title:"The Library.",children:e.jsx("div",{className:"cn-shelf","aria-hidden":"true",children:B.slice(0,6).map((t,r)=>e.jsx("div",{className:"cn-shelf-book",style:{"--k":r},children:e.jsx(X,{spec:t.cover,title:t.meta.title})},t.id))})})]})]})}function I({i:s,to:t,title:r,wide:a=!1,children:n}){return e.jsxs(pe,{to:t,className:`cn-card cn-bento-card${a?" is-wide":""}`,"data-reveal":!0,style:{"--i":s},children:[e.jsx("span",{className:"cn-bento-copy",children:e.jsx("span",{className:"cn-bento-title",children:r})}),e.jsx("span",{className:"cn-bento-media",children:n})]})}function _t(){const s=i.useRef(null),t=i.useRef(null);Q(s);const r=L("(prefers-reduced-motion: reduce)"),a=_(s,"400px"),n=_(s),d="end",l=we();return i.useEffect(()=>{const u=t.current;!u||r||(n?u.play().catch(()=>{}):u.pause())},[n,r,d,l,a]),e.jsxs("section",{ref:s,className:"cn-end","aria-labelledby":"cn-end-title",children:[r||!a?e.jsx("img",{className:"cn-end-sky",src:F(`${d}.webp`),alt:"","aria-hidden":"true",loading:"lazy",decoding:"async"}):e.jsx("video",{ref:t,className:"cn-end-sky",muted:!0,loop:!0,playsInline:!0,preload:"auto",poster:F(`${d}.webp`),"aria-hidden":"true",tabIndex:-1,src:l?ye(d,l):void 0},d),e.jsx("div",{className:"cn-end-veil","aria-hidden":"true"}),e.jsxs("div",{className:"cn-end-copy","data-reveal":!0,children:[e.jsx("h2",{id:"cn-end-title",className:"cn-h2",children:"What should we write?"}),e.jsx(Ne,{id:"cn-idea-end",label:"Your idea for a novel"})]})]})}function zt(){return ke(),e.jsxs("div",{className:"v-cinema",children:[e.jsx(qe,{}),e.jsx(Ve,{}),e.jsx(kt,{}),e.jsx(Lt,{}),e.jsx(_t,{})]})}export{zt as Home};
