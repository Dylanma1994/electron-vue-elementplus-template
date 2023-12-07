import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import UnocssVitePlugin from "unocss/vite"

const root: string = process.cwd()
function pathResolve(dir: string): string {
  return resolve(root, dir, 'renderer')
}

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: [
        {
          find: /\@\//,
          replacement: `${pathResolve('src')}/`
        }
      ]
    },
    plugins: [vue(), UnocssVitePlugin()]
  }
})
