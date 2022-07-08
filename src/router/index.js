import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Buscador from '@/views/Buscador.vue'
import Peleadores from '@/views/Peleadores.vue'
import InfoPeleador from '@/views/InfoPeleador.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/buscador',
    name: 'buscador',
    component: Buscador,
  },
  {
    path: '/peleadores',
    name: 'peleadores',
    component: Peleadores
  },
  {
    path: '/peleadores/:id',
    component: InfoPeleador,
    name: 'peleador'
  },
  {
    path: '/*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
