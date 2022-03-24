"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3618],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71590:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"core",title:"Core development"},s=void 0,c={unversionedId:"build/core",id:"build/core",title:"Core development",description:"ARCHEthic Node repository can be found here",source:"@site/docs/build/core.md",sourceDirName:"build",slug:"/build/core",permalink:"/archethic-docs/build/core",tags:[],version:"current",lastUpdatedAt:1648109056,formattedLastUpdatedAt:"3/24/2022",frontMatter:{id:"core",title:"Core development"},sidebar:"docs",previous:{title:"Testnet",permalink:"/archethic-docs/build/testnet"},next:{title:"Messaging",permalink:"/archethic-docs/build/core/p2p/messaging"}},u=[{value:"Technology Stack",id:"technology-stack",children:[{value:"Why Elixir ?",id:"why-elixir-",children:[],level:3},{value:"Why C ?",id:"why-c-",children:[],level:3},{value:"Why ScyllaDB ?",id:"why-scylladb-",children:[],level:3}],level:2},{value:"Structure",id:"structure",children:[],level:2}],d={toc:u};function p(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ARCHEthic Node repository can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node"},"here")),(0,a.kt)("h2",{id:"technology-stack"},"Technology Stack"),(0,a.kt)("p",null,"ARCHEthic Blockchain node used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Elixir"),(0,a.kt)("li",{parentName:"ul"},"C"),(0,a.kt)("li",{parentName:"ul"},"ScyllaDB")),(0,a.kt)("h3",{id:"why-elixir-"},"Why Elixir ?"),(0,a.kt)("p",null,"Elixir is a dynamic, functional language for building scalable and maintainable applications."),(0,a.kt)("p",null,"It leverages the Erlang VM, known for running low-latency, distributed, and fault-tolerant systems. "),(0,a.kt)("p",null,"Elixir is successfully used in web development, embedded software, data ingestion, and multimedia processing, across a wide range of industries."),(0,a.kt)("p",null,"When we are building P2P systems and Blockchain technologies we need to think about fault-tolerance, low-latency, concurrent/parallelism.\nElixir matches all those requirements."),(0,a.kt)("p",null,"Because all Elixir code runs inside lightweight threads of execution (called processes) that are isolated and exchange information via messages, we can build fast\nprocessing of data which result in a high TPS for a better scalability."),(0,a.kt)("p",null,"The unavoidable truth about software running in production is that things will go wrong."),(0,a.kt)("p",null,"Even more when we take network, file systems, and other third-party resources into account."),(0,a.kt)("p",null,"Elixir provides supervisors which describe how to restart parts of your system when things go awry, going back to a known initial state that is guaranteed to work."),(0,a.kt)("p",null,"This feature ensures in case of failure, the entire system will not be down, and the isolation provided by the processes and their restarting strategy helps us to achieve it."),(0,a.kt)("p",null,"Functional programming promotes a coding style that helps developers write code that is short, concise, and maintainable."),(0,a.kt)("p",null,"Out of the box, Erlang VM provides the capability to hot reload code, which is the best case scenario if we want to provide an on-chain governance without restarting nodes."),(0,a.kt)("h3",{id:"why-c-"},"Why C ?"),(0,a.kt)("p",null,"We need to interact with hardware components and C seems the best candidate, so we are using this language to communicate with TPM for instance."),(0,a.kt)("p",null,"But also, for some intensive task which are really complex in computing, we rely on C to perform those processing."),(0,a.kt)("h3",{id:"why-scylladb-"},"Why ScyllaDB ?"),(0,a.kt)("p",null,"ScyllaDB is a NoSQL database built from the idea of Cassandra - Wide Column Database - but with more efficiency in terms of memory consumption and CPU processing.\nAs it's implemented in C++, it's faster and lightweight and takes advantage of low-level Linux primitives."),(0,a.kt)("p",null,"We are using a Wide Column Database, but we want to be able to fetch only some part of the data, so a column database fits really well for this kind of purpose.\nMoreover, we want a database with a high throughput in writing, and ScyllaDB fits really well with its LSM storage engine."),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("p",null,"Code base is divided into domains (contexts) for better single responsibility principle:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"core structure",src:n(91253).Z})))}p.isMDXComponent=!0},91253:function(e,t,n){t.Z=n.p+"assets/images/core_structure-e53af1776beef639ac15f67f9344dab0.png"}}]);