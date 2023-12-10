<script setup lang="ts">
import { useLocaleStore } from '@/store/modules/locale'
import { computed } from 'vue'

const localeStore = useLocaleStore()

const currentLocale = computed(() => localeStore.currentLocale)
</script>

<template>
  <el-config-provider
    :locale="currentLocale.elLocale">
    <slot></slot>
  </el-config-provider>
</template>

<style scoped lang="less">

</style>
