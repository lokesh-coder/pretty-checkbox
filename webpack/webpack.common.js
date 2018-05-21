const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ENV = process.env.NODE_ENV;

module.exports = {
  entry: './src/main.scss',
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  mode: 'development',
  devServer: {
    contentBase: './',
    hot: true,
    overlay: true,
    inline: true,
    index: 'playground/index.html',
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: ENV === 'production' ? 'pretty-checkbox.min.css' : 'pretty-checkbox.css'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader',
            options: { minimize: ENV === 'production', sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    })
  ]
};
