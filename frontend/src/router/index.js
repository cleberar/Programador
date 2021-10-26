import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/homeView/Home.vue'
import NewUser from '../views/newUserView/NewUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Page',
    component: Home
  },
  {
    path: '/newuser',
    name: 'NewUser',
    component: NewUser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
