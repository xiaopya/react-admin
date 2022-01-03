const Router = require('koa-router');
const user = new Router();
const { userController } = require('../controller/User');

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


// const db = require('../utils/db');
// 建库
// user.get('/createDbUser', () => {
//     const sql = "create database admin_mm"
//     db.query(sql,(err,data)=>{
//         if(err) throw err;
//         console.log("admin_mm 库创建成功");
//     })
// })

// 建表
// user.get('/createDbUserTable', () => {
//     const sql = "create table user(id INT PRIMARY KEY AUTO_INCREMENT,username VARCHAR(30) COMMENT '用户名称',password VARCHAR(30) COMMENT '用户密码')";
//     db.query(sql, (err, data) => {
//         if (err) throw err;
//         console.log("admin_mm 表创建成功");
//     })
// })

// 建表
// user.get('/createDbUserTable', () => {
//     const sql = "create table user(id INT PRIMARY KEY AUTO_INCREMENT,username VARCHAR(30) COMMENT '用户名称',password VARCHAR(30) COMMENT '用户密码')";
//     db.query(sql, (err, data) => {
//         if (err) throw err;
//         console.log("admin_mm 表创建成功");
//     })
// })