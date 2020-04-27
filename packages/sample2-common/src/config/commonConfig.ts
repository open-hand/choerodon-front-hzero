
  import {
    API_HOST,
    CLIENT_ID,
    BPM_HOST,
    WFP_EDITOR,
    WEBSOCKET_URL,
    IM_ENABLE,
    CUSTOMIZE_ICON_NAME,
    HZERO_PLATFORM,
    HZERO_IAM,
    HZERO_DTT,
    HZERO_MSG,
    HZERO_PTL,
    HZERO_WFL,
    HZERO_DTW,
    HZERO_HDTW,
    HZERO_SDR,
    HZERO_HSGP,
    HZERO_HITF,
    HZERO_HFLE,
    HZERO_OAUTH,
    HZERO_ASGARD,
    HZERO_IMP,
    HZERO_RPT,
    HZERO_HCNF,
    HZERO_HWFP,
    HZERO_FILE,
    HZERO_NLP,
    HZERO_HPAY,
    HZERO_HEXL,
    HZERO_MNT,
    HZERO_INVOICE,
    HZERO_IM,
    HZERO_OCR,
    HZERO_CHG,
    HZERO_ADM,
    HZERO_DPM,
    HZERO_HSRH,
    HZERO_HRES,
    HZERO_HLCD,
    AUTH_HOST,
    LOGIN_URL,
    LOGOUT_URL,
    AUTH_SELF_URL,
    VERSION_IS_OP,
    BKT_PUBLIC,
    BKT_PLATFORM,
    BKT_MSG,
    BKT_SDR,
    BKT_RPT,
    BKT_INVOICE,
    BKT_OCR,
    BKT_ADM,
    BKT_HWFP,
    BKT_HITF,
  } from 'hzero-front/lib/utils/config';


export class ConfigProps {

  // 自定义接口前缀配置

  /**
   * Todo 模块的 API 前缀
   */
  TODO_API: string = '/htodo';

  // @ts-nocheck
  BASE_PATH: string = process.env.BASE_PATH || '/';

  // 公用 Hzero 模块 API 前缀配置

  

  /**
   * 后端网关地址
   *
   * @type {string}
   * @memberof ConfigProps
   */
  API_HOST: string = API_HOST;

  /**
   * 客户端 ID
   *
   * @type {string}
   * @memberof ConfigProps
   */
  CLIENT_ID: string = CLIENT_ID;
  BPM_HOST: string = BPM_HOST;
  WFP_EDITOR: string = WFP_EDITOR;
  WEBSOCKET_URL: string = WEBSOCKET_URL;
  IM_ENABLE: string = IM_ENABLE;
  CUSTOMIZE_ICON_NAME: string = CUSTOMIZE_ICON_NAME;
  HZERO_PLATFORM: string = HZERO_PLATFORM;
  HZERO_IAM: string = HZERO_IAM;
  HZERO_DTT: string = HZERO_DTT;
  HZERO_MSG: string = HZERO_MSG;
  HZERO_PTL: string = HZERO_PTL;
  HZERO_WFL: string = HZERO_WFL;
  HZERO_DTW: string = HZERO_DTW;
  HZERO_HDTW: string = HZERO_HDTW;
  HZERO_SDR: string = HZERO_SDR;
  HZERO_HSGP: string = HZERO_HSGP;
  HZERO_HITF: string = HZERO_HITF;
  HZERO_HFLE: string = HZERO_HFLE;
  HZERO_OAUTH: string = HZERO_OAUTH;
  HZERO_ASGARD: string = HZERO_ASGARD;
  HZERO_IMP: string = HZERO_IMP;
  HZERO_RPT: string = HZERO_RPT;
  HZERO_HCNF: string = HZERO_HCNF;
  HZERO_HWFP: string = HZERO_HWFP;
  HZERO_FILE: string = HZERO_FILE;
  HZERO_NLP: string = HZERO_NLP;
  HZERO_HPAY: string = HZERO_HPAY;
  HZERO_HEXL: string = HZERO_HEXL;
  HZERO_MNT: string = HZERO_MNT;
  HZERO_INVOICE: string = HZERO_INVOICE;
  HZERO_IM: string = HZERO_IM;
  HZERO_OCR: string = HZERO_OCR;
  HZERO_CHG: string = HZERO_CHG;
  HZERO_ADM: string = HZERO_ADM;
  HZERO_DPM: string = HZERO_DPM;
  HZERO_HSRH: string = HZERO_HSRH;
  HZERO_HRES: string = HZERO_HRES;
  HZERO_HLCD: string = HZERO_HLCD;
  AUTH_HOST: string = AUTH_HOST;
  LOGIN_URL: string = LOGIN_URL;
  LOGOUT_URL: string = LOGOUT_URL;
  AUTH_SELF_URL: string = AUTH_SELF_URL;
  VERSION_IS_OP: string = VERSION_IS_OP;
  BKT_PUBLIC: string = BKT_PUBLIC;
  BKT_PLATFORM: string = BKT_PLATFORM;
  BKT_MSG: string = BKT_MSG;
  BKT_SDR: string = BKT_SDR;
  BKT_RPT: string = BKT_RPT;
  BKT_INVOICE: string = BKT_INVOICE;
  BKT_OCR: string = BKT_OCR;
  BKT_ADM: string = BKT_ADM;
  BKT_HWFP: string = BKT_HWFP;
  BKT_HITF: string = BKT_HITF;

  
}

type ConfigKey = keyof ConfigProps;

const HZERO_CONFIG_STORE = '_HZERO_CONFIG_STORE';

export const getConfigStore = (): ConfigProps => {
  if(!(window as any)[HZERO_CONFIG_STORE]) {
    ((window as any)[HZERO_CONFIG_STORE] as ConfigProps) = new ConfigProps();
  }
  return (window as any)[HZERO_CONFIG_STORE];
}

export const getConfig = (key: ConfigKey): string => {
  return getConfigStore()[key];
}

const commonConfigStore: ConfigProps  = getConfigStore();

export default commonConfigStore;
