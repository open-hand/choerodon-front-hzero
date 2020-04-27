import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const routerConfig: RoutersConfig = [
  // Insert New Router
  {
    path: '/hzero-boot/test1',
    component: () => import('../pages/test1/Test1Page'),
    authorized: true,
    title: '区块测试页',
  },
];

export default routerConfig;
