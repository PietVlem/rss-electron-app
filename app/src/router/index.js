import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Overview',
    component: () => import('@/views/Overview.vue')
  },
  {
    path: '/vrt',
    name: 'vrt',
    component: () => import('@/views/Vrt.vue')
  },
  {
    path: '/verge',
    name: 'verge',
    component: () => import('@/views/Verge.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
