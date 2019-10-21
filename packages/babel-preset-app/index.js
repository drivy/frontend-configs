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
    forceAllTransforms: true,
    targets: browserslist,
    modules: false,
    exclude: ["transform-typeof-symbol"],
    useBuiltIns: "entry",
  }

  return {
    presets: [
      require("@babel/preset-typescript").default,
      isTestEnv
        ? [require("@babel/preset-env").default, presetEnvNodeOptions]
        : [require("@babel/preset-env").default, presetEnvBrowserOptions],
      [
        require("@babel/preset-react").default,
        { development: isDevelopmentEnv || isTestEnv },
      ],
    ].filter(Boolean),
    plugins: [
      require("babel-plugin-macros"),
      require("@babel/plugin-syntax-dynamic-import").default,
      isTestEnv && require("babel-plugin-dynamic-import-node"),
      require("@babel/plugin-proposal-class-properties").default,
      [
        require("@babel/plugin-transform-runtime").default,
        {
          helpers: false,
          regenerator: true,
        },
      ],
    ].filter(Boolean),
  }
})
