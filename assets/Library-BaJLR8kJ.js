import{r as g,j as l,g as J,L as Z}from"./react-B8WvyCSS.js";import{S as ee}from"./catalog-COuAc3LT.js";import{u as te,C as O,G as oe}from"./index-EKvk7szK.js";import{C as ae}from"./Cover-D69ErVCy.js";import"./motion-9R5hWzyv.js";const w=16,ne=.85,se=1800,re=41,ie=`
attribute vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }`,le=`
precision highp float;
uniform vec2 u_res;
uniform float u_aspect;
uniform float u_time;
uniform float u_unit;     // 1 on a wide sheet, smaller on a narrow one: everything is painted smaller there
uniform vec4 u_bloom[${w}];   // x, y (x runs 0..aspect, y 0..1), radius, seed
uniform vec4 u_state[${w}];   // how much is there (0..1), how dry (0..1), strength, -

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
// (chosen to stay blue when thin: a thin layer of a redder blue goes violet on white)
const vec3 ULTRAMARINE = vec3(2.45, 1.08, 0.20);
const vec3 CERULEAN = vec3(1.75, 0.50, 0.09);
const vec3 INDIGO = vec3(2.60, 1.80, 0.95);

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  uv.y = 1.0 - uv.y;
  vec2 p = vec2(uv.x * u_aspect, uv.y);
  float t = u_time;

  // the sheet is never quite still: a slow wide pull, and two finer ones that fray every edge
  vec2 pull = vec2(fbm(p * 1.1 + vec2(0.0, t * 0.012)), fbm(p * 1.1 + vec2(31.7, -t * 0.01))) - 0.5;
  vec2 fray = vec2(fbm(p * 5.0 + 3.1), fbm(p * 5.0 + 57.3)) - 0.5;
  vec2 fibre = vec2(noise(p * 34.0 + 11.0), noise(p * 34.0 + 71.0)) - 0.5;
  vec2 q = p + pull * 0.12;
  // paint pools and runs back inside a bloom: two slow fields every bloom reads in its own way
  float pool1 = fbm(q * 4.2 + vec2(t * 0.008, 5.0));
  float pool2 = fbm(q * 2.3 + vec2(9.0, -t * 0.006));

  float ultra = 0.0;
  float ceru = 0.0;
  float indigo = 0.0;

  // ── the wash: a loose band across the sheet ──
  float mid = 0.5 + 0.07 * sin(p.x * 1.3 + 0.6) + (fbm(vec2(p.x * 0.8, 3.0)) - 0.5) * 0.22;
  float reach = (0.15 + 0.13 * fbm(vec2(p.x * 1.1 + 20.0, 1.0))) * u_unit;
  float off = abs(q.y - mid) - reach + fray.x * 0.11 + fibre.x * 0.012;
  // (one screen pixel, in the sheet's units: every hard edge is drawn about a pixel and a half soft)
  float px = 1.5 / u_res.y;
  float band = 1.0 - smoothstep(-px, px, off);
  float bandEdge = exp(-pow(off / 0.014, 2.0)) * band;
  // thin in places, where the brush ran dry
  float body = 0.5 + 0.9 * pool2;
  ceru += band * (0.1 + 0.2 * body) + bandEdge * 0.16;
  ultra += band * 0.03 * body + bandEdge * 0.05;

  // ── the blooms ──
  for (int i = 0; i < ${w}; i++) {
    vec4 b = u_bloom[i];
    vec4 s = u_state[i];
    if (s.x <= 0.001) continue;
    float seed = b.w;
    float turn = seed * 6.2831;
    vec2 d = q - b.xy;
    // every bloom's edge wanders in its own way
    float rag = (fray.x * cos(turn) + fray.y * sin(turn)) * 0.2 + (fibre.x * sin(turn) - fibre.y * cos(turn)) * 0.022;
    float f = length(d) / b.z + rag;
    if (f > 1.02) continue;

    float inside = 1.0 - smoothstep(1.0 - px / b.z, 1.0, f);
    // pigment gathers at the edge: a fine dark line, and a softer deepening behind it
    float rim = exp(-pow((1.0 - f) / max(0.03, 2.0 * px / b.z), 2.0));
    float shelf = exp(-pow((1.0 - f) / 0.2, 2.0));
    // inside, the paint is uneven: pooled here, run back pale there
    float pooled = mix(pool1, pool2, fract(seed * 5.3));
    float back = smoothstep(0.52, 0.7, mix(pool2, pool1, fract(seed * 9.1)));
    // (and where two pools met and dried there is a fine line)
    float tide = 1.0 - smoothstep(0.0, 0.018, abs(pooled - 0.5 - 0.1 * sin(turn)));
    float wetBody = 0.12 + 1.15 * pooled * pooled * 1.6 + 0.3 * shelf - 0.26 * back + 0.14 * tide;
    // drying: the body sinks to a pale stain, the rim line stays
    float amount = inside * s.x * (mix(max(wetBody, 0.06), 0.1 + 0.12 * pooled + 0.06 * tide, s.y) + rim * mix(0.5, 0.34, s.y));
    amount *= s.z;

    float kind = fract(seed * 3.71);
    if (kind < 0.46) ultra += amount;
    else if (kind < 0.86) ceru += amount * 1.25;
    else { indigo += amount * 0.42; ultra += amount * 0.4; }
  }

  // ── a spatter of small drops, thicker close the band ──
  vec2 cell = floor(p * 15.0);
  float pick = hash(cell + 3.7);
  float close = 1.0 - smoothstep(reach + 0.02, reach + 0.36, abs(p.y - mid));
  if (pick > 1.0 - 0.2 * close) {
    vec2 at = (cell + 0.25 + 0.5 * vec2(hash(cell + 11.0), hash(cell + 29.0))) / 15.0;
    float r = 0.0035 + 0.011 * hash(cell + 47.0) * hash(cell + 53.0);
    float spot = 1.0 - smoothstep(1.0 - px / r, 1.0, length(p - at) / r + fibre.y * 0.3);
    ultra += spot * (0.5 + 0.7 * hash(cell + 61.0));
  }

  // granulation: the heavy pigment settles into the tooth of the paper
  float tooth = noise(gl_FragCoord.xy * 0.55) * 0.5 + noise(gl_FragCoord.xy * 1.6) * 0.5;
  ultra *= 0.84 + 0.32 * tooth;
  ceru *= 0.93 + 0.14 * tooth;

  vec3 taken = ULTRAMARINE * ultra + CERULEAN * ceru + INDIGO * indigo;
  taken = 2.6 * (1.0 - exp(-taken / 2.6));
  vec3 col = exp(-taken);
  // the paper itself: the faintest grain
  col *= 1.0 - 0.012 * tooth;
  // kept light: it is a background
  col = mix(col, vec3(1.0), 0.3);
  gl_FragColor = vec4(col, 1.0);
}`,m=(a,h)=>{const i=Math.sin(a*127.1+h*311.7)*43758.5453;return i-Math.floor(i)},N=(a,h,i)=>{const e=Math.min(1,Math.max(0,(i-a)/(h-a)));return e*e*(3-2*e)};function ce(a,h=!1){const i=a.parentElement,e=a.getContext("webgl",{alpha:!1,antialias:!1,powerPreference:"low-power"});if(!i||!e)return null;const d=(n,o)=>{const f=e.createShader(n);return e.shaderSource(f,o),e.compileShader(f),f},r=e.createProgram();if(e.attachShader(r,d(e.VERTEX_SHADER,ie)),e.attachShader(r,d(e.FRAGMENT_SHADER,le)),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))return null;e.useProgram(r);const y=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,y),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const p=e.getAttribLocation(r,"a_position");e.enableVertexAttribArray(p),e.vertexAttribPointer(p,2,e.FLOAT,!1,0,0);const u=n=>e.getUniformLocation(r,n),A=u("u_res"),t=u("u_aspect"),s=u("u_time"),c=u("u_unit"),v=u("u_bloom[0]"),k=u("u_state[0]");let E=1.6,_=1;const F=new Float32Array(w*4),L=new Float32Array(w*4),$=n=>{for(let o=0;o<w;o++){const f=44+m(o,1)*40,I=n+m(o,2)*f,x=Math.floor(I/f),M=I/f-x,B=M*f,H=o<3?.2+m(o,x+3)*.1:o<8?.09+m(o,x+3)*.07:.03+m(o,x+3)*.045,W=(.03+m(o,x+5)*.94)*E,V=.5+(m(o,x+7)+m(o,x+8)-1)*(.3+.12*_),Y=.1+.9*(1-Math.exp(-B/5.5)),K=N(0,2.6,B)*(1-N(.9,1,M)),X=N(.6,.86,M),Q=o<3?.6:o<8?.8:1.1;F.set([W,V,H*Y*_,m(o,x+11)],o*4),L.set([K,X,Q,0],o*4)}},C=n=>{$(n),e.uniform1f(s,n),e.uniform4fv(v,F),e.uniform4fv(k,L),e.drawArrays(e.TRIANGLES,0,6)};let R=300,j=0,P=0;const T=()=>{const n=i.clientWidth,o=i.clientHeight;if(!n||!o||n===j&&Math.abs(o-P)<140)return;j=n,P=o;const f=Math.min(ne*Math.min(window.devicePixelRatio||1,2),se/n);a.width=Math.max(2,Math.round(n*f)),a.height=Math.max(2,Math.round(o*f)),E=n/o,_=Math.min(1,E*1.15),e.uniform1f(c,_),e.viewport(0,0,a.width,a.height),e.uniform2f(A,a.width,a.height),e.uniform1f(t,E),C(R)};let S=0,b=0;const q=n=>{if(S=requestAnimationFrame(q),document.hidden){b=0;return}b&&n-b<re-4||(R+=b?Math.min(.1,(n-b)/1e3):0,b=n,C(R))},U=new ResizeObserver(T);return U.observe(i),T(),h||(S=requestAnimationFrame(q)),()=>{cancelAnimationFrame(S),U.disconnect()}}function fe(){const a=g.useRef(null),[h,i]=g.useState(!1);return g.useEffect(()=>{const e=a.current;if(!e)return;const d=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let r=null;const y=window.setTimeout(()=>{r=ce(e,d),r&&i(!0)},350);return()=>{window.clearTimeout(y),r==null||r()}},[]),l.jsx("div",{className:"ls-back","aria-hidden":"true",children:l.jsx("canvas",{ref:a,className:"ls-back-paint","data-on":h||void 0})})}const D=a=>a.replace(/­/g,""),G=[[5,2,17,.05],[28,7,12,-.03],[45,1,20,.09],[71,6,13,-.05],[87,14,10,.03],[13,30,13,-.04],[32,27,18,.07],[56,33,12,-.02],[73,29,19,.06],[4,55,19,.08],[28,58,12,-.05],[45,61,16,.04],[66,59,12,-.03],[82,62,14,.07]],z=[[5,1,46,0],[57,4,38,0],[10,19,36,0],[51,17,44,0],[5,35,44,0],[55,37,38,0],[12,52,38,0],[54,53,42,0],[5,68,46,0],[57,70,36,0],[10,84,38,0],[53,85,42,0]];function ve(){te(O);const[a,h]=J(),[i,e]=g.useState(()=>{var s;const t=a.get("genre");return a.get("q")??((s=oe.find(c=>c.id===t))==null?void 0:s.title)??""});g.useEffect(()=>{if(!a.has("genre"))return;const t=new URLSearchParams(a);t.delete("genre"),h(t,{replace:!0})},[a,h]);const d=ee,r=g.useRef(null),y=g.useMemo(()=>d.map(t=>D([t.meta.title,t.meta.subtitle??"",...t.meta.genres].join(" ")).toLowerCase()),[d]),p=i.trim().toLowerCase(),u=y.map(t=>!p||p.split(/\s+/).every(s=>t.includes(s))),A=u.filter(Boolean).length;return g.useEffect(()=>{const t=r.current;if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let s=0;const c=()=>{s=0,t.style.setProperty("--scroll",String(Math.round(window.scrollY)))},v=()=>{s||(s=requestAnimationFrame(c))};return c(),window.addEventListener("scroll",v,{passive:!0}),()=>{cancelAnimationFrame(s),window.removeEventListener("scroll",v)}},[]),l.jsxs("div",{className:"ls",children:[l.jsx(fe,{}),l.jsx("h1",{className:"sr-only",children:O}),l.jsxs("form",{className:"ls-search",role:"search",onSubmit:t=>t.preventDefault(),children:[l.jsx("label",{htmlFor:"ls-q",className:"sr-only",children:"Search the Library"}),l.jsx("input",{id:"ls-q",type:"search",className:"ls-input",value:i,placeholder:"Search",autoComplete:"off",spellCheck:!1,onChange:t=>e(t.target.value)})]}),l.jsx("p",{className:"sr-only",role:"status",children:p?`${A} of ${d.length} books match.`:""}),l.jsxs("div",{ref:r,className:"ls-field","data-searching":!!p||void 0,children:[d.map((t,s)=>{const c=G[s%G.length],v=z[s%z.length],k=D(t.meta.title);return l.jsx(Z,{to:`/book/${t.id}`,className:"ls-book","aria-label":k,"data-out":!u[s]||void 0,tabIndex:u[s]?void 0:-1,style:{"--x":c[0],"--y":c[1],"--w":c[2],"--drift":c[3],"--px":v[0],"--py":v[1],"--pw":v[2],"--i":s},children:l.jsx("span",{className:"ls-cover",children:l.jsx(ae,{spec:t.cover,title:t.meta.title})})},t.id)}),p&&A===0&&l.jsx("p",{className:"ls-none",children:"Nothing found."})]})]})}export{ve as CinemaExplore};
