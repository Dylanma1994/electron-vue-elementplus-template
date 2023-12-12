<script setup lang="ts">
import { useAppStore } from '@/store/modules/app'
import { computed, unref } from 'vue'
import { propTypes } from '@/utils/propTypes'

defineProps({
  color: propTypes.string.def('')
})

const appStore = useAppStore()

const collapse = computed(() => appStore.getCollapse)

const toggleCollapse = () => {
  const collapsed = unref(collapse)
  appStore.setCollapse(!collapsed)
}
</script>

<template>
  <div @click="toggleCollapse">
    <Icon
      :size="18"
      :icon="collapse ? 'ant-design:menu-unfold-outlined' : 'ant-design:menu-fold-outlined'"
      :color="color"
      class="cursor-pointer"
    />
  </div>
</template>

<style scoped lang="less">

</style>
