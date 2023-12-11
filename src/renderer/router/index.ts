import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Layout.vue'
import { App } from 'vue'
import { HomeFilled, Cloudy } from '@element-plus/icons-vue'

export const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      hidden: true
    }
  },
  {
    path: '/home',
    name: '首页',
    component: Layout,
    meta: {
      icon: HomeFilled
    },
    children: [
      {
        path: '/index',
        name: '首页',
        meta: {},
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/vast',
    component: Layout,
    name: 'Vast挖矿',
    meta: {
      icon: Cloudy
    },
    children: [
      {
        path: '/normal',
        name: '常规模式',
        meta: {},
        component: () => import('@/views/vast/Normal.vue')
      },
      {
        path: '/super',
        name: '超级模式',
        meta: {},
        component: () => import('@/views/vast/Super.vue')
      }
    ]
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: routes as RouteRecordRaw[]
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
