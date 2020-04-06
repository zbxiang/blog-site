import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/blog'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'blog',
    component: Index,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'list',
        component: () => import('@/views/blog/list')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('@/views/blog/detail')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
