import {bannerApi} from "../../api/index.js"
import {* as STATUS} from '../mutation-types.js'

const state={
  bannerdata:[]
}
const getters={
  bannerdate:state=>state.bannerdata
}
const mutations={
  [STATUS.BANNER_REQUEST](state){

  },
  [STATUS.BANNER_SUCCESS](state,bannerdata){
     state.bannerdata=bannerdata.data
  },
  [STATUS.BANNER_ERROR](state){

  }
}
const actions= {
  bannerdata({commit,state,rootstate}){
    commit(STATUS.BANNER_REQUEST)
    bannerApi.list().then((response)=>{
      commit(STATUS.BANNER_SUCCESS,response)
    },(error)=>{
      commit(STATUS.BANNER_ERROR)
    })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
