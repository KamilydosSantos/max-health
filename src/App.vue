<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div class="font-poppins">
    <NavBar />
    <RouterView/>
  </div>
</template>

<style scoped>
</style>
