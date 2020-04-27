import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  {
    path: '/hzero-boot/test1',
    component: () => import('./Test1Page'),
    authorized: true,
    title: 'Hello-Test1',
  },
];

export default config;
