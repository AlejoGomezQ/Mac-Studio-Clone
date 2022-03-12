import Vue from 'vue'
import VueRouter from 'vue-router'
import MacStudio from '@/views/MacStudio'
import Redirect from '@/views/Redirect'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MacStudio',
    component: MacStudio
  },
  {
    path: '/redirect',
    name:'Redirect',
    component: Redirect
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
