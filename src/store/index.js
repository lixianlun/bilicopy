import Vue from 'vue'
import Vuex from 'vuex'

import bannerstore from './modules/bannerstore.js'

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
    bannerstore
  }
});
