
declare global {

  declare type Nullable<T> = T | null
  declare interface Fn<T = any> {
    (...arg: T[]): T
  }

  declare type Recordable<T = any, K = string> = Record<K extends null | undefined ? string : K, T>

  declare type LocaleType = 'zh-CN' | 'en'

  declare type LayoutType = 'classic' | 'topLeft' | 'top' | 'cutMenu'
}
