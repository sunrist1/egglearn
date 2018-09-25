'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1537843876645_7644';

  // add your config here
  config.middleware = [
    'robot',
    'gzip',
  ];

  // 添加 view 配置
  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  exports.news = {
    pageSize: 5,
    serverUrl: 'https://cnodejs.org/api/v1',
  };

  exports.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };

  // 配置gzip中间件配置
  exports.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
  };


  return config;
};
