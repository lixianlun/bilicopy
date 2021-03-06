import {Api} from "../../api/index.js"
import * as TYPE from '../actionType.js'
import axios from "axios"

const state={
  rank:[],
  douga:[],
  guochuang:[]
}
const getters={
  douga:state=>state.douga,
  guochuang:state=>state.guochuang,
  rank:state=>state.rank
}
const actions={
  dingdata({commit,state,rootState},payload){
    rootState.requesting=true
    commit(TYPE.DING_REQUEST)
    Api.dinglist().then((response)=>{
      rootState.requesting=false
      commit(TYPE.DING_SUCCESS,response)
      // commit(TYPE.DING_SUCCESS_GUOCHUANG,response)
    },(error)=>{
      commit(TYPE.DING_ERROR)
      console.log(rootState.requesting)
    })
  },
  douga({commit,state,rootState}){
    Api.dinglist().then((response)=>{
      commit(TYPE.DING_SUCCESS_DOUGA,response)
    })
  },
  guochuang({commit,state,rootState}){
    Api.dinglist().then((response)=>{
      commit(TYPE.DING_SUCCESS_GUOCHUANG,response)
    })
  },
  rankdata({commit,state,rootState}){
    Api.ranklist().then((response)=>{
      commit(TYPE.RANK_SUCCESS,response)
    })
  }
}
const mutations={
  [TYPE.DING_REQUEST](state){

  },
  [TYPE.DING_SUCCESS](state,response){
    state.douga=Object.values(response.data.douga).slice(0,8)
    state.guochuang=Object.values(response.data.guochuang).slice(0,8)
  },
  [TYPE.DING_SUCCESS_DOUGA](state,response){
    state.douga=Object.values(response.data.douga).slice(0,8)
  },
  [TYPE.DING_SUCCESS_GUOCHUANG](state,response){
    state.guochuang=Object.values(response.data.guochuang).slice(0,8)
  },
  [TYPE.RANK_SUCCESS](state,response){
    state.rank=response.data
  },
  [TYPE.DING_ERROR](state){

  }
}
export default{
  state,
  getters,
  actions,
  mutations
}
