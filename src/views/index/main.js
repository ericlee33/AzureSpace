import Vue from 'vue'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 过滤文字.当大于规定值时,后面的显示为省略号
Vue.filter('ellipsis',function(value){
  if (!value) return "";
  if (value.length > 30) {
    return value.slice(0, 100) + "...";
  }
  return value;
})

// 引入轮播图组件vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios

// 引入normalize.css
import '../../assets/css/normalize.css'
import '../../assets/css/mySettting.css'
import '../../assets/css/animate.css'


// 引入app,router,store
import App from './App.vue'
import router from './router'
import store from './store'


// router.beforeEach((to, from, next) => {
//   // //我在这里模仿了一个获取用户信息的方法
//   // let isLogin = window.sessionStorage.getItem('userInfo');
//   //   if (isLogin) {
//   //     //如果用户信息存在则往下执行。
//   //     next()
//   //   } else {
//   //     //如果用户token不存在则跳转到login页面
//   //   if (to.path === '/login') {
//   //     next()
//   //   } else {
//   //     next('/login')
//   //   }
//   // } 
// })



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
