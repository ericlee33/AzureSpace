import Vue from 'vue'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios

// 引入normalize.css
import './assets/css/normalize.css'
import './assets/css/mySettting.css'
// 引入app,router,store
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
