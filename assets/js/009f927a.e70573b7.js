"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7265],{8968:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=i(7462),a=(i(7294),i(3905));i(1839);const o={id:"replication-attestation",title:"Replication attestation"},s=void 0,r={unversionedId:"learn/sharding/replication-attestation",id:"learn/sharding/replication-attestation",title:"Replication attestation",description:"How to ensure a minimum of confirmation from the storage nodes to ensure the data availability of a given transaction.",source:"@site/docs/learn/sharding/replication-attestation.md",sourceDirName:"learn/sharding",slug:"/learn/sharding/replication-attestation",permalink:"/learn/sharding/replication-attestation",draft:!1,tags:[],version:"current",lastUpdatedAt:1685621944,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{id:"replication-attestation",title:"Replication attestation"},sidebar:"docs",previous:{title:"Beacon Explorer",permalink:"/learn/sharding/beacon-chain/explorer"},next:{title:"Tokens",permalink:"/learn/token"}},l={},c=[{value:"Heuristic solution",id:"heuristic-solution",level:2},{value:"Nested replications",id:"nested-replications",level:3},{value:"Client notifications",id:"client-notifications",level:3},{value:"Further improvements",id:"further-improvements",level:2}],d={toc:c};function h(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to ensure a minimum of confirmation from the storage nodes to ensure the data availability of a given transaction.\nIf we are not providing this kind of mechanism, we can end up into a network split / mismatch where shards and beacon aren't cross linked.\nAlso we do not want to overload the beacon chain by broadcasting it with hundred of messages for a single transaction summary."),(0,a.kt)("h2",{id:"heuristic-solution"},"Heuristic solution"),(0,a.kt)("p",null,"Each validation node will notify the replications nodes in charge, and wait their confirmations to attest the validity\nand the availability of the transaction in the shard before notifying the beacon chain and the welcome node."),(0,a.kt)("p",null,"In 1st approx, a single notification from the validation nodes is sufficient to ensure the availability. This attestation will contain a list of signatures,\nfrom the replication nodes, to status about their commitment to store the transaction.\nHowever, further attestations and confirmations can be checked later during the time, to provide more security."),(0,a.kt)("p",null,"For example, a beacon chain receiving 1 attestation from a validation node including X storage confirmations\nwill be valid as 3 attestations with their respective confirmations."),(0,a.kt)("h3",{id:"nested-replications"},"Nested replications"),(0,a.kt)("p",null,"Moreover, when we are dealing with recipients for transfer or smart contract calls, we want to support the recipients shards will be notified\nonly when the main transaction is validated and stored.\nSo for example, the replication can be splitted by levels: ","[ Main Chain ]"," -> ","[ Recipient Chains]"),(0,a.kt)("p",null,"Then the welcome node will be notified by a validation node with a given number of replica confirmations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"          V1\n        /  |  \\\nChain: S1  S2  S3\n       /     |   \\\n      Recipient Shards\n")),(0,a.kt)("h3",{id:"client-notifications"},"Client notifications"),(0,a.kt)("p",null,"When a transaction is submitted, the welcome node will transfer this transaction to the validation nodes and return a pending status to the client.\nThe client would have to subscribe to notifications about the completion of the transaction.\nOnce the transaction will be validated and the validation nodes by notifing the welcome will notify the clients asynchronously."),(0,a.kt)("h2",{id:"further-improvements"},"Further improvements"),(0,a.kt)("p",null,"To reduce the overall size of the attestations and confirmations we can support signature aggregation or cosigning to embed a single transaction with a bitfield\nto indicate which nodes signed the transaction replication, which will be signed over by a validation node."))}h.isMDXComponent=!0}}]);