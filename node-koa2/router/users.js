const Router = require('koa-router');
const user = new Router();
const db = require('../utils/db');

user.post('/user/login',async ctx=>{

    const {username,password} = ctx.request.body;
    // console.log(username,password,'.......')
    let sql = `select * from user where username='${username}'`;
    let data = await new Promise((rev,rej)=>{
        db.query(sql,(err,data)=>{
            if(err) rej(err);
            rev(data);
        })
    })
    if(!data.length){
        // 如果data.length 为 [] 数据库不存在该数据 提示他 去注册 或者说没有该账号
        ctx.body = {
            msg: "该账号尚未注册",
            status: 'error',
            type: 'account',
        }
    }else{
        // 判断 数据库里存储的 密码 与传进来的密码 是否一样
        if(data[0].password === password){
            ctx.body = {
                msg: '登录成功',
                code: 200,
                status: 'ok',
                type: 'account',
                username: data[0].username,
            }
        }else{
            ctx.body = {
                msg: '账号或密码错误',
                status: 'error',
                type: 'account',
            }
        }
    }
})


// 请求 该用户 的 个人信息
user.post('/user/currentUser', async ctx=>{
    const {username} = ctx.request.body;
    const data = await new Promise((rev,reg)=>{
        let sql = `select * from userInfo where username='${username}'`
        db.query(sql,(err,data)=>{
            if(err) rej(err);
            rev(data);
        })
    })
    if(data){
        ctx.body = {
            msg: '',
            code: 200,
            status: 'ok',
            data: data[0],
        }
    }
})

// 用户退出
user.get('/user/outLogin', async ctx=>{
    ctx.body = {
        msg: '用户退出成功',
        code: 200,
        status: 'ok',
        data: [],
        success: true,
    }
})


module.exports = user;