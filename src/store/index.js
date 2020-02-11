import Vue from 'vue'
import Vuex from 'vuex'



import bannerstore from './modules/bannerstore.js'
Vue.use(Vuex)


const state = {
  request:false,
  error:{}
}
const getters = {
  request:state=>state.request,
  error:state=>state.error
}
export default new Vuex.Store({
  state, // 这里是es6语法，相当于  state: state
  getters,
  modules:{
    bannerstore
  }
});
