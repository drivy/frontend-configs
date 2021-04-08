module.exports = {
  plugins: ["jest"],
  extends: ["plugin:jest/recommended"],
  globals: {
    global: true,
    jsdom: true,
  },
  env: {
    "jest/globals": true,
  },
}
