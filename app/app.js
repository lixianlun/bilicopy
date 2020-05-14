require("@babel/register");

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');//日志中间件
var compression = require('compression')//使用public里的gzip文件加载
var indexRouter = require('./routes/index');
var http = require('http');
var cors = require('cors');//跨域必须

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(compression());

// app.use(compression({filter:shouldCompress}))
// function shouldCompress (req, res) {
//   if (req.headers['x-no-compression']) {
//     // 这里就过滤掉了请求头包含'x-no-compression'
//     return false
//   }
//   return compression.filter(req, res)
// }

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(req.socket.server._connectionKey+"port") //port

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
