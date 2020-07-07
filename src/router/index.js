import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../components/login/pageLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/backLogin',
    name:'back-login',
    component:()=>import('../views/backPage.vue')
  }
]

const router = new VueRouter({
  //history
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
