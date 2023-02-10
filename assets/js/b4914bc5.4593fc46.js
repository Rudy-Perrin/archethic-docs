"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8959],{2938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(7462),o=(n(7294),n(3905));n(1839);const a={id:"transaction-context",title:"Transaction context retrieval"},r=void 0,s={unversionedId:"build/core/mining/transaction-context",id:"build/core/mining/transaction-context",title:"Transaction context retrieval",description:"When a transaction is under validation, after the pending transaction validation, the nodes are fetching the context of the transaction.",source:"@site/docs/build/core/mining/transaction-context.md",sourceDirName:"build/core/mining",slug:"/build/core/mining/transaction-context",permalink:"/archethic-docs/build/core/mining/transaction-context",draft:!1,tags:[],version:"current",lastUpdatedAt:1676048775,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{id:"transaction-context",title:"Transaction context retrieval"},sidebar:"docs",previous:{title:"Proof of Work algorithm",permalink:"/archethic-docs/build/core/mining/proof-of-work"},next:{title:"OracleChain",permalink:"/archethic-docs/build/core/oracle-chain/"}},l={},d=[{value:"Retrieval",id:"retrieval",level:2},{value:"Node distribution",id:"node-distribution",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When a transaction is under validation, after the ",(0,o.kt)("a",{parentName:"p",href:"/build/core/mining/transaction-validation"},"pending transaction validation"),", the nodes are fetching the context of the transaction."),(0,o.kt)("h2",{id:"retrieval"},"Retrieval"),(0,o.kt)("p",null,"This retrieval include multiple queries to be able to perform an efficient validation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get the previous transaction"),(0,o.kt)("li",{parentName:"ul"},"Get the unspent outputs"),(0,o.kt)("li",{parentName:"ul"},"Get the P2P view of the storage nodes (chain and beacon)")),(0,o.kt)("p",null,"All of thoses queries happen concurrently making efficient the transaction validation."),(0,o.kt)("p",null,"To be sure the data is fetched faster, an algorithm is provided to first target the closest nodes from the validation node but\nalso ensure the if node fails to respond, other nodes will take the relay."),(0,o.kt)("p",null,"However, if for the P2P view query, some node doesn't respond in a timeframe, it will be considered as offline, and through aggregation during the replication tree creation, this node will not receive replication request"),(0,o.kt)("h2",{id:"node-distribution"},"Node distribution"),(0,o.kt)("p",null,"To be sure all the validation will get the best of this retrieval, an algorithm have been developed to ensure a fair distribution of the nodes invovled in those queries."),(0,o.kt)("p",null,"The storage nodes for the previous chain are split into 2 group: previous transaction and unspent outputs"),(0,o.kt)("p",null,"This way a given node will get several responses ensuring the atomic commitment of the transaction."),(0,o.kt)("p",null,"The algorithm defines the number of group to have and the number of nodes in each group."),(0,o.kt)("p",null,"Also it balances the groups to be sure a group have the same number of node without duplication"))}u.isMDXComponent=!0}}]);