
declare global {

  declare type Nullable<T> = T | null
  declare interface Fn<T = any> {
    (...arg: T[]): T
  }

  declare type Recordable<T = any, K = string> = Record<K extends null | undefined ? string : K, T>

  declare type LocaleType = 'zh-CN' | 'en'

  declare type LayoutType = 'classic' | 'topLeft' | 'top' | 'cutMenu'

  declare type ComponentRef<T> = InstanceType<T>

  declare interface AxiosConfig {
    params?: any
    data?: any
    url?: string
    method?: AxiosMethod
    headers?: AxiosRequestHeaders
    responseType?: AxiosResponseType
  }

  declare interface IResponse<T = any> {
    code: number
    data: T extends any ? T : T & any
  }

}
