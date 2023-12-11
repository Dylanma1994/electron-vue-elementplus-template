<script setup lang="ts">
import { useAppStore } from '@/store/modules/app'
import { useRouter } from 'vue-router'
import { computed, PropType, unref } from 'vue'
import router from '@/router'
import { isUrl } from '@/utils/is'

const props = defineProps({
  menuSelect: {
    type: Function as PropType<(index: string) => void>,
    default: undefined
  }
})

const appStore = useAppStore()

const { push, currentRoute } = useRouter()

// 写死
const menuMode = 'vertical'

const collapse = computed(() => appStore.getCollapse )

// 当前菜单
const activeMenu = computed(() => {
  const { meta, path } = unref(currentRoute)
  if (meta.activeMenu) {
    return meta.activeMenu as string
  }
  return path
})

const menuSelect = (index: string) => {
  console.log('change menu' + index)
  if (props.menuSelect) {
    props.menuSelect(index)
  }
  if (isUrl(index)) {
    window.open(index)
  } else {
    push(index)
  }
}

const routes = router.getRoutes()

</script>

<template>
  <el-menu
    :default-active="activeMenu"
    :mode="menuMode"
    :collapse="collapse"
    :uniqueOpened=true
    :onSelect="menuSelect"
    background-color="var(--left-menu-bg-color)"
    text-color="var(--left-menu-text-color)"
    active-text-color="var(--left-menu-text-active-color)"
  >


  </el-menu>
</template>

<style scoped lang="less">

</style>
