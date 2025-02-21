<script setup lang="ts">
import type {IPasswordPublic} from "@/app/modules/passwords";

const props = defineProps<{
  item: IPasswordPublic
}>()
</script>

<template>
<div class="group relative flex items-center gap-x-3 rounded-lg p-2 text-sm/6 bg-gray-50 hover:bg-white drop-shadow-md">
  <div class="flex size-6 flex-none items-center justify-center rounded-lg">
    <div class="size-6 text-gray-600">
      <img v-if="props.item.url" :src="props.item.url + '/favicon.ico'" alt="favicon" />
    </div>
  </div>
  <div>
    <div class="flex-auto">
      <a href="#" class="block font-semibold text-gray-900">
        {{ props.item.name }}
      </a>
      <p class="mt-0.5 text-gray-600">{{ props.item.username }} Get a better understanding of your traffic</p>
    </div>
  </div>

</div>
</template>

<style scoped lang="scss">

</style>