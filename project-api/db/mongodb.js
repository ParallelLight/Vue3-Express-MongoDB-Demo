// 导入 mongoose 模块
const mongoose = require('mongoose');

// 解决问题：(node:9992) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for
mongoose.set("strictQuery", true);

// 设置默认 mongoose 连接
// uri:mongodb://+[用户名:密码@]+数据库地址[:端口]+数据库名
// uri：mongodb://user:pass@localhost:port/database
// mongodb+srv://madmin:<password>@clustername.mongodb.net/<dbname>?retryWrites=true&w=majority


// 连接 mongoDB 数据库
mongoose.connect(uri, { useNewUrlParser: true });
console.log("数据库已连接......")

// 让 mongoose 使用全局 Promise 库
mongoose.Promise = global.Promise;

// 取得默认连接
const db = mongoose.connection;

// 将连接与错误事件绑定（以获得连接错误的提示）
db.on('error', console.error.bind(console, 'MongoDB 连接错误：'));

module.exports = db;
