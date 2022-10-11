"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[246],{9461:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=i(7462),o=(i(7294),i(3905)),a=i(1839);const r={id:"election",title:"Election"},l=void 0,s={unversionedId:"build/core/election",id:"build/core/election",title:"Election",description:"Archethic provides rotating algorithm to elect validation and storage nodes.",source:"@site/docs/build/core/election.md",sourceDirName:"build/core",slug:"/build/core/election",permalink:"/archethic-docs/build/core/election",draft:!1,tags:[],version:"current",lastUpdatedAt:1665513042,formattedLastUpdatedAt:"Oct 11, 2022",frontMatter:{id:"election",title:"Election"},sidebar:"docs",previous:{title:"Archethic's database",permalink:"/archethic-docs/build/core/database"},next:{title:"Mining",permalink:"/archethic-docs/build/core/mining/"}},c={},d=[{value:"Heuristic constraints",id:"heuristic-constraints",level:2},{value:"Low-Level integrations",id:"low-level-integrations",level:2},{value:"Hypergeomtric distribution",id:"hypergeomtric-distribution",level:3}],u={toc:d};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Archethic provides rotating algorithm to elect validation and storage nodes. "),(0,o.kt)("p",null,"Validation and Storage Election algorithm provides also list of heuristic constraints to fine grained elections. "),(0,o.kt)("h2",{id:"heuristic-constraints"},"Heuristic constraints"),(0,o.kt)("p",null,"An ETS table is used to store the last constraints values for a faster lookup."),(0,o.kt)("p",null,"Storage constraints are defined by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"minimum storage geographical patches"),(0,o.kt)("li",{parentName:"ul"},"minimum storage average by geographical patch"),(0,o.kt)("li",{parentName:"ul"},"number of replicast")),(0,o.kt)("p",null,"Validation constraints are defined by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"minimum validation geographical patch distribution"),(0,o.kt)("li",{parentName:"ul"},"minimum validation nodes"),(0,o.kt)("li",{parentName:"ul"},"validation number based on a given transaction")),(0,o.kt)("h2",{id:"low-level-integrations"},"Low-Level integrations"),(0,o.kt)("p",null,"Sometimes for performance issue, we are leveraging low-level programming in C, to perform fast computation."),(0,o.kt)("h3",{id:"hypergeomtric-distribution"},"Hypergeomtric distribution"),(0,o.kt)("p",null,"For example, the Hypergeometric Distribution simulation is computed in C and wrapped in an Erlang port communication.\nBut for better simulation lookup, a cache is provided as process to hold the last value for a given number of nodes.\nIf the number of nodes changes, the hypergeometric distribution will be trigger."),(0,o.kt)("p",null,"The C program is using ",(0,o.kt)("inlineCode",{parentName:"p"},"GMP")," for big float arithemetic operations and ",(0,o.kt)("inlineCode",{parentName:"p"},"OMP")," for parallel computations to make it efficient."),(0,o.kt)(a.G,{chart:"sequenceDiagram\n    Election->>+Process: Run simulation for N nodes\n    alt with cache value\n        Process--\x3e>Election: Retrieve cached value\n    else without cache value\n        Process->>C: Run simultation\n    end\n",mdxType:"Mermaid"}))}p.isMDXComponent=!0}}]);