# pgg-pages

[![Build Status][travis-image]][travis-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> this is pggpages

## Installation

```shell
$ npm install pgg-pages

# or yarn
$ yarn add pgg-pages
```

## Usage

<!-- TODO: Introduction of API use -->

```javascript
const pggPages = require('pgg-pages')
const result = pggPages('zce')
// result => 'zce@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### pggPages(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; pgg



[travis-image]: https://img.shields.io/travis/BlackRouran/pgg-pages/master.svg
[travis-url]: https://travis-ci.org/BlackRouran/pgg-pages
[downloads-image]: https://img.shields.io/npm/dm/pgg-pages.svg
[downloads-url]: https://npmjs.org/package/pgg-pages
[version-image]: https://img.shields.io/npm/v/pgg-pages.svg
[version-url]: https://npmjs.org/package/pgg-pages
[license-image]: https://img.shields.io/github/license/BlackRouran/pgg-pages.svg
[license-url]: https://github.com/BlackRouran/pgg-pages/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/BlackRouran/pgg-pages.svg
[dependency-url]: https://david-dm.org/BlackRouran/pgg-pages
[devdependency-image]: https://img.shields.io/david/dev/BlackRouran/pgg-pages.svg
[devdependency-url]: https://david-dm.org/BlackRouran/pgg-pages?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
