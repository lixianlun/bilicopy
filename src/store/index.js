import Vue from 'vue'
import Vuex from 'vuex'

import bannerStore from './modules/bannerStore.js'
import promoteStore from './modules/promoteStore.js'
import headStore from './modules/headpartStore.js'
import oneStore from './modules/oneStort.js'
import liveStore from './modules/liveStort.js'
Vue.use(Vuex)


const state = {
  requesting:false,
  error:{}
}
const getters = {
  requesting:state=>state.requesting,
  error:state=>state.error
}
export default new Vuex.Store({
  state,
  getters,
  modules:{
    bannerStore,
    promoteStore,
    headStore,
    oneStore,
    liveStore
  }
});
