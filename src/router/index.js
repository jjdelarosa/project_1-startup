import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Public from '../views/Public.vue'
import Private from '../views/Private.vue'
import Create from '../views/Create.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/news feed',
    name: 'Public',
    component: Public
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/profile',
    name: 'Private',
    component: Private,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.getUser) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
