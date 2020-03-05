const browserslist = require("@drivy/browserslist-config")
const { declare } = require("@babel/helper-plugin-utils")

module.exports = declare(function(api) {
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
    useBuiltIns: false,
  }

  const presetEnvBrowserOptions = {
    targets: browserslist,
    // Do not transform modules to CJS
    modules: false,
    // this transform makes the code slower, so we exclude it
    exclude: ["transform-typeof-symbol"],
    // Adds specific imports for polyfills when they are used in each file.
    // We take advantage of the fact that a bundler will load the same polyfill only once.
    useBuiltIns: "entry",
    corejs: 3,
  }

  return {
    presets: [
      require.resolve("@babel/preset-typescript"),
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
      [
        require.resolve("@babel/plugin-transform-runtime"),
        {
          corejs: false,
          helpers: false,
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
