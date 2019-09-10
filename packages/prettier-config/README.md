# @drivy/prettier-config ![npm](https://img.shields.io/npm/v/@drivy/prettier-config.svg?style=flat-square) ![CircleCI](https://img.shields.io/circleci/build/github/drivy/prettier-config.svg?style=flat-square)

Shareable [Prettier config](https://prettier.io/blog/2019/04/12/1.17.0.html#config) for [Drivy](https://www.drivy.com)'s projects.

```sh
$ yarn add -D @drivy/prettier-config
```

## Usage

In a `.prettierrc.json`:
```json
"@drivy/prettier-config"
```

Or in order to be extended, in a `.prettierrc.js`:
```
module.exports = {
  ...require("@drivy/prettier-config"),
  singleQuote: true
}
```
