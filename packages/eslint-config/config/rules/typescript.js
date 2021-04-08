module.exports = {
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  rules: {
    // We disable some rules from eslint to the use the typescript-eslint ones
    "no-use-before-define": "off",
    // Disabled on functions since they can be hoisted
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    // We let prettier handle semicolons in the code
    "@typescript-eslint/no-extra-semi": "off",

    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "all",
        argsIgnorePattern: "^_[^_]+",
        varsIgnorePattern: "^_[^_]+",
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": "off",
  },
}
