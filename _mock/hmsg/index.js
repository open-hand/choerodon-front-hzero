// const mockjs = require('mockjs');

module.exports = {
  'GET /hmsg/v1/:tid/messages/user/count': (req, res) => {
    res.json({ unreadMessageCount: 0 });
  },
};
