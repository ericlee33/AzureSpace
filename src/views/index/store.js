import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 监听登录状态
    loginFlag: false
  },
  mutations: {
    // 监听登录状态
    login(state) {
      state.loginFlag = false
      // 从localstorage取出user字符串
      let user = window.localStorage.getItem('user')
      user = JSON.parse(user)
      
      // 判断是否登录过
      if(user) {
        state.loginFlag = true
      }
    }
  },
  actions: {

  }
})
