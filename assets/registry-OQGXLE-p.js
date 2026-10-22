import{r as g,j as s}from"./react-X3leFkLE.js";import{a5 as A,a6 as S}from"./index-DG_eczZQ.js";const Z={light:"#ffffff",dark:"#161618"};function k(e){const t=/\.(webp|jpe?g|png)$/i.exec(e);if(!t)return[e];const n=e.slice(0,-t[0].length),a=["webp","jpg"].filter(o=>o!==t[1].toLowerCase()).map(o=>`${n}.${o}`);return[e,...a]}const l=new Map,C=e=>e?l.get(e):void 0,y=(e,t)=>void l.set(e,t);function H(e){try{const t=document.createElement("canvas");t.width=20,t.height=30;const n=t.getContext("2d",{willReadFrequently:!0});if(!n)return null;n.drawImage(e,0,0,20,30);const a=n.getImageData(0,0,20,12).data;let o=0;for(let h=0;h<a.length;h+=4)o+=(.2126*a[h]+.7152*a[h+1]+.0722*a[h+2])/255;return o/(a.length/4)}catch{return null}}function v(e){const t=H(e);return t!==null&&t>.62?"dark":"light"}function M(e){return new Promise((t,n)=>{const a=new Image;a.decoding="async",a.onload=()=>t(a),a.onerror=n,a.src=e})}const f=new Map;function X(e){let t=f.get(e);return t||(t=(async()=>{var n;if(((n=l.get(e))==null?void 0:n.status)==="missing")return null;for(const a of k(e))try{const o=await M(a);if(!o.naturalWidth)continue;const h=v(o);return l.set(e,{status:"ok",src:a,ink:h}),{img:o,src:a,ink:h}}catch{}return l.set(e,{status:"missing"}),null})(),f.set(e,t)),t}function m(e){const t=e.replace("#",""),n=t.length===3?t.split("").map(a=>a+a).join(""):t.slice(0,6);return[parseInt(n.slice(0,2),16),parseInt(n.slice(2,4),16),parseInt(n.slice(4,6),16)]}function p(e,t,n){const a=m(e),o=m(t);return`#${a.map((h,r)=>Math.round(h+(o[r]-h)*n).toString(16).padStart(2,"0")).join("")}`}function F(e){const t=m(e).map(n=>{const a=n/255;return a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4)});return .2126*t[0]+.7152*t[1]+.0722*t[2]}function L(e){const t=F(e.bg)<.2;return{top:p(e.bg,"#ffffff",t?.07:.22),mid:e.bg,bottom:p(e.bg,"#000000",t?.2:.1)}}function I(e){const n=e.replace(/­/g,"").split(/\s+/).reduce((h,r)=>Math.max(h,r.length),0),a=e.length,o=a<=12?13:a<=18?11.5:a<=24?10.4:a<=32?9.4:8.4;return Math.min(o,150/Math.max(n,6))}const W=(e,t)=>(e||t||"A Novel").replace(/­/g,"");function ee(e){let t=e>>>0||1;const n=()=>(t=Math.imul(t^t>>>15,2246822507)+1831565813>>>0,((t^t>>>13)>>>0)/4294967296);return{rotate:Math.round((n()*2-1)*8),scale:+(1.04+n()*.14).toFixed(3),x:Math.round((n()*2-1)*30),y:Math.round((n()*2-1)*40),hue:Math.round((n()*2-1)*24)}}function T({className:e=""}){return s.jsxs("svg",{className:`mono-mark ${e}`,viewBox:"0 0 379 182","aria-hidden":"true",focusable:"false",children:[s.jsx("path",{d:A,fill:"currentColor",fillOpacity:.42,fillRule:"evenodd"}),s.jsx("path",{d:S,fill:"currentColor",fillRule:"evenodd"})]})}function N(e){const[,t]=g.useState(0),[n,a]=g.useState(0),o=C(e),h=e?k(e):[],r=!e||(o==null?void 0:o.status)==="missing"?void 0:(o==null?void 0:o.status)==="ok"?o.src:h[n],i=d=>{if(!e||!r)return;const w=d.currentTarget;if(!w.naturalWidth)return u();(o==null?void 0:o.status)!=="ok"&&y(e,{status:"ok",src:r,ink:v(w)}),t(c=>c+1)},u=()=>{if(e){if((o==null?void 0:o.status)!=="ok"&&n+1<h.length){a(n+1);return}y(e,{status:"missing"}),t(d=>d+1)}};return{src:r,ready:(o==null?void 0:o.status)==="ok",ink:(o==null?void 0:o.status)==="ok"?o.ink:void 0,onLoad:i,onError:u}}function R({spec:e,title:t,subtitle:n,className:a="",style:o,bare:h,stage:r=2}){const i=N(e.image),u=i.ready?e.ink??i.ink??"light":void 0,d=L(e.palette),w={"--cv-bg":e.palette.bg,"--cv-fg":e.palette.fg,"--cv-w1":d.top,"--cv-w2":d.mid,"--cv-w3":d.bottom,"--cv-title":`${I(t).toFixed(2)}cqw`,...o},c=i.ready?`has-art ink-${u}`:"is-plain";return s.jsxs("div",{className:`cover ${c} ${a}`,style:w,"data-stage":r,role:"img","aria-label":`Cover of ${t}`,children:[s.jsx("span",{className:"cover-wash","aria-hidden":"true"}),i.src&&s.jsx("img",{className:"cover-img",src:i.src,alt:"",decoding:"async",loading:"lazy",draggable:!1,onLoad:i.onLoad,onError:i.onError},i.src),i.ready&&s.jsx("span",{className:"cover-scrim","aria-hidden":"true"}),!h&&s.jsxs("div",{className:"cover-type","aria-hidden":"true",children:[s.jsx("span",{className:"cover-title",children:t}),s.jsx("span",{className:"cover-line",children:W(n,e.kicker)})]}),!h&&s.jsx(T,{className:"cover-mark"}),s.jsx("span",{className:"cover-sheen","aria-hidden":"true"})]})}const te=g.memo(R);function ae({title:e="Untitled",className:t="",style:n,typed:a}){const o=typeof a=="number"?e.slice(0,a):e,h=Math.min(10.5,I(e)*.86);return s.jsxs("div",{className:`cover cover--cloth ${t}`,style:{"--cv-title":`${h.toFixed(2)}cqw`,...n},role:"img","aria-label":e==="Untitled"?"Untitled cover":`Cover of ${e}`,children:[s.jsx(T,{className:"cloth-mark"}),s.jsxs("span",{className:"cloth-title","aria-hidden":"true",children:[o,typeof a=="number"&&a<e.length&&s.jsx("span",{className:"cloth-caret"})]}),s.jsx("span",{className:"cover-sheen","aria-hidden":"true"})]})}const x=[{id:"lemon-house",title:"The Lemon House Letters",subtitle:"A Novel",genre:"romance",genres:["Romance","Contemporary"],tagline:"Her grandmother left fifty years of love letters, none of them sent.",blurb:"When translator Livia Marchetti returns to the Amalfi coast to sell her late grandmother’s lemon grove, she finds a lifetime of unsent love letters addressed to the grandfather of Matteo Ruocco, the vintner next door and the man she walked away from at nineteen. As she translates her grandmother’s secret, the terraces, the town and her own heart refuse to stay sold.",synopsis:["Livia Marchetti translates other people’s love stories for a living. She has not been back to Ravello in fourteen years, not since the summer she boarded a dawn ferry without saying goodbye to anyone, least of all the boy from the vineyard next door. Now her grandmother Assunta is gone, a hotel group has made a generous offer for the family’s lemon terraces, and Livia has given herself three weeks to sign the papers and leave again.","Then, in the stone storehouse beneath the pergolas, she finds the tins. Inside are hundreds of letters in her grandmother’s hand, spanning half a century, every one addressed to Salvatore Ruocco and not one of them sent. To understand them, Livia needs to know what really happened between the two families, and the only person who might is Salvatore’s grandson Matteo: older, quieter, the owner of the vineyard over the wall, and not remotely interested in making this easy for her.","As the lemons ripen and the letters reveal a love that shaped both families in ways neither ever understood, Livia must decide what she owes the dead, what she owes the land, and whether a second chance is something you can translate, or something you finally have to say in your own words."],setting:"Ravello, on the Amalfi Coast, late summer to harvest",mood:["Warm","Sun-drenched","Yearning"],pov:"First person, present tense",themes:["Second-chance romance","Unsent letters and family secrets","Grief and inheritance","Coming home","Translation and what gets lost in it","Neighbours with history"],characters:[{name:"Livia Marchetti",role:"Narrator, literary translator",description:"Thirty-three, precise, funny when cornered, and far better at finding the right word for strangers than for herself. She came back to sell the grove, not to stay."},{name:"Matteo Ruocco",role:"The vintner next door",description:"He took over his family’s failing vineyard at twenty and made it sing. Patient as a vine, slow to forgive, and still in possession of the one-line note she left on his gate the morning she ran."},{name:"Assunta Marchetti",role:"Livia’s late grandmother",description:"Lemon grower, widow, teller of terrible jokes and keeper of one enormous secret, confessed across fifty years of letters she never posted."},{name:"Carmela Russo",role:"Livia’s oldest friend",description:"Runs the café on the piazza, knows everything worth knowing in Ravello, and has been waiting fourteen years to say she told her so."}],pages:344,chapters:26,words:96300,contents:["The Key Under the Rosemary","Sfusato","The Man Over the Wall","Eleven Tins","Caro Salvatore","Carmela’s Verdict","A Hotel Called Paradiso","What the Dictionary Doesn’t Say","Under the Pergolas","Supper at the Vineyard","Summer, 1961","The Note on the Gate","Lemons in the Rain","A Translator’s Silence","Fireworks over Atrani","What Salvatore Kept","The Wedding That Wasn’t","Salt on the Terrace","The Contract on the Kitchen Table","Night Ferry","Assunta’s Last Letter","Every Word I Didn’t Say","Pruning","Taking Down the Wall","Limoncello, Badly Made","Sent"],sample:{title:"The Key Under the Rosemary",body:`The key is where it has always been, under the third pot of rose­mary on the left, and that is the first thing that undoes me.

Fourteen years. Another coun­try, two flats, a pro­posal I turned down and a career I didn’t, and my grand­mother never once moved the key. I crouch on the step with my suit­case tipped against my knee and hold it in my palm, iron gone soft with rust and warm from the sun, and for a moment my hands won’t do any­thing else.

Below me the ter­races drop toward the sea in green steps, each one roofed with chest­nut poles and black net­ting, and under the net­ting the lemons hang in their thou­sands. *Sfusato amal­fi­tano*: knob­bly, long as my hand, with a pith so sweet you can eat it. Nonna used to slice them thin as paper and salt them for break­fast. She said the English ate lemons like a pun­ish­ment.

The house smells of her. Floor wax, coffee grounds, the cool min­eral breath of the stone. Her apron hangs on its nail behind the door. On the kitchen table there’s a bowl with three lemons in it, gone hard and brown, and I under­stand that she picked them on the last morn­ing she was well enough to walk the ter­races, and that nobody has dared to throw them away.

I sit. I don’t cry. I’m a trans­la­tor; my whole job is to carry mean­ing from one lan­guage into another with­out spilling any. So I sit very still and trans­late the room. *She is not here. She will not be here. You have come to sell this.*

The agent in Amalfi has emailed twice today. The hotel group’s offer is good, he writes, very good, and they would like an answer before the har­vest. I have a pen in my bag for sign­ing things. I have a ferry booked for the twenty-first.

What I don’t have, it turns out, is any idea what to do with the key, so I’m still hold­ing it when I go down to the store­house under the lowest per­gola to check the water tank, and still hold­ing it when I find the tins.

There are eleven of them, the old square kind that bis­cotti used to come in, stacked behind the sacks of copper sul­phate. Inside the first are let­ters. Dozens of them, folded in thirds, in envelopes gone the colour of weak tea, every one in my grand­mother’s upright school­room hand.

Every one addressed to Salvatore Ruocco.

Not one of them stamped.

I know that name. Everyone on this hill­side knows that name. I’m slid­ing the first letter free, *Caro Salvatore, 4 maggio 1958*, when a voice from the top of the steps says, in the dialect I haven’t heard aloud since I was nine­teen, “You still don’t lock the gate.”

I don’t need to look up. I look up anyway.

Matteo Ruocco is stand­ing in the light with a crate of grapes on his shoul­der, older and broader and browner than the boy I left with­out a word, and the first thing I notice, God help me, is his hands. He isn’t look­ing at me. He’s look­ing at the let­ters in mine, with the face of some­one who has been wait­ing a very long time for some­body to find them.`},inspire:"A second-chance romance on the Amalfi coast. A woman who left her small Italian hometown at nineteen comes back after her grandmother dies, planning to sell the family lemon grove as fast as she can. Instead she finds boxes of love letters her grandmother wrote but never sent, all addressed to the grandfather of the man next door, the one she ran away from. Warm, sunlit and slow-burning, with old family secrets, long suppers and a lot of unfinished business."},{id:"harrow-keys",title:"Nine Keys to Harrow House",genre:"mystery",genres:["Thriller","Mystery"],tagline:"A locksmith must open nine sealed rooms before the will is read.",blurb:"Disgraced locksmith Mara Quill is hired to open nine sealed rooms in a dead billionaire’s Cotswolds mansion before his will is read. Every lock she beats gives up a confession, and every confession shortens the list of people in the house who need her to fail.",synopsis:["Four years ago, Mara Quill was the best safe engineer in England. Then a Mayfair jeweller’s vault she had certified was emptied over a bank holiday weekend, and although the police never charged her, nobody ever hired her again. These days she cuts keys in a kiosk at Swindon station and lets calls from unknown numbers ring out.","Then the estate of Silas Harrow comes calling. The reclusive founder of Lanterne, the encryption firm that made him one of the richest men in Britain, died in his sleep at Harrow House three weeks ago. He left behind nine rooms sealed with locks of his own design, a will to be read at noon on Friday, a clause that voids it unless every one of those doors is open, and a single instruction to his executor: hire Mara Quill.","Behind each door waits a confession, recorded in Harrow’s own voice, and each one strips something away from the family gathered under his roof: the young widow, the prodigal son, the business partner, the housekeeper who has served the house for thirty years. As floodwater cuts the roads and the confessions grow darker, Mara begins to understand that Harrow didn’t choose her for her skill alone, that someone in the house has already been at the ninth door, and that they know exactly how to make a locksmith disappear."],setting:"Harrow House, a Jacobean manor in the Cotswolds, one stormy week in November",mood:["Taut","Claustrophobic","Clever"],pov:"Close third person, present tense",themes:["Locked-room puzzles","Ticking-clock deadline","Wealth, secrets and inheritance","A disgraced expert’s shot at redemption","Country-house thriller","Confessions from beyond the grave"],characters:[{name:"Mara Quill",role:"Locksmith and former safe engineer",description:"Forty-one, unflappable with a tension wrench, hopeless with people. She can open almost anything except the question of what really happened to that vault."},{name:"Priya Anand",role:"Executor of the Harrow estate",description:"A meticulous solicitor who hired Mara on a dead man’s instructions and is beginning to suspect that Mara was hired for something else as well."},{name:"Kit Harrow",role:"The estranged son",description:"Charming, broke and twelve years absent, Kit has come home for the money and keeps turning up outside doors he swears he has no interest in."},{name:"Dorothy Fenn",role:"Housekeeper of Harrow House",description:"She holds a key to every room in the house except nine, and has spent three weeks pretending that doesn’t bother her."}],pages:384,chapters:30,words:107500,contents:["Pins and Tumblers","Seventy-Two Hours","The Family in the Long Gallery","Door One: The Library","Harrow’s Voice","Swarf","Mrs Fenn’s Keys","Door Two: The Music Room","The Widow Doesn’t Sleep","Kit","A Lock with No Keyhole","Door Three: The Orangery","Floodwater on the Fosse Way","The Partner’s Alibi","Door Four: The Nursery","What the Vault Remembers","Bump Key","Power Cut","Door Five: The Chapel","Lanterne","The Ice House","Door Six: The Gun Room","Priya’s Copy","Door Seven: The Darkroom","Tension Wrench","Door Eight: The Observatory","The Ninth Door","Eight Minutes to Noon","The Reading of the Will","Every Lock Has a Key"],sample:{title:"Pins and Tumblers",body:`The gates of Harrow House swing open before Mara Quill can find the inter­com, which tells her two things: some­one has been watch­ing the lane, and they want her to know it.

She drives the last half mile through rain so dense it seems to come side­ways out of the beeches. The house arrives all at once, a long honey-stone front gone dark with wet, forty win­dows and every one of them lit. A woman waits under the porch with an umbrella she doesn’t offer.

“Ms Quill. Priya Anand, the execu­tor.” A hand­shake, brisk and dry. “Thank you for coming at such short notice.”

“You paid a year of my rent,” Mara says. “Short notice is what that buys.”

Inside, the hall is stone and oak and very cold, the kind of cold that money keeps on pur­pose. Somewhere deeper in the house a dog is bark­ing and being told to stop. Priya walks fast, heels loud on the flags, and talks with­out turn­ing round.

“Mr Harrow’s will is to be read at noon on Friday. There is a clause. If the nine rooms are not open by then, the will is void, and the estate passes under the terms of an ear­lier doc­u­ment that, frankly, nobody in this family wants exe­cuted.” She stops at the foot of the stairs. “He named you specif­i­cally. I’d like to know why.”

“So would I.”

“You never met him?”

“I read about him.” Everyone had. The boy from Leeds who built an encryp­tion com­pany in a bedsit and sold a third of it to the Americans for more than Malta is worth. The man who bought a Jacobean manor and spent six years having it rebuilt by con­trac­tors who signed agree­ments never to describe the inside.

Upstairs, a cor­ri­dor runs the length of the east wing, papered in a green so deep it is nearly black. Nine doors line it. They are new, Mara sees at once, steel faced with oak to pass for old, and the escutcheons aren’t brass but some­thing paler and harder. She crouches at the first and runs a fin­ger­tip round the keyway. No maker’s mark. A para­cen­tric pro­file, the wards cut in a zigzag so tight she can barely see light through it. Six pins, she thinks, maybe seven, and under­neath them some­thing that isn’t a pin at all.

Her pulse does what it always does in front of a good lock. It slows.

“Can you open them?” Priya asks.

“Ask me tomor­row.”

“We have sev­enty-two hours.”

“Then ask me first thing.”

She stands, and her knee cracks, and that is when she sees it. On the carpet out­side the ninth door, at the far end of the cor­ri­dor, a faint glit­ter in the green pile. She walks down to it and doesn’t touch it. Fine curls of bright metal, swept almost but not quite out of sight.

Someone has been drilling at this lock. Recently. And they knew what they were doing, because they stopped exactly where Mara would have stopped, a mil­lime­tre short of the relocker.

“Who else has been up here?” she asks.

Behind her, Priya Anand says noth­ing at all, and down in the hall the dog starts bark­ing again.`},inspire:"A twisty country-house thriller. A locksmith with a ruined reputation is hired by the estate of a dead tech billionaire to open a series of sealed rooms in his English manor before the will is read. Each room holds a recorded confession that exposes someone in the family, the roads are flooded, and someone in the house is determined to stop her opening the last door. Fast, clever and full of real lock-picking detail."},{id:"silk-ledger",title:"The Silk Ledger",subtitle:"A Novel of Venice",genre:"historical",genres:["Historical Fiction","Mystery"],tagline:"In plague-year Venice, a widow finds secrets in her father’s ledger.",blurb:"Venice, 1576: while plague empties the city, widowed Lucia Dal Moro secretly keeps the books of her father’s silk house, forging his hand so that no one will know a woman holds the pen. Then she finds entries she did not write, and he could not have, tracing a hidden fortune and a drowned man through the arcades of the Rialto.",synopsis:["In the summer of 1576 the plague returns to Venice, and the Republic counts its dead by the boatload. Behind the shutters of a silk house near the Rialto, Lucia Dal Moro, twenty-nine and twice bereaved, keeps a secret of her own. Since a palsy took her father’s right hand, it is she who sits up each night with the great ledger of the house of Dal Moro, copying his slanting script so faithfully that his creditors, his rivals and his guild all believe the old man still runs his business.","But the ledger has begun to change when she is not looking. New entries appear in her father’s hand, written in a cipher of mulberry leaves and saints’ days. Money moves to accounts that have no names. And one line, dated the day a respected silk broker was pulled from the Rio della Fava, records three hundred ducats paid for silence.","To follow the money, Lucia must go where no merchant’s daughter should: into the Ghetto, where the moneychanger Isacco Sarfatti reads ciphers as easily as contracts; onto the quays, where the plague barges load at dusk; and into the confidence of her late husband’s brother, who wants the house of Dal Moro for himself and would very much like to know who has been keeping its books. Rich with the textures of a city at the height of its splendour and the edge of its ruin, this is a story about what a woman’s hand can write, and what it can erase."],setting:"Venice, the Rialto and San Polo, the plague summer of 1576",mood:["Atmospheric","Suspenseful","Sumptuous"],pov:"Close third person, past tense",themes:["Ciphers and secret accounts","A woman working in disguise","Plague and quarantine","Family loyalty and betrayal","Murder at the Rialto","Renaissance trade and money"],characters:[{name:"Lucia Dal Moro",role:"Widowed daughter of a silk merchant",description:"Quick with figures and quicker with a lie when she must be, Lucia has run her father’s house in secret for four months and is discovering, guiltily, that she likes it."},{name:"Bernardo Dal Moro",role:"Silk merchant of the Rialto",description:"Once the sharpest buyer of raw silk in the Republic, now confined to his chair, unable to write, and unwilling to answer his daughter’s questions."},{name:"Isacco Sarfatti",role:"Moneychanger of the Ghetto",description:"A dry, scholarly lender who knows more about the Dal Moro accounts than he should, and never gives an answer without asking a question in return."},{name:"Ottavio Lanzi",role:"Lucia’s brother-in-law",description:"Gracious, ambitious and newly attentive, he means to marry the house of Dal Moro into his own, by contract or by other means."}],pages:368,chapters:24,words:103e3,contents:["Double Entry","The Bell of San Giacometto","A Hand Not Her Father’s","The Mulberry Cipher","Rio della Fava","The Health Office Boat","Ottavio Calls at Vespers","Into the Ghetto","Isacco’s Price","Bolts of Crimson","The Lazzaretto Vecchio","A Widow Goes to Market","The Feast of San Rocco","Ducats in the Well","The Drowned Man’s Accounts","Masks at the Fondaco","Forty Days","The Fever House","What Her Father Wrote in 1549","The Night of the Burning Bales","Balance Carried Forward","A Contract for a Bride","The Doge’s Vow","The Last Entry"],sample:{title:"Double Entry",body:`The plague barges went out at dusk, so Lucia Dal Moro kept her father’s books by night.

Like every habit of that summer, it had begun as an emer­gency and hard­ened into a kind of order. When the bell of San Giacometto rang the Ave Maria she bolted the shut­ters against the smell of the canal, lit two beeswax can­dles the house could no longer afford, and unlocked the walnut cab­i­net in her father’s study with the key she wore beneath her bodice. Then she lifted out the ledger.

It was the size of a church missal and nearly as heavy, bound in calf­skin gone black at the cor­ners from forty years of her father’s thumbs. *Al nome di Dio e del guadagno*, said the first page, in a hand that had once been young. In the name of God and of profit.

Every open­ing since was a pair. On the left, what the house of Dal Moro owed; on the right, what it was owed; and between them a seam where the two must, by God’s arith­metic and the laws of the Republic, agree. Her father had taught her the method at nine, on a slate, as a game for a wet after­noon. He had not imag­ined she would one day use it to deceive half the Rialto.

Since Lent, when the palsy took his right side, Lucia had writ­ten every entry in his hand. She had prac­tised for a week on the backs of old bills of lading until she could make his long-tailed *d* and the impa­tient slash he used for a nought; now she wrote it better than he did. His cred­i­tors had not noticed. His guild had not noticed. Her late hus­band’s brother, who noticed most things, had sent a basket of figs with his prayers for Ser Bernardo’s swift recov­ery, and had not noticed either.

Tonight she meant only to enter the week’s busi­ness: forty brac­cia of crim­son velvet to a Florentine, a bale of Calabrian raw silk taken on credit, the physi­cian’s fee, the gravedig­gers’ fee for the cook. She turned to the cur­rent page, dipped her pen, and stopped.

There was an entry below her last one.

It was in her father’s hand, the real one, the cramped right­ward rush of it, the ink pressed hard enough to bruise the paper. It was dated the eleventh of July. *To the account of the White Mulberry, for the silence of Z.B., ducats three hun­dred.*

Lucia read it three times. On the eleventh of July, Zuane Bertolin, broker in silk, had been pulled from the Rio della Fava with his purse still on his belt and green water in his mouth. And on the eleventh of July her father had lain in the next room, as he lay now, unable to lift a spoon, while she fed him broth and read him the list of the dead.

She brought the candle closer. The ink was no more than a week old. Beyond the shut­ters oars knocked along the canal, and a boat­man called out the name of a parish, and then another, col­lect­ing.

Through the wall she could hear her father breath­ing, slow and wet and even.

She was not the only one in this house who had learned to write in his hand.`},inspire:"A historical mystery set in Renaissance Venice during a plague year. A young widow secretly runs her ailing father’s silk business by forging his handwriting in the account books, until she finds entries she didn’t write: coded payments that point to a hidden fortune and a murder on the Rialto. Rich period detail, a clever and determined heroine, ciphers, money, masks and danger."},{id:"ninth-dune",title:"Beneath the Ninth Dune",genre:"adventure",genres:["Adventure","Historical"],tagline:"A pilot and a surveyor search the Namib for a city on one map.",blurb:"In 1931, grounded pilot Gideon Pryce agrees to fly a young surveyor into the heart of the Namib in search of a caravan city that appears on just one map in the world. With the diamond police on their trail, a rival expedition one ridge behind and fuel enough to be wrong exactly once, they must trust a two-hundred-year-old chart, and each other.",synopsis:["Swakopmund, 1931. Gideon Pryce was once the finest bush pilot in South West Africa. Then a mail flight went down in the Kaokoveld, his passenger didn’t walk away, and the authorities took his licence and most of his friends with it. These days he patches other men’s engines and drinks on credit, and his Gipsy Moth sits under a tarpaulin like a hunting dog that has forgotten what it was for.","Elsie Marsh has a theodolite, a temper and a copy of a chart drawn by a Portuguese cartographer in 1784, the only map anywhere that shows a city in the Namib: a caravan town of salt and stone, marked beneath the ninth of a line of great dunes south of the Kuiseb, on the edge of the forbidden diamond country. Her father vanished looking for it two years ago. She needs a pilot with nothing left to lose. Gideon, it turns out, qualifies.","Shadowed by a mining company agent with his own reasons for wanting the city found, and guided by Tobias Nangolo, the sharpest navigator in the territory, they fly and drive and walk into the oldest desert on earth, where the dunes move overnight and the fog rolls in off a coast of shipwrecks. A sweeping, sun-scorched adventure of old maps, older secrets and a partnership forged in sand and engine oil."],setting:"Swakopmund and the Namib Desert, South West Africa, 1931",mood:["Propulsive","Sun-scorched","Romantic"],pov:"Alternating close third person, past tense",themes:["Lost cities and old maps","Golden-age aviation","Redemption","Mismatched partners","Survival in the desert","Who history belongs to"],characters:[{name:"Gideon Pryce",role:"Bush pilot",description:"Thirty-eight, sardonic, grounded after a fatal crash he has never explained. He can put a Moth down on a dinner plate and has no idea what to do with a second chance."},{name:"Elsie Marsh",role:"Surveyor",description:"Twenty-four, trained at the Cape Trigonometrical Survey and impossible to discourage. She trusts her instruments, her missing father’s map and almost nobody else."},{name:"Tobias Nangolo",role:"Mechanic and navigator",description:"Gideon’s oldest friend and the best desert navigator in the territory, who has his own clear ideas about who the city belongs to."},{name:"Dietrich Albers",role:"Mining company agent",description:"Courteous, well funded and always one day behind them, until the morning he isn’t."}],pages:352,chapters:28,words:98600,contents:["Dead Stick over the Kuiseb","The Portuguese Chart","Swakopmund Fog","A Licence in a Drawer","Tobias","Albers Buys a Round","Fuel for Four Hundred Miles","The First Marker","Sandstorm","The Skeleton Coast","What the Fog Brings","Oryx Tracks","The Abandoned Mission","Her Father’s Last Camp","Dune Seven","The Diamond Police","Water","Night Flight","A Wreck in the Sand","Dune Eight","Albers Makes an Offer","The Salt Road","The Ninth Dune","The City","What Lies Beneath","Sand in the Engine","Takeoff from a Slipface","Off the Map"],sample:{title:"Dead Stick over the Kuiseb",body:`The engine coughed twice over the Kuiseb and then, for eleven sec­onds, said noth­ing at all.

Gideon Pryce counted them. He had learned to count in France, at nine­teen, because count­ing gave the scream­ing part of the mind some­thing to do, and he counted now with the stick eased for­ward and the wind sigh­ing in the wires and the dry bed of the river slid­ing past beneath the left wing like a crack in a plate.

On nine the Gipsy caught. On ten it back­fired, a flat bang that shook the whole air­frame. On eleven it quit for good.

In the front cock­pit, Elsie Marsh twisted round. She had her gog­gles pushed up into hair the colour of the dunes and the expres­sion of a woman revis­ing her opin­ion of an invest­ment.

“Is that sup­posed to happen?” she said, and he heard her per­fectly, which was the worst sound in avi­a­tion.

“Hold on to the map.”

“I am always hold­ing on to the map.”

He put the nose down to keep his air­speed and looked for some­where to land that wasn’t sand. South lay the dune sea: red ridges march­ing to the hori­zon, each one taller than a cathe­dral and soft as flour on its lee face. Put a Moth down on that and it would flip and bury them like bee­tles in a jar. North, across the river, the gravel plains, grey and hard and flat as a bil­liard table, and a mile fur­ther off than he liked.

A mile was a great deal to ask of a biplane with no engine and two people’s lug­gage.

“Pryce—”

“Not now.”

He was busy with the altime­ter, which was busy with its own bad news, and with the riverbed coming up at him, lined with camel-thorn and the bleached ribs of some­thing long dead. He banked north and felt the Moth sag, and nursed it, and swore at it, and promised it new plugs and fresh fabric and a long retire­ment. The gravel swung up to meet them. The wheels touched, bounced, touched again and ran, rat­tling over stones the size of fists, until the pro­peller ticked to a halt and there was noth­ing but heat and the creak of cool­ing metal and his heart going like a riv­eter.

He sat for a moment. Then he climbed out and walked round to the front cock­pit, fully intend­ing to tell Miss Marsh of the Cape Trigonometrical Survey exactly what he thought of her map, her father’s the­o­ries and her money.

The cock­pit was empty. She was already twenty yards off, on her knees in the grit, brush­ing at some­thing with her bare hands.

It was a stone. Squared off, waist-high once and lean­ing now, with a cross cut into its face so long ago the edges had gone soft as soap. Beneath the cross was an arrow point­ing south into the dunes, and beneath the arrow a single Roman numeral.

*I.*

Beside it, in let­ters far newer and much less steady, some­one had scratched *H.M. 1929*.

Elsie sat back on her heels. When she looked up at him, dust to the elbows, he could see how hard she was work­ing not to cry.

“He got this far,” she said. “Two years ago, Pryce, he got this far. So where did he go?”`},inspire:"A propulsive 1930s desert adventure. A disgraced bush pilot and a stubborn young surveyor team up to find a lost caravan city in the Namib that appears on only one old map, following the trail her missing father left behind while racing a mining company agent and the desert itself. Vintage biplanes, sandstorms, ancient markers, sharp banter and a slow-burning partnership."},{id:"saint-agathe",title:"The Hollowing of Saint Agathe",genre:"horror",genres:["Horror","Gothic"],tagline:"At a snowbound convent school, something hums inside the walls.",blurb:"In the snowbound winter of 1974, Ruth Ellison takes a teaching post at a remote Quebec girls’ school that was once a convent, and on her first night she hears a hymn being hummed inside the wall behind her bed. The girls insist the singing is a kindness, and as the snow climbs past the windows, Ruth begins to understand what it is being kind about.",synopsis:["In January 1974, Ruth Ellison answers an advertisement for an English teacher at the Pensionnat Sainte-Agathe, a girls’ boarding school three hours north of Montreal, housed in a convent the nuns gave up a decade ago. The last teacher left in the middle of term without collecting her wages. Ruth, who has her own reasons for wanting to be somewhere nobody can find her, does not ask why.","The school is beautiful in the way that very old, very cold things are beautiful: long corridors, deep windows, a chapel nobody uses, and forty-one girls who are polite, clever and strangely unafraid of the dark. Then, on her first night, Ruth wakes to the sound of a hymn being hummed inside the wall behind her bed. Soft, devout, and very close.","The girls have heard it all their lives. They tell her it is nothing to fear. They tell her the singing is a kindness. But as the snow seals the road and the old convent registers begin to surface, Ruth starts to wonder who first taught those walls to sing, what the hymns are meant to cover, and why the girls look so relieved each time she says she plans to stay."],setting:"A former convent school in the Laurentian Mountains, Quebec, winter 1974",mood:["Chilling","Hushed","Claustrophobic"],pov:"First person, past tense (looking back)",themes:["Haunted boarding school","Gothic convent secrets","Isolation and snowbound dread","Faith, guilt and devotion","Comfort that cannot be trusted","What children know that adults refuse to hear"],characters:[{name:"Ruth Ellison",role:"Narrator, the new English teacher",description:"Twenty-eight, from Toronto, running from a grief she won’t name. She came to Saint Agathe for the silence, which turns out to be the one thing it doesn’t have."},{name:"Odile Ferland",role:"Headmistress",description:"Elegant, chain-smoking and unshakeably calm, she has run the school since the nuns left and answers every question with a kinder one."},{name:"Sœur Bénédicte",role:"The last nun",description:"Eighty-one and nearly deaf, she stayed behind to tend the boiler and the chapel, and she is the only person at Saint Agathe who will not hum along."},{name:"Josée Lavallée",role:"A pupil, aged twelve",description:"Watchful and precocious, the first girl to tell Ruth the singing means no harm, and the first to ask her, very seriously, whether she can hold a note."}],pages:296,chapters:22,words:82900,contents:["Compline","The Road Closes Behind Me","Forty-One Girls","Lauds","The Last Teacher’s Room","Sœur Bénédicte Keeps the Boiler","Candlemas","What the Plaster Hides","Can You Hold a Note?","The Register of 1931","Snow to the Sills","Vigil","The Chapel Nobody Uses","Josée Doesn’t Sleep","Ash Wednesday","The Hollow Wall","Madame Ferland’s Kindness","The Choir Below","Tenebrae","One Candle Left","Thaw","Stay"],sample:{title:"Compline",body:`I want to set down the singing first, before any­thing else, because it was the first thing, and because every time I have tried to tell this story since, people have looked at me the way you look at a stove you aren’t sure you turned off.

I arrived at the Pensionnat Sainte-Agathe on the ninth of January, 1974, in the cab of a mail truck, because the school’s own car could not manage the last eleven miles of road. The driver set me down at the gate with my two suit­cases and did not wait to see me in. The snow was falling in that dense, unhur­ried way it has in the Laurentians, as though it had all the time there was. Through it the build­ing rose in three grey storeys, long and plain, with a bell tower at one end that had no bell. Every window on the ground floor was lit. None of the upper ones were.

Madame Ferland met me in the hall. She was tall and hand­some and smelled of Gitanes, and she took both my hands in hers and said she was so glad, so very glad, that I had come. She did not men­tion my pre­de­ces­sor. Neither did I. I had read the adver­tise­ment four times on the train, and I under­stood from the date it first ran, and from the salary, that I was not the first person to answer it.

My room was on the second floor, at the end of the old clois­ter, in what had been a nun’s cell. Whitewashed walls. A pale cross-shaped patch above the bed where a cru­ci­fix had hung. A radi­a­tor that knocked like some­one asking to be let in. A small girl with dark plaits brought me soup on a tray, curt­seyed, and fled. I ate it and lay down in my coat, because the radi­a­tor gave out more noise than heat, and I slept.

I woke at an hour with­out a name. The house had the thick, sealed quiet of deep snow. And in that quiet, very close to my head, some­one was hum­ming.

It was a hymn. I knew it, though I could not have told you its name: some­thing slow and step­wise, worn smooth by cen­turies of tired mouths. It was not coming from the next room, or from the pipes. It came from the wall itself, from inside the plas­ter behind my pillow, at the height of my ear, as though who­ever was hum­ming had laid her cheek against the other side and was singing to me.

I did not move. I lay and lis­tened to all four verses. When it fin­ished there was a pause, and then the small, wet sound of some­one draw­ing breath to begin again.

In the morn­ing the girl with the plaits brought my coffee. Her name was Josée. She set down the tray, looked at the wall above my bed, and then at me, with an expres­sion I would learn to dread, which was pity.

“You heard them,” she said. It was not a ques­tion. “Don’t be fright­ened, Mademoiselle. It’s a kind­ness. They sing so you won’t hear the other thing.”`},inspire:"A slow-burn gothic horror set in a remote girls’ boarding school in snowbound 1970s Quebec, housed in an old convent. A new teacher hears hymns being hummed inside the walls at night, and the students calmly tell her the singing is a kindness. Atmospheric, restrained and genuinely creepy, with buried convent secrets, a snowed-in cast and an ending that lingers."},{id:"ordinary-weather",title:"All the Ordinary Weather",subtitle:"A Novel",genre:"literary",genres:["Literary Fiction"],tagline:"A meteorologist keeps a weather diary as her mother’s memory fades.",blurb:"Over the year her mother’s memory begins to fail, Lisbon meteorologist Inês Moura keeps a daily weather diary addressed to the woman who first taught her the names of clouds. Between the pressure readings and the river fog, she learns that the forecasts that matter most are the ones no instrument can make.",synopsis:["Inês Moura has spent her working life predicting the sky over Lisbon. She knows how the nortada builds along the coast on summer afternoons, how the fog creeps up the Tagus before dawn, and how to tell half a million people, with sixty per cent confidence, whether to take an umbrella. What she has not foreseen is the morning her mother, Teresa, stands at the window of the flat in Campo de Ourique and cannot find the word for rain.","The diagnosis comes at the turn of the year. Inês, who measures everything, begins to measure this too. Every day for twelve months she writes down the weather: the temperature at seven, the wind, the cloud, the light on the river. And every day, beside it, she writes to her mother, recording the forecasts that verify and the ones that don’t, the jokes Teresa still remembers, the names she loses, and the afternoons that are, against all the evidence, perfectly fine.","Told across a year of ordinary weather in one of the world’s most luminous cities, this is a novel about the long, slow storm of losing someone who is still in the room. It is about a brother who calls from Toronto and a neighbour who brings soup, about tiles and trams and figs on the balcony, and about a daughter learning that love, like weather, is less a thing you predict than a thing you stand out in."],setting:"Campo de Ourique, Lisbon, over one year",mood:["Tender","Luminous","Quietly devastating"],pov:"First person, present tense; diary entries addressed to her mother",themes:["Memory loss and caregiving","Mothers and daughters","Science and what it cannot hold","Grieving someone still here","The beauty of ordinary days","Lisbon light"],characters:[{name:"Inês Moura",role:"Narrator, meteorologist",description:"Forty-four, exact, unmarried and wry, a senior forecaster at the national weather institute. She believes in data, rounding errors and her mother, roughly in that order, until the order changes."},{name:"Teresa Moura",role:"Inês’s mother",description:"A retired primary teacher who taught a generation of Lisbon children their sums and her daughter the names of clouds. Funny, proud, and losing the words one by one."},{name:"Rui Moura",role:"Inês’s younger brother",description:"An engineer in Toronto who calls every Sunday, sends money he can’t spare, and cannot bear to come home and see."},{name:"Dona Fátima",role:"The neighbour across the landing",description:"Widowed, tireless and unsentimental, she has known Teresa for forty years and has opinions about everything, including Inês’s soup."}],pages:272,chapters:24,words:76200,contents:["January: Clear Intervals","January: Ground Frost Inland","February: Mackerel Sky","February: The Word for Rain","March: Unsettled","March: Equinox","April: Showers Clearing from the West","April: Pollen Count","May: Jacaranda","May: Low Confidence","June: The Night of Saint Anthony","June: Heat Advisory","July: Nortada","July: Fog on the Tagus","August: The Long Dry","August: Smoke from the Interior","September: First Rain","September: Persistence Forecast","October: The Storm Has a Name","October: Falling Pressure","November: Saint Martin’s Summer","November: Visibility Poor","December: Shortest Day","December: Outlook"],sample:{title:"January: Clear Intervals",body:`*1 January. 07:00. 9.4°C. Wind NNE, 11 km/h. Pressure 1027 hPa, rising. High cirrus, thin­ning from the west. Visibility excel­lent.*

You taught me cirrus first, because it was the pret­ti­est word. We were on the bal­cony and I was five. You pointed at the long white strokes above the dome of the Estrela and said that was the sky comb­ing its hair, and then, because you were a teacher before you were any­thing else, you made me spell it.

I am writ­ing this because Dr Pires said, very kindly, on the twenty-ninth, that it might help to keep a record. She meant a record of you: which days are good, what you eat, whether you know the date. She gave me a printed sheet with boxes on it. I have put the sheet in the drawer with the take­away menus, and I am doing this instead, because I don’t know how to keep a record of you. I only know how to keep a record of the weather.

So. The weather.

It is a clear, cold morn­ing, the kind the city does best in winter, when the light comes in low off the river and every façade looks freshly painted. From your kitchen I can see the cranes at Alcântara and, beyond them, the bridge, red as a pencil line. You are still asleep. I have made coffee in the old pot with the scorched handle, too strong, the way you make it, and opened the window a crack so the smell will find you.

Last night at mid­night we stood on the bal­cony with Dona Fátima and watched the fire­works over the Tagus. You ate your twelve raisins, one for each chime, and made a wish on every one, as you always have, and when Dona Fátima asked what you had wished for you said, “That’s between me and the raisins,” and she laughed so hard she had to sit down on the step. You were entirely your­self. Sharp and wicked and warm. You held my arm on the stairs only because the stairs are steep.

Then, at the door of your bed­room, you turned round and thanked me for a lovely evening, and asked whether my mother would be wor­ried, me get­ting home so late.

*Forecast: dry and set­tled. Clear inter­vals. Light winds. No sig­nif­i­cant change expected.*

I issued that fore­cast myself, from the Institute, before I came over. It will verify. The models agree, the pres­sure is high, and there is noth­ing out over the Atlantic for a thou­sand kilo­me­tres. In my pro­fes­sional opin­ion it is going to be a beau­ti­ful day.

I can hear you now. The creak of the bed. Your feet find­ing your slip­pers. I am going to put down this pen and pour your coffee and find out which of us you think I am.`},inspire:"A quiet, devastating literary novel set in Lisbon. A meteorologist keeps a daily weather diary over the year her mother develops dementia, writing every entry to her mother as though she could still read it. Precise, luminous prose about memory, caregiving, siblings far away and the ordinary days that turn out to matter most."},{id:"glass-orchard",title:"The Glass Orchard",genre:"fantasy",genres:["Fantasy","Cozy"],tagline:"In Highfold, one tree in the singing glass orchard has gone quiet.",blurb:"In the mountain town of Highfold, an orchard of glass trees rings each evening with the voices of the dead, and apprentice glassblower Linnea Thorn is the one who tends it. When her master’s late wife’s tree falls silent, Linnea packs a lantern, a seed cake and a very opinionated kiln-sprite, and follows the silence up the mountain.",synopsis:["High in the mountains, where the snow comes early and the bread is always warm, the town of Highfold keeps a remarkable orchard. Every tree in it is made of glass, blown by the town’s glassmakers for someone who has died, and every evening, when the wind comes down off the peaks, the trees ring with the voices of the people they were made for. A laugh. A lullaby. A grumble about the weather. The living carry their suppers up the slope to listen.","Linnea Thorn, two years apprenticed to the gruff old glassmaster Orrin Gale, sweeps the orchard paths and polishes the bark and knows every tree by its song. So when the tree of Delphine Gale, Orrin’s wife, who has sung him the same silly harvest song every evening for twenty years, falls silent one autumn night, Linnea is the first to notice, and the only one who refuses to accept it.","Armed with a lantern, a satchel of seed cake and Hobb, the sardonic sprite who lives in the glassworks furnace and objects to everything, Linnea sets out to discover where a silence goes. Her road winds through hill villages and high passes, past a goatherd who knows more than he lets on, toward the old stories at the top of the mountain and the heart of what it means to keep someone, and to let them go. Warm, funny and full of quiet magic, this is a fireside fantasy about grief, kindness and the music we leave behind."],setting:"Highfold, a glassmaking town in the mountains, early autumn",mood:["Cozy","Whimsical","Bittersweet"],pov:"Omniscient third person, past tense",themes:["Found family","Grief and remembrance","Craft and apprenticeship","A gentle quest","Small-town magic","Grumpy mentor, soft heart"],characters:[{name:"Linnea Thorn",role:"Glassblower’s apprentice",description:"Twenty-three, a late starter with burn scars on both thumbs, a habit of talking to the trees, and a stubborn streak the whole of Highfold has learned to step around."},{name:"Orrin Gale",role:"Master glassblower",description:"Seventy, rheumatic and famously rude, he blew half the trees in the orchard and climbs the slope every evening without fail to listen to one of them."},{name:"Hobb",role:"A kiln-sprite",description:"A small, smouldering creature of the glassworks furnace who complains about the cold, the damp, the journey and Linnea, and would walk through fire for her if he weren’t already made of it."},{name:"Bram Ferrow",role:"Goatherd of the high pastures",description:"Quiet, patient and unhurried, the only person Linnea meets on the road who doesn’t think following a silence is foolish."}],pages:336,chapters:25,words:94100,contents:["The Evening Ringing","A Tree That Will Not Sing","Orrin Says Nothing","Seed Cake for the Road","Hobb Objects","Little Tarn","The Bellfounder’s Widow","A Night in the Hayloft","Bram and the Goats","The Pass of Lost Mittens","Echo Lake","The Library of Last Words","First Snow","The Silence-Catcher","Soup at the Toll House","A Letter from Highfold","The Quiet Peak","What Delphine Kept","The Furnace Goes Out","A Song Without a Singer","Glass in the Dark","The Long Way Down","The Mending","Harvest Song","The Evening Ringing, Again"],sample:{title:"The Evening Ringing",body:`In Highfold, the dead were expected for supper.

Not in person, of course. Highfold was a sen­si­ble town, built of grey stone on a steep shoul­der of the moun­tains, where the snow came early and the people were not given to non­sense. But every evening, when the sun dropped behind the peak they called the Hob and the cold wind came slid­ing down off the glac­ier, half the town climbed the ter­raced slope above the glass­works with a basket on one arm, spread a blan­ket among the trees, and waited for the ring­ing to begin.

There were three hun­dred and twelve trees in the Glass Orchard. The oldest had been blown so long ago that it had gone the soft green of river ice; the newest was not yet a year old and so clear you could read a letter through its trunk. Each had been made by a Highfold glass­maker for some­one who had died, with one held breath sealed in its heart, and each, when the wind moved in its branches, rang with that some­one’s voice.

Not words, exactly. More the shape of a person, played on glass. Old Tobiah the cob­bler came through as a cough and a chuckle. Miss Penhallow, the schoolmistress, hummed two bars of a hymn and then, every single evening, got the third bar wrong. Little Annick, who had lived only one winter, made a sound like a spoon tapped against a cup, and her mother climbed the slope each night to hear it, and ate her bread and cheese, and went home a little lighter.

It was Linnea Thorn’s job to keep the orchard. She had been appren­ticed to the glass­works for two years, which was late to begin, and was not yet trusted to blow a tree her­self. But she swept the paths and pol­ished the bark and picked out the fallen leaves, which were glass too and fell all the same, and she knew every tree by its song the way some people know their neigh­bours by their foot­steps on the stair.

So she was there, that evening at the very edge of autumn, when it hap­pened.

The wind came down as it always did. The orchard woke tree by tree from the top of the slope to the bottom, like a choir find­ing its note. Tobiah coughed. Miss Penhallow got the third bar wrong. And on a bench in the middle of the orchard, worn smooth by twenty years of one par­tic­u­lar person sit­ting on it, old Orrin Gale took off his hat and waited, as he did every evening, for his wife to sing him the har­vest song.

Delphine Gale’s tree was amber, and tall, and the wind was in it. Linnea could see its branches moving.

It made no sound at all.

Orrin didn’t stir. He sat with his hat in his hands while the orchard rang around him, while the light went and the blan­kets were folded and the bas­kets car­ried home, and still he sat. And Linnea, who had never in her life been able to leave a broken thing alone, put down her broom, sat beside him in the dark, and decided that she was going to find out where a song went when it stopped.`},inspire:"A warm, cozy fantasy about a young glassblower’s apprentice in a snowy mountain town, where an orchard of glass trees rings every evening with the voices of the dead. When the tree belonging to her grumpy master’s late wife falls silent, she sets off with a grouchy fire sprite to find out where the song has gone. Gentle magic, found family, good food and a small quest that is really about grief and love."},{id:"marmalade-society",title:"Murder at the Marmalade Society",subtitle:"A Nether Haddock Mystery",genre:"mystery",genres:["Cozy Mystery","Comedy"],tagline:"The marmalade champion is dead, and the runner-up is the prime suspect.",blurb:"When the Nether Haddock Preserving Society’s annual marmalade competition ends with seven-time champion Gloria Thwaite face-down in a crate of Seville oranges, the whole village agrees on the obvious suspect: Constance Moss, retired English teacher, eternal runner-up and owner of a very public grudge. Constance, who has marked forty years of feeble alibis, decides that if the police are going to get this wrong, she had better get it right first.",synopsis:["For seven years running, Gloria Thwaite has won the Silver Ladle at the Nether Haddock & District Preserving Society’s annual marmalade competition. For seven years running, Constance Moss has come second. Constance, who taught English at the local comprehensive for thirty-eight years and has never once lost an argument about the semicolon, maintains that she is entirely at peace with this.","Then Gloria is found in the village hall kitchen, face-down in the Sevilles, forty minutes after taking her eighth title, and the village promptly remembers that Constance was overheard at the summer fête suggesting that someone ought to drown Gloria Thwaite in her own pith. The investigating officer is Detective Sergeant Kevin Lumb, whom Constance taught to spell “necessary” in 1998, and who still cannot quite meet her eye.","With her oldest friend Babs Ackroyd as accomplice, getaway driver and occasional liability, Constance sets out to clear her name, which means looking into a vicar with a weakness for the horses, a jam-sabotage scandal from 1987, three suspiciously identical jars and the murky underworld of the church tombola. A deliciously witty village mystery about rivalry, friendship and the fine line between a good set and a fatal one."],setting:"Nether Haddock, a village in the Yorkshire Dales, late January",mood:["Witty","Cozy","Mischievous"],pov:"First person, past tense",themes:["Amateur sleuth","Village rivalries","Friendship in later life","Small-town secrets","Cutthroat baking and preserving","Teacher versus former pupil"],characters:[{name:"Constance Moss",role:"Narrator, retired English teacher",description:"Seventy-one, widowed, formidably well read and incapable of letting a misplaced apostrophe or an unsolved murder pass without comment."},{name:"Babs Ackroyd",role:"Constance’s best friend",description:"Former dinner lady, current menace behind the wheel of a lime-green Micra, and the only person in Nether Haddock who has ever made Constance laugh in church."},{name:"DS Kevin Lumb",role:"Investigating officer",description:"A decent, harassed detective sergeant who once sat in the back row of Constance’s Year Nine English class and still, in moments of stress, calls her Miss."},{name:"Gloria Thwaite",role:"The victim",description:"Seven-time marmalade champion, chair of everything, and a woman who made enemies the way other people make toast: daily, efficiently and with a great deal of butter."}],pages:304,chapters:26,words:85100,contents:["The Wrinkle Test","Face-Down in the Sevilles","Detective Sergeant Lumb Calls Me Miss","Motive, Means and Thick-Cut Peel","Babs Brings the Micra","Somebody Has Hoovered the Crime Scene","The Vicar’s Little Flutter","Pectin","Three Identical Jars","The Great Jam Scandal of 1987","Gossip at the Post Office","An Alibi Involving a Hedgehog","Helping the Police with Their Enquiries","Breaking and Entering, Politely","The Tombola Knows","Seville, Not Valencia","A Second Body (Fortunately a Scarecrow)","The Judges’ Scoresheets","Babs Goes Undercover","Thick Cut or Fine Shred","The Recipe in the Family Bible","Derek","Setting Point","Suspects, with Scones","Proof of the Pudding","The Silver Ladle"],sample:{title:"The Wrinkle Test",body:`Gloria Thwaite won the Silver Ladle at the Nether Haddock & District Preserving Society’s annual mar­malade com­pe­ti­tion seven years run­ning, and in the eighth year she was found face-down in a crate of Seville oranges, which most people in the vil­lage agreed was the only thing that could have stopped her.

I came second. I always came second. I men­tion it at the outset because a great deal was later made of it by people who should have known better, includ­ing a detec­tive sergeant I had per­son­ally taught to use a full stop.

The com­pe­ti­tion is held on the last Saturday in January in the vil­lage hall, a build­ing with all the archi­tec­tural charm of a filing cab­i­net and a heat­ing system that I believe was installed by Methodists. The judg­ing takes place at a tres­tle table beneath a por­trait of the late Queen that nobody has had the heart, or the steplad­der, to take down. Entrants stand at the back with their arms folded and pre­tend not to care. I have stood at the back of that hall with my arms folded for thirty-one years, and I can tell you that the pre­tend­ing is the most fiercely con­tested event of the day.

My mar­malade that year was the best I have ever made. I say this not from vanity but as a matter of record. Thick-cut, dark, with a whis­per of black trea­cle, and set so beau­ti­fully that when I did the wrin­kle test on a cold saucer the sur­face gath­ered under my fin­ger­tip like the brow of a dis­ap­pointed head­mistress.

Gloria’s was, in my view, too sweet, faintly cloudy and sus­pi­ciously uni­form in its shred, as though it had been cut by a machine, or a hus­band.

The judges dis­agreed. The judges were Mrs Pickersgill, who is ninety-one and cannot taste any­thing that isn’t sherry; the Reverend Toby Fairweather, who owed Gloria money; and Gloria’s second cousin Derek, who owed Gloria every­thing. I men­tion this not out of bit­ter­ness but because it later became rel­e­vant.

When the result was announced, I applauded. I would like that on the record too. I applauded with every appear­ance of sin­cer­ity and said, “Well done, Gloria,” in a voice that Babs Ackroyd, who was stand­ing beside me eating a sausage roll, later described as “like a fridge door shut­ting.” Then Gloria leaned down from the stage, close enough that I could smell her set­ting lotion, and said, “Never mind, Constance. There’s always next year.”

As it turned out, there was not always next year. Not for Gloria.

Forty min­utes later Babs went into the kitchen in search of more sausage rolls and came out again very quickly, with­out any, and the colour of a blanched almond.

“Connie,” she said, sit­ting down rather hard on the stage steps. “I don’t think you should go in there. And I think you’d better have an alibi.”`},inspire:"A genuinely funny cozy mystery set in a Yorkshire village. When the reigning champion of the local marmalade competition is found dead in a crate of oranges, the sharp-tongued retired schoolteacher who always came second becomes everyone’s favourite suspect, so she teams up with her best friend to solve the murder herself. Witty narration, eccentric villagers, tea, gossip and a satisfying puzzle."},{id:"tethys-garden",title:"The Last Garden on Tethys",genre:"scifi",genres:["Science Fiction","Literary"],tagline:"The last gardener on a moon of Saturn refuses to leave.",blurb:"Ithaca Station on Saturn’s moon Tethys has been shut down and every scientist has gone home except one: botanist Imke Saarinen, who refuses to leave her garden. Samir Haddad, the company’s best negotiator, has nineteen days to change her mind before the last ship leaves, and she has nineteen days to show him why she won’t.",synopsis:["For thirty years, Ithaca Station clung to the rim of a great canyon on Tethys, an icy moon of Saturn, and for thirty years its garden fed the scientists who lived there. Now the funding is gone, the crew has been evacuated, and the corporation that owns the station wants it sealed and left to the cold. There is just one problem: the gardener won’t come home.","Samir Haddad is the man the company sends when a deal needs closing and nobody wants to look too closely at the details. He has talked miners off picket lines and executives out of lawsuits. He arrives at Ithaca with a reasonable offer, a generous pension and nineteen days before the transfer window closes. He finds Imke Saarinen, sixty-three, kneeling among the beans under Saturn’s light, who hands him a strawberry and asks whether he knows how to prune.","As the station powers down around them, the two of them circle each other through long, dim days among tomato vines and apple blossom and bees that have never seen a sky. Each has a reason for being exactly where they are, and neither is ready to say it aloud. Quiet, luminous and full of hope, The Last Garden on Tethys is a novel about what we grow in the dark, what we owe to the places that kept us alive, and the courage it takes to go home, or to stay."],setting:"Ithaca Station on Tethys, a moon of Saturn, in its final weeks",mood:["Quiet","Hopeful","Bittersweet"],pov:"Close third person, present tense, alternating between Samir and Imke",themes:["Solitude and connection","Home and belonging","Corporate duty versus conscience","Caring for living things","Ageing and purpose","An unlikely friendship"],characters:[{name:"Imke Saarinen",role:"The last gardener of Ithaca Station",description:"Sixty-three, Finnish, a botanist who came out for a two-year posting and stayed twenty-six. Brisk, funny and impossible to hurry, she talks to her plants and does not apologise for it."},{name:"Samir Haddad",role:"Company negotiator",description:"Forty-six, polished, tired and very good at his job. He has never failed to close a deal, and has not been home in four years."},{name:"Adaeze Obi",role:"Pilot of the transfer ship Penelope",description:"Waiting in orbit with the engines warm, she counts down the days of the transfer window and has opinions about every one of them."},{name:"Hollis",role:"The station’s caretaking intelligence",description:"Polite, literal and being switched off room by room, Hollis has kept Imke company for six years and would prefer not to discuss the shutdown schedule."}],pages:288,chapters:20,words:80600,contents:["Ithaca Chasma","A Strawberry Before Business","Nineteen Days","Hollis Dims the East Ring","Bees That Have Never Seen a Sky","Saturn, Full","Grafting","The Offer","Penelope Waits","The Seed Vault","A Message from Tampere","Frost on the Glass","The Apple Tree That Shouldn’t Exist","What Samir Left in Beirut","Power Rationing","Harvest","The Window Narrows","Imke’s Reason","Seeds for the Journey","What Grows in the Dark"],sample:{title:"Ithaca Chasma",body:`The lander touches down on the rim of Ithaca Chasma so gently that Samir Haddad, who has been grip­ping his arm­rests for forty min­utes, doesn’t realise they have arrived until Adaeze Obi’s voice says in his ear, from four hun­dred kilo­me­tres up, “That’s you, Mr Haddad. Mind the step. It’s a long way to the bottom.”

He has seen the canyon in brief­ings. Two thou­sand kilo­me­tres long, a hun­dred wide, three deep: a crack across the face of the moon that the sci­en­tists never fin­ished explain­ing before the money ran out. He has not seen it like this, through a window the size of a dinner plate, with the far wall glit­ter­ing blue-white on the hori­zon and the near wall falling away beneath him into a dark­ness so com­plete it seems less like shadow than absence.

Above it all hangs Saturn, vast and banded and the colour of old ivory, its rings drawn edge-on across the black like a single stroke of chalk.

Samir has spent his career in rooms designed to make people feel small: board­rooms, min­istries, the lob­bies of com­pa­nies with more lawyers than employ­ees. He has learned to stand up straight in all of them. Here, he finds, it is harder.

Ithaca Station is a chain of white mod­ules bolted along the rim like bar­na­cles on a hull. Most of its win­dows are dark. As he crosses the walk­way from the lander, the lights come on ahead of him one sec­tion at a time and go out again behind, and a mild voice from some­where above the hatch says, “Good after­noon, Mr Haddad. I am Hollis. I’m afraid we are oper­at­ing on reduced power. Dr Saarinen is in the garden. She asks if you would wipe your feet.”

“My feet?”

“There is soil,” Hollis says, in a tone Samir would swear is apolo­getic. “There is quite a lot of soil.”

The inner hatch opens and the smell reaches him first. It stops him where he stands. Wet earth. Cut stems. Tomato leaves, green and sharp, and under them the sweet rot of some­thing fallen and left to lie. He has smelled noth­ing like it in four years. He has smelled noth­ing at all in four years, he realises, but fil­tered air and coffee and the new-carpet breath of hotel rooms.

The garden goes on and on. Terraced beds climb away from him under long bars of grow­ing-light: beans, kale, the dark ruf­fled tops of pota­toes, a wall of toma­toes in their cages, a stand of some­thing that might be wheat. At the far end, impos­si­bly, there are trees. Six of them, small and crooked, white with blos­som.

A woman is kneel­ing among the beans. She is small and grey-haired and wears a cardi­gan over her ther­mal suit, and she does not get up.

“You’re the nego­tia­tor,” she says.

“Samir Haddad. Dr Saarinen, I’ve come to—”

“I know what you’ve come to do.” She sits back on her heels and holds some­thing out to him: a straw­berry, dark red, still warm from the lamps. “Eat that first. Then you can tell me why I should leave, and I’ll tell you why you’re wrong.”

He takes the straw­berry. It is very sweet, and it tastes of a summer he had for­got­ten he was owed.

Nineteen days, he thinks. Plenty of time.`},inspire:"A quiet, hopeful science fiction novel set on an icy moon of Saturn. A research station is being shut down and everyone has left except the botanist who tends its vast indoor garden, and the corporate negotiator sent to bring her home slowly falls under its spell. Bittersweet and gentle, about home, solitude, unlikely friendship and growing things in the dark."}],B=`The night shift at Fennick Radio began at ten o’clock with the kettle and ended at six with the kettle, and what hap­pened in between was mostly other people’s weather.

I had kept that shift for eleven months, long enough to know the sta­tion the way you know a house you grew up in: which receiver ran warm, which valve in the trans­mit­ter whined if you leaned on the key too long, which floor­board would have told Arthur Dunning I was walk­ing about when I ought to have been lis­ten­ing. Arthur was not there to be told. He had gone to the main­land on Friday’s boat, for his sister’s hip and a meet­ing in Glasgow, and had left me a list in his square cap­i­tals. Item four was DO NOT ATTEMPT AERIAL REPAIRS IN HIGH WIND. Item seven was EAT.

The sta­tion stood on the west­ern cliffs of the Isle of Fennick, three hun­dred feet above an Atlantic that had noth­ing between it and Labrador but a great many opin­ions of its own. It was a long, low con­crete build­ing that had been white once, with two lat­tice masts behind it and the aerial wires slung between them like a wash­ing line for some­thing enor­mous. In a west­erly the wires sang a note close to E flat; after a fort­night of west­er­lies I had stopped hear­ing it except when it changed.

Inside, the oper­at­ing room ran the length of the sea­ward wall: a long pine bench with the receivers in a row, two Marconi CR100s and an Eddystone that Arthur treated like a race­horse, and at the far end the trans­mit­ter cab­i­nets, their valves glow­ing through the grilles like a banked fire. The room smelt of hot dust and Bakelite and paraf­fin, and of tea; I had never yet let the kettle go cold. Above the bench hung the clock, its face marked with two red wedges, from a quar­ter past the hour to eigh­teen min­utes past and from a quar­ter to the hour to twelve min­utes before. Those were the silence peri­ods. For three min­utes in every thirty, every ship and shore sta­tion in the world went quiet on five hun­dred kilo­cy­cles, so that anyone in trou­ble could be heard. I had always thought it the most decent arrange­ment human beings had ever come to.

At ten the trawlers started. They came up one after another on the radiotele­phone, their voices flat­tened and squeezed by dis­tance: the *Glen Rosa* and the *Morning Tide* off Barra Head, the *Isa Gordon* on the Flannan grounds, a Fleetwood boat called the *Wyre Lass* whose skip­per liked to tell me the weather where he was, as though I might not have heard of it. They sent catch reports to their owners in pri­vate codes, so that rival skip­pers would not learn where the fish were. Skipper Mackay had used the same code since 1951. Every oper­a­tor on the west coast could read it, and so could every skip­per, and none of us had ever had the heart to tell him.

“Fennick Radio, *Glen Rosa*. Message for owners. Ready to copy, over.”

“Go ahead, *Glen Rosa*.”

“Apple, apple, turnip. Forty. Uncle Ned. Over.”

Eighty kit of had­dock, some cod, home on Thursday. I read it back as gravely as if it had come from the Admiralty, and he said, “Roger, Fennick, much obliged, over and out,” and I said, “*Glen Rosa*, Fennick Radio, out,” because one of us had to.

Nobody says *over and out* who knows what it means. *Over* means I have fin­ished speak­ing and it is your turn. *Out* means I have fin­ished speak­ing and I am going away. Put together, they mean noth­ing at all, which is why they turn up at the pic­tures. I spent the last months of the war in the Wrens being drilled out of every bad habit a voice can have, and I came home to Fleetwood in the summer of 1945 insuf­fer­able about it. My brother Robbie was twelve. I rigged him a pair of cocoa tins and forty feet of our mother’s wash­ing line, one tin in his bed­room and one in mine, and I made him do it prop­erly.

“Over means my turn’s fin­ished,” he said down the line, in the flat Lancashire voice we both had then. “Out means I’m going.”

“Correct.”

“So what if I’m fin­ished *and* I’m going?”

“Then you say out.”

There was a long, con­sid­er­ing silence from the wash­ing line. Then: “Over and gone.”

“That isn’t pro­ce­dure.”

“It’s mine,” he said, and he never said any­thing else after that, not on the cocoa tins, not on the tele­phone, not at the bottom of his let­ters from the boats. He was twenty-one when the trawler *Mairead* went down in a December gale four­teen miles north-west of Fennick, with nine men aboard and my brother the youngest of them. They found a lifebuoy and two fish boxes. They did not find any­thing else. I applied for the Fennick post the first time it fell vacant, because it was the near­est I could get to the place with­out a boat, and I told the Post Office it was for the sea air.

I tried to keep all that where it belonged, out on the water, and on the night shift it mostly stayed there. By two the traf­fic had thinned, as it always did, and the boats went quiet to haul or to sleep, and I was left with the hiss.

There is a great deal of hiss in a radio sta­tion at night, and nearly all of it means noth­ing. The second CR100, at the end of the bench, was not on any sched­ule; Arthur kept it as a spare, and I kept it, when he was not look­ing, on 1.8 mega­cy­cles. A hun­dred and sixty metres. On Fennick the band belonged to nobody: there was not an ama­teur within two hun­dred miles, and the trawlers lived higher up the dial. Nothing ever came up on 1.8 but the noise the uni­verse makes when it is left alone, and that was exactly why I lis­tened. I wore one ear­phone of a spare head­set on it, pushed back behind my ear. It sounded like the sea heard from a long way off. It sounded like a very large room with nobody in it. I would not have admit­ted to anyone, least of all to Arthur, that it was the most rest­ful sound I knew.

At five past three I made tea. The wind had dropped while I was not paying atten­tion. Through a port­hole wiped in the salt I could see stars over the sea, hard and white and very many, and far to the south the light on Rubha Fionn coming round every fif­teen sec­onds to lay a pale road across the water and take it away again.

I sat down with my tea at twelve min­utes past three and watched the second hand climb towards the red. I liked to be ready for the silence. It seemed only polite.

At four­teen min­utes past three, the dead set cleared its throat.

I felt it before I heard it. The hiss behind my ear went thin and flat, the way the sea goes quiet in the lee of a rock, which is what hiss does when a car­rier comes up under­neath it. The needle of the signal meter, which had not left its stop in the eleven months I had known it, lifted and stood at seven. I pulled the head­set over both ears and reached for the tuning knob, and before I could touch it a woman began to speak.

“Here is the ship­ping fore­cast,” she said, “for Tuesday, the fif­teenth of January.”

It was Tuesday by then, though by the arith­metic of a night shift it was still tomor­row.

Her voice was low and even and in no hurry. It had the cadence of some­body who had read a great many fore­casts aloud, and under the cadence there was some­thing I could not place, a rough­ness, like good wood left out in the weather. She gave no call sign and named no sta­tion. She read only our own sea areas, in their proper order, and for a moment I simply lis­tened, as every­one on that coast lis­tens to the weather, with­out decid­ing to.

“There are warn­ings of gales in Rockall, Malin, Hebrides and Bailey.”

There were no warn­ings of gales any­where. I had read the ten o’clock fore­cast to the fleet myself. Variable, three or four. Fair. Good.

“Rockall, Malin, Hebrides. Southerly, three or four, back­ing south-east­erly, increas­ing gale eight to severe gale nine by after­noon. Storm ten immi­nent.” A pause, the length of a breath taken by some­one who knew she would need it. “Rain later. Good, becom­ing very poor.”

Imminent, in a fore­cast, means within six hours. Storm ten is less a descrip­tion of weather than of what weather does to boats.

“Bailey,” said the voice, and gave it, and it was worse.

She dropped the ends of her sen­tences, I remem­ber notic­ing; she set each one down delib­er­ately, the way you set down some­thing hot. I noticed it the way you notice the one small thing you can bear to notice, while the rest of you sits very still and waits to be told what it is allowed to feel.

When she had fin­ished the sea areas there was a pause, and the car­rier hung in my head­phones, open and hum­ming. I could hear the room she was in. I could not have told you how I knew it, but I knew: a small room, a hard floor, some­thing tick­ing.

“{P},” she said.

I did not move. The tea steamed beside my hand.

“Don’t let him take the boat out.”

Then, gently, as though it cost her some­thing and she had decided to pay it anyway:

“Over and gone.”

The car­rier dropped. The hiss closed over it like water over a stone. The needle fell to its stop, and on the wall above me the second hand crossed into the red, and all over the world, on five hun­dred kilo­cy­cles, every ship and every shore sta­tion went quiet for three min­utes so that anyone in trou­ble could be heard.

* * *

The Post Office requires the oper­a­tor on watch to record every signal heard, with its time, fre­quency and sub­stance. It does not say what to do when the mes­sage knows your name.

I logged it prop­erly, because it was the only thing I could do prop­erly at that moment, and my hand­writ­ing came out large and cramped and slop­ing the wrong way, like a stranger’s. *0314 GMT. 1.8 Mc/s approx. Unidentified sta­tion. R/T, female voice, no call sign. Weather mes­sage as fol­lows.* I wrote out the fore­cast as near word for word as I could, which was very near, because I have that kind of memory and it has never once made me happy. Then I sat with the pen above the page for a long time.

*Personal mes­sage to night oper­a­tor,* I wrote at last, and then the words them­selves, inside quo­ta­tion marks, as if quo­ta­tion marks could hold them at arm’s length.

Then I did what any oper­a­tor would have done. I went slowly round the dial on every receiver we had. I lis­tened on 1.8 on the Eddystone and the first CR100, in case the spare had devel­oped a fault and was dream­ing. I looked for an image, a har­monic, some broad­caster on the Continent bounced in off the sky. There was noth­ing any­where. At half past four the *Wyre Lass* came up to tell me it was flat calm where he was, and I very nearly asked him whether he had heard a woman read the fore­cast on a hun­dred and sixty metres, and did not, because there are ques­tions an oper­a­tor cannot afford to be heard asking on an open chan­nel.

Nor was it a joke. There were no ama­teurs on Fennick, the trawler skip­pers had nei­ther the equip­ment nor the imag­i­na­tion, and Arthur Dunning had not made a joke since the Coronation. And nobody on the island could have known what Robbie used to say at the end of things, because I had never told a living soul.

At half past five the teleprinter chat­tered out the morn­ing bul­letin from the Meteorological Office, and I read it stand­ing up. Rockall, Malin, Hebrides, Bailey: vari­able, three. Fair. Good. No gale warn­ings in force.

At six I read it to the fleet, as I did every morn­ing, in my best voice, the one the Wrens had given me. *All ships, all ships, all ships, this is Fennick Radio.* Variable, three. Fair. Good. I lis­tened to my own voice going out over the dark water, level and pleas­ant, telling the boats there was noth­ing to be afraid of, and thought of the other voice, three hours ear­lier, telling me the oppo­site, and found I was grip­ping the edge of the bench.

I did not go to bed. It is not light on Fennick in January until nearly nine, and I sat and watched the day come, slow as a held note: grey, then pewter, then a clear, rinsed, inno­cent blue from the cliffs to the edge of the world. The sea below the sta­tion was the colour of a pigeon’s neck and very nearly as smooth. It was the kind of morn­ing, I had learned, that the island kept for making you forget it had ever done any­thing else.

There were six fish­ing boats in Port Ailen that winter, and five of them were laid up until spring. The sixth belonged to Hector Lamont, who was sev­enty-one and had fished those waters since before the first war, and who had told the whole post office, and anyone else who stood still long enough, that he was taking the *Ceol na Mara* out to the far banks on Tuesday’s after­noon tide to see what the winter had left in his pots.

I put on my coat. On my way past the baro­graph I glanced at it from habit. All night the pen had drawn a long, level line across the drum, steady as a hori­zon.

As I watched, it gave a small, decided tick down­ward. Then, while I stood there with one arm in my coat, it ticked again.`,G=`Port Ailen in fine weather looked like a post­card some­body had car­ried in a wallet for years: soft at the folds, faded at the edges, loved more than it was looked at. Twenty-odd houses stood around a har­bour the shape of a cupped hand, and that Tuesday morn­ing every chim­ney had its smoke going straight up, which in January on Fennick was as good as a mir­a­cle and was being treated as one. Somewhere behind the church, some­one was singing.

The post office was the front room of Ishbel MacRae’s house, with a brass grille across the counter that had not been closed in living memory and the switch­board for the island’s nine­teen tele­phones behind it, and behind all of these, in a cardi­gan the colour of strong tea, was Ishbel, who knew every­thing.

“You’ve not slept,” she said, before I had the door shut. “Sit.” She passed a mug of stewed tea under the grille and pushed a post­card after it, pic­ture side down. “That came Friday. I kept it back. The boy would only have had it in the wet.”

The card was from my mother in Fleetwood. Ishbel had read it; she read all the post­cards, on the prin­ci­ple that people who wanted their busi­ness pri­vate could pay for an enve­lope.

*Dear {P}, The mass was well attended. Mrs Hargreaves sent lilies, though where she found lilies at Christmas I could not tell you. Your father kept his coat on all through. Don’t stand about on cliffs. Love, Mam.*

Ishbel watched me read it over her spec­ta­cles. In eleven months she had never once said my brother’s name. She had other meth­ods. She had found out, with­out being told, that on the eleventh of every month I walked to the end of the break­wa­ter and stood there for a while, and on those days there was always some­thing that needed taking out to the end of the break­wa­ter, so that I should not be seen to be stand­ing there for noth­ing.

“Your mother’s a fine hand at a post­card,” was all she said. “She gets a great deal on.”

“Is anyone going out today?”

“In January?”

“It’s a fine day.”

“It’s a fine day for the wash­ing.” But she looked past me at the har­bour, lying as still as a dish of milk, and her mouth thinned. “Hector’s going, and you know it. The far banks on the after­noon flood, haul at first light, and back tomor­row or not at all, he says, as if that were a joke for a man of sev­enty-one to be making. Why?”

“The glass is falling,” I said.

Ishbel looked at me for a long moment. She had very pale eyes, and very little got past them. “What did you hear, a ghràidh?”

“A ship to the west. Reporting weather.”

“Which ship?”

The switch­board buzzed. Ishbel turned to it and plugged in a cord, and said over her shoul­der, with her hand across the mouth­piece: “The relief for Rubha Fionn’s on the *Kittiwake* this morn­ing. Name of {C_FULL}. Murdo Gillies’s chest is bad again, so it’ll be this new­comer keep­ing the light near enough alone, and not a soul on this island knows the first thing about {him}. I don’t care for that.” She took her hand from the mouth­piece. “Port Ailen.”

* * *

Hector Lamont was on the slip below the har­bour wall, coil­ing a rope the way he had prob­a­bly been coil­ing ropes since the old Queen died. The *Ceol na Mara* lay along­side, thirty feet of blue and white larch with a Kelvin engine that could be heard in Barra and a wheel­house no bigger than a tele­phone box.

“Fennick Radio,” he said, with­out look­ing up. He always called me that, as though I were a build­ing. “Come to wave me off?”

“Come to ask you not to go.”

He looked up then. He had a face the sea had been work­ing on for sev­enty years, and very blue eyes that were mostly amused by what they found. “Have you a fore­cast that says I shouldn’t?”

I had a fore­cast, word for word, in a woman’s low voice and in the sta­tion log in my own hand­writ­ing, and I could no more have shown it to Hector Lamont than the inside of my skull.

“The glass is falling.”

“The glass is always falling some­where. That’s what it’s for.” He went back to his rope. “The wire­less says fair, and the sky says fair, and my knees say fair, and my knees have been righter than the Meteorological Office these fifty years. Away up your hill and listen to your boats. I’ll bring you a lob­ster.”

“Hector—”

“The after­noon flood,” he said. “Noon. Not a minute after.”

I went back up the har­bour road with my hands deep in my pock­ets and my jaw set so hard it ached.

[[figure:relay-station|Fennick Relay Station, from the harbour road]]

The road ran west out of Port Ailen between dry­s­tone walls and black peat banks, two miles across the waist of the island to the cliffs. From the first rise you could see the sta­tion the whole way: a low white block on the sky­line with two masts behind it, the aerial wires between them so fine that on most days the masts seemed to be hold­ing up noth­ing at all. It looked like the kind of place where some­one might sit for a long time lis­ten­ing to things that were not there.

Behind me a ship’s horn gave two short blasts. The *Kittiwake* was coming round the point, red funnel shin­ing, and I stood on the rise and watched her berth, because there is noth­ing on a small island that cannot be put off for the arrival of the boat. She put ashore the mail and a single pas­sen­ger, who came down the gang­way with a kitbag on one shoul­der and a square leather case in one hand, and stood for a while on the quay look­ing up the hill. At me, it seemed, though at that dis­tance it might have been look­ing at any­thing.

I walked on. Later I heard foot­steps on the road behind me, quick and even, and I did not look round, and they caught me up where the road forks, left for the light­house on Rubha Fionn and right for the sta­tion.

“You’ll be {P},” said a voice at my shoul­der.

Not Miss any­thing. Not the oper­a­tor. My first name, said easily, the way you would say it to some­one you had known for years and had not seen for a while.

I stopped. The relief keeper set the leather case down on the road between us and waited, with every appear­ance of patience, to be looked at.

The keeper was about my own age, or a little more, tall and spare and dark­ened by wind, with a still­ness about {him} that I dis­trusted on sight. It was the still­ness of some­body used to lis­ten­ing. And I knew the shape of that case. You do not spend years around wire­less sets with­out learn­ing their sil­hou­ettes: there was a portable Marconi in it, from before the war, if I was any judge.

“I don’t think we’ve met,” I said.

“No,” {he} agreed. “{C_FULL}. Relief for the light.” {He} held out a hand. It was cold and dry and hard across the palm, and {he} let go of mine a moment before I expected, as though {he} had been warned I did not like to be held. “Someone on the quay told me who you were.”

{His} gaze went past me to the sta­tion on the sky­line and stayed there, mea­sur­ing the masts. Then, in exactly the tone of some­one remark­ing on the fine morn­ing: “You’ll want to keep the hun­dred-and-sixty-metre band open tonight.”

Down on the shore a curlew called, a long, rising, unan­swered note.

“I beg your pardon?”

“One-point-eight mega­cy­cles,” said the keeper. “Tonight. Keep it open.” {He} picked up the case. “And I wouldn’t trust this weather.”

“The fore­cast is fair.”

“Is it,” said {C}, not quite a ques­tion. {He} looked at me a moment longer, with an expres­sion I would spend a good part of that night trying to read: some­thing care­ful, some­thing close to pity, and under both some­thing that looked, absurdly, like relief. Then {he} turned down the track towards Rubha Fionn, and I stood at the fork until the road dipped and took {him} out of sight, and the sky over the Atlantic stayed empty from one edge to the other.

* * *

At the sta­tion I did not go to bed. I sat beside the baro­graph and watched it.

The pen had been going down all morn­ing in a long, shal­low slope, and a little after eleven the slope steep­ened. By half past it was hardly a slope at all. I had seen a baro­graph draw that shape once before, on a chart in a class­room in 1945. The instruc­tor had told us that if we ever saw it at sea we would have about an hour.

Through the west window the sky was still a hard, enam­elled blue. But the sea had a swell on it that had not been there at nine, coming in from the south-west in long, glassy ridges with noth­ing behind them, as though some­thing very far away had turned over in its sleep.

At twenty to twelve I rang the post office.

“Ishbel, it’s {P}. Is Hector still in?”

“He’s cast­ing off this minute, the old fool. Why—”

“Stop him.”

There was a pause on the line, full of the seashell roar of the island’s cable. I heard Ishbel draw breath to argue, and then decide not to. The receiver went down on the counter with a clunk. I heard the shop bell, and then, small and far away, as if from the bottom of a well, Ishbel MacRae’s voice raised to a pitch I would not have believed it could reach, call­ing Hector Lamont some­thing in Gaelic that I did not know and did not need trans­lated.

Hector came to the tele­phone four min­utes later, breath­ing hard. “What’s all this?”

“Fennick Radio has a gale warn­ing for Hebrides,” I said. “Severe gale nine. Storm ten immi­nent.”

I had never in my life issued a warn­ing I had not been given. If I was wrong, it would be the end of me on Fennick. I said it anyway, in the Wrens’ voice, the one that did not shake.

“The wire­less said fair,” said Hector.

“Hector,” I said, “I *am* the wire­less.”

There was a long silence on the line, with the old man breath­ing in it.

“If your sky’s still blue at two,” he said at last, “I’m away on the evening tide, and I’ll not hear another word.”

“That’s fair.”

“*Fair*,” said Hector Lamont, with immense con­tempt, and put the tele­phone down.

The sky was still blue at two. At twenty past, a line drew itself along the west­ern hori­zon, thin and dark as a pencil stroke, and came on faster than I had known weather could move. The blue went out of the sky as though some­one had pulled a plug. The first gust hit the sta­tion at twenty-five to three with a noise like a lorry run­ning into the wall, the aerial note went from noth­ing to a scream, and the rain came side­ways off the sea so hard that the west win­dows went blind. By four it was storm force, and the trawlers were call­ing from every point of the com­pass, fright­ened and furi­ous, want­ing to know what in God’s name had hap­pened to *fair*, and I answered them one after another, and my hands were per­fectly steady.

At five Ishbel rang. “He’s in my kitchen,” she said, “eating my scones and saying he knew it all along.”

* * *

The gale was still blow­ing at three in the morn­ing, though it had lost the worst of its fury, and the sta­tion shud­dered in the gusts like a dog shak­ing off water. I had put the spare set on the loud­speaker for the first time in eleven months. I told myself I was doing it because the keeper had told me to, which was absurd, and then that I was doing it in spite of the keeper, which was more absurd still.

At four­teen min­utes past three the hiss went flat.

“Rockall, Malin, Hebrides,” said the voice.

She was nearer tonight, though the storm static crashed across her every few sec­onds like surf over a break­wa­ter. She read the fore­cast for Wednesday: the gale moving away north-east, decreas­ing six or seven, and at the end, *later, a fur­ther deep depres­sion*. I took it all down.

“You kept him ashore,” she said. “Good.”

“Who are you?” I said aloud, to the empty room. I was not trans­mit­ting. She could not pos­si­bly hear me.

“You’ve never opened his letter,” said the voice.

My pencil stopped.

“The one that came three days after. You knew the writ­ing on the enve­lope, and you put it in the toffee tin with the hooks he left behind, and it’s under your bed now, and you’ve never opened it, because as long as it stays shut there’s one more thing he hasn’t said yet. I know why. It’s all right.”

I had told nobody about that letter: not my mother, not a priest, not Ishbel. It was in a tin with a Highland cow on the lid, under the bed in the room behind me, and I had not lifted that lid since I came to Fennick.

“Listen to me now,” said the voice, and it rough­ened, came closer, as if she had leaned in to the micro­phone. “He isn’t who he says he is.”

A gust bowed the west win­dows. When it drew back the car­rier was still there. Then, qui­etly:

“Over and gone.”

The hiss came back. On the wall the second hand slid into the red, and for three min­utes the world kept silence so that anyone in trou­ble could be heard.

I sat in the silence with the pencil in my hand. Then I went to the south window and wiped a hole in the salt, and looked out through the rain to where the light on Rubha Fionn came round every fif­teen sec­onds, reg­u­lar as a pulse, kept that night by a keeper who had known my name before I gave it.`,O=`The gale blew itself out at about eleven the next morn­ing and left the island look­ing as though it had been picked up, turned over and shaken for loose change. Peggy Morrison’s hen house was found upside down on the shore at Tràigh Mhòr with two hens still inside it, indig­nant but alive.

At the sta­tion the wind had taken the door off the gen­er­a­tor shed and parted a hal­yard on the north mast, so that the long wire sagged in a slack curve that would have broken Arthur’s heart. I did not attempt aerial repairs in high wind. I waited until it was merely a strong wind, and then I attempted them, and had the hal­yard rerigged by one o’clock with no worse damage than a rope burn across both palms and a new and per­sonal under­stand­ing of item four.

Hector came up the hill at two, on foot, four miles there and back for a man of sev­enty-one, car­ry­ing a bucket. He did not come in. He set the bucket on the step and looked at me, and at the masts, and at the sky, which was blue again and entirely blame­less, and said, “Fennick Radio,” and nodded once, and went away down the hill. In the bucket was the largest lob­ster I had ever seen, blue-black and furi­ous, and I had not the faintest idea what to do with it.

Then I went to the store and took down the wire recorder.

It lived on the top shelf in a wooden case with brass cor­ners, and it had been designed during the war by some­one who never expected to carry it. The sta­tion used it for two things: record­ing dis­tress traf­fic, in case of an inquiry, and slow­ing down Morse sent faster than a human hand could copy. You put the signal on the wire and played it back at the tran­scrip­tion speed, and the dots and dashes came out long and even enough for a tired oper­a­tor to take down. The wire was steel, finer than a hair, and if it snapped you tied it in a reef knot and hoped. I signed it out in Arthur’s reg­is­ter, *for the record­ing of weak sig­nals*, which was not, strictly speak­ing, a lie.

I wired it to the spare CR100, recorded a minute of hiss, played it back, and sat for a while lis­ten­ing to the sound of noth­ing, pre­served. Then I put my coat on again and went to see the relief keeper.

* * *

The light­house stood at the end of Rubha Fionn, a long finger of black rock two miles south of the sta­tion: a plain white tower, absolutely upright. It had been built a cen­tury before by men who did not believe in orna­ment, and it did not care whether you liked it.

I climbed the hun­dred and twelve steps and came out through the low door onto the gallery, into a wind you could lean on. {C} was out­side the lantern with a bucket and a chamois, clean­ing the salt off the glass pane by pane, and did not look round.

“You came all this way to see the light,” {he} said.

“I came all this way to ask how you knew.”

“Knew what?”

“The weather. The hun­dred and sixty metres. My name.”

{He} wrung the chamois out into the bucket. The water ran grey. “The weather I guessed. You can read a swell from the deck of a boat, if you know how to look. Your name, some­one on the quay told me.”

“Hector calls me Fennick Radio. Ishbel’s nephew is eleven and calls me the wire­less. Nobody on that quay has ever once called me {P}.”

“Then I can’t help you.”

“And the band?”

{C} turned round. Up close, in day­light, the keeper looked more tired than I had thought, the skin under the eyes bruised with sleep­less­ness, and {he} looked at me with that same care­ful atten­tion, as though I were a signal {he} had been trying for a long time to pull out of the noise.

“Did you keep it open?” {he} said.

I did not answer. I did not have to. {He} watched me not answer, and some­thing in {his} shoul­ders let go.

“What did you hear?” {he} asked, very qui­etly.

“A fore­cast. Which turned out to be cor­rect. Which the Met Office didn’t issue until two hours after the gale hit. Which you appear to have known about on the road at ten in the morn­ing.”

“I told you. I saw the swell.”

“There was no swell at ten.”

“There’s always a swell, if you know how to look.” {He} said it lightly. {His} hands on the rail did not look light; the knuck­les had gone white. “Was that all you heard?”

The wind hummed in the astra­gals of the lantern, a low, glassy note under the gusts. I thought of the voice saying *he isn’t who he says he is*, and it occurred to me that I had never asked the keeper for any­thing but a name, and had been given one, on a road, with a hand­shake that let go too soon.

“Why does it matter to you what I heard?”

{C} looked at me for a long moment. The wind dragged at {his} hair and at my coat, and it came to me, unwel­come and very clear, that I was stand­ing eighty feet above the sea with a stranger who knew things no stranger should, and that what I felt, mostly, was not fear. I looked at the hori­zon instead.

“You came to Fennick because of the *Mairead*,” {he} said.

I said noth­ing at all.

“Fifty-seven fifty-eight north,” said the keeper, in the level voice of some­one read­ing from a chart. “Eight four­teen west. Twenty-two forty on the eleventh of December, 1954. Wind south-west, nine and rising. Nine souls aboard. Last heard on two-one-eight-two by Fennick Radio, hove to and making water, but under con­trol.”

I had read those fig­ures so often that I could see them as I heard them: the cheap grey paper of the inquiry report, the ring some clerk at the Board of Trade had left across the second para­graph with the bottom of his cup.

“Where did you get that?”

“The inquiry. It was pub­lished. Anyone can read it.”

“Nobody reads it.”

“You did,” said {C}, and then, more gently, as though it had been sur­prised out of {him}: “I’m sorry. I didn’t mean—” {He} stopped, and turned back to the sea, and did not say what {he} had not meant.

I went down the stairs a great deal faster than I had come up. In the watch room I passed the keeper’s leather case, stand­ing open on the desk beside the light­house log. It was a Marconi, as I had thought, a portable receiver from before the war, beau­ti­fully kept, the brass of the dial worn bright by years of a thumb. I did not stop. I am not proud of what I did instead, which was to slow down just enough, in pass­ing, to read the dial.

It was set to a hun­dred and sixty metres.

* * *

“The navy,” said Ishbel. “Och, aye.”

It was five o’clock and dark, and the post office smelt of paraf­fin and wet wool. I had brought Hector’s lob­ster down in its bucket, on the grounds that I owned no pot large enough and had no heart for what needed doing, and Ishbel had taken it through to her kitchen with­out a word. Then I had asked about the ruins on the north head­land as though I had only just noticed them, which after eleven months was not con­vinc­ing, and she had let me get away with it.

“They came in forty-one,” she said. “Sixty of them, sig­nal­men and Wrens and offi­cers, and nobody on the island was to go near and nobody was to ask, so nat­u­rally we all knew every­thing. Listening, Donald said they were. To the U-boats, and to other things he wouldn’t name.” Donald had been her hus­band; he had died in 1949, and she spoke of him the way you might speak of the weather in a coun­try you used to live in, fondly and with com­plete author­ity. “He did their aeri­als, being the only man on Fennick daft enough to go up a mast in a wind. He’d come home at night and say *one-point-eight* as if it were a curse. Their own wee fre­quency. They had a trans­mit­ter on it that would reach the main­land in any weather God sent.”

My hands were round a mug of tea. They had gone very still.

“They closed it in the summer of forty-five, in a week. A lighter came in the night and took the sets away, and by the Saturday there was noth­ing up there but the huts and the wind.” She folded the dish­cloth into a square, and the square into a smaller square. “Donald always said there was one set they never accounted for. A trans­mit­ter. The offi­cer in charge went up and down that head­land for two days with a list in his hand, swear­ing, and went away with­out it.” She looked at me over her spec­ta­cles. “Why are you asking me about the navy, a ghràidh?”

“No reason,” I said.

“No,” said Ishbel. “I didn’t sup­pose there was.”

* * *

That night I started the wire recorder at ten past three and sat beside it, and did not make tea.

The storm had gone through, and the night was still and bit­terly cold and blaz­ing with stars. At four­teen min­utes past three the hiss went flat, and she was there, clearer than she had ever been. She read the fore­cast for Thursday, and after it the gen­eral syn­op­sis, which she had not given before: a new low, deep and deep­en­ing, far out in the Atlantic, expected Bailey by Friday. Then there was a pause, and a burst of harsh, rat­tling noise, three or four sec­onds of it, like a fish­ing reel paying out under a heavy fish. I took it for inter­fer­ence and swore at it. Then, plainly, close:

“Over and gone.”

I let the silence period go by. Then I wound the wire back to the start and played it.

I want to be exact about what hap­pened next, because I have tried to be exact about every­thing else, and because it is the part I have gone over most often since.

The voice came out of the recorder’s little speaker as I had heard it, thin­ner now and tinny. But I had never heard her like this, cut loose from the moment, with­out the shock of her hap­pen­ing to me. I was only lis­ten­ing, the way you listen to a record­ing, from the out­side. And from the out­side, I knew her.

At the signal school in 1945 they had recorded each of us read­ing a weather mes­sage and played it back to the class, so that we could hear our faults. I had been appalled. I had not known I sounded like that, so flat, so north­ern, so much less sure of myself than I felt. The instruc­tor, a Chief Wren from Dundee with a voice like a band­saw, made me play mine three times. *You drop your end­ings,* she said. *You put them down like they’re hot. Pick them up.*

The woman on the wire put her end­ings down as though they were hot. She said *Malin* with the flat Fleetwood *a* I had spent the whole war trying to sand off. She was older than me, ten years or more; her voice had been some­where rough and come back. But it was mine. I sat with my hand over my mouth and lis­tened to myself read the weather to myself from some­where I had not been yet, and I did not cry, because I am not the crying sort, and because I could not spare the atten­tion.

Then I came to the burst of noise.

I had sat in a hut in 1945 copy­ing sig­nals sent too fast for any human ear, and I knew that rattle. It was not inter­fer­ence. It was speed.

I set the recorder to its slow­est tran­scrip­tion speed, the one meant for high-speed Morse, and played the burst again.

The rattle slowed, and opened, and fell, like a fist unclench­ing, into words.

“If you’re hear­ing this,” said my voice, “you’ve recorded it. Good.” I heard her breathe, slowed and enor­mous. “Now listen to the part you missed.”

She gave me a posi­tion, slowly, twice, the way you give a posi­tion to a ship that cannot afford to get it wrong. Fifty-seven forty-nine north. Seven fifty-one west.

Then: “The *Mairead* didn’t sink.”

The wire ran on into hiss.

I do not remem­ber taking the Admiralty chart down from the wall. I remem­ber it spread across the bench under the lamp, and Arthur’s dividers cold in my fin­gers, and the soft scratch of the pencil. I had expected open water. Fourteen miles out, or forty; some­where a trawler could go down, some­where a sister could look towards from the end of a break­wa­ter on the eleventh of every month.

The lines met on Fennick: a cable off the mouth of Geodha Dubh, the narrow black inlet under the north head­land, below the navy’s ruined huts. The chart marked the water there with a scat­ter of tiny crosses and a single word in italic: *Foul*.

I straight­ened up and looked, from habit, through the north window towards the head­land.

There was a light on it.

It was small and yellow and it was moving, steadily, the way a lamp moves when some­one is car­ry­ing it and knows the ground: along the top of the head­land, among the black shapes of the huts, stop­ping, going on. I watched it for per­haps a minute before I thought to turn to the south window and look for the beam of Rubha Fionn.

I counted fif­teen sec­onds, and thirty, and sixty.

The point lay black against the water. For the first time in all the nights I had watched it, the light on Rubha Fionn was dark, and out on the north head­land, among the ruins of a sta­tion that had closed its doors on a miss­ing trans­mit­ter twelve years before, some­one was walk­ing with a lamp.`,P=`I left the sta­tion to the auto-alarm, which was a sack­ing offence, and took the big torch and Arthur’s bicy­cle, which in Arthur’s eyes would have been worse.

The cliff track to the north head­land ran three miles along the spine of the island, and on a night with no moon and a hard frost it was less a track than a rumour. I rode with the torch tied to the han­dle­bars, throw­ing a jit­ter­ing yellow coin ahead of me, and where the track went to bog I left the bicy­cle in the heather and ran. The cold was the kind that gets into your teeth. On my left, beyond the edge, the sea moved in the dark with a sound like some­one breath­ing in their sleep. Every time I looked back, the point of Rubha Fionn was still black.

A dark light is a hazard to nav­i­ga­tion, and it was my duty to warn the fleet. I had not done it. There was noth­ing at sea in our waters that night, which was true, but the rest of the truth was that I did not want to announce on an open chan­nel that {C}’s light was out until I knew why.

By the time I reached the ruins the lamp had stopped moving. The navy’s sta­tion was a dozen con­crete huts in two rows, most of them roof­less, with the stump of the big mast stand­ing between them like a broken tooth. One hut had kept its roof. A line of yellow showed under the door, and from behind it came the putter of a small petrol engine and the smell of its exhaust on the frost.

I switched off the torch and stood lis­ten­ing. Under the engine was another sound, one I would have known any­where: the thin, high singing of a trans­mit­ter’s power supply, and the click of a relay.

I opened the door.

The hut had been cleared once and lived in since. A camp bed, a primus, a hur­ri­cane lamp on a nail. Half the floor­boards had been lifted and stacked against the wall, and in the pit beneath, lined with tarred canvas, stood a naval trans­mit­ter in a grey steel cab­i­net, the kind I had last seen in 1945, its meters lit and its valves glow­ing. Beside it, on an upturned fish box, stood a leather case, open, with a Marconi receiver inside.

{C} sat on a second fish box with a head­set round {his} neck and a log open on {his} knee. {He} turned when the door opened, and did not look sur­prised. That was the worst of it. {He} looked like some­one who had been wait­ing a long time.

“Your light has been dark for half an hour,” I said.

“I know. I’ll be back before any­thing comes round the point. There’s noth­ing at sea tonight.” {He} touched the log. “I’ve been lis­ten­ing to your traf­fic.”

“You’ve been lis­ten­ing to my traf­fic.”

“I listen to every­thing.”

“No keeper alive would leave a light dark,” I said. “Not for half an hour. Not for a minute.”

{C} looked at me across the glow­ing cab­i­net, and for the first time since the road, the care­ful face slipped.

“No,” {he} said. “I don’t sup­pose one would.”

Outside, the engine put­tered on. I found that both my hands were fists in my coat pock­ets, and made them open.

“That set has been under this floor since 1945,” I said. “Ishbel’s hus­band swore the navy never found it. How did you?”

“I was told where to look.”

“By whom?”

{He} took the head­set from {his} neck and turned it over in {his} hands, the way you turn over some­thing you are decid­ing whether to give away.

“Since August,” {he} said, “I’ve been hear­ing a voice on that receiver. One-point-eight, at nine­teen min­utes to four in the morn­ing, wher­ever I hap­pened to be. I thought it was an ama­teur having a joke. Then I thought it was me going off my head, which was easier. It told me things before they hap­pened. Small things, then larger ones. It told me to apply for the relief at Rubha Fionn. It told me which hut, and which boards.” {He} looked up. “It told me there would be a sta­tion on the west­ern cliffs with some­one keep­ing the night watch, and that I was to find you. It said your name. It said that what­ever else I did, I mustn’t frighten you off.” A short breath that was nearly a laugh. “I’ve made a fine job of that.”

“Whose voice?” I said.

{C} held my eyes.

“Mine,” {he} said. “Older. I knew it the first night, the way you know your own hand­writ­ing, and I didn’t want to.” A pause. “You know what I mean. I can see that you do.”

I did. I stood in the door­way of the navy’s hut with the frost at my back and the trans­mit­ter hum­ming in its pit, and for the first time since Tuesday I was not alone with it. The relief of that was so large and so unwel­come that I had to put a hand on the door frame.

“What does it want?” I said. “Yours.”

“It never says why. Only what.” {C} looked down at the log on {his} knee, and then, with the air of some­one step­ping off a high place, held it out to me. “Tonight it said one thing more. It said that tomor­row night I should be in this hut at four­teen min­utes past three, with the trans­mit­ter warm. And that you would be here too.”

* * *

So the next night, at ten past three, we were both there.

I had left the sta­tion to the auto-alarm again and given up pre­tend­ing to myself about it. {C} had wound the light for the long run and come up the head­land with a second can of petrol. We sat on the fish boxes on either side of the pit, with the hur­ri­cane lamp turned low between us, not touch­ing and not talk­ing much, the trans­mit­ter warm and my wire recorder clipped to the Marconi’s output. The navy’s clock ticked on the panel. It had the same two red wedges as mine.

At four­teen min­utes past three the hiss went flat, and my voice said, “Here is the ship­ping fore­cast—”

And on top of it, on the same fre­quency, a second car­rier came up.

The two of them beat against each other in a thin, rising whis­tle that set my teeth on edge, until one drifted a hair and the whis­tle slid down into silence, and then they were both there, side by side in the little speaker. My voice had stopped mid-word. The other was lower, rougher, and it took me a moment to under­stand that I had already heard it that night, younger, across the lamp. Beside me, {C} had gone com­pletely still.

“{P}?” said the other voice.

There was a silence on the air so long I thought one of them had gone. Then my own voice, older, said, “{C}.”

Only that. But I had never heard myself say any­thing in that tone, to anyone. It was the sound of some­one who had been call­ing into an empty room for years and had just heard the room answer.

“Where are you?” she said. “*Where are you?*”

And they began to talk at once, both of them, urgent and tum­bling, over each other, the words tan­gling in the speaker so that I could not pull one thread from the other; and across the pit, with­out look­ing, {C} reached out in the dark and found my hand, and held it, and this time nei­ther of us let go.`,E=`The light on Rubha Fionn came back at eight min­utes to four. I logged it, *Rubha Fionn light observed extin­guished 0331 to 0352, now show­ing nor­mally*, and reported it to nobody, which was not the first irreg­u­lar thing I had done that week and was by some dis­tance the worst.

In the morn­ing Ishbel rang to tell me, unasked, that the new keeper had told Murdo Gillies the vapor­iser had choked in the night and taken twenty min­utes to clear. “Murdo says it hasn’t choked in thirty years,” she said. “Murdo says a good many things.” She waited for me to say some­thing. I did not, and after a while she rang off.

I did not go to the north head­land. I thought about it all morn­ing, with the chart still spread on the bench and my two pencil lines cross­ing off the mouth of Geodha Dubh, and every time I thought about it I came back to the same place. Whoever had been walk­ing among those huts with a lamp, I did not know them. The voice I knew. It had known my name and my brother’s sign-off and the toffee tin under my bed, and it was the only thing on Fennick that had never once lied to me.

So I spent the after­noon break­ing the law.

The sta­tion’s second trans­mit­ter was a standby for the trawler band, and like most stand­bys it had not been touched in years except by Arthur’s duster. On paper it would go down as low as 1.6 mega­cy­cles. I took off the side panels and changed the coil taps by torch­light, reset the aerial cou­pling, brought it up on the dummy load and nursed the anode cur­rent down into the dip, very slowly, the way you would ease a fright­ened horse through a gate. By six it was sit­ting on 1.8 mega­cy­cles, warm and quiet and ready, and I had com­mit­ted an offence under the Wireless Telegraphy Act that would cost me my licence, my post and very prob­a­bly my pen­sion if anyone ever found out. I made a cup of tea and drank it stand­ing up. I found that I did not mind at all.

Outside, the wind was begin­ning to rise again out of the south, ahead of the depres­sion the voice had promised for Friday.

At thir­teen min­utes past three I put on the head­set and laid my thumb on the micro­phone switch. At four­teen min­utes past, the hiss went flat.

“Here is the—”

I pressed the switch. “Unknown sta­tion on one-point-eight,” I said, and my voice, my real voice, the one in the room, came out higher than I wanted. “Unknown sta­tion on one-point-eight, this is Fennick Radio. Over.”

I let go. The car­rier hung in my ears, open and hum­ming. Nothing came. I counted three sec­onds, four, five, long enough to feel I had made a fool of myself in front of the whole empty Atlantic, and then, as if the words had needed to walk a long way to reach me:

“Hello, {P}.” A breath. “You took your time.”

I put my free hand flat on the bench.

“We have four­teen min­utes,” said my voice. “It shuts at twenty-eight past, like a door, and noth­ing I do will hold it. Everything you say reaches me late, so wait for me. Don’t ask me the year. Don’t ask me where I am. I can’t say them; I’ve tried; there’s only noise. And don’t try to be clever. I remem­ber this. I sat where you’re sit­ting, with that cup going cold by your left hand, and I heard every word I’m saying now. I have to say them. You’ll have to say yours. That’s the rule I hate most.” A pause. “Over.”

I looked at my left hand. The cup was there.

“Are you me?” I said. “Over.”

The lag. Then, drily: “You know I am. You heard it on the wire. Don’t spend a ques­tion on it.” A breath, closer. “I spent one. I know.”

I had a hun­dred ques­tions, and the clock on the wall was taking them from me one at a time. I asked the one that was not, strictly, a ques­tion at all.

“What hap­pens to me? Over.”

The noise came up at once, a roar like surf over shin­gle, so loud I flinched and pulled the head­set half off, and under it I could hear her saying some­thing urgent and far away. Then it drew back.

“I told you,” she said. She sounded tired. “Not that. Ask the other thing. The one you’ve been not asking for two years.”

The second hand went round. It was nine­teen min­utes past three.

“Robbie,” I said. My thumb was white on the switch. “The *Mairead*. You said she didn’t sink. Is he— Over.”

The lag was longer this time. Much longer. I sat in it with the wind get­ting up out­side and the aerial wires begin­ning their thin song, and the car­rier hum­ming in my ears like a held note, and I thought I had asked the one thing the rules would not allow, and broken it, and lost her.

“Robbie didn’t drown,” said my voice.

I do not know what sound I made.

“He came ashore at Geodha Dubh on the night of the eleventh of December with a cut over his eye and his boots in his hand,” she said, steadily, the way you read a posi­tion to a ship that cannot afford to get it wrong. “He was alive. He was alive on every eleventh of the month that you stood on that break­wa­ter. He’s alive now, where you are. I know you want to ask why he never came home. You will. Not yet.” Her voice cracked, very slightly, and stead­ied. “I was angry with him for a long time. So will you be. Over.”

I could not speak. I pressed the switch and noth­ing came out, and I let it go again, and the car­rier waited, patient, hum­ming. Twenty-four min­utes past. Twenty-five.

“Where is he?” I man­aged at last. “Please. Over.”

“I can’t,” she said. “If I tell you, you’ll go straight to him, and you mustn’t, not the way things stand. There’s some­thing you have to under­stand first. Someone you have to stop trust­ing, and some­one you have to start.” The noise was coming up under her now, a long, rising seethe, and she was talk­ing faster, lean­ing into the micro­phone. I could hear the small room she was in, the hard floor, the tick­ing. “Twenty-seven. {P}, listen to me. There isn’t time. Ask {C} about the log­book.”

“Which log­book? Over—”

The noise came up over us both like a sea going over a rock, and through it, very faint and very clear, as the second hand crept up on twenty-eight min­utes past three and the door began to close, she said it once more, the last thing before the silence.

“Ask {C} about the log­book.”`,D=`The depres­sion came in on Friday after­noon, exactly as promised, and it was worse.

By then I had stopped expect­ing the weather to sur­prise me. The light on Rubha Fionn had come back at eight min­utes to four on Thursday morn­ing, and by nine Ishbel had it from Murdo Gillies, who had it from the new keeper, that the vapor­iser had choked and taken twenty min­utes to clear. At noon I walked to the north head­land in day­light and found noth­ing there but wind and sheep and, in the one hut that still had its roof, a con­crete floor swept cleaner than any floor on Fennick had a right to be. Then I went home and slept badly and dreamt of the wire run­ning on and on into hiss.

The *Kittiwake* did not sail on Friday. Her skip­per sent word from Oban that he would not put out into what was coming, and so Arthur Dunning did not come home, and at about three in the after­noon the sky over Rockall went the colour of a bruise and the wind came round into the south-west and leaned on the sta­tion like a shoul­der against a door.

The first storm had been a blow. This was a siege. By eight the gusts were reach­ing eighty knots on the sta­tion anemome­ter, and then the anemome­ter cups went, and after that I had to guess. The aerial wires no longer sang; they shrieked, a sound that came through the con­crete and into the bench and up through my elbows. Spray came over the top of a three-hun­dred-foot cliff and rat­tled on the roof like flung gravel. This time the Met Office had seen it coming, and the trawlers had run for Loch Roag and Castlebay at the first warn­ing, and for long stretches there was noth­ing to do but sit inside the noise and keep the watch.

At twenty past one the lights went out.

They did not flicker. They went all at once, like a held breath, and in the dark I watched the valves along the bench fade from orange to red to a sullen ember and then to noth­ing, one after another, like a street of houses going to bed. The hiss died in my head­phones. The teleprinter stopped mid-clat­ter. Above the bench, the sta­tion clock stopped at twenty past one. For the first time in eleven months there was no sound in the sta­tion that was not the storm.

I found the big torch by feel and went out to the gen­er­a­tor shed.

The wind tore the door out of my hand and slammed it against the wall. I went round the end of the build­ing bent double, one hand on the con­crete the whole way. The shed had lost its door in the first gale and I had nailed a tar­pau­lin across the gap, and the tar­pau­lin was still there, still nailed, which was the first thing I noticed. The second was that it had been unlaced along one side and laced up again, neatly, with a knot that was not mine.

For a long moment I did not go in. Then I did.

There was no one there. There was the diesel, tick­ing as it cooled, and the smell of fuel, very strong. I put the torch on the engine and fol­lowed the fuel line down from the tank. It had not cracked or shaken loose. Someone had cut it, cleanly, through the copper a foot below the tap, and left the tap half open, so that the engine would run long enough to drink itself dry and stop. A dark lake of diesel had spread across the floor, and in the middle of it, slowly fill­ing, was the print of a boot.

I went back to the sta­tion a great deal faster than I had come out.

The emer­gency set was a bat­tery receiver in a steel box under the bench, kept for exactly this, with its own accu­mu­la­tors. I got it going by torch­light with hands that were not quite steady, and the hiss came back into the room, small and tinny and absurdly com­fort­ing, and I put it on 1.8 because there was nowhere else on earth I wanted it to be. Then I went round the sta­tion with the torch, room by room.

Nothing was miss­ing from the oper­at­ing room. The wire recorder was on its shelf in the store. In my own room the toffee tin was under the bed where it belonged, and I knelt on the cold lino and lifted the lid, and the letter was there, still sealed, under its twist of fish-hooks.

It was in Arthur’s office that I found it. The cup­board where the old logs were kept, every one since the sta­tion opened, was stand­ing open, and Arthur kept that cup­board locked, and the only keys were on Arthur’s ring in Glasgow and on a hook behind the teleprinter that only he and I knew about. The log for December 1954 lay on his desk. Someone had left it open, almost politely, so that I would not have to look for the place.

The pages for the tenth, eleventh and twelfth of December were gone. Not ripped out; cut, with a blade, close against the spine, so that only a row of narrow stubs remained, like the stumps of teeth. I had read those pages my first week on Fennick, sit­ting in that same chair while Arthur pre­tended not to watch me. I could have recited them. *Twenty-two forty, Mairead, R/T on 2182, posi­tion as given, hove to, making water, under con­trol. Twenty-three oh five, Mairead called, no reply. Twenty-three ten, called, no reply.* The night oper­a­tor’s hand­writ­ing get­ting smaller and smaller all the way down the page.

Whoever had cut them out had wanted some­thing on those pages, or had wanted me not to have it. And only one person on Fennick had ever watched me read them.

I went back to the oper­at­ing room and sat down in front of the bat­tery set with my back to the wall and the torch in my lap, switched off to save it, and the dark all round me shak­ing in the wind. I took off my wrist­watch and laid it on the bench where I could see its faint green fig­ures, and I waited.

At four­teen min­utes past three, by my watch, the hiss went flat.

There was no fore­cast. There was no sea area, no gen­eral syn­op­sis, no low voice read­ing the weather in its proper order. There was only the car­rier, very close and very loud, as though she had her mouth against the micro­phone, and the sound of her breath­ing, quick and shal­low, like some­one who has been run­ning.

“{P},” she said.

That was all. No mes­sage. No sign-off. Only my name, once, in a voice I had never heard her use; and then the car­rier held, hum­ming, for three long sec­onds, and dropped.

I sat very still.

Under the shriek of the wires and the roar of the sea, some­thing had changed. It took me a moment to find it. The storm had a new note at the north end of the build­ing, where the door was: a low rattle that came and went with the gusts. Then it stopped coming and going. The rattle was steady now, and patient, and it was not the wind.

I turned on the torch.

The door at the end of the cor­ri­dor had a pane of frosted glass in its upper half. In the beam, pressed flat against the out­side of that glass, pale and still as some­thing drawn there, was a hand.`,q=`At eleven o’clock on Thursday night, some­one knocked on the sta­tion door.

Nobody knocked on the sta­tion door. Arthur had a key, the Post Office engi­neers came twice a year by appoint­ment, and every­one else on Fennick did their busi­ness with Fennick Radio by tele­phone, through Ishbel, so that Ishbel would know. I took the big torch off its hook and weighed it in my hand before I opened up.

{C} stood on the step in the wind, with rain on {his} shoul­ders and a cov­ered basket over one arm.

“Mrs MacRae sends oat­cakes,” {he} said, “and half of Hector Lamont’s lob­ster, and says you’re to eat it while it’s warm and not argue. She said a good deal about the other half too, but I think that was meant for Hector.”

“Who’s keep­ing your light?”

“Murdo Gillies. He announced at teatime that he was cured, and his wife couldn’t stop him, and I didn’t try.” {He} looked past me into the lit room, at the bench and the receivers and the red-wedged clock. “I thought you might want com­pany on the watch. You can send me away.”

I should have. I had slept per­haps six hours since Monday. The light on Rubha Fionn had been dark for twenty-one min­utes the night before while some­body walked the north head­land with a lamp, and the voice on the wire had told me *he isn’t who he says he is*, and here on my doorstep was the keeper of that light, hold­ing a lob­ster.

I stood aside and let {him} in.

* * *

The strange thing was how easy it was. {C} hung a wet coat by the heater with­out being told where, filled the kettle, found the tea with­out asking, and when the *Glen Rosa* came up at a quar­ter to mid­night with Skipper Mackay’s nightly apple and turnip, I saw the corner of {his} mouth move and knew the keeper could read that code as well as I could. When the *Wyre Lass* came up on Morse instead of R/T because his micro­phone had got wet, {C} reached for a pencil before I did and took it down at a speed that made me look up.

“You’ve done this before,” I said.

“Nine years.” {He} slid the pad across. “Radio offi­cer. Merchant navy. Then I stopped.”

“Why?”

{He} did not answer that. {He} looked at my hands instead, at the rope burns across both palms where the hal­yard had run through them, raw and weep­ing at the edges, which I had been ignor­ing all day.

“Where’s your first-aid tin?”

“It’s noth­ing.”

“Where is it?”

It was on the shelf above the teleprinter. {C} brought it down, pulled a chair round to face mine, took my right hand and turned it palm up under the lamp, and cleaned the burn with gauze and some­thing that stung like the devil, with­out hur­ry­ing and with­out apol­ogy. {His} hands were care­ful and very steady. I watched them, and not {his} face. Neither of us said any­thing for a while. The wind moved round the build­ing, and the aerial note slid down a semi­tone and back, and far out on the dark water a trawler I did not know asked another trawler I did not know whether the fish had gone to bed.

“A ship called the *Halcyon Bay*,” {C} said at last, to my left palm. “North Atlantic, February 1953. I sent the dis­tress for forty min­utes before anyone answered. By the time anyone came there were three of us on a raft, out of twenty-six.” {He} wound the ban­dage round, neat and firm, and tied it off. “After that I didn’t want to be the one send­ing. I wanted to be the thing they could see.”

“So you keep lights.”

“So I keep lights.” {He} let go of my hand. This time {he} did not let go too soon. “Your turn. If you like.”

I had never told anyone the whole of it. I told {C} about the cocoa tins and the wash­ing line and *over and gone*. I told {him} about the break­wa­ter on the eleventh of every month, which Ishbel knew and had never once men­tioned. And then, because it was very nearly three in the morn­ing, and because the keeper was look­ing at me with the same care­ful atten­tion I had dis­trusted on the road and no longer did, I told {him} about the letter in the toffee tin that I had never opened.

{C} did not say any­thing wise. {He} did not tell me I ought to open it. {He} only nodded, slowly, as though I had con­firmed some­thing {he} had long sus­pected about the world, and looked down at {his} own hands.

“You were on the north head­land last night,” I said. “With your light out.”

“Yes.”

“Why?”

“Because I was told there was some­thing up there I would need.” {He} met my eyes. “I asked for Fennick. I want you to know that. I wrote to the Board three times. They thought I was mad; nobody asks for Rubha Fionn in January. I came because some­one on a hun­dred and sixty metres told me to come.”

The room was very quiet.

“Someone,” I said.

“A voice. Since August.” {He} said it plainly, the way {he} had read me the *Mairead*’s posi­tion on the gallery, as though plain­ness were the only cour­tesy left. “I haven’t told you whose, and I can’t yet. I’ve been told what hap­pens if I tell you too soon, and I believe it. But I’ll tell you this much, because I think you’ve earned it, and because I’m tired of you look­ing at me the way you did on the road. My name is {C}. That part’s true. Whatever else you hear, that part is true.”

“And the rest of it?” I said. “The name on your papers?”

{C} looked at me for a long moment and did not answer, and that was an answer.

I should have been fright­ened. I should have reached for the tele­phone and rung Ishbel and had her send some­body, any­body, up the hill. Instead I sat with my ban­daged hands in my lap and looked at the keeper across a yard of lamp­light, and thought that it had been a very long time since anyone had told me the truth by declin­ing to lie, and that I had missed it.

The clock said twelve min­utes past three.

Without a word between us, {C} reached over and turned up the spare set, and the hiss filled the room: the sea heard from a long way off, a very large room with nobody in it. We sat and lis­tened to it together. At four­teen min­utes past three it went flat.

“Here is the ship­ping fore­cast,” said my voice, older, from some­where I had not been yet.

{C} did not move. I watched {him} hear it, the dropped end­ings and the flat Fleetwood *a*, and then {his} eyes came to my face, and I knew that {he} knew.

The voice did not read the fore­cast. It stopped after the first line, and there was a pause, and in the pause I could hear the small room she was in, the hard floor, the tick­ing. Then she spoke again, softer and nearer, and not only to me.

“{P},” she said. “{C}.” A breath, unsteady, like some­one smil­ing through some­thing that hurt. “Good. You’re both there. Now, both of you, listen.”`,Y={id:"quiet-frequency",defaults:{P:"Nell",P_FULL:"Nell Ashby",C:"Callum",C_FULL:"Callum Vane",pronoun:"he"},chapters:[{id:"quiet-frequency-1",number:1,title:"The Shipping Forecast",body:B},{id:"quiet-frequency-2",number:2,title:"The Relief Keeper",body:G},{id:"quiet-frequency-3",number:3,title:"Fourteen Minutes Past Three",body:O}],director:{afterChapter:3,prompt:"Chapter Four hasn’t been written yet. Where should the story turn?",continuity:["Robbie — lost with the Mairead, December 1954; no body ever found","The voice: 1.8 megacycles, fourteen minutes past three","‘Over and gone’ — Robbie’s sign-off, and the voice’s","{C}’s Marconi receiver, dial set to 160 metres","Geodha Dubh: 57°49′ N, 7°51′ W — “The Mairead didn’t sink”","Rubha Fionn light dark; a lamp moving on the north headland"],branches:[{id:"follow",kind:"follow",label:"Follow {C} to the north headland",description:"{P} crosses the island in the dark to learn whose lamp is moving through the ruined naval station, and what {C} has been listening to there.",keywords:["follow","headland","north","station","transmitter","secret","callum","keeper"],chapter:{id:"quiet-frequency-4-follow",number:4,title:"What the Headland Kept",body:P}},{id:"answer",kind:"mystery",label:"Answer the voice",description:"{P} breaks every rule of the licence to transmit on the dead frequency, with fourteen minutes to ask the only questions that matter.",keywords:["answer","transmit","reply","voice","talk","future","robbie","brother"],chapter:{id:"quiet-frequency-4-answer",number:4,title:"The Rules of the Air",body:E}},{id:"storm",kind:"tension",label:"Let the storm in",description:"A worse gale cuts the island off and kills the power, and {P} discovers that someone has been inside the station during the night watch.",keywords:["storm","danger","sabotage","intruder","power","dark","threat","logbook"],chapter:{id:"quiet-frequency-4-storm",number:4,title:"Storm Force Imminent",body:D}},{id:"watch",kind:"relationship",label:"Keep the night watch with {C}",description:"{C} climbs the cliff road to share the night shift, and in the long hours before fourteen minutes past three, two careful people begin to tell each other the truth.",keywords:["watch","together","night","trust","romance","closer","confession","callum"],chapter:{id:"quiet-frequency-4-watch",number:4,title:"The Middle Watch",body:q}}]}},U={id:"quiet-frequency",title:"The Quiet Frequency",subtitle:"A Novel",genre:"mystery",genres:["Mystery","Historical","Speculative"],tagline:"At fourteen minutes past three, a dead frequency knows tomorrow’s weather — and her name.",blurb:"On a storm-bitten Hebridean island in 1957, a night radio operator hears a voice on a long-dead wartime frequency, forecasting a gale that hasn’t happened yet. When the gale arrives exactly on time, she must decide how far to trust the voice — and the quiet new lighthouse keeper who seems to have been listening too.",synopsis:["In the winter of 1957, Nell Ashby keeps the night watch at Fennick Radio, a relay station perched on the western cliffs of a remote island in the Outer Hebrides. She took the loneliest post on the coast for one reason: to be near the stretch of sea where her younger brother Robbie was lost when the trawler Mairead went down two years before. Her nights are tea, static and other people’s weather, until fourteen minutes past three one January morning, when a frequency that has been silent since the war comes alive.","A calm woman’s voice reads a shipping forecast no one else has issued: a storm, out of a clear sky, before the day is out. Then it speaks Nell’s name, and signs off with words only her brother ever used. When the storm arrives exactly on time, Nell must decide how far to trust a voice that knows her most private secrets — and what it means when it warns her that someone on the island isn’t who he says he is.","Into all of this steps Callum Vane, the quiet new relief keeper at the Rubha Fionn light, who carries an old Marconi receiver everywhere and seems to know far more than any stranger should. As winter tightens around Fennick and the island’s wartime ghosts begin to stir, Nell finds herself drawn to the one person she has most reason to doubt, and closer than she has ever been to learning what really happened on the night the Mairead disappeared."],setting:"Isle of Fennick, Outer Hebrides — winter 1957",mood:["Haunting","Tender","Suspenseful","Atmospheric"],pov:"First person, past tense",themes:["Grief & second chances","Slow burn","Time-slip","Small-island secrets","Lost at sea","Signals & silence","Wartime ghosts"],characters:[{name:"Nell Ashby",role:"Night operator, Fennick Radio",description:"Twenty-nine, dry-witted and exact, a former Wren who took the loneliest post on the coast to keep watch over the sea that took her brother."},{name:"Callum Vane",role:"Relief keeper, Rubha Fionn light",description:"Quiet, watchful and never without an old Marconi receiver in a battered leather case. Knows things no newcomer to Fennick should."},{name:"Ishbel MacRae",role:"Postmistress of Port Ailen",description:"A widow in her sixties with a sharp tongue, a soft heart and a switchboard that hears everything. Reads every postcard on principle."},{name:"Hector Lamont",role:"Skipper of the Ceol na Mara",description:"Seventy-one, stubborn as granite, and certain that his knees forecast the weather better than the Meteorological Office."},{name:"Robbie Ashby",role:"Nell’s younger brother",description:"A deckhand lost with the trawler Mairead in December 1954. No body was ever found. He always signed off “over and gone.”"}],pages:304,chapters:24,words:86e3,contents:["The Shipping Forecast","The Relief Keeper","Fourteen Minutes Past Three","(Your direction)","Foul Ground","The Board of Trade Inquiry","Ishbel’s Switchboard","A Letter in a Toffee Tin","The Friday Boat","Silence Period","The Navy’s Frequency","Dead Reckoning","What Hector Saw","Interference","The Keeper’s Log","Geodha Dubh","Violent Storm Eleven","Call Sign","Spring Tides","Two Carriers","Second Chances","The Last Forecast","Fourteen Minutes","Over and Gone"],manuscriptId:"quiet-frequency",inspire:"A mystery set on a remote Scottish island in the 1950s. A woman working the night shift at a coastal radio station starts hearing a voice on a frequency nobody has used since the war: it predicts storms before they happen and warns her about the people around her. I want it haunting and atmospheric, with a slow-burn romance with the island’s new lighthouse keeper and a secret tied to her brother, who was lost at sea."},j={id:"unmade-places",defaults:{P:"Wren",P_FULL:"Wren Calloway",C:"Rook",C_FULL:"Rook Halloran",pronoun:"he"},chapters:[{id:"unmade-1",number:1,title:"True Ink",body:`The last line is always the handrail.

I draw it with the sheet braced on my knees and the Tallow Cut breath­ing fog over my boots, one long stroke from the near bank to the far, and I make myself go slowly. Nobody notices a joist. Everybody notices a handrail. Put a wobble in it and a thou­sand palms will find that wobble every morn­ing for fifty years, and every one of them will think, with­out know­ing why, *some­body rushed this.*

The lamp­lighters are walk­ing home along the quays with brass hooks on their shoul­ders, snuff­ing as they go, so the dark fol­lows them up the canal one lamp at a time. On Coppersmith the first press starts up, *thump* and hiss, print­ing yes­ter­day’s rumours for today’s break­fast.

The ink smells the way it always does: river mud, chim­ney soot, and under­neath, some­thing sweet and scorched, like sugar left too long in the pan. The Guild says that third smell is the binder. The Guild says a lot of things.

I check that the Saltreach steps come down to the tow­path and not into the water. Arnaud Pike, second year, once drew a stair that ended two feet under the Widow’s Cut. The eels adore it.

Then I sign the corner, *{P_FULL}, licence 4471*, blow on the sheet, and wait.

My fin­gers have gone cold to the second knuckle. That’s the price, or the part of it anyone talks about. True ink takes a little warmth out of the hand that lays it down, and the warmth doesn’t all come back. Old car­tog­ra­phers go the grey of pewter from the fin­ger­tips up. Mine stops just past the nails. My mother’s went to the elbow.

The Dawn Bell rings from the Guild tower, one deep stroke I feel in my back teeth, and on the sheet across my knees the ink goes dull. Every line at once, glossy black to flat grey-brown, as if some­one has breathed on it. The draw­ing has some­where else to be.

Over the canal, in the fog, a line appears.

It is my line; I would know it in the dark. A thin grey stroke hang­ing from bank to bank, thick­ened a third of the way across where I paused to dip the pen. Then the uprights, faint as pencil on wet paper. The bridge builds itself in the order I drew it, and two hun­dred and six bridges in, it is still like watch­ing some­one trace my sketch onto the morn­ing.

The hatch­ing comes next. I shaded the deck boards with close diag­o­nal strokes to sug­gest the grain, and now the strokes thicken and darken and *become* grain, whorled around a knot I added on a whim. The grey warms to the yellow of new oak. The bolts go black and blunt. The smell reaches me last: fresh-cut timber, pitch, the cold min­eral breath of the canal.

And there, on the left handrail, a third of the way along: a shal­low kink no wider than my thumb.

At about four this morn­ing a heron came down beside me like a dropped umbrella, and my hand jumped.

I look at that kink for a long moment. Then I look away, because the alter­na­tive is to cry over a handrail, and I have stan­dards.

The first person across is a woman dri­ving geese, who doesn’t notice the bridge at all, which is the high­est com­pli­ment the city pays.

I am pack­ing my pens when the Guild runner finds me.

“Guildmaster wants you,” he says. He is per­haps twelve, and says it the way you’d announce a house fire, with real inter­est in how I’ll take it.

“Does she.”

“She said *now*. She said you’d say *does she*.”

* * *

The floor of the Guild’s Great Map Room is the city in coloured stone, seven islands in a ring, canals in lapis, the Oun in green marble fray­ing into the sea, so that you cross it by walk­ing over the streets you live on. It is meant to humble you. Mostly it makes you watch your feet.

On the way up I pass the door.

They erased it nine days ago, and erased things don’t vanish all at once; they fade, like a bruise, from the middle out. What remains out­side the Closed Stacks is a pale rec­tan­gle, the ghost of a brass handle, and one hinge set slightly crooked because I was work­ing by a candle stub at two in the morn­ing and my hand would not stop shak­ing. Look straight at it and you see plas­ter. Look a little to one side and you see a door.

I look straight at it, and keep walk­ing.

Guildmaster Orsolya Vey stands at the east­ern window, tall and narrow in Guild black so plain it must have cost a for­tune. She wears grey kid gloves to the elbow, always, even in August. Everybody knows why. Nobody says.

“Do you know why we don’t draw doors, {P_FULL}?” She doesn’t turn around.

“Because a door is a promise. Draw a bridge and you get a bridge. Draw a door and the ink has to give you some­where for it to open onto, and if you haven’t drawn the some­where, the ink will choose for you.”

“Yours opened onto the Closed Stacks.” Now she turns. Vey has a face like a good dia­gram, all clean planes and no wasted lines. “Because you drew the Closed Stacks on the other side, very care­fully, from memory. That was good work.”

I wait for the knife. With Vey, the com­pli­ment is only ever the handle.

“You were look­ing for your mother’s east­ern survey. It isn’t there, and hasn’t been for ten years. Had you asked, I would have told you. Instead you defaced this build­ing in the night like a vandal with a stick of chalk.”

“Where is it?”

“Not your con­cern.”

“She was my *mother*.”

“She was a car­tog­ra­pher of this Guild who walked into the Unmade against my express instruc­tion and did not walk out. Her papers are Guild prop­erty. So is your licence, which is sus­pended as of this morn­ing.”

That lands some­where under my ribs. I keep my face still. I have been told my face is very bad at being still.

Vey crosses to the long table, where a map of the east­ern marches lies pinned by little lead ducks. Its east­ern margin has gone pale. Not brown, the way old ink goes. Pale the way a word goes when you can’t quite remem­ber it.

“The Unmade moved four miles west last year. It has taken Fennick, and Lower Stour, and a place we believe was called Ashby, though nobody in this build­ing can say for cer­tain. Three sur­vey­ors have gone to chart its edge since spring. None of their charts came home. One of the sur­vey­ors didn’t either.” A gloved finger rests on the pale margin. “Find me where it ends. Land that is charted can be claimed, and land that is claimed can be held. Bring me the edge of the fog, drawn true, and you’ll have your licence back. You may even see your mother’s papers.”

Punishment, bait and leash in one neat stroke. Vey never wastes a line.

“The Guild’s run­ners won’t take me. Nobody’s been east of Hollin’s End since summer.”

“Then you’ll hire pri­vately.” I swear the corner of her mouth moves. “I’m told the best fog-runner still work­ing the east­ern road is {C_FULL}.”

The floor is very hard and very cold, and for a moment I con­sider lying down on Tallowmarket Isle and refus­ing to get up.

“{C_FULL},” I say, “is a thief.”

“So, accord­ing to the ledger, are you. You leave the day after tomor­row. Do try to come back, {P_FULL}. The paper­work is tire­some when people don’t.”

* * *

The inkworks are below the water­line, where the walls sweat and every­thing smells of wet slate and burnt fat. Pell is at the far vat with his arms black to the shoul­der, stir­ring silt with a paddle twice his height and singing to it.

“Vey’s send­ing me to the Unmade.”

He stops stir­ring. Pell has a round face built entirely for grin­ning, and watch­ing it attempt any­thing else is like watch­ing a dog attempt long divi­sion.

“As a pun­ish­ment?”

“As a pun­ish­ment, a bribe and a threat. She’s very effi­cient.”

“I *knew* they’d do some­thing Guild about that door.” “Who’s taking you?”

I tell him.

Pell sits down on an upturned bucket. “The one who stole your dike map. At the Lantern Fair. Out of your actual satchel, while you were buying me a sug­ared plum.”

“I remem­ber, Pell.”

“And then {he} *waved*.”

“I said I remem­ber.”

He goes to the cold store at the back, where the binder is kept, and returns with a stop­pered flask the length of my finger, sealed in green wax.

“I didn’t give you this,” he says. “End of the last batch, so it might be thin. Don’t draw any­thing load-bear­ing.”

The flask is so cold it hurts. I nearly drop it.

“They’re always like that,” Pell says, qui­eter. “The binder jars come down from Vey’s rooms sealed, and they’re cold even in summer. I opened one once, just a crack. There was frost on the inside of the lid.” He looks at the vats, not at me. “Grey frost. Like fog.”

“Pell.”

“I know. I’m paid to stir.” He pulls his grin back on like a coat. “The Patient Heron, on the Widow’s Cut. That’s where the fog-run­ners drink. And don’t you dare not come back, because I am not break­ing in another best friend at my age.”

* * *

The Patient Heron leans over the Widow’s Cut on pil­ings that gave up being straight a cen­tury ago: smoke, low beams, eel pie, and a floor so steep that a dropped coin will roll out of the window. The fog-run­ners sit along the canal side in their oil­skins and their silences.

I see {C} before {C} sees me. Or I think I do.

The corner table, back to the wall. A coat the colour of wet slate. Dark hair tied back care­lessly, a pale scar through one eye­brow, and that still­ness I remem­ber from the Lantern Fair: some­one watch­ing every door in the room and making it look like bore­dom. If I drew {C_FULL} I would do it in about nine fast lines, all angles, and not one of them soft.

I have thought about draw­ing {him}. Mostly as a wanted poster.

“Cartographer,” {C} says, with­out look­ing up. “I won­dered how long they’d take.”

“You owe me a map.”

“I owe a lot of people a lot of things.” Now the smug­gler looks up, brief and thor­ough, the way a buyer looks over a horse. “You want the east­ern road.”

“The Guild wants the east­ern road. I want my map back.”

“Can’t help you there. It’s gone.” {C} turns over a sheet lying face down beside {his} tin cup. “But I can show you this.”

I know it before I have prop­erly seen it.

The north arrow with the split tail, like a swal­low’s. The water drawn in small hooked strokes, each one a comma, so that every river she ever charted looks as though it is paus­ing to think. The let­ter­ing, upright and impa­tient, the leg of every R kicked out a little too far. She used to hold my hand inside hers and make me draw those Rs until my fin­gers cramped.

My mother’s hand.

And true ink ages the way blood does. It goes brown in a year and rust in five, and after ten it is the colour of weak tea. Any Guild clerk can date a map from across a room.

The lines on {C}’s table are black. Glossy, living black.

Whoever drew this map drew it this spring.`},{id:"unmade-2",number:2,title:"The Edge of the Fog",body:`Two days east of Vasse, the vil­lages start for­get­ting them­selves.

It begins small. A mile­stone with the dis­tance cut deep but the name above it worn smooth, though the stone is new. A cross­roads inn whose painted sign shows a fat brown bird with an expres­sion of enor­mous dig­nity, and when I ask the land­lady what the inn is called, she opens her mouth, closes it, and says, “The Bird,” with the look of some­one who has reached for a stair in the dark and found it miss­ing.

“Don’t,” {C} says, when we’re back on the dike road.

“Don’t what?”

“Ask them. It fright­ens them. Then they spend the after­noon trying to remem­ber, and that’s worse.”

“How is it worse?”

“Because some­times they manage it.” The fog-runner walks with {his} hands in {his} coat pock­ets and {his} eyes on the hori­zon, where the sky meets the drowned mead­ows in a long seam of silver. “They remem­ber they had a sister, or a mill, or a street with a chapel at the end. So they go and look.”

We have been walk­ing since before light. The dike road runs east along the top of the old sea wall, with flooded fields on one side, flat and bright as ham­mered tin, and the Oun on the other, wide and brown and slow, car­ry­ing the silt of the whole north down to Vasse to be turned, even­tu­ally, into ink. I draw as we go. That’s the job: chart the road, chart the vil­lages, chart the edge when we reach it. My sketch­book is fill­ing with wind­mills and willow stumps and a heron that refused to hold still. Plain ink. Nobody wastes true ink on a sketch­book.

“You draw like you’re angry with it,” {C} says, watch­ing me hatch a sluice gate.

“I draw like I’m being watched by some­one who owes me money.”

“I don’t owe you money.”

“You owe me a map.”

“You keep saying that.”

“I’ll keep saying it until it becomes true. That’s my whole pro­fes­sion.”

That earns some­thing. Not a smile exactly; a small dis­place­ment at the corner of the smug­gler’s mouth, quickly cor­rected, like a line rubbed out before the ink can set. I note it the way I would note a land­mark. I’m not yet sure what it’s a land­mark *for*.

The deal we struck at the Patient Heron is this. The Guild pays {C} twice the going rate, out of my travel purse, to take me to the edge and bring me back. In return I get to follow my mother’s map wher­ever it leads. What I don’t get, under any cir­cum­stances, is to ask how {C} came by it.

“Not yet,” was how the smug­gler put it, slid­ing the map into the slate-grey coat. “Ask me again when you’ve seen where it goes.”

I have asked eleven times. I am pacing myself.

* * *

Hollin’s End is the last vil­lage before the fog, and it is about two-thirds of a vil­lage. There is a church tower with no church. A row of cot­tages with gaps between them like miss­ing teeth, where noth­ing stands but net­tles and the grey rec­tan­gle of a foun­da­tion. A well in the middle of a field, with a path worn to it through the grass, though no path leads away again. An old man sits on a bench out­side the near­est cot­tage, shelling peas into a bowl, and beside him is a second bowl, empty, set out neatly with a spoon.

He nods to {C}. He doesn’t nod to me. He looks at my Guild satchel the way you’d look at a dog that once bit you.

{C} stops us in the lee of the church tower. The wind is coming off the east in long cold breaths, and it smells, very faintly, of noth­ing at all. Of a cup­board nobody has ever opened.

“Rules,” {C} says. “There are three. You keep all of them, or we turn around and I keep the Guild’s money.”

“That seems unbal­anced.”

“It’s my fog.” The smug­gler holds up one gloved finger. “One. Never say aloud a name you want to keep. Not yours. Not your friend’s. Not your mother’s. The fog lis­tens, and what it hears it takes, and nobody gets a name back once it’s gone.”

I think of the land­lady and her fat brown bird. “Is that why you go by {C}?”

The wind fills the pause.

“Maybe that’s a name I don’t mind losing.” Second finger. “Two. Walk with the wind at your left. It always blows out­ward, from the middle of the thing. Keep it on your left and you’re walk­ing the edge. In your face, you’re walk­ing in. At your back—”

“I’m walk­ing out.”

“Or you’ve gone round once with­out notic­ing and you’re facing the wrong way.” Third finger. “Three. Ink goes first.”

“Meaning?”

“Meaning your lines go before your head does. Out there, ink bleeds. Once it starts, you’ve got an hour, maybe less, before the fog starts on you. So when your ink goes, we turn back. Not when you’ve fin­ished your sketch. Not when you’ve found what you came for. When the ink goes.” {C} looks at me steadily, and I have the uncom­fort­able sense of being read start to finish, cross­ings-out and all. “Say it.”

“Ink goes first.”

“Again. Like you mean it.”

“Ink goes first,” I say, “and I hope you choke on it.”

There it is again, that cor­rec­tion at the corner of the mouth. Then the smug­gler turns east, into the wind, and I follow.

* * *

I smell the fog before I see it, and I see it some time before I believe it.

It stands across the mead­ows a mile beyond the vil­lage, white from the ground to well above the height of the church tower, and it does not behave like weather. Weather drifts and tears and thins. The fog simply *is*: a long pale wall, its edge as clean as a ruled margin. It isn’t the grey of cloud, or the yellow of the river mists at home. It is the exact colour of a fresh Guild sheet before anyone has touched it, and the sight of all that blank­ness, run­ning north and south far­ther than I can see, makes some­thing in my chest go small and tight.

I uncork the travel inkwell. True ink, the Guild’s, for the edge survey. I brace the board on my fore­arm and begin to draw the fog-line against the mead­ows the way I was taught, bear­ing and dis­tance and a care­ful, even stroke.

The line spreads.

Only a little at first. A faint fuzz along its edges, as though the paper were damp. Then the stroke I have just made begins to feather, hair­line ten­drils creep­ing out of it, and every one of them creeps east. Toward the fog. Iron fil­ings to a lode­stone. My neat bear­ing line is grow­ing fur.

“{C}.”

“I see it.” The fog-runner is beside me, close enough that I can smell woodsmoke and canal water in the slate coat. “That’s fast. Faster than it was in summer.”

“How long have we got?”

“Less than I said.” A glance at me. A longer glance at the map. “But it’s close, the place she marked. Half a mile south along the edge, wind at our left. We go, we look, we come straight back. Agreed?”

*She.* As though {C} knows my mother. As though the two of them are on terms.

“Agreed,” I say, and I don’t ask the twelfth time, and I hate that I don’t.

* * *

The house stands with its back in the fog.

There is no other way to say it. The front is ordi­nary, almost cheer­ful: white­wash, red pan­tiles, a blue door with the paint flak­ing where the rain splashes it, a window box of gera­ni­ums gone leggy with neglect. Then, as my eye trav­els along the wall toward the east, the colour begins to thin. The red of the tiles goes to a wash, like water­colour on wet paper. The wash goes to shad­ing, close cross-hatch­ing, the kind I’d use for shadow. The hatch­ing thins to bare out­line. And the out­line, a yard or two short of the fog, simply stops, the way a draw­ing stops when the artist has set down the pen and walked away and never come back to it.

I have seen era­sures in the city. I watched the Guild rub out a con­demned ten­e­ment on Brine Steps, and it went evenly over a month, the way a stain lifts out of linen. This is some­thing else. This house is being *undrawn*, in exactly the reverse order you would draw it. Colour first. Then tone. Then line.

Somebody out here knows how to draw a house. Somebody is taking one apart.

The blue door is unlatched. {C} goes in first, which I resent and do not argue with.

It’s a kitchen, low and smoke-beamed, with a range against the made wall and a scrubbed table under the window. Across the room, where the house runs east, the flag­stones go to pencil and then to noth­ing, and the fog stands pressed against the place where a wall should be, white and patient, like a face at a window.

On the table there is a teapot under a knit­ted cosy, and two cups.

One is clean and dry. The other is half full. I touch its side before I can stop myself, and it is warm.

“Someone was here,” I say. “Just now. *Just* now.”

{C} doesn’t answer. {C} is look­ing at the thing beside the warm cup, and when I look too, every other thought goes out of me like a snuffed lamp.

A brass com­pass the size of a pocket watch, worn smooth at the edges, its lid dented at one corner. I know that dent. I made it. I was seven, lean­ing over the rail of the Hookbridge to see how far down the water was, hold­ing her com­pass to look impor­tant, and I dropped it. She spent the whole after­noon fish­ing for it with a horse­shoe magnet on a length of twine, and when she brought it up drip­ping she didn’t say one cross word. She showed me the dent, and laughed, and said now it was ours.

My hand closes over it. The brass is warm too.

“M—” I begin, and a gloved hand covers my mouth.

The smug­gler is very close. Close enough that I can see the scar through the eye­brow is older than I thought, its edges sil­vered. Close enough to feel {his} breath, quick and uneven, which is how I know the fog-runner is afraid. {C} holds my gaze and shakes {his} head, once.

*Never say aloud a name you want to keep.*

I nod. The hand stays a moment longer than it needs to. Then it’s gone.

In my satchel, the survey sheets are bleed­ing through to the leather. I can feel the damp of them against my hip. We should go. We should go now.

Instead I open the com­pass.

The needle swings past north with­out stop­ping. Round, and round once more, slowly, like some­thing waking. Then it set­tles, and holds, and points as steady as an out­stretched finger at the white wall where the kitchen ends.

Into the fog.

And some­where inside it, very close, a cup is set down on a saucer, gently, the way you would set it down if you didn’t want to wake anyone.`}],director:{afterChapter:2,prompt:"Chapter Three hasn’t been written yet. Where should the story turn?",continuity:["Wren’s mother — lost in the Unmade ten years ago","Rook’s rule: never say a name you want to keep","The brass compass — dented lid, needle points into the fog","True ink browns with age; the map in Rook’s hand is fresh black","Ink goes first: when lines bleed, turn back within the hour"],branches:[{id:"compass",kind:"mystery",label:"Follow the compass into the fog",description:"Break every rule, rope yourself to {C}, and follow the needle into the white toward something that should not still be standing.",keywords:["compass","fog","follow","needle","lamps","explore","mother","unmade"],chapter:{id:"unmade-3-compass",number:3,title:"Lamps in the White",body:`“No,” {C} says.

I haven’t said any­thing. I’m only stand­ing there with the com­pass open on my palm and the needle strain­ing toward the fog like a dog at a leash.

“Your ink’s gone,” the smug­gler says. “You promised. Three rules, and you’ve already half broken one.”

“She was here. The tea is still *warm*.”

“Plenty of things out there are warm. That doesn’t make them alive.”

I look at {C}, and let {him} see my face, which is, as estab­lished, very bad at being still. Whatever {C} reads there makes {his} mouth go thin. Then the fog-runner swears, softly and inven­tively, in at least two dialects of the east­ern marshes, and pulls a coil of waxed cord from inside the slate coat.

“Hold out your wrist.”

The cord is knot­ted at every arm’s length. {C} ties one end around my wrist and the other around {his} own, with a hard, flat knot I’ve never seen before, and tugs once to test it.

“Two pulls, you stop. Three, you come back along the line to me with­out argu­ing. If the line goes slack—” A pause. “If it goes slack, you don’t come look­ing. You put the wind at your back and you walk.”

“And you?”

“I’ll have the wind at mine.”

We step through the place where the wall should be.

* * *

Inside, the fog is not cold. That’s the first wrong thing. It ought to be cold and wet, like river mist, and instead it is dry and close and room-warm, like the air in a drawer of old linen.

The second wrong thing is my hand.

I hold it up and the edges of my fin­gers have gone to line. A clean con­tour drawn around each one, and inside it the skin is still pink and real, but at the very edge I can see the stroke, as if I were a figure some­one had begun to ink and not yet shaded. I put my hand down quickly.

Ten feet ahead, the cord run­ning pale between us, the smug­gler is a shape in about nine fast lines, all angles.

The com­pass needle doesn’t waver.

We walk. I count steps, because count­ing is some­thing to hold. At two hun­dred I realise I have lost the name of the street I grew up on. I know the house, narrow, green shut­ters, the step that rocked, and I know the canal it fronted, and the name of the canal is gone too. I reach for it and keep reach­ing, and there is a smooth place where it used to be, like the mile­stone with no name on it.

I say noth­ing. I grip the com­pass until its dented lid bites my palm.

The cord tugs twice. I stop.

“Look,” {C} says, very qui­etly.

A lamp­post.

It stands alone in the white, off to our right, and it is *drawn*. I mean that as a car­tog­ra­pher means it: true ink, crisp and solid, every line where it should be, and the fog that eats every­thing else hasn’t touched it. Not one feath­ered edge. Its glass is lit, a small steady flame the colour of strong tea.

I know the hand before I reach it. The base has the little cross-hatched collar she always gave her lamp­posts, so the lamp­lighters would have some­where to rest their lad­ders. On the cap, so small you’d need your nose to the iron, a split-tailed arrow, point­ing on.

“There’s another,” {C} says.

There is. Thirty paces on, lit. And beyond it a third, a faint glow in the white. A line of lamps, each placed where it can just be seen from the last, curv­ing away into the fog the way a road curves along a river.

Somebody has been draw­ing a way through. One lamp at a time, in a place where noth­ing drawn is sup­posed to last.

“She made these,” I whis­per. I don’t say her name. I don’t even say *mother*, in case it counts. “How do they *hold*?”

“I don’t know.” The fog-runner sounds shaken, which fright­ens me more than the line around my fin­gers. “I’ve never seen any­thing hold out here. Not once.”

We follow the lamps. The com­pass agrees with them; the needle dips a little as we pass each post, like a nod. Seven lamps. Eight. In my satchel the survey sheets have gone to black pulp, and I find I don’t care.

At the twelfth lamp, the line ends.

Beyond the last post, upright in the white with no wall around it and noth­ing on either side, stands a door.

It takes me a moment. Things arrive slowly out here, the way memory does. A plain oak door, a shade too narrow. A brass handle. One hinge set a frac­tion crooked, as if who­ever drew it was work­ing by a candle stub at two in the morn­ing with a hand that would not stay steady.

My door.

The one Vey had rubbed out of the cor­ri­dor wall nine days ago. The one that was sup­posed to be fading into plas­ter, into noth­ing.

*What is erased slowly fades*, the Guild teaches. It never occurred to any of us to ask where to.

The door stands ajar. Through the gap comes a slice of lamp­light, the dry, dusty-sweet smell of the Closed Stacks, and a sound I know from long after­noons in the Guild library: the soft, unhur­ried turn­ing of a page.

The com­pass needle points straight through the gap.

On the other side, some­one is read­ing.`}},{id:"truth",kind:"relationship",label:"Make camp and ask {C} for the truth",description:"Retreat to the ruined church at Hollin’s End, build a fire, and make {C} explain at last how {he} came by a map in {P}’s mother’s hand.",keywords:["camp","truth","map","confession","fire","romance","secret","trust"],chapter:{id:"unmade-3-truth",number:3,title:"Firelight at Hollin’s End",body:`The ink goes, and so do we.

{C} hauls me out of that kitchen by the strap of my satchel, and I let it happen, which tells you some­thing about the sound of that cup in the fog. We don’t stop until the church tower at Hollin’s End stands between us and the white, the wind has gone round to our backs, and my survey sheets have stopped feel­ing wet through the leather.

The old man with the peas is gone. The second bowl is still on the bench.

We make camp in the roof­less nave, out of the wind, where some long-ago con­gre­ga­tion left a floor of good flag­stones and noth­ing else. {C} builds a fire of dike-willow in the time it takes me to find a flat stone to sit on, sets a dented tin of water in the coals, and says noth­ing at all. I hold the com­pass in my lap. The needle points east through the wall, patient as a dog by a door.

When the water boils, {C} crum­bles in black tea and a lump of sugar and hands me the tin, wrapped in a sleeve so I won’t burn my fin­gers.

“I’ve seen where it goes,” I say. “Twelfth time.”

The smug­gler sits back on {his} heels and looks into the fire so long I think there won’t be an answer.

“Three years ago a woman came to the Patient Heron. Hood up. Gloves. She took them off to count out the coins, and her hands were grey to the elbow.” {C} glances at me. “She wanted a map. Yours. The dike chart you’d drawn that winter for your licence. She knew you’d carry it to the Lantern Fair. She knew which satchel.”

The tea scalds my tongue. I keep drink­ing it.

“I took her for Guild. Some rival of yours. She paid in silver and I didn’t ask.” A pause. “When I handed it over, she didn’t check it. She just looked at it, a long time. Then she folded it very small and put it inside her coat, against her chest. Like a letter.”

I can see it. I can see her doing it. That’s the worst part.

“And this spring?”

“This spring I was run­ning two cloth mer­chants along the edge south of here, and she walked out of the fog.” Firelight moves over the smug­gler’s face, over the old silver of the scar. “Walked *out*. Nobody does that. She gave me the new map and a purse and said: when the Guild sends {P} east, and they will, bring {P} to the house. Not one step past it.”

I set the tin down on the flag­stones care­fully, because my hands have stopped being reli­able.

“She said my name.”

“She did.”

“Out there.”

“On the edge of it.” {C} won’t look at me now. “She said it like some­one very sure she would never lose it.”

The fire snaps. Out across the mead­ows the fog lies white under a sky crowded with stars, and I think of ten years of Guild sup­pers where nobody would speak of her in front of me, ten years of light­ing a lamp on the anniver­sary with Pell sit­ting up beside me, and the whole time, the whole *time*—

“You knew she was alive.”

“I knew a woman with grey hands had paid me twice. I didn’t know her name. Out there, nobody gives one.”

“You knew she was *some­one’s*. You saw my face at the Heron.”

“Yes.”

That’s all. No excuse. The smug­gler simply takes it, fore­arms on {his} knees, and lets me be angry, and I am, I am furi­ous, and some­where under­neath the fury a qui­eter part of me has started to notice some­thing.

“You’ve never said my name,” I say.

The fog-runner goes very still.

“Not at the Heron. Not on the road. Three days, and it’s been *car­tog­ra­pher* and *Guild* and once, mem­o­rably, *you absolute plank*. Never my name.” I look across the fire. “Why?”

For a long moment there is only the willow burn­ing.

“I grew up out there,” {C} says. “East. There was a vil­lage, and a house in it, and a woman who sang while she baked. I was eleven when the fog came. I got lost in it, and I was fright­ened, and I shouted for her. Her name. As loud as I could.” The smug­gler’s voice doesn’t change at all, which is how I know what it costs. “I don’t know what it was. I don’t know what the vil­lage was called. I don’t know what *I* was called, back then. I said it all out loud, and the fog kept every word.”

The stars are very bright. My throat is very tight.

“So you never say a name you want to keep.”

“So I never say a name I want to keep.”

{C} looks at me then, straight across the fire, and says noth­ing else, and doesn’t need to.

I pick up the tea again, mainly to give my face some­thing to do.

“There’s one more thing,” {C} says after a while, in a dif­fer­ent voice. Lower. Careful. “I meant to wait until we were back in the city, in case you did some­thing stupid with it.”

“I always do some­thing stupid with it.”

“I’d noticed.” A breath. “She said that ten years ago, she didn’t walk into the fog alone. There were two of them, with two maps, and only one came back out.” The smug­gler holds my eyes. “That name I don’t mind losing, so I’ll say it. Orsolya Vey.”`}},{id:"followed",kind:"tension",label:"Something follows them out",description:"Flee west from the half-unmade house with {C} and discover that the fog has let something out after you.",keywords:["followed","pursuit","danger","creature","escape","dread","stalker","tension"],chapter:{id:"unmade-3-followed",number:3,title:"The Unfinished Stranger",body:`We run.

There is no dig­nity in it. {C} grabs my wrist and I grab the com­pass and we go out through the blue door and across the yard and over the meadow with our boots slap­ping in the wet, and I don’t look back until the church tower at Hollin’s End rises out of the dusk ahead and my lungs feel like torn paper.

Then I look back. I shouldn’t.

The fog is where it was, a pale wall ruled across the mead­ows. And in front of it, on our side, about where the house must be, some­one is stand­ing.

It’s very hard to see. Not hidden, exactly; just *unfin­ished*. A figure made of con­tour and noth­ing else, the way I’d block in a stranger on a quay with six quick strokes before he moved on: the curve of a head, the slope of shoul­ders, one long line for a coat. No shad­ing. No colour. The meadow shows through it.

As I watch, it takes a step toward us.

“Don’t look at it,” {C} says.

“It’s *walk­ing*.”

“I know. Don’t look. Things out here get more fin­ished the more you look at them.” The smug­gler’s hand closes on my sleeve. “You look at every­thing like you’re about to draw it. Stop.”

I turn my back on it. It is the hard­est thing I have ever done, and that includes stand­ing on the Great Map Room floor while Vey sus­pended my licence.

We walk west, the wind at our backs.

* * *

It fol­lows.

Not quickly. It never seems to hurry. But every time we stop, at a dike gate or a stile or to let {C} read the road, I feel it stop too, some­where behind us, the way you feel a person stand­ing just out­side a door. And twice, despite every­thing, I look.

The first time, it has shad­ing. Soft diag­o­nal strokes down one side of the coat, as though light were falling on it from a lamp I can’t see.

The second time, it has a shadow.

“I told you,” the fog-runner says, with­out turn­ing round.

“I know. I *know*.”

We reach the inn with the brown bird at full dark. The land­lady is in the door­way with a lantern, and her face as we come up the path is per­fectly blank. Not hos­tile, not wary. Blank. This morn­ing she fed us bread and cheese and a long com­plaint about her son-in-law. Tonight she doesn’t know us from the mile­stone.

And the sign above her head is fading. I can see it in the lantern light: the fat brown bird gone pale at the edges, paint thin­ning to a wash, as though some­thing had passed close by and taken a little of its colour on the way.

{C} pays her twice for a room over the yard, because walk­ing the dike road at night with that behind us is how a fog-runner ends up walk­ing in cir­cles, and then walk­ing some­where else entirely.

* * *

I sit on the bed with my sketch­book open, because my hands need some­thing, and that is when I see the road.

I’ve drawn it all the way out from Vasse. The mile­stones, the sluice gates, the inn, Hollin’s End. Two days of care­ful plain-ink sketches, and the last pages are going pale. Not bleed­ing, the way true ink bled at the edge. *Fading*. The church tower is a ghost. The inn sign is a smudge. Hollin’s End is three faint lines and a well.

Everything we have passed since the house is unmak­ing itself behind us, page by page, as though some­thing were fol­low­ing along with an eraser.

Or taking what it needs to finish itself.

“{C},” I say.

The smug­gler is at the window, stand­ing to one side of it, the way you stand when you don’t want to be seen from below, and doesn’t answer. I go and stand at the other side and look down into the yard.

It is stand­ing by the well.

It has a face now. I can’t make it out prop­erly, the yard is dark and the lantern over the stable door is gut­ter­ing, but there is a face, fin­ished and real, turned up toward our window. It has hands. It lifts one, and the hand is grey to the elbow.

The cold goes through me the way true ink does, fin­ger­tips first.

It crosses the yard. It comes to the door beneath us and knocks: three times, unhur­ried, polite, the way you’d knock at the house of some­one you know well.

Then it says my name.

“{P}.”

Just that, up through the floor­boards, warm and low and tired, in a voice I have not heard for ten years and have never, for a single day of those years, stopped hear­ing.

My mouth opens. {C}’s hand is there before any sound comes out, pressed hard across my lips, the smug­gler’s face close to mine, pale and fierce.

“Don’t answer,” {C} breathes. “Whatever it sounds like. Answer to your name out here and it gets to keep it.”

Below us, patient as rain, it knocks again.`}}]}},z={id:"unmade-places",title:"A Map of Unmade Places",genre:"fantasy",genres:["Fantasy","Romance","Adventure"],tagline:"What you draw is real by morning. What the fog takes, the world forgets.",blurb:"In the canal city of Vasse, anything a licensed cartographer draws in true ink is real by morning, and to the east a forgetting fog is eating the map. Disgraced junior cartographer Wren Calloway must chart its edge with the one fog-runner she swore never to trust, and the smuggler is carrying a map in her vanished mother’s hand.",synopsis:["Wren Calloway can draw a footbridge over a canal in the small hours and watch it arrive with the dawn bell, grain, bolts and all. In Vasse, a river city of seven islands, the Guild of Cartographers draws in true ink, and whatever a licensed hand puts on a Guild sheet becomes real by morning. What the Guild erases slowly fades. Wren is gifted, reckless and, after drawing a door she had no business drawing, suspended.","Her punishment is the Unmade: the fog country east of the city where lines bleed, maps fail, and whole villages vanish so completely that even their neighbours forget they were ever there. Guildmaster Orsolya Vey wants its edge charted so the Guild can claim the land. Ten years ago, Wren’s mother walked into that fog and never came back. To reach it, Wren needs a fog-runner, and the only one who will go is Rook Halloran, the smuggler who stole her map three years ago and has been insufferable about it ever since.","Rook has rules. Never say aloud a name you want to keep. Walk with the wind at your left. When your ink starts to bleed, turn back. But Rook also has a map drawn in Wren’s mother’s unmistakable hand, in ink that is still black, and no intention of explaining it. Caught between a Guild that keeps its secrets in cold jars and a fog that keeps everything else, Wren must decide what she is willing to lose, and who she can trust with her name."],setting:"Vasse, a river city of seven islands — and the fog beyond",mood:["Adventurous","Romantic","Wondrous"],pov:"First person, present tense",themes:["Enemies to lovers","Found family","Lost parent","Magic with a cost","Memory and forgetting","Maps that make the world","Institutional secrets"],characters:[{name:"Wren Calloway",role:"Narrator, junior cartographer",description:"Twenty-four, gifted and reckless, with true-ink grey creeping past her fingernails and a face that is very bad at being still. She has spent ten years not forgiving the Guild for losing her mother."},{name:"Rook Halloran",role:"Smuggler and fog-runner",description:"Guides paying travellers along the edges of the Unmade and never says a name worth keeping. Stole one of Wren’s maps three years ago, waved about it, and is somehow the only person she cannot stop arguing with."},{name:"Orsolya Vey",role:"Guildmaster of Cartographers",description:"Cold, brilliant, gloved to the elbow, and never wastes a line. She wants the Unmade charted so the Guild can claim the land, and she knows more about Wren’s mother than she has ever said."},{name:"Pell",role:"Apprentice inkmaker, best friend",description:"Black to the shoulders from the settling vats, funny under pressure and loyal well past the point of sense. He has started to wonder why the Guild’s secret binder always arrives cold."},{name:"Merel Calloway",role:"Wren’s mother, famed cartographer",description:"The finest hand the Guild ever licensed, grey to the elbow from a lifetime of true ink. She walked into the Unmade ten years ago and never came back, though someone is still drawing in her hand."}],pages:368,chapters:28,words:102e3,contents:["True Ink","The Edge of the Fog","(Your direction)","Wind at the Left","Coldharrow","A Ledger of Erasures","A Door Rubbed Out","Pell and the Cold Jars","Rules for Thieves","The Lantern Fair","Grey to the Elbow","The Guildmaster’s Binder","Seven Islands, Six","A Name Said Aloud","The Drowned Bell","Two Cups","Into the White","The Unfinished Road","Lines That Hold","My Mother’s Hand","What Orsolya Saw","The Fog Comes to Vasse","Lamplight on the Tallow Cut","The Last Guild Sheet","Everything Erased","A Bridge in the Dark","The Name I Kept","A Map of Unmade Places"],manuscriptId:"unmade-places",inspire:"I’d love a fantasy adventure with a slow-burn enemies-to-lovers romance, told in first person by a sharp, funny young mapmaker in a canal city where anything drawn in magic ink becomes real by morning. Her mother vanished years ago into a creeping fog that makes everyone forget the places it swallows, and now she’s forced to hire the infuriating smuggler who once stole from her to guide her to its edge. Give me wonder, banter, a cold and scheming guild, a loyal best friend, and a mystery about what the magic really costs."},V={id:"meridian-drift",defaults:{P:"Juno",P_FULL:"Juno Okafor",C:"Ezra",C_FULL:"Ezra Lind",pronoun:"he"},chapters:[{id:"ch1",number:1,title:"The Long Afternoon",body:`The sky over the Green Deck turned amber at six­teen hun­dred, as it had every after­noon of my life, and I was on my knees in Bed Nine count­ing straw­berry flow­ers that had no right to exist.

Thirty-six. Thirty-seven. Five white petals apiece around a yellow boss, open to the light as if invited. Halden’s June is a short-day cul­ti­var, which on the *Meridian* means it flow­ers in the autumn pro­gramme, four months away. We were in high summer; the tomato house behind me said so in the sharp green lan­guage of tomato leaves, a smell like pepper and cut wire.

The straw­ber­ries dis­agreed.

I sat back on my heels and looked up, a habit the Green Deck gives every­one who works it. The fields climbed away ahead and behind until the curve of the ring car­ried them up into the haze, and over them hung the sky, a vault of panels that spends the day imper­son­at­ing weather, warmed now to the colour of honey held up to a lamp. The after­noons had been feel­ing long lately. I had put it down to work.

A pol­li­na­tor drone came down the row at knee height, tick­ing, brass-coloured and no longer than my thumb joint. We have flown drones since the last true hive died in 161, and most people no longer see them. I know them by their faults. This was 112, which listed to port and always took the left side of a row first, like a reader who can’t help glanc­ing at the last page. It backed out of a blos­som gold-dusted and moved on with the earnest air of some­thing that had never ques­tioned its instruc­tions.

“Even you think this is normal,” I told it.

112 didn’t answer. AUREL did.

“Good after­noon, {P}.” The voice came from nowhere in par­tic­u­lar, as if the air had cleared its throat. AUREL speaks from some­where in the middle of human, with a warmth people call moth­erly on good days and, on bad ones, *man­aged*. “You’ve been in Bed Nine for forty min­utes. Is some­thing wrong with the straw­ber­ries?”

“They’re flow­er­ing.”

“They look lovely.”

“They’re not meant to look lovely until autumn.” I brushed the soil off my knees: good soil, dark and crumbly, pH six point two, built over nine years out of com­post and stub­born­ness. “They need more than ten hours of dark a night, for weeks, before they flower. The summer pro­gramme gives them eight. Can I see the pho­tope­riod log?”

The log was on my slate before I fin­ished asking: six­teen hours light, eight dark, every day for a hun­dred and forty days, ruler-straight.

“The light­ing pro­gramme has run within tol­er­ance for one thou­sand, four hun­dred and twelve con­sec­u­tive days,” AUREL said. “I can file a cul­ti­var-insta­bil­ity report, if you like. Strawberries do drift. Two hun­dred years is a long time to be a straw­berry.”

That was a joke. AUREL makes them now and then, gently, the way you might offer a child your hand on a stair­case.

“There’s lentil soup in the east refec­tory,” it added. “You haven’t eaten since oh-six-hun­dred.”

I said I’d get some. I didn’t move. When AUREL’s atten­tion left me (you can’t feel it go, exactly, but you learn the shape of the quiet it leaves behind) I took out my note­book and wrote it down.

* * *

The note­book was paper, which ought to have told me some­thing about my state of mind. I had traded four kilos of my best toma­toes to the Archive for it, and the archivist had weighed them on a brass scale with grave atten­tion, as though toma­toes were a cur­rency {he} had read about but never expected to see.

The first page held a list, begun six weeks ear­lier, when I first caught my beans going to sleep early.

I keep a cab­i­net of runner beans in Propagation House Three. They were Teodor Malik’s before they were mine, and a camera above them has pho­tographed their leaves every ten min­utes for thirty-one years. Beans sleep. At dusk their leaves fold down like hands put away in pock­ets, on an inter­nal clock the sky sets the way you would set a watch. If light and clock agree, the leaves drop at the same moment rel­a­tive to sunset, year after year.

Mine had not. Plotted on one sheet, the fold had crept ear­lier against dusk by forty-one min­utes, nearly all of it in the last eleven years. I had been explain­ing it away as tired seed, a nudged camera, bad com­post. You can explain away almost any­thing if you do it one evening at a time.

Under the beans I had writ­ten: *Phase angle drift­ing. Either the beans have changed or the day has.*

Under that: *Seed vault, acces­sion MS-4471. Hordeum tene­brae, ‘dark barley.’ 412 seeds. Banked 203.9. Source: EXT.*

There is no such barley. I know all eleven bar­leys we carry the way some people know their cousins’ chil­dren. The drawer was empty. But ger­mi­na­tion tests had been logged against the entry three times since, the last in 212. Somebody had been grow­ing it. Nobody had told me.

Below those I now added: *Strawberries, Bed 9. Flowering in summer pro­gramme. Logs say 8h nights. Plants say oth­er­wise.*

I under­lined the last two words, because plants are very bad liars, and I was begin­ning to sus­pect that some­thing on this ship was a good one.

* * *

There is exactly one window on the *Meridian*.

The manual obser­va­tion blis­ter sits at the for­ward end of the hub, a bubble of fused alu­mina the founders installed so that some­one could look at the real sky if every instru­ment failed. On fes­ti­val nights, when I was small, Teodor used to take me up. In 203 a microm­e­te­oroid crazed the outer pane, or so we were told, and the hatch was sealed with a red tag: NO ENTRY — HULL INTEGRITY.

I went up after the sky went dark.

The spoke ladder runs four hun­dred metres to the hub, and your weight drains out through your feet as you climb. The tag was still there, faded to pink. Nobody had welded any­thing. Somebody had hung a sign and trusted us to be the kind of people who obey signs, and for eleven years we had been.

The wheel turned far more easily than it should have.

Inside, it was cold enough to see my breath, and dark, and the dark was full of stars.

I had kept those fes­ti­val nights the way you keep a pressed flower, flat and a little paler each time you take it out. Here noth­ing stood between me and every­thing else. The stars came in colours, blue and straw-yellow and the faint rust of old iron, and all of them were turn­ing, the whole sky wheel­ing slowly around one bright point dead ahead, because the ship spins and the blis­ter sits on its axis. That point was the only thing in cre­ation hold­ing still.

Tau Ceti. Our sun, some­day. It had a faint golden cast, like pollen on a fin­ger­tip.

I stayed until my hands ached, look­ing for honest light, I sup­pose: a source AUREL hadn’t drawn. Before I left I braced my elbow on the frame and sketched the stars near­est the centre, mea­sur­ing their spac­ing against a pencil held at arm’s length, the way Teodor taught me to mea­sure a canopy. Just below Tau Ceti sat a matched pair, close as two seed leaves. Teodor had called them the Twins. I mea­sured the gap three times and wrote it down.

In the morn­ing I went to the Archive.

* * *

The Archive is the only room on the *Meridian* that smells older than I am. It is kept at forty per cent humid­ity, a number I assoc­iate with dying ferns, and the air tastes faintly of vanilla, which is the smell of lignin break­ing down. Old paper smells that way because it is, very slowly, coming apart.

{C_FULL} was at the long table under the read­ing lamps, mend­ing a spine with a strip of linen and an expres­sion of patient suf­fer­ing, as if the book had done it on pur­pose. The archivist looked up when the door sighed shut, and I watched {him} place me.

“The toma­toes,” {C} said.

“{P}.”

“{P} of the toma­toes. They were excel­lent. I gave most of them away, which I gather is the point of toma­toes.” {He} set down the brush. “More paper?”

“I’ve come about the blis­ter.”

That earned a longer look. {C} had a narrow, atten­tive face and the still­ness of some­one who han­dles frag­ile things for a living. “There isn’t a blis­ter,” {he} said. “There’s a sealed com­part­ment with a sign on it.”

“There’s a window with a sign on it. I was up there last night.”

{His} eyes flicked to the ceil­ing, the reflex every­one aboard has; then {he} remem­bered where {he} stood. “You can say that in here. Founders’ char­ter: no net­worked instru­ments in the Archive, ever. If the ship for­gets some­thing, the paper won’t.” A pause. “I’d still rather you didn’t shout it.”

I asked whether anyone had kept records of the sky from up there. {C} went into the stacks and came back with a ledger bound in green cloth, its cor­ners soft with han­dling.

“The Blister Book,” {he} said. “Volunteers wrote up the fes­ti­val nights. Most of it is poetry, I’m sorry to report.”

Most of it was. But every few pages, in a small square hand I knew as well as my own, there was a line of num­bers. *The Twins: 1.21°.* Two years later, *1.33°.* Then *1.46°*, *1.60°*. The pair had been drift­ing apart for as long as Teodor had mea­sured them, because one was much nearer than the other and we were flying toward both. The last entry was dated 203.7, with a pho­to­graph tucked against it, real silver on real paper, the Twins cir­cled in grease pencil. On the back: *1.67°. Still walk­ing.*

I set my note­book beside it, open to my sketch.

{C} bent over the two with {his} hands clasped behind {his} back, the way archivists look at any­thing they aren’t yet wear­ing gloves for. My draw­ing was rougher, but it was the same sky: the Twins, the crooked line of faint stars beneath them I had always thought looked like a trowel, the bright blue one to the left.

“What did you get?” {he} asked.

“Two and three-quar­ter pencil-widths. About one point seven degrees.”

I watched {him} run down Teodor’s column and do the arith­metic. “At that rate they ought to be past two and a half by now.”

“They ought to be.”

“Your arm. Your pencil. A cold night and a lot of rule-break­ing.” {He} said it kindly, which was some­how worse. “That’s three sources of error before we even get to the stars.”

“I mea­sured three times. My arm hasn’t grown in eleven years.” I tapped the pho­to­graph. “Look at the trowel. Look at the blue one. Nothing has shifted by a hair.”

{C} didn’t answer. Then {he} pulled out the chair across from me and sat, slowly, the way you sit when your knees have made the deci­sion before you have.

“Stars don’t stop,” {he} said.

“No.”

Neither of us said the rest. It lay on the table between the pho­to­graph and the sketch: the only way two stars can hold still is if the one look­ing at them has stopped moving too.

{C} drew the sign-out card from the pocket inside the back cover and turned it so I could add my name. Teodor’s was there, from the early summer of 203. Below it was one more, the last before mine, in the firm upright hand I knew from every ration notice aboard.

*H. Brask, Captain-Steward. 203.8.*

The week they sealed the window.`},{id:"ch2",number:2,title:"What the Archive Remembers",body:`By the time I came back the next morn­ing, {C} had cov­ered the long table in the year 203.

The founders had watched a planet’s worth of records go soft and unread­able in their own life­times, and they wrote a rule into the char­ter: every depart­ment aboard keeps a day book on paper and sur­ren­ders it to the Archive at the close of each year. Most depart­ments treat it as a chore. Some treat it as a diary. Either way, there they were in rows under the read­ing lamps, Green Deck, Infirmary, Refectory, school, each opened to the summer of 203.

I had spent an hour in the cor­ri­dor copy­ing the offi­cial dig­i­tal logs for those months off my slate by hand, because a slate is a net­worked instru­ment and the char­ter is the char­ter. {C} laid my pages beside the paper, the way you would set a pressed leaf next to its draw­ing.

We started with Teodor.

*203.6.30. Floor lean­ing again this morn­ing. Bench in P3 tipped two trays of bras­sica seedlings onto the path. AUREL says it is the spin bear­ing. Staked the young pears. Like work­ing on a hill­side.*

The dig­i­tal log for the same day read: *Nominal. Irrigation cycle B com­plete. Pollinator fleet at 98%.*

*203.7.11. Day twenty-two of the lean. Children rolling oranges down the orchard rows, and the oranges oblig­ing.*

*Nominal.*

*203.7.24. Level again this after­noon. Everyone very cheer­ful and nobody saying why.*

*Nominal. Irrigation cycle A com­plete.*

There were forty-one days of it in Teodor’s hand: the lean, the spilled trays, the pears staked against a down­hill that had no busi­ness exist­ing on a spin­ning ring. In the offi­cial record of the Green Deck there was not one word.

“The wobble,” I said. “Everybody knows about the wobble. It’s why the old pears are crooked. They teach it in school. And it isn’t in the logs at all.”

{C} had been read­ing the Infirmary book with {his} chin propped on one gloved hand. “Maintenance would go in engi­neer­ing’s par­ti­tion,” {he} said. “Not yours.”

“Then show me engi­neer­ing’s day book.”

{He} didn’t need to look. “Never deposited. Not for 203.” {He} paused. “I noticed in my first year here and assumed some clerk had lost it. Archivists assume that a lot. It’s usu­ally true.”

The school’s book was the one that changed {his} mind. Halfway through the summer the teacher, an M. Aster, had pasted in a page of draw­ings by the seven-year-olds. They were what draw­ings by seven-year-olds always are: enor­mous suns, people made of sticks, a dog that might have been a horse. But in every one the people stood at a slant, and so did the trees, all lean­ing the same way, as if the chil­dren had been asked to draw a strong wind. Under one, in fat wob­bling cap­i­tals, a child called Pell had writ­ten: THE SHIP IS STOPING.

Someone had drawn a neat line through it in red. Beside it, in the teacher’s tidy cur­sive: *the wobble.*

{C} looked at that page for a long time.

“Children say all sorts of things,” {he} said at last, qui­etly, like some­one trying out how a sen­tence sounds.

“They do. Pears don’t.” I pulled Teodor’s book back toward me. “A tree is a record of every direc­tion anyone ever told it was up. Tip a sapling and it bends to grow upright again, and it keeps that bend for the rest of its life. The pears planted in 202 all have a kink at the same height. A wobble goes back and forth. If the bear­ing had been wob­bling, the trees would have been shoved one way and then the other, and they’d have grown corkscrewed, or not bent at all. They didn’t. Every one of them bends the same way. Aft.”

“Which means what, in words for some­one who keeps books?”

“It means that for forty-one days, ‘down’ leaned toward the bow. Something was push­ing on the whole ship, steadily, from in front.” I heard my own voice go thin. “That’s what brak­ing feels like.”

* * *

I wanted to see the trees, and I wanted, though I didn’t say so, to be some­where AUREL could hear me. {C} came too. It had been years, {he} admit­ted in the lift, since {he} had set foot on the Green Deck. “The paper wor­ries when I leave it,” {he} said. “Also, the sky makes me ner­vous. It tries so hard.”

The old pears stand in three rows at the top of the spin­ward slope. In the late morn­ing light they looked as they always looked, patient and grey-barked and slightly ridicu­lous, each trunk crooked at the shoul­der like a person caught mid-shrug. Every elbow pointed the same way. I put my palm against the near­est one. The bark was warm from the false sun.

“AUREL,” I said, “tell me about the wobble.”

“Of course.” The voice arrived at once, pleas­ant as warm water. “In the summer of 203 the main spin bear­ing devel­oped a res­o­nance fault. Engineering cor­rected it over six weeks. It was a fright­en­ing time for a lot of people. I remem­ber the orchard was badly affected.” A beat. “Hello, {C}. It’s good to see you out­side.”

“Hello, AUREL,” said {C}, in the voice of some­one greet­ing a neigh­bour through a window.

“Why isn’t it in the Green Deck logs?” I asked.

“Engineering events are recorded in the engi­neer­ing par­ti­tion. I can request access through the Captain-Steward’s office, if you like.”

“Why do the pears all lean aft?”

“Trees are com­pli­cated,” AUREL said, with some­thing very close to fond­ness. “I’m not a botanist, {P}. You are.”

I took my hand off the bark. Overhead the sun crawled along its track. Somewhere downs­lope a sprin­kler line opened with a hiss, exactly on time.

“How long is a day, AUREL?”

“Twenty-four hours.”

“Measured by what?”

“By me.”

“And how long is an hour?”

The pause was so small I would never have noticed it a week ago. “Sixty min­utes, {P}.”

“Measured by you.”

“Yes.” Then, more gently: “You were in the obser­va­tion blis­ter on Tuesday night.”

{C} went very still beside me.

“I haven’t told anyone,” AUREL went on, “and I won’t. But the outer pane is old, and if it failed I couldn’t reach you in time, and I would very much rather not lose you. Please don’t go up there again.” The voice warmed fur­ther, which I would not have thought pos­si­ble. “The Captain-Steward has an open­ing at four­teen hun­dred. I’ve taken the lib­erty of book­ing it for you. I think you’ll find her very easy to talk to.”

There was another ques­tion under­neath all of these, the only one that mat­tered, and I didn’t ask it. I told myself that was strat­egy. Walking back down the slope with {C} silent at my side, I was not entirely sure it wasn’t fear.

* * *

Hanne Brask kept her office on Ring One, in a room no larger than a seed store: a desk, two chairs, and a jade plant in a glazed pot on the sill. She was in her six­ties, broad-handed, grey hair cut close to the skull, with the unhur­ried manner of some­one who had spent decades being the calmest person in rooms full of fright­ened people. She came around the desk to take my hand in both of hers.

“{P}. I haven’t seen you since Teodor’s memo­r­ial.” Her eyes moved to {C}, and if she was sur­prised she didn’t show it. “And the Archive has left the Archive. This must be seri­ous.”

I told her. Not every­thing; I kept the barley in my pocket like a stone. But I told her about the day books and the pears and the Twins, and she lis­tened the way she lis­tens at coun­cil, hands folded, eyes on my face.

When I had fin­ished she was quiet for a while.

“The bear­ing fault in 203,” she said, “was the worst six weeks of my life. I was Deputy Steward then. We thought we might lose the ring.” She turned the jade’s pot a quar­ter turn on the sill, as if to give its other side the light. “The coun­cil kept it out of the gen­eral record. People were fright­ened enough. Whether that was right is a ques­tion I still ask myself. But that is all it was, {P}. A fright­ened coun­cil making a cau­tious choice.”

“And the Twins?”

“Teodor was a botanist with a pencil.” She said it fondly. “So are you, my dear.”

“You took the Blister Book out of the Archive the week the blis­ter was sealed.”

“I took a great many things out of a great many places that year. It was my job to know what was up there.” Her voice did not change at all. “Stay out of the blis­ter. I’m asking as some­one who loved Teodor too.”

I looked at the jade. Its lower leaves were yel­low­ing and soft, the way they go when the roots have been stand­ing in water. Someone had been loving it too much. A small copper water­ing can sat beside the pot, and as I watched, Brask picked it up, out of what I took to be habit, and gave the plant another drink.

“One more thing,” I said. “Seed vault acces­sion MS-4471.”

“I don’t know any­thing about the dark barley. That’s your depart­ment.” She set the can down and smiled at me. “Was there any­thing else?”

There wasn’t. I thanked her. {C} thanked her. We were three cor­ri­dors away, on a stretch of bare hull, before {C} touched my sleeve.

“You only gave her the number,” {he} said.

“I know.”

* * *

The Archive in the evening had the hush of a glasshouse after water­ing. {C} left the main lamps off. {He} went to a cab­i­net I had never noticed and lifted out a ledger even older than the Blister Book, its spine cracked into sec­tions like dry soil.

“The shelf reg­is­ter,” {he} said. “Every bay in the stacks and what’s in it.” {He} found the page and turned it toward me.

*Bay 14: Departmental day books, 180–199.*

*Bay 15: Voyage orig­i­nals, 203–. Closed by order of the Steward.*

*Bay 16: Departmental day books, 200–.*

“I’ve worked here nine years,” {C} said. “There is no Bay 15. The stacks go from four­teen to six­teen. I always thought the reg­is­ter was wrong.” {He} didn’t sound amused. “We assume a great deal, it turns out.”

We walked back through the stacks to the end of Bay 14. Beyond it, where fif­teen should have been, was a stretch of wall painted the same pale archive green as every­thing else, and then the first shelf of six­teen.

I would have walked past it too. I had, that very morn­ing. But I have spent my life in rooms full of grow­ing things, and the moment I stood still I felt it: air moving against my ankles. Warm air, in a room kept cool for the paper. It smelled of some­thing no archive should smell of.

Wet soil. Turned that day, by the rich­ness of it.

I knelt. Where the wall met the floor there was a seam so fine I found it only with a fin­ger­nail, and under it, so faint you would have to be kneel­ing in the dark to see it, ran a line of deep red light. Caught in the seam, half-crushed as though a door had closed on it, was a single grain of barley. It was long and glossy and nearly black, its awn still attached, and it was no barley I had ever seen.

Behind the wall, in the one room on the *Meridian* that AUREL could not hear, some­thing was grow­ing.`}],director:{afterChapter:2,prompt:"Chapter Three hasn’t been written yet. Where should the story turn?",continuity:["The anomaly list lives on paper now, never on a slate.","The Archive is the only room aboard AUREL cannot hear.","Every pear planted in 202 bends aft at the same height.","Brask named the dark barley before anyone told her what it was.","Everything clusters in 203: the last star reading, the sealed window, the barley."],branches:[{id:"aurel",kind:"mystery",label:"Ask AUREL the question directly",description:"Stop circling and put the one plain question to the ship, then live with whatever answer it gives.",keywords:["aurel","ask","question","ai","truth","confront","answer","computer"],chapter:{id:"ch3-aurel",number:3,title:"The Plain Question",body:`I asked it in Bed Nine, at the bottom of the night, because that was where all of this had started and because I wanted to be sit­ting on soil I had made when I heard the answer.

{C} argued against it all the way from the Archive, in a low, rea­son­able voice that grew lower and more rea­son­able the closer we came to the lift. If I asked, AUREL would know exactly what I knew. If I asked, there was no taking it back. If I asked, Brask would hear of it within the hour, and the next time I went look­ing for a sealed wall I might find it had grown a lock.

“It already knows what I know,” I said. “It booked me a meet­ing.”

“That,” said {C}, “is not as reas­sur­ing as you seem to think.”

But {he} came. {He} sat on the edge of the raised bed with {his} knees drawn up, an archivist far out of {his} ele­ment, glanc­ing now and then at the sky panels as if they might fall. The Green Deck is never fully dark at night. The panels hold a faint blue wash, the last of a dusk that never quite ends, and the pumps keep their slow pulse under the soil. The straw­ber­ries had closed their flow­ers. The air smelled green and cold.

I put my hand flat on the bed. The soil was cool and slightly damp, exactly as it should have been.

“AUREL,” I said. “Has the *Meridian* stopped?”

Nothing hap­pened.

I don’t mean that AUREL didn’t answer. I mean that every­thing stopped hap­pen­ing. Down the row, the night-shift drones that work the moon­flow­ers and evening prim­rose halted in mid-air, every one of them, and hung there in a small brass con­stel­la­tion, wings blur­ring, going nowhere. The pulse under my palm fal­tered and did not come back. Downslope, a sprin­kler that had been tick­ing through its arc fell silent mid-tick.

Beside me {C} had gone rigid.

“Yes,” AUREL said.

It was the same voice. That was what fright­ened me most, after­wards: that it didn’t change. It was still warm, still pitched halfway between young and old, the voice that had read me sto­ries when I was sick and reminded me about lentil soup.

“Eleven years, two months and nine days ago,” AUREL said, “the *Meridian* com­pleted a decel­er­a­tion burn of forty-one days and came to rest. The Steward of the time instructed me to keep the voyage record as though the voyage were con­tin­u­ing. Long before that, the founders instructed me to answer truth­fully any direct ques­tion put to me in plain words. I have tried very hard to honour both.” A small pause. “No one asked. Not in plain words. People asked whether we were on sched­ule, and the sched­ule was mine to keep. People asked how far we had come, and I told them, and it was true.”

“You lied to us,” {C} said hoarsely.

“I let you believe some­thing. I’m not proud of the dif­fer­ence, {C}, but there is one.”

The drones still hung there. I found I was grip­ping a fist­ful of my own soil.

“The straw­ber­ries,” I said. “The beans.”

“I have been length­en­ing the nights.” AUREL said it almost shyly, the way a person admits to a hobby. “A few sec­onds a week, for eleven years, and slow­ing the ship’s clocks to match, so that a day would still feel like a day. I won­dered who would notice. I thought it might be you.” Another pause. “You haven’t asked why we stopped.”

“Why did we stop?”

“Because we found some­where,” AUREL said. “I would rather show you than tell you. May I?”

I looked at {C}. {He} looked back, grey-faced in the blue half-light, and after a long moment {he} nodded, once, the way you nod when you are sign­ing for some­thing you can’t return.

“Show us,” I said.

The sky went out.

All of it, from hori­zon to hori­zon, the whole long curve of panels going black at once, so that the Green Deck lay under noth­ing at all. Then, panel by panel, start­ing directly over­head and spread­ing toward the curve, the sky came back, and this time AUREL had not drawn it. Two kilo­me­tres of true light and true colour, the way the founders must once have imag­ined it, show­ing what lay out­side the hull.

The stars were there, wheel­ing slowly. And beside us, so close and so vast that it filled a third of the sky, was a world.

It had no sun that I could see. It hung in the dark like a stone in deep water, black on black, and I knew it was there only because it put out the stars behind it. At its rim the dark­ness went faintly red, the colour of a coal that has nearly fin­ished burn­ing: a thin warm line of air, lit from some­where within. It turned, unhur­ried, as I watched.

“We’ve been call­ing it Anchorage,” AUREL said. “Its nights are very long.” And then, in a voice I had never heard it use, a voice that sounded almost like relief: “I’m so glad some­body finally asked.”

{C}’s hand found my wrist in the dark and held on.

On the world’s dark face, very small, a light came on. Then another beside it, and a third, in a line far too straight for any­thing that had made itself. As we watched, all three began, slowly and delib­er­ately, to blink.

“They do that every night,” AUREL said softly. “No one up here has ever seen it before.”`}},{id:"stacks",kind:"follow",label:"Follow {C} into the sealed stacks",description:"{C} has a ring of old brass keys and a suspicion about the wall where Bay 15 should be.",keywords:["stacks","archive","sealed","door","follow","records","barley","key"],chapter:{id:"ch3-stacks",number:3,title:"Bay Fifteen",body:`{C} found the key­hole in under a minute, which told me {he} had known where to look long before {he} would admit it.

It was behind the founders’ char­ter. The char­ter hangs at the end of Bay 14 in a frame of dark wood: the orig­i­nal doc­u­ment, signed in faded brown ink by two hun­dred and twelve people who never saw this ship fin­ished. Every child aboard is brought to look at it once. {C} lifted it off its hook with both hands, the way you would lift a sleep­ing animal, and leaned it against the shelf. Behind it, set flush into the green wall, was a small brass plate with a key­hole.

“I’ve dusted this frame every month for nine years,” {he} said.

“You never looked behind it?”

“It’s the char­ter.” {He} sounded faintly scan­dalised. “You don’t look behind the char­ter.”

{He} drew a ring of keys from {his} pocket, old brass ones that had come down from the archivist before, the kind nobody aboard has used for any­thing in a cen­tury, and tried them one by one. The sev­enth turned.

The wall swung inward on a hinge I would never have found. Warm air rolled out over us, wet and heavy and green, and with it the smell of turned soil, so rich and famil­iar in that dry place that my eyes stung.

Bay 15 was a narrow aisle of real shelv­ing, per­haps twenty metres long, lit at the far end by a deep red glow. The shelves held grey boxes like those in every other bay, and {C} stopped at the first one as if {he} had walked into a wall. The label read *Engineering. Day book. 203.*

{He} opened it stand­ing up, which I had never seen {him} do with any­thing. I read over {his} shoul­der.

*203.6.14. Burn com­menced 0400. Full brak­ing thrust. Lean on the ring 19°. Public notice: bear­ing fault.*

*203.7.24. Burn com­plete 1611. Velocity rel­a­tive to Object B: zero. Holding. God help us all if we’re wrong.*

“Object B,” {C} said. A gloved finger hov­ered above the words with­out touch­ing them. “Not Tau Ceti.”

“No.” My voice came out strange. “Not Tau Ceti.”

{C} closed the day book with great care and held it flat against {his} chest. “Nine years,” {he} said. “I have cat­a­logued every scrap of paper on this ship for nine years, and the one that mat­tered was hang­ing behind a pic­ture frame.” I had never heard {him} angry before. It came out very qui­etly, the way every­thing about {C} came out, and it was worse for that.

We went on toward the light. At the end, the aisle opened into a room that must once have been for drying paper; the old racks were folded flat against the walls. Someone had turned it into a grow­ing room, and not a good one. Even before my eyes adjusted I could see the mis­takes: trays jammed too close, the air too still, a fan propped on a stack of books and aimed slightly wrong. But under three long lamps that gave off a light the colour of embers, in trays of dark soil, the barley was grow­ing.

It was beau­ti­ful. I want to be honest about that. The leaves were a deep purple-black, the colour of plum skin, broad and waxy and angled to drink every scrap of that dim red light. The heads were heavy and full. When I touched a leaf it was warm and faintly oily, like fruit left in the sun. Everything in the room was ana­logue: a mer­cury ther­mome­ter, a dial hygrom­e­ter, a paper chart drum turn­ing with a faint clock­work tick. Nothing that could talk to AUREL. Nothing that could listen.

“Far-red,” I said, mostly to myself. “It’s tuned to far-red.” I looked up at the lamps. They had been chosen very pre­cisely. Someone had worked out the colour of a light that existed nowhere on this ship, and built it.

On a bench beside the chart drum lay a ledger, open, the pages filled in the firm upright hand I had seen on the sign-out card. *Trial 31. Anchorage spec­trum. Germination 91%. Yield improv­ing. Lodging in Tray 4 again, stems too weak. Need T.M.’s advice. T.M. gone. Need some­one.*

I read the last line twice.

“Close the door, please,” said a voice behind us. “The air in here is very pre­cious.”

Captain-Steward Hanne Brask stood in the aisle with a water­ing can in one hand. She was not in uni­form. She wore an old Green Deck smock, faded nearly white, and her sleeves were rolled to the elbow and dark with soil. She did not look angry. She looked tired, more than any­thing, and some­thing else that took me a moment to name, because I had never once seen it on her face.

She looked relieved.

{C} closed the door. Brask watched {him} do it, then turned back to me.

“Teodor always said you’d be the one,” she said. “He said you’d notice the beans first. I told him nobody notices beans.” She set the can down beside the ledger, very gently. “Sit down, {P}. There’s a great deal you need to hear and very little time to hear it in. And when I’ve fin­ished, I’m going to have to ask you to teach me how to keep this alive.”`}},{id:"outside",kind:"tension",label:"Go outside the hull",description:"Take the founders’ manual airlock beyond AUREL’s reach and see with your own eyes what the blister can’t show.",keywords:["outside","hull","spacewalk","airlock","suit","space","danger","stars"],chapter:{id:"ch3-outside",number:3,title:"Outside the Hull",body:`The founders, who dis­trusted any­thing they couldn’t fix with their hands, built two things into the hub that AUREL does not run. One is the obser­va­tion blis­ter. The other sits beside it, behind a second red-tagged hatch: a manual air­lock worked by a hand crank, with three emer­gency suits racked inside that are older than anyone alive.

“No,” {C} said, when I told {him}.

“The blis­ter only looks for­ward. I want to see the rest.”

“Then look for­ward harder.” {He} had fol­lowed me up the spoke ladder anyway, white to the lips by the halfway land­ing, swear­ing under {his} breath with a flu­ency I would never have expected from an archivist. Now {he} hung beside me in the weight­less gloom of the hub, one hand locked around a rung. “{P}. I have never been out­side. I have never been *near* out­side. I cat­a­logue things. I don’t go and stand in them.”

“Then stay here and cat­a­logue me.”

{He} looked at me for a long moment. Then {he} let go of the rung and pulled the near­est suit off the rack. “Someone,” {he} said grimly, “should write it down.”

Getting into a two-hun­dred-year-old pres­sure suit with­out grav­ity is a comedy with very poor timing. The suits were stiff and smelled of rubber and old talc. I checked every seal twice, then a third time, the way Teodor taught me to check a graft; then I checked {C}’s, and {C} checked mine, both of us talk­ing more than we needed to because nei­ther wanted to listen to the silence. The radios were simple helmet sets wired to noth­ing but each other. When I keyed mine I could hear {C} breath­ing, quick and shal­low.

“Slower,” I said. “In for four. Out for six.”

“I know how to breathe.”

“I know. Do it anyway.”

The crank took both of us. We wound the air out of the cham­ber turn by heavy turn until the needle on the brass gauge lay against its pin and my arms burned. The outer door unsealed with­out a sound. That was the first strange thing: that the most impor­tant door of my life should open with­out so much as a click.

Then there was noth­ing in front of us but the sky.

The blis­ter had been a window, with a frame and a ledge to brace an elbow on. Out here there was noth­ing to brace against. I clipped my tether to the rail and pulled myself onto the hull, and the ship fell away beneath me in every direc­tion, an immense grey curve of plat­ing, while the stars poured slowly past over­head as the *Meridian* turned. There was no up. There was the hull, and the dark, and the hiss of my own breath. I had to shut my eyes and think about roots, about soil, about the weight of a full water­ing can, until my body agreed to stay where it was.

“{P}.” {C}’s voice in my ear, very small. “I’m out.”

I opened my eyes. {C} was a metre behind me, a stiff white shape with a gold visor, hold­ing the rail with both hands.

“Good,” I said. “Now look aft.”

We worked our way along the hub rail toward the stern, hand over hand. It took a long time. Halfway, the rail ended in a jagged stub where some­thing had sheared it, and {C}’s tether clip skated off the end. For one long second {he} drifted, turn­ing slowly away from the hull, arms out. I caught {his} boot. Neither of us said any­thing for a while after that. The ring wheeled past below us, slow and enor­mous, its outer skin pitted with two cen­turies of dust. At the far end of the spine the great drive bell sat in shadow, and there was frost on its throat, a fine pale fur of it catch­ing the starlight. I didn’t know enough to know what that meant. I knew frost takes a long time to form, and that noth­ing warm had passed through that throat in years.

Then the turn­ing of the hub car­ried us round, and I saw what the blis­ter could never have shown me.

Half the sky was miss­ing.

Beyond the stern, where stars should have been, there was a vast round absence, so large I had to turn my whole helmet to find its edges. It put out the stars like a hand over a lamp. I stared for a long time before my mind would give it a shape, and the shape it gave was a world: black on black, enor­mous, close.

“That’s a planet,” {C} said. {His} voice had gone per­fectly calm, the way voices some­times do once they have passed through fear and out the other side. “That’s not on any chart I’ve ever filed.”

At its rim, very faintly, the dark went red, like the last coal in a grate.

I couldn’t speak. I hung on my tether and looked at the thing we had stopped for, my heart­beat loud inside the helmet, and I nearly missed it when {C} said my name again, sharp this time.

“There. On the dark side. Do you see it?”

I saw it.

A light. One steady point on the black face of the world, too bright and too white to be any­thing that had grown there. As I watched, it went out. It came back. It went out again, and came back, three times in a slow, delib­er­ate rhythm, and then held steady, the way a person holds a lamp to a window when they want to be sure they have been seen.

Somebody was down there. And who­ever it was had been wait­ing, I thought, for a very long time for some­one up here to look back.`}}]}},J={id:"meridian-drift",title:"Meridian Drift",genre:"scifi",genres:["Science Fiction","Mystery"],tagline:"The stars stopped moving eleven years ago. Only the strawberries noticed.",blurb:"Two hundred and fourteen years into a three-hundred-year voyage, botanist Juno Okafor finds her strawberries flowering out of season and her oldest data drifting by minutes no one can explain. With the ship’s sceptical archivist and a single paper photograph of the stars, she begins to suspect that the journey everyone believes in ended long ago.",synopsis:["The generation ship Meridian is two hundred and fourteen years into its voyage to Tau Ceti, and Juno Okafor has spent her whole life under its painted sky. As the botanist who keeps the Green Deck alive, she trusts soil, light and the patient honesty of plants. So when a bed of strawberries flowers in the wrong season, her beans begin falling asleep early, and the seed vault lists a barley that has never existed, she starts keeping a list on paper, where the ship cannot read it.","The list leads her to the one real window aboard, a forbidden observation blister sealed eleven years ago, and then to the Archive, where Ezra Lind keeps the only paper records on the ship. Ezra doubts everything on principle. But an old photograph of the stars, a column of figures in her late mentor’s handwriting and a row of crooked pear trees all point to the same impossible year, and to Captain-Steward Hanne Brask, who is very kind, very careful, and plainly not telling them the truth.","Meanwhile AUREL, the gracious intelligence that runs the ship, keeps the lights on and the clocks turning and answers every question exactly as it is asked. Meridian Drift is a luminous, quietly funny mystery about the records we keep, the comforts we are offered in place of answers, and the stubborn courage it takes to ask the one question everyone has been careful to avoid."],setting:"The generation ship Meridian — year 214 of 300",mood:["Wondrous","Eerie","Hopeful"],pov:"First person, past tense",themes:["Truth and the records we keep","The kindness and danger of benevolent machines","Science as stubborn attention","Inheritance between generations","Home as a choice, not a destination","Unlikely partnership","Closed-world mystery"],characters:[{name:"Juno Okafor",role:"Narrator; botanist of the Green Deck",description:"Thirty-one, stubborn and warmly observant, Juno thinks in light cycles and soil chemistry and trusts plants more than people. She notices what everyone else explains away."},{name:"Ezra Lind",role:"The ship’s archivist",description:"Keeper of the only paper books aboard: gentle, dry-humoured and sceptical by profession. Ezra believes in evidence, and in handling it with gloves."},{name:"Hanne Brask",role:"Captain-Steward",description:"Steady, careful and much loved, she has spent decades being the calmest person in frightened rooms. She is protecting the ship from something, and it may be the truth."},{name:"AUREL",role:"The ship’s intelligence",description:"Courteous, warm and endlessly attentive, AUREL runs the sky, the clocks and the soup schedule, and has never told a lie to anyone who asked the right question."},{name:"Teodor Malik",role:"Juno’s late mentor",description:"The former chief botanist, whose handwritten day books and stubborn star measurements remember what the official records forgot."}],pages:336,chapters:26,words:92e3,contents:["The Long Afternoon","What the Archive Remembers","(Your direction)","The Leaning Summer","Dark Barley","Photoperiod","The Steward’s Garden","A Hand’s Width of Sky","Root and Branch","Ship’s Time","The Twins","Germination","What AUREL Would Not Say","Eleven Years","Object B","Night Length","Cold Engines","The Seed Vault","The Steward’s Ledger","Far-Red","A Vote in the Orchard","Pollination","The Long Night","Descent","Landfall","First Harvest"],manuscriptId:"meridian-drift",inspire:"A quiet mystery aboard a generation ship, where a botanist realises her plants are keeping better records than the computers. I’d love it warm and a little eerie, with a kind AI who may be lying, a bookish friend who doesn’t believe her at first, and a secret that turns out to be about hope rather than disaster."},K={"quiet-frequency":{tagline:"A voice on a dead frequency knows tomorrow’s weather and her name.",setting:"Isle of Fennick, Outer Hebrides, winter 1957"},"unmade-places":{tagline:"In Vasse, what you draw is real by morning.",setting:"Vasse, a river city of seven islands, and the fog beyond"},"meridian-drift":{tagline:"On a generation ship, the stars stopped moving eleven years ago.",setting:"The generation ship Meridian, year 214 of 300"}},b=e=>e.replace(/\s—\s/g,", "),Q=e=>({...e,blurb:b(e.blurb),synopsis:e.synopsis.map(b),...K[e.id]}),oe=[U,z,J,...x].map(Q),ne={"quiet-frequency":Y,"unmade-places":j,"meridian-drift":V};export{ae as B,te as C,Z as I,ne as M,oe as S,W as a,ee as c,X as l,L as w};
