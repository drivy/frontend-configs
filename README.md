### NPM-Published front-end shareable configurations

Available shareable configs:

- [Browserslist config](./packages/browserslist-config)
- [ESLint config](./packages/eslint-config)
- [Prettier config](./packages/prettier-config)
- [Stylelint config](./packages/stylelint-config)
- [Typescript config](./packages/ts-config)

#### Publish packages

:bulb: You can check the packages that gonna be published by doing a `yarn lerna updated`.

Just run `yarn lerna publish` then follow the CLI instructions. Lerna will automatically
publish on NPM and add a tag to the repository according to the published version.
