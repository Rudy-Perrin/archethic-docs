"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7157],{2726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));n(1839);const i={id:"token",title:"Tokens"},l=void 0,r={unversionedId:"learn/token",id:"learn/token",title:"Tokens",description:"Tokens is an important feature on Archethic.",source:"@site/docs/learn/token.md",sourceDirName:"learn",slug:"/learn/token",permalink:"/learn/token",draft:!1,tags:[],version:"current",lastUpdatedAt:1679651902,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{id:"token",title:"Tokens"},sidebar:"docs",previous:{title:"Replication attestation",permalink:"/learn/sharding/replication-attestation"},next:{title:"Participate",permalink:"/category/participate"}},s={},d=[{value:"Native",id:"native",level:2},{value:"Standardized",id:"standardized",level:2},{value:"Creation",id:"creation",level:2},{value:"Fungible",id:"fungible",level:3},{value:"Non-fungible",id:"non-fungible",level:3},{value:"Usage",id:"usage",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tokens is an important feature on Archethic.\nNowadays, our world is transforming towards digitalisation and tokenization with new use cases and trends (royalties, collection, proof of ownerships, etc.)"),(0,o.kt)("p",null,"Archethic allows users to create and transaction with an unlimited-defined (custom) token natively."),(0,o.kt)("h2",{id:"native"},"Native"),(0,o.kt)("p",null,"Archethic tokens are considered as native as for developers, there is no need to create smart contract to mint or transfer tokens."),(0,o.kt)("p",null,"The transaction's structure supports - by design, asn extension of the ledger model (more than UCO-only transaction)"),(0,o.kt)("p",null,"All the layer of complexity have been removed to make them efficient and performant."),(0,o.kt)("p",null,"Because of this, the transfer of tokens is as simple as a transfer of UCO (just UTXO), making it fast and cheap. "),(0,o.kt)("h2",{id:"standardized"},"Standardized"),(0,o.kt)("p",null,"Archethic's tokens are also unified through a specification to help implementers, developers and users to have a clear understanding of their definition"),(0,o.kt)("p",null,"For more details please take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/aeip/blob/main/AEIP-2.md"},"AEIP-2")),(0,o.kt)("h2",{id:"creation"},"Creation"),(0,o.kt)("p",null,"In order to create a token, you have to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'set the transaction\'s type to: "token"'),(0,o.kt)("li",{parentName:"ol"},"define in the transaction's data the token definition")),(0,o.kt)("h3",{id:"fungible"},"Fungible"),(0,o.kt)("p",null,"Here an example of a fungible token: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "supply": NB_OF_TOKEN_TO_CREATE, // Specified in 10e8 notation (default to 8 decimals)\n  "type": "fungible",\n  "symbol": "TOKEN_SYMBOL",\n  "name": "TOKEN_NAME",\n  "properties": {"PROPERTY_NAME": "PROPERTY_VALUE"}\n}\n')),(0,o.kt)("h3",{id:"non-fungible"},"Non-fungible"),(0,o.kt)("p",null,"Here another example of non-fungible token: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "supply": SIZE_OF_THE COLLECTION, // Must be specified in 10e8 notation\n  "type": "non-fungible",\n  "name": "COLLETION NAME",\n  "symbol": "COLLETION_SYMBOL",\n  "properties": {"globalProperty": "value"},\n  "collection": [\n    {"image": "link"},\n    {"image": "link"},\n    {"image": "link"}\n  ]\n}\n')),(0,o.kt)("p",null,"During the transaction validation, the miners will understand how to interpret this transaction and create the relative assets and UTXOs to make transfers possible right away."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To make use of those custom tokens, a developer or a user can easily build a new transaction and use the ID in the ledger operations to send this token."),(0,o.kt)("p",null,"Example of Token ledger operation in the transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "to": "RECIPIENT_ADDRESS",\n  "amount": NB_OF_TOKEN_TO_TRANSFER,\n  "tokenAddress": "ADDRESS_OF_THE_GENERATED_ADDRESS",\n  "tokenId": TOKEN_ID // needed for non-fungible token\n} \n')))}u.isMDXComponent=!0}}]);