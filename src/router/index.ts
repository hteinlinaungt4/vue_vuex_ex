import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/test/TestView.vue'
import DemoView from '../views/test/DemoView.vue'
import AllListView from '../views/ToDoList/AllListView.vue'
import EachListView from '../views/ToDoList/EachListView.vue'

const routes: Array<RouteRecordRaw> = [
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
    path : '/test/:name/:age',
    name : 'test',
    component : TestView
  },
  {
    path : '/demo',
    name : 'demo',
    component:DemoView 
  },
  {
    path : '/alllist',
    name : 'alllist',
    component : AllListView
  },
  {
    path : '/eachist',
    name : 'eachlist',
    component : EachListView
  },
  {
    path : '/middlewarelogin',
    name : 'middlewarelogin',
    component : ()=> import('../views/middleware/MiddlewareLoginView.vue'),
  },
  {
    path : '/middlewarehome',
    name : 'middlewarehome',
    component : ()=> import('../views/middleware/MiddlewareHomeView.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('useritem') == "true") {
        next();
      }else{
        next('/middlewarelogin')
      }
    }
  },
  {
    path : '/:pathMatch(.*)*',
    component : HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
