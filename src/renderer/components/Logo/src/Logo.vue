<script setup lang="ts">

import { useAppStore } from '@/store/modules/app'
import { computed } from 'vue'

const appStore = useAppStore()

const title = computed(() => appStore.getTitle)

const collapse = computed(() => appStore.getCollapse)
</script>

<template>
  <div>
    <router-link
      :class="[
        'flex !h-[var(--logo-height)] items-center cursor-pointer pl-8px relative decoration-none overflow-hidden'
      ]"
      to="/">
      <img
        src="@/assets/imgs/logo.png"
        class="w-[calc(var(--logo-height)-10px)] h-[calc(var(--logo-height)-10px)]"
      />
      <div
        v-if="!collapse"
        :class="[
          'ml-10px text-16px font-700',
          'text-[var(--logo-title-text-color)]'
        ]">
        {{ title }}
      </div>
    </router-link>
  </div>
</template>

<style scoped lang="less">

</style>
