// give webpack access to Bundle Analyzer plugin
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const path = require("path");

// plugin is built into webpack, we need
//  to be sure we're bringing webpack's methods and properties into the config file.
const webpack = require("webpack");

// create the main configuration object within our file
//  ntry point is the root of the bundle and the beginning
// of the dependency graph, so give it the relative path to the client's code
module.exports = {
  entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js",
  },
  output: {
   filename: '[name].bundle.js',
   path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.jpg$/i,
        use: [
          {
          loader: 'file-loader',
          options: {
            esModule: false,
            name (file) {
              return "[path][name].[ext]"
            },
            publicPath: function(url) {
              return url.replace("../", '/assets/')
            }
          }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  
  // let webpack know to use JQuery
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // the report outputs to an HTML file in the dist folder
    }),
  ],
  mode: "development",
};
