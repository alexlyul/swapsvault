<script setup lang="ts">
import {Search} from '@element-plus/icons-vue'

</script>

<template>
  <el-form
      :inline="true"
      label-position="right"
      class="flex flex-row flex-wrap gap-10 py-5"
      size="large"
  >
    <el-form-item class="!m-0 !p-0 flex-1">
      <el-input
          placeholder="Type in to search..."
          clearable
          size="large"
          :prefix-icon="Search"
      />
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss">

</style>