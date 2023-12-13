<script setup lang="ts">
import { computed, ref } from 'vue'
import { useDesign } from '@/hooks/useDesign'
import { useI18n } from 'vue-i18n'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('lock-dialog')

const { t } = useI18n()

const props = defineProps({
  modelValue: {
    type: Boolean
  }
})

const emit = defineEmits(['update:modelValue'])

const dialogVisible = computed({
  get: () => props.modelValue,
  set: (val) => {
    console.log('set: ', val)
    emit('update:modelValue', val)
  }
})

const dialogTitle = ref(t('author.title'))
const dialogMessage = ref(t('author.message'))
const commonOk = ref(t('common.ok'))

const handle = () => {
  dialogVisible.value = false
}
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    width="500px"
    max-height="170px"
    :class="prefixCls"
    :title="dialogTitle"
  >
    <div class="flex flex-col items-center">
      <img src="@/assets/imgs/avatar.jpg" alt="" class="w-70px h-70px rounded-[50%]" />
      <span class="text-14px my-10px text-[var(--top-header-text-color)]">Dylan</span>
    </div>
    <span>{{ dialogMessage }}</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="handle">
          {{ commonOk }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="less">

</style>
