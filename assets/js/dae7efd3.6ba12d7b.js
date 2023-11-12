"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||r;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));n(8209);const r={id:"bridge-front",title:"Bridge - Application Front End",sidebar_label:"Bridge Front End",sidebar_position:4},o="Bridge Front end - Tutorial",s={unversionedId:"participate/bridge/usage/bridge-front",id:"participate/bridge/usage/bridge-front",title:"Bridge - Application Front End",description:"Currently, the two-way bridge is available exclusively on the testnet.",source:"@site/docs/participate/bridge/usage/bridge-front.md",sourceDirName:"participate/bridge/usage",slug:"/participate/bridge/usage/bridge-front",permalink:"/participate/bridge/usage/bridge-front",draft:!1,tags:[],version:"current",lastUpdatedAt:1699828423,formattedLastUpdatedAt:"Nov 12, 2023",sidebarPosition:4,frontMatter:{id:"bridge-front",title:"Bridge - Application Front End",sidebar_label:"Bridge Front End",sidebar_position:4},sidebar:"docs",previous:{title:"Usage",permalink:"/category/usage-1"},next:{title:"Archethic's CLI",permalink:"/participate/cli/"}},l={},c=[{value:"Welcome Screen",id:"welcome-screen",level:2},{value:"Application Menu",id:"application-menu",level:3},{value:"Feature Access",id:"feature-access",level:3},{value:"Bridging Your Assets",id:"bridging-your-assets",level:2},{value:"Step 1: Initiating Transfer",id:"step-1-initiating-transfer",level:3},{value:"Step 2: Confirming Details",id:"step-2-confirming-details",level:3},{value:"Step 3: Executing Transfer",id:"step-3-executing-transfer",level:3},{value:"Local History and Management",id:"local-history-and-management",level:2},{value:"Options Include:",id:"options-include",level:3},{value:"Transfer Status Actions:",id:"transfer-status-actions",level:3},{value:"Refund Process",id:"refund-process",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bridge-front-end---tutorial"},"Bridge Front end - Tutorial"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Currently, the two-way bridge is available exclusively on the testnet.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The Archethic Bridge application is exclusively available as a web application accessible through internet browsers.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The application is compatible only with the desktop versions of the Archethic wallet, which include macOS, Linux, and Windows platforms.")),(0,a.kt)("p",null,"Ensure that you have the appropriate desktop version of the Archethic wallet installed on your system to interact with the application effectively. The Archethic wallet can be downloaded from ",(0,a.kt)("a",{parentName:"p",href:"https://www.archethic.net/wallet/"},"here"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For optimal performance, it is recommended to use the latest version of your internet browser and keep your desktop wallet updated.")),(0,a.kt)("p",null,"Access: ",(0,a.kt)("a",{parentName:"p",href:"https://bridge.testnet.archethic.net"},"https://bridge.testnet.archethic.net"),(0,a.kt)("br",null),"\nSource code: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/bridge"},"https://github.com/archethic-foundation/bridge")),(0,a.kt)("p",null,"This Flutter-built web application enables seamless asset deposits and withdrawals."),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("p",{parentName:"admonition"},"Before proceeding, familiarize yourself with ",(0,a.kt)("a",{parentName:"p",href:"/participate/bridge/"},"Archethic's Bridge Key Concepts"),".")),(0,a.kt)("h2",{id:"welcome-screen"},"Welcome Screen"),(0,a.kt)("p",null,"Upon accessing the Archethic Bridge application, you are greeted with a welcome screen. To begin, click on the 'Bridge' button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Welcome Screen",src:n(1126).Z,width:"1626",height:"1014"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"Bridge Button",src:n(7785).Z,width:"1624",height:"1010"})),(0,a.kt)("h3",{id:"application-menu"},"Application Menu"),(0,a.kt)("p",null,"A right-hand header menu provides links to essential information and application documentation. It includes an option to send logs to Archethic for troubleshooting purposes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Menu",src:n(5273).Z,width:"374",height:"343"})),(0,a.kt)("h3",{id:"feature-access"},"Feature Access"),(0,a.kt)("p",null,"The left-side menu grants access to various bridge functionalities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bridging between Archethic and EVM blockchains"),(0,a.kt)("li",{parentName:"ul"},"Viewing local history, resume or refund options, and transaction logs"),(0,a.kt)("li",{parentName:"ul"},"Refunding")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Menu Features",src:n(4136).Z,width:"338",height:"300"})),(0,a.kt)("h2",{id:"bridging-your-assets"},"Bridging Your Assets"),(0,a.kt)("p",null,"The bridge process involves multiple steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Inputting information to initiate the transfer"),(0,a.kt)("li",{parentName:"ol"},"Confirming the entered details"),(0,a.kt)("li",{parentName:"ol"},"Executing the transfer, with progress tracking and transaction signing in both EVM and Archethic wallets")),(0,a.kt)("h3",{id:"step-1-initiating-transfer"},"Step 1: Initiating Transfer"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Transfer steps remain consistent across all blockchain types and directions.")),(0,a.kt)("p",null,"Firstly, select the originating and target blockchains."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Blockchain Selection",src:n(1353).Z,width:"712",height:"451"})),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Ensure both Archethic and your chosen EVM wallets are connected before blockchain selection. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/category/faq"},"FAQ")," for connectivity issues.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Choose a testnet blockchain for testing purposes.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Select an EVM blockchain as the source automatically sets Archethic as the target.")),(0,a.kt)("p",null,"Post-selection, a field appears for token selection from available options."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Token Selection",src:n(8962).Z,width:"652",height:"285"})),(0,a.kt)("h3",{id:"step-2-confirming-details"},"Step 2: Confirming Details"),(0,a.kt)("p",null,"On the confirmation screen, review:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Entered information summary"),(0,a.kt)("li",{parentName:"ul"},"Fee details"),(0,a.kt)("li",{parentName:"ul"},"Post-fee token quantity")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Confirmation Screen",src:n(7337).Z,width:"679",height:"629"})),(0,a.kt)("h3",{id:"step-3-executing-transfer"},"Step 3: Executing Transfer"),(0,a.kt)("p",null,"A transfer tracking popup guides you through the process, prompting for transaction confirmations in your wallets."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Transfer Tracking",src:n(3513).Z,width:"641",height:"448"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Transaction signing methods vary per EVM wallet.")),(0,a.kt)("p",null,"In the Archethic wallet, confirmation prompts automatically appear when necessary."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Archethic Wallet Confirmation",src:n(7310).Z,width:"381",height:"807"})),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The transfer process halts if a transaction is declined or due to insufficient funds. However, it can be resumed later.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Transfer Resumption",src:n(9686).Z,width:"650",height:"453"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"HTLC contract addresses are provided for ongoing process tracking.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HTLC Information",src:n(6064).Z,width:"589",height:"109"})),(0,a.kt)("h2",{id:"local-history-and-management"},"Local History and Management"),(0,a.kt)("p",null,"View transfer history, successful or otherwise, through the application's local history feature."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This history is local to your device. Access is not available on other devices.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"History List",src:n(1411).Z,width:"1360",height:"581"})),(0,a.kt)("h3",{id:"options-include"},"Options Include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deleting local history"),(0,a.kt)("li",{parentName:"ul"},"Filtering history entries")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"History Filters",src:n(9751).Z,width:"1391",height:"178"})),(0,a.kt)("h3",{id:"transfer-status-actions"},"Transfer Status Actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove transfers from local history"),(0,a.kt)("li",{parentName:"ul"},"Resume interrupted transfers"),(0,a.kt)("li",{parentName:"ul"},"Refund for interrupted transfers"),(0,a.kt)("li",{parentName:"ul"},"Access transfer technical details for Archethic team analysis")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"History Options",src:n(1914).Z,width:"137",height:"50"})),(0,a.kt)("h2",{id:"refund-process"},"Refund Process"),(0,a.kt)("p",null,"Retrieve your funds through the refund feature."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Manual refunding is unavailable for Archethic-blocked funds, as it is automatic.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Refund Form",src:n(8545).Z,width:"678",height:"621"})),(0,a.kt)("p",null,"Upon wallet connection and address confirmation, refund eligibility and amount are displayed. Validate the refund to receive your funds, minus transaction fees."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Refund Process",src:n(2779).Z,width:"673",height:"206"})),(0,a.kt)("hr",null))}u.isMDXComponent=!0},7310:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bridge-2-AEWallet-confirm-d858839f2ee6615e3afdb6ad71db00ad.png"},1353:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bridge-2-BC-Selection-d7d9ff6f3b9f87fd39c406ad28c5ce97.png"},7785:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bridge-2-Bridge-3c59e46488ee3fbc820c4377cb94b03d.png"},7337:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bridge-2-Confirmation-e8df6d18d609d2d5ceea7c58edfb47b1.png"},9751:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bridge-2-Filters-2f3b307bf3d8271e9e5e84b7a7fe95ae.png"},6064:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bridge-2-HTLC-infos-59f9d07b6fd6d7fefb2eb74d772575ba.png"},1914:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},1411:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bridge-2-History-list-b30840e2cdc37f910c5cbbc5f063051f.png"},4136:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bridge-2-Menu-features-950301f0a668b45e178757af22380df3.png"},5273:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bridge-2-Menu-cb08d9811c1b3f02a454d3409b8dd393.png"},8545:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bridge-2-Refund-Form-8345e3dff73524df2bcde310366efb27.png"},2779:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bridge-2-Refund-Wait-1d068a9b278567c3a4ad26859e969a55.png"},9686:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bridge-2-Resume-ff1b77fe887026e5bdf119c7493e8fbb.png"},1126:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bridge-2-Welcome-682effc97c60adb2d91b2594efec9179.png"},3513:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bridge-2-status-confirm-wallet-b443dd740dd1002f8e73edc1e60d901b.png"},8962:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bridge-2-token-Selection-9ffa553da5cca58043c8a14fa7d83b32.png"},8209:(e,t,n)=>{n(7294)}}]);