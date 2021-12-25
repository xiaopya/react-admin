/**
 *  批量注册路由
 */
const requireDirectory = require('require-directory');
// 获取当前目录  （什么文件调用 取决于什么目录）
const currentDir = process.cwd();
// router 是路由文件夹名称
const path = `${currentDir}/router`

class Init {
    static init(app) {
        requireDirectory(module, path, {
            visit: visitor,
        })
        function visitor(obj) {
            // 配置根目录
            obj.prefix('/api');


            /**
             * 用中间件启动路由
             * router.routes() 启动路由
             * router.allowedMethods() 允许任何请求
             */
            app.use(obj.routes(), obj.allowedMethods());
        }
    }
}
module.exports = {
    Init
};