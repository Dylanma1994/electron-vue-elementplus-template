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
  console.log('this is ssssssssssssssssssssssssssssssss')
  app.use(store)
}

export { store }
