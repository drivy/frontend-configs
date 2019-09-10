# @drivy/stylelint-config ![npm](https://img.shields.io/npm/v/@drivy/stylelint-config.svg?style=flat-square) ![CircleCI](https://img.shields.io/circleci/build/github/drivy/stylelint-config.svg?style=flat-square)

Shareable [stylelint config](https://stylelint.io/user-guide/configuration#extends) for [Drivy](https://www.drivy.com)'s projects.

```sh
$ yarn add -D @drivy/stylelint-config
```

## Usage

In a `.stylelintrc.json`:
```json
{
  "extends": "@drivy/stylelint-config"
}
```

Or in order to be extended, in a `.stylelintrc.js`:
```
module.exports = {
  extends: "@drivy/stylelint-config"
}
```
