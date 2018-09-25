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

    // const newsList = await Promise.all(
    //   Object.keys(idList.data).map(key => {
    //     const url = `${serverUrl}/topic/${idList.data[key].id}`;
    //     return this.ctx.curl(url, { 
    //       method: 'get',
    //       dataType: 'json',
    //       contentType: 'json',
    //     });
    //   })
    // );
    // return newsList.map(res => res.data);
    return idList.data;
  }
}

module.exports = NewsService;
