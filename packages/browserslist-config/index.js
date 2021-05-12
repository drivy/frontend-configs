// We use spread in object support to say if a browser is supported or not
// source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const spreadInObjectSupport = [
  // Desktop
  "chrome >= 60",
  "edge >= 79",
  "firefox >= 55",
  "opera >= 47",
  "safari >= 11.1",
  // Mobile
  "android >= 60",
  "and_chr >= 60",
  "and_ff >= 55",
  "ios_saf >= 11.3",
  "samsung >= 8.2",
]

module.exports = [
  "> 0.25%",
  "not ie 11",
  "not samsung 4",
  "not op_mini all",
].concat(spreadInObjectSupport)
