import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/bloglist'
    },
    {
      path: '/bloglist',
      name: 'bloglist',
      component: () => import('./views/BlogList.vue')
    },
    {
      path: '/newslist',
      name: 'newslist',
      component: () => import('./views/NewsList.vue'),
    },
    {
      path: '/messageboard',
      name: 'messageboard',
      component: () => import('./views/MessageBoard.vue')
    },
    {
      path: '/register',
      name:'reg',
      component: () => import('./components/register.vue')
    },
    {
      path: '/aboutme',
      name:'aboutme',
      component: () => import('./views/AboutMe.vue')
    },
    {
      path: '/bloglist/bloginfo/:id',
      name:'bloginfo',
      component: () => import('./views/BlogInfo.vue')
    }
  ],
  linkActiveClass: 'nav-active',
  // 每次切换路由页面位置
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 400 }
}
})
