'use strict';

const moment = require('moment');
// exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();
// exports.zoneTime = time => moment(time).utc().zone(-8).format('YYYY-MM-DD HH:mm:ss');

module.exports = {
  relativeTime(time) {
    return moment(new Date(time * 1000)).fromNow();
  },
  zoneTime(time) {
    return moment(time).utc().zone(-8).format('YYYY-MM-DD HH:mm:ss');
  },
}