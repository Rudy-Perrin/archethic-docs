"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7790],{3631:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));a(1839);const i={id:"account",title:"Account"},r=void 0,d={unversionedId:"build/core/account",id:"build/core/account",title:"Account",description:"Archethic node provides a high level and fast access to an account assets using primarily memory tables with ETS.",source:"@site/docs/build/core/account.md",sourceDirName:"build/core",slug:"/build/core/account",permalink:"/build/core/account",draft:!1,tags:[],version:"current",lastUpdatedAt:1685621944,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{id:"account",title:"Account"},sidebar:"docs",previous:{title:"Core development",permalink:"/build/core/"},next:{title:"BeaconChain",permalink:"/build/core/beacon-chain/"}},o={},s=[{value:"UCO",id:"uco",level:2},{value:"Ledger",id:"ledger",level:3},{value:"Index",id:"index",level:3},{value:"Token",id:"token",level:2},{value:"Ledger",id:"ledger-1",level:3},{value:"Index",id:"index-1",level:3},{value:"Loading",id:"loading",level:2}],u={toc:s};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Archethic node provides a high level and fast access to an account assets using primarily memory tables with ETS."),(0,l.kt)("p",null,"This gives us faster computation and data retrieval to asserts balances and UTXO loading."),(0,l.kt)("h2",{id:"uco"},"UCO"),(0,l.kt)("p",null,"A memory table is defined to list of the UCO available for a given address"),(0,l.kt)("p",null,"Few functions are provided to be able to query this table in order to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"get the UCO balance "),(0,l.kt)("li",{parentName:"ul"},"get the UTXOs"),(0,l.kt)("li",{parentName:"ul"},"get the total inputs (spent and unspent)"),(0,l.kt)("li",{parentName:"ul"},"spend all the UTXOs"),(0,l.kt)("li",{parentName:"ul"},"add new UCO UTXO")),(0,l.kt)("h3",{id:"ledger"},"Ledger"),(0,l.kt)("p",null,"Each entry is indexed by a tuple recipient/sender  to identify uniquely an UTXO"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Recipient, Sender"),(0,l.kt)("th",{parentName:"tr",align:null},"Amount"),(0,l.kt)("th",{parentName:"tr",align:null},"Spent ?"),(0,l.kt)("th",{parentName:"tr",align:null},"Date")))),(0,l.kt)("h3",{id:"index"},"Index"),(0,l.kt)("p",null,"An index table is provided to be able to retrieve all the sender UTXOs for a given recipient"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Recipient"),(0,l.kt)("th",{parentName:"tr",align:null},"Sender")))),(0,l.kt)("h2",{id:"token"},"Token"),(0,l.kt)("p",null,"A memory table is defined to list al the token available for a given address"),(0,l.kt)("p",null,"Few functions are provided to be able to query this table in order to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"get the token balance s"),(0,l.kt)("li",{parentName:"ul"},"get the UTXOs"),(0,l.kt)("li",{parentName:"ul"},"get the total inputs (spent and unspent)"),(0,l.kt)("li",{parentName:"ul"},"spend all the UTXOs"),(0,l.kt)("li",{parentName:"ul"},"add new token UTXO")),(0,l.kt)("h3",{id:"ledger-1"},"Ledger"),(0,l.kt)("p",null,"Each entry is indexed by a tuple recipient/sender/token address  to identify uniquely an UTXO"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Recipient, Sender, Token"),(0,l.kt)("th",{parentName:"tr",align:null},"Amount"),(0,l.kt)("th",{parentName:"tr",align:null},"Spent ?"),(0,l.kt)("th",{parentName:"tr",align:null},"Date")))),(0,l.kt)("h3",{id:"index-1"},"Index"),(0,l.kt)("p",null,"An index table is provided to be able to retrieve all the sender UTXOs for a given recipient"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Recipient"),(0,l.kt)("th",{parentName:"tr",align:null},"Sender"),(0,l.kt)("th",{parentName:"tr",align:null},"Token address")))),(0,l.kt)("h2",{id:"loading"},"Loading"),(0,l.kt)("p",null,"When a transaction replicated, the storage nodes in charge of storing the new transaction (chain replicas or recipient replicas) will load the transaction in those tables to index the UTXO and build in memory view."),(0,l.kt)("p",null,"The same goes when a node is bootstraping, a process will load all the transactions from the database to load them  into those tables."))}p.isMDXComponent=!0}}]);