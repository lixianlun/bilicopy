import {bannerApi} from "../../api/index.js"
import * as TYPE from '../bannerType.js'
import axios from "axios"

const state={
  bannerdata:[],
}
const getters={
  bannerdata:state=>state.bannerdata
}

const actions= {
  bannerdata({commit,state,rootstate}){
    commit(TYPE.BANNER_REQUEST)
    bannerApi.list().then((response)=>{
      commit(TYPE.BANNER_SUCCESS,response)
      console.log(response)
    })
  }
}
const mutations={
  [TYPE.BANNER_REQUEST](state){
    // state.count++
  },
  [TYPE.BANNER_SUCCESS](state,bannerlist){
     state.bannerdata=bannerlist.data
  },
  [TYPE.BANNER_ERROR](state){

  }
}
export default {
  state,
  getters,
  actions,
  mutations

}
