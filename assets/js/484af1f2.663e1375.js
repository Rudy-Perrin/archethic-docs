"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3305],{9126:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>I,frontMatter:()=>s,metadata:()=>o,toc:()=>r});var i=a(7462),M=(a(7294),a(3905));a(1839);const s={id:"bridge",title:"Archethic Bridge"},n=void 0,o={unversionedId:"FAQ/bridge",id:"FAQ/bridge",title:"Archethic Bridge",description:"General",source:"@site/docs/FAQ/bridge.md",sourceDirName:"FAQ",slug:"/FAQ/bridge",permalink:"/archethic-docs/FAQ/bridge",draft:!1,tags:[],version:"current",lastUpdatedAt:1677665861,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{id:"bridge",title:"Archethic Bridge"},sidebar:"docs",previous:{title:"FAQ",permalink:"/archethic-docs/category/faq"},next:{title:"Contributing",permalink:"/archethic-docs/contributing"}},c={},r=[{value:"General",id:"general",level:2},{value:"<strong>What is Archethic Bridge?</strong>",id:"what-is-archethic-bridge",level:3},{value:"<strong>How long is the predetermined time?</strong>",id:"how-long-is-the-predetermined-time",level:3},{value:"<strong>Which blockchain is better to bridge my UCOs?</strong>",id:"which-blockchain-is-better-to-bridge-my-ucos",level:3},{value:"<strong>Can you explain the process of moving assets across the crypto bridge on the Archethic blockchain?</strong>",id:"can-you-explain-the-process-of-moving-assets-across-the-crypto-bridge-on-the-archethic-blockchain",level:3},{value:"<strong>What types of assets can be moved across the crypto bridge on the Archethic blockchain?</strong>",id:"what-types-of-assets-can-be-moved-across-the-crypto-bridge-on-the-archethic-blockchain",level:3},{value:"<strong>What are the fees associated with using the crypto bridge on the Archethic blockchain?</strong>",id:"what-are-the-fees-associated-with-using-the-crypto-bridge-on-the-archethic-blockchain",level:3},{value:"<strong>I want to get the Archethic address from the Wallet app, how can I know it is the Testnet or the Mainnet address?</strong>",id:"i-want-to-get-the-archethic-address-from-the-wallet-app-how-can-i-know-it-is-the-testnet-or-the-mainnet-address",level:3},{value:"Metamask",id:"metamask",level:2},{value:"<strong>Will the Archethic Network be available on Metamask?</strong>",id:"will-the-archethic-network-be-available-on-metamask",level:3},{value:"<strong>How can I add a network on Metamask?</strong>",id:"how-can-i-add-a-network-on-metamask",level:3},{value:"<strong>How to install Metamask?</strong>",id:"how-to-install-metamask",level:3},{value:"Issues management",id:"issues-management",level:2},{value:"<strong>What happens if a problem occurs, or I refuse a transaction during the transfer?</strong>",id:"what-happens-if-a-problem-occurs-or-i-refuse-a-transaction-during-the-transfer",level:3},{value:"<strong>If I sent the tokens to a wrong Mainnet address, what to do?</strong>",id:"if-i-sent-the-tokens-to-a-wrong-mainnet-address-what-to-do",level:3},{value:"<strong>What if I want to reset the process?</strong>",id:"what-if-i-want-to-reset-the-process",level:3},{value:"Dev",id:"dev",level:2},{value:"<strong>How can developers use Archethic bridge to create new decentralized applications?</strong>",id:"how-can-developers-use-archethic-bridge-to-create-new-decentralized-applications",level:3},{value:"<strong>I\u2019m using the Mainnet network in the Wallet, how can I switch on the Testnet?</strong>",id:"im-using-the-mainnet-network-in-the-wallet-how-can-i-switch-on-the-testnet",level:3}],g={toc:r};function I(e){let{components:t,...s}=e;return(0,M.kt)("wrapper",(0,i.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,M.kt)("h2",{id:"general"},"General"),(0,M.kt)("h3",{id:"what-is-archethic-bridge"},(0,M.kt)("strong",{parentName:"h3"},"What is Archethic Bridge?")),(0,M.kt)("p",null,"Archethic's bridge relies on atomic swap technology to have a transactional agreement used in the cryptocurrency to transfer funds after acknowledgment of a cryptographic proof of payment.\nThis acknowledgment must be done in a predetermined time (known as timelock).\nAfter this time, you can claim your funds, so your UCO will be refunded into your ERC20 wallet."),(0,M.kt)("h3",{id:"how-long-is-the-predetermined-time"},(0,M.kt)("strong",{parentName:"h3"},"How long is the predetermined time?")),(0,M.kt)("p",null,"The timelock lasts 2 hours."),(0,M.kt)("h3",{id:"which-blockchain-is-better-to-bridge-my-ucos"},(0,M.kt)("strong",{parentName:"h3"},"Which blockchain is better to bridge my UCOs?")),(0,M.kt)("p",null,"Using the 3 blockchains, the result will be the same, but fees are not the same between ETH/MATIC/BSC.\nMATIC has the lowest fees."),(0,M.kt)("p",null,(0,M.kt)("img",{alt:"bridge-blockchains",src:a(2909).Z,width:"111",height:"102"})),(0,M.kt)("h3",{id:"can-you-explain-the-process-of-moving-assets-across-the-crypto-bridge-on-the-archethic-blockchain"},(0,M.kt)("strong",{parentName:"h3"},"Can you explain the process of moving assets across the crypto bridge on the Archethic blockchain?")),(0,M.kt)("p",null,"Archethic\u2019s bridge leverages Atomic Swap, which is a way to bring safely assets between chains."),(0,M.kt)("p",null,"By using the bridge, you will create contract on ETH/BSC/MATIC and transfer your UCO in there. This contract is called \u201cHashed Time-locked contract\u201d where the funds will be locked until the reveal of a secret or after lock time."),(0,M.kt)("p",null,"Once done, the same will be done on Archethic side. The two chains are now ready to transfer assets.\nThe transfer itself consists of revealing the private part of the secret encoded in the contracts, to allow the exchange."),(0,M.kt)("p",null,"Once the secret is revealed in one chain, the second can proceed to the reveal, as the secret is now public.\nAtomic swap provides secure transfers between chains as there is no pool holding all the assets but hard-coding of recipients and rules in a one-time contract."),(0,M.kt)("h3",{id:"what-types-of-assets-can-be-moved-across-the-crypto-bridge-on-the-archethic-blockchain"},(0,M.kt)("strong",{parentName:"h3"},"What types of assets can be moved across the crypto bridge on the Archethic blockchain?")),(0,M.kt)("p",null,"Only UCOs can be \u201cbridged\u201d."),(0,M.kt)("h3",{id:"what-are-the-fees-associated-with-using-the-crypto-bridge-on-the-archethic-blockchain"},(0,M.kt)("strong",{parentName:"h3"},"What are the fees associated with using the crypto bridge on the Archethic blockchain?")),(0,M.kt)("p",null,"You would have to pay the fees on ETH/BSC/MATIC to transfers your UCO and proceed to the transfer.\nHowever, you won\u2019t have to pay the fees on Archethic, which is the purpose of the bridge: to get funds on the Archethic\u2019s network."),(0,M.kt)("h3",{id:"i-want-to-get-the-archethic-address-from-the-wallet-app-how-can-i-know-it-is-the-testnet-or-the-mainnet-address"},(0,M.kt)("strong",{parentName:"h3"},"I want to get the Archethic address from the Wallet app, how can I know it is the Testnet or the Mainnet address?")),(0,M.kt)("p",null,"On the wallet app, from the version 2.0.8, the network is displayed in the main menu (click on the burger icon to access to the main menu)."),(0,M.kt)("h2",{id:"metamask"},"Metamask"),(0,M.kt)("h3",{id:"will-the-archethic-network-be-available-on-metamask"},(0,M.kt)("strong",{parentName:"h3"},"Will the Archethic Network be available on Metamask?")),(0,M.kt)("p",null,"No, Archethic blockchain is not Ethereum Virtual Machine (EVM) compatible."),(0,M.kt)("h3",{id:"how-can-i-add-a-network-on-metamask"},(0,M.kt)("strong",{parentName:"h3"},"How can I add a network on Metamask?")),(0,M.kt)("p",null,"Here is a link giving a tutorial to add a custom network RPC on Metamask : ",(0,M.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC"},"https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC")),(0,M.kt)("h3",{id:"how-to-install-metamask"},(0,M.kt)("strong",{parentName:"h3"},"How to install Metamask?")),(0,M.kt)("p",null,"Here is a link giving a tutorial to install Metamask : ",(0,M.kt)("a",{parentName:"p",href:"https://www.coindesk.com/learn/how-to-set-up-a-metamask-wallet"},"https://www.coindesk.com/learn/how-to-set-up-a-metamask-wallet")),(0,M.kt)("h2",{id:"issues-management"},"Issues management"),(0,M.kt)("h3",{id:"what-happens-if-a-problem-occurs-or-i-refuse-a-transaction-during-the-transfer"},(0,M.kt)("strong",{parentName:"h3"},"What happens if a problem occurs, or I refuse a transaction during the transfer?")),(0,M.kt)("p",null,'During the delay of the acknowledgment, you should wait for the end of the duration, and you can tell the refund of your ERC20 Wallet with the "REFUND" button available on your Archethic Bridge application.'),(0,M.kt)("h3",{id:"if-i-sent-the-tokens-to-a-wrong-mainnet-address-what-to-do"},(0,M.kt)("strong",{parentName:"h3"},"If I sent the tokens to a wrong Mainnet address, what to do?")),(0,M.kt)("p",null,"You lose the tokens if the Mainnet address is not your address. Same thing if you do an error in the address (for example a 0 instead of 1)."),(0,M.kt)("h3",{id:"what-if-i-want-to-reset-the-process"},(0,M.kt)("strong",{parentName:"h3"},"What if I want to reset the process?")),(0,M.kt)("p",null,"The bridge only allows one transfer at a time. If a transfer is started, you must complete it before starting a new one."),(0,M.kt)("p",null,"In some cases, a started transfer can be resumed at a particular stage if, for example, you refused a transaction in your wallet or closed your browser."),(0,M.kt)("p",null,'In case you don\'t want to resume the current transfer, you can use the "clear local storage" option to reset the transfer tool and make a new transfer.'),(0,M.kt)("p",null,"Warning: if you empty your local storage, the funds associated with the uncompleted transfer will be lost."),(0,M.kt)("h2",{id:"dev"},"Dev"),(0,M.kt)("h3",{id:"how-can-developers-use-archethic-bridge-to-create-new-decentralized-applications"},(0,M.kt)("strong",{parentName:"h3"},"How can developers use Archethic bridge to create new decentralized applications?")),(0,M.kt)("p",null,"Developers can use blockchain bridges to create new decentralized applications by connecting different blockchain networks to enable the movement of assets, data, and information across them. "),(0,M.kt)("p",null,"This allows for the creation of interoperable DApps that can utilize the features and capabilities of multiple blockchain networks. "),(0,M.kt)("p",null,"Developers can use smart contract or atomic swap technology to facilitate the transfer of assets across different networks, and can also use cross-chain data oracles to access off-chain data on different networks."),(0,M.kt)("h3",{id:"im-using-the-mainnet-network-in-the-wallet-how-can-i-switch-on-the-testnet"},(0,M.kt)("strong",{parentName:"h3"},"I\u2019m using the Mainnet network in the Wallet, how can I switch on the Testnet?")),(0,M.kt)("p",null,"The switch is not possible because the seed is not shared between Mainnet and Testnet. Later, the wallet will be multiseeds, but not for the moment. The only way for the moment is to remove the Wallet (don\u2019t forget the 24 words) and create/import a wallet on the Testnet network."))}I.isMDXComponent=!0},2909:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTExcHgiIGhlaWdodD0iMTAycHgiIHZpZXdCb3g9IjAgMCAxMTEgMTAyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkJsb2NrY2hhbjwvdGl0bGU+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzIiIGhlaWdodD0iMjgiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJCcmlkZ2UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJCbG9ja2NoYW4iPgogICAgICAgICAgICA8ZyBpZD0iQlNDIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOS4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjRjNCQTJGIiBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikljb25zX3gyRl9pY29uLTI0X3gyRl9uZXR3b3Jrc194MkZfYmluYW5jZV94NUZfc21hcnRfeDVGX2NoYWluIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjAwMDAwMCwgOC4wMDAwMDApIiBmaWxsPSIjMTMxNDE1Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjIuMjIxMDY2MywxOC41NTQ3OTY3IEwyNS44NDEzNTI0LDIyLjE2NTg1MzcgTDE2LDMyIEw2LjE2OTA1MDcyLDIyLjE2NTg1MzcgTDkuNzg5MzM2OCwxOC41NTQ3OTY3IEwxNiwyNC43Njc0Nzk3IEwyMi4yMjEwNjYzLDE4LjU1NDc5NjcgWiBNMTYsMTIuMzMxNzA3MyBMMTkuNjcyMzAxNywxNi4wMDUyMDMzIEwxOS42NzIzMDE3LDE2LjAwNTIwMzMgTDE5LjY3MjMwMTcsMTYuMDA1MjAzMyBMMTYsMTkuNjc4Njk5MiBMMTIuMzM4MTAxNCwxNi4wMTU2MDk4IEwxMi4zMzgxMDE0LDE2LjAwNTIwMzMgTDEyLjMzODEwMTQsMTYuMDA1MjAzMyBMMTIuOTgzMDk0OSwxNS4zNiBMMTMuMjk1MTg4NiwxNS4wNDc4MDQ5IEwxNiwxMi4zMzE3MDczIFogTTMuNjIwMjg2MDksMTIuMzgzNzM5OCBMNy4yNDA1NzIxNywxNi4wMDUyMDMzIEwzLjYyMDI4NjA5LDE5LjYxNjI2MDIgTDAsMTUuOTk0Nzk2NyBMMy42MjAyODYwOSwxMi4zODM3Mzk4IFogTTI4LjM3OTcxMzksMTIuMzgzNzM5OCBMMzIsMTYuMDA1MjAzMyBMMjguMzc5NzEzOSwxOS42MTYyNjAyIEwyNC43NTk0Mjc4LDE1Ljk5NDc5NjcgTDI4LjM3OTcxMzksMTIuMzgzNzM5OCBaIE0xNiwwIEwyNS44MzA5NDkzLDkuODM0MTQ2MzQgTDIyLjIxMDY2MzIsMTMuNDU1NjA5OCBMMTYsNy4yMzI1MjAzMyBMOS43ODkzMzY4LDEzLjQ0NTIwMzMgTDYuMTY5MDUwNzIsOS44MzQxNDYzNCBMMTYsMCBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyBpZD0iUG9seWdvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjMuMDAwMDAwLCA1NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMy45OTA1NTgsMCBMMjMuOTkwNTU4LDAgQzM3LjI1MTQ3NzIsMCA0OCwxMC43NDY0MDk2IDQ4LDI0LjAwNDcyMTYgTDQ4LDI0LjAwNDcyMTYgQzQ4LDM3LjI2MzAzMzYgMzcuMjUxNDc3Miw0OCAyNCw0OCBMMjQsNDggQzEwLjczOTA4MzksNDggMCwzNy4yNTM1OTA0IDAsMjQuMDA0NzIxNiBMMCwyNC4wMDQ3MjE2IEMtMC4wMDk0Mzg4NzkxLDEwLjc0NjQwOTYgMTAuNzM5MDgzOSwwIDIzLjk5MDU1OCwwIFoiIGlkPSJQYXRoIiBmaWxsPSIjODI0N0U1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxnIGlkPSJDbGlwcGVkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjAwMDAwMCwgMTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iU1ZHSURfMV8iPjwvZz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQuMTcwNTE5NCw4LjUyNzU3Nzk0IEMyMy41ODQ1MDkyLDguMTkxODQ2NTIgMjIuODM1MTg0Niw4LjE5MTg0NjUyIDIyLjE3MjMyMDYsOC41Mjc1Nzc5NCBMMTcuNTAzNDUyNCwxMS4yOTAxNjc5IEwxNC4zMzMyMzMzLDEzLjA0NTU2MzUgTDkuNzUwODI1NTgsMTUuNzk4NTYxMiBDOS4xNjQ4MTUzNywxNi4xMzQyOTI2IDguNDE1NDkwODQsMTYuMTM0MjkyNiA3Ljc1MjYyNjg0LDE1Ljc5ODU2MTIgTDQuMTY5MzE4NTIsMTMuNjIxMTAzMSBDMy41ODMzMDgzMiwxMy4yODUzNzE3IDMuMTcwMjE5MTUsMTIuNjEzOTA4OSAzLjE3MDIxOTE1LDExLjg2NTcwNzQgTDMuMTcwMjE5MTUsNy42ODM0NTMyNCBDMy4xNzAyMTkxNSw3LjAxMTk5MDQxIDMuNTA2NDU0NTIsNi4zNTAxMTk5IDQuMTY5MzE4NTIsNS45MjgwNTc1NSBMNy43NTI2MjY4NCwzLjgzNjkzMDQ2IEM4LjMzODYzNzA1LDMuNTAxMTk5MDQgOS4wODc5NjE1NywzLjUwMTE5OTA0IDkuNzUwODI1NTgsMy44MzY5MzA0NiBMMTMuMzM0MTMzOSw2LjAxNDM4ODQ5IEMxMy45MjAxNDQxLDYuMzUwMTE5OSAxNC4zMzMyMzMzLDcuMDIxNTgyNzMgMTQuMzMzMjMzMyw3Ljc2OTc4NDE3IEwxNC4zMzMyMzMzLDEwLjUzMjM3NDEgTDE3LjUwMzQ1MjQsOC42OTA2NDc0OCBMMTcuNTAzNDUyNCw1Ljg1MTMxODk0IEMxNy41MDM0NTI0LDUuMTc5ODU2MTIgMTcuMTY3MjE3MSw0LjUxNzk4NTYxIDE2LjUwNDM1Myw0LjA5NTkyMzI2IEw5LjgzNzI4NjEsMC4xNjMwNjk1NDQgQzkuMjUxMjc1ODksLTAuMTcyNjYxODcxIDguNTAxOTUxMzcsLTAuMTcyNjYxODcxIDcuODM5MDg3MzYsMC4xNjMwNjk1NDQgTDEuMDA4NzA2MDksNC4xODIyNTQyIEMwLjM0NTg0MjA4OSw0LjUxNzk4NTYxIDAuMDA5NjA2NzI0NzEsNS4xODk0NDg0NCAwLjAwOTYwNjcyNDcxLDUuODUxMzE4OTQgTDAuMDA5NjA2NzI0NzEsMTMuNzA3NDM0MSBDMC4wMDk2MDY3MjQ3MSwxNC4zNzg4OTY5IDAuMzQ1ODQyMDg5LDE1LjA0MDc2NzQgMS4wMDg3MDYwOSwxNS40NjI4Mjk3IEw3Ljc2MjIzMzU2LDE5LjM5NTY4MzUgQzguMzQ4MjQzNzcsMTkuNzMxNDE0OSA5LjA5NzU2ODMsMTkuNzMxNDE0OSA5Ljc2MDQzMjMsMTkuMzk1NjgzNSBMMTQuMzQyODQsMTYuNzE5NDI0NSBMMTcuNTEzMDU5MSwxNC44Nzc2OTc4IEwyMi4wOTU0NjY4LDEyLjIwMTQzODggQzIyLjY4MTQ3NywxMS44NjU3MDc0IDIzLjQzMDgwMTYsMTEuODY1NzA3NCAyNC4wOTM2NjU2LDEyLjIwMTQzODggTDI3LjY3Njk3MzksMTQuMjkyNTY1OSBDMjguMjYyOTg0MSwxNC42MjgyOTc0IDI4LjY3NjA3MzMsMTUuMjk5NzYwMiAyOC42NzYwNzMzLDE2LjA0Nzk2MTYgTDI4LjY3NjA3MzMsMjAuMjMwMjE1OCBDMjguNjc2MDczMywyMC45MDE2Nzg3IDI4LjMzOTgzNzksMjEuNTYzNTQ5MiAyNy42NzY5NzM5LDIxLjk4NTYxMTUgTDI0LjE4MDEyNjEsMjQuMDc2NzM4NiBDMjMuNTk0MTE1OSwyNC40MTI0NyAyMi44NDQ3OTE0LDI0LjQxMjQ3IDIyLjE4MTkyNzMsMjQuMDc2NzM4NiBMMTguNTg5MDEyMywyMS45ODU2MTE1IEMxOC4wMDMwMDIxLDIxLjY0OTg4MDEgMTcuNTg5OTEyOSwyMC45Nzg0MTczIDE3LjU4OTkxMjksMjAuMjMwMjE1OCBMMTcuNTg5OTEyOSwxNy41NTM5NTY4IEwxNC40MTk2OTM4LDE5LjM5NTY4MzUgTDE0LjQxOTY5MzgsMjIuMTU4MjczNCBDMTQuNDE5NjkzOCwyMi44Mjk3MzYyIDE0Ljc1NTkyOTIsMjMuNDkxNjA2NyAxNS40MTg3OTMyLDIzLjkxMzY2OTEgTDIyLjE3MjMyMDYsMjcuODQ2NTIyOCBDMjIuNzU4MzMwOCwyOC4xODIyNTQyIDIzLjUwNzY1NTQsMjguMTgyMjU0MiAyNC4xNzA1MTk0LDI3Ljg0NjUyMjggTDMwLjkyNDA0NjgsMjMuOTEzNjY5MSBDMzEuNTEwMDU3LDIzLjU3NzkzNzYgMzEuOTIzMTQ2MiwyMi45MDY0NzQ4IDMxLjkyMzE0NjIsMjIuMTU4MjczNCBMMzEuOTIzMTQ2MiwxNC4yMTU4MjczIEMzMS45MjMxNDYyLDEzLjU0NDM2NDUgMzEuNTg2OTEwOCwxMi44ODI0OTQgMzAuOTI0MDQ2OCwxMi40NjA0MzE3IEwyNC4xNzA1MTk0LDguNTI3NTc3OTQgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgaWQ9IkV0aGVyZXVtIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNTQuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC00NSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzYyN0VFQSIgY3g9IjI0IiBjeT0iMjQiIHI9IjI0Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aCIgZmlsbC1vcGFjaXR5PSIwLjYwMiIgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIyNC43NDc5NDk3IDUuOTk2NzE5NTIgMjQuNzQ3OTQ5NyAxOS4zMDIzNTEgMzUuOTkzNDM5IDI0LjMyODA0ODEiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aF8xXyIgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIyNC43NDc5NDk3IDUuOTk2NzE5NTIgMTMuNTAyNDYwNCAyNC4zMjgwNDgxIDI0Ljc0Nzk0OTcgMTkuMzAyMzUxIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGhfMl8iIGZpbGwtb3BhY2l0eT0iMC42MDIiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMjQuNzQ3OTQ5NyAzMi45NDkxNTI1IDI0Ljc0Nzk0OTcgNDEuOTkwMTU4NiAzNiAyNi40MjA5OTUxIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGhfM18iIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMjQuNzQ3OTQ5NyA0MS45OTAxNTg2IDI0Ljc0Nzk0OTcgMzIuOTQ5MTUyNSAxMy41MDI0NjA0IDI2LjQyMDk5NTEiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aF80XyIgZmlsbC1vcGFjaXR5PSIwLjIiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMjQuNzQ3OTQ5NyAzMC44NTYyMDU2IDM1Ljk5MzQzOSAyNC4zMjgwNDgxIDI0Ljc0Nzk0OTcgMTkuMzAyMzUxIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aF81XyIgZmlsbC1vcGFjaXR5PSIwLjYwMiIgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxNCAyNC4yMTk3NjE1IDI1IDMxIDI1IDE5Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="}}]);