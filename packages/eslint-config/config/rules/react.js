module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react"],
  extends: ["plugin:react/recommended", "prettier/react"],
  rules: {
    "react/prop-types": "off"
  }
}
