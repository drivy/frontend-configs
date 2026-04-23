// We use Object.hasOwn support to say if a browser is supported or not
const objectHasOwnSupport = [
  // Desktop
  "chrome >= 93",
  "edge >= 93",
  "firefox >= 92",
  "opera >= 79",
  "safari >= 15.4",
  // Mobile
  "android >= 147",
  "and_chr >= 147",
  "and_ff >= 150",
  "ios_saf >= 15.4",
  "samsung >= 17.0",
]

module.exports = [
  "> 0.25%",
  "not ie 11",
  "not samsung 4",
  "not op_mini all",
  "not android <= 4.4.4",
].concat(objectHasOwnSupport)
