import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import fetchSubmissionData from '@/helpers'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: async (to, from, next) => {
      const apiRes = await fetchSubmissionData()

      if (apiRes.status === 412 && apiRes.debug !== true) {
        if (apiRes.message === 'Coming Soon.') return next({ name: 'Coming Soon' })
        return next({ name: 'Closed' })
      }
      return next()
    },
  },
  {
    path: '/soon',
    name: 'Coming Soon',
    component: () => import(/* webpackChunkName: "about" */ '../views/Soon.vue'),
    beforeEnter: async (to, from, next) => {
      const apiRes = await fetchSubmissionData()

      if (apiRes.status !== 412 && apiRes.debug !== true) {
        return next({ name: 'Home' })
      }
      return next()
    },
  },
  {
    path: '/thankyou',
    name: 'Thank You',
    component: () => import(/* webpackChunkName: "about" */ '../views/ThankYou.vue'),
  },
  {
    path: '/closed',
    name: 'Closed',
    component: () => import(/* webpackChunkName: "about" */ '../views/Closed.vue'),
    beforeEnter: async (to, from, next) => {
      const apiRes = await fetchSubmissionData()
      if (apiRes.status !== 412 && apiRes.debug !== true) {
        return next({ name: 'Home' })
      }
      return next()
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
