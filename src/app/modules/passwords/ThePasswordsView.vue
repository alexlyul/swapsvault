<script setup lang="ts">
import LayoutDefaultPage from "@/layouts/LayoutDefaultPage.vue";
import ListFilter from "./components/ListFilter.vue";
import ListTable from "./components/ListTable.vue";
import {onMounted, ref} from "vue";
import type {IPasswordPublic} from "./types/IPassword.ts";
import {getPasswords} from "@/modules/passwords/services/PasswordsService.ts";
import {DocumentAdd, Download, More} from "@element-plus/icons-vue";

const passwords = ref<IPasswordPublic[]>([]);
 
function onFiltersChange(filters: unknown): void {
  console.log(filters);
}

onMounted(async () => {
  return getPasswords()
      .then((data) => {
        passwords.value = data;
      });
}); 
</script>

<template>
  <layout-default-page>
    <template #header>
      <h1 class="text-2xl text-slate-800 flex items-center justify-between">
        <span>Passwords</span>
        <span class="inline-flex">
          <el-button
            :icon="DocumentAdd"
            type="primary"
            size="small"
          >Add new entry</el-button>

          <el-popover
            trigger="click"
            placement="bottom"
            width="180"
          >
            <template #reference>
              <el-button
                :icon="More"
                type="default"
                size="small"
              /> 
            </template>
            <div> 
              <el-button-group size="small">
                <el-button
                  :icon="Download"
                  size="small"
                >Export</el-button>
                <el-button
                  :icon="Download"
                  size="small"
                >Import</el-button>
              </el-button-group>
            </div>
          </el-popover>
        </span>
      </h1>
      <h2 class="text-sm text-slate-800">
        Create, save, and manage your passwords so you can easily sign in to sites and
        apps.
      </h2>
      <list-filter 
        @change="onFiltersChange"
      />
    </template>
    <template #default>
      <list-table :items="passwords" />
    </template>
    <template #footer />
  </layout-default-page>
</template>

<style scoped lang="scss">

</style>