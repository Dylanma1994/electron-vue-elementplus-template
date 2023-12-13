/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 用于环境变量的IDE提示
// https://vitejs.cn/vite3-cn/guide/env-and-mode.html#env-files
interface ImportMetaEnv {
  readonly RENDERER_VITE_APP_TITLE: string
  readonly RENDERER_VITE_API_BASE_PATH: string
  readonly VITE_BASE_PATH: string
  readonly VITE_DROP_DEBUGGER: string
  readonly VITE_DROP_CONSOLE: string
  readonly VITE_SOURCEMAP: string
  readonly VITE_OUT_DIR: string
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}
