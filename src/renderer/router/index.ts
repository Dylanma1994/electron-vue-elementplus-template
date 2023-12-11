import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Layout.vue'
import { App } from 'vue'
import { HomeFilled, Cloudy } from '@element-plus/icons-vue'

export const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    name: 'root',
    meta: {
      hidden: true
    }
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/index',
    name: '首页',
    meta: {
      title: 'Dashboard',
      icon: 'ant-design:dashboard-filled'
    },
    children: [
      {
        path: 'index',
        name: '首页',
        meta: {
          title: '首页',
          noCache: true,
          affix: true
        },
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/vast',
    component: Layout,
    name: 'Vast挖矿',
    meta: {},
    children: [
      {
        path: 'normal',
        name: '常规模式',
        meta: {
          title: '常规模式',
          icon: 'clarity:document-solid'
        },
        component: () => import('@/views/vast/Normal.vue')
      },
      {
        path: 'super',
        name: '超级模式',
        meta: {
          title: '超级模式',
          icon: 'clarity:document-solid'
        },
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
