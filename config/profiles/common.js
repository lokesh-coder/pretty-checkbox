const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const InertEntryPlugin = require('inert-entry-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IgnoreAssetsWebpackPlugin = require('ignore-assets-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');
const stylelint = require('stylelint');
const ENV = process.env.NODE_ENV;

module.exports = merge({
  entry: { 'pretty-checkbox': './src/main.scss' },
  output: {
    path: path.resolve(__dirname, '../../dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { minimize: ENV === 'production', sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: loader => [autoprefixer(), stylelint]
            }
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
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../../')
    }),
    new MiniCssExtractPlugin({
      filename: ENV === 'production' ? '[name].min.css' : '[name].css'
    }),
    new IgnoreAssetsWebpackPlugin({
      ignore: 'pretty-checkbox.js'
    })
  ]
});
