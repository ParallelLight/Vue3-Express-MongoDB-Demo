var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 连接数据库
var mongoDB = require("./db/mongodb");

// 引入页面
var homeRouter = require('./routes/home');
var searchRouter = require('./routes/search');
var statisticsRouter = require('./routes/statistics');
var downloadRouter = require('./routes/download');
var aboutRouter = require('./routes/about');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 设置跨域访问
const cors = require('cors');
app.use(cors());
// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://172.23.0.2:5173");
//   // res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", ' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });

// use 页面
app.use('/', homeRouter);
app.use('/search', searchRouter);
app.use('/statistics', statisticsRouter);
app.use('/download', downloadRouter);
app.use('/about', aboutRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
