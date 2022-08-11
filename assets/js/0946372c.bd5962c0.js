"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),h=r,m=s["".concat(d,".").concat(h)]||s[h]||p[h]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},43631:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={id:"account",title:"Account"},i=void 0,o={unversionedId:"build/core/account",id:"build/core/account",title:"Account",description:"Archethic node provides a high level and fast access to an account assets using primarily memory tables with ETS.",source:"@site/docs/build/core/account.md",sourceDirName:"build/core",slug:"/build/core/account",permalink:"/archethic-docs/build/core/account",tags:[],version:"current",lastUpdatedAt:1660208052,formattedLastUpdatedAt:"8/11/2022",frontMatter:{id:"account",title:"Account"},sidebar:"docs",previous:{title:"Transaction context retrieval",permalink:"/archethic-docs/build/core/mining/transaction-context"},next:{title:"Bootstrap",permalink:"/archethic-docs/build/core/bootstrap"}},d=[{value:"UCO",id:"uco",children:[{value:"Ledger",id:"ledger",children:[],level:3},{value:"Index",id:"index",children:[],level:3}],level:2},{value:"Token",id:"token",children:[{value:"Ledger",id:"ledger-1",children:[],level:3},{value:"Index",id:"index-1",children:[],level:3}],level:2},{value:"Loading",id:"loading",children:[],level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Archethic node provides a high level and fast access to an account assets using primarily memory tables with ETS."),(0,r.kt)("p",null,"This gives us faster computation and data retrieval to asserts balances and UTXO loading."),(0,r.kt)("h2",{id:"uco"},"UCO"),(0,r.kt)("p",null,"A memory table is defined to list of the UCO available for a given address"),(0,r.kt)("p",null,"Few functions are provided to be able to query this table in order to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get the UCO balance "),(0,r.kt)("li",{parentName:"ul"},"get the UTXOs"),(0,r.kt)("li",{parentName:"ul"},"get the total inputs (spent and unspent)"),(0,r.kt)("li",{parentName:"ul"},"spend all the UTXOs"),(0,r.kt)("li",{parentName:"ul"},"add new UCO UTXO")),(0,r.kt)("h3",{id:"ledger"},"Ledger"),(0,r.kt)("p",null,"Each entry is indexed by a tuple recipient/sender  to identify uniquely an UTXO"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Recipient, Sender"),(0,r.kt)("th",{parentName:"tr",align:null},"Amount"),(0,r.kt)("th",{parentName:"tr",align:null},"Spent ?"),(0,r.kt)("th",{parentName:"tr",align:null},"Date")))),(0,r.kt)("h3",{id:"index"},"Index"),(0,r.kt)("p",null,"An index table is provided to be able to retrieve all the sender UTXOs for a given recipient"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Recipient"),(0,r.kt)("th",{parentName:"tr",align:null},"Sender")))),(0,r.kt)("h2",{id:"token"},"Token"),(0,r.kt)("p",null,"A memory table is defined to list al the token available for a given address"),(0,r.kt)("p",null,"Few functions are provided to be able to query this table in order to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get the token balance s"),(0,r.kt)("li",{parentName:"ul"},"get the UTXOs"),(0,r.kt)("li",{parentName:"ul"},"get the total inputs (spent and unspent)"),(0,r.kt)("li",{parentName:"ul"},"spend all the UTXOs"),(0,r.kt)("li",{parentName:"ul"},"add new token UTXO")),(0,r.kt)("h3",{id:"ledger-1"},"Ledger"),(0,r.kt)("p",null,"Each entry is indexed by a tuple recipient/sender/token address  to identify uniquely an UTXO"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Recipient, Sender, Token"),(0,r.kt)("th",{parentName:"tr",align:null},"Amount"),(0,r.kt)("th",{parentName:"tr",align:null},"Spent ?"),(0,r.kt)("th",{parentName:"tr",align:null},"Date")))),(0,r.kt)("h3",{id:"index-1"},"Index"),(0,r.kt)("p",null,"An index table is provided to be able to retrieve all the sender UTXOs for a given recipient"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Recipient"),(0,r.kt)("th",{parentName:"tr",align:null},"Sender"),(0,r.kt)("th",{parentName:"tr",align:null},"Token address")))),(0,r.kt)("h2",{id:"loading"},"Loading"),(0,r.kt)("p",null,"When a transaction replicated, the storage nodes in charge of storing the new transaction (chain replicas or recipient replicas) will load the transaction in those tables to index the UTXO and build in memory view."),(0,r.kt)("p",null,"The same goes when a node is bootstraping, a process will load all the transactions from the database to load them  into those tables."))}u.isMDXComponent=!0}}]);