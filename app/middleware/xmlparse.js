module.exports = () => {
  return async function (ctx, nex) {
    var bodyParser = require('body-parser');
    ctx.app.use(bodyParser.urlencoded({
      extended: true
    }));
    await next();
  }
}