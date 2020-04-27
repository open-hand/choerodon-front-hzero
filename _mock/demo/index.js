const mockjs = require('mockjs');

module.exports = {
  'GET /htodo/v1/:tid/tasks': (req, res) => {
    const size = req.params.size || 10;
    const page = req.params.page || 0;
    const d = mockjs.mock({
      'content|1-30': [
        {
          objectVersionNumber: 2,
          id: '@id',
          name: '@name',
          path: '@url',
          title: '@title',
          _token:
            'wmv950RaJ9bYO1ipM8sPg03+MsaTRH7Hw0QQLACki7Z8a6yEE5PgLsfHTgcPqv4YmAPGtD09/n9T6F05Qv8NhA==',
          employeeId: '@id',
          'state|1': ['CODE_1', 'CODE_2', 'CODE_3'],
          'taskNumber|+1': 1,
          taskDescription: '@csentence',
          percent: '0',
          tenantId: 111,
          employeeNumber: '@word',
          employeeName: '@cname',
        },
      ],
      size,
      number: page,
      numberOfElements: (thisObj) => thisObj.context.root.content.length,
      totalElements: 34,
    });
    res.json(d);
  },
};
