'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/news/content', controller.news.content);
  // app/router.js
  const wechat = app.middlewares.wechat({
    token: 'wechategg',
    appid: 'wx898880003d446ea1',
    encodingAESKey: '',
  });
  router.get('/wechat', wechat);
  router.post('/wechat', wechat);

  // 微信支付
  const xmlparse = app.middleware.xmlparse();
  app.post('/wxpay', xmlparse, app.controller.wxpay.wxPayCallBack);

  router.get('/uploader',controller.uploader.index);
  router.post('/uploader',controller.uploader.upload);

  router.get('/cookie',controller.cookie.add);
  router.get('/cookie/remove',controller.cookie.remove);


  app.router.resources('topics', '/api/v1/topics', app.controller.topics);
};

