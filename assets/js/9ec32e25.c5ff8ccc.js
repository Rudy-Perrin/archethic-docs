"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9498],{6694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));n(1839);const o={id:"fee",title:"Transaction fee"},r=void 0,l={unversionedId:"learn/fee",id:"learn/fee",title:"Transaction fee",description:"Archethic Blockchain is using specific heuristic algorithms to ensure the best transaction's distribution.",source:"@site/docs/learn/fee.md",sourceDirName:"learn",slug:"/learn/fee",permalink:"/learn/fee",draft:!1,tags:[],version:"current",lastUpdatedAt:1687243782,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{id:"fee",title:"Transaction fee"},sidebar:"docs",previous:{title:"Keychain",permalink:"/learn/decentralized-id/keychain"},next:{title:"Governance",permalink:"/learn/governance/"}},s={},c=[{value:"Calculation",id:"calculation",level:2},{value:"Transaction&#39;s type particularities",id:"transactions-type-particularities",level:2},{value:"Network",id:"network",level:3},{value:"Keychain",id:"keychain",level:3},{value:"Token",id:"token",level:3}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Archethic Blockchain is using specific heuristic algorithms to ensure the best transaction's distribution."),(0,i.kt)("p",null,"The fees are calculated according to the real costs of the network (size, complexity) and is based on a minimal fee ($0.01) indexed to the real UCO's price (using ",(0,i.kt)("a",{parentName:"p",href:"/learn/oracle-chain"},"Oracle Chain"),")"),(0,i.kt)("p",null,"During the transaction validation, the entire fee is burned to make the UCO more rare.\nThis programmable destruction of the UCO ensures a deflation and increases the value of each token."),(0,i.kt)("p",null,"This way a fair reward mechanism is put in place for nodes regarding their work and their availability."),(0,i.kt)("h2",{id:"calculation"},"Calculation"),(0,i.kt)("p",null,"The transaction's fee computation is based on some properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Minimum fee: ",(0,i.kt)("em",{parentName:"li"},"$0.01 of the current UCO price")),(0,i.kt)("li",{parentName:"ul"},"Number of recipient (for transfers or smart contractcalls)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1: no more additional fee "),(0,i.kt)("li",{parentName:"ul"},">"," 1: each additional recipient will have an additional cost of $0.1 UCO(",(0,i.kt)("em",{parentName:"li"},"Because sending transaction to multiple leverages more resources in term of network and storage, as the transaction must be replicated in all the chain targets"),")"))),(0,i.kt)("li",{parentName:"ul"},"Size of the transaction: each stored byte will cost 10",(0,i.kt)("sup",null,"-9")," of the current UCO's price"),(0,i.kt)("li",{parentName:"ul"},"Number of replicas"),(0,i.kt)("li",{parentName:"ul"},"Complexity of the smart contract (Coming soon)")),(0,i.kt)("p",null,"Overall formula:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Transaction Fee = minimum_fee + fee_for_storage(size * nb_replicas) + fee_for_complexity + cost_per_recipient\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Regular transfer of UCO to single person would cost around ~$0.01 (+/- additional information + nb of replicas)")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The $0.01 cost is static only as minimum fee for any transaction.\nDepending on the number of recipients, size, etc. the fee will increase, as it requires more work for the network")),(0,i.kt)("h2",{id:"transactions-type-particularities"},"Transaction's type particularities"),(0,i.kt)("h3",{id:"network"},"Network"),(0,i.kt)("p",null,"All the transactions with a transaction's type such as ",(0,i.kt)("inlineCode",{parentName:"p"},"node"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"node shared secrets"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"oracle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"beacon chain"),", etc. don't cost fee, as their intent is only for network management."),(0,i.kt)("h3",{id:"keychain"},"Keychain"),(0,i.kt)("p",null,"Transactions to manage keychain for creation, updates or add new access don't cost fee, as this will be blockage to the adoption and there are just meant to ease the wallet management."),(0,i.kt)("h3",{id:"token"},"Token"),(0,i.kt)("p",null,"Archethic supports a token mining through a given type of transaction ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),".\nBecause during this step validation nodes have to perform some additional work to create new unspent transaction outputs (UTXOs) and deliver them (if multiple - for example in a collection creation)."),(0,i.kt)("p",null,"Hence an additional fee is computed based on the number of UTXO to create."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fungible tokens: there will only cost the minimum fee: $0.01 - as it's like doing some UCO transfer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Non fungible tokens: These are tokens which each collection item have some unique properties and well identified. So a list of UTXO is created for each unique collection items. This creation will consume resources of computation, networking and storage."))),(0,i.kt)("p",null,"An additional fee is determined in that case through the following formula: "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"(log10(number of utxos) + 1) * number of utxos * minimum fee")),(0,i.kt)("p",null,"So the transaction fee will gradually increase according of the number of unique token to create (= new UTXO)"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7626).Z,width:"811",height:"502"})))}p.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nft_additional_fee-8c6d24177afeea4eba9d662d63304901.svg"}}]);