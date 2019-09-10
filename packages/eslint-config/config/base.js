module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "prettier"],
  globals: {
    google: true,
    html: true,
    require: true,
    module: true
  },
  rules: {
    "prettier/prettier": "error",
    "block-scoped-var": "error",
    complexity: ["error", 20],
    eqeqeq: ["error", "allow-null"],
    "guard-for-in": "error",
    "no-caller": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-floating-decimal": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-str": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": [
      "error",
      {
        props: false
      }
    ],
    "no-proto": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-useless-call": "error",
    "no-void": "error",
    "no-with": "error",
    radix: "error",
    "wrap-iife": ["error", "any"],
    "no-shadow-restricted-names": "error",
    "no-shadow": "error",
    "no-unused-vars": "off",
    "no-use-before-define": ["error", "nofunc"],
    "no-restricted-imports": [
      "error",
      "lodash",
      "dlv",
      "moment",
      "immutable",
      "axios"
    ],
    "dot-notation": [
      "error",
      {
        allowPattern: "^[a-z]+(_[a-z]+)+$"
      }
    ],
    "no-var": "error"
  }
}
