<script setup lang="ts">
import {computed, ref} from "vue";
import Layout from "./layout/Layout.vue";
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import en from 'element-plus/dist/locale/en.mjs';

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
</script>

<template>
  <el-config-provider :locale="locale">
    <Layout />
  </el-config-provider>
</template>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}

html,body {
  padding: 0 !important;
  margin: 0;
  overflow: hidden;
  .size;

  #app {
    .size
  }
}
</style>
