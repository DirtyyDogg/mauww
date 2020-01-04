import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import HomeComponent from '../components/HomeComponent.vue'
import CreateComponent from '../views/CreateComponent.vue'
import IndexComponent from '../components/IndexComponent.vue'
import EditComponent from '../components/EditComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    name: 'homev2',
    component:HomeComponent
  },
  {
    path: '/create',
    name: 'create',
    component: CreateComponent
  },
  {
    path: '/posts',
    name: 'posts',
    component:IndexComponent
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component:EditComponent
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
