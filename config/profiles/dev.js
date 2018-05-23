const webpack = require('webpack');
function devServer({ host = 'localhost', port = '1234' } = {}) {
  return {
    contentBase: './',
    host,
    port,
    hot: true,
    overlay: true,
    inline: true,
    index: 'playground/index.html',
    watchOptions: {
      poll: true
    }
  };
}

const devPlugins = [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()];

module.exports = {
  plugins: [...devPlugins],
  devServer: devServer()
};
