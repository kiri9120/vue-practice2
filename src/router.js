import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/business',
      name: 'business',
      component: () => import('./views/Business.vue')
    },
    {
      path: '/safety',
      name: 'safety',
      component: () => import('./views/Safety.vue')
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('./views/Company.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/Blog.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: () => import('./views/Recruit.vue')
    }
  ]
})
