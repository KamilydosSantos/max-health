<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  text: string,
  route: string
}>()
</script>

<template>
  <router-link :to="route" class="flex items-center justify-center gap-4 bg-custom-yellow text-custom-black p-4 uppercase rounded-sm text-lg">
    {{text}}
    <img src="../assets/arrow.svg" alt="">
  </router-link>
</template>

<style lang="scss">

</style>