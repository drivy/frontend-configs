module.exports = {
  plugins: ["stylelint-order"],
  ignoreFiles: ["**/*.{js|ts|jsx|tsx}"],
  rules: {
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-property-value-disallowed-list": {
      "/^border/": "none",
    },
    "declaration-block-no-duplicate-properties": true,
    "rule-empty-line-before": [
      "always-multi-line",
      { except: ["first-nested", "after-single-line-comment"] },
    ],
    "block-no-empty": true,
    "no-missing-end-of-source-newline": true,
    "color-hex-length": "short",
    "color-hex-case": "lower",
    "color-no-invalid-hex": true,
    "no-duplicate-selectors": true,
    "unit-allowed-list": [
      "em",
      "rem",
      "px",
      "vh",
      "vw",
      "vmin",
      "vmax",
      "deg",
      "grad",
      "rad",
      "ms",
      "s",
      "%",
      "fr",
    ],
    "string-quotes": "double",
    "number-no-trailing-zeros": true,
    "function-url-quotes": "always",
    "property-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "at-rule-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "length-zero-no-unit": true,
    "max-nesting-depth": 3,
    "function-disallowed-list": ["repeat"], // because of an issue with sass and autoprefixer
    "order/order": [
      "dollar-variables",
      { type: "at-rule", name: "include" },
      "declarations",
      { type: "at-rule", name: "include", parameter: "breakpoint" },
      { type: "at-rule", name: "media" },
      "rules",
    ],
    "unit-no-unknown": [
      true,
      {
        // We ignore on image-set because of x unit usage
        ignoreFunctions: ["image-set", "-webkit-image-set"],
      },
    ],
    "order/properties-order": [
      [
        {
          order: "flexible",
          emptyLineBefore: "always",
          properties: [
            "position",
            "float",
            "z-index",
            "top",
            "right",
            "bottom",
            "left",
          ],
        },
        {
          order: "flexible",
          emptyLineBefore: "always",
          properties: [
            "display",
            "overflow",
            "overflow-x",
            "overflow-y",
            "overflow-scrolling",
            "box-sizing",
            "box-sizing",
            "flex",
            "flex-basis",
            "flex-direction",
            "flex-flow",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "align-content",
            "align-items",
            "align-self",
            "justify-content",
            "order",
            "width",
            "height",
            "min-width",
            "max-width",
            "min-height",
            "max-height",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "border",
            "border-top",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-right",
            "border-bottom",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "border-left",
            "border-color",
            "border-style",
            "border-width",
            "border-collapse",
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
          ],
        },
        {
          order: "flexible",
          emptyLineBefore: "always",
          properties: [
            "color",
            "font-family",
            "font-size",
            "line-height",
            "font-weight",
            "font-style",
            "text-align",
            "text-shadow",
            "text-decoration",
            "vertical-align",
            "word-wrap",
            "white-space",
            "text-overflow",
            "text-transform",
          ],
        },
        {
          order: "flexible",
          emptyLineBefore: "always",
          properties: [
            "background",
            "background-image",
            "background-position",
            "background-color",
            "background-attachment",
            "background-size",
            "background-repeat",
            "box-shadow",
            "border-radius",
            "outline",
            "outline-style",
            "content",
            "cursor",
            "opacity",
            "fill",
          ],
        },
        {
          order: "flexible",
          emptyLineBefore: "always",
          properties: [
            "animation",
            "animation-name",
            "animation-duration",
            "transition",
            "transform",
          ],
        },
      ],
      {
        unspecified: "bottom",
      },
    ],
  },
}
