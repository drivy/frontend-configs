// We use spread in object support to say if a browser is supported or not
// source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const spreadInObjectSupport = [
  // Desktop
  "chrome >= 69",
  "edge >= 79",
  "firefox >= 62",
  "opera >= 56",
  "safari >= 12",
  // Mobile
  "android >= 69",
  "and_chr >= 69",
  "and_ff >= 62",
  "ios_saf >= 12",
  "samsung >= 10.1",
]

module.exports = [
  "> 0.25%",
  "not ie 11",
  "not samsung 4",
  "not op_mini all",
].concat(spreadInObjectSupport)
