const { alias } = require('react-app-rewire-alias');
const path = require('path');

module.exports = function override(config) {
  alias({
    '@components': path.resolve(__dirname, 'src/components'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@png': path.resolve(__dirname, 'src/assets/image/png'),
    '@svg': path.resolve(__dirname, 'src/assets/image/svg'),
    '@btn': path.resolve(__dirname, 'src/ui/Button/index')
  })(config);

  return config;
};
