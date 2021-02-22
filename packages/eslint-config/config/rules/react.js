module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks"],
  extends: ["plugin:react/recommended"],
  rules: {
    "react/prop-types": "off",
  },
}
