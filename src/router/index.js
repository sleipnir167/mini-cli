import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Daicho from '../views/Daicho.vue'
import Kensa from '../views/Kensa.vue'
import Master from '../views/Master.vue'
import Navi from '../views/Navi.vue'
import Graph from '../views/Graph.vue'
import Tmp from '../views/Tmp.vue'
import About from '../views/About.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Json1 from '../views/Json1.vue'

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
    path: '/master',
    name: 'Master',
    component: Master
  },
  {
    path: '/navi',
    name: 'Vavi',
    component: Navi,
    // ここにname要素を指定するとエラーになる
    children: [
      {
        path: '/childA', 
        component: Kensa,
        name: 'childA'
      },
      {
        path: '/childB', 
        component: About,
        name: 'childB',
        meta: {
          requiresAuth: 'true'
        }
      },
      {
        path: '/childC', 
        component: Kensa,
        name: 'childC',
        meta: {
          requiresAuth: 'true'
        }
      }
    ]
  },
  {
    path: '/Graph',
    name: 'Graph',
    component: Graph
  },
  {
    path: '/tmp',
    name: 'Tmp',
    component: Tmp
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/Json1',
    name: 'Json1',
    component: Json1
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

