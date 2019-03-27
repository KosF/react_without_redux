const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: ["babel-polyfill", "./src/assets/scss/style.scss", "./src/index.js"],
  output: {
    publicPath: "/"
  },
  devServer: {
    port: 8081,
    progress: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              minimize: {
                safe: true
              }
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: ["./src/assets/scss/utils/*.scss"]
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/fonts/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "./src/components"),
      Containers: path.resolve(__dirname, "./src/containers"),
      Pages: path.resolve(__dirname, "./src/pages"),
      Helpers: path.resolve(__dirname, "./src/helpers"),
      Actions: path.resolve(__dirname, "./src/actions"),
      Images: path.resolve(__dirname, "./src/assets/images"),
      Src: path.resolve(__dirname, "./src")
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "style.min.css"
    }),
    new webpack.ContextReplacementPlugin(/moment[/]locale$/, /de|en/)
  ]
};
