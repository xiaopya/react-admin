const Router = require('koa-router');
const user = new Router();
const { userController } = require('../controller/User');
const fs = require("fs");  // 引入fs模块

// user 根目录
user.prefix('/user');

// 登录请求
user.post('/login', userController.Login);
// 请求 该用户 的 个人信息
user.post('/currentUser', userController.currentUser);
// 用户退出
user.get('/outLogin', userController.outLogin);

// 可以写个中间件
// 校验token
user.post('/checkToken', userController.checkToken);

// 个人信息 修改 
user.post('/userInfo', userController.userInfo);

module.exports = user;