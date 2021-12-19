import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Profile from './components/Profile.vue'
import Home from './components/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/zumba',
    name: 'zumba',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/Zumba.vue')
  }, 

  {
    path: '/crossfit',
    name: 'crossfit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/Crossfit.vue')
  }, 

  {
    path: '/combat',
    name: 'combat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/Combat.vue')
  }, 

  {
    path: '/user/login',
    name: 'logIn',
    component: LogIn,
    meta: { requiresAuth: false, reverseAuth: true }
  },
  {
    path: '/user/signup',
    name: 'signUp',
    component: SignUp,
    meta: { requiresAuth: false, reverseAuth: true }
  },
  {
    path: '/user/profile',
    name: 'profile',
    component: Profile,
    meta: { requiresAuth: true, reverseAuth: false }
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
