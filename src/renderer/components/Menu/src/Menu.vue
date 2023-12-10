<script setup lang="ts">
import { useAppStore } from '@/store/modules/app'
import { useRouter } from 'vue-router'
import { computed, PropType, unref } from "vue"
import { routes } from '@/router'
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

</script>

<template>
  <el-menu
    :default-active="activeMenu"
    :mode="menuMode"
    :collapse="collapse"
    :uniqueOpened=true
    :onSelect="menuSelect"
  >
    <template v-for="route in routes">
      <template v-if="!route.meta.hidden">
        <template v-if="route.children">
          <el-sub-menu :index="route.path" :key="route.path">
            <template #title>
              <el-icon v-if="route.meta.icon">
                <component :is="route.meta.icon"/>
              </el-icon>
              <span>{{ route.name }}</span>
            </template>
            <el-menu-item v-for="child in route.children" :index="child.path" :key="child.path">
              <router-link :to="child.path">{{ child.name }}</router-link>
            </el-menu-item>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item v-if="!route.meta.hidden" :index="route.path" :key="route.path">
            <i :class="`el-icon-${route.meta.icon}`"></i>
            <span>{{ route.name }}</span>
            <router-link :to="route.path"></router-link>
          </el-menu-item>
        </template>
      </template>
    </template>

  </el-menu>
</template>

<style scoped lang="less">

</style>
