import testPageRouterConfig from '../routes/test-page/routers';
import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  // Insert New Router
  ...testPageRouterConfig,
  {
    path: '/sample2-test-module/hello',
    component: () => import('../routes/hello/HelloTestModulePage'),
    authorized: true,
    title: 'Hello Sample2TestModule',
  }
];

export default config;
