<template>
  <header class="bg-custom-black">
    <div class="flex flex-col gap-4 lg:mx-auto max-w-screen-lg w-full">
      <div class="m-8 lg:mx-0">
        <h1 class="text-xl text-white lg:text-2xl font-bold">{{title}}</h1>
        <p class="text-sm uppercase text-custom-dark-gray">{{ subtitle }}</p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  subtitle: string
}>()
</script>

<style scoped>
</style>