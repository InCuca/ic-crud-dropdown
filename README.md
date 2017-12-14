# ic-crud-dropdown

> This component renders a dropdown with search and CRUD

# Usage

## ES6 Modules / CommonJS

```bash
$ npm run build
```

```js
import IcCrudDropdown from 'dist/ic-crud-dropdown';
import 'ic-crud-dropdown/dist/ic-crud-dropdown.min.css';

Vue.component('ic-crud-dropdown', IcCrudDropdown);
```

```html
<ic-crud-dropdown text="Hello World!"></ic-crud-dropdown>
```

## UMD

```bash
$ npm run build:umd
```

```html
<ic-crud-dropdown text="Hello World!"></ic-crud-dropdown>

<script src="https://unpkg.com/vue" charset="utf-8"></script>
<script src="./dist/ic-crud-dropdown.min.js" charset="utf-8"></script>

<script type="text/javascript">
  Vue.component('ic-crud-dropdown', window.IcCrudDropdown);
</script>
```

## Installation

### Using yarn

`yarn add ic-crud-dropdown`

### Using npm

`npm i --save ic-crud-dropdown`

## Demo and Docs

`npm run serve`

## Tests

This template uses karma with chai by default, you can change test settings in poi.config.js

`npm run test`
`npm run test:watch`
`npm run test:cov`

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
