import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnocssVitePlugin from "unocss/vite"

const root: string = process.cwd()
function pathResolve(dir: string): string {
  return resolve(root, dir)
}

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "./src/renderer/styles/variables.module.less";',
          javascriptEnabled: true
        }
      }
    },
    resolve: {
      alias: [
        {
          find: /\@\//,
          replacement: `${pathResolve('src/renderer')}/`
        }
      ]
    },
    plugins: [vue(), UnocssVitePlugin(), VueJsx()]
  }
})
