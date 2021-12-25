const Koa = require('koa2');
const app = new Koa();
const { Init } = require('./core/init');
const bodyparser = require('koa-bodyparser');
// 监听全局错误
const { catchErr } = require('./middlewares/exception')
// 端口号
const port = 4004;

app.use(catchErr);
// const router = require('./router');

// 处理post 请求数据
app.use(bodyparser());

// 批量注册路由
Init.init(app);

/**
 * 用中间件启动路由
 * router.routes() 启动路由
 * router.allowedMethods() 允许任何请求
 */
// app.use(router.routes(), router.allowedMethods());

// 监听端口
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})