const db = require('../utils/db');
const { JWT } = require('../utils/jwt');

class userController {

    /**
     * 用户登录
     */
    static async Login(ctx) {
        const { username, password } = ctx.request.body;
        let sql = `select * from user where username='${username}'`;
        let data = await new Promise((rev, rej) => {
            db.query(sql, (err, data) => {
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
            let sql = `select * from userInfo where username='${username}'`
            db.query(sql, (err, data) => {
                if (err) rej(err);
                rev(data);
            })
        })
        if (data) {
            ctx.body = {
                msg: '',
                code: 200,
                status: 'ok',
                data: data[0],
            }
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
                status: 401,
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