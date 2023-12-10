<script setup lang="ts">
import { useRenderLayout } from './components/useRenderLayout'

const { renderClassic } = useRenderLayout()
</script>

<template>
  <section class="w-[100%] h-[100%] relative">
    {{ renderClassic() }}
  </section>
</template>

<style scoped lang="less">
</style>
