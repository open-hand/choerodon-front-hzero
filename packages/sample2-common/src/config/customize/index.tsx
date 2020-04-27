import { overWriteConfig } from 'hzero-boot';
// import commonConfig from '../commonConfig';

overWriteConfig({
  // // 全局错误处理配置
  // dealGlobalError: (error) => {
  //   window.location.href = `${commonConfig.BASE_PATH || '/'}error.html?errorMessage=${encodeURIComponent(
  //     error && error.message
  //   )}&errorLocation=${encodeURIComponent(window.location.href)}`;
  // },
  // // 在这个文件内可以重新 c7nUi 配置
  // initC7nUiConfig: () => {
  //     return require('hzero-front/lib/utils/c7nUiConfig');
  // },
  // // 在 dva 对象实例化之后调用，可以在这里添加 dva 插件
  // dvaAppInit: (dvaApp) => {
  //   require('hzero-front-hmsg/lib/customize');
  //   const axios: AxiosStatic = getConfig('axios');
  //   axios.interceptors.response.use(
  //       config => config,
  //       (error) => {
  //           return Promise.reject(error);
  //       }
  //   )
  // },
  // // 可以设置 dvaApp.router 的根路由
  // dvaRootRouter: () => require('hzero-front/lib/router').default,
  // // 可以替换 global 配置
  // globalModal: () => require('./models/global').default,
});
