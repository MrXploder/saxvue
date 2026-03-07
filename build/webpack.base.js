const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const pkg = require("../package.json");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WebpackBar = require("webpackbar");

module.exports = {
  mode: "production",
  stats: "errors-only",
  externals: {
    vue: {
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
      root: "Vue",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                outputStyle: "expanded",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new webpack.BannerPlugin({
      banner: `/*!
  * SaxVue v${pkg.version} by MrXploder 🖖 (https://github.com/MrXploder/saxvue)
  * Original proyect by Luis Daniel Rovira (https://lusaxweb.github.io/saxvue/)
  * Released under the MIT License.
  */`,
      raw: true,
      entryOnly: true,
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
    ],
  },
};
