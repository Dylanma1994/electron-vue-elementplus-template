import type { App } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const store = createPinia()

store.use(
  createPersistedState({
    auto: true
  })
)

export const setupStore = (app: App<Element>) => {
  app.use(store)
}

export { store }
