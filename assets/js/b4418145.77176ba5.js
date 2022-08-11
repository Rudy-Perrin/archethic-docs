"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5855],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(a),u=i,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},45488:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={id:"ledger-wallet",title:"Ledger wallet"},o="Introduction",l={unversionedId:"build/clients/ledger-wallet",id:"build/clients/ledger-wallet",title:"Ledger wallet",description:"A blockchain or crypto wallet is a way to manage, secure, and use cryptocurrencies such as UCO, Bitcoin, Ethereum and other digital assets based on a blockchain (for example, an NFT). There are two basic types of blockchain wallets: software wallets and hardware wallets.",source:"@site/docs/build/clients/ledger-wallet.md",sourceDirName:"build/clients",slug:"/build/clients/ledger-wallet",permalink:"/archethic-docs/build/clients/ledger-wallet",tags:[],version:"current",lastUpdatedAt:1660208052,formattedLastUpdatedAt:"8/11/2022",frontMatter:{id:"ledger-wallet",title:"Ledger wallet"},sidebar:"docs",previous:{title:"Archethic's wallet access",permalink:"/archethic-docs/build/clients/wallet-access"},next:{title:"Ledger Application API",permalink:"/archethic-docs/build/clients/ledger-wallet/api"}},s=[{value:"Synopsis",id:"synopsis",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Installation Instruction",id:"installation-instruction",children:[],level:2},{value:"Testing",id:"testing",children:[],level:2},{value:"Demo",id:"demo",children:[],level:2}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A blockchain or crypto wallet is a way to manage, secure, and use cryptocurrencies such as UCO, Bitcoin, Ethereum and other digital assets based on a blockchain (for example, an NFT). There are two basic types of blockchain wallets: software wallets and hardware wallets."),(0,i.kt)("p",null,"Types of software wallets include web (or crypto exchange) wallets, mobile wallets, and desktop wallets. A hardware wallet is a physical device that secures access to your cryptos offline (",(0,i.kt)("a",{parentName:"p",href:"https://www.fool.com/investing/stock-market/market-sectors/financials/blockchain-stocks/blockchain-wallet/#:~:text=There%20are%20two%20basic%20types,access%20to%20your%20cryptos%20offline."},"source"),"). This guide explains interaction and testing of hardware wallet, specifically the Ledger Device (Nano S) with archethic testnet."),(0,i.kt)("p",null,"A Ledger Device is a hardware root of trust based wallet that is considered one of the most secure ways to store your digital assets. Ledger uses an offline, or cold storage, method of generating private keys, making it a preferred method for many crypto users. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/hlFqBsS.png",alt:null})),(0,i.kt)("p",null,"As given in the figure, there are 3 important components inorder to support ledger device for a given blockchain."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bolos Application\nThis application is written in C and resides on the physical Ledger device. For Archethic's blockchain, this can be found on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-ledger"},"Archethic's github")," and the functional documentation for the app can be found on the official ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-docs/blob/docusaurus/development/wallets/hardware/ledger/archethic_bolos_app.md"},"docs repository"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Companion App\nThis is the application which acts like a bridge of communication between user/blockchain and the Bolos application mentioned above. For Archethic's blockchain, this is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/ledger-cli-app"},"ALCA (CLI)")," and Flutter based ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic_wallet"},"Wallet (GUI)"),".\n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Remote backend\nThis is the node which accepts data (signed transactions) from the Companion app mentioned above inorder to include it into the blockchain. For Archethic's blockchain, it is the testnet node. Once transaction is published, the data can be verified on ",(0,i.kt)("a",{parentName:"p",href:"https://testnet.archethic.net/explorer"},"archethic.net"),"."))),(0,i.kt)("h2",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"This guide will help you to connect your Ledger device to ALCA, dedicated Command Line Interface (CLI). ALCA (Archethic Ledger CLI App) enables you to Send and Receive UCOs on Archethic Testnet with the Ledger Device."),(0,i.kt)("p",null,"Soon, ALCA will be replaced by Archethic's Wallet, which is GUI-based, thus enabling non-tech users to experiment with Archethic's testnet."),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a developer guide and not for general public. This guide assumes the reader has a prior knowledge of ArcEthic and Ledger Ecosystem."))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A more general public guide will soon be released once security audit for developer release is done and GUI support for Ledger Device is added to current Archethic's Wallet (Mobile + Desktop)"))),(0,i.kt)("p",null,"Before You Start, Make Sure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You\u2019ve ",(0,i.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360000613793?docs=true"},"initialized")," your Ledger Device."),(0,i.kt)("li",{parentName:"ul"},"The latest firmware is ",(0,i.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360002731113?docs=true"},"installed")," (Ledger Nano S)."),(0,i.kt)("li",{parentName:"ul"},"Archethic Bolos App is ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/archethic-foundation/archethic-ledger"},"loaded")," on Ledger (Tested with Nano S only)."),(0,i.kt)("li",{parentName:"ul"},"Install the latest version of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/archethic-foundation/ledger-cli-app"},"ALCA"),"."),(0,i.kt)("li",{parentName:"ul"},"Nodejs (v14.0+)")),(0,i.kt)("h2",{id:"installation-instruction"},"Installation Instruction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clone the repository from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/archethic-foundation/ledger-cli-app.git"},"github")),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install")," from root folder of the project"),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm link")),(0,i.kt)("li",{parentName:"ul"},"Use it as ledger_cli (commands)")),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"From Terminal use it as ",(0,i.kt)("inlineCode",{parentName:"p"},"ledger_cli (about | getAppVersion | getPublicKey | getArchAddress | sendTxn")),(0,i.kt)("h2",{id:"demo"},"Demo"),(0,i.kt)("p",null,"The demo shows various screens a user will be shown for getting origin public key, onchain wallet address and performing signature on transaction involving single UCO transfer at a time between 2 parties."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/gk8Q9Ku.gif",alt:null})))}d.isMDXComponent=!0}}]);