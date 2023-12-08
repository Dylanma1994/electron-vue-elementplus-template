<script setup lang="ts">
import {
  Menu as IconMenu,
  HomeFilled as IconHome
} from '@element-plus/icons-vue'
import routers from '@/router'

console.log(routers)

</script>

<template>
  <div class="h-[100%]">
    <el-container class="h-full">
      <el-aside width="auto">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          :collapse="true"
        >
          <el-menu-item index="1">
            <el-icon><icon-home /></el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">

</style>
