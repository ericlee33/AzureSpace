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
      component: () => import('./BlogList.vue')
    },
    {
      path: '/newslist',
      name: 'newslist',
      component: () => import('./NewsList.vue'),
    },
    {
      path: '/messageboard',
      name: 'messageboard',
      component: () => import('./MessageBoard.vue')
    },
    {
      path: '/register',
      name:'reg',
      component: () => import('../../components/subcomponents/register.vue')
    },
    {
      path: '/aboutme',
      name:'aboutme',
      component: () => import('./AboutMe.vue')
    },
    {
      path: '/bloglist/bloginfo/:id',
      name:'bloginfo',
      component: () => import('./BlogInfo.vue')
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
