"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9909],{6047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(7462),o=(n(7294),n(3905));n(1839);const a={id:"bootstrapping",title:"Bootstrapping"},r=void 0,s={unversionedId:"learn/p2p/bootstrapping",id:"learn/p2p/bootstrapping",title:"Bootstrapping",description:"Archethic Blockchain by using Network Transaction and Supervised Multicast, requires some actions to be performed",source:"@site/docs/learn/p2p/bootstrapping.md",sourceDirName:"learn/p2p",slug:"/learn/p2p/bootstrapping",permalink:"/archethic-docs/learn/p2p/bootstrapping",draft:!1,tags:[],version:"current",lastUpdatedAt:1677665861,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{id:"bootstrapping",title:"Bootstrapping"},sidebar:"docs",previous:{title:"P2P",permalink:"/archethic-docs/learn/p2p/"},next:{title:"Self Repair",permalink:"/archethic-docs/learn/p2p/self-repair"}},p={},l=[{value:"Joining",id:"joining",level:2},{value:"Updates",id:"updates",level:2},{value:"Synchronization",id:"synchronization",level:2}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Archethic Blockchain by using Network Transaction and Supervised Multicast, requires some actions to be performed\nwhen a node is bootstrapping. These operations will ensure synchronization and P2P awareness."),(0,o.kt)("h2",{id:"joining"},"Joining"),(0,o.kt)("p",null,'When a node joins the network for the first time, it will request from a list of preconfigured nodes to reach (called "bootstrapping seeds"), the closest nodes from its position.'),(0,o.kt)("p",null,"Then, it will generate a first node transaction including as data: ip, port, protocol, reward address, key certificate (to ensure the key is coming from a secure element)\nOnce the network will attest and verify its transaction, the node will be able to start a SelfRepair process"),(0,o.kt)("h2",{id:"updates"},"Updates"),(0,o.kt)("p",null,"When a node rejoins the network after some time, depending on if its previous data expired, it will generate a new transaction with the new information"),(0,o.kt)("h2",{id:"synchronization"},"Synchronization"),(0,o.kt)("p",null,"Once the transaction is validated, the node will start by requesting the list of nodes."),(0,o.kt)("p",null,"Then, it will start the ",(0,o.kt)("a",{parentName:"p",href:"/learn/p2p/self-repair"},"Self-Repair")," sequence to get and synchronize the missing transactions and publish its end of sync to the network."),(0,o.kt)("p",null,"By this way, the entire will know the existence the readiness of this node."))}c.isMDXComponent=!0}}]);