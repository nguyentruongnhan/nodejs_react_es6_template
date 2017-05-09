var path = require('path');
var webpack = require('webpack');

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    './main.js'
  ],
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel?' + JSON.stringify({
          cacheDirectory: true,
          plugins: [],
          presets: ['es2015', 'react', 'stage-0'],
        })],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }, {
        test: /\.html$/,
        loader: "html-loader"
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=10000'
      }, {
        test: /\.json/,
        loader: "json-loader"
      }
    ]
  }
};

module.exports = config;