import axios from 'axios'
import Router from 'koa-router'
import {
  banner,
  promote,
  promoteAd,
  headbackground,
  oneday
} from './urlconfig'

const router = Router()

router.get('/banner', async (ctx, next) => {
  let response = await axios.get(banner)
  ctx.body = response.data
})
router.get('/promote', async (ctx, next) => {
  let response = await axios.get(promote)
  let pAd = await axios.get(promoteAd)
  response.data.promoteAd = pAd.data.data
  ctx.body = response.data
})
router.get('/head', async (ctx, next) => {
  let response = await axios.get(headbackground)
  ctx.body = response.data
})
router.get('/one', async (ctx, next) => {
  let response = await axios.get(oneday)
  ctx.body = response.data.data
})
export default router
