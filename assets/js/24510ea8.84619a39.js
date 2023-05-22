"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1340],{8789:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var a=i(7462),r=(i(7294),i(3905));i(1839);const c={id:"service",title:"Oracle Chain Service",sidebar_label:"Service"},n=void 0,o={unversionedId:"build/core/oracle-chain/service",id:"build/core/oracle-chain/service",title:"Oracle Chain Service",description:"OracleChain provides a way to extend it and to add more services to the scheduler.",source:"@site/docs/build/core/oracle-chain/service.md",sourceDirName:"build/core/oracle-chain",slug:"/build/core/oracle-chain/service",permalink:"/build/core/oracle-chain/service",draft:!1,tags:[],version:"current",lastUpdatedAt:1684740864,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{id:"service",title:"Oracle Chain Service",sidebar_label:"Service"},sidebar:"docs",previous:{title:"Scheduler",permalink:"/build/core/oracle-chain/scheduler"},next:{title:"P2P",permalink:"/build/core/p2p/"}},l={},h=[{value:"Behavior",id:"behavior",level:2},{value:"Example",id:"example",level:3},{value:"Configuration",id:"configuration",level:2}],s={toc:h};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OracleChain provides a way to extend it and to add more services to the scheduler."),(0,r.kt)("h2",{id:"behavior"},"Behavior"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node/blob/master/lib/archethic/oracle_chain/services/impl.ex"},"behavior")," defines functions to extend to support new services"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fetch: This will perform the data fetching and will return a map of the data to be serialized by the transaction"),(0,r.kt)("li",{parentName:"ul"},"Verify: This will let validation nodes asserts the information provided in the new oracle transaction"),(0,r.kt)("li",{parentName:"ul"},"Parse data: This will parse the incoming data from the oracle transaction and checks its validatity")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node/blob/master/lib/archethic/oracle_chain/services/uco_price.ex"},"UCO service behavior")," is implemented in such way:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fetch: it request Coingecko to fetch the USD/EUR pair of the Archethic token"),(0,r.kt)("li",{parentName:"ul"},"Verify: fetch Coingecko again to gather the token price and compare price using a standard deviation function with a threshold of 0.01"),(0,r.kt)("li",{parentName:"ul"},"Parse data: Ensure the data is map with the USD/EUR pair and an amount encoded as float")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Along with the definition of the new service, we need to inform how to add this service to the ",(0,r.kt)("a",{parentName:"p",href:"/build/core/oracle-chain/scheduler"},"scheduler"),".\nFor this we need to add the service in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node/blob/master/config/config.exs"},"configuration (config.exs)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},"config :archethic, Archethic.OracleChain,\n  services: [\n    uco: Archethic.OracleChain.Services.UCOPrice,\n    mynewservice: Archethic.OracleChain.Service.MyNewService # Added line\n  ]\n")))}d.isMDXComponent=!0}}]);