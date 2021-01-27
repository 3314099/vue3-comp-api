import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Landing.vue'),
    meta: {
      layout: 'landing-layout'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'user-layout',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue'),
    meta: {
      layout: 'user-layout',
      auth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requireauth = to.meta.auth
  if (requireauth && store.getters['auth/isAuthenticated']) {
    next()
  } else if (requireauth && !store.getters['auth/isAuthenticated']) {
    next('/main?message=auth')
  } else {
    next()
  }
})

export default router
