"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6518],{2658:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=t(7462),n=(t(7294),t(3905));t(1839);const l={id:"memory-table",title:"OracleChain Memory Tables",sidebar_label:"Memory database"},i=void 0,o={unversionedId:"build/core/oracle-chain/memory-table",id:"build/core/oracle-chain/memory-table",title:"OracleChain Memory Tables",description:"OracleChain component provides scheduler and services to maintain transaction chain and real world data integration.",source:"@site/docs/build/core/oracle-chain/mem_table.md",sourceDirName:"build/core/oracle-chain",slug:"/build/core/oracle-chain/memory-table",permalink:"/build/core/oracle-chain/memory-table",draft:!1,tags:[],version:"current",lastUpdatedAt:1684740864,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{id:"memory-table",title:"OracleChain Memory Tables",sidebar_label:"Memory database"},sidebar:"docs",previous:{title:"OracleChain",permalink:"/build/core/oracle-chain/"},next:{title:"Scheduler",permalink:"/build/core/oracle-chain/scheduler"}},c={},d=[],m={toc:d};function s(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"OracleChain component provides ",(0,n.kt)("a",{parentName:"p",href:"/build/core/oracle-chain/scheduler"},"scheduler")," and ",(0,n.kt)("a",{parentName:"p",href:"/build/core/oracle-chain/service"},"services")," to maintain transaction chain and real world data integration."),(0,n.kt)("p",null,"But we need a way to access quickly this information for better computation latency."),(0,n.kt)("p",null,"For this purpose, the OracleChain service maintains a memory table using ETS to hold the information according to their date."),(0,n.kt)("p",null,"It represented in that way:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Timestamp"),(0,n.kt)("th",{parentName:"tr",align:null},"Service"),(0,n.kt)("th",{parentName:"tr",align:null},"Data")))),(0,n.kt)("p",null,"For example for the UCO service we may have:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Timestamp"),(0,n.kt)("th",{parentName:"tr",align:null},"Service"),(0,n.kt)("th",{parentName:"tr",align:null},"Data"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1622801400"),(0,n.kt)("td",{parentName:"tr",align:null},"UCO"),(0,n.kt)("td",{parentName:"tr",align:null},'%{ "eur" => 0.02 }')))),(0,n.kt)("p",null,"The table is loading after each oracle or oracle summary transaction and during the bootstrap for faster computation."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The transaction's fee algorithm is using this cached information to provide this computation quickly")))}s.isMDXComponent=!0}}]);