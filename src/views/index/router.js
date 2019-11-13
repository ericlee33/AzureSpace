import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/weblist'
    },
    {
      path: '/weblist',
      name: 'weblist',
      component: () => import('./WebList.vue')
    },
    {
      path: '/weblist/webinfo/:id',
      name:'webinfo',
      component: () => import('./WebInfo.vue')
    },
    {
      path: '/bloglist',
      name: 'bloglist',
      component: () => import('./BlogList.vue')
    },
    {
      path: '/bloglist/bloginfo/:id',
      name:'bloginfo',
      component: () => import('./BlogInfo.vue')
    },
    {
      path: '/tools',
      name: 'tools',
      component: () => import('./Tools.vue'),
    },
    {
      path: '/messageboard',
      name: 'messageboard',
      component: () => import('./MessageBoard.vue')
    },
    {
      path: '/aboutme',
      name:'aboutme',
      component: () => import('./AboutMe.vue')
    },
    {
      path: '/essaylist',
      name:'essaylist',
      component: () => import('./EssayList.vue')
    },
    {
      path: '/essalist/essayinfo/:id',
      name:'essayinfo',
      component: () => import('./EssayInfo.vue')
    }
  ],
  linkActiveClass: 'nav-active',
  // 每次切换路由页面位置
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 400 }
}
})
