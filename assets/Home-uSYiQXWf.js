import{r,j as e,L as ue}from"./react-X3leFkLE.js";import{c as he,g as J,L as fe,u as me}from"./index-cQNG7mVd.js";import{u as k,a as pe,b as L,c as oe,d as xe,f as M,e as ie,g as H,h as ve,R as P,s as Z}from"./sections-Nf_HdvTo.js";import{C}from"./Cover-B0XDpgnO.js";import{S as U}from"./catalog-BxpbmYlV.js";import"./motion-B5kx9kDP.js";import"./plans-Bs6aaZZl.js";/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};ce.node;const we=he(ce),O=["The night mail stops at a station that closed in 1939. One passenger gets off.","The city’s last tree is guarded by a robot that only knows how to water it.","Two rival bakers on the same street get snowed in together for Christmas.","Every scarecrow in the county has turned to face the same farmhouse.","My daughter swears a fox made of stars walks her home from the bus stop."],ge="Describe the book you want to read",ee=34,ye=14,be=2200,je=450;function le({id:s,label:a="Your idea for a novel",className:t=""}){const p=k("(prefers-reduced-motion: reduce)"),i=pe(),[o,d]=r.useState(""),[c,g]=r.useState(!1),x=r.useRef(null),v=L(x),f=Ne(),E=!p&&!c&&o==="",{shown:u,idea:n}=Ee(E&&v&&f),h=l=>{l==null||l.preventDefault();const y=o.trim()||(E&&u?n:"");i(y?{premise:y}:{})},m=l=>{l.key==="Enter"&&!l.shiftKey&&h(l)};return e.jsxs("form",{ref:x,className:`cn-prompt ${t}`,"data-away":!(v&&f)||void 0,onSubmit:h,children:[e.jsx("label",{htmlFor:s,className:"sr-only",children:a}),e.jsx("textarea",{id:s,className:"cn-prompt-input",rows:2,value:o,onChange:l=>d(l.target.value),onKeyDown:m,onFocus:()=>g(!0),onBlur:()=>g(!1),placeholder:p||c?ge:"",maxLength:400}),E&&e.jsxs("p",{className:"cn-prompt-ghost","aria-hidden":"true",children:[u,e.jsx("span",{className:"cn-caret"})]}),e.jsx("button",{type:"submit",className:`cn-prompt-send${o.trim()?" is-ready":""}`,"aria-label":"Start this novel",children:e.jsx(we,{"aria-hidden":"true"})})]})}function Ee(s){const[a,t]=r.useState(""),p=r.useRef({idea:0,n:0,erasing:!1});return r.useEffect(()=>{if(!s)return;let i=0;const o=()=>{const d=p.current,c=O[d.idea];d.erasing?d.n>0?(d.n--,t(c.slice(0,d.n)),i=window.setTimeout(o,ye)):(d.erasing=!1,d.idea=(d.idea+1)%O.length,i=window.setTimeout(o,je)):d.n<c.length?(d.n++,t(c.slice(0,d.n)),i=window.setTimeout(o,ee)):(d.erasing=!0,i=window.setTimeout(o,be))};return i=window.setTimeout(o,p.current.n===0?700:ee),()=>clearTimeout(i)},[s]),{shown:a,idea:O[p.current.idea]}}function Ne(){const[s,a]=r.useState(()=>typeof document>"u"||!document.hidden);return r.useEffect(()=>{const t=()=>a(!document.hidden);return document.addEventListener("visibilitychange",t),()=>document.removeEventListener("visibilitychange",t)},[]),s}function Te(){const s=k("(prefers-reduced-motion: reduce)"),a=k("(max-aspect-ratio: 4/5)"),t=r.useRef(null),p=r.useRef(null),i=L(t),o=a?"hero-tall":"hero",d=oe();return xe(),r.useEffect(()=>{const c=p.current;!c||s||(i?c.play().catch(()=>{}):c.pause())},[i,s,o,d]),e.jsxs("section",{ref:t,className:"cn-hero","aria-labelledby":"cn-hero-title",children:[s?e.jsx("img",{className:"cn-hero-film",src:M(`${o}.webp`),alt:"","aria-hidden":"true",decoding:"async"}):e.jsx("video",{ref:p,className:"cn-hero-film",muted:!0,loop:!0,playsInline:!0,autoPlay:!0,preload:"auto",poster:M(`${o}.webp`),"aria-hidden":"true",tabIndex:-1,src:d?ie(o,d):void 0},o),e.jsx("div",{className:"cn-hero-veil","aria-hidden":"true"}),e.jsxs("div",{className:"cn-hero-copy",children:[e.jsx("h1",{id:"cn-hero-title",className:"cn-hero-title",children:"Novels written for you."}),e.jsx("p",{className:"cn-hero-line",children:"One prompt in. A whole book out."}),e.jsx(le,{id:"cn-idea"})]})]})}let te=!1,$=!1;const Re=900,_e=1.75,B=[{text:"Your imagination.",at:[-.2,.3]},{text:"We bring it to life.",at:[.38,.68]},{text:"Then it’s yours to read.",at:[.8,1.4]}],ne=s=>Math.min(1,Math.max(0,s)),Ae=(s,[a,t])=>Math.min(ne((s-a)/.05),1-ne((s-(t-.05))/.05));function Me(){const s=k("(prefers-reduced-motion: reduce)"),a=k("(max-width: 760px) and (orientation: portrait)"),t=r.useRef(null),p=r.useRef(null),i=r.useRef(null),o=r.useRef([]),[d]=r.useState(te),c=d||s,g=L(t,"900px"),x=L(p,"-22% 0px -22% 0px"),[v,f]=r.useState(!1),[E,u]=r.useState(!1);return r.useEffect(()=>{let n=0;const h=()=>{n=window.setTimeout(()=>u(!0),1500)};return document.readyState==="complete"?h():window.addEventListener("load",h,{once:!0}),()=>{window.removeEventListener("load",h),window.clearTimeout(n)}},[]),r.useEffect(()=>{const n=i.current;if(!(!n||c)){if(!x){n.pause();return}n.ended||(te=!0,n.playbackRate=_e,n.play().then(()=>f(!0)).catch(()=>{}))}},[x,c,g]),r.useEffect(()=>{const n=p.current;if(!n||c||$)return;let h=window.scrollY,m=0,l=!1;const y=w=>w.preventDefault(),T=w=>{[" ","PageDown","PageUp","ArrowDown","ArrowUp","End","Home"].includes(w.key)&&w.preventDefault()},_=()=>{var w;l&&(l=!1,(w=J())==null||w.start(),window.removeEventListener("wheel",y),window.removeEventListener("touchmove",y),window.removeEventListener("keydown",T))},R=()=>{var b;const w=window.scrollY,F=w>h;if(h=w,$||!F)return;const A=n.getBoundingClientRect(),N=A.top+A.height/2-window.innerHeight/2,j=window.innerHeight*.06;N>j||($=!0,!(N<-window.innerHeight*.35)&&(l=!0,(b=J())==null||b.stop(),window.addEventListener("wheel",y,{passive:!1}),window.addEventListener("touchmove",y,{passive:!1}),window.addEventListener("keydown",T),m=window.setTimeout(_,Re)))};return window.addEventListener("scroll",R,{passive:!0}),()=>{window.removeEventListener("scroll",R),window.clearTimeout(m),_()}},[c]),r.useEffect(()=>{const n=i.current;if(!n||c)return;let h=0;const m=()=>{const _=Number.isFinite(n.duration)&&n.duration>0?n.currentTime/n.duration:0;o.current.forEach((R,w)=>{R&&(R.style.opacity=String(Ae(_,B[w].at)))})},l=()=>{m(),h=requestAnimationFrame(l)},y=()=>{cancelAnimationFrame(h),h=requestAnimationFrame(l)},T=()=>{cancelAnimationFrame(h),m()};return n.addEventListener("playing",y),n.addEventListener("pause",T),n.addEventListener("ended",T),m(),()=>{cancelAnimationFrame(h),n.removeEventListener("playing",y),n.removeEventListener("pause",T),n.removeEventListener("ended",T)}},[c,g]),e.jsxs("section",{ref:t,className:"cn-dive","aria-labelledby":"cn-dive-title",children:[e.jsx("h2",{id:"cn-dive-title",className:"sr-only",children:B.map(n=>n.text).join(" ")}),e.jsxs("div",{ref:p,className:"cn-dive-card","data-tall":a||void 0,children:[c?e.jsx("img",{className:"cn-dive-film",src:M(a?"dive-tall-last.webp":"dive-last.webp"),alt:"A hardcover novel, The Bells of Saint Martin, held open-handed over a desk; its cover is the painted hilltop village.",loading:"lazy",decoding:"async"}):e.jsxs(e.Fragment,{children:[e.jsx("video",{ref:i,className:"cn-dive-film",muted:!0,playsInline:!0,preload:g?E||x?"auto":"metadata":"none",src:g?M(a?"dive-tall.mp4":"dive.mp4"):void 0,"aria-hidden":"true",tabIndex:-1},a?"tall":"wide"),e.jsx("img",{className:"cn-dive-poster","data-hide":v||void 0,src:M(a?"dive-tall-first.webp":"dive-first.webp"),alt:"","aria-hidden":"true",loading:"lazy",decoding:"async",draggable:!1})]}),e.jsx("div",{className:"cn-dive-scrim","aria-hidden":"true"}),e.jsx("div",{className:"cn-dive-lines","aria-hidden":"true",children:B.map((n,h)=>e.jsx("p",{ref:m=>{o.current[h]=m},className:"cn-dive-line",style:{opacity:c?h===B.length-1?1:0:h===0?1:0},children:n.text},n.text))})]})]})}function Se(s,a,t,p){const i=s.getExtension("KHR_parallel_shader_compile"),o=(f,E)=>{const u=s.createShader(f);return s.shaderSource(u,E),s.compileShader(u),u},d=s.createProgram();s.attachShader(d,o(s.VERTEX_SHADER,a)),s.attachShader(d,o(s.FRAGMENT_SHADER,t)),s.linkProgram(d);let c=!1,g=0,x=0;const v=()=>{c||p(s.isContextLost()||!s.getProgramParameter(d,s.LINK_STATUS)?null:d)};if(i){const f=()=>{c||(s.isContextLost()||s.getProgramParameter(d,i.COMPLETION_STATUS_KHR)?v():g=requestAnimationFrame(f))};g=requestAnimationFrame(f)}else typeof window.requestIdleCallback=="function"?x=window.requestIdleCallback(v,{timeout:1500}):x=window.setTimeout(v,200);return()=>{c=!0,cancelAnimationFrame(g),typeof window.cancelIdleCallback=="function"&&window.cancelIdleCallback(x),window.clearTimeout(x)}}const I=16,se=26,ke=`
attribute vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }`,Le=`
precision highp float;
uniform sampler2D u_mask;   // the word
uniform sampler2D u_soft;   // the word, blurred (for the pooling at the letters' edges)
uniform vec2 u_res;
uniform float u_aspect;     // the word's box: width over height
uniform float u_time;
uniform float u_flood;      // how far along the word the first wash has got (x, in heights)
uniform float u_front;      // 1 while that wash's front is still wet, 0 once it has dried
uniform vec4 u_drop[${I}];  // x, y (x runs 0..aspect, y 0..1), birth, seed

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

  for (int i = 0; i < ${I}; i++) {
    vec4 d = u_drop[i];
    float age = t - d.z;
    if (age <= 0.0 || age > ${se}.0) continue;
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
    float amt = born * (1.0 - smoothstep(18.0, ${se}.0, age));
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
}`,ae=s=>{const a=s?.82+Math.random()*.16:Math.random()*.78;return(Math.floor(Math.random()*3)+a)/3.71};function Fe(s){const a=(t,p)=>{const i=document.createElement("canvas");i.width=Math.max(1,Math.round(t.width/p)),i.height=Math.max(1,Math.round(t.height/p));const o=i.getContext("2d");return o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high",o.drawImage(t,0,0,i.width,i.height),i};return a(a(a(s,2),2),3)}function De(s,a){const t=s.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!1,powerPreference:"low-power"});if(!t)return null;const p=n=>{const h=t.createTexture();return t.activeTexture(t.TEXTURE0+n),t.bindTexture(t.TEXTURE_2D,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),h},i=p(0),o=p(1),d=t.createBuffer(),c=new Float32Array(I*4);for(let n=0;n<I;n++)c[n*4+2]=-1e3;let g=0,x=null,v=!1,f=null;const E=()=>{!f||!x||(t.uniform2f(f.uRes,x[0],x[1]),t.uniform1f(f.uAspect,x[0]/x[1]))},u=Se(t,ke,Le,n=>{if(!n||v)return;t.useProgram(n),t.bindBuffer(t.ARRAY_BUFFER,d),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const h=t.getAttribLocation(n,"a_position");t.enableVertexAttribArray(h),t.vertexAttribPointer(h,2,t.FLOAT,!1,0,0);const m=l=>t.getUniformLocation(n,l);t.uniform1i(m("u_mask"),0),t.uniform1i(m("u_soft"),1),f={prog:n,uRes:m("u_res"),uAspect:m("u_aspect"),uTime:m("u_time"),uFlood:m("u_flood"),uFront:m("u_front"),uDrop:m("u_drop[0]")},E(),a()});return{setMask(n){v||(s.width=n.width,s.height=n.height,t.viewport(0,0,n.width,n.height),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,Fe(n)),x=[n.width,n.height],E())},ready:()=>!!f&&!!x&&!v,drop(n,h,m,l=Math.random()){c.set([n,h,m,l],g*4),g=(g+1)%I},draw(n,h,m){!f||!x||v||(t.uniform1f(f.uTime,n),t.uniform1f(f.uFlood,h),t.uniform1f(f.uFront,m),t.uniform4fv(f.uDrop,c),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLES,0,6))},stop(){v=!0,u(),f&&t.deleteProgram(f.prog),t.deleteTexture(i),t.deleteTexture(o),t.deleteBuffer(d)}}}const Ie=232,re=200,Pe=32,de=8.5,Be=6,X=[2.3,3.7],q=(s,a)=>{const t=Math.min(1,Math.max(0,s/de));return-.5+(a+1.4)*(1-Math.pow(1-t,1.7))},Ce=s=>1-Math.min(1,Math.max(0,(s-de)/Be));function Ue({armed:s}){const a=r.useRef(null),t=r.useRef(null),p=r.useRef(null),i=r.useRef(null),o=k("(prefers-reduced-motion: reduce)"),d=L(a,"-12% 0px -12% 0px"),[c,g]=r.useState(!1),x=r.useRef(null),v=r.useRef(0),f=r.useRef(4),E=()=>{var u;return(u=x.current)==null?void 0:u.draw(v.current,q(v.current,f.current),Ce(v.current))};return r.useEffect(()=>{var _;const u=t.current,n=p.current,h=i.current;if(!u||!n||!h||!s)return;let m=!1;const l=De(h,()=>{m||!(l!=null&&l.ready())||(E(),g(!0))});x.current=l,v.current=0;const y=()=>{var K;if(m)return;const R=n.getBBox();if(!(R.width>0))return;const w={x:R.x-6,y:R.y+R.height*.1,w:R.width+12,h:R.height*.86};if(u.setAttribute("viewBox",`${w.x} ${w.y} ${w.w} ${w.h}`),!l)return;const F=u.getBoundingClientRect();if(!(F.width>0))return;const A=Math.min(Math.max(window.devicePixelRatio||1,1.5),2),N=F.width*A/w.w,j=document.createElement("canvas");j.width=Math.max(2,Math.round(w.w*N)),j.height=Math.max(2,Math.round(w.h*N));const b=j.getContext("2d");if(!b)return;const S=getComputedStyle(n);b.font=`${S.fontWeight} ${Ie*N}px ${S.fontFamily}`,b.textBaseline="alphabetic",b.fillStyle="#fff";const G=(parseFloat(S.letterSpacing)||0)*N,z=-w.x*N,Y=(re-w.y)*N,W=((K=n.textContent)==null?void 0:K.trim())??"";if("letterSpacing"in b)b.letterSpacing=`${G}px`,b.fillText(W,z,Y);else{let V=z;for(const Q of W)b.fillText(Q,V,Y),V+=b.measureText(Q).width+G}f.current=j.width/j.height,l.setMask(j),l.ready()&&(E(),g(!0))};y(),(_=document.fonts)==null||_.ready.then(y);const T=new ResizeObserver(y);return T.observe(u),()=>{m=!0,T.disconnect(),l==null||l.stop(),x.current=null}},[s]),r.useEffect(()=>{const u=x.current;if(!u||!c||!o)return;v.current=60;const n=f.current,h=[[.12,.55,12,.05],[.3,.42,6,.36],[.5,.6,9,.24],[.68,.45,4,.17],[.86,.56,7,.02]];for(const[m,l,y,T]of h)u.drop(m*n,l,v.current-y,T);E()},[c,o]),r.useEffect(()=>{const u=x.current,n=a.current,h=t.current;if(!u||!n||!h||!c||o||!d)return;let m=0,l=0,y=v.current+2.4,T=0,_=null,R=0;const w=A=>{const N=h.getBoundingClientRect();if(!N.width)return;const j=(A.clientX-N.left)/N.width*f.current,b=(A.clientY-N.top)/N.height;if(b<-.2||b>1.2)return;const S=v.current;_&&Math.hypot(j-_[0],b-_[1])<.55&&S-_[2]<1.3||j>q(S,f.current)-.2||(_=[j,b,S],u.drop(j,Math.min(.88,Math.max(.12,b)),S,ae(R++%3===1)),y=Math.max(y,S+1.6))};n.addEventListener("pointermove",w);const F=A=>{if(m=requestAnimationFrame(F),document.hidden){l=0;return}if(l&&A-l<Pe-4)return;const N=l?Math.min(.1,(A-l)/1e3):0;l=A,v.current+=N;const j=v.current;if(j>=y){const b=Math.min(1,Math.max(.12,(q(j,f.current)-.5)/f.current));T=(T+.15+Math.random()*.13)%1,u.drop((.04+T*.92)*b*f.current,.3+Math.random()*.4,j,ae(Math.random()<.2)),y=j+X[0]+Math.random()*(X[1]-X[0])}E()};return m=requestAnimationFrame(F),()=>{cancelAnimationFrame(m),n.removeEventListener("pointermove",w)}},[c,o,d]),e.jsxs("div",{ref:a,className:"cn-word","data-live":c||void 0,children:[e.jsx("svg",{ref:t,className:"cn-word-svg",viewBox:"0 0 1000 240",role:"img","aria-label":"Novinity",focusable:"false",children:e.jsx("text",{ref:p,className:"cn-word-text",x:"0",y:re,"aria-hidden":"true",children:"Novinity"})}),e.jsx("canvas",{ref:i,className:"cn-word-paint","aria-hidden":"true"})]})}const Oe=73.6;function $e(){const s=r.useRef(null);H(s);const a=k("(prefers-reduced-motion: reduce)"),t=L(s,"-18% 0px -18% 0px"),p=Xe(),i=ve(s),[o,d]=r.useState(!0),c=a||!o?"still":t&&p?"run":"hold",g=r.useRef(null),[x,v]=r.useState(!1),[f,E]=r.useState(!1);return r.useEffect(()=>{const u=g.current;u&&(c==="run"?u.play().catch(()=>{}):u.pause())},[c,i]),r.useEffect(()=>{const u=g.current;if(!u)return;const n=()=>E(u.currentTime>=Oe);return u.addEventListener("timeupdate",n),u.addEventListener("seeked",n),()=>{u.removeEventListener("timeupdate",n),u.removeEventListener("seeked",n)}},[i,a]),e.jsx("section",{ref:s,className:"cn-steps","aria-labelledby":"cn-steps-title",children:e.jsxs("div",{className:"cs-wrap",children:[e.jsxs("header",{className:"cs-head","data-reveal":!0,children:[e.jsx(Ue,{armed:i}),e.jsx("h2",{id:"cn-steps-title",className:"cn-h2",children:"From one prompt to a whole book."})]}),e.jsx("div",{className:"cs-stage","data-mode":c,"data-reveal":!0,style:{"--i":1},children:e.jsxs("div",{className:"cs-window",role:"group","aria-label":"A demonstration of Novinity",children:[e.jsxs("div",{className:"cs-chrome",children:[e.jsxs("div",{className:"cs-tabs","aria-hidden":"true",children:[e.jsx("span",{className:"cs-tabsearch",children:e.jsx("svg",{viewBox:"0 0 12 12",focusable:"false",children:e.jsx("path",{d:"M2.5 4.5L6 8l3.5-3.5"})})}),e.jsxs("span",{className:"cs-tab",children:[e.jsx(fe,{variant:"mark",decorative:!0,className:"cs-tab-icon"}),e.jsx("span",{className:"cs-tab-title",children:f?"Far North · Novinity":"Start your novel · Novinity"}),e.jsx("svg",{className:"cs-tab-x",viewBox:"0 0 12 12",focusable:"false",children:e.jsx("path",{d:"M2.5 2.5l7 7m0-7l-7 7"})})]}),e.jsx("svg",{className:"cs-tab-new",viewBox:"0 0 12 12",focusable:"false",children:e.jsx("path",{d:"M6 1.5v9M1.5 6h9"})}),e.jsxs("span",{className:"cs-winctl",children:[e.jsx("svg",{viewBox:"0 0 12 12",focusable:"false",children:e.jsx("path",{d:"M1.5 6h9"})}),e.jsx("svg",{viewBox:"0 0 12 12",focusable:"false",children:e.jsx("rect",{x:"2",y:"2",width:"8",height:"8",rx:"1"})}),e.jsx("svg",{viewBox:"0 0 12 12",focusable:"false",children:e.jsx("path",{d:"M2 2l8 8m0-8l-8 8"})})]})]}),e.jsxs("div",{className:"cs-tools",children:[e.jsxs("span",{className:"cs-tool-icons","aria-hidden":"true",children:[e.jsx("svg",{viewBox:"0 0 16 16",focusable:"false",children:e.jsx("path",{d:"M13 8H3.5M7.5 3.5L3 8l4.5 4.5"})}),e.jsx("svg",{viewBox:"0 0 16 16",focusable:"false","data-off":!0,children:e.jsx("path",{d:"M3 8h9.5M8.5 3.5L13 8l-4.5 4.5"})}),e.jsx("svg",{viewBox:"0 0 16 16",focusable:"false",children:e.jsx("path",{d:"M13 8a5 5 0 1 1-1.6-3.7M13 2.5v3h-3"})})]}),e.jsxs("span",{className:"cs-omni","aria-hidden":"true",children:[e.jsx("span",{className:"cs-omni-info",children:e.jsxs("svg",{viewBox:"0 0 16 16",focusable:"false",children:[e.jsx("path",{d:"M2.5 5h5.5M12 5h1.5M2.5 11H4M8 11h5.5"}),e.jsx("circle",{cx:"10",cy:"5",r:"1.7"}),e.jsx("circle",{cx:"6",cy:"11",r:"1.7"})]})}),e.jsxs("span",{className:"cs-omni-url",children:["novinity.ai",e.jsx("span",{children:f?"/read/far-north":"/create"})]}),e.jsx("svg",{className:"cs-omni-star",viewBox:"0 0 16 16",focusable:"false",children:e.jsx("path",{d:"M8 2.2l1.8 3.7 4 .6-2.9 2.8.7 4L8 11.4l-3.6 1.9.7-4L2.2 6.5l4-.6z"})})]}),!a&&e.jsx("button",{type:"button",className:"cs-pause",onClick:()=>d(u=>!u),"aria-pressed":!o,children:o?"Pause":"Play"}),e.jsxs("span",{className:"cs-tool-end","aria-hidden":"true",children:[e.jsx("span",{className:"cs-avatar",children:e.jsxs("svg",{viewBox:"0 0 16 16",focusable:"false",children:[e.jsx("circle",{cx:"8",cy:"6",r:"2.6"}),e.jsx("path",{d:"M3 13.2c.9-2.2 2.8-3.2 5-3.2s4.1 1 5 3.2"})]})}),e.jsxs("svg",{className:"cs-kebab",viewBox:"0 0 16 16",focusable:"false",children:[e.jsx("circle",{cx:"8",cy:"3.2",r:"1.1"}),e.jsx("circle",{cx:"8",cy:"8",r:"1.1"}),e.jsx("circle",{cx:"8",cy:"12.8",r:"1.1"})]})]})]})]}),e.jsx("div",{className:"cs-screen","aria-hidden":"true",children:a?e.jsx("img",{className:"cs-film",src:M("demo-still.webp"),alt:"",loading:"lazy",decoding:"async",draggable:!1}):e.jsxs(e.Fragment,{children:[e.jsx("video",{ref:g,className:"cs-film",muted:!0,loop:!0,playsInline:!0,preload:i?"auto":"none",src:i?M("demo.mp4"):void 0,tabIndex:-1,onPlaying:()=>v(!0)}),e.jsx("img",{className:"cs-film cs-poster","data-hide":x||void 0,src:M("demo-first.webp"),alt:"",loading:"lazy",decoding:"async",draggable:!1})]})})]})})]})})}function Xe(){const[s,a]=r.useState(()=>typeof document>"u"||!document.hidden);return r.useEffect(()=>{const t=()=>a(!document.hidden);return document.addEventListener("visibilitychange",t),()=>document.removeEventListener("visibilitychange",t)},[]),s}function qe(){const s=r.useRef(null);return H(s),e.jsxs("section",{ref:s,className:"cn-bento","aria-labelledby":"cn-bento-title",children:[e.jsx("header",{className:"cn-bento-head","data-reveal":!0,children:e.jsx("h2",{id:"cn-bento-title",className:"cn-h2",children:"Everything a book should be."})}),e.jsxs("div",{className:"cn-bento-grid",children:[e.jsx(D,{i:0,wide:!0,to:P.create,title:"A cover of its own.",children:e.jsx("div",{className:"cn-fan","aria-hidden":"true",children:U.slice(0,3).map((a,t)=>e.jsx("div",{className:"cn-fan-book",style:{"--k":t},children:e.jsx(C,{spec:a.cover,title:a.meta.title})},a.id))})}),e.jsx(D,{i:1,to:P.sample,title:"Physical or Online.",children:e.jsx("div",{className:"cn-photo cn-photo--devices",children:e.jsx("img",{src:Z("devices"),width:1636,height:706,alt:"A phone and an e-reader open on chapter one.",loading:"lazy",decoding:"async",draggable:!1})})}),e.jsx(D,{i:2,to:"/pricing",title:"Hardcover. Coming soon.",children:e.jsx("div",{className:"cn-photo cn-photo--edition",children:e.jsx("img",{src:Z("explode"),width:1133,height:855,alt:"The Novinity Edition taken apart: spine, Midnight endpapers, pages and cover.",loading:"lazy",decoding:"async",draggable:!1})})}),e.jsx(D,{i:3,to:P.library,title:"My Space.",children:e.jsx("ul",{className:"cn-rows","aria-label":"Sample books",children:U.slice(0,3).map((a,t)=>e.jsxs("li",{style:{"--k":t},children:[e.jsx("span",{className:"cn-rows-cover","aria-hidden":"true",children:e.jsx(C,{spec:a.cover,title:a.meta.title,bare:!0})}),e.jsx("span",{className:"cn-rows-text",children:e.jsx("span",{className:"cn-rows-title",children:a.meta.title})})]},a.id))})}),e.jsx(D,{i:4,to:P.explore,title:"The Library.",children:e.jsx("div",{className:"cn-shelf","aria-hidden":"true",children:U.slice(0,6).map((a,t)=>e.jsx("div",{className:"cn-shelf-book",style:{"--k":t},children:e.jsx(C,{spec:a.cover,title:a.meta.title})},a.id))})})]})]})}function D({i:s,to:a,title:t,wide:p=!1,children:i}){return e.jsxs(ue,{to:a,className:`cn-card cn-bento-card${p?" is-wide":""}`,"data-reveal":!0,style:{"--i":s},children:[e.jsx("span",{className:"cn-bento-copy",children:e.jsx("span",{className:"cn-bento-title",children:t})}),e.jsx("span",{className:"cn-bento-media",children:i})]})}function He(){const s=r.useRef(null),a=r.useRef(null);H(s);const t=k("(prefers-reduced-motion: reduce)"),p=L(s,"400px"),i=L(s),o="end",d=oe();return r.useEffect(()=>{const c=a.current;!c||t||(i?c.play().catch(()=>{}):c.pause())},[i,t,o,d,p]),e.jsxs("section",{ref:s,className:"cn-end","aria-labelledby":"cn-end-title",children:[t||!p?e.jsx("img",{className:"cn-end-sky",src:M(`${o}.webp`),alt:"","aria-hidden":"true",loading:"lazy",decoding:"async"}):e.jsx("video",{ref:a,className:"cn-end-sky",muted:!0,loop:!0,playsInline:!0,preload:"auto",poster:M(`${o}.webp`),"aria-hidden":"true",tabIndex:-1,src:d?ie(o,d):void 0},o),e.jsx("div",{className:"cn-end-veil","aria-hidden":"true"}),e.jsxs("div",{className:"cn-end-copy","data-reveal":!0,children:[e.jsx("h2",{id:"cn-end-title",className:"cn-h2",children:"What should we write?"}),e.jsx(le,{id:"cn-idea-end",label:"Your idea for a novel"})]})]})}function Je(){return me(),e.jsxs("div",{className:"v-cinema",children:[e.jsx(Te,{}),e.jsx(Me,{}),e.jsx($e,{}),e.jsx(qe,{}),e.jsx(He,{})]})}export{Je as Home};
