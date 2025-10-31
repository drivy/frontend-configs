# @getaround-eu/prettier-config ![npm](https://img.shields.io/npm/v/@getaround-eu/prettier-config.svg?style=flat-square) ![CircleCI](https://img.shields.io/circleci/build/github/drivy/prettier-config.svg?style=flat-square)

> [!IMPORTANT]
> :pushpin: This won't be maintained anymore. We moved to [Biome](https://biomejs.dev/). Please use [@getaround-eu/biome-config](https://github.com/drivy/frontend-configs/tree/main/packages/biome-config) instead.

Shareable [Prettier config](https://prettier.io/blog/2019/04/12/1.17.0.html#config) for [Getaround](https://fr.getaround.com)'s projects.

```sh
yarn add -D @getaround-eu/prettier-config
npm install -D @getaround-eu/prettier-config
pnpm install -D @getaround-eu/prettier-config
```

## Usage

In a `.prettierrc.json`:
```json
"@getaround-eu/prettier-config"
```

Or in order to be extended, in a `.prettierrc.js`:
```
module.exports = {
  ...require("@getaround-eu/prettier-config"),
  singleQuote: true
}
```
