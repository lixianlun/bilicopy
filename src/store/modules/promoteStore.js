import {Api} from "../../api/index.js"
import * as TYPE from '../actionType.js'
import axios from "axios"

const state={
  promotelist:[],
  promoteAd:[]
}
const getters={
  promotelist:state=>state.promotelist,
  promoteAd:state=>state.promoteAd
}
const actions={
  promote({commit,state,rootState}){
    rootState.requesting=true
    commit(TYPE.PROMOTE_REQUEST)
    Api.promotelist().then((response)=>{
      rootState.requesting=false
      commit(TYPE.PROMOTE_SUCCESS,response)
    },(error)=>{
      commit(TYPE.PROMOTE_ERROR)
    })
  }
}
const mutations={
  [TYPE.PROMOTE_REQUEST](state){

  },
  [TYPE.PROMOTE_SUCCESS](state,response){
    state.promotelist=response.data
    state.promoteAd=response.promoteAd[0]
  },
  [TYPE.PROMOTE_ERROR](state){

  }
}

export default{
  state,
  getters,
  mutations,
  actions
}
