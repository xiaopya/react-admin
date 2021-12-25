/**
 * 请求可能出现的错误
 */

class HttpExcption extends Error {
    constructor (msg = '服务器出错', errCode = 1000, code = 400) {
        super();
        this.msg = msg;
        this.errCode = errCode;
        this.code = code;
    }
}
module.exports = {
    HttpExcption
};