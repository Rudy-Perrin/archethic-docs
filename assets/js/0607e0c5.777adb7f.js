"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(b,l(l({ref:t},d),{},{components:n})):r.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},759:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(7462),o=n(7294),a=n(3905);n(8209);const l={id:"version",title:"Version",hide_table_of_contents:!1},i=void 0,s={unversionedId:"build/api/schema/objects/version",id:"build/api/schema/objects/version",title:"Version",description:"[Version] represents code, transaction and protocol version",source:"@site/docs/build/api/schema/objects/version.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/version",permalink:"/build/api/schema/objects/version",draft:!1,tags:[],version:"current",lastUpdatedAt:1699828423,formattedLastUpdatedAt:"Nov 12, 2023",frontMatter:{id:"version",title:"Version",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"ValidationStamp",permalink:"/build/api/schema/objects/validation-stamp"},next:{title:"balance",permalink:"/build/api/schema/queries/balance"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Version.<b>code</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-versionbcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Version.<b>protocol</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-versionbprotocolbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Version.<b>transaction</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-versionbtransactionbcodestring-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),b={toc:d,Bullet:p,SpecifiedBy:u,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[Version]"," represents code, transaction and protocol version"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Version {\n  code: String\n  protocol: String\n  transaction: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-versionbcodebcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"Version.",(0,a.kt)("b",null,"code"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-versionbprotocolbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"Version.",(0,a.kt)("b",null,"protocol"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-versionbtransactionbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"Version.",(0,a.kt)("b",null,"transaction"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"returned-by"},"Returned by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/build/api/schema/queries/version"},(0,a.kt)("inlineCode",{parentName:"a"},"version")),"  ",(0,a.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"})))}y.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);