"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6697],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var l=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,l,o=function(e,t){if(null==e)return{};var a,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=l.createContext({}),i=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=i(e.components);return l.createElement(c.Provider,{value:t},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),b=i(a),u=o,p=b["".concat(c,".").concat(u)]||b[u]||m[u]||n;return a?l.createElement(p,r(r({ref:t},s),{},{components:a})):l.createElement(p,r({ref:t},s))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[b]="string"==typeof e?e:o,r[1]=d;for(var i=2;i<n;i++)r[i]=a[i];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6705:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>b,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var l=a(7462),o=a(7294),n=a(3905);a(8209);const r={id:"node",title:"Node",hide_table_of_contents:!1},d=void 0,c={unversionedId:"build/api/schema/objects/node",id:"build/api/schema/objects/node",title:"Node",description:"[Node] represents a node in the network",source:"@site/docs/build/api/schema/objects/node.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/node",permalink:"/build/api/schema/objects/node",draft:!1,tags:[],version:"current",lastUpdatedAt:1688503773,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{id:"node",title:"Node",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Ledger",permalink:"/build/api/schema/objects/ledger"},next:{title:"OracleData",permalink:"/build/api/schema/objects/oracle-data"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Node.<b>authorizationDate</b></code><Bullet /><code>Timestamp</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-nodebauthorizationdatebcodetimestamp-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Node.<b>authorized</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-nodebauthorizedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Node.<b>available</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-nodebavailablebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Node.<b>averageAvailability</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-nodebaverageavailabilitybcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Node.<b>enrollmentDate</b></code><Bullet /><code>Timestamp</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-nodebenrollmentdatebcodetimestamp-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Node.<b>firstPublicKey</b></code><Bullet /><code>PublicKey</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-nodebfirstpublickeybcodepublickey-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Node.<b>geoPatch</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-nodebgeopatchbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Node.<b>ip</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-nodebipbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Node.<b>lastPublicKey</b></code><Bullet /><code>PublicKey</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-nodeblastpublickeybcodepublickey-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Node.<b>networkPatch</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-nodebnetworkpatchbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Node.<b>originPublicKey</b></code><Bullet /><code>PublicKey</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-nodeboriginpublickeybcodepublickey-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Node.<b>port</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-nodebportbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Node.<b>rewardAddress</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-nodebrewardaddressbcodeaddress-",level:4},{value:"Returned by",id:"returned-by",level:3}],b=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),p={toc:s,Bullet:b,SpecifiedBy:m,Badge:u},y="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(y,(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"[Node]"," represents a node in the network"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type Node {\n  authorizationDate: Timestamp\n  authorized: Boolean\n  available: Boolean\n  averageAvailability: Float\n  enrollmentDate: Timestamp\n  firstPublicKey: PublicKey\n  geoPatch: String\n  ip: String\n  lastPublicKey: PublicKey\n  networkPatch: String\n  originPublicKey: PublicKey\n  port: Int\n  rewardAddress: Address\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nodebauthorizationdatebcodetimestamp-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Node.",(0,n.kt)("b",null,"authorizationDate"))),(0,n.kt)(b,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/timestamp"},(0,n.kt)("inlineCode",{parentName:"a"},"Timestamp"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nodebauthorizedbcodeboolean-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Node.",(0,n.kt)("b",null,"authorized"))),(0,n.kt)(b,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nodebavailablebcodeboolean-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Node.",(0,n.kt)("b",null,"available"))),(0,n.kt)(b,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nodebaverageavailabilitybcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Node.",(0,n.kt)("b",null,"averageAvailability"))),(0,n.kt)(b,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nodebenrollmentdatebcodetimestamp-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Node.",(0,n.kt)("b",null,"enrollmentDate"))),(0,n.kt)(b,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/timestamp"},(0,n.kt)("inlineCode",{parentName:"a"},"Timestamp"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nodebfirstpublickeybcodepublickey-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Node.",(0,n.kt)("b",null,"firstPublicKey"))),(0,n.kt)(b,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/public-key"},(0,n.kt)("inlineCode",{parentName:"a"},"PublicKey"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nodebgeopatchbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Node.",(0,n.kt)("b",null,"geoPatch"))),(0,n.kt)(b,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nodebipbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Node.",(0,n.kt)("b",null,"ip"))),(0,n.kt)(b,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nodeblastpublickeybcodepublickey-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Node.",(0,n.kt)("b",null,"lastPublicKey"))),(0,n.kt)(b,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/public-key"},(0,n.kt)("inlineCode",{parentName:"a"},"PublicKey"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nodebnetworkpatchbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Node.",(0,n.kt)("b",null,"networkPatch"))),(0,n.kt)(b,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nodeboriginpublickeybcodepublickey-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Node.",(0,n.kt)("b",null,"originPublicKey"))),(0,n.kt)(b,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/public-key"},(0,n.kt)("inlineCode",{parentName:"a"},"PublicKey"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nodebportbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Node.",(0,n.kt)("b",null,"port"))),(0,n.kt)(b,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nodebrewardaddressbcodeaddress-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Node.",(0,n.kt)("b",null,"rewardAddress"))),(0,n.kt)(b,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,n.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/build/api/schema/queries/nodes"},(0,n.kt)("inlineCode",{parentName:"a"},"nodes")),"  ",(0,n.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"})))}h.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);