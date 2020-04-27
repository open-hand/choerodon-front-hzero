const delay = require('mocker-api/utils/delay');

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

let allMock = {
  'GET /hpfm/v1/lovs/data': (req, res) => {
    const lovCode = req.query.lovCode;
    const retData = require('./_mock-data/lovData')[lovCode] || [];
    res.json(retData);
  },

  'GET /hpfm/v1/lovs/value': require('./_utils/lov').getLovData,

  'GET /hpfm/v1/lovs/sql/data': require('./_utils/lov').getLovData,

  'GET /hpfm/v1/lov-view/info': (req, res) => {
    const viewCode = req.query.viewCode;
    const retData = require('./_mock-data/lovView')[viewCode] || {};
    res.json(retData);
  },

  // 支持跨域处理
  'OPTIONS /(.*)': (req, res) => {
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With,Pragma,cache-control,authorization'
    );
    res.status(200);
    res.end('ok');
  },
};

const importMock = {
  iam_user: require('./iam/user'),
  hpfm: require('./hpfm'),
  hmsg: require('./hmsg'),
  demo: require('./demo'),
};

if (!noProxy) {
  Object.keys(importMock).forEach((mockKey) => {
    allMock = Object.assign(allMock, importMock[mockKey]);
  });
}

module.exports = noProxy ? allMock : delay(allMock, 1000);
