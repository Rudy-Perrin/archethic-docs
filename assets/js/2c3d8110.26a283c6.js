"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4732],{7376:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905)),r=a(1839);const s={id:"scheduler",title:"OracleChain Scheduler",sidebar_label:"Scheduler"},o=void 0,l={unversionedId:"build/core/oracle-chain/scheduler",id:"build/core/oracle-chain/scheduler",title:"OracleChain Scheduler",description:"The OracleChain module contains a process in charge of scheduling the data fetching and transaction submitting.",source:"@site/docs/build/core/oracle-chain/scheduler.md",sourceDirName:"build/core/oracle-chain",slug:"/build/core/oracle-chain/scheduler",permalink:"/archethic-docs/build/core/oracle-chain/scheduler",draft:!1,tags:[],version:"current",lastUpdatedAt:1677665861,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{id:"scheduler",title:"OracleChain Scheduler",sidebar_label:"Scheduler"},sidebar:"docs",previous:{title:"Memory database",permalink:"/archethic-docs/build/core/oracle-chain/memory-table"},next:{title:"Service",permalink:"/archethic-docs/build/core/oracle-chain/service"}},c={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The OracleChain module contains a process in charge of scheduling the data fetching and transaction submitting."),(0,i.kt)("p",null,"It's modeled as finite state machine."),(0,i.kt)("p",null,"Three main state are represented:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IDLE"),": When the process is waiting a new tick to be triggered based on some interval"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Polling"),": When the process must fetch data from external sources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Summary"),": When the process must aggregate the entire polling transactions for a given interval")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Mainnet and Testnet can have different values based on environment variables."),(0,i.kt)("p",{parentName:"admonition"},"This is due to simulate quicker events and summary."),(0,i.kt)("p",{parentName:"admonition"},"For example,"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"on Mainnet: each polling is triggered each minute and the summary each day at 00:00 UTC."),(0,i.kt)("li",{parentName:"ul"},"on Testnet: each polling is triggered each 10s and the summary each minute.\n:::")),(0,i.kt)("p",{parentName:"admonition"},"For each actionable state, the process determines if the current running node is in charge to fetch or emit the transaction, based on the election algorithm."),(0,i.kt)("p",{parentName:"admonition"},"Also to avoid any useless transactions, the process identifies if a new transaction must be emitted regarding the freshness of the information retrieved from the Oracle services."),(0,i.kt)("p",{parentName:"admonition"},"You can find below a schema representing this finite state machine and its related events.")),(0,i.kt)(r.G,{chart:'stateDiagram-v2\n    [*] --\x3e Idle\n    Idle --\x3e Idle: "tick\n\n    state "Is summary time ?" as Is_Summary_Time\n\n    state if_state <<choice>>\n    Idle --\x3e Is_Summary_Time\n    Is_Summary_Time --\x3e if_state\n    if_state --\x3e Summary: "Yes"\n    if_state --\x3e Polling: "No"\n\n\n    state Polling {\n        state if_state_polling <<choice>>\n        state "Is polling trigger node ?" as IsPollingTriggerNode\n        state "Fetching data" as FetchData\n        state if_state_polling_new_data <<choice>>\n        state "Is new data ?" as IsNewData\n        state "Send oracle transaction" as SendOracleTransaction\n\n        [*] --\x3e IsPollingTriggerNode\n        IsPollingTriggerNode --\x3e if_state_polling\n        if_state_polling --\x3e [*]: "No"\n        if_state_polling --\x3e FetchData: "Yes"\n        FetchData --\x3e IsNewData\n\n        IsNewData --\x3e if_state_polling_new_data\n        if_state_polling_new_data --\x3e [*]: "No"\n        if_state_polling_new_data --\x3e SendOracleTransaction: "Yes"\n        SendOracleTransaction --\x3e [*]\n    }\n\n    Polling --\x3e Idle\n\n\n    state Summary {\n        state if_state_summary <<choice>>\n        state "Is summary trigger node ?" as IsSummaryTriggerNode\n        state "Send summary transaction" as SendSummaryTransaction\n\n        [*] --\x3e IsSummaryTriggerNode\n        IsSummaryTriggerNode --\x3e if_state_summary\n        if_state_summary --\x3e [*]: "No"\n        if_state_summary --\x3e SendSummaryTransaction: "Yes"\n        SendSummaryTransaction --\x3e [*]\n    }\n\n    Summary --\x3e Idle',mdxType:"Mermaid"}),(0,i.kt)("p",null,":::note"))}h.isMDXComponent=!0}}]);