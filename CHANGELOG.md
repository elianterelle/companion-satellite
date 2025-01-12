# Changelog

All notable changes to this project will be documented in this file. See [Convential Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification) for commit guidelines.

## [1.4.1](https://github.com/bitfocus/companion-satellite/compare/v1.4.0...v1.4.1) (Thu Apr 20 2023)


### Fixes

* downgrade electron due to memory cage bug [75a395e](https://github.com/bitfocus/companion-satellite/commit/75a395ea93dd1f385f4a9f47e0c4aadbeff208ed)

## [1.4.0](https://github.com/bitfocus/companion-satellite/compare/v1.3.1...v1.4.0) (Tue Apr 18 2023)


### Features

* support razer stream controller x [71cb009](https://github.com/bitfocus/companion-satellite/commit/71cb009dcc9bb3e7caecbdac1af89715850b4f50)
* update loupedeck library [99de79e](https://github.com/bitfocus/companion-satellite/commit/99de79e1a687e282e2709c93d045f6f37f1aa778)

### [1.3.1](https://github.com/bitfocus/companion-satellite/compare/v1.3.0...v1.3.1) (2022-12-19)


### Bug Fixes

* pin sharp to 0.31.1 to fix older macos support ([fe81b57](https://github.com/bitfocus/companion-satellite/commit/fe81b571a9caa9ae27dd54773e35587522cfa6b9))

## [1.3.0](https://github.com/bitfocus/companion-satellite/compare/v1.2.0...v1.3.0) (Fri Dec 02 2022)


### Features

* support streamdeck plus [5e9a19b](https://github.com/bitfocus/companion-satellite/commit/5e9a19b185cce94bb0af22c336f4a425bfabad47)
* support loupedeck live s [f021503](https://github.com/bitfocus/companion-satellite/commit/f0215035e955c902e6bb90aee84bfc4c3d26e65c)
* use new KEY-ROTATE message (#60) [fb8806a](https://github.com/bitfocus/companion-satellite/commit/fb8806a1bc2f1d75a9a0f575c7ab0bae6cb8da27)

## [1.2.0](https://github.com/bitfocus/companion-satellite/compare/v1.1.0...v1.2.0) (2022-10-21)


### Features

* prototype razer stream controller support ([15b62ac](https://github.com/bitfocus/companion-satellite/commit/15b62accb7c93384be239b51944d7feb12125cf1))


### Bug Fixes

* headless port broken ([2ecf115](https://github.com/bitfocus/companion-satellite/commit/2ecf1157639f805476be66f2eb16b413845141e2))
* linux build ([79172e7](https://github.com/bitfocus/companion-satellite/commit/79172e73c07a4c4093d3e7711ca7ac7ebf7a2909))
* loupedeck bleed between buttons ([939b5b4](https://github.com/bitfocus/companion-satellite/commit/939b5b48b09ed2c0020c7a9c1f97f71334a4b229))
* loupedeck disconnection and errors ([87a817c](https://github.com/bitfocus/companion-satellite/commit/87a817ccfccdfd39b41034e81231f40f736b83fe))
* loupedeck drawing ([1225dbe](https://github.com/bitfocus/companion-satellite/commit/1225dbeb2b50cd5afb23ae58fd1aed13a3024d55))
* mac-arm64 build ([705f954](https://github.com/bitfocus/companion-satellite/commit/705f9540916a9f89248f1de184245dda0b2b7dc5))
* optimise parseLineParameters ([d3166e1](https://github.com/bitfocus/companion-satellite/commit/d3166e1745688032605c17b8971b4e5d81fcfd1e))
* optimise parseLineParameters ([3af36ae](https://github.com/bitfocus/companion-satellite/commit/3af36aea4ba9a45e9c0d8872902292c811f17239))
* streamdeck draw performance ([72485ba](https://github.com/bitfocus/companion-satellite/commit/72485ba335dc5e97e74ac7f4b2187f47c775939d))
* update loupedeck lib ([f822386](https://github.com/bitfocus/companion-satellite/commit/f822386d671cd29987e0a0f7a9a89a0ddd224aab))
* use different loupedeck library ([c589404](https://github.com/bitfocus/companion-satellite/commit/c5894042d58709c05e2989121b29d24503c11156))

## [1.1.0](https://github.com/bitfocus/companion-satellite/compare/v1.0.1...v1.1.0) (2022-09-19)


### Features

* loupedeck live support ([#50](https://github.com/bitfocus/companion-satellite/issues/50)) ([a9a4ae8](https://github.com/bitfocus/companion-satellite/commit/a9a4ae8401e2d8a15f4da775557ce612238698bc))

### [1.0.1](https://github.com/bitfocus/companion-satellite/compare/v1.0.0...v1.0.1) (2022-07-31)


### Bug Fixes

* support new revisions of the streamdeck mini ([45548e0](https://github.com/bitfocus/companion-satellite/commit/45548e07e6a27eb6778bc2f995a73cd1d00098e4))
* update usb to get native windows hotplug detection ([074c47f](https://github.com/bitfocus/companion-satellite/commit/074c47f3e85ea59f7bd3888af24e434caf9986ba))

## [1.0.0](https://github.com/bitfocus/companion-satellite/compare/v0.4.0...v1.0.0) (2022-07-17)


### Features

* allow user to specify server port number ([1cacd1e](https://github.com/bitfocus/companion-satellite/commit/1cacd1eeb93b9e1522cf4f37e00d0a5caaacd7a0))
* build for arm mac ([0215dde](https://github.com/bitfocus/companion-satellite/commit/0215ddecdb86651b9ca76389924c0311d014d265))
* build pi image ([893fffa](https://github.com/bitfocus/companion-satellite/commit/893fffaf907b2b1eeb130a4963a7d9604004eafc))
* docker image build ([f9f5282](https://github.com/bitfocus/companion-satellite/commit/f9f52829f964679efc38573248ada7868751be0b))
* esm ([0b4d7e3](https://github.com/bitfocus/companion-satellite/commit/0b4d7e3f80f66d5d5e353e349c038a975902b385))
* esm (electron) ([ca8f935](https://github.com/bitfocus/companion-satellite/commit/ca8f9351c3a68d2017e09ba4cba47ad5435dc169))
* infinitton support ([23fd935](https://github.com/bitfocus/companion-satellite/commit/23fd935b56f3e39f2f00e08993d6e04f39f5d0a9))
* macos signing ([c1b61da](https://github.com/bitfocus/companion-satellite/commit/c1b61da90cc174e960f15daf66fc17e6ca649731))
* notify api server of build (hopefully) ([9bb676e](https://github.com/bitfocus/companion-satellite/commit/9bb676ee1110cd73ba3ebe2430426a9a042597a9))
* publish builds ([a9572bb](https://github.com/bitfocus/companion-satellite/commit/a9572bb83612e4fe9f361d592329beb06c7fe336))
* replace usb-detection with usb ([83e5ef0](https://github.com/bitfocus/companion-satellite/commit/83e5ef0bb7ffe9faf39c1652c53b83ff88689346))
* satellite api v2 ([fcf0654](https://github.com/bitfocus/companion-satellite/commit/fcf06542ecfa7bb52db9fb8a7685a0fce25ea8c7))
* support for pedal (untested) ([2d4ba39](https://github.com/bitfocus/companion-satellite/commit/2d4ba39bee3f2943cae786a92ab177e416590f4c))


### Bug Fixes

* 'handle' BEGIN command ([c6ce5b0](https://github.com/bitfocus/companion-satellite/commit/c6ce5b0976167702c039d79196f677fff2333f37))
* 'handle' KEY-PRESS ack ([3003f48](https://github.com/bitfocus/companion-satellite/commit/3003f4877d866132adbbb3696616db2dad0a2a4e))
* add elgato pedal to pi udev rules ([698434b](https://github.com/bitfocus/companion-satellite/commit/698434b6b98d939ddab4e794dc5f5cbf10e98f4a))
* add mac entitlements ([95f60de](https://github.com/bitfocus/companion-satellite/commit/95f60de3af264631d555f8d0c850e8c5ca8fb3be))
* api long-version and upload destination ([aef04e9](https://github.com/bitfocus/companion-satellite/commit/aef04e9810961bf448caabc170f46653c887b6a5))
* attempt ([1f2a344](https://github.com/bitfocus/companion-satellite/commit/1f2a3445a0aa1e1fb78be860f1abbef2fe8ddab9))
* attempt to combine the workflow ([8d4e0ae](https://github.com/bitfocus/companion-satellite/commit/8d4e0ae80e4b80afbd1a17a435152c90f5232c7f))
* build pi image ([be7ccdc](https://github.com/bitfocus/companion-satellite/commit/be7ccdc68a46fa7c66f5148e418ca55a3f197b55))
* docker build ([da17351](https://github.com/bitfocus/companion-satellite/commit/da1735168b298d01bda269f527ca6f68053173f3))
* docker image push ([d48638e](https://github.com/bitfocus/companion-satellite/commit/d48638e2bd9fe5ab8e0fab3d77c5c687108e2f4b))
* docker usb devices ([edab33e](https://github.com/bitfocus/companion-satellite/commit/edab33e6ec63c39572c68d1e523e476bd6c985c2))
* force into hidraw mode ([d41695e](https://github.com/bitfocus/companion-satellite/commit/d41695e14409a2b177f03c411f43b51493be7751))
* handle slow networks better ([683c91d](https://github.com/bitfocus/companion-satellite/commit/683c91d6a078897452a6f6139d27a5cd94bdec1a))
* ignore more files from the electron asar ([4dd6132](https://github.com/bitfocus/companion-satellite/commit/4dd61324b089c619bb8c7ce8618d6c4af7ea8222))
* incorrect productName in built binaries ([746db4e](https://github.com/bitfocus/companion-satellite/commit/746db4e11abfc0e7e2249bbc5c06707dfb3dae78))
* input names ([0110a97](https://github.com/bitfocus/companion-satellite/commit/0110a978909f0469ccd0dc1d9c7f2ad5daf7c75d))
* Move electron packages from devDependencies to dependencies ([#40](https://github.com/bitfocus/companion-satellite/issues/40)) ([52e3ba6](https://github.com/bitfocus/companion-satellite/commit/52e3ba68f6433b1bf70ad8cf760c183ec680403f))
* optimise docker build ([71f47cb](https://github.com/bitfocus/companion-satellite/commit/71f47cb64fc1c9e4e29589d6c91187f0314b7fd9))
* pi build number ([76470b8](https://github.com/bitfocus/companion-satellite/commit/76470b8404b8fcf3b1781ec140b555c637902665))
* pi image archive name ([ef83f24](https://github.com/bitfocus/companion-satellite/commit/ef83f244124a5cd39581516e3ddb20e52cfaddda))
* product name ([033f692](https://github.com/bitfocus/companion-satellite/commit/033f692fb5157b54707821824ce063584934c46f))
* retry adding devices if the add fails (note: needs newer companion version to work) ([447e3e6](https://github.com/bitfocus/companion-satellite/commit/447e3e61030c834d2dca1c58669fd41e151704d5))
* rewrite binary upload to use mc instead of curl ([334f54a](https://github.com/bitfocus/companion-satellite/commit/334f54a51be12aa7f1f3ccba8f2307f099409d8d))
* try versions again ([e3de952](https://github.com/bitfocus/companion-satellite/commit/e3de952afa852df2763e39c2a7443ce6c470b1e9))
* typo ([c4fa350](https://github.com/bitfocus/companion-satellite/commit/c4fa3509b452a9f2748ad08a9a60d3995cb49991))
* typo ([e44f356](https://github.com/bitfocus/companion-satellite/commit/e44f3566ce03965ce28e3114d3a398a3fe8fb346))
* typo ([cbbac3d](https://github.com/bitfocus/companion-satellite/commit/cbbac3d5c9f3b48d690c16c1ab313b13d36977ce))
* typo (again) ([a1bdfd3](https://github.com/bitfocus/companion-satellite/commit/a1bdfd3a2d501a38914ea2a2991dca5115562b54))
* use shared composite action ([5528b9b](https://github.com/bitfocus/companion-satellite/commit/5528b9b350a1c247b8150418f33c94272d9edaa6))
* wrong version ([ce88c17](https://github.com/bitfocus/companion-satellite/commit/ce88c171fc8913734de552a42649b8a9669d8bf2))

## [0.4.0](https://github.com/bitfocus/companion-satellite/compare/v0.3.0...v0.4.0) (2021-08-12)


### Features

* update streamdeck lib and other dependencies ([5552ce0](https://github.com/bitfocus/companion-satellite/commit/5552ce062ab87eaf4aecf9eba86cea6d36d5a4d9))

## [0.3.0](https://github.com/bitfocus/companion-satellite/compare/v0.2.2...v0.3.0) (2021-07-03)


### ⚠ BREAKING CHANGES

* rename to Companion Satellite and move to bitfocus org

### Features

* rename to Companion Satellite and move to bitfocus org ([31b723a](https://github.com/bitfocus/companion-satellite/commit/31b723aa26befd783b462261f5c4af0a311d4c22))


### Bug Fixes

* image resizing for streamdeck mini ([71a5165](https://github.com/bitfocus/companion-satellite/commit/71a5165a00e2ce6cf476b48e6231013dcf4653d9))

### [0.2.2](https://github.com/bitfocus/companion-satellite/compare/v0.2.1...v0.2.2) (2021-02-01)


### Bug Fixes

* allow a few unacked pings before restarting connection ([7c880a2](https://github.com/bitfocus/companion-satellite/commit/7c880a288c08245e42b2844068e233e8e5d3a4d6))
* handle reconnect better ([be5ad79](https://github.com/bitfocus/companion-satellite/commit/be5ad798a57a1f58e4f8462fc7faddeec90151f7))
* headless process not exiting ([3821983](https://github.com/bitfocus/companion-satellite/commit/3821983765fdb9292c6cdcd4ea84bd93debc40e5))
* on device detect scan now and after a short delay. often on mac the delay is needed to find the device when scanning ([375d5d4](https://github.com/bitfocus/companion-satellite/commit/375d5d4038b56c998004ee20cb540a3e7c746c4f))
* opening connection to localhost before target at starutp ([118d149](https://github.com/bitfocus/companion-satellite/commit/118d149f2e29330d350dabffdfd8b6794ec56125))
* replace packet parsing recursion with a loop to avoid max call stack issues ([bb46f5a](https://github.com/bitfocus/companion-satellite/commit/bb46f5a211cc7e76f1479b98f85e7b07e708a297))

### [0.2.1](https://github.com/bitfocus/companion-satellite/compare/v0.2.0...v0.2.1) (2021-01-21)


### Bug Fixes

* replace canvas with sharp for  card generation. ensure queue is discarded when device is registered and ready for images ([7639666](https://github.com/bitfocus/companion-satellite/commit/76396664101ac80462f4884f999ccd3d97c41707))

## [0.2.0](https://github.com/bitfocus/companion-satellite/compare/v0.1.0...v0.2.0) (2021-01-20)


### Features

* add scan option to tray menu ([cbbd6dd](https://github.com/bitfocus/companion-satellite/commit/cbbd6dd36f60dc1cf76e67bb7eb7d666d86106cf))
* basic status card on streamdecks ([2ae218c](https://github.com/bitfocus/companion-satellite/commit/2ae218cf4244084df695cfa10490434d26ec2929))
* electron 10 ([95d126e](https://github.com/bitfocus/companion-satellite/commit/95d126ed83bc8033f5c94474d9a1dead1978c6ad))
* naive ping tracking, to quickly detect timeouts ([98c11f9](https://github.com/bitfocus/companion-satellite/commit/98c11f98b078a6e63d0fa6856f13b526117fa91c))


### Bug Fixes

* allow changing connection while connceted ([01039b4](https://github.com/bitfocus/companion-satellite/commit/01039b4a7f688db03b0f5fbdd1d0f16f3c470f89))
* allow html in description ([6b78224](https://github.com/bitfocus/companion-satellite/commit/6b7822483ee25d924cf5dc88cf7e787a251ee60b))
* changing ip doesnt error so much ([31fb0a7](https://github.com/bitfocus/companion-satellite/commit/31fb0a76f775eedb73a7b51283f2714f80b1fbfa))
* electron freezing after closing dialog, or exiting after the ip prompt ([7b0bad2](https://github.com/bitfocus/companion-satellite/commit/7b0bad243a1cf5d9b6a030e20608b586ef47c200))
* ensure connection is cleaned up on exit ([53edebf](https://github.com/bitfocus/companion-satellite/commit/53edebfd734ffa07c4dcca822fb5cbb5ec567629))
* load icon image manually, as canvas can't read from asar ([f047da4](https://github.com/bitfocus/companion-satellite/commit/f047da4a8cac3ee9d38d37a6a61217e34f02a708))
* not quitting ([cc6e061](https://github.com/bitfocus/companion-satellite/commit/cc6e0619284504e0446c69ced766a36a7f85186f))
* scan for devices at startup while no companion connection. show key status on devices before they are fully initialised ([cee053f](https://github.com/bitfocus/companion-satellite/commit/cee053f89ea2d23dc447e57d37f7fd9917daa917))
