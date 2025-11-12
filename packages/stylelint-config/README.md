# @getaround-eu/stylelint-config ![npm](https://img.shields.io/npm/v/@getaround-eu/stylelint-config.svg?style=flat-square) ![CircleCI](https://img.shields.io/circleci/build/github/drivy/stylelint-config.svg?style=flat-square)

> [!IMPORTANT]
> :pushpin: This won't be maintained anymore. We moved to [Biome](https://biomejs.dev/). Please use [@getaround-eu/biome-config](https://github.com/drivy/frontend-configs/tree/main/packages/biome-config) instead.

Shareable [stylelint config](https://stylelint.io/user-guide/configuration#extends) for [Getaround](https://fr.getaround.com)'s projects.

```sh
yarn add -D @getaround-eu/stylelint-config
npm install -D @getaround-eu/stylelint-config
pnpm install -D @getaround-eu/stylelint-config
```

## Usage

In a `.stylelintrc.json`:
```json
{
  "extends": "@getaround-eu/stylelint-config"
}
```

Or in order to be extended, in a `.stylelintrc.js`:
```
module.exports = {
  extends: "@getaround-eu/stylelint-config"
}
```
