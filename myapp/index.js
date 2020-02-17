// const koa = require('koa');

// const app = new koa();
// const bodyParser = require('koa-bodyparser');
// //配置中间件
// app.use(async (ctx, next) => {
// 	console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
// 	await next(); // 调用下一个middleware
// });

// app.use(async (ctx, next) => {
// 	const start = new Date().getTime(); // 当前时间
// 	await next(); // 调用下一个middleware
// 	const ms = new Date().getTime() - start; // 耗费时间
// 	console.log(`Time: ${ms}ms`); // 打印耗费时间
// });

// app.use(async (ctx, next) => {
// 	await next();
// 	ctx.response.type = 'text/html';
// 	ctx.response.body = '<h1>Hello, koa2!</h1>';
// });
// //监听端口
// app.listen(3000, () => {
// 	console.log("demo2 is run")
// })


// require('babel-core/register');
// require('./index.js')


import routes from './routes'
import Koa from 'koa'
import config from './config/index'

const app = new Koa()
import cors from "koa2-cors"
// import bodyparse from 'koa-bodyparser'


app.use(cors());
// app.use(bodyparse());
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

app.use(routes.routes(),routes.allowedMethods());


app.listen(config.port).on('listening',()=>{
	console.log('正在监听端口' + config.port)
});
