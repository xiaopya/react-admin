/**
 * 监听全局请求错误
 */

const { HttpExcption } = require("../core/http-excption");

const catchErr = async (ctx, next) => {
    try {
        await next();
    }
    catch (e) {
        if (e instanceof HttpExcption) {
            ctx.body = {
                msg: e.msg,
                errCode: e.errCode,
                request: `${ctx.method} ${ctx.path}`,
            };
            ctx.status = 400;
        } else {
            ctx.body = {
                msg: "未知错误",
                errCode: 500002,
                request: `${ctx.method} ${ctx.path}`,
            };
            ctx.status = 502;
        }
    }
}
module.exports = {
    catchErr
};