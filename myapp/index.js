
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
