const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  //Punto de entrada de nuestra aplicacion
  entry: path.resolve(__dirname, "src/index.js"),
  // Donde se va a generar la salida de la aplicacion o el codigo minificado
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[fullhash].bundle.js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        loader: "file-loader",
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, "public"),to:path.resolve(__dirname,'build') }],
    }),
  ],

  devtool: "eval",

  devServer: {
    host: "127.0.0.1",
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
};