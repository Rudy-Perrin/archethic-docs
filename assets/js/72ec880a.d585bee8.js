"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>A});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,A=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(A,i(i({ref:t},d),{},{components:n})):a.createElement(A,i({ref:t},d))}));function A(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));n(8209);const o={id:"mock-form",title:"Smart Contracts Playground - Mock form",sidebar_label:"Mock form",sidebar_position:100},i=void 0,s={unversionedId:"build/smart-contracts/playground/mock-form",id:"build/smart-contracts/playground/mock-form",title:"Smart Contracts Playground - Mock form",description:"Mocks allow developers to simulate the behaviour of functions that have side-effects. A few examples of side-effect: retrieve the genesis address of a chain, retrieve the date, a random value etc.",source:"@site/docs/build/smart-contracts/playground/mock-form.md",sourceDirName:"build/smart-contracts/playground",slug:"/build/smart-contracts/playground/mock-form",permalink:"/build/smart-contracts/playground/mock-form",draft:!1,tags:[],version:"current",lastUpdatedAt:1699828423,formattedLastUpdatedAt:"Nov 12, 2023",sidebarPosition:100,frontMatter:{id:"mock-form",title:"Smart Contracts Playground - Mock form",sidebar_label:"Mock form",sidebar_position:100},sidebar:"docs",previous:{title:"Transaction form",permalink:"/build/smart-contracts/playground/transaction-form"},next:{title:"Fees",permalink:"/build/smart-contracts/fees"}},l={},c=[{value:"Example: Time.now/0",id:"example-timenow0",level:2},{value:"Example: Chain.get_genesis_address/1",id:"example-chainget_genesis_address1",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mocks allow developers to simulate the behaviour of functions that have side-effects. A few examples of side-effect: retrieve the genesis address of a chain, retrieve the date, a random value etc."),(0,r.kt)("p",null,"The mock form is part of the trigger panel."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"the mock form is display",src:n(1604).Z,width:"415",height:"96"})),(0,r.kt)("p",null,"These functions must be mocked to test Smart Contracts that use them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/build/smart-contracts/language/library#get_genesis_address1-io"},"Chain.get_genesis_address/1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/build/smart-contracts/language/library#get_first_transaction_address1-io"},"Chain.get_first_transaction_address/1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/build/smart-contracts/language/library#get_genesis_public_key1-io"},"Chain.get_genesis_public_key/1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/build/smart-contracts/language/library#now0"},"Time.now/0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/build/smart-contracts/language/library#fetch_id_from_address1-io"},"Token.fetch_id_from_address/1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/build/smart-contracts/language/library#fetch1-io"},"Http.fetch/1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/build/smart-contracts/language/library#fetch_many1-io"},"Http.fetch_many/1"))),(0,r.kt)("p",null,"A function can be mocked multiple times, for example to mock multiple different inputs."),(0,r.kt)("h2",{id:"example-timenow0"},"Example: Time.now/0"),(0,r.kt)("p",null,"Time.now/0 can be mocked to simulate a future execution of the contract. This one is actually optional, the playground will use current time if it is not set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'@version 1\nactions triggered_by: interval, at: "* * * * *" do \n  Contract.set_content(Time.now())\nend\n')),(0,r.kt)("p",null,"All you need to do is fill the expected output (seconds since epoch):"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mocking the Time.now/0",src:n(2171).Z,width:"3600",height:"2390"})),(0,r.kt)("p",null,"Then click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add")," button, then ",(0,r.kt)("inlineCode",{parentName:"p"},"trigger")," to test the Smart Contract:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Time.now/0 is mocked",src:n(2537).Z,width:"3600",height:"2390"})),(0,r.kt)("p",null,"We can see via the console that the mock was called as expected."),(0,r.kt)("h2",{id:"example-chainget_genesis_address1"},"Example: Chain.get_genesis_address/1"),(0,r.kt)("p",null,"Let's see an example with a function that takes an argument.\nIn the form you specify the output for a given input. Let's try it!"),(0,r.kt)("p",null,"The screenshot below mocked the function with these values: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"input: ",(0,r.kt)("inlineCode",{parentName:"li"},"00002223BBD4EC3D64AE597696C7D7ADE1CEE65C639D885450AD2D7B75592AC76AFA")),(0,r.kt)("li",{parentName:"ul"},"output: ",(0,r.kt)("inlineCode",{parentName:"li"},"MOCKED"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'@version 1\nactions triggered_by: interval, at: "* * * * *" do\n  Contract.set_content(Chain.get_genesis_address(0x00002223bbd4ec3d64ae597696c7d7ade1cee65c639d885450ad2d7b75592ac76afa))  \nend\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"a contract that used Chain.get_genesis_address/1 is tested",src:n(8745).Z,width:"3600",height:"2390"})),(0,r.kt)("p",null,"We can see via the console that the mock was called as expected."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"a contract that used Chain.get_genesis_address/1 is tested",src:n(4847).Z,width:"3600",height:"2390"})))}m.isMDXComponent=!0},1604:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},8745:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/playground_form_mock_chain_get_genesis_address-551bfba5c9fb4c85e95f5bc789767c9e.png"},4847:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/playground_form_mock_chain_get_genesis_address2-8f7ef34a1659021e6a7283d31014a6f5.png"},2171:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/playground_form_mock_time_now-d7694a9f2dd01c0a0010e8d18bfbe8e5.png"},2537:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/playground_form_mock_time_now2-5a73d7c10f300e12b9cc96892afaaa1d.png"},8209:(e,t,n)=>{n(7294)}}]);