const path = require('path');
const mockerApi = require('mocker-api');
const { appRootPath } = require('hzero-webpack-scripts/config/paths');

module.exports = function mock(app) {
  mockerApi(app, path.resolve(appRootPath, '_mock/index'));
};
