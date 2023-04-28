"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6748],{9323:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>c,assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>i});var a=n(7462),s=n(7294),o=n(3905);n(1839);const l={id:"unspent-output",title:"UnspentOutput",hide_table_of_contents:!1},d=void 0,r={unversionedId:"build/api/schema/objects/unspent-output",id:"build/api/schema/objects/unspent-output",title:"UnspentOutput",description:"[UnspentOutput] represents the remaining unspent output of the transaction.",source:"@site/docs/build/api/schema/objects/unspent-output.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/unspent-output",permalink:"/build/api/schema/objects/unspent-output",draft:!1,tags:[],version:"current",lastUpdatedAt:1682663852,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{id:"unspent-output",title:"UnspentOutput",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"UcoTransfer",permalink:"/build/api/schema/objects/uco-transfer"},next:{title:"ValidationStamp",permalink:"/build/api/schema/objects/validation-stamp"}},u={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UnspentOutput.<b>amount</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-unspentoutputbamountbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UnspentOutput.<b>from</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-unspentoutputbfrombcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UnspentOutput.<b>timestamp</b></code><Bullet /><code>Timestamp</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-unspentoutputbtimestampbcodetimestamp-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UnspentOutput.<b>tokenAddress</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-unspentoutputbtokenaddressbcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UnspentOutput.<b>tokenId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-unspentoutputbtokenidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UnspentOutput.<b>type</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-unspentoutputbtypebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UnspentOutput.<b>version</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-unspentoutputbversionbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,o.kt)(s.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:i,Bullet:p,SpecifiedBy:c,Badge:m};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[UnspentOutput]"," represents the remaining unspent output of the transaction.\nIt includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"From: transaction which send the amount of assets"),(0,o.kt)("li",{parentName:"ul"},"Amount: asset amount"),(0,o.kt)("li",{parentName:"ul"},"Type: UCO/token"),(0,o.kt)("li",{parentName:"ul"},"token address: address of the token if the type is token"),(0,o.kt)("li",{parentName:"ul"},"token id: It is the id for a token which is allocated when the token is minted."),(0,o.kt)("li",{parentName:"ul"},"Timestamp: Date time when the UTXO created/manipulated"),(0,o.kt)("li",{parentName:"ul"},"Version: Version of the UTXO data structure")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UnspentOutput {\n  amount: Int\n  from: Address\n  timestamp: Timestamp\n  tokenAddress: Address\n  tokenId: Int\n  type: String\n  version: Int\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-unspentoutputbamountbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UnspentOutput.",(0,o.kt)("b",null,"amount"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-unspentoutputbfrombcodeaddress-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UnspentOutput.",(0,o.kt)("b",null,"from"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,o.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-unspentoutputbtimestampbcodetimestamp-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UnspentOutput.",(0,o.kt)("b",null,"timestamp"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/timestamp"},(0,o.kt)("inlineCode",{parentName:"a"},"Timestamp"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-unspentoutputbtokenaddressbcodeaddress-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UnspentOutput.",(0,o.kt)("b",null,"tokenAddress"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,o.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-unspentoutputbtokenidbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UnspentOutput.",(0,o.kt)("b",null,"tokenId"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-unspentoutputbtypebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UnspentOutput.",(0,o.kt)("b",null,"type"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-unspentoutputbversionbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UnspentOutput.",(0,o.kt)("b",null,"version"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/ledger-operations"},(0,o.kt)("inlineCode",{parentName:"a"},"LedgerOperations")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);