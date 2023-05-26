"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3633],{7726:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));n(1839);const s={id:"testnet",title:"Testnet"},i=void 0,o={unversionedId:"build/testnet",id:"build/testnet",title:"Testnet",description:"Local",source:"@site/docs/build/testnet.md",sourceDirName:"build",slug:"/build/testnet",permalink:"/build/testnet",draft:!1,tags:[],version:"current",lastUpdatedAt:1685105328,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{id:"testnet",title:"Testnet"},sidebar:"docs",previous:{title:"Language",permalink:"/build/smart-contracts/legacy/language"},next:{title:"FAQ",permalink:"/category/faq"}},r={},p=[{value:"Local",id:"local",level:2},{value:"Installation",id:"installation",level:3},{value:"Get some funds",id:"get-some-funds",level:3},{value:"Public",id:"public",level:2},{value:"Get some funds",id:"get-some-funds-1",level:3}],u={toc:p};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,l.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"local"},"Local"),(0,a.kt)("p",null,"To test and build on top of Archethic network, we encourage people to test with a local instance."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clone the repository: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/archethic-foundation/archethic-node.git\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Setup the dev environment:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://elixir-lang.org/install.html"},"Install Elixir")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Install NodeJS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gmplib.org"},"Install GMP")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fetch the dependencies"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mix deps.get\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Build web assets")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd assets ; npm install; cd -\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start instance")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"iex -S mix\n")),(0,a.kt)("h3",{id:"get-some-funds"},"Get some funds"),(0,a.kt)("p",null,"To be able to fund some addresses, the development mode of the running enable the testnet faucet."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Funding"),(0,a.kt)("p",{parentName:"li"},"Browse to the http://localhost:4000/faucet and enter any address to send funds to. "),(0,a.kt)("p",{parentName:"li"},"It should transfer 100 UCO to the given address.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check the balance"),(0,a.kt)("p",{parentName:"li"},"Go to http://localhost:4000/explorer/transaction/{TYPE_YOUR_ADDRESS_IN_HEXADECIMAL}"),(0,a.kt)("p",{parentName:"li"},'It should display 100 unspent outputs (in the "Ledger inputs" section)'))),(0,a.kt)("h2",{id:"public"},"Public"),(0,a.kt)("p",null,"Public testnet is available at ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.archethic.net"},"https://testnet.archethic.net")),(0,a.kt)("h3",{id:"get-some-funds-1"},"Get some funds"),(0,a.kt)("p",null,"You can then go the ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.archethic.net/faucet"},"faucet")," to get free UCOs to experiment the Archethic network"))}d.isMDXComponent=!0}}]);