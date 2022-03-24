(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3882],{61647:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return d},default:function(){return p}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=a(93456),s=["components"],c={id:"beacon-chain",title:"BeaconChain"},l=void 0,h={unversionedId:"build/core/beacon-chain",id:"build/core/beacon-chain",title:"BeaconChain",description:"BeaconChain helps the Archethic sharding network to be supervised and provided global view of the system.",source:"@site/docs/build/core/beacon-chain.md",sourceDirName:"build/core",slug:"/build/core/beacon-chain",permalink:"/archethic-docs/build/core/beacon-chain",tags:[],version:"current",lastUpdatedAt:1648112670,formattedLastUpdatedAt:"3/24/2022",frontMatter:{id:"beacon-chain",title:"BeaconChain"},sidebar:"docs",previous:{title:"OracleChain Memory Tables",permalink:"/archethic-docs/build/core/oracle-chain/memory-table"},next:{title:"P2P availability sampling",permalink:"/archethic-docs/build/core/beacon-chain/p2p-sampling"}},d=[{value:"Subsets",id:"subsets",children:[],level:2},{value:"Timers and schedulers",id:"timers-and-schedulers",children:[],level:2},{value:"Transaction loading",id:"transaction-loading",children:[],level:2},{value:"Supervisor",id:"supervisor",children:[],level:2}],u={toc:d};function p(e){var t=e.components,a=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"BeaconChain helps the Archethic sharding network to be supervised and provided global view of the system."),(0,o.kt)("p",null,"To be able to manage it, few modules and functions are needed to make this possible."),(0,o.kt)("h2",{id:"subsets"},"Subsets"),(0,o.kt)("p",null,"The BeaconChain is divided into a set of subsets (shards of the BeaconChain) based on hexadecimal splits.\nCurrently the BeaconChain supports 256 subsets, from 0 to F (hex)"),(0,o.kt)("p",null,"Each subset is maintained by its own ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node/blob/master/lib/archethic/beacon_chain/subset.ex"},"process")),(0,o.kt)("p",null,"This process is responsible of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add transaction replication confirmation to the current slot"),(0,o.kt)("li",{parentName:"ul"},"Check ",(0,o.kt)("a",{parentName:"li",href:"/build/core/beacon-chain/p2p-sampling"},"P2P availability")," of the nodes where their public key starts by the subset hexadecimal identifier "),(0,o.kt)("li",{parentName:"ul"},"Create beacon transaction and notify BeaconChain summary nodes (for the current epoch)"),(0,o.kt)("li",{parentName:"ul"},"Create beacon summary transaction (if it's one of the summary node)"),(0,o.kt)("li",{parentName:"ul"},"Notify explorer about the new transaction validated (See ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:9001/archethic-docs/learn/sharding/beacon-chain/explorer"},"Sharded Explorer"),")")),(0,o.kt)("h2",{id:"timers-and-schedulers"},"Timers and schedulers"),(0,o.kt)("p",null,"Because each BeaconChain subsets change over time, we need a may to determine what are the current nodes for those subsets and so on. So we have two kind of timers and schedulers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Slot timer: Manage the interval for the beacon slot creations"),(0,o.kt)("li",{parentName:"ul"},"Summary timer: Manage the interval for the beacon summary creations")),(0,o.kt)("p",null,"Each of those timer provides helpers to be able to generate previous or next dates"),(0,o.kt)("h2",{id:"transaction-loading"},"Transaction loading"),(0,o.kt)("p",null,"Before a transaction's confirmation is loaded into the BeaconChain, a phase of validation is performed to ensure the correctness of the replication:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"it asserts the transaction's address is the right one"),(0,o.kt)("li",{parentName:"ul"},"it asserts the transaction attestation (node election, signatures, etc.)")),(0,o.kt)("p",null,"For more details, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node/blob/master/lib/archethic/beacon_chain/slot/validation.ex"},"SlotValidation")),(0,o.kt)("p",null,"Then the slot is deserialized to be loaded into a cache, for a faster summary aggregation and computation"),(0,o.kt)("h2",{id:"supervisor"},"Supervisor"),(0,o.kt)("p",null,"To manage all those processes and isolation a proper supervision tree is defined"),(0,o.kt)(r.Mermaid,{chart:"graph TD\n    A[BeaconChain Supervisor]\n    A --\x3eB[Slot Timer]\n    A --\x3eC[Summary Timer]\n    A --\x3eD{Subset supervisor}\n    D --\x3eE[Summary Cache]\n    D --\x3eF[Subset 0]\n    D --\x3eH[Subset ..F]\n    D --\x3eI[Subset registry]",mdxType:"Mermaid"}))}p.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=11748}}]);