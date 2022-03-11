import Vue from 'vue'
import VueRouter from 'vue-router'
import MacStudio from '@/views/MacStudio'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MacStudio',
    component: MacStudio
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
