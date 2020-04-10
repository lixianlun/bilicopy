import * as TYPE from '../actionType.js'
import axios from "axios"
import {oneApi} from "../../api/index.js"
const state={
  onedata:[],
}
const getters={
  onedata:state=>state.onedata
}

const actions= {
  onedata({commit,state,rootState}){
    rootState.requesting=true
    commit(TYPE.REQUEST)
    oneApi.list().then((response)=>{
      rootState.requesting=false
      commit(TYPE.SUCCESS,response)
    },(error)=>{
      commit(TYPE.ERROR)
      console.log(rootState.requesting)
    })
  }
}
const mutations={
  [TYPE.REQUEST](state){
    // state.count++
  },
  [TYPE.SUCCESS](state,list){
     state.onedata=list.archives
  },
  [TYPE.ERROR](state){

  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
