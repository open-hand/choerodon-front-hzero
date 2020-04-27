const babelConfigFactory = require('hzero-boot/lib/babelConfigFactory');

const config = babelConfigFactory();

// if(process.env.MULTIPLE_SKIN_ENABLE === 'true') {
  // const uedConfig = require('hzero-front/lib/utils/uedUtils');
  // config.plugins=([
  //   ...uedConfig.generateHzeroUIConfig(),
  //   ...uedConfig.generateC7nUiConfig(),
  //   ...config.plugins.filter(([_1,_2,pName]=[])=>!['ant', 'c7n', 'c7n-pro'].includes(pName)),
  // ]);
// }

module.exports = config;
