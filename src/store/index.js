import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

//是vuex的debug信息
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

//判断是否是生产环境
const debug = process.env.NODE_ENV !== 'production' 


export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict:debug,
  plugins:debug?[createLogger()]: []
})

