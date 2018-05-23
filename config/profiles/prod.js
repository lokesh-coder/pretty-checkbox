const webpack = require('webpack');
const LicenseBannerPlugin = require('license-banner-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const appConfig = require('../../package.json');

const prodPlugins = [
  new OptimizeCSSAssetsPlugin({
    cssProcessor: require('cssnano'),
    cssProcessorOptions: { discardComments: { removeAll: true } },
    canPrint: true
  }),
  new webpack.BannerPlugin({ banner: appConfig.version, entryOnly: false })
];
module.exports = {
  plugins: [...prodPlugins]
};
