const db = require('../utils/db');
const { JWT } = require('../utils/jwt');
const fs = require("fs");  // 引入fs模块

class userController {
    /**
     * 用户登录
     */
    static async Login(ctx) {
        const { username, password } = ctx.request.body;
        let sql = `select * from user where username=(?)`;
        let data = await new Promise((rev, rej) => {
            db.query(sql, [username], (err, data) => {
                if (err) rej(err);
                rev(data);
            })
        })
        if (!data.length) {
            // 如果data.length 为 [] 数据库不存在该数据 提示他 去注册 或者说没有该账号
            ctx.body = {
                msg: "该账号尚未注册",
                status: 'error',
                type: 'account',
            }
        } else {
            // 判断 数据库里存储的 密码 与传进来的密码 是否一样
            if (data[0].password === password) {
                // 生成token 令牌    5小时的 token 时间
                const token = JWT.obtain(ctx.request.body, 18000000, 'cyl');
                ctx.body = {
                    msg: '登录成功',
                    code: 200,
                    status: 'ok',
                    data: {
                        token,
                        username: data[0].username,
                    }
                }
            } else {
                ctx.body = {
                    msg: '账号或密码错误',
                    status: 'error',
                }
            }
        }
    }
    /**
     * 用户的个人资料信息
     */
    static async currentUser(ctx) {
        const { username } = ctx.request.body;
        const data = await new Promise((rev, reg) => {
            let sql = `select * from userInfo where username=(?)`
            db.query(sql, [username], (err, data) => {
                if (err) rej(err);
                rev(data);
            })
        })
        //  如果该用户 有 个人资料信息则返回 没有则返回username 和 默认 头像
        if (data.length) {
            ctx.body = {
                msg: '',
                code: 200,
                status: 'ok',
                data: data[0],
            }
        } else {
            ctx.body = {
                msg: '',
                code: 200,
                status: 'ok',
                data: {
                    name: username,
                    avatar: 'https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif',
                },
            }
        }
    }

    /**
     * 用户个人资料 修改 和添加
     */
    static async userInfo(ctx) {
        // fileList
        const { username, info, fileList } = ctx.request.body;
        const { name, email, area, saying, introduce } = info;
        const sql = `select * from userInfo where username=(?)`
        const data = await new Promise((rev, rej) => {
            return db.query(sql, [username], (err, data) => {
                if (err) rej(err);
                rev(data);
            })
        })
        // 有该用户的数据则去修改
        if (data.length) {
            const sql = `update userInfo set name=(?),email=(?),area=(?),saying=(?),introduce=(?) where username=(?) `
            const data = await new Promise((rev, rej) => {
                return db.query(sql, [name, email, area, saying, introduce, username], (err, data) => {
                    if (err) rej(err);
                    rev(data);
                })
            })
            if (data) {
                ctx.body = {
                    msg: '修改成功',
                    code: 200,
                    success: 'ok',
                }
            } else {
                ctx.body = {
                    msg: '修改失败',
                    code: 200,
                    success: 'error',
                }
            }
        } else {
            // 如果没有向数据库插入该数据
            // '${username}','${name}','${email}','${area}','${saying}','${introduce}'
            const sql = `insert into userInfo (username,name,email,area,saying,introduce) values (?,?,?,?,?)`
            const data = await new Promise((rev, rej) => {
                return db.query(sql, [username, name, email, area, saying, introduce], (err, data) => {
                    if (err) rej(err);
                    rev(data);
                })
            })
            console.log(data, 'data...')
            if (data) {
                ctx.body = {
                    msg: '修改成功',
                    code: 200,
                    success: 'ok',
                }
            } else {
                ctx.body = {
                    msg: '修改失败',
                    code: 200,
                    success: 'error',
                }
            }
        }
        
        // 处理图片
        if (fileList) {
            // 图片处理 目前没有处理
            //过滤data:URL
            const base64Data = fileList.thumbUrl.replace(/^data:image\/\w+;base64,/, "");
            const dataBuffer = Buffer.from(base64Data, 'base64');
            fs.writeFile(`./public/images/${fileList.name}`, dataBuffer, function (err) {
                if (err) throw err;
                else {
                    const sql = `update userInfo set avatar=(?) where username=(?)`
                    db.query(sql,[`${ctx.origin}/images/${fileList.name}`,username],(err,data)=>{
                        if(err) throw err;
                        else{
                            console.log(`${ctx.origin}/images/${fileList.name}`, "保存成功!")
                        }
                    })
                }
            });
        }
    }

    static async checkToken(ctx, next) {
        const { authorization } = ctx.request.headers;
        const time = new Date().getTime();
        const { exp } = JWT.inspection(authorization, 'cyl');
        if (time <= exp) {
            await next();
            ctx.body = {
                msg: 'token 还在有效期',
            }
        } else {
            ctx.body = {
                msg: 'token 过期 请重新登录',
                code: 200,
            }
            ctx.status = 401;
        }
    }

    /**
     * 用户退出
     */
    static outLogin(ctx) {
        ctx.body = {
            msg: '用户退出成功',
            code: 200,
            status: 'ok',
            data: [],
            success: true,
        }
    }
}

module.exports = {
    userController
}