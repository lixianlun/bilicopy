import Router from 'koa-router'
import urlRouter from './urlRouter.js'

const router = Router()

router.use(urlRouter.routes(),urlRouter.allowedMethods())

export default router
