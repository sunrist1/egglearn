'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    await ctx.render('news/list.tpl', { list: newsList });
  }

  async content() {
    const ctx = this.ctx;
    const id = ctx.query.id;
    const content = await ctx.service.news.content(id);


    await ctx.render('news/content.tpl', {
      content: content
    });
  }
}

module.exports = NewsController;
