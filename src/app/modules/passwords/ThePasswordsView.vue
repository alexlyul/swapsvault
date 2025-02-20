<script setup lang="ts">
import LayoutDefaultPage from "@/app/layouts/LayoutDefaultPage.vue";
import ListFilter from "./components/ListFilter.vue";
import List from "./components/List.vue";
import {onMounted, ref} from "vue";
import type {IPasswordPublic} from "./types/IPassword.ts";
import {getPasswords} from "@/app/modules/passwords/services/PasswordsService.ts";
import {DocumentAdd, Download, More} from "@element-plus/icons-vue";

const passwords = ref<IPasswordPublic[]>([]);

function onFiltersChange(filters: unknown) {
  console.log(filters)
}

onMounted(() => {
  getPasswords()
      .then((data) => {
        passwords.value = data;
      });
})
</script>

<template>
  <LayoutDefaultPage>
    <template #header>
      <h1 class="text-2xl text-slate-800 flex items-center justify-between">
        <span>Passwords</span>
        <span class="inline-flex">
          <ElButton :icon="DocumentAdd" type="primary" size="small">Add new entry</ElButton>

          <el-popover trigger="click" placement="bottom" width="180">
            <template #reference>
              <ElButton :icon="More" type="default" size="small"/>
            </template>
            <div>
              <el-button-group size="small">
                <ElButton :icon="Download" size="small">Export</ElButton>
                <ElButton :icon="Download" size="small">Import</ElButton>
              </el-button-group>
            </div>
          </el-popover>
        </span>

      </h1>
      <h2 class="text-sm text-slate-800">
        Create, save, and manage your passwords so you can easily sign in to sites and
        apps.</h2>
      <ListFilter
          @change="onFiltersChange"
      />
    </template>
    <template #default>
      <List :items="passwords"/>
    </template>
    <template #footer>
    </template>
  </LayoutDefaultPage>

</template>

<style scoped lang="scss">

</style>