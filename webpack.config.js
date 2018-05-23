const merge = require('webpack-merge');
const config = require('./config/profiles');

module.exports = function(mode) {
  if (mode === 'production') {
    return merge(config.common, config.prod, { mode });
  }

  return merge(config.common, config.dev, { mode });
};
