import { createApp } from 'vue'
import App from './App.vue'

// uno css
import '@/styles/unocss'

// router
import router from './router'

// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
  .use(ElementPlus)
  .use(router)
  .mount('#app')
