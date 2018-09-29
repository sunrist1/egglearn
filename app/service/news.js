'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    const {serverUrl, pageSize} = this.config.news;

    const {data: idList} = await this.ctx.curl(`${serverUrl}/topics`, {
      method: 'get',
      dataType: 'json',
      contentType: 'json',
    });
    return idList.data;
  }

  async content(id=0) {
    const {serverUrl} = this.config.news;
    const {data: content} = await this.ctx.curl(`${serverUrl}/topic/${id}`,{
      mdrender:false
    })
    return JSON.parse(content).data;
  }
}

module.exports = NewsService;
