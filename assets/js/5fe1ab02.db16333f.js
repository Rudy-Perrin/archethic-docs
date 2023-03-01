"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2926],{8712:(t,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=i(7462),o=(i(7294),i(3905)),e=i(1839);const s={id:"mining",title:"Mining"},d=void 0,r={unversionedId:"build/core/mining/mining",id:"build/core/mining/mining",title:"Mining",description:"Transaction validation (aka Mining) defines processes and validations algorithms.",source:"@site/docs/build/core/mining/README.md",sourceDirName:"build/core/mining",slug:"/build/core/mining/",permalink:"/archethic-docs/build/core/mining/",draft:!1,tags:[],version:"current",lastUpdatedAt:1677665861,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{id:"mining",title:"Mining"},sidebar:"docs",previous:{title:"Election",permalink:"/archethic-docs/build/core/election"},next:{title:"Pending transaction validation",permalink:"/archethic-docs/build/core/mining/transaction-validation"}},l={},c=[{value:"Standalone validation workflow",id:"standalone-validation-workflow",level:2},{value:"Distributed validation",id:"distributed-validation",level:2},{value:"Worflow",id:"worflow",level:3},{value:"FSM",id:"fsm",level:3}],m={toc:c};function p(t){let{components:n,...i}=t;return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Transaction validation (aka Mining) defines processes and validations algorithms."),(0,o.kt)("p",null,"Once a transaction is under validation a given process is dedicated to this transaction.\nDepending of the number of validation nodes several validation implementation are defined."),(0,o.kt)("p",null,"Along with validation workflow and processes, this context defines high levels functions to get the validation nodes and to assert their election."),(0,o.kt)("h2",{id:"standalone-validation-workflow"},"Standalone validation workflow"),(0,o.kt)("p",null,"When there is not only a single validation nodes (during the network initialization), a process is spawn to manage the transaction validation as a Task to run it (fire-off)"),(0,o.kt)(e.G,{chart:"stateDiagram-v2\n   direction LR\n    [*] --\x3e Idle\n    Idle --\x3e ValidateTransaction\n    ValidateTransaction: Validate transaction\n    ValidateTransaction --\x3e Replicate\n    Replicate --\x3e Replicate: Wait confirmations\n    Replicate --\x3e NotifyAttestation\n    NotifyAttestation: Notify transaction attestation\n    NotifyAttestation --\x3e [*]\n",mdxType:"Mermaid"}),(0,o.kt)("h2",{id:"distributed-validation"},"Distributed validation"),(0,o.kt)("h3",{id:"worflow"},"Worflow"),(0,o.kt)(e.G,{chart:"sequenceDiagram\n    Client->>+WelcomeNode: Submit new transaction\n   par send transaction\n       WelcomeNode->>+Coordinator: \n   and \n      WelcomeNode->>+CrossValidationNode: \n   end\n   WelcomeNode ->>-Client: Transaction submited\n\n   par build context \n      Coordinator ->>+PreviousStorageNode: Fetch previous transaction\n      Coordinator ->>+PreviousStorageNode: Fetch unspent outputs\n   and\n      CrossValidationNode ->>+PreviousStorageNode: Fetch previous transaction\n      CrossValidationNode ->>+PreviousStorageNode: Fetch unspent outputs\n      CrossValidationNode ->>+Coordinator: Notify context and availability\n   end\n   \n   \n   Coordinator ->>+Coordinator: Build validation stamp\n   Coordinator ->>+CrossValidationNode: Send validation stamp\n\n   par wait validation stamp\n     CrossValidationNode ->>+CrossValidationNode: Cross validate the stamp\n     CrossValidationNode ->>+CrossValidationNode: Notify cross validation stamp\n     CrossValidationNode ->>+Coordinator: Notify cross validation stamp\n   end\n\n   par chain replication \n      Coordinator ->>+ChainStorageNode: Replicate transaction\n      CrossValidationNode ->>+ChainStorageNode: Replicate transaction\n   end\n\n   ChainStorageNode ->>+ChainStorageNode: Validate transaction and store transaction\n   alt transaction valid \n      ChainStorageNode ->>+ CrossValidationNode: Replication confirmation\n      ChainStorageNode ->>+ Coordinator: Replication confirmation\n   end\n\n   par notify replication\n      CrossValidationNode--\x3e+WelcomeNode: Confirm replication\n      Coordinator--\x3e+WelcomeNode: Confirm replication\n      CrossValidationNode--\x3e+PreviousStorageNode: Confirm replication\n      Coordinator--\x3e+PreviousStorageNode: Confirm replication\n      CrossValidationNode--\x3e+BeaconChain: Confirm replication\n      Coordinator--\x3e+BeaconChain: Confirm replication\n   end\n\n   WelcomeNode--\x3eClient: Notify replication confirmations",mdxType:"Mermaid"}),(0,o.kt)("h3",{id:"fsm"},"FSM"),(0,o.kt)("p",null,"When there are multiple validation nodes, a distributed workflow process is spawn as FSM to define the states and evolution of the ARCH consensus algorithm."),(0,o.kt)("p",null,"This FSM process is ran by all the validation nodes."),(0,o.kt)("p",null,"Therefore each validation maintains a ",(0,o.kt)("inlineCode",{parentName:"p"},"Registry")," of all the pending transaction validation processes, to be able to redirect P2P messages to the right process."),(0,o.kt)(e.G,{chart:"stateDiagram-v2\n    state role_state <<fork>>\n    state join_state <<join>>\n\n    [*] --\x3e Idle\n\n    Idle --\x3e Idle: Prevalidate transaction & Build context\n    Idle --\x3e role_state\n\n    role_state --\x3e Coordinator: first of elected validation nodes\n    role_state --\x3e CrossValidationNode: other node\n\n    state Coordinator {\n        state if_state_enough_context <<choice>>\n        [*] --\x3e WaitContext\n\n        WaitContext: Waiting context and confirmations\n        WaitContext --\x3e WaitContext: Add context and node confirmation\n\n        EnoughContextAndConfirmations: Enough context and confirmations ?\n\n        WaitContext --\x3e EnoughContextAndConfirmations\n        EnoughContextAndConfirmations --\x3e if_state_enough_context\n\n        if_state_enough_context --\x3e CreateValidationStamp: yes\n        if_state_enough_context --\x3e WaitContext: no\n\n        CreateValidationStamp: Create validation stamp\n        CreateValidationStamp --\x3e NotifyValidationStamp\n        NotifyValidationStamp: Notify validation stamp \n        NotifyValidationStamp --\x3e [*]\n    }\n\n    CrossValidationNode: Cross Validation Node\n    state CrossValidationNode {\n        [*] --\x3e NotifyContext\n        NotifyContext: Notify transaction context\n\n        NotifyContext --\x3e WaitValidationStamp\n        WaitValidationStamp: Wait validation stamp to validate\n\n        WaitValidationStamp --\x3e ValidateValidationStamp\n        ValidateValidationStamp: Verify validations tamp\n\n        ValidateValidationStamp --\x3e ValidateValidationStamp: create cross validation stamp\n        ValidateValidationStamp --\x3e SendCrossValidationStamp\n        SendCrossValidationStamp: Send the cross validation stamp to all\n        SendCrossValidationStamp --\x3e [*]\n    }\n\n    Coordinator --\x3e join_state\n    CrossValidationNode --\x3e join_state\n\n\n    join_state --\x3e WaitCrossValidationStamps\n\n    WaitCrossValidationStamps: Wait cross validation stamps\n    state WaitCrossValidationStamps {\n        state if_state_enough <<choice>>\n        state if_state_atomic_commitment <<choice>>\n        \n        [*] --\x3e WaitingStamps\n        WaitingStamps: Wait\n\n        WaitingStamps --\x3e WaitingStamps: Add cross validation stamp\n        WaitingStamps --\x3e EnoughStamps\n\n        EnoughStamps: Enough cross validation stamps ?\n\n        EnoughStamps --\x3e if_state_enough\n\n        if_state_enough --\x3e AtomicCommitmentReached: yes                                                                          \n        if_state_enough --\x3e WaitingStamps: no                                                                                     \n                                                                                                                                    \n        AtomicCommitmentReached: Atomic commitment reached ?                                                           \n                                                                                                                                    \n        AtomicCommitmentReached --\x3e if_state_atomic_commitment                                                                    \n                                                                                                                                    \n        if_state_atomic_commitment --\x3e [*]: yes                                                    \n        if_state_atomic_commitment --\x3e [*]: no\n   }\n\n    WaitCrossValidationStamps --\x3e Replication\n\n    state Replication {\n        [*] --\x3e NotifyTransaction\n        NotifyTransaction: Notify transaction\n        WaitAck: Waiting replicas confirmations\n        WaitAck --\x3e WaitAck: Add ack\n\n        NotifyTransaction --\x3e WaitAck\n\n        state if_state_enough_replicas <<choice>>\n        EnoughConfirmations: Enough confirmations ?\n        WaitAck --\x3e EnoughConfirmations\n\n        EnoughConfirmations --\x3e if_state_enough_replicas\n        NotifyAttestation: Notify replication attestation\n        if_state_enough_replicas --\x3e NotifyAttestation: yes\n        if_state_enough_replicas --\x3e WaitAck: no\n        NotifyAttestation --\x3e [*]\n    }\n",mdxType:"Mermaid"}))}p.isMDXComponent=!0}}]);