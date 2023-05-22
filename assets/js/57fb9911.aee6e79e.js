"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4889],{4112:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>r,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=a(7462),o=a(7294),s=a(3905);a(1839);const l={id:"ledger-operations",title:"LedgerOperations",hide_table_of_contents:!1},r=void 0,d={unversionedId:"build/api/schema/objects/ledger-operations",id:"build/api/schema/objects/ledger-operations",title:"LedgerOperations",description:"[LedgerOperations] represents the ledger operations performed by the transaction",source:"@site/docs/build/api/schema/objects/ledger-operations.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/ledger-operations",permalink:"/build/api/schema/objects/ledger-operations",draft:!1,tags:[],version:"current",lastUpdatedAt:1684740864,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{id:"ledger-operations",title:"LedgerOperations",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Endpoint",permalink:"/build/api/schema/objects/endpoint"},next:{title:"Ledger",permalink:"/build/api/schema/objects/ledger"}},i={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LedgerOperations.<b>fee</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-ledgeroperationsbfeebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LedgerOperations.<b>transactionMovements</b></code><Bullet /><code>[TransactionMovement]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-ledgeroperationsbtransactionmovementsbcodetransactionmovement--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LedgerOperations.<b>unspentOutputs</b></code><Bullet /><code>[UnspentOutput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-ledgeroperationsbunspentoutputsbcodeunspentoutput--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:c,Bullet:p,SpecifiedBy:u,Badge:m};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"[LedgerOperations]"," represents the ledger operations performed by the transaction\nIt includes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Transaction movements: assets transfers"),(0,s.kt)("li",{parentName:"ul"},"Unspent outputs: remaining unspent outputs"),(0,s.kt)("li",{parentName:"ul"},"Fee: transaction fee")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type LedgerOperations {\n  fee: Int\n  transactionMovements: [TransactionMovement]\n  unspentOutputs: [UnspentOutput]\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-ledgeroperationsbfeebcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"LedgerOperations.",(0,s.kt)("b",null,"fee"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-ledgeroperationsbtransactionmovementsbcodetransactionmovement--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"LedgerOperations.",(0,s.kt)("b",null,"transactionMovements"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/transaction-movement"},(0,s.kt)("inlineCode",{parentName:"a"},"[TransactionMovement]"))," ",(0,s.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-ledgeroperationsbunspentoutputsbcodeunspentoutput--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"LedgerOperations.",(0,s.kt)("b",null,"unspentOutputs"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/unspent-output"},(0,s.kt)("inlineCode",{parentName:"a"},"[UnspentOutput]"))," ",(0,s.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/objects/validation-stamp"},(0,s.kt)("inlineCode",{parentName:"a"},"ValidationStamp")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);