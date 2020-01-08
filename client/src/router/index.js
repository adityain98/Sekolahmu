import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Feature from '../views/Feature.vue'
import Program from '../views/Program.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:feature',
    name: 'feature',
    component: Feature
  },
  {
    path: '/programs/:id',
    name: 'program',
    component: Program
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
