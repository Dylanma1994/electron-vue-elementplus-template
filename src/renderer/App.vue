<script setup lang="ts">
import { ConfigGlobal } from '@/components/ConfigGlobal'
import { useStorage } from '@/hooks/useStorage'
import { useAppStore } from '@/store/modules/app'


const appStore = useAppStore()

const { getStorage } = useStorage()

const setDefaultTheme = () => {
  if (getStorage('isDark') !== null) {
    appStore.setIsDark(getStorage('isDark'))
    return
  }
  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  appStore.setIsDark(isDarkTheme)
}
setDefaultTheme()
</script>

<template>
  <ConfigGlobal>
    <RouterView/>
  </ConfigGlobal>
</template>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}

html, body {
  padding: 0 !important;
  margin: 0;
  overflow: hidden;
  .size;

  #app {
    .size
  }
}
</style>
