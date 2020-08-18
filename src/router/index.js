import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Daicho from '../views/Daicho.vue'
import Kensa from '../views/Kensa.vue'
import Navi from '../views/Navi.vue'
import Tmp from '../views/Tmp.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/daicho',
    name: 'Daicho',
    component: Daicho
  },
  {
    path: '/kensa',
    name: 'Kensa',
    component: Kensa
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/navi',
    name: 'Vavi',
    component: Navi
  },
  {
    path: '/tmp',
    name: 'Tmp',
    component: Tmp
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
