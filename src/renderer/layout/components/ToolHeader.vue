<script setup lang="ts">
import { LocaleDropdown } from '@/components/LocaleDropdown'

</script>

<template>
  <div
    :class="[
      'h-[var(--top-tool-height)] relative px-[var(--top-tool-p-x)] flex items-center justify-between',
      'dark:bg-[var(--el-bg-color)]'
    ]"
  >
    <div class="h-full flex items-center">
      <LocaleDropdown
        class="custom-hover"
        color="var(--top-header-text-color)"
      ></LocaleDropdown>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
