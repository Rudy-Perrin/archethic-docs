"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7655],{2292:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=a(7462),i=(a(7294),a(3905)),s=a(1839);const o={id:"how-it-works",title:"AEWeb - How it works",sidebar_label:"How it works",sidebar_position:1},l=void 0,r={unversionedId:"participate/aeweb/how-it-works",id:"participate/aeweb/how-it-works",title:"AEWeb - How it works",description:"Archethic Web (AEWeb) is using transaction chains to host any website on Archethic Blockchain.",source:"@site/docs/participate/aeweb/how-it-works.md",sourceDirName:"participate/aeweb",slug:"/participate/aeweb/how-it-works",permalink:"/participate/aeweb/how-it-works",draft:!1,tags:[],version:"current",lastUpdatedAt:1685621944,formattedLastUpdatedAt:"Jun 1, 2023",sidebarPosition:1,frontMatter:{id:"how-it-works",title:"AEWeb - How it works",sidebar_label:"How it works",sidebar_position:1},sidebar:"docs",previous:{title:"Archethic Web (AEWeb)",permalink:"/participate/aeweb/"},next:{title:"Domain Names",permalink:"/participate/aeweb/dns"}},c={},d=[{value:"Transaction building",id:"transaction-building",level:2},{value:"Content delivery",id:"content-delivery",level:2}],h={toc:d};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Archethic Web (AEWeb) is using transaction chains to host any website on Archethic Blockchain."),(0,i.kt)("p",null,"We will describe the following process from the building until the delivery to the browser."),(0,i.kt)("h2",{id:"transaction-building"},"Transaction building"),(0,i.kt)("p",null,"On the beginning of any hosting, there is a website composed of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTML pages"),(0,i.kt)("li",{parentName:"ul"},"CSS files"),(0,i.kt)("li",{parentName:"ul"},"Javascript files"),(0,i.kt)("li",{parentName:"ul"},"Images"),(0,i.kt)("li",{parentName:"ul"},"Videos")),(0,i.kt)("p",null,"When the folder of the website is passed to the AEWeb CLI, the files are analyzed and packaged into blob of 3MB (current limitation of transaction's content)."),(0,i.kt)(s.G,{chart:"graph TD\n\n  HTML --\x3e AEWeb\n  CSS --\x3e AEWeb\n  Javascript --\x3e AEWeb\n  Images --\x3e AEWeb\n\n  AEWeb --\x3e Transaction#1\n  AEWeb --\x3e Transaction#2\n  AEWeb --\x3e Transaction#3\n",mdxType:"Mermaid"}),(0,i.kt)("p",null,"One of this transaction is called the ",(0,i.kt)("inlineCode",{parentName:"p"},"reference"),". Its goals is to act as a pointer to other transactions. This will help the retrieval of the files and makes upgrades seamless and transparent for end users."),(0,i.kt)("p",null,"The reference transaction's address will become the address of the website managing its lifecycle."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "aewebVersion": 1,\n  "hashFunction": "sha-1",\n  "metaData": {\n    "index.html": {\n      "size": 68420,\n      "hash": "ABC123F...",\n      "encoding": "gzip",\n      "addresses": ["0FB27DAC...."]\n    },\n    "scripts/main.js": {\n      "size": 255121,\n      "hash": "01AB2CD...",\n      "encoding": "gzip",\n      "addresses": ["0AC1BFA9..."]\n    } \n  }\n}\n')),(0,i.kt)("p",null,"The other transactions (called ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),") will contain the content of the files encoded in base64"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "index.html": "b298kJKFS98dj7Xdnsq....", \n  "scripts/main.js": "aGVsbG8gd29ybGQ=" \n}\n')),(0,i.kt)("p",null,"To leverage the maximum of the transaction size, all the content are grouped into the smallest amount of transaction possible.\nFor example, you could have a website which contains: 5 files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTML page"),(0,i.kt)("li",{parentName:"ul"},"Image"),(0,i.kt)("li",{parentName:"ul"},"CSS")),(0,i.kt)("p",null,"3 transactions could be generated:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Reference:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "aewebVersion": 1,\n  "hashFunction": "sha-1",\n  "metaData": {\n    "index.html": {\n      ...\n      "addresses": ["0ac7fj..."]\n    },\n    "assets/app.css": {\n      ...\n      "addresses": ["0ac7fj..."]\n    },\n    "assets/image.jpg": {\n      ...\n      // image.jpg is too big to fit in a single data transaction\n      "addresses": ["0ac7fj...", "1fb2ha..."] \n  }\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"HTML + CSS + Image (chunked by 30%)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonc"},'// data transaction: "0ac7fj..."\n{\n    "index.html": "...",\n    "assets/app.css": "..."\n    "assets/image.jpg": "..."\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Image (remaining chunks)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonc"},'// data transaction: "1fb2ha..."\n{\n  "assets/image.jpg": "..."\n}\n')),(0,i.kt)("h2",{id:"content-delivery"},"Content delivery"),(0,i.kt)("p",null,"On the other side, the transactions are validated and stored on the Archethic Blockchain.\nAny Archethic node expose an API dedicated for the web hosting by AEWeb."),(0,i.kt)("p",null,"This API takes a reference address as a parameter, and then proceeds to take the path of the file, just like any web server would do."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"https://mainnet.archethic.net/api/web_hosting/0c19fd13......../image.jpg\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"aeweb_CDN",src:a(4313).Z+"#gh-light-mode-only",width:"274",height:"215"}),"\n",(0,i.kt)("img",{alt:"aeweb_CDN",src:a(1951).Z+"#gh-dark-mode-only",width:"274",height:"215"})),(0,i.kt)("p",null,"The welcome node will request the reference transaction download to its related shard.\nIt will parse the reference content and detect the transactions to download for the requested file."),(0,i.kt)("p",null,"Once the file downloaded, the content will send back to the client and the browser will display the file."),(0,i.kt)("p",null,"Because websites rendering is composed of multiple HTTP requests for each file, the browser will be able to understand the responses and display the website entirely - while leveraging a single reference on-chain."),(0,i.kt)("admonition",{title:"Good to know",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Once the website retrieved, the data will be cached locally. So, the next time the same person will visit the website, no data will be fetched again."),(0,i.kt)("p",{parentName:"admonition"},"This will be true until the website and the reference chain evolves.")))}p.isMDXComponent=!0},1951:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aeweb_CDN-dark-a23984e644c6a6122b47d21df57208e0.svg"},4313:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aeweb_CDN-a2976501bd49a6a0049eebd89e41f66c.svg"}}]);