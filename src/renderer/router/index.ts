import { createRouter, createWebHashHistory } from "vue-router"
import { Layout } from '@/layout'


export const routers = [
  {
    path: '/',
    component: Layout,
    redirect: '/home'
  },
  {
    path: '/home',
    name: '首页',
    icon: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/vast',
    name: 'Vast挖矿',
    icon: 'Cloud',
    children: [
      {
        path: '/normal',
        name: '常规模式',
        component: () => import('@/views/vast/normal')
      },
      {
        path: '/super',
        name: '超级模式',
        component: () => import('@/views/vast/super')
      }
    ]
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: routers
})


export default router
