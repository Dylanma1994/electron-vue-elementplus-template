// uno css
import '@/styles/unocss'

// router
import { setupRouter } from './router'

// element-plus
import { setupElementPlus } from '@/plugins/elementPlus'
import 'element-plus/dist/index.css'

// store
import { setupStore } from '@/store'

import { setupGlobCom } from '@/components'

// global style
import '@/styles/index.less'

// i18n
import { setupI18n } from '@/plugins/vueI18n'

import { createApp } from 'vue'
import App from './App.vue'

const setupAll = async () => {
  const app = createApp(App)

  setupStore(app)

  await setupI18n(app)

  setupGlobCom(app)

  setupElementPlus(app)

  setupRouter(app)

  app.mount('#app')
}

setupAll()
