<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@/hooks/useDesign'
import { useUserStore } from '@/store/modules/user'
import AuthorDialog from '@/components/UserInfo/src/components/AuthorDialog.vue'
import { useI18n } from '@/hooks/useI18n'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('user-info')

const userStore = useUserStore()

const dialogVisible = ref<boolean>(false)

const { t } = useI18n()

const showDialog = () => {
  dialogVisible.value = true
}

const toDocument = () => {
  window.open('https://github.com/Dylanma1994/electron-vue-elementplus-template')
}
</script>

<template>
  <ElDropdown class="custom-hover" :class="prefixCls" trigger="click">
    <div class="flex items-center">
      <img
        src="@/assets/imgs/avatar.jpg"
        class="w-[calc(var(--logo-height)-25px)] rounded-[50%]"
      />
      <span class="<lg:hidden text-14px pl-[5px] text-[var(--top-header-text-color)]">{{
          userStore.getUserInfo?.username
        }}</span>
    </div>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem>
          <div @click="showDialog">{{ t('author.title') }}</div>
        </ElDropdownItem>
        <ElDropdownItem divided>
          <div @click="toDocument">{{ t('common.document') }}</div>
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
  <AuthorDialog v-if="dialogVisible" v-model="dialogVisible"/>
</template>

<style scoped lang="less">

</style>
