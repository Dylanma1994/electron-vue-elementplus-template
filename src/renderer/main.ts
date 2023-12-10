// uno css
import '@/styles/unocss'

// router
import { setupRouter } from './router'

// element-plus
import { setupElementPlus } from '@/plugins/elementPlus'
import 'element-plus/dist/index.css'

// store
import { setupStore } from '@/store'

// global style
import '@/styles/index.less'

// i18n
import { setupI18n } from '@/plugins/vueI18n'

import { createApp } from 'vue'
import App from './App.vue'

const setupAll = async () => {
  const app = createApp(App)

  await setupI18n(app)

  setupStore(app)

  setupElementPlus(app)

  setupRouter(app)

  app.mount('#app')
}

setupAll()
