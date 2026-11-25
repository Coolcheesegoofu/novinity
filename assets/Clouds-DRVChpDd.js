import{r as l,j as q}from"./react-BVpGCUBz.js";const L=`
attribute vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }`,M=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 u_res;
uniform float u_t;
uniform float u_paint;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
const mat2 ROT = mat2(1.6, 1.2, -1.2, 1.6);
/* painterly: the fine detail falls away faster, so the clouds are laid in broad masses */
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  float gain = mix(0.5, 0.36, u_paint);
  float total = 0.0;
  for (int i = 0; i < 6; i++) {
    v += a * noise(p);
    total += a;
    p = ROT * p;
    a *= gain;
  }
  return v / total * 0.97;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y;

  // the sky: deep blue overhead, pale at the horizon, a warm glow round the sun
  vec3 col = mix(vec3(0.70, 0.83, 0.96), vec3(0.20, 0.46, 0.86), pow(uv.y, 0.85));
  vec2 sun = vec2(0.62, 0.46);
  float sd = length(p - sun);
  col += vec3(1.0, 0.94, 0.82) * (0.22 * exp(-sd * 2.6) + 0.10 * exp(-sd * 9.0));

  float t = u_t * 0.011;
  for (int i = 0; i < 2; i++) {
    float fi = float(i);
    float scale = mix(1.35, 2.1, fi);
    vec2 q = p * scale + vec2(t * (0.8 + fi * 0.9), t * 0.1);
    // a slow warp, so the clouds billow and change shape as they go
    q += 0.32 * vec2(fbm(q * 0.55 + t * 0.6), fbm(q * 0.55 - t * 0.45 + 7.3));
    float d = fbm(q);
    // more sky near the top, fuller cloud lower down
    float cover = mix(0.50, 0.47, fi) + 0.07 * uv.y;
    // painterly: a crisper edge, as a brush would leave it
    float dens = smoothstep(cover, cover + mix(0.26, 0.16, u_paint), d);
    // light: one step toward the sun; thinner there means lit, thicker means in shade
    vec2 toSun = normalize(sun - p) * 0.05 * scale;
    float ahead = fbm(q + toSun);
    float lit = clamp(0.62 + (d - ahead) * 5.5, 0.0, 1.0);
    // painterly: the light laid in a few broad steps, softened a touch
    float stepped = floor(lit * 3.0 + 0.5) / 3.0;
    lit = mix(lit, mix(lit, smoothstep(0.0, 1.0, stepped), 0.35), u_paint);
    vec3 shade = mix(vec3(0.56, 0.62, 0.74), vec3(0.70, 0.75, 0.84), fi);
    shade = mix(shade, mix(vec3(0.52, 0.56, 0.86), vec3(0.68, 0.72, 0.93), fi), u_paint);
    vec3 high = mix(vec3(1.0, 0.985, 0.96), vec3(1.0, 0.97, 0.9), u_paint);
    vec3 cloud = mix(shade, high, lit);
    // painterly: a faint brushed grain, laid along the wind
    cloud *= 1.0 + u_paint * 0.025 * (noise(q * vec2(2.0, 12.0)) - 0.5);
    // the thin edges catch the light
    cloud += vec3(1.0, 0.96, 0.9) * 0.18 * smoothstep(0.0, 0.5, dens) * (1.0 - smoothstep(0.5, 1.0, dens));
    col = mix(col, cloud, dens * mix(0.7, 0.96, fi));
  }

  // a fine grain, so the gradients never band
  col += (hash(gl_FragCoord.xy + fract(u_t * 7.31) * 113.0) - 0.5) * 0.012;
  // painterly: the sky a little richer
  col = mix(col, col * vec3(0.96, 1.0, 1.06), u_paint * 0.5);
  gl_FragColor = vec4(col, 1.0);
}`,y=.5,I=32;function U({look:f="real",className:S=""}){const u=l.useRef(null),[E,F]=l.useState(!1);return l.useEffect(()=>{const o=u.current,n=o==null?void 0:o.parentElement;if(!o||!n)return;const e=o.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,powerPreference:"low-power"});if(!e)return;const d=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=(t,r)=>{const i=e.createShader(t);return e.shaderSource(i,r),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)||console.warn("Clouds:",e.getShaderInfoLog(i)),i},a=e.createProgram(),m=h(e.VERTEX_SHADER,L),p=h(e.FRAGMENT_SHADER,M);if(e.attachShader(a,m),e.attachShader(a,p),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))return;e.useProgram(a);const v=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,v),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const g=e.getAttribLocation(a,"a_position");e.enableVertexAttribArray(g),e.vertexAttribPointer(g,2,e.FLOAT,!1,0,0);const T=e.getUniformLocation(a,"u_res"),P=e.getUniformLocation(a,"u_t");e.uniform1f(e.getUniformLocation(a,"u_paint"),f==="painterly"?1:0);let x=!1;const _=()=>{const t=Math.max(1,Math.round(n.clientWidth*y)),r=Math.max(1,Math.round(n.clientHeight*y));x&&t===o.width&&r===o.height||(x=!0,o.width=t,o.height=r,e.viewport(0,0,t,r),e.uniform2f(T,t,r))},C=performance.now()-6e4;let w=!0;const s=t=>{e.uniform1f(P,(t-C)/1e3%7200),e.drawArrays(e.TRIANGLES,0,6),w&&(w=!1,requestAnimationFrame(()=>F(!0)))};let c=0,A=0;const R=t=>{c=requestAnimationFrame(R),!(document.hidden||t-A<I-4)&&(A=t,s(t))},b=new ResizeObserver(()=>{_(),d&&s(performance.now())});return b.observe(n),_(),d?s(performance.now()):c=requestAnimationFrame(R),()=>{cancelAnimationFrame(c),b.disconnect(),e.deleteProgram(a),e.deleteShader(m),e.deleteShader(p),e.deleteBuffer(v)}},[f]),q.jsx("canvas",{ref:u,className:`clouds ${S}`,"data-on":E||void 0,"aria-hidden":"true"})}export{U as C};
