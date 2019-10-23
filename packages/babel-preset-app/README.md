# @drivy/babel-preset-app [![npm version](https://badge.fury.io/js/%40drivy%2Fbabel-preset-app.svg)](https://badge.fury.io/js/%40drivy%2Fbabel-preset-app)

Babel shareable preset for Getaround's projects. [See Babel documentation](https://babeljs.io/docs/en/presets)

## Using in another project

Install: `yarn add --dev @drivy/babel-preset-app`

In your local babel configuration file `babel.config.js`, add it into the `presets` field:

```javascript
module.exports = {
  "presets": [
    "@drivy/app",
    // or equivalent
    "@drivy/babel-preset-app",
    // or equivalent
    require("@drivy/babel-preset-app"),
  ]
}
```
