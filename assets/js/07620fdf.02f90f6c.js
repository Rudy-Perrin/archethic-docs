"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));n(8209);const i={id:"cli",title:"AEWeb - CLI",sidebar_label:"CLI",sidebar_position:3},o="AEWeb CLI (Command-Line Interface)",s={unversionedId:"participate/aeweb/usage/cli",id:"participate/aeweb/usage/cli",title:"AEWeb - CLI",description:"Repository//github.com/archethic-foundation/aeweb-cli",source:"@site/docs/participate/aeweb/usage/cli.md",sourceDirName:"participate/aeweb/usage",slug:"/participate/aeweb/usage/cli",permalink:"/participate/aeweb/usage/cli",draft:!1,tags:[],version:"current",lastUpdatedAt:1699828423,formattedLastUpdatedAt:"Nov 12, 2023",sidebarPosition:3,frontMatter:{id:"cli",title:"AEWeb - CLI",sidebar_label:"CLI",sidebar_position:3},sidebar:"docs",previous:{title:"Usage",permalink:"/category/usage"},next:{title:"AEWeb Front End",permalink:"/participate/aeweb/usage/aeweb-front"}},c={},l=[{value:"aeweb generate-address",id:"aeweb-generate-address",level:2},{value:"aeweb deploy",id:"aeweb-deploy",level:2}],p={toc:l},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aeweb-cli-command-line-interface"},"AEWeb CLI (Command-Line Interface)"),(0,r.kt)("p",null,"Repository: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/aeweb-cli"},"https://github.com/archethic-foundation/aeweb-cli")),(0,r.kt)("p",null,"This tool, built with NodeJS, can be used to deploy files and websites to the Archethic blockchain.\nOnce installed, as instructed in the README, the ",(0,r.kt)("inlineCode",{parentName:"p"},"aeweb")," command is available."),(0,r.kt)("h2",{id:"aeweb-generate-address"},"aeweb generate-address"),(0,r.kt)("p",null,"This command is used to generate an address from a seed. "),(0,r.kt)("admonition",{title:"Use case",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You might use this on TestNet for example, to determine an address to use the ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.archethic.net/faucet"},"faucet")," on.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ aeweb generate-address --seed myseedphrase --index 0\n00005da88a4adaf5b40c958a20db981bd168008e03efbb7fc9d35e11be182a0d3065\n")),(0,r.kt)("h2",{id:"aeweb-deploy"},"aeweb deploy"),(0,r.kt)("p",null,"This command is used to deploy the content of a folder or a single file. It will create the ",(0,r.kt)("a",{parentName:"p",href:"/participate/aeweb/how-it-works"},"transactions"),", estimate the fees and, after confirmation, will write the transactions on the network."),(0,r.kt)("p",null,"Parameters: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"seed")," The keychain seed, used to prove you are the owner of the transaction chain used to pay the fees"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoint")," ",(0,r.kt)("a",{parentName:"li",href:"https://testnet.archethic.net"},"https://testnet.archethic.net")," | ",(0,r.kt)("a",{parentName:"li",href:"https://mainnet.archethic.net"},"https://mainnet.archethic.net")," | ",(0,r.kt)("a",{parentName:"li",href:"http://127.0.0.1:4000"},"http://127.0.0.1:4000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," The path of the folder/file to upload ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ aeweb deploy --seed myseedphrase --endpoint https://testnet.archethic.net --path ./website\nConnecting to https://testnet.archethic.net \nCreating file structure and compress content...\nCreating transactions ...\nEstimating fees ...\nTotal Fee Requirement would be : 2.58933391 UCO ( $ 0.23 | \u20ac 0.22), for 3 transactions.\nDo you want to continue. (yes/no) yes\nSending 3 transactions...\nTransaction 1...\nWaiting transaction validation...\nTransaction confirmed !\nSee transaction in explorer: https://testnet.archethic.net/explorer/transaction/000013c531...\n-----------\nTransaction 2...\nWaiting transaction validation...\nTransaction confirmed !\nSee transaction in explorer: https://testnet.archethic.net/explorer/transaction/0000a78a35...\n-----------\nTransaction 3...\nWaiting transaction validation...\nTransaction confirmed !\nSee transaction in explorer: https://testnet.archethic.net/explorer/transaction/0000f1126e...\n-----------\nWebsite is deployed at: https://testnet.archethic.net/api/web_hosting/00007d9167...\n")),(0,r.kt)("admonition",{title:"There Can Be Only One",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"There can only be a single deployment per seed.")," Which makes it possible to update it by running the exact same command. The endpoint of your deployment will not change. "),(0,r.kt)("p",{parentName:"admonition"},"If you need to deploy another website, use another seed (and transfer funds to it via the Wallet app).")))}h.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);