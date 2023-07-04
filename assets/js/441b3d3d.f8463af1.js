"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2488],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));r(8209);const i={id:"ledger-wallet",title:"Ledger wallet"},l="Introduction",o={unversionedId:"build/clients/ledger-wallet/ledger-wallet",id:"build/clients/ledger-wallet/ledger-wallet",title:"Ledger wallet",description:"A blockchain or crypto wallet is a way to manage, secure, and use cryptocurrencies such as UCO, Bitcoin, Ethereum and other digital assets based on a blockchain (for example, an NFT). There are two basic types of blockchain wallets: software wallets and hardware wallets.",source:"@site/docs/build/clients/ledger-wallet/README.md",sourceDirName:"build/clients/ledger-wallet",slug:"/build/clients/ledger-wallet/",permalink:"/build/clients/ledger-wallet/",draft:!1,tags:[],version:"current",lastUpdatedAt:1688503773,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{id:"ledger-wallet",title:"Ledger wallet"},sidebar:"docs",previous:{title:"Clients",permalink:"/category/clients"},next:{title:"Ledger Application API",permalink:"/build/clients/ledger-wallet/api"}},s={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Instructions",id:"installation-instructions",level:2},{value:"Testing",id:"testing",level:2},{value:"Demo",id:"demo",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"A blockchain or crypto wallet is a way to manage, secure, and use cryptocurrencies such as UCO, Bitcoin, Ethereum and other digital assets based on a blockchain (for example, an NFT). There are two basic types of blockchain wallets: software wallets and hardware wallets."),(0,a.kt)("p",null,"Types of software wallets include web (or crypto exchange) wallets, mobile wallets, and desktop wallets. A hardware wallet is a physical device that secures access to your cryptos offline (",(0,a.kt)("a",{parentName:"p",href:"https://www.fool.com/investing/stock-market/market-sectors/financials/blockchain-stocks/blockchain-wallet/#:~:text=There%20are%20two%20basic%20types,access%20to%20your%20cryptos%20offline."},"source"),"). This guide explains interaction and testing of hardware wallet, specifically the Ledger Device (Nano S) with archethic testnet."),(0,a.kt)("p",null,"A Ledger Device is a hardware root of trust based wallet that is considered one of the most secure ways to store your digital assets. Ledger uses an offline, or cold storage, method of generating private keys, making it a preferred method for many crypto users. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/hlFqBsS.png",alt:null})),(0,a.kt)("p",null,"As given in the figure, there are 3 important components in order to support ledger device for a given blockchain."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Bolos Application\nThis application is written in C and resides on the physical Ledger device. For Archethic's blockchain, this can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-ledger"},"Archethic's github")," and the functional documentation for the app can be found on the official ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-docs/blob/docusaurus/development/wallets/hardware/ledger/archethic_bolos_app.md"},"docs repository"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Companion App\nThis is the application which acts like a bridge of communication between user/blockchain and the Bolos application mentioned above. For Archethic's blockchain, this is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/ledger-cli-app"},"ALCA (CLI)")," and Flutter based ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic_wallet"},"Wallet (GUI)"),".\n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Remote backend\nThis is the node which accepts data (signed transactions) from the Companion app mentioned above in order to include it into the blockchain. For Archethic's blockchain, it is the testnet node. Once transaction is published, the data can be verified on ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.archethic.net/explorer"},"archethic.net"),"."))),(0,a.kt)("h2",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"This guide will help you to connect your Ledger device to ALCA, dedicated Command Line Interface (CLI). ALCA (Archethic Ledger CLI App) enables you to Send and Receive UCOs on Archethic Testnet with the Ledger Device."),(0,a.kt)("p",null,"Soon, ALCA will be replaced by Archethic's Wallet, which is GUI-based, thus enabling non-tech users to experiment with Archethic's testnet."),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("p",{parentName:"admonition"},"This is a developer guide and not for general public. This guide assumes the reader has a prior knowledge of ArchEthic and Ledger Ecosystem.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A more general public guide will soon be released once security audit for developer release is done and GUI support for Ledger Device is added to current Archethic's Wallet (Mobile + Desktop)")),(0,a.kt)("p",null,"Before You Start, Make Sure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You\u2019ve ",(0,a.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360000613793?docs=true"},"initialized")," your Ledger Device."),(0,a.kt)("li",{parentName:"ul"},"The latest firmware is ",(0,a.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360002731113?docs=true"},"installed")," (Ledger Nano S)."),(0,a.kt)("li",{parentName:"ul"},"Archethic Bolos App is ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/archethic-foundation/archethic-ledger"},"loaded")," on Ledger (Tested with Nano S only)."),(0,a.kt)("li",{parentName:"ul"},"Install the latest version of ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/archethic-foundation/ledger-cli-app"},"ALCA"),"."),(0,a.kt)("li",{parentName:"ul"},"Nodejs (v14.0+)")),(0,a.kt)("h2",{id:"installation-instructions"},"Installation Instructions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clone the repository from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/archethic-foundation/ledger-cli-app.git"},"github")),(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install")," from root folder of the project"),(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm link")),(0,a.kt)("li",{parentName:"ul"},"Use it as ledger_cli (commands)")),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"From Terminal use it as ",(0,a.kt)("inlineCode",{parentName:"p"},"ledger_cli (about | getAppVersion | getPublicKey | getArchAddress | sendTxn)")),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)("p",null,"The demo shows various screens a user will be shown for getting origin public key, onchain wallet address and performing signature on transaction involving single UCO transfer at a time between 2 parties."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/gk8Q9Ku.gif",alt:null})))}u.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);