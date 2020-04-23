import* as TYPE from '../actionType.js'
import axios from 'axios'
import {liveApi} from '../../api/index.js'

const state={
  ranking:[],
  live:[],
  livedata:[],
  livetopad:[],
  preview:[]
}
const getters={
  ranking:state=>state.ranking,
  live:stata=>state.live,
  livedata:stata=>state.livedata,
  livetopad:state=>state.livetopad,
  preview:state=>state.preview
}
const actions={
  livedata({commit,state,rootState}){
    rootState.requesting=true
    commit(TYPE.LIVE_REQUEST)
    liveApi.list().then((response)=>{
      commit(TYPE.LIVE_SUCCESS,response)
    },(error)=>{
      commit(TYPE.LIVE_ERROR)
    })
  }
}
const mutations={
  [TYPE.LIVE_REQUEST](state){
  },
  [TYPE.LIVE_SUCCESS](state,livelist){
     state.ranking=livelist.ranking
     state.preview=livelist.preview[0]
     state.live=livelist
     state.livedata=livelist.recommend
     state.livetopad=livelist.topad.data[40][0]
  },
  [TYPE.LIVE_ERROR](state){

  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
