import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import axios from 'axios'

import Home from '../views/Home.vue'

interface ApiResponse {
  status?: number
  message?: string
  courses?: Array<Course>
  positions?: Array<Position>
}

interface Course {
  id: number
  school: string
  code: string
  course: string
}

interface Position {
  id: number
  section: string
  position: string
  hiring: boolean
}

let apiRes: ApiResponse = {}
const fetchSite = async () => {
  await axios
    .post(process.env.VUE_APP_API_URL, {
      type: process.env.VUE_APP_API_TYPE,
      theme: process.env.VUE_APP_API_THEME,
    })
    .then((data) => {
      apiRes = data
    })
    .catch((err) => {
      apiRes = err.response.data
    })
}

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: async (to, from, next) => {
      await fetchSite()

      if (apiRes.status === 412) {
        if (apiRes.message === 'Coming Soon.') return next({ name: 'Coming Soon' })
        return next({ name: 'Closed' })
      }
      return next()
    },
    props: {
      default: true,
      courses: apiRes.courses,
      positions: apiRes.positions,
    },
  },
  {
    path: '/soon',
    name: 'Coming Soon',
    component: () => import(/* webpackChunkName: "about" */ '../views/Soon.vue'),
    beforeEnter: async (to, from, next) => {
      await fetchSite()

      if (apiRes.status !== 412) {
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
      await fetchSite()

      if (apiRes.status !== 412) {
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
