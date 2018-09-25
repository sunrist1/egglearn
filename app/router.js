'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  // app/router.js
  const wechat = app.middlewares.wechat({
    token: 'wechategg',
    appid: 'wx898880003d446ea1',
    encodingAESKey: '',
  });
  router.get('/wechat', wechat);
  router.post('/wechat', wechat);


  app.router.resources('topics', '/api/v1/topics', app.controller.topics);
};

