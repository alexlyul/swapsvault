<script setup lang="ts">
import type {IPasswordPublic} from "@/modules/passwords";

const props = defineProps<{
  items: IPasswordPublic[]
}>();
</script>

<template>
  <div class="test">
    <el-table
      :data="props.items"
      size="default"
    >
      <el-table-column
        prop="url"
        width="40"
      >
        <template #default="scope">
          <div class="flex size-6 flex-none items-center justify-center rounded-lg">
            <div class="size-4 text-gray-600">
              <img
                v-if="scope.row.url"
                :src="scope.row.url + '/favicon.ico'"
              >
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="url"
        width="200"
      />
      <el-table-column
        prop="name"
        width="200"
      />
      <el-table-column prop="username" />
    </el-table>
  </div>
</template>