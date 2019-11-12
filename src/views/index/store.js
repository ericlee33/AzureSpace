import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$axios = axios
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 监听登录状态
    loginFlag: false,
    // 监听是否有新的comment出现
    commentFlag: false,
    articleLength: 0
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
    },
    changeBlogLength(state, obj){
      state.articleLength = obj.blogslength
    }
  },
  actions: {
    getBlogLength(context){
      axios.post('/api/bloglength')
        .then(res => {
          if(res.data.err_code === 0){
              // this.total = res.data.blogslength
              context.commit('changeBlogLength', res.data)
              // 计算有多少页
              // this.count = Math.ceil(res.data.blogslength / this.size)
            }
        })
    }
  }
})
