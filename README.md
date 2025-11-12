### NPM-Published front-end shareable configurations

Available shareable configs:

- [Babel config](./packages/babel-preset-app)
- [Browserslist config](./packages/browserslist-config)
- [Biome config](./packages/biome-config)
- [ESLint config](./packages/eslint-config) (DEPRECATED)
- [Prettier config](./packages/prettier-config) (DEPRECATED)
- [Stylelint config](./packages/stylelint-config) (DEPRECATED)
- [Typescript config](./packages/ts-config)

#### Publish packages

:bulb: You can check the packages that gonna be published by doing a `pnpm lerna updated`.

Just run `pnpm lerna publish` then follow the CLI instructions. Lerna will automatically
publish on NPM and add a tag to the repository according to the published version.
