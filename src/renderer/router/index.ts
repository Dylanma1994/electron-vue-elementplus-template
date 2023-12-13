import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Layout.vue'
import { App } from 'vue'
import { useI18n } from '@/hooks/useI18n'

const { t } = useI18n()

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
    meta: {
      title: 'Dashboard',
      icon: 'ant-design:home-outlined'
    },
    children: [
      {
        path: 'index',
        name: t('router.menu'),
        meta: {
          title: t('router.menu'),
          icon: 'ant-design:home-outlined'
        },
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/menu1',
    component: Layout,
    name: t('router.menu1'),
    meta: {
      title: t('router.menu1'),
      icon: 'ant-design:cloud-server-outlined'
    },
    children: [
      {
        path: 'menu11',
        name: t('router.menu11'),
        meta: {
          title: t('router.menu11')
        },
        component: () => import('@/views/menu1/Menu11.vue')
      },
      {
        path: 'menu12',
        name: t('router.menu12'),
        meta: {
          title: t('router.menu12')
        },
        component: () => import('@/views/menu1/Menu12.vue')
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
