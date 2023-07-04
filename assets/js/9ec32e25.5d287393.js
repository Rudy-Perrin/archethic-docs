"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));n(8209);const i={id:"fee",title:"Transaction fee"},o=void 0,l={unversionedId:"learn/fee",id:"learn/fee",title:"Transaction fee",description:"Archethic Blockchain is using specific heuristic algorithms to ensure the best transaction's distribution.",source:"@site/docs/learn/fee.md",sourceDirName:"learn",slug:"/learn/fee",permalink:"/learn/fee",draft:!1,tags:[],version:"current",lastUpdatedAt:1688503773,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{id:"fee",title:"Transaction fee"},sidebar:"docs",previous:{title:"Keychain",permalink:"/learn/decentralized-id/keychain"},next:{title:"Governance",permalink:"/learn/governance/"}},s={},c=[{value:"Calculation",id:"calculation",level:2},{value:"Transaction&#39;s type particularities",id:"transactions-type-particularities",level:2},{value:"Network",id:"network",level:3},{value:"Keychain",id:"keychain",level:3},{value:"Token",id:"token",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Archethic Blockchain is using specific heuristic algorithms to ensure the best transaction's distribution."),(0,r.kt)("p",null,"The fees are calculated according to the real costs of the network (size, complexity) and is based on a minimal fee ($0.01) indexed to the real UCO's price (using ",(0,r.kt)("a",{parentName:"p",href:"/learn/oracle-chain"},"Oracle Chain"),")"),(0,r.kt)("p",null,"During the transaction validation, the entire fee is burned to make the UCO more rare.\nThis programmable destruction of the UCO ensures a deflation and increases the value of each token."),(0,r.kt)("p",null,"This way a fair reward mechanism is put in place for nodes regarding their work and their availability."),(0,r.kt)("h2",{id:"calculation"},"Calculation"),(0,r.kt)("p",null,"The transaction's fee computation is based on some properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Minimum fee: ",(0,r.kt)("em",{parentName:"li"},"$0.01 of the current UCO price")),(0,r.kt)("li",{parentName:"ul"},"Number of recipient (for transfers or smart contractcalls)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1: no more additional fee "),(0,r.kt)("li",{parentName:"ul"},">"," 1: each additional recipient will have an additional cost of $0.1 UCO(",(0,r.kt)("em",{parentName:"li"},"Because sending transaction to multiple leverages more resources in term of network and storage, as the transaction must be replicated in all the chain targets"),")"))),(0,r.kt)("li",{parentName:"ul"},"Size of the transaction: each stored byte will cost 10",(0,r.kt)("sup",null,"-8")," of the current UCO's price"),(0,r.kt)("li",{parentName:"ul"},"Number of replicas"),(0,r.kt)("li",{parentName:"ul"},"Complexity of the smart contract (Coming soon)")),(0,r.kt)("p",null,"Overall formula:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Transaction Fee = minimum_fee + fee_for_storage(size * nb_replicas) + fee_for_complexity + cost_per_recipient\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Regular transfer of UCO to single person would cost around ~$0.01 (+/- additional information + nb of replicas)")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The $0.01 cost is static only as minimum fee for any transaction.\nDepending on the number of recipients, size, etc. the fee will increase, as it requires more work for the network")),(0,r.kt)("h2",{id:"transactions-type-particularities"},"Transaction's type particularities"),(0,r.kt)("h3",{id:"network"},"Network"),(0,r.kt)("p",null,"All the transactions with a transaction's type such as ",(0,r.kt)("inlineCode",{parentName:"p"},"node"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"node shared secrets"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"oracle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"beacon chain"),", etc. don't cost fee, as their intent is only for network management."),(0,r.kt)("h3",{id:"keychain"},"Keychain"),(0,r.kt)("p",null,"Transactions to manage keychain for creation, updates or add new access don't cost fee, as this will be blockage to the adoption and there are just meant to ease the wallet management."),(0,r.kt)("h3",{id:"token"},"Token"),(0,r.kt)("p",null,"Archethic supports a token mining through a given type of transaction ",(0,r.kt)("inlineCode",{parentName:"p"},"token"),".\nBecause during this step validation nodes have to perform some additional work to create new unspent transaction outputs (UTXOs) and deliver them (if multiple - for example in a collection creation)."),(0,r.kt)("p",null,"Hence an additional fee is computed based on the number of UTXO to create."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fungible tokens: there will only cost the minimum fee: $0.01 - as it's like doing some UCO transfer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Non fungible tokens: These are tokens which each collection item have some unique properties and well identified. So a list of UTXO is created for each unique collection items. This creation will consume resources of computation, networking and storage."))),(0,r.kt)("p",null,"An additional fee is determined in that case through the following formula: "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"(log10(number of utxos) + 1) * number of utxos * minimum fee")),(0,r.kt)("p",null,"So the transaction fee will gradually increase according of the number of unique token to create (= new UTXO)"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7626).Z,width:"811",height:"502"})))}d.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nft_additional_fee-8c6d24177afeea4eba9d662d63304901.svg"},8209:(e,t,n)=>{n(7294)}}]);