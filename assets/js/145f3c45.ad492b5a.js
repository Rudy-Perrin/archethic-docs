"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(b,l(l({ref:t},d),{},{components:n})):a.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1962:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(7462),r=n(7294),o=n(3905);n(8209);const l={id:"transaction-input",title:"TransactionInput",hide_table_of_contents:!1},s=void 0,i={unversionedId:"build/api/schema/objects/transaction-input",id:"build/api/schema/objects/transaction-input",title:"TransactionInput",description:"[TransactionInput] represents the inputs from the transaction",source:"@site/docs/build/api/schema/objects/transaction-input.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/transaction-input",permalink:"/build/api/schema/objects/transaction-input",draft:!1,tags:[],version:"current",lastUpdatedAt:1688503773,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{id:"transaction-input",title:"TransactionInput",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"TransactionError",permalink:"/build/api/schema/objects/transaction-error"},next:{title:"TransactionMovement",permalink:"/build/api/schema/objects/transaction-movement"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionInput.<b>amount</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputbamountbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionInput.<b>from</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputbfrombcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionInput.<b>spent</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputbspentbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionInput.<b>timestamp</b></code><Bullet /><code>Timestamp</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputbtimestampbcodetimestamp-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionInput.<b>tokenAddress</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputbtokenaddressbcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionInput.<b>tokenId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputbtokenidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionInput.<b>type</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputbtypebcodestring-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),b={toc:d,Bullet:p,SpecifiedBy:u,Badge:m},k="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[TransactionInput]"," represents the inputs from the transaction\nIt includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"From: transaction which send the amount of assets"),(0,o.kt)("li",{parentName:"ul"},"Amount: asset amount"),(0,o.kt)("li",{parentName:"ul"},"Type: UCO/token/Call"),(0,o.kt)("li",{parentName:"ul"},"token address: address of the token if the type is token"),(0,o.kt)("li",{parentName:"ul"},"Spent: determines if the input has been spent"),(0,o.kt)("li",{parentName:"ul"},"Timestamp: Date time when the inputs was generated"),(0,o.kt)("li",{parentName:"ul"},"token id: It is the id for a token which is allocated when the token is minted.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TransactionInput {\n  amount: Int\n  from: Address\n  spent: Boolean\n  timestamp: Timestamp\n  tokenAddress: Address\n  tokenId: Int\n  type: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transactioninputbamountbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TransactionInput.",(0,o.kt)("b",null,"amount"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transactioninputbfrombcodeaddress-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TransactionInput.",(0,o.kt)("b",null,"from"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,o.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transactioninputbspentbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TransactionInput.",(0,o.kt)("b",null,"spent"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transactioninputbtimestampbcodetimestamp-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TransactionInput.",(0,o.kt)("b",null,"timestamp"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/timestamp"},(0,o.kt)("inlineCode",{parentName:"a"},"Timestamp"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transactioninputbtokenaddressbcodeaddress-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TransactionInput.",(0,o.kt)("b",null,"tokenAddress"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,o.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transactioninputbtokenidbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TransactionInput.",(0,o.kt)("b",null,"tokenId"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transactioninputbtypebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TransactionInput.",(0,o.kt)("b",null,"type"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/queries/transaction-inputs"},(0,o.kt)("inlineCode",{parentName:"a"},"transactionInputs")),"  ",(0,o.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);