import commonConfig from '@common/config/commonConfig.ts';

export class ConfigProps {
  /**
   * 后端网关地址
   *
   * @type {string}
   * @memberof ConfigProps
   */
  API_HOST: string = commonConfig.API_HOST;
}

type ConfigKey = keyof ConfigProps;

const CONFIG_NAME_SPACE_KEY = '_hzero_configStore_sample2TestModule';

export const getConfigStore = (): ConfigProps => {
  if (!(window as any)[CONFIG_NAME_SPACE_KEY]) {
    ((window as any)[CONFIG_NAME_SPACE_KEY] as ConfigProps) = new ConfigProps();
  }
  return (window as any)[CONFIG_NAME_SPACE_KEY];
};

export const getConfig = (key: ConfigKey): string => {
  return getConfigStore()[key];
};

const commonConfigStore: ConfigProps = getConfigStore();

export default commonConfigStore;
