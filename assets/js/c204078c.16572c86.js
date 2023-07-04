"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));n(8209);const a={id:"messaging",title:"Messaging"},o=void 0,l={unversionedId:"build/core/p2p/messaging",id:"build/core/p2p/messaging",title:"Messaging",description:"Archethic Blockchain is used a brand new P2P layer from the Supervised Multicast, but to ensure the best data transmission possible, we are using two modern approaches: Stream Multiplexer and Binary Protocol.",source:"@site/docs/build/core/p2p/messaging.md",sourceDirName:"build/core/p2p",slug:"/build/core/p2p/messaging",permalink:"/build/core/p2p/messaging",draft:!1,tags:[],version:"current",lastUpdatedAt:1688503773,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{id:"messaging",title:"Messaging"},sidebar:"docs",previous:{title:"P2P",permalink:"/build/core/p2p/"},next:{title:"Node",permalink:"/build/core/p2p/node"}},s={},p=[{value:"Stream Multiplexer",id:"stream-multiplexer",level:2},{value:"Binary Protocol",id:"binary-protocol",level:2},{value:"Message envelop",id:"message-envelop",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Archethic Blockchain is used a brand new P2P layer from the ",(0,i.kt)("a",{parentName:"p",href:"/learn/p2p#archethics-way"},"Supervised Multicast"),", but to ensure the best data transmission possible, we are using two modern approaches: ",(0,i.kt)("inlineCode",{parentName:"p"},"Stream Multiplexer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Binary Protocol"),". "),(0,i.kt)("p",null,"Those two features helps to achieve a low latency P2P messaging."),(0,i.kt)("h2",{id:"stream-multiplexer"},"Stream Multiplexer"),(0,i.kt)("p",null,"Stream Multiplexing allows multiple independent logical streams to share a common underlying transport stream and ",(0,i.kt)("br",null),"\nthere are many independent streams of communication between peers."),(0,i.kt)("p",null,"Stream Multiplexing amortizes the overhead of establishing a transport connection and helps to distinguish which messages to handle in a concurrent way."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"|---------|                           |---------|\n| Service |                           | Service |\n|---------|                           |---------|\n    | Msg ID: 2    |------------|         |\n    |--------------| Connection |---------| Msg ID: 1\n                   |    TCP     |\n    |--------------|------------|---------|\n    | Msg ID: 1                           | Msg ID: 2\n|---------|                           |---------|\n| Service |                           | Service |\n|---------|                           |---------|\n")),(0,i.kt)("p",null,"In the current implementation, each node connection is backed by a GenServer which serializes the call the remote endpoint, through an established connection."),(0,i.kt)("p",null,"Even if the calls are serialized, it leverages a non-blocking messaging, so multiple messages can be sent with several independant clients. However after a certain amount of time(timeout: 5s), the message is dropped to reduce the message queue."),(0,i.kt)("h2",{id:"binary-protocol"},"Binary Protocol"),(0,i.kt)("p",null,"Network latency is very important to reach an unlimited and really scalable network and using binary protocol helps to reduce bandwidth."),(0,i.kt)("p",null,"Different kind of solutions existing for binary protocol: Protobuf, Avro, Thrift, MsgPack, etc."),(0,i.kt)("p",null,"However, to support a custom and efficient binary serialization, Archethic uses it own binary protocol through the transport layer to reduce and to optimize by the message, the data to send."),(0,i.kt)("p",null,"This aspect is important, when we are dealing with bits, to reduce byte size."),(0,i.kt)("p",null,"For example, if we want to serialize this bitstring: 11100000"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"With existing solutions, we may end up with a list of 8 bytes"),(0,i.kt)("li",{parentName:"ul"},"With a custom solution, we serialize it with only 1 byte")),(0,i.kt)("h2",{id:"message-envelop"},"Message envelop"),(0,i.kt)("p",null,"To support privacy and security, each message is wrapped in a ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageEnvelop")," struct within:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Message ID: used in the stream multiplexing"),(0,i.kt)("li",{parentName:"ul"},"Message to send"),(0,i.kt)("li",{parentName:"ul"},"Sender public key: used to determine the liveness of the node from the recipient P2P view")),(0,i.kt)("p",null,"The envelop is then encrypted with the recipient public key (known by the network) using ECIES cryptography protocol."))}d.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);