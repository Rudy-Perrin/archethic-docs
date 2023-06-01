"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3592],{7736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));n(1839);const s={id:"self-repair",title:"Self Repair"},r=void 0,o={unversionedId:"learn/p2p/self-repair",id:"learn/p2p/self-repair",title:"Self Repair",description:"Archethic Blockchain is using a self-repair mechanism to be able to sync/re-sync missing transactions to be able",source:"@site/docs/learn/p2p/self-repair.md",sourceDirName:"learn/p2p",slug:"/learn/p2p/self-repair",permalink:"/learn/p2p/self-repair",draft:!1,tags:[],version:"current",lastUpdatedAt:1685621944,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{id:"self-repair",title:"Self Repair"},sidebar:"docs",previous:{title:"Bootstrapping",permalink:"/learn/p2p/bootstrapping"},next:{title:"Sharding",permalink:"/learn/sharding/"}},l={},c=[{value:"Identification",id:"identification",level:2},{value:"Synchronization",id:"synchronization",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Archethic Blockchain is using a self-repair mechanism to be able to sync/re-sync missing transactions to be able\nto restore the state of a node."),(0,a.kt)("p",null,"Because Archethic is using a multidimensional sharding, a node needs to execute a self-repair on multiple occasions, to ensure data availability and security:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When the node bootstraps"),(0,a.kt)("li",{parentName:"ul"},"When a node goes offline"),(0,a.kt)("li",{parentName:"ul"},"When the code and heuristic algorithms changes")),(0,a.kt)("h2",{id:"identification"},"Identification"),(0,a.kt)("p",null,"To be able to determine which transactions are missing, for each cycle of repair, a date of last sync is persisted.\nTherefore, we can decide from this date, the list of missing BeaconChain transactions to sync. (Reminder: BeaconChain summaries transactions across the entire network each day)"),(0,a.kt)("p",null,"The Self-Repair will then request BeaconChain storage pools to get the missing transactions from those missing days"),(0,a.kt)("h2",{id:"synchronization"},"Synchronization"),(0,a.kt)("p",null,"Because we are using rotating election, nodes need to perform the ",(0,a.kt)("inlineCode",{parentName:"p"},"Storage Node Election")," to determine if they need to store this transaction."),(0,a.kt)("p",null,"In that case, we will get the list of existing storage nodes from the transaction's address to sync and request from the closest nodes the transaction to be replicated."),(0,a.kt)("p",null,"Once finalized, a new last date of sync is persisted for the next cycle."))}p.isMDXComponent=!0}}]);