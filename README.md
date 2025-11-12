### NPM-Published front-end shareable configurations

Available shareable configs:

- [Babel config](./packages/babel-preset-app)
- [Browserslist config](./packages/browserslist-config)
- [Biome config](./packages/biome-config)
- [Typescript config](./packages/ts-config)

Not maintained anymore:
- [ESLint config](./packages/eslint-config) (use Biome config instead)
- [Prettier config](./packages/prettier-config) (use Biome config instead)
- [Stylelint config](./packages/stylelint-config) (use Biome config instead)

#### Publish packages

:bulb: You can check the packages that gonna be published by doing a `pnpm lerna updated`.

Just run `pnpm lerna publish` then follow the CLI instructions. Lerna will automatically
publish on NPM and add a tag to the repository according to the published version.
