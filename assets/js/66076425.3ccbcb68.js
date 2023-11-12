"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3168],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,y=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return a?r.createElement(y,s(s({ref:t},c),{},{components:a})):r.createElement(y,s({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5712:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=a(7462),n=a(7294),i=a(3905);a(8209);const s={id:"timestamp",title:"Timestamp",hide_table_of_contents:!1},o=void 0,l={unversionedId:"build/api/schema/scalars/timestamp",id:"build/api/schema/scalars/timestamp",title:"Timestamp",description:"The [Timestamp] scalar type represents a UNIX timestamp in seconds",source:"@site/docs/build/api/schema/scalars/timestamp.mdx",sourceDirName:"build/api/schema/scalars",slug:"/build/api/schema/scalars/timestamp",permalink:"/build/api/schema/scalars/timestamp",draft:!1,tags:[],version:"current",lastUpdatedAt:1699828423,formattedLastUpdatedAt:"Nov 12, 2023",frontMatter:{id:"timestamp",title:"Timestamp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"String",permalink:"/build/api/schema/scalars/string"},next:{title:"TokenProperties",permalink:"/build/api/schema/scalars/token-properties"}},p={},c=[{value:"Member of",id:"member-of",level:3}],m=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:c,Bullet:m,SpecifiedBy:d,Badge:u},f="wrapper";function b(e){let{components:t,...a}=e;return(0,i.kt)(f,(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ","[Timestamp]"," scalar type represents a UNIX timestamp in seconds"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Timestamp\n")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/build/api/schema/objects/beacon-chain-summary"},(0,i.kt)("inlineCode",{parentName:"a"},"BeaconChainSummary")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/build/api/schema/queries/beacon-chain-summary"},(0,i.kt)("inlineCode",{parentName:"a"},"beaconChainSummary")),"  ",(0,i.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/build/api/schema/objects/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/build/api/schema/objects/oracle-data"},(0,i.kt)("inlineCode",{parentName:"a"},"OracleData")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/build/api/schema/queries/oracle-data"},(0,i.kt)("inlineCode",{parentName:"a"},"oracleData")),"  ",(0,i.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction-input"},(0,i.kt)("inlineCode",{parentName:"a"},"TransactionInput")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction-summary"},(0,i.kt)("inlineCode",{parentName:"a"},"TransactionSummary")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/build/api/schema/objects/unspent-output"},(0,i.kt)("inlineCode",{parentName:"a"},"UnspentOutput")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/build/api/schema/objects/validation-stamp"},(0,i.kt)("inlineCode",{parentName:"a"},"ValidationStamp")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);