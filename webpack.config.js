/*
 * Package Import
 */
const path = require('path');

// Webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/*
 * Local Import
 */

/*
 * Init
 */
const isDevelopment = process.env.NODE_ENV === 'development';

/*
 * Code
 */
const devPlugins = [
  // Generates an `index.html` file with the <script> injected
  new HtmlWebpackPlugin({
    inject: true,
    filename: 'index.html',
    template: './example/assets/index.html',
  }),
];

const prodPlugins = [
  // Clear the `dist` folder
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve('./'),
    verbose: true,
    dry: false,
  }),
];

/*
 * Webpack Config
 */
module.exports = {
  // Mode
  mode: isDevelopment ? 'development' : 'production',

  // Entry
  entry: {
    main: [isDevelopment ? './example/index.js' : './src/index.js'],
  },

  // Output
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },

  // Resolve
  resolve: {
    // Where Webpack is need to seeing / resolving files.
    modules: [
      path.resolve('node_modules'),
      path.resolve('./example'),
      path.resolve('./src'),
    ],
    extensions: ['.js', '.jsx', '.json'],
  },

  // Optimization
  optimization: {
    // Override the default minimizer
    minimizer: [
      // Uglify JS files
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
    ],
  },

  // Rules / Loaders
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // Enables caching results in [./node_modules/.cache/babel-loader/] directory
            // For faster rebuilds.
            cacheDirectory: isDevelopment,
          },
        },
      },
    ],
  },

  // Plugins
  plugins: isDevelopment ? devPlugins : prodPlugins,

  // Devtool controls if and how sourcemaps are generated
  devtool: isDevelopment ? 'cheap-module-source-map' : 'source-map',

  // If we need to reload automagically during the dev
  watch: isDevelopment,

  // Settings `webpackDevServer`
  devServer: {
    // Build progress in console
    progress: true,

    // Port
    port: 3000,

    // What do you need display in your console?
    // More info : https://webpack.js.org/configuration/stats/#stats
    stats: {
      assets: false,
      children: false,
      colors: true,
      entrypoints: false,
      env: true,
      modules: false,
      timings: true,
    },

    // Watch options
    watchOptions: {
      ignored: /node_modules/,
    },
  },

  // Turn off performance hints
  performance: {
    hints: false,
  },
};
