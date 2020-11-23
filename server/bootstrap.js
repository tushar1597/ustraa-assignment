require('ignore-styles');

require('@babel/register')({
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    [
      "transform-assets",
      {
        "extensions": [
          "css",
          "svg",
          "png"
        ],
        "name": "static/media/[name].[hash:8].[ext]"
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ]
  ]
});

require('./index');
