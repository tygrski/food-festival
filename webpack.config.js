const path = require('path');

// plugin is built into webpack, we need
//  to be sure we're bringing webpack's methods and properties into the config file. 
const webpack = require("webpack");

// create the main configuration object within our file
//  ntry point is the root of the bundle and the beginning 
// of the dependency graph, so give it the relative path to the client's code
module.exports = {
    entry: './assets/js/script.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.bundle.js'
    },
    // let webpack know to use JQuery

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
          }),
    ],
    mode: 'development'
  };