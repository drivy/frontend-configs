module.exports = {
  semi: false,
  trailingComma: "es5",
  overrides: [
    {
      files: ["*.css", "*.scss"],
      options: {
        trailingComma: "none",
      },
    },
  ],
}
