"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7482],{2507:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(7462),o=a(7294),l=a(3905);a(1839);const s={id:"transaction",title:"Transaction",hide_table_of_contents:!1},i=void 0,c={unversionedId:"build/api/schema/objects/transaction",id:"build/api/schema/objects/transaction",title:"Transaction",description:"[Transaction] represents a unitary transaction in the Archethic network.",source:"@site/docs/build/api/schema/objects/transaction.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/transaction",permalink:"/archethic-docs/build/api/schema/objects/transaction",draft:!1,tags:[],version:"current",lastUpdatedAt:1665513042,formattedLastUpdatedAt:"Oct 11, 2022",frontMatter:{id:"transaction",title:"Transaction",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"TransactionMovement",permalink:"/archethic-docs/build/api/schema/objects/transaction-movement"},next:{title:"UcoData",permalink:"/archethic-docs/build/api/schema/objects/uco-data"}},r={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>address</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionbaddressbcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>balance</b></code><Bullet /><code>Balance</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-transactionbbalancebcodebalance-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>chainLength</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionbchainlengthbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>crossValidationStamps</b></code><Bullet /><code>[CrossValidationStamp]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-transactionbcrossvalidationstampsbcodecrossvalidationstamp--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>data</b></code><Bullet /><code>Data</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-transactionbdatabcodedata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>inputs</b></code><Bullet /><code>[TransactionInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-transactionbinputsbcodetransactioninput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.inputs.<b>pagingOffset</b></code><Bullet /><code>NonNegInteger</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputsbpagingoffsetbcodenonneginteger-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>originSignature</b></code><Bullet /><code>Hex</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionboriginsignaturebcodehex-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>previousPublicKey</b></code><Bullet /><code>PublicKey</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionbpreviouspublickeybcodepublickey-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>previousSignature</b></code><Bullet /><code>Hex</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionbprevioussignaturebcodehex-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>type</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionbtypebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>validationStamp</b></code><Bullet /><code>ValidationStamp</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-transactionbvalidationstampbcodevalidationstamp-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transaction.<b>version</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionbversionbcodeint-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),h={toc:d,Bullet:p,SpecifiedBy:m,Badge:u};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"[Transaction]"," represents a unitary transaction in the Archethic network."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Transaction {\n  address: Address\n  balance: Balance\n  chainLength: Int\n  crossValidationStamps: [CrossValidationStamp]\n  data: Data\n  inputs(\n  limit: PosInteger\n  pagingOffset: NonNegInteger\n): [TransactionInput]\n  originSignature: Hex\n  previousPublicKey: PublicKey\n  previousSignature: Hex\n  type: String\n  validationStamp: ValidationStamp\n  version: Int\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-transactionbaddressbcodeaddress-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,l.kt)("b",null,"address"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,l.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-transactionbbalancebcodebalance-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,l.kt)("b",null,"balance"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/balance"},(0,l.kt)("inlineCode",{parentName:"a"},"Balance"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-transactionbchainlengthbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,l.kt)("b",null,"chainLength"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-transactionbcrossvalidationstampsbcodecrossvalidationstamp--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,l.kt)("b",null,"crossValidationStamps"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/cross-validation-stamp"},(0,l.kt)("inlineCode",{parentName:"a"},"[CrossValidationStamp]"))," ",(0,l.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-transactionbdatabcodedata-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,l.kt)("b",null,"data"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/data"},(0,l.kt)("inlineCode",{parentName:"a"},"Data"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-transactionbinputsbcodetransactioninput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,l.kt)("b",null,"inputs"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/transaction-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[TransactionInput]"))," ",(0,l.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-transactioninputsblimitbcodeposinteger-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Transaction.inputs.",(0,l.kt)("b",null,"limit"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/build/api/schema/scalars/pos-integer"},(0,l.kt)("inlineCode",{parentName:"a"},"PosInteger"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,l.kt)("h5",{id:"code-style-fontweight-normal-transactioninputsbpagingoffsetbcodenonneginteger-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Transaction.inputs.",(0,l.kt)("b",null,"pagingOffset"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/build/api/schema/scalars/non-neg-integer"},(0,l.kt)("inlineCode",{parentName:"a"},"NonNegInteger"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-transactionboriginsignaturebcodehex-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,l.kt)("b",null,"originSignature"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/hex"},(0,l.kt)("inlineCode",{parentName:"a"},"Hex"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-transactionbpreviouspublickeybcodepublickey-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,l.kt)("b",null,"previousPublicKey"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/public-key"},(0,l.kt)("inlineCode",{parentName:"a"},"PublicKey"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-transactionbprevioussignaturebcodehex-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,l.kt)("b",null,"previousSignature"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/hex"},(0,l.kt)("inlineCode",{parentName:"a"},"Hex"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-transactionbtypebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,l.kt)("b",null,"type"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-transactionbvalidationstampbcodevalidationstamp-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,l.kt)("b",null,"validationStamp"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/validation-stamp"},(0,l.kt)("inlineCode",{parentName:"a"},"ValidationStamp"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-transactionbversionbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Transaction.",(0,l.kt)("b",null,"version"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/queries/last-transaction"},(0,l.kt)("inlineCode",{parentName:"a"},"lastTransaction")),"  ",(0,l.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/queries/network-transactions"},(0,l.kt)("inlineCode",{parentName:"a"},"networkTransactions")),"  ",(0,l.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/queries/transaction"},(0,l.kt)("inlineCode",{parentName:"a"},"transaction")),"  ",(0,l.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/queries/transaction-chain"},(0,l.kt)("inlineCode",{parentName:"a"},"transactionChain")),"  ",(0,l.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/queries/transactions"},(0,l.kt)("inlineCode",{parentName:"a"},"transactions")),"  ",(0,l.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);