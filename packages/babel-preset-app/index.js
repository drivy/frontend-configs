const browserslist = require("@getaround-eu/browserslist-config")
const { declare } = require("@babel/helper-plugin-utils")

module.exports = declare(function (api, options) {
  api.assertVersion(7)

  const validEnv = ["development", "test", "production"]
  const currentEnv = api.env()
  const isDevelopmentEnv = api.env("development")
  const isTestEnv = api.env("test")

  if (!validEnv.includes(currentEnv)) {
    throw new Error(
      "Please specify a valid `NODE_ENV` or " +
        '`BABEL_ENV` environment variables. Valid values are "development", ' +
        '"test", and "production". Instead, received: ' +
        JSON.stringify(currentEnv) +
        "."
    )
  }

  const presetEnvNodeOptions = {
    targets: { node: "current" },
    modules: "commonjs",
    useBuiltIns: "usage",
    bugfixes: true,
    debug: options.debug || false,
  }

  const presetEnvBrowserOptions = {
    targets: browserslist,
    // Do not transform modules to CJS
    modules: false,
    // this transform makes the code slower, so we exclude it
    exclude: ["transform-typeof-symbol"],
    // Adds specific imports for polyfills when they are used in each file.
    // We take advantage of the fact that a bundler will load the same polyfill only once.
    useBuiltIns: "usage",
    bugfixes: true,
    debug: options.debug || false,
    corejs: "3.30",
  }

  return {
    presets: [
      [
        require.resolve("@babel/preset-typescript"),
        // To remove in Babel 8 since it will be the default
        { allowDeclareFields: true },
      ],
      isTestEnv
        ? [require.resolve("@babel/preset-env"), presetEnvNodeOptions]
        : [require.resolve("@babel/preset-env"), presetEnvBrowserOptions],
      [
        require.resolve("@babel/preset-react"),
        { development: isDevelopmentEnv || isTestEnv },
      ],
    ].filter(Boolean),
    plugins: [
      require.resolve("babel-plugin-macros"),
      require.resolve("@babel/plugin-syntax-dynamic-import"),
      isTestEnv && require.resolve("babel-plugin-dynamic-import-node"),
      require.resolve("@babel/plugin-proposal-class-properties"),
      // Continue to disable block-scoping for const/let variables
      // and transform them to var variables.
      // This is considered as technical debt and should be migrated to block-scoping
      require.resolve("@babel/plugin-transform-block-scoping"),
      [
        require.resolve("@babel/plugin-transform-runtime"),
        {
          corejs: false,
          // By default Babel will add its helpers to every file that requires them.
          // This can result in a very large bundle size due to the duplication.
          // This option tells Babel to alias these helpers to a single module.
          // https://babeljs.io/docs/en/babel-plugin-transform-runtime#helpers
          helpers: true,
          // By default, babel assumes babel/runtime version 7.0.0-beta.0,
          // explicitly resolving to match the provided helper functions.
          // https://github.com/babel/babel/issues/10261
          version: require("@babel/runtime/package.json").version,
          regenerator: true,
          // https://babeljs.io/docs/en/babel-plugin-transform-runtime#useesmodules
          useESModules: !isTestEnv,
        },
      ],
    ].filter(Boolean),
  }
})
