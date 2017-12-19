# ic-crud-dropdown

> This component renders a dropdown with search and CRUD

## Installation

### Using yarn

`yarn add ic-crud-dropdown`

### Using npm

`npm i --save ic-crud-dropdown`

## Demo and Docs

`npm run serve`

## Usage

### With [vue-Loader](https://github.com/vuejs/vue-loader) or [vueify](https://github.com/vuejs/vueify)

```js
import IcCrudDropdown from 'ic-crud-dropdown.vue';

Vue.component('ic-crud-dropdown', IcCrudDropdown);
```

```html
<{{name}} text="Hello World!"></{{name}}>
```

### ES6 Modules / CommonJS

```js
import IcCrudDropdown from 'ic-crud-dropdown/cjs/ic-crud-dropdown.min.js';
import 'ic-crud-dropdown/cjs/ic-crud-dropdown.min.css';

Vue.component('ic-crud-dropdown', IcCrudDropdown);
```

```html
<{{name}} text="Hello World!"></{{name}}>
```

### UMD

```html
<{{name}} text="Hello World!"></{{name}}>

<script src="https://unpkg.com/vue" charset="utf-8"></script>
<script src="./umd/ic-crud-dropdown.min.js" charset="utf-8"></script>
<link rel="stylesheet" type="text/css" href="./umd/ic-crud-dropdown.min.css">

<script type="text/javascript">
  Vue.component('ic-crud-dropdown', window.IcCrudDropdown);
</script>
```

## Build

Build configuration is located in the `poi.config.js` file, to build just run: `npm run build`, it will build to `cjs` and `umd` directories.

## Tests

This template uses karma with chai by default, you can change test settings in poi.config.js

`npm run test`
`npm run test:watch`
`npm run test:cov`

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
