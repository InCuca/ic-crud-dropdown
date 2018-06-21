<a name="1.3.2"></a>
## [1.3.2](https://github.com/InCuca/ic-crud-dropdown/compare/v1.3.1...v1.3.2) (2018-06-21)


### Bug Fixes

* **ic-crud-dropdown:** fix not a function error ([08abe24](https://github.com/InCuca/ic-crud-dropdown/commit/08abe24))
* **ic-crud-dropdown:** fix validation errors when defaultValue is used ([9d79f6a](https://github.com/InCuca/ic-crud-dropdown/commit/9d79f6a))



<a name="1.3.1"></a>
## [1.3.1](https://github.com/InCuca/ic-crud-dropdown/compare/v1.3.0...v1.3.1) (2018-06-20)


### Features

* **ic-crud-dropdown:** add error events ([60e44cc](https://github.com/InCuca/ic-crud-dropdown/commit/60e44cc))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/InCuca/ic-crud-dropdown/compare/v1.2.0...v1.3.0) (2018-05-25)


### Features

* **ic-crud-dropdown:** add defaultValue ([c6dffe6](https://github.com/InCuca/ic-crud-dropdown/commit/c6dffe6))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/InCuca/ic-crud-dropdown/compare/v1.1.0...v1.2.0) (2018-03-21)


### Features

* **ic-crud-dropdown:** add txtDeleteConfirmation prop ([8785b43](https://github.com/InCuca/ic-crud-dropdown/commit/8785b43))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/InCuca/ic-crud-dropdown/compare/v1.0.2...v1.1.0) (2018-02-27)


### Features

* **core:** usar searchTerm no search inicial que popula o form ([cd2d0c7](https://github.com/InCuca/ic-crud-dropdown/commit/cd2d0c7))



<a name="1.0.2"></a>
## [1.0.2](https://github.com/InCuca/ic-crud-dropdown/compare/v1.0.1...v1.0.2) (2018-02-21)


### Features

* **core:** resolvido 'clique em lixeira disparando clique em item' ([03e2806](https://github.com/InCuca/ic-crud-dropdown/commit/03e2806))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/InCuca/ic-crud-dropdown/compare/v1.0.0...v1.0.1) (2018-01-25)


### Bug Fixes

* **component:** fix error $refs of null ([5efb247](https://github.com/InCuca/ic-crud-dropdown/commit/5efb247))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/InCuca/ic-crud-dropdown/compare/v0.7.1...v1.0.0) (2018-01-25)


### Bug Fixes

* **release-it:** add changelog file ([553828d](https://github.com/InCuca/ic-crud-dropdown/commit/553828d))
* **styleguide:** fix console warnings ([8456a48](https://github.com/InCuca/ic-crud-dropdown/commit/8456a48))
* **styleguide:** fix warning msgs ([b163a98](https://github.com/InCuca/ic-crud-dropdown/commit/b163a98))
* **test:** fix onDropdownEditClick error ([8d188d5](https://github.com/InCuca/ic-crud-dropdown/commit/8d188d5))


### Features

* **component:** add custom modal example, add needed props and events ([9ee53d3](https://github.com/InCuca/ic-crud-dropdown/commit/9ee53d3))
* **component:** add editModal and addModal save click events ([aa06d91](https://github.com/InCuca/ic-crud-dropdown/commit/aa06d91))
* **component:** remove add, delete and edit modal slots ([cbfdc1e](https://github.com/InCuca/ic-crud-dropdown/commit/cbfdc1e))
* **ic-crud-dropdown:** remove required from formly fields ([e77d7aa](https://github.com/InCuca/ic-crud-dropdown/commit/e77d7aa))
* **release-it:** update config file ([1c13dce](https://github.com/InCuca/ic-crud-dropdown/commit/1c13dce))
* **test:** add missing tests ([0acfa87](https://github.com/InCuca/ic-crud-dropdown/commit/0acfa87))


### BREAKING CHANGES

* **component:** editModal, deleteModal, addModal does not exists anymore



<a name="0.7.1"></a>
## [0.7.1](https://github.com/InCuca/ic-crud-dropdown/compare/0.7.0...0.7.1) (2018-01-09)


### Bug Fixes

* **component:** fix edit modal not showing object ([f3fb6ff](https://github.com/InCuca/ic-crud-dropdown/commit/f3fb6ff))
* **tests:** fix update test ([5ebd5a1](https://github.com/InCuca/ic-crud-dropdown/commit/5ebd5a1))


### Features

* **component:** add selectedItem prop ([32b5517](https://github.com/InCuca/ic-crud-dropdown/commit/32b5517))


### BREAKING CHANGES

* **component:** the old selectedItem data has been removed and changed to a prop
the prop is not updated inside of the component, but outside, by listening select event



<a name="0.7.0"></a>
# [0.7.0](https://github.com/InCuca/ic-crud-dropdown/compare/0.6.5...0.7.0) (2018-01-09)


### Features

* **build:** add conventional changelog ([59d68ae](https://github.com/InCuca/ic-crud-dropdown/commit/59d68ae))
* **build:** add travis ([fa05779](https://github.com/InCuca/ic-crud-dropdown/commit/fa05779))
* **component:** do not select item when click edit button ([bb07f24](https://github.com/InCuca/ic-crud-dropdown/commit/bb07f24))


### BREAKING CHANGES

* **component:** clicking edit buttom item now does not select the item



<a name="0.6.5"></a>
## [0.6.5](https://github.com/InCuca/ic-crud-dropdown/compare/0.6.4...0.6.5) (2017-12-27)



<a name="0.6.4"></a>
## [0.6.4](https://github.com/InCuca/ic-crud-dropdown/compare/0.6.3...0.6.4) (2017-12-27)


### Features

* **package:** change build locations, by default export cjs module ([c0cf1d2](https://github.com/InCuca/ic-crud-dropdown/commit/c0cf1d2))



<a name="0.6.3"></a>
## [0.6.3](https://github.com/InCuca/ic-crud-dropdown/compare/0.6.2...0.6.3) (2017-12-27)


### Bug Fixes

* **ic-crud-dropdow:** import the dependencies and set to externals ([ddd6e38](https://github.com/InCuca/ic-crud-dropdown/commit/ddd6e38))
* **ic-crud-dropdown:** add missing dependencies remove not needed externals ([133ca7c](https://github.com/InCuca/ic-crud-dropdown/commit/133ca7c))



<a name="0.6.2"></a>
## [0.6.2](https://github.com/InCuca/ic-crud-dropdown/compare/0.6.1...0.6.2) (2017-12-27)



<a name="0.6.1"></a>
## [0.6.1](https://github.com/InCuca/ic-crud-dropdown/compare/0.6.0...0.6.1) (2017-12-27)


### Bug Fixes

* **tests:** upate ic-formly path ([7b4a483](https://github.com/InCuca/ic-crud-dropdown/commit/7b4a483))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/InCuca/ic-crud-dropdown/compare/0.5.1...0.6.0) (2017-12-22)


### Bug Fixes

* **ic-formly:** update ic-formly now is a plugin ([f978a7d](https://github.com/InCuca/ic-crud-dropdown/commit/f978a7d))
* **test:** fix formly dependency ([2a4578f](https://github.com/InCuca/ic-crud-dropdown/commit/2a4578f))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/InCuca/ic-crud-dropdown/compare/0.5.0...0.5.1) (2017-12-22)


### Bug Fixes

* **ic-formly:** fix validation by updating package ([7d50696](https://github.com/InCuca/ic-crud-dropdown/commit/7d50696))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/InCuca/ic-crud-dropdown/compare/0.4.3...0.5.0) (2017-12-22)


### Bug Fixes

* **build:** remove release-it conventional ([720f875](https://github.com/InCuca/ic-crud-dropdown/commit/720f875))


### Features

* **build:** add conventional angular to release-it ([a165bc2](https://github.com/InCuca/ic-crud-dropdown/commit/a165bc2))
* **ic-crud-dropdown:** Add more options and update docs ([8632f50](https://github.com/InCuca/ic-crud-dropdown/commit/8632f50))


### BREAKING CHANGES

* **ic-crud-dropdown:** add enableSearch prop, now by default search will be disabled
add enablePagination prop, now by default the pagination will be disabled



<a name="0.4.3"></a>
## [0.4.3](https://github.com/InCuca/ic-crud-dropdown/compare/0.4.2...0.4.3) (2017-12-21)



<a name="0.4.2"></a>
## [0.4.2](https://github.com/InCuca/ic-crud-dropdown/compare/0.4.1...0.4.2) (2017-12-21)



<a name="0.4.1"></a>
## [0.4.1](https://github.com/InCuca/ic-crud-dropdown/compare/0.4.0...0.4.1) (2017-12-21)



<a name="0.4.0"></a>
# [0.4.0](https://github.com/InCuca/ic-crud-dropdown/compare/0.3.0...0.4.0) (2017-12-21)


### Features

* **ic-crud-dropdown:** improve style to bootstrap compatibility ([e54e652](https://github.com/InCuca/ic-crud-dropdown/commit/e54e652))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/InCuca/ic-crud-dropdown/compare/0.2.2...0.3.0) (2017-12-20)


### Features

* **ic-crud-dropdown:** add missing test ([f9c7679](https://github.com/InCuca/ic-crud-dropdown/commit/f9c7679))
* **ic-crud-dropdown:** add onDropdownShown behavior ([2492944](https://github.com/InCuca/ic-crud-dropdown/commit/2492944))



<a name="0.2.2"></a>
## [0.2.2](https://github.com/InCuca/ic-crud-dropdown/compare/0.2.1...0.2.2) (2017-12-20)


### Bug Fixes

* **ic-crud-dropdown:** revert items watcher for now ([3fb6a57](https://github.com/InCuca/ic-crud-dropdown/commit/3fb6a57))



<a name="0.2.1"></a>
## [0.2.1](https://github.com/InCuca/ic-crud-dropdown/compare/0.2.0...0.2.1) (2017-12-20)


### Bug Fixes

* **ic-crud-dropdown:** fix undefined in watch items ([eb43cbf](https://github.com/InCuca/ic-crud-dropdown/commit/eb43cbf))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/InCuca/ic-crud-dropdown/compare/0.1.2...0.2.0) (2017-12-20)


### Features

* **ic-crud-dropdown:** add scroll whenever items changes ([d6993a0](https://github.com/InCuca/ic-crud-dropdown/commit/d6993a0))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/InCuca/ic-crud-dropdown/compare/0.1.1...0.1.2) (2017-12-20)


### Bug Fixes

* **ic-crud-dropdown:** remove weirdo zero ([9b87fcf](https://github.com/InCuca/ic-crud-dropdown/commit/9b87fcf))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/InCuca/ic-crud-dropdown/compare/0.1.0...0.1.1) (2017-12-20)


### Bug Fixes

* **build:** add src to dist files ([a740136](https://github.com/InCuca/ic-crud-dropdown/commit/a740136))


### Features

* **ic-crud-dropdown:** add right option ([bc7b3db](https://github.com/InCuca/ic-crud-dropdown/commit/bc7b3db))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/InCuca/ic-crud-dropdown/compare/0.0.2...0.1.0) (2017-12-19)


### Features

* **build:** refactory build process ([be577e9](https://github.com/InCuca/ic-crud-dropdown/commit/be577e9))



<a name="0.0.2"></a>
## [0.0.2](https://github.com/InCuca/ic-crud-dropdown/compare/2af9e0b...0.0.2) (2017-12-14)


### Bug Fixes

* **ic-crud-dropdown:** fix dependencies ([fa0a8e9](https://github.com/InCuca/ic-crud-dropdown/commit/fa0a8e9))
* **ic-crud-dropdown:** fix imports ([423875a](https://github.com/InCuca/ic-crud-dropdown/commit/423875a))


### Features

* **package:** add dependencies ([aa14c82](https://github.com/InCuca/ic-crud-dropdown/commit/aa14c82))
* **package:** add missing dependencies ([45f069e](https://github.com/InCuca/ic-crud-dropdown/commit/45f069e))
* **package:** change babel presets ([0dd352c](https://github.com/InCuca/ic-crud-dropdown/commit/0dd352c))
* **poi:** add css name ([6de2a6d](https://github.com/InCuca/ic-crud-dropdown/commit/6de2a6d))
* **project:** import all files from current ic-crud-dropdown, fix docs ([2af9e0b](https://github.com/InCuca/ic-crud-dropdown/commit/2af9e0b))



