const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    config.minimizer = [
      new TerserWebpackPlugin(),
    ];
  }

  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

module.exports = {
  // исходный путь
  context: path.resolve(__dirname, "src"),

  // в каком режиме собирать приложение
  mode: "development",

  // стартовый файл
  entry: {
    main: ["@babel/polyfill", "/js/main.js"],
  },

  // место загрузки приложения
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
  },

  // правила для расширений
  resolve: {
    extensions: [".js", ".json", ".png"],
  },

  optimization: optimization(),

  devServer: {
    port: 4199,
    hot: isDev,
  },

  // подключение плагинов
  plugins: [
    new HTMLWebpackPlugin({
      title: "Final mockap",
      template: "/index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),

    // очистка папки dist
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],

  module: {
    // правила
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(?:|jpe?g|png|gif|svg|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: () => {
            return isDev ? "img/[name][ext]" : "img/[name].[contenthash][ext]";
          },
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
