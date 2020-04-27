const mockjs = require('mockjs');

module.exports = {
  'GET /hpfm/v1/menus': (req, res) => {
    const d = mockjs.mock({
      'list|1-30': [
        {
          id: '@id',
          name: '@name',
          path: '@url',
          title: '@title',
        },
      ],
    });
    res.json(d);
  },
  'GET /hpfm/v1/0/prompt/:lang': (req, res) => {
    res.json({
      'hzero.common.title.workspace': '工作台',
      promptKey: req.query.promptKey,
      lang: req.params.lang,
    });
  },

  'GET /hpfm/v1/:tid/ui-table': (req, res) => {
    res.json([]);
  },
  'GET /hpfm/v1/dashboard/layout': (req, res) => {
    res.json([]);
  },
  'GET /hpfm/v1/dashboard/layout/role-cards': (req, res) => {
    res.json([]);
  },
};
