const browserslist = require("@drivy/browserslist-config")

module.exports = function(api) {
  const validEnv = ["development", "test", "production"]
  const currentEnv = api.env()
  const isDevelopmentEnv = api.env("development")
  const isProductionEnv = api.env("production")
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
    modules: false,
    exclude: ["transform-typeof-symbol"],
    useBuiltIns: "entry",
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
      [
        require.resolve("@babel/plugin-proposal-class-properties"),
        { loose: true },
      ],
      [
        require("@babel/plugin-transform-runtime").default,
        {
          helpers: true,
          regenerator: true,
        },
      ],
    ].filter(Boolean),
  }
}
