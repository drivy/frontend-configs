# @getaround-eu/babel-preset-app [![npm version](https://badge.fury.io/js/%40drivy%2Fbabel-preset-app.svg)](https://badge.fury.io/js/%40drivy%2Fbabel-preset-app)

Babel shareable preset for Getaround's projects. [See Babel documentation](https://babeljs.io/docs/en/presets)

## Using in another project

Install: `yarn add --dev @getaround-eu/babel-preset-app`

In your local babel configuration file `babel.config.js`, add it into the `presets` field:

```javascript
module.exports = {
  "presets": [
    "@getaround-eu/app",
    // or equivalent
    "@getaround-eu/babel-preset-app",
    // or equivalent
    require("@getaround-eu/babel-preset-app"),
  ]
}
```
