// 引入mysql
const mysql = require("mysql");

// 创建连接池
const pool = mysql.createPool({
    host: "localhost",  // 连接的服务器(代码托管到线上后，需改为内网IP，而非外网)
    port: 3306, // mysql服务运行的端口
    database: "admin_cms", // 选择某个数据库
    user: "root",   // 用户名
    password: "123456", // 用户密码
})


//对数据库进行增删改查操作的基础
const query = function (sql, options, callback) {
    pool.getConnection(function (err, conn) {
        if (err) callback(err, null, null);
        else {
            conn.query(sql, options, function (err, results) {
                //释放连接  
                conn.release();
                //事件驱动回调  
                callback(err, results);
            });
        }
    });
}


// //对数据库进行增删改查操作的基础
// const query = (sql,callback) => {
//     pool.getConnection(function(err,connection){
//         connection.query(sql, function (err,rows) {
//             callback(err,rows)
//             connection.release()
//         })
//     })
// }

module.exports = {
    query
}