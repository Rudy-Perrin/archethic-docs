"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8910],{419:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));a(1839);const i={id:"archethic-wallet",title:"Archethic Wallet"},o=void 0,l={unversionedId:"participate/archethic-wallet",id:"participate/archethic-wallet",title:"Archethic Wallet",description:"Archethic has developed a fully decentralized and non-custodial cryptocurrency hot wallet that enables users to safely manage assets on Layer 1 Archethic blockchain.",source:"@site/docs/participate/archethic-wallet.md",sourceDirName:"participate",slug:"/participate/archethic-wallet",permalink:"/archethic-docs/participate/archethic-wallet",draft:!1,tags:[],version:"current",lastUpdatedAt:1676048775,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{id:"archethic-wallet",title:"Archethic Wallet"},sidebar:"docs",previous:{title:"Domain Names",permalink:"/archethic-docs/participate/aeweb/dns"},next:{title:"Build",permalink:"/archethic-docs/category/build"}},s={},c=[{value:"Features",id:"features",level:2},{value:"Framework",id:"framework",level:2},{value:"Seed",id:"seed",level:2},{value:"Securing the application",id:"securing-the-application",level:2},{value:"Data store",id:"data-store",level:2},{value:"Interactions with the Archethic blockchain",id:"interactions-with-the-archethic-blockchain",level:2},{value:"Setup",id:"setup",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Instructions",id:"instructions",level:3}],u={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Archethic has developed a fully decentralized and non-custodial cryptocurrency hot wallet that enables users to safely manage assets on Layer 1 Archethic blockchain.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"No signup or KYC needed, users just control their services and access keychain, protected by different secure access methods like PIN Code, Password, YubiKey like devices and Biometrics.")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"Archethic Wallet has implemented the following features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Main features",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Decentralized keychain management"),(0,r.kt)("li",{parentName:"ul"},"Multiple accounts' management"),(0,r.kt)("li",{parentName:"ul"},"Creation of Fungible Tokens"),(0,r.kt)("li",{parentName:"ul"},"Creation of NFTs"),(0,r.kt)("li",{parentName:"ul"},"Support for transactions (Sending and Receiving UCO Token, Fungible Tokens and NFTs)"),(0,r.kt)("li",{parentName:"ul"},"List of recent transactions"),(0,r.kt)("li",{parentName:"ul"},"List of acquired tokens"))),(0,r.kt)("li",{parentName:"ul"},"Security",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Security access with Password, PIN, Yubicloud OTP, Face ID, Touch ID, Uniris Biometrics (2023)"),(0,r.kt)("li",{parentName:"ul"},"Use of 24 Words Mnemonics"))),(0,r.kt)("li",{parentName:"ul"},"Customization",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Support for English and French Language"),(0,r.kt)("li",{parentName:"ul"},"Support for multiple Currencies (view only, not meant as multiple cryptocurrencies wallet)"),(0,r.kt)("li",{parentName:"ul"},"Multi themes (9 themes available)"),(0,r.kt)("li",{parentName:"ul"},"UI customization"))),(0,r.kt)("li",{parentName:"ul"},"Other features",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Local notifications"),(0,r.kt)("li",{parentName:"ul"},"Access to exchanges to buy ERC20 UCO"),(0,r.kt)("li",{parentName:"ul"},"Share address with QR Code or mobile share feature"),(0,r.kt)("li",{parentName:"ul"},"Address book"),(0,r.kt)("li",{parentName:"ul"},"UCO Price chart"),(0,r.kt)("li",{parentName:"ul"},"Access latest Archethic blog articles")))),(0,r.kt)("h2",{id:"framework"},"Framework"),(0,r.kt)("p",null,"Archethic developed the wallet using Flutter based on Dart language.\nFlutter is an open-source mobile application development framework from Google. The main reason for its popularity is that it supports the creation of cross-platform applications. Flutter is also used to create interactive apps that run on web pages or on the desktop."),(0,r.kt)("p",null,"Here are some of Flutter's features*"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Single code base for Android, iOS, Windows, Linux, macOS, Web, Extension"),": This approach simplifies and reduces the development time, cost, and maintenance is also an easy task. The Flutter-based user interface can be installed virtually on any platform. It has its own rendering engine that allows developers to keep the UI as it is while moving to another platform. As a result, application users can enjoy an excellent native-like experience on various platforms."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Open-source and made by Google"),": Flutter is a popular choice among developers because of the huge community support. Google designed the Flutter framework with all the security issues of modern applications in mind. One can find reliable and well-tested plugins in Flutter to mitigate security risks such as user authentication flaws, malicious code injections and data leaks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dart Programming"),": Flutter uses an easy to learn and implement programming language called Dart, which is Google's general purpose programming language."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Performance"),": As a cross-platform framework, Flutter offers unmatched performance compared to its competitors. Flutter compiles designs to native code. Unlike React Native, Flutter renders widgets directly from the native library rather than downloading libraries and components to the device before rendering.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Source: ",(0,r.kt)("a",{parentName:"em",href:"https://mobiskill.fr/blog/conseils-emploi-tech/pourquoi-utiliser-flutter-en-2022/"},"https://mobiskill.fr/blog/conseils-emploi-tech/pourquoi-utiliser-flutter-en-2022/"))),(0,r.kt)("h2",{id:"seed"},"Seed"),(0,r.kt)("p",null,"When the wallet is created, a seed is randomly created from a cryptographically secure random number generator provided by Dart."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"  static String generateSeed() {\n    String result = '';\n    const String chars = 'abcdef0123456789';\n    final Random rng = Random.secure();\n    for (int i = 0; i < 64; i++) {\n      result += chars[rng.nextInt(chars.length)];\n    }\n    return result.toUpperCase();\n  }\n")),(0,r.kt)("p",null,"In order to make the seed more accessible, BIP39 is used and aims to provide a method of simplifying the reading of the seed using a series of mnemonic words. BIP39 takes random words (usually from the English language, although they can be from another language) and creates a long phrase with them, usually 12 to 24 words. In the case of the Archethic wallet, we use 24 words because the higher the number of words, the greater the entropy and security attributable to the resulting sentence. These words are chosen from a dictionary of 2048 words. The flutter library bip39_mnemonic is thus used with English and French dictionaries."),(0,r.kt)("p",null,"In the case of wallet restoration, the library bip39_mnemonic allows to find the seed from the seed phrase."),(0,r.kt)("h2",{id:"securing-the-application"},"Securing the application"),(0,r.kt)("p",null,"Access to the application and interactions with the blockchain are secured so that certain actions are not done beyond the user's control.\nFollowing are the ways to access:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"by ",(0,r.kt)("strong",{parentName:"li"},"PIN code"),", comprising of 6 digits, with the possibility to mix the numbers of the keyboard to reduce the risks of access to your code by observation,"),(0,r.kt)("li",{parentName:"ul"},"by ",(0,r.kt)("strong",{parentName:"li"},"password"),","),(0,r.kt)("li",{parentName:"ul"},"by using a ",(0,r.kt)("strong",{parentName:"li"},"YubiKey"),", it is an electronic authentication device to secure your access. Whether you are using NFC with your mobile or USB on your desktop, you can identify yourself with this key,"),(0,r.kt)("li",{parentName:"ul"},"by the ",(0,r.kt)("strong",{parentName:"li"},"touch ID or face ID system"),", depends on the capabilities of your device.")),(0,r.kt)("p",null,"In the case of ",(0,r.kt)("strong",{parentName:"p"},"PIN")," and ",(0,r.kt)("strong",{parentName:"p"},"password"),', authentication information is stored locally (see "What data is stored in my device?").\nIn the case of ',(0,r.kt)("strong",{parentName:"p"},"touch ID or Face ID"),", the ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/local_auth"},"Flutter Local Auth library")," provides the means to authenticate on devices supporting fingerprint or facial recognition authentication.\nFinally, for ",(0,r.kt)("strong",{parentName:"p"},"OTP via Yubicloud"),": Yubico OTP is a simple yet strong authentication mechanism that is supported by all ",(0,r.kt)("strong",{parentName:"p"},"YubiKeys")," out of the box. Yubico OTP can be used as the second factor in a 2-factor authentication scheme or on its own, providing 1-factor authentication. ",(0,r.kt)("a",{parentName:"p",href:"https://www.yubico.com/products/yubicloud/"},"YubiCloud")," is the name of Yubico\u2019s web service for verifying OTPs. Before using YubiCloud, you need to get an API key from ",(0,r.kt)("a",{parentName:"p",href:"https://upgrade.yubico.com/getapikey/"},"here")," -\u2009it is quick, free and helps us in preventing misuse of YubiCloud. "),(0,r.kt)("h2",{id:"data-store"},"Data store"),(0,r.kt)("p",null,"Archethic Wallet stores a set of information so that the application is functional in both online and offline mode."),(0,r.kt)("p",null,"The first group of information represents the globally available user preferences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"**First Launch: Allows to know if this is the first launch of the application in order to clear the keystore for iOS. Indeed, iOS key store is persistent, so if this is first launch then we will clear the keystore."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authentification Method"),": Allows to know which authentication mode is used (PIN, password, YubiKey, biometrics)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Current Currency"),": Allows you to know what currency is used in the application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Current Language"),": Allows you to know which language is used in the application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Current Primary Setting"),": Allows to know if the currency displayed in priority is Fiat or Crypto."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Current Network"),": Allows to know if the wallet is connected to mainnet, testnet or to a local node whose endpoint is recorded in the following information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Current Network Endpoint"),": Allows to know the address of the local node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Current Theme"),": Allows to know which theme is used in the application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lock"),": Allows to know if it is necessary to authenticate at the launching of the application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lock Timeout"),": Allows to know after how long the application requires authentication at its launch if the user has left the application open to browse for another one for example."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pin Pad Shuffle"),": Allows you to determine whether the PIN code keyboard should be shuffled when entering."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Show Balances"),": Allows you to determine if the financial information should be displayed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Show Blog"),": Allows you to know which blog articles should be displayed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Show Price Chart"),": Allows you to determine whether the graph and indicators of the UCO price chart should be displayed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Active Vibrations"),": Allows to know if at each action, a small vibration is emitted on the mobiles."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Active Notifications"),": Allows to know if the notifications of reception of UCO are active or not."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Language Seed"),": Allows to know if the seed phrase is composed of French or English words.")),(0,r.kt)("p",null,"The second group of information represents the sensitive elements related to security:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Seed"),": Allows to store the wallet seed needed to perform transactions on the Archethic blockchain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PIN"),": Allows to store the PIN code in case this authentication method has been chosen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password"),": Allows to keep the password in case this authentication method has been chosen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Yubicloud ID and API Key"),": Allows to keep the authentication information for the management of the OTP with the YubiKey in case this authentication method has been chosen.\nThis information is stored securely."),(0,r.kt)("li",{parentName:"ul"},"And finally, ",(0,r.kt)("strong",{parentName:"li"},"a secure 256-bit (32 bytes) encryption key")," to secure data on the disk.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Remember that Archethic will never pass on your data to a third party or use your data in any other way than that offered by the application")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In the case of user preference data"),", we made the choice to store it in a local database ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/hive"},"Hive")," rather than the Flutter object ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/shared_preferences"},"SharedPreferences")," for performance reasons. All the information is available in this ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/flutter-community/using-hive-instead-of-sharedpreferences-for-storing-preferences-2d98c9db930f"},"medium article"),".\nThese data are stored in clear text because they are not sensitive."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"On the other hand, the information related to security management must be protected.")," Here again, Hive is used but the stored values are encrypted. Hive provides a helper function to generate a secure encryption key using the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fortuna_%28PRNG%29"},"Fortuna")," random number generator.\nThe key is stored base 64 encoded in a secure space via the ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/flutter_secure_storage"},"FlutterSecureStorage library"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"static Future<Vault> getInstance() async {\n    try {\n      const FlutterSecureStorage secureStorage = FlutterSecureStorage();\n      final Uint8List encryptionKey;\n      String? secureKey =\n          await secureStorage.read(key: 'archethic_wallet_secure_key');\n      if (secureKey == null || secureKey.isEmpty) {\n        final List<int> key = Hive.generateSecureKey();\n        encryptionKey = Uint8List.fromList(key);\n        secureKey = base64UrlEncode(key);\n        await secureStorage.write(\n            key: 'archethic_wallet_secure_key', value: secureKey);\n      } else {\n        encryptionKey = base64Url.decode(secureKey);\n      }\n      final Box<dynamic> encryptedBox = await Hive.openBox<dynamic>(_vaultBox,\n          encryptionCipher: HiveAesCipher(encryptionKey));\n      return Vault._(encryptedBox);\n    } catch (e) {\n      dev.log(e.toString());\n      throw Exception();\n    }\n  }\n")),(0,r.kt)("h2",{id:"interactions-with-the-archethic-blockchain"},"Interactions with the Archethic blockchain"),(0,r.kt)("p",null,"Based on the Archethic JS SDK, ",(0,r.kt)("a",{parentName:"p",href:"/archethic-docs/build/sdk/dart"},(0,r.kt)("strong",{parentName:"a"},"a SDK has been developed in dart"))," and is maintained by the Archethic teams in order to offer internal or community-developed Flutter DApps to interact with the Archethic Blockchain."),(0,r.kt)("p",null,"This open-source SDK ",(0,r.kt)("strong",{parentName:"p"},'"archethic_lib_dart"'),", available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/libdart"},"GitHub"),", can be added as dependencies in Dart or Flutter projects via the Flutter libraries and packages sharing site ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/"},"Pub.dev"),"."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flutter 3.0+"),(0,r.kt)("li",{parentName:"ul"},"Dart 2.17+")),(0,r.kt)("h3",{id:"instructions"},"Instructions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/archethic-foundation/archethic-wallet"},"repo")," into a folder"),(0,r.kt)("li",{parentName:"ul"},"Goto the folder and from terminal run ",(0,r.kt)("inlineCode",{parentName:"li"},"flutter pub get")," to get the packages"),(0,r.kt)("li",{parentName:"ul"},"Once packages are installed ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can build and run the program for emulator from VSCode Flutter SDK Tools"),(0,r.kt)("li",{parentName:"ul"},"You can build for android emulator if already installed."))),(0,r.kt)("li",{parentName:"ul"},"Once the packages and installed and application is built"),(0,r.kt)("li",{parentName:"ul"},"Run the program with ",(0,r.kt)("inlineCode",{parentName:"li"},"flutter run"))))}h.isMDXComponent=!0}}]);