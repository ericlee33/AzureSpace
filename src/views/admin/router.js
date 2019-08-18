import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./AdminHello.vue')
    },
    {
      path: '/adminwebarticle',
      name: 'adminwebarticle',
      component: () => import('./AdminWebArticle.vue')
    },
    {
      path: '/addwebarticle',
      name: 'addwebarticle',
      component: () => import('./AddWebAtricle.vue')
    },
    {
      path: '/editwebarticle',
      name: 'editwebarticle',
      component: () => import('./EditWebArticle.vue')
    },
    {
      path: '/accountpermission',
      name: 'accountpermission',
      component: () => import('./AccountPermission.vue')
    }
  ]
})
