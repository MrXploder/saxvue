module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 1%, not dead",
        modules: false,
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-transform-runtime",
  ],
};
