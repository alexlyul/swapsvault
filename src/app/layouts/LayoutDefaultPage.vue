<script setup lang="ts">
const date = new Date().getFullYear();
</script>

<template>
  <div class="layout--default overflow-auto">
    <div class="layout--default__header px-20 py-4 bg-gray-100">
      <div class="layout-row">
        <slot name="header" />
      </div>
    </div>
    <div class="layout--default__content overflow-auto flex-1 px-20 py-10">
      <div class="layout-row">
        <slot />
      </div>
    </div>
    <div class="layout--default__footer px-20 bg-gray-100 py-4">
      <div class="layout-row">
        <slot name="footer" />
        <p class="text-xs text-slate-600 text-center">
          Copyright © {{ date }} Password Manager
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout--default {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  & > * {
    width: 100%;
  }

  .layout-row {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>