import axios from 'axios'
import Router from 'koa-router'
import { banner } from './urlconfig'

const router = Router()

router.get('/banner', async (ctx, next) => {
	let response = await axios.get(banner)
	ctx.body = response.data
})
export default router
