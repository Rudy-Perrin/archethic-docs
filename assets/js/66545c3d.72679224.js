"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7045],{3321:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>k,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=a(7462),n=a(7294),l=a(3905);a(1839);const s={id:"token",title:"Token",hide_table_of_contents:!1},r=void 0,i={unversionedId:"build/api/schema/objects/token",id:"build/api/schema/objects/token",title:"Token",description:"[token] represents a token metadata.",source:"@site/docs/build/api/schema/objects/token.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/token",permalink:"/archethic-docs/build/api/schema/objects/token",draft:!1,tags:[],version:"current",lastUpdatedAt:1675759996,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{id:"token",title:"Token",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"TokenTransfer",permalink:"/archethic-docs/build/api/schema/objects/token-transfer"},next:{title:"TransactionAttestation",permalink:"/archethic-docs/build/api/schema/objects/transaction-attestation"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>collection</b></code><Bullet /><code>[TokenProperties]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbcollectionbcodetokenproperties--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>decimals</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbdecimalsbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>genesis</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbgenesisbcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>id</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>ownerships</b></code><Bullet /><code>[Ownership]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-tokenbownershipsbcodeownership--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>properties</b></code><Bullet /><code>TokenProperties</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbpropertiesbcodetokenproperties-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>supply</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbsupplybcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>symbol</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbsymbolbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Token.<b>type</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbtypebcodestring-",level:4},{value:"Returned by",id:"returned-by",level:3}],k=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),h={toc:c,Bullet:k,SpecifiedBy:p,Badge:m};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"[token]"," represents a token metadata.\nIt includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"genesis: Genesis address to the token"),(0,l.kt)("li",{parentName:"ul"},"name: Name of the token"),(0,l.kt)("li",{parentName:"ul"},"symbol: Symbol of the token"),(0,l.kt)("li",{parentName:"ul"},"supply: Supply of the token"),(0,l.kt)("li",{parentName:"ul"},"type: Type of the token"),(0,l.kt)("li",{parentName:"ul"},"decimals: Number of decimals of the token"),(0,l.kt)("li",{parentName:"ul"},"properties: Properties of the token (if any)"),(0,l.kt)("li",{parentName:"ul"},"collection: List of properties for a collection (if any)"),(0,l.kt)("li",{parentName:"ul"},"ownerships: authorization/delegations containing list of secrets and their authorized public keys to proof the ownership"),(0,l.kt)("li",{parentName:"ul"},"id: Unique identification of the token on the chain")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Token {\n  collection: [TokenProperties]\n  decimals: Int\n  genesis: Address\n  id: String\n  name: String\n  ownerships: [Ownership]\n  properties: TokenProperties\n  supply: Int\n  symbol: String\n  type: String\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbcollectionbcodetokenproperties--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"collection"))),(0,l.kt)(k,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/token-properties"},(0,l.kt)("inlineCode",{parentName:"a"},"[TokenProperties]"))," ",(0,l.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbdecimalsbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"decimals"))),(0,l.kt)(k,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbgenesisbcodeaddress-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"genesis"))),(0,l.kt)(k,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,l.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbidbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"id"))),(0,l.kt)(k,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"name"))),(0,l.kt)(k,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbownershipsbcodeownership--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"ownerships"))),(0,l.kt)(k,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/ownership"},(0,l.kt)("inlineCode",{parentName:"a"},"[Ownership]"))," ",(0,l.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbpropertiesbcodetokenproperties-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"properties"))),(0,l.kt)(k,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/token-properties"},(0,l.kt)("inlineCode",{parentName:"a"},"TokenProperties"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbsupplybcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"supply"))),(0,l.kt)(k,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbsymbolbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"symbol"))),(0,l.kt)(k,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-tokenbtypebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Token.",(0,l.kt)("b",null,"type"))),(0,l.kt)(k,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/queries/token"},(0,l.kt)("inlineCode",{parentName:"a"},"token")),"  ",(0,l.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);