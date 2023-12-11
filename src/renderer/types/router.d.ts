import { RouteRecordRaw } from 'vue-router'
import { defineComponent } from 'vue'

interface RouteMetaCustom extends Record<String | number | symbol, unknown> {
  hidden?: boolean,
  title?: string,
  icon?: string,
  activeMenu?: boolean
}

type Component<T = ant> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)

declare global {
  declare interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta' | 'children'> {
    name?: string,
    meta: RouteMetaCustom,
    component?: Component | string,
    children?: AppRouteRecordRaw[]
  }
}
