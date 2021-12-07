import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home/index.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "list" */ '@/views/List.vue')
  },
  {
    path: '/shoppingBag',
    name: 'ShopppingBag',
    component: () =>
      import(/* webpackChunkName: "shoppingBag" */ '@/views/ShoppingBag.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "mine" */ '@/views/Mine.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
