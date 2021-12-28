const Router = require('koa-router');
const user = new Router();
const { userController } = require('../controller/User');

// 登录请求
user.post('/user/login',userController.Login);
// 请求 该用户 的 个人信息
user.post('/user/currentUser',userController.currentUser)
// 用户退出
user.get('/user/outLogin', userController.outLogin)

// 可以写个中间件
// 校验token
user.post('/user/checkToken',userController.checkToken);

module.exports = user;