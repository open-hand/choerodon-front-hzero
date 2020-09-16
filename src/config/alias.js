const paths = require('hzero-webpack-scripts/config/paths');
const path = require('path');

module.exports = {
  '@common': path.resolve(paths.appRootPath, 'packages', 'sample2-common/src'),
  'hzero-boot-customize-init-config': path.resolve(
    __dirname,
    '../../packages/sample2-common/src/config/customize'
  ),
  '@/assets': path.resolve(paths.appRootPath, 'src/assets'),
  '@': path.resolve(paths.appPath, 'src'),

  components: 'hzero-front/src/components/',
  utils: 'hzero-front/src/utils/',
  services: 'hzero-front/src/services/',
};
