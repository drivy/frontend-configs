# @drivy/ts-config ![npm](https://img.shields.io/npm/v/@drivy/ts-config.svg?style=flat-square) ![CircleCI](https://img.shields.io/circleci/build/github/drivy/ts-config.svg?style=flat-square)

Shareable [ts config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#configuration-inheritance-with-extends) for [Drivy](https://www.drivy.com)'s projects.

```sh
$ yarn add -D @drivy/ts-config
```

## Usage

In a `tsconfig.json`:

```json
{
  "extends": "./node_modules/@drivy/ts-config/base"
}
```
