let data = {};

data['HPFM.LANGUAGE'] = [
  {
    objectVersionNumber: 50,
    _token:
      '/uqs6jADKr9uFI6IYFiUG9ba923D7jvuavvUhhaw8zHpkKe/vZ5hScxtDy2/zQEYHOWYH7g3eLwqVAVgjAmzjg==',
    id: 1,
    code: 'zh_CN',
    name: '简体中文',
    description: '中文(简体)',
    value: 'zh_CN',
    meaning: '简体中文',
  },
  {
    objectVersionNumber: 20,
    _token:
      '/uqs6jADKr9uFI6IYFiUG9ba923D7jvuavvUhhaw8zHpkKe/vZ5hScxtDy2/zQEYst/Ygg8yyyadoRhWO4IMzQ==',
    id: 2,
    code: 'en_US',
    name: 'English',
    description: 'English(US)',
    value: 'en_US',
    meaning: 'English',
  },
];

data['HPFM.DASHBOARD_CARD.TYPE'] = [
  {
    value: 'schedule',
    meaning: '待办类',
    orderSeq: 10,
  },
  {
    value: 'report',
    meaning: '报表类',
    orderSeq: 20,
  },
  {
    value: 'notice',
    meaning: '通知类',
    orderSeq: 30,
  },
];

data['TODO.TODO_STATE'] = [
  {
    orderSeq: 10,
    meaning: '未开始',
    value: 'CODE_1',
  },
  {
    orderSeq: 20,
    meaning: '进行中',
    value: 'CODE_2',
  },
  {
    orderSeq: 30,
    meaning: '已结束',
    value: 'CODE_3',
  },
];

data['TODO.USER'] = {
  totalPages: 1,
  totalElements: 5,
  numberOfElements: 5,
  size: 10,
  number: 0,
  content: [
    {
      employeeName: '长沙',
      id: 1,
      email: '121@qq.com',
      employeeNumber: '5555',
    },
    {
      employeeName: '断水流',
      id: 2,
      email: '223@f.com',
      employeeNumber: 'def3',
    },
    {
      employeeName: 'ccs',
      id: 3,
      email: '122@qq.com',
      employeeNumber: '111',
    },
    {
      employeeName: 'asa',
      id: 4,
      email: 'aasa@qq.com',
      employeeNumber: 'asasada',
    },
    {
      employeeName: '2',
      id: 5,
      email: '3@12',
      employeeNumber: '1',
    },
  ],
  empty: false,
};

module.exports = data;
