import{c as t,u as r,e as p}from"./index-Cei5qcTG.js";import{g as d,r as m}from"./react-X3leFkLE.js";import{s as h}from"./flow-C-Le0bUM.js";import{c as g,D as i,s as y}from"./HomeSwitch-yBi34cMh.js";import"./catalog-BR-HgRIl.js";import"./plans-CsqUe5YM.js";/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};s.node;const q=t(s);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n={name:"file-down",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]};n.node;const $=t(n);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c={name:"monitor-smartphone",size:24,node:[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]]};c.node;const D=t(c),F=[{to:"/explore",label:"Explore"},{to:"/create",label:"Create"},{to:"/library",label:"Library"},{to:"/pricing",label:"Pricing"}],b={create:"/create",explore:"/explore",library:"/library",pricing:"/pricing",membership:"/pricing#membership",sample:"/read/quiet-frequency",sampleBook:"/book/quiet-frequency",director:"/read/quiet-frequency?ch=3&direct=1",book:o=>`/book/${o}`,read:o=>`/read/${o}`},u=o=>`/novinity/${o.replace(/^\//,"")}`,N=o=>u(`stills/white-${o}.webp`),S=()=>r(o=>o.credits);function A(){const o=d(),a=r(e=>e.resetWizard);return m.useCallback((e={})=>{const l={...e.story?g({...i,...e.story},e.readerName):p(),...e.genre?{genres:[e.genre]}:{},...e.premise?{premise:e.premise}:{},...e.length?{length:e.length}:{},...e.prose?{prose:e.prose}:{},...e.director!=null?{experience:e.director?"director":"complete"}:{}};a(l,h({length:!!e.length,voice:!!e.prose})),o(b.create)},[o,a])}const L=o=>y({...i,...o});export{q as A,$ as F,D as M,F as N,b as R,u as a,A as b,L as p,N as s,S as u};
