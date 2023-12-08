<script setup lang="ts">
import { ConfigGlobal } from '@/components/ConfigGlobal'
</script>

<template>
  <ConfigGlobal>
    <RouterView />
  </ConfigGlobal>
</template>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}

html,body {
  padding: 0 !important;
  margin: 0;
  overflow: hidden;
  .size;

  #app {
    .size
  }
}
</style>
