import axios from 'axios'
import Router from 'koa-router'
import {
  banner,
  promote,
  promoteAd,
  headbackground,
  oneday,
  live,
  livetopad,
  ding
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
router.get('/live', async (ctx, next) => {
  let response = await axios.get(live)
  let ltAD = await axios.get(livetopad)
  response.data.data.topad=ltAD.data
  ctx.body = response.data.data
})
router.get('/ding',async(ctx,next)=>{
  let response=  await axios.get(ding)
  ctx.body=response.data
})
export default router
