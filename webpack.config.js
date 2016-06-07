var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var nodeEnvironment = process.env.NODE_ENV

var config = {
  context: __dirname,
  entry: "./src/js/index.js",
  resolve: {
    extensions: ['', '.js', '.tpl.html', '.css', '.less'],
    modulesDirectories: [".", "components", "node_modules"]
  },
  module: {
    loaders: [
      { test: /\.tpl.html/, loader: 'html'},
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      // Extract css files
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      // Optionally extract less files
      // or any other compile-to-css language
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.eot$|\.woff$|\.woff2$|\.ttf$|\.wav$|\.mp3$/, loader: require.resolve("file-loader") + "?name=/assets/[name].[ext]"}
    ]
  },
  // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
  plugins: [ new ExtractTextPlugin("assets/style.css", {allChunks: true}) ]
};

switch (nodeEnvironment) {
  case 'production':
    config.output.path = __dirname + '/dist';
    config.output.filename = 'assets/bundle.js';
    break;
  case 'test':
  case 'development':
    break;
  default: 
    console.warn('Unknown or Undefigned Node Environment. Please refer to package.json for available build commands.');
}

module.exports = config;