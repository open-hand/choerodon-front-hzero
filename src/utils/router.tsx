import getModuleRouters from './getModuleRouters';
import { getConvertRouter } from 'hzero-boot/lib/utils/getConvertRouter';
import routers from '../config/routers';

const convertRouter = (app) =>
  getConvertRouter({
    hzeroRoutes: routers,
    options: { app },
  });

export function getRouterData(app) {
  return {
    ...getModuleRouters(app),
    ...convertRouter(app)(),
  };
}
