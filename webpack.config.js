const path = require("path");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//dev es igual a NODE_ENV si es igual a development, esto devuelve un boolean entonces lo usamos en watch
const dev = process.env.NODE_ENV == "development";

// importamos live-server
const liveServer = require("live-server");

// Si estamos en modo development
if (dev) {
  // corremos live-server
  liveServer.start({
    root: "./",
    file: "index.html",
  });
}

module.exports = {
  watch: dev,
  entry: "./src/index.tsx",
  // module le dice como tratar a los módulos
  module: {
    //reglas
    rules: [
      {
        // si el archivo pasa el test, usa un loader y excluye node_modules
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        // cuando el archivo tenga .css usa el css-loader y style-loader
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.png$/i,
        type: "assets",
        resourceQuery: /url/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js", ".ts"],
    plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "https://maxij16.github.io/React-Api-ML/",
  },
  performance: {
    hints: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./index.html"),
    }),
  ],
};
