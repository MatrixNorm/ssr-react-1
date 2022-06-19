const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const entry = process.env.SSR === "yes" ? "./src/index.ssr.js" : "./src/index.js";

module.exports = {
  target: "web",
  mode: "development",
  entry,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            configFile: "./babel.config.client.js",
          },
        },
      },
    ],
  },
  resolve: {
    /*
      это для того, чтобы не писать расширения при импорте:
      import {letsgo} from "brandon.js"
    */
    extensions: [".js", ".jsx"],
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
