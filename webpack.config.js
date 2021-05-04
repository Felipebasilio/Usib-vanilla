const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.ts",
  devServer: {
    contentBase: "public",
    writeToDisk: true,
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    publicPath: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
};
