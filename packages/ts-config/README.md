# @getaround-eu/ts-config ![npm](https://img.shields.io/npm/v/@getaround-eu/ts-config.svg?style=flat-square) ![CircleCI](https://img.shields.io/circleci/build/github/drivy/ts-config.svg?style=flat-square)

Shareable [ts config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#configuration-inheritance-with-extends) for [Getaround](https://fr.getaround.com)'s projects.

```sh
yarn add -D @getaround-eu/ts-config
npm install -D @getaround-eu/ts-config
pnpm install -D @getaround-eu/ts-config
```

## Usage

In a `tsconfig.json`:

```json
{
  "extends": "./node_modules/@getaround-eu/ts-config/base"
}
```
