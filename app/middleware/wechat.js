'use strict';

const wechat = require('co-wechat');

module.exports = (options, app) => {
  return wechat(options).middleware(async (message, ctx) => {
    // TODO
    const {
      MsgType,
      Content,
    } = message;
    if (MsgType === 'text') {
      let reply;
      switch (Content) {
        case '12345':
          reply = '上山打老虎';
          break;
        case 'kiki':
          reply = '是我媳妇';
          break;
        default:
          const msgs = [
            '我媳妇老漂亮了',
            '我媳妇会做饭',
            '我媳妇会煎药',
            '我媳妇吃的可多了',
            '我媳妇可能睡了',
            '我媳妇叫kiki',
            '我媳妇会打太极拳',
            '我媳妇总掉头发',
            '我媳妇可爱哭了',
            '我媳妇有点二',
          ];
          const rand = Math.floor(Math.random() * msgs.length);
          reply = msgs[rand];
      }
      return reply;
    }
    return '欢迎光临';
  });
};
