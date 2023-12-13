<script setup lang="ts">
import { LocaleDropdown } from '@/components/LocaleDropdown'
import { Collapse } from '@/components/Collapse'
import { useDesign } from '@/hooks/useDesign'
import { UserInfo } from '@/components/UserInfo'

const { getPrefixCls, variables } = useDesign()

const prefixCls = getPrefixCls('tool-header')

</script>

<template>
  <div
    id="`${variables.namespace}-tool-header`"
    :class="[
      prefixCls,
      'h-[var(--top-tool-height)] relative px-[var(--top-tool-p-x)] flex items-center justify-between',
      'dark:bg-[var(--el-bg-color)]'
    ]"
  >
    <div class="h-full flex items-center">
      <Collapse class="custom-hover" color="var(--top-header-text-color)"></Collapse>
    </div>
    <div class="h-full flex items-center">
      <LocaleDropdown
        class="custom-hover"
        color="var(--top-header-text-color)"
      ></LocaleDropdown>
      <UserInfo></UserInfo>
    </div>
  </div>
</template>

<style scoped lang="less">
@prefix-cls: ~'@{namespace}-tool-header';

.@{prefix-cls} {
  transition: left var(--transition-time-02);
}
</style>
