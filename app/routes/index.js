var express = require('express');

import axios from 'axios';
import {
  banner,
  promote,
  promoteAd,
  headbackground,
  oneday,
  live,
  livetopad,
  ding,
  rankbase
} from './urlconfig'
var router = express.Router();

/* GET home page. */
router.get('/banner',async (req, res)=>{
	let response = await axios.get(banner);
	res.send(response.data);
});
router.get('/promote', async (req, res) => {
  let response = await axios.get(promote)
  let pAd = await axios.get(promoteAd)
  response.data.promoteAd = pAd.data.data
  res.send(response.data);
});
router.get('/head', async (req, res) => {
  let response = await axios.get(headbackground)
  res.send(response.data);
});
router.get('/one', async (req, res) => {
  let response = await axios.get(oneday)
  res.send(response.data.data);
});
router.get('/live', async (req, res) => {
  let response = await axios.get(live)
  let ltAD = await axios.get(livetopad)
  response.data.data.topad=ltAD.data
  res.send(response.data.data);
});
router.get('/ding',async(req, res)=>{
  let response=  await axios.get(ding)
  res.send(response.data);
});
router.get('/rankbase',async(req, res)=>{
  let ranklist=['1-3day.json','168-3day.json']
  let title=['douga','guochuang'];
  let ding={}
  for(let i=0;i<ranklist.length;i++){
    let arr=await axios.get(rankbase+ranklist[i])
    ding[title[i]]=arr.data.hot.list
  }
  res.send(ding);
});
module.exports = router;
