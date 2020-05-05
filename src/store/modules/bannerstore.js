import {Api} from "../../api/index.js"
import * as TYPE from '../actionType.js'
import axios from "axios"

const state={
  bannerdata:[],
}
const getters={
  bannerdata:state=>state.bannerdata
}

const actions= {
  bannerdata({commit,state,rootState}){
    rootState.requesting=true
    commit(TYPE.BANNER_REQUEST)
    Api.bannerlist().then((response)=>{
      rootState.requesting=false
      commit(TYPE.BANNER_SUCCESS,response)
    },(error)=>{
      commit(TYPE.BANNER_ERROR)
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
