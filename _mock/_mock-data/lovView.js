let data = {};

data['TODO.USER'] = {
  viewCode: 'TODO.USER',
  lovCode: 'TODO.USER',
  lovTypeCode: 'SQL',
  tenantId: 0,
  valueField: 'employeeNumber',
  displayField: 'employeeName',
  pageSize: 10,
  delayLoadFlag: 0,
  queryUrl: '/hpfm/v1/lovs/sql/data',
  queryFields: [
    {
      field: 'employeeNumber',
      label: '用户编码',
      dataType: null,
      sourceCode: null,
    },
    {
      field: 'employeeName',
      label: '用户名称',
      dataType: null,
      sourceCode: null,
    },
    {
      field: 'email',
      label: '邮箱',
      dataType: null,
      sourceCode: null,
    },
  ],
  tableFields: [
    {
      title: '用户编码',
      dataIndex: 'employeeNumber',
      width: 100,
    },
    {
      title: '用户名称',
      dataIndex: 'employeeName',
      width: 200,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      width: 200,
    },
  ],
};

module.exports = data;
