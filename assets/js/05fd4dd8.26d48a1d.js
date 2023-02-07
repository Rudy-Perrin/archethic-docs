"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9174],{3735:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=o(7462),n=(o(7294),o(3905)),a=o(1839);const r={id:"bootstrap",title:"Bootstrap"},s=void 0,l={unversionedId:"build/core/bootstrap",id:"build/core/bootstrap",title:"Bootstrap",description:"When the Archethic node, a task is launched to  perform the node bootstrapping to join the network.",source:"@site/docs/build/core/bootstrap.md",sourceDirName:"build/core",slug:"/build/core/bootstrap",permalink:"/archethic-docs/build/core/bootstrap",draft:!1,tags:[],version:"current",lastUpdatedAt:1675759996,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{id:"bootstrap",title:"Bootstrap"},sidebar:"docs",previous:{title:"P2P availability sampling",permalink:"/archethic-docs/build/core/beacon-chain/p2p-sampling"},next:{title:"Cryptography",permalink:"/archethic-docs/build/core/cryptography/"}},d={},c=[{value:"Network initizialiation",id:"network-initizialiation",level:2},{value:"First node bootstrapping",id:"first-node-bootstrapping",level:2},{value:"Next time bootstraps",id:"next-time-bootstraps",level:2}],p={toc:c};function h(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,i.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When the Archethic node, a task is launched to  perform the node bootstrapping to join the network."),(0,n.kt)("p",null,"To be able to bootstrap a node, we gather connectivity information (IP, Port, Transport, Reward address, Bootstrapping seeds) and also last synchronization date."),(0,n.kt)("p",null,"But a flow is determine to define what is the state of the bootstrap: network initialization, first bootstrap, next bootstrap"),(0,n.kt)(a.G,{chart:"graph TD\n    A[Start] --\x3e B{Need to bootstrap ?}\n    B --\x3e|Yes| Bootstrap   \n    B --\x3e|No| End\n    Bootstrap --\x3e C{Need to initialize network?}\n    C --\x3e|Yes| D(Initialize network)\n    C --\x3e|No| E{New node public key ?}\n    E --\x3e|Yes| F(New node transaction update)\n    E --\x3e|Yes| G(First node transaction)",mdxType:"Mermaid"}),(0,n.kt)("h2",{id:"network-initizialiation"},"Network initizialiation"),(0,n.kt)("p",null,"The first node joining the network will be in charge to initialize the network by defining few transaction chains:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create first node shared secrets transaction chain with initial dailly nonce"),(0,n.kt)("li",{parentName:"ul"},"Create genesis wallets according to the allocation from the UCO token distribution ")),(0,n.kt)("h2",{id:"first-node-bootstrapping"},"First node bootstrapping"),(0,n.kt)("p",null,"During the first initialization, a node will contact P2P bootstrapping seeds (anchor nodes) to be able to fetch existing nodes."),(0,n.kt)("p",null,"Next a node will create transaction to publish its connectivity and crypto information which will authorize or not new joining node."),(0,n.kt)("p",null,"Once a node is authorized, after the success of this transaction, it can decrypt/load the storage nonce (will be used for self-repair) and start the self-repair initial cycle to sync transactions."),(0,n.kt)("h2",{id:"next-time-bootstraps"},"Next time bootstraps"),(0,n.kt)("p",null,"For further bootstraps, the bootstrap tasks determine if an update is required based on connectivity/crypto information changes, then a transaction is emitted to the node chain."),(0,n.kt)("p",null,"Once validated, the self-repair is also triggered to resync missed transactions."))}h.isMDXComponent=!0}}]);