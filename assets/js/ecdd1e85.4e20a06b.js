"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1696],{2768:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),a=(r(7294),r(3905));r(1839);const i={id:"hardware-root-of-trust",title:"Harware Root of Trust"},n=void 0,s={unversionedId:"learn/cryptography/hardware-root-of-trust",id:"learn/cryptography/hardware-root-of-trust",title:"Harware Root of Trust",description:"What is hardware root of trust?",source:"@site/docs/learn/cryptography/hardware-root-of-trust.md",sourceDirName:"learn/cryptography",slug:"/learn/cryptography/hardware-root-of-trust",permalink:"/learn/cryptography/hardware-root-of-trust",draft:!1,tags:[],version:"current",lastUpdatedAt:1679651902,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{id:"hardware-root-of-trust",title:"Harware Root of Trust"},sidebar:"docs",previous:{title:"Cryptography",permalink:"/learn/cryptography/"},next:{title:"Decentralized Identity",permalink:"/learn/decentralized-id/"}},h={},l=[{value:"What is hardware root of trust?",id:"what-is-hardware-root-of-trust",level:2},{value:"Why hardware root of trust for Archethic?",id:"why-hardware-root-of-trust-for-archethic",level:2},{value:"Implementation of Hardware Root of Trust (HRT)",id:"implementation-of-hardware-root-of-trust-hrt",level:2},{value:"Placement of HRT in Archethic Blockchain/Ecosystem",id:"placement-of-hrt-in-archethic-blockchainecosystem",level:2}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-hardware-root-of-trust"},"What is hardware root of trust?"),(0,a.kt)("p",null,"A hardware root of trust is the foundation on which all secure operations of a computing system depend. It contains the keys used for cryptographic functions and enables a secure boot process. It is inherently trusted, and therefore must be secure by design. The most secure implementation of a root of trust is in hardware making it immune from malware attacks. As such, it can be a stand-alone security module or implemented as security module within a processor or system on chip (SoC) (",(0,a.kt)("a",{parentName:"p",href:"https://www.rambus.com/blogs/hardware-root-of-trust/#:~:text=for%20my%20application%3F-,What%20is%20hardware%20root%20of%20trust%3F,must%20be%20secure%20by%20design."},"source"),")."),(0,a.kt)("h2",{id:"why-hardware-root-of-trust-for-archethic"},"Why hardware root of trust for Archethic?"),(0,a.kt)("p",null,"The ability to sustain the network even with more than 90% of malicious nodes effectively comes from 2 very important steps."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Identifying the malcious nodes effectively and preemptively."),(0,a.kt)("li",{parentName:"ul"},"Banish and effectively ban the malicious nodes.")),(0,a.kt)("p",null,"While the first part involves complex alogrithms implemented in the software layer, the second part involves uniquely tying node's identity to its hardware. This way, the malicious node, once identified and banished, cannot rejoin the network by changing its representive identity."),(0,a.kt)("p",null,"This second part can be effectively achieved using the concept of hardware root of trust. With hardware root of trust, a unique keypair is injected in the into the wafer at the time of fabrication, thus tying the identity with this keypair. Once, this keypair is certified, the node cannot effectively use another keypair, once banished, thus eliminating identity forgery. This is, in principle, possible due to fact once a key-pair is injected, it cannot be changed for that particular hardware."),(0,a.kt)("p",null,"Further, with this hardware root of trust, we can also ensure that no two nodes have the same public key tied to their identity. Thus, using hardware root of trust, contributes significantly to the increased miner security and makes the Archethic blockchain more resilient against bad actors."),(0,a.kt)("h2",{id:"implementation-of-hardware-root-of-trust-hrt"},"Implementation of Hardware Root of Trust (HRT)"),(0,a.kt)("p",null,"To implement hardware root of Trust, within Archethic ecosystem, two technologies have been used."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trusted Platform Module (TPM 2.O)"),(0,a.kt)("li",{parentName:"ul"},"Yubico Yubikey (PIV)")),(0,a.kt)("p",null,"Both of these technologies are based on Secure Element (SE) which are certified under Common Criteria (CC)."),(0,a.kt)("h2",{id:"placement-of-hrt-in-archethic-blockchainecosystem"},"Placement of HRT in Archethic Blockchain/Ecosystem"),(0,a.kt)("p",null,"Along with the initial software crypto library, the HRT is now the de-facto crypto engine for all the cryptographic operations carried out by Archethic miners. This includes signature (ECC), verification (ECC), encryption (AES), decryption (AES), hashing (SHA2/SHA3), etc."),(0,a.kt)("p",null,"The Archethic node software delegates all the cryptography operations to the HRT libraries of TPM and Yubikey, which are specially developed for this purpose by Uniris."),(0,a.kt)("p",null,"Given the latency constraints, a new hybrid mechanism have been developed involving usage of software crypto library and the HRT libraries (TPM/Yubikey). In this approach, the root of trust - crypto operation are still HRT based while the stem and branches will be software crypto library based."),(0,a.kt)("p",null,"The advantages of this mechanism over pure HRT based mechanism is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Possiblity of key aggregation"),(0,a.kt)("li",{parentName:"ul"},"Freedom of using newer elliptic curves that are not yet supported by TPM/Yubikey."),(0,a.kt)("li",{parentName:"ul"},"Scalability without impacting security and performance.")))}d.isMDXComponent=!0}}]);