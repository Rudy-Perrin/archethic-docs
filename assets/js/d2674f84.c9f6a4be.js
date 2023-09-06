"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));n(8209);const o={id:"actions",title:"Smart Contracts - Actions block",sidebar_label:"Actions",sidebar_position:3},i=void 0,s={unversionedId:"build/smart-contracts/language/actions",id:"build/smart-contracts/language/actions",title:"Smart Contracts - Actions block",description:"The actions block is the code executed when the associated trigger is triggered.",source:"@site/docs/build/smart-contracts/language/actions.md",sourceDirName:"build/smart-contracts/language",slug:"/build/smart-contracts/language/actions",permalink:"/build/smart-contracts/language/actions",draft:!1,tags:[],version:"current",lastUpdatedAt:1694010372,formattedLastUpdatedAt:"Sep 6, 2023",sidebarPosition:3,frontMatter:{id:"actions",title:"Smart Contracts - Actions block",sidebar_label:"Actions",sidebar_position:3},sidebar:"docs",previous:{title:"Condition",permalink:"/build/smart-contracts/language/condition"},next:{title:"Library",permalink:"/build/smart-contracts/language/library"}},l={},c=[{value:"Global variables",id:"global-variables",level:2},{value:"contract",id:"contract",level:4},{value:"transaction",id:"transaction",level:4},{value:"Named action arguments",id:"named-action-arguments",level:2},{value:"Generating the next transaction",id:"generating-the-next-transaction",level:2},{value:"Appendix 1: The transaction map",id:"appendix-1-the-transaction-map",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," block is the code executed when the associated ",(0,r.kt)("a",{parentName:"p",href:"/build/smart-contracts/language/triggers"},"trigger")," is triggered."),(0,r.kt)("h2",{id:"global-variables"},"Global variables"),(0,r.kt)("p",null,"Depending on the trigger, there are different global variables accessible."),(0,r.kt)("h4",{id:"contract"},"contract"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"contract")," variable is a map of the current contract's transaction. See ",(0,r.kt)("a",{parentName:"p",href:"#appendix-1-the-transaction-map"},"Appendix 1"),"."),(0,r.kt)("h4",{id:"transaction"},"transaction"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction")," variable is a map of the transaction that triggered the ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," block. See ",(0,r.kt)("a",{parentName:"p",href:"#appendix-1-the-transaction-map"},"Appendix 1"),". ",(0,r.kt)("strong",{parentName:"p"},"It is only available when the trigger is a transaction or an oracle"),"."),(0,r.kt)("h2",{id:"named-action-arguments"},"Named action arguments"),(0,r.kt)("p",null,"In the case of named action trigger, arguments sent by the callers are provided to the action block as variables.\nBe careful not to rebind them inadvertedly. Do not use any of the ",(0,r.kt)("a",{parentName:"p",href:"/build/smart-contracts/language/#reserved-keywords"},"reserved keywords")," as parameter."),(0,r.kt)("admonition",{title:"Argument VS Parameter",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A parameter is a variable in a function definition. It is a placeholder and hence does not have a concrete value. An argument is a value passed during function invocation. In a way, arguments fill in the place the parameters have held for them.\nSource: ",(0,r.kt)("a",{parentName:"p",href:"https://www.educative.io/answers/parameter-vs-argument"},"https://www.educative.io/answers/parameter-vs-argument"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'actions trigger_by: transaction, on: vote(firstname, lastname) do\n    full_name = String.to_lowercase("#{firstname} #{lastname}")\n    ...\nend\n')),(0,r.kt)("h2",{id:"generating-the-next-transaction"},"Generating the next transaction"),(0,r.kt)("p",null,"The main goal of the action block is to generate a new transaction in the smart contract chain.\nTo do so, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/build/smart-contracts/language/library#contract"},"Contract")," module that allows to set the transaction field value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'# Set uco ATH in content\nactions triggered_by: oracle do\n    current_ath = String.to_number(contract.content)\n    new_price = Json.path_extract(transaction.content, "$.uco.usd")\n\n    if new_price > current_ath do\n        Contract.set_content(new_price)\n    end\nend\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that there are 3 fields that are preset before executing the action code."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},'type: set to "contract" by default'),(0,r.kt)("li",{parentName:"ul"},"code: set with the previous contract code"),(0,r.kt)("li",{parentName:"ul"},"ownerships: set with the previous contract ownerships")),(0,r.kt)("p",{parentName:"admonition"},"So you don't need to set the type, the code and the ownerships each time you generate a new transaction.")),(0,r.kt)("h2",{id:"appendix-1-the-transaction-map"},"Appendix 1: The transaction map"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address"),"  is the transaction's address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," is the transaction's type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"content")," is the transaction's content (it's a string that can contain anything, for example a smart contract state)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"code")," is the transaction's code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," is the transaction's validation timestamp"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uco_movements")," is a map of UCO transfers grouped by ",(0,r.kt)("em",{parentName:"li"},"resolved")," address of the transaction.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'["00001ab...": 1, "00001bc...": 2]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"token_movements")," is a map of list of token transfers grouped by ",(0,r.kt)("em",{parentName:"li"},"resolved")," address of the transaction")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'["00001ab...":\n    [\n        [amount: 1, token_address: "0000ab12..." , token_id: 1],\n        [amount: 1, token_address: "0000ab12..." , token_id: 4],\n    ]\n]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uco_transfers")," is a map of UCO transfers grouped by address of the transaction.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'["00001ab...": 1, "00001bc...": 2]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"token_transfers")," is a map of list of token transfers grouped by address of the transaction")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'["00001ab...":\n    [\n        [amount: 1, token_address: "0000ab12..." , token_id: 1],\n        [amount: 1, token_address: "0000ab12..." , token_id: 4],\n    ]\n]\n')),(0,r.kt)("admonition",{title:"Difference between transfers and movements",type:"info"},(0,r.kt)("p",{parentName:"admonition"},'The transfers and movements are almost the same thing. The difference is in the addresses.\nThe addresses of the transfers are "raw" whereas the addresses of the movements are "resolved".'),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"raw address"),": address that was specified on a transfer (usually the genesis but not mandatory)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resolved address"),": address of the latest transaction of the chain (the chain that contains ",(0,r.kt)("inlineCode",{parentName:"li"},"raw address"),")")),(0,r.kt)("p",{parentName:"admonition"},"Here's an example to understand the difference:"),(0,r.kt)("p",{parentName:"admonition"},"This is a UCO transfer to MyAmazingContract. The transfer is usually done on the genesis address (here: ",(0,r.kt)("inlineCode",{parentName:"p"},"0x00abc"),"). But the transfer is actually creating an UTXO on the latest transaction of the chain (here: ",(0,r.kt)("inlineCode",{parentName:"p"},"0x00def"),")."),(0,r.kt)("mermaid",{parentName:"admonition",value:"flowchart LR\n  subgraph MyAmazingContract\n  Tx1((genesis 0x00abc)) --\x3e Tx2[transaction 0x00bcd]\n  Tx2 --\x3e Tx3[transaction 0x00cde]\n  Tx3 --\x3e Tx4[transaction 0x00def]\n  end\n  Transfer-.->|raw|Tx1\n  Transfer-.->|resolved|Tx4"}),(0,r.kt)("p",{parentName:"admonition"},"Thus ",(0,r.kt)("inlineCode",{parentName:"p"},"contract.uco_transfers == [0x00abc: 1]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"contract.uco_movements == [0x00def: 1]"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"In most cases, you'll want to use ",(0,r.kt)("inlineCode",{parentName:"strong"},"movements")," instead of ",(0,r.kt)("inlineCode",{parentName:"strong"},"transfers"),"."))))}m.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);