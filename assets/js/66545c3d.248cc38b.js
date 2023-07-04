"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,u=p["".concat(i,".").concat(m)]||p[m]||k[m]||l;return n?o.createElement(u,r(r({ref:t},d),{},{components:n})):o.createElement(u,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<l;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3321:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>k,assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(7462),a=n(7294),l=n(3905);n(8209);const r={id:"token",title:"Token",hide_table_of_contents:!1},s=void 0,i={unversionedId:"build/api/schema/objects/token",id:"build/api/schema/objects/token",title:"Token",description:"[token] represents a token metadata.",source:"@site/docs/build/api/schema/objects/token.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/token",permalink:"/build/api/schema/objects/token",draft:!1,tags:[],version:"current",lastUpdatedAt:1688503773,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{id:"token",title:"Token",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"TokenTransfer",permalink:"/build/api/schema/objects/token-transfer"},next:{title:"TransactionAttestation",permalink:"/build/api/schema/objects/transaction-attestation"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>collection</b></code><Bullet /><code>[TokenProperties]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbcollectionbcodetokenproperties--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>decimals</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbdecimalsbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>genesis</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbgenesisbcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>id</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>ownerships</b></code><Bullet /><code>[Ownership]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-tokenbownershipsbcodeownership--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>properties</b></code><Bullet /><code>TokenProperties</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbpropertiesbcodetokenproperties-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>supply</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbsupplybcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>symbol</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbsymbolbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>type</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbtypebcodestring-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),k=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:d,Bullet:p,SpecifiedBy:k,Badge:m},y="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(y,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"[token]"," represents a token metadata.\nIt includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"genesis: Genesis address to the token"),(0,l.kt)("li",{parentName:"ul"},"name: Name of the token"),(0,l.kt)("li",{parentName:"ul"},"symbol: Symbol of the token"),(0,l.kt)("li",{parentName:"ul"},"supply: Supply of the token"),(0,l.kt)("li",{parentName:"ul"},"type: Type of the token"),(0,l.kt)("li",{parentName:"ul"},"decimals: Number of decimals of the token"),(0,l.kt)("li",{parentName:"ul"},"properties: Properties of the token (if any)"),(0,l.kt)("li",{parentName:"ul"},"collection: List of properties for a collection (if any)"),(0,l.kt)("li",{parentName:"ul"},"ownerships: authorization/delegations containing list of secrets and their authorized public keys to proof the ownership"),(0,l.kt)("li",{parentName:"ul"},"id: Unique identification of the token on the chain")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Token {\n  collection: [TokenProperties]\n  decimals: Int\n  genesis: Address\n  id: String\n  name: String\n  ownerships: [Ownership]\n  properties: TokenProperties\n  supply: Int\n  symbol: String\n  type: String\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbcollectionbcodetokenproperties--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"collection"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/token-properties"},(0,l.kt)("inlineCode",{parentName:"a"},"[TokenProperties]"))," ",(0,l.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbdecimalsbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"decimals"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbgenesisbcodeaddress-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"genesis"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,l.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbidbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"id"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"name"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbownershipsbcodeownership--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"ownerships"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/ownership"},(0,l.kt)("inlineCode",{parentName:"a"},"[Ownership]"))," ",(0,l.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbpropertiesbcodetokenproperties-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"properties"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/token-properties"},(0,l.kt)("inlineCode",{parentName:"a"},"TokenProperties"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbsupplybcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"supply"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbsymbolbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"symbol"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbtypebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"type"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/queries/token"},(0,l.kt)("inlineCode",{parentName:"a"},"token")),"  ",(0,l.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"})))}b.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);