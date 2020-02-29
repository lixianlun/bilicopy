import * as TYPE from '../actionType.js'
import axios from "axios"
import {headApi} from "../../api/index.js"
const state={
  headdata:[],
}
const getters={
  headdata:state=>state.headdata
}

const actions= {
  headdata({commit,state,rootState}){
    rootState.requesting=true
    commit(TYPE.HEAD_REQUEST)
    headApi.list().then((response)=>{
      rootState.requesting=false
      commit(TYPE.HEAD_SUCCESS,response)
    },(error)=>{
      commit(TYPE.HEAD_ERROR)
      console.log(rootState.requesting)
    })
  }
}
const mutations={
  [TYPE.HEAD_REQUEST](state){
    // state.count++
  },
  [TYPE.HEAD_SUCCESS](state,list){
     state.headdata=list.data[142][0]
  },
  [TYPE.HEAD_ERROR](state){

  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
